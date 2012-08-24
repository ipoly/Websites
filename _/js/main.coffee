# 导入coffee文档
$(->
	# 初始化popSelector
	$(".popSelector").on("click",-> $(@).toggleClass("on"))
	.on("mouseleave",-> $(@).removeClass("on"))

	if $.browser.msie and $.browser.version is "6.0"
		$(".dropNav,.dropNav li").on("hover",(e)-> 
			$(@).toggleClass("hover",e.type is "mouseenter");
		)

	slider = $("#slider")
	if slider.length
		lis = slider.find("li")
		# lis.after(lis.clone()) while slider.find("li").length < 4 


		slider.find(".sliderWrapper div").jCarouselLite({
			btnNext: "#slider .next",
			btnPrev: "#slider .prev",
			vertical: true,
			speed: 400,
			visible: 4,
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