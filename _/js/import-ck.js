/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return b==0?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e)==1)return c+d;g||(g=e*.3);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;g||(g=e*.3*1.5);if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return b<1?-0.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return f==undefined&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:b<2/2.75?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return b<e/2?jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c:jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}});

/* **********************************************
     Begin jquery.ui.CN.js
********************************************** */

/* Chinese initialisation for the jQuery UI date picker plugin. */
/* Written by Cloudream (cloudream@gmail.com). */
jQuery(function($){
	$.datepicker.regional['zh-CN'] = {
		closeText: '关闭',
		prevText: '&#x3c;上月',
		nextText: '下月&#x3e;',
		currentText: '今天',
		monthNames: ['一月','二月','三月','四月','五月','六月',
		'七月','八月','九月','十月','十一月','十二月'],
		monthNamesShort: ['一','二','三','四','五','六',
		'七','八','九','十','十一','十二'],
		dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
		dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
		dayNamesMin: ['日','一','二','三','四','五','六'],
		weekHeader: '周',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: '年'};
	$.datepicker.setDefaults($.datepicker.regional['zh-CN']);
});


/* **********************************************
     Begin juicer.js
********************************************** */

(function(){var c=function(){var e=[].slice.call(arguments);e.push(c.options);if(e[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)){e[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm,function(h,i){var f=document;var g=f&&f.getElementById(i);e[0]=g?(g.value||g.innerHTML):h;});}if(arguments.length==1){return c.compile.apply(c,e);}if(arguments.length>=2){return c.to_html.apply(c,e);}};var d={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(e){return d.escapehash[e];},escaping:function(e){return typeof(e)!=="string"?e:e.replace(/[&<>"]/igm,this.escapereplace);},detection:function(e){return typeof(e)==="undefined"?"":e;}};var b=function(e){if(console){if(console.warn){console.warn(e);return;}if(console.log){console.log(e);return;}}throw (e);};var a=function(h,f){h=h!==Object(h)?{}:h;if(h.__proto__){h.__proto__=f;return h;}var g=function(){};var j=Object.create?Object.create(f):new (g.prototype=f,g);for(var e in h){if(h.hasOwnProperty(e)){j[e]=h[e];}}return j;};c.__cache={};c.version="0.5.2-stable";c.settings={};c.tags={operationOpen:"{@",operationClose:"}",interpolateOpen:"\\${",interpolateClose:"}",noneencodeOpen:"\\$\\${",noneencodeClose:"}",commentOpen:"\\{#",commentClose:"\\}"};c.options={cache:true,strip:true,errorhandling:true,detection:true,_method:a({__escapehtml:d,__throw:b},this)};c.tagInit=function(){var e=c.tags.operationOpen+"each\\s*([\\w\\.]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?"+c.tags.operationClose;var g=c.tags.operationOpen+"\\/each"+c.tags.operationClose;var h=c.tags.operationOpen+"if\\s*([^}]*?)"+c.tags.operationClose;var i=c.tags.operationOpen+"\\/if"+c.tags.operationClose;var m=c.tags.operationOpen+"else"+c.tags.operationClose;var n=c.tags.operationOpen+"else if\\s*([^}]*?)"+c.tags.operationClose;var j=c.tags.interpolateOpen+"([\\s\\S]+?)"+c.tags.interpolateClose;var k=c.tags.noneencodeOpen+"([\\s\\S]+?)"+c.tags.noneencodeClose;var l=c.tags.commentOpen+"[^}]*?"+c.tags.commentClose;var f=c.tags.operationOpen+"each\\s*(\\w*?)\\s*in\\s*range\\((\\d+?)\\s*,\\s*(\\d+?)\\)"+c.tags.operationClose;c.settings.forstart=new RegExp(e,"igm");c.settings.forend=new RegExp(g,"igm");c.settings.ifstart=new RegExp(h,"igm");c.settings.ifend=new RegExp(i,"igm");c.settings.elsestart=new RegExp(m,"igm");c.settings.elseifstart=new RegExp(n,"igm");c.settings.interpolate=new RegExp(j,"igm");c.settings.noneencode=new RegExp(k,"igm");c.settings.inlinecomment=new RegExp(l,"igm");c.settings.rangestart=new RegExp(f,"igm");};c.tagInit();c.set=function(f,j){var h=this;var e=function(i){return i.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm,function(l){return"\\"+l;});};var k=function(l,m){var i=l.match(/^tag::(.*)$/i);if(i){h.tags[i[1]]=e(m);h.tagInit();return;}h.options[l]=m;};if(arguments.length===2){k(f,j);return;}if(f===Object(f)){for(var g in f){if(f.hasOwnProperty(g)){k(g,f[g]);}}}};c.register=function(g,f){var e=this.options._method;if(e.hasOwnProperty(g)){return false;}return e[g]=f;};c.unregister=function(f){var e=this.options._method;if(e.hasOwnProperty(f)){return delete e[f];}};c.template=function(e){var f=this;this.options=e;this.__interpolate=function(g,k,i){var h=g.split("|"),j="";if(h.length>1){g=h.shift();j="_method."+h.shift();}return"<%= "+(k?"_method.__escapehtml.escaping":"")+"("+(!i||i.detection!==false?"_method.__escapehtml.detection":"")+"("+j+"("+g+"))) %>";};this.__removeShell=function(h,g){var i=0;h=h.replace(c.settings.forstart,function(n,k,m,l){var m=m||"value",l=l&&l.substr(1);var j="i"+i++;return"<% for(var "+j+"=0, l"+j+"="+k+".length;"+j+"<l"+j+";"+j+"++) {var "+m+"="+k+"["+j+"];"+(l?("var "+l+"="+j+";"):"")+" %>";}).replace(c.settings.forend,"<% } %>").replace(c.settings.ifstart,function(j,k){return"<% if("+k+") { %>";}).replace(c.settings.ifend,"<% } %>").replace(c.settings.elsestart,function(j){return"<% } else { %>";}).replace(c.settings.elseifstart,function(j,k){return"<% } else if("+k+") { %>";}).replace(c.settings.noneencode,function(k,j){return f.__interpolate(j,false,g);}).replace(c.settings.interpolate,function(k,j){return f.__interpolate(j,true,g);}).replace(c.settings.inlinecomment,"").replace(c.settings.rangestart,function(m,l,n,k){var j="j"+i++;return"<% for(var "+j+"="+n+";"+j+"<"+k+";"+j+"++) {var "+l+"="+j+"; %>";});if(!g||g.errorhandling!==false){h="<% try { %>"+h;h+='<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';}return h;};this.__toNative=function(h,g){return this.__convert(h,!g||g.strip);};this.__lexicalAnalyze=function(k){var j=[];var n="";var g=["if","each","break","case","catch","continue","debugger","default","delete","do","finally","for","function","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","null","typeof","class","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","const","arguments","true","false","undefined","NaN"];var m=function(q,p){if(Array.prototype.indexOf&&q.indexOf===Array.prototype.indexOf){return q.indexOf(p);}for(var o=0;o<q.length;o++){if(q[o]===p){return o;}}return -1;};var h=function(o,i){i=i.match(/\w+/igm)[0];if(m(j,i)===-1&&m(g,i)===-1){if(window&&typeof(window[i])==="function"&&window[i].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i)){return o;}j.push(i);}return o;};k.replace(c.settings.forstart,h).replace(c.settings.interpolate,h).replace(c.settings.ifstart,h).replace(c.settings.elseifstart,h).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)]\s*([A-Za-z_]+)/igm,h);for(var l=0;l<j.length;l++){n+="var "+j[l]+"=_."+j[l]+";";}return"<% "+n+" %>";};this.__convert=function(h,i){var g=[].join("");g+="'use strict';";g+="var _=_||{};";g+="var _out='';_out+='";if(i!==false){g+=h.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out;";return g;}g+=h.replace(/\\/g,"\\\\").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\n]/g,"\\n").replace(/'(?=[^%]*%>)/g,"\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";return g;};this.parse=function(h,g){var i=this;if(!g||g.loose!==false){h=this.__lexicalAnalyze(h)+h;}h=this.__removeShell(h,g);h=this.__toNative(h,g);this._render=new Function("_, _method",h);this.render=function(k,j){if(!j||j!==f.options._method){j=a(j,f.options._method);}return i._render.call(this,k,j);};return this;};};c.compile=function(g,f){if(!f||f!==this.options){f=a(f,this.options);}try{var h=this.__cache[g]?this.__cache[g]:new this.template(this.options).parse(g,f);if(!f||f.cache!==false){this.__cache[g]=h;}return h;}catch(i){b("Juicer Compile Exception: "+i.message);return{render:function(){}};}};c.to_html=function(f,g,e){if(!e||e!==this.options){e=a(e,this.options);}return this.compile(f,e).render(g,e._method);};typeof(module)!=="undefined"&&module.exports?module.exports=c:this.juicer=c;})();

/* **********************************************
     Begin observer.js
********************************************** */

(function($) {
	$(function() {
		var root = $("body");
		//当有change事件发生时，通知观察者触发dataChange事件。

		root.on("change.observer submit.observer", "[data-observer]", function(e) {
			var that = $(this);
			if(that.is("form") && e.type=="change"){
				return true;
			}
			if (e.type == "submit") {
				e.preventDefault();
			}
			var observer = $(that.data("observer"));
			var param = that.serializeArray();
			if (!param.length) {
				param = that.find(":input").serializeArray();
			}
			if (param.length) {
				observer.trigger("dataChange", [param]);
			}
		});


		//为所有有data-source属性的元素在dataChange时发起ajax请求
		root.on("dataChange.observer", "[data-source]", function(e, data) {
			if(e.target == this){
				var that = $(this);
				$[that.data("method")||"post"](that.data("source"), data, null, "json").done(function(data) {
					that.trigger("dataRender", data);
				}).fail(ajaxFail);
			}
		});

		//为所有data-template-name属性的元素绑定模板渲染事件
		root.on("dataRender.observer", "[data-template-name],[data-item-name]", function(e, data) {
			if(e.target == this){
				var that = $(this);
				if (!data) {
					return false;
				}
				if (!this.tpl){
					this.tpl = $("script[name=" + (that.data("template-name") || that.data("item-name")) + "]").html();

				}
				if (this.tpl) {
					that[that.is("[data-template-name]")?"html":"append"](juicer(this.tpl, data));
					var selected = that.data("selected");
					if(that.is("select") && selected){
						setTimeout(function(){
							var a = that.find("option").filter("[value="+selected+"],:contains('"+selected+"')").attr("selected",true);
						},0);
					}
					setTimeout(function(){that.trigger("change");},0);
				}
			}
		});

		function ajaxFail(a,b,c){
			$.error("jsonFail:"+b);
		}

	});
})(jQuery);

/* **********************************************
     Begin formvalidate.js
********************************************** */

(function($, exports) {

	//表单验证,传入一个form
	$.fn.formvalidate = function() {

		//验证状态对象，用于扩展input
		var ValidityState = function() {
				var o = {
					customError: false,
					patternMismatch: false,
					rangeOverflow: false,
					rangeUnderflow: false,
					stepMismatch: false,
					tooLong: false,
					typeMismatch: false,
					valueMissing: false,
					valid: true
				};
				$.extend(this, o);
			};

		//扩展input的构造对象
		var Validity = function(dom) {
				this.init.apply(this, arguments);
				return dom;
			};

		var v = Validity.prototype;

		//初始化input
		v.init = function(dom) {
			dom.validity = new ValidityState();
			dom.checkValidity = this._checkValidity;
			dom.setCustomValidity = this._setCustomValidity;
			$(dom).on("changeVState", this._changeVState);
			$(dom).on("checkValidity", this._checkValidity);
		};

		//设置customError状态
		v._setCustomValidity = function(str) {
			var that = $(this);
			if (str) {
				that.trigger({
					type: "changeVState",
					validationType: "customError",
					validationMessage: str
				});
			} else {
				this.validity.customError = false;
				this.validity.valid = true;
				this.validationMessage = "";
			}
		};

		//设置validityState
		v._changeVState = function(e) {
			this.validity[e.validationType] = true;
			this.validity.valid = false;
			this.validationMessage = e.validationMessage;
			$(this).trigger("invalid");
			if (this.id == "test") {
				window.aaa = this;
			}
		};

		//有效性检查
		v._checkValidity = function(e) {
			var that = $(this);
			that.val($.trim(that.val()));

			//重置验证属性
			for (var vProp in this.validity) {
				if (vProp != "customError") {
					this.validity[vProp] = false;
				}
			}
			this.validity.valid = !this.validity.customError;

			// this.validationMessage = "";
			var self = this;
			$.each(this.attributes, $.proxy(function(i, n) {
				var prop = "_check_" + n.nodeName;
				if (pattern[prop]) {
					pattern[prop].apply(this);
				}
			}, this));

			var type = $(this).attr("type");

			if (pattern["_check_" + type]) {
				pattern["_check_" + type].apply(this);
			}

			//如果不是直接调用检查方法，则静默检查
			if (!e && !this.validity.valid) {
				$(this).trigger("invalid");
			}
		};

		//验证模式对象
		var pattern = {};

		//验证必填
		pattern._check_required = function() {
			var that = $(this);
			if (that.is(":checkbox,:radio")) {
				var group = $("[name=" + that.attr("name") + "]");
				var groupVal = group.serialize();
				if (!groupVal) {
					that.trigger({
						type: "changeVState",
						validationType: "valueMissing",
						validationMessage: "如果要继续，请选中此项。"
					});
				}
			} else if (!$.trim(that.val())) {
				that.trigger({
					type: "changeVState",
					validationType: "valueMissing",
					validationMessage: "请填写此字段。"
				});
			}
		};

		//验证正则
		pattern._check_pattern = function() {
			var that = $(this);
			var reg = new RegExp(that.attr("pattern"));
			if (!that.val()) {
				return;
			}
			if (!reg.test(that.val())) {
				that.trigger({
					type: "changeVState",
					validationType: "patternMismatch",
					validationMessage: "请与所请求的格式保持一致。"
				});
			}
		};

		//验证maxlength
		pattern._check_maxlength = function() {
			var that = $(this);
			if (!that.val()) {
				return;
			}
			if (that.val().length > that.attr("maxlength")) {
				that.trigger({
					type: "changeVState",
					validationType: "tooLong",
					validationMessage: "输入超过长度。"
				});
			}
		};

		//验证email
		pattern._check_email = function() {
			var that = $(this);
			if (!that.val()) {
				return;
			}
			if (!/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(that.val())) {
				that.trigger({
					type: "changeVState",
					validationType: "typeMismatch",
					validationMessage: "请输入电子邮件地址。"
				});
			}
		};

		//验证number
		pattern._check_number = function() {
			var that = $(this);
			if (!that.val()) {
				return;
			}
			if (isNaN(parseInt(that.val(), 10))) {
				that.trigger({
					type: "changeVState",
					validationType: "typeMismatch",
					validationMessage: "请输入数字。"
				});
			}
		};

		//验证date
		pattern._check_date = function() {
			var that = $(this);
			if (!that.val()) {
				return;
			}
			if (!/^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/.test(that.val())) {
				that.trigger({
					type: "changeVState",
					validationType: "typeMismatch",
					validationMessage: "请输入日期格式：YY-MM-DD。"
				});
			}
		};

		//验证url
		pattern._check_url = function() {
			var that = $(this);
			if (!that.val()) {
				return;
			}
			if (!/[a-zA-z]+:\/\/\S*/.test(that.val())) {
				that.trigger({
					type: "changeVState",
					validationType: "typeMismatch",
					validationMessage: "请输入URL。"
				});
			}
		};

		//验证手机
		pattern._check_phone = function() {
			var that = $(this);
			if (!that.val()) {
				return;
			}
			if (!/\d{11}/.test(that.val())) {
				that.trigger({
					type: "changeVState",
					validationType: "typeMismatch",
					validationMessage: "请输入11位手机号码。"
				});
			}
		};

		this.each(function() {
			var form = $(this);
			this.noValidate = true;

			form.on("submit", function(e) {
				var that = this;
				var input = $(":input:visible", this);
				for (var i = 0; i < input.length; i++) {
					input[i].checkValidity();
					if (!input[i].validity.valid) {
						$(input[i]).trigger("invalid");
						return false;
					}
				}
			});

			var inputs = form.find(":input");

			if (!$("<input/>")[0].validity) {
				inputs.each(function() {
					var that = $(this);
					var dom = new Validity(this);
					that.trigger("checkValidity");
				});
			}

		});
		window.Validity = Validity;
		return this;
	};


	$(function() {
		$("form").formvalidate();

		// 匹配验证
		$("input[type=password],input[marched]").on("change", function() {
			var that = $(this);
			var group = that.closest(".validationBlock,form").find("[name=" + that.attr("name") + "]");
			if (group.length > 1 && this == group[1]) {
				var validation = group.eq(0).val() == group.eq(1).val() ? "" : "两次输入不一致";
				this.setCustomValidity(validation);
			}
		});
	});
})(jQuery, window);

/* **********************************************
     Begin import.js
********************************************** */

// 导入js文档
//@codekit-prepend "jquery.easing.min.js";
//@codekit-prepend "jquery-ui.js";
//@codekit-prepend "jquery.ui.CN.js";
//@codekit-prepend "juicer.js";
//@codekit-prepend "observer.js";
//@codekit-prepend "formvalidate.js";
juicer.set({
    'tag::operationOpen': '{$',
    'tag::operationClose': '}',
    'tag::interpolateOpen': '${',
    'tag::interpolateClose': '}',
    'tag::noneencodeOpen': '$${',
    'tag::noneencodeClose': '}',
    'tag::commentOpen': '{#',
    'tag::commentClose': '}'
});