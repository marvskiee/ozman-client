import{r as f}from"./react.83df5ab8.js";import{r as D}from"./react-fast-compare.28c49cfe.js";import{d as ie}from"./deepmerge.39b49f80.js";import{t as be,c as Ge,a as Fe,i as Te}from"./lodash-es.1492c27c.js";import{w as Ie}from"./tiny-warning.49191a0e.js";import{h as We}from"./hoist-non-react-statics.92efb27d.js";function F(){return F=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},F.apply(this,arguments)}function Re(r,n){r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n}function U(r,n){if(r==null)return{};var o={},a=Object.keys(r),e,i;for(i=0;i<a.length;i++)e=a[i],!(n.indexOf(e)>=0)&&(o[e]=r[e]);return o}function ge(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}var Ae=function(n){return Array.isArray(n)&&n.length===0},I=function(n){return typeof n=="function"},K=function(n){return n!==null&&typeof n=="object"},$e=function(n){return String(Math.floor(Number(n)))===n},re=function(n){return Object.prototype.toString.call(n)==="[object String]"},Ce=function(n){return f.exports.Children.count(n)===0},te=function(n){return K(n)&&I(n.then)};function T(r,n,o,a){a===void 0&&(a=0);for(var e=be(n);r&&a<e.length;)r=r[e[a++]];return r===void 0?o:r}function w(r,n,o){for(var a=Fe(r),e=a,i=0,u=be(n);i<u.length-1;i++){var l=u[i],h=T(r,u.slice(0,i+1));if(h&&(K(h)||Array.isArray(h)))e=e[l]=Fe(h);else{var m=u[i+1];e=e[l]=$e(m)&&Number(m)>=0?[]:{}}}return(i===0?r:e)[u[i]]===o?r:(o===void 0?delete e[u[i]]:e[u[i]]=o,i===0&&o===void 0&&delete a[u[i]],a)}function ke(r,n,o,a){o===void 0&&(o=new WeakMap),a===void 0&&(a={});for(var e=0,i=Object.keys(r);e<i.length;e++){var u=i[e],l=r[u];K(l)?o.get(l)||(o.set(l,!0),a[u]=Array.isArray(l)?[]:{},ke(l,n,o,a[u])):a[u]=n}return a}var z=f.exports.createContext(void 0);z.displayName="FormikContext";var Ke=z.Provider,ze=z.Consumer;function _e(){var r=f.exports.useContext(z);return r||Ie(!1),r}function Ye(r,n){switch(n.type){case"SET_VALUES":return F({},r,{values:n.payload});case"SET_TOUCHED":return F({},r,{touched:n.payload});case"SET_ERRORS":return D(r.errors,n.payload)?r:F({},r,{errors:n.payload});case"SET_STATUS":return F({},r,{status:n.payload});case"SET_ISSUBMITTING":return F({},r,{isSubmitting:n.payload});case"SET_ISVALIDATING":return F({},r,{isValidating:n.payload});case"SET_FIELD_VALUE":return F({},r,{values:w(r.values,n.payload.field,n.payload.value)});case"SET_FIELD_TOUCHED":return F({},r,{touched:w(r.touched,n.payload.field,n.payload.value)});case"SET_FIELD_ERROR":return F({},r,{errors:w(r.errors,n.payload.field,n.payload.value)});case"RESET_FORM":return F({},r,n.payload);case"SET_FORMIK_STATE":return n.payload(r);case"SUBMIT_ATTEMPT":return F({},r,{touched:ke(r.values,!0),isSubmitting:!0,submitCount:r.submitCount+1});case"SUBMIT_FAILURE":return F({},r,{isSubmitting:!1});case"SUBMIT_SUCCESS":return F({},r,{isSubmitting:!1});default:return r}}var N={},$={};function qe(r){var n=r.validateOnChange,o=n===void 0?!0:n,a=r.validateOnBlur,e=a===void 0?!0:a,i=r.validateOnMount,u=i===void 0?!1:i,l=r.isInitialValid,h=r.enableReinitialize,m=h===void 0?!1:h,x=r.onSubmit,g=U(r,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),c=F({validateOnChange:o,validateOnBlur:e,validateOnMount:u,onSubmit:x},g),b=f.exports.useRef(c.initialValues),k=f.exports.useRef(c.initialErrors||N),C=f.exports.useRef(c.initialTouched||$),_=f.exports.useRef(c.initialStatus),R=f.exports.useRef(!1),V=f.exports.useRef({});f.exports.useEffect(function(){return R.current=!0,function(){R.current=!1}},[]);var G=f.exports.useReducer(Ye,{values:c.initialValues,errors:c.initialErrors||N,touched:c.initialTouched||$,status:c.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),S=G[0],E=G[1],oe=f.exports.useCallback(function(t,s){return new Promise(function(d,p){var v=c.validate(t,s);v==null?d(N):te(v)?v.then(function(y){d(y||N)},function(y){p(y)}):d(v)})},[c.validate]),Y=f.exports.useCallback(function(t,s){var d=c.validationSchema,p=I(d)?d(s):d,v=s&&p.validateAt?p.validateAt(s,t):Qe(t,p);return new Promise(function(y,A){v.then(function(){y(N)},function(L){L.name==="ValidationError"?y(Je(L)):A(L)})})},[c.validationSchema]),ue=f.exports.useCallback(function(t,s){return new Promise(function(d){return d(V.current[t].validate(s))})},[]),le=f.exports.useCallback(function(t){var s=Object.keys(V.current).filter(function(p){return I(V.current[p].validate)}),d=s.length>0?s.map(function(p){return ue(p,T(t,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(d).then(function(p){return p.reduce(function(v,y,A){return y==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||y&&(v=w(v,s[A],y)),v},{})})},[ue]),Me=f.exports.useCallback(function(t){return Promise.all([le(t),c.validationSchema?Y(t):{},c.validate?oe(t):{}]).then(function(s){var d=s[0],p=s[1],v=s[2],y=ie.all([d,p,v],{arrayMerge:Xe});return y})},[c.validate,c.validationSchema,le,oe,Y]),O=M(function(t){return t===void 0&&(t=S.values),E({type:"SET_ISVALIDATING",payload:!0}),Me(t).then(function(s){return R.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:s})),s})});f.exports.useEffect(function(){u&&R.current===!0&&D(b.current,c.initialValues)&&O(b.current)},[u,O]);var j=f.exports.useCallback(function(t){var s=t&&t.values?t.values:b.current,d=t&&t.errors?t.errors:k.current?k.current:c.initialErrors||{},p=t&&t.touched?t.touched:C.current?C.current:c.initialTouched||{},v=t&&t.status?t.status:_.current?_.current:c.initialStatus;b.current=s,k.current=d,C.current=p,_.current=v;var y=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!t&&!!t.isSubmitting,errors:d,touched:p,status:v,values:s,isValidating:!!t&&!!t.isValidating,submitCount:!!t&&!!t.submitCount&&typeof t.submitCount=="number"?t.submitCount:0}})};if(c.onReset){var A=c.onReset(S.values,Ee);te(A)?A.then(y):y()}else y()},[c.initialErrors,c.initialStatus,c.initialTouched]);f.exports.useEffect(function(){R.current===!0&&!D(b.current,c.initialValues)&&(m&&(b.current=c.initialValues,j()),u&&O(b.current))},[m,c.initialValues,j,u,O]),f.exports.useEffect(function(){m&&R.current===!0&&!D(k.current,c.initialErrors)&&(k.current=c.initialErrors||N,E({type:"SET_ERRORS",payload:c.initialErrors||N}))},[m,c.initialErrors]),f.exports.useEffect(function(){m&&R.current===!0&&!D(C.current,c.initialTouched)&&(C.current=c.initialTouched||$,E({type:"SET_TOUCHED",payload:c.initialTouched||$}))},[m,c.initialTouched]),f.exports.useEffect(function(){m&&R.current===!0&&!D(_.current,c.initialStatus)&&(_.current=c.initialStatus,E({type:"SET_STATUS",payload:c.initialStatus}))},[m,c.initialStatus,c.initialTouched]);var se=M(function(t){if(V.current[t]&&I(V.current[t].validate)){var s=T(S.values,t),d=V.current[t].validate(s);return te(d)?(E({type:"SET_ISVALIDATING",payload:!0}),d.then(function(p){return p}).then(function(p){E({type:"SET_FIELD_ERROR",payload:{field:t,value:p}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:t,value:d}}),Promise.resolve(d))}else if(c.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),Y(S.values,t).then(function(p){return p}).then(function(p){E({type:"SET_FIELD_ERROR",payload:{field:t,value:p[t]}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),xe=f.exports.useCallback(function(t,s){var d=s.validate;V.current[t]={validate:d}},[]),Oe=f.exports.useCallback(function(t){delete V.current[t]},[]),ce=M(function(t,s){E({type:"SET_TOUCHED",payload:t});var d=s===void 0?e:s;return d?O(S.values):Promise.resolve()}),fe=f.exports.useCallback(function(t){E({type:"SET_ERRORS",payload:t})},[]),de=M(function(t,s){var d=I(t)?t(S.values):t;E({type:"SET_VALUES",payload:d});var p=s===void 0?o:s;return p?O(d):Promise.resolve()}),W=f.exports.useCallback(function(t,s){E({type:"SET_FIELD_ERROR",payload:{field:t,value:s}})},[]),B=M(function(t,s,d){E({type:"SET_FIELD_VALUE",payload:{field:t,value:s}});var p=d===void 0?o:d;return p?O(w(S.values,t,s)):Promise.resolve()}),pe=f.exports.useCallback(function(t,s){var d=s,p=t,v;if(!re(t)){t.persist&&t.persist();var y=t.target?t.target:t.currentTarget,A=y.type,L=y.name,Z=y.id,ee=y.value,He=y.checked,sr=y.outerHTML,Se=y.options,je=y.multiple;d=s||L||Z,p=/number|range/.test(A)?(v=parseFloat(ee),isNaN(v)?"":v):/checkbox/.test(A)?er(T(S.values,d),He,ee):Se&&je?Ze(Se):ee}d&&B(d,p)},[B,S.values]),q=M(function(t){if(re(t))return function(s){return pe(s,t)};pe(t)}),P=M(function(t,s,d){s===void 0&&(s=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:t,value:s}});var p=d===void 0?e:d;return p?O(S.values):Promise.resolve()}),ve=f.exports.useCallback(function(t,s){t.persist&&t.persist();var d=t.target,p=d.name,v=d.id,y=d.outerHTML,A=s||p||v;P(A,!0)},[P]),J=M(function(t){if(re(t))return function(s){return ve(s,t)};ve(t)}),he=f.exports.useCallback(function(t){I(t)?E({type:"SET_FORMIK_STATE",payload:t}):E({type:"SET_FORMIK_STATE",payload:function(){return t}})},[]),me=f.exports.useCallback(function(t){E({type:"SET_STATUS",payload:t})},[]),ye=f.exports.useCallback(function(t){E({type:"SET_ISSUBMITTING",payload:t})},[]),Q=M(function(){return E({type:"SUBMIT_ATTEMPT"}),O().then(function(t){var s=t instanceof Error,d=!s&&Object.keys(t).length===0;if(d){var p;try{if(p=we(),p===void 0)return}catch(v){throw v}return Promise.resolve(p).then(function(v){return R.current&&E({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(R.current)throw E({type:"SUBMIT_FAILURE"}),v})}else if(R.current&&(E({type:"SUBMIT_FAILURE"}),s))throw t})}),Ve=M(function(t){t&&t.preventDefault&&I(t.preventDefault)&&t.preventDefault(),t&&t.stopPropagation&&I(t.stopPropagation)&&t.stopPropagation(),Q().catch(function(s){console.warn("Warning: An unhandled error was caught from submitForm()",s)})}),Ee={resetForm:j,validateForm:O,validateField:se,setErrors:fe,setFieldError:W,setFieldTouched:P,setFieldValue:B,setStatus:me,setSubmitting:ye,setTouched:ce,setValues:de,setFormikState:he,submitForm:Q},we=M(function(){return x(S.values,Ee)}),Le=M(function(t){t&&t.preventDefault&&I(t.preventDefault)&&t.preventDefault(),t&&t.stopPropagation&&I(t.stopPropagation)&&t.stopPropagation(),j()}),De=f.exports.useCallback(function(t){return{value:T(S.values,t),error:T(S.errors,t),touched:!!T(S.touched,t),initialValue:T(b.current,t),initialTouched:!!T(C.current,t),initialError:T(k.current,t)}},[S.errors,S.touched,S.values]),Ue=f.exports.useCallback(function(t){return{setValue:function(d,p){return B(t,d,p)},setTouched:function(d,p){return P(t,d,p)},setError:function(d){return W(t,d)}}},[B,P,W]),Ne=f.exports.useCallback(function(t){var s=K(t),d=s?t.name:t,p=T(S.values,d),v={name:d,value:p,onChange:q,onBlur:J};if(s){var y=t.type,A=t.value,L=t.as,Z=t.multiple;y==="checkbox"?A===void 0?v.checked=!!p:(v.checked=!!(Array.isArray(p)&&~p.indexOf(A)),v.value=A):y==="radio"?(v.checked=p===A,v.value=A):L==="select"&&Z&&(v.value=v.value||[],v.multiple=!0)}return v},[J,q,S.values]),X=f.exports.useMemo(function(){return!D(b.current,S.values)},[b.current,S.values]),Be=f.exports.useMemo(function(){return typeof l<"u"?X?S.errors&&Object.keys(S.errors).length===0:l!==!1&&I(l)?l(c):l:S.errors&&Object.keys(S.errors).length===0},[l,X,S.errors,c]),Pe=F({},S,{initialValues:b.current,initialErrors:k.current,initialTouched:C.current,initialStatus:_.current,handleBlur:J,handleChange:q,handleReset:Le,handleSubmit:Ve,resetForm:j,setErrors:fe,setFormikState:he,setFieldTouched:P,setFieldValue:B,setFieldError:W,setStatus:me,setSubmitting:ye,setTouched:ce,setValues:de,submitForm:Q,validateForm:O,validateField:se,isValid:Be,dirty:X,unregisterField:Oe,registerField:xe,getFieldProps:Ne,getFieldMeta:De,getFieldHelpers:Ue,validateOnBlur:e,validateOnChange:o,validateOnMount:u});return Pe}function mr(r){var n=qe(r),o=r.component,a=r.children,e=r.render,i=r.innerRef;return f.exports.useImperativeHandle(i,function(){return n}),f.exports.createElement(Ke,{value:n},o?f.exports.createElement(o,n):e?e(n):a?I(a)?a(n):Ce(a)?null:f.exports.Children.only(a):null)}function Je(r){var n={};if(r.inner){if(r.inner.length===0)return w(n,r.path,r.message);for(var e=r.inner,o=Array.isArray(e),a=0,e=o?e:e[Symbol.iterator]();;){var i;if(o){if(a>=e.length)break;i=e[a++]}else{if(a=e.next(),a.done)break;i=a.value}var u=i;T(n,u.path)||(n=w(n,u.path,u.message))}}return n}function Qe(r,n,o,a){o===void 0&&(o=!1),a===void 0&&(a={});var e=ae(r);return n[o?"validateSync":"validate"](e,{abortEarly:!1,context:a})}function ae(r){var n=Array.isArray(r)?[]:{};for(var o in r)if(Object.prototype.hasOwnProperty.call(r,o)){var a=String(o);Array.isArray(r[a])===!0?n[a]=r[a].map(function(e){return Array.isArray(e)===!0||Te(e)?ae(e):e!==""?e:void 0}):Te(r[a])?n[a]=ae(r[a]):n[a]=r[a]!==""?r[a]:void 0}return n}function Xe(r,n,o){var a=r.slice();return n.forEach(function(i,u){if(typeof a[u]>"u"){var l=o.clone!==!1,h=l&&o.isMergeableObject(i);a[u]=h?ie(Array.isArray(i)?[]:{},i,o):i}else o.isMergeableObject(i)?a[u]=ie(r[u],i,o):r.indexOf(i)===-1&&a.push(i)}),a}function Ze(r){return Array.from(r).filter(function(n){return n.selected}).map(function(n){return n.value})}function er(r,n,o){if(typeof r=="boolean")return Boolean(n);var a=[],e=!1,i=-1;if(Array.isArray(r))a=r,i=r.indexOf(o),e=i>=0;else if(!o||o=="true"||o=="false")return Boolean(n);return n&&o&&!e?a.concat(o):e?a.slice(0,i).concat(a.slice(i+1)):a}var rr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.exports.useLayoutEffect:f.exports.useEffect;function M(r){var n=f.exports.useRef(r);return rr(function(){n.current=r}),f.exports.useCallback(function(){for(var o=arguments.length,a=new Array(o),e=0;e<o;e++)a[e]=arguments[e];return n.current.apply(void 0,a)},[])}function yr(r){var n=r.validate,o=r.name,a=r.render,e=r.children,i=r.as,u=r.component,l=U(r,["validate","name","render","children","as","component"]),h=_e(),m=U(h,["validate","validationSchema"]),x=m.registerField,g=m.unregisterField;f.exports.useEffect(function(){return x(o,{validate:n}),function(){g(o)}},[x,g,o,n]);var c=m.getFieldProps(F({name:o},l)),b=m.getFieldMeta(o),k={field:c,form:m};if(a)return a(F({},k,{meta:b}));if(I(e))return e(F({},k,{meta:b}));if(u){if(typeof u=="string"){var C=l.innerRef,_=U(l,["innerRef"]);return f.exports.createElement(u,F({ref:C},c,_),e)}return f.exports.createElement(u,F({field:c,form:m},l),e)}var R=i||"input";if(typeof R=="string"){var V=l.innerRef,G=U(l,["innerRef"]);return f.exports.createElement(R,F({ref:V},c,G),e)}return f.exports.createElement(R,F({},c,l),e)}var tr=f.exports.forwardRef(function(r,n){var o=r.action,a=U(r,["action"]),e=o!=null?o:"#",i=_e(),u=i.handleReset,l=i.handleSubmit;return f.exports.createElement("form",Object.assign({onSubmit:l,ref:n,onReset:u,action:e},a))});tr.displayName="Form";function nr(r){var n=function(e){return f.exports.createElement(ze,null,function(i){return i||Ie(!1),f.exports.createElement(r,Object.assign({},e,{formik:i}))})},o=r.displayName||r.name||r.constructor&&r.constructor.name||"Component";return n.WrappedComponent=r,n.displayName="FormikConnect("+o+")",We(n,r)}var ir=function(n,o,a){var e=H(n),i=e[o];return e.splice(o,1),e.splice(a,0,i),e},ar=function(n,o,a){var e=H(n),i=e[o];return e[o]=e[a],e[a]=i,e},ne=function(n,o,a){var e=H(n);return e.splice(o,0,a),e},or=function(n,o,a){var e=H(n);return e[o]=a,e},H=function(n){if(n){if(Array.isArray(n))return[].concat(n);var o=Object.keys(n).map(function(a){return parseInt(a)}).reduce(function(a,e){return e>a?e:a},0);return Array.from(F({},n,{length:o+1}))}else return[]},ur=function(r){Re(n,r);function n(a){var e;return e=r.call(this,a)||this,e.updateArrayField=function(i,u,l){var h=e.props,m=h.name,x=h.formik.setFormikState;x(function(g){var c=typeof l=="function"?l:i,b=typeof u=="function"?u:i,k=w(g.values,m,i(T(g.values,m))),C=l?c(T(g.errors,m)):void 0,_=u?b(T(g.touched,m)):void 0;return Ae(C)&&(C=void 0),Ae(_)&&(_=void 0),F({},g,{values:k,errors:l?w(g.errors,m,C):g.errors,touched:u?w(g.touched,m,_):g.touched})})},e.push=function(i){return e.updateArrayField(function(u){return[].concat(H(u),[Ge(i)])},!1,!1)},e.handlePush=function(i){return function(){return e.push(i)}},e.swap=function(i,u){return e.updateArrayField(function(l){return ar(l,i,u)},!0,!0)},e.handleSwap=function(i,u){return function(){return e.swap(i,u)}},e.move=function(i,u){return e.updateArrayField(function(l){return ir(l,i,u)},!0,!0)},e.handleMove=function(i,u){return function(){return e.move(i,u)}},e.insert=function(i,u){return e.updateArrayField(function(l){return ne(l,i,u)},function(l){return ne(l,i,null)},function(l){return ne(l,i,null)})},e.handleInsert=function(i,u){return function(){return e.insert(i,u)}},e.replace=function(i,u){return e.updateArrayField(function(l){return or(l,i,u)},!1,!1)},e.handleReplace=function(i,u){return function(){return e.replace(i,u)}},e.unshift=function(i){var u=-1;return e.updateArrayField(function(l){var h=l?[i].concat(l):[i];return u<0&&(u=h.length),h},function(l){var h=l?[null].concat(l):[null];return u<0&&(u=h.length),h},function(l){var h=l?[null].concat(l):[null];return u<0&&(u=h.length),h}),u},e.handleUnshift=function(i){return function(){return e.unshift(i)}},e.handleRemove=function(i){return function(){return e.remove(i)}},e.handlePop=function(){return function(){return e.pop()}},e.remove=e.remove.bind(ge(e)),e.pop=e.pop.bind(ge(e)),e}var o=n.prototype;return o.componentDidUpdate=function(e){this.props.validateOnChange&&this.props.formik.validateOnChange&&!D(T(e.formik.values,e.name),T(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},o.remove=function(e){var i;return this.updateArrayField(function(u){var l=u?H(u):[];return i||(i=l[e]),I(l.splice)&&l.splice(e,1),l},!0,!0),i},o.pop=function(){var e;return this.updateArrayField(function(i){var u=i;return e||(e=u&&u.pop&&u.pop()),u},!0,!0),e},o.render=function(){var e={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},i=this.props,u=i.component,l=i.render,h=i.children,m=i.name,x=i.formik,g=U(x,["validate","validationSchema"]),c=F({},e,{form:g,name:m});return u?f.exports.createElement(u,c):l?l(c):h?typeof h=="function"?h(c):Ce(h)?null:f.exports.Children.only(h):null},n}(f.exports.Component);ur.defaultProps={validateOnChange:!0};var lr=function(r){Re(n,r);function n(){return r.apply(this,arguments)||this}var o=n.prototype;return o.shouldComponentUpdate=function(e){return T(this.props.formik.errors,this.props.name)!==T(e.formik.errors,this.props.name)||T(this.props.formik.touched,this.props.name)!==T(e.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(e).length},o.render=function(){var e=this.props,i=e.component,u=e.formik,l=e.render,h=e.children,m=e.name,x=U(e,["component","formik","render","children","name"]),g=T(u.touched,m),c=T(u.errors,m);return!!g&&!!c?l?I(l)?l(c):null:h?I(h)?h(c):null:i?f.exports.createElement(i,x,c):c:null},n}(f.exports.Component),Er=nr(lr);export{Er as E,mr as F,tr as a,yr as b};