import{E as x}from"./embla-carousel.021d13b3.js";var I={active:!0,breakpoints:{},delay:4e3,jump:!1,playOnInit:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,stopOnLastSnap:!1,rootNode:null};function m(y){var f=x.optionsHandler(),O=f.merge(I,m.globalOptions),n,t,s,a=0,p=!1;function g(e){t=e,n=f.atMedia(d.options),p=n.jump,s=n.stopOnInteraction?u:o;var i=t.internalEngine().eventStore,c=t.rootNode(),v=n.rootNode&&n.rootNode(c)||c;t.on("pointerDown",s),n.stopOnInteraction||t.on("pointerUp",r),n.stopOnMouseEnter&&(i.add(v,"mouseenter",s),n.stopOnInteraction||i.add(v,"mouseleave",r)),i.add(document,"visibilitychange",function(){if(document.visibilityState==="hidden")return o();r()}),i.add(window,"pagehide",function(b){b.persisted&&o()}),n.playOnInit&&l()}function u(){t.off("pointerDown",s),n.stopOnInteraction||t.off("pointerUp",r),o(),a=0}function l(e){o(),typeof e<"u"&&(p=e),a=window.setTimeout(w,n.delay)}function o(){!a||window.clearTimeout(a)}function r(){!a||(o(),l())}function w(){var e=t.internalEngine().index,i=n.stopOnLastSnap&&e.get()===e.max;if(i)return u();t.canScrollNext()?t.scrollNext(p):t.scrollTo(0,p),l()}var d={name:"autoplay",options:f.merge(O,y),init:g,destroy:u,play:l,stop:o,reset:r};return d}m.globalOptions=void 0;export{m as A};
