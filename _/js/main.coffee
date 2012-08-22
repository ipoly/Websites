# 导入coffee文档
$(->
	# 初始化popSelector
	$(".popSelector").on("click",-> $(this).toggleClass("on"))
	.on("mouseleave",-> $(this).removeClass("on"))

	if $.browser.msie and $.browser.version is "6.0"
		$(".dropNav,.dropNav li").on("hover",(e)-> 
			$(this).toggleClass("hover",e.type is "mouseenter");
		)
)