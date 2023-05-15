(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Dx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Uo={},Ix={get exports(){return Uo},set exports(t){Uo=t}},ru={},we={},Ux={get exports(){return we},set exports(t){we=t}},Ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),Nx=Symbol.for("react.portal"),Fx=Symbol.for("react.fragment"),kx=Symbol.for("react.strict_mode"),Ox=Symbol.for("react.profiler"),zx=Symbol.for("react.provider"),Vx=Symbol.for("react.context"),Bx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Hx=Symbol.for("react.memo"),Wx=Symbol.for("react.lazy"),Hh=Symbol.iterator;function jx(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var Cv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bv=Object.assign,Pv={};function js(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Cv}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lv(){}Lv.prototype=js.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=Pv,this.updater=n||Cv}var xd=yd.prototype=new Lv;xd.constructor=yd;bv(xd,js.prototype);xd.isPureReactComponent=!0;var Wh=Array.isArray,Rv=Object.prototype.hasOwnProperty,Sd={current:null},Dv={key:!0,ref:!0,__self:!0,__source:!0};function Iv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rv.call(e,i)&&!Dv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:aa,type:t,key:s,ref:o,props:r,_owner:Sd.current}}function Xx(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function $x(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jh=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$x(""+t.key):e.toString(36)}function dl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case Nx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Fu(o,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(jh,"$&/")+"/"),dl(r,e,n,"",function(u){return u})):r!=null&&(Md(r)&&(r=Xx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(jh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Wh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Fu(s,a);o+=dl(s,e,n,l,r)}else if(l=jx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Fu(s,a++),o+=dl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(t,e,n){if(t==null)return t;var i=[],r=0;return dl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},hl={transition:null},Yx={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:hl,ReactCurrentOwner:Sd};Ne.Children={map:Ma,forEach:function(t,e,n){Ma(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ma(t,function(){e++}),e},toArray:function(t){return Ma(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ne.Component=js;Ne.Fragment=Fx;Ne.Profiler=Ox;Ne.PureComponent=yd;Ne.StrictMode=kx;Ne.Suspense=Gx;Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=bv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rv.call(e,l)&&!Dv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:aa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ne.createContext=function(t){return t={$$typeof:Vx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zx,_context:t},t.Consumer=t};Ne.createElement=Iv;Ne.createFactory=function(t){var e=Iv.bind(null,t);return e.type=t,e};Ne.createRef=function(){return{current:null}};Ne.forwardRef=function(t){return{$$typeof:Bx,render:t}};Ne.isValidElement=Md;Ne.lazy=function(t){return{$$typeof:Wx,_payload:{_status:-1,_result:t},_init:qx}};Ne.memo=function(t,e){return{$$typeof:Hx,type:t,compare:e===void 0?null:e}};Ne.startTransition=function(t){var e=hl.transition;hl.transition={};try{t()}finally{hl.transition=e}};Ne.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ne.useCallback=function(t,e){return Yt.current.useCallback(t,e)};Ne.useContext=function(t){return Yt.current.useContext(t)};Ne.useDebugValue=function(){};Ne.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};Ne.useEffect=function(t,e){return Yt.current.useEffect(t,e)};Ne.useId=function(){return Yt.current.useId()};Ne.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};Ne.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};Ne.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};Ne.useMemo=function(t,e){return Yt.current.useMemo(t,e)};Ne.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};Ne.useRef=function(t){return Yt.current.useRef(t)};Ne.useState=function(t){return Yt.current.useState(t)};Ne.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};Ne.useTransition=function(){return Yt.current.useTransition()};Ne.version="18.2.0";(function(t){t.exports=Ne})(Ux);const wd=Dx(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx=we,Zx=Symbol.for("react.element"),Qx=Symbol.for("react.fragment"),Jx=Object.prototype.hasOwnProperty,eS=Kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tS={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Jx.call(e,i)&&!tS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Zx,type:t,key:s,ref:o,props:r,_owner:eS.current}}ru.Fragment=Qx;ru.jsx=Uv;ru.jsxs=Uv;(function(t){t.exports=ru})(Ix);const nS=Uo.Fragment,Ae=Uo.jsx,et=Uo.jsxs;var Zc={},Qc={},iS={get exports(){return Qc},set exports(t){Qc=t}},_n={},Jc={},rS={get exports(){return Jc},set exports(t){Jc=t}},Nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,B){var z=R.length;R.push(B);e:for(;0<z;){var ne=z-1>>>1,K=R[ne];if(0<r(K,B))R[ne]=B,R[z]=K,z=ne;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var B=R[0],z=R.pop();if(z!==B){R[0]=z;e:for(var ne=0,K=R.length,V=K>>>1;ne<V;){var Y=2*(ne+1)-1,oe=R[Y],re=Y+1,k=R[re];if(0>r(oe,z))re<K&&0>r(k,oe)?(R[ne]=k,R[re]=z,ne=re):(R[ne]=oe,R[Y]=z,ne=Y);else if(re<K&&0>r(k,z))R[ne]=k,R[re]=z,ne=re;else break e}}return B}function r(R,B){var z=R.sortIndex-B.sortIndex;return z!==0?z:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(R){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=R)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function x(R){if(y=!1,_(R),!m)if(n(l)!==null)m=!0,Z(M);else{var B=n(u);B!==null&&Q(x,B.startTime-R)}}function M(R,B){m=!1,y&&(y=!1,h(P),P=-1),p=!0;var z=d;try{for(_(B),f=n(l);f!==null&&(!(f.expirationTime>B)||R&&!X());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,d=f.priorityLevel;var K=ne(f.expirationTime<=B);B=t.unstable_now(),typeof K=="function"?f.callback=K:f===n(l)&&i(l),_(B)}else i(l);f=n(l)}if(f!==null)var V=!0;else{var Y=n(u);Y!==null&&Q(x,Y.startTime-B),V=!1}return V}finally{f=null,d=z,p=!1}}var C=!1,b=null,P=-1,S=5,T=-1;function X(){return!(t.unstable_now()-T<S)}function j(){if(b!==null){var R=t.unstable_now();T=R;var B=!0;try{B=b(!0,R)}finally{B?D():(C=!1,b=null)}}else C=!1}var D;if(typeof v=="function")D=function(){v(j)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,O=U.port2;U.port1.onmessage=j,D=function(){O.postMessage(null)}}else D=function(){g(j,0)};function Z(R){b=R,C||(C=!0,D())}function Q(R,B){P=g(function(){R(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Z(M))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var z=d;d=B;try{return R()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var z=d;d=R;try{return B()}finally{d=z}},t.unstable_scheduleCallback=function(R,B,z){var ne=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ne+z:ne):z=ne,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=z+K,R={id:c++,callback:B,priorityLevel:R,startTime:z,expirationTime:K,sortIndex:-1},z>ne?(R.sortIndex=z,e(u,R),n(l)===null&&R===n(u)&&(y?(h(P),P=-1):y=!0,Q(x,z-ne))):(R.sortIndex=K,e(l,R),m||p||(m=!0,Z(M))),R},t.unstable_shouldYield=X,t.unstable_wrapCallback=function(R){var B=d;return function(){var z=d;d=B;try{return R.apply(this,arguments)}finally{d=z}}}})(Nv);(function(t){t.exports=Nv})(rS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fv=we,gn=Jc;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kv=new Set,No={};function Vr(t,e){Is(t,e),Is(t+"Capture",e)}function Is(t,e){for(No[t]=e,t=0;t<e.length;t++)kv.add(e[t])}var xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=Object.prototype.hasOwnProperty,sS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},$h={};function oS(t){return ef.call($h,t)?!0:ef.call(Xh,t)?!1:sS.test(t)?$h[t]=!0:(Xh[t]=!0,!1)}function aS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lS(t,e,n,i){if(e===null||typeof e>"u"||aS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,Td);It[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,Td);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,Td);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ad(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lS(e,n,r,i)&&(n=null),i||r===null?oS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ei=Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),Cd=Symbol.for("react.strict_mode"),tf=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),zv=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),nf=Symbol.for("react.suspense"),rf=Symbol.for("react.suspense_list"),Pd=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Vv=Symbol.for("react.offscreen"),qh=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,ku;function fo(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Ou=!1;function zu(t,e){if(!t||Ou)return"";Ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fo(t):""}function uS(t){switch(t.tag){case 5:return fo(t.type);case 16:return fo("Lazy");case 13:return fo("Suspense");case 19:return fo("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function sf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case tf:return"Profiler";case Cd:return"StrictMode";case nf:return"Suspense";case rf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zv:return(t.displayName||"Context")+".Consumer";case Ov:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pd:return e=t.displayName||null,e!==null?e:sf(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return sf(t(e))}catch{}}return null}function cS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sf(e);case 8:return e===Cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fS(t){var e=Bv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=fS(t))}function Gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function of(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Zi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hv(t,e){e=e.checked,e!=null&&Ad(t,"checked",e,!1)}function af(t,e){Hv(t,e);var n=Zi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lf(t,e.type,n):e.hasOwnProperty("defaultValue")&&lf(t,e.type,Zi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function lf(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ho=Array.isArray;function Es(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Zi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function uf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ho(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zi(n)}}function Wv(t,e){var n=Zi(e.value),i=Zi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ta,Xv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dS=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(t){dS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yo[e]=yo[t]})});function $v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yo.hasOwnProperty(t)&&yo[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=$v(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var hS=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ff(t,e){if(e){if(hS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function df(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hf=null;function Ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pf=null,Ts=null,As=null;function Jh(t){if(t=ca(t)){if(typeof pf!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=uu(e),pf(t.stateNode,t.type,e))}}function Yv(t){Ts?As?As.push(t):As=[t]:Ts=t}function Kv(){if(Ts){var t=Ts,e=As;if(As=Ts=null,Jh(t),e)for(t=0;t<e.length;t++)Jh(e[t])}}function Zv(t,e){return t(e)}function Qv(){}var Vu=!1;function Jv(t,e,n){if(Vu)return t(e,n);Vu=!0;try{return Zv(t,e,n)}finally{Vu=!1,(Ts!==null||As!==null)&&(Qv(),Kv())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var i=uu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var mf=!1;if(xi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){mf=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{mf=!1}function pS(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var xo=!1,Cl=null,bl=!1,gf=null,mS={onError:function(t){xo=!0,Cl=t}};function gS(t,e,n,i,r,s,o,a,l){xo=!1,Cl=null,pS.apply(mS,arguments)}function vS(t,e,n,i,r,s,o,a,l){if(gS.apply(this,arguments),xo){if(xo){var u=Cl;xo=!1,Cl=null}else throw Error(ee(198));bl||(bl=!0,gf=u)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function e0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(Br(t)!==t)throw Error(ee(188))}function _S(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ep(r),t;if(s===i)return ep(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function t0(t){return t=_S(t),t!==null?n0(t):null}function n0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=n0(t);if(e!==null)return e;t=t.sibling}return null}var i0=gn.unstable_scheduleCallback,tp=gn.unstable_cancelCallback,yS=gn.unstable_shouldYield,xS=gn.unstable_requestPaint,ct=gn.unstable_now,SS=gn.unstable_getCurrentPriorityLevel,Rd=gn.unstable_ImmediatePriority,r0=gn.unstable_UserBlockingPriority,Pl=gn.unstable_NormalPriority,MS=gn.unstable_LowPriority,s0=gn.unstable_IdlePriority,su=null,ei=null;function wS(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:AS,ES=Math.log,TS=Math.LN2;function AS(t){return t>>>=0,t===0?32:31-(ES(t)/TS|0)|0}var Aa=64,Ca=4194304;function po(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=po(a):(s&=o,s!==0&&(i=po(s)))}else o=n&~r,o!==0?i=po(o):s!==0&&(i=po(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function CS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=CS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function o0(){var t=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),t}function Bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function PS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Dd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function a0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var l0,Id,u0,c0,f0,_f=!1,ba=[],Vi=null,Bi=null,Gi=null,Oo=new Map,zo=new Map,Ni=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":Gi=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(e.pointerId)}}function Js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ca(e),e!==null&&Id(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function RS(t,e,n,i,r){switch(e){case"focusin":return Vi=Js(Vi,t,e,n,i,r),!0;case"dragenter":return Bi=Js(Bi,t,e,n,i,r),!0;case"mouseover":return Gi=Js(Gi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oo.set(s,Js(Oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,zo.set(s,Js(zo.get(s)||null,t,e,n,i,r)),!0}return!1}function d0(t){var e=xr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=e0(n),e!==null){t.blockedOn=e,f0(t.priority,function(){u0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hf=i,n.target.dispatchEvent(i),hf=null}else return e=ca(n),e!==null&&Id(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){pl(t)&&n.delete(e)}function DS(){_f=!1,Vi!==null&&pl(Vi)&&(Vi=null),Bi!==null&&pl(Bi)&&(Bi=null),Gi!==null&&pl(Gi)&&(Gi=null),Oo.forEach(ip),zo.forEach(ip)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,_f||(_f=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,DS)))}function Vo(t){function e(r){return eo(r,t)}if(0<ba.length){eo(ba[0],t);for(var n=1;n<ba.length;n++){var i=ba[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Vi!==null&&eo(Vi,t),Bi!==null&&eo(Bi,t),Gi!==null&&eo(Gi,t),Oo.forEach(e),zo.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)d0(n),n.blockedOn===null&&Ni.shift()}var Cs=Ei.ReactCurrentBatchConfig,Rl=!0;function IS(t,e,n,i){var r=Ge,s=Cs.transition;Cs.transition=null;try{Ge=1,Ud(t,e,n,i)}finally{Ge=r,Cs.transition=s}}function US(t,e,n,i){var r=Ge,s=Cs.transition;Cs.transition=null;try{Ge=4,Ud(t,e,n,i)}finally{Ge=r,Cs.transition=s}}function Ud(t,e,n,i){if(Rl){var r=yf(t,e,n,i);if(r===null)Zu(t,e,i,Dl,n),np(t,i);else if(RS(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<LS.indexOf(t)){for(;r!==null;){var s=ca(r);if(s!==null&&l0(s),s=yf(t,e,n,i),s===null&&Zu(t,e,i,Dl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Zu(t,e,i,null,n)}}var Dl=null;function yf(t,e,n,i){if(Dl=null,t=Ld(i),t=xr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=e0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function h0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SS()){case Rd:return 1;case r0:return 4;case Pl:case MS:return 16;case s0:return 536870912;default:return 16}default:return 16}}var ki=null,Nd=null,ml=null;function p0(){if(ml)return ml;var t,e=Nd,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ml=r.slice(t,1<i?1-i:void 0)}function gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pa(){return!0}function rp(){return!1}function yn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pa:rp,this.isPropagationStopped=rp,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fd=yn(Xs),ua=st({},Xs,{view:0,detail:0}),NS=yn(ua),Gu,Hu,to,ou=st({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Gu=t.screenX-to.screenX,Hu=t.screenY-to.screenY):Hu=Gu=0,to=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),sp=yn(ou),FS=st({},ou,{dataTransfer:0}),kS=yn(FS),OS=st({},ua,{relatedTarget:0}),Wu=yn(OS),zS=st({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),VS=yn(zS),BS=st({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GS=yn(BS),HS=st({},Xs,{data:0}),op=yn(HS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $S(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XS[t])?!!e[t]:!1}function kd(){return $S}var qS=st({},ua,{key:function(t){if(t.key){var e=WS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kd,charCode:function(t){return t.type==="keypress"?gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=yn(qS),KS=st({},ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=yn(KS),ZS=st({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kd}),QS=yn(ZS),JS=st({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),eM=yn(JS),tM=st({},ou,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nM=yn(tM),iM=[9,13,27,32],Od=xi&&"CompositionEvent"in window,So=null;xi&&"documentMode"in document&&(So=document.documentMode);var rM=xi&&"TextEvent"in window&&!So,m0=xi&&(!Od||So&&8<So&&11>=So),lp=String.fromCharCode(32),up=!1;function g0(t,e){switch(t){case"keyup":return iM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function v0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function sM(t,e){switch(t){case"compositionend":return v0(e);case"keypress":return e.which!==32?null:(up=!0,lp);case"textInput":return t=e.data,t===lp&&up?null:t;default:return null}}function oM(t,e){if(cs)return t==="compositionend"||!Od&&g0(t,e)?(t=p0(),ml=Nd=ki=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aM[t.type]:e==="textarea"}function _0(t,e,n,i){Yv(i),e=Il(e,"onChange"),0<e.length&&(n=new Fd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Mo=null,Bo=null;function lM(t){P0(t,0)}function au(t){var e=hs(t);if(Gv(e))return t}function uM(t,e){if(t==="change")return e}var y0=!1;if(xi){var ju;if(xi){var Xu="oninput"in document;if(!Xu){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Xu=typeof fp.oninput=="function"}ju=Xu}else ju=!1;y0=ju&&(!document.documentMode||9<document.documentMode)}function dp(){Mo&&(Mo.detachEvent("onpropertychange",x0),Bo=Mo=null)}function x0(t){if(t.propertyName==="value"&&au(Bo)){var e=[];_0(e,Bo,t,Ld(t)),Jv(lM,e)}}function cM(t,e,n){t==="focusin"?(dp(),Mo=e,Bo=n,Mo.attachEvent("onpropertychange",x0)):t==="focusout"&&dp()}function fM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(Bo)}function dM(t,e){if(t==="click")return au(e)}function hM(t,e){if(t==="input"||t==="change")return au(e)}function pM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:pM;function Go(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ef.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function S0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?S0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function M0(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function zd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mM(t){var e=M0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&S0(n.ownerDocument.documentElement,n)){if(i!==null&&zd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pp(n,s);var o=pp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gM=xi&&"documentMode"in document&&11>=document.documentMode,fs=null,xf=null,wo=null,Sf=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sf||fs==null||fs!==Al(i)||(i=fs,"selectionStart"in i&&zd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wo&&Go(wo,i)||(wo=i,i=Il(xf,"onSelect"),0<i.length&&(e=new Fd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function La(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},$u={},w0={};xi&&(w0=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function lu(t){if($u[t])return $u[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in w0)return $u[t]=e[n];return t}var E0=lu("animationend"),T0=lu("animationiteration"),A0=lu("animationstart"),C0=lu("transitionend"),b0=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,e){b0.set(t,e),Vr(e,[t])}for(var qu=0;qu<gp.length;qu++){var Yu=gp[qu],vM=Yu.toLowerCase(),_M=Yu[0].toUpperCase()+Yu.slice(1);nr(vM,"on"+_M)}nr(E0,"onAnimationEnd");nr(T0,"onAnimationIteration");nr(A0,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(C0,"onTransitionEnd");Is("onMouseEnter",["mouseout","mouseover"]);Is("onMouseLeave",["mouseout","mouseover"]);Is("onPointerEnter",["pointerout","pointerover"]);Is("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("cancel close invalid load scroll toggle".split(" ").concat(mo));function vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,vS(i,e,void 0,t),t.currentTarget=null}function P0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;vp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;vp(r,a,u),s=l}}}if(bl)throw t=gf,bl=!1,gf=null,t}function Ye(t,e){var n=e[Af];n===void 0&&(n=e[Af]=new Set);var i=t+"__bubble";n.has(i)||(L0(e,t,2,!1),n.add(i))}function Ku(t,e,n){var i=0;e&&(i|=4),L0(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function Ho(t){if(!t[Ra]){t[Ra]=!0,kv.forEach(function(n){n!=="selectionchange"&&(yM.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Ku("selectionchange",!1,e))}}function L0(t,e,n,i){switch(h0(e)){case 1:var r=IS;break;case 4:r=US;break;default:r=Ud}n=r.bind(null,e,n,t),r=void 0,!mf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jv(function(){var u=s,c=Ld(n),f=[];e:{var d=b0.get(t);if(d!==void 0){var p=Fd,m=t;switch(t){case"keypress":if(gl(n)===0)break e;case"keydown":case"keyup":p=YS;break;case"focusin":m="focus",p=Wu;break;case"focusout":m="blur",p=Wu;break;case"beforeblur":case"afterblur":p=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=kS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QS;break;case E0:case T0:case A0:p=VS;break;case C0:p=eM;break;case"scroll":p=NS;break;case"wheel":p=nM;break;case"copy":case"cut":case"paste":p=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ap}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,h!==null&&(x=ko(v,h),x!=null&&y.push(Wo(v,x,_)))),g)break;v=v.return}0<y.length&&(d=new p(d,m,null,n,c),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==hf&&(m=n.relatedTarget||n.fromElement)&&(xr(m)||m[Si]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?xr(m):null,m!==null&&(g=Br(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(y=sp,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=ap,x="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:hs(p),_=m==null?d:hs(m),d=new y(x,v+"leave",p,n,c),d.target=g,d.relatedTarget=_,x=null,xr(c)===u&&(y=new y(h,v+"enter",m,n,c),y.target=_,y.relatedTarget=g,x=y),g=x,p&&m)t:{for(y=p,h=m,v=0,_=y;_;_=Wr(_))v++;for(_=0,x=h;x;x=Wr(x))_++;for(;0<v-_;)y=Wr(y),v--;for(;0<_-v;)h=Wr(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Wr(y),h=Wr(h)}y=null}else y=null;p!==null&&_p(f,d,p,y,!1),m!==null&&g!==null&&_p(f,g,m,y,!0)}}e:{if(d=u?hs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=uM;else if(cp(d))if(y0)M=hM;else{M=fM;var C=cM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(M=dM);if(M&&(M=M(t,u))){_0(f,M,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&lf(d,"number",d.value)}switch(C=u?hs(u):window,t){case"focusin":(cp(C)||C.contentEditable==="true")&&(fs=C,xf=u,wo=null);break;case"focusout":wo=xf=fs=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,mp(f,n,c);break;case"selectionchange":if(gM)break;case"keydown":case"keyup":mp(f,n,c)}var b;if(Od)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else cs?g0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(m0&&n.locale!=="ko"&&(cs||P!=="onCompositionStart"?P==="onCompositionEnd"&&cs&&(b=p0()):(ki=c,Nd="value"in ki?ki.value:ki.textContent,cs=!0)),C=Il(u,P),0<C.length&&(P=new op(P,t,null,n,c),f.push({event:P,listeners:C}),b?P.data=b:(b=v0(n),b!==null&&(P.data=b)))),(b=rM?sM(t,n):oM(t,n))&&(u=Il(u,"onBeforeInput"),0<u.length&&(c=new op("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=b))}P0(f,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ko(t,n),s!=null&&i.unshift(Wo(t,s,r)),s=ko(t,e),s!=null&&i.push(Wo(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ko(n,s),l!=null&&o.unshift(Wo(n,l,a))):r||(l=ko(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xM=/\r\n?/g,SM=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(SM,"")}function Da(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(ee(425))}function Ul(){}var Mf=null,wf=null;function Ef(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tf=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,xp=typeof Promise=="function"?Promise:void 0,wM=typeof queueMicrotask=="function"?queueMicrotask:typeof xp<"u"?function(t){return xp.resolve(null).then(t).catch(EM)}:Tf;function EM(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Vo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Vo(e)}function Hi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Jn="__reactFiber$"+$s,jo="__reactProps$"+$s,Si="__reactContainer$"+$s,Af="__reactEvents$"+$s,TM="__reactListeners$"+$s,AM="__reactHandles$"+$s;function xr(t){var e=t[Jn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[Jn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[Jn])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[Jn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function uu(t){return t[jo]||null}var Cf=[],ps=-1;function ir(t){return{current:t}}function Ze(t){0>ps||(t.current=Cf[ps],Cf[ps]=null,ps--)}function $e(t,e){ps++,Cf[ps]=t.current,t.current=e}var Qi={},Bt=ir(Qi),tn=ir(!1),Lr=Qi;function Us(t,e){var n=t.type.contextTypes;if(!n)return Qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Nl(){Ze(tn),Ze(Bt)}function Mp(t,e,n){if(Bt.current!==Qi)throw Error(ee(168));$e(Bt,e),$e(tn,n)}function R0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,cS(t)||"Unknown",r));return st({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Lr=Bt.current,$e(Bt,t),$e(tn,tn.current),!0}function wp(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=R0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,Ze(tn),Ze(Bt),$e(Bt,t)):Ze(tn),$e(tn,n)}var fi=null,cu=!1,Ju=!1;function D0(t){fi===null?fi=[t]:fi.push(t)}function CM(t){cu=!0,D0(t)}function rr(){if(!Ju&&fi!==null){Ju=!0;var t=0,e=Ge;try{var n=fi;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,cu=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),i0(Rd,rr),r}finally{Ge=e,Ju=!1}}return null}var ms=[],gs=0,kl=null,Ol=0,wn=[],En=0,Rr=null,hi=1,pi="";function hr(t,e){ms[gs++]=Ol,ms[gs++]=kl,kl=t,Ol=e}function I0(t,e,n){wn[En++]=hi,wn[En++]=pi,wn[En++]=Rr,Rr=t;var i=hi;t=pi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Hn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Vd(t){t.return!==null&&(hr(t,1),I0(t,1,0))}function Bd(t){for(;t===kl;)kl=ms[--gs],ms[gs]=null,Ol=ms[--gs],ms[gs]=null;for(;t===Rr;)Rr=wn[--En],wn[En]=null,pi=wn[--En],wn[En]=null,hi=wn[--En],wn[En]=null}var mn=null,pn=null,Qe=!1,zn=null;function U0(t,e){var n=Cn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mn=t,pn=Hi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Cn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mn=t,pn=null,!0):!1;default:return!1}}function bf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pf(t){if(Qe){var e=pn;if(e){var n=e;if(!Ep(t,e)){if(bf(t))throw Error(ee(418));e=Hi(n.nextSibling);var i=mn;e&&Ep(t,e)?U0(i,n):(t.flags=t.flags&-4097|2,Qe=!1,mn=t)}}else{if(bf(t))throw Error(ee(418));t.flags=t.flags&-4097|2,Qe=!1,mn=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mn=t}function Ia(t){if(t!==mn)return!1;if(!Qe)return Tp(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ef(t.type,t.memoizedProps)),e&&(e=pn)){if(bf(t))throw N0(),Error(ee(418));for(;e;)U0(t,e),e=Hi(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Hi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=mn?Hi(t.stateNode.nextSibling):null;return!0}function N0(){for(var t=pn;t;)t=Hi(t.nextSibling)}function Ns(){pn=mn=null,Qe=!1}function Gd(t){zn===null?zn=[t]:zn.push(t)}var bM=Ei.ReactCurrentBatchConfig;function kn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var zl=ir(null),Vl=null,vs=null,Hd=null;function Wd(){Hd=vs=Vl=null}function jd(t){var e=zl.current;Ze(zl),t._currentValue=e}function Lf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Vl=t,Hd=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(Vl===null)throw Error(ee(308));vs=t,Vl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Sr=null;function Xd(t){Sr===null?Sr=[t]:Sr.push(t)}function F0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function $d(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Xd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function vl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(d=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,d=typeof m=="function"?m.call(p,f,d):m,d==null)break e;f=st({},f,d);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=f}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var O0=new Fv.Component().refs;function Rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Xi(t),s=gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Wn(e,t,r,i),vl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Xi(t),s=gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Wn(e,t,r,i),vl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Xi(t),r=gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Wn(e,t,i,n),vl(e,t,i))}};function bp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Go(n,i)||!Go(r,s):!0}function z0(t,e,n){var i=!1,r=Qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=nn(e)?Lr:Bt.current,i=e.contextTypes,s=(i=i!=null)?Us(t,r):Qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Pp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function Df(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=O0,$d(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=nn(e)?Lr:Bt.current,r.context=Us(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fu.enqueueReplaceState(r,r.state,null),Bl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===O0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Ua(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lp(t){var e=t._init;return e(t._payload)}function V0(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=$i(h,v),h.index=0,h.sibling=null,h}function s(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,x){return v===null||v.tag!==6?(v=oc(_,h.mode,x),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,x){var M=_.type;return M===us?c(h,v,_.props.children,x,_.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Di&&Lp(M)===v.type)?(x=r(v,_.props),x.ref=no(h,v,_),x.return=h,x):(x=wl(_.type,_.key,_.props,null,h.mode,x),x.ref=no(h,v,_),x.return=h,x)}function u(h,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ac(_,h.mode,x),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function c(h,v,_,x,M){return v===null||v.tag!==7?(v=Cr(_,h.mode,x,M),v.return=h,v):(v=r(v,_),v.return=h,v)}function f(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=oc(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wa:return _=wl(v.type,v.key,v.props,null,h.mode,_),_.ref=no(h,null,v),_.return=h,_;case ls:return v=ac(v,h.mode,_),v.return=h,v;case Di:var x=v._init;return f(h,x(v._payload),_)}if(ho(v)||Zs(v))return v=Cr(v,h.mode,_,null),v.return=h,v;Ua(h,v)}return null}function d(h,v,_,x){var M=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:a(h,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wa:return _.key===M?l(h,v,_,x):null;case ls:return _.key===M?u(h,v,_,x):null;case Di:return M=_._init,d(h,v,M(_._payload),x)}if(ho(_)||Zs(_))return M!==null?null:c(h,v,_,x,null);Ua(h,_)}return null}function p(h,v,_,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(_)||null,a(v,h,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case wa:return h=h.get(x.key===null?_:x.key)||null,l(v,h,x,M);case ls:return h=h.get(x.key===null?_:x.key)||null,u(v,h,x,M);case Di:var C=x._init;return p(h,v,_,C(x._payload),M)}if(ho(x)||Zs(x))return h=h.get(_)||null,c(v,h,x,M,null);Ua(v,x)}return null}function m(h,v,_,x){for(var M=null,C=null,b=v,P=v=0,S=null;b!==null&&P<_.length;P++){b.index>P?(S=b,b=null):S=b.sibling;var T=d(h,b,_[P],x);if(T===null){b===null&&(b=S);break}t&&b&&T.alternate===null&&e(h,b),v=s(T,v,P),C===null?M=T:C.sibling=T,C=T,b=S}if(P===_.length)return n(h,b),Qe&&hr(h,P),M;if(b===null){for(;P<_.length;P++)b=f(h,_[P],x),b!==null&&(v=s(b,v,P),C===null?M=b:C.sibling=b,C=b);return Qe&&hr(h,P),M}for(b=i(h,b);P<_.length;P++)S=p(b,h,P,_[P],x),S!==null&&(t&&S.alternate!==null&&b.delete(S.key===null?P:S.key),v=s(S,v,P),C===null?M=S:C.sibling=S,C=S);return t&&b.forEach(function(X){return e(h,X)}),Qe&&hr(h,P),M}function y(h,v,_,x){var M=Zs(_);if(typeof M!="function")throw Error(ee(150));if(_=M.call(_),_==null)throw Error(ee(151));for(var C=M=null,b=v,P=v=0,S=null,T=_.next();b!==null&&!T.done;P++,T=_.next()){b.index>P?(S=b,b=null):S=b.sibling;var X=d(h,b,T.value,x);if(X===null){b===null&&(b=S);break}t&&b&&X.alternate===null&&e(h,b),v=s(X,v,P),C===null?M=X:C.sibling=X,C=X,b=S}if(T.done)return n(h,b),Qe&&hr(h,P),M;if(b===null){for(;!T.done;P++,T=_.next())T=f(h,T.value,x),T!==null&&(v=s(T,v,P),C===null?M=T:C.sibling=T,C=T);return Qe&&hr(h,P),M}for(b=i(h,b);!T.done;P++,T=_.next())T=p(b,h,P,T.value,x),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?P:T.key),v=s(T,v,P),C===null?M=T:C.sibling=T,C=T);return t&&b.forEach(function(j){return e(h,j)}),Qe&&hr(h,P),M}function g(h,v,_,x){if(typeof _=="object"&&_!==null&&_.type===us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wa:e:{for(var M=_.key,C=v;C!==null;){if(C.key===M){if(M=_.type,M===us){if(C.tag===7){n(h,C.sibling),v=r(C,_.props.children),v.return=h,h=v;break e}}else if(C.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Di&&Lp(M)===C.type){n(h,C.sibling),v=r(C,_.props),v.ref=no(h,C,_),v.return=h,h=v;break e}n(h,C);break}else e(h,C);C=C.sibling}_.type===us?(v=Cr(_.props.children,h.mode,x,_.key),v.return=h,h=v):(x=wl(_.type,_.key,_.props,null,h.mode,x),x.ref=no(h,v,_),x.return=h,h=x)}return o(h);case ls:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=ac(_,h.mode,x),v.return=h,h=v}return o(h);case Di:return C=_._init,g(h,v,C(_._payload),x)}if(ho(_))return m(h,v,_,x);if(Zs(_))return y(h,v,_,x);Ua(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=oc(_,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return g}var Fs=V0(!0),B0=V0(!1),fa={},ti=ir(fa),Xo=ir(fa),$o=ir(fa);function Mr(t){if(t===fa)throw Error(ee(174));return t}function qd(t,e){switch($e($o,e),$e(Xo,t),$e(ti,fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:cf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=cf(e,t)}Ze(ti),$e(ti,e)}function ks(){Ze(ti),Ze(Xo),Ze($o)}function G0(t){Mr($o.current);var e=Mr(ti.current),n=cf(e,t.type);e!==n&&($e(Xo,t),$e(ti,n))}function Yd(t){Xo.current===t&&(Ze(ti),Ze(Xo))}var tt=ir(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ec=[];function Kd(){for(var t=0;t<ec.length;t++)ec[t]._workInProgressVersionPrimary=null;ec.length=0}var _l=Ei.ReactCurrentDispatcher,tc=Ei.ReactCurrentBatchConfig,Dr=0,rt=null,vt=null,Tt=null,Hl=!1,Eo=!1,qo=0,PM=0;function Nt(){throw Error(ee(321))}function Zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Qd(t,e,n,i,r,s){if(Dr=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_l.current=t===null||t.memoizedState===null?IM:UM,t=n(i,r),Eo){s=0;do{if(Eo=!1,qo=0,25<=s)throw Error(ee(301));s+=1,Tt=vt=null,e.updateQueue=null,_l.current=NM,t=n(i,r)}while(Eo)}if(_l.current=Wl,e=vt!==null&&vt.next!==null,Dr=0,Tt=vt=rt=null,Hl=!1,e)throw Error(ee(300));return t}function Jd(){var t=qo!==0;return qo=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?rt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Rn(){if(vt===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=vt.next;var e=Tt===null?rt.memoizedState:Tt.next;if(e!==null)Tt=e,vt=t;else{if(t===null)throw Error(ee(310));vt=t,t={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},Tt===null?rt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function Yo(t,e){return typeof e=="function"?e(t):e}function nc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Dr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,rt.lanes|=c,Ir|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ic(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function H0(){}function W0(t,e){var n=rt,i=Rn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,eh($0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,Ko(9,X0.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(ee(349));Dr&30||j0(n,e,r)}return r}function j0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function X0(t,e,n,i){e.value=n,e.getSnapshot=i,q0(e)&&Y0(t)}function $0(t,e,n){return n(function(){q0(e)&&Y0(t)})}function q0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Y0(t){var e=Mi(t,1);e!==null&&Wn(e,t,1,-1)}function Rp(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=DM.bind(null,rt,t),[e.memoizedState,t]}function Ko(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function K0(){return Rn().memoizedState}function yl(t,e,n,i){var r=Yn();rt.flags|=t,r.memoizedState=Ko(1|e,n,void 0,i===void 0?null:i)}function du(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(vt!==null){var o=vt.memoizedState;if(s=o.destroy,i!==null&&Zd(i,o.deps)){r.memoizedState=Ko(e,n,s,i);return}}rt.flags|=t,r.memoizedState=Ko(1|e,n,s,i)}function Dp(t,e){return yl(8390656,8,t,e)}function eh(t,e){return du(2048,8,t,e)}function Z0(t,e){return du(4,2,t,e)}function Q0(t,e){return du(4,4,t,e)}function J0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function e_(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,J0.bind(null,e,t),n)}function th(){}function t_(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function n_(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function i_(t,e,n){return Dr&21?(jn(n,e)||(n=o0(),rt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function LM(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=tc.transition;tc.transition={};try{t(!1),e()}finally{Ge=n,tc.transition=i}}function r_(){return Rn().memoizedState}function RM(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},s_(t))o_(e,n);else if(n=F0(t,e,n,i),n!==null){var r=qt();Wn(n,t,i,r),a_(n,e,i)}}function DM(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(s_(t))o_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,Xd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=F0(t,e,r,i),n!==null&&(r=qt(),Wn(n,t,i,r),a_(n,e,i))}}function s_(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function o_(t,e){Eo=Hl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function a_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Dd(t,n)}}var Wl={readContext:Ln,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},IM={readContext:Ln,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:Dp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yl(4194308,4,J0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yl(4194308,4,t,e)},useInsertionEffect:function(t,e){return yl(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=RM.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:th,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=LM.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=Yn();if(Qe){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),bt===null)throw Error(ee(349));Dr&30||j0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dp($0.bind(null,i,s,t),[t]),i.flags|=2048,Ko(9,X0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=bt.identifierPrefix;if(Qe){var n=pi,i=hi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=PM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UM={readContext:Ln,useCallback:t_,useContext:Ln,useEffect:eh,useImperativeHandle:e_,useInsertionEffect:Z0,useLayoutEffect:Q0,useMemo:n_,useReducer:nc,useRef:K0,useState:function(){return nc(Yo)},useDebugValue:th,useDeferredValue:function(t){var e=Rn();return i_(e,vt.memoizedState,t)},useTransition:function(){var t=nc(Yo)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:W0,useId:r_,unstable_isNewReconciler:!1},NM={readContext:Ln,useCallback:t_,useContext:Ln,useEffect:eh,useImperativeHandle:e_,useInsertionEffect:Z0,useLayoutEffect:Q0,useMemo:n_,useReducer:ic,useRef:K0,useState:function(){return ic(Yo)},useDebugValue:th,useDeferredValue:function(t){var e=Rn();return vt===null?e.memoizedState=t:i_(e,vt.memoizedState,t)},useTransition:function(){var t=ic(Yo)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:H0,useSyncExternalStore:W0,useId:r_,unstable_isNewReconciler:!1};function Os(t,e){try{var n="",i=e;do n+=uS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function rc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function If(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FM=typeof WeakMap=="function"?WeakMap:Map;function l_(t,e,n){n=gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xl||(Xl=!0,Hf=i),If(t,e)},n}function u_(t,e,n){n=gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){If(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){If(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new FM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=KM.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Np(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var kM=Ei.ReactCurrentOwner,en=!1;function Xt(t,e,n,i){e.child=t===null?B0(e,null,n,i):Fs(e,t.child,n,i)}function Fp(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=Qd(t,e,n,i,s,r),n=Jd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(Qe&&n&&Vd(e),e.flags|=1,Xt(t,e,i,r),e.child)}function kp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,c_(t,e,s,i,r)):(t=wl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Go,n(o,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=$i(s,i),t.ref=e.ref,t.return=e,e.child=t}function c_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Go(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Uf(t,e,n,i,r)}function f_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(ys,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,$e(ys,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,$e(ys,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,$e(ys,hn),hn|=i;return Xt(t,e,r,n),e.child}function d_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Uf(t,e,n,i,r){var s=nn(n)?Lr:Bt.current;return s=Us(e,s),bs(e,r),n=Qd(t,e,n,i,s,r),i=Jd(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(Qe&&i&&Vd(e),e.flags|=1,Xt(t,e,n,r),e.child)}function Op(t,e,n,i,r){if(nn(n)){var s=!0;Fl(e)}else s=!1;if(bs(e,r),e.stateNode===null)xl(t,e),z0(e,n,i),Df(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=nn(n)?Lr:Bt.current,u=Us(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Pp(e,o,i,u),Ii=!1;var d=e.memoizedState;o.state=d,Bl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||tn.current||Ii?(typeof c=="function"&&(Rf(e,n,c,i),l=e.memoizedState),(a=Ii||bp(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,k0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:kn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=nn(n)?Lr:Bt.current,l=Us(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Pp(e,o,i,l),Ii=!1,d=e.memoizedState,o.state=d,Bl(e,i,o,r);var m=e.memoizedState;a!==f||d!==m||tn.current||Ii?(typeof p=="function"&&(Rf(e,n,p,i),m=e.memoizedState),(u=Ii||bp(e,n,u,i,d,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Nf(t,e,n,i,s,r)}function Nf(t,e,n,i,r,s){d_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&wp(e,n,!1),wi(t,e,s);i=e.stateNode,kM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Fs(e,t.child,null,s),e.child=Fs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&wp(e,n,!0),e.child}function h_(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),qd(t,e.containerInfo)}function zp(t,e,n,i,r){return Ns(),Gd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Ff={dehydrated:null,treeContext:null,retryLane:0};function kf(t){return{baseLanes:t,cachePool:null,transitions:null}}function p_(t,e,n){var i=e.pendingProps,r=tt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),$e(tt,r&1),t===null)return Pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=mu(o,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kf(n),e.memoizedState=Ff,t):nh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return OM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=$i(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=$i(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ff,i}return s=t.child,t=s.sibling,i=$i(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,i){return i!==null&&Gd(i),Fs(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=rc(Error(ee(422))),Na(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=mu({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Fs(e,t.child,null,o),e.child.memoizedState=kf(o),e.memoizedState=Ff,s);if(!(e.mode&1))return Na(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=rc(s,i,void 0),Na(t,e,o,i)}if(a=(o&t.childLanes)!==0,en||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),Wn(i,t,r,-1))}return lh(),i=rc(Error(ee(421))),Na(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ZM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,pn=Hi(r.nextSibling),mn=e,Qe=!0,zn=null,t!==null&&(wn[En++]=hi,wn[En++]=pi,wn[En++]=Rr,hi=t.id,pi=t.overflow,Rr=e),e=nh(e,i.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Lf(t.return,e,n)}function sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function m_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if($e(tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}sc(e,!0,n,null,s);break;case"together":sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=$i(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$i(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zM(t,e,n){switch(e.tag){case 3:h_(e),Ns();break;case 5:G0(e);break;case 1:nn(e.type)&&Fl(e);break;case 4:qd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;$e(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?($e(tt,tt.current&1),e.flags|=128,null):n&e.child.childLanes?p_(t,e,n):($e(tt,tt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);$e(tt,tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return m_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$e(tt,tt.current),i)break;return null;case 22:case 23:return e.lanes=0,f_(t,e,n)}return wi(t,e,n)}var g_,Of,v_,__;g_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Of=function(){};v_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ti.current);var s=null;switch(n){case"input":r=of(t,r),i=of(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=uf(t,r),i=uf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}ff(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(No.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(No.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ye("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};__=function(t,e,n,i){n!==i&&(e.flags|=4)};function io(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function VM(t,e,n){var i=e.pendingProps;switch(Bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return nn(e.type)&&Nl(),Ft(e),null;case 3:return i=e.stateNode,ks(),Ze(tn),Ze(Bt),Kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ia(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zn!==null&&(Xf(zn),zn=null))),Of(t,e),Ft(e),null;case 5:Yd(e);var r=Mr($o.current);if(n=e.type,t!==null&&e.stateNode!=null)v_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Ft(e),null}if(t=Mr(ti.current),Ia(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Jn]=e,i[jo]=s,t=(e.mode&1)!==0,n){case"dialog":Ye("cancel",i),Ye("close",i);break;case"iframe":case"object":case"embed":Ye("load",i);break;case"video":case"audio":for(r=0;r<mo.length;r++)Ye(mo[r],i);break;case"source":Ye("error",i);break;case"img":case"image":case"link":Ye("error",i),Ye("load",i);break;case"details":Ye("toggle",i);break;case"input":Yh(i,s),Ye("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ye("invalid",i);break;case"textarea":Zh(i,s),Ye("invalid",i)}ff(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Da(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Da(i.textContent,a,t),r=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ye("scroll",i)}switch(n){case"input":Ea(i),Kh(i,s,!0);break;case"textarea":Ea(i),Qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Jn]=e,t[jo]=i,g_(t,e,!1,!1),e.stateNode=t;e:{switch(o=df(n,i),n){case"dialog":Ye("cancel",t),Ye("close",t),r=i;break;case"iframe":case"object":case"embed":Ye("load",t),r=i;break;case"video":case"audio":for(r=0;r<mo.length;r++)Ye(mo[r],t);r=i;break;case"source":Ye("error",t),r=i;break;case"img":case"image":case"link":Ye("error",t),Ye("load",t),r=i;break;case"details":Ye("toggle",t),r=i;break;case"input":Yh(t,i),r=of(t,i),Ye("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),Ye("invalid",t);break;case"textarea":Zh(t,i),r=uf(t,i),Ye("invalid",t);break;default:r=i}ff(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?qv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fo(t,l):typeof l=="number"&&Fo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ye("scroll",t):l!=null&&Ad(t,s,l,o))}switch(n){case"input":Ea(t),Kh(t,i,!1);break;case"textarea":Ea(t),Qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Zi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Es(t,!!i.multiple,s,!1):i.defaultValue!=null&&Es(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)__(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Mr($o.current),Mr(ti.current),Ia(e)){if(i=e.stateNode,n=e.memoizedProps,i[Jn]=e,(s=i.nodeValue!==n)&&(t=mn,t!==null))switch(t.tag){case 3:Da(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Jn]=e,e.stateNode=i}return Ft(e),null;case 13:if(Ze(tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&pn!==null&&e.mode&1&&!(e.flags&128))N0(),Ns(),e.flags|=98560,s=!1;else if(s=Ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Jn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else zn!==null&&(Xf(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||tt.current&1?_t===0&&(_t=3):lh())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ks(),Of(t,e),t===null&&Ho(e.stateNode.containerInfo),Ft(e),null;case 10:return jd(e.type._context),Ft(e),null;case 17:return nn(e.type)&&Nl(),Ft(e),null;case 19:if(Ze(tt),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)io(s,!1);else{if(_t!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $e(tt,tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&ct()>zs&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Ft(e),null}else 2*ct()-s.renderingStartTime>zs&&n!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ct(),e.sibling=null,n=tt.current,$e(tt,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return ah(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function BM(t,e){switch(Bd(e),e.tag){case 1:return nn(e.type)&&Nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),Ze(tn),Ze(Bt),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yd(e),null;case 13:if(Ze(tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ze(tt),null;case 4:return ks(),null;case 10:return jd(e.type._context),null;case 22:case 23:return ah(),null;case 24:return null;default:return null}}var Fa=!1,zt=!1,GM=typeof WeakSet=="function"?WeakSet:Set,ce=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){at(t,e,i)}else n.current=null}function zf(t,e,n){try{n()}catch(i){at(t,e,i)}}var Bp=!1;function HM(t,e){if(Mf=Rl,t=M0(),zd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wf={focusedElem:t,selectionRange:n},Rl=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:kn(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){at(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return m=Bp,Bp=!1,m}function To(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zf(e,n,s)}r=r.next}while(r!==i)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function y_(t){var e=t.alternate;e!==null&&(t.alternate=null,y_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jn],delete e[jo],delete e[Af],delete e[TM],delete e[AM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x_(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(Bf(t,e,n),t=t.sibling;t!==null;)Bf(t,e,n),t=t.sibling}function Gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}var Lt=null,On=!1;function Ai(t,e,n){for(n=n.child;n!==null;)S_(t,e,n),n=n.sibling}function S_(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:zt||_s(n,e);case 6:var i=Lt,r=On;Lt=null,Ai(t,e,n),Lt=i,On=r,Lt!==null&&(On?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(On?(t=Lt,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Vo(t)):Qu(Lt,n.stateNode));break;case 4:i=Lt,r=On,Lt=n.stateNode.containerInfo,On=!0,Ai(t,e,n),Lt=i,On=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zf(n,e,o),r=r.next}while(r!==i)}Ai(t,e,n);break;case 1:if(!zt&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){at(n,e,a)}Ai(t,e,n);break;case 21:Ai(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,Ai(t,e,n),zt=i):Ai(t,e,n);break;default:Ai(t,e,n)}}function Hp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new GM),e.forEach(function(i){var r=QM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,On=!1;break e;case 3:Lt=a.stateNode.containerInfo,On=!0;break e;case 4:Lt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Lt===null)throw Error(ee(160));S_(s,o,r),Lt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){at(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)M_(e,t),e=e.sibling}function M_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),$n(t),i&4){try{To(3,t,t.return),hu(3,t)}catch(y){at(t,t.return,y)}try{To(5,t,t.return)}catch(y){at(t,t.return,y)}}break;case 1:In(e,t),$n(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(In(e,t),$n(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{Fo(r,"")}catch(y){at(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hv(r,s),df(a,o);var u=df(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?qv(r,f):c==="dangerouslySetInnerHTML"?Xv(r,f):c==="children"?Fo(r,f):Ad(r,c,f,u)}switch(a){case"input":af(r,s);break;case"textarea":Wv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Es(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Es(r,!!s.multiple,s.defaultValue,!0):Es(r,!!s.multiple,s.multiple?[]:"",!1))}r[jo]=s}catch(y){at(t,t.return,y)}}break;case 6:if(In(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){at(t,t.return,y)}}break;case 3:if(In(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(y){at(t,t.return,y)}break;case 4:In(e,t),$n(t);break;case 13:In(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=ct())),i&4&&Hp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||c,In(e,t),zt=u):In(e,t),$n(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ce=t,c=t.child;c!==null;){for(f=ce=c;ce!==null;){switch(d=ce,p=d.child,d.tag){case 0:case 11:case 14:case 15:To(4,d,d.return);break;case 1:_s(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){at(i,n,y)}}break;case 5:_s(d,d.return);break;case 22:if(d.memoizedState!==null){jp(f);continue}}p!==null?(p.return=d,ce=p):jp(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$v("display",o))}catch(y){at(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){at(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),$n(t),i&4&&Hp(t);break;case 21:break;default:In(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(x_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fo(r,""),i.flags&=-33);var s=Gp(t);Gf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Gp(t);Bf(t,a,o);break;default:throw Error(ee(161))}}catch(l){at(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WM(t,e,n){ce=t,w_(t)}function w_(t,e,n){for(var i=(t.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=Fa;var u=zt;if(Fa=o,(zt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?Xp(r):l!==null?(l.return=o,ce=l):Xp(r);for(;s!==null;)ce=s,w_(s),s=s.sibling;ce=r,Fa=a,zt=u}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):Wp(t)}}function Wp(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Vo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}zt||e.flags&512&&Vf(e)}catch(d){at(e,e.return,d)}}if(e===t){ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function jp(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ce=n;break}ce=e.return}}function Xp(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(l){at(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){at(e,r,l)}}var s=e.return;try{Vf(e)}catch(l){at(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){at(e,o,l)}}}catch(l){at(e,e.return,l)}if(e===t){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var jM=Math.ceil,jl=Ei.ReactCurrentDispatcher,ih=Ei.ReactCurrentOwner,bn=Ei.ReactCurrentBatchConfig,ze=0,bt=null,pt=null,Rt=0,hn=0,ys=ir(0),_t=0,Zo=null,Ir=0,pu=0,rh=0,Ao=null,Qt=null,sh=0,zs=1/0,ci=null,Xl=!1,Hf=null,ji=null,ka=!1,Oi=null,$l=0,Co=0,Wf=null,Sl=-1,Ml=0;function qt(){return ze&6?ct():Sl!==-1?Sl:Sl=ct()}function Xi(t){return t.mode&1?ze&2&&Rt!==0?Rt&-Rt:bM.transition!==null?(Ml===0&&(Ml=o0()),Ml):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:h0(t.type)),t):1}function Wn(t,e,n,i){if(50<Co)throw Co=0,Wf=null,Error(ee(185));la(t,n,i),(!(ze&2)||t!==bt)&&(t===bt&&(!(ze&2)&&(pu|=n),_t===4&&Fi(t,Rt)),rn(t,i),n===1&&ze===0&&!(e.mode&1)&&(zs=ct()+500,cu&&rr()))}function rn(t,e){var n=t.callbackNode;bS(t,e);var i=Ll(t,t===bt?Rt:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?CM($p.bind(null,t)):D0($p.bind(null,t)),wM(function(){!(ze&6)&&rr()}),n=null;else{switch(a0(i)){case 1:n=Rd;break;case 4:n=r0;break;case 16:n=Pl;break;case 536870912:n=s0;break;default:n=Pl}n=R_(n,E_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E_(t,e){if(Sl=-1,Ml=0,ze&6)throw Error(ee(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=Ll(t,t===bt?Rt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ql(t,i);else{e=i;var r=ze;ze|=2;var s=A_();(bt!==t||Rt!==e)&&(ci=null,zs=ct()+500,Ar(t,e));do try{qM();break}catch(a){T_(t,a)}while(1);Wd(),jl.current=s,ze=r,pt!==null?e=0:(bt=null,Rt=0,e=_t)}if(e!==0){if(e===2&&(r=vf(t),r!==0&&(i=r,e=jf(t,r))),e===1)throw n=Zo,Ar(t,0),Fi(t,i),rn(t,ct()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!XM(r)&&(e=ql(t,i),e===2&&(s=vf(t),s!==0&&(i=s,e=jf(t,s))),e===1))throw n=Zo,Ar(t,0),Fi(t,i),rn(t,ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:pr(t,Qt,ci);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=sh+500-ct(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Tf(pr.bind(null,t,Qt,ci),e);break}pr(t,Qt,ci);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jM(i/1960))-i,10<i){t.timeoutHandle=Tf(pr.bind(null,t,Qt,ci),i);break}pr(t,Qt,ci);break;case 5:pr(t,Qt,ci);break;default:throw Error(ee(329))}}}return rn(t,ct()),t.callbackNode===n?E_.bind(null,t):null}function jf(t,e){var n=Ao;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=ql(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&Xf(e)),t}function Xf(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function XM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~rh,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function $p(t){if(ze&6)throw Error(ee(327));Ps();var e=Ll(t,0);if(!(e&1))return rn(t,ct()),null;var n=ql(t,e);if(t.tag!==0&&n===2){var i=vf(t);i!==0&&(e=i,n=jf(t,i))}if(n===1)throw n=Zo,Ar(t,0),Fi(t,e),rn(t,ct()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,Qt,ci),rn(t,ct()),null}function oh(t,e){var n=ze;ze|=1;try{return t(e)}finally{ze=n,ze===0&&(zs=ct()+500,cu&&rr())}}function Ur(t){Oi!==null&&Oi.tag===0&&!(ze&6)&&Ps();var e=ze;ze|=1;var n=bn.transition,i=Ge;try{if(bn.transition=null,Ge=1,t)return t()}finally{Ge=i,bn.transition=n,ze=e,!(ze&6)&&rr()}}function ah(){hn=ys.current,Ze(ys)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MM(n)),pt!==null)for(n=pt.return;n!==null;){var i=n;switch(Bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nl();break;case 3:ks(),Ze(tn),Ze(Bt),Kd();break;case 5:Yd(i);break;case 4:ks();break;case 13:Ze(tt);break;case 19:Ze(tt);break;case 10:jd(i.type._context);break;case 22:case 23:ah()}n=n.return}if(bt=t,pt=t=$i(t.current,null),Rt=hn=e,_t=0,Zo=null,rh=pu=Ir=0,Qt=Ao=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function T_(t,e){do{var n=pt;try{if(Wd(),_l.current=Wl,Hl){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hl=!1}if(Dr=0,Tt=vt=rt=null,Eo=!1,qo=0,ih.current=null,n===null||n.return===null){_t=1,Zo=e,pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Up(o);if(p!==null){p.flags&=-257,Np(p,o,a,s,e),p.mode&1&&Ip(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){Ip(s,u,e),lh();break e}l=Error(ee(426))}}else if(Qe&&a.mode&1){var g=Up(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Np(g,o,a,s,e),Gd(Os(l,a));break e}}s=l=Os(l,a),_t!==4&&(_t=2),Ao===null?Ao=[s]:Ao.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=l_(s,l,e);Ap(s,h);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=u_(s,a,e);Ap(s,x);break e}}s=s.return}while(s!==null)}b_(n)}catch(M){e=M,pt===n&&n!==null&&(pt=n=n.return);continue}break}while(1)}function A_(){var t=jl.current;return jl.current=Wl,t===null?Wl:t}function lh(){(_t===0||_t===3||_t===2)&&(_t=4),bt===null||!(Ir&268435455)&&!(pu&268435455)||Fi(bt,Rt)}function ql(t,e){var n=ze;ze|=2;var i=A_();(bt!==t||Rt!==e)&&(ci=null,Ar(t,e));do try{$M();break}catch(r){T_(t,r)}while(1);if(Wd(),ze=n,jl.current=i,pt!==null)throw Error(ee(261));return bt=null,Rt=0,_t}function $M(){for(;pt!==null;)C_(pt)}function qM(){for(;pt!==null&&!yS();)C_(pt)}function C_(t){var e=L_(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?b_(t):pt=e,ih.current=null}function b_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=BM(n,e),n!==null){n.flags&=32767,pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_t=6,pt=null;return}}else if(n=VM(n,e,hn),n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);_t===0&&(_t=5)}function pr(t,e,n){var i=Ge,r=bn.transition;try{bn.transition=null,Ge=1,YM(t,e,n,i)}finally{bn.transition=r,Ge=i}return null}function YM(t,e,n,i){do Ps();while(Oi!==null);if(ze&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PS(t,s),t===bt&&(pt=bt=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ka||(ka=!0,R_(Pl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bn.transition,bn.transition=null;var o=Ge;Ge=1;var a=ze;ze|=4,ih.current=null,HM(t,n),M_(n,t),mM(wf),Rl=!!Mf,wf=Mf=null,t.current=n,WM(n),xS(),ze=a,Ge=o,bn.transition=s}else t.current=n;if(ka&&(ka=!1,Oi=t,$l=r),s=t.pendingLanes,s===0&&(ji=null),wS(n.stateNode),rn(t,ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xl)throw Xl=!1,t=Hf,Hf=null,t;return $l&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===Wf?Co++:(Co=0,Wf=t):Co=0,rr(),null}function Ps(){if(Oi!==null){var t=a0($l),e=bn.transition,n=Ge;try{if(bn.transition=null,Ge=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,$l=0,ze&6)throw Error(ee(331));var r=ze;for(ze|=4,ce=t.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:To(8,c,s)}var f=c.child;if(f!==null)f.return=c,ce=f;else for(;ce!==null;){c=ce;var d=c.sibling,p=c.return;if(y_(c),c===u){ce=null;break}if(d!==null){d.return=p,ce=d;break}ce=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:To(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ce=h;break e}ce=s.return}}var v=t.current;for(ce=v;ce!==null;){o=ce;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ce=_;else e:for(o=v;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(M){at(a,a.return,M)}if(a===o){ce=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,ce=x;break e}ce=a.return}}if(ze=r,rr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(su,t)}catch{}i=!0}return i}finally{Ge=n,bn.transition=e}}return!1}function qp(t,e,n){e=Os(n,e),e=l_(t,e,1),t=Wi(t,e,1),e=qt(),t!==null&&(la(t,1,e),rn(t,e))}function at(t,e,n){if(t.tag===3)qp(t,t,n);else for(;e!==null;){if(e.tag===3){qp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Os(n,t),t=u_(e,t,1),e=Wi(e,t,1),t=qt(),e!==null&&(la(e,1,t),rn(e,t));break}}e=e.return}}function KM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Rt&n)===n&&(_t===4||_t===3&&(Rt&130023424)===Rt&&500>ct()-sh?Ar(t,0):rh|=n),rn(t,e)}function P_(t,e){e===0&&(t.mode&1?(e=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):e=1);var n=qt();t=Mi(t,e),t!==null&&(la(t,e,n),rn(t,n))}function ZM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),P_(t,n)}function QM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),P_(t,n)}var L_;L_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,zM(t,e,n);en=!!(t.flags&131072)}else en=!1,Qe&&e.flags&1048576&&I0(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xl(t,e),t=e.pendingProps;var r=Us(e,Bt.current);bs(e,n),r=Qd(null,e,i,t,r,n);var s=Jd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Fl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$d(e),r.updater=fu,e.stateNode=r,r._reactInternals=e,Df(e,i,t,n),e=Nf(null,e,i,!0,s,n)):(e.tag=0,Qe&&s&&Vd(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=e1(i),t=kn(i,t),r){case 0:e=Uf(null,e,i,t,n);break e;case 1:e=Op(null,e,i,t,n);break e;case 11:e=Fp(null,e,i,t,n);break e;case 14:e=kp(null,e,i,kn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Uf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Op(t,e,i,r,n);case 3:e:{if(h_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,k0(t,e),Bl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(ee(423)),e),e=zp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(ee(424)),e),e=zp(t,e,i,n,r);break e}else for(pn=Hi(e.stateNode.containerInfo.firstChild),mn=e,Qe=!0,zn=null,n=B0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=wi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return G0(e),t===null&&Pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ef(i,r)?o=null:s!==null&&Ef(i,s)&&(e.flags|=32),d_(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Pf(e),null;case 13:return p_(t,e,n);case 4:return qd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Fs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),Fp(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,$e(zl,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!tn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=gi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Lf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Lf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=Ln(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=kn(i,e.pendingProps),r=kn(i.type,r),kp(t,e,i,r,n);case 15:return c_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:kn(i,r),xl(t,e),e.tag=1,nn(i)?(t=!0,Fl(e)):t=!1,bs(e,n),z0(e,i,r),Df(e,i,r,n),Nf(null,e,i,!0,t,n);case 19:return m_(t,e,n);case 22:return f_(t,e,n)}throw Error(ee(156,e.tag))};function R_(t,e){return i0(t,e)}function JM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,e,n,i){return new JM(t,e,n,i)}function uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function e1(t){if(typeof t=="function")return uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Pd)return 14}return 2}function $i(t,e){var n=t.alternate;return n===null?(n=Cn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")uh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case us:return Cr(n.children,r,s,e);case Cd:o=8,r|=8;break;case tf:return t=Cn(12,n,e,r|2),t.elementType=tf,t.lanes=s,t;case nf:return t=Cn(13,n,e,r),t.elementType=nf,t.lanes=s,t;case rf:return t=Cn(19,n,e,r),t.elementType=rf,t.lanes=s,t;case Vv:return mu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:o=10;break e;case zv:o=9;break e;case bd:o=11;break e;case Pd:o=14;break e;case Di:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Cn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Cn(7,t,i,e),t.lanes=n,t}function mu(t,e,n,i){return t=Cn(22,t,i,e),t.elementType=Vv,t.lanes=n,t.stateNode={isHidden:!1},t}function oc(t,e,n){return t=Cn(6,t,null,e),t.lanes=n,t}function ac(t,e,n){return e=Cn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function t1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ch(t,e,n,i,r,s,o,a,l){return t=new t1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Cn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$d(s),t}function n1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function D_(t){if(!t)return Qi;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(nn(n))return R0(t,n,e)}return e}function I_(t,e,n,i,r,s,o,a,l){return t=ch(n,i,!0,t,r,s,o,a,l),t.context=D_(null),n=t.current,i=qt(),r=Xi(n),s=gi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,la(t,r,i),rn(t,i),t}function gu(t,e,n,i){var r=e.current,s=qt(),o=Xi(r);return n=D_(n),e.context===null?e.context=n:e.pendingContext=n,e=gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,o),t!==null&&(Wn(t,r,o,s),vl(t,r,o)),o}function Yl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){Yp(t,e),(t=t.alternate)&&Yp(t,e)}function i1(){return null}var U_=typeof reportError=="function"?reportError:function(t){console.error(t)};function dh(t){this._internalRoot=t}vu.prototype.render=dh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));gu(t,e,null,null)};vu.prototype.unmount=dh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){gu(null,t,null,null)}),e[Si]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=c0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&d0(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kp(){}function r1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Yl(o);s.call(u)}}var o=I_(e,i,t,0,null,!1,!1,"",Kp);return t._reactRootContainer=o,t[Si]=o.current,Ho(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Yl(l);a.call(u)}}var l=ch(t,0,!1,null,null,!1,!1,"",Kp);return t._reactRootContainer=l,t[Si]=l.current,Ho(t.nodeType===8?t.parentNode:t),Ur(function(){gu(e,l,n,i)}),l}function yu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Yl(o);a.call(l)}}gu(e,o,t,r)}else o=r1(n,e,t,r,i);return Yl(o)}l0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=po(e.pendingLanes);n!==0&&(Dd(e,n|1),rn(e,ct()),!(ze&6)&&(zs=ct()+500,rr()))}break;case 13:Ur(function(){var i=Mi(t,1);if(i!==null){var r=qt();Wn(i,t,1,r)}}),fh(t,1)}};Id=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=qt();Wn(e,t,134217728,n)}fh(t,134217728)}};u0=function(t){if(t.tag===13){var e=Xi(t),n=Mi(t,e);if(n!==null){var i=qt();Wn(n,t,e,i)}fh(t,e)}};c0=function(){return Ge};f0=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};pf=function(t,e,n){switch(e){case"input":if(af(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=uu(i);if(!r)throw Error(ee(90));Gv(i),af(i,r)}}}break;case"textarea":Wv(t,n);break;case"select":e=n.value,e!=null&&Es(t,!!n.multiple,e,!1)}};Zv=oh;Qv=Ur;var s1={usingClientEntryPoint:!1,Events:[ca,hs,uu,Yv,Kv,oh]},ro={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},o1={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=t0(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||i1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{su=Oa.inject(o1),ei=Oa}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s1;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(ee(200));return n1(t,e,null,n)};_n.createRoot=function(t,e){if(!hh(t))throw Error(ee(299));var n=!1,i="",r=U_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ch(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Ho(t.nodeType===8?t.parentNode:t),new dh(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=t0(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Ur(t)};_n.hydrate=function(t,e,n){if(!_u(e))throw Error(ee(200));return yu(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=U_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=I_(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Ho(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vu(e)};_n.render=function(t,e,n){if(!_u(e))throw Error(ee(200));return yu(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!_u(t))throw Error(ee(40));return t._reactRootContainer?(Ur(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};_n.unstable_batchedUpdates=oh;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return yu(t,e,n,!1,i)};_n.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=_n})(iS);var Zp=Qc;Zc.createRoot=Zp.createRoot,Zc.hydrateRoot=Zp.hydrateRoot;const N_=we.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),xu=we.createContext({}),ph=we.createContext(null),Su=typeof document<"u",Qp=Su?we.useLayoutEffect:we.useEffect,F_=we.createContext({strict:!1});function a1(t,e,n,i){const{visualElement:r}=we.useContext(xu),s=we.useContext(F_),o=we.useContext(ph),a=we.useContext(N_).reducedMotion,l=we.useRef();i=i||s.renderer,!l.current&&i&&(l.current=i(t,{visualState:e,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const u=l.current;return we.useInsertionEffect(()=>{u&&u.update(n,o)}),Qp(()=>{u&&u.render()}),we.useEffect(()=>{u&&u.updateFeatures()}),(window.HandoffAppearAnimations?Qp:we.useEffect)(()=>{u&&u.animationState&&u.animationState.animateChanges()}),u}function xs(t){return typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function l1(t,e,n){return we.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):xs(n)&&(n.current=i))},[e])}function Qo(t){return typeof t=="string"||Array.isArray(t)}function Mu(t){return typeof t=="object"&&typeof t.start=="function"}const mh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],gh=["initial",...mh];function wu(t){return Mu(t.animate)||gh.some(e=>Qo(t[e]))}function k_(t){return!!(wu(t)||t.variants)}function u1(t,e){if(wu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Qo(n)?n:void 0,animate:Qo(i)?i:void 0}}return t.inherit!==!1?e:{}}function c1(t){const{initial:e,animate:n}=u1(t,we.useContext(xu));return we.useMemo(()=>({initial:e,animate:n}),[Jp(e),Jp(n)])}function Jp(t){return Array.isArray(t)?t.join(" "):t}const em={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Jo={};for(const t in em)Jo[t]={isEnabled:e=>em[t].some(n=>!!e[n])};function f1(t){for(const e in t)Jo[e]={...Jo[e],...t[e]}}function O_(t){const e=we.useRef(null);return e.current===null&&(e.current=t()),e.current}const bo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let d1=1;function h1(){return O_(()=>{if(bo.hasEverUpdated)return d1++})}const z_=we.createContext({}),V_=we.createContext({}),p1=Symbol.for("motionComponentSymbol");function m1({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&f1(t);function s(a,l){let u;const c={...we.useContext(N_),...a,layoutId:g1(a)},{isStatic:f}=c,d=c1(a),p=f?void 0:h1(),m=i(a,f);if(!f&&Su){d.visualElement=a1(r,m,c,e);const y=we.useContext(V_),g=we.useContext(F_).strict;d.visualElement&&(u=d.visualElement.loadFeatures(c,g,t,p,y))}return we.createElement(xu.Provider,{value:d},u&&d.visualElement?we.createElement(u,{visualElement:d.visualElement,...c}):null,n(r,a,p,l1(m,d.visualElement,l),m,f,d.visualElement))}const o=we.forwardRef(s);return o[p1]=r,o}function g1({layoutId:t}){const e=we.useContext(z_).id;return e&&t!==void 0?e+"-"+t:t}function v1(t){function e(i,r={}){return m1(t(i,r))}if(typeof Proxy>"u")return e;const n=new Map;return new Proxy(e,{get:(i,r)=>(n.has(r)||n.set(r,e(r)),n.get(r))})}const _1=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function vh(t){return typeof t!="string"||t.includes("-")?!1:!!(_1.indexOf(t)>-1||/[A-Z]/.test(t))}const Kl={};function y1(t){Object.assign(Kl,t)}const Eu=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Gr=new Set(Eu);function B_(t,{layout:e,layoutId:n}){return Gr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Kl[t]||t==="opacity")}const an=t=>!!(t&&t.getVelocity),x1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},S1=Eu.length;function M1(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,r){let s="";for(let o=0;o<S1;o++){const a=Eu[o];if(t[a]!==void 0){const l=x1[a]||a;s+=`${l}(${t[a]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,i?"":s):n&&i&&(s="none"),s}const G_=t=>e=>typeof e=="string"&&e.startsWith(t),H_=G_("--"),$f=G_("var(--"),w1=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Nr=(t,e,n)=>Math.min(Math.max(n,t),e),Hr={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Po={...Hr,transform:t=>Nr(0,1,t)},za={...Hr,default:1},Lo=t=>Math.round(t*1e5)/1e5,ea=/(-)?([\d]*\.?[\d])+/g,qf=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,E1=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function da(t){return typeof t=="string"}const ha=t=>({test:e=>da(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Ri=ha("deg"),ni=ha("%"),Me=ha("px"),T1=ha("vh"),A1=ha("vw"),tm={...ni,parse:t=>ni.parse(t)/100,transform:t=>ni.transform(t*100)},nm={...Hr,transform:Math.round},W_={borderWidth:Me,borderTopWidth:Me,borderRightWidth:Me,borderBottomWidth:Me,borderLeftWidth:Me,borderRadius:Me,radius:Me,borderTopLeftRadius:Me,borderTopRightRadius:Me,borderBottomRightRadius:Me,borderBottomLeftRadius:Me,width:Me,maxWidth:Me,height:Me,maxHeight:Me,size:Me,top:Me,right:Me,bottom:Me,left:Me,padding:Me,paddingTop:Me,paddingRight:Me,paddingBottom:Me,paddingLeft:Me,margin:Me,marginTop:Me,marginRight:Me,marginBottom:Me,marginLeft:Me,rotate:Ri,rotateX:Ri,rotateY:Ri,rotateZ:Ri,scale:za,scaleX:za,scaleY:za,scaleZ:za,skew:Ri,skewX:Ri,skewY:Ri,distance:Me,translateX:Me,translateY:Me,translateZ:Me,x:Me,y:Me,z:Me,perspective:Me,transformPerspective:Me,opacity:Po,originX:tm,originY:tm,originZ:Me,zIndex:nm,fillOpacity:Po,strokeOpacity:Po,numOctaves:nm};function _h(t,e,n,i){const{style:r,vars:s,transform:o,transformOrigin:a}=t;let l=!1,u=!1,c=!0;for(const f in e){const d=e[f];if(H_(f)){s[f]=d;continue}const p=W_[f],m=w1(d,p);if(Gr.has(f)){if(l=!0,o[f]=m,!c)continue;d!==(p.default||0)&&(c=!1)}else f.startsWith("origin")?(u=!0,a[f]=m):r[f]=m}if(e.transform||(l||i?r.transform=M1(t.transform,n,c,i):r.transform&&(r.transform="none")),u){const{originX:f="50%",originY:d="50%",originZ:p=0}=a;r.transformOrigin=`${f} ${d} ${p}`}}const yh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function j_(t,e,n){for(const i in e)!an(e[i])&&!B_(i,n)&&(t[i]=e[i])}function C1({transformTemplate:t},e,n){return we.useMemo(()=>{const i=yh();return _h(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)},[e])}function b1(t,e,n){const i=t.style||{},r={};return j_(r,i,t),Object.assign(r,C1(t,e,n)),t.transformValues?t.transformValues(r):r}function P1(t,e,n){const i={},r=b1(t,e,n);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const L1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function Zl(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||L1.has(t)}let X_=t=>!Zl(t);function R1(t){t&&(X_=e=>e.startsWith("on")?!Zl(e):t(e))}try{R1(require("@emotion/is-prop-valid").default)}catch{}function D1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(X_(r)||n===!0&&Zl(r)||!e&&!Zl(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function im(t,e,n){return typeof t=="string"?t:Me.transform(e+n*t)}function I1(t,e,n){const i=im(e,t.x,t.width),r=im(n,t.y,t.height);return`${i} ${r}`}const U1={offset:"stroke-dashoffset",array:"stroke-dasharray"},N1={offset:"strokeDashoffset",array:"strokeDasharray"};function F1(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?U1:N1;t[s.offset]=Me.transform(-i);const o=Me.transform(e),a=Me.transform(n);t[s.array]=`${o} ${a}`}function xh(t,{attrX:e,attrY:n,originX:i,originY:r,pathLength:s,pathSpacing:o=1,pathOffset:a=0,...l},u,c,f){if(_h(t,l,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:p,dimensions:m}=t;d.transform&&(m&&(p.transform=d.transform),delete d.transform),m&&(i!==void 0||r!==void 0||p.transform)&&(p.transformOrigin=I1(m,i!==void 0?i:.5,r!==void 0?r:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),s!==void 0&&F1(d,s,o,a,!1)}const $_=()=>({...yh(),attrs:{}}),Sh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function k1(t,e,n,i){const r=we.useMemo(()=>{const s=$_();return xh(s,e,{enableHardwareAcceleration:!1},Sh(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};j_(s,t.style,t),r.style={...s,...r.style}}return r}function O1(t=!1){return(n,i,r,s,{latestValues:o},a)=>{const u=(vh(n)?k1:P1)(i,o,a,n),f={...D1(i,typeof n=="string",t),...u,ref:s},{children:d}=i,p=we.useMemo(()=>an(d)?d.get():d,[d]);return r&&(f["data-projection-id"]=r),we.createElement(n,{...f,children:p})}}const Mh=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function q_(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const Y_=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function K_(t,e,n,i){q_(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(Y_.has(r)?r:Mh(r),e.attrs[r])}function wh(t,e){const{style:n}=t,i={};for(const r in n)(an(n[r])||e.style&&an(e.style[r])||B_(r,t))&&(i[r]=n[r]);return i}function Z_(t,e){const n=wh(t,e);for(const i in t)if(an(t[i])||an(e[i])){const r=i==="x"||i==="y"?"attr"+i.toUpperCase():i;n[r]=t[i]}return n}function Eh(t,e,n,i={},r={}){return typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(n!==void 0?n:t.custom,i,r)),e}const Ql=t=>Array.isArray(t),z1=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),V1=t=>Ql(t)?t[t.length-1]||0:t;function El(t){const e=an(t)?t.get():t;return z1(e)?e.toValue():e}function B1({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,r,s){const o={latestValues:G1(i,r,s,t),renderState:e()};return n&&(o.mount=a=>n(i,a,o)),o}const Q_=t=>(e,n)=>{const i=we.useContext(xu),r=we.useContext(ph),s=()=>B1(t,e,i,r);return n?s():O_(s)};function G1(t,e,n,i){const r={},s=i(t,{});for(const d in s)r[d]=El(s[d]);let{initial:o,animate:a}=t;const l=wu(t),u=k_(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const f=c?a:o;return f&&typeof f!="boolean"&&!Mu(f)&&(Array.isArray(f)?f:[f]).forEach(p=>{const m=Eh(t,p);if(!m)return;const{transitionEnd:y,transition:g,...h}=m;for(const v in h){let _=h[v];if(Array.isArray(_)){const x=c?_.length-1:0;_=_[x]}_!==null&&(r[v]=_)}for(const v in y)r[v]=y[v]}),r}const H1={useVisualState:Q_({scrapeMotionValuesFromProps:Z_,createRenderState:$_,onMount:(t,e,{renderState:n,latestValues:i})=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}xh(n,i,{enableHardwareAcceleration:!1},Sh(e.tagName),t.transformTemplate),K_(e,n)}})},W1={useVisualState:Q_({scrapeMotionValuesFromProps:wh,createRenderState:yh})};function j1(t,{forwardMotionProps:e=!1},n,i){return{...vh(t)?H1:W1,preloadedFeatures:n,useRender:O1(e),createVisualElement:i,Component:t}}function mi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const J_=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Tu(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const X1=t=>e=>J_(e)&&t(e,Tu(e));function vi(t,e,n,i){return mi(t,e,X1(n),i)}const $1=(t,e)=>n=>e(t(n)),qi=(...t)=>t.reduce($1);function ey(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const rm=ey("dragHorizontal"),sm=ey("dragVertical");function ty(t){let e=!1;if(t==="y")e=sm();else if(t==="x")e=rm();else{const n=rm(),i=sm();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function ny(){const t=ty(!0);return t?(t(),!1):!0}class sr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function q1(t){let e=[],n=[],i=0,r=!1,s=!1;const o=new WeakSet,a={schedule:(l,u=!1,c=!1)=>{const f=c&&r,d=f?e:n;return u&&o.add(l),d.indexOf(l)===-1&&(d.push(l),f&&r&&(i=e.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),o.delete(l)},process:l=>{if(r){s=!0;return}if(r=!0,[e,n]=[n,e],n.length=0,i=e.length,i)for(let u=0;u<i;u++){const c=e[u];c(l),o.has(c)&&(a.schedule(c),t())}r=!1,s&&(s=!1,a.process(l))}};return a}const Vt={delta:0,timestamp:0,isProcessing:!1},Y1=40;let Yf=!0,ta=!1;const pa=["read","update","preRender","render","postRender"],Au=pa.reduce((t,e)=>(t[e]=q1(()=>ta=!0),t),{}),it=pa.reduce((t,e)=>{const n=Au[e];return t[e]=(i,r=!1,s=!1)=>(ta||Z1(),n.schedule(i,r,s)),t},{}),Ji=pa.reduce((t,e)=>(t[e]=Au[e].cancel,t),{}),lc=pa.reduce((t,e)=>(t[e]=()=>Au[e].process(Vt),t),{}),K1=t=>Au[t].process(Vt),iy=t=>{ta=!1,Vt.delta=Yf?1e3/60:Math.max(Math.min(t-Vt.timestamp,Y1),1),Vt.timestamp=t,Vt.isProcessing=!0,pa.forEach(K1),Vt.isProcessing=!1,ta&&(Yf=!1,requestAnimationFrame(iy))},Z1=()=>{ta=!0,Yf=!0,Vt.isProcessing||requestAnimationFrame(iy)};function om(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.type==="touch"||ny())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e),a[i]&&it.update(()=>a[i](s,o))};return vi(t.current,n,r,{passive:!t.getProps()[i]})}class Q1 extends sr{mount(){this.unmount=qi(om(this.node,!0),om(this.node,!1))}unmount(){}}class J1 extends sr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=qi(mi(this.node.current,"focus",()=>this.onFocus()),mi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const ry=(t,e)=>e?t===e?!0:ry(t,e.parentElement):!1,At=t=>t;function uc(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Tu(n))}class ew extends sr{constructor(){super(...arguments),this.removeStartListeners=At,this.removeEndListeners=At,this.removeAccessibleListeners=At,this.startPointerPress=(e,n)=>{if(this.removeEndListeners(),this.isPressing)return;const i=this.node.getProps(),s=vi(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c}=this.node.getProps();it.update(()=>{ry(this.node.current,a.target)?u&&u(a,l):c&&c(a,l)})},{passive:!(i.onTap||i.onPointerUp)}),o=vi(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=qi(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||uc("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&it.update(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=mi(this.node.current,"keyup",o),uc("down",(a,l)=>{this.startPress(a,l)})},n=mi(this.node.current,"keydown",e),i=()=>{this.isPressing&&uc("cancel",(s,o)=>this.cancelPress(s,o))},r=mi(this.node.current,"blur",i);this.removeAccessibleListeners=qi(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&it.update(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ny()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&it.update(()=>i(e,n))}mount(){const e=this.node.getProps(),n=vi(this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=mi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=qi(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Kf=new WeakMap,cc=new WeakMap,tw=t=>{const e=Kf.get(t.target);e&&e(t)},nw=t=>{t.forEach(tw)};function iw({root:t,...e}){const n=t||document;cc.has(n)||cc.set(n,{});const i=cc.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(nw,{root:t,...e})),i[r]}function rw(t,e,n){const i=iw(e);return Kf.set(t,n),i.observe(t),()=>{Kf.delete(t),i.unobserve(t)}}const sw={some:0,all:1};class ow extends sr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:sw[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return rw(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(aw(e,n))&&this.startObserver()}unmount(){}}function aw({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const lw={inView:{Feature:ow},tap:{Feature:ew},focus:{Feature:J1},hover:{Feature:Q1}};function sy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function uw(t){const e={};return t.values.forEach((n,i)=>e[i]=n.get()),e}function cw(t){const e={};return t.values.forEach((n,i)=>e[i]=n.getVelocity()),e}function Cu(t,e,n){const i=t.getProps();return Eh(i,e,n!==void 0?n:i.custom,uw(t),cw(t))}const fw="framerAppearId",dw="data-"+Mh(fw);let hw=At,Th=At;const Yi=t=>t*1e3,_i=t=>t/1e3,pw={current:!1},oy=t=>Array.isArray(t)&&typeof t[0]=="number";function ay(t){return!!(!t||typeof t=="string"&&ly[t]||oy(t)||Array.isArray(t)&&t.every(ay))}const go=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,ly={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:go([0,.65,.55,1]),circOut:go([.55,0,1,.45]),backIn:go([.31,.01,.66,-.59]),backOut:go([.33,1.53,.69,.99])};function uy(t){if(t)return oy(t)?go(t):Array.isArray(t)?t.map(uy):ly[t]}function mw(t,e,n,{delay:i=0,duration:r,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=uy(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const am={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},fc={},cy={};for(const t in am)cy[t]=()=>(fc[t]===void 0&&(fc[t]=am[t]()),fc[t]);function gw(t,{repeat:e,repeatType:n="loop"}){const i=e&&n!=="loop"&&e%2===1?0:t.length-1;return t[i]}const fy=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,vw=1e-7,_w=12;function yw(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=fy(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>vw&&++a<_w);return o}function ma(t,e,n,i){if(t===e&&n===i)return At;const r=s=>yw(s,0,1,t,n);return s=>s===0||s===1?s:fy(r(s),e,i)}const xw=ma(.42,0,1,1),Sw=ma(0,0,.58,1),dy=ma(.42,0,.58,1),Mw=t=>Array.isArray(t)&&typeof t[0]!="number",hy=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,py=t=>e=>1-t(1-e),my=t=>1-Math.sin(Math.acos(t)),Ah=py(my),ww=hy(Ah),gy=ma(.33,1.53,.69,.99),Ch=py(gy),Ew=hy(Ch),Tw=t=>(t*=2)<1?.5*Ch(t):.5*(2-Math.pow(2,-10*(t-1))),Aw={linear:At,easeIn:xw,easeInOut:dy,easeOut:Sw,circIn:my,circInOut:ww,circOut:Ah,backIn:Ch,backInOut:Ew,backOut:gy,anticipate:Tw},lm=t=>{if(Array.isArray(t)){Th(t.length===4);const[e,n,i,r]=t;return ma(e,n,i,r)}else if(typeof t=="string")return Aw[t];return t},bh=(t,e)=>n=>!!(da(n)&&E1.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),vy=(t,e,n)=>i=>{if(!da(i))return i;const[r,s,o,a]=i.match(ea);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Cw=t=>Nr(0,255,t),dc={...Hr,transform:t=>Math.round(Cw(t))},wr={test:bh("rgb","red"),parse:vy("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+dc.transform(t)+", "+dc.transform(e)+", "+dc.transform(n)+", "+Lo(Po.transform(i))+")"};function bw(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Zf={test:bh("#"),parse:bw,transform:wr.transform},Ss={test:bh("hsl","hue"),parse:vy("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+ni.transform(Lo(e))+", "+ni.transform(Lo(n))+", "+Lo(Po.transform(i))+")"},jt={test:t=>wr.test(t)||Zf.test(t)||Ss.test(t),parse:t=>wr.test(t)?wr.parse(t):Ss.test(t)?Ss.parse(t):Zf.parse(t),transform:t=>da(t)?t:t.hasOwnProperty("red")?wr.transform(t):Ss.transform(t)},nt=(t,e,n)=>-n*t+n*e+t;function hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Pw({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=hc(l,a,t+1/3),s=hc(l,a,t),o=hc(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}const pc=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},Lw=[Zf,wr,Ss],Rw=t=>Lw.find(e=>e.test(t));function um(t){const e=Rw(t);let n=e.parse(t);return e===Ss&&(n=Pw(n)),n}const _y=(t,e)=>{const n=um(t),i=um(e),r={...n};return s=>(r.red=pc(n.red,i.red,s),r.green=pc(n.green,i.green,s),r.blue=pc(n.blue,i.blue,s),r.alpha=nt(n.alpha,i.alpha,s),wr.transform(r))},yy="${c}",xy="${n}";function Dw(t){var e,n;return isNaN(t)&&da(t)&&(((e=t.match(ea))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(qf))===null||n===void 0?void 0:n.length)||0)>0}function Jl(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0,i=0;const r=t.match(qf);r&&(n=r.length,t=t.replace(qf,yy),e.push(...r.map(jt.parse)));const s=t.match(ea);return s&&(i=s.length,t=t.replace(ea,xy),e.push(...s.map(Hr.parse))),{values:e,numColors:n,numNumbers:i,tokenised:t}}function Sy(t){return Jl(t).values}function My(t){const{values:e,numColors:n,tokenised:i}=Jl(t),r=e.length;return s=>{let o=i;for(let a=0;a<r;a++)o=o.replace(a<n?yy:xy,a<n?jt.transform(s[a]):Lo(s[a]));return o}}const Iw=t=>typeof t=="number"?0:t;function Uw(t){const e=Sy(t);return My(t)(e.map(Iw))}const er={test:Dw,parse:Sy,createTransformer:My,getAnimatableNone:Uw};function wy(t,e){return typeof t=="number"?n=>nt(t,e,n):jt.test(t)?_y(t,e):Ty(t,e)}const Ey=(t,e)=>{const n=[...t],i=n.length,r=t.map((s,o)=>wy(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}},Nw=(t,e)=>{const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=wy(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}},Ty=(t,e)=>{const n=er.createTransformer(e),i=Jl(t),r=Jl(e);return i.numColors===r.numColors&&i.numNumbers>=r.numNumbers?qi(Ey(i.values,r.values),n):o=>`${o>0?e:t}`},na=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},cm=(t,e)=>n=>nt(t,e,n);function Fw(t){return typeof t=="number"?cm:typeof t=="string"?jt.test(t)?_y:Ty:Array.isArray(t)?Ey:typeof t=="object"?Nw:cm}function kw(t,e,n){const i=[],r=n||Fw(t[0]),s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||At:e;a=qi(l,a)}i.push(a)}return i}function Ay(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Th(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=kw(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const f=na(t[c],t[c+1],u);return o[c](f)};return n?u=>l(Nr(t[0],t[s-1],u)):l}function Ow(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=na(0,e,i);t.push(nt(n,1,r))}}function zw(t){const e=[0];return Ow(e,t.length-1),e}function Vw(t,e){return t.map(n=>n*e)}function Bw(t,e){return t.map(()=>e||dy).splice(0,t.length-1)}function eu({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=Mw(i)?i.map(lm):lm(i),s={done:!1,value:e[0]},o=Vw(n&&n.length===e.length?n:zw(e),t),a=Ay(o,e,{ease:Array.isArray(r)?r:Bw(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}function Cy(t,e){return e?t*(1e3/e):0}const Gw=5;function by(t,e,n){const i=Math.max(e-Gw,0);return Cy(n-t(i),e-i)}const mc=.001,Hw=.01,fm=10,Ww=.05,jw=1;function Xw({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s;hw(t<=Yi(fm));let o=1-e;o=Nr(Ww,jw,o),t=Nr(Hw,fm,_i(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,p=Qf(u,o),m=Math.exp(-f);return mc-d/p*m},s=u=>{const f=u*o*t,d=f*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,m=Math.exp(-f),y=Qf(Math.pow(u,2),o);return(-r(u)+mc>0?-1:1)*((d-p)*m)/y}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-mc+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=qw(r,s,a);if(t=Yi(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const $w=12;function qw(t,e,n){let i=n;for(let r=1;r<$w;r++)i=i-t(i)/e(i);return i}function Qf(t,e){return t*Math.sqrt(1-e*e)}const Yw=["duration","bounce"],Kw=["stiffness","damping","mass"];function dm(t,e){return e.some(n=>t[n]!==void 0)}function Zw(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!dm(t,Kw)&&dm(t,Yw)){const n=Xw(t);e={...e,...n,velocity:0,mass:1},e.isResolvedFromDuration=!0}return e}function Py({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:u,velocity:c,duration:f,isResolvedFromDuration:d}=Zw(i),p=c?-_i(c):0,m=l/(2*Math.sqrt(a*u)),y=s-r,g=_i(Math.sqrt(a/u)),h=Math.abs(y)<5;n||(n=h?.01:2),e||(e=h?.005:.5);let v;if(m<1){const _=Qf(g,m);v=x=>{const M=Math.exp(-m*g*x);return s-M*((p+m*g*y)/_*Math.sin(_*x)+y*Math.cos(_*x))}}else if(m===1)v=_=>s-Math.exp(-g*_)*(y+(p+g*y)*_);else{const _=g*Math.sqrt(m*m-1);v=x=>{const M=Math.exp(-m*g*x),C=Math.min(_*x,300);return s-M*((p+m*g*y)*Math.sinh(C)+_*y*Math.cosh(C))/_}}return{calculatedDuration:d&&f||null,next:_=>{const x=v(_);if(d)o.done=_>=f;else{let M=p;_!==0&&(m<1?M=by(v,_,x):M=0);const C=Math.abs(M)<=n,b=Math.abs(s-x)<=e;o.done=C&&b}return o.value=o.done?s:x,o}}}function hm({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},p=P=>a!==void 0&&P<a||l!==void 0&&P>l,m=P=>a===void 0?l:l===void 0||Math.abs(a-P)<Math.abs(l-P)?a:l;let y=n*e;const g=f+y,h=o===void 0?g:o(g);h!==g&&(y=h-f);const v=P=>-y*Math.exp(-P/i),_=P=>h+v(P),x=P=>{const S=v(P),T=_(P);d.done=Math.abs(S)<=u,d.value=d.done?h:T};let M,C;const b=P=>{p(d.value)&&(M=P,C=Py({keyframes:[d.value,m(d.value)],velocity:by(_,P,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return b(0),{calculatedDuration:null,next:P=>{let S=!1;return!C&&M===void 0&&(S=!0,x(P),b(P)),M!==void 0&&P>M?C.next(P-M):(!S&&x(P),d)}}}const Qw=t=>{const e=({timestamp:n})=>t(n);return{start:()=>it.update(e,!0),stop:()=>Ji.update(e),now:()=>Vt.isProcessing?Vt.timestamp:performance.now()}},Jw={decay:hm,inertia:hm,tween:eu,keyframes:eu,spring:Py},pm=2e4;function mm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<pm;)e+=n,i=t.next(e);return e>=pm?1/0:e}function tu({autoplay:t=!0,delay:e=0,driver:n=Qw,keyframes:i,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:a="loop",onPlay:l,onStop:u,onComplete:c,onUpdate:f,...d}){let p=1,m=!1,y,g;const h=()=>{y&&y(),g=new Promise(ne=>{y=ne})};h();let v;const _=Jw[r]||eu;let x;_!==eu&&typeof i[0]!="number"&&(x=Ay([0,100],i,{clamp:!1}),i=[0,100]);const M=_({...d,keyframes:i});let C;a==="mirror"&&(C=_({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let b="idle",P=null,S=null,T=null;M.calculatedDuration===null&&s&&(M.calculatedDuration=mm(M));const{calculatedDuration:X}=M;let j=1/0,D=1/0;X!==null&&(j=X+o,D=j*(s+1)-o);let U=0;const O=ne=>{if(S===null)return;p>0&&(S=Math.min(S,ne)),P!==null?U=P:U=(ne-S)*p;const K=U-e,V=K<0;U=Math.max(K,0),b==="finished"&&P===null&&(U=D);let Y=U,oe=M;if(s){const xe=U/j;let se=Math.floor(xe),pe=xe%1;!pe&&xe>=1&&(pe=1),pe===1&&se--,se=Math.min(se,s+1);const Ve=!!(se%2);Ve&&(a==="reverse"?(pe=1-pe,o&&(pe-=o/j)):a==="mirror"&&(oe=C));let he=Nr(0,1,pe);U>D&&(he=a==="reverse"&&Ve?1:0),Y=he*j}const re=V?{done:!1,value:i[0]}:oe.next(Y);x&&(re.value=x(re.value));let{done:k}=re;!V&&X!==null&&(k=U>=D);const Ce=P===null&&(b==="finished"||b==="running"&&k||p<0&&U<=0);return f&&f(re.value),Ce&&R(),re},Z=()=>{v&&v.stop(),v=void 0},Q=()=>{b="idle",Z(),h(),S=T=null},R=()=>{b="finished",c&&c(),Z(),h()},B=()=>{if(m)return;v||(v=n(O));const ne=v.now();l&&l(),b="running",P!==null?S=ne-P:S||(S=ne),T=S,P=null,v.start()};t&&B();const z={then(ne,K){return g.then(ne,K)},get time(){return _i(U)},set time(ne){ne=Yi(ne),U=ne,P!==null||!v||p===0?P=ne:S=v.now()-ne/p},get duration(){const ne=M.calculatedDuration===null?mm(M):M.calculatedDuration;return _i(ne)},get speed(){return p},set speed(ne){ne===p||!v||(p=ne,z.time=_i(U))},get state(){return b},play:B,pause:()=>{b="paused",P=U},stop:()=>{m=!0,b!=="idle"&&(b="idle",u&&u(),Q())},cancel:()=>{T!==null&&O(T),Q()},complete:()=>{b="finished"},sample:ne=>(S=0,O(ne))};return z}const eE=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Va=10,tE=2e4,nE=(t,e)=>e.type==="spring"||t==="backgroundColor"||!ay(e.ease);function iE(t,e,{onUpdate:n,onComplete:i,...r}){if(!(cy.waapi()&&eE.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,a,l;const u=()=>{l=new Promise(y=>{a=y})};u();let{keyframes:c,duration:f=300,ease:d}=r;if(nE(e,r)){const y=tu({...r,repeat:0,delay:0});let g={done:!1,value:c[0]};const h=[];let v=0;for(;!g.done&&v<tE;)g=y.sample(v),h.push(g.value),v+=Va;c=h,f=v-Va,d="linear"}const p=mw(t.owner.current,e,c,{...r,duration:f,ease:d}),m=()=>{it.update(()=>p.cancel()),a(),u()};return p.onfinish=()=>{t.set(gw(c,r)),i&&i(),m()},{then(y,g){return l.then(y,g)},get time(){return _i(p.currentTime||0)},set time(y){p.currentTime=Yi(y)},get speed(){return p.playbackRate},set speed(y){p.playbackRate=y},get duration(){return _i(f)},play:()=>{o||p.play()},pause:()=>p.pause(),stop:()=>{if(o=!0,p.playState==="idle")return;const{currentTime:y}=p;if(y){const g=tu({...r,autoplay:!1});t.setWithVelocity(g.sample(y-Va).value,g.sample(y).value,Va)}m()},complete:()=>p.finish(),cancel:m}}function rE({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const r=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:At,pause:At,stop:At,then:s=>(s(),Promise.resolve()),cancel:At,complete:At});return e?tu({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const sE={type:"spring",stiffness:500,damping:25,restSpeed:10},oE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),aE={type:"keyframes",duration:.8},lE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},uE=(t,{keyframes:e})=>e.length>2?aE:Gr.has(t)?t.startsWith("scale")?oE(e[1]):sE:lE,Jf=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&er.test(e)&&!e.startsWith("url(")),cE=new Set(["brightness","contrast","saturate","opacity"]);function fE(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(ea)||[];if(!i)return t;const r=n.replace(i,"");let s=cE.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const dE=/([a-z-]*)\(.*?\)/g,ed={...er,getAnimatableNone:t=>{const e=t.match(dE);return e?e.map(fE).join(" "):t}},hE={...W_,color:jt,backgroundColor:jt,outlineColor:jt,fill:jt,stroke:jt,borderColor:jt,borderTopColor:jt,borderRightColor:jt,borderBottomColor:jt,borderLeftColor:jt,filter:ed,WebkitFilter:ed},Ph=t=>hE[t];function Lh(t,e){let n=Ph(t);return n!==ed&&(n=er),n.getAnimatableNone?n.getAnimatableNone(e):void 0}function pE({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function gm(t){return t===0||typeof t=="string"&&parseFloat(t)===0&&t.indexOf(" ")===-1}function vm(t){return typeof t=="number"?0:Lh("",t)}function Ly(t,e){return t[e]||t.default||t}function mE(t,e,n,i){const r=Jf(e,n);let s=i.from!==void 0?i.from:t.get();if(s==="none"&&r&&typeof n=="string"?s=Lh(e,n):gm(s)&&typeof n=="string"?s=vm(n):!Array.isArray(n)&&gm(n)&&typeof s=="string"&&(n=vm(s)),Array.isArray(n)){for(let o=0;o<n.length;o++)n[o]===null&&(n[o]=o===0?s:n[o-1]);return n}else return[s,n]}const Rh=(t,e,n,i={})=>r=>{const s=Ly(i,t)||{},o=s.delay||i.delay||0;let{elapsed:a=0}=i;a=a-Yi(o);const l=mE(e,t,n,s),u=l[0],c=l[l.length-1],f=Jf(t,u),d=Jf(t,c);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:m=>{e.set(m),s.onUpdate&&s.onUpdate(m)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(pE(s)||(p={...p,...uE(t,p)}),p.duration&&(p.duration=Yi(p.duration)),p.repeatDelay&&(p.repeatDelay=Yi(p.repeatDelay)),!f||!d||pw.current||s.type===!1)return rE(p);if(e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const m=iE(e,t,p);if(m)return m}return tu(p)};function nu(t){return!!(an(t)&&t.add)}const gE=t=>/^\-?\d*\.?\d+$/.test(t),vE=t=>/^0[^.\s]+$/.test(t);function Dh(t,e){t.indexOf(e)===-1&&t.push(e)}function Ih(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Uh{constructor(){this.subscriptions=[]}add(e){return Dh(this.subscriptions,e),()=>Ih(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const _E=t=>!isNaN(parseFloat(t));class yE{constructor(e,n={}){this.version="10.10.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,r=!0)=>{this.prev=this.current,this.current=i;const{delta:s,timestamp:o}=Vt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,it.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>it.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=_E(this.current),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Uh);const i=this.events[e].add(n);return e==="change"?()=>{i(),it.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=e,this.timeDelta=i}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Cy(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Vs(t,e){return new yE(t,e)}const Ry=t=>e=>e.test(t),xE={test:t=>t==="auto",parse:t=>t},Dy=[Hr,Me,ni,Ri,A1,T1,xE],so=t=>Dy.find(Ry(t)),SE=[...Dy,jt,er],ME=t=>SE.find(Ry(t));function wE(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Vs(n))}function EE(t,e){const n=Cu(t,e);let{transitionEnd:i={},transition:r={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const o in s){const a=V1(s[o]);wE(t,o,a)}}function TE(t,e,n){var i,r;const s=Object.keys(e).filter(a=>!t.hasValue(a)),o=s.length;if(o)for(let a=0;a<o;a++){const l=s[a],u=e[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(r=(i=n[l])!==null&&i!==void 0?i:t.readValue(l))!==null&&r!==void 0?r:e[l]),c!=null&&(typeof c=="string"&&(gE(c)||vE(c))?c=parseFloat(c):!ME(c)&&er.test(u)&&(c=Lh(l,u)),t.addValue(l,Vs(c,{owner:t})),n[l]===void 0&&(n[l]=c),c!==null&&t.setBaseTarget(l,c))}}function AE(t,e){return e?(e[t]||e.default||e).from:void 0}function CE(t,e,n){const i={};for(const r in t){const s=AE(r,e);if(s!==void 0)i[r]=s;else{const o=n.getValue(r);o&&(i[r]=o.get())}}return i}function bE({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function Iy(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in a){const d=t.getValue(f),p=a[f];if(!d||p===void 0||c&&bE(c,f))continue;const m={delay:n,elapsed:0,...s};if(window.HandoffAppearAnimations&&!d.hasAnimated){const g=t.getProps()[dw];g&&(m.elapsed=window.HandoffAppearAnimations(g,f,d,it))}d.start(Rh(f,d,p,t.shouldReduceMotion&&Gr.has(f)?{type:!1}:m));const y=d.animation;nu(l)&&(l.add(f),y.then(()=>l.remove(f))),u.push(y)}return o&&Promise.all(u).then(()=>{o&&EE(t,o)}),u}function td(t,e,n={}){const i=Cu(t,e,n.custom);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(Iy(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:c,staggerDirection:f}=r;return PE(t,e,u+l,c,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[l,u]=a==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function PE(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(LE).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(td(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function LE(t,e){return t.sortNodePosition(e)}function RE(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>td(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=td(t,e,n);else{const r=typeof e=="function"?Cu(t,e,n.custom):e;i=Promise.all(Iy(t,r,n))}return i.then(()=>t.notify("AnimationComplete",e))}const DE=[...mh].reverse(),IE=mh.length;function UE(t){return e=>Promise.all(e.map(({animation:n,options:i})=>RE(t,n,i)))}function NE(t){let e=UE(t);const n=kE();let i=!0;const r=(l,u)=>{const c=Cu(t,u);if(c){const{transition:f,transitionEnd:d,...p}=c;l={...l,...p,...d}}return l};function s(l){e=l(t)}function o(l,u){const c=t.getProps(),f=t.getVariantContext(!0)||{},d=[],p=new Set;let m={},y=1/0;for(let h=0;h<IE;h++){const v=DE[h],_=n[v],x=c[v]!==void 0?c[v]:f[v],M=Qo(x),C=v===u?_.isActive:null;C===!1&&(y=h);let b=x===f[v]&&x!==c[v]&&M;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),_.protectedKeys={...m},!_.isActive&&C===null||!x&&!_.prevProp||Mu(x)||typeof x=="boolean")continue;const P=FE(_.prevProp,x);let S=P||v===u&&_.isActive&&!b&&M||h>y&&M;const T=Array.isArray(x)?x:[x];let X=T.reduce(r,{});C===!1&&(X={});const{prevResolvedValues:j={}}=_,D={...j,...X},U=O=>{S=!0,p.delete(O),_.needsAnimating[O]=!0};for(const O in D){const Z=X[O],Q=j[O];m.hasOwnProperty(O)||(Z!==Q?Ql(Z)&&Ql(Q)?!sy(Z,Q)||P?U(O):_.protectedKeys[O]=!0:Z!==void 0?U(O):p.add(O):Z!==void 0&&p.has(O)?U(O):_.protectedKeys[O]=!0)}_.prevProp=x,_.prevResolvedValues=X,_.isActive&&(m={...m,...X}),i&&t.blockInitialAnimation&&(S=!1),S&&!b&&d.push(...T.map(O=>({animation:O,options:{type:v,...l}})))}if(p.size){const h={};p.forEach(v=>{const _=t.getBaseTarget(v);_!==void 0&&(h[v]=_)}),d.push({animation:h})}let g=!!d.length;return i&&c.initial===!1&&!t.manuallyAnimateOnMount&&(g=!1),i=!1,g?e(d):Promise.resolve()}function a(l,u,c){var f;if(n[l].isActive===u)return Promise.resolve();(f=t.variantChildren)===null||f===void 0||f.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const d=o(c,l);for(const p in n)n[p].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n}}function FE(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!sy(e,t):!1}function ur(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kE(){return{animate:ur(!0),whileInView:ur(),whileHover:ur(),whileTap:ur(),whileDrag:ur(),whileFocus:ur(),exit:ur()}}class OE extends sr{constructor(e){super(e),e.animationState||(e.animationState=NE(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Mu(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let zE=0;class VE extends sr{constructor(){super(...arguments),this.id=zE++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n,custom:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:i??this.node.getProps().custom});n&&!e&&s.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const BE={animation:{Feature:OE},exit:{Feature:VE}},_m=(t,e)=>Math.abs(t-e);function GE(t,e){const n=_m(t.x,e.x),i=_m(t.y,e.y);return Math.sqrt(n**2+i**2)}class Uy{constructor(e,n,{transformPagePoint:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=vc(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,f=GE(u.offset,{x:0,y:0})>=3;if(!c&&!f)return;const{point:d}=u,{timestamp:p}=Vt;this.history.push({...d,timestamp:p});const{onStart:m,onMove:y}=this.handlers;c||(m&&m(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{this.lastMoveEvent=u,this.lastMoveEventInfo=gc(c,this.transformPagePoint),it.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:f,onSessionEnd:d}=this.handlers,p=vc(u.type==="pointercancel"?this.lastMoveEventInfo:gc(c,this.transformPagePoint),this.history);this.startEvent&&f&&f(u,p),d&&d(u,p)},!J_(e))return;this.handlers=n,this.transformPagePoint=i;const r=Tu(e),s=gc(r,this.transformPagePoint),{point:o}=s,{timestamp:a}=Vt;this.history=[{...o,timestamp:a}];const{onSessionStart:l}=n;l&&l(e,vc(s,this.history)),this.removeListeners=qi(vi(window,"pointermove",this.handlePointerMove),vi(window,"pointerup",this.handlePointerUp),vi(window,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Ji.update(this.updatePoint)}}function gc(t,e){return e?{point:e(t.point)}:t}function ym(t,e){return{x:t.x-e.x,y:t.y-e.y}}function vc({point:t},e){return{point:t,delta:ym(t,Ny(e)),offset:ym(t,HE(e)),velocity:WE(e,.1)}}function HE(t){return t[0]}function Ny(t){return t[t.length-1]}function WE(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Ny(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Yi(e)));)n--;if(!i)return{x:0,y:0};const s=_i(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function vn(t){return t.max-t.min}function nd(t,e=0,n=.01){return Math.abs(t-e)<=n}function xm(t,e,n,i=.5){t.origin=i,t.originPoint=nt(e.min,e.max,t.origin),t.scale=vn(n)/vn(e),(nd(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=nt(n.min,n.max,t.origin)-t.originPoint,(nd(t.translate)||isNaN(t.translate))&&(t.translate=0)}function Ro(t,e,n,i){xm(t.x,e.x,n.x,i?i.originX:void 0),xm(t.y,e.y,n.y,i?i.originY:void 0)}function Sm(t,e,n){t.min=n.min+e.min,t.max=t.min+vn(e)}function jE(t,e,n){Sm(t.x,e.x,n.x),Sm(t.y,e.y,n.y)}function Mm(t,e,n){t.min=e.min-n.min,t.max=t.min+vn(e)}function Do(t,e,n){Mm(t.x,e.x,n.x),Mm(t.y,e.y,n.y)}function XE(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?nt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?nt(n,t,i.max):Math.min(t,n)),t}function wm(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function $E(t,{top:e,left:n,bottom:i,right:r}){return{x:wm(t.x,n,r),y:wm(t.y,e,i)}}function Em(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function qE(t,e){return{x:Em(t.x,e.x),y:Em(t.y,e.y)}}function YE(t,e){let n=.5;const i=vn(t),r=vn(e);return r>i?n=na(e.min,e.max-i,t.min):i>r&&(n=na(t.min,t.max-r,e.min)),Nr(0,1,n)}function KE(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const id=.35;function ZE(t=id){return t===!1?t=0:t===!0&&(t=id),{x:Tm(t,"left","right"),y:Tm(t,"top","bottom")}}function Tm(t,e,n){return{min:Am(t,e),max:Am(t,n)}}function Am(t,e){return typeof t=="number"?t:t[e]||0}const Cm=()=>({translate:0,scale:1,origin:0,originPoint:0}),Io=()=>({x:Cm(),y:Cm()}),bm=()=>({min:0,max:0}),ht=()=>({x:bm(),y:bm()});function Kn(t){return[t("x"),t("y")]}function Fy({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function QE({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function JE(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function _c(t){return t===void 0||t===1}function rd({scale:t,scaleX:e,scaleY:n}){return!_c(t)||!_c(e)||!_c(n)}function mr(t){return rd(t)||ky(t)||t.z||t.rotate||t.rotateX||t.rotateY}function ky(t){return Pm(t.x)||Pm(t.y)}function Pm(t){return t&&t!=="0%"}function iu(t,e,n){const i=t-n,r=e*i;return n+r}function Lm(t,e,n,i,r){return r!==void 0&&(t=iu(t,r,i)),iu(t,n,i)+e}function sd(t,e=0,n=1,i,r){t.min=Lm(t.min,e,n,i,r),t.max=Lm(t.max,e,n,i,r)}function Oy(t,{x:e,y:n}){sd(t.x,e.translate,e.scale,e.originPoint),sd(t.y,n.translate,n.scale,n.originPoint)}function eT(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Ms(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Oy(t,o)),i&&mr(s.latestValues)&&Ms(t,s.latestValues))}e.x=Rm(e.x),e.y=Rm(e.y)}function Rm(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Ui(t,e){t.min=t.min+e,t.max=t.max+e}function Dm(t,e,[n,i,r]){const s=e[r]!==void 0?e[r]:.5,o=nt(t.min,t.max,s);sd(t,e[n],e[i],o,e.scale)}const tT=["x","scaleX","originX"],nT=["y","scaleY","originY"];function Ms(t,e){Dm(t.x,e,tT),Dm(t.y,e,nT)}function zy(t,e){return Fy(JE(t.getBoundingClientRect(),e))}function iT(t,e,n){const i=zy(t,n),{scroll:r}=e;return r&&(Ui(i.x,r.offset.x),Ui(i.y,r.offset.y)),i}const rT=new WeakMap;class sT{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ht(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=l=>{this.stopAnimation(),n&&this.snapToCursor(Tu(l,"page").point)},s=(l,u)=>{const{drag:c,dragPropagation:f,onDragStart:d}=this.getProps();if(c&&!f&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ty(c),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Kn(m=>{let y=this.getAxisMotionValue(m).get()||0;if(ni.test(y)){const{projection:g}=this.visualElement;if(g&&g.layout){const h=g.layout.layoutBox[m];h&&(y=vn(h)*(parseFloat(y)/100))}}this.originPoint[m]=y}),d&&it.update(()=>d(l,u));const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},o=(l,u)=>{const{dragPropagation:c,dragDirectionLock:f,onDirectionLock:d,onDrag:p}=this.getProps();if(!c&&!this.openGlobalLock)return;const{offset:m}=u;if(f&&this.currentDirection===null){this.currentDirection=oT(m),this.currentDirection!==null&&d&&d(this.currentDirection);return}this.updateAxis("x",u.point,m),this.updateAxis("y",u.point,m),this.visualElement.render(),p&&p(l,u)},a=(l,u)=>this.stop(l,u);this.panSession=new Uy(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&it.update(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Ba(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=XE(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){const{dragConstraints:e,dragElastic:n}=this.getProps(),{layout:i}=this.visualElement.projection||{},r=this.constraints;e&&xs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=$E(i.layoutBox,e):this.constraints=!1,this.elastic=ZE(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Kn(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=KE(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!xs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=iT(i,r.root,this.visualElement.getTransformPagePoint());let o=qE(r.layout.layoutBox,s);if(n){const a=n(QE(o));this.hasMutatedConstraints=!!a,a&&(o=Fy(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Kn(c=>{if(!Ba(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start(Rh(e,i,0,n))}stopAnimation(){Kn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n="_drag"+e.toUpperCase(),i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Kn(n=>{const{drag:i}=this.getProps();if(!Ba(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-nt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!xs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Kn(o=>{const a=this.getAxisMotionValue(o);if(a){const l=a.get();r[o]=YE({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Kn(o=>{if(!Ba(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(nt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;rT.set(this.visualElement,this);const e=this.visualElement.current,n=vi(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();xs(l)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),i();const o=mi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Kn(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=id,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Ba(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function oT(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class aT extends sr{constructor(e){super(e),this.removeGroupControls=At,this.removeListeners=At,this.controls=new sT(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||At}unmount(){this.removeGroupControls(),this.removeListeners()}}const Im=t=>(e,n)=>{t&&it.update(()=>t(e,n))};class lT extends sr{constructor(){super(...arguments),this.removePointerDownListener=At}onPointerDown(e){this.session=new Uy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Im(e),onStart:Im(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&it.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=vi(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function uT(){const t=we.useContext(ph);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=we.useId();return we.useEffect(()=>i(r),[]),!e&&n?[!1,()=>n&&n(r)]:[!0]}function Um(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const oo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Me.test(t))t=parseFloat(t);else return t;const n=Um(t,e.target.x),i=Um(t,e.target.y);return`${n}% ${i}%`}},Vy=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function cT(t){const e=Vy.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}function od(t,e,n=1){const[i,r]=cT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);return s?s.trim():$f(r)?od(r,e,n+1):r}function fT(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach(r=>{const s=r.get();if(!$f(s))return;const o=od(s,i);o&&r.set(o)});for(const r in e){const s=e[r];if(!$f(s))continue;const o=od(s,i);o&&(e[r]=o,n||(n={}),n[r]===void 0&&(n[r]=s))}return{target:e,transitionEnd:n}}const Nm="_$css",dT={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=t.includes("var("),s=[];r&&(t=t.replace(Vy,p=>(s.push(p),Nm)));const o=er.parse(t);if(o.length>5)return i;const a=er.createTransformer(t),l=typeof o[0]!="number"?1:0,u=n.x.scale*e.x,c=n.y.scale*e.y;o[0+l]/=u,o[1+l]/=c;const f=nt(u,c,.5);typeof o[2+l]=="number"&&(o[2+l]/=f),typeof o[3+l]=="number"&&(o[3+l]/=f);let d=a(o);if(r){let p=0;d=d.replace(Nm,()=>{const m=s[p];return p++,m})}return d}};class hT extends wd.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;y1(pT),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),bo.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||it.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),!e.currentAnimation&&e.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function By(t){const[e,n]=uT(),i=we.useContext(z_);return wd.createElement(hT,{...t,layoutGroup:i,switchLayoutGroup:we.useContext(V_),isPresent:e,safeToRemove:n})}const pT={borderRadius:{...oo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:oo,borderTopRightRadius:oo,borderBottomLeftRadius:oo,borderBottomRightRadius:oo,boxShadow:dT},Gy=["TopLeft","TopRight","BottomLeft","BottomRight"],mT=Gy.length,Fm=t=>typeof t=="string"?parseFloat(t):t,km=t=>typeof t=="number"||Me.test(t);function gT(t,e,n,i,r,s){r?(t.opacity=nt(0,n.opacity!==void 0?n.opacity:1,vT(i)),t.opacityExit=nt(e.opacity!==void 0?e.opacity:1,0,_T(i))):s&&(t.opacity=nt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<mT;o++){const a=`border${Gy[o]}Radius`;let l=Om(e,a),u=Om(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||km(l)===km(u)?(t[a]=Math.max(nt(Fm(l),Fm(u),i),0),(ni.test(u)||ni.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=nt(e.rotate||0,n.rotate||0,i))}function Om(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const vT=Hy(0,.5,Ah),_T=Hy(.5,.95,At);function Hy(t,e,n){return i=>i<t?0:i>e?1:n(na(t,e,i))}function zm(t,e){t.min=e.min,t.max=e.max}function Sn(t,e){zm(t.x,e.x),zm(t.y,e.y)}function Vm(t,e,n,i,r){return t-=e,t=iu(t,1/n,i),r!==void 0&&(t=iu(t,1/r,i)),t}function yT(t,e=0,n=1,i=.5,r,s=t,o=t){if(ni.test(e)&&(e=parseFloat(e),e=nt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=nt(s.min,s.max,i);t===s&&(a-=e),t.min=Vm(t.min,e,n,a,r),t.max=Vm(t.max,e,n,a,r)}function Bm(t,e,[n,i,r],s,o){yT(t,e[n],e[i],e[r],e.scale,s,o)}const xT=["x","scaleX","originX"],ST=["y","scaleY","originY"];function Gm(t,e,n,i){Bm(t.x,e,xT,n?n.x:void 0,i?i.x:void 0),Bm(t.y,e,ST,n?n.y:void 0,i?i.y:void 0)}function Hm(t){return t.translate===0&&t.scale===1}function Wy(t){return Hm(t.x)&&Hm(t.y)}function ad(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function Wm(t){return vn(t.x)/vn(t.y)}class MT{constructor(){this.members=[]}add(e){Dh(this.members,e),e.scheduleRender()}remove(e){if(Ih(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function jm(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(i=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(i+=`rotate(${l}deg) `),u&&(i+=`rotateX(${u}deg) `),c&&(i+=`rotateY(${c}deg) `)}const o=t.x.scale*e.x,a=t.y.scale*e.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const wT=(t,e)=>t.depth-e.depth;class ET{constructor(){this.children=[],this.isDirty=!1}add(e){Dh(this.children,e),this.isDirty=!0}remove(e){Ih(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(wT),this.isDirty=!1,this.children.forEach(e)}}function TT(t,e){const n=performance.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ji.read(i),t(s-e))};return it.read(i,!0),()=>Ji.read(i)}function AT(t){window.MotionDebug&&window.MotionDebug.record(t)}function CT(t){return t instanceof SVGElement&&t.tagName!=="svg"}function bT(t,e,n){const i=an(t)?t:Vs(t);return i.start(Rh("",i,e,n)),i.animation}const Xm=["","X","Y","Z"],$m=1e3;let PT=0;const gr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function jy({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o,a={},l=e==null?void 0:e()){this.id=PT++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{gr.totalNodes=gr.resolvedTargetDeltas=gr.recalculatedProjection=0,this.nodes.forEach(DT),this.nodes.forEach(FT),this.nodes.forEach(kT),this.nodes.forEach(IT),AT(gr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=o,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,o&&this.root.registerPotentialNode(o,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new ET)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Uh),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}registerPotentialNode(o,a){this.potentialNodes.set(o,a)}mount(o,a=!1){if(this.instance)return;this.isSVG=CT(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=TT(d,250),bo.hasAnimatedSinceResize&&(bo.hasAnimatedSinceResize=!1,this.nodes.forEach(Ym))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||c.getDefaultTransition()||GT,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=c.getProps(),v=!this.targetLayout||!ad(this.targetLayout,m)||p,_=!d&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,_);const x={...Ly(y,"layout"),onPlay:g,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else!d&&this.animationProgress===0&&Ym(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ji.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(OT),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(qm);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(HT),this.potentialNodes.clear()),this.nodes.forEach(NT),this.nodes.forEach(LT),this.nodes.forEach(RT),this.clearAllSnapshots(),lc.update(),lc.preRender(),lc.render())}clearAllSnapshots(){this.nodes.forEach(UT),this.sharedNodes.forEach(zT)}scheduleUpdateProjection(){it.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){it.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ht(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Wy(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||mr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),WT(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return ht();const a=o.measureViewportBox(),{scroll:l}=this.root;return l&&(Ui(a.x,l.offset.x),Ui(a.y,l.offset.y)),a}removeElementScroll(o){const a=ht();Sn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:f}=u;if(u!==this.root&&c&&f.layoutScroll){if(c.isRoot){Sn(a,o);const{scroll:d}=this.root;d&&(Ui(a.x,-d.offset.x),Ui(a.y,-d.offset.y))}Ui(a.x,c.offset.x),Ui(a.y,c.offset.y)}}return a}applyTransform(o,a=!1){const l=ht();Sn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&Ms(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),mr(c.latestValues)&&Ms(l,c.latestValues)}return mr(this.latestValues)&&Ms(l,this.latestValues),l}removeTransform(o){const a=ht();Sn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!mr(u.latestValues))continue;rd(u.latestValues)&&u.updateSnapshot();const c=ht(),f=u.measurePageBox();Sn(c,f),Gm(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return mr(this.latestValues)&&Gm(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=Vt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout?(this.relativeParent=p,this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),Do(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ht(),this.targetWithTransforms=ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.relativeParent.resolvedRelativeTargetAt!==Vt.timestamp&&this.relativeParent.resolveTargetDelta(!0),jE(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Sn(this.target,this.layout.layoutBox),Oy(this.target,this.targetDelta)):Sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target?(this.relativeParent=p,this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),Do(this.relativeTargetOrigin,this.target,p.target),Sn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}gr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||rd(this.parent.latestValues)||ky(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Vt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Sn(this.layoutCorrected,this.layout.layoutBox),eT(this.layoutCorrected,this.treeScale,this.path,l);const{target:d}=a;if(!d)return;this.projectionDelta||(this.projectionDelta=Io(),this.projectionDeltaWithTransform=Io());const p=this.treeScale.x,m=this.treeScale.y,y=this.projectionTransform;Ro(this.projectionDelta,this.layoutCorrected,d,this.latestValues),this.projectionTransform=jm(this.projectionDelta,this.treeScale),(this.projectionTransform!==y||this.treeScale.x!==p||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",d)),gr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=Io();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ht(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,y=p!==m,g=this.getStack(),h=!g||g.members.length<=1,v=!!(y&&!h&&this.options.crossfade===!0&&!this.path.some(BT));this.animationProgress=0;let _;this.mixTargetDelta=x=>{const M=x/1e3;Km(f.x,o.x,M),Km(f.y,o.y,M),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Do(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),VT(this.relativeTarget,this.relativeTargetOrigin,d,M),_&&ad(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=ht()),Sn(_,this.relativeTarget)),y&&(this.animationValues=c,gT(c,u,this.latestValues,M,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ji.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=it.update(()=>{bo.hasAnimatedSinceResize=!0,this.currentAnimation=bT(0,$m,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta($m),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Xy(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ht();const f=vn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=vn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Sn(a,l),Ms(a,c),Ro(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new MT),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(a=!0),!a)return;const u={};for(let c=0;c<Xm.length;c++){const f="rotate"+Xm[c];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const c in u)o.setStaticValue(c,u[c]);o.scheduleRender()}getProjectionStyles(o={}){var a,l;const u={};if(!this.instance||this.isSVG)return u;if(this.isVisible)u.visibility="";else return{visibility:"hidden"};const c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=El(o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=El(o.pointerEvents)||""),this.hasProjected&&!mr(this.latestValues)&&(y.transform=c?c({},""):"none",this.hasProjected=!1),y}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=jm(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:p,y:m}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in Kl){if(d[y]===void 0)continue;const{correct:g,applyTo:h}=Kl[y],v=u.transform==="none"?d[y]:g(d[y],f);if(h){const _=h.length;for(let x=0;x<_;x++)u[h[x]]=v}else u[y]=v}return this.options.layoutId&&(u.pointerEvents=f===this?El(o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(qm),this.root.sharedNodes.clear()}}}function LT(t){t.updateLayout()}function RT(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Kn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=vn(d);d.min=i[f].min,d.max=d.min+p}):Xy(s,n.layoutBox,i)&&Kn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],p=vn(i[f]);d.max=d.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+p)});const a=Io();Ro(a,i,n.layoutBox);const l=Io();o?Ro(l,t.applyTransform(r,!0),n.measuredBox):Ro(l,i,n.layoutBox);const u=!Wy(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:p}=f;if(d&&p){const m=ht();Do(m,n.layoutBox,d.layoutBox);const y=ht();Do(y,i,p.layoutBox),ad(m,y)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=y,t.relativeTargetOrigin=m,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function DT(t){gr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function IT(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function UT(t){t.clearSnapshot()}function qm(t){t.clearMeasurements()}function NT(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ym(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0}function FT(t){t.resolveTargetDelta()}function kT(t){t.calcProjection()}function OT(t){t.resetRotation()}function zT(t){t.removeLeadSnapshot()}function Km(t,e,n){t.translate=nt(e.translate,0,n),t.scale=nt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Zm(t,e,n,i){t.min=nt(e.min,n.min,i),t.max=nt(e.max,n.max,i)}function VT(t,e,n,i){Zm(t.x,e.x,n.x,i),Zm(t.y,e.y,n.y,i)}function BT(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const GT={duration:.45,ease:[.4,0,.1,1]};function HT(t,e){let n=t.root;for(let s=t.path.length-1;s>=0;s--)if(t.path[s].instance){n=t.path[s];break}const r=(n&&n!==t.root?n.instance:document).querySelector(`[data-projection-id="${e}"]`);r&&t.mount(r,!0)}function Qm(t){t.min=Math.round(t.min),t.max=Math.round(t.max)}function WT(t){Qm(t.x),Qm(t.y)}function Xy(t,e,n){return t==="position"||t==="preserve-aspect"&&!nd(Wm(e),Wm(n),.2)}const jT=jy({attachResizeListener:(t,e)=>mi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),yc={current:void 0},$y=jy({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!yc.current){const t=new jT(0,{});t.mount(window),t.setOptions({layoutScroll:!0}),yc.current=t}return yc.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),XT={pan:{Feature:lT},drag:{Feature:aT,ProjectionNode:$y,MeasureLayout:By}},$T=new Set(["width","height","top","left","right","bottom","x","y"]),qy=t=>$T.has(t),qT=t=>Object.keys(t).some(qy),Jm=t=>t===Hr||t===Me,eg=(t,e)=>parseFloat(t.split(", ")[e]),tg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/);if(r)return eg(r[1],e);{const s=i.match(/^matrix\((.+)\)$/);return s?eg(s[1],t):0}},YT=new Set(["x","y","z"]),KT=Eu.filter(t=>!YT.has(t));function ZT(t){const e=[];return KT.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e.length&&t.render(),e}const ng={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:tg(4,13),y:tg(5,14)},QT=(t,e,n)=>{const i=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,a={};o==="none"&&e.setStaticValue("display",t.display||"block"),n.forEach(u=>{a[u]=ng[u](i,s)}),e.render();const l=e.measureViewportBox();return n.forEach(u=>{const c=e.getValue(u);c&&c.jump(a[u]),t[u]=ng[u](l,s)}),t},JT=(t,e,n={},i={})=>{e={...e},i={...i};const r=Object.keys(e).filter(qy);let s=[],o=!1;const a=[];if(r.forEach(l=>{const u=t.getValue(l);if(!t.hasValue(l))return;let c=n[l],f=so(c);const d=e[l];let p;if(Ql(d)){const m=d.length,y=d[0]===null?1:0;c=d[y],f=so(c);for(let g=y;g<m;g++)p?Th(so(d[g])===p):p=so(d[g])}else p=so(d);if(f!==p)if(Jm(f)&&Jm(p)){const m=u.get();typeof m=="string"&&u.set(parseFloat(m)),typeof d=="string"?e[l]=parseFloat(d):Array.isArray(d)&&p===Me&&(e[l]=d.map(parseFloat))}else f!=null&&f.transform&&(p!=null&&p.transform)&&(c===0||d===0)?c===0?u.set(p.transform(c)):e[l]=f.transform(d):(o||(s=ZT(t),o=!0),a.push(l),i[l]=i[l]!==void 0?i[l]:e[l],u.jump(d))}),a.length){const l=a.indexOf("height")>=0?window.pageYOffset:null,u=QT(e,t,a);return s.length&&s.forEach(([c,f])=>{t.getValue(c).set(f)}),t.render(),Su&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:i}}else return{target:e,transitionEnd:i}};function eA(t,e,n,i){return qT(e)?JT(t,e,n,i):{target:e,transitionEnd:i}}const tA=(t,e,n,i)=>{const r=fT(t,e,i);return e=r.target,i=r.transitionEnd,eA(t,e,n,i)},ld={current:null},Yy={current:!1};function nA(){if(Yy.current=!0,!!Su)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>ld.current=t.matches;t.addListener(e),e()}else ld.current=!1}function iA(t,e,n){const{willChange:i}=e;for(const r in e){const s=e[r],o=n[r];if(an(s))t.addValue(r,s),nu(i)&&i.add(r);else if(an(o))t.addValue(r,Vs(s,{owner:t})),nu(i)&&i.remove(r);else if(o!==s)if(t.hasValue(r)){const a=t.getValue(r);!a.hasAnimated&&a.set(s)}else{const a=t.getStaticValue(r);t.addValue(r,Vs(a!==void 0?a:s,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const ig=new WeakMap,Ky=Object.keys(Jo),rA=Ky.length,rg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],sA=gh.length;class oA{constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>it.render(this.render,!1,!0);const{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=n.initial?{...a}:{},this.renderState=l,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=wu(n),this.isVariantNode=k_(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const f in c){const d=c[f];a[f]!==void 0&&an(d)&&(d.set(a[f],!1),nu(u)&&u.add(f))}}scrapeMotionValuesFromProps(e,n){return{}}mount(e){this.current=e,ig.set(e,this),this.projection&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Yy.current||nA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:ld.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ig.delete(this.current),this.projection&&this.projection.unmount(),Ji.update(this.notifyUpdate),Ji.render(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,n){const i=Gr.has(e),r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&it.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...n},i,r,s,o){let a,l;for(let u=0;u<rA;u++){const c=Ky[u],{isEnabled:f,Feature:d,ProjectionNode:p,MeasureLayout:m}=Jo[c];p&&(a=p),f(n)&&(!this.features[c]&&d&&(this.features[c]=new d(this)),m&&(l=m))}if(!this.projection&&a){this.projection=new a(s,this.latestValues,this.parent&&this.parent.projection);const{layoutId:u,layout:c,drag:f,dragConstraints:d,layoutScroll:p,layoutRoot:m}=n;this.projection.setOptions({layoutId:u,layout:c,alwaysMeasureLayout:!!f||d&&xs(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof c=="string"?c:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:m})}return l}updateFeatures(){for(const e in this.features){const n=this.features[e];n.isMounted?n.update(this.props,this.prevProps):(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ht()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}makeTargetAnimatable(e,n=!0){return this.makeTargetAnimatableFromInstance(e,this.props,n)}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<rg.length;i++){const r=rg[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=iA(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<sA;i++){const r=gh[i],s=this.props[r];(Qo(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){n!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,n)),this.values.set(e,n),this.latestValues[e]=n.get()}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Vs(n,{owner:this}),this.addValue(e,i)),i}readValue(e){return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props,r=typeof i=="string"||typeof i=="object"?(n=Eh(this.props,i))===null||n===void 0?void 0:n[e]:void 0;if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!an(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Uh),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Zy extends oA{sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:n,...i},{transformValues:r},s){let o=CE(i,e||{},this);if(r&&(n&&(n=r(n)),i&&(i=r(i)),o&&(o=r(o))),s){TE(this,i,o);const a=tA(this,i,o,n);n=a.transitionEnd,i=a.target}return{transition:e,transitionEnd:n,...i}}}function aA(t){return window.getComputedStyle(t)}class lA extends Zy{readValueFromInstance(e,n){if(Gr.has(n)){const i=Ph(n);return i&&i.default||0}else{const i=aA(e),r=(H_(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return zy(e,n)}build(e,n,i,r){_h(e,n,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,n){return wh(e,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;an(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(e,n,i,r){q_(e,n,i,r)}}class uA extends Zy{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Gr.has(n)){const i=Ph(n);return i&&i.default||0}return n=Y_.has(n)?n:Mh(n),e.getAttribute(n)}measureInstanceViewportBox(){return ht()}scrapeMotionValuesFromProps(e,n){return Z_(e,n)}build(e,n,i,r){xh(e,n,i,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,i,r){K_(e,n,i,r)}mount(e){this.isSVGTag=Sh(e.tagName),super.mount(e)}}const cA=(t,e)=>vh(t)?new uA(e,{enableHardwareAcceleration:!1}):new lA(e,{enableHardwareAcceleration:!0}),fA={layout:{ProjectionNode:$y,MeasureLayout:By}},dA={...BE,...lw,...XT,...fA},Qy=v1((t,e)=>j1(t,e,dA,cA));function Jy({children:t,id:e}){return et(nS,{children:[Ae(Qy.h1,{initial:{filter:"blur(25px)",opacity:0,y:-70},whileInView:{filter:"blur(0px)",opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:24,mass:2},viewport:{once:!0},id:e,className:"text-white font-bold sm:text-3xl text-2xl scroll-mt-20",children:t}),Ae("div",{className:"border-b border-b-white/50 my-7"})]})}function hA(){return et("footer",{className:"pb-16",children:[Ae(Jy,{id:"contact",children:"Contact"}),et("div",{className:"flex-col-center",children:[Ae("h1",{className:"text-2xl max-sm:text-xl mb-4 font-bold",children:"Links"}),et("a",{href:"https://github.com/sharkri",target:"_blank",rel:"noreferrer",children:[Ae("i",{className:"fa-brands fa-github mr-2","aria-hidden":"true"}),"My Github Page"]})]})]})}function pA(){const[t,e]=we.useState(!0);return we.useEffect(()=>{function n(){e(window.pageYOffset<=25)}return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[]),Ae("header",{className:`w-full h-[56px] fixed top-0 z-10 px-8 py-4 ${t?"translate-y-2":"bg-black/40"} text-gray-300 font-bold transition-[color,transform] duration-200 flex justify-end`,children:et("nav",{className:"flex gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300",children:[Ae("a",{href:"#about",children:"About"}),Ae("a",{href:"#projects",children:"Projects"}),Ae("a",{href:"#contact",children:"Contact"})]})})}function mA(){return Ae("div",{className:"flex-col-center max-w-[960px] mx-auto w-full",children:et("div",{className:"text-[min(10vw,128px)] w-full max-w-[70vw] child:leading-[1.05] uppercase",children:[Ae("h1",{className:"overflow-hidden",children:Ae("p",{className:"animate-text-slide-up",children:"Sharkri"})}),et("h1",{className:"font-bold pl-[14%]",children:[Ae("div",{className:"overflow-hidden",children:Ae("p",{className:"animate-text-slide-up",children:"web"})}),Ae("div",{className:"overflow-hidden pl-[6%]",children:Ae("p",{className:"animate-text-slide-up",children:"developer"})})]})]})})}function gA({project:t}){return et("div",{className:"flex flex-col gap-8 border-b border-b-white/50 last:border-b-0 last:pb-0 mb-7 pb-8",children:[Ae("h1",{className:"text-xl font-bold",children:t.title}),et("div",{className:"flex max-lg:flex-col gap-6",children:[Ae("div",{className:"flex-[50%] overflow-hidden",children:Ae("img",{src:t.image,className:"brightness-[0.8] hover:brightness-90 hover:scale-105 transition duration-300",alt:"",loading:"lazy"})}),et("div",{className:"flex-[50%] flex flex-col gap-8",children:[et("div",{children:[Ae("h1",{className:"text-lg font-bold",children:"Summary"}),Ae("p",{className:"text-white/75",children:t.description})]}),et("div",{children:[Ae("h1",{className:"text-lg font-bold",children:"Technologies"}),Ae("span",{className:"text-white/75",children:t.technologies.join(", ")})]}),et("div",{className:"flex gap-6 font-bold",children:[et("a",{href:t.livePreview,target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 group",children:[et("span",{children:["LIVE PREVIEW",Ae("div",{className:"h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"})]}),Ae("i",{className:"fa-solid fa-arrow-up rotate-45","aria-hidden":"true"})]}),et("a",{href:t.githubRepo,target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 group",children:[et("span",{children:["VIEW CODE",Ae("div",{className:"h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"})]}),Ae("i",{className:"fa-solid fa-arrow-up rotate-45","aria-hidden":"true"})]})]})]})]})]})}const vA="https://sharkri.github.io/portfolio/assets/where-is-waldo-817f727c.webp",_A="https://sharkri.github.io/portfolio/assets/todo-list-c5893cde.webp",yA="https://sharkri.github.io/portfolio/assets/medium-clone-01bf5865.webp",xA=[{title:"Medium Clone",description:"A platform for writers to share their articles (markdown supported) and read articles from other writers",githubRepo:"https://github.com/Sharkri/medium-clone",livePreview:"https://sharkri.github.io/medium-clone",image:yA,technologies:["ReactJS","Typescript","Firebase","TailwindCSS"]},{title:"Todo List",description:"A responsive Todo List application that uses Firebase to store todos and projects. You can either create an account to use, or continue as a guest.",githubRepo:"https://github.com/Sharkri/todo-list",livePreview:"https://todo-list-4aa13.web.app/",image:_A,technologies:["JavaScript","Firebase","Webpack","date-fns"]},{title:"Where's Waldo",description:`An interactive version of "Where's Waldo?", a game where players try to find several characters hidden inside a picture. In this version, players are timed. Upon completion, the user may enter their name into a leaderboard stored in firebase.`,githubRepo:"https://github.com/Sharkri/where-is-waldo",livePreview:"https://where-is-waldo-3e672.web.app/",image:vA,technologies:["ReactJS","React Router Dom","Firebase","React Testing Library"]}];function Nh({children:t,headingText:e,headingId:n,className:i}){return et("section",{children:[Ae(Jy,{id:n,children:e}),Ae(Qy.div,{initial:{filter:"blur(2px)",opacity:0},whileInView:{filter:"blur(0px)",opacity:1},transition:{type:"spring",stiffness:100,damping:24,mass:2},viewport:{once:!0},className:i,children:t})]})}Nh.defaultProps={className:""};function SA(){return Ae(Nh,{headingText:"Projects",headingId:"projects",children:xA.map(t=>Ae(gA,{project:t},t.title))})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="151",MA=0,sg=1,wA=2,ex=1,EA=2,vo=3,tr=0,sn=1,di=2,Ki=0,Ls=1,og=2,ag=3,lg=4,TA=5,as=100,AA=101,CA=102,ug=103,cg=104,bA=200,PA=201,LA=202,RA=203,tx=204,nx=205,DA=206,IA=207,UA=208,NA=209,FA=210,kA=0,OA=1,zA=2,ud=3,VA=4,BA=5,GA=6,HA=7,ix=0,WA=1,jA=2,yi=0,XA=1,$A=2,qA=3,YA=4,KA=5,rx=300,Bs=301,Gs=302,cd=303,fd=304,bu=306,dd=1e3,Bn=1001,hd=1002,$t=1003,fg=1004,xc=1005,Tn=1006,ZA=1007,ia=1008,Fr=1009,QA=1010,JA=1011,sx=1012,eC=1013,Er=1014,Tr=1015,ra=1016,tC=1017,nC=1018,Rs=1020,iC=1021,Gn=1023,rC=1024,sC=1025,br=1026,Hs=1027,oC=1028,aC=1029,lC=1030,uC=1031,cC=1033,Sc=33776,Mc=33777,wc=33778,Ec=33779,dg=35840,hg=35841,pg=35842,mg=35843,fC=36196,gg=37492,vg=37496,_g=37808,yg=37809,xg=37810,Sg=37811,Mg=37812,wg=37813,Eg=37814,Tg=37815,Ag=37816,Cg=37817,bg=37818,Pg=37819,Lg=37820,Rg=37821,Tc=36492,dC=36283,Dg=36284,Ig=36285,Ug=36286,kr=3e3,Ke=3001,hC=3200,pC=3201,mC=0,gC=1,Zn="srgb",sa="srgb-linear",ox="display-p3",Ac=7680,vC=519,Ng=35044,Fg="300 es",pd=1035;class qs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,md=180/Math.PI;function ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function Jt(t,e,n){return Math.max(e,Math.min(n,t))}function _C(t,e){return(t%e+e)%e}function bc(t,e,n){return(1-n)*t+n*e}function kg(t){return(t&t-1)===0&&t!==0}function yC(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ga(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,n=0){Xe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],m=i[8],y=r[0],g=r[3],h=r[6],v=r[1],_=r[4],x=r[7],M=r[2],C=r[5],b=r[8];return s[0]=o*y+a*v+l*M,s[3]=o*g+a*_+l*C,s[6]=o*h+a*x+l*b,s[1]=u*y+c*v+f*M,s[4]=u*g+c*_+f*C,s[7]=u*h+c*x+f*b,s[2]=d*y+p*v+m*M,s[5]=d*g+p*_+m*C,s[8]=d*h+p*x+m*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,m=n*f+i*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Pc.makeScale(e,n)),this}rotate(e){return this.premultiply(Pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Pc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pc=new Fe;function ax(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ds(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Lc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const xC=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),SC=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function MC(t){return t.convertSRGBToLinear().applyMatrix3(SC)}function wC(t){return t.applyMatrix3(xC).convertLinearToSRGB()}const EC={[sa]:t=>t,[Zn]:t=>t.convertSRGBToLinear(),[ox]:MC},TC={[sa]:t=>t,[Zn]:t=>t.convertLinearToSRGB(),[ox]:wC},cn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return sa},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=EC[e],r=TC[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let jr;class lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{jr===void 0&&(jr=oa("canvas")),jr.width=e.width,jr.height=e.height;const i=jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ds(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ds(n[i]/255)*255):n[i]=Ds(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ux{constructor(e=null){this.isSource=!0,this.uuid=ga(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Rc(r[o].image)):s.push(Rc(r[o]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?lx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AC=0;class on extends qs{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Bn,r=Bn,s=Tn,o=ia,a=Gn,l=Fr,u=on.DEFAULT_ANISOTROPY,c=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=ga(),this.name="",this.source=new ux(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dd:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dd:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=rx;on.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],m=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+y)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,M=(h+1)/2,C=(c+d)/4,b=(f+y)/4,P=(m+g)/4;return _>x&&_>M?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=b/i):x>M?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=P/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=b/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(f-y)*(f-y)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(f-y)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Or extends qs{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Tn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new ux(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cx extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class CC extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],m=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=m,e[n+3]=y;return}if(f!==y||l!==d||u!==p||c!==m){let g=1-a;const h=l*d+u*p+c*m+f*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const M=Math.sqrt(_),C=Math.atan2(M,h*v);g=Math.sin(g*C)/M,a=Math.sin(a*C)/M}const x=a*v;if(l=l*g+d*x,u=u*g+p*x,c=c*g+m*x,f=f*g+y*x,g===1-a){const M=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=M,u*=M,c*=M,f*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+c*f+l*p-u*d,e[n+1]=l*m+c*d+u*f-a*p,e[n+2]=u*m+c*p+a*d-l*f,e[n+3]=c*m-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*m,this._y=u*p*f-d*c*m,this._z=u*c*m+d*p*f,this._w=u*c*f-d*p*m;break;case"YXZ":this._x=d*c*f+u*p*m,this._y=u*p*f-d*c*m,this._z=u*c*m-d*p*f,this._w=u*c*f+d*p*m;break;case"ZXY":this._x=d*c*f-u*p*m,this._y=u*p*f+d*c*m,this._z=u*c*m+d*p*f,this._w=u*c*f-d*p*m;break;case"ZYX":this._x=d*c*f-u*p*m,this._y=u*p*f+d*c*m,this._z=u*c*m-d*p*f,this._w=u*c*f+d*p*m;break;case"YZX":this._x=d*c*f+u*p*m,this._y=u*p*f+d*c*m,this._z=u*c*m-d*p*f,this._w=u*c*f-d*p*m;break;case"XZY":this._x=d*c*f-u*p*m,this._y=u*p*f-d*c*m,this._z=u*c*m+d*p*f,this._w=u*c*f+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Og.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new F,Og=new va;class _a{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)si.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(si)}else r.boundingBox===null&&r.computeBoundingBox(),Xr.copy(r.boundingBox),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),Ha.subVectors(this.max,ao),$r.subVectors(e.a,ao),qr.subVectors(e.b,ao),Yr.subVectors(e.c,ao),Ci.subVectors(qr,$r),bi.subVectors(Yr,qr),cr.subVectors($r,Yr);let n=[0,-Ci.z,Ci.y,0,-bi.z,bi.y,0,-cr.z,cr.y,Ci.z,0,-Ci.x,bi.z,0,-bi.x,cr.z,0,-cr.x,-Ci.y,Ci.x,0,-bi.y,bi.x,0,-cr.y,cr.x,0];return!Ic(n,$r,qr,Yr,Ha)||(n=[1,0,0,0,1,0,0,0,1],!Ic(n,$r,qr,Yr,Ha))?!1:(Wa.crossVectors(Ci,bi),n=[Wa.x,Wa.y,Wa.z],Ic(n,$r,qr,Yr,Ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new F,new F,new F,new F,new F,new F,new F,new F],si=new F,Xr=new _a,$r=new F,qr=new F,Yr=new F,Ci=new F,bi=new F,cr=new F,ao=new F,Ha=new F,Wa=new F,fr=new F;function Ic(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){fr.fromArray(t,s);const a=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),u=n.dot(fr),c=i.dot(fr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bC=new _a,lo=new F,Uc=new F;class Pu{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const n=lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(Uc)),this.expandByPoint(lo.copy(e.center).sub(Uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new F,Nc=new F,ja=new F,Pi=new F,Fc=new F,Xa=new F,kc=new F;class fx{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Nc.copy(e).add(n).multiplyScalar(.5),ja.copy(n).sub(e).normalize(),Pi.copy(this.origin).sub(Nc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ja),a=Pi.dot(this.direction),l=-Pi.dot(ja),u=Pi.lengthSq(),c=Math.abs(1-o*o);let f,d,p,m;if(c>0)if(f=o*l-a,d=o*a-l,m=s*c,f>=0)if(d>=-m)if(d<=m){const y=1/c;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-m?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=m?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Nc).addScaledVector(ja,d),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Fc.subVectors(n,e),Xa.subVectors(i,e),kc.crossVectors(Fc,Xa);let o=this.direction.dot(kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);const l=a*this.direction.dot(Xa.crossVectors(Pi,Xa));if(l<0)return null;const u=a*this.direction.dot(Fc.cross(Pi));if(u<0||l+u>o)return null;const c=-a*Pi.dot(kc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,f,d,p,m,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=m,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,m=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+m*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=m+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,m=u*c,y=u*f;n[0]=d+y*a,n[4]=m*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-m,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,m=u*c,y=u*f;n[0]=d-y*a,n[4]=-o*f,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,m=a*c,y=a*f;n[0]=l*c,n[4]=m*u-p,n[8]=d*u+y,n[1]=l*f,n[5]=y*u+d,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,m=a*l,y=a*u;n[0]=l*c,n[4]=y-d*f,n[8]=m*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+m,n[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*u,m=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+y,n[5]=o*c,n[9]=p*f-m,n[2]=m*f-p,n[6]=a*c,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PC,e,LC)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Li.crossVectors(i,fn),Li.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Li.crossVectors(i,fn)),Li.normalize(),$a.crossVectors(fn,Li),r[0]=Li.x,r[4]=$a.x,r[8]=fn.x,r[1]=Li.y,r[5]=$a.y,r[9]=fn.y,r[2]=Li.z,r[6]=$a.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],m=i[2],y=i[6],g=i[10],h=i[14],v=i[3],_=i[7],x=i[11],M=i[15],C=r[0],b=r[4],P=r[8],S=r[12],T=r[1],X=r[5],j=r[9],D=r[13],U=r[2],O=r[6],Z=r[10],Q=r[14],R=r[3],B=r[7],z=r[11],ne=r[15];return s[0]=o*C+a*T+l*U+u*R,s[4]=o*b+a*X+l*O+u*B,s[8]=o*P+a*j+l*Z+u*z,s[12]=o*S+a*D+l*Q+u*ne,s[1]=c*C+f*T+d*U+p*R,s[5]=c*b+f*X+d*O+p*B,s[9]=c*P+f*j+d*Z+p*z,s[13]=c*S+f*D+d*Q+p*ne,s[2]=m*C+y*T+g*U+h*R,s[6]=m*b+y*X+g*O+h*B,s[10]=m*P+y*j+g*Z+h*z,s[14]=m*S+y*D+g*Q+h*ne,s[3]=v*C+_*T+x*U+M*R,s[7]=v*b+_*X+x*O+M*B,s[11]=v*P+_*j+x*Z+M*z,s[15]=v*S+_*D+x*Q+M*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],m=e[3],y=e[7],g=e[11],h=e[15];return m*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+g*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],m=e[12],y=e[13],g=e[14],h=e[15],v=f*g*u-y*d*u+y*l*p-a*g*p-f*l*h+a*d*h,_=m*d*u-c*g*u-m*l*p+o*g*p+c*l*h-o*d*h,x=c*y*u-m*f*u+m*a*p-o*y*p-c*a*h+o*f*h,M=m*f*l-c*y*l-m*a*d+o*y*d+c*a*g-o*f*g,C=n*v+i*_+r*x+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=v*b,e[1]=(y*d*s-f*g*s-y*r*p+i*g*p+f*r*h-i*d*h)*b,e[2]=(a*g*s-y*l*s+y*r*u-i*g*u-a*r*h+i*l*h)*b,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*b,e[4]=_*b,e[5]=(c*g*s-m*d*s+m*r*p-n*g*p-c*r*h+n*d*h)*b,e[6]=(m*l*s-o*g*s-m*r*u+n*g*u+o*r*h-n*l*h)*b,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*b,e[8]=x*b,e[9]=(m*f*s-c*y*s-m*i*p+n*y*p+c*i*h-n*f*h)*b,e[10]=(o*y*s-m*a*s+m*i*u-n*y*u-o*i*h+n*a*h)*b,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*b,e[12]=M*b,e[13]=(c*y*r-m*f*r+m*i*d-n*y*d-c*i*g+n*f*g)*b,e[14]=(m*a*r-o*y*r-m*i*l+n*y*l+o*i*g-n*a*g)*b,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,m=s*f,y=o*c,g=o*f,h=a*f,v=l*u,_=l*c,x=l*f,M=i.x,C=i.y,b=i.z;return r[0]=(1-(y+h))*M,r[1]=(p+x)*M,r[2]=(m-_)*M,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+h))*C,r[6]=(g+v)*C,r[7]=0,r[8]=(m+_)*b,r[9]=(g-v)*b,r[10]=(1-(d+y))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,c=1/o,f=1/a;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,p=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new F,Un=new mt,PC=new F(0,0,0),LC=new F(1,1,1),Li=new F,$a=new F,fn=new F,zg=new mt,Vg=new va;class Lu{constructor(e=0,n=0,i=0,r=Lu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lu.DEFAULT_ORDER="XYZ";class dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RC=0;const Bg=new F,Zr=new va,ai=new mt,qa=new F,uo=new F,DC=new F,IC=new va,Gg=new F(1,0,0),Hg=new F(0,1,0),Wg=new F(0,0,1),UC={type:"added"},jg={type:"removed"};class Dt extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RC++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new F,n=new Lu,i=new va,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Fe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Hg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,n){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Hg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(uo,qa,this.up):ai.lookAt(qa,uo,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(ai),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(UC)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(jg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,DC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,IC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new F(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new F,li=new F,Oc=new F,ui=new F,Qr=new F,Jr=new F,Xg=new F,zc=new F,Vc=new F,Bc=new F;let Ya=!1;class Vn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Nn.subVectors(e,n),r.cross(Nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Nn.subVectors(r,n),li.subVectors(i,n),Oc.subVectors(e,n);const o=Nn.dot(Nn),a=Nn.dot(li),l=Nn.dot(Oc),u=li.dot(li),c=li.dot(Oc),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,m=(o*c-a*l)*d;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,n,i,r,s,o,a,l){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ui),l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l}static isFrontFacing(e,n,i,r){return Nn.subVectors(i,n),li.subVectors(e,n),Nn.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Nn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ya===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ya=!0),Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),Jr.subVectors(s,i),zc.subVectors(e,i);const l=Qr.dot(zc),u=Jr.dot(zc);if(l<=0&&u<=0)return n.copy(i);Vc.subVectors(e,r);const c=Qr.dot(Vc),f=Jr.dot(Vc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Qr,o);Bc.subVectors(e,s);const p=Qr.dot(Bc),m=Jr.dot(Bc);if(m>=0&&p<=m)return n.copy(s);const y=p*u-l*m;if(y<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Jr,a);const g=c*m-p*f;if(g<=0&&f-c>=0&&p-m>=0)return Xg.subVectors(s,r),a=(f-c)/(f-c+(p-m)),n.copy(r).addScaledVector(Xg,a);const h=1/(g+y+d);return o=y*h,a=d*h,n.copy(i).addScaledVector(Qr,o).addScaledVector(Jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let NC=0;class ya extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NC++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=Ls,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=tx,this.blendDst=nx,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ud,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vC,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ac,this.stencilZFail=Ac,this.stencilZPass=Ac,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Zn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=cn.workingColorSpace){return this.r=e,this.g=n,this.b=i,cn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=cn.workingColorSpace){if(e=_C(e,1),n=Jt(n,0,1),i=Jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Gc(o,s,e+1/3),this.g=Gc(o,s,e),this.b=Gc(o,s,e-1/3)}return cn.toWorkingColorSpace(this,r),this}setStyle(e,n=Zn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,cn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,cn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Zn){const i=hx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zn){return cn.fromWorkingColorSpace(Ot.copy(this),e),Jt(Ot.r*255,0,255)<<16^Jt(Ot.g*255,0,255)<<8^Jt(Ot.b*255,0,255)<<0}getHexString(e=Zn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=cn.workingColorSpace){cn.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=cn.workingColorSpace){return cn.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Zn){cn.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Zn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${n*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,n,i){return this.getHSL(Fn),Fn.h+=e,Fn.s+=n,Fn.l+=i,this.setHSL(Fn.h,Fn.s,Fn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fn),e.getHSL(Ka);const i=bc(Fn.h,Ka.h,n),r=bc(Fn.s,Ka.s,n),s=bc(Fn.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new je;je.NAMES=hx;class px extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ix,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new F,Za=new Xe;class Pn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ng,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix3(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyMatrix4(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.applyNormalMatrix(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)dt.fromBufferAttribute(this,n),dt.transformDirection(e),this.setXYZ(n,dt.x,dt.y,dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ng&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class mx extends Pn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gx extends Pn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pr extends Pn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let FC=0;const Mn=new mt,Hc=new Dt,es=new F,dn=new _a,co=new _a,Et=new F;class ii extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FC++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ax(e)?gx:mx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(dn.min,co.min),dn.expandByPoint(Et),Et.addVectors(dn.max,co.max),dn.expandByPoint(Et)):(dn.expandByPoint(co.min),dn.expandByPoint(co.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Et.fromBufferAttribute(a,u),l&&(es.fromBufferAttribute(e,u),Et.add(es)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new F,c[T]=new F;const f=new F,d=new F,p=new F,m=new Xe,y=new Xe,g=new Xe,h=new F,v=new F;function _(T,X,j){f.fromArray(r,T*3),d.fromArray(r,X*3),p.fromArray(r,j*3),m.fromArray(o,T*2),y.fromArray(o,X*2),g.fromArray(o,j*2),d.sub(f),p.sub(f),y.sub(m),g.sub(m);const D=1/(y.x*g.y-g.x*y.y);isFinite(D)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-y.y).multiplyScalar(D),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-g.x).multiplyScalar(D),u[T].add(h),u[X].add(h),u[j].add(h),c[T].add(v),c[X].add(v),c[j].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let T=0,X=x.length;T<X;++T){const j=x[T],D=j.start,U=j.count;for(let O=D,Z=D+U;O<Z;O+=3)_(i[O+0],i[O+1],i[O+2])}const M=new F,C=new F,b=new F,P=new F;function S(T){b.fromArray(s,T*3),P.copy(b);const X=u[T];M.copy(X),M.sub(b.multiplyScalar(b.dot(X))).normalize(),C.crossVectors(P,X);const D=C.dot(c[T])<0?-1:1;l[T*4]=M.x,l[T*4+1]=M.y,l[T*4+2]=M.z,l[T*4+3]=D}for(let T=0,X=x.length;T<X;++T){const j=x[T],D=j.start,U=j.count;for(let O=D,Z=D+U;O<Z;O+=3)S(i[O+0]),S(i[O+1]),S(i[O+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Et.fromBufferAttribute(e,n),Et.normalize(),e.setXYZ(n,Et.x,Et.y,Et.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let h=0;h<c;h++)d[m++]=u[p++]}return new Pn(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $g=new mt,qn=new fx,Qa=new Pu,qg=new F,ts=new F,ns=new F,is=new F,Wc=new F,Ja=new F,el=new Xe,tl=new Xe,nl=new Xe,Yg=new F,Kg=new F,Zg=new F,il=new F,rl=new F;class zi extends Dt{constructor(e=new ii,n=new px){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ja.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Wc.fromBufferAttribute(f,e),o?Ja.addScaledVector(Wc,c):Ja.addScaledVector(Wc.sub(n),c))}n.add(Ja)}return this.isSkinnedMesh&&this.applyBoneTransform(e,n),n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Qa.copy(i.boundingSphere),Qa.applyMatrix4(s),qn.copy(e.ray).recast(e.near),Qa.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Qa,qg)===null||qn.origin.distanceToSquared(qg)>(e.far-e.near)**2))||($g.copy(s).invert(),qn.copy(e.ray).applyMatrix4($g),i.boundingBox!==null&&qn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv2,f=i.attributes.normal,d=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,y=d.length;m<y;m++){const g=d[m],h=r[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,M=_;x<M;x+=3){const C=a.getX(x),b=a.getX(x+1),P=a.getX(x+2);o=sl(this,h,e,qn,u,c,f,C,b,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,h=y;g<h;g+=3){const v=a.getX(g),_=a.getX(g+1),x=a.getX(g+2);o=sl(this,r,e,qn,u,c,f,v,_,x),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,y=d.length;m<y;m++){const g=d[m],h=r[g.materialIndex],v=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,M=_;x<M;x+=3){const C=x,b=x+1,P=x+2;o=sl(this,h,e,qn,u,c,f,C,b,P),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,h=y;g<h;g+=3){const v=g,_=g+1,x=g+2;o=sl(this,r,e,qn,u,c,f,v,_,x),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function kC(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;rl.copy(a),rl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(rl);return u<n.near||u>n.far?null:{distance:u,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ts),t.getVertexPosition(l,ns),t.getVertexPosition(u,is);const c=kC(t,e,n,i,ts,ns,is,il);if(c){r&&(el.fromBufferAttribute(r,a),tl.fromBufferAttribute(r,l),nl.fromBufferAttribute(r,u),c.uv=Vn.getInterpolation(il,ts,ns,is,el,tl,nl,new Xe)),s&&(el.fromBufferAttribute(s,a),tl.fromBufferAttribute(s,l),nl.fromBufferAttribute(s,u),c.uv2=Vn.getInterpolation(il,ts,ns,is,el,tl,nl,new Xe)),o&&(Yg.fromBufferAttribute(o,a),Kg.fromBufferAttribute(o,l),Zg.fromBufferAttribute(o,u),c.normal=Vn.getInterpolation(il,ts,ns,is,Yg,Kg,Zg,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};Vn.getNormal(ts,ns,is,f.normal),c.face=f}return c}class xa extends ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pr(u,3)),this.setAttribute("normal",new Pr(c,3)),this.setAttribute("uv",new Pr(f,2));function m(y,g,h,v,_,x,M,C,b,P,S){const T=x/b,X=M/P,j=x/2,D=M/2,U=C/2,O=b+1,Z=P+1;let Q=0,R=0;const B=new F;for(let z=0;z<Z;z++){const ne=z*X-D;for(let K=0;K<O;K++){const V=K*T-j;B[y]=V*v,B[g]=ne*_,B[h]=U,u.push(B.x,B.y,B.z),B[y]=0,B[g]=0,B[h]=C>0?1:-1,c.push(B.x,B.y,B.z),f.push(K/b),f.push(1-z/P),Q+=1}}for(let z=0;z<P;z++)for(let ne=0;ne<b;ne++){const K=d+ne+O*z,V=d+ne+O*(z+1),Y=d+(ne+1)+O*(z+1),oe=d+(ne+1)+O*z;l.push(K,V,oe),l.push(V,Y,oe),R+=6}a.addGroup(p,R,S),p+=R,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Wt(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function OC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vx(t){return t.getRenderTarget()===null&&t.outputEncoding===Ke?Zn:sa}const zC={clone:Ws,merge:Wt};var VC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zr extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VC,this.fragmentShader=BC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=OC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _x extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends _x{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=md*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return md*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const rs=-90,ss=1;class GC extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new An(rs,ss,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new An(rs,ss,e,n);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new An(rs,ss,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new An(rs,ss,e,n);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new An(rs,ss,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new An(rs,ss,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=yi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class yx extends on{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Bs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HC extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xa(5,5,5),s=new zr({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Ki});s.uniforms.tEquirect.value=n;const o=new zi(r,s),a=n.minFilter;return n.minFilter===ia&&(n.minFilter=Tn),new GC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const jc=new F,WC=new F,jC=new Fe;class vr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jc.subVectors(i,n).cross(WC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||jC.getNormalMatrix(e),r=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Pu,ol=new F;class kh{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,o=new vr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],p=i[9],m=i[10],y=i[11],g=i[12],h=i[13],v=i[14],_=i[15];return n[0].setComponents(a-r,f-l,y-d,_-g).normalize(),n[1].setComponents(a+r,f+l,y+d,_+g).normalize(),n[2].setComponents(a+s,f+u,y+p,_+h).normalize(),n[3].setComponents(a-s,f-u,y-p,_-h).normalize(),n[4].setComponents(a-o,f-c,y-m,_-v).normalize(),n[5].setComponents(a+o,f+c,y+m,_+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ol.x=r.normal.x>0?e.max.x:e.min.x,ol.y=r.normal.y>0?e.max.y:e.min.y,ol.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ol)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function XC(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,f,d),u.onUploadCallback();let m;if(f instanceof Float32Array)m=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(f instanceof Int16Array)m=5122;else if(f instanceof Uint32Array)m=5125;else if(f instanceof Int32Array)m=5124;else if(f instanceof Int8Array)m=5120;else if(f instanceof Uint8Array)m=5121;else if(f instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;t.bindBuffer(f,u),p.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):t.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Oh extends ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],m=[],y=[],g=[];for(let h=0;h<c;h++){const v=h*d-o;for(let _=0;_<u;_++){const x=_*f-s;m.push(x,-v,0),y.push(0,0,1),g.push(_/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+u*h,x=v+u*(h+1),M=v+1+u*(h+1),C=v+1+u*h;p.push(_,x,C),p.push(x,M,C)}this.setIndex(p),this.setAttribute("position",new Pr(m,3)),this.setAttribute("normal",new Pr(y,3)),this.setAttribute("uv",new Pr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.width,e.height,e.widthSegments,e.heightSegments)}}var $C=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YC=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,KC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JC="vec3 transformed = vec3( position );",eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ib=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,db=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pb=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",xb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Fb=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,kb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ob=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Gb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hb=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Xb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$b=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Yb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n3=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,r3=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,s3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,o3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,a3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,h3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,C3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,L3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,I3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,k3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,O3=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z3=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V3=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,W3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,X3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,q3=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Y3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,K3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Q3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,eP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nP=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_P=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:$C,alphamap_pars_fragment:qC,alphatest_fragment:YC,alphatest_pars_fragment:KC,aomap_fragment:ZC,aomap_pars_fragment:QC,begin_vertex:JC,beginnormal_vertex:eb,bsdfs:tb,iridescence_fragment:nb,bumpmap_pars_fragment:ib,clipping_planes_fragment:rb,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:ob,clipping_planes_vertex:ab,color_fragment:lb,color_pars_fragment:ub,color_pars_vertex:cb,color_vertex:fb,common:db,cube_uv_reflection_fragment:hb,defaultnormal_vertex:pb,displacementmap_pars_vertex:mb,displacementmap_vertex:gb,emissivemap_fragment:vb,emissivemap_pars_fragment:_b,encodings_fragment:yb,encodings_pars_fragment:xb,envmap_fragment:Sb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:wb,envmap_pars_vertex:Eb,envmap_physical_pars_fragment:Fb,envmap_vertex:Tb,fog_vertex:Ab,fog_pars_vertex:Cb,fog_fragment:bb,fog_pars_fragment:Pb,gradientmap_pars_fragment:Lb,lightmap_fragment:Rb,lightmap_pars_fragment:Db,lights_lambert_fragment:Ib,lights_lambert_pars_fragment:Ub,lights_pars_begin:Nb,lights_toon_fragment:kb,lights_toon_pars_fragment:Ob,lights_phong_fragment:zb,lights_phong_pars_fragment:Vb,lights_physical_fragment:Bb,lights_physical_pars_fragment:Gb,lights_fragment_begin:Hb,lights_fragment_maps:Wb,lights_fragment_end:jb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:$b,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Yb,map_fragment:Kb,map_pars_fragment:Zb,map_particle_fragment:Qb,map_particle_pars_fragment:Jb,metalnessmap_fragment:e3,metalnessmap_pars_fragment:t3,morphcolor_vertex:n3,morphnormal_vertex:i3,morphtarget_pars_vertex:r3,morphtarget_vertex:s3,normal_fragment_begin:o3,normal_fragment_maps:a3,normal_pars_fragment:l3,normal_pars_vertex:u3,normal_vertex:c3,normalmap_pars_fragment:f3,clearcoat_normal_fragment_begin:d3,clearcoat_normal_fragment_maps:h3,clearcoat_pars_fragment:p3,iridescence_pars_fragment:m3,output_fragment:g3,packing:v3,premultiplied_alpha_fragment:_3,project_vertex:y3,dithering_fragment:x3,dithering_pars_fragment:S3,roughnessmap_fragment:M3,roughnessmap_pars_fragment:w3,shadowmap_pars_fragment:E3,shadowmap_pars_vertex:T3,shadowmap_vertex:A3,shadowmask_pars_fragment:C3,skinbase_vertex:b3,skinning_pars_vertex:P3,skinning_vertex:L3,skinnormal_vertex:R3,specularmap_fragment:D3,specularmap_pars_fragment:I3,tonemapping_fragment:U3,tonemapping_pars_fragment:N3,transmission_fragment:F3,transmission_pars_fragment:k3,uv_pars_fragment:O3,uv_pars_vertex:z3,uv_vertex:V3,worldpos_vertex:B3,background_vert:G3,background_frag:H3,backgroundCube_vert:W3,backgroundCube_frag:j3,cube_vert:X3,cube_frag:$3,depth_vert:q3,depth_frag:Y3,distanceRGBA_vert:K3,distanceRGBA_frag:Z3,equirect_vert:Q3,equirect_frag:J3,linedashed_vert:eP,linedashed_frag:tP,meshbasic_vert:nP,meshbasic_frag:iP,meshlambert_vert:rP,meshlambert_frag:sP,meshmatcap_vert:oP,meshmatcap_frag:aP,meshnormal_vert:lP,meshnormal_frag:uP,meshphong_vert:cP,meshphong_frag:fP,meshphysical_vert:dP,meshphysical_frag:hP,meshtoon_vert:pP,meshtoon_frag:mP,points_vert:gP,points_frag:vP,shadow_vert:_P,shadow_frag:yP,sprite_vert:xP,sprite_frag:SP},ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaTest:{value:0}}},Qn={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Qn.physical={uniforms:Wt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const al={r:0,b:0,g:0};function MP(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function m(g,h){let v=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?n:e).get(_));const x=t.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(_=null),_===null?y(a,l):_&&_.isColor&&(y(_,1),v=!0),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===bu)?(c===void 0&&(c=new zi(new xa(1,1,1),new zr({name:"BackgroundCubeMaterial",uniforms:Ws(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=_.encoding!==Ke,(f!==_||d!==_.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new zi(new Oh(2,2),new zr({name:"BackgroundMaterial",uniforms:Ws(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=_.encoding!==Ke,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function y(g,h){g.getRGB(al,vx(t)),i.buffers.color.setClear(al.r,al.g,al.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,y(a,l)},render:m}}function wP(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,c=!1;function f(U,O,Z,Q,R){let B=!1;if(o){const z=y(Q,Z,O);u!==z&&(u=z,p(u.object)),B=h(U,Q,Z,R),B&&v(U,Q,Z,R)}else{const z=O.wireframe===!0;(u.geometry!==Q.id||u.program!==Z.id||u.wireframe!==z)&&(u.geometry=Q.id,u.program=Z.id,u.wireframe=z,B=!0)}R!==null&&n.update(R,34963),(B||c)&&(c=!1,P(U,O,Z,Q),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function m(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function y(U,O,Z){const Q=Z.wireframe===!0;let R=a[U.id];R===void 0&&(R={},a[U.id]=R);let B=R[O.id];B===void 0&&(B={},R[O.id]=B);let z=B[Q];return z===void 0&&(z=g(d()),B[Q]=z),z}function g(U){const O=[],Z=[],Q=[];for(let R=0;R<r;R++)O[R]=0,Z[R]=0,Q[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Z,attributeDivisors:Q,object:U,attributes:{},index:null}}function h(U,O,Z,Q){const R=u.attributes,B=O.attributes;let z=0;const ne=Z.getAttributes();for(const K in ne)if(ne[K].location>=0){const Y=R[K];let oe=B[K];if(oe===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;z++}return u.attributesNum!==z||u.index!==Q}function v(U,O,Z,Q){const R={},B=O.attributes;let z=0;const ne=Z.getAttributes();for(const K in ne)if(ne[K].location>=0){let Y=B[K];Y===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),R[K]=oe,z++}u.attributes=R,u.attributesNum=z,u.index=Q}function _(){const U=u.newAttributes;for(let O=0,Z=U.length;O<Z;O++)U[O]=0}function x(U){M(U,0)}function M(U,O){const Z=u.newAttributes,Q=u.enabledAttributes,R=u.attributeDivisors;Z[U]=1,Q[U]===0&&(t.enableVertexAttribArray(U),Q[U]=1),R[U]!==O&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,O),R[U]=O)}function C(){const U=u.newAttributes,O=u.enabledAttributes;for(let Z=0,Q=O.length;Z<Q;Z++)O[Z]!==U[Z]&&(t.disableVertexAttribArray(Z),O[Z]=0)}function b(U,O,Z,Q,R,B){i.isWebGL2===!0&&(Z===5124||Z===5125)?t.vertexAttribIPointer(U,O,Z,R,B):t.vertexAttribPointer(U,O,Z,Q,R,B)}function P(U,O,Z,Q){if(i.isWebGL2===!1&&(U.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const R=Q.attributes,B=Z.getAttributes(),z=O.defaultAttributeValues;for(const ne in B){const K=B[ne];if(K.location>=0){let V=R[ne];if(V===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(V=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(V=U.instanceColor)),V!==void 0){const Y=V.normalized,oe=V.itemSize,re=n.get(V);if(re===void 0)continue;const k=re.buffer,Ce=re.type,xe=re.bytesPerElement;if(V.isInterleavedBufferAttribute){const se=V.data,pe=se.stride,Ve=V.offset;if(se.isInstancedInterleavedBuffer){for(let he=0;he<K.locationSize;he++)M(K.location+he,se.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let he=0;he<K.locationSize;he++)x(K.location+he);t.bindBuffer(34962,k);for(let he=0;he<K.locationSize;he++)b(K.location+he,oe/K.locationSize,Ce,Y,pe*xe,(Ve+oe/K.locationSize*he)*xe)}else{if(V.isInstancedBufferAttribute){for(let se=0;se<K.locationSize;se++)M(K.location+se,V.meshPerAttribute);U.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let se=0;se<K.locationSize;se++)x(K.location+se);t.bindBuffer(34962,k);for(let se=0;se<K.locationSize;se++)b(K.location+se,oe/K.locationSize,Ce,Y,oe*xe,oe/K.locationSize*se*xe)}}else if(z!==void 0){const Y=z[ne];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(K.location,Y);break;case 3:t.vertexAttrib3fv(K.location,Y);break;case 4:t.vertexAttrib4fv(K.location,Y);break;default:t.vertexAttrib1fv(K.location,Y)}}}}C()}function S(){j();for(const U in a){const O=a[U];for(const Z in O){const Q=O[Z];for(const R in Q)m(Q[R].object),delete Q[R];delete O[Z]}delete a[U]}}function T(U){if(a[U.id]===void 0)return;const O=a[U.id];for(const Z in O){const Q=O[Z];for(const R in Q)m(Q[R].object),delete Q[R];delete O[Z]}delete a[U.id]}function X(U){for(const O in a){const Z=a[O];if(Z[U.id]===void 0)continue;const Q=Z[U.id];for(const R in Q)m(Q[R].object),delete Q[R];delete Z[U.id]}}function j(){D(),c=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:D,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:X,initAttributes:_,enableAttribute:x,disableUnusedAttributes:C}}function EP(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=t,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function TP(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){if(b==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),p=t.getParameter(3379),m=t.getParameter(34076),y=t.getParameter(34921),g=t.getParameter(36347),h=t.getParameter(36348),v=t.getParameter(36349),_=d>0,x=o||e.has("OES_texture_float"),M=_&&x,C=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:m,maxAttributes:y,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:C}}function AP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new vr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,y=f.clipIntersection,g=f.clipShadows,h=t.get(f);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,_=v*4;let x=h.clippingState||null;l.value=x,x=c(m,d,_,p);for(let M=0;M!==_;++M)x[M]=n[M];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,m){const y=f!==null?f.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function CP(t){let e=new WeakMap;function n(o,a){return a===cd?o.mapping=Bs:a===fd&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===cd||a===fd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new HC(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Sx extends _x{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Qg=[.125,.215,.35,.446,.526,.582],yr=20,Xc=new Sx,Jg=new je;let $c=null;const _r=(1+Math.sqrt(5))/2,os=1/_r,ev=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,_r,os),new F(0,_r,-os),new F(os,0,_r),new F(-os,0,_r),new F(_r,os,0),new F(-_r,os,0)];class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$c=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c),e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Bs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:ra,format:Gn,encoding:kr,depthBuffer:!1},r=nv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bP(s)),this._blurMaterial=PP(s,e,n)}return r}_compileMaterial(e){const n=new zi(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Jg),c.toneMapping=yi,c.autoClear=!1;const p=new px({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),m=new zi(new xa,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Jg),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;ll(r,v*_,h>2?_:0,_,_),c.setRenderTarget(r),y&&c.render(m,a),c.render(e,a)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Bs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ev[(r-1)%ev.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new zi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yr-1),y=s/m,g=isFinite(s)?1+Math.floor(c*y):yr;g>yr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);const h=[];let v=0;for(let b=0;b<yr;++b){const P=b/y,S=Math.exp(-P*P/2);h.push(S),b===0?v+=S:b<g&&(v+=2*S)}for(let b=0;b<h.length;b++)h[b]=h[b]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-i;const x=this._sizeLods[r],M=3*x*(r>_-ws?r-_+ws:0),C=4*(this._cubeSize-x);ll(n,M,C,3*x,2*x),l.setRenderTarget(n),l.render(f,Xc)}}function bP(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Qg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ws?l=Qg[o-t+ws-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,m=6,y=3,g=2,h=1,v=new Float32Array(y*m*p),_=new Float32Array(g*m*p),x=new Float32Array(h*m*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,P=C>2?0:-1,S=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];v.set(S,y*m*C),_.set(d,g*m*C);const T=[C,C,C,C,C,C];x.set(T,h*m*C)}const M=new ii;M.setAttribute("position",new Pn(v,y)),M.setAttribute("uv",new Pn(_,g)),M.setAttribute("faceIndex",new Pn(x,h)),e.push(M),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function nv(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PP(t,e,n){const i=new Float32Array(yr),r=new F(0,1,0);return new zr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function iv(){return new zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function rv(){return new zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===cd||l===fd,c=l===Bs||l===Gs;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new tv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new tv(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function RP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DP(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const m in d)e.update(d[m],34962);const p=f.morphAttributes;for(const m in p){const y=p[m];for(let g=0,h=y.length;g<h;g++)e.update(y[g],34962)}}function u(f){const d=[],p=f.index,m=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,x=v.length;_<x;_+=3){const M=v[_+0],C=v[_+1],b=v[_+2];d.push(M,C,C,b,b,M)}}else{const v=m.array;y=m.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const M=_+0,C=_+1,b=_+2;d.push(M,C,C,b,b,M)}}const g=new(ax(d)?gx:mx)(d,1);g.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function IP(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){t.drawElements(s,p,a,d*l),n.update(p,s,1)}function f(d,p,m){if(m===0)return;let y,g;if(r)y=t,g="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[g](s,p,a,d*l,m),n.update(p,s,m)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function UP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NP(t,e){return t[0]-e[0]}function FP(t,e){return Math.abs(e[1])-Math.abs(t[1])}function kP(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ct,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=m!==void 0?m.length:0;let g=s.get(c);if(g===void 0||g.count!==y){let O=function(){D.dispose(),s.delete(c),c.removeEventListener("dispose",O)};var p=O;g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,M=c.morphAttributes.color!==void 0,C=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),M===!0&&(S=3);let T=c.attributes.position.count*S,X=1;T>e.maxTextureSize&&(X=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const j=new Float32Array(T*X*4*y),D=new cx(j,T,X,y);D.type=Tr,D.needsUpdate=!0;const U=S*4;for(let Z=0;Z<y;Z++){const Q=C[Z],R=b[Z],B=P[Z],z=T*X*4*Z;for(let ne=0;ne<Q.count;ne++){const K=ne*U;_===!0&&(o.fromBufferAttribute(Q,ne),j[z+K+0]=o.x,j[z+K+1]=o.y,j[z+K+2]=o.z,j[z+K+3]=0),x===!0&&(o.fromBufferAttribute(R,ne),j[z+K+4]=o.x,j[z+K+5]=o.y,j[z+K+6]=o.z,j[z+K+7]=0),M===!0&&(o.fromBufferAttribute(B,ne),j[z+K+8]=o.x,j[z+K+9]=o.y,j[z+K+10]=o.z,j[z+K+11]=B.itemSize===4?o.w:1)}}g={count:y,texture:D,size:new Xe(T,X)},s.set(c,g),c.addEventListener("dispose",O)}let h=0;for(let _=0;_<d.length;_++)h+=d[_];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const m=d===void 0?0:d.length;let y=i[c.id];if(y===void 0||y.length!==m){y=[];for(let x=0;x<m;x++)y[x]=[x,0];i[c.id]=y}for(let x=0;x<m;x++){const M=y[x];M[0]=x,M[1]=d[x]}y.sort(FP);for(let x=0;x<8;x++)x<m&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(NP);const g=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=a[x],C=M[0],b=M[1];C!==Number.MAX_SAFE_INTEGER&&b?(g&&c.getAttribute("morphTarget"+x)!==g[C]&&c.setAttribute("morphTarget"+x,g[C]),h&&c.getAttribute("morphNormal"+x)!==h[C]&&c.setAttribute("morphNormal"+x,h[C]),r[x]=b,v+=b):(g&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),h&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const _=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",_),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function OP(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Mx=new on,wx=new cx,Ex=new CC,Tx=new yx,sv=[],ov=[],av=new Float32Array(16),lv=new Float32Array(9),uv=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sv[r];if(s===void 0&&(s=new Float32Array(r),sv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ru(t,e){let n=ov[e];n===void 0&&(n=new Int32Array(e),ov[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2fv(this.addr,e),xt(n,e)}}function BP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(yt(n,e))return;t.uniform3fv(this.addr,e),xt(n,e)}}function GP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4fv(this.addr,e),xt(n,e)}}function HP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;uv.set(i),t.uniformMatrix2fv(this.addr,!1,uv),xt(n,i)}}function WP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;lv.set(i),t.uniformMatrix3fv(this.addr,!1,lv),xt(n,i)}}function jP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),xt(n,e)}else{if(yt(n,i))return;av.set(i),t.uniformMatrix4fv(this.addr,!1,av),xt(n,i)}}function XP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2iv(this.addr,e),xt(n,e)}}function qP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3iv(this.addr,e),xt(n,e)}}function YP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4iv(this.addr,e),xt(n,e)}}function KP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(yt(n,e))return;t.uniform2uiv(this.addr,e),xt(n,e)}}function QP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(yt(n,e))return;t.uniform3uiv(this.addr,e),xt(n,e)}}function JP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(yt(n,e))return;t.uniform4uiv(this.addr,e),xt(n,e)}}function e2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Mx,r)}function t2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ex,r)}function n2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Tx,r)}function i2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||wx,r)}function r2(t){switch(t){case 5126:return zP;case 35664:return VP;case 35665:return BP;case 35666:return GP;case 35674:return HP;case 35675:return WP;case 35676:return jP;case 5124:case 35670:return XP;case 35667:case 35671:return $P;case 35668:case 35672:return qP;case 35669:case 35673:return YP;case 5125:return KP;case 36294:return ZP;case 36295:return QP;case 36296:return JP;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}function s2(t,e){t.uniform1fv(this.addr,e)}function o2(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function a2(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function l2(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function u2(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function c2(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function f2(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function d2(t,e){t.uniform1iv(this.addr,e)}function h2(t,e){t.uniform2iv(this.addr,e)}function p2(t,e){t.uniform3iv(this.addr,e)}function m2(t,e){t.uniform4iv(this.addr,e)}function g2(t,e){t.uniform1uiv(this.addr,e)}function v2(t,e){t.uniform2uiv(this.addr,e)}function _2(t,e){t.uniform3uiv(this.addr,e)}function y2(t,e){t.uniform4uiv(this.addr,e)}function x2(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Mx,s[o])}function S2(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Ex,s[o])}function M2(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Tx,s[o])}function w2(t,e,n){const i=this.cache,r=e.length,s=Ru(n,r);yt(i,s)||(t.uniform1iv(this.addr,s),xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||wx,s[o])}function E2(t){switch(t){case 5126:return s2;case 35664:return o2;case 35665:return a2;case 35666:return l2;case 35674:return u2;case 35675:return c2;case 35676:return f2;case 5124:case 35670:return d2;case 35667:case 35671:return h2;case 35668:case 35672:return p2;case 35669:case 35673:return m2;case 5125:return g2;case 36294:return v2;case 36295:return _2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return S2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return w2}}class T2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=r2(n.type)}}class A2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=E2(n.type)}}class C2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function cv(t,e){t.seq.push(e),t.map[e.id]=e}function b2(t,e,n){const i=t.name,r=i.length;for(qc.lastIndex=0;;){const s=qc.exec(i),o=qc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){cv(n,u===void 0?new T2(a,t,e):new A2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new C2(a),cv(n,f)),n=f}}}class Tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);b2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let P2=0;function L2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function R2(t){switch(t){case kr:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function dv(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+L2(t.getShaderSource(e),o)}else return r}function D2(t,e){const n=R2(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function I2(t,e){let n;switch(e){case XA:n="Linear";break;case $A:n="Reinhard";break;case qA:n="OptimizedCineon";break;case YA:n="ACESFilmic";break;case KA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function U2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_o).join(`
`)}function N2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function F2(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function _o(t){return t!==""}function hv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(t){return t.replace(k2,O2)}function O2(t,e){const n=Le[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return gd(n)}const z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mv(t){return t.replace(z2,V2)}function V2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ex?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===EA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vo&&(e="SHADOWMAP_TYPE_VSM"),e}function G2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Bs:case Gs:e="ENVMAP_TYPE_CUBE";break;case bu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function H2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function W2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ix:e="ENVMAP_BLENDING_MULTIPLY";break;case WA:e="ENVMAP_BLENDING_MIX";break;case jA:e="ENVMAP_BLENDING_ADD";break}return e}function j2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function X2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=B2(n),u=G2(n),c=H2(n),f=W2(n),d=j2(n),p=n.isWebGL2?"":U2(n),m=N2(s),y=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=[m].filter(_o).join(`
`),g.length>0&&(g+=`
`),h=[p,m].filter(_o).join(`
`),h.length>0&&(h+=`
`)):(g=[gv(n),"#define SHADER_NAME "+n.shaderName,m,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs2?"#define USE_UV2":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_o).join(`
`),h=[p,gv(n),"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs2?"#define USE_UV2":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yi?"#define TONE_MAPPING":"",n.toneMapping!==yi?Le.tonemapping_pars_fragment:"",n.toneMapping!==yi?I2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,D2("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_o).join(`
`)),o=gd(o),o=hv(o,n),o=pv(o,n),a=gd(a),a=hv(a,n),a=pv(a,n),o=mv(o),a=mv(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+g+o,x=v+h+a,M=fv(r,35633,_),C=fv(r,35632,x);if(r.attachShader(y,M),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y),t.debug.checkShaderErrors){const S=r.getProgramInfoLog(y).trim(),T=r.getShaderInfoLog(M).trim(),X=r.getShaderInfoLog(C).trim();let j=!0,D=!0;if(r.getProgramParameter(y,35714)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,M,C);else{const U=dv(r,M,"vertex"),O=dv(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,35715)+`

Program Info Log: `+S+`
`+U+`
`+O)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(T===""||X==="")&&(D=!1);D&&(this.diagnostics={runnable:j,programLog:S,vertexShader:{log:T,prefix:g},fragmentShader:{log:X,prefix:h}})}r.deleteShader(M),r.deleteShader(C);let b;this.getUniforms=function(){return b===void 0&&(b=new Tl(r,y)),b};let P;return this.getAttributes=function(){return P===void 0&&(P=F2(r,y)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.name=n.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=C,this}let $2=0;class q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Y2(e),n.set(e,i)),i}}class Y2{constructor(e){this.id=$2++,this.code=e,this.usedTimes=0}}function K2(t,e,n,i,r,s,o){const a=new dx,l=new q2,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===1?"uv2":"uv"}function g(S,T,X,j,D){const U=j.fog,O=D.geometry,Z=S.isMeshStandardMaterial?j.environment:null,Q=(S.isMeshStandardMaterial?n:e).get(S.envMap||Z),R=Q&&Q.mapping===bu?Q.image.height:null,B=m[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=z!==void 0?z.length:0;let K=0;O.morphAttributes.position!==void 0&&(K=1),O.morphAttributes.normal!==void 0&&(K=2),O.morphAttributes.color!==void 0&&(K=3);let V,Y,oe,re;if(B){const ue=Qn[B];V=ue.vertexShader,Y=ue.fragmentShader}else V=S.vertexShader,Y=S.fragmentShader,l.update(S),oe=l.getVertexShaderID(S),re=l.getFragmentShaderID(S);const k=t.getRenderTarget(),Ce=D.isInstancedMesh===!0,xe=!!S.map,se=!!S.matcap,pe=!!Q,Ve=!!S.aoMap,he=!!S.lightMap,Ie=!!S.bumpMap,St=!!S.normalMap,Pt=!!S.displacementMap,Mt=!!S.emissiveMap,gt=!!S.metalnessMap,Be=!!S.roughnessMap,ot=S.clearcoat>0,Zt=S.iridescence>0,A=S.sheen>0,w=S.transmission>0,G=ot&&!!S.clearcoatMap,te=ot&&!!S.clearcoatNormalMap,ie=ot&&!!S.clearcoatRoughnessMap,le=Zt&&!!S.iridescenceMap,Ee=Zt&&!!S.iridescenceThicknessMap,de=A&&!!S.sheenColorMap,$=A&&!!S.sheenRoughnessMap,me=!!S.specularMap,_e=!!S.specularColorMap,Se=!!S.specularIntensityMap,fe=w&&!!S.transmissionMap,ge=w&&!!S.thicknessMap,ke=!!S.gradientMap,He=!!S.alphaMap,lt=S.alphaTest>0,L=!!S.extensions,W=!!O.attributes.uv2;return{isWebGL2:c,shaderID:B,shaderName:S.type,vertexShader:V,fragmentShader:Y,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:re,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Ce,instancingColor:Ce&&D.instanceColor!==null,supportsVertexTextures:d,outputEncoding:k===null?t.outputEncoding:k.isXRRenderTarget===!0?k.texture.encoding:kr,map:xe,matcap:se,envMap:pe,envMapMode:pe&&Q.mapping,envMapCubeUVHeight:R,aoMap:Ve,lightMap:he,bumpMap:Ie,normalMap:St,displacementMap:d&&Pt,emissiveMap:Mt,normalMapObjectSpace:St&&S.normalMapType===gC,normalMapTangentSpace:St&&S.normalMapType===mC,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&S.map.encoding===Ke,metalnessMap:gt,roughnessMap:Be,clearcoat:ot,clearcoatMap:G,clearcoatNormalMap:te,clearcoatRoughnessMap:ie,iridescence:Zt,iridescenceMap:le,iridescenceThicknessMap:Ee,sheen:A,sheenColorMap:de,sheenRoughnessMap:$,specularMap:me,specularColorMap:_e,specularIntensityMap:Se,transmission:w,transmissionMap:fe,thicknessMap:ge,gradientMap:ke,opaque:S.transparent===!1&&S.blending===Ls,alphaMap:He,alphaTest:lt,combine:S.combine,mapUv:xe&&y(S.map.channel),aoMapUv:Ve&&y(S.aoMap.channel),lightMapUv:he&&y(S.lightMap.channel),bumpMapUv:Ie&&y(S.bumpMap.channel),normalMapUv:St&&y(S.normalMap.channel),displacementMapUv:Pt&&y(S.displacementMap.channel),emissiveMapUv:Mt&&y(S.emissiveMap.channel),metalnessMapUv:gt&&y(S.metalnessMap.channel),roughnessMapUv:Be&&y(S.roughnessMap.channel),clearcoatMapUv:G&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:$&&y(S.sheenRoughnessMap.channel),specularMapUv:me&&y(S.specularMap.channel),specularColorMapUv:_e&&y(S.specularColorMap.channel),specularIntensityMapUv:Se&&y(S.specularIntensityMap.channel),transmissionMapUv:fe&&y(S.transmissionMap.channel),thicknessMapUv:ge&&y(S.thicknessMap.channel),alphaMapUv:He&&y(S.alphaMap.channel),vertexTangents:St&&!!O.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs2:W,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(xe||He),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:K,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:yi,useLegacyLights:t.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===di,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:L&&S.extensions.derivatives===!0,extensionFragDepth:L&&S.extensions.fragDepth===!0,extensionDrawBuffers:L&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)T.push(X),T.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(v(T,S),_(T,S),T.push(t.outputEncoding)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputEncoding),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function _(S,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),S.push(a.mask)}function x(S){const T=m[S.type];let X;if(T){const j=Qn[T];X=zC.clone(j.uniforms)}else X=S.uniforms;return X}function M(S,T){let X;for(let j=0,D=u.length;j<D;j++){const U=u[j];if(U.cacheKey===T){X=U,++X.usedTimes;break}}return X===void 0&&(X=new X2(t,T,S,s),u.push(X)),X}function C(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:x,acquireProgram:M,releaseProgram:C,releaseShaderCache:b,programs:u,dispose:P}}function Z2(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Q2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function _v(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,m,y,g){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:m,renderOrder:f.renderOrder,z:y,group:g},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=y,h.group=g),e++,h}function a(f,d,p,m,y,g){const h=o(f,d,p,m,y,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,m,y,g){const h=o(f,d,p,m,y,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||Q2),i.length>1&&i.sort(d||vv),r.length>1&&r.sort(d||vv)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function J2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new _v,t.set(i,[o])):r>=s.length?(o=new _v,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function eL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new je};break;case"SpotLight":n={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function tL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nL=0;function iL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rL(t,e){const n=new eL,i=tL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,o=new mt,a=new mt;function l(c,f){let d=0,p=0,m=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let y=0,g=0,h=0,v=0,_=0,x=0,M=0,C=0,b=0,P=0;c.sort(iL);const S=f===!0?Math.PI:1;for(let X=0,j=c.length;X<j;X++){const D=c[X],U=D.color,O=D.intensity,Z=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*O*S,p+=U.g*O*S,m+=U.b*O*S;else if(D.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(D.sh.coefficients[R],O);else if(D.isDirectionalLight){const R=n.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const B=D.shadow,z=i.get(D);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,r.directionalShadow[y]=z,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=D.shadow.matrix,x++}r.directional[y]=R,y++}else if(D.isSpotLight){const R=n.get(D);R.position.setFromMatrixPosition(D.matrixWorld),R.color.copy(U).multiplyScalar(O*S),R.distance=Z,R.coneCos=Math.cos(D.angle),R.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),R.decay=D.decay,r.spot[h]=R;const B=D.shadow;if(D.map&&(r.spotLightMap[b]=D.map,b++,B.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[h]=B.matrix,D.castShadow){const z=i.get(D);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,r.spotShadow[h]=z,r.spotShadowMap[h]=Q,C++}h++}else if(D.isRectAreaLight){const R=n.get(D);R.color.copy(U).multiplyScalar(O),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=R,v++}else if(D.isPointLight){const R=n.get(D);if(R.color.copy(D.color).multiplyScalar(D.intensity*S),R.distance=D.distance,R.decay=D.decay,D.castShadow){const B=D.shadow,z=i.get(D);z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,r.pointShadow[g]=z,r.pointShadowMap[g]=Q,r.pointShadowMatrix[g]=D.shadow.matrix,M++}r.point[g]=R,g++}else if(D.isHemisphereLight){const R=n.get(D);R.skyColor.copy(D.color).multiplyScalar(O*S),R.groundColor.copy(D.groundColor).multiplyScalar(O*S),r.hemi[_]=R,_++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=m;const T=r.hash;(T.directionalLength!==y||T.pointLength!==g||T.spotLength!==h||T.rectAreaLength!==v||T.hemiLength!==_||T.numDirectionalShadows!==x||T.numPointShadows!==M||T.numSpotShadows!==C||T.numSpotMaps!==b)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=_,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=C+b-P,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=P,T.directionalLength=y,T.pointLength=g,T.spotLength=h,T.rectAreaLength=v,T.hemiLength=_,T.numDirectionalShadows=x,T.numPointShadows=M,T.numSpotShadows=C,T.numSpotMaps=b,r.version=nL++)}function u(c,f){let d=0,p=0,m=0,y=0,g=0;const h=f.matrixWorldInverse;for(let v=0,_=c.length;v<_;v++){const x=c[v];if(x.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),d++}else if(x.isSpotLight){const M=r.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(h),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const M=r.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const M=r.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(h),g++}}}return{setup:l,setupView:u,state:r}}function yv(t,e){const n=new rL(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function sL(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new yv(t,e),n.set(s,[l])):o>=a.length?(l=new yv(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class oL extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aL extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cL(t,e,n){let i=new kh;const r=new Xe,s=new Xe,o=new Ct,a=new oL({depthPacking:pC}),l=new aL,u={},c=n.maxTextureSize,f={[tr]:sn,[sn]:tr,[di]:di},d=new zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:lL,fragmentShader:uL}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new ii;m.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zi(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ex,this.render=function(x,M,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;const b=t.getRenderTarget(),P=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.state;T.setBlending(Ki),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let X=0,j=x.length;X<j;X++){const D=x[X],U=D.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const O=U.getFrameExtents();if(r.multiply(O),s.copy(U.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,U.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,U.mapSize.y=s.y)),U.map===null){const Q=this.type!==vo?{minFilter:$t,magFilter:$t}:{};U.map=new Or(r.x,r.y,Q),U.map.texture.name=D.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const Z=U.getViewportCount();for(let Q=0;Q<Z;Q++){const R=U.getViewport(Q);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),T.viewport(o),U.updateMatrices(D,Q),i=U.getFrustum(),_(M,C,U.camera,D,this.type)}U.isPointLightShadow!==!0&&this.type===vo&&h(U,C),U.needsUpdate=!1}g.needsUpdate=!1,t.setRenderTarget(b,P,S)};function h(x,M){const C=e.update(y);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Or(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,t.setRenderTarget(x.mapPass),t.clear(),t.renderBufferDirect(M,null,C,d,y,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,t.setRenderTarget(x.map),t.clear(),t.renderBufferDirect(M,null,C,p,y,null)}function v(x,M,C,b){let P=null;const S=C.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0)P=S;else if(P=C.isPointLight===!0?l:a,t.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const T=P.uuid,X=M.uuid;let j=u[T];j===void 0&&(j={},u[T]=j);let D=j[X];D===void 0&&(D=P.clone(),j[X]=D),P=D}if(P.visible=M.visible,P.wireframe=M.wireframe,b===vo?P.side=M.shadowSide!==null?M.shadowSide:M.side:P.side=M.shadowSide!==null?M.shadowSide:f[M.side],P.alphaMap=M.alphaMap,P.alphaTest=M.alphaTest,P.map=M.map,P.clipShadows=M.clipShadows,P.clippingPlanes=M.clippingPlanes,P.clipIntersection=M.clipIntersection,P.displacementMap=M.displacementMap,P.displacementScale=M.displacementScale,P.displacementBias=M.displacementBias,P.wireframeLinewidth=M.wireframeLinewidth,P.linewidth=M.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const T=t.properties.get(P);T.light=C}return P}function _(x,M,C,b,P){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&P===vo)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,x.matrixWorld);const X=e.update(x),j=x.material;if(Array.isArray(j)){const D=X.groups;for(let U=0,O=D.length;U<O;U++){const Z=D[U],Q=j[Z.materialIndex];if(Q&&Q.visible){const R=v(x,Q,b,P);t.renderBufferDirect(C,null,X,R,x,Z)}}}else if(j.visible){const D=v(x,j,b,P);t.renderBufferDirect(C,null,X,D,x,null)}}const T=x.children;for(let X=0,j=T.length;X<j;X++)_(T[X],M,C,b,P)}}function fL(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const W=new Ct;let J=null;const ue=new Ct(0,0,0,0);return{setMask:function(ve){J!==ve&&!L&&(t.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){L=ve},setClear:function(ve,qe,Je,Ut,Ti){Ti===!0&&(ve*=Ut,qe*=Ut,Je*=Ut),W.set(ve,qe,Je,Ut),ue.equals(W)===!1&&(t.clearColor(ve,qe,Je,Ut),ue.copy(W))},reset:function(){L=!1,J=null,ue.set(-1,0,0,0)}}}function s(){let L=!1,W=null,J=null,ue=null;return{setTest:function(ve){ve?k(2929):Ce(2929)},setMask:function(ve){W!==ve&&!L&&(t.depthMask(ve),W=ve)},setFunc:function(ve){if(J!==ve){switch(ve){case kA:t.depthFunc(512);break;case OA:t.depthFunc(519);break;case zA:t.depthFunc(513);break;case ud:t.depthFunc(515);break;case VA:t.depthFunc(514);break;case BA:t.depthFunc(518);break;case GA:t.depthFunc(516);break;case HA:t.depthFunc(517);break;default:t.depthFunc(515)}J=ve}},setLocked:function(ve){L=ve},setClear:function(ve){ue!==ve&&(t.clearDepth(ve),ue=ve)},reset:function(){L=!1,W=null,J=null,ue=null}}}function o(){let L=!1,W=null,J=null,ue=null,ve=null,qe=null,Je=null,Ut=null,Ti=null;return{setTest:function(ut){L||(ut?k(2960):Ce(2960))},setMask:function(ut){W!==ut&&!L&&(t.stencilMask(ut),W=ut)},setFunc:function(ut,xn,Xn){(J!==ut||ue!==xn||ve!==Xn)&&(t.stencilFunc(ut,xn,Xn),J=ut,ue=xn,ve=Xn)},setOp:function(ut,xn,Xn){(qe!==ut||Je!==xn||Ut!==Xn)&&(t.stencilOp(ut,xn,Xn),qe=ut,Je=xn,Ut=Xn)},setLocked:function(ut){L=ut},setClear:function(ut){Ti!==ut&&(t.clearStencil(ut),Ti=ut)},reset:function(){L=!1,W=null,J=null,ue=null,ve=null,qe=null,Je=null,Ut=null,Ti=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},m=new WeakMap,y=[],g=null,h=!1,v=null,_=null,x=null,M=null,C=null,b=null,P=null,S=!1,T=null,X=null,j=null,D=null,U=null;const O=t.getParameter(35661);let Z=!1,Q=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(R)[1]),Z=Q>=1):R.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),Z=Q>=2);let B=null,z={};const ne=t.getParameter(3088),K=t.getParameter(2978),V=new Ct().fromArray(ne),Y=new Ct().fromArray(K);function oe(L,W,J){const ue=new Uint8Array(4),ve=t.createTexture();t.bindTexture(L,ve),t.texParameteri(L,10241,9728),t.texParameteri(L,10240,9728);for(let qe=0;qe<J;qe++)t.texImage2D(W+qe,0,6408,1,1,0,6408,5121,ue);return ve}const re={};re[3553]=oe(3553,3553,1),re[34067]=oe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),k(2929),l.setFunc(ud),Pt(!1),Mt(sg),k(2884),Ie(Ki);function k(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function Ce(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function xe(L,W){return p[L]!==W?(t.bindFramebuffer(L,W),p[L]=W,i&&(L===36009&&(p[36160]=W),L===36160&&(p[36009]=W)),!0):!1}function se(L,W){let J=y,ue=!1;if(L)if(J=m.get(W),J===void 0&&(J=[],m.set(W,J)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(J.length!==ve.length||J[0]!==36064){for(let qe=0,Je=ve.length;qe<Je;qe++)J[qe]=36064+qe;J.length=ve.length,ue=!0}}else J[0]!==36064&&(J[0]=36064,ue=!0);else J[0]!==1029&&(J[0]=1029,ue=!0);ue&&(n.isWebGL2?t.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function pe(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const Ve={[as]:32774,[AA]:32778,[CA]:32779};if(i)Ve[ug]=32775,Ve[cg]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(Ve[ug]=L.MIN_EXT,Ve[cg]=L.MAX_EXT)}const he={[bA]:0,[PA]:1,[LA]:768,[tx]:770,[FA]:776,[UA]:774,[DA]:772,[RA]:769,[nx]:771,[NA]:775,[IA]:773};function Ie(L,W,J,ue,ve,qe,Je,Ut){if(L===Ki){h===!0&&(Ce(3042),h=!1);return}if(h===!1&&(k(3042),h=!0),L!==TA){if(L!==v||Ut!==S){if((_!==as||C!==as)&&(t.blendEquation(32774),_=as,C=as),Ut)switch(L){case Ls:t.blendFuncSeparate(1,771,1,771);break;case og:t.blendFunc(1,1);break;case ag:t.blendFuncSeparate(0,769,0,1);break;case lg:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ls:t.blendFuncSeparate(770,771,1,771);break;case og:t.blendFunc(770,1);break;case ag:t.blendFuncSeparate(0,769,0,1);break;case lg:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,M=null,b=null,P=null,v=L,S=Ut}return}ve=ve||W,qe=qe||J,Je=Je||ue,(W!==_||ve!==C)&&(t.blendEquationSeparate(Ve[W],Ve[ve]),_=W,C=ve),(J!==x||ue!==M||qe!==b||Je!==P)&&(t.blendFuncSeparate(he[J],he[ue],he[qe],he[Je]),x=J,M=ue,b=qe,P=Je),v=L,S=!1}function St(L,W){L.side===di?Ce(2884):k(2884);let J=L.side===sn;W&&(J=!J),Pt(J),L.blending===Ls&&L.transparent===!1?Ie(Ki):Ie(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ue=L.stencilWrite;u.setTest(ue),ue&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?k(32926):Ce(32926)}function Pt(L){T!==L&&(L?t.frontFace(2304):t.frontFace(2305),T=L)}function Mt(L){L!==MA?(k(2884),L!==X&&(L===sg?t.cullFace(1029):L===wA?t.cullFace(1028):t.cullFace(1032))):Ce(2884),X=L}function gt(L){L!==j&&(Z&&t.lineWidth(L),j=L)}function Be(L,W,J){L?(k(32823),(D!==W||U!==J)&&(t.polygonOffset(W,J),D=W,U=J)):Ce(32823)}function ot(L){L?k(3089):Ce(3089)}function Zt(L){L===void 0&&(L=33984+O-1),B!==L&&(t.activeTexture(L),B=L)}function A(L,W,J){J===void 0&&(B===null?J=33984+O-1:J=B);let ue=z[J];ue===void 0&&(ue={type:void 0,texture:void 0},z[J]=ue),(ue.type!==L||ue.texture!==W)&&(B!==J&&(t.activeTexture(J),B=J),t.bindTexture(L,W||re[L]),ue.type=L,ue.texture=W)}function w(){const L=z[B];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function G(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){V.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),V.copy(L))}function ge(L){Y.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function ke(L,W){let J=f.get(W);J===void 0&&(J=new WeakMap,f.set(W,J));let ue=J.get(L);ue===void 0&&(ue=t.getUniformBlockIndex(W,L.name),J.set(L,ue))}function He(L,W){const ue=f.get(W).get(L);c.get(W)!==ue&&(t.uniformBlockBinding(W,ue,L.__bindingPointIndex),c.set(W,ue))}function lt(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},B=null,z={},p={},m=new WeakMap,y=[],g=null,h=!1,v=null,_=null,x=null,M=null,C=null,b=null,P=null,S=!1,T=null,X=null,j=null,D=null,U=null,V.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:k,disable:Ce,bindFramebuffer:xe,drawBuffers:se,useProgram:pe,setBlending:Ie,setMaterial:St,setFlipSided:Pt,setCullFace:Mt,setLineWidth:gt,setPolygonOffset:Be,setScissorTest:ot,activeTexture:Zt,bindTexture:A,unbindTexture:w,compressedTexImage2D:G,compressedTexImage3D:te,texImage2D:_e,texImage3D:Se,updateUBOMapping:ke,uniformBlockBinding:He,texStorage2D:$,texStorage3D:me,texSubImage2D:ie,texSubImage3D:le,compressedTexSubImage2D:Ee,compressedTexSubImage3D:de,scissor:fe,viewport:ge,reset:lt}}function dL(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let y;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return h?new OffscreenCanvas(A,w):oa("canvas")}function _(A,w,G,te){let ie=1;if((A.width>te||A.height>te)&&(ie=te/Math.max(A.width,A.height)),ie<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const le=w?yC:Math.floor,Ee=le(ie*A.width),de=le(ie*A.height);y===void 0&&(y=v(Ee,de));const $=G?v(Ee,de):y;return $.width=Ee,$.height=de,$.getContext("2d").drawImage(A,0,0,Ee,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ee+"x"+de+")."),$}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return kg(A.width)&&kg(A.height)}function M(A){return a?!1:A.wrapS!==Bn||A.wrapT!==Bn||A.minFilter!==$t&&A.minFilter!==Tn}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==$t&&A.minFilter!==Tn}function b(A){t.generateMipmap(A)}function P(A,w,G,te,ie=!1){if(a===!1)return w;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le=w;return w===6403&&(G===5126&&(le=33326),G===5131&&(le=33325),G===5121&&(le=33321)),w===33319&&(G===5126&&(le=33328),G===5131&&(le=33327),G===5121&&(le=33323)),w===6408&&(G===5126&&(le=34836),G===5131&&(le=34842),G===5121&&(le=te===Ke&&ie===!1?35907:32856),G===32819&&(le=32854),G===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function S(A,w,G){return C(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==$t&&A.minFilter!==Tn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){return A===$t||A===fg||A===xc?9728:9729}function X(A){const w=A.target;w.removeEventListener("dispose",X),D(w),w.isVideoTexture&&m.delete(w)}function j(A){const w=A.target;w.removeEventListener("dispose",j),O(w)}function D(A){const w=i.get(A);if(w.__webglInit===void 0)return;const G=A.source,te=g.get(G);if(te){const ie=te[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&U(A),Object.keys(te).length===0&&g.delete(G)}i.remove(A)}function U(A){const w=i.get(A);t.deleteTexture(w.__webglTexture);const G=A.source,te=g.get(G);delete te[w.__cacheKey],o.memory.textures--}function O(A){const w=A.texture,G=i.get(A),te=i.get(w);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&t.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&t.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&t.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,le=w.length;ie<le;ie++){const Ee=i.get(w[ie]);Ee.__webglTexture&&(t.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(w[ie])}i.remove(w),i.remove(A)}let Z=0;function Q(){Z=0}function R(){const A=Z;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Z+=1,A}function B(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.encoding),w.join()}function z(A,w){const G=i.get(A);if(A.isVideoTexture&&ot(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,A,w);return}}n.bindTexture(3553,G.__webglTexture,33984+w)}function ne(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Ce(G,A,w);return}n.bindTexture(35866,G.__webglTexture,33984+w)}function K(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Ce(G,A,w);return}n.bindTexture(32879,G.__webglTexture,33984+w)}function V(A,w){const G=i.get(A);if(A.version>0&&G.__version!==A.version){xe(G,A,w);return}n.bindTexture(34067,G.__webglTexture,33984+w)}const Y={[dd]:10497,[Bn]:33071,[hd]:33648},oe={[$t]:9728,[fg]:9984,[xc]:9986,[Tn]:9729,[ZA]:9985,[ia]:9987};function re(A,w,G){if(G?(t.texParameteri(A,10242,Y[w.wrapS]),t.texParameteri(A,10243,Y[w.wrapT]),(A===32879||A===35866)&&t.texParameteri(A,32882,Y[w.wrapR]),t.texParameteri(A,10240,oe[w.magFilter]),t.texParameteri(A,10241,oe[w.minFilter])):(t.texParameteri(A,10242,33071),t.texParameteri(A,10243,33071),(A===32879||A===35866)&&t.texParameteri(A,32882,33071),(w.wrapS!==Bn||w.wrapT!==Bn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,10240,T(w.magFilter)),t.texParameteri(A,10241,T(w.minFilter)),w.minFilter!==$t&&w.minFilter!==Tn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===$t||w.minFilter!==xc&&w.minFilter!==ia||w.type===Tr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(t.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function k(A,w){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",X));const te=w.source;let ie=g.get(te);ie===void 0&&(ie={},g.set(te,ie));const le=B(w);if(le!==A.__cacheKey){ie[le]===void 0&&(ie[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ie[le].usedTimes++;const Ee=ie[A.__cacheKey];Ee!==void 0&&(ie[A.__cacheKey].usedTimes--,Ee.usedTimes===0&&U(w)),A.__cacheKey=le,A.__webglTexture=ie[le].texture}return G}function Ce(A,w,G){let te=3553;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=35866),w.isData3DTexture&&(te=32879);const ie=k(A,w),le=w.source;n.bindTexture(te,A.__webglTexture,33984+G);const Ee=i.get(le);if(le.version!==Ee.__version||ie===!0){n.activeTexture(33984+G),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const de=M(w)&&x(w.image)===!1;let $=_(w.image,de,!1,c);$=Zt(w,$);const me=x($)||a,_e=s.convert(w.format,w.encoding);let Se=s.convert(w.type),fe=P(w.internalFormat,_e,Se,w.encoding,w.isVideoTexture);re(te,w,me);let ge;const ke=w.mipmaps,He=a&&w.isVideoTexture!==!0,lt=Ee.__version===void 0||ie===!0,L=S(w,$,me);if(w.isDepthTexture)fe=6402,a?w.type===Tr?fe=36012:w.type===Er?fe=33190:w.type===Rs?fe=35056:fe=33189:w.type===Tr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===br&&fe===6402&&w.type!==sx&&w.type!==Er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Er,Se=s.convert(w.type)),w.format===Hs&&fe===6402&&(fe=34041,w.type!==Rs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Rs,Se=s.convert(w.type))),lt&&(He?n.texStorage2D(3553,1,fe,$.width,$.height):n.texImage2D(3553,0,fe,$.width,$.height,0,_e,Se,null));else if(w.isDataTexture)if(ke.length>0&&me){He&&lt&&n.texStorage2D(3553,L,fe,ke[0].width,ke[0].height);for(let W=0,J=ke.length;W<J;W++)ge=ke[W],He?n.texSubImage2D(3553,W,0,0,ge.width,ge.height,_e,Se,ge.data):n.texImage2D(3553,W,fe,ge.width,ge.height,0,_e,Se,ge.data);w.generateMipmaps=!1}else He?(lt&&n.texStorage2D(3553,L,fe,$.width,$.height),n.texSubImage2D(3553,0,0,0,$.width,$.height,_e,Se,$.data)):n.texImage2D(3553,0,fe,$.width,$.height,0,_e,Se,$.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){He&&lt&&n.texStorage3D(35866,L,fe,ke[0].width,ke[0].height,$.depth);for(let W=0,J=ke.length;W<J;W++)ge=ke[W],w.format!==Gn?_e!==null?He?n.compressedTexSubImage3D(35866,W,0,0,0,ge.width,ge.height,$.depth,_e,ge.data,0,0):n.compressedTexImage3D(35866,W,fe,ge.width,ge.height,$.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage3D(35866,W,0,0,0,ge.width,ge.height,$.depth,_e,Se,ge.data):n.texImage3D(35866,W,fe,ge.width,ge.height,$.depth,0,_e,Se,ge.data)}else{He&&lt&&n.texStorage2D(3553,L,fe,ke[0].width,ke[0].height);for(let W=0,J=ke.length;W<J;W++)ge=ke[W],w.format!==Gn?_e!==null?He?n.compressedTexSubImage2D(3553,W,0,0,ge.width,ge.height,_e,ge.data):n.compressedTexImage2D(3553,W,fe,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?n.texSubImage2D(3553,W,0,0,ge.width,ge.height,_e,Se,ge.data):n.texImage2D(3553,W,fe,ge.width,ge.height,0,_e,Se,ge.data)}else if(w.isDataArrayTexture)He?(lt&&n.texStorage3D(35866,L,fe,$.width,$.height,$.depth),n.texSubImage3D(35866,0,0,0,0,$.width,$.height,$.depth,_e,Se,$.data)):n.texImage3D(35866,0,fe,$.width,$.height,$.depth,0,_e,Se,$.data);else if(w.isData3DTexture)He?(lt&&n.texStorage3D(32879,L,fe,$.width,$.height,$.depth),n.texSubImage3D(32879,0,0,0,0,$.width,$.height,$.depth,_e,Se,$.data)):n.texImage3D(32879,0,fe,$.width,$.height,$.depth,0,_e,Se,$.data);else if(w.isFramebufferTexture){if(lt)if(He)n.texStorage2D(3553,L,fe,$.width,$.height);else{let W=$.width,J=$.height;for(let ue=0;ue<L;ue++)n.texImage2D(3553,ue,fe,W,J,0,_e,Se,null),W>>=1,J>>=1}}else if(ke.length>0&&me){He&&lt&&n.texStorage2D(3553,L,fe,ke[0].width,ke[0].height);for(let W=0,J=ke.length;W<J;W++)ge=ke[W],He?n.texSubImage2D(3553,W,0,0,_e,Se,ge):n.texImage2D(3553,W,fe,_e,Se,ge);w.generateMipmaps=!1}else He?(lt&&n.texStorage2D(3553,L,fe,$.width,$.height),n.texSubImage2D(3553,0,0,0,_e,Se,$)):n.texImage2D(3553,0,fe,_e,Se,$);C(w,me)&&b(te),Ee.__version=le.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function xe(A,w,G){if(w.image.length!==6)return;const te=k(A,w),ie=w.source;n.bindTexture(34067,A.__webglTexture,33984+G);const le=i.get(ie);if(ie.version!==le.__version||te===!0){n.activeTexture(33984+G),t.pixelStorei(37440,w.flipY),t.pixelStorei(37441,w.premultiplyAlpha),t.pixelStorei(3317,w.unpackAlignment),t.pixelStorei(37443,0);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,de=w.image[0]&&w.image[0].isDataTexture,$=[];for(let W=0;W<6;W++)!Ee&&!de?$[W]=_(w.image[W],!1,!0,u):$[W]=de?w.image[W].image:w.image[W],$[W]=Zt(w,$[W]);const me=$[0],_e=x(me)||a,Se=s.convert(w.format,w.encoding),fe=s.convert(w.type),ge=P(w.internalFormat,Se,fe,w.encoding),ke=a&&w.isVideoTexture!==!0,He=le.__version===void 0||te===!0;let lt=S(w,me,_e);re(34067,w,_e);let L;if(Ee){ke&&He&&n.texStorage2D(34067,lt,ge,me.width,me.height);for(let W=0;W<6;W++){L=$[W].mipmaps;for(let J=0;J<L.length;J++){const ue=L[J];w.format!==Gn?Se!==null?ke?n.compressedTexSubImage2D(34069+W,J,0,0,ue.width,ue.height,Se,ue.data):n.compressedTexImage2D(34069+W,J,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?n.texSubImage2D(34069+W,J,0,0,ue.width,ue.height,Se,fe,ue.data):n.texImage2D(34069+W,J,ge,ue.width,ue.height,0,Se,fe,ue.data)}}}else{L=w.mipmaps,ke&&He&&(L.length>0&&lt++,n.texStorage2D(34067,lt,ge,$[0].width,$[0].height));for(let W=0;W<6;W++)if(de){ke?n.texSubImage2D(34069+W,0,0,0,$[W].width,$[W].height,Se,fe,$[W].data):n.texImage2D(34069+W,0,ge,$[W].width,$[W].height,0,Se,fe,$[W].data);for(let J=0;J<L.length;J++){const ve=L[J].image[W].image;ke?n.texSubImage2D(34069+W,J+1,0,0,ve.width,ve.height,Se,fe,ve.data):n.texImage2D(34069+W,J+1,ge,ve.width,ve.height,0,Se,fe,ve.data)}}else{ke?n.texSubImage2D(34069+W,0,0,0,Se,fe,$[W]):n.texImage2D(34069+W,0,ge,Se,fe,$[W]);for(let J=0;J<L.length;J++){const ue=L[J];ke?n.texSubImage2D(34069+W,J+1,0,0,Se,fe,ue.image[W]):n.texImage2D(34069+W,J+1,ge,Se,fe,ue.image[W])}}}C(w,_e)&&b(34067),le.__version=ie.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function se(A,w,G,te,ie){const le=s.convert(G.format,G.encoding),Ee=s.convert(G.type),de=P(G.internalFormat,le,Ee,G.encoding);i.get(w).__hasExternalTextures||(ie===32879||ie===35866?n.texImage3D(ie,0,de,w.width,w.height,w.depth,0,le,Ee,null):n.texImage2D(ie,0,de,w.width,w.height,0,le,Ee,null)),n.bindFramebuffer(36160,A),Be(w)?d.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(G).__webglTexture,0,gt(w)):(ie===3553||ie>=34069&&ie<=34074)&&t.framebufferTexture2D(36160,te,ie,i.get(G).__webglTexture,0),n.bindFramebuffer(36160,null)}function pe(A,w,G){if(t.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let te=33189;if(G||Be(w)){const ie=w.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Tr?te=36012:ie.type===Er&&(te=33190));const le=gt(w);Be(w)?d.renderbufferStorageMultisampleEXT(36161,le,te,w.width,w.height):t.renderbufferStorageMultisample(36161,le,te,w.width,w.height)}else t.renderbufferStorage(36161,te,w.width,w.height);t.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){const te=gt(w);G&&Be(w)===!1?t.renderbufferStorageMultisample(36161,te,35056,w.width,w.height):Be(w)?d.renderbufferStorageMultisampleEXT(36161,te,35056,w.width,w.height):t.renderbufferStorage(36161,34041,w.width,w.height),t.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ie=0;ie<te.length;ie++){const le=te[ie],Ee=s.convert(le.format,le.encoding),de=s.convert(le.type),$=P(le.internalFormat,Ee,de,le.encoding),me=gt(w);G&&Be(w)===!1?t.renderbufferStorageMultisample(36161,me,$,w.width,w.height):Be(w)?d.renderbufferStorageMultisampleEXT(36161,me,$,w.width,w.height):t.renderbufferStorage(36161,$,w.width,w.height)}}t.bindRenderbuffer(36161,null)}function Ve(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const te=i.get(w.depthTexture).__webglTexture,ie=gt(w);if(w.depthTexture.format===br)Be(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):t.framebufferTexture2D(36160,36096,3553,te,0);else if(w.depthTexture.format===Hs)Be(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function he(A){const w=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ve(w.__webglFramebuffer,A)}else if(G){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]=t.createRenderbuffer(),pe(w.__webglDepthbuffer[te],A,!1)}else n.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),pe(w.__webglDepthbuffer,A,!1);n.bindFramebuffer(36160,null)}function Ie(A,w,G){const te=i.get(A);w!==void 0&&se(te.__webglFramebuffer,A,A.texture,36064,3553),G!==void 0&&he(A)}function St(A){const w=A.texture,G=i.get(A),te=i.get(w);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,o.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,le=A.isWebGLMultipleRenderTargets===!0,Ee=x(A)||a;if(ie){G.__webglFramebuffer=[];for(let de=0;de<6;de++)G.__webglFramebuffer[de]=t.createFramebuffer()}else{if(G.__webglFramebuffer=t.createFramebuffer(),le)if(r.drawBuffers){const de=A.texture;for(let $=0,me=de.length;$<me;$++){const _e=i.get(de[$]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Be(A)===!1){const de=le?w:[w];G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let $=0;$<de.length;$++){const me=de[$];G.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(36161,G.__webglColorRenderbuffer[$]);const _e=s.convert(me.format,me.encoding),Se=s.convert(me.type),fe=P(me.internalFormat,_e,Se,me.encoding,A.isXRRenderTarget===!0),ge=gt(A);t.renderbufferStorageMultisample(36161,ge,fe,A.width,A.height),t.framebufferRenderbuffer(36160,36064+$,36161,G.__webglColorRenderbuffer[$])}t.bindRenderbuffer(36161,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(36160,null)}}if(ie){n.bindTexture(34067,te.__webglTexture),re(34067,w,Ee);for(let de=0;de<6;de++)se(G.__webglFramebuffer[de],A,w,36064,34069+de);C(w,Ee)&&b(34067),n.unbindTexture()}else if(le){const de=A.texture;for(let $=0,me=de.length;$<me;$++){const _e=de[$],Se=i.get(_e);n.bindTexture(3553,Se.__webglTexture),re(3553,_e,Ee),se(G.__webglFramebuffer,A,_e,36064+$,3553),C(_e,Ee)&&b(3553)}n.unbindTexture()}else{let de=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?de=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,te.__webglTexture),re(de,w,Ee),se(G.__webglFramebuffer,A,w,36064,de),C(w,Ee)&&b(de),n.unbindTexture()}A.depthBuffer&&he(A)}function Pt(A){const w=x(A)||a,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ie=G.length;te<ie;te++){const le=G[te];if(C(le,w)){const Ee=A.isWebGLCubeRenderTarget?34067:3553,de=i.get(le).__webglTexture;n.bindTexture(Ee,de),b(Ee),n.unbindTexture()}}}function Mt(A){if(a&&A.samples>0&&Be(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,te=A.height;let ie=16384;const le=[],Ee=A.stencilBuffer?33306:36096,de=i.get(A),$=A.isWebGLMultipleRenderTargets===!0;if($)for(let me=0;me<w.length;me++)n.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+me,36161,null),n.bindFramebuffer(36160,de.__webglFramebuffer),t.framebufferTexture2D(36009,36064+me,3553,null,0);n.bindFramebuffer(36008,de.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,de.__webglFramebuffer);for(let me=0;me<w.length;me++){le.push(36064+me),A.depthBuffer&&le.push(Ee);const _e=de.__ignoreDepthValues!==void 0?de.__ignoreDepthValues:!1;if(_e===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),$&&t.framebufferRenderbuffer(36008,36064,36161,de.__webglColorRenderbuffer[me]),_e===!0&&(t.invalidateFramebuffer(36008,[Ee]),t.invalidateFramebuffer(36009,[Ee])),$){const Se=i.get(w[me]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,Se,0)}t.blitFramebuffer(0,0,G,te,0,0,G,te,ie,9728),p&&t.invalidateFramebuffer(36008,le)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),$)for(let me=0;me<w.length;me++){n.bindFramebuffer(36160,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+me,36161,de.__webglColorRenderbuffer[me]);const _e=i.get(w[me]).__webglTexture;n.bindFramebuffer(36160,de.__webglFramebuffer),t.framebufferTexture2D(36009,36064+me,3553,_e,0)}n.bindFramebuffer(36009,de.__webglMultisampledFramebuffer)}}function gt(A){return Math.min(f,A.samples)}function Be(A){const w=i.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ot(A){const w=o.render.frame;m.get(A)!==w&&(m.set(A,w),A.update())}function Zt(A,w){const G=A.encoding,te=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===pd||G!==kr&&(G===Ke?a===!1?e.has("EXT_sRGB")===!0&&te===Gn?(A.format=pd,A.minFilter=Tn,A.generateMipmaps=!1):w=lx.sRGBToLinear(w):(te!==Gn||ie!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),w}this.allocateTextureUnit=R,this.resetTextureUnits=Q,this.setTexture2D=z,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Ie,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Be}function hL(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===Fr)return 5121;if(s===tC)return 32819;if(s===nC)return 32820;if(s===QA)return 5120;if(s===JA)return 5122;if(s===sx)return 5123;if(s===eC)return 5124;if(s===Er)return 5125;if(s===Tr)return 5126;if(s===ra)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===iC)return 6406;if(s===Gn)return 6408;if(s===rC)return 6409;if(s===sC)return 6410;if(s===br)return 6402;if(s===Hs)return 34041;if(s===pd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===oC)return 6403;if(s===aC)return 36244;if(s===lC)return 33319;if(s===uC)return 33320;if(s===cC)return 36249;if(s===Sc||s===Mc||s===wc||s===Ec)if(o===Ke)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ec)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===dg||s===hg||s===pg||s===mg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===dg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===pg)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===mg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===fC)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gg||s===vg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gg)return o===Ke?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_g||s===yg||s===xg||s===Sg||s===Mg||s===wg||s===Eg||s===Tg||s===Ag||s===Cg||s===bg||s===Pg||s===Lg||s===Rg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===_g)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Mg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Eg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Tg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ag)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Rg)return o===Ke?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Tc)return o===Ke?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===dC||s===Dg||s===Ig||s===Ug)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Tc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Dg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ig)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ug)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rs?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class pL extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ul extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mL={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(u,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,m=.005;u.inputState.pinching&&d>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ul;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gL extends on{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:br,c!==br&&c!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===br&&(i=Er),i===void 0&&c===Hs&&(i=Rs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1}}class vL extends qs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,m=null;const y=n.getContextAttributes();let g=null,h=null;const v=[],_=[],x=new Set,M=new Map,C=new An;C.layers.enable(1),C.viewport=new Ct;const b=new An;b.layers.enable(2),b.viewport=new Ct;const P=[C,b],S=new pL;S.layers.enable(1),S.layers.enable(2);let T=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=v[V];return Y===void 0&&(Y=new Yc,v[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=v[V];return Y===void 0&&(Y=new Yc,v[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=v[V];return Y===void 0&&(Y=new Yc,v[V]=Y),Y.getHandSpace()};function j(V){const Y=_.indexOf(V.inputSource);if(Y===-1)return;const oe=v[Y];oe!==void 0&&oe.dispatchEvent({type:V.type,data:V.inputSource})}function D(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",U);for(let V=0;V<v.length;V++){const Y=_[V];Y!==null&&(_[V]=null,v[V].disconnect(Y))}T=null,X=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",D),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:p}),h=new Or(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:Fr,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let Y=null,oe=null,re=null;y.depth&&(re=y.stencil?35056:33190,Y=y.stencil?Hs:br,oe=y.stencil?Rs:Er);const k={colorFormat:32856,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(k),r.updateRenderState({layers:[d]}),h=new Or(d.textureWidth,d.textureHeight,{format:Gn,type:Fr,depthTexture:new gL(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const Ce=e.properties.get(h);Ce.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(V){for(let Y=0;Y<V.removed.length;Y++){const oe=V.removed[Y],re=_.indexOf(oe);re>=0&&(_[re]=null,v[re].disconnect(oe))}for(let Y=0;Y<V.added.length;Y++){const oe=V.added[Y];let re=_.indexOf(oe);if(re===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=_.length){_.push(oe),re=Ce;break}else if(_[Ce]===null){_[Ce]=oe,re=Ce;break}if(re===-1)break}const k=v[re];k&&k.connect(oe)}}const O=new F,Z=new F;function Q(V,Y,oe){O.setFromMatrixPosition(Y.matrixWorld),Z.setFromMatrixPosition(oe.matrixWorld);const re=O.distanceTo(Z),k=Y.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,xe=k[14]/(k[10]-1),se=k[14]/(k[10]+1),pe=(k[9]+1)/k[5],Ve=(k[9]-1)/k[5],he=(k[8]-1)/k[0],Ie=(Ce[8]+1)/Ce[0],St=xe*he,Pt=xe*Ie,Mt=re/(-he+Ie),gt=Mt*-he;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(gt),V.translateZ(Mt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Be=xe+Mt,ot=se+Mt,Zt=St-gt,A=Pt+(re-gt),w=pe*se/ot*Be,G=Ve*se/ot*Be;V.projectionMatrix.makePerspective(Zt,A,w,G,Be,ot),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function R(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.near=b.near=C.near=V.near,S.far=b.far=C.far=V.far,(T!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,X=S.far);const Y=V.parent,oe=S.cameras;R(S,Y);for(let re=0;re<oe.length;re++)R(oe[re],Y);oe.length===2?Q(S,C,b):S.projectionMatrix.copy(C.projectionMatrix),B(V,S,Y)};function B(V,Y,oe){oe===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const re=V.children;for(let k=0,Ce=re.length;k<Ce;k++)re[k].updateMatrixWorld(!0);V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=md*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return x};let z=null;function ne(V,Y){if(c=Y.getViewerPose(u||o),m=Y,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let re=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,re=!0);for(let k=0;k<oe.length;k++){const Ce=oe[k];let xe=null;if(p!==null)xe=p.getViewport(Ce);else{const pe=f.getViewSubImage(d,Ce);xe=pe.viewport,k===0&&(e.setRenderTargetTextures(h,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(h))}let se=P[k];se===void 0&&(se=new An,se.layers.enable(k),se.viewport=new Ct,P[k]=se),se.matrix.fromArray(Ce.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Ce.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(xe.x,xe.y,xe.width,xe.height),k===0&&(S.matrix.copy(se.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),re===!0&&S.cameras.push(se)}}for(let oe=0;oe<v.length;oe++){const re=_[oe],k=v[oe];re!==null&&k!==void 0&&k.update(re,Y,u||o)}if(z&&z(V,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let oe=null;for(const re of x)Y.detectedPlanes.has(re)||(oe===null&&(oe=[]),oe.push(re));if(oe!==null)for(const re of oe)x.delete(re),M.delete(re),i.dispatchEvent({type:"planeremoved",data:re});for(const re of Y.detectedPlanes)if(!x.has(re))x.add(re),M.set(re,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:re});else{const k=M.get(re);re.lastChangedTime>k&&(M.set(re,re.lastChangedTime),i.dispatchEvent({type:"planechanged",data:re}))}}m=null}const K=new xx;K.setAnimationLoop(ne),this.setAnimationLoop=function(V){z=V},this.dispose=function(){}}}function _L(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,vx(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,_,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,_):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===sn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===sn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const _=t.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*_,n(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,_){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=_*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===sn&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yL(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(m(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",g));const M=_.program;i.updateUBOMapping(v,M);const C=e.render.frame;s[v.id]!==C&&(d(v),s[v.id]=C)}function c(v){const _=f();v.__bindingPointIndex=_;const x=t.createBuffer(),M=v.__size,C=v.usage;return t.bindBuffer(35345,x),t.bufferData(35345,M,C),t.bindBuffer(35345,null),t.bindBufferBase(35345,_,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],x=v.uniforms,M=v.__cache;t.bindBuffer(35345,_);for(let C=0,b=x.length;C<b;C++){const P=x[C];if(p(P,C,M)===!0){const S=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let j=0;j<T.length;j++){const D=T[j],U=y(D);typeof D=="number"?(P.__data[0]=D,t.bufferSubData(35345,S+X,P.__data)):D.isMatrix3?(P.__data[0]=D.elements[0],P.__data[1]=D.elements[1],P.__data[2]=D.elements[2],P.__data[3]=D.elements[0],P.__data[4]=D.elements[3],P.__data[5]=D.elements[4],P.__data[6]=D.elements[5],P.__data[7]=D.elements[0],P.__data[8]=D.elements[6],P.__data[9]=D.elements[7],P.__data[10]=D.elements[8],P.__data[11]=D.elements[0]):(D.toArray(P.__data,X),X+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(35345,S,P.__data)}}t.bindBuffer(35345,null)}function p(v,_,x){const M=v.value;if(x[_]===void 0){if(typeof M=="number")x[_]=M;else{const C=Array.isArray(M)?M:[M],b=[];for(let P=0;P<C.length;P++)b.push(C[P].clone());x[_]=b}return!0}else if(typeof M=="number"){if(x[_]!==M)return x[_]=M,!0}else{const C=Array.isArray(x[_])?x[_]:[x[_]],b=Array.isArray(M)?M:[M];for(let P=0;P<C.length;P++){const S=C[P];if(S.equals(b[P])===!1)return S.copy(b[P]),!0}}return!1}function m(v){const _=v.uniforms;let x=0;const M=16;let C=0;for(let b=0,P=_.length;b<P;b++){const S=_[b],T={boundary:0,storage:0},X=Array.isArray(S.value)?S.value:[S.value];for(let j=0,D=X.length;j<D;j++){const U=X[j],O=y(U);T.boundary+=O.boundary,T.storage+=O.storage}if(S.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,b>0){C=x%M;const j=M-C;C!==0&&j-T.boundary<0&&(x+=M-C,S.__offset=x)}x+=T.storage}return C=x%M,C>0&&(x+=M-C),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){const _=v.target;_.removeEventListener("dispose",g);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}function xL(){const t=oa("canvas");return t.style.display="block",t}class Ax{constructor(e={}){const{canvas:n=xL(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=null,m=null;const y=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=kr,this.useLegacyLights=!0,this.toneMapping=yi,this.toneMappingExposure=1;const h=this;let v=!1,_=0,x=0,M=null,C=-1,b=null;const P=new Ct,S=new Ct;let T=null,X=n.width,j=n.height,D=1,U=null,O=null;const Z=new Ct(0,0,X,j),Q=new Ct(0,0,X,j);let R=!1;const B=new kh;let z=!1,ne=!1,K=null;const V=new mt,Y=new F,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return M===null?D:1}let k=i;function Ce(E,N){for(let H=0;H<E.length;H++){const I=E[H],q=n.getContext(I,N);if(q!==null)return q}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fh}`),n.addEventListener("webglcontextlost",ge,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",He,!1),k===null){const N=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&N.shift(),k=Ce(N,E),k===null)throw Ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,se,pe,Ve,he,Ie,St,Pt,Mt,gt,Be,ot,Zt,A,w,G,te,ie,le,Ee,de,$,me,_e;function Se(){xe=new RP(k),se=new TP(k,xe,e),xe.init(se),$=new hL(k,xe,se),pe=new fL(k,xe,se),Ve=new UP,he=new Z2,Ie=new dL(k,xe,pe,he,se,$,Ve),St=new CP(h),Pt=new LP(h),Mt=new XC(k,se),me=new wP(k,xe,Mt,se),gt=new DP(k,Mt,Ve,me),Be=new OP(k,gt,Mt,Ve),le=new kP(k,se,Ie),G=new AP(he),ot=new K2(h,St,Pt,xe,se,me,G),Zt=new _L(h,he),A=new J2,w=new sL(xe,se),ie=new MP(h,St,Pt,pe,Be,d,l),te=new cL(h,Be,se),_e=new yL(k,Ve,se,pe),Ee=new EP(k,xe,Ve,se),de=new IP(k,xe,Ve,se),Ve.programs=ot.programs,h.capabilities=se,h.extensions=xe,h.properties=he,h.renderLists=A,h.shadowMap=te,h.state=pe,h.info=Ve}Se();const fe=new vL(h,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(X,j,!1))},this.getSize=function(E){return E.set(X,j)},this.setSize=function(E,N,H=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,j=N,n.width=Math.floor(E*D),n.height=Math.floor(N*D),H===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*D,j*D).floor()},this.setDrawingBufferSize=function(E,N,H){X=E,j=N,D=H,n.width=Math.floor(E*H),n.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,N,H,I){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,N,H,I),pe.viewport(P.copy(Z).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(Q)},this.setScissor=function(E,N,H,I){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,N,H,I),pe.scissor(S.copy(Q).multiplyScalar(D).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(E){pe.setScissorTest(R=E)},this.setOpaqueSort=function(E){U=E},this.setTransparentSort=function(E){O=E},this.getClearColor=function(E){return E.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(E=!0,N=!0,H=!0){let I=0;E&&(I|=16384),N&&(I|=256),H&&(I|=1024),k.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ge,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",He,!1),A.dispose(),w.dispose(),he.dispose(),St.dispose(),Pt.dispose(),Be.dispose(),me.dispose(),_e.dispose(),ot.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ve),fe.removeEventListener("sessionend",qe),K&&(K.dispose(),K=null),Je.stop()};function ge(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const E=Ve.autoReset,N=te.enabled,H=te.autoUpdate,I=te.needsUpdate,q=te.type;Se(),Ve.autoReset=E,te.enabled=N,te.autoUpdate=H,te.needsUpdate=I,te.type=q}function He(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function lt(E){const N=E.target;N.removeEventListener("dispose",lt),L(N)}function L(E){W(E),he.remove(E)}function W(E){const N=he.get(E).programs;N!==void 0&&(N.forEach(function(H){ot.releaseProgram(H)}),E.isShaderMaterial&&ot.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,I,q,ye){N===null&&(N=oe);const Te=q.isMesh&&q.matrixWorld.determinant()<0,be=bx(E,N,H,I,q);pe.setMaterial(I,Te);let Pe=H.index,Re=1;I.wireframe===!0&&(Pe=gt.getWireframeAttribute(H),Re=2);const De=H.drawRange,Ue=H.attributes.position;let We=De.start*Re,Gt=(De.start+De.count)*Re;ye!==null&&(We=Math.max(We,ye.start*Re),Gt=Math.min(Gt,(ye.start+ye.count)*Re)),Pe!==null?(We=Math.max(We,0),Gt=Math.min(Gt,Pe.count)):Ue!=null&&(We=Math.max(We,0),Gt=Math.min(Gt,Ue.count));const Dn=Gt-We;if(Dn<0||Dn===1/0)return;me.setup(q,I,be,H,Pe);let or,ft=Ee;if(Pe!==null&&(or=Mt.get(Pe),ft=de,ft.setIndex(or)),q.isMesh)I.wireframe===!0?(pe.setLineWidth(I.wireframeLinewidth*re()),ft.setMode(1)):ft.setMode(4);else if(q.isLine){let Oe=I.linewidth;Oe===void 0&&(Oe=1),pe.setLineWidth(Oe*re()),q.isLineSegments?ft.setMode(1):q.isLineLoop?ft.setMode(2):ft.setMode(3)}else q.isPoints?ft.setMode(0):q.isSprite&&ft.setMode(4);if(q.isInstancedMesh)ft.renderInstances(We,Dn,q.count);else if(H.isInstancedBufferGeometry){const Oe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Du=Math.min(H.instanceCount,Oe);ft.renderInstances(We,Dn,Du)}else ft.render(We,Dn)},this.compile=function(E,N){function H(I,q,ye){I.transparent===!0&&I.side===di&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,Sa(I,q,ye),I.side=tr,I.needsUpdate=!0,Sa(I,q,ye),I.side=di):Sa(I,q,ye)}m=w.get(E),m.init(),g.push(m),E.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(h.useLegacyLights),E.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let ye=0;ye<q.length;ye++){const Te=q[ye];H(Te,E,I)}else H(q,E,I)}),g.pop(),m=null};let J=null;function ue(E){J&&J(E)}function ve(){Je.stop()}function qe(){Je.start()}const Je=new xx;Je.setAnimationLoop(ue),typeof self<"u"&&Je.setContext(self),this.setAnimationLoop=function(E){J=E,fe.setAnimationLoop(E),E===null?Je.stop():Je.start()},fe.addEventListener("sessionstart",ve),fe.addEventListener("sessionend",qe),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(N),N=fe.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,N,M),m=w.get(E,g.length),m.init(),g.push(m),V.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),B.setFromProjectionMatrix(V),ne=this.localClippingEnabled,z=G.init(this.clippingPlanes,ne),p=A.get(E,y.length),p.init(),y.push(p),Ut(E,N,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(U,O),z===!0&&G.beginShadows();const H=m.state.shadowsArray;if(te.render(H,E,N),z===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(p,E),m.setupLights(h.useLegacyLights),N.isArrayCamera){const I=N.cameras;for(let q=0,ye=I.length;q<ye;q++){const Te=I[q];Ti(p,E,Te,Te.viewport)}}else Ti(p,E,N);M!==null&&(Ie.updateMultisampleRenderTarget(M),Ie.updateRenderTargetMipmap(M)),E.isScene===!0&&E.onAfterRender(h,E,N),me.resetDefaultState(),C=-1,b=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Ut(E,N,H,I){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||B.intersectsSprite(E)){I&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const Te=Be.update(E),be=E.material;be.visible&&p.push(E,Te,be,H,Y.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ve.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ve.render.frame),!E.frustumCulled||B.intersectsObject(E))){I&&Y.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const Te=Be.update(E),be=E.material;if(Array.isArray(be)){const Pe=Te.groups;for(let Re=0,De=Pe.length;Re<De;Re++){const Ue=Pe[Re],We=be[Ue.materialIndex];We&&We.visible&&p.push(E,Te,We,H,Y.z,Ue)}}else be.visible&&p.push(E,Te,be,H,Y.z,null)}}const ye=E.children;for(let Te=0,be=ye.length;Te<be;Te++)Ut(ye[Te],N,H,I)}function Ti(E,N,H,I){const q=E.opaque,ye=E.transmissive,Te=E.transparent;m.setupLightsView(H),z===!0&&G.setGlobalState(h.clippingPlanes,H),ye.length>0&&ut(q,ye,N,H),I&&pe.viewport(P.copy(I)),q.length>0&&xn(q,N,H),ye.length>0&&xn(ye,N,H),Te.length>0&&xn(Te,N,H),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function ut(E,N,H,I){if(K===null){const be=se.isWebGL2;K=new Or(1024,1024,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ra:Fr,minFilter:ia,samples:be&&a===!0?4:0})}const q=h.getRenderTarget();h.setRenderTarget(K),h.clear();const ye=h.toneMapping;h.toneMapping=yi,xn(E,H,I),Ie.updateMultisampleRenderTarget(K),Ie.updateRenderTargetMipmap(K);let Te=!1;for(let be=0,Pe=N.length;be<Pe;be++){const Re=N[be],De=Re.object,Ue=Re.geometry,We=Re.material,Gt=Re.group;if(We.side===di&&De.layers.test(I.layers)){const Dn=We.side;We.side=sn,We.needsUpdate=!0,Xn(De,H,I,Ue,We,Gt),We.side=Dn,We.needsUpdate=!0,Te=!0}}Te===!0&&(Ie.updateMultisampleRenderTarget(K),Ie.updateRenderTargetMipmap(K)),h.setRenderTarget(q),h.toneMapping=ye}function xn(E,N,H){const I=N.isScene===!0?N.overrideMaterial:null;for(let q=0,ye=E.length;q<ye;q++){const Te=E[q],be=Te.object,Pe=Te.geometry,Re=I===null?Te.material:I,De=Te.group;be.layers.test(H.layers)&&Xn(be,N,H,Pe,Re,De)}}function Xn(E,N,H,I,q,ye){E.onBeforeRender(h,N,H,I,q,ye),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(h,N,H,I,E,ye),q.transparent===!0&&q.side===di&&q.forceSinglePass===!1?(q.side=sn,q.needsUpdate=!0,h.renderBufferDirect(H,N,I,q,E,ye),q.side=tr,q.needsUpdate=!0,h.renderBufferDirect(H,N,I,q,E,ye),q.side=di):h.renderBufferDirect(H,N,I,q,E,ye),E.onAfterRender(h,N,H,I,q,ye)}function Sa(E,N,H){N.isScene!==!0&&(N=oe);const I=he.get(E),q=m.state.lights,ye=m.state.shadowsArray,Te=q.state.version,be=ot.getParameters(E,q.state,ye,N,H),Pe=ot.getProgramCacheKey(be);let Re=I.programs;I.environment=E.isMeshStandardMaterial?N.environment:null,I.fog=N.fog,I.envMap=(E.isMeshStandardMaterial?Pt:St).get(E.envMap||I.environment),Re===void 0&&(E.addEventListener("dispose",lt),Re=new Map,I.programs=Re);let De=Re.get(Pe);if(De!==void 0){if(I.currentProgram===De&&I.lightsStateVersion===Te)return Vh(E,be),De}else be.uniforms=ot.getUniforms(E),E.onBuild(H,be,h),E.onBeforeCompile(be,h),De=ot.acquireProgram(be,Pe),Re.set(Pe,De),I.uniforms=be.uniforms;const Ue=I.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ue.clippingPlanes=G.uniform),Vh(E,be),I.needsLights=Lx(E),I.lightsStateVersion=Te,I.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix);const We=De.getUniforms(),Gt=Tl.seqWithValue(We.seq,Ue);return I.currentProgram=De,I.uniformsList=Gt,De}function Vh(E,N){const H=he.get(E);H.outputEncoding=N.outputEncoding,H.instancing=N.instancing,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function bx(E,N,H,I,q){N.isScene!==!0&&(N=oe),Ie.resetTextureUnits();const ye=N.fog,Te=I.isMeshStandardMaterial?N.environment:null,be=M===null?h.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:kr,Pe=(I.isMeshStandardMaterial?Pt:St).get(I.envMap||Te),Re=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,De=!!I.normalMap&&!!H.attributes.tangent,Ue=!!H.morphAttributes.position,We=!!H.morphAttributes.normal,Gt=!!H.morphAttributes.color,Dn=I.toneMapped?h.toneMapping:yi,or=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=or!==void 0?or.length:0,Oe=he.get(I),Du=m.state.lights;if(z===!0&&(ne===!0||E!==b)){const ln=E===b&&I.id===C;G.setState(I,E,ln)}let wt=!1;I.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Du.state.version||Oe.outputEncoding!==be||q.isInstancedMesh&&Oe.instancing===!1||!q.isInstancedMesh&&Oe.instancing===!0||q.isSkinnedMesh&&Oe.skinning===!1||!q.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Pe||I.fog===!0&&Oe.fog!==ye||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==G.numPlanes||Oe.numIntersection!==G.numIntersection)||Oe.vertexAlphas!==Re||Oe.vertexTangents!==De||Oe.morphTargets!==Ue||Oe.morphNormals!==We||Oe.morphColors!==Gt||Oe.toneMapping!==Dn||se.isWebGL2===!0&&Oe.morphTargetsCount!==ft)&&(wt=!0):(wt=!0,Oe.__version=I.version);let ar=Oe.currentProgram;wt===!0&&(ar=Sa(I,N,q));let Bh=!1,Ks=!1,Iu=!1;const Ht=ar.getUniforms(),lr=Oe.uniforms;if(pe.useProgram(ar.program)&&(Bh=!0,Ks=!0,Iu=!0),I.id!==C&&(C=I.id,Ks=!0),Bh||b!==E){if(Ht.setValue(k,"projectionMatrix",E.projectionMatrix),se.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),b!==E&&(b=E,Ks=!0,Iu=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const ln=Ht.map.cameraPosition;ln!==void 0&&ln.setValue(k,Y.setFromMatrixPosition(E.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&Ht.setValue(k,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){Ht.setOptional(k,q,"bindMatrix"),Ht.setOptional(k,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(se.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Ht.setValue(k,"boneTexture",ln.boneTexture,Ie),Ht.setValue(k,"boneTextureSize",ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uu=H.morphAttributes;if((Uu.position!==void 0||Uu.normal!==void 0||Uu.color!==void 0&&se.isWebGL2===!0)&&le.update(q,H,ar),(Ks||Oe.receiveShadow!==q.receiveShadow)&&(Oe.receiveShadow=q.receiveShadow,Ht.setValue(k,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(lr.envMap.value=Pe,lr.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Ks&&(Ht.setValue(k,"toneMappingExposure",h.toneMappingExposure),Oe.needsLights&&Px(lr,Iu),ye&&I.fog===!0&&Zt.refreshFogUniforms(lr,ye),Zt.refreshMaterialUniforms(lr,I,D,j,K),Tl.upload(k,Oe.uniformsList,lr,Ie)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Tl.upload(k,Oe.uniformsList,lr,Ie),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ht.setValue(k,"center",q.center),Ht.setValue(k,"modelViewMatrix",q.modelViewMatrix),Ht.setValue(k,"normalMatrix",q.normalMatrix),Ht.setValue(k,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const ln=I.uniformsGroups;for(let Nu=0,Rx=ln.length;Nu<Rx;Nu++)if(se.isWebGL2){const Gh=ln[Nu];_e.update(Gh,ar),_e.bind(Gh,ar)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ar}function Px(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Lx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(E,N,H){he.get(E.texture).__webglTexture=N,he.get(E.depthTexture).__webglTexture=H;const I=he.get(E);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=H===void 0,I.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){const H=he.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){M=E,_=N,x=H;let I=!0,q=null,ye=!1,Te=!1;if(E){const Pe=he.get(E);Pe.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(36160,null),I=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(E):Pe.__hasExternalTextures&&Ie.rebindTextures(E,he.get(E.texture).__webglTexture,he.get(E.depthTexture).__webglTexture);const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Te=!0);const De=he.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=De[N],ye=!0):se.isWebGL2&&E.samples>0&&Ie.useMultisampledRTT(E)===!1?q=he.get(E).__webglMultisampledFramebuffer:q=De,P.copy(E.viewport),S.copy(E.scissor),T=E.scissorTest}else P.copy(Z).multiplyScalar(D).floor(),S.copy(Q).multiplyScalar(D).floor(),T=R;if(pe.bindFramebuffer(36160,q)&&se.drawBuffers&&I&&pe.drawBuffers(E,q),pe.viewport(P),pe.scissor(S),pe.setScissorTest(T),ye){const Pe=he.get(E.texture);k.framebufferTexture2D(36160,36064,34069+N,Pe.__webglTexture,H)}else if(Te){const Pe=he.get(E.texture),Re=N||0;k.framebufferTextureLayer(36160,36064,Pe.__webglTexture,H||0,Re)}C=-1},this.readRenderTargetPixels=function(E,N,H,I,q,ye,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=he.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be){pe.bindFramebuffer(36160,be);try{const Pe=E.texture,Re=Pe.format,De=Pe.type;if(Re!==Gn&&$.convert(Re)!==k.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=De===ra&&(xe.has("EXT_color_buffer_half_float")||se.isWebGL2&&xe.has("EXT_color_buffer_float"));if(De!==Fr&&$.convert(De)!==k.getParameter(35738)&&!(De===Tr&&(se.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-I&&H>=0&&H<=E.height-q&&k.readPixels(N,H,I,q,$.convert(Re),$.convert(De),ye)}finally{const Pe=M!==null?he.get(M).__webglFramebuffer:null;pe.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,N,H=0){const I=Math.pow(2,-H),q=Math.floor(N.image.width*I),ye=Math.floor(N.image.height*I);Ie.setTexture2D(N,0),k.copyTexSubImage2D(3553,H,0,0,E.x,E.y,q,ye),pe.unbindTexture()},this.copyTextureToTexture=function(E,N,H,I=0){const q=N.image.width,ye=N.image.height,Te=$.convert(H.format),be=$.convert(H.type);Ie.setTexture2D(H,0),k.pixelStorei(37440,H.flipY),k.pixelStorei(37441,H.premultiplyAlpha),k.pixelStorei(3317,H.unpackAlignment),N.isDataTexture?k.texSubImage2D(3553,I,E.x,E.y,q,ye,Te,be,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(3553,I,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Te,N.mipmaps[0].data):k.texSubImage2D(3553,I,E.x,E.y,Te,be,N.image),I===0&&H.generateMipmaps&&k.generateMipmap(3553),pe.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H,I,q=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ye=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,be=E.max.z-E.min.z+1,Pe=$.convert(I.format),Re=$.convert(I.type);let De;if(I.isData3DTexture)Ie.setTexture3D(I,0),De=32879;else if(I.isDataArrayTexture)Ie.setTexture2DArray(I,0),De=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(37440,I.flipY),k.pixelStorei(37441,I.premultiplyAlpha),k.pixelStorei(3317,I.unpackAlignment);const Ue=k.getParameter(3314),We=k.getParameter(32878),Gt=k.getParameter(3316),Dn=k.getParameter(3315),or=k.getParameter(32877),ft=H.isCompressedTexture?H.mipmaps[0]:H.image;k.pixelStorei(3314,ft.width),k.pixelStorei(32878,ft.height),k.pixelStorei(3316,E.min.x),k.pixelStorei(3315,E.min.y),k.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?k.texSubImage3D(De,q,N.x,N.y,N.z,ye,Te,be,Pe,Re,ft.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(De,q,N.x,N.y,N.z,ye,Te,be,Pe,ft.data)):k.texSubImage3D(De,q,N.x,N.y,N.z,ye,Te,be,Pe,Re,ft),k.pixelStorei(3314,Ue),k.pixelStorei(32878,We),k.pixelStorei(3316,Gt),k.pixelStorei(3315,Dn),k.pixelStorei(32877,or),q===0&&I.generateMipmaps&&k.generateMipmap(De),pe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ie.setTextureCube(E,0):E.isData3DTexture?Ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ie.setTexture2DArray(E,0):Ie.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){_=0,x=0,M=null,pe.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class SL extends Ax{}SL.prototype.isWebGL1Renderer=!0;class ML extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class vd extends ya{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const xv=new mt,_d=new fx,cl=new Pu,fl=new F;class Sv extends Dt{constructor(e=new ii,n=new vd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;xv.copy(r).invert(),_d.copy(e.ray).applyMatrix4(xv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,y=p;m<y;m++){const g=u.getX(m);fl.fromBufferAttribute(f,g),Mv(fl,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let m=d,y=p;m<y;m++)fl.fromBufferAttribute(f,m),Mv(fl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mv(t,e,n,i,r,s,o){const a=_d.distanceSqToPoint(t);if(a<n){const l=new F;_d.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}const wv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class wL{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],m=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null}}}const EL=new wL;class Cx{constructor(e){this.manager=e!==void 0?e:EL,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class TL extends Cx{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wv.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=oa("img");function l(){c(),wv.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class AL extends Cx{constructor(e){super(e)}load(e,n,i,r){const s=new on,o=new TL(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class CL extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Kc=new mt,Ev=new F,Tv=new F;class bL{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kh,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ev.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ev),Tv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Tv),n.updateMatrixWorld(),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class PL extends bL{constructor(){super(new Sx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class LL extends CL{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new PL}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);function Av(t){const e=new Float32Array(t*3);let n=t;for(;n;)e[n]=(Math.random()-.5)*10,n-=1;return e}function RL(){const t=we.useRef(null);return we.useEffect(()=>{if(!t.current)return;let[e,n]=[0,0];const i=new Ax({canvas:t.current}),r=new AL,s=new ML;i.setClearColor(new je("#1d2c33"));const o=new LL(16777215,1);o.position.set(-1,2,4),s.add(o);const a=new An(75,2,1.5,5);a.position.z=2;const l=[new ii,new ii];l[0].setAttribute("position",new Pn(Av(450),3)),l[1].setAttribute("position",new Pn(Av(1500),3));const u=[new vd({size:.075,map:r.load("assets/images/stars/star1.png"),transparent:!0}),new vd({size:.1,map:r.load("assets/images/stars/star2.png"),transparent:!0})],c=new Sv(l[0],u[0]),f=new Sv(l[1],u[1]);s.add(c),s.add(f);function d(){const m=i.domElement,y=m.clientWidth,g=m.clientHeight;(m.width!==y||m.height!==g)&&(i.setSize(y,g,!1),a.aspect=m.clientWidth/m.clientHeight,a.updateProjectionMatrix());const[v,_]=[e*1e-4,n*-1e-4];c.position.x=v,c.position.y=_,f.position.x=v,f.position.y=_,i.render(s,a),requestAnimationFrame(d)}requestAnimationFrame(d);const p=m=>{[e,n]=[m.clientX,m.clientY]};return document.addEventListener("mousemove",p),()=>{i.dispose(),s.remove(c),s.remove(f),l.forEach(m=>m.dispose()),u.forEach(m=>{var y;m.dispose(),(y=m.map)==null||y.dispose()}),document.removeEventListener("mousemove",p)}},[]),Ae("canvas",{ref:t,className:"fixed w-full h-full"})}function DL({logo:t,name:e}){return et("div",{className:"inline-flex flex-col items-center gap-2",children:[Ae("img",{src:t,alt:`${e} logo`,className:"w-[50px] h-[50px]"}),Ae("p",{className:"text-sm",children:e})]})}function IL(){return et(Nh,{headingText:"About",headingId:"about",className:"flex flex-col justify-center items-center",children:[Ae("h1",{className:"p-1 mb-4 text-2xl max-sm:text-xl font-bold",children:"Skills"}),Ae("div",{className:"flex justify-center flex-wrap gap-6 max-w-[928px]",children:[{name:"JavaScript",logo:"assets/images/logos/javascript-logo.svg"},{name:"Typescript",logo:"assets/images/logos/typescript-logo.svg"},{name:"React",logo:"assets/images/logos/react-logo.svg"},{name:"NextJS",logo:"assets/images/logos/nextjs-logo.svg"},{name:"TailwindCSS",logo:"assets/images/logos/tailwindcss-logo.svg"},{name:"Git",logo:"assets/images/logos/git-logo.svg"},{name:"Vite",logo:"assets/images/logos/vite-logo.svg"},{name:"Webpack",logo:"assets/images/logos/webpack-logo.svg"},{name:"NPM",logo:"assets/images/logos/npm-logo.svg"},{name:"Jest",logo:"assets/images/logos/jest-logo.svg"},{name:"Firebase",logo:"assets/images/logos/firebase-logo.svg"}].map(e=>Ae(DL,{name:e.name,logo:e.logo},e.name))})]})}function UL(){return et("div",{className:"text-white",children:[Ae(RL,{}),et("div",{className:"absolute w-full h-full flex flex-col justify-between",children:[Ae(pA,{}),et("div",{className:"grow flex flex-col gap-8 px-10 max-w-[1440px] mx-auto pt-[92px]",children:[Ae(mA,{}),Ae(IL,{}),Ae(SA,{}),Ae(hA,{})]})]})]})}Zc.createRoot(document.getElementById("root")).render(Ae(wd.StrictMode,{children:Ae(UL,{})}));
