# 导入coffee文档
# @codekit-prepend validity
# @codekit-prepend cloneable
$ ->
	# 默认的表单验证提示
    $("body").on("invalid",":input,[needone]",(e)->
	    if e.target == @
	        t = $(@)
	        @validityMsg = t.next(".validityMsg")
	        if !@validityMsg.length
	            @validityMsg = $('<span class="validityMsg"><span><i>&#x58;</i><strong></strong></span></span>')
	            t.after(@validityMsg)
	        @validityMsg.addClass("invalid").find("strong").html(t.data("vMsg")||@vMsg)
    )
    .on("valid",":input,[needone]",(e)->
        if e.target == @ && @validityMsg?.length
            @validityMsg.removeClass("invalid")
    )

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

	# 初始化ol序号
	$("ol").each(->
		$("i",@).each((i)->
			$(@).addClass("o"+(i+1))
		)
	)

	# 初始化列表间隔
	$(".ul1").find(">*:even").addClass("even")

	# 初始化tab标签模块
	tabMethod = (e)->
		that = $(@)
		root = that.parents(".tab")
		that.addClass("on").siblings().removeClass("on")
		root.find(".content > *").removeClass("on").eq(that.index()).addClass("on")
	$(".tab").on("mouseenter","header > *:not(label,a)",tabMethod)
	.on("click","header > label,header > a",tabMethod).find("header>*:first").trigger("click").trigger("mouseenter")

	$("body").on("click","label:has(:input:hidden)",(e)->
		if e.target is @
			t = $(@)
			t.toggleClass("on")
			t.find(":input").attr("checked",t.is(".on"))
	)

	# 初始化全选
	$("table").on("change",".checkAll",(e)->
		t = $(@)
		t.closest("table").find(":checkbox:not(.checkAll)").attr("checked",!!t.attr("checked"))
	)


	# 初始化滚动
	$(".gun").each(->
		t = $(@)
		t.on("hover",(e)->
			clearTimeout(@timer)
			if e.type is "mouseleave"
				@timer = setTimeout(->
					t.trigger("gun")
				,$(@).data("speed")||3000)
		)

		t.on("gun",->
			t = $(@)
			first = t.find(">*:first")
			first.animate({"marginTop":-first.outerHeight(true),"opacity":0},800,"easeOutQuart",->
				t.append(first.css({"marginTop":0}))
				first.fadeTo(400,1)
				t.trigger("mouseleave")
			)
		)
	).trigger("gun")

	#长度提示
	$("#questionForm").on("keyup",(e)->
		t = $(e.target)
		console.log 11
		if t.is("textarea")
			txt = t.val().split("")
			limit = parseInt(t.attr("max"),10)
			while txt.length > limit
				txt.pop()
			t.val(txt.join(""))
			$("h2 span",@).html("还可以输入#{limit-txt.length}个字")
	)


	# 表单验证的提示
	# $("form").on("invalid",":input",->
	# 	that = $(@)
	# 	that.focus().select()
	# 	if !@validityMsg
	# 		@validityMsg = $('<span class="validityMsg"><span><strong></strong></span></span>')
	# 		if that.is(":checkbox,:radio")
	# 			$("[name="+that.attr("name")+"]:last").after(@validityMsg)
	# 		else
	# 			that.after(@validityMsg)
	# 	@validityMsg.addClass("invalid").find("strong").html(@validationMessage)
	# )
	# .on("change",":input",->
	# 	@validityMsg?.removeClass("invalid")
	# 	setTimeout($.proxy(->
	# 		@checkValidity()
	# 		if !@validity.valid then $(@).trigger("invalid")
	# 	,@),0)
	# )

