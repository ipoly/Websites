// Generated by CoffeeScript 1.3.3
(function(){$(function(){var e;$.browser.msie&&$.browser.version==="6.0"&&null;$.browser.msie&&null;$("[data-group]").each(function(){var e;e=$("li",this);e.filter(":nth-child(5n)").addClass("dashed");return e.filter(function(e){return e%10<5}).addClass("gray")});$(".toggle").on("click",function(){return $(this).addClass("on")}).on("mouseleave",function(){return $(this).removeClass("on")});setInterval(function(){var e,t,n,r,i,s,o,u,a,f,l;i=$("#countDown");o=new Date(i.data("deadline"));f=new Date;l=new Date(o-f)/1e3;a=60;u=a*60;s=u*24;e=Math.min(Math.floor(l/s),99);l%=s;t=Math.floor(l/u);l%=u;n=Math.floor(l/a);r=parseInt(l%a,10);return i.find("div").html("			<i class='D'>"+e+"</i>			<i class='H'>"+t+"</i>			<i class='M'>"+n+"</i>			<i class='S'>"+r+"</i>			")},1e3);$("input[type=number]").each(function(){var e,t;e=$(this);t=$("<span class='number'><i class='less'/><i class='more'/></span>");e.after(t);return t.find(".less").after(e)});$(".number").on("click",function(e){var t,n,r;n=$(e.target);t=$("input",this);r=parseInt(t.val(),10)||0;n.is(".less")?r--:n.is(".more")&&r++;return t.val(r).trigger("change")});$("input[type=number]").on("change",function(e){var t,n,r,i;r=$(this);i=parseInt(r.val(),10)||0;t=parseInt(r.attr("max"),10);isNaN(t)&&(t=+Infinity);n=parseInt(r.attr("min"),10);isNaN(n)&&(n=-Infinity);return r.val(Math.max(Math.min(i,t),n))});$("ol").each(function(){return $("i",this).each(function(e){return $(this).addClass("o"+(e+1))})});$(".ul1").find(">*:even").addClass("even");e=function(e){var t,n;n=$(this);t=n.parents(".tab");n.addClass("on").siblings().removeClass("on");return t.find(".content > *").removeClass("on").eq(n.index()).addClass("on")};$(".tab").on("mouseenter","header > *:not(label)",e).on("click","header > label",e).find("header>*:first").trigger("click").trigger("mouseenter");$("label:has(:input:hidden)").on("click",function(e){var t;if(e.target===this){t=$(this);t.toggleClass("on");return t.find(":input").attr("checked",t.is(".on"))}});$("table").on("change",".checkAll",function(e){var t;t=$(this);return t.closest("table").find(":checkbox:not(.checkAll)").attr("checked",!!t.attr("checked"))});$(".gun").each(function(){var e;e=$(this);e.on("hover",function(n){clearTimeout(this.timer);if(n.type==="mouseleave")return this.timer=setTimeout(function(){return e.trigger("gun")},$(this).data("speed")||3e3)});return e.on("gun",function(){var n;e=$(this);n=e.find(">*:first");return n.animate({marginTop:-n.outerHeight(!0),opacity:0},800,"easeOutQuart",function(){e.append(n.css({marginTop:0}));n.fadeTo(400,1);return e.trigger("mouseleave")})})}).trigger("gun");$("table").on("click",function(e){var t;t=$(e.target);if(t.is(".selectAll"))return $(":checkbox",this).attr("checked",!!t.attr("checked"))});$("form").on("invalid",":input",function(){var e;e=$(this);e.focus().select();if(!this.validityMsg){this.validityMsg=$('<span class="validityMsg"><span> <i></i> <strong></strong></span></span>');e.is(":checkbox,:radio")?$("[name="+e.attr("name")+"]:last").after(this.validityMsg):e.after(this.validityMsg)}return this.validityMsg.addClass("invalid").find("strong").html(this.validationMessage)}).on("change",":input",function(){var e;(e=this.validityMsg)!=null&&e.removeClass("invalid");return setTimeout($.proxy(function(){this.checkValidity();if(!this.validity.valid)return $(this).trigger("invalid")},this),0)});return $("#imgSlider").jqFancyTransitions({width:250,height:250,links:!0,navigation:!0})})}).call(this);