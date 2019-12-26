!function(t,e){"function"==typeof define&&define.amd?define((function(){return e(t)})):e(t)}(this,(function(t){var e,n=function(){var e,n,r,i,o,a,s=[],u=s.concat,c=s.filter,l=s.slice,f=t.document,h={},p={},d={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},m=/^\s*<(\w+|!)[^>]*>/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,g=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,y=/^(?:body|html)$/i,x=/([A-Z])/g,b=["val","css","html","text","data","width","height","offset"],E=f.createElement("table"),j=f.createElement("tr"),T={tr:f.createElement("tbody"),tbody:E,thead:E,tfoot:E,td:j,th:j,"*":f.createElement("div")},w=/complete|loaded|interactive/,S=/^[\w-]*$/,C={},N=C.toString,O={},P=f.createElement("div"),A={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},D=Array.isArray||function(t){return t instanceof Array};function L(t){return null==t?String(t):C[N.call(t)]||"object"}function $(t){return"function"==L(t)}function F(t){return null!=t&&t==t.window}function k(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function M(t){return"object"==L(t)}function R(t){return M(t)&&!F(t)&&Object.getPrototypeOf(t)==Object.prototype}function Z(t){var e=!!t&&"length"in t&&t.length,n=r.type(t);return"function"!=n&&!F(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function z(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in p?p[t]:p[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||d[z(t)]?e:e+"px"}function I(t){return"children"in t?l.call(t.children):r.map(t.childNodes,(function(t){if(1==t.nodeType)return t}))}function V(t,e){var n,r=t?t.length:0;for(n=0;n<r;n++)this[n]=t[n];this.length=r,this.selector=e||""}function _(t,r,i){for(n in r)i&&(R(r[n])||D(r[n]))?(R(r[n])&&!R(t[n])&&(t[n]={}),D(r[n])&&!D(t[n])&&(t[n]=[]),_(t[n],r[n],i)):r[n]!==e&&(t[n]=r[n])}function B(t,e){return null==e?r(t):r(t).filter(e)}function U(t,e,n,r){return $(e)?e.call(t,n,r):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function J(t,n){var r=t.className||"",i=r&&r.baseVal!==e;if(n===e)return i?r.baseVal:r;i?r.baseVal=n:t.className=n}function W(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?r.parseJSON(t):t):t}catch(e){return t}}function Y(t,e){e(t);for(var n=0,r=t.childNodes.length;n<r;n++)Y(t.childNodes[n],e)}return O.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=P).appendChild(t),r=~O.qsa(i,e).indexOf(t),o&&P.removeChild(t),r},o=function(t){return t.replace(/-+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))},a=function(t){return c.call(t,(function(e,n){return t.indexOf(e)==n}))},O.fragment=function(t,n,i){var o,a,s;return v.test(t)&&(o=r(f.createElement(RegExp.$1))),o||(t.replace&&(t=t.replace(g,"<$1></$2>")),n===e&&(n=m.test(t)&&RegExp.$1),n in T||(n="*"),(s=T[n]).innerHTML=""+t,o=r.each(l.call(s.childNodes),(function(){s.removeChild(this)}))),R(i)&&(a=r(o),r.each(i,(function(t,e){b.indexOf(t)>-1?a[t](e):a.attr(t,e)}))),o},O.Z=function(t,e){return new V(t,e)},O.isZ=function(t){return t instanceof O.Z},O.init=function(t,n){var i,o;if(!t)return O.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&m.test(t))i=O.fragment(t,RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=O.qsa(f,t)}else{if($(t))return r(f).ready(t);if(O.isZ(t))return t;if(D(t))o=t,i=c.call(o,(function(t){return null!=t}));else if(M(t))i=[t],t=null;else if(m.test(t))i=O.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==e)return r(n).find(t);i=O.qsa(f,t)}}return O.Z(i,t)},(r=function(t,e){return O.init(t,e)}).extend=function(t){var e,n=l.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach((function(n){_(t,n,e)})),t},O.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,a=S.test(o);return t.getElementById&&a&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:l.call(a&&!r&&t.getElementsByClassName?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},r.contains=f.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},r.type=L,r.isFunction=$,r.isWindow=F,r.isArray=D,r.isPlainObject=R,r.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},r.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},r.inArray=function(t,e,n){return s.indexOf.call(e,t,n)},r.camelCase=o,r.trim=function(t){return null==t?"":String.prototype.trim.call(t)},r.uuid=0,r.support={},r.expr={},r.noop=function(){},r.map=function(t,e){var n,i,o,a,s=[];if(Z(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&s.push(n);else for(o in t)null!=(n=e(t[o],o))&&s.push(n);return(a=s).length>0?r.fn.concat.apply([],a):a},r.each=function(t,e){var n,r;if(Z(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},r.grep=function(t,e){return c.call(t,e)},t.JSON&&(r.parseJSON=JSON.parse),r.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),(function(t,e){C["[object "+e+"]"]=e.toLowerCase()})),r.fn={constructor:O.Z,length:0,forEach:s.forEach,reduce:s.reduce,push:s.push,sort:s.sort,splice:s.splice,indexOf:s.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=O.isZ(e)?e.toArray():e;return u.apply(O.isZ(this)?this.toArray():this,n)},map:function(t){return r(r.map(this,(function(e,n){return t.call(e,n,e)})))},slice:function(){return r(l.apply(this,arguments))},ready:function(t){return w.test(f.readyState)&&f.body?t(r):f.addEventListener("DOMContentLoaded",(function(){t(r)}),!1),this},get:function(t){return t===e?l.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each((function(){null!=this.parentNode&&this.parentNode.removeChild(this)}))},each:function(t){return s.every.call(this,(function(e,n){return!1!==t.call(e,n,e)})),this},filter:function(t){return $(t)?this.not(this.not(t)):r(c.call(this,(function(e){return O.matches(e,t)})))},add:function(t,e){return r(a(this.concat(r(t,e))))},is:function(t){return this.length>0&&O.matches(this[0],t)},not:function(t){var n=[];if($(t)&&t.call!==e)this.each((function(e){t.call(this,e)||n.push(this)}));else{var i="string"==typeof t?this.filter(t):Z(t)&&$(t.item)?l.call(t):r(t);this.forEach((function(t){i.indexOf(t)<0&&n.push(t)}))}return r(n)},has:function(t){return this.filter((function(){return M(t)?r.contains(this,t):r(this).find(t).size()}))},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!M(t)?t:r(t)},last:function(){var t=this[this.length-1];return t&&!M(t)?t:r(t)},find:function(t){var e=this;return t?"object"==typeof t?r(t).filter((function(){var t=this;return s.some.call(e,(function(e){return r.contains(e,t)}))})):1==this.length?r(O.qsa(this[0],t)):this.map((function(){return O.qsa(this,t)})):r()},closest:function(t,e){var n=[],i="object"==typeof t&&r(t);return this.each((function(r,o){for(;o&&!(i?i.indexOf(o)>=0:O.matches(o,t));)o=o!==e&&!k(o)&&o.parentNode;o&&n.indexOf(o)<0&&n.push(o)})),r(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=r.map(n,(function(t){if((t=t.parentNode)&&!k(t)&&e.indexOf(t)<0)return e.push(t),t}));return B(e,t)},parent:function(t){return B(a(this.pluck("parentNode")),t)},children:function(t){return B(this.map((function(){return I(this)})),t)},contents:function(){return this.map((function(){return this.contentDocument||l.call(this.childNodes)}))},siblings:function(t){return B(this.map((function(t,e){return c.call(I(e.parentNode),(function(t){return t!==e}))})),t)},empty:function(){return this.each((function(){this.innerHTML=""}))},pluck:function(t){return r.map(this,(function(e){return e[t]}))},show:function(){return this.each((function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,h[t]||(e=f.createElement(t),f.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),h[t]=n),h[t]))}))},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var n=r(t).get(0),i=n.parentNode||this.length>1;return this.each((function(o){r(this).wrapAll(e?t.call(this,o):i?n.cloneNode(!0):n)}))},wrapAll:function(t){if(this[0]){var e;for(r(this[0]).before(t=r(t));(e=t.children()).length;)t=e.first();r(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each((function(n){var i=r(this),o=i.contents(),a=e?t.call(this,n):t;o.length?o.wrapAll(a):i.append(a)}))},unwrap:function(){return this.parent().each((function(){r(this).replaceWith(r(this).children())})),this},clone:function(){return this.map((function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return this.each((function(){var n=r(this);(t===e?"none"==n.css("display"):t)?n.show():n.hide()}))},prev:function(t){return r(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return r(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each((function(e){var n=this.innerHTML;r(this).empty().append(U(this,t,e,n))})):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each((function(e){var n=U(this,t,e,this.textContent);this.textContent=null==n?"":""+n})):0 in this?this.pluck("textContent").join(""):null},attr:function(t,r){var i;return"string"!=typeof t||1 in arguments?this.each((function(e){if(1===this.nodeType)if(M(t))for(n in t)X(this,n,t[n]);else X(this,t,U(this,r,e,this.getAttribute(t)))})):0 in this&&1==this[0].nodeType&&null!=(i=this[0].getAttribute(t))?i:e},removeAttr:function(t){return this.each((function(){1===this.nodeType&&t.split(" ").forEach((function(t){X(this,t)}),this)}))},prop:function(t,e){return t=A[t]||t,1 in arguments?this.each((function(n){this[t]=U(this,e,n,this[t])})):this[0]&&this[0][t]},removeProp:function(t){return t=A[t]||t,this.each((function(){delete this[t]}))},data:function(t,n){var r="data-"+t.replace(x,"-$1").toLowerCase(),i=1 in arguments?this.attr(r,n):this.attr(r);return null!==i?W(i):e},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each((function(e){this.value=U(this,t,e,this.value)}))):this[0]&&(this[0].multiple?r(this[0]).find("option").filter((function(){return this.selected})).pluck("value"):this[0].value)},offset:function(e){if(e)return this.each((function(t){var n=r(this),i=U(this,e,t,n.offset()),o=n.offsetParent().offset(),a={top:i.top-o.top,left:i.left-o.left};"static"==n.css("position")&&(a.position="relative"),n.css(a)}));if(!this.length)return null;if(f.documentElement!==this[0]&&!r.contains(f.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+t.pageXOffset,top:n.top+t.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(t,e){if(arguments.length<2){var i=this[0];if("string"==typeof t){if(!i)return;return i.style[o(t)]||getComputedStyle(i,"").getPropertyValue(t)}if(D(t)){if(!i)return;var a={},s=getComputedStyle(i,"");return r.each(t,(function(t,e){a[e]=i.style[o(e)]||s.getPropertyValue(e)})),a}}var u="";if("string"==L(t))e||0===e?u=z(t)+":"+H(t,e):this.each((function(){this.style.removeProperty(z(t))}));else for(n in t)t[n]||0===t[n]?u+=z(n)+":"+H(n,t[n])+";":this.each((function(){this.style.removeProperty(z(n))}));return this.each((function(){this.style.cssText+=";"+u}))},index:function(t){return t?this.indexOf(r(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&s.some.call(this,(function(t){return this.test(J(t))}),q(t))},addClass:function(t){return t?this.each((function(e){if("className"in this){i=[];var n=J(this);U(this,t,e,n).split(/\s+/g).forEach((function(t){r(this).hasClass(t)||i.push(t)}),this),i.length&&J(this,n+(n?" ":"")+i.join(" "))}})):this},removeClass:function(t){return this.each((function(n){if("className"in this){if(t===e)return J(this,"");i=J(this),U(this,t,n,i).split(/\s+/g).forEach((function(t){i=i.replace(q(t)," ")})),J(this,i.trim())}}))},toggleClass:function(t,n){return t?this.each((function(i){var o=r(this);U(this,t,i,J(this)).split(/\s+/g).forEach((function(t){(n===e?!o.hasClass(t):n)?o.addClass(t):o.removeClass(t)}))})):this},scrollTop:function(t){if(this.length){var n="scrollTop"in this[0];return t===e?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var n="scrollLeft"in this[0];return t===e?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=y.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(r(t).css("margin-top"))||0,n.left-=parseFloat(r(t).css("margin-left"))||0,i.top+=parseFloat(r(e[0]).css("border-top-width"))||0,i.left+=parseFloat(r(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map((function(){for(var t=this.offsetParent||f.body;t&&!y.test(t.nodeName)&&"static"==r(t).css("position");)t=t.offsetParent;return t}))}},r.fn.detach=r.fn.remove,["width","height"].forEach((function(t){var n=t.replace(/./,(function(t){return t[0].toUpperCase()}));r.fn[t]=function(i){var o,a=this[0];return i===e?F(a)?a["inner"+n]:k(a)?a.documentElement["scroll"+n]:(o=this.offset())&&o[t]:this.each((function(e){(a=r(this)).css(t,U(this,i,e,a[t]()))}))}})),["after","prepend","before","append"].forEach((function(n,i){var o=i%2;r.fn[n]=function(){var n,a,s=r.map(arguments,(function(t){var i=[];return"array"==(n=L(t))?(t.forEach((function(t){return t.nodeType!==e?i.push(t):r.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(O.fragment(t)))})),i):"object"==n||null==t?t:O.fragment(t)})),u=this.length>1;return s.length<1?this:this.each((function(e,n){a=o?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=r.contains(f.documentElement,a);s.forEach((function(e){if(u)e=e.cloneNode(!0);else if(!a)return r(e).remove();a.insertBefore(e,n),c&&Y(e,(function(e){if(!(null==e.nodeName||"SCRIPT"!==e.nodeName.toUpperCase()||e.type&&"text/javascript"!==e.type||e.src)){var n=e.ownerDocument?e.ownerDocument.defaultView:t;n.eval.call(n,e.innerHTML)}}))}))}))},r.fn[o?n+"To":"insert"+(i?"Before":"After")]=function(t){return r(t)[n](this),this}})),O.Z.prototype=V.prototype=r.fn,O.uniq=a,O.deserializeValue=W,r.zepto=O,r}();return t.Zepto=n,void 0===t.$&&(t.$=n),function(e){var n,r=1,i=Array.prototype.slice,o=e.isFunction,a=function(t){return"string"==typeof t},s={},u={},c="onfocusin"in t,l={focus:"focusin",blur:"focusout"},f={mouseenter:"mouseover",mouseleave:"mouseout"};function h(t){return t._zid||(t._zid=r++)}function p(t,e,n,r){if((e=d(e)).ns)var i=(o=e.ns,new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)"));var o;return(s[h(t)]||[]).filter((function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||i.test(t.ns))&&(!n||h(t.fn)===h(n))&&(!r||t.sel==r)}))}function d(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function m(t,e){return t.del&&!c&&t.e in l||!!e}function v(t){return f[t]||c&&l[t]||t}function g(t,r,i,o,a,u,c){var l=h(t),p=s[l]||(s[l]=[]);r.split(/\s/).forEach((function(r){if("ready"==r)return e(document).ready(i);var s=d(r);s.fn=i,s.sel=a,s.e in f&&(i=function(t){var n=t.relatedTarget;if(!n||n!==this&&!e.contains(this,n))return s.fn.apply(this,arguments)}),s.del=u;var l=u||i;s.proxy=function(e){if(!(e=T(e)).isImmediatePropagationStopped()){e.data=o;var r=l.apply(t,e._args==n?[e]:[e].concat(e._args));return!1===r&&(e.preventDefault(),e.stopPropagation()),r}},s.i=p.length,p.push(s),"addEventListener"in t&&t.addEventListener(v(s.e),s.proxy,m(s,c))}))}function y(t,e,n,r,i){var o=h(t);(e||"").split(/\s/).forEach((function(e){p(t,e,n,r).forEach((function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(v(e.e),e.proxy,m(e,i))}))}))}u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents",e.event={add:g,remove:y},e.proxy=function(t,n){var r=2 in arguments&&i.call(arguments,2);if(o(t)){var s=function(){return t.apply(n,r?r.concat(i.call(arguments)):arguments)};return s._zid=h(t),s}if(a(n))return r?(r.unshift(t[n],t),e.proxy.apply(null,r)):e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(t,e,n){return this.on(t,e,n)},e.fn.unbind=function(t,e){return this.off(t,e)},e.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},b=function(){return!1},E=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function T(t,r){return!r&&t.isDefaultPrevented||(r||(r=t),e.each(j,(function(e,n){var i=r[e];t[e]=function(){return this[n]=x,i&&i.apply(r,arguments)},t[n]=b})),t.timeStamp||(t.timeStamp=Date.now()),(r.defaultPrevented!==n?r.defaultPrevented:"returnValue"in r?!1===r.returnValue:r.getPreventDefault&&r.getPreventDefault())&&(t.isDefaultPrevented=x)),t}function w(t){var e,r={originalEvent:t};for(e in t)E.test(e)||t[e]===n||(r[e]=t[e]);return T(r,t)}e.fn.delegate=function(t,e,n){return this.on(e,t,n)},e.fn.undelegate=function(t,e,n){return this.off(e,t,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,r,s,u,c){var l,f,h=this;return t&&!a(t)?(e.each(t,(function(t,e){h.on(t,r,s,e,c)})),h):(a(r)||o(u)||!1===u||(u=s,s=r,r=n),u!==n&&!1!==s||(u=s,s=n),!1===u&&(u=b),h.each((function(n,o){c&&(l=function(t){return y(o,t.type,u),u.apply(this,arguments)}),r&&(f=function(t){var n,a=e(t.target).closest(r,o).get(0);if(a&&a!==o)return n=e.extend(w(t),{currentTarget:a,liveFired:o}),(l||u).apply(a,[n].concat(i.call(arguments,1)))}),g(o,t,u,s,r,f||l)})))},e.fn.off=function(t,r,i){var s=this;return t&&!a(t)?(e.each(t,(function(t,e){s.off(t,r,e)})),s):(a(r)||o(i)||!1===i||(i=r,r=n),!1===i&&(i=b),s.each((function(){y(this,t,i,r)})))},e.fn.trigger=function(t,n){return(t=a(t)||e.isPlainObject(t)?e.Event(t):T(t))._args=n,this.each((function(){t.type in l&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):e(this).triggerHandler(t,n)}))},e.fn.triggerHandler=function(t,n){var r,i;return this.each((function(o,s){(r=w(a(t)?e.Event(t):t))._args=n,r.target=s,e.each(p(s,t.type||t),(function(t,e){if(i=e.proxy(r),r.isImmediatePropagationStopped())return!1}))})),i},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach((function(t){e.fn[t]=function(e){return 0 in arguments?this.bind(t,e):this.trigger(t)}})),e.Event=function(t,e){a(t)||(t=(e=t).type);var n=document.createEvent(u[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),T(n)}}(n),function(e){var n,r,i=+new Date,o=t.document,a=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,u=/^(?:text|application)\/xml/i,c="application/json",l="text/html",f=/^\s*$/,h=o.createElement("a");function p(t,n,r,i){if(t.global)return function(t,n,r){var i=e.Event(n);return e(t).trigger(i,r),!i.isDefaultPrevented()}(n||o,r,i)}function d(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===p(e,n,"ajaxBeforeSend",[t,e]))return!1;p(e,n,"ajaxSend",[t,e])}function m(t,e,n,r){var i=n.context;n.success.call(i,t,"success",e),r&&r.resolveWith(i,[t,"success",e]),p(n,i,"ajaxSuccess",[e,n,t]),g("success",e,n)}function v(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),p(r,o,"ajaxError",[n,r,t||e]),g(e,n,r)}function g(t,n,r){var i=r.context;r.complete.call(i,n,t),p(r,i,"ajaxComplete",[n,r]),function(t){t.global&&!--e.active&&p(t,null,"ajaxStop")}(r)}function y(){}function x(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function b(t,n,r,i){return e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}h.href=t.location.href,e.active=0,e.ajaxJSONP=function(n,r){if(!("type"in n))return e.ajax(n);var a,s,u=n.jsonpCallback,c=(e.isFunction(u)?u():u)||"Zepto"+i++,l=o.createElement("script"),f=t[c],h=function(t){e(l).triggerHandler("error",t||"abort")},p={abort:h};return r&&r.promise(p),e(l).on("load error",(function(i,o){clearTimeout(s),e(l).off().remove(),"error"!=i.type&&a?m(a[0],p,n,r):v(null,o||"error",p,n,r),t[c]=f,a&&e.isFunction(f)&&f(a[0]),f=a=void 0})),!1===d(p,n)?(h("abort"),p):(t[c]=function(){a=arguments},l.src=n.url.replace(/\?(.+)=\?/,"?$1="+c),o.head.appendChild(l),n.timeout>0&&(s=setTimeout((function(){h("timeout")}),n.timeout)),p)},e.ajaxSettings={type:"GET",beforeSend:y,success:y,error:y,complete:y,context:null,global:!0,xhr:function(){return new t.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:c,xml:"application/xml, text/xml",html:l,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:y},e.ajax=function(i){var a,g,b=e.extend({},i||{}),E=e.Deferred&&e.Deferred();for(n in e.ajaxSettings)void 0===b[n]&&(b[n]=e.ajaxSettings[n]);!function(t){t.global&&0==e.active++&&p(t,null,"ajaxStart")}(b),b.crossDomain||((a=o.createElement("a")).href=b.url,a.href=a.href,b.crossDomain=h.protocol+"//"+h.host!=a.protocol+"//"+a.host),b.url||(b.url=t.location.toString()),(g=b.url.indexOf("#"))>-1&&(b.url=b.url.slice(0,g)),function(t){t.processData&&t.data&&"string"!=e.type(t.data)&&(t.data=e.param(t.data,t.traditional)),!t.data||t.type&&"GET"!=t.type.toUpperCase()&&"jsonp"!=t.dataType||(t.url=x(t.url,t.data),t.data=void 0)}(b);var j=b.dataType,T=/\?.+=\?/.test(b.url);if(T&&(j="jsonp"),!1!==b.cache&&(i&&!0===i.cache||"script"!=j&&"jsonp"!=j)||(b.url=x(b.url,"_="+Date.now())),"jsonp"==j)return T||(b.url=x(b.url,b.jsonp?b.jsonp+"=?":!1===b.jsonp?"":"callback=?")),e.ajaxJSONP(b,E);var w,S=b.accepts[j],C={},N=function(t,e){C[t.toLowerCase()]=[t,e]},O=/^([\w-]+:)\/\//.test(b.url)?RegExp.$1:t.location.protocol,P=b.xhr(),A=P.setRequestHeader;if(E&&E.promise(P),b.crossDomain||N("X-Requested-With","XMLHttpRequest"),N("Accept",S||"*/*"),(S=b.mimeType||S)&&(S.indexOf(",")>-1&&(S=S.split(",",2)[0]),P.overrideMimeType&&P.overrideMimeType(S)),(b.contentType||!1!==b.contentType&&b.data&&"GET"!=b.type.toUpperCase())&&N("Content-Type",b.contentType||"application/x-www-form-urlencoded"),b.headers)for(r in b.headers)N(r,b.headers[r]);if(P.setRequestHeader=N,P.onreadystatechange=function(){if(4==P.readyState){P.onreadystatechange=y,clearTimeout(w);var t,n=!1;if(P.status>=200&&P.status<300||304==P.status||0==P.status&&"file:"==O){if(j=j||function(t){return t&&(t=t.split(";",2)[0]),t&&(t==l?"html":t==c?"json":s.test(t)?"script":u.test(t)&&"xml")||"text"}(b.mimeType||P.getResponseHeader("content-type")),"arraybuffer"==P.responseType||"blob"==P.responseType)t=P.response;else{t=P.responseText;try{t=function(t,e,n){if(n.dataFilter==y)return t;var r=n.context;return n.dataFilter.call(r,t,e)}(t,j,b),"script"==j?(0,eval)(t):"xml"==j?t=P.responseXML:"json"==j&&(t=f.test(t)?null:e.parseJSON(t))}catch(t){n=t}if(n)return v(n,"parsererror",P,b,E)}m(t,P,b,E)}else v(P.statusText||null,P.status?"error":"abort",P,b,E)}},!1===d(P,b))return P.abort(),v(null,"abort",P,b,E),P;var D=!("async"in b)||b.async;if(P.open(b.type,b.url,D,b.username,b.password),b.xhrFields)for(r in b.xhrFields)P[r]=b.xhrFields[r];for(r in C)A.apply(P,C[r]);return b.timeout>0&&(w=setTimeout((function(){P.onreadystatechange=y,P.abort(),v(null,"timeout",P,b,E)}),b.timeout)),P.send(b.data?b.data:null),P},e.get=function(){return e.ajax(b.apply(null,arguments))},e.post=function(){var t=b.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=b.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,r){if(!this.length)return this;var i,o=this,s=t.split(/\s/),u=b(t,n,r),c=u.success;return s.length>1&&(u.url=s[0],i=s[1]),u.success=function(t){o.html(i?e("<div>").html(t.replace(a,"")).find(i):t),c&&c.apply(o,arguments)},e.ajax(u),this};var E=encodeURIComponent;e.param=function(t,n){var r=[];return r.add=function(t,n){e.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(E(t)+"="+E(n))},function t(n,r,i,o){var a,s=e.isArray(r),u=e.isPlainObject(r);e.each(r,(function(r,c){a=e.type(c),o&&(r=i?o:o+"["+(u||"object"==a||"array"==a?r:"")+"]"),!o&&s?n.add(c.name,c.value):"array"==a||!i&&"object"==a?t(n,c,i,r):n.add(r,c)}))}(r,t,n),r.join("&").replace(/%20/g,"+")}}(n),(e=n).fn.serializeArray=function(){var t,n,r=[],i=function(e){if(e.forEach)return e.forEach(i);r.push({name:t,value:e})};return this[0]&&e.each(this[0].elements,(function(r,o){n=o.type,(t=o.name)&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(e(o).val())})),r},e.fn.serialize=function(){var t=[];return this.serializeArray().forEach((function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))})),t.join("&")},e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},function(){try{getComputedStyle(void 0)}catch(n){var e=getComputedStyle;t.getComputedStyle=function(t,n){try{return e(t,n)}catch(t){return null}}}}(),n}));