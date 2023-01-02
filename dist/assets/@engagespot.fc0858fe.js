import{j as he,r as o,R as ee}from"./react.83df5ab8.js";import{M as te}from"./react-dom.50fcfdcb.js";import{$ as ct}from"./lodash.mapkeys.55d51651.js";import{a as ut}from"./ably.25e26b0b.js";import{u as Be}from"./react-popper.cce17593.js";import"./intersection-observer.aa907d4a.js";import{W as dt,h as pt}from"./react-use.a0aa006a.js";import{f as ze,a as ft,b as ht,s as mt}from"./date-fns.39993358.js";import{C as h,a as b,F as gt}from"./styled-components.ca8443dc.js";import{J as bt}from"./lodash.merge.9e9707aa.js";import{_ as vt,a as xt}from"./@babel.3f4e4f01.js";const qr=he.exports.Fragment,yt=he.exports.jsx,Yr=he.exports.jsxs;function ue(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function Et(e){if(Array.isArray(e))return ue(e)}function ke(e,n,t,i,r,a,s){try{var l=e[a](s),c=l.value}catch(u){t(u);return}l.done?n(c):Promise.resolve(c).then(i,r)}function S(e){return function(){var n=this,t=arguments;return new Promise(function(i,r){var a=e.apply(n,t);function s(c){ke(a,i,r,s,l,"next",c)}function l(c){ke(a,i,r,s,l,"throw",c)}s(void 0)})}}function ae(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Ce(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function se(e,n,t){return n&&Ce(e.prototype,n),t&&Ce(e,t),e}function St(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function wt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function A(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){St(e,r,t[r])})}return e}function kt(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,i)}return t}function de(e,n){return n=n!=null?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function Ct(e){return Et(e)||wt(e)||It(e)||Pt()}var me=function(e){return e&&typeof Symbol<"u"&&e.constructor===Symbol?"symbol":typeof e};function It(e,n){if(!!e){if(typeof e=="string")return ue(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ue(e,n)}}var w=globalThis&&globalThis.__generator||function(e,n){var t,i,r,a,s={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(m){return c([u,m])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;s;)try{if(t=1,i&&(r=u[0]&2?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return s.label++,{value:u[1],done:!1};case 5:s.label++,i=u[1],u=[0];continue;case 7:u=s.ops.pop(),s.trys.pop();continue;default:if(r=s.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){s=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){s.label=u[1];break}if(u[0]===6&&s.label<r[1]){s.label=r[1],r=u;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(u);break}r[2]&&s.ops.pop(),s.trys.pop();continue}u=n.call(e,s)}catch(m){u=[6,m],i=0}finally{t=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}},$t=Object.defineProperty,Rt=function(e,n,t){return n in e?$t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},g=function(e,n,t){return Rt(e,(typeof n>"u"?"undefined":me(n))!="symbol"?n+"":n,t),t},Tt={apiHost:"https://api.engagespot.co/v3",wssHost:"wss://rtm.engagespot.co",wssPort:80},Nt=Tt,At=function(){if((typeof window>"u"?"undefined":me(window))>"u")return"other";var e=navigator.userAgent,n=e.indexOf("Chrome")>-1,t=e.indexOf("MSIE")>-1||e.indexOf("rv:")>-1,i=e.indexOf("Firefox")>-1,r=e.indexOf("Safari")>-1;n&&r&&(r=!1);var a=e.indexOf("OP")>-1;if(n&&a&&(n=!1),n)return"chrome";if(t)return"ie";if(i)return"firefox";if(r)return"safari";if(a)return"opera"},Ot=function(e){if(!e)throw"urlBase64ToUInt8Array function expects atleast one parameter.";var n="=".repeat((4-e.length%4)%4),t=(e+n).replace(/-/g,"+").replace(/_/g,"/"),i=window.atob(t);return Uint8Array.from(Ct(i).map(function(r){return r.charCodeAt(0)}))},Ie={findBrowser:At,urlBase64ToUInt8Array:Ot};function F(e){var n={method:e.method,cache:"no-cache",headers:A({"Content-Type":"application/json"},e.headers)};return e.body!==null&&(n.body=JSON.stringify(e.body)),fetch(e.url,n).then(function(){var t=S(function(i){var r;return w(this,function(a){switch(a.label){case 0:return r=i.ok,r?[3,2]:[4,Dt(i)];case 1:r=a.sent(),a.label=2;case 2:a.label=3;case 3:return a.trys.push([3,5,,6]),[4,i.json()];case 4:return[2,a.sent()];case 5:return a.sent(),[2,null];case 6:return[2]}})});return function(i){return t.apply(this,arguments)}}())}function Dt(e){return pe.apply(this,arguments)}function pe(){return pe=S(function(e){var n,t,i,r,a,s;return w(this,function(l){switch(l.label){case 0:return l.trys.push([0,2,,3]),[4,e.json()];case 1:return t=l.sent(),i=t.error,r=i===void 0?"Unknown error":i,a=t.message,s=a===void 0?"No description":a,n="Unexpected status code ".concat(e.status,": ").concat(r,", ").concat(s),[3,3];case 2:return l.sent(),n="Unexpected status code ".concat(e.status,": Cannot parse error response"),[3,3];case 3:throw new Error(n)}})}),pe.apply(this,arguments)}var ne=function(){function e(n,t){ae(this,e),g(this,"_client"),g(this,"id"),g(this,"title"),g(this,"message",null),g(this,"icon",null),g(this,"url",null),g(this,"seenAt",null),g(this,"clickedAt",null),g(this,"createdAt",null),g(this,"data",null),this._client=n,this.id=t.id,this.title=t.title,this.message=t.message,this.icon=t.icon,this.url=t.url,this.seenAt=t.seenAt,this.clickedAt=t.clickedAt,this.createdAt=t.createdAt,this.data=t.data}return se(e,[{key:"markAsClicked",value:function(){var t=this;return S(function(){var i,r;return w(this,function(a){switch(a.label){case 0:i={url:t._client.baseURL+"/notifications/"+t.id+"/click",method:"POST",headers:A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t._client.apiKey,"X-ENGAGESPOT-USER-ID":t._client.userId},t._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":t._client.userSignature})},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,F(i)];case 2:if(a.sent())return[2,t];throw"Cannot mark notification as clicked";case 3:throw r=a.sent(),r;case 4:return[2]}})})()}},{key:"fetch",value:function(){var t=this;return S(function(){var i,r,a;return w(this,function(s){switch(s.label){case 0:i={url:t._client.baseURL+"/notifications/"+t.id,method:"GET",headers:A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t._client.apiKey,"X-ENGAGESPOT-USER-ID":t._client.userId},t._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":t._client.userSignature})},s.label=1;case 1:return s.trys.push([1,3,,4]),[4,F(i)];case 2:if(r=s.sent(),r)return[2,(t.title=r.data.title,t.message=r.data.message,t.icon=r.data.icon,t.url=r.data.url,t.seenAt=r.data.seenAt,t.clickedAt=r.data.clickedAt,t.createdAt=r.data.createdAt,t.data=r.data.data,t)];throw"Cannot fetch notifications";case 3:throw a=s.sent(),a;case 4:return[2]}})})()}},{key:"delete",value:function(){var t=this;return S(function(){var i,r;return w(this,function(a){switch(a.label){case 0:i={url:t._client.baseURL+"/notifications/"+t.id,method:"DELETE",headers:A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t._client.apiKey,"X-ENGAGESPOT-USER-ID":t._client.userId},t._client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":t._client.userSignature})},a.label=1;case 1:return a.trys.push([1,3,,4]),[4,F(i)];case 2:if(a.sent())return[2,t];throw"Unable to delete notifications";case 3:throw r=a.sent(),r;case 4:return[2]}})})()}}]),e}(),Mt=function(){function e(n){ae(this,e),g(this,"client"),g(this,"unreadCount"),g(this,"totalCount"),g(this,"currentPage"),g(this,"itemsPerPage"),g(this,"totalPages"),g(this,"data"),this.client=n,this.unreadCount=0,this.totalCount=0,this.data=[],this.currentPage=1,this.itemsPerPage=15,this.totalPages=0}return se(e,[{key:"fetch",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:15,r=this;return S(function(){var a,s;return w(this,function(l){switch(l.label){case 0:return r.currentPage=t,r.itemsPerPage=i,a={url:r.client.baseURL+"/notifications?pageNo="+r.currentPage+"&limit="+r.itemsPerPage,method:"GET",headers:A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":r.client.apiKey,"X-ENGAGESPOT-USER-ID":r.client.userId},r.client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":r.client.userSignature})},[4,F(a)];case 1:return s=l.sent(),[2,(r.unreadCount=s.unreadCount,r.totalCount=s.pagination.totalCount,r.totalPages=Math.ceil(r.totalCount/r.itemsPerPage),r.client.unreadCount=s.unreadCount,s.data.forEach(function(c){var u=new ne(r.client,{id:c.id,title:c.title,message:c.message,icon:c.icon,url:c.url,createdAt:c.createdAt,seenAt:c.seenAt,data:c.data,clickedAt:c.clickedAt});r.data.push(u)}),r)]}})})()}},{key:"markAllAsSeen",value:function(){var t=this;return S(function(){var i;return w(this,function(r){switch(r.label){case 0:return i={url:t.client.baseURL+"/notifications/markAllNotificationsAsSeen",method:"POST",headers:A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t.client.apiKey,"X-ENGAGESPOT-USER-ID":t.client.userId},t.client.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":t.client.userSignature})},[4,F(i)];case 1:return r.sent(),[2,t]}})})()}}]),e}(),re=function(e){return e[e.PERMISSION_REQUIRED=0]="PERMISSION_REQUIRED",e[e.PERMISSION_GRANTED=1]="PERMISSION_GRANTED",e[e.PERMISSION_DENIED=2]="PERMISSION_DENIED",e}(re||{}),Lt=function(){function e(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;ae(this,e),g(this,"apiKey"),g(this,"userId"),g(this,"userSignature"),this.apiKey=n,this.userId=t,this.userSignature=i}return se(e,[{key:"executeFetchRequest",value:function(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,s=this;return S(function(){var l;return w(this,function(c){return l=de(A({method:t,cache:"no-store"},["POST","PUT","PATCH"].includes(t)&&{body:JSON.stringify(r)}),{headers:A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":s.apiKey,"X-ENGAGESPOT-USER-ID":s.userId},s.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":s.userSignature},a)}),[2,fetch(i,l).then(function(){var u=S(function(m){var d;return w(this,function(x){switch(x.label){case 0:return d=m.ok,d?[3,2]:[4,s.handleError(m)];case 1:d=x.sent(),x.label=2;case 2:x.label=3;case 3:return x.trys.push([3,5,,6]),[4,m.json()];case 4:return[2,x.sent()];case 5:return x.sent(),[2,null];case 6:return[2]}})});return function(m){return u.apply(this,arguments)}}())]})})()}},{key:"handleError",value:function(t){return S(function(){var i,r,a,s,l,c;return w(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,t.json()];case 1:return r=u.sent(),a=r.error,s=a===void 0?"Unknown error":a,l=r.message,c=l===void 0?"No description":l,i="Unexpected status code ".concat(t.status,": ").concat(s,", ").concat(c),[3,3];case 2:return u.sent(),i="Unexpected status code ".concat(t.status,": Cannot parse error response"),[3,3];case 3:throw new Error(i)}})})()}},{key:"get",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=this;return S(function(){return w(this,function(a){switch(a.label){case 0:return[4,r.executeFetchRequest("GET",t,null,i)];case 1:return[2,a.sent()]}})})()}},{key:"post",value:function(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this;return S(function(){return w(this,function(s){switch(s.label){case 0:return[4,a.executeFetchRequest("POST",t,i,r)];case 1:return[2,s.sent()]}})})()}},{key:"put",value:function(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this;return S(function(){return w(this,function(s){switch(s.label){case 0:return[4,a.executeFetchRequest("PUT",t,i,r)];case 1:return[2,s.sent()]}})})()}},{key:"patch",value:function(t,i){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=this;return S(function(){return w(this,function(s){switch(s.label){case 0:return[4,a.executeFetchRequest("PATCH",t,i,r)];case 1:return[2,s.sent()]}})})()}},{key:"delete",value:function(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=this;return S(function(){return w(this,function(a){switch(a.label){case 0:return[4,r.executeFetchRequest("DELETE",t,null,i)];case 1:return[2,a.sent()]}})})()}}]),e}(),Fe=function(){function e(n,t){if(ae(this,e),g(this,"debug",!1),g(this,"isNative",!1),g(this,"SERVICE_WORKER_URL","/service-worker.js?sdkVersion=3.0.0"),g(this,"apiKey"),g(this,"userId"),g(this,"userSignature",null),g(this,"instanceState","none"),g(this,"endPoint",null),g(this,"socket",null),g(this,"realtimeClient"),g(this,"_ready"),g(this,"enableNonHttpsWebPush",!1),g(this,"enableWebPush",!1),g(this,"supportedChannels",{inApp:{name:"In-App",id:"inApp"},webPush:{name:"Web Push",id:"webPush"},email:{name:"Email",id:"email"},mobilePush:{name:"Mobile Push",id:"mobilePush"},sms:{name:"SMS",id:"sms"}}),g(this,"enabledChannels",[]),g(this,"unreadCount",0),g(this,"deviceId"),g(this,"hideBranding",!1),g(this,"serviceWorkerRegistration",null),g(this,"publicKey",""),g(this,"subscribableEvents",["REALTIME_NOTIFICATION_RECEIVED","NOTIFICATION_CLICKED","NOTIFICATION_DELETED"]),g(this,"eventListenerStore",{REALTIME_NOTIFICATION_RECEIVED:[],NOTIFICATION_CLICKED:[],NOTIFICATION_DELETED:[],NOTIFICATION_SEEN:[],WEBPUSH_PERMISSION_CHANGED:[]}),g(this,"apiRequestv2"),g(this,"isWebPushSupported",function(){return"Notification"in window&&"serviceWorker"in navigator&&"PushManager"in window}),Bt(n),this.apiKey=n,this.isNative=(typeof window>"u"?"undefined":me(window))>"u",!t)throw"ES1000 - You must pass an options object when you instantiate Engagespot.";if(!t.userId)throw"ES1001 - You must pass userId when you instantiate Engagespot.";this.userId=t.userId,t.userSignature&&(this.userSignature=t.userSignature),t.enableNonHttpsWebPush&&(this.enableNonHttpsWebPush=t.enableNonHttpsWebPush),t.serviceWorkerRegistration&&(this.serviceWorkerRegistration=t.serviceWorkerRegistration),t.endPointOverride&&(this.endPoint=t.endPointOverride),t.debug&&(this.debug=t.debug),this.apiRequestv2=new Lt(n,t.userId,t.userSignature),this._ready=this.init()}return se(e,[{key:"_resolveInstanceState",value:function(){var t=this;return S(function(){return w(this,function(i){switch(i.label){case 0:return[4,t._ready];case 1:return i.sent(),[2]}})})()}},{key:"isReady",value:function(){var t=this;return S(function(){return w(this,function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,t._resolveInstanceState()];case 1:return[2,(i.sent(),!0)];case 2:return i.sent(),[2,!1];case 3:return[2]}})})()}},{key:"init",value:function(){var t=this;return S(function(){var i;return w(this,function(r){switch(r.label){case 0:return t.deviceId?[2,(t._log("Instance already have a deviceId. So skipping init()"),t)]:(i=t.getDeviceId(),i?t.deviceId=i:t.deviceId=t.createNewDevice(),[4,t.connect()]);case 1:return[2,r.sent()]}})})()}},{key:"connect",value:function(){var t=this;return S(function(){var i,r,a;return w(this,function(s){switch(s.label){case 0:return t.instanceState="connecting",i={url:t.baseURL+"/sdk/connect",method:"POST",body:{deviceType:"browser",browserType:Ie.findBrowser()},headers:de(A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t.apiKey,"X-ENGAGESPOT-USER-ID":t.userId},t.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":t.userSignature}),{"X-ENGAGESPOT-DEVICE-ID":t.deviceId})},[4,F(i)];case 1:return r=s.sent(),t.unreadCount=r.unreadCount,t.hideBranding=r.app.hideBranding,t.publicKey=r.app.publicKey,t.enableWebPush=r.app.enableWebPush,t.enabledChannels=r.app.channels||[],t._log("Response from connect API is given below "),t._log(r),!t.isNative&&t.enableWebPush&&!t.enableNonHttpsWebPush?(t._log("enableNonHttpsWebPush is false"),t.serviceWorkerRegistration?[4,window.navigator.serviceWorker.ready]:[3,3]):[3,7];case 2:return s.sent(),[3,6];case 3:return s.trys.push([3,5,,6]),[4,t.getServiceWorkerRegistration()];case 4:return t.serviceWorkerRegistration=s.sent(),[3,6];case 5:return a=s.sent(),console.warn("[Engagespot] ES1003 - Service worker registration failed. This error is probably due to missing service-worker file. Try turning off web-push channel in your Engagespot dashboard"),console.error(a),[3,6];case 6:return[3,8];case 7:t._log("enableNonHttpsWebPush is "+t.enableNonHttpsWebPush),t._log("enableWebPush is "+t.enableWebPush),s.label=8;case 8:try{t.realtimeConnect()}catch(l){throw l}return[2,(t.isNative||t.listenForWebPushPermissionChanges(),t.instanceState="connected",t)]}})})()}},{key:"_createTokenRequest",value:function(){var t=this;return S(function(){var i;return w(this,function(r){switch(r.label){case 0:return i={url:t.baseURL+"/sdk/realtimeTokenRequests",method:"POST",body:{deviceType:"browser",browserType:Ie.findBrowser()},headers:de(A({"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":t.apiKey,"X-ENGAGESPOT-USER-ID":t.userId},t.userSignature&&{"X-ENGAGESPOT-USER-SIGNATURE":t.userSignature}),{"X-ENGAGESPOT-DEVICE-ID":t.deviceId})},[4,F(i)];case 1:return[2,r.sent()]}})})()}},{key:"realtimeConnect",value:function(){var t=this,i=this;this.realtimeClient=new ut.exports.Realtime({authCallback:function(){var r=S(function(a,s){var l,c;return w(this,function(u){switch(u.label){case 0:return u.trys.push([0,2,,3]),[4,i._createTokenRequest()];case 1:return l=u.sent(),s("",l),[3,3];case 2:return c=u.sent(),i._log(c),s(c,""),[3,3];case 3:return[2]}})});return function(a,s){return r.apply(this,arguments)}}()}),this.realtimeClient.connection.once("connected",function(){t._log("Subscribing to "+t.apiKey+"_"+t.userId);var r=t.realtimeClient.channels.get(t.apiKey+"_"+t.userId);r.subscribe(function(a){t.handleIncomingRealtimeMessage(a)})})}},{key:"handleIncomingRealtimeMessage",value:function(t){if(this._log(t),t.name==="NEW_NOTIFICATION"){var i=new ne(this,{id:t.data.notification.id,title:t.data.notification.title,message:t.data.notification.description,icon:t.data.notification.icon,data:t.data.notification.data,url:t.data.notification.url,createdAt:t.data.notification.created_at}),r=0;this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.forEach(function(a){a(i),r++}),this._log("Published to "+r+" listeners")}t.name==="NOTIFICATION_DELETED"&&this.eventListenerStore.NOTIFICATION_DELETED.forEach(function(a){a(t.data.notification.id)}),t.name==="NOTIFICATION_CLICKED"&&this.eventListenerStore.NOTIFICATION_CLICKED.forEach(function(a){a(t.data.notification.id)}),t.name==="NOTIFICATION_SEEN"&&this.eventListenerStore.NOTIFICATION_SEEN.forEach(function(a){a(t.data.notification.id)})}},{key:"listenForWebPushPermissionChanges",value:function(){var t=this;if(!this.isWebPushSupported()){this._log("Web push is not supported in this browser");return}navigator.permissions.query({name:"notifications"}).then(function(i){i.onchange=function(r){var a=r.target.state;t.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.forEach(function(s){s(a)})}})}},{key:"getNotificationList",value:function(){return new Mt(this)}},{key:"markAsRead",value:function(t){var i=this;return S(function(){var r;return w(this,function(a){switch(a.label){case 0:return[4,i._resolveInstanceState()];case 1:return a.sent(),r={id:t},[2,new ne(i,r).markAsClicked()]}})})()}},{key:"deleteNotification",value:function(t){var i=this;return S(function(){var r;return w(this,function(a){switch(a.label){case 0:return[4,i._resolveInstanceState()];case 1:return a.sent(),r={id:t},[2,new ne(i,r).delete()]}})})()}},{key:"httpsWebPushSubscribe",value:function(){var t=this;return S(function(){var i;return w(this,function(r){switch(r.label){case 0:return[4,t._resolveInstanceState()];case 1:return r.sent(),t.isWebPushSupported()?[4,t.getWebPushRegistrationState()]:(t._log("Web push is not supported in this browser"),[2]);case 2:return r.sent()==2?[3,6]:[4,t.askWebPushPermission()];case 3:return r.sent()!=="granted"?(t._log("Web push permission was not granted."),[2]):[4,t.getWebPushSubscription(t.publicKey)];case 4:return i=r.sent(),[4,t.attachPushSubscription(i)];case 5:r.sent(),r.label=6;case 6:return[2]}})})()}},{key:"getServiceWorkerRegistration",value:function(){var t=this;return S(function(){return w(this,function(i){switch(i.label){case 0:return t._log("getServiceWorkerRegistration called"),t.isWebPushSupported()?[4,fetch(t.SERVICE_WORKER_URL)]:[2,(t._log("Web push is not supported in this browser"),null)];case 1:if(i.sent().status!==200)throw"ES1004 - Engagespot SDK initialization failed. Service worker missing: No file found at /service-worker.js";return[2,(window.navigator.serviceWorker.register(t.SERVICE_WORKER_URL,{updateViaCache:"none"}),window.navigator.serviceWorker.ready)]}})})()}},{key:"askWebPushPermission",value:function(){return S(function(){return w(this,function(t){return[2,new Promise(function(i,r){var a=Notification.requestPermission(function(s){i(s)});a&&a.then(i,r)})]})})()}},{key:"getWebPushSubscription",value:function(t){var i=this;return S(function(){var r;return w(this,function(a){switch(a.label){case 0:if(!i.serviceWorkerRegistration)throw new Error("ES1005 - A service worker must be registered before push can be subscribed");a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:i.publicKey})];case 2:return[2,a.sent()];case 3:return r=a.sent(),[2,Promise.reject(r)];case 4:return[2]}})})()}},{key:"clearWebPushSubscription",value:function(){return S(function(){return w(this,function(t){return[2,navigator.serviceWorker.ready.then(function(i){return i.pushManager.getSubscription()}).then(function(i){i&&i.unsubscribe()})]})})()}},{key:"getPreferences",value:function(){var t=this;return S(function(){var i;return w(this,function(r){switch(r.label){case 0:return[4,t._resolveInstanceState()];case 1:return r.sent(),i=t.baseURL+"/preferences",[4,t.apiRequestv2.get(i)];case 2:return[2,r.sent()]}})})()}},{key:"setPreferences",value:function(t){var i=this;return S(function(){var r,a;return w(this,function(s){switch(s.label){case 0:return[4,i._resolveInstanceState()];case 1:return s.sent(),r=i.baseURL+"/preferences",a={preference:t},i._log("setPreferences - Trying to send body"),i._log(a),[4,i.apiRequestv2.patch(r,a)];case 2:return[2,(s.sent(),i)]}})})()}},{key:"setProfileAttributes",value:function(t){var i=this;return S(function(){var r;return w(this,function(a){switch(a.label){case 0:return r=i.baseURL+"/profile",[4,i.apiRequestv2.put(r,t)];case 1:return[2,(a.sent(),i)]}})})()}},{key:"getCategories",value:function(){var t=this;return S(function(){var i;return w(this,function(r){switch(r.label){case 0:return i=t.baseURL+"/categories",[4,t.apiRequestv2.get(i)];case 1:return[2,r.sent()]}})})()}},{key:"baseURL",get:function(){return this.endPoint!==null?this.endPoint:Nt.apiHost}},{key:"getWebPushRegistrationState",value:function(){var t=this;return S(function(){return w(this,function(i){switch(i.label){case 0:return[4,t._resolveInstanceState()];case 1:return[2,(i.sent(),t.isWebPushSupported()?Notification.permission==="denied"?2:Notification.permission==="granted"?1:0:2)]}})})()}},{key:"attachPushSubscription",value:function(t){var i=this;return S(function(){return w(this,function(r){switch(r.label){case 0:return[4,i._resolveInstanceState()];case 1:return[2,(r.sent(),fetch(i.baseURL+"/devices/"+i.deviceId+"/webPushSubscription",{method:"POST",cache:"no-cache",body:JSON.stringify(t),headers:{"Content-Type":"application/json","X-ENGAGESPOT-API-KEY":i.apiKey,"X-ENGAGESPOT-USER-ID":i.userId,"X-ENGAGESPOT-USER-SIGNATURE":i.userSignature,"X-ENGAGESPOT-DEVICE-ID":i.deviceId}}).then(function(a){return i._log("Push subscription attached"),a.json()}).then(function(a){return!0}).catch(function(a){var s=new Error("ES1006 - Failed to register push notification with Engagespot server - "+a);Promise.reject(s)}))]}})})()}},{key:"createNewDevice",value:function(){var t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){var r=Math.random()*16|0;return(i=="x"?r:r&3|8).toString(16)});return this.isNative||localStorage.setItem("_engagespotDeviceId",t),t}},{key:"getDeviceId",value:function(){return this.isNative?localStorage.getItem("_engagespotDeviceId"):null}},{key:"onNotificationReceive",value:function(t){return this.eventListenerStore.REALTIME_NOTIFICATION_RECEIVED.push(t),!0}},{key:"onNotificationClick",value:function(t){return this.eventListenerStore.NOTIFICATION_CLICKED.push(t),!0}},{key:"onNotificationDelete",value:function(t){return this.eventListenerStore.NOTIFICATION_DELETED.push(t),!0}},{key:"onNotificationSee",value:function(t){return this.eventListenerStore.NOTIFICATION_SEEN.push(t),!0}},{key:"onWebPushPermissionChange",value:function(t){return this.eventListenerStore.WEBPUSH_PERMISSION_CHANGED.push(t),!0}},{key:"_log",value:function(t){this.debug&&console.log("[Engagespot-Core] ",t)}}]),e}();g(Fe,"isReady",!1);function Bt(e){if(e==null)throw"ES1007 - You must pass your API key when you instantiate Engagespot."}var zt=Fe,Ft=Object.defineProperty,Wt=Object.defineProperties,_t=Object.getOwnPropertyDescriptors,ie=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable,$e=(e,n,t)=>n in e?Ft(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,v=(e,n)=>{for(var t in n||(n={}))We.call(n,t)&&$e(e,t,n[t]);if(ie)for(var t of ie(n))_e.call(n,t)&&$e(e,t,n[t]);return e},P=(e,n)=>Wt(e,_t(n)),X=(e,n)=>{var t={};for(var i in e)We.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&ie)for(var i of ie(e))n.indexOf(i)<0&&_e.call(e,i)&&(t[i]=e[i]);return t};function Ut(e,n,t){return new zt(e,P(v({},t),{userId:n}))}function jt(e){let n=e,{userId:t,apiKey:i}=n,r=X(n,["userId","apiKey"]),a=e.core!=null&&(e.core.userId!==e.userId||e.core.apiKey!==e.apiKey);return(!e.core||a)&&t&&i&&(e.core=Ut(i,t,v({},r))),a}var ge=e=>ze(new Date(e),new Date,{addSuffix:!0}),Gt={format:ft,formatDistance:ze,formatRelative:ht,subDays:mt};function Ue(e){return n=>{var t;return P(v({},n),{created:e((t=n==null?void 0:n.createdAt)!=null?t:"",Gt)})}}var f={Init:"Init"},L=(e,n)=>({type:e,payload:v({},n)}),je={page:1,data:[],rawData:[],hasMore:!1,unreadCount:0,webPushData:{},preferences:{channels:[],userPreferences:{}}};f.SetData="SetData";f.DeleteNotification="DeleteNotification";f.SetUnreadCount="SetUnreadCount";f.IncrementUnreadCount="IncrementUnreadCount";f.DecrementUnreadCount="DecrementUnreadCount";f.AddNotification="AddNotification";f.MarkAsRead="MarkAsRead";f.MarkAllAsSeen="MarkAllAsSeen";f.SetPreferences="SetPreferences";f.SetCategories="SetCategories";f.SetInitialPreferences="SetInitialPreferences";var Ht=function(e,n,t,i){var r,a,s,l,c,u,m;let d=i.formatDate||ge,x=Ue(d),E=p=>v({},x(p));if(n.type===f.Init)return je;if(n.type===f.SetData){let p=(r=n.payload)==null?void 0:r.result,C=p.data.map(E),y=p.currentPage==1?{itemsPerPage:p.itemsPerPage,totalCount:p.totalCount,totalPages:p.totalPages,unreadCount:p.unreadCount}:{},k=e.rawData.concat([P(v({},p),{notifications:C})]);return delete k.data,P(v(P(v({},e),{currentPage:p.currentPage}),y),{rawData:k})}else if(n.type===f.DeleteNotification){let p=e.rawData,C=(a=n.payload)==null?void 0:a.notificationId,y=p.map((k,T)=>{let $=k.notifications.findIndex(R=>R.id===C);if($<0)return k;let I=[...k.notifications];return I.splice($,1),P(v({},k),{notifications:I})});return P(v({},e),{rawData:y})}else{if(n.type===f.SetUnreadCount)return P(v({},e),{unreadCount:(s=n.payload)==null?void 0:s.unreadCount});if(n.type===f.IncrementUnreadCount)return P(v({},e),{unreadCount:e.unreadCount+1});if(n.type===f.DecrementUnreadCount)return P(v({},e),{unreadCount:e.unreadCount-1});if(n.type===f.AddNotification){let p=e.rawData,C=(l=n.payload)==null?void 0:l.notification,y=[{notifications:[E(C)]}].concat(p);return P(v({},e),{rawData:y})}else if(n.type===f.MarkAsRead){let p=e.rawData,C=(c=n.payload)==null?void 0:c.notificationId,y=p.map((k,T)=>{let $=k.notifications.map(I=>I.id!==C||I.clickedAt?I:P(v({},I),{clickedAt:new Date().toUTCString()}));return P(v({},k),{notifications:$})});return P(v({},e),{rawData:y})}else if(n.type===f.SetInitialPreferences){let p=(u=n.payload)==null?void 0:u.preferences;return P(v({},e),{preferences:v({},p)})}else if(n.type===f.SetPreferences){let p=(m=n.payload)==null?void 0:m.preferences,C=e.preferences.userPreferences.map(y=>{var k;let T=p.find(I=>y.category.id===I.categoryId);if(!T)return y;let $=v({},y);return(k=T==null?void 0:T.channels)==null||k.forEach(I=>{var R=I.channel;$.channels[R].enabled=Boolean(I.enabled)}),$});return P(v({},e),{preferences:P(v({},e.preferences),{userPreferences:C})})}}return e},Kt=function(e,n,t){let i=t.formatDate||ge,r=Ue(i),a=s=>v({},r(s));return e.map(s=>P(v({},s),{notifications:s.notifications.map(a)}))};function Ge(e){e.stateReducers.push(Ht),e.dataTransformer.push(Kt),e.useInstance.push(Vt)}Ge.pluginName="useNotifications";function Vt(e){let n=e.events,t=l=>{e.dispatch({type:f.SetData,payload:{result:l}})},i=o.exports.useCallback(l=>{e.core.deleteNotification(l),e.dispatch(L(f.DeleteNotification,{notificationId:l}))},[]),r=o.exports.useCallback(l=>{e.core.markAsRead(l),e.dispatch(L(f.MarkAsRead,{notificationId:l}))},[]),a=o.exports.useCallback(()=>{e.core.getNotificationList().markAllAsSeen(),e.dispatch(L(f.MarkAllAsSeen))},[]);o.exports.useEffect(()=>{async function l(){let c=await e.core.getNotificationList().fetch(e.reducerState.page||1);t(c)}l()},[e.reducerState.page,e.apiKey,e.userId]),o.exports.useEffect(()=>{e.core.onNotificationReceive(c=>{var u;e.dispatch(L(f.AddNotification,{notification:c})),(u=n==null?void 0:n.onNotificationReceive)==null||u.call(n,c)}),e.core.onNotificationDelete(c=>{var u;e.dispatch(L(f.DeleteNotification,{notificationId:c})),(u=n==null?void 0:n.onNotificationDelete)==null||u.call(n,c)}),e.core.onNotificationClick(c=>{var u;e.dispatch(L(f.MarkAsRead,{notificationId:c})),(u=n==null?void 0:n.onNotificationClick)==null||u.call(n,c)}),e.core.onNotificationSee(c=>{var u;(u=n==null?void 0:n.onNotificationSee)==null||u.call(n,c)});async function l(){if(!e.apiKey||!e.userId||!await e.core.isReady())return;let c=e.core.enabledChannels,u=c.map(x=>e.core.supportedChannels[x]),m=await e.core.getPreferences();var d=(await e.core.getCategories()).map(x=>{var E;let p={category:x,channels:{}},C=m.find(y=>p.category.id===y.category.id);return Object.assign(p,C||{}),c.forEach(y=>{let k=!1,T=m.find($=>$.channel===y);(!C||!T)&&(k=!0),p.channels[y]={enabled:k}}),(E=p==null?void 0:p.channelPreferences)==null||E.forEach(y=>{var k=y.channel;!c.includes(k)||(p.channels[k].enabled=Boolean(y.enabled))}),p==null||delete p.channelPreferences,p});e.dispatch(L(f.SetInitialPreferences,{preferences:{userPreferences:d,channels:u}}))}l()},[e.apiKey,e.userId]);let s=l=>{e.core.setPreferences(l),e.dispatch(L(f.SetPreferences,{preferences:l}))};Object.assign(e,{notifications:e.reducerState.data,unreadCount:e.reducerState.unreadCount,preferences:e.reducerState.preferences,setPreferences:s,getCategories:e.core.getCategories,deleteNotification:i,markAsRead:r,markAllAsSeen:a})}function Xt(e){let n=e,{formatDate:t=ge,stateReducer:i=(c,u,m)=>c,dataTransformer:r=(c,u)=>c,plugins:a=[]}=n,s=X(n,["formatDate","stateReducer","dataTransformer","plugins"]),l=[Ge,...a];return e=v({formatDate:t,plugins:l,stateReducer:i,dataTransformer:r},s),e=l.flatMap(c=>c.applyDefaults?c.applyDefaults:[]).reduce((c,u)=>u(c),e),e}function Q(e){let n=o.exports.useRef();return n.current=e,o.exports.useCallback(()=>n.current,[])}var Zt=(e,n,t={})=>e.forEach(i=>{i(n,t)});function qt(){return{stateReducers:[],dataTransformer:[],useInstance:[]}}function Yt(e){var n,t;let i=Xt(e),r=i,{apiKey:a,userId:s,plugins:l,stateReducer:c,dataTransformer:u}=r;X(r,["apiKey","userId","plugins","stateReducer","dataTransformer"]);let m=o.exports.useRef({}),d=Q(m.current);Object.assign(d(),P(v({},i),{plugins:l,hooks:qt()}));let x=jt(d());l.filter(Boolean).forEach(I=>{let R=d().hooks;R&&I(R)});let E=Q(d().hooks);d().getHooks=E,delete d().hooks;let p=Q(c),C=o.exports.useCallback((I,R)=>{if(!R.type)throw console.info({action:R}),new Error("Unknown Action \u{1F446}");let N=p();return[...E().stateReducers,...Array.isArray(N)?N:[N]].reduce((D,W)=>W(D,R,I,d())||D,I)},[E,p,d]),[y,k]=o.exports.useReducer(C,void 0,()=>C(je,{type:f.Init,payload:{instance:d()}}));x&&k({type:f.Init,payload:{instance:d()}}),Object.assign(d(),{reducerState:y,dispatch:k}),Object.assign(d(),{hideBranding:(n=d().core)==null?void 0:n.hideBranding}),Zt((t=E())==null?void 0:t.useInstance,d());let T=Q(u),$=o.exports.useCallback(I=>[...E().dataTransformer,...Array.isArray(T())?T():[T()]].reduce((R,N)=>N(R,I,d()),I),[E,T]);return Object.assign(d(),{notifications:$(d().reducerState.rawData)}),d()}var Jt=300;function Qt(e=Jt){let[n,t]=o.exports.useState(!1);function i(a){var s;((s=a.currentTarget)==null?void 0:s.scrollTop)>e?t(!0):t(!1)}function r(a){a==null||a.scrollTo({top:0,left:0,behavior:"smooth"})}return{jumpToTop:r,onNotificationScroll:i,showJumpToTop:n}}f.SetPage="SetPage";f.IncrementPage="IncrementPage";f.SetHasMore="SetHasMore";f.SetLoadRef="SetLoadRef";function en(e,n){if(n.type===f.SetData){let t=e.page,i=e.totalPages;return P(v({},e),{hasMore:t<i})}else{if(n.type===f.SetPage)return P(v({},e),{page:n.payload.page});if(n.type===f.IncrementPage)return P(v({},e),{page:e.page+1});if(n.type===f.SetHasMore)return P(v({},e),{page:e.page+1,hasMore:n.payload.hasMore});if(n.type===f.SetLoadRef)return P(v({},e),{loaderRef:n.payload.loaderRef})}return e}function tn(e,n){return e.flatMap(t=>t.notifications)}He.pluginName="useInfiniteScroll";function He(e){e.stateReducers.push(en),e.dataTransformer.push(tn),e.useInstance.push(nn)}function nn(e){let n=0,t=e.scrollRoot,i=e.reducerState.page,r=e.reducerState.loaderRef;o.exports.useCallback(l=>e.dispatch({type:f.SetPage,payload:{page:l}}),[i]);let a=o.exports.useCallback(()=>e.dispatch({type:f.IncrementPage}),[]),s=o.exports.useCallback(l=>{e.dispatch({type:f.SetLoadRef,payload:{loaderRef:l}})},[]);o.exports.useEffect(()=>{if(!r)return;let l=0;function c(m){m.forEach(d=>{d.isIntersecting&&d.intersectionRatio>=l&&a(),l=d.intersectionRatio})}let u=new IntersectionObserver(c,{root:t,rootMargin:`0px 0px ${n}px 0px`,threshold:.3});return r&&u.observe(r),()=>u.disconnect()},[r]),Object.assign(e,{hasMore:e.reducerState.hasMore,setLoaderRef:s})}var rn="https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3";async function on(e){new Audio(e).play().catch(n=>{})}var an="(1) New Notification Received";function sn(e){let n=document.title;document.title=e,setTimeout(()=>{document.title=n},5e3)}f.SetWebPushData="SetWebPushData";var ln=function(e,n){return n.type===f.SetWebPushData?P(v({},e),{webPushData:v(v({},e.webPushData),n.payload)}):e};function cn(e){let n=e,{disableNotificationChime:t=!0,notificationChimeSrc:i=rn,disableTitleUpdate:r=!1,titleUpdateText:a=an}=n;return X(n,["disableNotificationChime","notificationChimeSrc","disableTitleUpdate","titleUpdateText"]),P(v({},e),{disableNotificationChime:t,notificationChimeSrc:i,disableTitleUpdate:r,titleUpdateText:a})}be.pluginName="useBrowserWebPush";be.applyDefaults=cn;function be(e){e.stateReducers.push(ln),e.useInstance.push(un)}function un(e){var n,t,i,r;let a=e.core.enableWebPush&&e.core.isWebPushSupported(),s=o.exports.useCallback(()=>{e.core.httpsWebPushSubscribe()},[]),l=(t=(n=e.reducerState)==null?void 0:n.webPushData)==null?void 0:t.webPushState,c=(r=(i=e.reducerState)==null?void 0:i.webPushData)==null?void 0:r.notificationPermissionState,u=m=>{e.dispatch({type:f.SetWebPushData,payload:m})};o.exports.useEffect(()=>{async function m(){let d=await e.core.getWebPushRegistrationState(),x="denied";d===re.PERMISSION_GRANTED?(x="granted",e.core.httpsWebPushSubscribe()):d===re.PERMISSION_DENIED?x="denied":d===re.PERMISSION_REQUIRED&&(x="prompt"),u({webPushState:x,notificationPermissionState:d})}e.core.onWebPushPermissionChange(d=>{u({webPushState:d})}),e.core.onNotificationReceive(d=>{e.disableNotificationChime||on(e.notificationChimeSrc),e.disableTitleUpdate||sn(e.titleUpdateText)}),m()},[e.apiKey,e.userId]),Object.assign(e,{allowWebPush:a,enableWebPush:s,webPushState:l,notificationPermissionState:c})}var dn="(max-width: 768px)",Re={placement:"bottom-end",preventOverflow:!0,enableArrow:!0,offset:[0,10]};ve.pluginName="useFloatingNotification";ve.applyDefaults=pn;function pn(e){let n={panelOpenByDefault:!1,placementOptions:Re,enableFloatingPanel:!0},t=e,{floatingPanelOptions:{panelOpenByDefault:i=!1,placementOptions:r=Re,enableFloatingPanel:a=!1}=n}=t,s=X(t,["floatingPanelOptions"]);return v({floatingPanelOptions:{panelOpenByDefault:i,placementOptions:r,enableFloatingPanel:a}},s)}f.SetPanelVisibility="SetPanelVisibility";f.TogglePanelVisibility="TogglePanelVisibility";var fn=function(e,n,t,i){var r;return n.type===f.Init?P(v({},e),{panelVisibility:i.floatingPanelOptions.panelOpenByDefault}):n.type===f.SetPanelVisibility?P(v({},e),{panelVisibility:(r=n.payload)==null?void 0:r.panelVisibility}):n.type===f.TogglePanelVisibility?P(v({},e),{panelVisibility:!e.panelVisibility}):n.type===f.AddNotification?P(v({},e),{unreadCount:i.reducerState.panelVisibility?e.unreadCount:e.unreadCount+1}):n.type===f.MarkAllAsSeen?P(v({},e),{unreadCount:0}):e};function ve(e){e.stateReducers.push(fn),e.useInstance.push(hn)}function hn(e){let n=e.floatingPanelOptions.placementOptions,t=dt(dn),i=o.exports.useRef(null),r=o.exports.useRef(null),a=o.exports.useRef(null),s=e.reducerState.panelVisibility,l=o.exports.useCallback(()=>{e.reducerState.panelVisibility||e.markAllAsSeen(),e.dispatch({type:f.TogglePanelVisibility})},[e]),{styles:c,attributes:u,update:m}=Be(i.current,r.current,{placement:n==null?void 0:n.placement,modifiers:[{name:"preventOverflow",enabled:n==null?void 0:n.preventOverflow},{name:"offset",enabled:!0,options:{offset:n==null?void 0:n.offset}},{name:"arrow",enabled:n==null?void 0:n.enableArrow,options:{element:a.current}}]});function d(p){var C,y;((C=r.current)==null?void 0:C.contains(p.target))||((y=i.current)==null?void 0:y.contains(p.target))||e.reducerState.panelVisibility&&l()}o.exports.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]),o.exports.useEffect(()=>{e.core.onNotificationReceive(p=>{e.reducerState.panelVisibility&&e.markAllAsSeen()})},[e.apiKey,e.userId]);let x={styles:{popper:{position:"fixed",top:0,left:0,zIndex:99999999999999,width:"100%",height:"100%"},offset:{height:"100%",width:"100%",borderRadius:"0"},arrow:{display:"none"}},attributes:{popper:{}}},E=()=>{l(),m==null||m()};Object.assign(e,{isMobile:t,togglePanelVisibility:l,panelVisibility:s,getButtonProps:()=>({onClick:E,ref:i}),getArrowProps:()=>({ref:a,style:t?x.styles.arrow:P(v({},c.arrow),{display:s&&(n==null?void 0:n.enableArrow)?"block":"none"})}),getPanelOffsetProps:()=>({style:t&&s?x.styles.offset:c.offset}),getPanelProps:()=>({ref:r,style:t&&s?x.styles.popper:P(v({},c.popper),{zIndex:999999999999999}),attributes:t&&s?x.attributes.popper:u.popper}),useJumpToTop:Qt})}const Te={disabled:!1},Ke=ee.createContext(null);var V="unmounted",B="exited",z="entering",K="entered",fe="exiting",M=function(e){vt(n,e);function n(i,r){var a;a=e.call(this,i,r)||this;var s=r,l=s&&!s.isMounting?i.enter:i.appear,c;return a.appearStatus=null,i.in?l?(c=B,a.appearStatus=z):c=K:i.unmountOnExit||i.mountOnEnter?c=V:c=B,a.state={status:c},a.nextCallback=null,a}n.getDerivedStateFromProps=function(r,a){var s=r.in;return s&&a.status===V?{status:B}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(r){var a=null;if(r!==this.props){var s=this.state.status;this.props.in?s!==z&&s!==K&&(a=z):(s===z||s===K)&&(a=fe)}this.updateStatus(!1,a)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var r=this.props.timeout,a,s,l;return a=s=l=r,r!=null&&typeof r!="number"&&(a=r.exit,s=r.enter,l=r.appear!==void 0?r.appear:s),{exit:a,enter:s,appear:l}},t.updateStatus=function(r,a){r===void 0&&(r=!1),a!==null?(this.cancelNextCallback(),a===z?this.performEnter(r):this.performExit()):this.props.unmountOnExit&&this.state.status===B&&this.setState({status:V})},t.performEnter=function(r){var a=this,s=this.props.enter,l=this.context?this.context.isMounting:r,c=this.props.nodeRef?[l]:[te.findDOMNode(this),l],u=c[0],m=c[1],d=this.getTimeouts(),x=l?d.appear:d.enter;if(!r&&!s||Te.disabled){this.safeSetState({status:K},function(){a.props.onEntered(u)});return}this.props.onEnter(u,m),this.safeSetState({status:z},function(){a.props.onEntering(u,m),a.onTransitionEnd(x,function(){a.safeSetState({status:K},function(){a.props.onEntered(u,m)})})})},t.performExit=function(){var r=this,a=this.props.exit,s=this.getTimeouts(),l=this.props.nodeRef?void 0:te.findDOMNode(this);if(!a||Te.disabled){this.safeSetState({status:B},function(){r.props.onExited(l)});return}this.props.onExit(l),this.safeSetState({status:fe},function(){r.props.onExiting(l),r.onTransitionEnd(s.exit,function(){r.safeSetState({status:B},function(){r.props.onExited(l)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(r,a){a=this.setNextCallback(a),this.setState(r,a)},t.setNextCallback=function(r){var a=this,s=!0;return this.nextCallback=function(l){s&&(s=!1,a.nextCallback=null,r(l))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},t.onTransitionEnd=function(r,a){this.setNextCallback(a);var s=this.props.nodeRef?this.props.nodeRef.current:te.findDOMNode(this),l=r==null&&!this.props.addEndListener;if(!s||l){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=c[0],m=c[1];this.props.addEndListener(u,m)}r!=null&&setTimeout(this.nextCallback,r)},t.render=function(){var r=this.state.status;if(r===V)return null;var a=this.props,s=a.children;a.in,a.mountOnEnter,a.unmountOnExit,a.appear,a.enter,a.exit,a.timeout,a.addEndListener,a.onEnter,a.onEntering,a.onEntered,a.onExit,a.onExiting,a.onExited,a.nodeRef;var l=xt(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return yt(Ke.Provider,{value:null,children:typeof s=="function"?s(r,l):ee.cloneElement(ee.Children.only(s),l)})},n}(ee.Component);M.contextType=Ke;M.propTypes={};function G(){}M.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G};M.UNMOUNTED=V;M.EXITED=B;M.ENTERING=z;M.ENTERED=K;M.EXITING=fe;const mn=M;var gn=Object.defineProperty,bn=Object.defineProperties,vn=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Xe=Object.prototype.propertyIsEnumerable,Ne=(e,n,t)=>n in e?gn(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,O=(e,n)=>{for(var t in n||(n={}))Ve.call(n,t)&&Ne(e,t,n[t]);if(oe)for(var t of oe(n))Xe.call(n,t)&&Ne(e,t,n[t]);return e},xe=(e,n)=>bn(e,vn(n)),xn=(e,n)=>{var t={};for(var i in e)Ve.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&oe)for(var i of oe(e))n.indexOf(i)<0&&Xe.call(e,i)&&(t[i]=e[i]);return t},ye={colors:{brandingPrimary:"rgb(0,191,166)",colorPrimary:"#282c34",colorSecondary:"#686868"},panel:{boxShadow:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",width:"30rem",height:"40rem",borderBottomLeftRadius:"11px",borderBottomRightRadius:"11px",borderTopLeftRadius:"11px",borderTopRightRadius:"11px",arrowSize:"10px",arrowInset:"-5px auto auto 0"},feed:{background:"white",placeholderTextColor:"#2c2c2c",height:"30rem",placeholderTextSize:"1rem",placeholderMargin:"1rem 0 0 0",placeholderFontWeight:"300"},feedItem:{border:"1px solid #edf4f2",background:"white",notificationDot:"green",hoverBackground:"#edf4f2",headerColor:"#1c1c1c",descriptionColor:"#464646",dateColor:"#888888",placeHolderBackground:"rgb(230, 230, 230)",placeHolderGradient:"linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%)",height:"30rem",padding:"0.5rem 0.7rem 0.5rem 0.7rem",placeholderTextSize:"1rem",notificationDotSize:".5rem",imageSize:"4.5rem",imageRadius:"50%",hoverTransition:"all 0.2s",textContentPadding:"0 .5rem 0 0",textContentMargin:"0 auto 0 1.2rem",headerFontWeight:"400",headerSize:".9rem",headerPadding:"0 0 0.3rem 0",descriptionSize:"0.8rem",descriptionPadding:"0 0 0.3rem 0",dateSize:".7rem",menuMargin:"0 1rem 0 0"},notificationButton:{background:"transparent",hoverBackground:"rgba(0,191,166, .2)",iconFill:"#edf4f2",floatingButtonShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1.5rem",outline:"none",margin:"0",padding:"5px",borderWidth:"0",normalButtonRadius:"5px",floatingButtonRadius:"50%",transition:"all .2s"},unreadBadgeCount:{background:"red",color:"white",borderRadius:"50%",fontSize:".6rem",inset:"-4px -4px auto auto",size:"1rem"},headerDropdown:{iconFill:"white",background:"transparent",hoverBackground:"",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".6rem",iconHeight:".7rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},dropdown:{iconFill:"#888888",background:"transparent",hoverBackground:"rgb(230, 230, 230)",menuBackground:"white",menuShadow:"0 0 8px 0 rgba(0, 0, 0, 0.14)",menuItemTextColor:"#282c34",menuItemHoverBackground:"#edf4f2",iconWidth:".5rem",iconHeight:".6rem",margin:"0 .5rem 0 0",padding:".5rem",borderWidth:"0",outline:"none",transition:"all 0.2s",menuBorderRadius:"2px",menuItemPadding:"0.5rem 0.7rem"},jumpToTop:{background:"white",iconFill:"#888888",shadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",iconSize:"1rem",inset:"1.5rem 7rem auto auto",borderRadius:"50%",padding:"0.7rem",margin:"0",transition:"all ease-in-out 0.5s"},header:{fontColor:"white",closeButtonBackground:"transparent",fontSize:"1rem",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",closeButtonOutline:"none",closeButtonPadding:"5px",closeButtonFontSize:"1.6rem",closeButtonMargin:"0"},footer:{background:"white",fontColor:"#484848",preferenceButtonColor:"#484848",border:"1px solid rgb(230, 230, 230)",preferenceButtonHoverBackground:"rgb(230, 230, 230)",fontWeight:"400",height:"3rem",padding:"0.5rem 1rem",fontSize:"0.8rem",linkMargin:"0 0.5rem 0 auto",linkSize:"1.5rem",preferenceButtonMargin:"0 0 0 auto",preferenceButtonSize:"1.2rem",preferenceButtonPadding:".2rem",preferenceButtonHoverTransition:"all 0.2s",linkRadius:"3px"},toggle:{background:"rgba(196, 195, 195, 0.55)",activeColor:"#16a085",dotColor:"rgb(255, 255, 255);"},preference:{fontColor:"#1c1c1c",background:"white",height:"30rem",fontWeight:"400",padding:"1.2rem 1.5rem 1.2rem 1.5rem"},preferenceModal:{overlayBackground:"#2b2b2b",headingColor:"#1c1c1c",background:"rgba(255, 255, 255, 0.8)",closeButtonColor:"#bbb9b9",textPrimaryColor:"#1c1c1c",textSecondaryColor:"#525252",buttonPrimaryColor:"white",buttonPrimaryBackgroundColor:"#1abc9c",buttonPrimaryHoverBackgroundColor:"#1a9c82",buttonSecondaryColor:"#4e4e4e",buttonSecondaryBackgroundColor:"transparent",buttonSecondaryHoverBackgroundColor:"#cfcfcf",overlayOpacity:".6",height:"35%",backdropFilter:"blur(1px)",borderRadius:"1.5rem 1.5rem 0 0",padding:"1.2rem 2rem 1.2rem 2rem",textAlign:"center",headerMargin:"0 2rem",headerFontSize:"1rem",closeButtonSize:".6rem",textPrimaryMargin:"0.5rem 2rem",textPrimaryFontSize:".9rem",textSecondaryMargin:"1rem 0 0 0",textSecondaryFontSize:".8rem",primaryButtonFontWeight:"600",primaryButtonPadding:"0.6rem 4.5rem",primaryButtonBorderRadius:"10px",primaryButtonMargin:"0.6rem 0 0.2rem 0",primaryButtonTransition:"all 0.2s"}};function yn(e={}){return bt(ye,e)}var Ze=o.exports.createContext({}),Ee=()=>o.exports.useContext(Ze);function En({theme:e,state:n,children:t}){return o.exports.createElement(Ze.Provider,{value:n},o.exports.createElement(gt,{theme:yn(e)},t))}var Sn=h.div``,wn=h.div`
  && {
    display: ${({visible:e})=>e?"flex":"none"};
    box-sizing: border-box;
    font-family: sans-serif;
    color: ${({theme:e})=>e.colors.colorPrimary};
    border-bottom-left-radius: ${({theme:e})=>e.panel.borderBottomLeftRadius};
    border-bottom-right-radius: ${({theme:e})=>e.panel.borderBottomRightRadius};
    border-top-left-radius: ${({theme:e})=>e.panel.borderTopLeftRadius};
    border-top-right-radius: ${({theme:e})=>e.panel.borderTopRightRadius};
    flex-direction: column;
    overflow: hidden;
    height: ${({theme:e})=>e.panel.height};
    box-shadow: ${({theme:e})=>e.panel.boxShadow};
    width: ${({theme:e})=>e.panel.width};
    align-items: stretch;
    justify-content: flex-start;
    position: relative;
  }
`,Pn=h.div`
  && {
    ${({theme:{panel:e,colors:n}})=>b`
      position: absolute;
      width: ${e.arrowSize};
      height: ${e.arrowSize};

      &:after {
        content: ' ';
        transform: rotate(45deg);
        width: ${e.arrowSize};
        height: ${e.arrowSize};
        position: absolute;
        inset: ${e.arrowInset};
        background-color: ${n.brandingPrimary};
      }
    `}
  }
`,kn=h.div`
  && {
    ${({theme:{header:e,colors:n,preference:t}})=>b`
      display: flex;
      height: ${e.height};
      align-items: center;
      justify-content: flex-start;
      padding: ${e.padding};
      font-size: ${e.fontSize};
      color: ${e.fontColor};
      background: ${n.brandingPrimary};
      box-sizing: border-box;
    `}
  }
`,Cn=h.h3`
  && {
    ${({theme:{header:e}})=>b`
      font-size: ${e.fontSize};
      font-weight: ${e.fontWeight};
      color: ${e.fontColor};
      padding-left: 0.5rem;
      margin-right: auto;
    `}
  }
`,In=h.button`
  && {
    ${({theme:{header:e}})=>b`
      border-width: 0;
      margin: ${e.closeButtonMargin};
      position: relative;
      padding: ${e.closeButtonPadding};
      color: ${e.fontColor};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${e.closeButtonBackground};

      &:hover {
      }

      svg {
        fill: white;
        stroke: none;
        height: 12px;
        width: 12px;
      }
    `}
  }
`;function $n({children:e}){return o.exports.createElement(kn,null,e)}var Rn=h.div`
  && {
    display: flex;
    position: relative;
    flex: 1;
    flex-direction: column;
    overflow-y: auto;
    height: ${({theme:e})=>e.feed.height};
    align-items: ${({empty:e})=>e?"center":"stretch"};
    justify-content: ${({empty:e})=>e?"center":"flex-start"};
    background: ${({theme:e})=>e.feed.background};

    path[data-name='Path 154'] {
      fill: ${({theme:e})=>e.colors.brandingPrimary};
    }
  }
`,Tn=h.p`
  && {
    ${({theme:e})=>b`
      font-size: ${e.feed.placeholderTextSize};
      margin: ${e.feed.placeholderMargin};
      font-weight: ${e.feed.placeholderFontWeight};
      color: ${e.feed.placeholderTextColor};
    `}
  }
`,Nn=h.div`
  && {
    ${({theme:e})=>b`
      position: absolute;
      inset: ${e.jumpToTop.inset};
    `}
  }
`;function An(){return o.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1600 1100",width:"50%"},o.exports.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},o.exports.createElement("path",{d:"M92.8 863.1S55.4 820 33.3 766.2c-22.1-53.8-10.8-102.6 6.2-113.4 17-10.8 57.3 45.4 59.5 95.8 2.3 50.5 0 114.5 0 114.5h-6.2Z",fill:"#52CB96",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M96.2 863.1s-34-203.5-17.6-297.6c16.4-94.1 54.4-91.3 74.8-78.2 20.4 13.1 43.7 79.4 13.6 195.6-30 116.2-59 180.3-59 180.3H96.2v-.1Z",fill:"#37B37F",fillRule:"nonzero"}),o.exports.createElement("path",{stroke:"#FFF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m104.7 863.1 23.1-273.7M96.2 863.1 60.5 727.8"}),o.exports.createElement("path",{d:"M643.6 307.8s39.1-96.6 174.1-60.9c135 35.7 144.5 221.8 208.9 277.3 64.4 55.4 205.9 56.8 196.8 189.3-9.1 132.5-216.3 18-320.8 23.7-317.8 17.3-387 177.4-599.5 87.1-142.2-60.4-100.1-229.2 35.6-279.5 135.7-50.3 240.3-88.8 304.9-237Z",fill:"#F1F2F7",fillRule:"nonzero"}),o.exports.createElement("ellipse",{fill:"#283444",fillRule:"nonzero",cx:557.1,cy:933.1,rx:143.2,ry:61.8}),o.exports.createElement("path",{d:"M568.4 921.7s-3.7 4.5-13.6 4.5c-9.9 0-13.6-4.5-13.6-4.5v-127h27.2v127ZM22.8 863.1C8.8 880.3.4 902.2.4 926.1c0 55 44.6 99.7 99.7 99.7s99.7-44.6 99.7-99.7c0-23.9-8.4-45.8-22.4-63H22.8Z",fill:"#CED5E5",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M908.3 827.6v206.6c0 25.5 63.6 46.1 142 46.1s142-20.6 142-46.1V827.6h-284Z",fill:"#FFB3DA",fillRule:"nonzero"}),o.exports.createElement("ellipse",{fill:"#ED85C3",fillRule:"nonzero",cx:1050.3,cy:827.6,rx:142,ry:67.2}),o.exports.createElement("path",{d:"M267.1 513.8s-2.6-50.2 39.1-66.3c41.7-16.2 155.6-26.4 222-6.8 66.3 19.6-14.6 58 105.4 171.8C743 716.2 802 683.9 866.6 715.4S802 838.7 674.4 836.2s-198.1-28.1-261.1-70.6C350.5 723 262.9 615.9 267.1 513.8Z",fill:"#283444",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M525.8 746.2s21.8 22.5 67 34.1c45.9 11.8 113.1 19.9 174.6 28.3 120.9 16.7 305.6 43.1 305.6 43.1l-2.8-32.3s-293-51.9-430.7-104.9L569 681.1s-26.3 7.2-43.2 65.1Z",fill:"#5900CC",fillRule:"nonzero"}),o.exports.createElement("path",{d:"m665.2 658.5 401 175.9-12.1 33.6-410.3-151.8-66.4-21.6 7.2-19.2c.1 0 53.7-28.7 80.6-16.9Z",fill:"#5900CC",fillRule:"nonzero"}),o.exports.createElement("path",{d:"m401.3 448.4-9.2 57s28.3 8.5 41.8 1.6c13.5-6.9 18.9-22.4 18.9-22.4s-10.3-1.4-23.2-31.3l-28.3-4.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),o.exports.createElement("path",{stroke:"#CED5E5",strokeWidth:3,opacity:.3,strokeLinecap:"round",strokeLinejoin:"round",d:"M1524.1 941.8 337.8 252.7v-72.8L1404.2 29.1"}),o.exports.createElement("path",{d:"M387.3 441.5s30.3 19 55.6 11.3c25.2-7.7-8.6-109.1-8.6-109.1s-14-22.6-49.5-14.1c-35.6 8.5-40.3 74.4 2.5 111.9Z",fill:"#FFDFD7",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M394.7 489.7s-17.6 10.5-34.6 29.3c-8.7 9.6 29.3 74.4 73.5 130.7 42.1 53.7 90.3 99.1 90.3 99.1s31-44.6 69.5-63.9c38.6-19.3 74.5-27.2 74.5-27.2s-90.7-78.2-141-125.5l-33.6-53.3s-20.4-2.3-47.2 1.1c-.1.2-14.7 17.3-51.4 9.7Z",fill:"#FFC933",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M473.4 597.9s18.1-8.1 36.2-10.6c18.1-2.6 12.3 20.4 6.2 29.1-6.1 8.7-48.7 12.3-48.7 12.3s-8.9-5.3-6.3-13.3c2.6-8 5.7-13.9 12.6-17.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M493.2 479.1s35.5 2 89.1 30.7l16 10.5s33.6 21.4 39 34.2c5.4 12.8-.3 25.2-6.4 30.9l-33-28.8-69.9-22.5-34.8-55ZM360 519c-5.7 8.1-11.3 18.3-16.1 31.1-19.3 51-19.3 93-15.5 97.1 3.8 4.2 52.2 6 139.1-18.1 0 0-7.6-8.7 6.4-32.1 0 0-54.8 6.8-94.1 9.4l9.4-34s4.2-29.9-12.9-43.5L360 519Z",fill:"#FFC933",fillRule:"nonzero"}),o.exports.createElement("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m547 550.9-31.2-28.5"}),o.exports.createElement("path",{d:"m491.9 654.7 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4l103.6-43.5c1.8-.8 5.4-.2 8.1 2.1 1 .9-1.6 1.2-1.8 2.7l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-102.1 54.8c-3.5 1.8-10.9-1.7-10-6.7Z",fill:"#CED5E5",fillRule:"nonzero"}),o.exports.createElement("path",{d:"m495.8 656.5 12.8-81.1c.5-3.3 2.7-6.1 5.8-7.4L618 524.5c3.3-1.4 6.8 1.4 6.2 4.9l-11.2 72c-.5 3.1-2.4 5.7-5.2 7.1l-105.5 52.7c-3.3 1.7-7-1.1-6.5-4.7Z",fill:"#F1F2F7",fillRule:"nonzero"}),o.exports.createElement("ellipse",{fill:"#CED5E5",fillRule:"nonzero",transform:"rotate(-67.61 568.994 588.443)",cx:568.994,cy:588.443,rx:13.6,ry:9.5}),o.exports.createElement("path",{d:"M624.3 558.8s-22.2 6-27.2 8.7c-4.9 2.6-12.5 4.9-12.5 12.5s6.8 17.8 12.9 18.5c6 .8 28.2-6.3 33.4-13.2 5.2-6.9 4.5-28-6.6-26.5Z",fill:"#FFDFD7",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M435.2 346.6s6.5-11.4-6.5-18.9c-13-7.5-54.2-16.6-72 24.8 0 0-16.7 3.7-11.3 34.9 5.4 31.2 42 54.1 42 54.1l-3.6-37 8.2-5.1-9.7-26.3c-.1.1 39.5-1.9 52.9-26.5Z",fill:"#8B34FF",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M385.3 409.5s-.9-8.5-8.9-11.6c-8-3.1-15 4-13.3 13.6 1.7 9.7 14.9 18.7 26.5 13.2l-4.3-15.2Z",fill:"#FFDFD7",fillRule:"nonzero"}),o.exports.createElement("path",{stroke:"#FEAC00",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m474 597-94.2 9.4 9.5-34M467.5 629.1l-40.6 9.6"}),o.exports.createElement("path",{d:"M1070.2 819.4s1.9-22.9 11.7-40.3c9.8-17.4 23.6-20 23.6-20l-.8 92.6H1073l-2.8-32.3Z",fill:"#FFF",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M1065.5 836.4s12.2-21.2 29.4-33.6c17.2-12.4 31.4-8.8 31.4-8.8l-42.8 89-30-14.1 12-32.5Z",fill:"#FFF",fillRule:"nonzero"}),o.exports.createElement("path",{stroke:"#8B34FF",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round",d:"m667.8 725.1 385.7 143.7 12.7-34.5-62.7-27.5"}),o.exports.createElement("path",{d:"M1070.9 828.1s16.6-26 34.6-31.4",stroke:"#F1F2F7",strokeWidth:3,strokeLinecap:"round",strokeLinejoin:"round"}),o.exports.createElement("path",{d:"M258.6 273.1H38.1c-15.3 0-27.6-12.4-27.6-27.6v-58.4c0-15.3 12.4-27.6 27.6-27.6h220.5c15.3 0 27.6 12.4 27.6 27.6v58.4c0 15.3-12.3 27.6-27.6 27.6ZM126.7.2h13.6v159.3h-13.6z",stroke:"#FEAC00",fill:"#FFB3DA",fillRule:"nonzero"}),o.exports.createElement("path",{d:"M339 256.2h-6.3c-22.1 0-39.9-17.9-39.9-39.9 0-22.1 17.9-39.9 39.9-39.9h6.3v79.8Z",fill:"#ED85C3",fillRule:"nonzero"}),o.exports.createElement("path",{d:"m1524.1 941.8-118.1-153c-3.2-4.1-4.9-9.2-4.9-14.4v-740c0-4 3.8-6.9 7.7-5.8l112.8 32.5c5.7 1.6 9.6 6.8 9.6 12.7v865.6c-.1 3.7-4.8 5.3-7.1 2.4Z",fill:"#F1F2F7",fillRule:"nonzero"}),o.exports.createElement("path",{fill:"#ED85C3",fillRule:"nonzero",d:"M100.1.2h67.3v20h-67.3z"})))}var On=h.div`
  && {
    ${({theme:{feedItem:e},clickable:n})=>b`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      cursor: ${n?"pointer":"unset"};
      justify-content: flex-start;
      padding: ${e.padding};
      border-bottom: ${e.border};
      background: ${e.background};
      font-family: sans-serif;
      line-height: normal;
      &:hover {
        transition: ${e.hoverTransition};
        background: ${e.hoverBackground};
      }
    `}
  }
`,Dn=h.img`
  && {
    ${({theme:{feedItem:e}})=>b`
      height: ${e.imageSize};
      width: ${e.imageSize};
      flex-shrink: 0;
      border-radius: ${e.imageRadius};
    `}
  }
`,qe=h.div`
  && {
    ${({theme:{feedItem:e}})=>b`
      display: flex;
      align-self: flex-start;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      padding: ${e.textContentPadding};
      margin: ${e.textContentMargin};
      line-height: normal;
      p,
      h4 {
        margin: 0;
      }
    `}
  }
`,Ye=h.h4`
  && {
    ${({theme:{feedItem:e}})=>b`
      font-weight: ${e.headerFontWeight};
      font-size: ${e.headerSize};
      padding: ${e.headerPadding};
      color: ${e.headerColor};
    `}
  }
`,Je=h.p`
  && {
    ${({theme:{feedItem:e}})=>b`
      font-size: ${e.descriptionSize};
      padding: ${e.descriptionPadding};
      color: ${e.descriptionColor};
    `}
  }
`,Mn=h.p`
  && {
    ${({theme:{feedItem:e}})=>b`
      font-size: ${e.dateSize};
      color: ${e.dateColor};
    `}
  }
`,Ln=h.div`
  && {
    ${({theme:{feedItem:e}})=>b`
      display: flex;
      justify-content: space-between;
      margin: ${e.menuMargin};
      align-items: center;
      svg {
        fill: ${e.notificationDot};
        height: ${e.notificationDotSize};
        width: ${e.notificationDotSize};
      }
    `}
  }
`,Ae=h.div`
  && {
    ${({theme:{feedItem:e}})=>b`
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: flex-start;
      padding: ${e.padding};
      border: ${e.border};
      background: ${e.background};
    `}
  }
`,Oe=h.div`
  && {
    ${({theme:{feedItem:e}})=>b`
      height: ${e.imageSize};
      width: ${e.imageSize};
      flex-shrink: 0;
      background: ${e.placeHolderBackground};
      border-radius: ${e.imageRadius};
    `}
  }
`,De=h(qe)`
  && {
    flex: 1;
    align-items: stretch;
  }
`,Me=h(Ye)`
  && {
    ${({theme:{feedItem:e}})=>b`
      background: ${e.placeHolderBackground};
      color: ${e.placeHolderBackground};
      margin: 0 0 0.8rem 0 !important;
      padding: 0;
    `}
  }
`,Le=h(Je)`
  && {
    ${({theme:{feedItem:e}})=>b`
      background: ${e.placeHolderBackground};
      color: ${e.placeHolderBackground};
      margin: 0 12rem 0 0 !important;
      padding: 0;
    `}
  }
`,H=h.span`
  && {
    display: block;
    @keyframes placeHolderShimmer {
      0% {
        background-position: -468px 0;
      }
      100% {
        background-position: 468px 0;
      }
    }

    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: ${({theme:{feedItem:e}})=>e.placeHolderGradient};
    background-size: 800px 104px;
    height: 100%;
    width: 100%;
    border-radius: ${({circle:e})=>e?"50%":"unset"};
    position: relative;
  }
`,Bn=h.button`
  && {
    ${({theme:{colors:e},dropdownTheme:n})=>b`
      display: flex;
      border-width: ${n.borderWidth};
      margin: ${n.margin};
      padding: ${n.padding};
      box-sizing: border-box;
      outline: ${n.outline};
      user-select: none;
      cursor: pointer;
      background-color: ${n.background};

      svg {
        fill: ${n.iconFill};
        stroke: ${n.iconFill};
        height: ${n.iconHeight};
        width: ${n.iconWidth};
      }

      &:hover {
        transition: ${n.transition};
        fill: ${e.brandingPrimary};
        stroke: ${e.brandingPrimary};
        background: ${n.hoverBackground};
      }
    `}
  }
`,zn=h.div`
  z-index: 1000000;
`,Fn=h.div`
  && {
    ${({visible:e,dropdownTheme:n})=>b`
      display: ${e?"flex":"none"};
      flex-direction: column;
      background: ${n.menuBackground};
      border-radius: ${n.menuBorderRadius};
      font-family: sans-serif;
      box-shadow: ${n.menuShadow}; ;
    `}
  }
`,Wn=h.div`
  && {
    ${({theme:{dropdown:e}})=>b`
      justify-content: flex-start;
      color: ${e.menuItemTextColor};
      display: flex;
      cursor: pointer;
      padding: ${e.menuItemPadding};
      align-items: center;
      font-size: 0.9rem;

      &:hover {
        background-color: ${e.menuItemHoverBackground};
      }
    `}
  }
`;function _n(){return o.exports.createElement("svg",{id:"light",enableBackground:"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg"},o.exports.createElement("g",null,o.exports.createElement("path",{d:"m12 6c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})),o.exports.createElement("g",null,o.exports.createElement("path",{d:"m12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})),o.exports.createElement("g",null,o.exports.createElement("path",{d:"m12 24c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"})))}function Qe({items:e=[],isVisible:n,theme:t}){let[i,r]=o.exports.useState(!1),a=o.exports.useRef(null),s=o.exports.useRef(null),{styles:l,attributes:c,update:u}=Be(a.current,s.current,{placement:"bottom",modifiers:[{name:"preventOverflow",enabled:!0},{name:"offset",enabled:!0,options:{offset:[-10,10]}}]});o.exports.useEffect(()=>(document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}),[]);function m(E){var p,C;let y=E.target;((p=a.current)==null?void 0:p.contains(y))||((C=s.current)==null?void 0:C.contains(y))||r(!1)}function d(){r(!i),u==null||u()}function x(E,p){E.stopPropagation(),p(),r(!1)}return o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Bn,{"aria-label":"More",ref:a,dropdownTheme:t,style:{visibility:n?"visible":"hidden"},onClick:d},o.exports.createElement(_n,null)),o.exports.createElement(zn,O({ref:s,style:l.popper},c.popper),o.exports.createElement(Fn,{style:l.offset,visible:i,dropdownTheme:t},e.map(E=>o.exports.createElement(Wn,{key:E.name,"data-name":E.name,onClick:p=>{x(p,E.action)}},E.name)))))}function Un({style:e={}}={}){return o.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",style:O({},e)},o.exports.createElement("circle",{cx:"50",cy:"50",r:"50"}))}function Z(e,...n){if(!e)return null;let t=e(...n);return typeof t=="string"?o.exports.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):t}function jn({loaderRef:e}){return o.exports.createElement("div",{ref:e},o.exports.createElement(Ae,null,o.exports.createElement(Oe,null,o.exports.createElement(H,{circle:!0})),o.exports.createElement(De,null,o.exports.createElement(Me,null,o.exports.createElement(H,null,"\xA0")),o.exports.createElement(Le,null,o.exports.createElement(H,null,"\xA0")))),o.exports.createElement(Ae,null,o.exports.createElement(Oe,null,o.exports.createElement(H,{circle:!0})),o.exports.createElement(De,null,o.exports.createElement(Me,null,o.exports.createElement(H,null,"\xA0")),o.exports.createElement(Le,null,o.exports.createElement(H,null,"\xA0")))))}function Gn(e){let{heading:n,description:t,imageUrl:i,clickableUrl:r,placeholderImage:a,read:s,time:l,id:c,data:u,renderNotificationBody:m,isMobile:d,onFeedItemClick:x,markAsClicked:E,deleteNotification:p}=e,[C,y]=o.exports.useState(!1),[k,T]=o.exports.useState(!1),$=o.exports.useRef(null),I=o.exports.useMemo(()=>s?[{name:"Delete",action:p}]:[{name:"Delete",action:p},{name:"Mark As Read",action:E}],[s]),R=()=>{y(!0)},N=()=>{y(!1)},D=_=>{var U;if(!((U=$.current)!=null&&U.contains(_.target))){if(x){x(_,xe(O({url:r},e),{markAsClicked:E}));return}!r||(E(),window.open(r,"__blank"))}},W=()=>i||a;return o.exports.createElement(On,{clickable:r!=null,onMouseEnter:R,onMouseLeave:N,onFocus:R,onBlur:N,onClick:D},o.exports.createElement(Dn,{src:W(),onError:()=>{T(!0)}}),o.exports.createElement(qe,null,Z(m,e)||o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Ye,{dangerouslySetInnerHTML:{__html:n}}),o.exports.createElement(Je,{dangerouslySetInnerHTML:{__html:t}}),o.exports.createElement(Mn,null,l))),o.exports.createElement(Ln,{ref:$},o.exports.createElement(Qe,{items:I,isVisible:d||C,theme:ye.dropdown}),o.exports.createElement(Un,{style:{visibility:s?"hidden":"visible"}})))}var Hn=h.button`
  && {
    ${({theme:{jumpToTop:e}})=>b`
      display: flex;
      position: fixed;
      justify-items: center;
      align-content: center;
      box-shadow: ${e.shadow};
      border-width: 0;
      border-radius: ${e.borderRadius};
      margin: ${e.margin};
      padding: ${e.padding};
      box-sizing: border-box;
      outline: none;
      user-select: none;
      cursor: pointer;
      background-color: ${e.background};
      transition: ${e.transition};
      &:hover {
      }

      svg {
        height: ${e.iconSize};
        width: ${e.iconSize};
        fill: ${e.iconFill};
      }
    `}
  }
`;function Kn(){return o.exports.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 330 330"},o.exports.createElement("g",{id:"XMLID_85_"},o.exports.createElement("path",{id:"XMLID_86_",d:`M25.607,190.607L164.997,51.214l139.396,139.393C307.323,193.536,311.161,195,315,195
		c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213l-150.003-150C172.79,16.58,168.976,15,164.997,15
		s-7.794,1.581-10.607,4.394l-149.997,150c-5.858,5.858-5.858,15.355,0,21.213C10.251,196.465,19.749,196.465,25.607,190.607z`}),o.exports.createElement("path",{id:"XMLID_87_",d:`M175.603,139.393c-2.813-2.813-6.628-4.393-10.606-4.393c-3.979,0-7.794,1.581-10.607,4.394l-149.996,150
		c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213-0.001l139.39-139.393l139.397,139.394
		C307.323,313.536,311.161,315,315,315c3.839,0,7.678-1.464,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L175.603,139.393z`})),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null),o.exports.createElement("g",null))}function Vn({onClick:e}){return o.exports.createElement(Hn,{"aria-label":"Jump to Top",onClick:e},o.exports.createElement(Kn,null))}var Xn="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjUwIiBmaWxsPSJyZ2JhKDAsMTkxLDE2NiwuMykiIC8+Cjwvc3ZnPg==",et=150,Zn={transition:`opacity ${et}ms ease-in-out`,opacity:0},qn={entering:{opacity:1},entered:{opacity:1},exiting:{opacity:0},exited:{opacity:0}},Yn=e=>o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(An,null),o.exports.createElement(Tn,null,e)),Jn=(e,n,t,i,r,a,s,l)=>Z(n,e)||o.exports.createElement(Gn,{heading:e.heading,clickableUrl:e.clickableUrl,description:e.description,imageUrl:e.imageUrl,read:e.clickedAt!=null,time:e.time,placeholderImage:t,key:e.id,id:e.id,data:e.data,markAsClicked:()=>s(e.id),deleteNotification:()=>a(e.id),isMobile:i,onFeedItemClick:r,renderNotificationBody:l});function Qn({empty:e=!1,renderCustomPlaceholderContent:n,renderCustomNotificationContent:t,renderNotificationBody:i,notifications:r=[],placeholderText:a="Shh! It's quiet around here..."}){var s;let l=Ee(),{onNotificationScroll:c,jumpToTop:u,showJumpToTop:m}=((s=l.useJumpToTop)==null?void 0:s.call(l))||{},{placeholderImage:d=Xn}=l,x=l.isMobile||!1,E=l.onFeedItemClick,p=l.setLoaderRef,C=l.hasMore,y=l.deleteNotification,k=l.markAsRead,T=$=>{var I;let R=(I=$.currentTarget.parentNode)==null?void 0:I.parentElement;u==null||u(R)};return o.exports.createElement(Rn,{id:"engagespot-scroll-root",empty:e,onScroll:c},o.exports.createElement(mn,{in:m,timeout:et},$=>o.exports.createElement(Nn,{style:O(O({},Zn),qn[$])},o.exports.createElement(Vn,{onClick:T}))),e?Z(n)||Yn(a):o.exports.createElement(o.exports.Fragment,null,r.map($=>Jn($,t,d,x,E,y,k,i)),C&&o.exports.createElement(jn,{loaderRef:p})))}function tt(){return o.exports.createElement("svg",{viewBox:"0 0 10 10",xmlns:"http://www.w3.org/2000/svg"},o.exports.createElement("rect",{x:"0.925781",width:"12.8327",height:"1.30946",transform:"rotate(45 0.925781 0)"}),o.exports.createElement("rect",{y:"9.07404",width:"12.8327",height:"1.30946",transform:"rotate(-45 0 9.07404)"}))}var er=h.input`
  && {
    ${({theme:{toggle:e}})=>b`
      /* Toggle Button */
      & {
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        position: relative;
        border: 0;
        outline: 0;
        cursor: pointer;
        margin: 10px;
        transform: scale(0.7);
      }

      /* To create surface of toggle button */
      &:after {
        content: '';
        width: 60px;
        height: 28px;
        display: inline-block;
        background: ${e.background};
        border-radius: 18px;
        clear: both;
      }

      /* Contents before checkbox to create toggle handle */
      &:before {
        content: '';
        width: 32px;
        height: 32px;
        display: block;
        position: absolute;
        left: -1px;
        top: -2px;
        transform: scale(0.7);
        border-radius: 50%;
        background: ${e.dotColor};
      }

      /* Shift the handle to left on check event */
      &:checked:before {
        left: 29px;
      }
      /* Background color when toggle button will be active */
      &:checked:after {
        background: ${e.activeColor};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
      }

      &,
      &:before,
      &:after,
      &:checked:before,
      &:checked:after {
        transition: ease 0.3s;
        -webkit-transition: ease 0.3s;
        -moz-transition: ease 0.3s;
        -o-transition: ease 0.3s;
      }
    `}
  }
`,tr=h.div`
  && {
    ${({theme:{preference:e,colors:n}})=>b`
      display: flex;
      position: relative;
      flex: 1;
      flex-direction: column;
      overflow-y: auto;
      height: ${e.height};
      align-items: stretch;
      justify-content: flex-start;
      padding: ${e.padding};
      color: ${e.fontColor};
      background: ${e.background};
    `}
  }
`,nr=h.h3`
  && {
    ${({theme:{preference:e,colors:n}})=>b`
      font-size: 1rem;
      font-weight: 'bold';
      margin: 0.2rem 0rem;
    `}
  }
`,rr=h.label`
  && {
    ${({theme:{preference:e,colors:n}})=>b`
      font-size: 0.8rem;
      margin: 0.4rem 0rem 0 0;
    `}
  }
`,ir=h.div`
  && {
    ${({theme:{preference:e,colors:n}})=>b`
      display: grid;
      grid-template-columns: repeat(2, minmax(min-content, 1fr));
      gap: 1.2rem;
      align-items: flex-start;
      padding: 0.5rem 0.7rem;
      margin: 0.8rem 0;
    `}
  }
`,or=h.div`
  && {
    ${({theme:{preference:e}})=>b`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.4rem;

      label {
        margin: 0 0.2rem 0 0;
      }
    `}
  }
`,ar=h.button`
  && {
    ${({theme:{preference:e}})=>b`
      margin-top: 3px;
    `}
  }
`,sr=h.div`
  && {
    ${({theme:{preferenceModal:e,header:n}})=>b`
      background-color: ${e.overlayBackground};
      opacity: ${e.overlayOpacity};
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1000;
      margin: ${n.height} 0 0 0;
    `}
  }
`,lr=h.div`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      position: absolute;
      height: ${e.height};
      bottom: 0;
      left: 0;
      z-index: 1500;
      border-radius: ${e.borderRadius};
    `}
  }
`,cr=h.div`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      border-radius: ${e.borderRadius};
      background-color: ${e.background};
      backdrop-filter: ${e.backdropFilter};
      padding: ${e.padding};
      position: relative;
    `}
  }
`,ur=h.div`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      display: flex;
      margin: ${e.headerMargin};
    `}
  }
`,dr=h.h6`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      font-size: ${e.headerFontSize};
      color: ${e.headingColor};
      margin-right: auto;
    `}
  }
`,pr=h.button`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      position: absolute;
      right: 1rem;
      top: 0.5rem;

      svg {
        height: ${e.closeButtonSize};
        width: ${e.closeButtonSize};
        fill: ${e.closeButtonColor};
      }
    `}
  }
`,fr=h.p`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      color: ${e.textPrimaryColor};
      margin: ${e.textPrimaryMargin};
      font-size: ${e.textPrimaryFontSize};
      text-align: ${e.textAlign};
    `}
  }
`,hr=h.p`
  && {
    ${({theme:{preferenceModal:e}})=>b`
      color: ${e.textSecondaryColor};
      margin: ${e.textSecondaryMargin};
      font-size: ${e.textSecondaryFontSize};
      text-align: ${e.textAlign};
    `}
  }
`,mr=h.button`
  && {
    ${({theme:{preferenceModal:e,colors:n}})=>b`
      color: ${e.buttonPrimaryColor};
      font-weight: ${e.primaryButtonFontWeight};
      background-color: ${e.buttonPrimaryBackgroundColor};
      padding: ${e.primaryButtonPadding};
      border-radius: ${e.primaryButtonBorderRadius};
      margin: ${e.primaryButtonMargin};
      transition: ${e.primaryButtonTransition};

      &:hover {
        background-color: ${e.buttonPrimaryHoverBackgroundColor};
      }
    `}
  }
`,gr=h.button`
  && {
    ${({theme:{preferenceModal:e}})=>b`
        transition: ${e.primaryButtonTransition};
        color: ${e.buttonSecondaryColor};
        background-color: ${e.buttonSecondaryBackgroundColor};

        &:hover {
          background-color: ${e.buttonSecondaryHoverBackgroundColor};
        }
      `}
  }
`;function br({enableWebPush:e,webPushState:n}){let t=Ee(),{preferences:i,setPreferences:r}=t,a=(c,u)=>{let m=u.target.checked;c.channel==="webPush"&&n!=="granted"&&e(),r==null||r([{categoryId:c.categoryId,channels:[{enabled:m,channel:c.channel}]}])},s=i==null?void 0:i.channels.filter(c=>c.id!=="sms"),l=i==null?void 0:i.userPreferences;return o.exports.createElement(tr,null,s==null?void 0:s.map(c=>o.exports.createElement(o.exports.Fragment,{key:c==null?void 0:c.id},o.exports.createElement(nr,null,c==null?void 0:c.name),(c==null?void 0:c.id)==="webPush"&&n==="denied"?o.exports.createElement(rr,null,"Web Push is currently disabled on the browser. Enable it manually by going into the browser settings"):null,o.exports.createElement(ir,null,l==null?void 0:l.map(u=>o.exports.createElement(or,{key:u.category.id},o.exports.createElement("label",{htmlFor:`${c.id}-${u.category.id}`},u.category.name),o.exports.createElement(er,{type:"checkbox",id:`${c.id}-${u.category.id}`,checked:u.channels[c.id].enabled,disabled:c.id==="webPush"&&["denied"].includes(n),onChange:m=>a({categoryId:u.category.id,channel:c.id},m)})))))))}function vr({closeModal:e,allowNotifications:n}){return o.exports.createElement(lr,null,o.exports.createElement(cr,null,o.exports.createElement(ur,null,o.exports.createElement(dr,null,"Enable Desktop Notifications"),o.exports.createElement(pr,{onClick:e},o.exports.createElement(tt,null))),o.exports.createElement(fr,null,"Allow Engagespot to send you push notification when you have new messages and offers"),o.exports.createElement(mr,{onClick:n},"Yes"),o.exports.createElement(gr,{onClick:e},"Maybe later"),o.exports.createElement(hr,null,"You can change your preferences in Settings later, if needed")))}var xr=h.div`
  && {
    ${({theme:{footer:e}})=>b`
      display: flex;
      height: ${e.height};
      border-top: ${e.border};
      align-items: center;
      justify-content: center;
      padding: ${e.padding};
      font-size: ${e.fontSize};
      color: ${e.fontColor};
      background: ${e.background};
      box-sizing: border-box;
    `}
  }
`,yr=h.h3`
  && {
    ${({theme:{footer:e}})=>b`
      font-size: ${e.fontSize};
      font-weight: ${e.fontWeight};
      color: ${e.fontColor};
    `}
  }
`,Er=h.a`
  && {
    ${({theme:{footer:e}})=>b`
      font-size: ${e.fontSize};
      color: ${e.fontColor};
      margin: ${e.linkMargin};
      cursor: pointer;

      svg {
        height: ${e.linkSize};
        width: ${e.linkSize};
        border-radius: ${e.linkRadius};
      }
    `}
  }
`,Sr=h.button`
  && {
    ${({theme:{footer:e}})=>b`
      cursor: pointer;
      margin: ${e.preferenceButtonMargin};
      padding: ${e.preferenceButtonPadding};
      &:hover {
        transition: ${e.preferenceButtonHoverTransition};
        background: ${e.preferenceButtonHoverBackground};
      }

      svg {
        height: ${e.preferenceButtonSize};
        width: ${e.preferenceButtonSize};
        fill: ${e.preferenceButtonColor};
      }
    `}
  }
`;function wr(){return o.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50pt",height:"50pt",viewBox:"0 0 50 50"},o.exports.createElement("path",{d:"M2.445 0h45.11A2.444 2.444 0 0150 2.445v45.11A2.444 2.444 0 0147.555 50H2.445A2.444 2.444 0 010 47.555V2.445A2.444 2.444 0 012.445 0zm0 0",fill:"#1abc9c"}),o.exports.createElement("path",{d:"M25.879 24.121a23.133 23.133 0 00-16.465-6.82 2.72 2.72 0 00-2.719 2.719 2.72 2.72 0 002.72 2.718c4.769 0 9.25 1.856 12.62 5.227a17.728 17.728 0 015.227 12.62 2.72 2.72 0 105.437 0 23.133 23.133 0 00-6.82-16.464zm0 0",fill:"#fff"}),o.exports.createElement("path",{d:"M41.672 40.586c.004-8.617-3.352-16.715-9.445-22.809-6.094-6.093-14.196-9.449-22.813-9.449a2.72 2.72 0 100 5.438c7.164 0 13.902 2.789 18.965 7.855 5.066 5.067 7.855 11.8 7.855 18.965a2.717 2.717 0 002.72 2.703 2.717 2.717 0 002.718-2.703zm0 0",fill:"#fff"}))}function Pr(){return o.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50"},o.exports.createElement("path",{d:"M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"}))}var kr=()=>o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(Er,{href:"https://engagespot.co",target:"__blank","aria-label":"Engagespot Logo"},o.exports.createElement(wr,null)),o.exports.createElement(yr,null,"Powered by Engagespot"));function Cr({footerContent:e,showPreferences:n}){let{togglePreference:t}=Ee(),i=()=>{t==null||t(r=>!r)};return o.exports.createElement(xr,null,e==null?void 0:e(),n?o.exports.createElement(Sr,{onClick:i},o.exports.createElement(Pr,null)):null)}function Ir(){return o.exports.createElement("svg",{width:"20",height:"13",viewBox:"0 0 20 13",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.exports.createElement("path",{d:"M0.6129 5.79701C0.951277 5.45864 1.49989 5.45864 1.83827 5.79701L7.02994 10.9887C7.36832 11.3271 7.36831 11.8757 7.02994 12.2141V12.2141C6.69156 12.5524 6.14294 12.5524 5.80457 12.2141L0.612899 7.02238C0.274522 6.68401 0.274523 6.13539 0.6129 5.79701V5.79701Z",fill:"white"}),o.exports.createElement("path",{d:"M0.612686 7.0428C0.274309 6.70442 0.274309 6.15581 0.612686 5.81743L5.81742 0.612699C6.15579 0.274322 6.70441 0.274322 7.04279 0.612699V0.612699C7.38117 0.951076 7.38117 1.49969 7.04279 1.83807L1.83806 7.0428C1.49968 7.38118 0.951063 7.38118 0.612686 7.0428V7.0428Z",fill:"white"}),o.exports.createElement("path",{d:"M20 6.15465C20 6.63319 19.6121 7.02112 19.1335 7.02112L1.97744 7.02112L1.97744 5.28818L19.1335 5.28818C19.6121 5.28818 20 5.67611 20 6.15465V6.15465Z",fill:"white"}))}function $r({notifications:e=[],panelProps:n,arrowProps:t,route:i,webPushState:r,setRoute:a,panelOffsetProps:s,footerContent:l,renderNotificationContent:c,renderNotificationBody:u,renderEmptyPlaceholderImage:m,togglePanelVisibility:d,visible:x=!1,showPreferences:E,enableWebPush:p,headerDropdownItems:C=[],headerText:y="Notifications"}){let k=i==="home"?y:"Preferences",T=()=>{a("home")},$=(E?[{name:"Preferences",action:()=>{a("preference")}}]:r==="prompt"?[{name:"Enable Desktop Notifications",action:p}]:[]).concat(C),[I,R]=o.exports.useState(!0),[N,D,W]=pt("showNotificationOverlay","true"),_=()=>{R(!1),D("false")},U=()=>{R(!1),p(),D("false")},q=()=>I&&N=="true"?o.exports.createElement(o.exports.Fragment,null,o.exports.createElement(sr,null),o.exports.createElement(vr,{allowNotifications:U,closeModal:_})):null,le=j=>j==="home"?o.exports.createElement(Qn,{notifications:e,empty:e.length===0,renderCustomNotificationContent:c,renderNotificationBody:u,renderCustomPlaceholderContent:m}):j==="preference"?o.exports.createElement(br,{enableWebPush:p,webPushState:r}):null,Y=(j,Se)=>o.exports.createElement($n,null,o.exports.createElement(ar,{onClick:T,style:{visibility:j==="preference"?"visible":"hidden"}},o.exports.createElement(Ir,null)),o.exports.createElement(Cn,null,Se),$.length>0?o.exports.createElement(Qe,{items:$,isVisible:!0,theme:ye.headerDropdown}):null,o.exports.createElement(In,{onClick:()=>{d==null||d()}},o.exports.createElement(tt,null)));return o.exports.createElement(Sn,O({},n()),o.exports.createElement(Pn,O({},t())),o.exports.createElement(wn,xe(O({},s()),{visible:x}),q(),Y(i,k),le(i),o.exports.createElement(Cr,{footerContent:l,showPreferences:E})))}var Rr=h.button`
  && {
    ${({theme:{notificationButton:e},buttonType:n})=>b`
      display: flex;
      justify-items: center;
      align-content: center;
      box-shadow: ${n==="floating"&&e.floatingButtonShadow};
      border-width: ${e.borderWidth};
      border-radius: ${n==="floating"?e.floatingButtonRadius:e.normalButtonRadius};
      margin: ${e.margin};
      padding: ${e.padding};
      box-sizing: border-box;
      outline: ${e.outline};
      user-select: none;
      cursor: pointer;
      position: relative;
      background-color: ${e.background};
      transition: ${e.transition};

      &:hover {
        background-color: ${e.hoverBackground};
      }

      svg {
        height: ${e.iconSize};
        width: ${e.iconSize};
        stroke: ${e.iconFill};
      }
    `}
`,Tr=h.span`
  && {
    ${({theme:{unreadBadgeCount:e}})=>b`
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${e.background};
      color: ${e.color};
      position: absolute;
      font-size: ${e.fontSize};
      border-radius: ${e.borderRadius};
      inset: ${e.inset};
      height: ${e.size};
      width: ${e.size};
    `}
  }
`;function Nr({count:e}){return o.exports.createElement(Tr,null,e)}function Ar(){return o.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",role:"presentation"},o.exports.createElement("g",{transform:"translate(4.615 2.514)"},o.exports.createElement("path",{d:"M7.382,0C2.947,0,1.021,4.015,1.021,6.67c0,1.984.288,1.4-.81,3.82-1.341,3.449,4.051,4.858,7.171,4.858s8.511-1.41,7.171-4.858c-1.1-2.42-.81-1.836-.81-3.82C13.743,4.015,11.815,0,7.382,0Z",transform:"translate(0 0)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"}),o.exports.createElement("path",{d:"M4.62,0A2.992,2.992,0,0,1,0,0",transform:"translate(5.071 17.998)",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5px",fill:"transparent"})))}function Or({type:e="normal",buttonProps:n,unreadCount:t,panelOpen:i,renderNotificationIcon:r}){return o.exports.createElement(Rr,O({buttonType:e,"aria-label":"Notifications"},n==null?void 0:n()),t&&!i?o.exports.createElement(Nr,{count:t}):null,r?Z(r):o.exports.createElement(Ar,null))}var Dr=h.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  span,
  p,
  a,
  ol,
  ul,
  li,
  label,
  article,
  aside,
  footer,
  header,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    vertical-align: baseline;
    line-height: normal;
    text-align: left;
    box-sizing: border-box;
  }

  a {
    cursor: pointer;
  }

  button {
    background: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
  }
`,Mr={title:"heading",message:"description",icon:"imageUrl",url:"clickableUrl",id:"id",created:"time",clickedAt:"clickedAt",data:"data",markAsClicked:"markAsClicked",deleteNotification:"deleteNotification"},Lr=(e,n)=>Mr[n],Br=e=>ct(e,Lr);function Jr(e){var n=e,{theme:t,apiKey:i,panelOnly:r=!1,headerText:a,feedItemPlaceholderImage:s,userId:l,panelOpenByDefault:c=!1,renderFooterContent:u,renderNotificationIcon:m,renderEmptyPlaceholderImage:d,renderNotificationContent:x,renderNotificationBody:E,onFeedItemClick:p,headerDropdownItems:C}=n,y=xn(n,["theme","apiKey","panelOnly","headerText","feedItemPlaceholderImage","userId","panelOpenByDefault","renderFooterContent","renderNotificationIcon","renderEmptyPlaceholderImage","renderNotificationContent","renderNotificationBody","onFeedItemClick","headerDropdownItems"]);let k=o.exports.useRef();k.current=document.getElementById("engagespot-scroll-root");let{notifications:T,setLoaderRef:$,hasMore:I,isMobile:R,panelVisibility:N,getButtonProps:D,getPanelProps:W,getArrowProps:_,getPanelOffsetProps:U,togglePanelVisibility:q,useJumpToTop:le,hideBranding:Y,enableWebPush:j,allowWebPush:Se,webPushState:nt,deleteNotification:rt,markAsRead:it,unreadCount:ot,preferences:ce,getPreferences:zr,setPreferences:at}=Yt(xe(O({apiKey:i,userId:l},y),{floatingPanelOptions:{panelOpenByDefault:c},plugins:[He,be,ve],scrollRoot:k.current})),[we,Pe]=o.exports.useState(!1),st=J=>{Pe(J==="preference")},lt=()=>Y&&u?Z(u):Y&&!u?null:kr();return o.exports.createElement(En,{theme:t,state:{panelVisibility:N,placeholderImage:s,togglePanelVisibility:q,useJumpToTop:le,isMobile:R,preference:we,togglePreference:Pe,onFeedItemClick:p,setLoaderRef:$,hasMore:I,deleteNotification:rt,markAsRead:it,preferences:ce,setPreferences:at}},o.exports.createElement(Dr,null,(()=>{let J=()=>o.exports.createElement($r,{visible:N,route:we?"preference":"home",setRoute:st,panelProps:W,panelOffsetProps:U,arrowProps:_,showPreferences:ce.userPreferences&&ce.userPreferences.length>0,renderNotificationContent:x,renderNotificationBody:E,renderEmptyPlaceholderImage:d,togglePanelVisibility:q,enableWebPush:j,webPushState:nt,footerContent:lt,headerText:a,headerDropdownItems:C||[],notifications:T?T.map(Br):[]});return o.exports.createElement(o.exports.Fragment,null,!r&&o.exports.createElement(Or,{buttonProps:D,unreadCount:ot,panelOpen:N,renderNotificationIcon:m}),R?te.createPortal(J(),document.body):J())})()))}export{Jr as E,qr as F,Yr as a,yt as j};
