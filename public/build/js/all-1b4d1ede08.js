/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 * metismenu - v1.1.3
 * Easy menu jQuery plugin for Twitter Bootstrap 3
 * https://github.com/onokumus/metisMenu
 *
 * Made by Osman Nuri Okumus
 * Under MIT License
 */
!function(a,b,c){function d(b,c){this.element=a(b),this.settings=a.extend({},f,c),this._defaults=f,this._name=e,this.init()}var e="metisMenu",f={toggle:!0,doubleTapToGo:!1};d.prototype={init:function(){var b=this.element,d=this.settings.toggle,f=this;this.isIE()<=9?(b.find("li.active").has("ul").children("ul").collapse("show"),b.find("li").not(".active").has("ul").children("ul").collapse("hide")):(b.find("li.active").has("ul").children("ul").addClass("collapse in"),b.find("li").not(".active").has("ul").children("ul").addClass("collapse")),f.settings.doubleTapToGo&&b.find("li.active").has("ul").children("a").addClass("doubleTapToGo"),b.find("li").has("ul").children("a").on("click."+e,function(b){return b.preventDefault(),f.settings.doubleTapToGo&&f.doubleTapToGo(a(this))&&"#"!==a(this).attr("href")&&""!==a(this).attr("href")?(b.stopPropagation(),void(c.location=a(this).attr("href"))):(a(this).parent("li").toggleClass("active").children("ul").collapse("toggle"),void(d&&a(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")))})},isIE:function(){for(var a,b=3,d=c.createElement("div"),e=d.getElementsByTagName("i");d.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",e[0];)return b>4?b:a},doubleTapToGo:function(a){var b=this.element;return a.hasClass("doubleTapToGo")?(a.removeClass("doubleTapToGo"),!0):a.parent().children("ul").length?(b.find(".doubleTapToGo").removeClass("doubleTapToGo"),a.addClass("doubleTapToGo"),!1):void 0},remove:function(){this.element.off("."+e),this.element.removeData(e)}},a.fn[e]=function(b){return this.each(function(){var c=a(this);c.data(e)&&c.data(e).remove(),c.data(e,new d(this,b))}),this}}(jQuery,window,document);
$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = $('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});

/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 JÃ¶rn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,d=d.concat(c.errorList)}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b===this.lastElement)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors();var b,c=this.elements().removeData("previousValue").removeAttr("aria-invalid");if(this.settings.unhighlight)for(b=0;c[b];b++)this.settings.unhighlight.call(this,c[b],this.settings.errorClass,"");else c.removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d=a(b),e=b.type;return"radio"===e||"checkbox"===e?this.findByName(b.name).filter(":checked").val():"number"===e&&"undefined"!=typeof b.validity?b.validity.badInput?!1:d.val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g=this.errorsFor(b),h=this.idOrName(b),i=a(b).attr("aria-describedby");g.length?(g.removeClass(this.settings.validClass).addClass(this.settings.errorClass),g.html(c)):(g=a("<"+this.settings.errorElement+">").attr("id",h+"-error").addClass(this.settings.errorClass).html(c||""),d=g,this.settings.wrapper&&(d=g.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),g.is("label")?g.attr("for",h):0===g.parents("label[for='"+h+"']").length&&(f=g.attr("id").replace(/(:|\.|\[|\]|\$)/g,"\\$1"),i?i.match(new RegExp("\\b"+f+"\\b"))||(i+=" "+f):i=f,a(b).attr("aria-describedby",i),e=this.groups[b.name],e&&a.each(this.groups,function(b,c){c===e&&a("[name='"+b+"']",this.currentForm).attr("aria-describedby",g.attr("id"))}))),!c&&this.settings.success&&(g.text(""),"string"==typeof this.settings.success?g.addClass(this.settings.success):this.settings.success(g,b)),this.toShow=this.toShow.add(g)},errorsFor:function(b){var c=this.idOrName(b),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+d.replace(/\s+/g,", #")),this.errors().filter(e)},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.off(".validate-equalTo").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return Bb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){vb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return o(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){sc[a]||(e(b),sc[a]=!0)}function h(a,b){return function(c){return r(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return 0>b-f?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)}function k(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&12>b&&(b+=12),d||12!==b||(b=0),b):b}function l(){}function m(a,b){b!==!1&&H(a),p(this,a),this._d=new Date(+a._d),uc===!1&&(uc=!0,vb.updateOffset(this),uc=!1)}function n(a){var b=A(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=vb.localeData(),this._bubble()}function o(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function p(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Kb.length>0)for(c in Kb)d=Kb[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function q(a){return 0>a?Math.ceil(a):Math.floor(a)}function r(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function s(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function t(a,b){var c;return b=M(b,a),a.isBefore(b)?c=s(a,b):(c=s(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function u(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=vb.duration(c,d),v(this,e,a),this}}function v(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&pb(a,"Date",ob(a,"Date")+f*c),g&&nb(a,ob(a,"Month")+g*c),d&&vb.updateOffset(a,f||g)}function w(a){return"[object Array]"===Object.prototype.toString.call(a)}function x(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function y(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&C(a[d])!==C(b[d]))&&g++;return g+f}function z(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=lc[a]||mc[b]||b}return a}function A(a){var b,d,e={};for(d in a)c(a,d)&&(b=z(d),b&&(e[b]=a[d]));return e}function B(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}vb[b]=function(e,f){var g,h,i=vb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=vb().utc().set(d,a);return i.call(vb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function C(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function D(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function E(a,b,c){return jb(vb([a,11,31+b-c]),b,c).week}function F(a){return G(a)?366:365}function G(a){return a%4===0&&a%100!==0||a%400===0}function H(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Db]<0||a._a[Db]>11?Db:a._a[Eb]<1||a._a[Eb]>D(a._a[Cb],a._a[Db])?Eb:a._a[Fb]<0||a._a[Fb]>24||24===a._a[Fb]&&(0!==a._a[Gb]||0!==a._a[Hb]||0!==a._a[Ib])?Fb:a._a[Gb]<0||a._a[Gb]>59?Gb:a._a[Hb]<0||a._a[Hb]>59?Hb:a._a[Ib]<0||a._a[Ib]>999?Ib:-1,a._pf._overflowDayOfYear&&(Cb>b||b>Eb)&&(b=Eb),a._pf.overflow=b)}function I(b){return null==b._isValid&&(b._isValid=!isNaN(b._d.getTime())&&b._pf.overflow<0&&!b._pf.empty&&!b._pf.invalidMonth&&!b._pf.nullInput&&!b._pf.invalidFormat&&!b._pf.userInvalidated,b._strict&&(b._isValid=b._isValid&&0===b._pf.charsLeftOver&&0===b._pf.unusedTokens.length&&b._pf.bigHour===a)),b._isValid}function J(a){return a?a.toLowerCase().replace("_","-"):a}function K(a){for(var b,c,d,e,f=0;f<a.length;){for(e=J(a[f]).split("-"),b=e.length,c=J(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=L(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&y(e,c,!0)>=b-1)break;b--}f++}return null}function L(a){var b=null;if(!Jb[a]&&Lb)try{b=vb.locale(),require("./locale/"+a),vb.locale(b)}catch(c){}return Jb[a]}function M(a,b){var c,d;return b._isUTC?(c=b.clone(),d=(vb.isMoment(a)||x(a)?+a:+vb(a))-+c,c._d.setTime(+c._d+d),vb.updateOffset(c,!1),c):vb(a).local()}function N(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function O(a){var b,c,d=a.match(Pb);for(b=0,c=d.length;c>b;b++)d[b]=rc[d[b]]?rc[d[b]]:N(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function P(a,b){return a.isValid()?(b=Q(b,a.localeData()),nc[b]||(nc[b]=O(b)),nc[b](a)):a.localeData().invalidDate()}function Q(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Qb.lastIndex=0;d>=0&&Qb.test(a);)a=a.replace(Qb,c),Qb.lastIndex=0,d-=1;return a}function R(a,b){var c,d=b._strict;switch(a){case"Q":return _b;case"DDDD":return bc;case"YYYY":case"GGGG":case"gggg":return d?cc:Tb;case"Y":case"G":case"g":return ec;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?dc:Ub;case"S":if(d)return _b;case"SS":if(d)return ac;case"SSS":if(d)return bc;case"DDD":return Sb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Wb;case"a":case"A":return b._locale._meridiemParse;case"x":return Zb;case"X":return $b;case"Z":case"ZZ":return Xb;case"T":return Yb;case"SSSS":return Vb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?ac:Rb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Rb;case"Do":return d?b._locale._ordinalParse:b._locale._ordinalParseLenient;default:return c=new RegExp($(Z(a.replace("\\","")),"i"))}}function S(a){a=a||"";var b=a.match(Xb)||[],c=b[b.length-1]||[],d=(c+"").match(jc)||["-",0,0],e=+(60*d[1])+C(d[2]);return"+"===d[0]?e:-e}function T(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Db]=3*(C(b)-1));break;case"M":case"MM":null!=b&&(e[Db]=C(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b,a,c._strict),null!=d?e[Db]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Eb]=C(b));break;case"Do":null!=b&&(e[Eb]=C(parseInt(b.match(/\d{1,2}/)[0],10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=C(b));break;case"YY":e[Cb]=vb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Cb]=C(b);break;case"a":case"A":c._meridiem=b;break;case"h":case"hh":c._pf.bigHour=!0;case"H":case"HH":e[Fb]=C(b);break;case"m":case"mm":e[Gb]=C(b);break;case"s":case"ss":e[Hb]=C(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Ib]=C(1e3*("0."+b));break;case"x":c._d=new Date(C(b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=S(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=C(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=vb.parseTwoDigitYear(b)}}function U(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Cb],jb(vb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Cb],jb(vb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=kb(d,e,f,h,g),a._a[Cb]=i.year,a._dayOfYear=i.dayOfYear}function V(a){var c,d,e,f,g=[];if(!a._d){for(e=X(a),a._w&&null==a._a[Eb]&&null==a._a[Db]&&U(a),a._dayOfYear&&(f=b(a._a[Cb],e[Cb]),a._dayOfYear>F(f)&&(a._pf._overflowDayOfYear=!0),d=fb(f,0,a._dayOfYear),a._a[Db]=d.getUTCMonth(),a._a[Eb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];24===a._a[Fb]&&0===a._a[Gb]&&0===a._a[Hb]&&0===a._a[Ib]&&(a._nextDay=!0,a._a[Fb]=0),a._d=(a._useUTC?fb:eb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[Fb]=24)}}function W(a){var b;a._d||(b=A(a._i),a._a=[b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],V(a))}function X(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function Y(b){if(b._f===vb.ISO_8601)return void ab(b);b._a=[],b._pf.empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Q(b._f,b._locale).match(Pb)||[],c=0;c<e.length;c++)f=e[c],d=(h.match(R(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&b._pf.unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),rc[f]?(d?b._pf.empty=!1:b._pf.unusedTokens.push(f),T(f,d,b)):b._strict&&!d&&b._pf.unusedTokens.push(f);b._pf.charsLeftOver=i-j,h.length>0&&b._pf.unusedInput.push(h),b._pf.bigHour===!0&&b._a[Fb]<=12&&(b._pf.bigHour=a),b._a[Fb]=k(b._locale,b._a[Fb],b._meridiem),V(b),H(b)}function Z(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function $(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function _(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=p({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],Y(b),I(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));o(a,c||b)}function ab(a){var b,c,d=a._i,e=fc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=hc.length;c>b;b++)if(hc[b][1].exec(d)){a._f=hc[b][0]+(e[6]||" ");break}for(b=0,c=ic.length;c>b;b++)if(ic[b][1].exec(d)){a._f+=ic[b][0];break}d.match(Xb)&&(a._f+="Z"),Y(a)}else a._isValid=!1}function bb(a){ab(a),a._isValid===!1&&(delete a._isValid,vb.createFromInputFallback(a))}function cb(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function db(b){var c,d=b._i;d===a?b._d=new Date:x(d)?b._d=new Date(+d):null!==(c=Mb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?bb(b):w(d)?(b._a=cb(d.slice(0),function(a){return parseInt(a,10)}),V(b)):"object"==typeof d?W(b):"number"==typeof d?b._d=new Date(d):vb.createFromInputFallback(b)}function eb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function fb(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function gb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function hb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function ib(a,b,c){var d=vb.duration(a).abs(),e=Ab(d.as("s")),f=Ab(d.as("m")),g=Ab(d.as("h")),h=Ab(d.as("d")),i=Ab(d.as("M")),j=Ab(d.as("y")),k=e<oc.s&&["s",e]||1===f&&["m"]||f<oc.m&&["mm",f]||1===g&&["h"]||g<oc.h&&["hh",g]||1===h&&["d"]||h<oc.d&&["dd",h]||1===i&&["M"]||i<oc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,hb.apply({},k)}function jb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=vb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function kb(a,b,c,d,e){var f,g,h=fb(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:F(a-1)+g}}function lb(b){var c,d=b._i,e=b._f;return b._locale=b._locale||vb.localeData(b._l),null===d||e===a&&""===d?vb.invalid({nullInput:!0}):("string"==typeof d&&(b._i=d=b._locale.preparse(d)),vb.isMoment(d)?new m(d,!0):(e?w(e)?_(b):Y(b):db(b),c=new m(b),c._nextDay&&(c.add(1,"d"),c._nextDay=a),c))}function mb(a,b){var c,d;if(1===b.length&&w(b[0])&&(b=b[0]),!b.length)return vb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function nb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),D(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function ob(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function pb(a,b,c){return"Month"===b?nb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function qb(a,b){return function(c){return null!=c?(pb(this,a,c),vb.updateOffset(this,b),this):ob(this,a)}}function rb(a){return 400*a/146097}function sb(a){return 146097*a/400}function tb(a){vb.duration.fn[a]=function(){return this._data[a]}}function ub(a){"undefined"==typeof ender&&(wb=zb.moment,zb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",vb):vb)}for(var vb,wb,xb,yb="2.9.0",zb="undefined"==typeof global||"undefined"!=typeof window&&window!==global.window?this:global,Ab=Math.round,Bb=Object.prototype.hasOwnProperty,Cb=0,Db=1,Eb=2,Fb=3,Gb=4,Hb=5,Ib=6,Jb={},Kb=[],Lb="undefined"!=typeof module&&module&&module.exports,Mb=/^\/?Date\((\-?\d+)/i,Nb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Ob=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Pb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,Qb=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Rb=/\d\d?/,Sb=/\d{1,3}/,Tb=/\d{1,4}/,Ub=/[+\-]?\d{1,6}/,Vb=/\d+/,Wb=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Xb=/Z|[\+\-]\d\d:?\d\d/gi,Yb=/T/i,Zb=/[\+\-]?\d+/,$b=/[\+\-]?\d+(\.\d{1,3})?/,_b=/\d/,ac=/\d\d/,bc=/\d{3}/,cc=/\d{4}/,dc=/[+-]?\d{6}/,ec=/[+-]?\d+/,fc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gc="YYYY-MM-DDTHH:mm:ssZ",hc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],ic=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],jc=/([\+\-]|\d\d)/gi,kc=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),lc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},mc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},nc={},oc={s:45,m:45,h:22,d:26,M:11},pc="DDD w W M D d".split(" "),qc="M D H h m s w W".split(" "),rc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return r(this.year()%100,2)},YYYY:function(){return r(this.year(),4)},YYYYY:function(){return r(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+r(Math.abs(a),6)},gg:function(){return r(this.weekYear()%100,2)},gggg:function(){return r(this.weekYear(),4)},ggggg:function(){return r(this.weekYear(),5)},GG:function(){return r(this.isoWeekYear()%100,2)},GGGG:function(){return r(this.isoWeekYear(),4)},GGGGG:function(){return r(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return C(this.milliseconds()/100)},SS:function(){return r(C(this.milliseconds()/10),2)},SSS:function(){return r(this.milliseconds(),3)},SSSS:function(){return r(this.milliseconds(),3)},Z:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+":"+r(C(a)%60,2)},ZZ:function(){var a=this.utcOffset(),b="+";return 0>a&&(a=-a,b="-"),b+r(C(a/60),2)+r(C(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},x:function(){return this.valueOf()},X:function(){return this.unix()},Q:function(){return this.quarter()}},sc={},tc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],uc=!1;pc.length;)xb=pc.pop(),rc[xb+"o"]=i(rc[xb],xb);for(;qc.length;)xb=qc.pop(),rc[xb+xb]=h(rc[xb],2);rc.DDDD=h(rc.DDD,3),o(l.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b;this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a,b,c){var d,e,f;for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;12>d;d++){if(e=vb.utc([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=vb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b,c){var d=this._calendar[a];return"function"==typeof d?d.apply(b,[c]):d},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function(a){return a},postformat:function(a){return a},week:function(a){return jb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},firstDayOfWeek:function(){return this._week.dow},firstDayOfYear:function(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),vb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),lb(g)},vb.suppressDeprecationWarnings=!1,vb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),vb.min=function(){var a=[].slice.call(arguments,0);return mb("isBefore",a)},vb.max=function(){var a=[].slice.call(arguments,0);return mb("isAfter",a)},vb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),lb(g).utc()},vb.unix=function(a){return vb(1e3*a)},vb.duration=function(a,b){var d,e,f,g,h=a,i=null;return vb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Nb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:C(i[Eb])*d,h:C(i[Fb])*d,m:C(i[Gb])*d,s:C(i[Hb])*d,ms:C(i[Ib])*d}):(i=Ob.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):null==h?h={}:"object"==typeof h&&("from"in h||"to"in h)&&(g=t(vb(h.from),vb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new n(h),vb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},vb.version=yb,vb.defaultFormat=gc,vb.ISO_8601=function(){},vb.momentProperties=Kb,vb.updateOffset=function(){},vb.relativeTimeThreshold=function(b,c){return oc[b]===a?!1:c===a?oc[b]:(oc[b]=c,!0)},vb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return vb.locale(a,b)}),vb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?vb.defineLocale(a,b):vb.localeData(a),c&&(vb.duration._locale=vb._locale=c)),vb._locale._abbr},vb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Jb[a]||(Jb[a]=new l),Jb[a].set(b),vb.locale(a),Jb[a]):(delete Jb[a],null)},vb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return vb.localeData(a)}),vb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return vb._locale;if(!w(a)){if(b=L(a))return b;a=[a]}return K(a)},vb.isMoment=function(a){return a instanceof m||null!=a&&c(a,"_isAMomentObject")},vb.isDuration=function(a){return a instanceof n};for(xb=tc.length-1;xb>=0;--xb)B(tc[xb]);vb.normalizeUnits=function(a){return z(a)},vb.invalid=function(a){var b=vb.utc(0/0);return null!=a?o(b._pf,a):b._pf.userInvalidated=!0,b},vb.parseZone=function(){return vb.apply(null,arguments).parseZone()},vb.parseTwoDigitYear=function(a){return C(a)+(C(a)>68?1900:2e3)},vb.isDate=x,o(vb.fn=m.prototype,{clone:function(){return vb(this)},valueOf:function(){return+this._d-6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=vb(this).utc();return 0<a.year()&&a.year()<=9999?"function"==typeof Date.prototype.toISOString?this.toDate().toISOString():P(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):P(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return I(this)},isDSTShifted:function(){return this._a?this.isValid()&&y(this._a,(this._isUTC?vb.utc(this._a):vb(this._a)).toArray())>0:!1},parsingFlags:function(){return o({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.utcOffset(0,a)},local:function(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(this._dateUtcOffset(),"m")),this},format:function(a){var b=P(this,a||vb.defaultFormat);return this.localeData().postformat(b)},add:u(1,"add"),subtract:u(-1,"subtract"),diff:function(a,b,c){var d,e,f=M(a,this),g=6e4*(f.utcOffset()-this.utcOffset());return b=z(b),"year"===b||"month"===b||"quarter"===b?(e=j(this,f),"quarter"===b?e/=3:"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:q(e)},from:function(a,b){return vb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(vb(),a)},calendar:function(a){var b=a||vb(),c=M(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this,vb(b)))},isLeapYear:function(){return G(this.year())},isDST:function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=gb(a,this.localeData()),this.add(a-b,"d")):b},month:qb("Month",!0),startOf:function(a){switch(a=z(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(b){return b=z(b),b===a||"millisecond"===b?this:this.startOf(b).add(1,"isoWeek"===b?"week":b).subtract(1,"ms")},isAfter:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this>+a):(c=vb.isMoment(a)?+a:+vb(a),c<+this.clone().startOf(b))},isBefore:function(a,b){var c;return b=z("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+a>+this):(c=vb.isMoment(a)?+a:+vb(a),+this.clone().endOf(b)<c)},isBetween:function(a,b,c){return this.isAfter(a,c)&&this.isBefore(b,c)},isSame:function(a,b){var c;return b=z(b||"millisecond"),"millisecond"===b?(a=vb.isMoment(a)?a:vb(a),+this===+a):(c=+vb(a),+this.clone().startOf(b)<=c&&c<=+this.clone().endOf(b))},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=vb.apply(null,arguments),a>this?this:a}),zone:f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",function(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}),utcOffset:function(a,b){var c,d=this._offset||0;return null!=a?("string"==typeof a&&(a=S(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateUtcOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.add(c,"m"),d!==a&&(!b||this._changeInProgress?v(this,vb.duration(a-d,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,vb.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?d:this._dateUtcOffset()},isLocal:function(){return!this._isUTC},isUtcOffset:function(){return this._isUTC},isUtc:function(){return this._isUTC&&0===this._offset},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.utcOffset(this._tzm):"string"==typeof this._i&&this.utcOffset(S(this._i)),this},hasAlignedHourOffset:function(a){return a=a?vb(a).utcOffset():0,(this.utcOffset()-a)%60===0},daysInMonth:function(){return D(this.year(),this.month())},dayOfYear:function(a){var b=Ab((vb(this).startOf("day")-vb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=jb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=jb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=jb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return E(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return E(this.year(),a.dow,a.doy)},get:function(a){return a=z(a),this[a]()},set:function(a,b){var c;if("object"==typeof a)for(c in a)this.set(c,a[c]);else a=z(a),"function"==typeof this[a]&&this[a](b);return this},locale:function(b){var c;return b===a?this._locale._abbr:(c=vb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateUtcOffset:function(){return 15*-Math.round(this._d.getTimezoneOffset()/15)}}),vb.fn.millisecond=vb.fn.milliseconds=qb("Milliseconds",!1),vb.fn.second=vb.fn.seconds=qb("Seconds",!1),vb.fn.minute=vb.fn.minutes=qb("Minutes",!1),vb.fn.hour=vb.fn.hours=qb("Hours",!0),vb.fn.date=qb("Date",!0),vb.fn.dates=f("dates accessor is deprecated. Use date instead.",qb("Date",!0)),vb.fn.year=qb("FullYear",!0),vb.fn.years=f("years accessor is deprecated. Use year instead.",qb("FullYear",!0)),vb.fn.days=vb.fn.day,vb.fn.months=vb.fn.month,vb.fn.weeks=vb.fn.week,vb.fn.isoWeeks=vb.fn.isoWeek,vb.fn.quarters=vb.fn.quarter,vb.fn.toJSON=vb.fn.toISOString,vb.fn.isUTC=vb.fn.isUtc,o(vb.duration.fn=n.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=q(d/1e3),g.seconds=a%60,b=q(a/60),g.minutes=b%60,c=q(b/60),g.hours=c%24,e+=q(c/24),h=q(rb(e)),e-=q(sb(h)),f+=q(e/30),e%=30,h+=q(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return q(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*C(this._months/12)
},humanize:function(a){var b=ib(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=vb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=vb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=z(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=z(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*rb(b),"month"===a?c:c/12;switch(b=this._days+Math.round(sb(this._months/12)),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:vb.fn.lang,locale:vb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale},toJSON:function(){return this.toISOString()}}),vb.duration.fn.toString=vb.duration.fn.toISOString;for(xb in kc)c(kc,xb)&&tb(xb.toLowerCase());vb.duration.fn.asMilliseconds=function(){return this.as("ms")},vb.duration.fn.asSeconds=function(){return this.as("s")},vb.duration.fn.asMinutes=function(){return this.as("m")},vb.duration.fn.asHours=function(){return this.as("h")},vb.duration.fn.asDays=function(){return this.as("d")},vb.duration.fn.asWeeks=function(){return this.as("weeks")},vb.duration.fn.asMonths=function(){return this.as("M")},vb.duration.fn.asYears=function(){return this.as("y")},vb.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===C(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Lb?module.exports=vb:"function"==typeof define&&define.amd?(define(function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(zb.moment=wb),vb}),ub(!0)):ub()}).call(this);
/*!
 DataTables 1.10.10
 Â©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&db(a)}function eb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function fb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function gb(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,
width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function hb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==e;)a.hasOwnProperty(d)&&
(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=
(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(fb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=Q(g),i=b.mRender?Q(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&
(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return R(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=
d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function U(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Z(a);v(a,null,"column-sizing",[a])}function $(a,b){var c=aa(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function ba(a,b){var c=aa(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function ca(a){return aa(a,
"bVisible").length}function aa(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,u;e=0;for(f=b.length;e<f;e++)if(l=b[e],u=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){u[i]===k&&(u[i]=B(a,i,e,"type"));q=d[g](u[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function ib(a,
b,c,d){var e,f,g,j,i,o,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){o=b[e];var q=o.targets!==k?o.targets:o.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],o)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],o);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&d(j,o)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,
{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});
if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function jb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\./g,".")})}function Q(a){if(h.isPlainObject(a)){var b=
{};h.each(a,function(a,c){c&&(b[a]=Q(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);for(var i=0,o=j.length;i<o;i++){f=j[i].match(da);g=j[i].match(V);if(f){j[i]=j[i].replace(da,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=
j.join(".");if(h.isArray(a)){i=0;for(o=a.length;i<o;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function R(a){if(h.isPlainObject(a))return R(a._);if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||
-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,o=e.length-1;i<o;i++){g=e[i].match(da);j=e[i].match(V);if(g){e[i]=e[i].replace(da,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(o=d.length;j<o;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(da,"")]=
d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ea(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=
Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,o,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],u=function(a,b){if("string"===typeof a){var c=a.indexOf("@");-1!==c&&(c=a.substring(c+1),R(a)(d,b.getAttribute(c)))}},S=function(a){if(c===k||
c===i)j=l[i],o=h.trim(a.innerHTML),j&&j._bAttrSrc?(R(j.mData._)(d,o),u(j.mData.sort,a),u(j.mData.type,a),u(j.mData.filter,a)):q?(j._setter||(j._setter=R(j.mData)),j._setter(d,o)):d[i]=o;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)S(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)S(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&R(a.rowId)(d,b);return{data:d,cells:e}}function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,h,l,q;if(null===
e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){h=a.aoColumns[l];i=c?d[l]:H.createElement(h.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if(!c||h.mRender||h.mData!==l)i.innerHTML=B(a,b,l,"display");h.sClass&&(i.className+=" "+h.sClass);h.bVisible&&!c?j.appendChild(i):!h.bVisible&&c&&i.parentNode.removeChild(i);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}v(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role",
"row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?pa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===h("th, td",g).length,o=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),
i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,o);i&&fa(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(o.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(o.sFooterTH);if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}
function ga(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,o;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(o=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+o]!==k&&g[d][f].cell==g[d][f+o].cell;){for(c=
0;c<i;c++)j[d+c][f+o]=1;o++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",o)}}}}function O(a){var b=v(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,o=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&
!lb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:o;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var u=d[c%e];q._sRowStripe!=u&&(h(l).removeClass(q._sRowStripe).addClass(u),q._sRowStripe=u)}v(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ca(a),
"class":a.oClasses.sRowEmpty}).html(c))[0];v(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,o,i]);v(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,o,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));v(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ha(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=
!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,o,l,q,u=0;u<f.length;u++){g=null;j=f[u];if("<"==j){i=h("<div/>")[0];o=f[u+1];if("'"==o||'"'==o){l="";for(q=2;f[u+q]!=o;)l+=f[u+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(o=l.split("."),
i.id=o[0].substr(1,o[0].length-1),i.className=o[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;u+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==j&&d.bFilter)g=pb(a);else if("r"==j&&d.bProcessing)g=qb(a);else if("t"==j)g=rb(a);else if("i"==j&&d.bInfo)g=sb(a);else if("p"==j&&d.bPaginate)g=tb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(o=i.length;q<o;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&
(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function fa(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,o,l,q,u;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;o=g;u=1===l?!0:!1;for(j=0;j<l;j++)for(g=
0;g<q;g++)a[f+g][o+j]={cell:e,unique:u},a[f+g].nTr=d}e=e.nextSibling}}}function qa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],fa(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ra(a,b,c){v(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,
j=a.oInstance,i=function(b){v(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var o=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&o?o:h.extend(!0,b,o);delete g.data}o={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=v(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=
b;v(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(o,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(o,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,o,
l,q=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var k=function(a,b){j.push({name:a,value:b})};k("sEcho",a.iDraw);k("iColumns",c);k("sColumns",D(b,"sName").join(","));k("iDisplayStart",g);k("iDisplayLength",i);var S={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)o=b[g],l=f[g],i="function"==typeof o.mData?"function":o.mData,S.columns.push({data:i,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:l.sSearch,
regex:l.bRegex}}),k("mDataProp_"+g,i),d.bFilter&&(k("sSearch_"+g,l.sSearch),k("bRegex_"+g,l.bRegex),k("bSearchable_"+g,o.bSearchable)),d.bSort&&k("bSortable_"+g,o.bSortable);d.bFilter&&(k("sSearch",e.sSearch),k("bRegex",e.bRegex));d.bSort&&(h.each(q,function(a,b){S.order.push({column:b.col,dir:b.dir});k("iSortCol_"+a,b.col);k("sSortDir_"+a,b.dir)}),k("iSortingCols",q.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:S:b?j:S}function vb(a,b){var c=sa(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=
b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||
b[c]:""!==c?Q(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ha(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==
a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});return b[0]}function ha(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;
d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;v(a,null,"search",[a])}function yb(a){for(var b=m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,o=c.length;i<o;i++)e=c[i],d=a.aoData[e],b[f](a,
d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function xb(a,b,c,d,e,f){if(""!==b)for(var g=a.aiDisplay,d=Qa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],d.test(b)||g.splice(e,1)}function wb(a,b,c,d,e,f){var d=Qa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==m.ext.search.length&&(c=!0);g=zb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||e.length>b.length||0!==b.indexOf(e)||a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=
c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,d){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function va(a){return a.replace(Yb,"\\$1")}function zb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<
g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(wa.innerHTML=i,i=Zb?wa.textContent:wa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,
bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&
(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Db(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/
e)))}function ia(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);ga(a,a.aoHeader);ga(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=w(f.sWidth));v(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=d;T(a);C(a,!1);ta(a,c)},a):(C(a,!1),ta(a))}else setTimeout(function(){ia(a)},200)}
function ta(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&U(a);v(a,null,"plugin-init",[a,b]);v(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);v(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);
a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());O(a)});h(a.nTable).bind("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function tb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+
"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==
b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(v(a,null,"page",[a]),c&&O(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");v(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role",
"grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),o=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||
"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:w(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:w(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(o.removeAttr("id").css("margin-left",0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),
k=b[0],f=b[1],u=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(u.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=u;a.aoDrawCallback.push({fn:Z,sName:"scrolling"});return i[0]}function Z(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,o=j.children("table"),j=a.nScrollBody,l=h(j),q=j.style,u=h(a.nScrollFoot).children("div"),
m=u.children("table"),n=h(a.nTHead),p=h(a.nTable),t=p[0],v=t.style,r=a.nTFoot?h(a.nTFoot):null,Eb=a.oBrowser,Ua=Eb.bScrollOversize,s,L,P,x,y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,U(a);else{a.scrollBarVis=L;p.children("thead, tfoot").remove();x=n.clone().prependTo(p);n=n.find("tr");L=x.find("tr");x.find("th, td").removeAttr("tabindex");
r&&(P=r.clone().prependTo(p),s=r.find("tr"),P=P.find("tr"));c||(q.width="100%",f[0].style.width="100%");h.each(qa(a,x),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});r&&I(function(a){a.style.width=""},P);f=p.outerWidth();if(""===c){v.width="100%";if(Ua&&(p.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))v.width=w(p.outerWidth()-b);f=p.outerWidth()}else""!==d&&(v.width=w(d),f=p.outerWidth());I(C,L);I(function(a){A.push(a.innerHTML);y.push(w(h(a).css("width")))},
L);I(function(a,b){a.style.width=y[b]},n);h(L).height(0);r&&(I(C,P),I(function(a){z.push(w(h(a).css("width")))},P),I(function(a,b){a.style.width=z[b]},s),h(P).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[b]+"</div>";a.style.width=y[b]},L);r&&I(function(a,b){a.innerHTML="";a.style.width=z[b]},P);if(p.outerWidth()<f){s=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(Ua&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))v.width=
w(s-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else s="100%";q.width=w(s);g.width=w(s);r&&(a.nScrollFoot.style.width=w(s));!e&&Ua&&(q.height=w(t.offsetHeight+b));c=p.outerWidth();o[0].style.width=w(c);i.width=w(c);d=p.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(Eb.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";r&&(m[0].style.width=w(c),u[0].style.width=w(c),u[0].style[e]=d?b+"px":"0px");l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=
0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=aa(a,"bVisible"),o=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,u=!1,m,n,p=a.oBrowser,d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)n=c[i[m]],null!==n.sWidth&&
(n.sWidth=Fb(n.sWidthOrig,k),u=!0);if(d||!u&&!f&&!e&&j==ca(a)&&j==o.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=w(o.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");o=qa(a,j.find("thead")[0]);for(m=0;m<i.length;m++)n=c[i[m]],o[m].style.width=null!==n.sWidthOrig&&
""!==n.sWidthOrig?w(n.sWidthOrig):"",n.sWidthOrig&&f&&h(o[m]).append(h("<div/>").css({width:n.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)u=i[m],n=c[u],h(Gb(a,u)).clone(!1).append(n.sContentPadding).appendTo(t);n=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):
l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(o[m]),g=k.outerWidth()-k.width(),k=p.bBounding?Math.ceil(o[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=w(k-g);b.style.width=w(e);n.remove()}l&&(b.style.width=w(l));if((l||f)&&!a._reszEvt)b=function(){h(E).bind("resize.DT-"+a.sInstance,ua(function(){U(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,j=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=
k;a.apply(b,j)},c)):(d=g,a.apply(b,j))}}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",w(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,b){var c=Hb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace($b,""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function w(a){return null===
a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var o=[];f=function(a){a.length&&!h.isArray(a[0])?o.push(a):h.merge(o,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<o.length;a++){i=o[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||"string",o[a]._idx===k&&(o[a]._idx=h.inArray(o[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:o[a][1],
index:o[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function mb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Ib(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];
return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort",
"asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Va(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=
b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Wa(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Va(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Va(a,c,b.shiftKey,d))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=
0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&
!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};v(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&e.time&&(b=v(a,"aoStateLoadParams",
"stateLoadParams",[a,e]),-1===h.inArray(!1,b)&&(b=a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){a.oLoadedState=h.extend(!0,{},e);e.start!==k&&(a._iDisplayStart=e.start,a.iInitDisplayStart=e.start);e.length!==k&&(a._iDisplayLength=e.length);e.order!==k&&(a.aaSorting=[],h.each(e.order,function(b,c){a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)}));e.search!==k&&h.extend(a.oPreviousSearch,Bb(e.search));b=0;for(c=e.columns.length;b<c;b++){var f=e.columns[b];f.visible!==
k&&(d[b].bVisible=f.visible);f.search!==k&&h.extend(a.aoPreSearchCols[b],Bb(f.search))}v(a,"aoStateLoaded","stateLoaded",[a,e])}}}function za(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&v(a,null,"error",[a,d,c]),"alert"==
b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Lb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Wa(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",
b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function v(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=
a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Aa(a,b){var c=[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function db(a){h.each({num:function(b){return Ba(b,
a)},"num-fmt":function(b){return Ba(b,a,Xa)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Xa)}},function(b,c){s.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(s.type.search[b+a]=s.type.search.html)})}function Nb(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m,s,t,p,r,Ya={},Ob=/[\r\n]/g,Ca=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)",
"g"),Xa=/[',$Â£â‚¬Â¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Ya[b]||(Ya[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Ya[b],"."):a},Za=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Xa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===
typeof a)?null:Za(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Sb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);
return b},pa=function(a){var b=[],c,d,e=a.length,f,g=0;d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},da=/\[.*?\]$/,V=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(za(this[s.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),
d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&Z(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],
h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};
this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);
(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[s.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=
s.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=s.internal;for(var e in m.ext.internal)e&&(this[e]=Nb(e));this.each(function(){var e={},e=1<d?Lb(e,a,!0):a,g=0,j,i=this.getAttribute("id"),o=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{eb(l);fb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(e,q.data()));var u=m.settings,g=0;for(j=u.length;g<j;g++){var p=u[g];if(p.nTable==
this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){g=e.bRetrieve!==k?e.bRetrieve:l.bRetrieve;if(c||g)return p.oInstance;if(e.bDestroy!==k?e.bDestroy:l.bDestroy){p.oInstance.fnDestroy();break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){u.splice(g,1);break}}if(null===i||""===i)this.id=i="DataTables_Table_"+m.ext._unique++;var n=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:i,sTableId:i});n.nTable=this;n.oApi=b.internal;
n.oInit=e;u.push(n);n.oInstance=1===b.length?b:q.dataTable();eb(e);e.oLanguage&&Fa(e.oLanguage);e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=h.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]);e=Lb(h.extend(!0,{},l),e);F(n.oFeatures,e,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(n,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu",
"sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(n.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(n.oLanguage,e,"fnInfoCallback");z(n,"aoDrawCallback",
e.fnDrawCallback,"user");z(n,"aoServerParams",e.fnServerParams,"user");z(n,"aoStateSaveParams",e.fnStateSaveParams,"user");z(n,"aoStateLoadParams",e.fnStateLoadParams,"user");z(n,"aoStateLoaded",e.fnStateLoaded,"user");z(n,"aoRowCallback",e.fnRowCallback,"user");z(n,"aoRowCreatedCallback",e.fnCreatedRow,"user");z(n,"aoHeaderCallback",e.fnHeaderCallback,"user");z(n,"aoFooterCallback",e.fnFooterCallback,"user");z(n,"aoInitComplete",e.fnInitComplete,"user");z(n,"aoPreDrawCallback",e.fnPreDrawCallback,
"user");n.rowIdFn=Q(e.rowId);gb(n);i=n.oClasses;e.bJQueryUI?(h.extend(i,m.ext.oJUIClasses,e.oClasses),e.sDom===l.sDom&&"lfrtip"===l.sDom&&(n.sDom='<"H"lfr>t<"F"ip>'),n.renderer)?h.isPlainObject(n.renderer)&&!n.renderer.header&&(n.renderer.header="jqueryui"):n.renderer="jqueryui":h.extend(i,m.ext.classes,e.oClasses);q.addClass(i.sTable);n.iInitDisplayStart===k&&(n.iInitDisplayStart=e.iDisplayStart,n._iDisplayStart=e.iDisplayStart);null!==e.iDeferLoading&&(n.bDeferLoading=!0,g=h.isArray(e.iDeferLoading),
n._iRecordsDisplay=g?e.iDeferLoading[0]:e.iDeferLoading,n._iRecordsTotal=g?e.iDeferLoading[1]:e.iDeferLoading);var t=n.oLanguage;h.extend(!0,t,e.oLanguage);""!==t.sUrl&&(h.ajax({dataType:"json",url:t.sUrl,success:function(a){Fa(a);J(l.oLanguage,a);h.extend(true,t,a);ia(n)},error:function(){ia(n)}}),o=!0);null===e.asStripeClasses&&(n.asStripeClasses=[i.sStripeOdd,i.sStripeEven]);var g=n.asStripeClasses,r=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(g,function(a){return r.hasClass(a)}))&&
(h("tbody tr",this).removeClass(g.join(" ")),n.asDestroyStripes=g.slice());u=[];g=this.getElementsByTagName("thead");0!==g.length&&(fa(n.aoHeader,g[0]),u=qa(n));if(null===e.aoColumns){p=[];g=0;for(j=u.length;g<j;g++)p.push(null)}else p=e.aoColumns;g=0;for(j=p.length;g<j;g++)Ga(n,u?u[g]:null);ib(n,e.aoColumnDefs,p,function(a,b){la(n,a,b)});if(r.length){var s=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(r[0]).children("th, td").each(function(a,b){var c=n.aoColumns[a];if(c.mData===
a){var d=s(b,"sort")||s(b,"order"),e=s(b,"filter")||s(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(n,a)}}})}var w=n.oFeatures;e.bStateSave&&(w.bStateSave=!0,Kb(n,e),z(n,"aoDrawCallback",ya,"state_save"));if(e.aaSorting===k){u=n.aaSorting;g=0;for(j=u.length;g<j;g++)u[g][1]=n.aoColumns[g].asSorting[0]}xa(n);w.bSort&&z(n,"aoDrawCallback",function(){if(n.bSorted){var a=W(n),b={};h.each(a,function(a,
c){b[c.src]=c.dir});v(n,null,"order",[n,a,b]);Jb(n)}});z(n,"aoDrawCallback",function(){(n.bSorted||y(n)==="ssp"||w.bDeferRender)&&xa(n)},"sc");g=q.children("caption").each(function(){this._captionSide=q.css("caption-side")});j=q.children("thead");0===j.length&&(j=h("<thead/>").appendTo(this));n.nTHead=j[0];j=q.children("tbody");0===j.length&&(j=h("<tbody/>").appendTo(this));n.nTBody=j[0];j=q.children("tfoot");if(0===j.length&&0<g.length&&(""!==n.oScroll.sX||""!==n.oScroll.sY))j=h("<tfoot/>").appendTo(this);
0===j.length||0===j.children().length?q.addClass(i.sNoFooter):0<j.length&&(n.nTFoot=j[0],fa(n.aoFooter,n.nTFoot));if(e.aaData)for(g=0;g<e.aaData.length;g++)N(n,e.aaData[g]);else(n.bDeferLoading||"dom"==y(n))&&ma(n,h(n.nTBody).children("tr"));n.aiDisplay=n.aiDisplayMaster.slice();n.bInitialised=!0;!1===o&&ia(n)}});b=null;return this};var Tb=[],x=Array.prototype,cc=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=
h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof t))return new t(a,b);var c=[],d=function(a){(a=cc(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=pa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};
t.extend(this,this,Tb)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:x.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,
b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,o,l=this.context,m,p,r=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var n=new t(l[g]);if("table"===b)f=c.call(n,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(n,l[g],this[g],g),f!==k&&e.push(f);
else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],r.opts));i=0;for(o=p.length;i<o;i++)f=p[i],f="cell"===b?c.call(n,l[g],f.row,f.column,g,i):c.call(n,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=r.rows,b.cols=r.cols,b.opts=r.opts,a):this},lastIndexOf:x.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=
x.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,push:x.push,reduce:x.reduce||function(a,b){return hb(this,a,b,0,this.length,1)},reduceRight:x.reduceRight||function(a,b){return hb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,shift:x.shift,sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return h(this)},
toJQuery:function(){return h(this)},unique:function(){return new t(this.context,pa(this))},unshift:x.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=
0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Tb,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var k=f.length;i<k;i++)if(f[i].name===g){i=f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=r=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?
new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});r("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});r("tables().body()",
"table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});r("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});r("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});r("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",
function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),
recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){if(c){var d=new t(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ra(a,[],function(c){na(a);for(var c=sa(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<
a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",
function(c){Ub(c,!1===b,a)})});var $a=function(a,b,c,d,e){var f=[],g,j,i,o,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(o=b.length;i<o;i++){j=b[i]&&b[i].split?b[i].split(","):[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=s.selector[a];if(a.length){i=0;for(o=a.length;i<o;i++)f=a[i](d,e,f)}return pa(f)},ab=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",
order:"current",page:"all"},a)},bb=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,
function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=b;return $a("row",a,function(a){var b=Pb(a);if(b!==null&&!e)return[b];var j=Da(c,e);if(b!==null&&h.inArray(b,j)!==-1)return[b];if(!a)return j;if(typeof a==="function")return h.map(j,
function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Sb(ja(c.aoData,j,"nTr"));if(a.nodeName&&h.inArray(a,b)!==-1)return[a._DT_RowIndex];if(typeof a==="string"&&a.charAt(0)==="#"){j=c.aIds[a.replace(/^#/,"")];if(j!==k)return[j.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,
"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});r("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});r("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ea(b,c,a)})});r("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});r("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,
d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});r("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,o,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(o=l.length;i<o;i++)l[i]._DT_CellIndex.row=g}oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);
Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return bb(this.rows(a,b))});p("row().data()",function(a){var b=
this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=a;ea(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:N(b,a)});return this.row(b[0])});var cb=function(a,b){var c=a.context;if(c.length&&
(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Vb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];
a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===b)for(var c,d=ca(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&cb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===
a)cb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ca(d),e.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Vb(this,
!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});p(["row().child.remove()","row().child().remove()"],function(){cb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&
(b=a,a="");var b=ab(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,j=D(g,"sName"),i=D(g,"nTh");return $a("column",e,function(a){var b=Pb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(dc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});
return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===k[1]?b:null})}else return h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray()},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});r("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});r("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});r("columns().data()",
"column().data()",function(){return this.iterator("column-rows",Wb,1)});r("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});r("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});r("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,
e,"anCells",b)},1)});r("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,d){if(a===k)return c.aoColumns[d].bVisible;var e=c.aoColumns,f=e[d],g=c.aoData,j,i,m;if(a!==k&&f.bVisible!==a){if(a){var l=h.inArray(!0,D(e,"bVisible"),d+1);j=0;for(i=g.length;j<i;j++)m=g[j].nTr,e=g[j].anCells,m&&m.insertBefore(e[d],e[l]||null)}else h(D(c.aoData,"anCells",d)).detach();f.bVisible=a;ga(c,c.aoHeader);ga(c,c.aoFooter);if(b===k||b)U(c),(c.oScroll.sX||c.oScroll.sY)&&
Z(c);v(c,null,"column-visibility",[c,d,a,b]);ya(c)}})});r("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?ba(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){U(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});p("column()",function(a,b){return bb(this.columns(a,
b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=ab(c),f=b.aoData,g=Da(b,e),j=Sb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,m=b.aoColumns.length,o,p,t,r,s,v;return $a("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){o=[];p=0;for(t=g.length;p<t;p++){l=g[p];for(r=0;r<m;r++){s={row:l,column:r};if(c){v=f[l];a(s,B(b,l,r),v.anCells?
v.anCells[r]:null)&&o.push(s)}else o.push(s)}}return o}return h.isPlainObject(a)?[a]:i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray()},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,j,i,m,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(m=d[b].length;i<m;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});r("cells().nodes()","cell().node()",function(){return this.iterator("cell",
function(a,b,c){return(a=a.aoData[b].anCells)?a[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});r("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});r("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});r("cells().indexes()","cell().index()",function(){return this.iterator("cell",
function(a,b,c){return{row:b,column:c,columnVisible:ba(a,c)}},1)});r("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ea(b,c,a,d)})});p("cell()",function(a,b,c){return bb(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;jb(b[0],c[0].row,c[0].column,a);ea(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===
k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()",
"column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ha(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});r("columns().search()","column().search()",function(a,
b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ha(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?
this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){ya(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:
null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);
a[0].match(/\.dt\b/)||(a[0]+=".dt");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",function(a){na(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=
b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;v(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(E).unbind(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];xa(b);
h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=
b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=Q(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);
return a.replace("%d",c)});m.version="1.10.10";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,
sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,
bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+
a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},
oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No hay datos disponibles",sInfo:"Data _START_ hasta _END_ de _TOTAL_ Registro",sInfoEmpty:"Data 0 to 0 of 0 Registro",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Ver _MENU_ Entradas",sLoadingRecords:"Cargando...",sProcessing:"Processing...",sSearch:"Buscar:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"Datos no Encontrado"},oSearch:h.extend({},
m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};
Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],
aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",
iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?
1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};
m.ext=s={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(s,{afnFiltering:s.search,aTypes:s.type.detect,ofnSearch:s.type.search,oSort:s.type.order,afnSortData:s.order,aoFeatures:s.feature,oApi:s.internal,oStdClasses:s.classes,
oPagination:s.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",
sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",
sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Xb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",
sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+
" ui-corner-bl ui-corner-br"});var Mb=m.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[Aa(a,b)]},simple_numbers:function(a,b){return["previous",Aa(a,b),"next"]},full_numbers:function(a,b){return["first","previous",Aa(a,b),"next","last"]},_numbers:Aa,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||
{},k,l,m=0,p=function(b,d){var n,r,t,s,v=function(b){Ta(a,b.data.action,true)};n=0;for(r=d.length;n<r;n++){s=d[n];if(h.isArray(s)){t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);p(t,s)}else{k=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":k=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":k=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":k=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":k=
j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:k=s+1;l=e===s?g.sPageButtonActive:""}if(k!==null){t=h("<a>",{"class":g.sPageButton+" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":m,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(k).appendTo(b);Wa(t,{action:s},v);m++}}}},r;try{r=h(b).find(H.activeElement).data("dt-idx")}catch(n){}p(h(b).empty(),d);r&&h(b).find("[data-dt-idx="+r+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=
b.oLanguage.sDecimal;return Za(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Za(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":
null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""},string:function(a){return M(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(s.type.order,{"date-pre":function(a){return Date.parse(a)||0},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():
a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});db("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,
b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:
h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return f;f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):
a}}}};h.extend(m.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ra,_fnAjaxUpdate:lb,_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:sa,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:U,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:ba,_fnVisbleColumns:ca,_fnGetColumns:aa,_fnColumnTypes:Ia,_fnApplyColumnDefs:ib,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:gb,_fnAddData:N,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:
null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:jb,_fnSplitObjNotation:La,_fnGetObjectDataFn:Q,_fnSetObjectDataFn:R,_fnGetDataMaster:Ma,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ea,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:kb,_fnDrawHead:ga,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:nb,_fnDetectHeader:fa,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ha,_fnFilterCustom:yb,_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Qa,
_fnEscapeRegex:va,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,_fnInfoMacros:Db,_fnInitialise:ia,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:Z,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:ua,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:w,_fnSortFlatten:W,_fnSort:mb,_fnSortAria:Jb,_fnSortListener:Va,
_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:K,_fnMap:F,_fnBindAction:Wa,_fnCallbackReg:z,_fnCallbackFire:v,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});

/*!
 DataTables Bootstrap 3 integration
 Â©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,e){a||(a=window);if(!e||!e.fn.dataTable)e=require("datatables.net")(a,e).$;return b(e,a,a.document)}:b(jQuery,window,document)})(function(b,a,e){var d=b.fn.dataTable;b.extend(!0,d.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"});b.extend(d.ext.classes,
{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm",sProcessing:"dataTables_processing panel panel-default"});d.ext.renderer.pageButton.bootstrap=function(a,h,r,m,j,n){var o=new d.Api(a),s=a.oClasses,k=a.oLanguage.oPaginate,t=a.oLanguage.oAria.paginate||{},f,g,p=0,q=function(d,e){var l,h,i,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
l=0;for(h=e.length;l<h;l++)if(c=e[l],b.isArray(c))q(d,c);else{g=f="";switch(c){case "ellipsis":f="&#x2026;";g="disabled";break;case "first":f=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":f=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":f=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":f=k.sLast;g=c+(j<n-1?"":" disabled");break;default:f=c+1,g=j===c?"active":""}f&&(i=b("<li>",{"class":s.sPageButton+" "+g,id:0===r&&"string"===typeof c?a.sTableId+"_"+c:null}).append(b("<a>",{href:"#",
"aria-controls":a.sTableId,"aria-label":t[c],"data-dt-idx":p,tabindex:a.iTabIndex}).html(f)).appendTo(d),a.oApi._fnBindAction(i,{action:c},m),p++)}},i;try{i=b(h).find(e.activeElement).data("dt-idx")}catch(u){}q(b(h).empty().html('<ul class="pagination"/>').children("ul"),m);i&&b(h).find("[data-dt-idx="+i+"]").focus()};d.TableTools&&(b.extend(!0,d.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",
buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info"},select:{row:"active"}}),b.extend(!0,d.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}));return d});

/*!
 * FullCalendar v2.4.0
 * Docs & License: http://fullcalendar.io/
 * (c) 2015 Adam Shaw
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery","moment"],a):"object"==typeof exports?module.exports=a(require("jquery"),require("moment")):a(jQuery,moment)}(function(a,b){function c(a){return Q(a,Oa)}function d(b){var c,d={views:b.views||{}};return a.each(b,function(b,e){"views"!=b&&(a.isPlainObject(e)&&!/(time|duration|interval)$/i.test(b)&&-1==a.inArray(b,Oa)?(c=null,a.each(e,function(a,e){/^(month|week|day|default|basic(Week|Day)?|agenda(Week|Day)?)$/.test(a)?(d.views[a]||(d.views[a]={}),d.views[a][b]=e):(c||(c={}),c[a]=e)}),c&&(d[b]=c)):d[b]=e)}),d}function e(a,b){b.left&&a.css({"border-left-width":1,"margin-left":b.left-1}),b.right&&a.css({"border-right-width":1,"margin-right":b.right-1})}function f(a){a.css({"margin-left":"","margin-right":"","border-left-width":"","border-right-width":""})}function g(){a("body").addClass("fc-not-allowed")}function h(){a("body").removeClass("fc-not-allowed")}function i(b,c,d){var e=Math.floor(c/b.length),f=Math.floor(c-e*(b.length-1)),g=[],h=[],i=[],k=0;j(b),b.each(function(c,d){var j=c===b.length-1?f:e,l=a(d).outerHeight(!0);j>l?(g.push(d),h.push(l),i.push(a(d).height())):k+=l}),d&&(c-=k,e=Math.floor(c/g.length),f=Math.floor(c-e*(g.length-1))),a(g).each(function(b,c){var d=b===g.length-1?f:e,j=h[b],k=i[b],l=d-(j-k);d>j&&a(c).height(l)})}function j(a){a.height("")}function k(b){var c=0;return b.find("> *").each(function(b,d){var e=a(d).outerWidth();e>c&&(c=e)}),c++,b.width(c),c}function l(a,b){return a.height(b).addClass("fc-scroller"),a[0].scrollHeight-1>a[0].clientHeight?!0:(m(a),!1)}function m(a){a.height("").removeClass("fc-scroller")}function n(b){var c=b.css("position"),d=b.parents().filter(function(){var b=a(this);return/(auto|scroll)/.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&d.length?d:a(b[0].ownerDocument||document)}function o(a){var b=a.offset();return{left:b.left,right:b.left+a.outerWidth(),top:b.top,bottom:b.top+a.outerHeight()}}function p(a){var b=a.offset(),c=r(a),d=b.left+u(a,"border-left-width")+c.left,e=b.top+u(a,"border-top-width")+c.top;return{left:d,right:d+a[0].clientWidth,top:e,bottom:e+a[0].clientHeight}}function q(a){var b=a.offset(),c=b.left+u(a,"border-left-width")+u(a,"padding-left"),d=b.top+u(a,"border-top-width")+u(a,"padding-top");return{left:c,right:c+a.width(),top:d,bottom:d+a.height()}}function r(a){var b=a.innerWidth()-a[0].clientWidth,c={left:0,right:0,top:0,bottom:a.innerHeight()-a[0].clientHeight};return s()&&"rtl"==a.css("direction")?c.left=b:c.right=b,c}function s(){return null===Pa&&(Pa=t()),Pa}function t(){var b=a("<div><div/></div>").css({position:"absolute",top:-1e3,left:0,border:0,padding:0,overflow:"scroll",direction:"rtl"}).appendTo("body"),c=b.children(),d=c.offset().left>b.offset().left;return b.remove(),d}function u(a,b){return parseFloat(a.css(b))||0}function v(a){return 1==a.which&&!a.ctrlKey}function w(a,b){var c={left:Math.max(a.left,b.left),right:Math.min(a.right,b.right),top:Math.max(a.top,b.top),bottom:Math.min(a.bottom,b.bottom)};return c.left<c.right&&c.top<c.bottom?c:!1}function x(a,b){return{left:Math.min(Math.max(a.left,b.left),b.right),top:Math.min(Math.max(a.top,b.top),b.bottom)}}function y(a){return{left:(a.left+a.right)/2,top:(a.top+a.bottom)/2}}function z(a,b){return{left:a.left-b.left,top:a.top-b.top}}function A(b){var c,d,e=[],f=[];for("string"==typeof b?f=b.split(/\s*,\s*/):"function"==typeof b?f=[b]:a.isArray(b)&&(f=b),c=0;c<f.length;c++)d=f[c],"string"==typeof d?e.push("-"==d.charAt(0)?{field:d.substring(1),order:-1}:{field:d,order:1}):"function"==typeof d&&e.push({func:d});return e}function B(a,b,c){var d,e;for(d=0;d<c.length;d++)if(e=C(a,b,c[d]))return e;return 0}function C(a,b,c){return c.func?c.func(a,b):D(a[c.field],b[c.field])*(c.order||1)}function D(b,c){return b||c?null==c?-1:null==b?1:"string"===a.type(b)||"string"===a.type(c)?String(b).localeCompare(String(c)):b-c:0}function E(a,b){var c,d,e,f,g=a.start,h=a.end,i=b.start,j=b.end;return h>i&&j>g?(g>=i?(c=g.clone(),e=!0):(c=i.clone(),e=!1),j>=h?(d=h.clone(),f=!0):(d=j.clone(),f=!1),{start:c,end:d,isStart:e,isEnd:f}):void 0}function F(a,c){return b.duration({days:a.clone().stripTime().diff(c.clone().stripTime(),"days"),ms:a.time()-c.time()})}function G(a,c){return b.duration({days:a.clone().stripTime().diff(c.clone().stripTime(),"days")})}function H(a,c,d){return b.duration(Math.round(a.diff(c,d,!0)),d)}function I(a,b){var c,d,e;for(c=0;c<Ra.length&&(d=Ra[c],e=J(d,a,b),!(e>=1&&ba(e)));c++);return d}function J(a,c,d){return null!=d?d.diff(c,a,!0):b.isDuration(c)?c.as(a):c.end.diff(c.start,a,!0)}function K(a,b,c){var d;return N(c)?(b-a)/c:(d=c.asMonths(),Math.abs(d)>=1&&ba(d)?b.diff(a,"months",!0)/d:b.diff(a,"days",!0)/c.asDays())}function L(a,b){var c,d;return N(a)||N(b)?a/b:(c=a.asMonths(),d=b.asMonths(),Math.abs(c)>=1&&ba(c)&&Math.abs(d)>=1&&ba(d)?c/d:a.asDays()/b.asDays())}function M(a,c){var d;return N(a)?b.duration(a*c):(d=a.asMonths(),Math.abs(d)>=1&&ba(d)?b.duration({months:d*c}):b.duration({days:a.asDays()*c}))}function N(a){return Boolean(a.hours()||a.minutes()||a.seconds()||a.milliseconds())}function O(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function P(a){return/^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(a)}function Q(a,b){var c,d,e,f,g,h,i={};if(b)for(c=0;c<b.length;c++){for(d=b[c],e=[],f=a.length-1;f>=0;f--)if(g=a[f][d],"object"==typeof g)e.unshift(g);else if(void 0!==g){i[d]=g;break}e.length&&(i[d]=Q(e))}for(c=a.length-1;c>=0;c--){h=a[c];for(d in h)d in i||(i[d]=h[d])}return i}function R(a){var b=function(){};return b.prototype=a,new b}function S(a,b){for(var c in a)U(a,c)&&(b[c]=a[c])}function T(a,b){var c,d,e=["constructor","toString","valueOf"];for(c=0;c<e.length;c++)d=e[c],a[d]!==Object.prototype[d]&&(b[d]=a[d])}function U(a,b){return Va.call(a,b)}function V(b){return/undefined|null|boolean|number|string/.test(a.type(b))}function W(b,c,d){if(a.isFunction(b)&&(b=[b]),b){var e,f;for(e=0;e<b.length;e++)f=b[e].apply(c,d)||f;return f}}function X(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]}function Y(a){return(a+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Z(a){return a.replace(/&.*?;/g,"")}function $(b){var c=[];return a.each(b,function(a,b){null!=b&&c.push(a+":"+b)}),c.join(";")}function _(a){return a.charAt(0).toUpperCase()+a.slice(1)}function aa(a,b){return a-b}function ba(a){return a%1===0}function ca(a,b){var c=a[b];return function(){return c.apply(a,arguments)}}function da(a,b){var c,d,e,f,g=function(){var h=+new Date-f;b>h&&h>0?c=setTimeout(g,b-h):(c=null,a.apply(e,d),c||(e=d=null))};return function(){e=this,d=arguments,f=+new Date,c||(c=setTimeout(g,b))}}function ea(c,d,e){var f,g,h,i,j=c[0],k=1==c.length&&"string"==typeof j;return b.isMoment(j)?(i=b.apply(null,c),ga(j,i)):O(j)||void 0===j?i=b.apply(null,c):(f=!1,g=!1,k?Wa.test(j)?(j+="-01",c=[j],f=!0,g=!0):(h=Xa.exec(j))&&(f=!h[5],g=!0):a.isArray(j)&&(g=!0),i=d||f?b.utc.apply(b,c):b.apply(null,c),f?(i._ambigTime=!0,i._ambigZone=!0):e&&(g?i._ambigZone=!0:k&&(i.utcOffset?i.utcOffset(j):i.zone(j)))),i._fullCalendar=!0,i}function fa(a,c){var d,e,f=!1,g=!1,h=a.length,i=[];for(d=0;h>d;d++)e=a[d],b.isMoment(e)||(e=Ma.moment.parseZone(e)),f=f||e._ambigTime,g=g||e._ambigZone,i.push(e);for(d=0;h>d;d++)e=i[d],c||!f||e._ambigTime?g&&!e._ambigZone&&(i[d]=e.clone().stripZone()):i[d]=e.clone().stripTime();return i}function ga(a,b){a._ambigTime?b._ambigTime=!0:b._ambigTime&&(b._ambigTime=!1),a._ambigZone?b._ambigZone=!0:b._ambigZone&&(b._ambigZone=!1)}function ha(a,b){a.year(b[0]||0).month(b[1]||0).date(b[2]||0).hours(b[3]||0).minutes(b[4]||0).seconds(b[5]||0).milliseconds(b[6]||0)}function ia(a,b){return Za.format.call(a,b)}function ja(a,b){return ka(a,pa(b))}function ka(a,b){var c,d="";for(c=0;c<b.length;c++)d+=la(a,b[c]);return d}function la(a,b){var c,d;return"string"==typeof b?b:(c=b.token)?$a[c]?$a[c](a):ia(a,c):b.maybe&&(d=ka(a,b.maybe),d.match(/[1-9]/))?d:""}function ma(a,b,c,d,e){var f;return a=Ma.moment.parseZone(a),b=Ma.moment.parseZone(b),f=(a.localeData||a.lang).call(a),c=f.longDateFormat(c)||c,d=d||" - ",na(a,b,pa(c),d,e)}function na(a,b,c,d,e){var f,g,h,i,j="",k="",l="",m="",n="";for(g=0;g<c.length&&(f=oa(a,b,c[g]),f!==!1);g++)j+=f;for(h=c.length-1;h>g&&(f=oa(a,b,c[h]),f!==!1);h--)k=f+k;for(i=g;h>=i;i++)l+=la(a,c[i]),m+=la(b,c[i]);return(l||m)&&(n=e?m+d+l:l+d+m),j+n+k}function oa(a,b,c){var d,e;return"string"==typeof c?c:(d=c.token)&&(e=_a[d.charAt(0)],e&&a.isSame(b,e))?ia(a,d):!1}function pa(a){return a in ab?ab[a]:ab[a]=qa(a)}function qa(a){for(var b,c=[],d=/\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g;b=d.exec(a);)b[1]?c.push(b[1]):b[2]?c.push({maybe:qa(b[2])}):b[3]?c.push({token:b[3]}):b[5]&&c.push(b[5]);return c}function ra(){}function sa(a,b){return a||b?a&&b?a.grid===b.grid&&a.row===b.row&&a.col===b.col:!1:!0}function ta(a){var b=va(a);return"background"===b||"inverse-background"===b}function ua(a){return"inverse-background"===va(a)}function va(a){return X((a.source||{}).rendering,a.rendering)}function wa(a){var b,c,d={};for(b=0;b<a.length;b++)c=a[b],(d[c._id]||(d[c._id]=[])).push(c);return d}function xa(a,b){return a.eventStartMS-b.eventStartMS}function ya(c){var d,e,f,g,h=Ma.dataAttrPrefix;return h&&(h+="-"),d=c.data(h+"event")||null,d&&(d="object"==typeof d?a.extend({},d):{},e=d.start,null==e&&(e=d.time),f=d.duration,g=d.stick,delete d.start,delete d.time,delete d.duration,delete d.stick),null==e&&(e=c.data(h+"start")),null==e&&(e=c.data(h+"time")),null==f&&(f=c.data(h+"duration")),null==g&&(g=c.data(h+"stick")),e=null!=e?b.duration(e):null,f=null!=f?b.duration(f):null,g=Boolean(g),{eventProps:d,startTime:e,duration:f,stick:g}}function za(a,b){var c,d;for(c=0;c<b.length;c++)if(d=b[c],d.leftCol<=a.rightCol&&d.rightCol>=a.leftCol)return!0;return!1}function Aa(a,b){return a.leftCol-b.leftCol}function Ba(a){var b,c,d,e=[];for(b=0;b<a.length;b++){for(c=a[b],d=0;d<e.length&&Ea(c,e[d]).length;d++);c.level=d,(e[d]||(e[d]=[])).push(c)}return e}function Ca(a){var b,c,d,e,f;for(b=0;b<a.length;b++)for(c=a[b],d=0;d<c.length;d++)for(e=c[d],e.forwardSegs=[],f=b+1;f<a.length;f++)Ea(e,a[f],e.forwardSegs)}function Da(a){var b,c,d=a.forwardSegs,e=0;if(void 0===a.forwardPressure){for(b=0;b<d.length;b++)c=d[b],Da(c),e=Math.max(e,1+c.forwardPressure);a.forwardPressure=e}}function Ea(a,b,c){c=c||[];for(var d=0;d<b.length;d++)Fa(a,b[d])&&c.push(b[d]);return c}function Fa(a,b){return a.bottom>b.top&&a.top<b.bottom}function Ga(c,d){function e(){U?h()&&(k(),i()):f()}function f(){V=O.theme?"ui":"fc",c.addClass("fc"),O.isRTL?c.addClass("fc-rtl"):c.addClass("fc-ltr"),O.theme?c.addClass("ui-widget"):c.addClass("fc-unthemed"),U=a("<div class='fc-view-container'/>").prependTo(c),S=N.header=new Ja(N,O),T=S.render(),T&&c.prepend(T),i(O.defaultView),O.handleWindowResize&&(Y=da(m,O.windowResizeDelay),a(window).resize(Y))}function g(){W&&W.removeElement(),S.removeElement(),U.remove(),c.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"),Y&&a(window).unbind("resize",Y)}function h(){return c.is(":visible")}function i(b){ca++,W&&b&&W.type!==b&&(S.deactivateButton(W.type),H(),W.removeElement(),W=N.view=null),!W&&b&&(W=N.view=ba[b]||(ba[b]=N.instantiateView(b)),W.setElement(a("<div class='fc-view fc-"+b+"-view' />").appendTo(U)),S.activateButton(b)),W&&(Z=W.massageCurrentDate(Z),W.displaying&&Z.isWithin(W.intervalStart,W.intervalEnd)||h()&&(H(),W.display(Z),I(),u(),v(),q())),I(),ca--}function j(a){return h()?(a&&l(),ca++,W.updateSize(!0),ca--,!0):void 0}function k(){h()&&l()}function l(){X="number"==typeof O.contentHeight?O.contentHeight:"number"==typeof O.height?O.height-(T?T.outerHeight(!0):0):Math.round(U.width()/Math.max(O.aspectRatio,.5))}function m(a){!ca&&a.target===window&&W.start&&j(!0)&&W.trigger("windowResize",aa)}function n(){p(),r()}function o(){h()&&(H(),W.displayEvents(ea),I())}function p(){H(),W.clearEvents(),I()}function q(){!O.lazyFetching||$(W.start,W.end)?r():o()}function r(){_(W.start,W.end)}function s(a){ea=a,o()}function t(){o()}function u(){S.updateTitle(W.title)}function v(){var a=N.getNow();a.isWithin(W.intervalStart,W.intervalEnd)?S.disableButton("today"):S.enableButton("today")}function w(a,b){W.select(N.buildSelectRange.apply(N,arguments))}function x(){W&&W.unselect()}function y(){Z=W.computePrevDate(Z),i()}function z(){Z=W.computeNextDate(Z),i()}function A(){Z.add(-1,"years"),i()}function B(){Z.add(1,"years"),i()}function C(){Z=N.getNow(),i()}function D(a){Z=N.moment(a),i()}function E(a){Z.add(b.duration(a)),i()}function F(a,b){var c;b=b||"day",c=N.getViewSpec(b)||N.getUnitViewSpec(b),Z=a,i(c?c.type:null)}function G(){return Z.clone()}function H(){U.css({width:"100%",height:U.height(),overflow:"hidden"})}function I(){U.css({width:"",height:"",overflow:""})}function J(){return N}function K(){return W}function L(a,b){return void 0===b?O[a]:void(("height"==a||"contentHeight"==a||"aspectRatio"==a)&&(O[a]=b,j(!0)))}function M(a,b){var c=Array.prototype.slice.call(arguments,2);return b=b||aa,this.triggerWith(a,b,c),O[a]?O[a].apply(b,c):void 0}var N=this;N.initOptions(d||{});var O=this.options;N.render=e,N.destroy=g,N.refetchEvents=n,N.reportEvents=s,N.reportEventChange=t,N.rerenderEvents=o,N.changeView=i,N.select=w,N.unselect=x,N.prev=y,N.next=z,N.prevYear=A,N.nextYear=B,N.today=C,N.gotoDate=D,N.incrementDate=E,N.zoomTo=F,N.getDate=G,N.getCalendar=J,N.getView=K,N.option=L,N.trigger=M;var P=R(Ia(O.lang));if(O.monthNames&&(P._months=O.monthNames),O.monthNamesShort&&(P._monthsShort=O.monthNamesShort),O.dayNames&&(P._weekdays=O.dayNames),O.dayNamesShort&&(P._weekdaysShort=O.dayNamesShort),null!=O.firstDay){var Q=R(P._week);Q.dow=O.firstDay,P._week=Q}P._fullCalendar_weekCalc=function(a){return"function"==typeof a?a:"local"===a?a:"iso"===a||"ISO"===a?"ISO":void 0}(O.weekNumberCalculation),N.defaultAllDayEventDuration=b.duration(O.defaultAllDayEventDuration),N.defaultTimedEventDuration=b.duration(O.defaultTimedEventDuration),N.moment=function(){var a;return"local"===O.timezone?(a=Ma.moment.apply(null,arguments),a.hasTime()&&a.local()):a="UTC"===O.timezone?Ma.moment.utc.apply(null,arguments):Ma.moment.parseZone.apply(null,arguments),"_locale"in a?a._locale=P:a._lang=P,a},N.getIsAmbigTimezone=function(){return"local"!==O.timezone&&"UTC"!==O.timezone},N.rezoneDate=function(a){return N.moment(a.toArray())},N.getNow=function(){var a=O.now;return"function"==typeof a&&(a=a()),N.moment(a)},N.getEventEnd=function(a){return a.end?a.end.clone():N.getDefaultEventEnd(a.allDay,a.start)},N.getDefaultEventEnd=function(a,b){var c=b.clone();return a?c.stripTime().add(N.defaultAllDayEventDuration):c.add(N.defaultTimedEventDuration),N.getIsAmbigTimezone()&&c.stripZone(),c},N.humanizeDuration=function(a){return(a.locale||a.lang).call(a,O.lang).humanize()},Ka.call(N,O);var S,T,U,V,W,X,Y,Z,$=N.isFetchNeeded,_=N.fetchEvents,aa=c[0],ba={},ca=0,ea=[];Z=null!=O.defaultDate?N.moment(O.defaultDate):N.getNow(),N.getSuggestedViewHeight=function(){return void 0===X&&k(),X},N.isHeightAuto=function(){return"auto"===O.contentHeight||"auto"===O.height},N.initialize()}function Ha(b){a.each(rb,function(a,c){null==b[a]&&(b[a]=c(b))})}function Ia(a){var c=b.localeData||b.langData;return c.call(b,a)||c.call(b,"en")}function Ja(b,c){function d(){var b=c.header;return n=c.theme?"ui":"fc",b?o=a("<div class='fc-toolbar'/>").append(f("left")).append(f("right")).append(f("center")).append('<div class="fc-clear"/>'):void 0}function e(){o.remove(),o=a()}function f(d){var e=a('<div class="fc-'+d+'"/>'),f=c.header[d];return f&&a.each(f.split(" "),function(d){var f,g=a(),h=!0;a.each(this.split(","),function(d,e){var f,i,j,k,l,m,o,q,r,s;"title"==e?(g=g.add(a("<h2>&nbsp;</h2>")),h=!1):((f=(b.options.customButtons||{})[e])?(j=function(a){f.click&&f.click.call(s[0],a)},k="",l=f.text):(i=b.getViewSpec(e))?(j=function(){b.changeView(e)},p.push(e),k=i.buttonTextOverride,l=i.buttonTextDefault):b[e]&&(j=function(){b[e]()},k=(b.overrides.buttonText||{})[e],l=c.buttonText[e]),j&&(m=f?f.themeIcon:c.themeButtonIcons[e],o=f?f.icon:c.buttonIcons[e],q=k?Y(k):m&&c.theme?"<span class='ui-icon ui-icon-"+m+"'></span>":o&&!c.theme?"<span class='fc-icon fc-icon-"+o+"'></span>":Y(l),r=["fc-"+e+"-button",n+"-button",n+"-state-default"],s=a('<button type="button" class="'+r.join(" ")+'">'+q+"</button>").click(function(a){s.hasClass(n+"-state-disabled")||(j(a),(s.hasClass(n+"-state-active")||s.hasClass(n+"-state-disabled"))&&s.removeClass(n+"-state-hover"))}).mousedown(function(){s.not("."+n+"-state-active").not("."+n+"-state-disabled").addClass(n+"-state-down")}).mouseup(function(){s.removeClass(n+"-state-down")}).hover(function(){s.not("."+n+"-state-active").not("."+n+"-state-disabled").addClass(n+"-state-hover")},function(){s.removeClass(n+"-state-hover").removeClass(n+"-state-down")}),g=g.add(s)))}),h&&g.first().addClass(n+"-corner-left").end().last().addClass(n+"-corner-right").end(),g.length>1?(f=a("<div/>"),h&&f.addClass("fc-button-group"),f.append(g),e.append(f)):e.append(g)}),e}function g(a){o.find("h2").text(a)}function h(a){o.find(".fc-"+a+"-button").addClass(n+"-state-active")}function i(a){o.find(".fc-"+a+"-button").removeClass(n+"-state-active")}function j(a){o.find(".fc-"+a+"-button").attr("disabled","disabled").addClass(n+"-state-disabled")}function k(a){o.find(".fc-"+a+"-button").removeAttr("disabled").removeClass(n+"-state-disabled")}function l(){return p}var m=this;m.render=d,m.removeElement=e,m.updateTitle=g,m.activateButton=h,m.deactivateButton=i,m.disableButton=j,m.enableButton=k,m.getViewsWithButtons=l;var n,o=a(),p=[]}function Ka(c){function d(a,b){return!M||a.clone().stripZone()<M.clone().stripZone()||b.clone().stripZone()>N.clone().stripZone()}function e(a,b){M=a,N=b,U=[];var c=++S,d=R.length;T=d;for(var e=0;d>e;e++)f(R[e],c)}function f(b,c){g(b,function(d){var e,f,g,h=a.isArray(b.events);if(c==S){if(d)for(e=0;e<d.length;e++)f=d[e],g=h?f:s(f,b),g&&U.push.apply(U,x(g));T--,T||O(U)}})}function g(b,d){var e,f,h=Ma.sourceFetchers;for(e=0;e<h.length;e++){if(f=h[e].call(L,b,M.clone(),N.clone(),c.timezone,d),f===!0)return;if("object"==typeof f)return void g(f,d)}var i=b.events;if(i)a.isFunction(i)?(L.pushLoading(),i.call(L,M.clone(),N.clone(),c.timezone,function(a){d(a),L.popLoading()})):a.isArray(i)?d(i):d();else{var j=b.url;if(j){var k,l=b.success,m=b.error,n=b.complete;k=a.isFunction(b.data)?b.data():b.data;var o=a.extend({},k||{}),p=X(b.startParam,c.startParam),q=X(b.endParam,c.endParam),r=X(b.timezoneParam,c.timezoneParam);p&&(o[p]=M.format()),q&&(o[q]=N.format()),c.timezone&&"local"!=c.timezone&&(o[r]=c.timezone),L.pushLoading(),a.ajax(a.extend({},sb,b,{data:o,success:function(b){b=b||[];var c=W(l,this,arguments);a.isArray(c)&&(b=c),d(b)},error:function(){W(m,this,arguments),d()},complete:function(){W(n,this,arguments),L.popLoading()}}))}else d()}}function h(a){var b=i(a);b&&(R.push(b),T++,f(b,S))}function i(b){var c,d,e=Ma.sourceNormalizers;if(a.isFunction(b)||a.isArray(b)?c={events:b}:"string"==typeof b?c={url:b}:"object"==typeof b&&(c=a.extend({},b)),c){for(c.className?"string"==typeof c.className&&(c.className=c.className.split(/\s+/)):c.className=[],a.isArray(c.events)&&(c.origArray=c.events,c.events=a.map(c.events,function(a){return s(a,c)})),d=0;d<e.length;d++)e[d].call(L,c);return c}}function j(b){R=a.grep(R,function(a){return!k(a,b)}),U=a.grep(U,function(a){return!k(a.source,b)}),O(U)}function k(a,b){return a&&b&&l(a)==l(b)}function l(a){return("object"==typeof a?a.origArray||a.googleCalendarId||a.url||a.events:null)||a}function m(a){a.start=L.moment(a.start),a.end?a.end=L.moment(a.end):a.end=null,y(a,n(a)),O(U)}function n(b){var c={};return a.each(b,function(a,b){o(a)&&void 0!==b&&V(b)&&(c[a]=b)}),c}function o(a){return!/^_|^(id|allDay|start|end)$/.test(a)}function p(a,b){var c,d,e,f=s(a);if(f){for(c=x(f),d=0;d<c.length;d++)e=c[d],e.source||(b&&(Q.events.push(e),e.source=Q),U.push(e));return O(U),c}return[]}function q(b){var c,d;for(null==b?b=function(){return!0}:a.isFunction(b)||(c=b+"",b=function(a){return a._id==c}),U=a.grep(U,b,!0),d=0;d<R.length;d++)a.isArray(R[d].events)&&(R[d].events=a.grep(R[d].events,b,!0));O(U)}function r(b){return a.isFunction(b)?a.grep(U,b):null!=b?(b+="",a.grep(U,function(a){return a._id==b})):U}function s(d,e){var f,g,h,i={};if(c.eventDataTransform&&(d=c.eventDataTransform(d)),e&&e.eventDataTransform&&(d=e.eventDataTransform(d)),a.extend(i,d),e&&(i.source=e),i._id=d._id||(void 0===d.id?"_fc"+tb++:d.id+""),d.className?"string"==typeof d.className?i.className=d.className.split(/\s+/):i.className=d.className:i.className=[],f=d.start||d.date,g=d.end,P(f)&&(f=b.duration(f)),P(g)&&(g=b.duration(g)),d.dow||b.isDuration(f)||b.isDuration(g))i.start=f?b.duration(f):null,i.end=g?b.duration(g):null,i._recurring=!0;else{if(f&&(f=L.moment(f),!f.isValid()))return!1;g&&(g=L.moment(g),g.isValid()||(g=null)),h=d.allDay,void 0===h&&(h=X(e?e.allDayDefault:void 0,c.allDayDefault)),t(f,g,h,i)}return i}function t(a,b,c,d){d.start=a,d.end=b,d.allDay=c,u(d),La(d)}function u(a){v(a),a.end&&!a.end.isAfter(a.start)&&(a.end=null),a.end||(c.forceEventDuration?a.end=L.getDefaultEventEnd(a.allDay,a.start):a.end=null)}function v(a){null==a.allDay&&(a.allDay=!(a.start.hasTime()||a.end&&a.end.hasTime())),a.allDay?(a.start.stripTime(),a.end&&a.end.stripTime()):(a.start.hasTime()||(a.start=L.rezoneDate(a.start)),a.end&&!a.end.hasTime()&&(a.end=L.rezoneDate(a.end)))}function w(b){var c;return b.end||(c=b.allDay,null==c&&(c=!b.start.hasTime()),b=a.extend({},b),b.end=L.getDefaultEventEnd(c,b.start)),b}function x(b,c,d){var e,f,g,h,i,j,k,l,m,n=[];if(c=c||M,d=d||N,b)if(b._recurring){if(f=b.dow)for(e={},g=0;g<f.length;g++)e[f[g]]=!0;for(h=c.clone().stripTime();h.isBefore(d);)(!e||e[h.day()])&&(i=b.start,j=b.end,k=h.clone(),l=null,i&&(k=k.time(i)),j&&(l=h.clone().time(j)),m=a.extend({},b),t(k,l,!i&&!j,m),n.push(m)),h.add(1,"days")}else n.push(b);return n}function y(b,c,d){function e(a,b){return d?H(a,b,d):c.allDay?G(a,b):F(a,b)}var f,g,h,i,j,k,l={};return c=c||{},c.start||(c.start=b.start.clone()),void 0===c.end&&(c.end=b.end?b.end.clone():null),null==c.allDay&&(c.allDay=b.allDay),u(c),f={start:b._start.clone(),end:b._end?b._end.clone():L.getDefaultEventEnd(b._allDay,b._start),allDay:c.allDay},u(f),g=null!==b._end&&null===c.end,h=e(c.start,f.start),c.end?(i=e(c.end,f.end),j=i.subtract(h)):j=null,a.each(c,function(a,b){o(a)&&void 0!==b&&(l[a]=b)}),k=z(r(b._id),g,c.allDay,h,j,l),{dateDelta:h,durationDelta:j,undo:k}}function z(b,c,d,e,f,g){var h=L.getIsAmbigTimezone(),i=[];return e&&!e.valueOf()&&(e=null),f&&!f.valueOf()&&(f=null),a.each(b,function(b,j){var k,l;k={start:j.start.clone(),end:j.end?j.end.clone():null,allDay:j.allDay},a.each(g,function(a){k[a]=j[a]}),l={start:j._start,end:j._end,allDay:d},u(l),c?l.end=null:f&&!l.end&&(l.end=L.getDefaultEventEnd(l.allDay,l.start)),e&&(l.start.add(e),l.end&&l.end.add(e)),f&&l.end.add(f),h&&!l.allDay&&(e||f)&&(l.start.stripZone(),l.end&&l.end.stripZone()),a.extend(j,g,l),La(j),i.push(function(){a.extend(j,k),La(j)})}),function(){for(var a=0;a<i.length;a++)i[a]()}}function A(b){var d,e=c.businessHours,f={className:"fc-nonbusiness",start:"09:00",end:"17:00",dow:[1,2,3,4,5],rendering:"inverse-background"},g=L.getView();return e&&(d=a.extend({},f,"object"==typeof e?e:{})),d?(b&&(d.start=null,d.end=null),x(s(d),g.start,g.end)):[]}function B(a,b){var d=b.source||{},e=X(b.constraint,d.constraint,c.eventConstraint),f=X(b.overlap,d.overlap,c.eventOverlap);return a=w(a),E(a,e,f,b)}function C(a){return E(a,c.selectConstraint,c.selectOverlap)}function D(b,c){var d,e;return c&&(d=a.extend({},c,b),e=x(s(d))[0]),e?B(b,e):(b=w(b),C(b))}function E(b,c,d,e){var f,g,h,i,j,k;if(b=a.extend({},b),b.start=b.start.clone().stripZone(),b.end=b.end.clone().stripZone(),null!=c){for(f=I(c),g=!1,i=0;i<f.length;i++)if(J(f[i],b)){g=!0;break}if(!g)return!1}for(h=L.getPeerEvents(e,b),i=0;i<h.length;i++)if(j=h[i],K(j,b)){if(d===!1)return!1;if("function"==typeof d&&!d(j,e))return!1;if(e){if(k=X(j.overlap,(j.source||{}).overlap),k===!1)return!1;if("function"==typeof k&&!k(e,j))return!1}}return!0}function I(a){return"businessHours"===a?A():"object"==typeof a?x(s(a)):r(a)}function J(a,b){var c=a.start.clone().stripZone(),d=L.getEventEnd(a).stripZone();return b.start>=c&&b.end<=d}function K(a,b){var c=a.start.clone().stripZone(),d=L.getEventEnd(a).stripZone();return b.start<d&&b.end>c}var L=this;L.isFetchNeeded=d,L.fetchEvents=e,L.addEventSource=h,L.removeEventSource=j,L.updateEvent=m,L.renderEvent=p,L.removeEvents=q,L.clientEvents=r,L.mutateEvent=y,L.normalizeEventRange=u,L.normalizeEventRangeTimes=v,L.ensureVisibleEventRange=w;var M,N,O=L.reportEvents,Q={events:[]},R=[Q],S=0,T=0,U=[];a.each((c.events?[c.events]:[]).concat(c.eventSources||[]),function(a,b){var c=i(b);c&&R.push(c)}),L.getBusinessHoursEvents=A,L.isEventRangeAllowed=B,L.isSelectionRangeAllowed=C,L.isExternalDropRangeAllowed=D,L.getEventCache=function(){return U}}function La(a){a._allDay=a.allDay,a._start=a.start.clone(),a._end=a.end?a.end.clone():null}var Ma=a.fullCalendar={version:"2.4.0"},Na=Ma.views={};a.fn.fullCalendar=function(b){var c=Array.prototype.slice.call(arguments,1),d=this;return this.each(function(e,f){var g,h=a(f),i=h.data("fullCalendar");"string"==typeof b?i&&a.isFunction(i[b])&&(g=i[b].apply(i,c),e||(d=g),"destroy"===b&&h.removeData("fullCalendar")):i||(i=new nb(h,b),h.data("fullCalendar",i),i.render())}),d};var Oa=["header","buttonText","buttonIcons","themeButtonIcons"];Ma.intersectionToSeg=E,Ma.applyAll=W,Ma.debounce=da,Ma.isInt=ba,Ma.htmlEscape=Y,Ma.cssToStr=$,Ma.proxy=ca,Ma.capitaliseFirstLetter=_,Ma.getClientRect=p,Ma.getContentRect=q,Ma.getScrollbarWidths=r;var Pa=null;Ma.intersectRects=w,Ma.parseFieldSpecs=A,Ma.compareByFieldSpecs=B,Ma.compareByFieldSpec=C,Ma.flexibleCompare=D,Ma.computeIntervalUnit=I,Ma.divideRangeByDuration=K,Ma.divideDurationByDuration=L,Ma.multiplyDuration=M,Ma.durationHasTime=N;var Qa=["sun","mon","tue","wed","thu","fri","sat"],Ra=["year","month","week","day","hour","minute","second","millisecond"];Ma.log=function(){var a=window.console;return a&&a.log?a.log.apply(a,arguments):void 0},Ma.warn=function(){var a=window.console;return a&&a.warn?a.warn.apply(a,arguments):Ma.log.apply(Ma,arguments)};var Sa,Ta,Ua,Va={}.hasOwnProperty,Wa=/^\s*\d{4}-\d\d$/,Xa=/^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,Ya=b.fn,Za=a.extend({},Ya);Ma.moment=function(){return ea(arguments)},Ma.moment.utc=function(){var a=ea(arguments,!0);return a.hasTime()&&a.utc(),a},Ma.moment.parseZone=function(){return ea(arguments,!0,!0)},Ya.clone=function(){var a=Za.clone.apply(this,arguments);return ga(this,a),this._fullCalendar&&(a._fullCalendar=!0),a},Ya.week=Ya.weeks=function(a){var b=(this._locale||this._lang)._fullCalendar_weekCalc;return null==a&&"function"==typeof b?b(this):"ISO"===b?Za.isoWeek.apply(this,arguments):Za.week.apply(this,arguments)},Ya.time=function(a){if(!this._fullCalendar)return Za.time.apply(this,arguments);if(null==a)return b.duration({hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()});this._ambigTime=!1,b.isDuration(a)||b.isMoment(a)||(a=b.duration(a));var c=0;return b.isDuration(a)&&(c=24*Math.floor(a.asDays())),this.hours(c+a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds())},Ya.stripTime=function(){var a;return this._ambigTime||(a=this.toArray(),this.utc(),Ta(this,a.slice(0,3)),this._ambigTime=!0,this._ambigZone=!0),this},Ya.hasTime=function(){return!this._ambigTime},Ya.stripZone=function(){var a,b;return this._ambigZone||(a=this.toArray(),b=this._ambigTime,this.utc(),Ta(this,a),this._ambigTime=b||!1,this._ambigZone=!0),this},Ya.hasZone=function(){return!this._ambigZone},Ya.local=function(){var a=this.toArray(),b=this._ambigZone;return Za.local.apply(this,arguments),this._ambigTime=!1,this._ambigZone=!1,b&&Ua(this,a),this},Ya.utc=function(){return Za.utc.apply(this,arguments),this._ambigTime=!1,this._ambigZone=!1,this},a.each(["zone","utcOffset"],function(a,b){Za[b]&&(Ya[b]=function(a){return null!=a&&(this._ambigTime=!1,this._ambigZone=!1),Za[b].apply(this,arguments)})}),Ya.format=function(){return this._fullCalendar&&arguments[0]?ja(this,arguments[0]):this._ambigTime?ia(this,"YYYY-MM-DD"):this._ambigZone?ia(this,"YYYY-MM-DD[T]HH:mm:ss"):Za.format.apply(this,arguments)},Ya.toISOString=function(){return this._ambigTime?ia(this,"YYYY-MM-DD"):this._ambigZone?ia(this,"YYYY-MM-DD[T]HH:mm:ss"):Za.toISOString.apply(this,arguments)},Ya.isWithin=function(a,b){var c=fa([this,a,b]);return c[0]>=c[1]&&c[0]<c[2]},Ya.isSame=function(a,b){var c;return this._fullCalendar?b?(c=fa([this,a],!0),Za.isSame.call(c[0],c[1],b)):(a=Ma.moment.parseZone(a),Za.isSame.call(this,a)&&Boolean(this._ambigTime)===Boolean(a._ambigTime)&&Boolean(this._ambigZone)===Boolean(a._ambigZone)):Za.isSame.apply(this,arguments)},a.each(["isBefore","isAfter"],function(a,b){Ya[b]=function(a,c){var d;return this._fullCalendar?(d=fa([this,a]),Za[b].call(d[0],d[1],c)):Za[b].apply(this,arguments)}}),Sa="_d"in b()&&"updateOffset"in b,Ta=Sa?function(a,c){a._d.setTime(Date.UTC.apply(Date,c)),b.updateOffset(a,!1)}:ha,Ua=Sa?function(a,c){a._d.setTime(+new Date(c[0]||0,c[1]||0,c[2]||0,c[3]||0,c[4]||0,c[5]||0,c[6]||0)),b.updateOffset(a,!1)}:ha;var $a={t:function(a){return ia(a,"a").charAt(0)},T:function(a){return ia(a,"A").charAt(0)}};Ma.formatRange=ma;var _a={Y:"year",M:"month",D:"day",d:"day",A:"second",a:"second",T:"second",t:"second",H:"second",h:"second",m:"second",s:"second"},ab={};Ma.Class=ra,ra.extend=function(a){var b,c=this;return a=a||{},U(a,"constructor")&&(b=a.constructor),"function"!=typeof b&&(b=a.constructor=function(){c.apply(this,arguments)}),b.prototype=R(c.prototype),S(a,b.prototype),T(a,b.prototype),S(c,b),b},ra.mixin=function(a){S(a.prototype||a,this.prototype)};var bb=Ma.Emitter=ra.extend({callbackHash:null,on:function(a,b){return this.getCallbacks(a).add(b),this},off:function(a,b){return this.getCallbacks(a).remove(b),this},trigger:function(a){var b=Array.prototype.slice.call(arguments,1);return this.triggerWith(a,this,b),this},triggerWith:function(a,b,c){var d=this.getCallbacks(a);return d.fireWith(b,c),this},getCallbacks:function(b){var c;return this.callbackHash||(this.callbackHash={}),c=this.callbackHash[b],c||(c=this.callbackHash[b]=a.Callbacks()),c}}),cb=ra.extend({isHidden:!0,options:null,el:null,documentMousedownProxy:null,margin:10,constructor:function(a){this.options=a||{}},show:function(){this.isHidden&&(this.el||this.render(),this.el.show(),this.position(),this.isHidden=!1,this.trigger("show"))},hide:function(){this.isHidden||(this.el.hide(),this.isHidden=!0,this.trigger("hide"))},render:function(){var b=this,c=this.options;this.el=a('<div class="fc-popover"/>').addClass(c.className||"").css({top:0,left:0}).append(c.content).appendTo(c.parentEl),this.el.on("click",".fc-close",function(){b.hide()}),c.autoHide&&a(document).on("mousedown",this.documentMousedownProxy=ca(this,"documentMousedown"))},documentMousedown:function(b){this.el&&!a(b.target).closest(this.el).length&&this.hide()},removeElement:function(){this.hide(),this.el&&(this.el.remove(),this.el=null),a(document).off("mousedown",this.documentMousedownProxy)},position:function(){var b,c,d,e,f,g=this.options,h=this.el.offsetParent().offset(),i=this.el.outerWidth(),j=this.el.outerHeight(),k=a(window),l=n(this.el);e=g.top||0,f=void 0!==g.left?g.left:void 0!==g.right?g.right-i:0,l.is(window)||l.is(document)?(l=k,b=0,c=0):(d=l.offset(),b=d.top,c=d.left),b+=k.scrollTop(),c+=k.scrollLeft(),g.viewportConstrain!==!1&&(e=Math.min(e,b+l.outerHeight()-j-this.margin),e=Math.max(e,b+this.margin),f=Math.min(f,c+l.outerWidth()-i-this.margin),f=Math.max(f,c+this.margin)),this.el.css({top:e-h.top,left:f-h.left})},trigger:function(a){this.options[a]&&this.options[a].apply(this,Array.prototype.slice.call(arguments,1));
}}),db=ra.extend({grid:null,rowCoords:null,colCoords:null,containerEl:null,bounds:null,constructor:function(a){this.grid=a},build:function(){this.grid.build(),this.rowCoords=this.grid.computeRowCoords(),this.colCoords=this.grid.computeColCoords(),this.computeBounds()},clear:function(){this.grid.clear(),this.rowCoords=null,this.colCoords=null},getCell:function(b,c){var d,e,f,g=this.rowCoords,h=g.length,i=this.colCoords,j=i.length,k=null,l=null;if(this.inBounds(b,c)){for(d=0;h>d;d++)if(e=g[d],c>=e.top&&c<e.bottom){k=d;break}for(d=0;j>d;d++)if(e=i[d],b>=e.left&&b<e.right){l=d;break}if(null!==k&&null!==l)return f=this.grid.getCell(k,l),f.grid=this.grid,a.extend(f,g[k],i[l]),f}return null},computeBounds:function(){this.bounds=this.containerEl?p(this.containerEl):null},inBounds:function(a,b){var c=this.bounds;return c?a>=c.left&&a<c.right&&b>=c.top&&b<c.bottom:!0}}),eb=ra.extend({coordMaps:null,constructor:function(a){this.coordMaps=a},build:function(){var a,b=this.coordMaps;for(a=0;a<b.length;a++)b[a].build()},getCell:function(a,b){var c,d=this.coordMaps,e=null;for(c=0;c<d.length&&!e;c++)e=d[c].getCell(a,b);return e},clear:function(){var a,b=this.coordMaps;for(a=0;a<b.length;a++)b[a].clear()}}),fb=Ma.DragListener=ra.extend({options:null,isListening:!1,isDragging:!1,originX:null,originY:null,mousemoveProxy:null,mouseupProxy:null,subjectEl:null,subjectHref:null,scrollEl:null,scrollBounds:null,scrollTopVel:null,scrollLeftVel:null,scrollIntervalId:null,scrollHandlerProxy:null,scrollSensitivity:30,scrollSpeed:200,scrollIntervalMs:50,constructor:function(a){a=a||{},this.options=a,this.subjectEl=a.subjectEl},mousedown:function(a){v(a)&&(a.preventDefault(),this.startListening(a),this.options.distance||this.startDrag(a))},startListening:function(b){var c;this.isListening||(b&&this.options.scroll&&(c=n(a(b.target)),c.is(window)||c.is(document)||(this.scrollEl=c,this.scrollHandlerProxy=da(ca(this,"scrollHandler"),100),this.scrollEl.on("scroll",this.scrollHandlerProxy))),a(document).on("mousemove",this.mousemoveProxy=ca(this,"mousemove")).on("mouseup",this.mouseupProxy=ca(this,"mouseup")).on("selectstart",this.preventDefault),b?(this.originX=b.pageX,this.originY=b.pageY):(this.originX=0,this.originY=0),this.isListening=!0,this.listenStart(b))},listenStart:function(a){this.trigger("listenStart",a)},mousemove:function(a){var b,c,d=a.pageX-this.originX,e=a.pageY-this.originY;this.isDragging||(b=this.options.distance||1,c=d*d+e*e,c>=b*b&&this.startDrag(a)),this.isDragging&&this.drag(d,e,a)},startDrag:function(a){this.isListening||this.startListening(),this.isDragging||(this.isDragging=!0,this.dragStart(a))},dragStart:function(a){var b=this.subjectEl;this.trigger("dragStart",a),(this.subjectHref=b?b.attr("href"):null)&&b.removeAttr("href")},drag:function(a,b,c){this.trigger("drag",a,b,c),this.updateScroll(c)},mouseup:function(a){this.stopListening(a)},stopDrag:function(a){this.isDragging&&(this.stopScrolling(),this.dragStop(a),this.isDragging=!1)},dragStop:function(a){var b=this;this.trigger("dragStop",a),setTimeout(function(){b.subjectHref&&b.subjectEl.attr("href",b.subjectHref)},0)},stopListening:function(b){this.stopDrag(b),this.isListening&&(this.scrollEl&&(this.scrollEl.off("scroll",this.scrollHandlerProxy),this.scrollHandlerProxy=null),a(document).off("mousemove",this.mousemoveProxy).off("mouseup",this.mouseupProxy).off("selectstart",this.preventDefault),this.mousemoveProxy=null,this.mouseupProxy=null,this.isListening=!1,this.listenStop(b))},listenStop:function(a){this.trigger("listenStop",a)},trigger:function(a){this.options[a]&&this.options[a].apply(this,Array.prototype.slice.call(arguments,1))},preventDefault:function(a){a.preventDefault()},computeScrollBounds:function(){var a=this.scrollEl;this.scrollBounds=a?o(a):null},updateScroll:function(a){var b,c,d,e,f=this.scrollSensitivity,g=this.scrollBounds,h=0,i=0;g&&(b=(f-(a.pageY-g.top))/f,c=(f-(g.bottom-a.pageY))/f,d=(f-(a.pageX-g.left))/f,e=(f-(g.right-a.pageX))/f,b>=0&&1>=b?h=b*this.scrollSpeed*-1:c>=0&&1>=c&&(h=c*this.scrollSpeed),d>=0&&1>=d?i=d*this.scrollSpeed*-1:e>=0&&1>=e&&(i=e*this.scrollSpeed)),this.setScrollVel(h,i)},setScrollVel:function(a,b){this.scrollTopVel=a,this.scrollLeftVel=b,this.constrainScrollVel(),!this.scrollTopVel&&!this.scrollLeftVel||this.scrollIntervalId||(this.scrollIntervalId=setInterval(ca(this,"scrollIntervalFunc"),this.scrollIntervalMs))},constrainScrollVel:function(){var a=this.scrollEl;this.scrollTopVel<0?a.scrollTop()<=0&&(this.scrollTopVel=0):this.scrollTopVel>0&&a.scrollTop()+a[0].clientHeight>=a[0].scrollHeight&&(this.scrollTopVel=0),this.scrollLeftVel<0?a.scrollLeft()<=0&&(this.scrollLeftVel=0):this.scrollLeftVel>0&&a.scrollLeft()+a[0].clientWidth>=a[0].scrollWidth&&(this.scrollLeftVel=0)},scrollIntervalFunc:function(){var a=this.scrollEl,b=this.scrollIntervalMs/1e3;this.scrollTopVel&&a.scrollTop(a.scrollTop()+this.scrollTopVel*b),this.scrollLeftVel&&a.scrollLeft(a.scrollLeft()+this.scrollLeftVel*b),this.constrainScrollVel(),this.scrollTopVel||this.scrollLeftVel||this.stopScrolling()},stopScrolling:function(){this.scrollIntervalId&&(clearInterval(this.scrollIntervalId),this.scrollIntervalId=null,this.scrollStop())},scrollHandler:function(){this.scrollIntervalId||this.scrollStop()},scrollStop:function(){}}),gb=fb.extend({coordMap:null,origCell:null,cell:null,coordAdjust:null,constructor:function(a,b){fb.prototype.constructor.call(this,b),this.coordMap=a},listenStart:function(a){var b,c,d,e=this.subjectEl;fb.prototype.listenStart.apply(this,arguments),this.computeCoords(),a?(c={left:a.pageX,top:a.pageY},d=c,e&&(b=o(e),d=x(d,b)),this.origCell=this.getCell(d.left,d.top),e&&this.options.subjectCenter&&(this.origCell&&(b=w(this.origCell,b)||b),d=y(b)),this.coordAdjust=z(d,c)):(this.origCell=null,this.coordAdjust=null)},computeCoords:function(){this.coordMap.build(),this.computeScrollBounds()},dragStart:function(a){var b;fb.prototype.dragStart.apply(this,arguments),b=this.getCell(a.pageX,a.pageY),b&&this.cellOver(b)},drag:function(a,b,c){var d;fb.prototype.drag.apply(this,arguments),d=this.getCell(c.pageX,c.pageY),sa(d,this.cell)||(this.cell&&this.cellOut(),d&&this.cellOver(d))},dragStop:function(){this.cellDone(),fb.prototype.dragStop.apply(this,arguments)},cellOver:function(a){this.cell=a,this.trigger("cellOver",a,sa(a,this.origCell),this.origCell)},cellOut:function(){this.cell&&(this.trigger("cellOut",this.cell),this.cellDone(),this.cell=null)},cellDone:function(){this.cell&&this.trigger("cellDone",this.cell)},listenStop:function(){fb.prototype.listenStop.apply(this,arguments),this.origCell=this.cell=null,this.coordMap.clear()},scrollStop:function(){fb.prototype.scrollStop.apply(this,arguments),this.computeCoords()},getCell:function(a,b){return this.coordAdjust&&(a+=this.coordAdjust.left,b+=this.coordAdjust.top),this.coordMap.getCell(a,b)}}),hb=ra.extend({options:null,sourceEl:null,el:null,parentEl:null,top0:null,left0:null,mouseY0:null,mouseX0:null,topDelta:null,leftDelta:null,mousemoveProxy:null,isFollowing:!1,isHidden:!1,isAnimating:!1,constructor:function(b,c){this.options=c=c||{},this.sourceEl=b,this.parentEl=c.parentEl?a(c.parentEl):b.parent()},start:function(b){this.isFollowing||(this.isFollowing=!0,this.mouseY0=b.pageY,this.mouseX0=b.pageX,this.topDelta=0,this.leftDelta=0,this.isHidden||this.updatePosition(),a(document).on("mousemove",this.mousemoveProxy=ca(this,"mousemove")))},stop:function(b,c){function d(){this.isAnimating=!1,e.removeElement(),this.top0=this.left0=null,c&&c()}var e=this,f=this.options.revertDuration;this.isFollowing&&!this.isAnimating&&(this.isFollowing=!1,a(document).off("mousemove",this.mousemoveProxy),b&&f&&!this.isHidden?(this.isAnimating=!0,this.el.animate({top:this.top0,left:this.left0},{duration:f,complete:d})):d())},getEl:function(){var a=this.el;return a||(this.sourceEl.width(),a=this.el=this.sourceEl.clone().css({position:"absolute",visibility:"",display:this.isHidden?"none":"",margin:0,right:"auto",bottom:"auto",width:this.sourceEl.width(),height:this.sourceEl.height(),opacity:this.options.opacity||"",zIndex:this.options.zIndex}).appendTo(this.parentEl)),a},removeElement:function(){this.el&&(this.el.remove(),this.el=null)},updatePosition:function(){var a,b;this.getEl(),null===this.top0&&(this.sourceEl.width(),a=this.sourceEl.offset(),b=this.el.offsetParent().offset(),this.top0=a.top-b.top,this.left0=a.left-b.left),this.el.css({top:this.top0+this.topDelta,left:this.left0+this.leftDelta})},mousemove:function(a){this.topDelta=a.pageY-this.mouseY0,this.leftDelta=a.pageX-this.mouseX0,this.isHidden||this.updatePosition()},hide:function(){this.isHidden||(this.isHidden=!0,this.el&&this.el.hide())},show:function(){this.isHidden&&(this.isHidden=!1,this.updatePosition(),this.getEl().show())}}),ib=ra.extend({view:null,isRTL:null,cellHtml:"<td/>",constructor:function(a){this.view=a,this.isRTL=a.opt("isRTL")},rowHtml:function(a,b){var c,d,e=this.getHtmlRenderer("cell",a),f="";for(b=b||0,c=0;c<this.colCnt;c++)d=this.getCell(b,c),f+=e(d);return f=this.bookendCells(f,a,b),"<tr>"+f+"</tr>"},bookendCells:function(a,b,c){var d=this.getHtmlRenderer("intro",b)(c||0),e=this.getHtmlRenderer("outro",b)(c||0),f=this.isRTL?e:d,g=this.isRTL?d:e;return"string"==typeof a?f+a+g:a.prepend(f).append(g)},getHtmlRenderer:function(a,b){var c,d,e,f,g=this.view;return c=a+"Html",b&&(d=b+_(a)+"Html"),d&&(f=g[d])?e=g:d&&(f=this[d])?e=this:(f=g[c])?e=g:(f=this[c])&&(e=this),"function"==typeof f?function(){return f.apply(e,arguments)||""}:function(){return f||""}}}),jb=Ma.Grid=ib.extend({start:null,end:null,rowCnt:0,colCnt:0,el:null,coordMap:null,elsByFill:null,externalDragStartProxy:null,colHeadFormat:null,eventTimeFormat:null,displayEventTime:null,displayEventEnd:null,cellDuration:null,largeUnit:null,constructor:function(){ib.apply(this,arguments),this.coordMap=new db(this),this.elsByFill={},this.externalDragStartProxy=ca(this,"externalDragStart")},computeColHeadFormat:function(){},computeEventTimeFormat:function(){return this.view.opt("smallTimeFormat")},computeDisplayEventTime:function(){return!0},computeDisplayEventEnd:function(){return!0},setRange:function(a){this.start=a.start.clone(),this.end=a.end.clone(),this.rangeUpdated(),this.processRangeOptions()},rangeUpdated:function(){},processRangeOptions:function(){var a,b,c=this.view;this.colHeadFormat=c.opt("columnFormat")||this.computeColHeadFormat(),this.eventTimeFormat=c.opt("eventTimeFormat")||c.opt("timeFormat")||this.computeEventTimeFormat(),a=c.opt("displayEventTime"),null==a&&(a=this.computeDisplayEventTime()),b=c.opt("displayEventEnd"),null==b&&(b=this.computeDisplayEventEnd()),this.displayEventTime=a,this.displayEventEnd=b},build:function(){},clear:function(){},rangeToSegs:function(a){},diffDates:function(a,b){return this.largeUnit?H(a,b,this.largeUnit):F(a,b)},getCell:function(b,c){var d;return null==c&&("number"==typeof b?(c=b%this.colCnt,b=Math.floor(b/this.colCnt)):(c=b.col,b=b.row)),d={row:b,col:c},a.extend(d,this.getRowData(b),this.getColData(c)),a.extend(d,this.computeCellRange(d)),d},computeCellRange:function(a){var b=this.computeCellDate(a);return{start:b,end:b.clone().add(this.cellDuration)}},computeCellDate:function(a){},getRowData:function(a){return{}},getColData:function(a){return{}},getRowEl:function(a){},getColEl:function(a){},getCellDayEl:function(a){return this.getColEl(a.col)||this.getRowEl(a.row)},computeRowCoords:function(){var a,b,c,d=[];for(a=0;a<this.rowCnt;a++)b=this.getRowEl(a),c=b.offset().top,d.push({top:c,bottom:c+b.outerHeight()});return d},computeColCoords:function(){var a,b,c,d=[];for(a=0;a<this.colCnt;a++)b=this.getColEl(a),c=b.offset().left,d.push({left:c,right:c+b.outerWidth()});return d},setElement:function(b){var c=this;this.el=b,b.on("mousedown",function(b){a(b.target).is(".fc-event-container *, .fc-more")||a(b.target).closest(".fc-popover").length||c.dayMousedown(b)}),this.bindSegHandlers(),this.bindGlobalHandlers()},removeElement:function(){this.unbindGlobalHandlers(),this.el.remove()},renderSkeleton:function(){},renderDates:function(){},unrenderDates:function(){},bindGlobalHandlers:function(){a(document).on("dragstart sortstart",this.externalDragStartProxy)},unbindGlobalHandlers:function(){a(document).off("dragstart sortstart",this.externalDragStartProxy)},dayMousedown:function(a){var b,c,d=this,e=this.view,f=e.opt("selectable"),i=new gb(this.coordMap,{scroll:e.opt("dragScroll"),dragStart:function(){e.unselect()},cellOver:function(a,e,h){h&&(b=e?a:null,f&&(c=d.computeSelection(h,a),c?d.renderSelection(c):g()))},cellOut:function(a){b=null,c=null,d.unrenderSelection(),h()},listenStop:function(a){b&&e.triggerDayClick(b,d.getCellDayEl(b),a),c&&e.reportSelection(c,a),h()}});i.mousedown(a)},renderRangeHelper:function(a,b){var c=this.fabricateHelperEvent(a,b);this.renderHelper(c,b)},fabricateHelperEvent:function(a,b){var c=b?R(b.event):{};return c.start=a.start.clone(),c.end=a.end?a.end.clone():null,c.allDay=null,this.view.calendar.normalizeEventRange(c),c.className=(c.className||[]).concat("fc-helper"),b||(c.editable=!1),c},renderHelper:function(a,b){},unrenderHelper:function(){},renderSelection:function(a){this.renderHighlight(this.selectionRangeToSegs(a))},unrenderSelection:function(){this.unrenderHighlight()},computeSelection:function(a,b){var c,d=[a.start,a.end,b.start,b.end];return d.sort(aa),c={start:d[0].clone(),end:d[3].clone()},this.view.calendar.isSelectionRangeAllowed(c)?c:null},selectionRangeToSegs:function(a){return this.rangeToSegs(a)},renderHighlight:function(a){this.renderFill("highlight",a)},unrenderHighlight:function(){this.unrenderFill("highlight")},highlightSegClasses:function(){return["fc-highlight"]},renderFill:function(a,b){},unrenderFill:function(a){var b=this.elsByFill[a];b&&(b.remove(),delete this.elsByFill[a])},renderFillSegEls:function(b,c){var d,e=this,f=this[b+"SegEl"],g="",h=[];if(c.length){for(d=0;d<c.length;d++)g+=this.fillSegHtml(b,c[d]);a(g).each(function(b,d){var g=c[b],i=a(d);f&&(i=f.call(e,g,i)),i&&(i=a(i),i.is(e.fillSegTag)&&(g.el=i,h.push(g)))})}return h},fillSegTag:"div",fillSegHtml:function(a,b){var c=this[a+"SegClasses"],d=this[a+"SegCss"],e=c?c.call(this,b):[],f=$(d?d.call(this,b):{});return"<"+this.fillSegTag+(e.length?' class="'+e.join(" ")+'"':"")+(f?' style="'+f+'"':"")+" />"},headHtml:function(){return'<div class="fc-row '+this.view.widgetHeaderClass+'"><table><thead>'+this.rowHtml("head")+"</thead></table></div>"},headCellHtml:function(a){var b=this.view,c=a.start;return'<th class="fc-day-header '+b.widgetHeaderClass+" fc-"+Qa[c.day()]+'">'+Y(c.format(this.colHeadFormat))+"</th>"},bgCellHtml:function(a){var b=this.view,c=a.start,d=this.getDayClasses(c);return d.unshift("fc-day",b.widgetContentClass),'<td class="'+d.join(" ")+'" data-date="'+c.format("YYYY-MM-DD")+'"></td>'},getDayClasses:function(a){var b=this.view,c=b.calendar.getNow().stripTime(),d=["fc-"+Qa[a.day()]];return 1==b.intervalDuration.as("months")&&a.month()!=b.intervalStart.month()&&d.push("fc-other-month"),a.isSame(c,"day")?d.push("fc-today",b.highlightStateClass):c>a?d.push("fc-past"):d.push("fc-future"),d}});jb.mixin({mousedOverSeg:null,isDraggingSeg:!1,isResizingSeg:!1,isDraggingExternal:!1,segs:null,renderEvents:function(a){var b,c,d=this.eventsToSegs(a),e=[],f=[];for(b=0;b<d.length;b++)c=d[b],ta(c.event)?e.push(c):f.push(c);e=this.renderBgSegs(e)||e,f=this.renderFgSegs(f)||f,this.segs=e.concat(f)},unrenderEvents:function(){this.triggerSegMouseout(),this.unrenderFgSegs(),this.unrenderBgSegs(),this.segs=null},getEventSegs:function(){return this.segs||[]},renderFgSegs:function(a){},unrenderFgSegs:function(){},renderFgSegEls:function(b,c){var d,e=this.view,f="",g=[];if(b.length){for(d=0;d<b.length;d++)f+=this.fgSegHtml(b[d],c);a(f).each(function(c,d){var f=b[c],h=e.resolveEventEl(f.event,a(d));h&&(h.data("fc-seg",f),f.el=h,g.push(f))})}return g},fgSegHtml:function(a,b){},renderBgSegs:function(a){return this.renderFill("bgEvent",a)},unrenderBgSegs:function(){this.unrenderFill("bgEvent")},bgEventSegEl:function(a,b){return this.view.resolveEventEl(a.event,b)},bgEventSegClasses:function(a){var b=a.event,c=b.source||{};return["fc-bgevent"].concat(b.className,c.className||[])},bgEventSegCss:function(a){var b=this.view,c=a.event,d=c.source||{};return{"background-color":c.backgroundColor||c.color||d.backgroundColor||d.color||b.opt("eventBackgroundColor")||b.opt("eventColor")}},businessHoursSegClasses:function(a){return["fc-nonbusiness","fc-bgevent"]},bindSegHandlers:function(){var b=this,c=this.view;a.each({mouseenter:function(a,c){b.triggerSegMouseover(a,c)},mouseleave:function(a,c){b.triggerSegMouseout(a,c)},click:function(a,b){return c.trigger("eventClick",this,a.event,b)},mousedown:function(d,e){a(e.target).is(".fc-resizer")&&c.isEventResizable(d.event)?b.segResizeMousedown(d,e,a(e.target).is(".fc-start-resizer")):c.isEventDraggable(d.event)&&b.segDragMousedown(d,e)}},function(c,d){b.el.on(c,".fc-event-container > *",function(c){var e=a(this).data("fc-seg");return!e||b.isDraggingSeg||b.isResizingSeg?void 0:d.call(this,e,c)})})},triggerSegMouseover:function(a,b){this.mousedOverSeg||(this.mousedOverSeg=a,this.view.trigger("eventMouseover",a.el[0],a.event,b))},triggerSegMouseout:function(a,b){b=b||{},this.mousedOverSeg&&(a=a||this.mousedOverSeg,this.mousedOverSeg=null,this.view.trigger("eventMouseout",a.el[0],a.event,b))},segDragMousedown:function(a,b){var c,d=this,e=this.view,f=e.calendar,i=a.el,j=a.event,k=new hb(a.el,{parentEl:e.el,opacity:e.opt("dragOpacity"),revertDuration:e.opt("dragRevertDuration"),zIndex:2}),l=new gb(e.coordMap,{distance:5,scroll:e.opt("dragScroll"),subjectEl:i,subjectCenter:!0,listenStart:function(a){k.hide(),k.start(a)},dragStart:function(b){d.triggerSegMouseout(a,b),d.segDragStart(a,b),e.hideEvent(j)},cellOver:function(b,h,i){a.cell&&(i=a.cell),c=d.computeEventDrop(i,b,j),c&&!f.isEventRangeAllowed(c,j)&&(g(),c=null),c&&e.renderDrag(c,a)?k.hide():k.show(),h&&(c=null)},cellOut:function(){e.unrenderDrag(),k.show(),c=null},cellDone:function(){h()},dragStop:function(b){k.stop(!c,function(){e.unrenderDrag(),e.showEvent(j),d.segDragStop(a,b),c&&e.reportEventDrop(j,c,this.largeUnit,i,b)})},listenStop:function(){k.stop()}});l.mousedown(b)},segDragStart:function(a,b){this.isDraggingSeg=!0,this.view.trigger("eventDragStart",a.el[0],a.event,b,{})},segDragStop:function(a,b){this.isDraggingSeg=!1,this.view.trigger("eventDragStop",a.el[0],a.event,b,{})},computeEventDrop:function(a,b,c){var d,e,f=this.view.calendar,g=a.start,h=b.start;return g.hasTime()===h.hasTime()?(d=this.diffDates(h,g),c.allDay&&N(d)?(e={start:c.start.clone(),end:f.getEventEnd(c),allDay:!1},f.normalizeEventRangeTimes(e)):e={start:c.start.clone(),end:c.end?c.end.clone():null,allDay:c.allDay},e.start.add(d),e.end&&e.end.add(d)):e={start:h.clone(),end:null,allDay:!h.hasTime()},e},applyDragOpacity:function(a){var b=this.view.opt("dragOpacity");null!=b&&a.each(function(a,c){c.style.opacity=b})},externalDragStart:function(b,c){var d,e,f=this.view;f.opt("droppable")&&(d=a((c?c.item:null)||b.target),e=f.opt("dropAccept"),(a.isFunction(e)?e.call(d[0],d):d.is(e))&&(this.isDraggingExternal||this.listenToExternalDrag(d,b,c)))},listenToExternalDrag:function(a,b,c){var d,e,f=this,i=ya(a);d=new gb(this.coordMap,{listenStart:function(){f.isDraggingExternal=!0},cellOver:function(a){e=f.computeExternalDrop(a,i),e?f.renderDrag(e):g()},cellOut:function(){e=null,f.unrenderDrag(),h()},dragStop:function(){f.unrenderDrag(),h(),e&&f.view.reportExternalDrop(i,e,a,b,c)},listenStop:function(){f.isDraggingExternal=!1}}),d.startDrag(b)},computeExternalDrop:function(a,b){var c={start:a.start.clone(),end:null};return b.startTime&&!c.start.hasTime()&&c.start.time(b.startTime),b.duration&&(c.end=c.start.clone().add(b.duration)),this.view.calendar.isExternalDropRangeAllowed(c,b.eventProps)?c:null},renderDrag:function(a,b){},unrenderDrag:function(){},segResizeMousedown:function(a,b,c){var d,e,f=this,i=this.view,j=i.calendar,k=a.el,l=a.event,m=j.getEventEnd(l);d=new gb(this.coordMap,{distance:5,scroll:i.opt("dragScroll"),subjectEl:k,dragStart:function(b){f.triggerSegMouseout(a,b),f.segResizeStart(a,b)},cellOver:function(b,d,h){e=c?f.computeEventStartResize(h,b,l):f.computeEventEndResize(h,b,l),e&&(j.isEventRangeAllowed(e,l)?e.start.isSame(l.start)&&e.end.isSame(m)&&(e=null):(g(),e=null)),e&&(i.hideEvent(l),f.renderEventResize(e,a))},cellOut:function(){e=null},cellDone:function(){f.unrenderEventResize(),i.showEvent(l),h()},dragStop:function(b){f.segResizeStop(a,b),e&&i.reportEventResize(l,e,this.largeUnit,k,b)}}),d.mousedown(b)},segResizeStart:function(a,b){this.isResizingSeg=!0,this.view.trigger("eventResizeStart",a.el[0],a.event,b,{})},segResizeStop:function(a,b){this.isResizingSeg=!1,this.view.trigger("eventResizeStop",a.el[0],a.event,b,{})},computeEventStartResize:function(a,b,c){return this.computeEventResize("start",a,b,c)},computeEventEndResize:function(a,b,c){return this.computeEventResize("end",a,b,c)},computeEventResize:function(a,b,c,d){var e,f,g=this.view.calendar,h=this.diffDates(c[a],b[a]);return e={start:d.start.clone(),end:g.getEventEnd(d),allDay:d.allDay},e.allDay&&N(h)&&(e.allDay=!1,g.normalizeEventRangeTimes(e)),e[a].add(h),e.start.isBefore(e.end)||(f=d.allDay?g.defaultAllDayEventDuration:g.defaultTimedEventDuration,this.cellDuration&&this.cellDuration<f&&(f=this.cellDuration),"start"==a?e.start=e.end.clone().subtract(f):e.end=e.start.clone().add(f)),e},renderEventResize:function(a,b){},unrenderEventResize:function(){},getEventTimeText:function(a,b,c){return null==b&&(b=this.eventTimeFormat),null==c&&(c=this.displayEventEnd),this.displayEventTime&&a.start.hasTime()?c&&a.end?this.view.formatRange(a,b):a.start.format(b):""},getSegClasses:function(a,b,c){var d=a.event,e=["fc-event",a.isStart?"fc-start":"fc-not-start",a.isEnd?"fc-end":"fc-not-end"].concat(d.className,d.source?d.source.className:[]);return b&&e.push("fc-draggable"),c&&e.push("fc-resizable"),e},getEventSkinCss:function(a){var b=this.view,c=a.source||{},d=a.color,e=c.color,f=b.opt("eventColor");return{"background-color":a.backgroundColor||d||c.backgroundColor||e||b.opt("eventBackgroundColor")||f,"border-color":a.borderColor||d||c.borderColor||e||b.opt("eventBorderColor")||f,color:a.textColor||c.textColor||b.opt("eventTextColor")}},eventsToSegs:function(a,b){var c,d=this.eventsToRanges(a),e=[];for(c=0;c<d.length;c++)e.push.apply(e,this.eventRangeToSegs(d[c],b));return e},eventsToRanges:function(b){var c=this,d=wa(b),e=[];return a.each(d,function(a,b){b.length&&e.push.apply(e,ua(b[0])?c.eventsToInverseRanges(b):c.eventsToNormalRanges(b))}),e},eventsToNormalRanges:function(a){var b,c,d,e,f=this.view.calendar,g=[];for(b=0;b<a.length;b++)c=a[b],d=c.start.clone().stripZone(),e=f.getEventEnd(c).stripZone(),g.push({event:c,start:d,end:e,eventStartMS:+d,eventDurationMS:e-d});return g},eventsToInverseRanges:function(a){var b,c,d=this.view,e=d.start.clone().stripZone(),f=d.end.clone().stripZone(),g=this.eventsToNormalRanges(a),h=[],i=a[0],j=e;for(g.sort(xa),b=0;b<g.length;b++)c=g[b],c.start>j&&h.push({event:i,start:j,end:c.start}),j=c.end;return f>j&&h.push({event:i,start:j,end:f}),h},eventRangeToSegs:function(a,b){var c,d,e;for(a=this.view.calendar.ensureVisibleEventRange(a),c=b?b(a):this.rangeToSegs(a),d=0;d<c.length;d++)e=c[d],e.event=a.event,e.eventStartMS=a.eventStartMS,e.eventDurationMS=a.eventDurationMS;return c},sortSegs:function(a){a.sort(ca(this,"compareSegs"))},compareSegs:function(a,b){return a.eventStartMS-b.eventStartMS||b.eventDurationMS-a.eventDurationMS||b.event.allDay-a.event.allDay||B(a.event,b.event,this.view.eventOrderSpecs)}}),Ma.dataAttrPrefix="";var kb=jb.extend({numbersVisible:!1,bottomCoordPadding:0,breakOnWeeks:null,cellDates:null,dayToCellOffsets:null,rowEls:null,dayEls:null,helperEls:null,constructor:function(){jb.apply(this,arguments),this.cellDuration=b.duration(1,"day")},renderDates:function(a){var b,c,d,e=this.view,f=this.rowCnt,g=this.colCnt,h=f*g,i="";for(b=0;f>b;b++)i+=this.dayRowHtml(b,a);for(this.el.html(i),this.rowEls=this.el.find(".fc-row"),this.dayEls=this.el.find(".fc-day"),c=0;h>c;c++)d=this.getCell(c),e.trigger("dayRender",null,d.start,this.dayEls.eq(c))},unrenderDates:function(){this.removeSegPopover()},renderBusinessHours:function(){var a=this.view.calendar.getBusinessHoursEvents(!0),b=this.eventsToSegs(a);this.renderFill("businessHours",b,"bgevent")},dayRowHtml:function(a,b){var c=this.view,d=["fc-row","fc-week",c.widgetContentClass];return b&&d.push("fc-rigid"),'<div class="'+d.join(" ")+'"><div class="fc-bg"><table>'+this.rowHtml("day",a)+'</table></div><div class="fc-content-skeleton"><table>'+(this.numbersVisible?"<thead>"+this.rowHtml("number",a)+"</thead>":"")+"</table></div></div>"},dayCellHtml:function(a){return this.bgCellHtml(a)},computeColHeadFormat:function(){return this.rowCnt>1?"ddd":this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},computeEventTimeFormat:function(){return this.view.opt("extraSmallTimeFormat")},computeDisplayEventEnd:function(){return 1==this.colCnt},rangeUpdated:function(){var a,b,c,d;if(this.updateCellDates(),a=this.cellDates,this.breakOnWeeks){for(b=a[0].day(),d=1;d<a.length&&a[d].day()!=b;d++);c=Math.ceil(a.length/d)}else c=1,d=a.length;this.rowCnt=c,this.colCnt=d},updateCellDates:function(){for(var a=this.view,b=this.start.clone(),c=[],d=-1,e=[];b.isBefore(this.end);)a.isHiddenDay(b)?e.push(d+.5):(d++,e.push(d),c.push(b.clone())),b.add(1,"days");this.cellDates=c,this.dayToCellOffsets=e},computeCellDate:function(a){var b=this.colCnt,c=a.row*b+(this.isRTL?b-a.col-1:a.col);return this.cellDates[c].clone()},getRowEl:function(a){return this.rowEls.eq(a)},getColEl:function(a){return this.dayEls.eq(a)},getCellDayEl:function(a){return this.dayEls.eq(a.row*this.colCnt+a.col)},computeRowCoords:function(){var a=jb.prototype.computeRowCoords.call(this);return a[a.length-1].bottom+=this.bottomCoordPadding,a},rangeToSegs:function(a){var b,c,d,e,f,g,h,i,j,k,l=this.isRTL,m=this.rowCnt,n=this.colCnt,o=[];for(a=this.view.computeDayRange(a),b=this.dateToCellOffset(a.start),c=this.dateToCellOffset(a.end.subtract(1,"days")),d=0;m>d;d++)e=d*n,f=e+n-1,i=Math.max(e,b),j=Math.min(f,c),i=Math.ceil(i),j=Math.floor(j),j>=i&&(g=i===b,h=j===c,i-=e,j-=e,k={row:d,isStart:g,isEnd:h},l?(k.leftCol=n-j-1,k.rightCol=n-i-1):(k.leftCol=i,k.rightCol=j),o.push(k));return o},dateToCellOffset:function(a){var b=this.dayToCellOffsets,c=a.diff(this.start,"days");return 0>c?b[0]-1:c>=b.length?b[b.length-1]+1:b[c]},renderDrag:function(a,b){return this.renderHighlight(this.eventRangeToSegs(a)),b&&!b.el.closest(this.el).length?(this.renderRangeHelper(a,b),this.applyDragOpacity(this.helperEls),!0):void 0},unrenderDrag:function(){this.unrenderHighlight(),this.unrenderHelper()},renderEventResize:function(a,b){this.renderHighlight(this.eventRangeToSegs(a)),this.renderRangeHelper(a,b)},unrenderEventResize:function(){this.unrenderHighlight(),this.unrenderHelper()},renderHelper:function(b,c){var d,e=[],f=this.eventsToSegs([b]);f=this.renderFgSegEls(f),d=this.renderSegRows(f),this.rowEls.each(function(b,f){var g,h=a(f),i=a('<div class="fc-helper-skeleton"><table/></div>');g=c&&c.row===b?c.el.position().top:h.find(".fc-content-skeleton tbody").position().top,i.css("top",g).find("table").append(d[b].tbodyEl),h.append(i),e.push(i[0])}),this.helperEls=a(e)},unrenderHelper:function(){this.helperEls&&(this.helperEls.remove(),this.helperEls=null)},fillSegTag:"td",renderFill:function(b,c,d){var e,f,g,h=[];for(c=this.renderFillSegEls(b,c),e=0;e<c.length;e++)f=c[e],g=this.renderFillRow(b,f,d),this.rowEls.eq(f.row).append(g),h.push(g[0]);return this.elsByFill[b]=a(h),c},renderFillRow:function(b,c,d){var e,f,g=this.colCnt,h=c.leftCol,i=c.rightCol+1;return d=d||b.toLowerCase(),e=a('<div class="fc-'+d+'-skeleton"><table><tr/></table></div>'),f=e.find("tr"),h>0&&f.append('<td colspan="'+h+'"/>'),f.append(c.el.attr("colspan",i-h)),g>i&&f.append('<td colspan="'+(g-i)+'"/>'),this.bookendCells(f,b),e}});kb.mixin({rowStructs:null,unrenderEvents:function(){this.removeSegPopover(),jb.prototype.unrenderEvents.apply(this,arguments)},getEventSegs:function(){return jb.prototype.getEventSegs.call(this).concat(this.popoverSegs||[])},renderBgSegs:function(b){var c=a.grep(b,function(a){return a.event.allDay});return jb.prototype.renderBgSegs.call(this,c)},renderFgSegs:function(b){var c;return b=this.renderFgSegEls(b),c=this.rowStructs=this.renderSegRows(b),this.rowEls.each(function(b,d){a(d).find(".fc-content-skeleton > table").append(c[b].tbodyEl)}),b},unrenderFgSegs:function(){for(var a,b=this.rowStructs||[];a=b.pop();)a.tbodyEl.remove();this.rowStructs=null},renderSegRows:function(a){var b,c,d=[];for(b=this.groupSegRows(a),c=0;c<b.length;c++)d.push(this.renderSegRow(c,b[c]));return d},fgSegHtml:function(a,b){var c,d,e=this.view,f=a.event,g=e.isEventDraggable(f),h=!b&&f.allDay&&a.isStart&&e.isEventResizableFromStart(f),i=!b&&f.allDay&&a.isEnd&&e.isEventResizableFromEnd(f),j=this.getSegClasses(a,g,h||i),k=$(this.getEventSkinCss(f)),l="";return j.unshift("fc-day-grid-event","fc-h-event"),a.isStart&&(c=this.getEventTimeText(f),c&&(l='<span class="fc-time">'+Y(c)+"</span>")),d='<span class="fc-title">'+(Y(f.title||"")||"&nbsp;")+"</span>",'<a class="'+j.join(" ")+'"'+(f.url?' href="'+Y(f.url)+'"':"")+(k?' style="'+k+'"':"")+'><div class="fc-content">'+(this.isRTL?d+" "+l:l+" "+d)+"</div>"+(h?'<div class="fc-resizer fc-start-resizer" />':"")+(i?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},renderSegRow:function(b,c){function d(b){for(;b>g;)k=(r[e-1]||[])[g],k?k.attr("rowspan",parseInt(k.attr("rowspan")||1,10)+1):(k=a("<td/>"),h.append(k)),q[e][g]=k,r[e][g]=k,g++}var e,f,g,h,i,j,k,l=this.colCnt,m=this.buildSegLevels(c),n=Math.max(1,m.length),o=a("<tbody/>"),p=[],q=[],r=[];for(e=0;n>e;e++){if(f=m[e],g=0,h=a("<tr/>"),p.push([]),q.push([]),r.push([]),f)for(i=0;i<f.length;i++){for(j=f[i],d(j.leftCol),k=a('<td class="fc-event-container"/>').append(j.el),j.leftCol!=j.rightCol?k.attr("colspan",j.rightCol-j.leftCol+1):r[e][g]=k;g<=j.rightCol;)q[e][g]=k,p[e][g]=j,g++;h.append(k)}d(l),this.bookendCells(h,"eventSkeleton"),o.append(h)}return{row:b,tbodyEl:o,cellMatrix:q,segMatrix:p,segLevels:m,segs:c}},buildSegLevels:function(a){var b,c,d,e=[];for(this.sortSegs(a),b=0;b<a.length;b++){for(c=a[b],d=0;d<e.length&&za(c,e[d]);d++);c.level=d,(e[d]||(e[d]=[])).push(c)}for(d=0;d<e.length;d++)e[d].sort(Aa);return e},groupSegRows:function(a){var b,c=[];for(b=0;b<this.rowCnt;b++)c.push([]);for(b=0;b<a.length;b++)c[a[b].row].push(a[b]);return c}}),kb.mixin({segPopover:null,popoverSegs:null,removeSegPopover:function(){this.segPopover&&this.segPopover.hide()},limitRows:function(a){var b,c,d=this.rowStructs||[];for(b=0;b<d.length;b++)this.unlimitRow(b),c=a?"number"==typeof a?a:this.computeRowLevelLimit(b):!1,c!==!1&&this.limitRow(b,c)},computeRowLevelLimit:function(b){function c(b,c){f=Math.max(f,a(c).outerHeight())}var d,e,f,g=this.rowEls.eq(b),h=g.height(),i=this.rowStructs[b].tbodyEl.children();for(d=0;d<i.length;d++)if(e=i.eq(d).removeClass("fc-limited"),f=0,e.find("> td > :first-child").each(c),e.position().top+f>h)return d;return!1},limitRow:function(b,c){function d(d){for(;d>x;)e=u.getCell(b,x),k=u.getCellSegs(e,c),k.length&&(n=g[c-1][x],t=u.renderMoreLink(e,k),s=a("<div/>").append(t),n.append(s),w.push(s[0])),x++}var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u=this,v=this.rowStructs[b],w=[],x=0;if(c&&c<v.segLevels.length){for(f=v.segLevels[c-1],g=v.cellMatrix,h=v.tbodyEl.children().slice(c).addClass("fc-limited").get(),i=0;i<f.length;i++){for(j=f[i],d(j.leftCol),m=[],l=0;x<=j.rightCol;)e=this.getCell(b,x),k=this.getCellSegs(e,c),m.push(k),l+=k.length,x++;if(l){for(n=g[c-1][j.leftCol],o=n.attr("rowspan")||1,p=[],q=0;q<m.length;q++)r=a('<td class="fc-more-cell"/>').attr("rowspan",o),k=m[q],e=this.getCell(b,j.leftCol+q),t=this.renderMoreLink(e,[j].concat(k)),s=a("<div/>").append(t),r.append(s),p.push(r[0]),w.push(r[0]);n.addClass("fc-limited").after(a(p)),h.push(n[0])}}d(this.colCnt),v.moreEls=a(w),v.limitedEls=a(h)}},
unlimitRow:function(a){var b=this.rowStructs[a];b.moreEls&&(b.moreEls.remove(),b.moreEls=null),b.limitedEls&&(b.limitedEls.removeClass("fc-limited"),b.limitedEls=null)},renderMoreLink:function(b,c){var d=this,e=this.view;return a('<a class="fc-more"/>').text(this.getMoreLinkText(c.length)).on("click",function(f){var g=e.opt("eventLimitClick"),h=b.start,i=a(this),j=d.getCellDayEl(b),k=d.getCellSegs(b),l=d.resliceDaySegs(k,h),m=d.resliceDaySegs(c,h);"function"==typeof g&&(g=e.trigger("eventLimitClick",null,{date:h,dayEl:j,moreEl:i,segs:l,hiddenSegs:m},f)),"popover"===g?d.showSegPopover(b,i,l):"string"==typeof g&&e.calendar.zoomTo(h,g)})},showSegPopover:function(a,b,c){var d,e,f=this,g=this.view,h=b.parent();d=1==this.rowCnt?g.el:this.rowEls.eq(a.row),e={className:"fc-more-popover",content:this.renderSegPopoverContent(a,c),parentEl:this.el,top:d.offset().top,autoHide:!0,viewportConstrain:g.opt("popoverViewportConstrain"),hide:function(){f.segPopover.removeElement(),f.segPopover=null,f.popoverSegs=null}},this.isRTL?e.right=h.offset().left+h.outerWidth()+1:e.left=h.offset().left-1,this.segPopover=new cb(e),this.segPopover.show()},renderSegPopoverContent:function(b,c){var d,e=this.view,f=e.opt("theme"),g=b.start.format(e.opt("dayPopoverFormat")),h=a('<div class="fc-header '+e.widgetHeaderClass+'"><span class="fc-close '+(f?"ui-icon ui-icon-closethick":"fc-icon fc-icon-x")+'"></span><span class="fc-title">'+Y(g)+'</span><div class="fc-clear"/></div><div class="fc-body '+e.widgetContentClass+'"><div class="fc-event-container"></div></div>'),i=h.find(".fc-event-container");for(c=this.renderFgSegEls(c,!0),this.popoverSegs=c,d=0;d<c.length;d++)c[d].cell=b,i.append(c[d].el);return h},resliceDaySegs:function(b,c){var d=a.map(b,function(a){return a.event}),e=c.clone().stripTime(),f=e.clone().add(1,"days"),g={start:e,end:f};return b=this.eventsToSegs(d,function(a){var b=E(a,g);return b?[b]:[]}),this.sortSegs(b),b},getMoreLinkText:function(a){var b=this.view.opt("eventLimitText");return"function"==typeof b?b(a):"+"+a+" "+b},getCellSegs:function(a,b){for(var c,d=this.rowStructs[a.row].segMatrix,e=b||0,f=[];e<d.length;)c=d[e][a.col],c&&f.push(c),e++;return f}});var lb=jb.extend({slotDuration:null,snapDuration:null,minTime:null,maxTime:null,colDates:null,labelFormat:null,labelInterval:null,dayEls:null,slatEls:null,slatTops:null,helperEl:null,businessHourSegs:null,constructor:function(){jb.apply(this,arguments),this.processOptions()},renderDates:function(){this.el.html(this.renderHtml()),this.dayEls=this.el.find(".fc-day"),this.slatEls=this.el.find(".fc-slats tr")},renderBusinessHours:function(){var a=this.view.calendar.getBusinessHoursEvents();this.businessHourSegs=this.renderFill("businessHours",this.eventsToSegs(a),"bgevent")},renderHtml:function(){return'<div class="fc-bg"><table>'+this.rowHtml("slotBg")+'</table></div><div class="fc-slats"><table>'+this.slatRowHtml()+"</table></div>"},slotBgCellHtml:function(a){return this.bgCellHtml(a)},slatRowHtml:function(){for(var a,c,d,e=this.view,f=this.isRTL,g="",h=b.duration(+this.minTime);h<this.maxTime;)a=this.start.clone().time(h),c=ba(L(h,this.labelInterval)),d='<td class="fc-axis fc-time '+e.widgetContentClass+'" '+e.axisStyleAttr()+">"+(c?"<span>"+Y(a.format(this.labelFormat))+"</span>":"")+"</td>",g+="<tr "+(c?"":'class="fc-minor"')+">"+(f?"":d)+'<td class="'+e.widgetContentClass+'"/>'+(f?d:"")+"</tr>",h.add(this.slotDuration);return g},processOptions:function(){var c,d=this.view,e=d.opt("slotDuration"),f=d.opt("snapDuration");e=b.duration(e),f=f?b.duration(f):e,this.slotDuration=e,this.snapDuration=f,this.cellDuration=f,this.minTime=b.duration(d.opt("minTime")),this.maxTime=b.duration(d.opt("maxTime")),c=d.opt("slotLabelFormat"),a.isArray(c)&&(c=c[c.length-1]),this.labelFormat=c||d.opt("axisFormat")||d.opt("smallTimeFormat"),c=d.opt("slotLabelInterval"),this.labelInterval=c?b.duration(c):this.computeLabelInterval(e)},computeLabelInterval:function(a){var c,d,e;for(c=yb.length-1;c>=0;c--)if(d=b.duration(yb[c]),e=L(d,a),ba(e)&&e>1)return d;return b.duration(a)},computeColHeadFormat:function(){return this.colCnt>1?this.view.opt("dayOfMonthFormat"):"dddd"},computeEventTimeFormat:function(){return this.view.opt("noMeridiemTimeFormat")},computeDisplayEventEnd:function(){return!0},rangeUpdated:function(){var a,b=this.view,c=[];for(a=this.start.clone();a.isBefore(this.end);)c.push(a.clone()),a.add(1,"day"),a=b.skipHiddenDays(a);this.isRTL&&c.reverse(),this.colDates=c,this.colCnt=c.length,this.rowCnt=Math.ceil((this.maxTime-this.minTime)/this.snapDuration)},computeCellDate:function(a){var b=this.colDates[a.col],c=this.computeSnapTime(a.row);return b=this.view.calendar.rezoneDate(b),b.time(c),b},getColEl:function(a){return this.dayEls.eq(a)},computeSnapTime:function(a){return b.duration(this.minTime+this.snapDuration*a)},rangeToSegs:function(a){var b,c,d,e,f=this.colCnt,g=[];for(a={start:a.start.clone().stripZone(),end:a.end.clone().stripZone()},c=0;f>c;c++)d=this.colDates[c],e={start:d.clone().time(this.minTime),end:d.clone().time(this.maxTime)},b=E(a,e),b&&(b.col=c,g.push(b));return g},updateSize:function(a){this.computeSlatTops(),a&&this.updateSegVerticals()},computeRowCoords:function(){var a,b,c=this.el.offset().top,d=[];for(a=0;a<this.rowCnt;a++)b={top:c+this.computeTimeTop(this.computeSnapTime(a))},a>0&&(d[a-1].bottom=b.top),d.push(b);return b.bottom=b.top+this.computeTimeTop(this.computeSnapTime(a)),d},computeDateTop:function(a,c){return this.computeTimeTop(b.duration(a.clone().stripZone()-c.clone().stripTime()))},computeTimeTop:function(a){var b,c,d,e,f=(a-this.minTime)/this.slotDuration;return f=Math.max(0,f),f=Math.min(this.slatEls.length,f),b=Math.floor(f),c=f-b,d=this.slatTops[b],c?(e=this.slatTops[b+1],d+(e-d)*c):d},computeSlatTops:function(){var b,c=[];this.slatEls.each(function(d,e){b=a(e).position().top,c.push(b)}),c.push(b+this.slatEls.last().outerHeight()),this.slatTops=c},renderDrag:function(a,b){return b?(this.renderRangeHelper(a,b),this.applyDragOpacity(this.helperEl),!0):void this.renderHighlight(this.eventRangeToSegs(a))},unrenderDrag:function(){this.unrenderHelper(),this.unrenderHighlight()},renderEventResize:function(a,b){this.renderRangeHelper(a,b)},unrenderEventResize:function(){this.unrenderHelper()},renderHelper:function(b,c){var d,e,f,g,h=this.eventsToSegs([b]);for(h=this.renderFgSegEls(h),d=this.renderSegTable(h),e=0;e<h.length;e++)f=h[e],c&&c.col===f.col&&(g=c.el,f.el.css({left:g.css("left"),right:g.css("right"),"margin-left":g.css("margin-left"),"margin-right":g.css("margin-right")}));this.helperEl=a('<div class="fc-helper-skeleton"/>').append(d).appendTo(this.el)},unrenderHelper:function(){this.helperEl&&(this.helperEl.remove(),this.helperEl=null)},renderSelection:function(a){this.view.opt("selectHelper")?this.renderRangeHelper(a):this.renderHighlight(this.selectionRangeToSegs(a))},unrenderSelection:function(){this.unrenderHelper(),this.unrenderHighlight()},renderFill:function(b,c,d){var e,f,g,h,i,j,k,l,m,n;if(c.length){for(c=this.renderFillSegEls(b,c),e=this.groupSegCols(c),d=d||b.toLowerCase(),f=a('<div class="fc-'+d+'-skeleton"><table><tr/></table></div>'),g=f.find("tr"),h=0;h<e.length;h++)if(i=e[h],j=a("<td/>").appendTo(g),i.length)for(k=a('<div class="fc-'+d+'-container"/>').appendTo(j),l=this.colDates[h],m=0;m<i.length;m++)n=i[m],k.append(n.el.css({top:this.computeDateTop(n.start,l),bottom:-this.computeDateTop(n.end,l)}));this.bookendCells(g,b),this.el.append(f),this.elsByFill[b]=f}return c}});lb.mixin({eventSkeletonEl:null,renderFgSegs:function(b){return b=this.renderFgSegEls(b),this.el.append(this.eventSkeletonEl=a('<div class="fc-content-skeleton"/>').append(this.renderSegTable(b))),b},unrenderFgSegs:function(a){this.eventSkeletonEl&&(this.eventSkeletonEl.remove(),this.eventSkeletonEl=null)},renderSegTable:function(b){var c,d,e,f,g,h,i=a("<table><tr/></table>"),j=i.find("tr");for(c=this.groupSegCols(b),this.computeSegVerticals(b),f=0;f<c.length;f++){for(g=c[f],this.placeSlotSegs(g),h=a('<div class="fc-event-container"/>'),d=0;d<g.length;d++)e=g[d],e.el.css(this.generateSegPositionCss(e)),e.bottom-e.top<30&&e.el.addClass("fc-short"),h.append(e.el);j.append(a("<td/>").append(h))}return this.bookendCells(j,"eventSkeleton"),i},placeSlotSegs:function(a){var b,c,d;if(this.sortSegs(a),b=Ba(a),Ca(b),c=b[0]){for(d=0;d<c.length;d++)Da(c[d]);for(d=0;d<c.length;d++)this.computeSlotSegCoords(c[d],0,0)}},computeSlotSegCoords:function(a,b,c){var d,e=a.forwardSegs;if(void 0===a.forwardCoord)for(e.length?(this.sortForwardSlotSegs(e),this.computeSlotSegCoords(e[0],b+1,c),a.forwardCoord=e[0].backwardCoord):a.forwardCoord=1,a.backwardCoord=a.forwardCoord-(a.forwardCoord-c)/(b+1),d=0;d<e.length;d++)this.computeSlotSegCoords(e[d],0,a.forwardCoord)},updateSegVerticals:function(){var a,b=(this.segs||[]).concat(this.businessHourSegs||[]);for(this.computeSegVerticals(b),a=0;a<b.length;a++)b[a].el.css(this.generateSegVerticalCss(b[a]))},computeSegVerticals:function(a){var b,c;for(b=0;b<a.length;b++)c=a[b],c.top=this.computeDateTop(c.start,c.start),c.bottom=this.computeDateTop(c.end,c.start)},fgSegHtml:function(a,b){var c,d,e,f=this.view,g=a.event,h=f.isEventDraggable(g),i=!b&&a.isStart&&f.isEventResizableFromStart(g),j=!b&&a.isEnd&&f.isEventResizableFromEnd(g),k=this.getSegClasses(a,h,i||j),l=$(this.getEventSkinCss(g));return k.unshift("fc-time-grid-event","fc-v-event"),f.isMultiDayEvent(g)?(a.isStart||a.isEnd)&&(c=this.getEventTimeText(a),d=this.getEventTimeText(a,"LT"),e=this.getEventTimeText(a,null,!1)):(c=this.getEventTimeText(g),d=this.getEventTimeText(g,"LT"),e=this.getEventTimeText(g,null,!1)),'<a class="'+k.join(" ")+'"'+(g.url?' href="'+Y(g.url)+'"':"")+(l?' style="'+l+'"':"")+'><div class="fc-content">'+(c?'<div class="fc-time" data-start="'+Y(e)+'" data-full="'+Y(d)+'"><span>'+Y(c)+"</span></div>":"")+(g.title?'<div class="fc-title">'+Y(g.title)+"</div>":"")+'</div><div class="fc-bg"/>'+(j?'<div class="fc-resizer fc-end-resizer" />':"")+"</a>"},generateSegPositionCss:function(a){var b,c,d=this.view.opt("slotEventOverlap"),e=a.backwardCoord,f=a.forwardCoord,g=this.generateSegVerticalCss(a);return d&&(f=Math.min(1,e+2*(f-e))),this.isRTL?(b=1-f,c=e):(b=e,c=1-f),g.zIndex=a.level+1,g.left=100*b+"%",g.right=100*c+"%",d&&a.forwardPressure&&(g[this.isRTL?"marginLeft":"marginRight"]=20),g},generateSegVerticalCss:function(a){return{top:a.top,bottom:-a.bottom}},groupSegCols:function(a){var b,c=[];for(b=0;b<this.colCnt;b++)c.push([]);for(b=0;b<a.length;b++)c[a[b].col].push(a[b]);return c},sortForwardSlotSegs:function(a){a.sort(ca(this,"compareForwardSlotSegs"))},compareForwardSlotSegs:function(a,b){return b.forwardPressure-a.forwardPressure||(a.backwardCoord||0)-(b.backwardCoord||0)||this.compareSegs(a,b)}});var mb=Ma.View=ra.extend({type:null,name:null,title:null,calendar:null,options:null,coordMap:null,el:null,displaying:null,isSkeletonRendered:!1,isEventsRendered:!1,start:null,end:null,intervalStart:null,intervalEnd:null,intervalDuration:null,intervalUnit:null,isRTL:!1,isSelected:!1,eventOrderSpecs:null,scrollerEl:null,scrollTop:null,widgetHeaderClass:null,widgetContentClass:null,highlightStateClass:null,nextDayThreshold:null,isHiddenDayHash:null,documentMousedownProxy:null,constructor:function(a,c,d,e){this.calendar=a,this.type=this.name=c,this.options=d,this.intervalDuration=e||b.duration(1,"day"),this.nextDayThreshold=b.duration(this.opt("nextDayThreshold")),this.initThemingProps(),this.initHiddenDays(),this.isRTL=this.opt("isRTL"),this.eventOrderSpecs=A(this.opt("eventOrder")),this.documentMousedownProxy=ca(this,"documentMousedown"),this.initialize()},initialize:function(){},opt:function(a){return this.options[a]},trigger:function(a,b){var c=this.calendar;return c.trigger.apply(c,[a,b||this].concat(Array.prototype.slice.call(arguments,2),[this]))},setDate:function(a){this.setRange(this.computeRange(a))},setRange:function(b){a.extend(this,b),this.updateTitle()},computeRange:function(a){var b,c,d=I(this.intervalDuration),e=a.clone().startOf(d),f=e.clone().add(this.intervalDuration);return/year|month|week|day/.test(d)?(e.stripTime(),f.stripTime()):(e.hasTime()||(e=this.calendar.rezoneDate(e)),f.hasTime()||(f=this.calendar.rezoneDate(f))),b=e.clone(),b=this.skipHiddenDays(b),c=f.clone(),c=this.skipHiddenDays(c,-1,!0),{intervalUnit:d,intervalStart:e,intervalEnd:f,start:b,end:c}},computePrevDate:function(a){return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).subtract(this.intervalDuration),-1)},computeNextDate:function(a){return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).add(this.intervalDuration))},massageCurrentDate:function(a,b){return this.intervalDuration.as("days")<=1&&this.isHiddenDay(a)&&(a=this.skipHiddenDays(a,b),a.startOf("day")),a},updateTitle:function(){this.title=this.computeTitle()},computeTitle:function(){return this.formatRange({start:this.intervalStart,end:this.intervalEnd},this.opt("titleFormat")||this.computeTitleFormat(),this.opt("titleRangeSeparator"))},computeTitleFormat:function(){return"year"==this.intervalUnit?"YYYY":"month"==this.intervalUnit?this.opt("monthYearFormat"):this.intervalDuration.as("days")>1?"ll":"LL"},formatRange:function(a,b,c){var d=a.end;return d.hasTime()||(d=d.clone().subtract(1)),ma(a.start,d,b,c,this.opt("isRTL"))},setElement:function(a){this.el=a,this.bindGlobalHandlers()},removeElement:function(){this.clear(),this.isSkeletonRendered&&(this.unrenderSkeleton(),this.isSkeletonRendered=!1),this.unbindGlobalHandlers(),this.el.remove()},display:function(b){var c=this,d=null;return this.displaying&&(d=this.queryScroll()),this.clear().then(function(){return c.displaying=a.when(c.displayView(b)).then(function(){c.forceScroll(c.computeInitialScroll(d)),c.triggerRender()})})},clear:function(){var b=this,c=this.displaying;return c?c.then(function(){return b.displaying=null,b.clearEvents(),b.clearView()}):a.when()},displayView:function(a){this.isSkeletonRendered||(this.renderSkeleton(),this.isSkeletonRendered=!0),this.setDate(a),this.render&&this.render(),this.renderDates(),this.updateSize(),this.renderBusinessHours()},clearView:function(){this.unselect(),this.triggerUnrender(),this.unrenderBusinessHours(),this.unrenderDates(),this.destroy&&this.destroy()},renderSkeleton:function(){},unrenderSkeleton:function(){},renderDates:function(){},unrenderDates:function(){},renderBusinessHours:function(){},unrenderBusinessHours:function(){},triggerRender:function(){this.trigger("viewRender",this,this,this.el)},triggerUnrender:function(){this.trigger("viewDestroy",this,this,this.el)},bindGlobalHandlers:function(){a(document).on("mousedown",this.documentMousedownProxy)},unbindGlobalHandlers:function(){a(document).off("mousedown",this.documentMousedownProxy)},initThemingProps:function(){var a=this.opt("theme")?"ui":"fc";this.widgetHeaderClass=a+"-widget-header",this.widgetContentClass=a+"-widget-content",this.highlightStateClass=a+"-state-highlight"},updateSize:function(a){var b;a&&(b=this.queryScroll()),this.updateHeight(a),this.updateWidth(a),a&&this.setScroll(b)},updateWidth:function(a){},updateHeight:function(a){var b=this.calendar;this.setHeight(b.getSuggestedViewHeight(),b.isHeightAuto())},setHeight:function(a,b){},computeScrollerHeight:function(a){var b,c,d=this.scrollerEl;return b=this.el.add(d),b.css({position:"relative",left:-1}),c=this.el.outerHeight()-d.height(),b.css({position:"",left:""}),a-c},computeInitialScroll:function(a){return 0},queryScroll:function(){return this.scrollerEl?this.scrollerEl.scrollTop():void 0},setScroll:function(a){return this.scrollerEl?this.scrollerEl.scrollTop(a):void 0},forceScroll:function(a){var b=this;this.setScroll(a),setTimeout(function(){b.setScroll(a)},0)},displayEvents:function(a){var b=this.queryScroll();this.clearEvents(),this.renderEvents(a),this.isEventsRendered=!0,this.setScroll(b),this.triggerEventRender()},clearEvents:function(){this.isEventsRendered&&(this.triggerEventUnrender(),this.destroyEvents&&this.destroyEvents(),this.unrenderEvents(),this.isEventsRendered=!1)},renderEvents:function(a){},unrenderEvents:function(){},triggerEventRender:function(){this.renderedEventSegEach(function(a){this.trigger("eventAfterRender",a.event,a.event,a.el)}),this.trigger("eventAfterAllRender")},triggerEventUnrender:function(){this.renderedEventSegEach(function(a){this.trigger("eventDestroy",a.event,a.event,a.el)})},resolveEventEl:function(b,c){var d=this.trigger("eventRender",b,b,c);return d===!1?c=null:d&&d!==!0&&(c=a(d)),c},showEvent:function(a){this.renderedEventSegEach(function(a){a.el.css("visibility","")},a)},hideEvent:function(a){this.renderedEventSegEach(function(a){a.el.css("visibility","hidden")},a)},renderedEventSegEach:function(a,b){var c,d=this.getEventSegs();for(c=0;c<d.length;c++)b&&d[c].event._id!==b._id||d[c].el&&a.call(this,d[c])},getEventSegs:function(){return[]},isEventDraggable:function(a){var b=a.source||{};return X(a.startEditable,b.startEditable,this.opt("eventStartEditable"),a.editable,b.editable,this.opt("editable"))},reportEventDrop:function(a,b,c,d,e){var f=this.calendar,g=f.mutateEvent(a,b,c),h=function(){g.undo(),f.reportEventChange()};this.triggerEventDrop(a,g.dateDelta,h,d,e),f.reportEventChange()},triggerEventDrop:function(a,b,c,d,e){this.trigger("eventDrop",d[0],a,b,c,e,{})},reportExternalDrop:function(b,c,d,e,f){var g,h,i=b.eventProps;i&&(g=a.extend({},i,c),h=this.calendar.renderEvent(g,b.stick)[0]),this.triggerExternalDrop(h,c,d,e,f)},triggerExternalDrop:function(a,b,c,d,e){this.trigger("drop",c[0],b.start,d,e),a&&this.trigger("eventReceive",null,a)},renderDrag:function(a,b){},unrenderDrag:function(){},isEventResizableFromStart:function(a){return this.opt("eventResizableFromStart")&&this.isEventResizable(a)},isEventResizableFromEnd:function(a){return this.isEventResizable(a)},isEventResizable:function(a){var b=a.source||{};return X(a.durationEditable,b.durationEditable,this.opt("eventDurationEditable"),a.editable,b.editable,this.opt("editable"))},reportEventResize:function(a,b,c,d,e){var f=this.calendar,g=f.mutateEvent(a,b,c),h=function(){g.undo(),f.reportEventChange()};this.triggerEventResize(a,g.durationDelta,h,d,e),f.reportEventChange()},triggerEventResize:function(a,b,c,d,e){this.trigger("eventResize",d[0],a,b,c,e,{})},select:function(a,b){this.unselect(b),this.renderSelection(a),this.reportSelection(a,b)},renderSelection:function(a){},reportSelection:function(a,b){this.isSelected=!0,this.triggerSelect(a,b)},triggerSelect:function(a,b){this.trigger("select",null,a.start,a.end,b)},unselect:function(a){this.isSelected&&(this.isSelected=!1,this.destroySelection&&this.destroySelection(),this.unrenderSelection(),this.trigger("unselect",null,a))},unrenderSelection:function(){},documentMousedown:function(b){var c;this.isSelected&&this.opt("unselectAuto")&&v(b)&&(c=this.opt("unselectCancel"),c&&a(b.target).closest(c).length||this.unselect(b))},triggerDayClick:function(a,b,c){this.trigger("dayClick",b,a.start,c)},initHiddenDays:function(){var b,c=this.opt("hiddenDays")||[],d=[],e=0;for(this.opt("weekends")===!1&&c.push(0,6),b=0;7>b;b++)(d[b]=-1!==a.inArray(b,c))||e++;if(!e)throw"invalid hiddenDays";this.isHiddenDayHash=d},isHiddenDay:function(a){return b.isMoment(a)&&(a=a.day()),this.isHiddenDayHash[a]},skipHiddenDays:function(a,b,c){var d=a.clone();for(b=b||1;this.isHiddenDayHash[(d.day()+(c?b:0)+7)%7];)d.add(b,"days");return d},computeDayRange:function(a){var b,c=a.start.clone().stripTime(),d=a.end,e=null;return d&&(e=d.clone().stripTime(),b=+d.time(),b&&b>=this.nextDayThreshold&&e.add(1,"days")),(!d||c>=e)&&(e=c.clone().add(1,"days")),{start:c,end:e}},isMultiDayEvent:function(a){var b=this.computeDayRange(a);return b.end.diff(b.start,"days")>1}}),nb=Ma.Calendar=ra.extend({dirDefaults:null,langDefaults:null,overrides:null,options:null,viewSpecCache:null,view:null,header:null,loadingLevel:0,constructor:Ga,initialize:function(){},initOptions:function(a){var b,e,f,g;a=d(a),b=a.lang,e=ob[b],e||(b=nb.defaults.lang,e=ob[b]||{}),f=X(a.isRTL,e.isRTL,nb.defaults.isRTL),g=f?nb.rtlDefaults:{},this.dirDefaults=g,this.langDefaults=e,this.overrides=a,this.options=c([nb.defaults,g,e,a]),Ha(this.options),this.viewSpecCache={}},getViewSpec:function(a){var b=this.viewSpecCache;return b[a]||(b[a]=this.buildViewSpec(a))},getUnitViewSpec:function(b){var c,d,e;if(-1!=a.inArray(b,Ra))for(c=this.header.getViewsWithButtons(),a.each(Ma.views,function(a){c.push(a)}),d=0;d<c.length;d++)if(e=this.getViewSpec(c[d]),e&&e.singleUnit==b)return e},buildViewSpec:function(a){for(var d,e,f,g,h=this.overrides.views||{},i=[],j=[],k=[],l=a;l;)d=Na[l],e=h[l],l=null,"function"==typeof d&&(d={"class":d}),d&&(i.unshift(d),j.unshift(d.defaults||{}),f=f||d.duration,l=l||d.type),e&&(k.unshift(e),f=f||e.duration,l=l||e.type);return d=Q(i),d.type=a,d["class"]?(f&&(f=b.duration(f),f.valueOf()&&(d.duration=f,g=I(f),1===f.as(g)&&(d.singleUnit=g,k.unshift(h[g]||{})))),d.defaults=c(j),d.overrides=c(k),this.buildViewSpecOptions(d),this.buildViewSpecButtonText(d,a),d):!1},buildViewSpecOptions:function(a){a.options=c([nb.defaults,a.defaults,this.dirDefaults,this.langDefaults,this.overrides,a.overrides]),Ha(a.options)},buildViewSpecButtonText:function(a,b){function c(c){var d=c.buttonText||{};return d[b]||(a.singleUnit?d[a.singleUnit]:null)}a.buttonTextOverride=c(this.overrides)||a.overrides.buttonText,a.buttonTextDefault=c(this.langDefaults)||c(this.dirDefaults)||a.defaults.buttonText||c(nb.defaults)||(a.duration?this.humanizeDuration(a.duration):null)||b},instantiateView:function(a){var b=this.getViewSpec(a);return new b["class"](this,a,b.options,b.duration)},isValidViewType:function(a){return Boolean(this.getViewSpec(a))},pushLoading:function(){this.loadingLevel++||this.trigger("loading",null,!0,this.view)},popLoading:function(){--this.loadingLevel||this.trigger("loading",null,!1,this.view)},buildSelectRange:function(a,b){return a=this.moment(a),b=b?this.moment(b):a.hasTime()?a.clone().add(this.defaultTimedEventDuration):a.clone().add(this.defaultAllDayEventDuration),{start:a,end:b}}});nb.mixin(bb),nb.defaults={titleRangeSeparator:"    ",monthYearFormat:"MMMM YYYY",defaultTimedEventDuration:"02:00:00",defaultAllDayEventDuration:{days:1},forceEventDuration:!1,nextDayThreshold:"09:00:00",defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberTitle:"W",weekNumberCalculation:"local",scrollTime:"06:00:00",lazyFetching:!0,startParam:"start",endParam:"end",timezoneParam:"timezone",timezone:!1,isRTL:!1,buttonText:{prev:"prev",next:"next",prevYear:"prev year",nextYear:"next year",year:"year",today:"today",month:"month",week:"week",day:"day"},buttonIcons:{prev:"left-single-arrow",next:"right-single-arrow",prevYear:"left-double-arrow",nextYear:"right-double-arrow"},theme:!1,themeButtonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e",prevYear:"seek-prev",nextYear:"seek-next"},dragOpacity:.75,dragRevertDuration:500,dragScroll:!0,unselectAuto:!0,dropAccept:"*",eventOrder:"title",eventLimit:!1,eventLimitText:"more",eventLimitClick:"popover",dayPopoverFormat:"LL",handleWindowResize:!0,windowResizeDelay:200},nb.englishDefaults={dayPopoverFormat:"dddd, MMMM D"},nb.rtlDefaults={header:{left:"next,prev today",center:"",right:"title"},buttonIcons:{prev:"right-single-arrow",next:"left-single-arrow",prevYear:"right-double-arrow",nextYear:"left-double-arrow"},themeButtonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w",nextYear:"seek-prev",prevYear:"seek-next"}};var ob=Ma.langs={};Ma.datepickerLang=function(b,c,d){var e=ob[b]||(ob[b]={});e.isRTL=d.isRTL,e.weekNumberTitle=d.weekHeader,a.each(pb,function(a,b){e[a]=b(d)}),a.datepicker&&(a.datepicker.regional[c]=a.datepicker.regional[b]=d,a.datepicker.regional.en=a.datepicker.regional[""],a.datepicker.setDefaults(d))},Ma.lang=function(b,d){var e,f;e=ob[b]||(ob[b]={}),d&&(e=ob[b]=c([e,d])),f=Ia(b),a.each(qb,function(a,b){null==e[a]&&(e[a]=b(f,e))}),nb.defaults.lang=b};var pb={buttonText:function(a){return{prev:Z(a.prevText),next:Z(a.nextText),today:Z(a.currentText)}},monthYearFormat:function(a){return a.showMonthAfterYear?"YYYY["+a.yearSuffix+"] MMMM":"MMMM YYYY["+a.yearSuffix+"]"}},qb={dayOfMonthFormat:function(a,b){var c=a.longDateFormat("l");return c=c.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g,""),b.isRTL?c+=" ddd":c="ddd "+c,c},mediumTimeFormat:function(a){return a.longDateFormat("LT").replace(/\s*a$/i,"a")},smallTimeFormat:function(a){return a.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"a")},extraSmallTimeFormat:function(a){return a.longDateFormat("LT").replace(":mm","(:mm)").replace(/(\Wmm)$/,"($1)").replace(/\s*a$/i,"t")},hourFormat:function(a){return a.longDateFormat("LT").replace(":mm","").replace(/(\Wmm)$/,"").replace(/\s*a$/i,"a")},noMeridiemTimeFormat:function(a){return a.longDateFormat("LT").replace(/\s*a$/i,"")}},rb={smallDayDateFormat:function(a){return a.isRTL?"D dd":"dd D"},weekFormat:function(a){return a.isRTL?"w[ "+a.weekNumberTitle+"]":"["+a.weekNumberTitle+" ]w"},smallWeekFormat:function(a){return a.isRTL?"w["+a.weekNumberTitle+"]":"["+a.weekNumberTitle+"]w"}};Ma.lang("en",nb.englishDefaults),Ma.sourceNormalizers=[],Ma.sourceFetchers=[];var sb={dataType:"json",cache:!1},tb=1;nb.prototype.getPeerEvents=function(a,b){var c,d,e=this.getEventCache(),f=[];for(c=0;c<e.length;c++)d=e[c],a&&a._id===d._id||f.push(d);return f};var ub=mb.extend({dayGrid:null,dayNumbersVisible:!1,weekNumbersVisible:!1,weekNumberWidth:null,headRowEl:null,initialize:function(){this.dayGrid=new kb(this),this.coordMap=this.dayGrid.coordMap},setRange:function(a){mb.prototype.setRange.call(this,a),this.dayGrid.breakOnWeeks=/year|month|week/.test(this.intervalUnit),this.dayGrid.setRange(a)},computeRange:function(a){var b=mb.prototype.computeRange.call(this,a);return/year|month/.test(b.intervalUnit)&&(b.start.startOf("week"),b.start=this.skipHiddenDays(b.start),b.end.weekday()&&(b.end.add(1,"week").startOf("week"),b.end=this.skipHiddenDays(b.end,-1,!0))),b},renderDates:function(){this.dayNumbersVisible=this.dayGrid.rowCnt>1,this.weekNumbersVisible=this.opt("weekNumbers"),this.dayGrid.numbersVisible=this.dayNumbersVisible||this.weekNumbersVisible,this.el.addClass("fc-basic-view").html(this.renderHtml()),this.headRowEl=this.el.find("thead .fc-row"),this.scrollerEl=this.el.find(".fc-day-grid-container"),this.dayGrid.coordMap.containerEl=this.scrollerEl,this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(this.hasRigidRows())},unrenderDates:function(){this.dayGrid.unrenderDates(),this.dayGrid.removeElement()},renderBusinessHours:function(){this.dayGrid.renderBusinessHours()},renderHtml:function(){return'<table><thead class="fc-head"><tr><td class="'+this.widgetHeaderClass+'">'+this.dayGrid.headHtml()+'</td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'"><div class="fc-day-grid-container"><div class="fc-day-grid"/></div></td></tr></tbody></table>'},headIntroHtml:function(){return this.weekNumbersVisible?'<th class="fc-week-number '+this.widgetHeaderClass+'" '+this.weekNumberStyleAttr()+"><span>"+Y(this.opt("weekNumberTitle"))+"</span></th>":void 0},numberIntroHtml:function(a){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+"><span>"+this.dayGrid.getCell(a,0).start.format("w")+"</span></td>":void 0},dayIntroHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number '+this.widgetContentClass+'" '+this.weekNumberStyleAttr()+"></td>":void 0},introHtml:function(){return this.weekNumbersVisible?'<td class="fc-week-number" '+this.weekNumberStyleAttr()+"></td>":void 0},numberCellHtml:function(a){var b,c=a.start;return this.dayNumbersVisible?(b=this.dayGrid.getDayClasses(c),b.unshift("fc-day-number"),'<td class="'+b.join(" ")+'" data-date="'+c.format()+'">'+c.date()+"</td>"):"<td/>"},weekNumberStyleAttr:function(){return null!==this.weekNumberWidth?'style="width:'+this.weekNumberWidth+'px"':""},hasRigidRows:function(){var a=this.opt("eventLimit");return a&&"number"!=typeof a},updateWidth:function(){this.weekNumbersVisible&&(this.weekNumberWidth=k(this.el.find(".fc-week-number")))},setHeight:function(a,b){var c,d=this.opt("eventLimit");m(this.scrollerEl),f(this.headRowEl),this.dayGrid.removeSegPopover(),d&&"number"==typeof d&&this.dayGrid.limitRows(d),c=this.computeScrollerHeight(a),this.setGridHeight(c,b),d&&"number"!=typeof d&&this.dayGrid.limitRows(d),!b&&l(this.scrollerEl,c)&&(e(this.headRowEl,r(this.scrollerEl)),c=this.computeScrollerHeight(a),this.scrollerEl.height(c))},setGridHeight:function(a,b){b?j(this.dayGrid.rowEls):i(this.dayGrid.rowEls,a,!0)},renderEvents:function(a){this.dayGrid.renderEvents(a),this.updateHeight()},getEventSegs:function(){return this.dayGrid.getEventSegs()},unrenderEvents:function(){this.dayGrid.unrenderEvents()},renderDrag:function(a,b){return this.dayGrid.renderDrag(a,b)},unrenderDrag:function(){this.dayGrid.unrenderDrag()},renderSelection:function(a){this.dayGrid.renderSelection(a)},unrenderSelection:function(){this.dayGrid.unrenderSelection()}}),vb=ub.extend({computeRange:function(a){var b,c=ub.prototype.computeRange.call(this,a);return this.isFixedWeeks()&&(b=Math.ceil(c.end.diff(c.start,"weeks",!0)),c.end.add(6-b,"weeks")),c},setGridHeight:function(a,b){b=b||"variable"===this.opt("weekMode"),b&&(a*=this.rowCnt/6),i(this.dayGrid.rowEls,a,!b)},isFixedWeeks:function(){var a=this.opt("weekMode");return a?"fixed"===a:this.opt("fixedWeekCount")}});Na.basic={"class":ub},Na.basicDay={type:"basic",duration:{days:1}},Na.basicWeek={type:"basic",duration:{weeks:1}},Na.month={"class":vb,duration:{months:1},defaults:{fixedWeekCount:!0}};var wb=mb.extend({timeGrid:null,dayGrid:null,axisWidth:null,noScrollRowEls:null,bottomRuleEl:null,bottomRuleHeight:null,initialize:function(){this.timeGrid=new lb(this),this.opt("allDaySlot")?(this.dayGrid=new kb(this),this.coordMap=new eb([this.dayGrid.coordMap,this.timeGrid.coordMap])):this.coordMap=this.timeGrid.coordMap},setRange:function(a){mb.prototype.setRange.call(this,a),this.timeGrid.setRange(a),this.dayGrid&&this.dayGrid.setRange(a)},renderDates:function(){this.el.addClass("fc-agenda-view").html(this.renderHtml()),this.scrollerEl=this.el.find(".fc-time-grid-container"),this.timeGrid.coordMap.containerEl=this.scrollerEl,this.timeGrid.setElement(this.el.find(".fc-time-grid")),this.timeGrid.renderDates(),this.bottomRuleEl=a('<hr class="fc-divider '+this.widgetHeaderClass+'"/>').appendTo(this.timeGrid.el),this.dayGrid&&(this.dayGrid.setElement(this.el.find(".fc-day-grid")),this.dayGrid.renderDates(),this.dayGrid.bottomCoordPadding=this.dayGrid.el.next("hr").outerHeight()),this.noScrollRowEls=this.el.find(".fc-row:not(.fc-scroller *)")},unrenderDates:function(){this.timeGrid.unrenderDates(),this.timeGrid.removeElement(),this.dayGrid&&(this.dayGrid.unrenderDates(),this.dayGrid.removeElement())},renderBusinessHours:function(){this.timeGrid.renderBusinessHours(),this.dayGrid&&this.dayGrid.renderBusinessHours()},renderHtml:function(){return'<table><thead class="fc-head"><tr><td class="'+this.widgetHeaderClass+'">'+this.timeGrid.headHtml()+'</td></tr></thead><tbody class="fc-body"><tr><td class="'+this.widgetContentClass+'">'+(this.dayGrid?'<div class="fc-day-grid"/><hr class="fc-divider '+this.widgetHeaderClass+'"/>':"")+'<div class="fc-time-grid-container"><div class="fc-time-grid"/></div></td></tr></tbody></table>'},headIntroHtml:function(){var a,b;return this.opt("weekNumbers")?(a=this.timeGrid.getCell(0).start,b=a.format(this.opt("smallWeekFormat")),'<th class="fc-axis fc-week-number '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+"><span>"+Y(b)+"</span></th>"):'<th class="fc-axis '+this.widgetHeaderClass+'" '+this.axisStyleAttr()+"></th>"},dayIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+"><span>"+(this.opt("allDayHtml")||Y(this.opt("allDayText")))+"</span></td>"},slotBgIntroHtml:function(){return'<td class="fc-axis '+this.widgetContentClass+'" '+this.axisStyleAttr()+"></td>";
},introHtml:function(){return'<td class="fc-axis" '+this.axisStyleAttr()+"></td>"},axisStyleAttr:function(){return null!==this.axisWidth?'style="width:'+this.axisWidth+'px"':""},updateSize:function(a){this.timeGrid.updateSize(a),mb.prototype.updateSize.call(this,a)},updateWidth:function(){this.axisWidth=k(this.el.find(".fc-axis"))},setHeight:function(a,b){var c,d;null===this.bottomRuleHeight&&(this.bottomRuleHeight=this.bottomRuleEl.outerHeight()),this.bottomRuleEl.hide(),this.scrollerEl.css("overflow",""),m(this.scrollerEl),f(this.noScrollRowEls),this.dayGrid&&(this.dayGrid.removeSegPopover(),c=this.opt("eventLimit"),c&&"number"!=typeof c&&(c=xb),c&&this.dayGrid.limitRows(c)),b||(d=this.computeScrollerHeight(a),l(this.scrollerEl,d)?(e(this.noScrollRowEls,r(this.scrollerEl)),d=this.computeScrollerHeight(a),this.scrollerEl.height(d)):(this.scrollerEl.height(d).css("overflow","hidden"),this.bottomRuleEl.show()))},computeInitialScroll:function(){var a=b.duration(this.opt("scrollTime")),c=this.timeGrid.computeTimeTop(a);return c=Math.ceil(c),c&&c++,c},renderEvents:function(a){var b,c,d=[],e=[],f=[];for(c=0;c<a.length;c++)a[c].allDay?d.push(a[c]):e.push(a[c]);b=this.timeGrid.renderEvents(e),this.dayGrid&&(f=this.dayGrid.renderEvents(d)),this.updateHeight()},getEventSegs:function(){return this.timeGrid.getEventSegs().concat(this.dayGrid?this.dayGrid.getEventSegs():[])},unrenderEvents:function(){this.timeGrid.unrenderEvents(),this.dayGrid&&this.dayGrid.unrenderEvents()},renderDrag:function(a,b){return a.start.hasTime()?this.timeGrid.renderDrag(a,b):this.dayGrid?this.dayGrid.renderDrag(a,b):void 0},unrenderDrag:function(){this.timeGrid.unrenderDrag(),this.dayGrid&&this.dayGrid.unrenderDrag()},renderSelection:function(a){a.start.hasTime()||a.end.hasTime()?this.timeGrid.renderSelection(a):this.dayGrid&&this.dayGrid.renderSelection(a)},unrenderSelection:function(){this.timeGrid.unrenderSelection(),this.dayGrid&&this.dayGrid.unrenderSelection()}}),xb=5,yb=[{hours:1},{minutes:30},{minutes:15},{seconds:30},{seconds:15}];return Na.agenda={"class":wb,defaults:{allDaySlot:!0,allDayText:"all-day",slotDuration:"00:30:00",minTime:"00:00:00",maxTime:"24:00:00",slotEventOverlap:!0}},Na.agendaDay={type:"agenda",duration:{days:1}},Na.agendaWeek={type:"agenda",duration:{weeks:1}},Ma});

//*timeFormat:{"":"h(:mm)t"},isRTL:!1,firstDay:0,monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],monthNamesShort:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dec"],dayNames:["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Dissabte"],dayNamesShort:["lu","ma","mi","ju","vi","sab","dom"];**/
/*! version : 4.17.37
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
!function(a){"use strict";if("function"==typeof define&&define.amd)define(["jquery","moment"],a);else if("object"==typeof exports)a(require("jquery"),require("moment"));else{if("undefined"==typeof jQuery)throw"bootstrap-datetimepicker requires jQuery to be loaded first";if("undefined"==typeof moment)throw"bootstrap-datetimepicker requires Moment.js to be loaded first";a(jQuery,moment)}}(function(a,b){"use strict";if(!b)throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");var c=function(c,d){var e,f,g,h,i,j,k,l={},m=!0,n=!1,o=!1,p=0,q=[{clsName:"days",navFnc:"M",navStep:1},{clsName:"months",navFnc:"y",navStep:1},{clsName:"years",navFnc:"y",navStep:10},{clsName:"decades",navFnc:"y",navStep:100}],r=["days","months","years","decades"],s=["top","bottom","auto"],t=["left","right","auto"],u=["default","top","bottom"],v={up:38,38:"up",down:40,40:"down",left:37,37:"left",right:39,39:"right",tab:9,9:"tab",escape:27,27:"escape",enter:13,13:"enter",pageUp:33,33:"pageUp",pageDown:34,34:"pageDown",shift:16,16:"shift",control:17,17:"control",space:32,32:"space",t:84,84:"t","delete":46,46:"delete"},w={},x=function(a){var c,e,f,g,h,i=!1;return void 0!==b.tz&&void 0!==d.timeZone&&null!==d.timeZone&&""!==d.timeZone&&(i=!0),void 0===a||null===a?c=i?b().tz(d.timeZone).startOf("d"):b().startOf("d"):i?(e=b().tz(d.timeZone).utcOffset(),f=b(a,j,d.useStrict).utcOffset(),f!==e?(g=b().tz(d.timeZone).format("Z"),h=b(a,j,d.useStrict).format("YYYY-MM-DD[T]HH:mm:ss")+g,c=b(h,j,d.useStrict).tz(d.timeZone)):c=b(a,j,d.useStrict).tz(d.timeZone)):c=b(a,j,d.useStrict),c},y=function(a){if("string"!=typeof a||a.length>1)throw new TypeError("isEnabled expects a single character string parameter");switch(a){case"y":return-1!==i.indexOf("Y");case"M":return-1!==i.indexOf("M");case"d":return-1!==i.toLowerCase().indexOf("d");case"h":case"H":return-1!==i.toLowerCase().indexOf("h");case"m":return-1!==i.indexOf("m");case"s":return-1!==i.indexOf("s");default:return!1}},z=function(){return y("h")||y("m")||y("s")},A=function(){return y("y")||y("M")||y("d")},B=function(){var b=a("<thead>").append(a("<tr>").append(a("<th>").addClass("prev").attr("data-action","previous").append(a("<span>").addClass(d.icons.previous))).append(a("<th>").addClass("picker-switch").attr("data-action","pickerSwitch").attr("colspan",d.calendarWeeks?"6":"5")).append(a("<th>").addClass("next").attr("data-action","next").append(a("<span>").addClass(d.icons.next)))),c=a("<tbody>").append(a("<tr>").append(a("<td>").attr("colspan",d.calendarWeeks?"8":"7")));return[a("<div>").addClass("datepicker-days").append(a("<table>").addClass("table-condensed").append(b).append(a("<tbody>"))),a("<div>").addClass("datepicker-months").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-years").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone())),a("<div>").addClass("datepicker-decades").append(a("<table>").addClass("table-condensed").append(b.clone()).append(c.clone()))]},C=function(){var b=a("<tr>"),c=a("<tr>"),e=a("<tr>");return y("h")&&(b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementHour}).addClass("btn").attr("data-action","incrementHours").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-hour").attr({"data-time-component":"hours",title:d.tooltips.pickHour}).attr("data-action","showHours"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementHour}).addClass("btn").attr("data-action","decrementHours").append(a("<span>").addClass(d.icons.down))))),y("m")&&(y("h")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementMinute}).addClass("btn").attr("data-action","incrementMinutes").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-minute").attr({"data-time-component":"minutes",title:d.tooltips.pickMinute}).attr("data-action","showMinutes"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementMinute}).addClass("btn").attr("data-action","decrementMinutes").append(a("<span>").addClass(d.icons.down))))),y("s")&&(y("m")&&(b.append(a("<td>").addClass("separator")),c.append(a("<td>").addClass("separator").html(":")),e.append(a("<td>").addClass("separator"))),b.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.incrementSecond}).addClass("btn").attr("data-action","incrementSeconds").append(a("<span>").addClass(d.icons.up)))),c.append(a("<td>").append(a("<span>").addClass("timepicker-second").attr({"data-time-component":"seconds",title:d.tooltips.pickSecond}).attr("data-action","showSeconds"))),e.append(a("<td>").append(a("<a>").attr({href:"#",tabindex:"-1",title:d.tooltips.decrementSecond}).addClass("btn").attr("data-action","decrementSeconds").append(a("<span>").addClass(d.icons.down))))),h||(b.append(a("<td>").addClass("separator")),c.append(a("<td>").append(a("<button>").addClass("btn btn-primary").attr({"data-action":"togglePeriod",tabindex:"-1",title:d.tooltips.togglePeriod}))),e.append(a("<td>").addClass("separator"))),a("<div>").addClass("timepicker-picker").append(a("<table>").addClass("table-condensed").append([b,c,e]))},D=function(){var b=a("<div>").addClass("timepicker-hours").append(a("<table>").addClass("table-condensed")),c=a("<div>").addClass("timepicker-minutes").append(a("<table>").addClass("table-condensed")),d=a("<div>").addClass("timepicker-seconds").append(a("<table>").addClass("table-condensed")),e=[C()];return y("h")&&e.push(b),y("m")&&e.push(c),y("s")&&e.push(d),e},E=function(){var b=[];return d.showTodayButton&&b.push(a("<td>").append(a("<a>").attr({"data-action":"today",title:d.tooltips.today}).append(a("<span>").addClass(d.icons.today)))),!d.sideBySide&&A()&&z()&&b.push(a("<td>").append(a("<a>").attr({"data-action":"togglePicker",title:d.tooltips.selectTime}).append(a("<span>").addClass(d.icons.time)))),d.showClear&&b.push(a("<td>").append(a("<a>").attr({"data-action":"clear",title:d.tooltips.clear}).append(a("<span>").addClass(d.icons.clear)))),d.showClose&&b.push(a("<td>").append(a("<a>").attr({"data-action":"close",title:d.tooltips.close}).append(a("<span>").addClass(d.icons.close)))),a("<table>").addClass("table-condensed").append(a("<tbody>").append(a("<tr>").append(b)))},F=function(){var b=a("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),c=a("<div>").addClass("datepicker").append(B()),e=a("<div>").addClass("timepicker").append(D()),f=a("<ul>").addClass("list-unstyled"),g=a("<li>").addClass("picker-switch"+(d.collapse?" accordion-toggle":"")).append(E());return d.inline&&b.removeClass("dropdown-menu"),h&&b.addClass("usetwentyfour"),y("s")&&!h&&b.addClass("wider"),d.sideBySide&&A()&&z()?(b.addClass("timepicker-sbs"),"top"===d.toolbarPlacement&&b.append(g),b.append(a("<div>").addClass("row").append(c.addClass("col-md-6")).append(e.addClass("col-md-6"))),"bottom"===d.toolbarPlacement&&b.append(g),b):("top"===d.toolbarPlacement&&f.append(g),A()&&f.append(a("<li>").addClass(d.collapse&&z()?"collapse in":"").append(c)),"default"===d.toolbarPlacement&&f.append(g),z()&&f.append(a("<li>").addClass(d.collapse&&A()?"collapse":"").append(e)),"bottom"===d.toolbarPlacement&&f.append(g),b.append(f))},G=function(){var b,e={};return b=c.is("input")||d.inline?c.data():c.find("input").data(),b.dateOptions&&b.dateOptions instanceof Object&&(e=a.extend(!0,e,b.dateOptions)),a.each(d,function(a){var c="date"+a.charAt(0).toUpperCase()+a.slice(1);void 0!==b[c]&&(e[a]=b[c])}),e},H=function(){var b,e=(n||c).position(),f=(n||c).offset(),g=d.widgetPositioning.vertical,h=d.widgetPositioning.horizontal;if(d.widgetParent)b=d.widgetParent.append(o);else if(c.is("input"))b=c.after(o).parent();else{if(d.inline)return void(b=c.append(o));b=c,c.children().first().after(o)}if("auto"===g&&(g=f.top+1.5*o.height()>=a(window).height()+a(window).scrollTop()&&o.height()+c.outerHeight()<f.top?"top":"bottom"),"auto"===h&&(h=b.width()<f.left+o.outerWidth()/2&&f.left+o.outerWidth()>a(window).width()?"right":"left"),"top"===g?o.addClass("top").removeClass("bottom"):o.addClass("bottom").removeClass("top"),"right"===h?o.addClass("pull-right"):o.removeClass("pull-right"),"relative"!==b.css("position")&&(b=b.parents().filter(function(){return"relative"===a(this).css("position")}).first()),0===b.length)throw new Error("datetimepicker component should be placed within a relative positioned container");o.css({top:"top"===g?"auto":e.top+c.outerHeight(),bottom:"top"===g?e.top+c.outerHeight():"auto",left:"left"===h?b===c?0:e.left:"auto",right:"left"===h?"auto":b.outerWidth()-c.outerWidth()-(b===c?0:e.left)})},I=function(a){"dp.change"===a.type&&(a.date&&a.date.isSame(a.oldDate)||!a.date&&!a.oldDate)||c.trigger(a)},J=function(a){"y"===a&&(a="YYYY"),I({type:"dp.update",change:a,viewDate:f.clone()})},K=function(a){o&&(a&&(k=Math.max(p,Math.min(3,k+a))),o.find(".datepicker > div").hide().filter(".datepicker-"+q[k].clsName).show())},L=function(){var b=a("<tr>"),c=f.clone().startOf("w").startOf("d");for(d.calendarWeeks===!0&&b.append(a("<th>").addClass("cw").text("#"));c.isBefore(f.clone().endOf("w"));)b.append(a("<th>").addClass("dow").text(c.format("dd"))),c.add(1,"d");o.find(".datepicker-days thead").append(b)},M=function(a){return d.disabledDates[a.format("YYYY-MM-DD")]===!0},N=function(a){return d.enabledDates[a.format("YYYY-MM-DD")]===!0},O=function(a){return d.disabledHours[a.format("H")]===!0},P=function(a){return d.enabledHours[a.format("H")]===!0},Q=function(b,c){if(!b.isValid())return!1;if(d.disabledDates&&"d"===c&&M(b))return!1;if(d.enabledDates&&"d"===c&&!N(b))return!1;if(d.minDate&&b.isBefore(d.minDate,c))return!1;if(d.maxDate&&b.isAfter(d.maxDate,c))return!1;if(d.daysOfWeekDisabled&&"d"===c&&-1!==d.daysOfWeekDisabled.indexOf(b.day()))return!1;if(d.disabledHours&&("h"===c||"m"===c||"s"===c)&&O(b))return!1;if(d.enabledHours&&("h"===c||"m"===c||"s"===c)&&!P(b))return!1;if(d.disabledTimeIntervals&&("h"===c||"m"===c||"s"===c)){var e=!1;if(a.each(d.disabledTimeIntervals,function(){return b.isBetween(this[0],this[1])?(e=!0,!1):void 0}),e)return!1}return!0},R=function(){for(var b=[],c=f.clone().startOf("y").startOf("d");c.isSame(f,"y");)b.push(a("<span>").attr("data-action","selectMonth").addClass("month").text(c.format("MMM"))),c.add(1,"M");o.find(".datepicker-months td").empty().append(b)},S=function(){var b=o.find(".datepicker-months"),c=b.find("th"),g=b.find("tbody").find("span");c.eq(0).find("span").attr("title",d.tooltips.prevYear),c.eq(1).attr("title",d.tooltips.selectYear),c.eq(2).find("span").attr("title",d.tooltips.nextYear),b.find(".disabled").removeClass("disabled"),Q(f.clone().subtract(1,"y"),"y")||c.eq(0).addClass("disabled"),c.eq(1).text(f.year()),Q(f.clone().add(1,"y"),"y")||c.eq(2).addClass("disabled"),g.removeClass("active"),e.isSame(f,"y")&&!m&&g.eq(e.month()).addClass("active"),g.each(function(b){Q(f.clone().month(b),"M")||a(this).addClass("disabled")})},T=function(){var a=o.find(".datepicker-years"),b=a.find("th"),c=f.clone().subtract(5,"y"),g=f.clone().add(6,"y"),h="";for(b.eq(0).find("span").attr("title",d.tooltips.prevDecade),b.eq(1).attr("title",d.tooltips.selectDecade),b.eq(2).find("span").attr("title",d.tooltips.nextDecade),a.find(".disabled").removeClass("disabled"),d.minDate&&d.minDate.isAfter(c,"y")&&b.eq(0).addClass("disabled"),b.eq(1).text(c.year()+"-"+g.year()),d.maxDate&&d.maxDate.isBefore(g,"y")&&b.eq(2).addClass("disabled");!c.isAfter(g,"y");)h+='<span data-action="selectYear" class="year'+(c.isSame(e,"y")&&!m?" active":"")+(Q(c,"y")?"":" disabled")+'">'+c.year()+"</span>",c.add(1,"y");a.find("td").html(h)},U=function(){var a=o.find(".datepicker-decades"),c=a.find("th"),g=b({y:f.year()-f.year()%100-1}),h=g.clone().add(100,"y"),i=g.clone(),j="";for(c.eq(0).find("span").attr("title",d.tooltips.prevCentury),c.eq(2).find("span").attr("title",d.tooltips.nextCentury),a.find(".disabled").removeClass("disabled"),(g.isSame(b({y:1900}))||d.minDate&&d.minDate.isAfter(g,"y"))&&c.eq(0).addClass("disabled"),c.eq(1).text(g.year()+"-"+h.year()),(g.isSame(b({y:2e3}))||d.maxDate&&d.maxDate.isBefore(h,"y"))&&c.eq(2).addClass("disabled");!g.isAfter(h,"y");)j+='<span data-action="selectDecade" class="decade'+(g.isSame(e,"y")?" active":"")+(Q(g,"y")?"":" disabled")+'" data-selection="'+(g.year()+6)+'">'+(g.year()+1)+" - "+(g.year()+12)+"</span>",g.add(12,"y");j+="<span></span><span></span><span></span>",a.find("td").html(j),c.eq(1).text(i.year()+1+"-"+g.year())},V=function(){var b,c,g,h,i=o.find(".datepicker-days"),j=i.find("th"),k=[];if(A()){for(j.eq(0).find("span").attr("title",d.tooltips.prevMonth),j.eq(1).attr("title",d.tooltips.selectMonth),j.eq(2).find("span").attr("title",d.tooltips.nextMonth),i.find(".disabled").removeClass("disabled"),j.eq(1).text(f.format(d.dayViewHeaderFormat)),Q(f.clone().subtract(1,"M"),"M")||j.eq(0).addClass("disabled"),Q(f.clone().add(1,"M"),"M")||j.eq(2).addClass("disabled"),b=f.clone().startOf("M").startOf("w").startOf("d"),h=0;42>h;h++)0===b.weekday()&&(c=a("<tr>"),d.calendarWeeks&&c.append('<td class="cw">'+b.week()+"</td>"),k.push(c)),g="",b.isBefore(f,"M")&&(g+=" old"),b.isAfter(f,"M")&&(g+=" new"),b.isSame(e,"d")&&!m&&(g+=" active"),Q(b,"d")||(g+=" disabled"),b.isSame(x(),"d")&&(g+=" today"),(0===b.day()||6===b.day())&&(g+=" weekend"),c.append('<td data-action="selectDay" data-day="'+b.format("L")+'" class="day'+g+'">'+b.date()+"</td>"),b.add(1,"d");i.find("tbody").empty().append(k),S(),T(),U()}},W=function(){var b=o.find(".timepicker-hours table"),c=f.clone().startOf("d"),d=[],e=a("<tr>");for(f.hour()>11&&!h&&c.hour(12);c.isSame(f,"d")&&(h||f.hour()<12&&c.hour()<12||f.hour()>11);)c.hour()%4===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectHour" class="hour'+(Q(c,"h")?"":" disabled")+'">'+c.format(h?"HH":"hh")+"</td>"),c.add(1,"h");b.empty().append(d)},X=function(){for(var b=o.find(".timepicker-minutes table"),c=f.clone().startOf("h"),e=[],g=a("<tr>"),h=1===d.stepping?5:d.stepping;f.isSame(c,"h");)c.minute()%(4*h)===0&&(g=a("<tr>"),e.push(g)),g.append('<td data-action="selectMinute" class="minute'+(Q(c,"m")?"":" disabled")+'">'+c.format("mm")+"</td>"),c.add(h,"m");b.empty().append(e)},Y=function(){for(var b=o.find(".timepicker-seconds table"),c=f.clone().startOf("m"),d=[],e=a("<tr>");f.isSame(c,"m");)c.second()%20===0&&(e=a("<tr>"),d.push(e)),e.append('<td data-action="selectSecond" class="second'+(Q(c,"s")?"":" disabled")+'">'+c.format("ss")+"</td>"),c.add(5,"s");b.empty().append(d)},Z=function(){var a,b,c=o.find(".timepicker span[data-time-component]");h||(a=o.find(".timepicker [data-action=togglePeriod]"),b=e.clone().add(e.hours()>=12?-12:12,"h"),a.text(e.format("A")),Q(b,"h")?a.removeClass("disabled"):a.addClass("disabled")),c.filter("[data-time-component=hours]").text(e.format(h?"HH":"hh")),c.filter("[data-time-component=minutes]").text(e.format("mm")),c.filter("[data-time-component=seconds]").text(e.format("ss")),W(),X(),Y()},$=function(){o&&(V(),Z())},_=function(a){var b=m?null:e;return a?(a=a.clone().locale(d.locale),1!==d.stepping&&a.minutes(Math.round(a.minutes()/d.stepping)*d.stepping%60).seconds(0),void(Q(a)?(e=a,f=e.clone(),g.val(e.format(i)),c.data("date",e.format(i)),m=!1,$(),I({type:"dp.change",date:e.clone(),oldDate:b})):(d.keepInvalid||g.val(m?"":e.format(i)),I({type:"dp.error",date:a})))):(m=!0,g.val(""),c.data("date",""),I({type:"dp.change",date:!1,oldDate:b}),void $())},aa=function(){var b=!1;return o?(o.find(".collapse").each(function(){var c=a(this).data("collapse");return c&&c.transitioning?(b=!0,!1):!0}),b?l:(n&&n.hasClass("btn")&&n.toggleClass("active"),o.hide(),a(window).off("resize",H),o.off("click","[data-action]"),o.off("mousedown",!1),o.remove(),o=!1,I({type:"dp.hide",date:e.clone()}),g.blur(),l)):l},ba=function(){_(null)},ca={next:function(){var a=q[k].navFnc;f.add(q[k].navStep,a),V(),J(a)},previous:function(){var a=q[k].navFnc;f.subtract(q[k].navStep,a),V(),J(a)},pickerSwitch:function(){K(1)},selectMonth:function(b){var c=a(b.target).closest("tbody").find("span").index(a(b.target));f.month(c),k===p?(_(e.clone().year(f.year()).month(f.month())),d.inline||aa()):(K(-1),V()),J("M")},selectYear:function(b){var c=parseInt(a(b.target).text(),10)||0;f.year(c),k===p?(_(e.clone().year(f.year())),d.inline||aa()):(K(-1),V()),J("YYYY")},selectDecade:function(b){var c=parseInt(a(b.target).data("selection"),10)||0;f.year(c),k===p?(_(e.clone().year(f.year())),d.inline||aa()):(K(-1),V()),J("YYYY")},selectDay:function(b){var c=f.clone();a(b.target).is(".old")&&c.subtract(1,"M"),a(b.target).is(".new")&&c.add(1,"M"),_(c.date(parseInt(a(b.target).text(),10))),z()||d.keepOpen||d.inline||aa()},incrementHours:function(){var a=e.clone().add(1,"h");Q(a,"h")&&_(a)},incrementMinutes:function(){var a=e.clone().add(d.stepping,"m");Q(a,"m")&&_(a)},incrementSeconds:function(){var a=e.clone().add(1,"s");Q(a,"s")&&_(a)},decrementHours:function(){var a=e.clone().subtract(1,"h");Q(a,"h")&&_(a)},decrementMinutes:function(){var a=e.clone().subtract(d.stepping,"m");Q(a,"m")&&_(a)},decrementSeconds:function(){var a=e.clone().subtract(1,"s");Q(a,"s")&&_(a)},togglePeriod:function(){_(e.clone().add(e.hours()>=12?-12:12,"h"))},togglePicker:function(b){var c,e=a(b.target),f=e.closest("ul"),g=f.find(".in"),h=f.find(".collapse:not(.in)");if(g&&g.length){if(c=g.data("collapse"),c&&c.transitioning)return;g.collapse?(g.collapse("hide"),h.collapse("show")):(g.removeClass("in"),h.addClass("in")),e.is("span")?e.toggleClass(d.icons.time+" "+d.icons.date):e.find("span").toggleClass(d.icons.time+" "+d.icons.date)}},showPicker:function(){o.find(".timepicker > div:not(.timepicker-picker)").hide(),o.find(".timepicker .timepicker-picker").show()},showHours:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-hours").show()},showMinutes:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){o.find(".timepicker .timepicker-picker").hide(),o.find(".timepicker .timepicker-seconds").show()},selectHour:function(b){var c=parseInt(a(b.target).text(),10);h||(e.hours()>=12?12!==c&&(c+=12):12===c&&(c=0)),_(e.clone().hours(c)),ca.showPicker.call(l)},selectMinute:function(b){_(e.clone().minutes(parseInt(a(b.target).text(),10))),ca.showPicker.call(l)},selectSecond:function(b){_(e.clone().seconds(parseInt(a(b.target).text(),10))),ca.showPicker.call(l)},clear:ba,today:function(){var a=x();Q(a,"d")&&_(a)},close:aa},da=function(b){return a(b.currentTarget).is(".disabled")?!1:(ca[a(b.currentTarget).data("action")].apply(l,arguments),!1)},ea=function(){var b,c={year:function(a){return a.month(0).date(1).hours(0).seconds(0).minutes(0)},month:function(a){return a.date(1).hours(0).seconds(0).minutes(0)},day:function(a){return a.hours(0).seconds(0).minutes(0)},hour:function(a){return a.seconds(0).minutes(0)},minute:function(a){return a.seconds(0)}};return g.prop("disabled")||!d.ignoreReadonly&&g.prop("readonly")||o?l:(void 0!==g.val()&&0!==g.val().trim().length?_(ga(g.val().trim())):d.useCurrent&&m&&(g.is("input")&&0===g.val().trim().length||d.inline)&&(b=x(),"string"==typeof d.useCurrent&&(b=c[d.useCurrent](b)),_(b)),o=F(),L(),R(),o.find(".timepicker-hours").hide(),o.find(".timepicker-minutes").hide(),o.find(".timepicker-seconds").hide(),$(),K(),a(window).on("resize",H),o.on("click","[data-action]",da),o.on("mousedown",!1),n&&n.hasClass("btn")&&n.toggleClass("active"),o.show(),H(),d.focusOnShow&&!g.is(":focus")&&g.focus(),I({type:"dp.show"}),l)},fa=function(){return o?aa():ea()},ga=function(a){return a=void 0===d.parseInputDate?b.isMoment(a)||a instanceof Date?b(a):x(a):d.parseInputDate(a),a.locale(d.locale),a},ha=function(a){var b,c,e,f,g=null,h=[],i={},j=a.which,k="p";w[j]=k;for(b in w)w.hasOwnProperty(b)&&w[b]===k&&(h.push(b),parseInt(b,10)!==j&&(i[b]=!0));for(b in d.keyBinds)if(d.keyBinds.hasOwnProperty(b)&&"function"==typeof d.keyBinds[b]&&(e=b.split(" "),e.length===h.length&&v[j]===e[e.length-1])){for(f=!0,c=e.length-2;c>=0;c--)if(!(v[e[c]]in i)){f=!1;break}if(f){g=d.keyBinds[b];break}}g&&(g.call(l,o),a.stopPropagation(),a.preventDefault())},ia=function(a){w[a.which]="r",a.stopPropagation(),a.preventDefault()},ja=function(b){var c=a(b.target).val().trim(),d=c?ga(c):null;return _(d),b.stopImmediatePropagation(),!1},ka=function(){g.on({change:ja,blur:d.debug?"":aa,keydown:ha,keyup:ia,focus:d.allowInputToggle?ea:""}),c.is("input")?g.on({focus:ea}):n&&(n.on("click",fa),n.on("mousedown",!1))},la=function(){g.off({change:ja,blur:blur,keydown:ha,keyup:ia,focus:d.allowInputToggle?aa:""}),c.is("input")?g.off({focus:ea}):n&&(n.off("click",fa),n.off("mousedown",!1))},ma=function(b){var c={};return a.each(b,function(){var a=ga(this);a.isValid()&&(c[a.format("YYYY-MM-DD")]=!0)}),Object.keys(c).length?c:!1},na=function(b){var c={};return a.each(b,function(){c[this]=!0}),Object.keys(c).length?c:!1},oa=function(){var a=d.format||"L LT";i=a.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){var b=e.localeData().longDateFormat(a)||a;return b.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,function(a){return e.localeData().longDateFormat(a)||a})}),j=d.extraFormats?d.extraFormats.slice():[],j.indexOf(a)<0&&j.indexOf(i)<0&&j.push(i),h=i.toLowerCase().indexOf("a")<1&&i.replace(/\[.*?\]/g,"").indexOf("h")<1,y("y")&&(p=2),y("M")&&(p=1),y("d")&&(p=0),k=Math.max(p,k),m||_(e)};if(l.destroy=function(){aa(),la(),c.removeData("DateTimePicker"),c.removeData("date")},l.toggle=fa,l.show=ea,l.hide=aa,l.disable=function(){return aa(),n&&n.hasClass("btn")&&n.addClass("disabled"),g.prop("disabled",!0),l},l.enable=function(){return n&&n.hasClass("btn")&&n.removeClass("disabled"),g.prop("disabled",!1),l},l.ignoreReadonly=function(a){if(0===arguments.length)return d.ignoreReadonly;if("boolean"!=typeof a)throw new TypeError("ignoreReadonly () expects a boolean parameter");return d.ignoreReadonly=a,l},l.options=function(b){if(0===arguments.length)return a.extend(!0,{},d);if(!(b instanceof Object))throw new TypeError("options() options parameter should be an object");return a.extend(!0,d,b),a.each(d,function(a,b){if(void 0===l[a])throw new TypeError("option "+a+" is not recognized!");l[a](b)}),l},l.date=function(a){if(0===arguments.length)return m?null:e.clone();if(!(null===a||"string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("date() parameter must be one of [null, string, moment or Date]");return _(null===a?null:ga(a)),l},l.format=function(a){if(0===arguments.length)return d.format;if("string"!=typeof a&&("boolean"!=typeof a||a!==!1))throw new TypeError("format() expects a sting or boolean:false parameter "+a);return d.format=a,i&&oa(),l},l.timeZone=function(a){return 0===arguments.length?d.timeZone:(d.timeZone=a,l)},l.dayViewHeaderFormat=function(a){if(0===arguments.length)return d.dayViewHeaderFormat;if("string"!=typeof a)throw new TypeError("dayViewHeaderFormat() expects a string parameter");return d.dayViewHeaderFormat=a,l},l.extraFormats=function(a){if(0===arguments.length)return d.extraFormats;if(a!==!1&&!(a instanceof Array))throw new TypeError("extraFormats() expects an array or false parameter");return d.extraFormats=a,j&&oa(),l},l.disabledDates=function(b){if(0===arguments.length)return d.disabledDates?a.extend({},d.disabledDates):d.disabledDates;if(!b)return d.disabledDates=!1,$(),l;if(!(b instanceof Array))throw new TypeError("disabledDates() expects an array parameter");return d.disabledDates=ma(b),d.enabledDates=!1,$(),l},l.enabledDates=function(b){if(0===arguments.length)return d.enabledDates?a.extend({},d.enabledDates):d.enabledDates;if(!b)return d.enabledDates=!1,$(),l;if(!(b instanceof Array))throw new TypeError("enabledDates() expects an array parameter");return d.enabledDates=ma(b),d.disabledDates=!1,$(),l},l.daysOfWeekDisabled=function(a){if(0===arguments.length)return d.daysOfWeekDisabled.splice(0);if("boolean"==typeof a&&!a)return d.daysOfWeekDisabled=!1,$(),l;if(!(a instanceof Array))throw new TypeError("daysOfWeekDisabled() expects an array parameter");if(d.daysOfWeekDisabled=a.reduce(function(a,b){return b=parseInt(b,10),b>6||0>b||isNaN(b)?a:(-1===a.indexOf(b)&&a.push(b),a)},[]).sort(),d.useCurrent&&!d.keepInvalid){for(var b=0;!Q(e,"d");){if(e.add(1,"d"),7===b)throw"Tried 7 times to find a valid date";b++}_(e)}return $(),l},l.maxDate=function(a){if(0===arguments.length)return d.maxDate?d.maxDate.clone():d.maxDate;if("boolean"==typeof a&&a===!1)return d.maxDate=!1,$(),l;"string"==typeof a&&("now"===a||"moment"===a)&&(a=x());var b=ga(a);if(!b.isValid())throw new TypeError("maxDate() Could not parse date parameter: "+a);if(d.minDate&&b.isBefore(d.minDate))throw new TypeError("maxDate() date parameter is before options.minDate: "+b.format(i));return d.maxDate=b,d.useCurrent&&!d.keepInvalid&&e.isAfter(a)&&_(d.maxDate),f.isAfter(b)&&(f=b.clone().subtract(d.stepping,"m")),$(),l},l.minDate=function(a){if(0===arguments.length)return d.minDate?d.minDate.clone():d.minDate;if("boolean"==typeof a&&a===!1)return d.minDate=!1,$(),l;"string"==typeof a&&("now"===a||"moment"===a)&&(a=x());var b=ga(a);if(!b.isValid())throw new TypeError("minDate() Could not parse date parameter: "+a);if(d.maxDate&&b.isAfter(d.maxDate))throw new TypeError("minDate() date parameter is after options.maxDate: "+b.format(i));return d.minDate=b,d.useCurrent&&!d.keepInvalid&&e.isBefore(a)&&_(d.minDate),f.isBefore(b)&&(f=b.clone().add(d.stepping,"m")),$(),l},l.defaultDate=function(a){if(0===arguments.length)return d.defaultDate?d.defaultDate.clone():d.defaultDate;if(!a)return d.defaultDate=!1,l;"string"==typeof a&&("now"===a||"moment"===a)&&(a=x());var b=ga(a);if(!b.isValid())throw new TypeError("defaultDate() Could not parse date parameter: "+a);if(!Q(b))throw new TypeError("defaultDate() date passed is invalid according to component setup validations");return d.defaultDate=b,(d.defaultDate&&d.inline||""===g.val().trim())&&_(d.defaultDate),l},l.locale=function(a){if(0===arguments.length)return d.locale;if(!b.localeData(a))throw new TypeError("locale() locale "+a+" is not loaded from moment locales!");return d.locale=a,e.locale(d.locale),f.locale(d.locale),i&&oa(),o&&(aa(),ea()),l},l.stepping=function(a){return 0===arguments.length?d.stepping:(a=parseInt(a,10),(isNaN(a)||1>a)&&(a=1),d.stepping=a,l)},l.useCurrent=function(a){var b=["year","month","day","hour","minute"];if(0===arguments.length)return d.useCurrent;if("boolean"!=typeof a&&"string"!=typeof a)throw new TypeError("useCurrent() expects a boolean or string parameter");if("string"==typeof a&&-1===b.indexOf(a.toLowerCase()))throw new TypeError("useCurrent() expects a string parameter of "+b.join(", "));return d.useCurrent=a,l},l.collapse=function(a){if(0===arguments.length)return d.collapse;if("boolean"!=typeof a)throw new TypeError("collapse() expects a boolean parameter");return d.collapse===a?l:(d.collapse=a,o&&(aa(),ea()),l)},l.icons=function(b){if(0===arguments.length)return a.extend({},d.icons);if(!(b instanceof Object))throw new TypeError("icons() expects parameter to be an Object");return a.extend(d.icons,b),o&&(aa(),ea()),l},l.tooltips=function(b){if(0===arguments.length)return a.extend({},d.tooltips);if(!(b instanceof Object))throw new TypeError("tooltips() expects parameter to be an Object");return a.extend(d.tooltips,b),o&&(aa(),ea()),l},l.useStrict=function(a){if(0===arguments.length)return d.useStrict;if("boolean"!=typeof a)throw new TypeError("useStrict() expects a boolean parameter");return d.useStrict=a,l},l.sideBySide=function(a){if(0===arguments.length)return d.sideBySide;if("boolean"!=typeof a)throw new TypeError("sideBySide() expects a boolean parameter");return d.sideBySide=a,o&&(aa(),ea()),l},l.viewMode=function(a){if(0===arguments.length)return d.viewMode;if("string"!=typeof a)throw new TypeError("viewMode() expects a string parameter");if(-1===r.indexOf(a))throw new TypeError("viewMode() parameter must be one of ("+r.join(", ")+") value");return d.viewMode=a,k=Math.max(r.indexOf(a),p),K(),l},l.toolbarPlacement=function(a){if(0===arguments.length)return d.toolbarPlacement;if("string"!=typeof a)throw new TypeError("toolbarPlacement() expects a string parameter");if(-1===u.indexOf(a))throw new TypeError("toolbarPlacement() parameter must be one of ("+u.join(", ")+") value");return d.toolbarPlacement=a,o&&(aa(),ea()),l},l.widgetPositioning=function(b){if(0===arguments.length)return a.extend({},d.widgetPositioning);if("[object Object]"!=={}.toString.call(b))throw new TypeError("widgetPositioning() expects an object variable");if(b.horizontal){if("string"!=typeof b.horizontal)throw new TypeError("widgetPositioning() horizontal variable must be a string");if(b.horizontal=b.horizontal.toLowerCase(),-1===t.indexOf(b.horizontal))throw new TypeError("widgetPositioning() expects horizontal parameter to be one of ("+t.join(", ")+")");d.widgetPositioning.horizontal=b.horizontal}if(b.vertical){if("string"!=typeof b.vertical)throw new TypeError("widgetPositioning() vertical variable must be a string");if(b.vertical=b.vertical.toLowerCase(),-1===s.indexOf(b.vertical))throw new TypeError("widgetPositioning() expects vertical parameter to be one of ("+s.join(", ")+")");d.widgetPositioning.vertical=b.vertical}return $(),l},l.calendarWeeks=function(a){if(0===arguments.length)return d.calendarWeeks;if("boolean"!=typeof a)throw new TypeError("calendarWeeks() expects parameter to be a boolean value");return d.calendarWeeks=a,$(),l},l.showTodayButton=function(a){if(0===arguments.length)return d.showTodayButton;if("boolean"!=typeof a)throw new TypeError("showTodayButton() expects a boolean parameter");return d.showTodayButton=a,o&&(aa(),ea()),l},l.showClear=function(a){if(0===arguments.length)return d.showClear;if("boolean"!=typeof a)throw new TypeError("showClear() expects a boolean parameter");return d.showClear=a,o&&(aa(),ea()),l},l.widgetParent=function(b){if(0===arguments.length)return d.widgetParent;if("string"==typeof b&&(b=a(b)),null!==b&&"string"!=typeof b&&!(b instanceof a))throw new TypeError("widgetParent() expects a string or a jQuery object parameter");return d.widgetParent=b,o&&(aa(),ea()),l},l.keepOpen=function(a){if(0===arguments.length)return d.keepOpen;if("boolean"!=typeof a)throw new TypeError("keepOpen() expects a boolean parameter");return d.keepOpen=a,l},l.focusOnShow=function(a){if(0===arguments.length)return d.focusOnShow;if("boolean"!=typeof a)throw new TypeError("focusOnShow() expects a boolean parameter");return d.focusOnShow=a,l},l.inline=function(a){if(0===arguments.length)return d.inline;if("boolean"!=typeof a)throw new TypeError("inline() expects a boolean parameter");return d.inline=a,l},l.clear=function(){return ba(),l},l.keyBinds=function(a){return d.keyBinds=a,l},l.getMoment=function(a){return x(a)},l.debug=function(a){if("boolean"!=typeof a)throw new TypeError("debug() expects a boolean parameter");return d.debug=a,l},l.allowInputToggle=function(a){if(0===arguments.length)return d.allowInputToggle;if("boolean"!=typeof a)throw new TypeError("allowInputToggle() expects a boolean parameter");return d.allowInputToggle=a,l},l.showClose=function(a){if(0===arguments.length)return d.showClose;if("boolean"!=typeof a)throw new TypeError("showClose() expects a boolean parameter");return d.showClose=a,l},l.keepInvalid=function(a){if(0===arguments.length)return d.keepInvalid;if("boolean"!=typeof a)throw new TypeError("keepInvalid() expects a boolean parameter");return d.keepInvalid=a,l},l.datepickerInput=function(a){if(0===arguments.length)return d.datepickerInput;if("string"!=typeof a)throw new TypeError("datepickerInput() expects a string parameter");return d.datepickerInput=a,l},l.parseInputDate=function(a){if(0===arguments.length)return d.parseInputDate;
if("function"!=typeof a)throw new TypeError("parseInputDate() sholud be as function");return d.parseInputDate=a,l},l.disabledTimeIntervals=function(b){if(0===arguments.length)return d.disabledTimeIntervals?a.extend({},d.disabledTimeIntervals):d.disabledTimeIntervals;if(!b)return d.disabledTimeIntervals=!1,$(),l;if(!(b instanceof Array))throw new TypeError("disabledTimeIntervals() expects an array parameter");return d.disabledTimeIntervals=b,$(),l},l.disabledHours=function(b){if(0===arguments.length)return d.disabledHours?a.extend({},d.disabledHours):d.disabledHours;if(!b)return d.disabledHours=!1,$(),l;if(!(b instanceof Array))throw new TypeError("disabledHours() expects an array parameter");if(d.disabledHours=na(b),d.enabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!Q(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}_(e)}return $(),l},l.enabledHours=function(b){if(0===arguments.length)return d.enabledHours?a.extend({},d.enabledHours):d.enabledHours;if(!b)return d.enabledHours=!1,$(),l;if(!(b instanceof Array))throw new TypeError("enabledHours() expects an array parameter");if(d.enabledHours=na(b),d.disabledHours=!1,d.useCurrent&&!d.keepInvalid){for(var c=0;!Q(e,"h");){if(e.add(1,"h"),24===c)throw"Tried 24 times to find a valid date";c++}_(e)}return $(),l},l.viewDate=function(a){if(0===arguments.length)return f.clone();if(!a)return f=e.clone(),l;if(!("string"==typeof a||b.isMoment(a)||a instanceof Date))throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");return f=ga(a),J(),l},c.is("input"))g=c;else if(g=c.find(d.datepickerInput),0===g.size())g=c.find("input");else if(!g.is("input"))throw new Error('CSS class "'+d.datepickerInput+'" cannot be applied to non input element');if(c.hasClass("input-group")&&(n=0===c.find(".datepickerbutton").size()?c.find(".input-group-addon"):c.find(".datepickerbutton")),!d.inline&&!g.is("input"))throw new Error("Could not initialize DateTimePicker without an input element");return e=x(),f=e.clone(),a.extend(!0,d,G()),l.options(d),oa(),ka(),g.prop("disabled")&&l.disable(),g.is("input")&&0!==g.val().trim().length?_(ga(g.val().trim())):d.defaultDate&&void 0===g.attr("placeholder")&&_(d.defaultDate),d.inline&&ea(),l};a.fn.datetimepicker=function(b){return this.each(function(){var d=a(this);d.data("DateTimePicker")||(b=a.extend(!0,{},a.fn.datetimepicker.defaults,b),d.data("DateTimePicker",c(d,b)))})},a.fn.datetimepicker.defaults={timeZone:"Etc/UTC",format:!1,dayViewHeaderFormat:"MMMM YYYY",extraFormats:!1,stepping:1,minDate:!1,maxDate:!1,useCurrent:!0,collapse:!0,locale:b.locale(),defaultDate:!1,disabledDates:!1,enabledDates:!1,icons:{time:"glyphicon glyphicon-time",date:"glyphicon glyphicon-calendar",up:"glyphicon glyphicon-chevron-up",down:"glyphicon glyphicon-chevron-down",previous:"glyphicon glyphicon-chevron-left",next:"glyphicon glyphicon-chevron-right",today:"glyphicon glyphicon-screenshot",clear:"glyphicon glyphicon-trash",close:"glyphicon glyphicon-remove"},tooltips:{today:"Go to today",clear:"Clear selection",close:"Close the picker",selectMonth:"Select Month",prevMonth:"Previous Month",nextMonth:"Next Month",selectYear:"Select Year",prevYear:"Previous Year",nextYear:"Next Year",selectDecade:"Select Decade",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevCentury:"Previous Century",nextCentury:"Next Century",pickHour:"Pick Hour",incrementHour:"Increment Hour",decrementHour:"Decrement Hour",pickMinute:"Pick Minute",incrementMinute:"Increment Minute",decrementMinute:"Decrement Minute",pickSecond:"Pick Second",incrementSecond:"Increment Second",decrementSecond:"Decrement Second",togglePeriod:"Toggle Period",selectTime:"Select Time"},useStrict:!1,sideBySide:!1,daysOfWeekDisabled:!1,calendarWeeks:!1,viewMode:"days",toolbarPlacement:"default",showTodayButton:!1,showClear:!1,showClose:!1,widgetPositioning:{horizontal:"auto",vertical:"auto"},widgetParent:null,ignoreReadonly:!1,keepOpen:!1,focusOnShow:!0,inline:!1,keepInvalid:!1,datepickerInput:".datepickerinput",keyBinds:{up:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(7,"d")):this.date(b.clone().add(this.stepping(),"m"))}},down:function(a){if(!a)return void this.show();var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(7,"d")):this.date(b.clone().subtract(this.stepping(),"m"))},"control up":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().subtract(1,"y")):this.date(b.clone().add(1,"h"))}},"control down":function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")?this.date(b.clone().add(1,"y")):this.date(b.clone().subtract(1,"h"))}},left:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"d"))}},right:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"d"))}},pageUp:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().subtract(1,"M"))}},pageDown:function(a){if(a){var b=this.date()||this.getMoment();a.find(".datepicker").is(":visible")&&this.date(b.clone().add(1,"M"))}},enter:function(){this.hide()},escape:function(){this.hide()},"control space":function(a){a.find(".timepicker").is(":visible")&&a.find('.btn[data-action="togglePeriod"]').click()},t:function(){this.date(this.getMoment())},"delete":function(){this.clear()}},debug:!1,allowInputToggle:!1,disabledTimeIntervals:!1,disabledHours:!1,enabledHours:!1,viewDate:!1}});
/* 
 *
 *
 jAlert v.3
 Made with love by Versatility Werks (http://flwebsites.biz)
 MIT Licensed
 *
 *
 */
;(function($) {

	var $jAlertSelectedOpts = {};

	if(!Date.now)
		Date.now = function(){
			return +new Date();
		};

	$.fn.jAlert = function(options) {

		var themes = ['default', 'green', 'red', 'black', 'blue','yellow'],
				sizes = ['xsm', 'sm', 'md', 'lg', 'xlg', 'full'],
				backgroundColors = ['white', 'black'],
				styles = [], //array of styles that gets joined together with a space between in a style tag on the jalert div
				classes = ['animated'], //array of classes that get joined together with a space between on the jalert div
				backgroundClasses = []; //array of classes that get joined together with a space between on the jalert background div

		/* Block Multiple Instances by running jAlert for each one */
		if (this.length > 1){
			this.each(function() {
				$(this).jAlert(options);
			});
			return this;
		}

		/* Combine user options with default */
		options = $.extend({}, $.fn.jAlert.defaults, options);

		/* If they didn't set an id, just create a random one */
		if( !options.id )
		{
			var unique = Date.now().toString() + Math.floor(Math.random() * 100000);
			var alert_id = 'ja_' + unique;
		}
		else
		{
			var alert_id = options.id;
		}

		$jAlertSelectedOpts[alert_id] = {};

		thisAlert = $jAlertSelectedOpts[alert_id];

		thisAlert.options = options;

		thisAlert.options.id = alert_id;

		thisAlert.instance = false;

		if( thisAlert.options.type == 'confirm' )
		{
			if( !thisAlert.options.content )
			{
				thisAlert.options.content = thisAlert.options.confirmQuestion;
			}

			thisAlert.options.btns = [
				{ 'text': thisAlert.options.confirmBtnText, 'theme': 'green', 'class': 'confirmBtn', 'closeAlert': true, 'onClick': thisAlert.options.onConfirm },
				{ 'text': thisAlert.options.denyBtnText, 'theme': 'red', 'class': 'denyBtn', 'closeAlert': true, 'onClick': thisAlert.options.onDeny }
			];

			thisAlert.options.autofocus = thisAlert.options.confirmAutofocus;
		}

		/* Add theme class */
		if( $.inArray(thisAlert.options.theme, themes) == -1 )
		{
			console.log('jAlert Config Error: Invalid theme selection.');
			return false;
		}

		classes.push('ja_'+thisAlert.options.theme);

		/* If they set custom classes */
		if( thisAlert.options['class'] )
		{
			classes.push(thisAlert.options['class']);
		}
		if( thisAlert.options.classes )
		{
			classes.push(thisAlert.options.classes);
		}

		/* If no title, add class */
		if( !thisAlert.options.title )
		{
			classes.push( 'ja_noTitle' );
		}

		/* if it's set and it's not in the array of sizes OR it's an object and it's missing width/height */
		if( thisAlert.options.size && ((typeof thisAlert.options.size == 'string' && $.inArray(thisAlert.options.size, sizes) == -1) || (typeof thisAlert.options.size == 'object' && (typeof thisAlert.options.size.width == 'undefined' || typeof thisAlert.options.size.height == 'undefined'))) )
		{
			console.log('jAlert Config Error: Invalid size selection (try a preset or make sure you\'re including height and width in your size object).');
			return false;
		}
		/* If it's not set, set to md */
		else if( !thisAlert.options.size )
		{
			classes.push('ja_sm');
		}
		/* If it's set and it's an object */
		else if( typeof thisAlert.options.size == 'object' )
		{
			styles.push('width: '+thisAlert.options.size.width+';');
			styles.push('height: '+thisAlert.options.size.height+';');
		}
		/* If it's set and it's not an object */
		else
		{
			classes.push('ja_'+thisAlert.options.size);
		}

		/* Add background color class */
		if( $.inArray(thisAlert.options.backgroundColor, backgroundColors) == -1 )
		{
			console.log('jAlert Config Error: Invalid background color selection.');
			return false;
		}


		backgroundClasses.push('ja_wrap_'+thisAlert.options.backgroundColor);

		/* If there are button(s), then you obviously don't want to hide the div when you alert anywhere or they'll be useless...SAME with autofocus */
		if( (typeof thisAlert.options.btns == 'object' || typeof thisAlert.options.btns == 'array') || thisAlert.options.autofocus ){
			thisAlert.options.closeOnClick = false;
		}

		thisAlert.options.onOpen = [ thisAlert.options.onOpen ];

		var onload = "onload='$.fn.jAlert.mediaLoaded($(this))'",
				loader = "<div class='ja_loader'>Loading...</div>";

		/* Creates content */
		if( thisAlert.options.image )
		{
			thisAlert.options.content = "<div class='ja_media_wrap'>"+
					loader+
					"<img src='"+thisAlert.options.image+"' class='ja_img' "+onload+"'";
			if( thisAlert.options.imageWidth )
			{
				thisAlert.options.content += " style='width: "+thisAlert.options.imageWidth+"'";
			}
			thisAlert.options.content += ">"+
					"</div>";
		}
		else if( thisAlert.options.video )
		{
			thisAlert.options.content = "<div class='ja_media_wrap'>"+
					loader+
					"<div class='ja_video'>"+
					"</div>"+
					"</div>";

			/* Add to the onOpen callbacks array to append the iframe and attach the onload callback in a crossbrowser compatible way (IE is a bizitch). */
			thisAlert.options.onOpen.unshift( function(alert){
				var iframe = document.createElement("iframe");
				iframe.src = thisAlert.options.video;

				if(iframe.addEventListener)
				{
					iframe.addEventListener('load', function(){
						$.fn.jAlert.mediaLoaded($(this));
					}, true)
				}
				else if (iframe.attachEvent){
					iframe.attachEvent("onload", function(){
						$.fn.jAlert.mediaLoaded($(this));
					});
				} else {
					iframe.onload = function(){
						$.fn.jAlert.mediaLoaded($(this));
					};
				}

				alert.find('.ja_video').append(iframe);
			});

		}
		else if( thisAlert.options.iframe )
		{
			if( !thisAlert.options.iframeHeight )
			{
				thisAlert.options.iframeHeight = $(window).height() * 0.9+'px';
			}

			thisAlert.options.content = "<div class='ja_media_wrap'>"+
					loader+
					"</div>";

			/* Add to the onOpen callbacks array to append the iframe and attach the onload callback in a crossbrowser compatible way (IE is a bizitch). */
			thisAlert.options.onOpen.unshift( function(alert){
				var iframe = document.createElement("iframe");
				iframe.src = thisAlert.options.iframe;
				iframe.height = thisAlert.options.iframeHeight;
				iframe.className = 'ja_iframe';

				if(iframe.addEventListener)
				{
					iframe.addEventListener('load', function(){
						$.fn.jAlert.mediaLoaded($(this));
					}, true)
				}
				else if (iframe.attachEvent){
					iframe.attachEvent("onload", function(){
						$.fn.jAlert.mediaLoaded($(this));
					});
				} else {
					iframe.onload = function(){
						$.fn.jAlert.mediaLoaded($(this));
					};
				}

				alert.find('.ja_media_wrap').append(iframe);
			});

		}
		else if( thisAlert.options.ajax )
		{

			thisAlert.options.content = "<div class='ja_media_wrap'>"+
					loader+
					"</div>";

			/* Store as another var */
			onAjaxCallbacks = thisAlert.options.onOpen;

			/* Overwrite the onOpen to be the ajax call */
			thisAlert.options.onOpen = [function(alert){
				$.ajax(thisAlert.options.ajax, {
					async: true,
					complete: function(jqXHR, textStatus)
					{
						alert.find('.ja_media_wrap').replaceWith(jqXHR.responseText);

						/* Run onOpen callbacks here */
						$.each(onAjaxCallbacks, function(index, onAjax){
							onAjax(alert);
						});
					},
					error: function(jqXHR, textStatus, errorThrown)
					{
						thisAlert.options.onAjaxFail(alert, 'Error getting content: Code: '+jqXHR.status+ ' : Msg: '+jqXHR.statusText);
					}
				});
			}];

		}

		this.centerAlert = function()
		{

			var viewportHeight = $(window).height(),
					alertHeight = thisAlert.instance.height(),
					diff = viewportHeight - alertHeight;

			var top = diff / 2;

			if( top > 200 )
			{
				top = top - 100;
			}

			if( top <= 0 )
			{
				top = 0;
			}

			thisAlert.instance.css('margin-top', top+'px');

			$('body').css('overflow', 'hidden');

			if( diff > 5 )
			{
				thisAlert.instance.parents('.ja_wrap').css('position', 'fixed');
			}
			else
			{
				thisAlert.instance.parents('.ja_wrap').css('position', 'absolute');

				/* Scroll to alert */
				$('html, body').animate({
					scrollTop: top - 50
				}, 200);

			}

		}

		var animateAlert = function(which, thisAlert){
			if( which == 'hide' )
			{
				thisAlert.removeClass($jAlertSelectedOpts[thisAlert.attr('id')].options.showAnimation).addClass($jAlertSelectedOpts[thisAlert.attr('id')].options.hideAnimation);
			}
			else
			{
				thisAlert.centerAlert();
				thisAlert.addClass($jAlertSelectedOpts[thisAlert.attr('id')].options.showAnimation).removeClass($jAlertSelectedOpts[thisAlert.attr('id')].options.hideAnimation).show();
			}
		}

		var getBtnHTML = function(btn){

			if(typeof btn.href == 'undefined'){ btn.href = ''; }
			if(typeof btn['class'] == 'undefined'){ btn['class'] = ''; }
			if(typeof btn.theme == 'undefined'){ btn['class'] += ' ja_btn_default'; }else{ btn['class'] += ' ja_btn_'+btn.theme; }
			if(typeof btn.text == 'undefined'){ btn.text = ''; }
			if(typeof btn.id == 'undefined'){ var unique = Date.now().toString() + Math.floor(Math.random() * 100000); btn.id = 'ja_btn_' + unique; }
			if(typeof btn.target == 'undefined'){ btn.target = '_self'; }
			if(typeof btn.closeAlert == 'undefined'){ btn.closeAlert = true; }

			/* Attach on click handler */
			$('body').on('click', '#'+btn.id, function(e){

				var button = $(this);

				if( btn.closeAlert )
				{
					button.parents('.jAlert').closeAlert();
				}

				var callbackResponse = true;

				if( typeof btn.onClick == 'function' )
				{
					callbackResponse = btn.onClick(e, button);
				}

				if( !callbackResponse || btn.closeAlert )
				{
					e.preventDefault();
					return false;
				}

				return callbackResponse;

			});

			return "<a href='"+btn.href+"' id='"+btn.id+"' target='"+btn.target+"' class='ja_btn "+btn['class']+"'>"+btn.text+"</a> ";
		}

		/* Hides an alert and optionally removes it */
		this.closeAlert = function(remove, onClose){

			var alertInstance = $(this);

			if( remove != false )
			{
				remove = true;
			}

			if(alertInstance.length)
			{
				alertInstance.unbind('DOMSubtreeModified');

				animateAlert('hide', alertInstance);

				window.setTimeout(function()
				{

					var alertWrap = alertInstance.parents('.ja_wrap');

					if( remove )
					{
						alertWrap.remove();
					}
					else
					{
						alertWrap.hide();
					}

					if(typeof onClose == 'function')
					{
						onClose(alertInstance);
					}
					else if(typeof $jAlertSelectedOpts[alertInstance.attr('id')].options.onClose == 'function')
					{
						$jAlertSelectedOpts[alertInstance.attr('id')].options.onClose(alertInstance);
					}

					if( $('.jAlert').length > 0 )
					{
						$('.jAlert:last').centerAlert();
					}
					else
					{
						$('body').css('overflow', 'auto');
					}

				}, $jAlertSelectedOpts[alertInstance.attr('id')].options.animationTimeout);

			}

			return this;
		}

		/* Shows an alert that already exists */
		this.showAlert = function(replaceOthers, removeOthers, onOpen, onClose){

			var alertInstance = $(this);

			if( replaceOthers != false )
			{
				replaceOthers = true;
			}

			if( removeOthers !== false )
			{
				removeOthers = true;
			}

			if( replaceOthers )
			{
				$('.jAlert:visible').closeAlert(removeOthers);
			}

			/* Put this one above the last one by moving to end of dom */
			var wrap = alertInstance.parents('.ja_wrap');

			$('body').append(wrap);

			animateAlert('show', alertInstance);

			if( typeof onClose == 'function' )
			{
				$jAlertSelectedOpts[alertInstance.attr('id')].options.onClose = onClose;
			}

			window.setTimeout(function(){

				if(typeof onOpen == 'function')
				{
					onOpen(alertInstance);
				}

			}, $jAlertSelectedOpts[alertInstance.attr('id')].options.animationTimeout);

		}

		/* Adds a new alert to the dom */
		var addAlert = function(content){

			var html = '';

			html += '<div class="ja_wrap '+backgroundClasses.join(' ')+'">'+
					'<div class="jAlert '+classes.join(' ')+ '" style="' +styles.join(' ')+ '" id="' +thisAlert.options.id+ '">'+
					'<div>';

			if( thisAlert.options.closeBtn )
			{
				html += 		"<div class='closejAlert ja_close";
				if( thisAlert.options.closeBtnAlt )
				{
					html += ' ja_close_alt';
				}
				html += "'>X</div>"; //closejAlert has a close handler attached, ja_close is for styling
			}

			if( thisAlert.options.title )
			{
				html += 		"<div class='ja_title'><div>"+thisAlert.options.title+"</div></div>";
			}

			html += 			'<div class="ja_body">'+content;


			if( thisAlert.options.btns )
			{
				html += 			'<div class="ja_btn_wrap ';

				if( thisAlert.options.btnBackground )
				{
					html += 		'optBack';
				}

				html += 			'">';
			}

			if( typeof thisAlert.options.btns[0] == 'object' )
			{
				$.each(thisAlert.options.btns, function(index, btn){
					if( typeof btn == 'object' )
					{
						html += 		getBtnHTML(btn);
					}
				});
			}
			else if( typeof thisAlert.options.btns == 'object' )
			{
				html += 				getBtnHTML(thisAlert.options.btns);
			}
			else if( thisAlert.options.btns )
			{
				console.log('jAlert Config Error: Incorrect value for btns (must be object or array of objects): '+thisAlert.options.btns);
			}

			if( thisAlert.options.btns )
			{
				html += 			'</div>';
			}

			html += 			'</div>'+
					'</div>'+
					'</div>'+
					'</div>';

			var alertHTML = $(html);

			if( thisAlert.options.replaceOtherAlerts )
			{
				$('.jAlert:visible').closeAlert();
			}

			$('body').append(alertHTML);

			thisAlert.instance = $('#'+thisAlert.options.id);

			animateAlert('show', thisAlert.instance);

			if( thisAlert.options.closeBtn ){

				thisAlert.instance.on('click', '.closejAlert', function(e){
					e.preventDefault();
					$(this).parents('.jAlert').closeAlert();
					return false;
				});

			}

			/* Bind mouseup handler to document if this alert has closeOnClick enabled */
			if( thisAlert.options.closeOnClick ){

				/* Unbind if already exists */
				$(document).off('mouseup', $.fn.jAlert.onMouseUp);

				/* Bind mouseup */
				$(document).on('mouseup', $.fn.jAlert.onMouseUp);

			}

			/* Bind on keydown handler to document and if esc was pressed, find all visible jAlerts with that close option enabled and close them */
			if( thisAlert.options.closeOnEsc ){

				/* Unbind if already exists */
				$(document).off('keydown', $.fn.jAlert.onEscKeyDown);

				/* Bind keydown */
				$(document).on('keydown', $.fn.jAlert.onEscKeyDown);

			}

			/* If there are onOpen callbacks, run them. */
			if( thisAlert.options.onOpen )
			{
				$.each(thisAlert.options.onOpen, function(index, onOpen){
					onOpen(thisAlert.instance);
				});
			}

			/* If the alert has an element that should be focused by default */
			if( thisAlert.options.autofocus )
			{
				thisAlert.instance.find(thisAlert.options.autofocus).focus();
			}
			else
			{
				thisAlert.instance.focus();
			}

			thisAlert.instance.bind("DOMSubtreeModified", function(){
				thisAlert.instance.centerAlert();
			});

			return thisAlert.instance;

		};

		/* Shows an alert based on content type */
		this.initialize = function(){

			if( !thisAlert.options.content && !thisAlert.options.image && !thisAlert.options.video && !thisAlert.options.iframe && !thisAlert.options.ajax )
			{
				console.log('jAlert potential error: No content defined');
				return addAlert('');
			}
			else
			{
				if( !thisAlert.options.content )
				{
					thisAlert.options.content = '';
				}
				return addAlert(thisAlert.options.content);
			}

		}

		this.initialize();

		return this;

		/* END OF PLUGIN */
	};

	/* Default thisAlert.options */
	$.fn.jAlert.defaults = {
		'title': false, //title for the popup (false = don't show)
		'content': false, //html for the popup (replaced if you use image, ajax, or iframe)
		'image': false, //adds a centered img tag
		'imageWidth': 'auto', //defaults to max-width: 100%; width: auto;
		'video': false, //adds a responsive iframe video - value is the "src" of the iframe
		'ajax': false, //uses ajax call to get contents
		'onAjaxFail': function(alert, errorThrown){ //callback for when ajax fails
			thisAlert.closeAlert();
			errorAlert(errorThrown);
		},
		'iframe': false, //uses iframe as content
		'iframeHeight': false, //string. height of the iframe within the popup (false = 90% of viewport height)
		'class': '', //adds a class to the jAlert (add as many as you want space delimited)
		'classes': '', //add classes to the jAlert (space delimited)
		'id': false, //adds an ID to the jAlert
		'showAnimation': 'fadeInUp',
		'hideAnimation': 'fadeOutDown',
		'animationTimeout': 600, //approx duration of animation to wait until onClose
		'theme': 'default', // red, green, blue, black, default
		'backgroundColor': 'black', //white, black
		'size': false, //false = css default, xsm, sm, md, lg, xlg, full, { height: 200, width: 200 }
		'replaceOtherAlerts': false, //if there's already an open jAlert, remove it first
		'closeOnClick': false, //close the alert when you click anywhere
		'closeOnEsc': true, //close the alert when you click the escape key
		'closeBtn': true, //adds a button to the top right of the alert that allows you to close it
		'closeBtnAlt': false, //alternative close button
		'btns': false, //adds buttons to the popup at the bottom. Pass an object for a single button, or an object of objects for many
		/*
		 Variety of buttons you could create (also, an example of how to pass the object

		 'btns': [
		 {'text':'Open in new window', 'closeAlert':false, 'href': 'http://google.com', 'target':'_new'},
		 {'text':'Cool, close this alert', 'theme': 'blue', 'closeAlert':true},
		 {'text':'Buy Now', 'closeAlert':true, 'theme': 'green', 'onClick': function(){ console.log('You bought it!'); } },
		 {'text':'I do not want it', 'closeAlert': true, 'theme': 'red', 'onClick': function(){ console.log('Did not want it'); } },
		 {'text':'DOA', 'closeAlert': true, 'theme': 'black', 'onClick': function(){ console.log('Dead on arrival'); } }
		 ]
		 */
		'btnBackground': true, //adds optional background to btns
		'autofocus': false, //pass a selector to autofocus on it

		'onOpen': function(alert){ //on open call back. Fires just after the alert has finished rendering
			return false;
		},
		'onClose': function(alert){ //fires when you close the alert
			return false;
		},

		'type': 'modal', //modal, confirm, tooltip

		/* The following only applies when type == 'confirm' */
		'confirmQuestion': 'Are you sure?',
		'confirmBtnText': 'Yes',
		'denyBtnText': 'No',
		'confirmAutofocus': '.confirmBtn', //confirmBtn or denyBtn
		'onConfirm': function(e, btn){
			e.preventDefault();
			console.log('confirmed');
			return false;
		},
		'onDeny': function(e, btn){
			e.preventDefault();
			//console.log('denied');
			return false;
		}
	}

	/* Mouseup on document */
	$.fn.jAlert.onMouseUp = function(e){

		/* Find top visible jAlert and see if it has closeOnClick enabled */
		var lastVisibleAlert = $('.jAlert:visible:last');

		if( $jAlertSelectedOpts[lastVisibleAlert.attr('id')].options.closeOnClick )
		{
			lastVisibleAlert.closeAlert();
		}

	};

	/* Keydown on document (escape key) */
	$.fn.jAlert.onEscKeyDown = function(e){

		/* Escape = 27 */
		if(e.keyCode === 27){

			/* Find top visible jAlert and see if it has closeOnClick enabled */
			var lastVisibleAlert = $('.jAlert:visible:last');

			if( $jAlertSelectedOpts[lastVisibleAlert.attr('id')].options.closeOnEsc )
			{
				lastVisibleAlert.closeAlert();
			}

		}

	};

	/* If you're not using the DOM (aka, you're not hiding or showing a specific alert, you can just use $.jAlert */
	$.jAlert = function(options){
		return $.fn.jAlert(options);
	}

	/* Alert on click function - attach to existing dom */
	$.fn.alertOnClick = function(options)
	{
		$(this).on('click', function(e){
			e.preventDefault();
			$.jAlert(options);
			return false;
		});
	}

	/* Alert on click function - global, works for changing dom */
	$.alertOnClick = function(selector, options)
	{
		$('body').on('click', selector, function(e){
			e.preventDefault();
			$.jAlert(options);
			return false;
		});
	}

	/* Slowed window resize function */
	var $jAlertResizeTimeout;
	$(window).resize(function () {
		window.clearTimeout($jAlertResizeTimeout);
		$jAlertResizeTimeout = window.setTimeout(function(){
			$('.jAlert:visible').each(function(){
				$(this).centerAlert();
			});
		}, 200);
	});

	/* Onload callback for iframe, img, etc */
	$.fn.jAlert.mediaLoaded = function(elem){
		var wrap = elem.parents('.ja_media_wrap'),
				vid_wrap = wrap.find('.ja_video');

		wrap.find('.ja_loader').remove();

		if( vid_wrap.length > 0 )
		{
			vid_wrap.fadeIn('fast');
		}
		else
		{
			elem.fadeIn('fast');
		}

		elem.parents('.jAlert').centerAlert();

	}

	/* END OF ON JQUERY LOAD */
})(jQuery);
/* Optional: Overwrites javascript's built-in alert function */
function alert(title, msg){
	if( typeof msg == 'undefined' )
	{
		msg = title;
		title = '';
	}
	$.jAlert({
		'title': title,
		'content': msg
	});
}

/* Optional: Overwrites javascript's built-in confirm function (DANGER: operates differently - returns true every time and doesn't stop execution!) - You must provide a callback */
function confirm(confirmCallback, denyCallback)
{
	$.jAlert({'type': 'confirm', 'onConfirm': confirmCallback, 'onDeny': denyCallback });
}

/* Optional Alert shortcuts based on color */
function showAlert(title, msg, theme)
{
	$.jAlert({
		'title': title,
		'content': msg,
		'theme': theme
	});		
}

function successAlert(title, msg)
{
	if( typeof msg == 'undefined' )
	{
		msg = title;
		title = 'Success';
	}

	showAlert(title, msg, 'green');
}

function errorAlert(title, msg)
{
	if( typeof msg == 'undefined' )
	{
		msg = title;
		title = 'Error';
	}

	showAlert(title, msg, 'red');
}

function infoAlert(title, msg)
{
	if( typeof msg == 'undefined' )
	{
		msg = title;
		title = 'Info';
	}

	showAlert(title, msg, 'blue');
}

function warningAlert(title, msg)
{
	if( typeof msg == 'undefined' )
	{
		msg = title;
		title = 'Warning';
	}

	showAlert(title, msg, 'yellow');
}

function blackAlert(title, msg)
{
	if( typeof msg == 'undefined' )
	{
		msg = title;
		title = 'Warning';
	}

	showAlert(title, msg, 'black');
}

function imageAlert(img, imgWidth)
{
	if( typeof imgWidth == 'auto' )
	{
		iframeHeight = false;
	}

	$.jAlert({
		'image': img,
		'imageWidth': imgWidth
	});
}

function videoAlert(video)
{
	$.jAlert({
		'video': video
	});
}

function iframeAlert(iframe, iframeHeight)
{
	if( typeof iframeHeight == 'undefined' )
	{
		iframeHeight = false;
	}

	$.jAlert({
		'iframe': iframe,
		'iframeHeight': iframeHeight
	});
}

function ajaxAlert(url, onOpen)
{
	if( typeof onOpen == 'undefined' )
	{
		onOpen = function(alert){ //on open call back. Fires just after the alert has finished rendering
				return false;
			};
	}

	$.jAlert({
		'ajax': url,
		'onOpen': onOpen
	});
}
/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.6.2
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011-2016 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/

(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        title: group.title ? group.title : void 0,
        children: 0,
        disabled: group.disabled,
        classes: group.className
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            title: option.title ? option.title : void 0,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            group_label: group_position != null ? this.parsed[group_position].label : null,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
      this.on_ready();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.include_group_label_in_selected = this.options.include_group_label_in_selected || false;
      this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY;
      return this.case_sensitive_search = this.options.case_sensitive_search || false;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.choice_label = function(item) {
      if (this.include_group_label_in_selected && (item.group_label != null)) {
        return "<b class='group-name'>" + item.group_label + "</b>" + item.html;
      } else {
        return item.html;
      }
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, data_content, shown_results, _i, _len, _ref;
      content = '';
      shown_results = 0;
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        data_content = '';
        if (data.group) {
          data_content = this.result_add_group(data);
        } else {
          data_content = this.result_add_option(data);
        }
        if (data_content !== '') {
          shown_results++;
          content += data_content;
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(this.choice_label(data));
          }
        }
        if (shown_results >= this.max_shown_results) {
          break;
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      if (option.title) {
        option_el.title = option.title;
      }
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var classes, group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      classes = [];
      classes.push("group-result");
      if (group.classes) {
        classes.push(group.classes);
      }
      group_el = document.createElement("li");
      group_el.className = classes.join(" ");
      group_el.innerHTML = group.search_text;
      if (group.title) {
        group_el.title = group.title;
      }
      return this.outerHTML(group_el);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;
      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      zregex = new RegExp(escapedSearchText, 'i');
      regex = this.get_search_regex(escapedSearchText);
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          option.search_text = option.group ? option.label : option.html;
          if (!(option.group && !this.group_search)) {
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.get_search_regex = function(escaped_search_string) {
      var regex_anchor, regex_flag;
      regex_anchor = this.search_contains ? "" : "^";
      regex_flag = this.case_sensitive_search ? "" : "i";
      return new RegExp(regex_anchor + escaped_search_string, regex_flag);
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
        case 18:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if ("Microsoft Internet Explorer" === window.navigator.appName) {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent)) {
        return false;
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy') {
          if (chosen instanceof Chosen) {
            chosen.destroy();
          }
          return;
        }
        if (!(chosen instanceof Chosen)) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      return this.set_label_behavior();
    };

    Chosen.prototype.on_ready = function() {
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.bind('touchstart.chosen', function(evt) {
        _this.container_mousedown(evt);
        return evt.preventDefault();
      });
      this.container.bind('touchend.chosen', function(evt) {
        _this.container_mouseup(evt);
        return evt.preventDefault();
      });
      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.search_results.bind('touchstart.chosen', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove.chosen', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend.chosen', function(evt) {
        _this.search_results_touchend(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.form_field_jq.bind("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      this.search_field.bind('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(this.container[0].ownerDocument).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt.originalEvent) {
        delta = evt.originalEvent.deltaY || -evt.originalEvent.wheelDelta || evt.originalEvent.detail;
      }
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.active_field = true;
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = $(evt.target).closest('.chosen-container');
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.addClass("chosen-with-drop");
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;
      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + (this.choice_label(item)) + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          this.reset_single_select_options();
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(this.choice_label(item));
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.show_search_field_default();
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        evt.preventDefault();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").html(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      return $('<div/>').text($.trim(this.search_field.val())).html();
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          if (this.results_showing) {
            evt.preventDefault();
          }
          break;
        case 32:
          if (this.disable_search) {
            evt.preventDefault();
          }
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);

//# sourceMappingURL=all.js.map
