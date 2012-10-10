# 导入coffee文档
# @codekit-prepend observer
# @codekit-prepend validity
# @codekit-prepend cloneable
# @codekit-prepend checkall
# @codekit-prepend number
# @codekit-prepend placeholder
# @codekit-prepend lengthctrl
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

