/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,r,i){return jQuery.easing[jQuery.easing.def](e,t,n,r,i)},easeInQuad:function(e,t,n,r,i){return r*(t/=i)*t+n},easeOutQuad:function(e,t,n,r,i){return-r*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,i){return r*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,r,i){return r*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,i){return r*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,r,i){return-r*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,i){return r*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,i){return r*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,i){return(t/=i/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,i){return-r*Math.cos(t/i*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,i){return r*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,i){return-r/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,r,i){return t==0?n:r*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,r,i){return t==i?n+r:r*(-Math.pow(2,-10*t/i)+1)+n},easeInOutExpo:function(e,t,n,r,i){return t==0?n:t==i?n+r:(t/=i/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,r,i){return-r*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,r,i){return r*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,r,i){return(t/=i/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return-(u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o))+n},easeOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i)==1)return n+r;o||(o=i*.3);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return u*Math.pow(2,-10*t)*Math.sin((t*i-s)*2*Math.PI/o)+r+n},easeInOutElastic:function(e,t,n,r,i){var s=1.70158,o=0,u=r;if(t==0)return n;if((t/=i/2)==2)return n+r;o||(o=i*.3*1.5);if(u<Math.abs(r)){u=r;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(r/u);return t<1?-0.5*u*Math.pow(2,10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)+n:u*Math.pow(2,-10*(t-=1))*Math.sin((t*i-s)*2*Math.PI/o)*.5+r+n},easeInBack:function(e,t,n,r,i,s){return s==undefined&&(s=1.70158),r*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,r,i,s){return s==undefined&&(s=1.70158),r*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,r,i,s){return s==undefined&&(s=1.70158),(t/=i/2)<1?r/2*t*t*(((s*=1.525)+1)*t-s)+n:r/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+n},easeInBounce:function(e,t,n,r,i){return r-jQuery.easing.easeOutBounce(e,i-t,0,r,i)+n},easeOutBounce:function(e,t,n,r,i){return(t/=i)<1/2.75?r*7.5625*t*t+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,i){return t<i/2?jQuery.easing.easeInBounce(e,t*2,0,r,i)*.5+n:jQuery.easing.easeOutBounce(e,t*2-i,0,r,i)*.5+r*.5+n}});(function(){var e=function(){var t=[].slice.call(arguments);t.push(e.options);t[0].match(/^\s*#([\w:\-\.]+)\s*$/igm)&&t[0].replace(/^\s*#([\w:\-\.]+)\s*$/igm,function(e,n){var r=document,i=r&&r.getElementById(n);t[0]=i?i.value||i.innerHTML:e});if(arguments.length==1)return e.compile.apply(e,t);if(arguments.length>=2)return e.to_html.apply(e,t)},t={escapehash:{"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#x27;","/":"&#x2f;"},escapereplace:function(e){return t.escapehash[e]},escaping:function(e){return typeof e!="string"?e:e.replace(/[&<>"]/igm,this.escapereplace)},detection:function(e){return typeof e=="undefined"?"":e}},n=function(e){if(console){if(console.warn){console.warn(e);return}if(console.log){console.log(e);return}}throw e},r=function(e,t){e=e!==Object(e)?{}:e;if(e.__proto__){e.__proto__=t;return e}var n=function(){},r=Object.create?Object.create(t):new(n.prototype=t,n);for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);return r};e.__cache={};e.version="0.5.2-stable";e.settings={};e.tags={operationOpen:"{@",operationClose:"}",interpolateOpen:"\\${",interpolateClose:"}",noneencodeOpen:"\\$\\${",noneencodeClose:"}",commentOpen:"\\{#",commentClose:"\\}"};e.options={cache:!0,strip:!0,errorhandling:!0,detection:!0,_method:r({__escapehtml:t,__throw:n},this)};e.tagInit=function(){var t=e.tags.operationOpen+"each\\s*([\\w\\.]*?)\\s*as\\s*(\\w*?)\\s*(,\\s*\\w*?)?"+e.tags.operationClose,n=e.tags.operationOpen+"\\/each"+e.tags.operationClose,r=e.tags.operationOpen+"if\\s*([^}]*?)"+e.tags.operationClose,i=e.tags.operationOpen+"\\/if"+e.tags.operationClose,s=e.tags.operationOpen+"else"+e.tags.operationClose,o=e.tags.operationOpen+"else if\\s*([^}]*?)"+e.tags.operationClose,u=e.tags.interpolateOpen+"([\\s\\S]+?)"+e.tags.interpolateClose,a=e.tags.noneencodeOpen+"([\\s\\S]+?)"+e.tags.noneencodeClose,f=e.tags.commentOpen+"[^}]*?"+e.tags.commentClose,l=e.tags.operationOpen+"each\\s*(\\w*?)\\s*in\\s*range\\((\\d+?)\\s*,\\s*(\\d+?)\\)"+e.tags.operationClose;e.settings.forstart=new RegExp(t,"igm");e.settings.forend=new RegExp(n,"igm");e.settings.ifstart=new RegExp(r,"igm");e.settings.ifend=new RegExp(i,"igm");e.settings.elsestart=new RegExp(s,"igm");e.settings.elseifstart=new RegExp(o,"igm");e.settings.interpolate=new RegExp(u,"igm");e.settings.noneencode=new RegExp(a,"igm");e.settings.inlinecomment=new RegExp(f,"igm");e.settings.rangestart=new RegExp(l,"igm")};e.tagInit();e.set=function(e,t){var n=this,r=function(e){return e.replace(/[\$\(\)\[\]\+\^\{\}\?\*\|\.]/igm,function(e){return"\\"+e})},i=function(e,t){var i=e.match(/^tag::(.*)$/i);if(i){n.tags[i[1]]=r(t);n.tagInit();return}n.options[e]=t};if(arguments.length===2){i(e,t);return}if(e===Object(e))for(var s in e)e.hasOwnProperty(s)&&i(s,e[s])};e.register=function(e,t){var n=this.options._method;return n.hasOwnProperty(e)?!1:n[e]=t};e.unregister=function(e){var t=this.options._method;if(t.hasOwnProperty(e))return delete t[e]};e.template=function(t){var n=this;this.options=t;this.__interpolate=function(e,t,n){var r=e.split("|"),i="";if(r.length>1){e=r.shift();i="_method."+r.shift()}return"<%= "+(t?"_method.__escapehtml.escaping":"")+"("+(!n||n.detection!==!1?"_method.__escapehtml.detection":"")+"("+i+"("+e+"))) %>"};this.__removeShell=function(t,r){var i=0;t=t.replace(e.settings.forstart,function(e,t,n,r){var n=n||"value",r=r&&r.substr(1),s="i"+i++;return"<% for(var "+s+"=0, l"+s+"="+t+".length;"+s+"<l"+s+";"+s+"++) {var "+n+"="+t+"["+s+"];"+(r?"var "+r+"="+s+";":"")+" %>"}).replace(e.settings.forend,"<% } %>").replace(e.settings.ifstart,function(e,t){return"<% if("+t+") { %>"}).replace(e.settings.ifend,"<% } %>").replace(e.settings.elsestart,function(e){return"<% } else { %>"}).replace(e.settings.elseifstart,function(e,t){return"<% } else if("+t+") { %>"}).replace(e.settings.noneencode,function(e,t){return n.__interpolate(t,!1,r)}).replace(e.settings.interpolate,function(e,t){return n.__interpolate(t,!0,r)}).replace(e.settings.inlinecomment,"").replace(e.settings.rangestart,function(e,t,n,r){var s="j"+i++;return"<% for(var "+s+"="+n+";"+s+"<"+r+";"+s+"++) {var "+t+"="+s+"; %>"});if(!r||r.errorhandling!==!1){t="<% try { %>"+t;t+='<% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>'}return t};this.__toNative=function(e,t){return this.__convert(e,!t||t.strip)};this.__lexicalAnalyze=function(t){var n=[],r="",i=["if","each","break","case","catch","continue","debugger","default","delete","do","finally","for","function","in","instanceof","new","return","switch","this","throw","try","typeof","var","void","while","with","null","typeof","class","enum","export","extends","import","super","implements","interface","let","package","private","protected","public","static","yield","const","arguments","true","false","undefined","NaN"],s=function(e,t){if(Array.prototype.indexOf&&e.indexOf===Array.prototype.indexOf)return e.indexOf(t);for(var n=0;n<e.length;n++)if(e[n]===t)return n;return-1},o=function(e,t){t=t.match(/\w+/igm)[0];if(s(n,t)===-1&&s(i,t)===-1){if(window&&typeof window[t]=="function"&&window[t].toString().match(/^\s*?function \w+\(\) \{\s*?\[native code\]\s*?\}\s*?$/i))return e;n.push(t)}return e};t.replace(e.settings.forstart,o).replace(e.settings.interpolate,o).replace(e.settings.ifstart,o).replace(e.settings.elseifstart,o).replace(/[\+\-\*\/%!\?\|\^&~<>=,\(\)]\s*([A-Za-z_]+)/igm,o);for(var u=0;u<n.length;u++)r+="var "+n[u]+"=_."+n[u]+";";return"<% "+r+" %>"};this.__convert=function(e,t){var n=[].join("");n+="'use strict';";n+="var _=_||{};";n+="var _out='';_out+='";if(t!==!1){n+=e.replace(/\\/g,"\\\\").replace(/[\r\t\n]/g," ").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out;";return n}n+=e.replace(/\\/g,"\\\\").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t").replace(/[\n]/g,"\\n").replace(/'(?=[^%]*%>)/g,"	").split("'").join("\\'").split("	").join("'").replace(/<%=(.+?)%>/g,"';_out+=$1;_out+='").split("<%").join("';").split("%>").join("_out+='")+"';return _out.replace(/[\\r\\n]\\s+[\\r\\n]/g, '\\r\\n');";return n};this.parse=function(e,t){var i=this;if(!t||t.loose!==!1)e=this.__lexicalAnalyze(e)+e;e=this.__removeShell(e,t);e=this.__toNative(e,t);this._render=new Function("_, _method",e);this.render=function(e,t){if(!t||t!==n.options._method)t=r(t,n.options._method);return i._render.call(this,e,t)};return this}};e.compile=function(e,t){if(!t||t!==this.options)t=r(t,this.options);try{var i=this.__cache[e]?this.__cache[e]:(new this.template(this.options)).parse(e,t);if(!t||t.cache!==!1)this.__cache[e]=i;return i}catch(s){n("Juicer Compile Exception: "+s.message);return{render:function(){}}}};e.to_html=function(e,t,n){if(!n||n!==this.options)n=r(n,this.options);return this.compile(e,n).render(t,n._method)};typeof module!="undefined"&&module.exports?module.exports=e:this.juicer=e})();$(function(){if($.browser.msie&&$.browser.version-8<0){function e(e,t){var n=e.innerHTML;e.innerHTML="<i style=\"font-family: 'icons'\">"+t+"</i>"+n}var t={"icon-warning":"&#x21;","icon-picture":"&#x22;","icon-hash":"&#x23;","icon-basket":"&#x24;","icon-tag":"&#x25;","icon-arrow-up":"&#x26;","icon-arrow-down":"&#x27;","icon-arrow-left":"&#x28;","icon-arrow-right":"&#x29;","icon-newspaper":"&#x2a;","icon-plus-alt":"&#x2b;","icon-user":"&#x2c;","icon-minus-alt":"&#x2d;","icon-pie":"&#x2e;","icon-denied":"&#x2f;","icon-seven-segment":"&#x30;","icon-seven-segment-2":"&#x31;","icon-seven-segment-3":"&#x32;","icon-seven-segment-4":"&#x33;","icon-seven-segment-5":"&#x34;","icon-seven-segment-6":"&#x35;","icon-seven-segment-7":"&#x36;","icon-seven-segment-8":"&#x37;","icon-seven-segment-9":"&#x38;","icon-seven-segment-10":"&#x39;","icon-arrow-down-alt1":"&#x3a;","icon-arrow-up-alt1":"&#x3b;","icon-arrow-left-alt1":"&#x3c;","icon-copy":"&#x3d;","icon-arrow-right-alt1":"&#x3e;","icon-help":"&#x3f;","icon-at":"&#x40;","icon-phone":"&#x41;","icon-calendar":"&#x43;","icon-remove":"&#x44;","icon-stats-up":"&#x45;","icon-loading":"&#x46;","icon-link":"&#x47;","icon-home":"&#x48;","icon-info":"&#x49;","icon-refresh":"&#x4a;","icon-aperture":"&#x4b;","icon-map-pin-fill":"&#x4c;","icon-envelope":"&#x4d;","icon-comments":"&#x4e;","icon-minus":"&#x4f;","icon-plus":"&#x50;","icon-exit":"&#x51;","icon-enter":"&#x52;","icon-floppy":"&#x53;","icon-libreoffice":"&#x54;","icon-file-word":"&#x55;","icon-file-excel":"&#x56;","icon-file-pdf":"&#x57;","icon-x":"&#x58;","icon-checkmark":"&#x59;","icon-support":"&#x5a;","icon-undo":"&#x5b;","icon-bug":"&#x42;","icon-redo":"&#x5d;","icon-clock":"&#x5e;","icon-chart-alt":"&#x5f;","icon-bars":"&#x60;","icon-cloud-download":"&#x61;","icon-cloud-upload":"&#x62;","icon-calendar-2":"&#x63;","icon-cog":"&#x64;","icon-earth":"&#x65;","icon-star":"&#x66;","icon-star-2":"&#x67;","icon-star-3":"&#x68;","icon-info-2":"&#x69;","icon-reload-alt":"&#x6a;","icon-key-stroke":"&#x6b;","icon-map-pin-stroke":"&#x6c;","icon-mail":"&#x6d;","icon-heart":"&#x6e;","icon-heart-2":"&#x6f;","icon-pencil":"&#x70;","icon-backspace":"&#x71;","icon-backspace-2":"&#x72;","icon-magnifying-glass":"&#x73;","icon-wrench":"&#x74;","icon-busy":"&#x75;","icon-out":"&#x76;","icon-grid-view":"&#x77;","icon-x-altx-alt":"&#x78;","icon-check-alt":"&#x79;","icon-arrow-up-2":"&#x7a;","icon-arrow-left-2":"&#x7b;","icon-arrow-down-2":"&#x7c;","icon-arrow-right-2":"&#x7d;","icon-flag":"&#x5c;","icon-left-quote":"&#x201c;","icon-right-quote":"&#x201d;"},n=document.getElementsByTagName("*"),r,i,s,o,u;for(r=0;r<n.length;r+=1){u=n[r];i=u.getAttribute("data-icon");i&&e(u,i);o=u.className;o=o.match(/icon-[^\s'"]+/);o&&e(u,t[o[0]])}}});