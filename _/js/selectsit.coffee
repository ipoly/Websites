# 在线选座
$(->

	# 区域类
	class Area
		constructor: (data,@parent)->
			# data.StageX *= 1.3
			# data.StageX -= 20 
			# data.StageY *= 1.3
			# data.StageY -= 20 
			data.StageWidth *= 15
			data.StageHeight *= 15
			@el = $("<label title='#{data.Name}' style='left:#{data.x}px;top:#{data.y}px;width:#{data.Width}px;height:#{data.Height}px;'>
						<input type='radio' name='areaID' value='#{data.ID}'/>
						</label>
						")
			if data.StageWidth
				@stage = $("<span class='stage' style='left:#{data.StageX}px;top:#{data.StageY}px;line-height:#{data.StageWidth}px;height:#{data.StageWidth}px;width:#{data.StageHeight}px;'>舞台</span>")
			@el.data(data)
			@el.on("click",@getSitMap)
			@el.data("model",@)
			@sitMap = $("<form class='sitMap' action='#{@parent.parent.el.attr('action')}' method='#{@parent.parent.el.attr('method')}'>
					<h1 class='header5'>
						#{data.Name}
						<span>
							<button class='btnBlue4'>选择其他区域</button>
							<input type='submit' class='btn btnBlue4' value='提交订单'/>
						</span>
					</h1>
					<section/>
				</form> ")
			@totalInfo = $("<div class='totalInfo'/>")
			@sitMap.append(@totalInfo)
			@sitMap.on("click","span:has(input)",@toggleSelect)
			@sitMap.on("hover","span",@toggleSitInfo)
			@sitMap.on("evalTotal",@eval)
			@sitMap.on("click",(e)->
				if $(e.target).is("button")
					$(@).detach()
					false
			)

		eval:(e)=>
			total = 0
			selectItem = $.map(@sitMap.find(":checked"),(i)-> parseInt($(i).val(),10))
			selectData = $.map(@sitData,(i)-> return i if i.ID in selectItem)
			total+=i for i in $.map(selectData,(i)-> parseInt(i.Price,10))
			result = {
				total,
				list:selectData
			}
			@totalInfo.html(juicer("
				<h1>您选中了：</h1>
				{$each list as item}
				<p class='rank_${item.Rank}'>${item.Rows}排${item.RowNumber}号</p>
				{$/each}
				<div>共计：${list.length} 项<div>
				<div>总价：<b>${total}元</b></div>
				",result))

		findData: (id)->
			id = parseInt(id,10)
			for i in @sitData
				return i if i.ID == id

		toggleSitInfo: (e)=>
			label = $(e.currentTarget)
			sitInfo = $("#sitInfo")
			if !sitInfo.length
				sitInfo = $("<section id='sitInfo'></section>")
				$("body").append(sitInfo)
			if e.type=="mouseenter"
				sitInfo.html(juicer(
					"<h1>座位：${Prefix}${Rows}排 ${RowNumber}号</h1>
					 <p>等级：${Rank} </p>
					 <p>票价：${PriceName} ${Price}</p>
					 <p>状态：{$if Sold}已售{$else}可购{$/if} </p>
					"
					,@findData(label.attr("id"))))
				sitInfo.show()
				sitInfo.css(label.offset())
			else
				sitInfo.hide()


		toggleSelect: (e)->
			if e.target == this
				that = $(@)
				that.toggleClass("selected")
				that.find("input").attr("checked",that.is(".selected"))
				that.trigger("evalTotal")

		setSitMap: (data)=>
			# data = $.map(data,(n)->
				# n.x *= 1.3
				# n.x -= 20
				# n.y *= 1.3
				# n.x -= 20
				# n
			# )
			@sitMap.find(".totalInfo").empty()
			
			sits = ("<span id='#{i.ID}' class='rank_#{i.Rank} valid_#{i.Valid} #{ if i.Sold then 'sold_lock' else''}' style='left:#{i.x}px;top:#{i.y}px;'>
				<input type='checkbox' name='sitID' value='#{i.ID}'/>
				</span> " for i,n in data).join("")

			@sitMap.find(".totalInfo").empty()
			@sitMap.css($(".tab3").offset()).find("section").empty().append(@stage).append(sits).find(".valid_1 input,.sold_lock input").remove()
			@sitData = data;
			$("body").append(@sitMap)

		getSitMap: (e)=>
			tango = $(e.target)
			if @sitMap.find("label").length
				$("body").append(@sitMap)
			else if tango.is("label")
				$[@parent.parent.el.attr("method")||"post"](@parent.parent.el.data("source"),@el.serializeArray(),@setSitMap,"json").fail(@ajaxFail)


	# 区域图类
	class AreaMap
		constructor: (data,@parent)->
			@el = $("<section class='areaMap'><img src='#{data[0]?.PlanImage}'/></section>")
			@areas = []
			@addArea(data) if data

		# 增加区域
		addArea: (data)->
			if $.isArray(data)
				newAreas = (new Area(i,@) for i in data)
			else
				newAreas = [new Area(data,@)]

			@areas = @areas.concat(newAreas)
			@el.append(i.el) for i in newAreas

	# 选座容器类
	class SitSelector
		constructor: (el)->
			@el = $(el)
			areasData = $.parseJSON(@el.find("script[type$=json]").html())
			if areasData
				@areaMap = new AreaMap(areasData,@)
				@el.append(@areaMap.el)

		ajaxFial: (a,b,c) ->
			$.error(b)


	$(".sitSelector").each(-> new SitSelector(this))
)