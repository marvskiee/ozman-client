import{c as we}from"./ably.25e26b0b.js";import{r as _e}from"./react.83df5ab8.js";import{r as Pe}from"./react-dom.50fcfdcb.js";var Se={exports:{}};(function(de,xe){(function(te,$){de.exports=$(_e.exports,Pe.exports)})(typeof self<"u"?self:we,function(te,$){return function(){var pe={655:function(d,m,p){p.r(m),p.d(m,{__extends:function(){return K},__assign:function(){return V},__rest:function(){return F},__decorate:function(){return Q},__param:function(){return X},__metadata:function(){return R},__awaiter:function(){return D},__generator:function(){return i},__createBinding:function(){return u},__exportStar:function(){return f},__values:function(){return b},__read:function(){return w},__spread:function(){return P},__spreadArrays:function(){return E},__spreadArray:function(){return S},__await:function(){return x},__asyncGenerator:function(){return h},__asyncDelegator:function(){return j},__asyncValues:function(){return I},__makeTemplateObject:function(){return L},__importStar:function(){return z},__importDefault:function(){return J},__classPrivateFieldGet:function(){return _},__classPrivateFieldSet:function(){return O},__classPrivateFieldIn:function(){return W}});var B=function(e,t){return B=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,n){o.__proto__=n}||function(o,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(o[r]=n[r])},B(e,t)};function K(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}B(e,t),e.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var V=function(){return V=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},V.apply(this,arguments)};function F(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]])}return o}function Q(e,t,o,n){var r,s=arguments.length,l=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(s<3?r(l):s>3?r(t,o,l):r(t,o))||l);return s>3&&l&&Object.defineProperty(t,o,l),l}function X(e,t){return function(o,n){t(o,n,e)}}function R(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function D(e,t,o,n){return new(o||(o=Promise))(function(r,s){function l(v){try{C(n.next(v))}catch(c){s(c)}}function a(v){try{C(n.throw(v))}catch(c){s(c)}}function C(v){var c;v.done?r(v.value):(c=v.value,c instanceof o?c:new o(function(y){y(c)})).then(l,a)}C((n=n.apply(e,t||[])).next())})}function i(e,t){var o,n,r,s,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(C){return function(v){return function(c){if(o)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(l=0)),l;)try{if(o=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return l.label++,{value:c[1],done:!1};case 5:l.label++,n=c[1],c=[0];continue;case 7:c=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||c[0]!==6&&c[0]!==2)){l=0;continue}if(c[0]===3&&(!r||c[1]>r[0]&&c[1]<r[3])){l.label=c[1];break}if(c[0]===6&&l.label<r[1]){l.label=r[1],r=c;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(c);break}r[2]&&l.ops.pop(),l.trys.pop();continue}c=t.call(e,l)}catch(y){c=[6,y],n=0}finally{o=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([C,v])}}}var u=Object.create?function(e,t,o,n){n===void 0&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){n===void 0&&(n=o),e[n]=t[o]};function f(e,t){for(var o in e)o==="default"||Object.prototype.hasOwnProperty.call(t,o)||u(t,e,o)}function b(e){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&e[t],n=0;if(o)return o.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function w(e,t){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var n,r,s=o.call(e),l=[];try{for(;(t===void 0||t-- >0)&&!(n=s.next()).done;)l.push(n.value)}catch(a){r={error:a}}finally{try{n&&!n.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}return l}function P(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(w(arguments[t]));return e}function E(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<o;t++)for(var s=arguments[t],l=0,a=s.length;l<a;l++,r++)n[r]=s[l];return n}function S(e,t,o){if(o||arguments.length===2)for(var n,r=0,s=t.length;r<s;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))}function x(e){return this instanceof x?(this.v=e,this):new x(e)}function h(e,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,r=o.apply(e,t||[]),s=[];return n={},l("next"),l("throw"),l("return"),n[Symbol.asyncIterator]=function(){return this},n;function l(y){r[y]&&(n[y]=function(g){return new Promise(function(k,N){s.push([y,g,k,N])>1||a(y,g)})})}function a(y,g){try{(k=r[y](g)).value instanceof x?Promise.resolve(k.value.v).then(C,v):c(s[0][2],k)}catch(N){c(s[0][3],N)}var k}function C(y){a("next",y)}function v(y){a("throw",y)}function c(y,g){y(g),s.shift(),s.length&&a(s[0][0],s[0][1])}}function j(e){var t,o;return t={},n("next"),n("throw",function(r){throw r}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(r,s){t[r]=e[r]?function(l){return(o=!o)?{value:x(e[r](l)),done:r==="return"}:s?s(l):l}:s}}function I(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,o=e[Symbol.asyncIterator];return o?o.call(e):(e=b(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(s){return new Promise(function(l,a){(function(C,v,c,y){Promise.resolve(y).then(function(g){C({value:g,done:c})},v)})(l,a,(s=e[r](s)).done,s.value)})}}}function L(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var G=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function z(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var o in e)o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)&&u(t,e,o);return G(t,e),t}function J(e){return e&&e.__esModule?e:{default:e}}function _(e,t,o,n){if(o==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?n:o==="a"?n.call(e):n?n.value:t.get(e)}function O(e,t,o,n,r){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?r.call(e,o):r?r.value=o:t.set(e,o),o}function W(e,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?t===e:e.has(t)}},156:function(d){d.exports=te},111:function(d){d.exports=$}},ne={};function M(d){var m=ne[d];if(m!==void 0)return m.exports;var p=ne[d]={exports:{}};return pe[d](p,p.exports,M),p.exports}M.d=function(d,m){for(var p in m)M.o(m,p)&&!M.o(d,p)&&Object.defineProperty(d,p,{enumerable:!0,get:m[p]})},M.o=function(d,m){return Object.prototype.hasOwnProperty.call(d,m)},M.r=function(d){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(d,"__esModule",{value:!0})};var re={};return function(){var d=re;Object.defineProperty(d,"__esModule",{value:!0}),d.useReactToPrint=d.PrintContextConsumer=void 0;var m=M(655),p=M(156),B=M(111),K=Object.prototype.hasOwnProperty.call(p,"createContext"),V=Object.prototype.hasOwnProperty.call(p,"useMemo")&&Object.prototype.hasOwnProperty.call(p,"useCallback"),F=K?p.createContext({}):null;d.PrintContextConsumer=F?F.Consumer:function(){return null};var Q={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},X=function(R){function D(){var i=R!==null&&R.apply(this,arguments)||this;return i.startPrint=function(u){var f=i.props,b=f.onAfterPrint,w=f.onPrintError,P=f.print,E=f.documentTitle;setTimeout(function(){var S,x;if(u.contentWindow){if(u.contentWindow.focus(),P)P(u).then(i.handleRemoveIframe).catch(function(I){w?w("print",I):i.logMessages(["An error was thrown by the specified `print` function"])});else if(u.contentWindow.print){var h=(x=(S=u.contentDocument)===null||S===void 0?void 0:S.title)!==null&&x!==void 0?x:"",j=u.ownerDocument.title;E&&(u.ownerDocument.title=E,u.contentDocument&&(u.contentDocument.title=E)),u.contentWindow.print(),E&&(u.ownerDocument.title=j,u.contentDocument&&(u.contentDocument.title=h))}else i.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);b&&b(),i.handleRemoveIframe()}else i.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])},500)},i.triggerPrint=function(u){var f=i.props,b=f.onBeforePrint,w=f.onPrintError;if(b){var P=b();P&&typeof P.then=="function"?P.then(function(){i.startPrint(u)}).catch(function(E){w&&w("onBeforePrint",E)}):i.startPrint(u)}else i.startPrint(u)},i.handleClick=function(){var u=i.props,f=u.onBeforeGetContent,b=u.onPrintError;if(f){var w=f();w&&typeof w.then=="function"?w.then(i.handlePrint).catch(function(P){b&&b("onBeforeGetContent",P)}):i.handlePrint()}else i.handlePrint()},i.handlePrint=function(){var u=i.props,f=u.bodyClass,b=u.content,w=u.copyStyles,P=u.fonts,E=u.pageStyle,S=u.nonce,x=b();if(x!==void 0)if(x!==null){var h=document.createElement("iframe");h.width="".concat(document.documentElement.clientWidth,"px"),h.height="".concat(document.documentElement.clientHeight,"px"),h.style.position="absolute",h.style.top="-".concat(document.documentElement.clientHeight+100,"px"),h.style.left="-".concat(document.documentElement.clientWidth+100,"px"),h.id="printWindow",h.srcdoc="<!DOCTYPE html>";var j=(0,B.findDOMNode)(x);if(j){var I=j.cloneNode(!0),L=I instanceof Text,G=document.querySelectorAll("link[rel='stylesheet']"),z=L?[]:I.querySelectorAll("img"),J=L?[]:I.querySelectorAll("video");i.linkTotal=G.length+z.length+J.length,i.linksLoaded=[],i.linksErrored=[],i.fontsLoaded=[],i.fontsErrored=[];var _=function(O,W){W?i.linksLoaded.push(O):(i.logMessages(['"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',O]),i.linksErrored.push(O)),i.linksLoaded.length+i.linksErrored.length+i.fontsLoaded.length+i.fontsErrored.length===i.linkTotal&&i.triggerPrint(h)};h.onload=function(){var O,W,e,t;h.onload=null;var o=h.contentDocument||((W=h.contentWindow)===null||W===void 0?void 0:W.document);if(o){o.body.appendChild(I),P&&(((e=h.contentDocument)===null||e===void 0?void 0:e.fonts)&&((t=h.contentWindow)===null||t===void 0?void 0:t.FontFace)?P.forEach(function(H){var Z=new FontFace(H.family,H.source);h.contentDocument.fonts.add(Z),Z.loaded.then(function(ee){i.fontsLoaded.push(ee)}).catch(function(ee){i.fontsErrored.push(Z),i.logMessages(['"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',Z,"The error from loading the font is:",ee])})}):i.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API']));var n=typeof E=="function"?E():E;if(typeof n!="string")i.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof n,'". Styles from `pageStyle` will not be applied.')]);else{var r=o.createElement("style");S&&(r.setAttribute("nonce",S),o.head.setAttribute("nonce",S)),r.appendChild(o.createTextNode(n)),o.head.appendChild(r)}if(f&&(O=o.body.classList).add.apply(O,(0,m.__spreadArray)([],(0,m.__read)(f.split(" ")),!1)),!L){for(var s=L?[]:j.querySelectorAll("canvas"),l=o.querySelectorAll("canvas"),a=0;a<s.length;++a){var C=s[a],v=l[a].getContext("2d");v&&v.drawImage(C,0,0)}for(a=0;a<z.length;a++){var c=z[a],y=c.getAttribute("src");y?((k=new Image).onload=_.bind(null,c,!0),k.onerror=_.bind(null,c,!1),k.src=y):(i.logMessages(['"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',c],"warning"),_(c,!1))}for(a=0;a<J.length;a++){var g=J[a];g.preload="auto";var k,N=g.getAttribute("poster");N?((k=new Image).onload=_.bind(null,g,!0),k.onerror=_.bind(null,g,!1),k.src=N):g.readyState>=2?_(g,!0):(g.onloadeddata=_.bind(null,g,!0),g.onerror=_.bind(null,g,!1),g.onstalled=_.bind(null,g,!1))}var oe="input",ie=j.querySelectorAll(oe),he=o.querySelectorAll(oe);for(a=0;a<ie.length;a++)he[a].value=ie[a].value;var ae="input[type=checkbox],input[type=radio]",le=j.querySelectorAll(ae),ye=o.querySelectorAll(ae);for(a=0;a<le.length;a++)ye[a].checked=le[a].checked;var ce="select",se=j.querySelectorAll(ce),ge=o.querySelectorAll(ce);for(a=0;a<se.length;a++)ge[a].value=se[a].value}if(w)for(var ue=document.querySelectorAll("style, link[rel='stylesheet']"),be=(a=0,ue.length);a<be;++a){var T=ue[a];if(T.tagName.toLowerCase()==="style"){var A=o.createElement(T.tagName),Y=T.sheet;if(Y){var fe="";try{for(var me=Y.cssRules.length,q=0;q<me;++q)typeof Y.cssRules[q].cssText=="string"&&(fe+="".concat(Y.cssRules[q].cssText,`\r
`))}catch{i.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",T],"warning")}A.setAttribute("id","react-to-print-".concat(a)),S&&A.setAttribute("nonce",S),A.appendChild(o.createTextNode(fe)),o.head.appendChild(A)}}else if(T.getAttribute("href"))if(T.hasAttribute("disabled"))i.logMessages(["`react-to-print` encountered a <link> tag with a `disabled` attribute and will ignore it. Note that the `disabled` attribute is deprecated, and some browsers ignore it. You should stop using it. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-disabled. The <link> is:",T],"warning"),_(T,!0);else{A=o.createElement(T.tagName),q=0;for(var ve=T.attributes.length;q<ve;++q){var U=T.attributes[q];U&&A.setAttribute(U.nodeName,U.nodeValue||"")}A.onload=_.bind(null,A,!0),A.onerror=_.bind(null,A,!1),S&&A.setAttribute("nonce",S),o.head.appendChild(A)}else i.logMessages(["`react-to-print` encountered a <link> tag with an empty `href` attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:",T],"warning"),_(T,!0)}}i.linkTotal!==0&&w||i.triggerPrint(h)},i.handleRemoveIframe(!0),document.body.appendChild(h)}else i.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else i.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else i.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},i.handleRemoveIframe=function(u){var f=i.props.removeAfterPrint;if(u||f){var b=document.getElementById("printWindow");b&&document.body.removeChild(b)}},i.logMessages=function(u,f){f===void 0&&(f="error"),i.props.suppressErrors||(f==="error"?console.error(u):f==="warning"?console.warn(u):f==="debug"&&console.debug(u))},i}return(0,m.__extends)(D,R),D.prototype.render=function(){var i=this.props,u=i.children,f=i.trigger;if(f)return p.cloneElement(f(),{onClick:this.handleClick});if(!F)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var b={handlePrint:this.handleClick};return p.createElement(F.Provider,{value:b},u)},D.defaultProps=Q,D}(p.Component);d.default=X,d.useReactToPrint=function(R){if(!V)return R.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var D=p.useMemo(function(){return new X((0,m.__assign)((0,m.__assign)({},Q),R))},[R]);return p.useCallback(function(){return D.handleClick()},[D])}}(),re}()})})(Se);export{Se as l};