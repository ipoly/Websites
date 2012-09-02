# 导入coffee文档
$(->
	# 初始化popSelector
	$(".popSelector").on("click",-> $(@).toggleClass("on"))
	.on("mouseleave",-> $(@).removeClass("on"))

	# ie6初始化
	if $.browser.msie and $.browser.version is "6.0"

		# 副菜单
		$(".dropNav,.dropNav li").on("hover",(e)-> 
			$(@).toggleClass("hover",e.type is "mouseenter");
		)

		# 侧边栏滑动
		$(window).on("scroll",->
			$("#sideBar").stop(true).animate({"top":$(this).scrollTop() + 187},800,"easeOutQuad")
		)

		$("label:has(input)").on("click",(e)->
			if !$(e.target).is("input")
				$("input",@).click();
		)

	# ie系列初始化
	if $.browser.msie 
		# 初始化列表项滑动遮罩
		$("li:has(footer),.imgMetro a").on("hover",(e)-> 
			pos = {
				"mouseenter":0,
				"mouseleave":"100%"
			}
			$("footer",this).stop(true).animate({"top":pos[e.type]},400,"easeOutQuad")
		)

		# 初始化number控件
		$("input[type=number]").each(->
			that = $(@)
			wrapper = $("<span class='number'><i class='less'/><i class='more'/></span>")
			that.after(wrapper)
			wrapper.find(".less").after(that)
		)
		$(".number").on("click",(e)->
			tango = $(e.target)
			input = $("input",@)
			val = parseInt(input.val(),10)||0
			if tango.is(".less")
				val--
			else if tango.is(".more")
				val++
			input.val(val).trigger("change")
		)

		# 限定上下限
		$("input[type=number]").on("change", (e)->
			that = $(@)
			val = parseInt(that.val(),10) || 0
			max = parseInt(that.attr("max"),10)
			max = +Infinity if isNaN(max)
			min = parseInt(that.attr("min"),10)
			min = -Infinity if isNaN(min)
			that.val(Math.max(Math.min(val,max),min))
		)



	# 初始化ol序号
	$("ol").each(->
		$("i",@).each((i)->
			$(@).addClass("o"+(i+1))
		)
	)

	# 初始化tab标签模块
	tabMethod = (e)->
		that = $(@)
		root = that.parents(".tab")
		that.addClass("on").siblings().removeClass("on")
		root.find(".content > *").removeClass("on").eq(that.index()).addClass("on")
	$(".tab").on("mouseenter","header > :header",tabMethod)
	.on("click","header > label",tabMethod).find("header>*:first").trigger("click").trigger("mouseenter")

	# 初始化全选按钮
	$("table").on("click",(e)->
		tango = $(e.target)
		if tango.is(".selectAll")
			$(":checkbox",@).attr("checked",!!tango.attr("checked"))
	)

	# 初始化购物车计算器
	$(".cartGrid").on("change",->
		total = 0
		each = $("tbody .total",@).text().split(/\D+/g)
		total += parseInt(x,10)||0 for x in each
		$("tfoot .total",@).html(total+"元")
	)
	.on("change","tbody tr",(e) ->
		if !@price
			@price = parseInt($(".price",@).text(),10) 
			@price or= 0
		$(".total",@).html(@price * ($(e.target).val() || 0)+"元")
	).find(":input").trigger("change")

	# 初始化日期区间选择器
	$(".dateEnd").datepicker({minDate:+1})

	$(".dateBegin").datepicker({
		minDate: 0,
		onSelect: (dateText,inst) ->
			$(@).siblings(".dateEnd").datepicker("option", "minDate", new Date(dateText))
	})


	# 重载alert
	window.alert = (str) ->
		if str
			wraper = $("<div/>")
			wraper.append(str).attr("title", if $(str).attr("title") then "注意")
			wraper.dialog({modal:true,show:"fade",hide:"fade",buttons: { "Ok": -> $(@).dialog("close")}})


	# 初始化dialog
	$(".dialogBtn").on("click",->
		that = $(@)
		if @dialog
			@dialog.dialog("open")
		else
			@dialog = $(that.data("dialog-obj"))
			@dialog = if @dialog.length then @dialog else that.next(".dialog") 
			@dialog.dialog({modal:true,show:"fade",hide:"fade",width:@dialog.css("width")})
			@dialog.dialog("option","dialogClass",@dialog.data("dialogclass"))
	)
	$(".dialogDef").dialog({modal:true,show:"fade",hide:"fade",buttons: { "Ok": -> $(@).dialog("close")}})


	# 表单验证的提示
	$("form").on("invalid",":input",->
		that = $(@)
		that.focus().select()
		if !@validityMsg
			@validityMsg = $('<span class="validityMsg"><span> <i></i> <strong></strong></span></span>') 
			if that.is(":checkbox,:radio")
				$("[name="+that.attr("name")+"]:last").after(@validityMsg)
			else
				that.after(@validityMsg)
		@validityMsg.addClass("invalid").find("strong").html(@validationMessage)
	).on("change",":input",->
		@validityMsg?.removeClass("invalid")
		setTimeout($.proxy(->
			@checkValidity()
			if !@validity.valid then $(@).trigger("invalid")
		,@),0)
	)


	# 初始化首页日历选择器
	$("#calendarBig").datepicker({
		dateFormat: "yy/mm/dd"
		# 根据返回的对象确定哪些日期是可选的
		,beforeShowDay: (date) ->
			dateStr = $.datepicker.formatDate("yy/mm/dd",date)
			[@showsDate?[dateStr]]
		# 更改月份时查询当月的演出日程
		,onChangeMonthYear: (year, month, inst) ->
			data = [{name:"year",value:year},{name:"month",value:month}]
			$(this).trigger("dataChange",[data])
		# 选择一个日期时重新渲染标题和列表
		,onSelect: (dateText,inst) ->
			data = @showsDate[dateText]
			$(@).parent().find("[data-template-name]").trigger("dataRender",data)
	})
	.on("dataRender",(e,data)->
		if e.target is @
			that = $(@)
			# 如果服务端没返回localDate字段，则自动生成
			$.each(data,(i)->
				@localDate ?= $.datepicker.formatDate("yy年m月d日 DD",new Date(i))
			)
			@showsDate = data;
			that.datepicker("refresh")
			setTimeout(-> 
				# 激活当日或者本月第一可用的日期
				valid = that.find("tbody a") 
				today = valid.filter(".ui-state-highlight")
				if today.length
					today.click()
				else
					valid.first().click()
			,0)
	).trigger("dataChange")

	ticketOrder = $("#ticketOrder").on("click","button",(e)-> e.preventDefault())
	.on("change",(e)->
		if !$(e.target).is("[data-template-name]")
			$("label.on",@).removeClass("on")
			activeLabel = $("label:has(:checked)",@).addClass("on")
			dateTime = activeLabel.eq(0).text()
			price = activeLabel.eq(1).text()
			number = $("input[type=number]",@).val()
			data = {dateTime, price, number} 
			$("#selectInfo",@).trigger("dataRender",data)
	).on("click",(e)->
		t = $(e.target)
		if t.is(".btn_sit_big,.btn_buy_now")
			return !alert("请选择一个日期") if !$(".datetime input",@).serializeArray().length
		if t.is(".btn_buy_now")
			return !alert("请选择一个价格") if !$(".price input",@).serializeArray().length
			return !alert("请选择购买数量") if !$("[type=number]",@).val()
		if t.is(".btnToogle")
			folder = $(".datetime div").toggleClass("unfold")
			t.text(if folder.is(".unfold") then "收起" else "展开" )
			return false

	)
	ticketOrder.find("label:not(:has(input))").addClass("disabled")
	ticketOrder.find("[data-observer] :input:first").trigger("change")

	# 初始化首页滑动图片
	slider = $("#slider")
	if slider.length
		lis = slider.find("li")
		lis.after(lis.clone()) while slider.find("li").length < 4 


		slider.find(".sliderWrapper div").jCarouselLite({
			btnNext: "#slider .next",
			btnPrev: "#slider .prev",
			vertical: true,
			speed: 400,
			visible: 4,
			easing: "easeOutQuart",
			afterEnd: (a)->
				a.first().trigger("setCurrent")
		})

		slider.on("mouseenter","li",-> $(@).trigger("setCurrent"))

		slider.on("hover",(e) ->
			if e.type is "mouseenter"
				clearInterval(@timer)
			else
				@timer = setInterval($.proxy(->
					$(".next",@).click()
				,@),5000);
		)

		slider.on("setCurrent",(e)->
			tango = $(e.target)
			img = tango.find("img")
			$("li",this).removeClass("current")
			tango.addClass("current")
			$(".stage",this).attr("href",img.data("href")).find("img").attr("src",img.attr("src"))
		)

		lis.first().trigger("setCurrent");

)