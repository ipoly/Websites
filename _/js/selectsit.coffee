# 在线选座
$(->

	# 座位类
	class Sit
		constructor: (data)->
			@elStr = "<label class='#{data.Rank?=''} #{data.Color?=''} #{data.Sold?=''}' style='left:#{data.x*1.3-20}px;top:#{data.y*1.3}px;'>
						<input type='checkbox' name='sitID' value='#{data.ID}'/>
						</label> "
			# @el.data(data)

	# 区域类
	class Area
		constructor: (data)->
			@el = $("<label style='left:#{data.x}px;top:#{data.y}px;width:#{data.Width}px;height:#{data.Height}px;background:##{data.Color};'>
						<input type='radio' name='areaID' value='#{data.ID}'/>
						test
						</label>
						")
			@stage = $("<span class='stage' style='left:#{data.StageX}px;top:#{data.StageY}px;line-height:#{data.StageWidth*10}px;height:#{data.StageWidth*10}px;width:#{data.StageHeight*10}px;'>舞台</span>")
			@el.data(data)
			@el.data("model",@)

		setSitMap: (data)=>
			sitMapStr = "
				<form title='#{data[0].PartitionName}' class='sitMap' action='#{@el.attr('action')}' method='#{@el.attr('method')}'>
					<section>
					</section>
				</form>
			"
			@sitMap = $(sitMapStr)
			@sitMap.append(@stage)
			# @sitMap.append((new Sit(i)).el) for i in data
			# sits = ((new Sit(i)).elStr for i in data).join("")
			sits = juicer("
				{$each list as i}
				<label class='' style='left:${i.x}px;top:${i.y}px;'>
				<input type='checkbox' name='sitID' value='${i.ID}'/>
				</label> 
				{$/each}
				",{list:data})

			console.log new Date()
			@sitMap.append(sits)
			console.log new Date()
			$(".sitSelector").after(@sitMap)
			console.log new Date()
			@sitMap.dialog({modal:true,width:996,height:600})
			console.log new Date()

	# 区域图类
	class AreaMap
		constructor: (data)->
			@el = $("<section class='areaMap'><img src='#{data[0]?.PlanImage}'/></section>")
			@areas = []
			@addArea(data) if data

		# 增加区域
		addArea: (data)->
			if $.isArray(data)
				newAreas = (new Area(i) for i in data)
			else
				newAreas = [new Area(data)]

			@areas = @areas.concat(newAreas)
			@el.append(i.el) for i in newAreas

	# 选座容器类
	class SitSelector
		constructor: (el)->
			@el = $(el)
			@el.on("click",@getSitMap)
			areasData = $.parseJSON(@el.find("script[type$=json]").html())
			if areasData
				@areaMap = new AreaMap(areasData)
				@el.append(@areaMap.el)

		getSitMap: (e)=>
			tango = $(e.target)
			if tango.is("label")
				$[@el.attr("method")||"post"](@el.data("source"),@el.serializeArray(),tango.data("model").setSitMap,"json").fail(@ajaxFail)

		ajaxFial: (a,b,c) ->
			$.error(b)


	$(".sitSelector").each(-> new SitSelector(this))
)