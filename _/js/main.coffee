# 导入coffee文档
$(->

	# ie6初始化
	if $.browser.msie and $.browser.version is "6.0"
		null

	# ie系列初始化
	if $.browser.msie 
		null

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

)