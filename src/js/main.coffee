# 导入coffee文档
$(->

	# ie6初始化
	if $.browser.msie and $.browser.version is "6.0"
		null

	# ie系列初始化
	if $.browser.msie 
		null

	$("[data-group]").each(->
		lis = $("li",this) 
		lis.filter(":nth-child(5n)").addClass("dashed")
		lis.filter((i)->
			i%10<5
		).addClass("gray")
	)

	# 初始化开关类
	$(".toggle").on("click",-> $(@).addClass("on") )
	.on("mouseleave",-> $(@).removeClass("on"))

	# 初始化倒计时
	setInterval(->
		countDown = $("#countDown")
		deadLine = new Date(countDown.data("deadline"))
		now = new Date()
		restTime = new Date(deadLine - now)/1000
		m = 60
		h = m*60
		d = h*24
		D = Math.min(Math.floor(restTime/d),99)
		restTime %= d
		H = Math.floor(restTime/h)
		restTime %= h
		M = Math.floor(restTime/m)
		S = parseInt(restTime % m,10)

		countDown.find("div").html("
			<i class='D'>#{D}</i>
			<i class='H'>#{H}</i>
			<i class='M'>#{M}</i>
			<i class='S'>#{S}</i>
			")
	,1000)
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

	# 初始化列表间隔
	$(".ul1").find(">*:even").addClass("even")

	# 初始化试卷
	$(".testList").on("click","mark",(e)->
		t = $(@)
		t.closest("li").toggleClass("unsure")
	).on("keyup",".text",->
		t = $(@)
		if !@ruler
			@ruler = $("<pre class='ruler'/>") 
			@ruler.css({"font-size":t.css("font-size")})
			t.after(@ruler)
		@ruler.html(t.val())
		t.width(@ruler.innerWidth())
	).on("change","li",->
		$(@).data("done",!!$.trim($(":input",@).val()))
	).on("change",->
		t = $(@)
		lis = t.find("li")
		total = lis.length
		done = lis.filter(-> $(@).data("done")).length
		t.data("status",{total,done})
	)

	$("#testPaper").on("change","section",->
		t = $(@)
		st = t.find("ul").data("status")
		t.find(".total").html(st.total)
		t.find(".done").html(st.done)
		t.find(".left").html(st.total-st.done)
	).on("change",->
		t = $(@)
		total =[]
		for i in t.find("ul")
			st = $(i).data("status")
			if st
				total.push(st)
			else
				$(i).trigger("change")
				return false
		totalDone = 0
		totalLeft = 0
		totalDone += i.done for i in total
		totalLeft += i.total-i.done for i in total
		$(".totalDone").html(totalDone)
		$(".totalLeft").html(totalLeft)
	).trigger("change")

	# 考试计时器
	$("#testHeader .timer").each(->
		t = $(@)
		time = parseInt(t.html(),10) || 120
		setInterval(->
			t.html(time--)
			if time <= 0
				alert("考试结束")
				$(".testForm").submit()
		,1000*60)
	)

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

	# 初始化克隆节点
	$("body").on("click",".cloneAble .add",(e)->
		root = $(@).closest(".cloneAble")
		clone = root.clone().hide()
		clone.find(":input").val("")
		root.toggleClass("cloneAble delAble").after(clone)
		clone.fadeIn()
		e.preventDefault()
	)
	$("body").on("click",".delAble .del",(e)->
		root = $(@).closest(".delAble")
		root.animate({opacity:"0",marginTop:-root.outerHeight(true)} ,400 ,"easeOutQuart",->
			$(@).remove()
		)
		e.preventDefault()
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

	# 初始化全选按钮
	$("table").on("click",(e)->
		tango = $(e.target)
		if tango.is(".selectAll")
			$(":checkbox",@).attr("checked",!!tango.attr("checked"))
	)


	# 表单验证的提示
	$("form").on("invalid",":input",->
		that = $(@)
		that.focus().select()
		if !@validityMsg
			@validityMsg = $('<span class="validityMsg"><span><strong></strong></span></span>') 
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

	$("#imgSlider").jqFancyTransitions({ width: 250, height: 250,links:true,navigation:true });

)