import{r as Et,R as Ec,a as jt,F as wh,j as Tt}from"../chunks/chunk-0e184ced.js";import{u as Th}from"../chunks/chunk-93d9bafa.js";const Ac=Et.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"}),Ws=Et.createContext({}),So=Et.createContext(null),js=typeof document<"u",Zo=js?Et.useLayoutEffect:Et.useEffect,Cc=Et.createContext({strict:!1});function Eh(n,t,e,i){const{visualElement:s}=Et.useContext(Ws),r=Et.useContext(Cc),o=Et.useContext(So),a=Et.useContext(Ac).reducedMotion,c=Et.useRef();i=i||r.renderer,!c.current&&i&&(c.current=i(n,{visualState:t,parent:s,props:e,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:a}));const l=c.current;return Et.useInsertionEffect(()=>{l&&l.update(e,o)}),Zo(()=>{l&&l.render()}),Et.useEffect(()=>{l&&l.updateFeatures()}),(window.HandoffAppearAnimations?Zo:Et.useEffect)(()=>{l&&l.animationState&&l.animationState.animateChanges()}),l}function fi(n){return typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function Ah(n,t,e){return Et.useCallback(i=>{i&&n.mount&&n.mount(i),t&&(i?t.mount(i):t.unmount()),e&&(typeof e=="function"?e(i):fi(e)&&(e.current=i))},[t])}function Gi(n){return typeof n=="string"||Array.isArray(n)}function qs(n){return typeof n=="object"&&typeof n.start=="function"}const bo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wo=["initial",...bo];function Xs(n){return qs(n.animate)||wo.some(t=>Gi(n[t]))}function Pc(n){return!!(Xs(n)||n.variants)}function Ch(n,t){if(Xs(n)){const{initial:e,animate:i}=n;return{initial:e===!1||Gi(e)?e:void 0,animate:Gi(i)?i:void 0}}return n.inherit!==!1?t:{}}function Ph(n){const{initial:t,animate:e}=Ch(n,Et.useContext(Ws));return Et.useMemo(()=>({initial:t,animate:e}),[Jo(t),Jo(e)])}function Jo(n){return Array.isArray(n)?n.join(" "):n}const Qo={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Hi={};for(const n in Qo)Hi[n]={isEnabled:t=>Qo[n].some(e=>!!t[e])};function Lh(n){for(const t in n)Hi[t]={...Hi[t],...n[t]}}function Lc(n){const t=Et.useRef(null);return t.current===null&&(t.current=n()),t.current}const Fi={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Rh=1;function Dh(){return Lc(()=>{if(Fi.hasEverUpdated)return Rh++})}const Rc=Et.createContext({}),Dc=Et.createContext({}),Ih=Symbol.for("motionComponentSymbol");function Uh({preloadedFeatures:n,createVisualElement:t,useRender:e,useVisualState:i,Component:s}){n&&Lh(n);function r(a,c){let l;const u={...Et.useContext(Ac),...a,layoutId:Nh(a)},{isStatic:h}=u,f=Ph(a),p=h?void 0:Dh(),g=i(a,h);if(!h&&js){f.visualElement=Eh(s,g,u,t);const _=Et.useContext(Dc),m=Et.useContext(Cc).strict;f.visualElement&&(l=f.visualElement.loadFeatures(u,m,n,p,_))}return Et.createElement(Ws.Provider,{value:f},l&&f.visualElement?Et.createElement(l,{visualElement:f.visualElement,...u}):null,e(s,a,p,Ah(g,f.visualElement,c),g,h,f.visualElement))}const o=Et.forwardRef(r);return o[Ih]=s,o}function Nh({layoutId:n}){const t=Et.useContext(Rc).id;return t&&n!==void 0?t+"-"+n:n}function Fh(n){function t(i,s={}){return Uh(n(i,s))}if(typeof Proxy>"u")return t;const e=new Map;return new Proxy(t,{get:(i,s)=>(e.has(s)||e.set(s,t(s)),e.get(s))})}const Oh=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function To(n){return typeof n!="string"||n.includes("-")?!1:!!(Oh.indexOf(n)>-1||/[A-Z]/.test(n))}const Fs={};function Vh(n){Object.assign(Fs,n)}const Ys=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xn=new Set(Ys);function Ic(n,{layout:t,layoutId:e}){return Xn.has(n)||n.startsWith("origin")||(t||e!==void 0)&&(!!Fs[n]||n==="opacity")}const Te=n=>!!(n&&n.getVelocity),Bh={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},zh=Ys.length;function kh(n,{enableHardwareAcceleration:t=!0,allowTransformNone:e=!0},i,s){let r="";for(let o=0;o<zh;o++){const a=Ys[o];if(n[a]!==void 0){const c=Bh[a]||a;r+=`${c}(${n[a]}) `}}return t&&!n.z&&(r+="translateZ(0)"),r=r.trim(),s?r=s(n,i?"":r):e&&i&&(r="none"),r}const Uc=n=>t=>typeof t=="string"&&t.startsWith(n),Nc=Uc("--"),$r=Uc("var(--"),Gh=(n,t)=>t&&typeof n=="number"?t.transform(n):n,Gn=(n,t,e)=>Math.min(Math.max(e,n),t),Yn={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Oi={...Yn,transform:n=>Gn(0,1,n)},as={...Yn,default:1},Vi=n=>Math.round(n*1e5)/1e5,Wi=/(-)?([\d]*\.?[\d])+/g,Kr=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Hh=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Zi(n){return typeof n=="string"}const Ji=n=>({test:t=>Zi(t)&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),mn=Ji("deg"),Ke=Ji("%"),yt=Ji("px"),Wh=Ji("vh"),jh=Ji("vw"),ta={...Ke,parse:n=>Ke.parse(n)/100,transform:n=>Ke.transform(n*100)},ea={...Yn,transform:Math.round},Fc={borderWidth:yt,borderTopWidth:yt,borderRightWidth:yt,borderBottomWidth:yt,borderLeftWidth:yt,borderRadius:yt,radius:yt,borderTopLeftRadius:yt,borderTopRightRadius:yt,borderBottomRightRadius:yt,borderBottomLeftRadius:yt,width:yt,maxWidth:yt,height:yt,maxHeight:yt,size:yt,top:yt,right:yt,bottom:yt,left:yt,padding:yt,paddingTop:yt,paddingRight:yt,paddingBottom:yt,paddingLeft:yt,margin:yt,marginTop:yt,marginRight:yt,marginBottom:yt,marginLeft:yt,rotate:mn,rotateX:mn,rotateY:mn,rotateZ:mn,scale:as,scaleX:as,scaleY:as,scaleZ:as,skew:mn,skewX:mn,skewY:mn,distance:yt,translateX:yt,translateY:yt,translateZ:yt,x:yt,y:yt,z:yt,perspective:yt,transformPerspective:yt,opacity:Oi,originX:ta,originY:ta,originZ:yt,zIndex:ea,fillOpacity:Oi,strokeOpacity:Oi,numOctaves:ea};function Eo(n,t,e,i){const{style:s,vars:r,transform:o,transformOrigin:a}=n;let c=!1,l=!1,u=!0;for(const h in t){const f=t[h];if(Nc(h)){r[h]=f;continue}const p=Fc[h],g=Gh(f,p);if(Xn.has(h)){if(c=!0,o[h]=g,!u)continue;f!==(p.default||0)&&(u=!1)}else h.startsWith("origin")?(l=!0,a[h]=g):s[h]=g}if(t.transform||(c||i?s.transform=kh(n.transform,e,u,i):s.transform&&(s.transform="none")),l){const{originX:h="50%",originY:f="50%",originZ:p=0}=a;s.transformOrigin=`${h} ${f} ${p}`}}const Ao=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Oc(n,t,e){for(const i in t)!Te(t[i])&&!Ic(i,e)&&(n[i]=t[i])}function qh({transformTemplate:n},t,e){return Et.useMemo(()=>{const i=Ao();return Eo(i,t,{enableHardwareAcceleration:!e},n),Object.assign({},i.vars,i.style)},[t])}function Xh(n,t,e){const i=n.style||{},s={};return Oc(s,i,n),Object.assign(s,qh(n,t,e)),n.transformValues?n.transformValues(s):s}function Yh(n,t,e){const i={},s=Xh(n,t,e);return n.drag&&n.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(i.tabIndex=0),i.style=s,i}const $h=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function Os(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||$h.has(n)}let Vc=n=>!Os(n);function Kh(n){n&&(Vc=t=>t.startsWith("on")?!Os(t):n(t))}try{Kh(require("@emotion/is-prop-valid").default)}catch{}function Zh(n,t,e){const i={};for(const s in n)s==="values"&&typeof n.values=="object"||(Vc(s)||e===!0&&Os(s)||!t&&!Os(s)||n.draggable&&s.startsWith("onDrag"))&&(i[s]=n[s]);return i}function na(n,t,e){return typeof n=="string"?n:yt.transform(t+e*n)}function Jh(n,t,e){const i=na(t,n.x,n.width),s=na(e,n.y,n.height);return`${i} ${s}`}const Qh={offset:"stroke-dashoffset",array:"stroke-dasharray"},tf={offset:"strokeDashoffset",array:"strokeDasharray"};function ef(n,t,e=1,i=0,s=!0){n.pathLength=1;const r=s?Qh:tf;n[r.offset]=yt.transform(-i);const o=yt.transform(t),a=yt.transform(e);n[r.array]=`${o} ${a}`}function Co(n,{attrX:t,attrY:e,originX:i,originY:s,pathLength:r,pathSpacing:o=1,pathOffset:a=0,...c},l,u,h){if(Eo(n,c,l,h),u){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:f,style:p,dimensions:g}=n;f.transform&&(g&&(p.transform=f.transform),delete f.transform),g&&(i!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=Jh(g,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(f.x=t),e!==void 0&&(f.y=e),r!==void 0&&ef(f,r,o,a,!1)}const Bc=()=>({...Ao(),attrs:{}}),Po=n=>typeof n=="string"&&n.toLowerCase()==="svg";function nf(n,t,e,i){const s=Et.useMemo(()=>{const r=Bc();return Co(r,t,{enableHardwareAcceleration:!1},Po(i),n.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(n.style){const r={};Oc(r,n.style,n),s.style={...r,...s.style}}return s}function sf(n=!1){return(e,i,s,r,{latestValues:o},a)=>{const l=(To(e)?nf:Yh)(i,o,a,e),h={...Zh(i,typeof e=="string",n),...l,ref:r},{children:f}=i,p=Et.useMemo(()=>Te(f)?f.get():f,[f]);return s&&(h["data-projection-id"]=s),Et.createElement(e,{...h,children:p})}}const Lo=n=>n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function zc(n,{style:t,vars:e},i,s){Object.assign(n.style,t,s&&s.getProjectionStyles(i));for(const r in e)n.style.setProperty(r,e[r])}const kc=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Gc(n,t,e,i){zc(n,t,void 0,i);for(const s in t.attrs)n.setAttribute(kc.has(s)?s:Lo(s),t.attrs[s])}function Ro(n,t){const{style:e}=n,i={};for(const s in e)(Te(e[s])||t.style&&Te(t.style[s])||Ic(s,n))&&(i[s]=e[s]);return i}function Hc(n,t){const e=Ro(n,t);for(const i in n)if(Te(n[i])||Te(t[i])){const s=i==="x"||i==="y"?"attr"+i.toUpperCase():i;e[s]=n[i]}return e}function Do(n,t,e,i={},s={}){return typeof t=="function"&&(t=t(e!==void 0?e:n.custom,i,s)),typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"&&(t=t(e!==void 0?e:n.custom,i,s)),t}const Vs=n=>Array.isArray(n),rf=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),of=n=>Vs(n)?n[n.length-1]||0:n;function Us(n){const t=Te(n)?n.get():n;return rf(t)?t.toValue():t}function af({scrapeMotionValuesFromProps:n,createRenderState:t,onMount:e},i,s,r){const o={latestValues:lf(i,s,r,n),renderState:t()};return e&&(o.mount=a=>e(i,a,o)),o}const Wc=n=>(t,e)=>{const i=Et.useContext(Ws),s=Et.useContext(So),r=()=>af(n,t,i,s);return e?r():Lc(r)};function lf(n,t,e,i){const s={},r=i(n,{});for(const f in r)s[f]=Us(r[f]);let{initial:o,animate:a}=n;const c=Xs(n),l=Pc(n);t&&l&&!c&&n.inherit!==!1&&(o===void 0&&(o=t.initial),a===void 0&&(a=t.animate));let u=e?e.initial===!1:!1;u=u||o===!1;const h=u?a:o;return h&&typeof h!="boolean"&&!qs(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const g=Do(n,p);if(!g)return;const{transitionEnd:_,transition:m,...d}=g;for(const b in d){let v=d[b];if(Array.isArray(v)){const S=u?v.length-1:0;v=v[S]}v!==null&&(s[b]=v)}for(const b in _)s[b]=_[b]}),s}const cf={useVisualState:Wc({scrapeMotionValuesFromProps:Hc,createRenderState:Bc,onMount:(n,t,{renderState:e,latestValues:i})=>{try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}Co(e,i,{enableHardwareAcceleration:!1},Po(t.tagName),n.transformTemplate),Gc(t,e)}})},uf={useVisualState:Wc({scrapeMotionValuesFromProps:Ro,createRenderState:Ao})};function hf(n,{forwardMotionProps:t=!1},e,i){return{...To(n)?cf:uf,preloadedFeatures:e,useRender:sf(t),createVisualElement:i,Component:n}}function on(n,t,e,i={passive:!0}){return n.addEventListener(t,e,i),()=>n.removeEventListener(t,e)}const jc=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1;function $s(n,t="page"){return{point:{x:n[t+"X"],y:n[t+"Y"]}}}const ff=n=>t=>jc(t)&&n(t,$s(t));function an(n,t,e,i){return on(n,t,ff(e),i)}const df=(n,t)=>e=>t(n(e)),vn=(...n)=>n.reduce(df);function qc(n){let t=null;return()=>{const e=()=>{t=null};return t===null?(t=n,e):!1}}const ia=qc("dragHorizontal"),sa=qc("dragVertical");function Xc(n){let t=!1;if(n==="y")t=sa();else if(n==="x")t=ia();else{const e=ia(),i=sa();e&&i?t=()=>{e(),i()}:(e&&e(),i&&i())}return t}function Yc(){const n=Xc(!0);return n?(n(),!1):!0}class wn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function pf(n){let t=[],e=[],i=0,s=!1,r=!1;const o=new WeakSet,a={schedule:(c,l=!1,u=!1)=>{const h=u&&s,f=h?t:e;return l&&o.add(c),f.indexOf(c)===-1&&(f.push(c),h&&s&&(i=t.length)),c},cancel:c=>{const l=e.indexOf(c);l!==-1&&e.splice(l,1),o.delete(c)},process:c=>{if(s){r=!0;return}if(s=!0,[t,e]=[e,t],e.length=0,i=t.length,i)for(let l=0;l<i;l++){const u=t[l];u(c),o.has(u)&&(a.schedule(u),n())}s=!1,r&&(r=!1,a.process(c))}};return a}const me={delta:0,timestamp:0,isProcessing:!1},mf=40;let Zr=!0,ji=!1;const Qi=["read","update","preRender","render","postRender"],Ks=Qi.reduce((n,t)=>(n[t]=pf(()=>ji=!0),n),{}),Xt=Qi.reduce((n,t)=>{const e=Ks[t];return n[t]=(i,s=!1,r=!1)=>(ji||_f(),e.schedule(i,s,r)),n},{}),Mn=Qi.reduce((n,t)=>(n[t]=Ks[t].cancel,n),{}),or=Qi.reduce((n,t)=>(n[t]=()=>Ks[t].process(me),n),{}),gf=n=>Ks[n].process(me),$c=n=>{ji=!1,me.delta=Zr?1e3/60:Math.max(Math.min(n-me.timestamp,mf),1),me.timestamp=n,me.isProcessing=!0,Qi.forEach(gf),me.isProcessing=!1,ji&&(Zr=!1,requestAnimationFrame($c))},_f=()=>{ji=!0,Zr=!0,me.isProcessing||requestAnimationFrame($c)};function ra(n,t){const e="pointer"+(t?"enter":"leave"),i="onHover"+(t?"Start":"End"),s=(r,o)=>{if(r.type==="touch"||Yc())return;const a=n.getProps();n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",t),a[i]&&Xt.update(()=>a[i](r,o))};return an(n.current,e,s,{passive:!n.getProps()[i]})}class vf extends wn{mount(){this.unmount=vn(ra(this.node,!0),ra(this.node,!1))}unmount(){}}class xf extends wn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vn(on(this.node.current,"focus",()=>this.onFocus()),on(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Kc=(n,t)=>t?n===t?!0:Kc(n,t.parentElement):!1,le=n=>n;function ar(n,t){if(!t)return;const e=new PointerEvent("pointer"+n);t(e,$s(e))}class yf extends wn{constructor(){super(...arguments),this.removeStartListeners=le,this.removeEndListeners=le,this.removeAccessibleListeners=le,this.startPointerPress=(t,e)=>{if(this.removeEndListeners(),this.isPressing)return;const i=this.node.getProps(),r=an(window,"pointerup",(a,c)=>{if(!this.checkPressEnd())return;const{onTap:l,onTapCancel:u}=this.node.getProps();Xt.update(()=>{Kc(this.node.current,a.target)?l&&l(a,c):u&&u(a,c)})},{passive:!(i.onTap||i.onPointerUp)}),o=an(window,"pointercancel",(a,c)=>this.cancelPress(a,c),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=vn(r,o),this.startPress(t,e)},this.startAccessiblePress=()=>{const t=r=>{if(r.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||ar("up",(c,l)=>{const{onTap:u}=this.node.getProps();u&&Xt.update(()=>u(c,l))})};this.removeEndListeners(),this.removeEndListeners=on(this.node.current,"keyup",o),ar("down",(a,c)=>{this.startPress(a,c)})},e=on(this.node.current,"keydown",t),i=()=>{this.isPressing&&ar("cancel",(r,o)=>this.cancelPress(r,o))},s=on(this.node.current,"blur",i);this.removeAccessibleListeners=vn(e,s)}}startPress(t,e){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&Xt.update(()=>i(t,e))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Yc()}cancelPress(t,e){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&Xt.update(()=>i(t,e))}mount(){const t=this.node.getProps(),e=an(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=on(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=vn(e,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Jr=new WeakMap,lr=new WeakMap,Mf=n=>{const t=Jr.get(n.target);t&&t(n)},Sf=n=>{n.forEach(Mf)};function bf({root:n,...t}){const e=n||document;lr.has(e)||lr.set(e,{});const i=lr.get(e),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(Sf,{root:n,...t})),i[s]}function wf(n,t,e){const i=bf(t);return Jr.set(n,e),i.observe(n),()=>{Jr.delete(n),i.unobserve(n)}}const Tf={some:0,all:1};class Ef extends wn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:i,amount:s="some",once:r}=t,o={root:e?e.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:Tf[s]},a=c=>{const{isIntersecting:l}=c;if(this.isInView===l||(this.isInView=l,r&&!l&&this.hasEnteredView))return;l&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",l);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=l?u:h;f&&f(c)};return wf(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(Af(t,e))&&this.startObserver()}unmount(){}}function Af({viewport:n={}},{viewport:t={}}={}){return e=>n[e]!==t[e]}const Cf={inView:{Feature:Ef},tap:{Feature:yf},focus:{Feature:xf},hover:{Feature:vf}};function Zc(n,t){if(!Array.isArray(t))return!1;const e=t.length;if(e!==n.length)return!1;for(let i=0;i<e;i++)if(t[i]!==n[i])return!1;return!0}function Pf(n){const t={};return n.values.forEach((e,i)=>t[i]=e.get()),t}function Lf(n){const t={};return n.values.forEach((e,i)=>t[i]=e.getVelocity()),t}function Zs(n,t,e){const i=n.getProps();return Do(i,t,e!==void 0?e:i.custom,Pf(n),Lf(n))}const Rf="framerAppearId",Df="data-"+Lo(Rf);let If=le,Io=le;const xn=n=>n*1e3,ln=n=>n/1e3,Uf={current:!1},Jc=n=>Array.isArray(n)&&typeof n[0]=="number";function Qc(n){return!!(!n||typeof n=="string"&&tu[n]||Jc(n)||Array.isArray(n)&&n.every(Qc))}const Ii=([n,t,e,i])=>`cubic-bezier(${n}, ${t}, ${e}, ${i})`,tu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ii([0,.65,.55,1]),circOut:Ii([.55,0,1,.45]),backIn:Ii([.31,.01,.66,-.59]),backOut:Ii([.33,1.53,.69,.99])};function eu(n){if(n)return Jc(n)?Ii(n):Array.isArray(n)?n.map(eu):tu[n]}function Nf(n,t,e,{delay:i=0,duration:s,repeat:r=0,repeatType:o="loop",ease:a,times:c}={}){const l={[t]:e};c&&(l.offset=c);const u=eu(a);return Array.isArray(u)&&(l.easing=u),n.animate(l,{delay:i,duration:s,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:r+1,direction:o==="reverse"?"alternate":"normal"})}const oa={waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate")},cr={},nu={};for(const n in oa)nu[n]=()=>(cr[n]===void 0&&(cr[n]=oa[n]()),cr[n]);function Ff(n,{repeat:t,repeatType:e="loop"}){const i=t&&e!=="loop"&&t%2===1?0:n.length-1;return n[i]}const iu=(n,t,e)=>(((1-3*e+3*t)*n+(3*e-6*t))*n+3*t)*n,Of=1e-7,Vf=12;function Bf(n,t,e,i,s){let r,o,a=0;do o=t+(e-t)/2,r=iu(o,i,s)-n,r>0?e=o:t=o;while(Math.abs(r)>Of&&++a<Vf);return o}function ts(n,t,e,i){if(n===t&&e===i)return le;const s=r=>Bf(r,0,1,n,e);return r=>r===0||r===1?r:iu(s(r),t,i)}const zf=ts(.42,0,1,1),kf=ts(0,0,.58,1),su=ts(.42,0,.58,1),Gf=n=>Array.isArray(n)&&typeof n[0]!="number",ru=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,ou=n=>t=>1-n(1-t),au=n=>1-Math.sin(Math.acos(n)),Uo=ou(au),Hf=ru(Uo),lu=ts(.33,1.53,.69,.99),No=ou(lu),Wf=ru(No),jf=n=>(n*=2)<1?.5*No(n):.5*(2-Math.pow(2,-10*(n-1))),qf={linear:le,easeIn:zf,easeInOut:su,easeOut:kf,circIn:au,circInOut:Hf,circOut:Uo,backIn:No,backInOut:Wf,backOut:lu,anticipate:jf},aa=n=>{if(Array.isArray(n)){Io(n.length===4);const[t,e,i,s]=n;return ts(t,e,i,s)}else if(typeof n=="string")return qf[n];return n},Fo=(n,t)=>e=>!!(Zi(e)&&Hh.test(e)&&e.startsWith(n)||t&&Object.prototype.hasOwnProperty.call(e,t)),cu=(n,t,e)=>i=>{if(!Zi(i))return i;const[s,r,o,a]=i.match(Wi);return{[n]:parseFloat(s),[t]:parseFloat(r),[e]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},Xf=n=>Gn(0,255,n),ur={...Yn,transform:n=>Math.round(Xf(n))},On={test:Fo("rgb","red"),parse:cu("red","green","blue"),transform:({red:n,green:t,blue:e,alpha:i=1})=>"rgba("+ur.transform(n)+", "+ur.transform(t)+", "+ur.transform(e)+", "+Vi(Oi.transform(i))+")"};function Yf(n){let t="",e="",i="",s="";return n.length>5?(t=n.substring(1,3),e=n.substring(3,5),i=n.substring(5,7),s=n.substring(7,9)):(t=n.substring(1,2),e=n.substring(2,3),i=n.substring(3,4),s=n.substring(4,5),t+=t,e+=e,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(e,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Qr={test:Fo("#"),parse:Yf,transform:On.transform},di={test:Fo("hsl","hue"),parse:cu("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:e,alpha:i=1})=>"hsla("+Math.round(n)+", "+Ke.transform(Vi(t))+", "+Ke.transform(Vi(e))+", "+Vi(Oi.transform(i))+")"},xe={test:n=>On.test(n)||Qr.test(n)||di.test(n),parse:n=>On.test(n)?On.parse(n):di.test(n)?di.parse(n):Qr.parse(n),transform:n=>Zi(n)?n:n.hasOwnProperty("red")?On.transform(n):di.transform(n)},qt=(n,t,e)=>-e*n+e*t+n;function hr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function $f({hue:n,saturation:t,lightness:e,alpha:i}){n/=360,t/=100,e/=100;let s=0,r=0,o=0;if(!t)s=r=o=e;else{const a=e<.5?e*(1+t):e+t-e*t,c=2*e-a;s=hr(c,a,n+1/3),r=hr(c,a,n),o=hr(c,a,n-1/3)}return{red:Math.round(s*255),green:Math.round(r*255),blue:Math.round(o*255),alpha:i}}const fr=(n,t,e)=>{const i=n*n;return Math.sqrt(Math.max(0,e*(t*t-i)+i))},Kf=[Qr,On,di],Zf=n=>Kf.find(t=>t.test(n));function la(n){const t=Zf(n);let e=t.parse(n);return t===di&&(e=$f(e)),e}const uu=(n,t)=>{const e=la(n),i=la(t),s={...e};return r=>(s.red=fr(e.red,i.red,r),s.green=fr(e.green,i.green,r),s.blue=fr(e.blue,i.blue,r),s.alpha=qt(e.alpha,i.alpha,r),On.transform(s))},hu="${c}",fu="${n}";function Jf(n){var t,e;return isNaN(n)&&Zi(n)&&(((t=n.match(Wi))===null||t===void 0?void 0:t.length)||0)+(((e=n.match(Kr))===null||e===void 0?void 0:e.length)||0)>0}function Bs(n){typeof n=="number"&&(n=`${n}`);const t=[];let e=0,i=0;const s=n.match(Kr);s&&(e=s.length,n=n.replace(Kr,hu),t.push(...s.map(xe.parse)));const r=n.match(Wi);return r&&(i=r.length,n=n.replace(Wi,fu),t.push(...r.map(Yn.parse))),{values:t,numColors:e,numNumbers:i,tokenised:n}}function du(n){return Bs(n).values}function pu(n){const{values:t,numColors:e,tokenised:i}=Bs(n),s=t.length;return r=>{let o=i;for(let a=0;a<s;a++)o=o.replace(a<e?hu:fu,a<e?xe.transform(r[a]):Vi(r[a]));return o}}const Qf=n=>typeof n=="number"?0:n;function td(n){const t=du(n);return pu(n)(t.map(Qf))}const Sn={test:Jf,parse:du,createTransformer:pu,getAnimatableNone:td};function mu(n,t){return typeof n=="number"?e=>qt(n,t,e):xe.test(n)?uu(n,t):_u(n,t)}const gu=(n,t)=>{const e=[...n],i=e.length,s=n.map((r,o)=>mu(r,t[o]));return r=>{for(let o=0;o<i;o++)e[o]=s[o](r);return e}},ed=(n,t)=>{const e={...n,...t},i={};for(const s in e)n[s]!==void 0&&t[s]!==void 0&&(i[s]=mu(n[s],t[s]));return s=>{for(const r in i)e[r]=i[r](s);return e}},_u=(n,t)=>{const e=Sn.createTransformer(t),i=Bs(n),s=Bs(t);return i.numColors===s.numColors&&i.numNumbers>=s.numNumbers?vn(gu(i.values,s.values),e):o=>`${o>0?t:n}`},qi=(n,t,e)=>{const i=t-n;return i===0?1:(e-n)/i},ca=(n,t)=>e=>qt(n,t,e);function nd(n){return typeof n=="number"?ca:typeof n=="string"?xe.test(n)?uu:_u:Array.isArray(n)?gu:typeof n=="object"?ed:ca}function id(n,t,e){const i=[],s=e||nd(n[0]),r=n.length-1;for(let o=0;o<r;o++){let a=s(n[o],n[o+1]);if(t){const c=Array.isArray(t)?t[o]||le:t;a=vn(c,a)}i.push(a)}return i}function vu(n,t,{clamp:e=!0,ease:i,mixer:s}={}){const r=n.length;if(Io(r===t.length),r===1)return()=>t[0];n[0]>n[r-1]&&(n=[...n].reverse(),t=[...t].reverse());const o=id(t,i,s),a=o.length,c=l=>{let u=0;if(a>1)for(;u<n.length-2&&!(l<n[u+1]);u++);const h=qi(n[u],n[u+1],l);return o[u](h)};return e?l=>c(Gn(n[0],n[r-1],l)):c}function sd(n,t){const e=n[n.length-1];for(let i=1;i<=t;i++){const s=qi(0,t,i);n.push(qt(e,1,s))}}function rd(n){const t=[0];return sd(t,n.length-1),t}function od(n,t){return n.map(e=>e*t)}function ad(n,t){return n.map(()=>t||su).splice(0,n.length-1)}function zs({duration:n=300,keyframes:t,times:e,ease:i="easeInOut"}){const s=Gf(i)?i.map(aa):aa(i),r={done:!1,value:t[0]},o=od(e&&e.length===t.length?e:rd(t),n),a=vu(o,t,{ease:Array.isArray(s)?s:ad(t,s)});return{calculatedDuration:n,next:c=>(r.value=a(c),r.done=c>=n,r)}}function xu(n,t){return t?n*(1e3/t):0}const ld=5;function yu(n,t,e){const i=Math.max(t-ld,0);return xu(e-n(i),t-i)}const dr=.001,cd=.01,ua=10,ud=.05,hd=1;function fd({duration:n=800,bounce:t=.25,velocity:e=0,mass:i=1}){let s,r;If(n<=xn(ua));let o=1-t;o=Gn(ud,hd,o),n=Gn(cd,ua,ln(n)),o<1?(s=l=>{const u=l*o,h=u*n,f=u-e,p=to(l,o),g=Math.exp(-h);return dr-f/p*g},r=l=>{const h=l*o*n,f=h*e+e,p=Math.pow(o,2)*Math.pow(l,2)*n,g=Math.exp(-h),_=to(Math.pow(l,2),o);return(-s(l)+dr>0?-1:1)*((f-p)*g)/_}):(s=l=>{const u=Math.exp(-l*n),h=(l-e)*n+1;return-dr+u*h},r=l=>{const u=Math.exp(-l*n),h=(e-l)*(n*n);return u*h});const a=5/n,c=pd(s,r,a);if(n=xn(n),isNaN(c))return{stiffness:100,damping:10,duration:n};{const l=Math.pow(c,2)*i;return{stiffness:l,damping:o*2*Math.sqrt(i*l),duration:n}}}const dd=12;function pd(n,t,e){let i=e;for(let s=1;s<dd;s++)i=i-n(i)/t(i);return i}function to(n,t){return n*Math.sqrt(1-t*t)}const md=["duration","bounce"],gd=["stiffness","damping","mass"];function ha(n,t){return t.some(e=>n[e]!==void 0)}function _d(n){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...n};if(!ha(n,gd)&&ha(n,md)){const e=fd(n);t={...t,...e,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function Mu({keyframes:n,restDelta:t,restSpeed:e,...i}){const s=n[0],r=n[n.length-1],o={done:!1,value:s},{stiffness:a,damping:c,mass:l,velocity:u,duration:h,isResolvedFromDuration:f}=_d(i),p=u?-ln(u):0,g=c/(2*Math.sqrt(a*l)),_=r-s,m=ln(Math.sqrt(a/l)),d=Math.abs(_)<5;e||(e=d?.01:2),t||(t=d?.005:.5);let b;if(g<1){const v=to(m,g);b=S=>{const T=Math.exp(-g*m*S);return r-T*((p+g*m*_)/v*Math.sin(v*S)+_*Math.cos(v*S))}}else if(g===1)b=v=>r-Math.exp(-m*v)*(_+(p+m*_)*v);else{const v=m*Math.sqrt(g*g-1);b=S=>{const T=Math.exp(-g*m*S),P=Math.min(v*S,300);return r-T*((p+g*m*_)*Math.sinh(P)+v*_*Math.cosh(P))/v}}return{calculatedDuration:f&&h||null,next:v=>{const S=b(v);if(f)o.done=v>=h;else{let T=p;v!==0&&(g<1?T=yu(b,v,S):T=0);const P=Math.abs(T)<=e,L=Math.abs(r-S)<=t;o.done=P&&L}return o.value=o.done?r:S,o}}}function fa({keyframes:n,velocity:t=0,power:e=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:r=500,modifyTarget:o,min:a,max:c,restDelta:l=.5,restSpeed:u}){const h=n[0],f={done:!1,value:h},p=C=>a!==void 0&&C<a||c!==void 0&&C>c,g=C=>a===void 0?c:c===void 0||Math.abs(a-C)<Math.abs(c-C)?a:c;let _=e*t;const m=h+_,d=o===void 0?m:o(m);d!==m&&(_=d-h);const b=C=>-_*Math.exp(-C/i),v=C=>d+b(C),S=C=>{const y=b(C),E=v(C);f.done=Math.abs(y)<=l,f.value=f.done?d:E};let T,P;const L=C=>{p(f.value)&&(T=C,P=Mu({keyframes:[f.value,g(f.value)],velocity:yu(v,C,f.value),damping:s,stiffness:r,restDelta:l,restSpeed:u}))};return L(0),{calculatedDuration:null,next:C=>{let y=!1;return!P&&T===void 0&&(y=!0,S(C),L(C)),T!==void 0&&C>T?P.next(C-T):(!y&&S(C),f)}}}const vd=n=>{const t=({timestamp:e})=>n(e);return{start:()=>Xt.update(t,!0),stop:()=>Mn.update(t),now:()=>me.isProcessing?me.timestamp:performance.now()}},xd={decay:fa,inertia:fa,tween:zs,keyframes:zs,spring:Mu},da=2e4;function pa(n){let t=0;const e=50;let i=n.next(t);for(;!i.done&&t<da;)t+=e,i=n.next(t);return t>=da?1/0:t}function ks({autoplay:n=!0,delay:t=0,driver:e=vd,keyframes:i,type:s="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a="loop",onPlay:c,onStop:l,onComplete:u,onUpdate:h,...f}){let p=1,g=!1,_,m;const d=()=>{_&&_(),m=new Promise(st=>{_=st})};d();let b;const v=xd[s]||zs;let S;v!==zs&&typeof i[0]!="number"&&(S=vu([0,100],i,{clamp:!1}),i=[0,100]);const T=v({...f,keyframes:i});let P;a==="mirror"&&(P=v({...f,keyframes:[...i].reverse(),velocity:-(f.velocity||0)}));let L="idle",C=null,y=null,E=null;T.calculatedDuration===null&&r&&(T.calculatedDuration=pa(T));const{calculatedDuration:W}=T;let X=1/0,I=1/0;W!==null&&(X=W+o,I=X*(r+1)-o);let D=0;const F=st=>{if(y===null)return;p>0&&(y=Math.min(y,st)),C!==null?D=C:D=(st-y)*p;const ot=D-t,V=ot<0;D=Math.max(ot,0),L==="finished"&&C===null&&(D=I);let q=D,it=T;if(r){const vt=D/X;let et=Math.floor(vt),ft=vt%1;!ft&&vt>=1&&(ft=1),ft===1&&et--,et=Math.min(et,r+1);const Ft=!!(et%2);Ft&&(a==="reverse"?(ft=1-ft,o&&(ft-=o/X)):a==="mirror"&&(it=P));let ht=Gn(0,1,ft);D>I&&(ht=a==="reverse"&&Ft?1:0),q=ht*X}const rt=V?{done:!1,value:i[0]}:it.next(q);S&&(rt.value=S(rt.value));let{done:O}=rt;!V&&W!==null&&(O=D>=I);const bt=C===null&&(L==="finished"||L==="running"&&O||p<0&&D<=0);return h&&h(rt.value),bt&&j(),rt},Z=()=>{b&&b.stop(),b=void 0},Y=()=>{L="idle",Z(),d(),y=E=null},j=()=>{L="finished",u&&u(),Z(),d()},$=()=>{if(g)return;b||(b=e(F));const st=b.now();c&&c(),L="running",C!==null?y=st-C:y||(y=st),E=y,C=null,b.start()};n&&$();const tt={then(st,ot){return m.then(st,ot)},get time(){return ln(D)},set time(st){st=xn(st),D=st,C!==null||!b||p===0?C=st:y=b.now()-st/p},get duration(){const st=T.calculatedDuration===null?pa(T):T.calculatedDuration;return ln(st)},get speed(){return p},set speed(st){st===p||!b||(p=st,tt.time=ln(D))},get state(){return L},play:$,pause:()=>{L="paused",C=D},stop:()=>{g=!0,L!=="idle"&&(L="idle",l&&l(),Y())},cancel:()=>{E!==null&&F(E),Y()},complete:()=>{L="finished"},sample:st=>(y=0,F(st))};return tt}const yd=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),ls=10,Md=2e4,Sd=(n,t)=>t.type==="spring"||n==="backgroundColor"||!Qc(t.ease);function bd(n,t,{onUpdate:e,onComplete:i,...s}){if(!(nu.waapi()&&yd.has(t)&&!s.repeatDelay&&s.repeatType!=="mirror"&&s.damping!==0&&s.type!=="inertia"))return!1;let o=!1,a,c;const l=()=>{c=new Promise(_=>{a=_})};l();let{keyframes:u,duration:h=300,ease:f}=s;if(Sd(t,s)){const _=ks({...s,repeat:0,delay:0});let m={done:!1,value:u[0]};const d=[];let b=0;for(;!m.done&&b<Md;)m=_.sample(b),d.push(m.value),b+=ls;u=d,h=b-ls,f="linear"}const p=Nf(n.owner.current,t,u,{...s,duration:h,ease:f}),g=()=>{Xt.update(()=>p.cancel()),a(),l()};return p.onfinish=()=>{n.set(Ff(u,s)),i&&i(),g()},{then(_,m){return c.then(_,m)},get time(){return ln(p.currentTime||0)},set time(_){p.currentTime=xn(_)},get speed(){return p.playbackRate},set speed(_){p.playbackRate=_},get duration(){return ln(h)},play:()=>{o||p.play()},pause:()=>p.pause(),stop:()=>{if(o=!0,p.playState==="idle")return;const{currentTime:_}=p;if(_){const m=ks({...s,autoplay:!1});n.setWithVelocity(m.sample(_-ls).value,m.sample(_).value,ls)}g()},complete:()=>p.finish(),cancel:g}}function wd({keyframes:n,delay:t,onUpdate:e,onComplete:i}){const s=()=>(e&&e(n[n.length-1]),i&&i(),{time:0,speed:1,duration:0,play:le,pause:le,stop:le,then:r=>(r(),Promise.resolve()),cancel:le,complete:le});return t?ks({keyframes:[0,1],duration:0,delay:t,onComplete:s}):s()}const Td={type:"spring",stiffness:500,damping:25,restSpeed:10},Ed=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Ad={type:"keyframes",duration:.8},Cd={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Pd=(n,{keyframes:t})=>t.length>2?Ad:Xn.has(n)?n.startsWith("scale")?Ed(t[1]):Td:Cd,eo=(n,t)=>n==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&Sn.test(t)&&!t.startsWith("url(")),Ld=new Set(["brightness","contrast","saturate","opacity"]);function Rd(n){const[t,e]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[i]=e.match(Wi)||[];if(!i)return n;const s=e.replace(i,"");let r=Ld.has(t)?1:0;return i!==e&&(r*=100),t+"("+r+s+")"}const Dd=/([a-z-]*)\(.*?\)/g,no={...Sn,getAnimatableNone:n=>{const t=n.match(Dd);return t?t.map(Rd).join(" "):n}},Id={...Fc,color:xe,backgroundColor:xe,outlineColor:xe,fill:xe,stroke:xe,borderColor:xe,borderTopColor:xe,borderRightColor:xe,borderBottomColor:xe,borderLeftColor:xe,filter:no,WebkitFilter:no},Oo=n=>Id[n];function Vo(n,t){let e=Oo(n);return e!==no&&(e=Sn),e.getAnimatableNone?e.getAnimatableNone(t):void 0}function Ud({when:n,delay:t,delayChildren:e,staggerChildren:i,staggerDirection:s,repeat:r,repeatType:o,repeatDelay:a,from:c,elapsed:l,...u}){return!!Object.keys(u).length}function ma(n){return n===0||typeof n=="string"&&parseFloat(n)===0&&n.indexOf(" ")===-1}function ga(n){return typeof n=="number"?0:Vo("",n)}function Su(n,t){return n[t]||n.default||n}function Nd(n,t,e,i){const s=eo(t,e);let r=i.from!==void 0?i.from:n.get();if(r==="none"&&s&&typeof e=="string"?r=Vo(t,e):ma(r)&&typeof e=="string"?r=ga(e):!Array.isArray(e)&&ma(e)&&typeof r=="string"&&(e=ga(r)),Array.isArray(e)){for(let o=0;o<e.length;o++)e[o]===null&&(e[o]=o===0?r:e[o-1]);return e}else return[r,e]}const Bo=(n,t,e,i={})=>s=>{const r=Su(i,n)||{},o=r.delay||i.delay||0;let{elapsed:a=0}=i;a=a-xn(o);const c=Nd(t,n,e,r),l=c[0],u=c[c.length-1],h=eo(n,l),f=eo(n,u);let p={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...r,delay:-a,onUpdate:g=>{t.set(g),r.onUpdate&&r.onUpdate(g)},onComplete:()=>{s(),r.onComplete&&r.onComplete()}};if(Ud(r)||(p={...p,...Pd(n,p)}),p.duration&&(p.duration=xn(p.duration)),p.repeatDelay&&(p.repeatDelay=xn(p.repeatDelay)),!h||!f||Uf.current||r.type===!1)return wd(p);if(t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const g=bd(t,n,p);if(g)return g}return ks(p)};function Gs(n){return!!(Te(n)&&n.add)}const Fd=n=>/^\-?\d*\.?\d+$/.test(n),Od=n=>/^0[^.\s]+$/.test(n);function zo(n,t){n.indexOf(t)===-1&&n.push(t)}function ko(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}class Go{constructor(){this.subscriptions=[]}add(t){return zo(this.subscriptions,t),()=>ko(this.subscriptions,t)}notify(t,e,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,e,i);else for(let r=0;r<s;r++){const o=this.subscriptions[r];o&&o(t,e,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Vd=n=>!isNaN(parseFloat(n));class Bd{constructor(t,e={}){this.version="10.10.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(i,s=!0)=>{this.prev=this.current,this.current=i;const{delta:r,timestamp:o}=me;this.lastUpdated!==o&&(this.timeDelta=r,this.lastUpdated=o,Xt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>Xt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:i})=>{i!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Vd(this.current),this.owner=e.owner}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new Go);const i=this.events[t].add(e);return t==="change"?()=>{i(),Xt.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){!e||!this.passiveEffect?this.updateAndNotify(t,e):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,e,i){this.set(e),this.prev=t,this.timeDelta=i}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?xu(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xi(n,t){return new Bd(n,t)}const bu=n=>t=>t.test(n),zd={test:n=>n==="auto",parse:n=>n},wu=[Yn,yt,Ke,mn,jh,Wh,zd],Ai=n=>wu.find(bu(n)),kd=[...wu,xe,Sn],Gd=n=>kd.find(bu(n));function Hd(n,t,e){n.hasValue(t)?n.getValue(t).set(e):n.addValue(t,xi(e))}function Wd(n,t){const e=Zs(n,t);let{transitionEnd:i={},transition:s={},...r}=e?n.makeTargetAnimatable(e,!1):{};r={...r,...i};for(const o in r){const a=of(r[o]);Hd(n,o,a)}}function jd(n,t,e){var i,s;const r=Object.keys(t).filter(a=>!n.hasValue(a)),o=r.length;if(o)for(let a=0;a<o;a++){const c=r[a],l=t[c];let u=null;Array.isArray(l)&&(u=l[0]),u===null&&(u=(s=(i=e[c])!==null&&i!==void 0?i:n.readValue(c))!==null&&s!==void 0?s:t[c]),u!=null&&(typeof u=="string"&&(Fd(u)||Od(u))?u=parseFloat(u):!Gd(u)&&Sn.test(l)&&(u=Vo(c,l)),n.addValue(c,xi(u,{owner:n})),e[c]===void 0&&(e[c]=u),u!==null&&n.setBaseTarget(c,u))}}function qd(n,t){return t?(t[n]||t.default||t).from:void 0}function Xd(n,t,e){const i={};for(const s in n){const r=qd(s,t);if(r!==void 0)i[s]=r;else{const o=e.getValue(s);o&&(i[s]=o.get())}}return i}function Yd({protectedKeys:n,needsAnimating:t},e){const i=n.hasOwnProperty(e)&&t[e]!==!0;return t[e]=!1,i}function Tu(n,t,{delay:e=0,transitionOverride:i,type:s}={}){let{transition:r=n.getDefaultTransition(),transitionEnd:o,...a}=n.makeTargetAnimatable(t);const c=n.getValue("willChange");i&&(r=i);const l=[],u=s&&n.animationState&&n.animationState.getState()[s];for(const h in a){const f=n.getValue(h),p=a[h];if(!f||p===void 0||u&&Yd(u,h))continue;const g={delay:e,elapsed:0,...r};if(window.HandoffAppearAnimations&&!f.hasAnimated){const m=n.getProps()[Df];m&&(g.elapsed=window.HandoffAppearAnimations(m,h,f,Xt))}f.start(Bo(h,f,p,n.shouldReduceMotion&&Xn.has(h)?{type:!1}:g));const _=f.animation;Gs(c)&&(c.add(h),_.then(()=>c.remove(h))),l.push(_)}return o&&Promise.all(l).then(()=>{o&&Wd(n,o)}),l}function io(n,t,e={}){const i=Zs(n,t,e.custom);let{transition:s=n.getDefaultTransition()||{}}=i||{};e.transitionOverride&&(s=e.transitionOverride);const r=i?()=>Promise.all(Tu(n,i,e)):()=>Promise.resolve(),o=n.variantChildren&&n.variantChildren.size?(c=0)=>{const{delayChildren:l=0,staggerChildren:u,staggerDirection:h}=s;return $d(n,t,l+c,u,h,e)}:()=>Promise.resolve(),{when:a}=s;if(a){const[c,l]=a==="beforeChildren"?[r,o]:[o,r];return c().then(()=>l())}else return Promise.all([r(),o(e.delay)])}function $d(n,t,e=0,i=0,s=1,r){const o=[],a=(n.variantChildren.size-1)*i,c=s===1?(l=0)=>l*i:(l=0)=>a-l*i;return Array.from(n.variantChildren).sort(Kd).forEach((l,u)=>{l.notify("AnimationStart",t),o.push(io(l,t,{...r,delay:e+c(u)}).then(()=>l.notify("AnimationComplete",t)))}),Promise.all(o)}function Kd(n,t){return n.sortNodePosition(t)}function Zd(n,t,e={}){n.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(r=>io(n,r,e));i=Promise.all(s)}else if(typeof t=="string")i=io(n,t,e);else{const s=typeof t=="function"?Zs(n,t,e.custom):t;i=Promise.all(Tu(n,s,e))}return i.then(()=>n.notify("AnimationComplete",t))}const Jd=[...bo].reverse(),Qd=bo.length;function tp(n){return t=>Promise.all(t.map(({animation:e,options:i})=>Zd(n,e,i)))}function ep(n){let t=tp(n);const e=ip();let i=!0;const s=(c,l)=>{const u=Zs(n,l);if(u){const{transition:h,transitionEnd:f,...p}=u;c={...c,...p,...f}}return c};function r(c){t=c(n)}function o(c,l){const u=n.getProps(),h=n.getVariantContext(!0)||{},f=[],p=new Set;let g={},_=1/0;for(let d=0;d<Qd;d++){const b=Jd[d],v=e[b],S=u[b]!==void 0?u[b]:h[b],T=Gi(S),P=b===l?v.isActive:null;P===!1&&(_=d);let L=S===h[b]&&S!==u[b]&&T;if(L&&i&&n.manuallyAnimateOnMount&&(L=!1),v.protectedKeys={...g},!v.isActive&&P===null||!S&&!v.prevProp||qs(S)||typeof S=="boolean")continue;const C=np(v.prevProp,S);let y=C||b===l&&v.isActive&&!L&&T||d>_&&T;const E=Array.isArray(S)?S:[S];let W=E.reduce(s,{});P===!1&&(W={});const{prevResolvedValues:X={}}=v,I={...X,...W},D=F=>{y=!0,p.delete(F),v.needsAnimating[F]=!0};for(const F in I){const Z=W[F],Y=X[F];g.hasOwnProperty(F)||(Z!==Y?Vs(Z)&&Vs(Y)?!Zc(Z,Y)||C?D(F):v.protectedKeys[F]=!0:Z!==void 0?D(F):p.add(F):Z!==void 0&&p.has(F)?D(F):v.protectedKeys[F]=!0)}v.prevProp=S,v.prevResolvedValues=W,v.isActive&&(g={...g,...W}),i&&n.blockInitialAnimation&&(y=!1),y&&!L&&f.push(...E.map(F=>({animation:F,options:{type:b,...c}})))}if(p.size){const d={};p.forEach(b=>{const v=n.getBaseTarget(b);v!==void 0&&(d[b]=v)}),f.push({animation:d})}let m=!!f.length;return i&&u.initial===!1&&!n.manuallyAnimateOnMount&&(m=!1),i=!1,m?t(f):Promise.resolve()}function a(c,l,u){var h;if(e[c].isActive===l)return Promise.resolve();(h=n.variantChildren)===null||h===void 0||h.forEach(p=>{var g;return(g=p.animationState)===null||g===void 0?void 0:g.setActive(c,l)}),e[c].isActive=l;const f=o(u,c);for(const p in e)e[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:r,getState:()=>e}}function np(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!Zc(t,n):!1}function Cn(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ip(){return{animate:Cn(!0),whileInView:Cn(),whileHover:Cn(),whileTap:Cn(),whileDrag:Cn(),whileFocus:Cn(),exit:Cn()}}class sp extends wn{constructor(t){super(t),t.animationState||(t.animationState=ep(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),qs(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){}}let rp=0;class op extends wn{constructor(){super(...arguments),this.id=rp++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e,custom:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const r=this.node.animationState.setActive("exit",!t,{custom:i??this.node.getProps().custom});e&&!t&&r.then(()=>e(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const ap={animation:{Feature:sp},exit:{Feature:op}},_a=(n,t)=>Math.abs(n-t);function lp(n,t){const e=_a(n.x,t.x),i=_a(n.y,t.y);return Math.sqrt(e**2+i**2)}class Eu{constructor(t,e,{transformPagePoint:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const l=mr(this.lastMoveEventInfo,this.history),u=this.startEvent!==null,h=lp(l.offset,{x:0,y:0})>=3;if(!u&&!h)return;const{point:f}=l,{timestamp:p}=me;this.history.push({...f,timestamp:p});const{onStart:g,onMove:_}=this.handlers;u||(g&&g(this.lastMoveEvent,l),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,l)},this.handlePointerMove=(l,u)=>{this.lastMoveEvent=l,this.lastMoveEventInfo=pr(u,this.transformPagePoint),Xt.update(this.updatePoint,!0)},this.handlePointerUp=(l,u)=>{if(this.end(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const{onEnd:h,onSessionEnd:f}=this.handlers,p=mr(l.type==="pointercancel"?this.lastMoveEventInfo:pr(u,this.transformPagePoint),this.history);this.startEvent&&h&&h(l,p),f&&f(l,p)},!jc(t))return;this.handlers=e,this.transformPagePoint=i;const s=$s(t),r=pr(s,this.transformPagePoint),{point:o}=r,{timestamp:a}=me;this.history=[{...o,timestamp:a}];const{onSessionStart:c}=e;c&&c(t,mr(r,this.history)),this.removeListeners=vn(an(window,"pointermove",this.handlePointerMove),an(window,"pointerup",this.handlePointerUp),an(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Mn.update(this.updatePoint)}}function pr(n,t){return t?{point:t(n.point)}:n}function va(n,t){return{x:n.x-t.x,y:n.y-t.y}}function mr({point:n},t){return{point:n,delta:va(n,Au(t)),offset:va(n,cp(t)),velocity:up(t,.1)}}function cp(n){return n[0]}function Au(n){return n[n.length-1]}function up(n,t){if(n.length<2)return{x:0,y:0};let e=n.length-1,i=null;const s=Au(n);for(;e>=0&&(i=n[e],!(s.timestamp-i.timestamp>xn(t)));)e--;if(!i)return{x:0,y:0};const r=ln(s.timestamp-i.timestamp);if(r===0)return{x:0,y:0};const o={x:(s.x-i.x)/r,y:(s.y-i.y)/r};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Re(n){return n.max-n.min}function so(n,t=0,e=.01){return Math.abs(n-t)<=e}function xa(n,t,e,i=.5){n.origin=i,n.originPoint=qt(t.min,t.max,n.origin),n.scale=Re(e)/Re(t),(so(n.scale,1,1e-4)||isNaN(n.scale))&&(n.scale=1),n.translate=qt(e.min,e.max,n.origin)-n.originPoint,(so(n.translate)||isNaN(n.translate))&&(n.translate=0)}function Bi(n,t,e,i){xa(n.x,t.x,e.x,i?i.originX:void 0),xa(n.y,t.y,e.y,i?i.originY:void 0)}function ya(n,t,e){n.min=e.min+t.min,n.max=n.min+Re(t)}function hp(n,t,e){ya(n.x,t.x,e.x),ya(n.y,t.y,e.y)}function Ma(n,t,e){n.min=t.min-e.min,n.max=n.min+Re(t)}function zi(n,t,e){Ma(n.x,t.x,e.x),Ma(n.y,t.y,e.y)}function fp(n,{min:t,max:e},i){return t!==void 0&&n<t?n=i?qt(t,n,i.min):Math.max(n,t):e!==void 0&&n>e&&(n=i?qt(e,n,i.max):Math.min(n,e)),n}function Sa(n,t,e){return{min:t!==void 0?n.min+t:void 0,max:e!==void 0?n.max+e-(n.max-n.min):void 0}}function dp(n,{top:t,left:e,bottom:i,right:s}){return{x:Sa(n.x,e,s),y:Sa(n.y,t,i)}}function ba(n,t){let e=t.min-n.min,i=t.max-n.max;return t.max-t.min<n.max-n.min&&([e,i]=[i,e]),{min:e,max:i}}function pp(n,t){return{x:ba(n.x,t.x),y:ba(n.y,t.y)}}function mp(n,t){let e=.5;const i=Re(n),s=Re(t);return s>i?e=qi(t.min,t.max-i,n.min):i>s&&(e=qi(n.min,n.max-s,t.min)),Gn(0,1,e)}function gp(n,t){const e={};return t.min!==void 0&&(e.min=t.min-n.min),t.max!==void 0&&(e.max=t.max-n.min),e}const ro=.35;function _p(n=ro){return n===!1?n=0:n===!0&&(n=ro),{x:wa(n,"left","right"),y:wa(n,"top","bottom")}}function wa(n,t,e){return{min:Ta(n,t),max:Ta(n,e)}}function Ta(n,t){return typeof n=="number"?n:n[t]||0}const Ea=()=>({translate:0,scale:1,origin:0,originPoint:0}),ki=()=>({x:Ea(),y:Ea()}),Aa=()=>({min:0,max:0}),Qt=()=>({x:Aa(),y:Aa()});function Xe(n){return[n("x"),n("y")]}function Cu({top:n,left:t,right:e,bottom:i}){return{x:{min:t,max:e},y:{min:n,max:i}}}function vp({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function xp(n,t){if(!t)return n;const e=t({x:n.left,y:n.top}),i=t({x:n.right,y:n.bottom});return{top:e.y,left:e.x,bottom:i.y,right:i.x}}function gr(n){return n===void 0||n===1}function oo({scale:n,scaleX:t,scaleY:e}){return!gr(n)||!gr(t)||!gr(e)}function Dn(n){return oo(n)||Pu(n)||n.z||n.rotate||n.rotateX||n.rotateY}function Pu(n){return Ca(n.x)||Ca(n.y)}function Ca(n){return n&&n!=="0%"}function Hs(n,t,e){const i=n-e,s=t*i;return e+s}function Pa(n,t,e,i,s){return s!==void 0&&(n=Hs(n,s,i)),Hs(n,e,i)+t}function ao(n,t=0,e=1,i,s){n.min=Pa(n.min,t,e,i,s),n.max=Pa(n.max,t,e,i,s)}function Lu(n,{x:t,y:e}){ao(n.x,t.translate,t.scale,t.originPoint),ao(n.y,e.translate,e.scale,e.originPoint)}function yp(n,t,e,i=!1){const s=e.length;if(!s)return;t.x=t.y=1;let r,o;for(let a=0;a<s;a++){r=e[a],o=r.projectionDelta;const c=r.instance;c&&c.style&&c.style.display==="contents"||(i&&r.options.layoutScroll&&r.scroll&&r!==r.root&&pi(n,{x:-r.scroll.offset.x,y:-r.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Lu(n,o)),i&&Dn(r.latestValues)&&pi(n,r.latestValues))}t.x=La(t.x),t.y=La(t.y)}function La(n){return Number.isInteger(n)||n>1.0000000000001||n<.999999999999?n:1}function gn(n,t){n.min=n.min+t,n.max=n.max+t}function Ra(n,t,[e,i,s]){const r=t[s]!==void 0?t[s]:.5,o=qt(n.min,n.max,r);ao(n,t[e],t[i],o,t.scale)}const Mp=["x","scaleX","originX"],Sp=["y","scaleY","originY"];function pi(n,t){Ra(n.x,t,Mp),Ra(n.y,t,Sp)}function Ru(n,t){return Cu(xp(n.getBoundingClientRect(),t))}function bp(n,t,e){const i=Ru(n,e),{scroll:s}=t;return s&&(gn(i.x,s.offset.x),gn(i.y,s.offset.y)),i}const wp=new WeakMap;class Tp{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Qt(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=c=>{this.stopAnimation(),e&&this.snapToCursor($s(c,"page").point)},r=(c,l)=>{const{drag:u,dragPropagation:h,onDragStart:f}=this.getProps();if(u&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Xc(u),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xe(g=>{let _=this.getAxisMotionValue(g).get()||0;if(Ke.test(_)){const{projection:m}=this.visualElement;if(m&&m.layout){const d=m.layout.layoutBox[g];d&&(_=Re(d)*(parseFloat(_)/100))}}this.originPoint[g]=_}),f&&Xt.update(()=>f(c,l));const{animationState:p}=this.visualElement;p&&p.setActive("whileDrag",!0)},o=(c,l)=>{const{dragPropagation:u,dragDirectionLock:h,onDirectionLock:f,onDrag:p}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:g}=l;if(h&&this.currentDirection===null){this.currentDirection=Ep(g),this.currentDirection!==null&&f&&f(this.currentDirection);return}this.updateAxis("x",l.point,g),this.updateAxis("y",l.point,g),this.visualElement.render(),p&&p(c,l)},a=(c,l)=>this.stop(c,l);this.panSession=new Eu(t,{onSessionStart:s,onStart:r,onMove:o,onSessionEnd:a},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,e){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=e;this.startAnimation(s);const{onDragEnd:r}=this.getProps();r&&Xt.update(()=>r(t,e))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,i){const{drag:s}=this.getProps();if(!i||!cs(t,s,this.currentDirection))return;const r=this.getAxisMotionValue(t);let o=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(o=fp(o,this.constraints[t],this.elastic[t])),r.set(o)}resolveConstraints(){const{dragConstraints:t,dragElastic:e}=this.getProps(),{layout:i}=this.visualElement.projection||{},s=this.constraints;t&&fi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=dp(i.layoutBox,t):this.constraints=!1,this.elastic=_p(e),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Xe(r=>{this.getAxisMotionValue(r)&&(this.constraints[r]=gp(i.layoutBox[r],this.constraints[r]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!fi(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const r=bp(i,s.root,this.visualElement.getTransformPagePoint());let o=pp(s.layout.layoutBox,r);if(e){const a=e(vp(o));this.hasMutatedConstraints=!!a,a&&(o=Cu(a))}return o}startAnimation(t){const{drag:e,dragMomentum:i,dragElastic:s,dragTransition:r,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},l=Xe(u=>{if(!cs(u,e,this.currentDirection))return;let h=c&&c[u]||{};o&&(h={min:0,max:0});const f=s?200:1e6,p=s?40:1e7,g={type:"inertia",velocity:i?t[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...r,...h};return this.startAxisValueAnimation(u,g)});return Promise.all(l).then(a)}startAxisValueAnimation(t,e){const i=this.getAxisMotionValue(t);return i.start(Bo(t,i,0,e))}stopAnimation(){Xe(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const e="_drag"+t.toUpperCase(),i=this.visualElement.getProps(),s=i[e];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Xe(e=>{const{drag:i}=this.getProps();if(!cs(e,i,this.currentDirection))return;const{projection:s}=this.visualElement,r=this.getAxisMotionValue(e);if(s&&s.layout){const{min:o,max:a}=s.layout.layoutBox[e];r.set(t[e]-qt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:i}=this.visualElement;if(!fi(e)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Xe(o=>{const a=this.getAxisMotionValue(o);if(a){const c=a.get();s[o]=mp({min:c,max:c},this.constraints[o])}});const{transformTemplate:r}=this.visualElement.getProps();this.visualElement.current.style.transform=r?r({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Xe(o=>{if(!cs(o,t,null))return;const a=this.getAxisMotionValue(o),{min:c,max:l}=this.constraints[o];a.set(qt(c,l,s[o]))})}addListeners(){if(!this.visualElement.current)return;wp.set(this.visualElement,this);const t=this.visualElement.current,e=an(t,"pointerdown",c=>{const{drag:l,dragListener:u=!0}=this.getProps();l&&u&&this.start(c)}),i=()=>{const{dragConstraints:c}=this.getProps();fi(c)&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,r=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),i();const o=on(window,"resize",()=>this.scalePositionWithinConstraints()),a=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:l})=>{this.isDragging&&l&&(Xe(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=c[u].translate,h.set(h.get()+c[u].translate))}),this.visualElement.render())});return()=>{o(),e(),r(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:r=!1,dragElastic:o=ro,dragMomentum:a=!0}=t;return{...t,drag:e,dragDirectionLock:i,dragPropagation:s,dragConstraints:r,dragElastic:o,dragMomentum:a}}}function cs(n,t,e){return(t===!0||t===n)&&(e===null||e===n)}function Ep(n,t=10){let e=null;return Math.abs(n.y)>t?e="y":Math.abs(n.x)>t&&(e="x"),e}class Ap extends wn{constructor(t){super(t),this.removeGroupControls=le,this.removeListeners=le,this.controls=new Tp(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||le}unmount(){this.removeGroupControls(),this.removeListeners()}}const Da=n=>(t,e)=>{n&&Xt.update(()=>n(t,e))};class Cp extends wn{constructor(){super(...arguments),this.removePointerDownListener=le}onPointerDown(t){this.session=new Eu(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint()})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:Da(t),onStart:Da(e),onMove:i,onEnd:(r,o)=>{delete this.session,s&&Xt.update(()=>s(r,o))}}}mount(){this.removePointerDownListener=an(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Pp(){const n=Et.useContext(So);if(n===null)return[!0,null];const{isPresent:t,onExitComplete:e,register:i}=n,s=Et.useId();return Et.useEffect(()=>i(s),[]),!t&&e?[!1,()=>e&&e(s)]:[!0]}function Ia(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const Ci={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(yt.test(n))n=parseFloat(n);else return n;const e=Ia(n,t.target.x),i=Ia(n,t.target.y);return`${e}% ${i}%`}},Du=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Lp(n){const t=Du.exec(n);if(!t)return[,];const[,e,i]=t;return[e,i]}function lo(n,t,e=1){const[i,s]=Lp(n);if(!i)return;const r=window.getComputedStyle(t).getPropertyValue(i);return r?r.trim():$r(s)?lo(s,t,e+1):s}function Rp(n,{...t},e){const i=n.current;if(!(i instanceof Element))return{target:t,transitionEnd:e};e&&(e={...e}),n.values.forEach(s=>{const r=s.get();if(!$r(r))return;const o=lo(r,i);o&&s.set(o)});for(const s in t){const r=t[s];if(!$r(r))continue;const o=lo(r,i);o&&(t[s]=o,e||(e={}),e[s]===void 0&&(e[s]=r))}return{target:t,transitionEnd:e}}const Ua="_$css",Dp={correct:(n,{treeScale:t,projectionDelta:e})=>{const i=n,s=n.includes("var("),r=[];s&&(n=n.replace(Du,p=>(r.push(p),Ua)));const o=Sn.parse(n);if(o.length>5)return i;const a=Sn.createTransformer(n),c=typeof o[0]!="number"?1:0,l=e.x.scale*t.x,u=e.y.scale*t.y;o[0+c]/=l,o[1+c]/=u;const h=qt(l,u,.5);typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h);let f=a(o);if(s){let p=0;f=f.replace(Ua,()=>{const g=r[p];return p++,g})}return f}};class Ip extends Ec.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i,layoutId:s}=this.props,{projection:r}=t;Vh(Up),r&&(e.group&&e.group.add(r),i&&i.register&&s&&i.register(r),r.root.didUpdate(),r.addEventListener("animationComplete",()=>{this.safeToRemove()}),r.setOptions({...r.options,onExitComplete:()=>this.safeToRemove()})),Fi.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:i,drag:s,isPresent:r}=this.props,o=i.projection;return o&&(o.isPresent=r,s||t.layoutDependency!==e||e===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==r&&(r?o.promote():o.relegate()||Xt.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Iu(n){const[t,e]=Pp(),i=Et.useContext(Rc);return Ec.createElement(Ip,{...n,layoutGroup:i,switchLayoutGroup:Et.useContext(Dc),isPresent:t,safeToRemove:e})}const Up={borderRadius:{...Ci,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ci,borderTopRightRadius:Ci,borderBottomLeftRadius:Ci,borderBottomRightRadius:Ci,boxShadow:Dp},Uu=["TopLeft","TopRight","BottomLeft","BottomRight"],Np=Uu.length,Na=n=>typeof n=="string"?parseFloat(n):n,Fa=n=>typeof n=="number"||yt.test(n);function Fp(n,t,e,i,s,r){s?(n.opacity=qt(0,e.opacity!==void 0?e.opacity:1,Op(i)),n.opacityExit=qt(t.opacity!==void 0?t.opacity:1,0,Vp(i))):r&&(n.opacity=qt(t.opacity!==void 0?t.opacity:1,e.opacity!==void 0?e.opacity:1,i));for(let o=0;o<Np;o++){const a=`border${Uu[o]}Radius`;let c=Oa(t,a),l=Oa(e,a);if(c===void 0&&l===void 0)continue;c||(c=0),l||(l=0),c===0||l===0||Fa(c)===Fa(l)?(n[a]=Math.max(qt(Na(c),Na(l),i),0),(Ke.test(l)||Ke.test(c))&&(n[a]+="%")):n[a]=l}(t.rotate||e.rotate)&&(n.rotate=qt(t.rotate||0,e.rotate||0,i))}function Oa(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const Op=Nu(0,.5,Uo),Vp=Nu(.5,.95,le);function Nu(n,t,e){return i=>i<n?0:i>t?1:e(qi(n,t,i))}function Va(n,t){n.min=t.min,n.max=t.max}function Ie(n,t){Va(n.x,t.x),Va(n.y,t.y)}function Ba(n,t,e,i,s){return n-=t,n=Hs(n,1/e,i),s!==void 0&&(n=Hs(n,1/s,i)),n}function Bp(n,t=0,e=1,i=.5,s,r=n,o=n){if(Ke.test(t)&&(t=parseFloat(t),t=qt(o.min,o.max,t/100)-o.min),typeof t!="number")return;let a=qt(r.min,r.max,i);n===r&&(a-=t),n.min=Ba(n.min,t,e,a,s),n.max=Ba(n.max,t,e,a,s)}function za(n,t,[e,i,s],r,o){Bp(n,t[e],t[i],t[s],t.scale,r,o)}const zp=["x","scaleX","originX"],kp=["y","scaleY","originY"];function ka(n,t,e,i){za(n.x,t,zp,e?e.x:void 0,i?i.x:void 0),za(n.y,t,kp,e?e.y:void 0,i?i.y:void 0)}function Ga(n){return n.translate===0&&n.scale===1}function Fu(n){return Ga(n.x)&&Ga(n.y)}function co(n,t){return n.x.min===t.x.min&&n.x.max===t.x.max&&n.y.min===t.y.min&&n.y.max===t.y.max}function Ha(n){return Re(n.x)/Re(n.y)}class Gp{constructor(){this.members=[]}add(t){zo(this.members,t),t.scheduleRender()}remove(t){if(ko(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(t){const e=this.members.findIndex(s=>t===s);if(e===0)return!1;let i;for(let s=e;s>=0;s--){const r=this.members[s];if(r.isPresent!==!1){i=r;break}}return i?(this.promote(i),!0):!1}promote(t,e){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,e&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:e,resumingFrom:i}=t;e.onExitComplete&&e.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Wa(n,t,e){let i="";const s=n.x.translate/t.x,r=n.y.translate/t.y;if((s||r)&&(i=`translate3d(${s}px, ${r}px, 0) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),e){const{rotate:c,rotateX:l,rotateY:u}=e;c&&(i+=`rotate(${c}deg) `),l&&(i+=`rotateX(${l}deg) `),u&&(i+=`rotateY(${u}deg) `)}const o=n.x.scale*t.x,a=n.y.scale*t.y;return(o!==1||a!==1)&&(i+=`scale(${o}, ${a})`),i||"none"}const Hp=(n,t)=>n.depth-t.depth;class Wp{constructor(){this.children=[],this.isDirty=!1}add(t){zo(this.children,t),this.isDirty=!0}remove(t){ko(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Hp),this.isDirty=!1,this.children.forEach(t)}}function jp(n,t){const e=performance.now(),i=({timestamp:s})=>{const r=s-e;r>=t&&(Mn.read(i),n(r-t))};return Xt.read(i,!0),()=>Mn.read(i)}function qp(n){window.MotionDebug&&window.MotionDebug.record(n)}function Xp(n){return n instanceof SVGElement&&n.tagName!=="svg"}function Yp(n,t,e){const i=Te(n)?n:xi(n);return i.start(Bo("",i,t,e)),i.animation}const ja=["","X","Y","Z"],qa=1e3;let $p=0;const In={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Ou({attachResizeListener:n,defaultParent:t,measureScroll:e,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(o,a={},c=t==null?void 0:t()){this.id=$p++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{In.totalNodes=In.resolvedTargetDeltas=In.recalculatedProjection=0,this.nodes.forEach(Jp),this.nodes.forEach(nm),this.nodes.forEach(im),this.nodes.forEach(Qp),qp(In)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=o,this.latestValues=a,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0,o&&this.root.registerPotentialNode(o,this);for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Wp)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Go),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const c=this.eventHandlers.get(o);c&&c.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}registerPotentialNode(o,a){this.potentialNodes.set(o,a)}mount(o,a=!1){if(this.instance)return;this.isSVG=Xp(o),this.instance=o;const{layoutId:c,layout:l,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),a&&(l||c)&&(this.isLayoutDirty=!0),n){let h;const f=()=>this.root.updateBlockedByResize=!1;n(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=jp(f,250),Fi.hasAnimatedSinceResize&&(Fi.hasAnimatedSinceResize=!1,this.nodes.forEach(Ya))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||l)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const _=this.options.transition||u.getDefaultTransition()||lm,{onLayoutAnimationStart:m,onLayoutAnimationComplete:d}=u.getProps(),b=!this.targetLayout||!co(this.targetLayout,g)||p,v=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,v);const S={...Su(_,"layout"),onPlay:m,onComplete:d};(u.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else!f&&this.animationProgress===0&&Ya(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Mn.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(sm),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xa);return}this.isUpdating&&(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(cm),this.potentialNodes.clear()),this.nodes.forEach(em),this.nodes.forEach(Kp),this.nodes.forEach(Zp),this.clearAllSnapshots(),or.update(),or.preRender(),or.render())}clearAllSnapshots(){this.nodes.forEach(tm),this.sharedNodes.forEach(rm)}scheduleUpdateProjection(){Xt.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Xt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Qt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:i(this.instance),offset:e(this.instance)})}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform,a=this.projectionDelta&&!Fu(this.projectionDelta),c=this.getTransformTemplate(),l=c?c(this.latestValues,""):void 0,u=l!==this.prevTransformTemplateValue;o&&(a||Dn(this.latestValues)||u)&&(s(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return o&&(c=this.removeTransform(c)),um(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return Qt();const a=o.measureViewportBox(),{scroll:c}=this.root;return c&&(gn(a.x,c.offset.x),gn(a.y,c.offset.y)),a}removeElementScroll(o){const a=Qt();Ie(a,o);for(let c=0;c<this.path.length;c++){const l=this.path[c],{scroll:u,options:h}=l;if(l!==this.root&&u&&h.layoutScroll){if(u.isRoot){Ie(a,o);const{scroll:f}=this.root;f&&(gn(a.x,-f.offset.x),gn(a.y,-f.offset.y))}gn(a.x,u.offset.x),gn(a.y,u.offset.y)}}return a}applyTransform(o,a=!1){const c=Qt();Ie(c,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&pi(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Dn(u.latestValues)&&pi(c,u.latestValues)}return Dn(this.latestValues)&&pi(c,this.latestValues),c}removeTransform(o){const a=Qt();Ie(a,o);for(let c=0;c<this.path.length;c++){const l=this.path[c];if(!l.instance||!Dn(l.latestValues))continue;oo(l.latestValues)&&l.updateSnapshot();const u=Qt(),h=l.measurePageBox();Ie(u,h),ka(a,l.latestValues,l.snapshot?l.snapshot.layoutBox:void 0,u)}return Dn(this.latestValues)&&ka(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(o=!1){var a;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==c;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=me.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout?(this.relativeParent=p,this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),zi(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Ie(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Qt(),this.targetWithTransforms=Qt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.relativeParent.resolvedRelativeTargetAt!==me.timestamp&&this.relativeParent.resolveTargetDelta(!0),hp(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ie(this.target,this.layout.layoutBox),Lu(this.target,this.targetDelta)):Ie(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target?(this.relativeParent=p,this.relativeTarget=Qt(),this.relativeTargetOrigin=Qt(),zi(this.relativeTargetOrigin,this.target,p.target),Ie(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}In.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||oo(this.parent.latestValues)||Pu(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),c=!!this.resumingFrom||this!==a;let l=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(l=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===me.timestamp&&(l=!1),l)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Ie(this.layoutCorrected,this.layout.layoutBox),yp(this.layoutCorrected,this.treeScale,this.path,c);const{target:f}=a;if(!f)return;this.projectionDelta||(this.projectionDelta=ki(),this.projectionDeltaWithTransform=ki());const p=this.treeScale.x,g=this.treeScale.y,_=this.projectionTransform;Bi(this.projectionDelta,this.layoutCorrected,f,this.latestValues),this.projectionTransform=Wa(this.projectionDelta,this.treeScale),(this.projectionTransform!==_||this.treeScale.x!==p||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",f)),In.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const a=this.getStack();a&&a.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,a=!1){const c=this.snapshot,l=c?c.latestValues:{},u={...this.latestValues},h=ki();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Qt(),p=c?c.source:void 0,g=this.layout?this.layout.source:void 0,_=p!==g,m=this.getStack(),d=!m||m.members.length<=1,b=!!(_&&!d&&this.options.crossfade===!0&&!this.path.some(am));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const T=S/1e3;$a(h.x,o.x,T),$a(h.y,o.y,T),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zi(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),om(this.relativeTarget,this.relativeTargetOrigin,f,T),v&&co(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=Qt()),Ie(v,this.relativeTarget)),_&&(this.animationValues=u,Fp(u,l,this.latestValues,T,b,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Mn.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Xt.update(()=>{Fi.hasAnimatedSinceResize=!0,this.currentAnimation=Yp(0,qa,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qa),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:c,layout:l,latestValues:u}=o;if(!(!a||!c||!l)){if(this!==o&&this.layout&&l&&Vu(this.options.animationType,this.layout.layoutBox,l.layoutBox)){c=this.target||Qt();const h=Re(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+h;const f=Re(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+f}Ie(a,c),pi(a,u),Bi(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Gp),this.sharedNodes.get(o).add(a);const l=a.options.initialPromotionConfig;a.promote({transition:l?l.transition:void 0,preserveFollowOpacity:l&&l.shouldPreserveFollowOpacity?l.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:c}={}){const l=this.getStack();l&&l.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(a=!0),!a)return;const l={};for(let u=0;u<ja.length;u++){const h="rotate"+ja[u];c[h]&&(l[h]=c[h],o.setStaticValue(h,0))}o.render();for(const u in l)o.setStaticValue(u,l[u]);o.scheduleRender()}getProjectionStyles(o={}){var a,c;const l={};if(!this.instance||this.isSVG)return l;if(this.isVisible)l.visibility="";else return{visibility:"hidden"};const u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,l.opacity="",l.pointerEvents=Us(o.pointerEvents)||"",l.transform=u?u(this.latestValues,""):"none",l;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const _={};return this.options.layoutId&&(_.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,_.pointerEvents=Us(o.pointerEvents)||""),this.hasProjected&&!Dn(this.latestValues)&&(_.transform=u?u({},""):"none",this.hasProjected=!1),_}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),l.transform=Wa(this.projectionDeltaWithTransform,this.treeScale,f),u&&(l.transform=u(f,l.transform));const{x:p,y:g}=this.projectionDelta;l.transformOrigin=`${p.origin*100}% ${g.origin*100}% 0`,h.animationValues?l.opacity=h===this?(c=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:l.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const _ in Fs){if(f[_]===void 0)continue;const{correct:m,applyTo:d}=Fs[_],b=l.transform==="none"?f[_]:m(f[_],h);if(d){const v=d.length;for(let S=0;S<v;S++)l[d[S]]=b}else l[_]=b}return this.options.layoutId&&(l.pointerEvents=h===this?Us(o.pointerEvents)||"":"none"),l}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Xa),this.root.sharedNodes.clear()}}}function Kp(n){n.updateLayout()}function Zp(n){var t;const e=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=n.layout,{animationType:r}=n.options,o=e.source!==n.layout.source;r==="size"?Xe(h=>{const f=o?e.measuredBox[h]:e.layoutBox[h],p=Re(f);f.min=i[h].min,f.max=f.min+p}):Vu(r,e.layoutBox,i)&&Xe(h=>{const f=o?e.measuredBox[h]:e.layoutBox[h],p=Re(i[h]);f.max=f.min+p,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[h].max=n.relativeTarget[h].min+p)});const a=ki();Bi(a,i,e.layoutBox);const c=ki();o?Bi(c,n.applyTransform(s,!0),e.measuredBox):Bi(c,i,e.layoutBox);const l=!Fu(a);let u=!1;if(!n.resumeFrom){const h=n.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const g=Qt();zi(g,e.layoutBox,f.layoutBox);const _=Qt();zi(_,i,p.layoutBox),co(g,_)||(u=!0),h.options.layoutRoot&&(n.relativeTarget=_,n.relativeTargetOrigin=g,n.relativeParent=h)}}}n.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:c,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(n.isLead()){const{onExitComplete:i}=n.options;i&&i()}n.options.transition=void 0}function Jp(n){In.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function Qp(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function tm(n){n.clearSnapshot()}function Xa(n){n.clearMeasurements()}function em(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function Ya(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0}function nm(n){n.resolveTargetDelta()}function im(n){n.calcProjection()}function sm(n){n.resetRotation()}function rm(n){n.removeLeadSnapshot()}function $a(n,t,e){n.translate=qt(t.translate,0,e),n.scale=qt(t.scale,1,e),n.origin=t.origin,n.originPoint=t.originPoint}function Ka(n,t,e,i){n.min=qt(t.min,e.min,i),n.max=qt(t.max,e.max,i)}function om(n,t,e,i){Ka(n.x,t.x,e.x,i),Ka(n.y,t.y,e.y,i)}function am(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const lm={duration:.45,ease:[.4,0,.1,1]};function cm(n,t){let e=n.root;for(let r=n.path.length-1;r>=0;r--)if(n.path[r].instance){e=n.path[r];break}const s=(e&&e!==n.root?e.instance:document).querySelector(`[data-projection-id="${t}"]`);s&&n.mount(s,!0)}function Za(n){n.min=Math.round(n.min),n.max=Math.round(n.max)}function um(n){Za(n.x),Za(n.y)}function Vu(n,t,e){return n==="position"||n==="preserve-aspect"&&!so(Ha(t),Ha(e),.2)}const hm=Ou({attachResizeListener:(n,t)=>on(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),_r={current:void 0},Bu=Ou({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!_r.current){const n=new hm(0,{});n.mount(window),n.setOptions({layoutScroll:!0}),_r.current=n}return _r.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),fm={pan:{Feature:Cp},drag:{Feature:Ap,ProjectionNode:Bu,MeasureLayout:Iu}},dm=new Set(["width","height","top","left","right","bottom","x","y"]),zu=n=>dm.has(n),pm=n=>Object.keys(n).some(zu),Ja=n=>n===Yn||n===yt,Qa=(n,t)=>parseFloat(n.split(", ")[t]),tl=(n,t)=>(e,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/);if(s)return Qa(s[1],t);{const r=i.match(/^matrix\((.+)\)$/);return r?Qa(r[1],n):0}},mm=new Set(["x","y","z"]),gm=Ys.filter(n=>!mm.has(n));function _m(n){const t=[];return gm.forEach(e=>{const i=n.getValue(e);i!==void 0&&(t.push([e,i.get()]),i.set(e.startsWith("scale")?1:0))}),t.length&&n.render(),t}const el={width:({x:n},{paddingLeft:t="0",paddingRight:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),height:({y:n},{paddingTop:t="0",paddingBottom:e="0"})=>n.max-n.min-parseFloat(t)-parseFloat(e),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:tl(4,13),y:tl(5,14)},vm=(n,t,e)=>{const i=t.measureViewportBox(),s=t.current,r=getComputedStyle(s),{display:o}=r,a={};o==="none"&&t.setStaticValue("display",n.display||"block"),e.forEach(l=>{a[l]=el[l](i,r)}),t.render();const c=t.measureViewportBox();return e.forEach(l=>{const u=t.getValue(l);u&&u.jump(a[l]),n[l]=el[l](c,r)}),n},xm=(n,t,e={},i={})=>{t={...t},i={...i};const s=Object.keys(t).filter(zu);let r=[],o=!1;const a=[];if(s.forEach(c=>{const l=n.getValue(c);if(!n.hasValue(c))return;let u=e[c],h=Ai(u);const f=t[c];let p;if(Vs(f)){const g=f.length,_=f[0]===null?1:0;u=f[_],h=Ai(u);for(let m=_;m<g;m++)p?Io(Ai(f[m])===p):p=Ai(f[m])}else p=Ai(f);if(h!==p)if(Ja(h)&&Ja(p)){const g=l.get();typeof g=="string"&&l.set(parseFloat(g)),typeof f=="string"?t[c]=parseFloat(f):Array.isArray(f)&&p===yt&&(t[c]=f.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(u===0||f===0)?u===0?l.set(p.transform(u)):t[c]=h.transform(f):(o||(r=_m(n),o=!0),a.push(c),i[c]=i[c]!==void 0?i[c]:t[c],l.jump(f))}),a.length){const c=a.indexOf("height")>=0?window.pageYOffset:null,l=vm(t,n,a);return r.length&&r.forEach(([u,h])=>{n.getValue(u).set(h)}),n.render(),js&&c!==null&&window.scrollTo({top:c}),{target:l,transitionEnd:i}}else return{target:t,transitionEnd:i}};function ym(n,t,e,i){return pm(t)?xm(n,t,e,i):{target:t,transitionEnd:i}}const Mm=(n,t,e,i)=>{const s=Rp(n,t,i);return t=s.target,i=s.transitionEnd,ym(n,t,e,i)},uo={current:null},ku={current:!1};function Sm(){if(ku.current=!0,!!js)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>uo.current=n.matches;n.addListener(t),t()}else uo.current=!1}function bm(n,t,e){const{willChange:i}=t;for(const s in t){const r=t[s],o=e[s];if(Te(r))n.addValue(s,r),Gs(i)&&i.add(s);else if(Te(o))n.addValue(s,xi(r,{owner:n})),Gs(i)&&i.remove(s);else if(o!==r)if(n.hasValue(s)){const a=n.getValue(s);!a.hasAnimated&&a.set(r)}else{const a=n.getStaticValue(s);n.addValue(s,xi(a!==void 0?a:r,{owner:n}))}}for(const s in e)t[s]===void 0&&n.removeValue(s);return t}const nl=new WeakMap,Gu=Object.keys(Hi),wm=Gu.length,il=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Tm=wo.length;class Em{constructor({parent:t,props:e,presenceContext:i,reducedMotionConfig:s,visualState:r},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Xt.render(this.render,!1,!0);const{latestValues:a,renderState:c}=r;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=c,this.parent=t,this.props=e,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=o,this.isControllingVariants=Xs(e),this.isVariantNode=Pc(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(e,{});for(const h in u){const f=u[h];a[h]!==void 0&&Te(f)&&(f.set(a[h],!1),Gs(l)&&l.add(h))}}scrapeMotionValuesFromProps(t,e){return{}}mount(t){this.current=t,nl.set(t,this),this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,i)=>this.bindToMotionValue(i,e)),ku.current||Sm(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:uo.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){nl.delete(this.current),this.projection&&this.projection.unmount(),Mn.update(this.notifyUpdate),Mn.render(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,e){const i=Xn.has(t),s=e.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&Xt.update(this.notifyUpdate,!1,!0),i&&this.projection&&(this.projection.isTransformDirty=!0)}),r=e.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{s(),r()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...e},i,s,r,o){let a,c;for(let l=0;l<wm;l++){const u=Gu[l],{isEnabled:h,Feature:f,ProjectionNode:p,MeasureLayout:g}=Hi[u];p&&(a=p),h(e)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),g&&(c=g))}if(!this.projection&&a){this.projection=new a(r,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:h,dragConstraints:f,layoutScroll:p,layoutRoot:g}=e;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!h||f&&fi(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:o,layoutScroll:p,layoutRoot:g})}return c}updateFeatures(){for(const t in this.features){const e=this.features[t];e.isMounted?e.update(this.props,this.prevProps):(e.mount(),e.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Qt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}makeTargetAnimatable(t,e=!0){return this.makeTargetAnimatableFromInstance(t,this.props,e)}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let i=0;i<il.length;i++){const s=il[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const r=t["on"+s];r&&(this.propEventSubscriptions[s]=this.on(s,r))}this.prevMotionValues=bm(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const e={};for(let i=0;i<Tm;i++){const s=wo[i],r=this.props[s];(Gi(r)||r===!1)&&(e[s]=r)}return e}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){e!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,e)),this.values.set(t,e),this.latestValues[t]=e.get()}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&e!==void 0&&(i=xi(e,{owner:this}),this.addValue(t,i)),i}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:i}=this.props,s=typeof i=="string"||typeof i=="object"?(e=Do(this.props,i))===null||e===void 0?void 0:e[t]:void 0;if(i&&s!==void 0)return s;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!Te(r)?r:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,e){return this.events[t]||(this.events[t]=new Go),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class Hu extends Em{sortInstanceNodePosition(t,e){return t.compareDocumentPosition(e)&2?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:i}){delete e[t],delete i[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:e,...i},{transformValues:s},r){let o=Xd(i,t||{},this);if(s&&(e&&(e=s(e)),i&&(i=s(i)),o&&(o=s(o))),r){jd(this,i,o);const a=Mm(this,i,o,e);e=a.transitionEnd,i=a.target}return{transition:t,transitionEnd:e,...i}}}function Am(n){return window.getComputedStyle(n)}class Cm extends Hu{readValueFromInstance(t,e){if(Xn.has(e)){const i=Oo(e);return i&&i.default||0}else{const i=Am(t),s=(Nc(e)?i.getPropertyValue(e):i[e])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:e}){return Ru(t,e)}build(t,e,i,s){Eo(t,e,i,s.transformTemplate)}scrapeMotionValuesFromProps(t,e){return Ro(t,e)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Te(t)&&(this.childSubscription=t.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(t,e,i,s){zc(t,e,i,s)}}class Pm extends Hu{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(Xn.has(e)){const i=Oo(e);return i&&i.default||0}return e=kc.has(e)?e:Lo(e),t.getAttribute(e)}measureInstanceViewportBox(){return Qt()}scrapeMotionValuesFromProps(t,e){return Hc(t,e)}build(t,e,i,s){Co(t,e,i,this.isSVGTag,s.transformTemplate)}renderInstance(t,e,i,s){Gc(t,e,i,s)}mount(t){this.isSVGTag=Po(t.tagName),super.mount(t)}}const Lm=(n,t)=>To(n)?new Pm(t,{enableHardwareAcceleration:!1}):new Cm(t,{enableHardwareAcceleration:!0}),Rm={layout:{ProjectionNode:Bu,MeasureLayout:Iu}},Dm={...ap,...Cf,...fm,...Rm},Wu=Fh((n,t)=>hf(n,t,Dm,Lm));function ju({children:n,id:t}){return jt(wh,{children:[Tt(Wu.h1,{initial:{filter:"blur(25px)",opacity:0,y:-70},whileInView:{filter:"blur(0px)",opacity:1,y:0},transition:{type:"spring",stiffness:100,damping:24,mass:2},viewport:{once:!0},id:t,className:"text-white font-bold sm:text-3xl text-2xl scroll-mt-20",children:n}),Tt("div",{className:"border-b border-b-white/50 my-7"})]})}function Im(){return jt("footer",{className:"pb-16",children:[Tt(ju,{id:"contact",children:"Contact"}),jt("div",{className:"flex-col-center",children:[Tt("h1",{className:"text-2xl max-sm:text-xl mb-4 font-bold",children:"Links"}),jt("a",{href:"https://github.com/sharkri",target:"_blank",rel:"noreferrer",children:[Tt("i",{className:"fa-brands fa-github mr-2","aria-label":"github-icon"}),"Github"]})]})]})}function Um(){const[n,t]=Et.useState(!0);return Et.useEffect(()=>{function e(){t(window.pageYOffset<=25)}return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),Tt("header",{className:`w-full h-[56px] fixed top-0 z-10 px-8 py-4 ${n?"translate-y-2":"bg-black/40"} text-gray-300 font-bold transition-[color,transform] duration-200 flex justify-end`,children:jt("nav",{className:"flex gap-4 child-hover:text-gray-200 child-hover:text-shadow-lg child:transition-colors child:duration-300",children:[Tt("a",{href:"#about",children:"About"}),Tt("a",{href:"#projects",children:"Projects"}),Tt("a",{href:"#contact",children:"Contact"})]})})}function Nm(){return Tt("div",{className:"flex-col-center max-w-[960px] mx-auto w-full",children:jt("div",{className:"text-[min(10vw,128px)] w-full max-w-[70vw] child:leading-[1.05] uppercase",children:[Tt("h1",{className:"overflow-hidden",children:Tt("p",{className:"animate-text-slide-up",children:"Sharkri"})}),jt("h1",{className:"font-bold pl-[14%]",children:[Tt("div",{className:"overflow-hidden",children:Tt("p",{className:"animate-text-slide-up",children:"web"})}),Tt("div",{className:"overflow-hidden pl-[6%]",children:Tt("p",{className:"animate-text-slide-up",children:"developer"})})]})]})})}function Fm({project:n}){return jt("div",{className:"flex flex-col gap-8 border-b border-b-white/50 last:border-b-0 last:pb-0 mb-7 pb-8",children:[Tt("h1",{className:"text-xl font-bold",children:n.title}),jt("div",{className:"flex max-lg:flex-col gap-6",children:[Tt("div",{className:"flex-[50%] overflow-hidden",children:Tt("img",{src:n.image,className:"brightness-[0.8] hover:brightness-90 hover:scale-105 transition duration-300",alt:"",loading:"lazy"})}),jt("div",{className:"flex-[50%] flex flex-col gap-8",children:[jt("div",{children:[Tt("h1",{className:"text-lg font-bold",children:"Summary"}),Tt("p",{className:"text-white/75",children:n.description})]}),jt("div",{children:[Tt("h1",{className:"text-lg font-bold",children:"Technologies"}),Tt("span",{className:"text-white/75",children:n.technologies.join(", ")})]}),jt("div",{className:"flex gap-6 font-bold",children:[jt("a",{href:n.livePreview,target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 group",children:[jt("span",{children:["LIVE PREVIEW",Tt("div",{className:"h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"})]}),Tt("i",{className:"fa-solid fa-arrow-up rotate-45","aria-label":"open link icon"})]}),jt("a",{href:n.githubRepo,target:"_blank",rel:"noreferrer",className:"flex items-center gap-3 group",children:[jt("span",{children:["VIEW CODE",Tt("div",{className:"h-0.5 bg-white/75 origin-left translate-y-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"})]}),Tt("i",{className:"fa-solid fa-arrow-up rotate-45","aria-label":"open link icon"})]})]})]})]})]})}const Om="/portfolio/assets/static/where-is-waldo.817f727c.webp",Vm="/portfolio/assets/static/todo-list.c5893cde.webp",Bm="/portfolio/assets/static/medium-clone.01bf5865.webp",zm=[{title:"Medium Clone",description:"A platform for writers to share their articles (markdown supported) and read articles from other writers",githubRepo:"https://github.com/Sharkri/medium-clone",livePreview:"https://sharkri.github.io/medium-clone",image:Bm,technologies:["ReactJS","Typescript","Firebase","TailwindCSS"]},{title:"Todo List",description:"A responsive Todo List application that uses Firebase to store todos and projects. You can either create an account to use, or continue as a guest.",githubRepo:"https://github.com/Sharkri/todo-list",livePreview:"https://todo-list-4aa13.web.app/",image:Vm,technologies:["JavaScript","Firebase","Webpack","date-fns"]},{title:"Where's Waldo",description:`An interactive version of "Where's Waldo?", a game where players try to find several characters hidden inside a picture. In this version, players are timed. Upon completion, the user may enter their name into a leaderboard stored in firebase.`,githubRepo:"https://github.com/Sharkri/where-is-waldo",livePreview:"https://where-is-waldo-3e672.web.app/",image:Om,technologies:["ReactJS","React Router Dom","Firebase","React Testing Library"]}];function Ho({children:n,headingText:t,headingId:e,className:i}){return jt("section",{children:[Tt(ju,{id:e,children:t}),Tt(Wu.div,{initial:{filter:"blur(2px)",opacity:0},whileInView:{filter:"blur(0px)",opacity:1},transition:{type:"spring",stiffness:100,damping:24,mass:2},viewport:{once:!0},className:i,children:n})]})}Ho.defaultProps={className:""};function km(){return Tt(Ho,{headingText:"Projects",headingId:"projects",children:zm.map(n=>Tt(Fm,{project:n},n.title))})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="151",Gm=0,sl=1,Hm=2,qu=1,Wm=2,Ui=3,bn=0,be=1,rn=2,yn=0,gi=1,rl=2,ol=3,al=4,jm=5,hi=100,qm=101,Xm=102,ll=103,cl=104,Ym=200,$m=201,Km=202,Zm=203,Xu=204,Yu=205,Jm=206,Qm=207,tg=208,eg=209,ng=210,ig=0,sg=1,rg=2,ho=3,og=4,ag=5,lg=6,cg=7,$u=0,ug=1,hg=2,cn=0,fg=1,dg=2,pg=3,mg=4,gg=5,Ku=300,yi=301,Mi=302,fo=303,po=304,Js=306,mo=1e3,He=1001,go=1002,ye=1003,ul=1004,vr=1005,Ne=1006,_g=1007,Xi=1008,Hn=1009,vg=1010,xg=1011,Zu=1012,yg=1013,Vn=1014,Bn=1015,Yi=1016,Mg=1017,Sg=1018,_i=1020,bg=1021,We=1023,wg=1024,Tg=1025,zn=1026,Si=1027,Eg=1028,Ag=1029,Cg=1030,Pg=1031,Lg=1033,xr=33776,yr=33777,Mr=33778,Sr=33779,hl=35840,fl=35841,dl=35842,pl=35843,Rg=36196,ml=37492,gl=37496,_l=37808,vl=37809,xl=37810,yl=37811,Ml=37812,Sl=37813,bl=37814,wl=37815,Tl=37816,El=37817,Al=37818,Cl=37819,Pl=37820,Ll=37821,br=36492,Dg=36283,Rl=36284,Dl=36285,Il=36286,Wn=3e3,Ht=3001,Ig=3200,Ug=3201,Ng=0,Fg=1,Ye="srgb",$i="srgb-linear",Ju="display-p3",wr=7680,Og=519,Ul=35044,Nl="300 es",_o=1035;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tr=Math.PI/180,vo=180/Math.PI;function es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[i&255]+de[i>>8&255]+de[i>>16&255]+de[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function Vg(n,t){return(n%t+t)%t}function Er(n,t,e){return(1-e)*n+e*t}function Fl(n){return(n&n-1)===0&&n!==0}function Bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function us(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],b=s[1],v=s[4],S=s[7],T=s[2],P=s[5],L=s[8];return r[0]=o*_+a*b+c*T,r[3]=o*m+a*v+c*P,r[6]=o*d+a*S+c*L,r[1]=l*_+u*b+h*T,r[4]=l*m+u*v+h*P,r[7]=l*d+u*S+h*L,r[2]=f*_+p*b+g*T,r[5]=f*m+p*v+g*P,r[8]=f*d+p*S+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*r,p=l*r-o*c,g=e*h+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*l-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*c-l*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ar.makeScale(t,e)),this}rotate(t){return this.premultiply(Ar.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ar.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new It;function Qu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ki(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const zg=new It().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),kg=new It().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Gg(n){return n.convertSRGBToLinear().applyMatrix3(kg)}function Hg(n){return n.applyMatrix3(zg).convertLinearToSRGB()}const Wg={[$i]:n=>n,[Ye]:n=>n.convertSRGBToLinear(),[Ju]:Gg},jg={[$i]:n=>n,[Ye]:n=>n.convertLinearToSRGB(),[Ju]:Hg},Ce={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return $i},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Wg[t],s=jg[e];if(i===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)}};let $n;class th{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$n===void 0&&($n=Ki("canvas")),$n.width=t.width,$n.height=t.height;const i=$n.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=$n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ki("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class eh{constructor(t=null){this.isSource=!0,this.uuid=es(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Pr(s[o].image)):r.push(Pr(s[o]))}else r=Pr(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Pr(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?th.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qg=0;class we extends wi{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,i=He,s=He,r=Ne,o=Xi,a=We,c=Hn,l=we.DEFAULT_ANISOTROPY,u=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=es(),this.name="",this.source=new eh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ku)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=Ku;we.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,i=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(p+1)/2,T=(d+1)/2,P=(u+f)/4,L=(h+_)/4,C=(g+m)/4;return v>S&&v>T?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=P/i,r=L/i):S>T?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=C/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=L/r,s=C/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((l+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jn extends wi{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new we(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ne,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new eh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nh extends we{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xg extends we{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ye,this.minFilter=ye,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ns{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==p||u!==g){let m=1-a;const d=c*f+l*p+u*g+h*_,b=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),P=Math.atan2(T,d*b);m=Math.sin(m*P)/T,a=Math.sin(a*P)/T}const S=a*b;if(c=c*m+f*S,l=l*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-a){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*p-l*f,t[e+1]=c*g+u*f+l*h-a*p,t[e+2]=l*g+u*p+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),h=a(r/2),f=c(i/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h+f*p*g;break;case"YZX":this._x=f*u*h+l*p*g,this._y=l*p*h+f*u*g,this._z=l*u*g-f*p*h,this._w=l*u*h-f*p*g;break;case"XZY":this._x=f*u*h-l*p*g,this._y=l*p*h-f*u*g,this._z=l*u*g+f*p*h,this._w=l*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*s-a*i,u=c*i+a*e-r*s,h=c*s+r*i-o*e,f=-r*e-o*i-a*s;return this.x=l*c+f*-r+u*-a-h*-o,this.y=u*c+f*-o+h*-r-l*-a,this.z=h*c+f*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Lr.copy(this).projectOnVector(t),this.sub(Lr)}reflect(t){return this.sub(Lr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lr=new N,Ol=new ns;class is{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Kn.copy(t.boundingBox),Kn.applyMatrix4(t.matrixWorld),this.union(Kn);else{const s=t.geometry;if(s!==void 0)if(e&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let o=0,a=r.count;o<a;o++)Qe.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Qe)}else s.boundingBox===null&&s.computeBoundingBox(),Kn.copy(s.boundingBox),Kn.applyMatrix4(t.matrixWorld),this.union(Kn)}const i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pi),hs.subVectors(this.max,Pi),Zn.subVectors(t.a,Pi),Jn.subVectors(t.b,Pi),Qn.subVectors(t.c,Pi),hn.subVectors(Jn,Zn),fn.subVectors(Qn,Jn),Pn.subVectors(Zn,Qn);let e=[0,-hn.z,hn.y,0,-fn.z,fn.y,0,-Pn.z,Pn.y,hn.z,0,-hn.x,fn.z,0,-fn.x,Pn.z,0,-Pn.x,-hn.y,hn.x,0,-fn.y,fn.x,0,-Pn.y,Pn.x,0];return!Rr(e,Zn,Jn,Qn,hs)||(e=[1,0,0,0,1,0,0,0,1],!Rr(e,Zn,Jn,Qn,hs))?!1:(fs.crossVectors(hn,fn),e=[fs.x,fs.y,fs.z],Rr(e,Zn,Jn,Qn,hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Je=[new N,new N,new N,new N,new N,new N,new N,new N],Qe=new N,Kn=new is,Zn=new N,Jn=new N,Qn=new N,hn=new N,fn=new N,Pn=new N,Pi=new N,hs=new N,fs=new N,Ln=new N;function Rr(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ln.fromArray(n,r);const a=s.x*Math.abs(Ln.x)+s.y*Math.abs(Ln.y)+s.z*Math.abs(Ln.z),c=t.dot(Ln),l=e.dot(Ln),u=i.dot(Ln);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Yg=new is,Li=new N,Dr=new N;class Qs{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Li.subVectors(t,this.center);const e=Li.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Li,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Li.copy(t.center).add(Dr)),this.expandByPoint(Li.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new N,Ir=new N,ds=new N,dn=new N,Ur=new N,ps=new N,Nr=new N;class ih{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ir.copy(t).add(e).multiplyScalar(.5),ds.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(Ir);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ds),a=dn.dot(this.direction),c=-dn.dot(ds),l=dn.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ir).addScaledVector(ds,f),p}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const i=tn.dot(this.direction),s=tn.dot(tn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,i,s,r){Ur.subVectors(e,t),ps.subVectors(i,t),Nr.crossVectors(Ur,ps);let o=this.direction.dot(Nr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,t);const c=a*this.direction.dot(ps.crossVectors(dn,ps));if(c<0)return null;const l=a*this.direction.dot(Ur.cross(dn));if(l<0||c+l>o)return null;const u=-a*dn.dot(Nr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,s,r,o,a,c,l,u,h,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ti.setFromMatrixColumn(t,0).length(),r=1/ti.setFromMatrixColumn(t,1).length(),o=1/ti.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*u,p=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*u,p=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=o*c,p=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($g,t,Kg)}lookAt(t,e,i){const s=this.elements;return Pe.subVectors(t,e),Pe.lengthSq()===0&&(Pe.z=1),Pe.normalize(),pn.crossVectors(i,Pe),pn.lengthSq()===0&&(Math.abs(i.z)===1?Pe.x+=1e-4:Pe.z+=1e-4,Pe.normalize(),pn.crossVectors(i,Pe)),pn.normalize(),ms.crossVectors(Pe,pn),s[0]=pn.x,s[4]=ms.x,s[8]=Pe.x,s[1]=pn.y,s[5]=ms.y,s[9]=Pe.y,s[2]=pn.z,s[6]=ms.z,s[10]=Pe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],b=i[3],v=i[7],S=i[11],T=i[15],P=s[0],L=s[4],C=s[8],y=s[12],E=s[1],W=s[5],X=s[9],I=s[13],D=s[2],F=s[6],Z=s[10],Y=s[14],j=s[3],$=s[7],tt=s[11],st=s[15];return r[0]=o*P+a*E+c*D+l*j,r[4]=o*L+a*W+c*F+l*$,r[8]=o*C+a*X+c*Z+l*tt,r[12]=o*y+a*I+c*Y+l*st,r[1]=u*P+h*E+f*D+p*j,r[5]=u*L+h*W+f*F+p*$,r[9]=u*C+h*X+f*Z+p*tt,r[13]=u*y+h*I+f*Y+p*st,r[2]=g*P+_*E+m*D+d*j,r[6]=g*L+_*W+m*F+d*$,r[10]=g*C+_*X+m*Z+d*tt,r[14]=g*y+_*I+m*Y+d*st,r[3]=b*P+v*E+S*D+T*j,r[7]=b*L+v*W+S*F+T*$,r[11]=b*C+v*X+S*Z+T*tt,r[15]=b*y+v*I+S*Y+T*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*c*h-s*l*h-r*a*f+i*l*f+s*a*p-i*c*p)+_*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*u-r*c*u)+m*(+e*l*h-e*a*p-r*o*h+i*o*p+r*a*u-i*l*u)+d*(-s*a*u-e*c*h+e*a*f+s*o*h-i*o*f+i*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=h*m*l-_*f*l+_*c*p-a*m*p-h*c*d+a*f*d,v=g*f*l-u*m*l-g*c*p+o*m*p+u*c*d-o*f*d,S=u*_*l-g*h*l+g*a*p-o*_*p-u*a*d+o*h*d,T=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,P=e*b+i*v+s*S+r*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return t[0]=b*L,t[1]=(_*f*r-h*m*r-_*s*p+i*m*p+h*s*d-i*f*d)*L,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*d+i*c*d)*L,t[3]=(h*c*r-a*f*r-h*s*l+i*f*l+a*s*p-i*c*p)*L,t[4]=v*L,t[5]=(u*m*r-g*f*r+g*s*p-e*m*p-u*s*d+e*f*d)*L,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*d-e*c*d)*L,t[7]=(o*f*r-u*c*r+u*s*l-e*f*l-o*s*p+e*c*p)*L,t[8]=S*L,t[9]=(g*h*r-u*_*r-g*i*p+e*_*p+u*i*d-e*h*d)*L,t[10]=(o*_*r-g*a*r+g*i*l-e*_*l-o*i*d+e*a*d)*L,t[11]=(u*a*r-o*h*r-u*i*l+e*h*l+o*i*p-e*a*p)*L,t[12]=T*L,t[13]=(u*_*s-g*h*s+g*i*f-e*_*f-u*i*m+e*h*m)*L,t[14]=(g*a*s-o*_*s-g*i*c+e*_*c+o*i*m-e*a*m)*L,t[15]=(o*h*s-u*a*s+u*i*c-e*h*c-o*i*f+e*a*f)*L,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,f=r*l,p=r*u,g=r*h,_=o*u,m=o*h,d=a*h,b=c*l,v=c*u,S=c*h,T=i.x,P=i.y,L=i.z;return s[0]=(1-(_+d))*T,s[1]=(p+S)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(p-S)*P,s[5]=(1-(f+d))*P,s[6]=(m+b)*P,s[7]=0,s[8]=(g+v)*L,s[9]=(m-b)*L,s[10]=(1-(f+_))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ti.set(s[0],s[1],s[2]).length();const o=ti.set(s[4],s[5],s[6]).length(),a=ti.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);const l=1/r,u=1/o,h=1/a;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=u,Be.elements[5]*=u,Be.elements[6]*=u,Be.elements[8]*=h,Be.elements[9]*=h,Be.elements[10]*=h,e.setFromRotationMatrix(Be),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(i-s),u=(e+t)/(e-t),h=(i+s)/(i-s),f=-(o+r)/(o-r),p=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,r,o){const a=this.elements,c=1/(e-t),l=1/(i-s),u=1/(o-r),h=(e+t)*c,f=(i+s)*l,p=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ti=new N,Be=new te,$g=new N(0,0,0),Kg=new N(1,1,1),pn=new N,ms=new N,Pe=new N,Vl=new te,Bl=new ns;class tr{constructor(t=0,e=0,i=0,s=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class sh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zg=0;const zl=new N,ei=new ns,en=new te,gs=new N,Ri=new N,Jg=new N,Qg=new ns,kl=new N(1,0,0),Gl=new N(0,1,0),Hl=new N(0,0,1),t_={type:"added"},Wl={type:"removed"};class he extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new N,e=new tr,i=new ns,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new It}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new sh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.multiply(ei),this}rotateOnWorldAxis(t,e){return ei.setFromAxisAngle(t,e),this.quaternion.premultiply(ei),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Gl,t)}rotateZ(t){return this.rotateOnAxis(Hl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Gl,t)}translateZ(t){return this.translateOnAxis(Hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gs.copy(t):gs.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ri,gs,this.up):en.lookAt(gs,Ri,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),ei.setFromRotationMatrix(en),this.quaternion.premultiply(ei.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(t_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Wl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,t,Jg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,Qg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}he.DEFAULT_UP=new N(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new N,nn=new N,Fr=new N,sn=new N,ni=new N,ii=new N,jl=new N,Or=new N,Vr=new N,Br=new N;let _s=!1;class Ge{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ze.subVectors(t,e),s.cross(ze);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ze.subVectors(s,e),nn.subVectors(i,e),Fr.subVectors(t,e);const o=ze.dot(ze),a=ze.dot(nn),c=ze.dot(Fr),l=nn.dot(nn),u=nn.dot(Fr),h=o*l-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,p=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,sn),sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,i,s,r,o,a,c){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,sn),c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(a,sn.z),c}static isFrontFacing(t,e,i,s){return ze.subVectors(i,e),nn.subVectors(t,e),ze.cross(nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),ze.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Ge.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;ni.subVectors(s,i),ii.subVectors(r,i),Or.subVectors(t,i);const c=ni.dot(Or),l=ii.dot(Or);if(c<=0&&l<=0)return e.copy(i);Vr.subVectors(t,s);const u=ni.dot(Vr),h=ii.dot(Vr);if(u>=0&&h<=u)return e.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(i).addScaledVector(ni,o);Br.subVectors(t,r);const p=ni.dot(Br),g=ii.dot(Br);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ii,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return jl.subVectors(r,s),a=(h-u)/(h-u+(p-g)),e.copy(s).addScaledVector(jl,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(i).addScaledVector(ni,o).addScaledVector(ii,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let e_=0;class ss extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=es(),this.name="",this.type="Material",this.blending=gi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Xu,this.blendDst=Yu,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(i.blending=this.blending),this.side!==bn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const rh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ke={h:0,s:0,l:0},vs={h:0,s:0,l:0};function zr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Ce.workingColorSpace){if(t=Vg(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=zr(o,r,t+1/3),this.g=zr(o,r,t),this.b=zr(o,r,t-1/3)}return Ce.toWorkingColorSpace(this,s),this}setStyle(t,e=Ye){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ce.toWorkingColorSpace(this,e),i(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ce.toWorkingColorSpace(this,e),i(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return i(r[4]),this.setHSL(c,l,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){const i=rh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return Ce.fromWorkingColorSpace(pe.copy(this),t),Se(pe.r*255,0,255)<<16^Se(pe.g*255,0,255)<<8^Se(pe.b*255,0,255)<<0}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ce.workingColorSpace){Ce.fromWorkingColorSpace(pe.copy(this),e);const i=pe.r,s=pe.g,r=pe.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ce.workingColorSpace){return Ce.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=Ye){Ce.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,i=pe.g,s=pe.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${e*255|0},${i*255|0},${s*255|0})`}offsetHSL(t,e,i){return this.getHSL(ke),ke.h+=t,ke.s+=e,ke.l+=i,this.setHSL(ke.h,ke.s,ke.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ke),t.getHSL(vs);const i=Er(ke.h,vs.h,e),s=Er(ke.s,vs.s,e),r=Er(ke.l,vs.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new zt;zt.NAMES=rh;class oh extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Jt=new N,xs=new kt;class Oe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ul,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix3(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix4(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.applyNormalMatrix(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Jt.fromBufferAttribute(this,e),Jt.transformDirection(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ah extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class lh extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class kn extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let n_=0;const Ue=new te,kr=new he,si=new N,Le=new is,Di=new is,ae=new N;class Ze extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qu(t)?lh:ah)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new It().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,i){return Ue.makeTranslation(t,e,i),this.applyMatrix4(Ue),this}scale(t,e,i){return Ue.makeScale(t,e,i),this.applyMatrix4(Ue),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(si).negate(),this.translate(si.x,si.y,si.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new kn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Le.setFromBufferAttribute(r),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Di.setFromBufferAttribute(a),this.morphTargetsRelative?(ae.addVectors(Le.min,Di.min),Le.expandByPoint(ae),ae.addVectors(Le.max,Di.max),Le.expandByPoint(ae)):(Le.expandByPoint(Di.min),Le.expandByPoint(Di.max))}Le.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ae.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ae));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ae.fromBufferAttribute(a,l),c&&(si.fromBufferAttribute(t,l),ae.add(si)),s=Math.max(s,i.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<a;E++)l[E]=new N,u[E]=new N;const h=new N,f=new N,p=new N,g=new kt,_=new kt,m=new kt,d=new N,b=new N;function v(E,W,X){h.fromArray(s,E*3),f.fromArray(s,W*3),p.fromArray(s,X*3),g.fromArray(o,E*2),_.fromArray(o,W*2),m.fromArray(o,X*2),f.sub(h),p.sub(h),_.sub(g),m.sub(g);const I=1/(_.x*m.y-m.x*_.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(I),b.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(I),l[E].add(d),l[W].add(d),l[X].add(d),u[E].add(b),u[W].add(b),u[X].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,W=S.length;E<W;++E){const X=S[E],I=X.start,D=X.count;for(let F=I,Z=I+D;F<Z;F+=3)v(i[F+0],i[F+1],i[F+2])}const T=new N,P=new N,L=new N,C=new N;function y(E){L.fromArray(r,E*3),C.copy(L);const W=l[E];T.copy(W),T.sub(L.multiplyScalar(L.dot(W))).normalize(),P.crossVectors(C,W);const I=P.dot(u[E])<0?-1:1;c[E*4]=T.x,c[E*4+1]=T.y,c[E*4+2]=T.z,c[E*4+3]=I}for(let E=0,W=S.length;E<W;++E){const X=S[E],I=X.start,D=X.count;for(let F=I,Z=I+D;F<Z;F+=3)y(i[F+0]),y(i[F+1]),y(i[F+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,h=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)f[g++]=l[p++]}return new Oe(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ze,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],p=t(f,i);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ql=new te,qe=new ih,ys=new Qs,Xl=new N,ri=new N,oi=new N,ai=new N,Gr=new N,Ms=new N,Ss=new kt,bs=new kt,ws=new kt,Yl=new N,$l=new N,Kl=new N,Ts=new N,Es=new N;class _n extends he{constructor(t=new Ze,e=new oh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ms.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Gr.fromBufferAttribute(h,t),o?Ms.addScaledVector(Gr,u):Ms.addScaledVector(Gr.sub(e),u))}e.add(Ms)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),qe.copy(t.ray).recast(t.near),ys.containsPoint(qe.origin)===!1&&(qe.intersectSphere(ys,Xl)===null||qe.origin.distanceToSquared(Xl)>(t.far-t.near)**2))||(ql.copy(r).invert(),qe.copy(t.ray).applyMatrix4(ql),i.boundingBox!==null&&qe.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv2,h=i.attributes.normal,f=i.groups,p=i.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=s[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,T=v;S<T;S+=3){const P=a.getX(S),L=a.getX(S+1),C=a.getX(S+2);o=As(this,d,t,qe,l,u,h,P,L,C),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);o=As(this,s,t,qe,l,u,h,b,v,S),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=s[m.materialIndex],b=Math.max(m.start,p.start),v=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,T=v;S<T;S+=3){const P=S,L=S+1,C=S+2;o=As(this,d,t,qe,l,u,h,P,L,C),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,v=m+1,S=m+2;o=As(this,s,t,qe,l,u,h,b,v,S),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}}function i_(n,t,e,i,s,r,o,a){let c;if(t.side===be?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===bn,a),c===null)return null;Es.copy(a),Es.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Es);return l<e.near||l>e.far?null:{distance:l,point:Es.clone(),object:n}}function As(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ri),n.getVertexPosition(c,oi),n.getVertexPosition(l,ai);const u=i_(n,t,e,i,ri,oi,ai,Ts);if(u){s&&(Ss.fromBufferAttribute(s,a),bs.fromBufferAttribute(s,c),ws.fromBufferAttribute(s,l),u.uv=Ge.getInterpolation(Ts,ri,oi,ai,Ss,bs,ws,new kt)),r&&(Ss.fromBufferAttribute(r,a),bs.fromBufferAttribute(r,c),ws.fromBufferAttribute(r,l),u.uv2=Ge.getInterpolation(Ts,ri,oi,ai,Ss,bs,ws,new kt)),o&&(Yl.fromBufferAttribute(o,a),$l.fromBufferAttribute(o,c),Kl.fromBufferAttribute(o,l),u.normal=Ge.getInterpolation(Ts,ri,oi,ai,Yl,$l,Kl,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Ge.getNormal(ri,oi,ai,h.normal),u.face=h}return u}class rs extends Ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new kn(l,3)),this.setAttribute("normal",new kn(u,3)),this.setAttribute("uv",new kn(h,2));function g(_,m,d,b,v,S,T,P,L,C,y){const E=S/L,W=T/C,X=S/2,I=T/2,D=P/2,F=L+1,Z=C+1;let Y=0,j=0;const $=new N;for(let tt=0;tt<Z;tt++){const st=tt*W-I;for(let ot=0;ot<F;ot++){const V=ot*E-X;$[_]=V*b,$[m]=st*v,$[d]=D,l.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[d]=P>0?1:-1,u.push($.x,$.y,$.z),h.push(ot/L),h.push(1-tt/C),Y+=1}}for(let tt=0;tt<C;tt++)for(let st=0;st<L;st++){const ot=f+st+F*tt,V=f+st+F*(tt+1),q=f+(st+1)+F*(tt+1),it=f+(st+1)+F*tt;c.push(ot,V,it),c.push(V,q,it),j+=6}a.addGroup(p,j,y),p+=j,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function bi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function ve(n){const t={};for(let e=0;e<n.length;e++){const i=bi(n[e]);for(const s in i)t[s]=i[s]}return t}function s_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ch(n){return n.getRenderTarget()===null&&n.outputEncoding===Ht?Ye:$i}const r_={clone:bi,merge:ve};var o_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,a_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o_,this.fragmentShader=a_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bi(t.uniforms),this.uniformsGroups=s_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class uh extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends uh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,ci=1;class l_ extends he{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Fe(li,ci,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Fe(li,ci,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Fe(li,ci,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Fe(li,ci,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Fe(li,ci,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Fe(li,ci,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,r,o,a,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=cn,t.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,s),t.setRenderTarget(i,1),t.render(e,r),t.setRenderTarget(i,2),t.render(e,o),t.setRenderTarget(i,3),t.render(e,a),t.setRenderTarget(i,4),t.render(e,c),i.texture.generateMipmaps=p,t.setRenderTarget(i,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,i.texture.needsPMREMUpdate=!0}}class hh extends we{constructor(t,e,i,s,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class c_ extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ne}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rs(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:bi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:be,blending:yn});r.uniforms.tEquirect.value=e;const o=new _n(s,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Ne),new l_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Hr=new N,u_=new N,h_=new It;class Un{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Hr.subVectors(i,e).cross(u_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Hr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||h_.getNormalMatrix(t),s=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rn=new Qs,Cs=new N;class jo{constructor(t=new Un,e=new Un,i=new Un,s=new Un,r=new Un,o=new Un){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,s=i[0],r=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],h=i[7],f=i[8],p=i[9],g=i[10],_=i[11],m=i[12],d=i[13],b=i[14],v=i[15];return e[0].setComponents(a-s,h-c,_-f,v-m).normalize(),e[1].setComponents(a+s,h+c,_+f,v+m).normalize(),e[2].setComponents(a+r,h+l,_+p,v+d).normalize(),e[3].setComponents(a-r,h-l,_-p,v-d).normalize(),e[4].setComponents(a-o,h-u,_-g,v-b).normalize(),e[5].setComponents(a+o,h+u,_+g,v+b).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Cs.x=s.normal.x>0?t.max.x:t.min.x,Cs.y=s.normal.y>0?t.max.y:t.min.y,Cs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function f_(n,t){const e=t.isWebGL2,i=new WeakMap;function s(l,u){const h=l.array,f=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,p=u.updateRange;n.bindBuffer(h,l),p.count===-1?n.bufferSubData(h,0,f):(e?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h===void 0?i.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class qo extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,h=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const b=d*f-o;for(let v=0;v<l;v++){const S=v*h-r;g.push(S,-b,0),_.push(0,0,1),m.push(v/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let b=0;b<a;b++){const v=b+l*d,S=b+l*(d+1),T=b+1+l*(d+1),P=b+1+l*d;p.push(v,S,P),p.push(S,T,P)}this.setIndex(p),this.setAttribute("position",new kn(g,3)),this.setAttribute("normal",new kn(_,3)),this.setAttribute("uv",new kn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.widthSegments,t.heightSegments)}}var d_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,g_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,__=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,v_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x_="vec3 transformed = vec3( position );",y_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S_=`#ifdef USE_IRIDESCENCE
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
#endif`,b_=`#ifdef USE_BUMPMAP
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
#endif`,w_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,D_=`#define PI 3.141592653589793
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
} // validated`,I_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U_=`vec3 transformedNormal = objectNormal;
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
#endif`,N_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B_="gl_FragColor = linearToOutputTexel( gl_FragColor );",z_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k_=`#ifdef USE_ENVMAP
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
#endif`,G_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H_=`#ifdef USE_ENVMAP
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
#endif`,W_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,j_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,K_=`#ifdef USE_GRADIENTMAP
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
}`,Z_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,J_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ev=`uniform bool receiveShadow;
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
#endif`,nv=`#if defined( USE_ENVMAP )
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
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
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
#endif`,lv=`struct PhysicalMaterial {
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
}`,cv=`
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
#endif`,uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,fv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xv=`#if defined( USE_POINTS_UV )
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
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bv=`#ifdef USE_MORPHNORMALS
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
#endif`,wv=`#ifdef USE_MORPHTARGETS
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
#endif`,Tv=`#ifdef USE_MORPHTARGETS
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
#endif`,Ev=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
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
#endif`,Dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ov=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xv=`float getShadowMask() {
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
}`,Yv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zv=`#ifdef USE_SKINNING
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
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,t0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#ifdef USE_TRANSMISSION
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
#endif`,s0=`#ifdef USE_UV
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
#endif`,r0=`#ifdef USE_UV
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
#endif`,o0=`#ifdef USE_UV
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
#endif`,a0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,c0=`uniform sampler2D t2D;
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,p0=`#include <common>
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
}`,m0=`#if DEPTH_PACKING == 3200
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
}`,g0=`#define DISTANCE
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
}`,_0=`#define DISTANCE
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,y0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,E0=`#define MATCAP
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
}`,A0=`#define MATCAP
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
}`,C0=`#define NORMAL
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
}`,P0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,D0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,U0=`#define TOON
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
}`,N0=`#define TOON
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
}`,F0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,z0=`uniform float rotation;
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
}`,k0=`uniform vec3 diffuse;
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
}`,Ct={alphamap_fragment:d_,alphamap_pars_fragment:p_,alphatest_fragment:m_,alphatest_pars_fragment:g_,aomap_fragment:__,aomap_pars_fragment:v_,begin_vertex:x_,beginnormal_vertex:y_,bsdfs:M_,iridescence_fragment:S_,bumpmap_pars_fragment:b_,clipping_planes_fragment:w_,clipping_planes_pars_fragment:T_,clipping_planes_pars_vertex:E_,clipping_planes_vertex:A_,color_fragment:C_,color_pars_fragment:P_,color_pars_vertex:L_,color_vertex:R_,common:D_,cube_uv_reflection_fragment:I_,defaultnormal_vertex:U_,displacementmap_pars_vertex:N_,displacementmap_vertex:F_,emissivemap_fragment:O_,emissivemap_pars_fragment:V_,encodings_fragment:B_,encodings_pars_fragment:z_,envmap_fragment:k_,envmap_common_pars_fragment:G_,envmap_pars_fragment:H_,envmap_pars_vertex:W_,envmap_physical_pars_fragment:nv,envmap_vertex:j_,fog_vertex:q_,fog_pars_vertex:X_,fog_fragment:Y_,fog_pars_fragment:$_,gradientmap_pars_fragment:K_,lightmap_fragment:Z_,lightmap_pars_fragment:J_,lights_lambert_fragment:Q_,lights_lambert_pars_fragment:tv,lights_pars_begin:ev,lights_toon_fragment:iv,lights_toon_pars_fragment:sv,lights_phong_fragment:rv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:uv,lights_fragment_end:hv,logdepthbuf_fragment:fv,logdepthbuf_pars_fragment:dv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:mv,map_fragment:gv,map_pars_fragment:_v,map_particle_fragment:vv,map_particle_pars_fragment:xv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Mv,morphcolor_vertex:Sv,morphnormal_vertex:bv,morphtarget_pars_vertex:wv,morphtarget_vertex:Tv,normal_fragment_begin:Ev,normal_fragment_maps:Av,normal_pars_fragment:Cv,normal_pars_vertex:Pv,normal_vertex:Lv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Dv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Uv,iridescence_pars_fragment:Nv,output_fragment:Fv,packing:Ov,premultiplied_alpha_fragment:Vv,project_vertex:Bv,dithering_fragment:zv,dithering_pars_fragment:kv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Hv,shadowmap_pars_fragment:Wv,shadowmap_pars_vertex:jv,shadowmap_vertex:qv,shadowmask_pars_fragment:Xv,skinbase_vertex:Yv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:Zv,specularmap_fragment:Jv,specularmap_pars_fragment:Qv,tonemapping_fragment:t0,tonemapping_pars_fragment:e0,transmission_fragment:n0,transmission_pars_fragment:i0,uv_pars_fragment:s0,uv_pars_vertex:r0,uv_vertex:o0,worldpos_vertex:a0,background_vert:l0,background_frag:c0,backgroundCube_vert:u0,backgroundCube_frag:h0,cube_vert:f0,cube_frag:d0,depth_vert:p0,depth_frag:m0,distanceRGBA_vert:g0,distanceRGBA_frag:_0,equirect_vert:v0,equirect_frag:x0,linedashed_vert:y0,linedashed_frag:M0,meshbasic_vert:S0,meshbasic_frag:b0,meshlambert_vert:w0,meshlambert_frag:T0,meshmatcap_vert:E0,meshmatcap_frag:A0,meshnormal_vert:C0,meshnormal_frag:P0,meshphong_vert:L0,meshphong_frag:R0,meshphysical_vert:D0,meshphysical_frag:I0,meshtoon_vert:U0,meshtoon_frag:N0,points_vert:F0,points_frag:O0,shadow_vert:V0,shadow_frag:B0,sprite_vert:z0,sprite_frag:k0},nt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}}},$e={basic:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:ve([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:ve([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:ve([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:ve([nt.points,nt.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:ve([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:ve([nt.common,nt.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:ve([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:ve([nt.sprite,nt.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:ve([nt.common,nt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:ve([nt.lights,nt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};$e.physical={uniforms:ve([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Ps={r:0,b:0,g:0};function G0(n,t,e,i,s,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,h=null,f=0,p=null;function g(m,d){let b=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v));const S=n.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(v=null),v===null?_(a,c):v&&v.isColor&&(_(v,1),b=!0),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Js)?(u===void 0&&(u=new _n(new rs(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:bi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.encoding!==Ht,(h!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new _n(new qo(2,2),new qn({name:"BackgroundMaterial",uniforms:bi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=v.encoding!==Ht,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Ps,ch(n)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function H0(n,t,e,i){const s=n.getParameter(34921),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=m(null);let l=c,u=!1;function h(D,F,Z,Y,j){let $=!1;if(o){const tt=_(Y,Z,F);l!==tt&&(l=tt,p(l.object)),$=d(D,Y,Z,j),$&&b(D,Y,Z,j)}else{const tt=F.wireframe===!0;(l.geometry!==Y.id||l.program!==Z.id||l.wireframe!==tt)&&(l.geometry=Y.id,l.program=Z.id,l.wireframe=tt,$=!0)}j!==null&&e.update(j,34963),($||u)&&(u=!1,C(D,F,Z,Y),j!==null&&n.bindBuffer(34963,e.get(j).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,F,Z){const Y=Z.wireframe===!0;let j=a[D.id];j===void 0&&(j={},a[D.id]=j);let $=j[F.id];$===void 0&&($={},j[F.id]=$);let tt=$[Y];return tt===void 0&&(tt=m(f()),$[Y]=tt),tt}function m(D){const F=[],Z=[],Y=[];for(let j=0;j<s;j++)F[j]=0,Z[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:Y,object:D,attributes:{},index:null}}function d(D,F,Z,Y){const j=l.attributes,$=F.attributes;let tt=0;const st=Z.getAttributes();for(const ot in st)if(st[ot].location>=0){const q=j[ot];let it=$[ot];if(it===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),q===void 0||q.attribute!==it||it&&q.data!==it.data)return!0;tt++}return l.attributesNum!==tt||l.index!==Y}function b(D,F,Z,Y){const j={},$=F.attributes;let tt=0;const st=Z.getAttributes();for(const ot in st)if(st[ot].location>=0){let q=$[ot];q===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));const it={};it.attribute=q,q&&q.data&&(it.data=q.data),j[ot]=it,tt++}l.attributes=j,l.attributesNum=tt,l.index=Y}function v(){const D=l.newAttributes;for(let F=0,Z=D.length;F<Z;F++)D[F]=0}function S(D){T(D,0)}function T(D,F){const Z=l.newAttributes,Y=l.enabledAttributes,j=l.attributeDivisors;Z[D]=1,Y[D]===0&&(n.enableVertexAttribArray(D),Y[D]=1),j[D]!==F&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),j[D]=F)}function P(){const D=l.newAttributes,F=l.enabledAttributes;for(let Z=0,Y=F.length;Z<Y;Z++)F[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),F[Z]=0)}function L(D,F,Z,Y,j,$){i.isWebGL2===!0&&(Z===5124||Z===5125)?n.vertexAttribIPointer(D,F,Z,j,$):n.vertexAttribPointer(D,F,Z,Y,j,$)}function C(D,F,Z,Y){if(i.isWebGL2===!1&&(D.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const j=Y.attributes,$=Z.getAttributes(),tt=F.defaultAttributeValues;for(const st in $){const ot=$[st];if(ot.location>=0){let V=j[st];if(V===void 0&&(st==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),st==="instanceColor"&&D.instanceColor&&(V=D.instanceColor)),V!==void 0){const q=V.normalized,it=V.itemSize,rt=e.get(V);if(rt===void 0)continue;const O=rt.buffer,bt=rt.type,vt=rt.bytesPerElement;if(V.isInterleavedBufferAttribute){const et=V.data,ft=et.stride,Ft=V.offset;if(et.isInstancedInterleavedBuffer){for(let ht=0;ht<ot.locationSize;ht++)T(ot.location+ht,et.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ht=0;ht<ot.locationSize;ht++)S(ot.location+ht);n.bindBuffer(34962,O);for(let ht=0;ht<ot.locationSize;ht++)L(ot.location+ht,it/ot.locationSize,bt,q,ft*vt,(Ft+it/ot.locationSize*ht)*vt)}else{if(V.isInstancedBufferAttribute){for(let et=0;et<ot.locationSize;et++)T(ot.location+et,V.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let et=0;et<ot.locationSize;et++)S(ot.location+et);n.bindBuffer(34962,O);for(let et=0;et<ot.locationSize;et++)L(ot.location+et,it/ot.locationSize,bt,q,it*vt,it/ot.locationSize*et*vt)}}else if(tt!==void 0){const q=tt[st];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(ot.location,q);break;case 3:n.vertexAttrib3fv(ot.location,q);break;case 4:n.vertexAttrib4fv(ot.location,q);break;default:n.vertexAttrib1fv(ot.location,q)}}}}P()}function y(){X();for(const D in a){const F=a[D];for(const Z in F){const Y=F[Z];for(const j in Y)g(Y[j].object),delete Y[j];delete F[Z]}delete a[D]}}function E(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const Z in F){const Y=F[Z];for(const j in Y)g(Y[j].object),delete Y[j];delete F[Z]}delete a[D.id]}function W(D){for(const F in a){const Z=a[F];if(Z[D.id]===void 0)continue;const Y=Z[D.id];for(const j in Y)g(Y[j].object),delete Y[j];delete Z[D.id]}}function X(){I(),u=!0,l!==c&&(l=c,p(l.object))}function I(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:X,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:S,disableUnusedAttributes:P}}function W0(n,t,e,i){const s=i.isWebGL2;let r;function o(l){r=l}function a(l,u){n.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,p;if(s)f=n,p="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](r,l,u,h),e.update(u,r,h)}this.setMode=o,this.render=a,this.renderInstances=c}function j0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(L){if(L==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=n.getParameter(34930),f=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),_=n.getParameter(34921),m=n.getParameter(36347),d=n.getParameter(36348),b=n.getParameter(36349),v=f>0,S=o||t.has("OES_texture_float"),T=v&&S,P=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:P}}function q0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Un,a=new It,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||s;return s=f,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const b=r?0:i,v=b*4;let S=d.clippingState||null;c.value=S,S=u(g,f,v,p);for(let T=0;T!==v;++T)S[T]=e[T];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,S=p;v!==_;++v,S+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function X0(n){let t=new WeakMap;function e(o,a){return a===fo?o.mapping=yi:a===po&&(o.mapping=Mi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fo||a===po)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new c_(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class dh extends uh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const mi=4,Zl=[.125,.215,.35,.446,.526,.582],Fn=20,Wr=new dh,Jl=new zt;let jr=null;const Nn=(1+Math.sqrt(5))/2,ui=1/Nn,Ql=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Nn,ui),new N(0,Nn,-ui),new N(ui,0,Nn),new N(-ui,0,Nn),new N(Nn,ui,0),new N(-Nn,ui,0)];class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){jr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(jr),t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jr=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ne,minFilter:Ne,generateMipmaps:!1,type:Yi,format:We,encoding:Wn,depthBuffer:!1},s=ec(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y0(r)),this._blurMaterial=$0(r,t,e)}return s}_compileMaterial(t){const e=new _n(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,i,s){const a=new Fe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jl),u.toneMapping=cn,u.autoClear=!1;const p=new oh({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new _n(new rs,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Jl),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const v=this._cubeSize;Ls(s,b*v,d>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===yi||t.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _n(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Ls(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Wr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ql[(s-1)%Ql.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _n(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Fn;m>Fn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const d=[];let b=0;for(let L=0;L<Fn;++L){const C=L/_,y=Math.exp(-C*C/2);d.push(y),L===0?b+=y:L<m&&(b+=2*y)}for(let L=0;L<d.length;L++)d[L]=d[L]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;const S=this._sizeLods[s],T=3*S*(s>v-mi?s-v+mi:0),P=4*(this._cubeSize-S);Ls(e,T,P,3*S,2*S),c.setRenderTarget(e),c.render(h,Wr)}}function Y0(n){const t=[],e=[],i=[];let s=n;const r=n-mi+1+Zl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>n-mi?c=Zl[o-n+mi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,C=P>2?0:-1,y=[L,C,0,L+2/3,C,0,L+2/3,C+1,0,L,C,0,L+2/3,C+1,0,L,C+1,0];b.set(y,_*g*P),v.set(f,m*g*P);const E=[P,P,P,P,P,P];S.set(E,d*g*P)}const T=new Ze;T.setAttribute("position",new Oe(b,_)),T.setAttribute("uv",new Oe(v,m)),T.setAttribute("faceIndex",new Oe(S,d)),t.push(T),s>mi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ec(n,t,e){const i=new jn(n,t,e);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ls(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function $0(n,t,e){const i=new Float32Array(Fn),s=new N(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function nc(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ic(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Xo(){return`

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
	`}function K0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===fo||c===po,u=c===yi||c===Mi;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new tc(n)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){e===null&&(e=new tc(n));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Z0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function J0(n,t,e,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],34962)}}function l(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let v=0,S=b.length;v<S;v+=3){const T=b[v+0],P=b[v+1],L=b[v+2];f.push(T,P,P,L,L,T)}}else{const b=g.array;_=g.version;for(let v=0,S=b.length/3-1;v<S;v+=3){const T=v+0,P=v+1,L=v+2;f.push(T,P,P,L,L,T)}}const m=new(Qu(f)?lh:ah)(f,1);m.version=_;const d=r.get(h);d&&t.remove(d),r.set(h,m)}function u(h){const f=r.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Q0(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function u(f,p){n.drawElements(r,p,a,f*c),e.update(p,r,1)}function h(f,p,g){if(g===0)return;let _,m;if(s)_=n,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,a,f*c,g),e.update(p,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function tx(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ex(n,t){return n[0]-t[0]}function nx(n,t){return Math.abs(t[1])-Math.abs(n[1])}function ix(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let D=function(){X.dispose(),r.delete(u),u.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let C=0;b===!0&&(C=1),v===!0&&(C=2),S===!0&&(C=3);let y=u.attributes.position.count*C,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const W=new Float32Array(y*E*4*g),X=new nh(W,y,E,g);X.type=Bn,X.needsUpdate=!0;const I=C*4;for(let F=0;F<g;F++){const Z=T[F],Y=P[F],j=L[F],$=y*E*4*F;for(let tt=0;tt<Z.count;tt++){const st=tt*I;b===!0&&(o.fromBufferAttribute(Z,tt),W[$+st+0]=o.x,W[$+st+1]=o.y,W[$+st+2]=o.z,W[$+st+3]=0),v===!0&&(o.fromBufferAttribute(Y,tt),W[$+st+4]=o.x,W[$+st+5]=o.y,W[$+st+6]=o.z,W[$+st+7]=0),S===!0&&(o.fromBufferAttribute(j,tt),W[$+st+8]=o.x,W[$+st+9]=o.y,W[$+st+10]=o.z,W[$+st+11]=j.itemSize===4?o.w:1)}}_={count:g,texture:X,size:new kt(y,E)},r.set(u,_),u.addEventListener("dispose",D)}let m=0;for(let b=0;b<f.length;b++)m+=f[b];const d=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",d),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),h.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];i[u.id]=g}for(let v=0;v<p;v++){const S=g[v];S[0]=v,S[1]=f[v]}g.sort(nx);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(ex);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const S=a[v],T=S[0],P=S[1];T!==Number.MAX_SAFE_INTEGER&&P?(_&&u.getAttribute("morphTarget"+v)!==_[T]&&u.setAttribute("morphTarget"+v,_[T]),m&&u.getAttribute("morphNormal"+v)!==m[T]&&u.setAttribute("morphNormal"+v,m[T]),s[v]=P,d+=P):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}const b=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function sx(n,t,e,i){let s=new WeakMap;function r(c){const l=i.render.frame,u=c.geometry,h=t.get(c,u);return s.get(h)!==l&&(t.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const ph=new we,mh=new nh,gh=new Xg,_h=new hh,sc=[],rc=[],oc=new Float32Array(16),ac=new Float32Array(9),lc=new Float32Array(4);function Ti(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=sc[s];if(r===void 0&&(r=new Float32Array(s),sc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function er(n,t){let e=rc[t];e===void 0&&(e=new Int32Array(t),rc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ox(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;n.uniform2fv(this.addr,t),ie(e,t)}}function ax(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ne(e,t))return;n.uniform3fv(this.addr,t),ie(e,t)}}function lx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;n.uniform4fv(this.addr,t),ie(e,t)}}function cx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,i))return;lc.set(i),n.uniformMatrix2fv(this.addr,!1,lc),ie(e,i)}}function ux(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,i))return;ac.set(i),n.uniformMatrix3fv(this.addr,!1,ac),ie(e,i)}}function hx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ie(e,t)}else{if(ne(e,i))return;oc.set(i),n.uniformMatrix4fv(this.addr,!1,oc),ie(e,i)}}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;n.uniform2iv(this.addr,t),ie(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;n.uniform3iv(this.addr,t),ie(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;n.uniform4iv(this.addr,t),ie(e,t)}}function gx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _x(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ne(e,t))return;n.uniform2uiv(this.addr,t),ie(e,t)}}function vx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ne(e,t))return;n.uniform3uiv(this.addr,t),ie(e,t)}}function xx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ne(e,t))return;n.uniform4uiv(this.addr,t),ie(e,t)}}function yx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||ph,s)}function Mx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||gh,s)}function Sx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||_h,s)}function bx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||mh,s)}function wx(n){switch(n){case 5126:return rx;case 35664:return ox;case 35665:return ax;case 35666:return lx;case 35674:return cx;case 35675:return ux;case 35676:return hx;case 5124:case 35670:return fx;case 35667:case 35671:return dx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return vx;case 36296:return xx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return Mx;case 35680:case 36300:case 36308:case 36293:return Sx;case 36289:case 36303:case 36311:case 36292:return bx}}function Tx(n,t){n.uniform1fv(this.addr,t)}function Ex(n,t){const e=Ti(t,this.size,2);n.uniform2fv(this.addr,e)}function Ax(n,t){const e=Ti(t,this.size,3);n.uniform3fv(this.addr,e)}function Cx(n,t){const e=Ti(t,this.size,4);n.uniform4fv(this.addr,e)}function Px(n,t){const e=Ti(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lx(n,t){const e=Ti(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Rx(n,t){const e=Ti(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Dx(n,t){n.uniform1iv(this.addr,t)}function Ix(n,t){n.uniform2iv(this.addr,t)}function Ux(n,t){n.uniform3iv(this.addr,t)}function Nx(n,t){n.uniform4iv(this.addr,t)}function Fx(n,t){n.uniform1uiv(this.addr,t)}function Ox(n,t){n.uniform2uiv(this.addr,t)}function Vx(n,t){n.uniform3uiv(this.addr,t)}function Bx(n,t){n.uniform4uiv(this.addr,t)}function zx(n,t,e){const i=this.cache,s=t.length,r=er(e,s);ne(i,r)||(n.uniform1iv(this.addr,r),ie(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ph,r[o])}function kx(n,t,e){const i=this.cache,s=t.length,r=er(e,s);ne(i,r)||(n.uniform1iv(this.addr,r),ie(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gh,r[o])}function Gx(n,t,e){const i=this.cache,s=t.length,r=er(e,s);ne(i,r)||(n.uniform1iv(this.addr,r),ie(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_h,r[o])}function Hx(n,t,e){const i=this.cache,s=t.length,r=er(e,s);ne(i,r)||(n.uniform1iv(this.addr,r),ie(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||mh,r[o])}function Wx(n){switch(n){case 5126:return Tx;case 35664:return Ex;case 35665:return Ax;case 35666:return Cx;case 35674:return Px;case 35675:return Lx;case 35676:return Rx;case 5124:case 35670:return Dx;case 35667:case 35671:return Ix;case 35668:case 35672:return Ux;case 35669:case 35673:return Nx;case 5125:return Fx;case 36294:return Ox;case 36295:return Vx;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}class jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=wx(e.type)}}class qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=Wx(e.type)}}class Xx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const qr=/(\w+)(\])?(\[|\.)?/g;function cc(n,t){n.seq.push(t),n.map[t.id]=t}function Yx(n,t,e){const i=n.name,s=i.length;for(qr.lastIndex=0;;){const r=qr.exec(i),o=qr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){cc(e,l===void 0?new jx(a,n,t):new qx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new Xx(a),cc(e,h)),e=h}}}class Ns{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Yx(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function uc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}let $x=0;function Kx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Zx(n){switch(n){case Wn:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function hc(n,t,e){const i=n.getShaderParameter(t,35713),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kx(n.getShaderSource(t),o)}else return s}function Jx(n,t){const e=Zx(t);return"vec4 "+n+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Qx(n,t){let e;switch(t){case fg:e="Linear";break;case dg:e="Reinhard";break;case pg:e="OptimizedCineon";break;case mg:e="ACESFilmic";break;case gg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ty(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function ey(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ny(n,t){const e={},i=n.getProgramParameter(t,35721);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ni(n){return n!==""}function fc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iy=/^[ \t]*#include +<([\w\d./]+)>/gm;function xo(n){return n.replace(iy,sy)}function sy(n,t){const e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return xo(e)}const ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(n){return n.replace(ry,oy)}function oy(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ay(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Wm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(t="SHADOWMAP_TYPE_VSM"),t}function ly(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yi:case Mi:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cy(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function uy(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $u:t="ENVMAP_BLENDING_MULTIPLY";break;case ug:t="ENVMAP_BLENDING_MIX";break;case hg:t="ENVMAP_BLENDING_ADD";break}return t}function hy(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function fy(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=ay(e),l=ly(e),u=cy(e),h=uy(e),f=hy(e),p=e.isWebGL2?"":ty(e),g=ey(r),_=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(Ni).join(`
`),m.length>0&&(m+=`
`),d=[p,g].filter(Ni).join(`
`),d.length>0&&(d+=`
`)):(m=[mc(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),d=[p,mc(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==cn?Qx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.encodings_pars_fragment,Jx("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ni).join(`
`)),o=xo(o),o=fc(o,e),o=dc(o,e),a=xo(a),a=fc(a,e),a=dc(a,e),o=pc(o),a=pc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=b+m+o,S=b+d+a,T=uc(s,35633,v),P=uc(s,35632,S);if(s.attachShader(_,T),s.attachShader(_,P),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),n.debug.checkShaderErrors){const y=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(T).trim(),W=s.getShaderInfoLog(P).trim();let X=!0,I=!0;if(s.getProgramParameter(_,35714)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,T,P);else{const D=hc(s,T,"vertex"),F=hc(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,35715)+`

Program Info Log: `+y+`
`+D+`
`+F)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(E===""||W==="")&&(I=!1);I&&(this.diagnostics={runnable:X,programLog:y,vertexShader:{log:E,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(T),s.deleteShader(P);let L;this.getUniforms=function(){return L===void 0&&(L=new Ns(s,_)),L};let C;return this.getAttributes=function(){return C===void 0&&(C=ny(s,_)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=P,this}let dy=0;class py{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new my(t),e.set(t,i)),i}}class my{constructor(t){this.id=dy++,this.code=t,this.usedTimes=0}}function gy(n,t,e,i,s,r,o){const a=new sh,c=new py,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===1?"uv2":"uv"}function m(y,E,W,X,I){const D=X.fog,F=I.geometry,Z=y.isMeshStandardMaterial?X.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),j=Y&&Y.mapping===Js?Y.image.height:null,$=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const tt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,st=tt!==void 0?tt.length:0;let ot=0;F.morphAttributes.position!==void 0&&(ot=1),F.morphAttributes.normal!==void 0&&(ot=2),F.morphAttributes.color!==void 0&&(ot=3);let V,q,it,rt;if($){const lt=$e[$];V=lt.vertexShader,q=lt.fragmentShader}else V=y.vertexShader,q=y.fragmentShader,c.update(y),it=c.getVertexShaderID(y),rt=c.getFragmentShaderID(y);const O=n.getRenderTarget(),bt=I.isInstancedMesh===!0,vt=!!y.map,et=!!y.matcap,ft=!!Y,Ft=!!y.aoMap,ht=!!y.lightMap,Rt=!!y.bumpMap,se=!!y.normalMap,ue=!!y.displacementMap,re=!!y.emissiveMap,ee=!!y.metalnessMap,Ot=!!y.roughnessMap,Yt=y.clearcoat>0,Me=y.iridescence>0,w=y.sheen>0,x=y.transmission>0,B=Yt&&!!y.clearcoatMap,J=Yt&&!!y.clearcoatNormalMap,Q=Yt&&!!y.clearcoatRoughnessMap,at=Me&&!!y.iridescenceMap,Mt=Me&&!!y.iridescenceThicknessMap,ut=w&&!!y.sheenColorMap,G=w&&!!y.sheenRoughnessMap,dt=!!y.specularMap,gt=!!y.specularColorMap,xt=!!y.specularIntensityMap,ct=x&&!!y.transmissionMap,pt=x&&!!y.thicknessMap,Ut=!!y.gradientMap,Vt=!!y.alphaMap,$t=y.alphaTest>0,A=!!y.extensions,k=!!F.attributes.uv2;return{isWebGL2:u,shaderID:$,shaderName:y.type,vertexShader:V,fragmentShader:q,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:bt,instancingColor:bt&&I.instanceColor!==null,supportsVertexTextures:f,outputEncoding:O===null?n.outputEncoding:O.isXRRenderTarget===!0?O.texture.encoding:Wn,map:vt,matcap:et,envMap:ft,envMapMode:ft&&Y.mapping,envMapCubeUVHeight:j,aoMap:Ft,lightMap:ht,bumpMap:Rt,normalMap:se,displacementMap:f&&ue,emissiveMap:re,normalMapObjectSpace:se&&y.normalMapType===Fg,normalMapTangentSpace:se&&y.normalMapType===Ng,decodeVideoTexture:vt&&y.map.isVideoTexture===!0&&y.map.encoding===Ht,metalnessMap:ee,roughnessMap:Ot,clearcoat:Yt,clearcoatMap:B,clearcoatNormalMap:J,clearcoatRoughnessMap:Q,iridescence:Me,iridescenceMap:at,iridescenceThicknessMap:Mt,sheen:w,sheenColorMap:ut,sheenRoughnessMap:G,specularMap:dt,specularColorMap:gt,specularIntensityMap:xt,transmission:x,transmissionMap:ct,thicknessMap:pt,gradientMap:Ut,opaque:y.transparent===!1&&y.blending===gi,alphaMap:Vt,alphaTest:$t,combine:y.combine,mapUv:vt&&_(y.map.channel),aoMapUv:Ft&&_(y.aoMap.channel),lightMapUv:ht&&_(y.lightMap.channel),bumpMapUv:Rt&&_(y.bumpMap.channel),normalMapUv:se&&_(y.normalMap.channel),displacementMapUv:ue&&_(y.displacementMap.channel),emissiveMapUv:re&&_(y.emissiveMap.channel),metalnessMapUv:ee&&_(y.metalnessMap.channel),roughnessMapUv:Ot&&_(y.roughnessMap.channel),clearcoatMapUv:B&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(y.sheenRoughnessMap.channel),specularMapUv:dt&&_(y.specularMap.channel),specularColorMapUv:gt&&_(y.specularColorMap.channel),specularIntensityMapUv:xt&&_(y.specularIntensityMap.channel),transmissionMapUv:ct&&_(y.transmissionMap.channel),thicknessMapUv:pt&&_(y.thicknessMap.channel),alphaMapUv:Vt&&_(y.alphaMap.channel),vertexTangents:se&&!!F.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs2:k,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(vt||Vt),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:ot,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:cn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:A&&y.extensions.derivatives===!0,extensionFragDepth:A&&y.extensions.fragDepth===!0,extensionDrawBuffers:A&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:A&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)E.push(W),E.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(b(E,y),v(E,y),E.push(n.outputEncoding)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputEncoding),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUvs2&&a.enable(13),E.vertexTangents&&a.enable(14),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.decodeVideoTexture&&a.enable(17),E.opaque&&a.enable(18),E.pointsUvs&&a.enable(19),y.push(a.mask)}function S(y){const E=g[y.type];let W;if(E){const X=$e[E];W=r_.clone(X.uniforms)}else W=y.uniforms;return W}function T(y,E){let W;for(let X=0,I=l.length;X<I;X++){const D=l[X];if(D.cacheKey===E){W=D,++W.usedTimes;break}}return W===void 0&&(W=new fy(n,E,y,r),l.push(W)),W}function P(y){if(--y.usedTimes===0){const E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),y.destroy()}}function L(y){c.remove(y)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:T,releaseProgram:P,releaseShaderCache:L,programs:l,dispose:C}}function _y(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function vy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _c(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),t++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(h,f){e.length>1&&e.sort(h||vy),i.length>1&&i.sort(f||gc),s.length>1&&s.sort(f||gc)}function u(){for(let h=t,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function xy(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new _c,n.set(i,[o])):s>=r.length?(o=new _c,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function yy(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new zt};break;case"SpotLight":e={position:new N,direction:new N,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function My(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Sy=0;function by(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function wy(n,t){const e=new yy,i=My(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new N);const r=new N,o=new te,a=new te;function c(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let _=0,m=0,d=0,b=0,v=0,S=0,T=0,P=0,L=0,C=0;u.sort(by);const y=h===!0?Math.PI:1;for(let W=0,X=u.length;W<X;W++){const I=u[W],D=I.color,F=I.intensity,Z=I.distance,Y=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=D.r*F*y,p+=D.g*F*y,g+=D.b*F*y;else if(I.isLightProbe)for(let j=0;j<9;j++)s.probe[j].addScaledVector(I.sh.coefficients[j],F);else if(I.isDirectionalLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const $=I.shadow,tt=i.get(I);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.directionalShadow[_]=tt,s.directionalShadowMap[_]=Y,s.directionalShadowMatrix[_]=I.shadow.matrix,S++}s.directional[_]=j,_++}else if(I.isSpotLight){const j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(D).multiplyScalar(F*y),j.distance=Z,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,s.spot[d]=j;const $=I.shadow;if(I.map&&(s.spotLightMap[L]=I.map,L++,$.updateMatrices(I),I.castShadow&&C++),s.spotLightMatrix[d]=$.matrix,I.castShadow){const tt=i.get(I);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,s.spotShadow[d]=tt,s.spotShadowMap[d]=Y,P++}d++}else if(I.isRectAreaLight){const j=e.get(I);j.color.copy(D).multiplyScalar(F),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),s.rectArea[b]=j,b++}else if(I.isPointLight){const j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*y),j.distance=I.distance,j.decay=I.decay,I.castShadow){const $=I.shadow,tt=i.get(I);tt.shadowBias=$.bias,tt.shadowNormalBias=$.normalBias,tt.shadowRadius=$.radius,tt.shadowMapSize=$.mapSize,tt.shadowCameraNear=$.camera.near,tt.shadowCameraFar=$.camera.far,s.pointShadow[m]=tt,s.pointShadowMap[m]=Y,s.pointShadowMatrix[m]=I.shadow.matrix,T++}s.point[m]=j,m++}else if(I.isHemisphereLight){const j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(F*y),j.groundColor.copy(I.groundColor).multiplyScalar(F*y),s.hemi[v]=j,v++}}b>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_FLOAT_1,s.rectAreaLTC2=nt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=nt.LTC_HALF_1,s.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==d||E.rectAreaLength!==b||E.hemiLength!==v||E.numDirectionalShadows!==S||E.numPointShadows!==T||E.numSpotShadows!==P||E.numSpotMaps!==L)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=b,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=P+L-C,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=C,E.directionalLength=_,E.pointLength=m,E.spotLength=d,E.rectAreaLength=b,E.hemiLength=v,E.numDirectionalShadows=S,E.numPointShadows=T,E.numSpotShadows=P,E.numSpotMaps=L,s.version=Sy++)}function l(u,h){let f=0,p=0,g=0,_=0,m=0;const d=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const S=u[b];if(S.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(S.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),g++}else if(S.isRectAreaLight){const T=s.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(S.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const T=s.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){const T=s.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:s}}function vc(n,t){const e=new wy(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function c(h){e.setup(i,h)}function l(h){e.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Ty(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new vc(n,t),e.set(r,[c])):o>=a.length?(c=new vc(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ey extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ay extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;function Ly(n,t,e){let i=new jo;const s=new kt,r=new kt,o=new ce,a=new Ey({depthPacking:Ug}),c=new Ay,l={},u=e.maxTextureSize,h={[bn]:be,[be]:bn,[rn]:rn},f=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Cy,fragmentShader:Py}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _n(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu,this.render=function(S,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const L=n.getRenderTarget(),C=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),E=n.state;E.setBlending(yn),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let W=0,X=S.length;W<X;W++){const I=S[W],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);const F=D.getFrameExtents();if(s.multiply(F),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/F.x),s.x=r.x*F.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/F.y),s.y=r.y*F.y,D.mapSize.y=r.y)),D.map===null){const Y=this.type!==Ui?{minFilter:ye,magFilter:ye}:{};D.map=new jn(s.x,s.y,Y),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const Z=D.getViewportCount();for(let Y=0;Y<Z;Y++){const j=D.getViewport(Y);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),E.viewport(o),D.updateMatrices(I,Y),i=D.getFrustum(),v(T,P,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===Ui&&d(D,P),D.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(L,C,y)};function d(S,T){const P=t.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new jn(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(T,null,P,p,_,null)}function b(S,T,P,L){let C=null;const y=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(y!==void 0)C=y;else if(C=P.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const E=C.uuid,W=T.uuid;let X=l[E];X===void 0&&(X={},l[E]=X);let I=X[W];I===void 0&&(I=C.clone(),X[W]=I),C=I}if(C.visible=T.visible,C.wireframe=T.wireframe,L===Ui?C.side=T.shadowSide!==null?T.shadowSide:T.side:C.side=T.shadowSide!==null?T.shadowSide:h[T.side],C.alphaMap=T.alphaMap,C.alphaTest=T.alphaTest,C.map=T.map,C.clipShadows=T.clipShadows,C.clippingPlanes=T.clippingPlanes,C.clipIntersection=T.clipIntersection,C.displacementMap=T.displacementMap,C.displacementScale=T.displacementScale,C.displacementBias=T.displacementBias,C.wireframeLinewidth=T.wireframeLinewidth,C.linewidth=T.linewidth,P.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const E=n.properties.get(C);E.light=P}return C}function v(S,T,P,L,C){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Ui)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const W=t.update(S),X=S.material;if(Array.isArray(X)){const I=W.groups;for(let D=0,F=I.length;D<F;D++){const Z=I[D],Y=X[Z.materialIndex];if(Y&&Y.visible){const j=b(S,Y,L,C);n.renderBufferDirect(P,null,W,j,S,Z)}}}else if(X.visible){const I=b(S,X,L,C);n.renderBufferDirect(P,null,W,I,S,null)}}const E=S.children;for(let W=0,X=E.length;W<X;W++)v(E[W],T,P,L,C)}}function Ry(n,t,e){const i=e.isWebGL2;function s(){let A=!1;const k=new ce;let K=null;const lt=new ce(0,0,0,0);return{setMask:function(mt){K!==mt&&!A&&(n.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){A=mt},setClear:function(mt,Gt,Wt,fe,un){un===!0&&(mt*=fe,Gt*=fe,Wt*=fe),k.set(mt,Gt,Wt,fe),lt.equals(k)===!1&&(n.clearColor(mt,Gt,Wt,fe),lt.copy(k))},reset:function(){A=!1,K=null,lt.set(-1,0,0,0)}}}function r(){let A=!1,k=null,K=null,lt=null;return{setTest:function(mt){mt?O(2929):bt(2929)},setMask:function(mt){k!==mt&&!A&&(n.depthMask(mt),k=mt)},setFunc:function(mt){if(K!==mt){switch(mt){case ig:n.depthFunc(512);break;case sg:n.depthFunc(519);break;case rg:n.depthFunc(513);break;case ho:n.depthFunc(515);break;case og:n.depthFunc(514);break;case ag:n.depthFunc(518);break;case lg:n.depthFunc(516);break;case cg:n.depthFunc(517);break;default:n.depthFunc(515)}K=mt}},setLocked:function(mt){A=mt},setClear:function(mt){lt!==mt&&(n.clearDepth(mt),lt=mt)},reset:function(){A=!1,k=null,K=null,lt=null}}}function o(){let A=!1,k=null,K=null,lt=null,mt=null,Gt=null,Wt=null,fe=null,un=null;return{setTest:function(Kt){A||(Kt?O(2960):bt(2960))},setMask:function(Kt){k!==Kt&&!A&&(n.stencilMask(Kt),k=Kt)},setFunc:function(Kt,De,je){(K!==Kt||lt!==De||mt!==je)&&(n.stencilFunc(Kt,De,je),K=Kt,lt=De,mt=je)},setOp:function(Kt,De,je){(Gt!==Kt||Wt!==De||fe!==je)&&(n.stencilOp(Kt,De,je),Gt=Kt,Wt=De,fe=je)},setLocked:function(Kt){A=Kt},setClear:function(Kt){un!==Kt&&(n.clearStencil(Kt),un=Kt)},reset:function(){A=!1,k=null,K=null,lt=null,mt=null,Gt=null,Wt=null,fe=null,un=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,S=null,T=null,P=null,L=null,C=null,y=!1,E=null,W=null,X=null,I=null,D=null;const F=n.getParameter(35661);let Z=!1,Y=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=Y>=1):j.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=Y>=2);let $=null,tt={};const st=n.getParameter(3088),ot=n.getParameter(2978),V=new ce().fromArray(st),q=new ce().fromArray(ot);function it(A,k,K){const lt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(A,mt),n.texParameteri(A,10241,9728),n.texParameteri(A,10240,9728);for(let Gt=0;Gt<K;Gt++)n.texImage2D(k+Gt,0,6408,1,1,0,6408,5121,lt);return mt}const rt={};rt[3553]=it(3553,3553,1),rt[34067]=it(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),O(2929),c.setFunc(ho),ue(!1),re(sl),O(2884),Rt(yn);function O(A){f[A]!==!0&&(n.enable(A),f[A]=!0)}function bt(A){f[A]!==!1&&(n.disable(A),f[A]=!1)}function vt(A,k){return p[A]!==k?(n.bindFramebuffer(A,k),p[A]=k,i&&(A===36009&&(p[36160]=k),A===36160&&(p[36009]=k)),!0):!1}function et(A,k){let K=_,lt=!1;if(A)if(K=g.get(k),K===void 0&&(K=[],g.set(k,K)),A.isWebGLMultipleRenderTargets){const mt=A.texture;if(K.length!==mt.length||K[0]!==36064){for(let Gt=0,Wt=mt.length;Gt<Wt;Gt++)K[Gt]=36064+Gt;K.length=mt.length,lt=!0}}else K[0]!==36064&&(K[0]=36064,lt=!0);else K[0]!==1029&&(K[0]=1029,lt=!0);lt&&(e.isWebGL2?n.drawBuffers(K):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function ft(A){return m!==A?(n.useProgram(A),m=A,!0):!1}const Ft={[hi]:32774,[qm]:32778,[Xm]:32779};if(i)Ft[ll]=32775,Ft[cl]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(Ft[ll]=A.MIN_EXT,Ft[cl]=A.MAX_EXT)}const ht={[Ym]:0,[$m]:1,[Km]:768,[Xu]:770,[ng]:776,[tg]:774,[Jm]:772,[Zm]:769,[Yu]:771,[eg]:775,[Qm]:773};function Rt(A,k,K,lt,mt,Gt,Wt,fe){if(A===yn){d===!0&&(bt(3042),d=!1);return}if(d===!1&&(O(3042),d=!0),A!==jm){if(A!==b||fe!==y){if((v!==hi||P!==hi)&&(n.blendEquation(32774),v=hi,P=hi),fe)switch(A){case gi:n.blendFuncSeparate(1,771,1,771);break;case rl:n.blendFunc(1,1);break;case ol:n.blendFuncSeparate(0,769,0,1);break;case al:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case gi:n.blendFuncSeparate(770,771,1,771);break;case rl:n.blendFunc(770,1);break;case ol:n.blendFuncSeparate(0,769,0,1);break;case al:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}S=null,T=null,L=null,C=null,b=A,y=fe}return}mt=mt||k,Gt=Gt||K,Wt=Wt||lt,(k!==v||mt!==P)&&(n.blendEquationSeparate(Ft[k],Ft[mt]),v=k,P=mt),(K!==S||lt!==T||Gt!==L||Wt!==C)&&(n.blendFuncSeparate(ht[K],ht[lt],ht[Gt],ht[Wt]),S=K,T=lt,L=Gt,C=Wt),b=A,y=!1}function se(A,k){A.side===rn?bt(2884):O(2884);let K=A.side===be;k&&(K=!K),ue(K),A.blending===gi&&A.transparent===!1?Rt(yn):Rt(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);const lt=A.stencilWrite;l.setTest(lt),lt&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ot(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?O(32926):bt(32926)}function ue(A){E!==A&&(A?n.frontFace(2304):n.frontFace(2305),E=A)}function re(A){A!==Gm?(O(2884),A!==W&&(A===sl?n.cullFace(1029):A===Hm?n.cullFace(1028):n.cullFace(1032))):bt(2884),W=A}function ee(A){A!==X&&(Z&&n.lineWidth(A),X=A)}function Ot(A,k,K){A?(O(32823),(I!==k||D!==K)&&(n.polygonOffset(k,K),I=k,D=K)):bt(32823)}function Yt(A){A?O(3089):bt(3089)}function Me(A){A===void 0&&(A=33984+F-1),$!==A&&(n.activeTexture(A),$=A)}function w(A,k,K){K===void 0&&($===null?K=33984+F-1:K=$);let lt=tt[K];lt===void 0&&(lt={type:void 0,texture:void 0},tt[K]=lt),(lt.type!==A||lt.texture!==k)&&($!==K&&(n.activeTexture(K),$=K),n.bindTexture(A,k||rt[A]),lt.type=A,lt.texture=k)}function x(){const A=tt[$];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ut(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function G(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function dt(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function gt(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ct(A){V.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),V.copy(A))}function pt(A){q.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),q.copy(A))}function Ut(A,k){let K=h.get(k);K===void 0&&(K=new WeakMap,h.set(k,K));let lt=K.get(A);lt===void 0&&(lt=n.getUniformBlockIndex(k,A.name),K.set(A,lt))}function Vt(A,k){const lt=h.get(k).get(A);u.get(k)!==lt&&(n.uniformBlockBinding(k,lt,A.__bindingPointIndex),u.set(k,lt))}function $t(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},$=null,tt={},p={},g=new WeakMap,_=[],m=null,d=!1,b=null,v=null,S=null,T=null,P=null,L=null,C=null,y=!1,E=null,W=null,X=null,I=null,D=null,V.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:O,disable:bt,bindFramebuffer:vt,drawBuffers:et,useProgram:ft,setBlending:Rt,setMaterial:se,setFlipSided:ue,setCullFace:re,setLineWidth:ee,setPolygonOffset:Ot,setScissorTest:Yt,activeTexture:Me,bindTexture:w,unbindTexture:x,compressedTexImage2D:B,compressedTexImage3D:J,texImage2D:gt,texImage3D:xt,updateUBOMapping:Ut,uniformBlockBinding:Vt,texStorage2D:G,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:at,compressedTexSubImage2D:Mt,compressedTexSubImage3D:ut,scissor:ct,viewport:pt,reset:$t}}function Dy(n,t,e,i,s,r,o){const a=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,x){return d?new OffscreenCanvas(w,x):Ki("canvas")}function v(w,x,B,J){let Q=1;if((w.width>J||w.height>J)&&(Q=J/Math.max(w.width,w.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const at=x?Bg:Math.floor,Mt=at(Q*w.width),ut=at(Q*w.height);_===void 0&&(_=b(Mt,ut));const G=B?b(Mt,ut):_;return G.width=Mt,G.height=ut,G.getContext("2d").drawImage(w,0,0,Mt,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Mt+"x"+ut+")."),G}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return Fl(w.width)&&Fl(w.height)}function T(w){return a?!1:w.wrapS!==He||w.wrapT!==He||w.minFilter!==ye&&w.minFilter!==Ne}function P(w,x){return w.generateMipmaps&&x&&w.minFilter!==ye&&w.minFilter!==Ne}function L(w){n.generateMipmap(w)}function C(w,x,B,J,Q=!1){if(a===!1)return x;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let at=x;return x===6403&&(B===5126&&(at=33326),B===5131&&(at=33325),B===5121&&(at=33321)),x===33319&&(B===5126&&(at=33328),B===5131&&(at=33327),B===5121&&(at=33323)),x===6408&&(B===5126&&(at=34836),B===5131&&(at=34842),B===5121&&(at=J===Ht&&Q===!1?35907:32856),B===32819&&(at=32854),B===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function y(w,x,B){return P(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==ye&&w.minFilter!==Ne?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function E(w){return w===ye||w===ul||w===vr?9728:9729}function W(w){const x=w.target;x.removeEventListener("dispose",W),I(x),x.isVideoTexture&&g.delete(x)}function X(w){const x=w.target;x.removeEventListener("dispose",X),F(x)}function I(w){const x=i.get(w);if(x.__webglInit===void 0)return;const B=w.source,J=m.get(B);if(J){const Q=J[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&D(w),Object.keys(J).length===0&&m.delete(B)}i.remove(w)}function D(w){const x=i.get(w);n.deleteTexture(x.__webglTexture);const B=w.source,J=m.get(B);delete J[x.__cacheKey],o.memory.textures--}function F(w){const x=w.texture,B=i.get(w),J=i.get(x);if(J.__webglTexture!==void 0&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(B.__webglFramebuffer[Q]),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,at=x.length;Q<at;Q++){const Mt=i.get(x[Q]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(x[Q])}i.remove(x),i.remove(w)}let Z=0;function Y(){Z=0}function j(){const w=Z;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),Z+=1,w}function $(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function tt(w,x){const B=i.get(w);if(w.isVideoTexture&&Yt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(B,w,x);return}}e.bindTexture(3553,B.__webglTexture,33984+x)}function st(w,x){const B=i.get(w);if(w.version>0&&B.__version!==w.version){bt(B,w,x);return}e.bindTexture(35866,B.__webglTexture,33984+x)}function ot(w,x){const B=i.get(w);if(w.version>0&&B.__version!==w.version){bt(B,w,x);return}e.bindTexture(32879,B.__webglTexture,33984+x)}function V(w,x){const B=i.get(w);if(w.version>0&&B.__version!==w.version){vt(B,w,x);return}e.bindTexture(34067,B.__webglTexture,33984+x)}const q={[mo]:10497,[He]:33071,[go]:33648},it={[ye]:9728,[ul]:9984,[vr]:9986,[Ne]:9729,[_g]:9985,[Xi]:9987};function rt(w,x,B){if(B?(n.texParameteri(w,10242,q[x.wrapS]),n.texParameteri(w,10243,q[x.wrapT]),(w===32879||w===35866)&&n.texParameteri(w,32882,q[x.wrapR]),n.texParameteri(w,10240,it[x.magFilter]),n.texParameteri(w,10241,it[x.minFilter])):(n.texParameteri(w,10242,33071),n.texParameteri(w,10243,33071),(w===32879||w===35866)&&n.texParameteri(w,32882,33071),(x.wrapS!==He||x.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,10240,E(x.magFilter)),n.texParameteri(w,10241,E(x.minFilter)),x.minFilter!==ye&&x.minFilter!==Ne&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const J=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===ye||x.minFilter!==vr&&x.minFilter!==Xi||x.type===Bn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(w,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function O(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",W));const J=x.source;let Q=m.get(J);Q===void 0&&(Q={},m.set(J,Q));const at=$(x);if(at!==w.__cacheKey){Q[at]===void 0&&(Q[at]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[at].usedTimes++;const Mt=Q[w.__cacheKey];Mt!==void 0&&(Q[w.__cacheKey].usedTimes--,Mt.usedTimes===0&&D(x)),w.__cacheKey=at,w.__webglTexture=Q[at].texture}return B}function bt(w,x,B){let J=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=35866),x.isData3DTexture&&(J=32879);const Q=O(w,x),at=x.source;e.bindTexture(J,w.__webglTexture,33984+B);const Mt=i.get(at);if(at.version!==Mt.__version||Q===!0){e.activeTexture(33984+B),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const ut=T(x)&&S(x.image)===!1;let G=v(x.image,ut,!1,u);G=Me(x,G);const dt=S(G)||a,gt=r.convert(x.format,x.encoding);let xt=r.convert(x.type),ct=C(x.internalFormat,gt,xt,x.encoding,x.isVideoTexture);rt(J,x,dt);let pt;const Ut=x.mipmaps,Vt=a&&x.isVideoTexture!==!0,$t=Mt.__version===void 0||Q===!0,A=y(x,G,dt);if(x.isDepthTexture)ct=6402,a?x.type===Bn?ct=36012:x.type===Vn?ct=33190:x.type===_i?ct=35056:ct=33189:x.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===zn&&ct===6402&&x.type!==Zu&&x.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Vn,xt=r.convert(x.type)),x.format===Si&&ct===6402&&(ct=34041,x.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=_i,xt=r.convert(x.type))),$t&&(Vt?e.texStorage2D(3553,1,ct,G.width,G.height):e.texImage2D(3553,0,ct,G.width,G.height,0,gt,xt,null));else if(x.isDataTexture)if(Ut.length>0&&dt){Vt&&$t&&e.texStorage2D(3553,A,ct,Ut[0].width,Ut[0].height);for(let k=0,K=Ut.length;k<K;k++)pt=Ut[k],Vt?e.texSubImage2D(3553,k,0,0,pt.width,pt.height,gt,xt,pt.data):e.texImage2D(3553,k,ct,pt.width,pt.height,0,gt,xt,pt.data);x.generateMipmaps=!1}else Vt?($t&&e.texStorage2D(3553,A,ct,G.width,G.height),e.texSubImage2D(3553,0,0,0,G.width,G.height,gt,xt,G.data)):e.texImage2D(3553,0,ct,G.width,G.height,0,gt,xt,G.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Vt&&$t&&e.texStorage3D(35866,A,ct,Ut[0].width,Ut[0].height,G.depth);for(let k=0,K=Ut.length;k<K;k++)pt=Ut[k],x.format!==We?gt!==null?Vt?e.compressedTexSubImage3D(35866,k,0,0,0,pt.width,pt.height,G.depth,gt,pt.data,0,0):e.compressedTexImage3D(35866,k,ct,pt.width,pt.height,G.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage3D(35866,k,0,0,0,pt.width,pt.height,G.depth,gt,xt,pt.data):e.texImage3D(35866,k,ct,pt.width,pt.height,G.depth,0,gt,xt,pt.data)}else{Vt&&$t&&e.texStorage2D(3553,A,ct,Ut[0].width,Ut[0].height);for(let k=0,K=Ut.length;k<K;k++)pt=Ut[k],x.format!==We?gt!==null?Vt?e.compressedTexSubImage2D(3553,k,0,0,pt.width,pt.height,gt,pt.data):e.compressedTexImage2D(3553,k,ct,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?e.texSubImage2D(3553,k,0,0,pt.width,pt.height,gt,xt,pt.data):e.texImage2D(3553,k,ct,pt.width,pt.height,0,gt,xt,pt.data)}else if(x.isDataArrayTexture)Vt?($t&&e.texStorage3D(35866,A,ct,G.width,G.height,G.depth),e.texSubImage3D(35866,0,0,0,0,G.width,G.height,G.depth,gt,xt,G.data)):e.texImage3D(35866,0,ct,G.width,G.height,G.depth,0,gt,xt,G.data);else if(x.isData3DTexture)Vt?($t&&e.texStorage3D(32879,A,ct,G.width,G.height,G.depth),e.texSubImage3D(32879,0,0,0,0,G.width,G.height,G.depth,gt,xt,G.data)):e.texImage3D(32879,0,ct,G.width,G.height,G.depth,0,gt,xt,G.data);else if(x.isFramebufferTexture){if($t)if(Vt)e.texStorage2D(3553,A,ct,G.width,G.height);else{let k=G.width,K=G.height;for(let lt=0;lt<A;lt++)e.texImage2D(3553,lt,ct,k,K,0,gt,xt,null),k>>=1,K>>=1}}else if(Ut.length>0&&dt){Vt&&$t&&e.texStorage2D(3553,A,ct,Ut[0].width,Ut[0].height);for(let k=0,K=Ut.length;k<K;k++)pt=Ut[k],Vt?e.texSubImage2D(3553,k,0,0,gt,xt,pt):e.texImage2D(3553,k,ct,gt,xt,pt);x.generateMipmaps=!1}else Vt?($t&&e.texStorage2D(3553,A,ct,G.width,G.height),e.texSubImage2D(3553,0,0,0,gt,xt,G)):e.texImage2D(3553,0,ct,gt,xt,G);P(x,dt)&&L(J),Mt.__version=at.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function vt(w,x,B){if(x.image.length!==6)return;const J=O(w,x),Q=x.source;e.bindTexture(34067,w.__webglTexture,33984+B);const at=i.get(Q);if(Q.version!==at.__version||J===!0){e.activeTexture(33984+B),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,ut=x.image[0]&&x.image[0].isDataTexture,G=[];for(let k=0;k<6;k++)!Mt&&!ut?G[k]=v(x.image[k],!1,!0,l):G[k]=ut?x.image[k].image:x.image[k],G[k]=Me(x,G[k]);const dt=G[0],gt=S(dt)||a,xt=r.convert(x.format,x.encoding),ct=r.convert(x.type),pt=C(x.internalFormat,xt,ct,x.encoding),Ut=a&&x.isVideoTexture!==!0,Vt=at.__version===void 0||J===!0;let $t=y(x,dt,gt);rt(34067,x,gt);let A;if(Mt){Ut&&Vt&&e.texStorage2D(34067,$t,pt,dt.width,dt.height);for(let k=0;k<6;k++){A=G[k].mipmaps;for(let K=0;K<A.length;K++){const lt=A[K];x.format!==We?xt!==null?Ut?e.compressedTexSubImage2D(34069+k,K,0,0,lt.width,lt.height,xt,lt.data):e.compressedTexImage2D(34069+k,K,pt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?e.texSubImage2D(34069+k,K,0,0,lt.width,lt.height,xt,ct,lt.data):e.texImage2D(34069+k,K,pt,lt.width,lt.height,0,xt,ct,lt.data)}}}else{A=x.mipmaps,Ut&&Vt&&(A.length>0&&$t++,e.texStorage2D(34067,$t,pt,G[0].width,G[0].height));for(let k=0;k<6;k++)if(ut){Ut?e.texSubImage2D(34069+k,0,0,0,G[k].width,G[k].height,xt,ct,G[k].data):e.texImage2D(34069+k,0,pt,G[k].width,G[k].height,0,xt,ct,G[k].data);for(let K=0;K<A.length;K++){const mt=A[K].image[k].image;Ut?e.texSubImage2D(34069+k,K+1,0,0,mt.width,mt.height,xt,ct,mt.data):e.texImage2D(34069+k,K+1,pt,mt.width,mt.height,0,xt,ct,mt.data)}}else{Ut?e.texSubImage2D(34069+k,0,0,0,xt,ct,G[k]):e.texImage2D(34069+k,0,pt,xt,ct,G[k]);for(let K=0;K<A.length;K++){const lt=A[K];Ut?e.texSubImage2D(34069+k,K+1,0,0,xt,ct,lt.image[k]):e.texImage2D(34069+k,K+1,pt,xt,ct,lt.image[k])}}}P(x,gt)&&L(34067),at.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function et(w,x,B,J,Q){const at=r.convert(B.format,B.encoding),Mt=r.convert(B.type),ut=C(B.internalFormat,at,Mt,B.encoding);i.get(x).__hasExternalTextures||(Q===32879||Q===35866?e.texImage3D(Q,0,ut,x.width,x.height,x.depth,0,at,Mt,null):e.texImage2D(Q,0,ut,x.width,x.height,0,at,Mt,null)),e.bindFramebuffer(36160,w),Ot(x)?f.framebufferTexture2DMultisampleEXT(36160,J,Q,i.get(B).__webglTexture,0,ee(x)):(Q===3553||Q>=34069&&Q<=34074)&&n.framebufferTexture2D(36160,J,Q,i.get(B).__webglTexture,0),e.bindFramebuffer(36160,null)}function ft(w,x,B){if(n.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let J=33189;if(B||Ot(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Bn?J=36012:Q.type===Vn&&(J=33190));const at=ee(x);Ot(x)?f.renderbufferStorageMultisampleEXT(36161,at,J,x.width,x.height):n.renderbufferStorageMultisample(36161,at,J,x.width,x.height)}else n.renderbufferStorage(36161,J,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const J=ee(x);B&&Ot(x)===!1?n.renderbufferStorageMultisample(36161,J,35056,x.width,x.height):Ot(x)?f.renderbufferStorageMultisampleEXT(36161,J,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,w)}else{const J=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<J.length;Q++){const at=J[Q],Mt=r.convert(at.format,at.encoding),ut=r.convert(at.type),G=C(at.internalFormat,Mt,ut,at.encoding),dt=ee(x);B&&Ot(x)===!1?n.renderbufferStorageMultisample(36161,dt,G,x.width,x.height):Ot(x)?f.renderbufferStorageMultisampleEXT(36161,dt,G,x.width,x.height):n.renderbufferStorage(36161,G,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function Ft(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);const J=i.get(x.depthTexture).__webglTexture,Q=ee(x);if(x.depthTexture.format===zn)Ot(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,Q):n.framebufferTexture2D(36160,36096,3553,J,0);else if(x.depthTexture.format===Si)Ot(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,Q):n.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function ht(w){const x=i.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ft(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(36160,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]=n.createRenderbuffer(),ft(x.__webglDepthbuffer[J],w,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ft(x.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function Rt(w,x,B){const J=i.get(w);x!==void 0&&et(J.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&ht(w)}function se(w){const x=w.texture,B=i.get(w),J=i.get(x);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,o.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,at=w.isWebGLMultipleRenderTargets===!0,Mt=S(w)||a;if(Q){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)B.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(B.__webglFramebuffer=n.createFramebuffer(),at)if(s.drawBuffers){const ut=w.texture;for(let G=0,dt=ut.length;G<dt;G++){const gt=i.get(ut[G]);gt.__webglTexture===void 0&&(gt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Ot(w)===!1){const ut=at?x:[x];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let G=0;G<ut.length;G++){const dt=ut[G];B.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(36161,B.__webglColorRenderbuffer[G]);const gt=r.convert(dt.format,dt.encoding),xt=r.convert(dt.type),ct=C(dt.internalFormat,gt,xt,dt.encoding,w.isXRRenderTarget===!0),pt=ee(w);n.renderbufferStorageMultisample(36161,pt,ct,w.width,w.height),n.framebufferRenderbuffer(36160,36064+G,36161,B.__webglColorRenderbuffer[G])}n.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(Q){e.bindTexture(34067,J.__webglTexture),rt(34067,x,Mt);for(let ut=0;ut<6;ut++)et(B.__webglFramebuffer[ut],w,x,36064,34069+ut);P(x,Mt)&&L(34067),e.unbindTexture()}else if(at){const ut=w.texture;for(let G=0,dt=ut.length;G<dt;G++){const gt=ut[G],xt=i.get(gt);e.bindTexture(3553,xt.__webglTexture),rt(3553,gt,Mt),et(B.__webglFramebuffer,w,gt,36064+G,3553),P(gt,Mt)&&L(3553)}e.unbindTexture()}else{let ut=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ut=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,J.__webglTexture),rt(ut,x,Mt),et(B.__webglFramebuffer,w,x,36064,ut),P(x,Mt)&&L(ut),e.unbindTexture()}w.depthBuffer&&ht(w)}function ue(w){const x=S(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let J=0,Q=B.length;J<Q;J++){const at=B[J];if(P(at,x)){const Mt=w.isWebGLCubeRenderTarget?34067:3553,ut=i.get(at).__webglTexture;e.bindTexture(Mt,ut),L(Mt),e.unbindTexture()}}}function re(w){if(a&&w.samples>0&&Ot(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,J=w.height;let Q=16384;const at=[],Mt=w.stencilBuffer?33306:36096,ut=i.get(w),G=w.isWebGLMultipleRenderTargets===!0;if(G)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(36160,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+dt,36161,null),e.bindFramebuffer(36160,ut.__webglFramebuffer),n.framebufferTexture2D(36009,36064+dt,3553,null,0);e.bindFramebuffer(36008,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,ut.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){at.push(36064+dt),w.depthBuffer&&at.push(Mt);const gt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(gt===!1&&(w.depthBuffer&&(Q|=256),w.stencilBuffer&&(Q|=1024)),G&&n.framebufferRenderbuffer(36008,36064,36161,ut.__webglColorRenderbuffer[dt]),gt===!0&&(n.invalidateFramebuffer(36008,[Mt]),n.invalidateFramebuffer(36009,[Mt])),G){const xt=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,xt,0)}n.blitFramebuffer(0,0,B,J,0,0,B,J,Q,9728),p&&n.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),G)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(36160,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+dt,36161,ut.__webglColorRenderbuffer[dt]);const gt=i.get(x[dt]).__webglTexture;e.bindFramebuffer(36160,ut.__webglFramebuffer),n.framebufferTexture2D(36009,36064+dt,3553,gt,0)}e.bindFramebuffer(36009,ut.__webglMultisampledFramebuffer)}}function ee(w){return Math.min(h,w.samples)}function Ot(w){const x=i.get(w);return a&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Yt(w){const x=o.render.frame;g.get(w)!==x&&(g.set(w,x),w.update())}function Me(w,x){const B=w.encoding,J=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===_o||B!==Wn&&(B===Ht?a===!1?t.has("EXT_sRGB")===!0&&J===We?(w.format=_o,w.minFilter=Ne,w.generateMipmaps=!1):x=th.sRGBToLinear(x):(J!==We||Q!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),x}this.allocateTextureUnit=j,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=st,this.setTexture3D=ot,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ot}function Iy(n,t,e){const i=e.isWebGL2;function s(r,o=null){let a;if(r===Hn)return 5121;if(r===Mg)return 32819;if(r===Sg)return 32820;if(r===vg)return 5120;if(r===xg)return 5122;if(r===Zu)return 5123;if(r===yg)return 5124;if(r===Vn)return 5125;if(r===Bn)return 5126;if(r===Yi)return i?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bg)return 6406;if(r===We)return 6408;if(r===wg)return 6409;if(r===Tg)return 6410;if(r===zn)return 6402;if(r===Si)return 34041;if(r===_o)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Eg)return 6403;if(r===Ag)return 36244;if(r===Cg)return 33319;if(r===Pg)return 33320;if(r===Lg)return 36249;if(r===xr||r===yr||r===Mr||r===Sr)if(o===Ht)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===xr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===xr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hl||r===fl||r===dl||r===pl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===hl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Rg)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ml||r===gl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ml)return o===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===gl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===_l||r===vl||r===xl||r===yl||r===Ml||r===Sl||r===bl||r===wl||r===Tl||r===El||r===Al||r===Cl||r===Pl||r===Ll)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===_l)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===vl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ml)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===El)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Al)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pl)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ll)return o===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===br)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===br)return o===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Dg||r===Rl||r===Dl||r===Il)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===br)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Il)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_i?i?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class Uy extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Rs extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Rs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Fy extends we{constructor(t,e,i,s,r,o,a,c,l,u){if(u=u!==void 0?u:zn,u!==zn&&u!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===zn&&(i=Vn),i===void 0&&u===Si&&(i=_i),super(null,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1}}class Oy extends wi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const b=[],v=[],S=new Set,T=new Map,P=new Fe;P.layers.enable(1),P.viewport=new ce;const L=new Fe;L.layers.enable(2),L.viewport=new ce;const C=[P,L],y=new Uy;y.layers.enable(1),y.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=b[V];return q===void 0&&(q=new Xr,b[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=b[V];return q===void 0&&(q=new Xr,b[V]=q),q.getGripSpace()},this.getHand=function(V){let q=b[V];return q===void 0&&(q=new Xr,b[V]=q),q.getHandSpace()};function X(V){const q=v.indexOf(V.inputSource);if(q===-1)return;const it=b[q];it!==void 0&&it.dispatchEvent({type:V.type,data:V.inputSource})}function I(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",D);for(let V=0;V<b.length;V++){const q=v[V];q!==null&&(v[V]=null,b[V].disconnect(q))}E=null,W=null,t.setRenderTarget(m),p=null,f=null,h=null,s=null,d=null,ot.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",I),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:p}),d=new jn(p.framebufferWidth,p.framebufferHeight,{format:We,type:Hn,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let q=null,it=null,rt=null;_.depth&&(rt=_.stencil?35056:33190,q=_.stencil?Si:zn,it=_.stencil?_i:Vn);const O={colorFormat:32856,depthFormat:rt,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(O),s.updateRenderState({layers:[f]}),d=new jn(f.textureWidth,f.textureHeight,{format:We,type:Hn,depthTexture:new Fy(f.textureWidth,f.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const bt=t.properties.get(d);bt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function D(V){for(let q=0;q<V.removed.length;q++){const it=V.removed[q],rt=v.indexOf(it);rt>=0&&(v[rt]=null,b[rt].disconnect(it))}for(let q=0;q<V.added.length;q++){const it=V.added[q];let rt=v.indexOf(it);if(rt===-1){for(let bt=0;bt<b.length;bt++)if(bt>=v.length){v.push(it),rt=bt;break}else if(v[bt]===null){v[bt]=it,rt=bt;break}if(rt===-1)break}const O=b[rt];O&&O.connect(it)}}const F=new N,Z=new N;function Y(V,q,it){F.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(it.matrixWorld);const rt=F.distanceTo(Z),O=q.projectionMatrix.elements,bt=it.projectionMatrix.elements,vt=O[14]/(O[10]-1),et=O[14]/(O[10]+1),ft=(O[9]+1)/O[5],Ft=(O[9]-1)/O[5],ht=(O[8]-1)/O[0],Rt=(bt[8]+1)/bt[0],se=vt*ht,ue=vt*Rt,re=rt/(-ht+Rt),ee=re*-ht;q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ee),V.translateZ(re),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ot=vt+re,Yt=et+re,Me=se-ee,w=ue+(rt-ee),x=ft*et/Yt*Ot,B=Ft*et/Yt*Ot;V.projectionMatrix.makePerspective(Me,w,x,B,Ot,Yt),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;y.near=L.near=P.near=V.near,y.far=L.far=P.far=V.far,(E!==y.near||W!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,W=y.far);const q=V.parent,it=y.cameras;j(y,q);for(let rt=0;rt<it.length;rt++)j(it[rt],q);it.length===2?Y(y,P,L):y.projectionMatrix.copy(P.projectionMatrix),$(V,y,q)};function $(V,q,it){it===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(it.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0);const rt=V.children;for(let O=0,bt=rt.length;O<bt;O++)rt[O].updateMatrixWorld(!0);V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vo*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return S};let tt=null;function st(V,q){if(u=q.getViewerPose(l||o),g=q,u!==null){const it=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let rt=!1;it.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let O=0;O<it.length;O++){const bt=it[O];let vt=null;if(p!==null)vt=p.getViewport(bt);else{const ft=h.getViewSubImage(f,bt);vt=ft.viewport,O===0&&(t.setRenderTargetTextures(d,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(d))}let et=C[O];et===void 0&&(et=new Fe,et.layers.enable(O),et.viewport=new ce,C[O]=et),et.matrix.fromArray(bt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(bt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(vt.x,vt.y,vt.width,vt.height),O===0&&(y.matrix.copy(et.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(et)}}for(let it=0;it<b.length;it++){const rt=v[it],O=b[it];rt!==null&&O!==void 0&&O.update(rt,q,l||o)}if(tt&&tt(V,q),q.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:q.detectedPlanes});let it=null;for(const rt of S)q.detectedPlanes.has(rt)||(it===null&&(it=[]),it.push(rt));if(it!==null)for(const rt of it)S.delete(rt),T.delete(rt),i.dispatchEvent({type:"planeremoved",data:rt});for(const rt of q.detectedPlanes)if(!S.has(rt))S.add(rt),T.set(rt,q.lastChangedTime),i.dispatchEvent({type:"planeadded",data:rt});else{const O=T.get(rt);rt.lastChangedTime>O&&(T.set(rt,rt.lastChangedTime),i.dispatchEvent({type:"planechanged",data:rt}))}}g=null}const ot=new fh;ot.setAnimationLoop(st),this.setAnimationLoop=function(V){tt=V},this.dispose=function(){}}}function Vy(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,ch(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,v,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,b,v):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===be&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===be&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,b,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===be&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function By(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(35375):0;function c(b,v){const S=v.program;i.uniformBlockBinding(b,S)}function l(b,v){let S=s[b.id];S===void 0&&(g(b),S=u(b),s[b.id]=S,b.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(b,T);const P=t.render.frame;r[b.id]!==P&&(f(b),r[b.id]=P)}function u(b){const v=h();b.__bindingPointIndex=v;const S=n.createBuffer(),T=b.__size,P=b.usage;return n.bindBuffer(35345,S),n.bufferData(35345,T,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,S),S}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=s[b.id],S=b.uniforms,T=b.__cache;n.bindBuffer(35345,v);for(let P=0,L=S.length;P<L;P++){const C=S[P];if(p(C,P,T)===!0){const y=C.__offset,E=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let X=0;X<E.length;X++){const I=E[X],D=_(I);typeof I=="number"?(C.__data[0]=I,n.bufferSubData(35345,y+W,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,W),W+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,y,C.__data)}}n.bindBuffer(35345,null)}function p(b,v,S){const T=b.value;if(S[v]===void 0){if(typeof T=="number")S[v]=T;else{const P=Array.isArray(T)?T:[T],L=[];for(let C=0;C<P.length;C++)L.push(P[C].clone());S[v]=L}return!0}else if(typeof T=="number"){if(S[v]!==T)return S[v]=T,!0}else{const P=Array.isArray(S[v])?S[v]:[S[v]],L=Array.isArray(T)?T:[T];for(let C=0;C<P.length;C++){const y=P[C];if(y.equals(L[C])===!1)return y.copy(L[C]),!0}}return!1}function g(b){const v=b.uniforms;let S=0;const T=16;let P=0;for(let L=0,C=v.length;L<C;L++){const y=v[L],E={boundary:0,storage:0},W=Array.isArray(y.value)?y.value:[y.value];for(let X=0,I=W.length;X<I;X++){const D=W[X],F=_(D);E.boundary+=F.boundary,E.storage+=F.storage}if(y.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,L>0){P=S%T;const X=T-P;P!==0&&X-E.boundary<0&&(S+=T-P,y.__offset=S)}S+=E.storage}return P=S%T,P>0&&(S+=T-P),b.__size=S,b.__cache={},this}function _(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const b in s)n.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}function zy(){const n=Ki("canvas");return n.style.display="block",n}class vh{constructor(t={}){const{canvas:e=zy(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let p=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Wn,this.useLegacyLights=!0,this.toneMapping=cn,this.toneMappingExposure=1;const d=this;let b=!1,v=0,S=0,T=null,P=-1,L=null;const C=new ce,y=new ce;let E=null,W=e.width,X=e.height,I=1,D=null,F=null;const Z=new ce(0,0,W,X),Y=new ce(0,0,W,X);let j=!1;const $=new jo;let tt=!1,st=!1,ot=null;const V=new te,q=new N,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return T===null?I:1}let O=i;function bt(M,U){for(let z=0;z<M.length;z++){const R=M[z],H=e.getContext(R,U);if(H!==null)return H}return null}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wo}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",Vt,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&U.shift(),O=bt(U,M),O===null)throw bt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let vt,et,ft,Ft,ht,Rt,se,ue,re,ee,Ot,Yt,Me,w,x,B,J,Q,at,Mt,ut,G,dt,gt;function xt(){vt=new Z0(O),et=new j0(O,vt,t),vt.init(et),G=new Iy(O,vt,et),ft=new Ry(O,vt,et),Ft=new tx,ht=new _y,Rt=new Dy(O,vt,ft,ht,et,G,Ft),se=new X0(d),ue=new K0(d),re=new f_(O,et),dt=new H0(O,vt,re,et),ee=new J0(O,re,Ft,dt),Ot=new sx(O,ee,re,Ft),at=new ix(O,et,Rt),B=new q0(ht),Yt=new gy(d,se,ue,vt,et,dt,B),Me=new Vy(d,ht),w=new xy,x=new Ty(vt,et),Q=new G0(d,se,ue,ft,Ot,f,c),J=new Ly(d,Ot,et),gt=new By(O,Ft,et,ft),Mt=new W0(O,vt,Ft,et),ut=new Q0(O,vt,Ft,et),Ft.programs=Yt.programs,d.capabilities=et,d.extensions=vt,d.properties=ht,d.renderLists=w,d.shadowMap=J,d.state=ft,d.info=Ft}xt();const ct=new Oy(d,O);this.xr=ct,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=vt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=vt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(W,X,!1))},this.getSize=function(M){return M.set(W,X)},this.setSize=function(M,U,z=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,X=U,e.width=Math.floor(M*I),e.height=Math.floor(U*I),z===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(W*I,X*I).floor()},this.setDrawingBufferSize=function(M,U,z){W=M,X=U,I=z,e.width=Math.floor(M*z),e.height=Math.floor(U*z),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,U,z,R){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,U,z,R),ft.viewport(C.copy(Z).multiplyScalar(I).floor())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,U,z,R){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,U,z,R),ft.scissor(y.copy(Y).multiplyScalar(I).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(M){ft.setScissorTest(j=M)},this.setOpaqueSort=function(M){D=M},this.setTransparentSort=function(M){F=M},this.getClearColor=function(M){return M.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(M=!0,U=!0,z=!0){let R=0;M&&(R|=16384),U&&(R|=256),z&&(R|=1024),O.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",Vt,!1),w.dispose(),x.dispose(),ht.dispose(),se.dispose(),ue.dispose(),Ot.dispose(),dt.dispose(),gt.dispose(),Yt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",mt),ct.removeEventListener("sessionend",Gt),ot&&(ot.dispose(),ot=null),Wt.stop()};function pt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const M=Ft.autoReset,U=J.enabled,z=J.autoUpdate,R=J.needsUpdate,H=J.type;xt(),Ft.autoReset=M,J.enabled=U,J.autoUpdate=z,J.needsUpdate=R,J.type=H}function Vt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function $t(M){const U=M.target;U.removeEventListener("dispose",$t),A(U)}function A(M){k(M),ht.remove(M)}function k(M){const U=ht.get(M).programs;U!==void 0&&(U.forEach(function(z){Yt.releaseProgram(z)}),M.isShaderMaterial&&Yt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,z,R,H,_t){U===null&&(U=it);const St=H.isMesh&&H.matrixWorld.determinant()<0,wt=yh(M,U,z,R,H);ft.setMaterial(R,St);let At=z.index,Pt=1;R.wireframe===!0&&(At=ee.getWireframeAttribute(z),Pt=2);const Lt=z.drawRange,Dt=z.attributes.position;let Bt=Lt.start*Pt,ge=(Lt.start+Lt.count)*Pt;_t!==null&&(Bt=Math.max(Bt,_t.start*Pt),ge=Math.min(ge,(_t.start+_t.count)*Pt)),At!==null?(Bt=Math.max(Bt,0),ge=Math.min(ge,At.count)):Dt!=null&&(Bt=Math.max(Bt,0),ge=Math.min(ge,Dt.count));const Ve=ge-Bt;if(Ve<0||Ve===1/0)return;dt.setup(H,R,wt,z,At);let Tn,Zt=Mt;if(At!==null&&(Tn=re.get(At),Zt=ut,Zt.setIndex(Tn)),H.isMesh)R.wireframe===!0?(ft.setLineWidth(R.wireframeLinewidth*rt()),Zt.setMode(1)):Zt.setMode(4);else if(H.isLine){let Nt=R.linewidth;Nt===void 0&&(Nt=1),ft.setLineWidth(Nt*rt()),H.isLineSegments?Zt.setMode(1):H.isLineLoop?Zt.setMode(2):Zt.setMode(3)}else H.isPoints?Zt.setMode(0):H.isSprite&&Zt.setMode(4);if(H.isInstancedMesh)Zt.renderInstances(Bt,Ve,H.count);else if(z.isInstancedBufferGeometry){const Nt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,nr=Math.min(z.instanceCount,Nt);Zt.renderInstances(Bt,Ve,nr)}else Zt.render(Bt,Ve)},this.compile=function(M,U){function z(R,H,_t){R.transparent===!0&&R.side===rn&&R.forceSinglePass===!1?(R.side=be,R.needsUpdate=!0,os(R,H,_t),R.side=bn,R.needsUpdate=!0,os(R,H,_t),R.side=rn):os(R,H,_t)}g=x.get(M),g.init(),m.push(g),M.traverseVisible(function(R){R.isLight&&R.layers.test(U.layers)&&(g.pushLight(R),R.castShadow&&g.pushShadow(R))}),g.setupLights(d.useLegacyLights),M.traverse(function(R){const H=R.material;if(H)if(Array.isArray(H))for(let _t=0;_t<H.length;_t++){const St=H[_t];z(St,M,R)}else z(H,M,R)}),m.pop(),g=null};let K=null;function lt(M){K&&K(M)}function mt(){Wt.stop()}function Gt(){Wt.start()}const Wt=new fh;Wt.setAnimationLoop(lt),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(M){K=M,ct.setAnimationLoop(M),M===null?Wt.stop():Wt.start()},ct.addEventListener("sessionstart",mt),ct.addEventListener("sessionend",Gt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(U),U=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(d,M,U,T),g=x.get(M,m.length),g.init(),m.push(g),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(V),st=this.localClippingEnabled,tt=B.init(this.clippingPlanes,st),p=w.get(M,_.length),p.init(),_.push(p),fe(M,U,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(D,F),tt===!0&&B.beginShadows();const z=g.state.shadowsArray;if(J.render(z,M,U),tt===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(p,M),g.setupLights(d.useLegacyLights),U.isArrayCamera){const R=U.cameras;for(let H=0,_t=R.length;H<_t;H++){const St=R[H];un(p,M,St,St.viewport)}}else un(p,M,U);T!==null&&(Rt.updateMultisampleRenderTarget(T),Rt.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(d,M,U),dt.resetDefaultState(),P=-1,L=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function fe(M,U,z,R){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)g.pushLight(M),M.castShadow&&g.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){R&&q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);const St=Ot.update(M),wt=M.material;wt.visible&&p.push(M,St,wt,z,q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ft.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ft.render.frame),!M.frustumCulled||$.intersectsObject(M))){R&&q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);const St=Ot.update(M),wt=M.material;if(Array.isArray(wt)){const At=St.groups;for(let Pt=0,Lt=At.length;Pt<Lt;Pt++){const Dt=At[Pt],Bt=wt[Dt.materialIndex];Bt&&Bt.visible&&p.push(M,St,Bt,z,q.z,Dt)}}else wt.visible&&p.push(M,St,wt,z,q.z,null)}}const _t=M.children;for(let St=0,wt=_t.length;St<wt;St++)fe(_t[St],U,z,R)}function un(M,U,z,R){const H=M.opaque,_t=M.transmissive,St=M.transparent;g.setupLightsView(z),tt===!0&&B.setGlobalState(d.clippingPlanes,z),_t.length>0&&Kt(H,_t,U,z),R&&ft.viewport(C.copy(R)),H.length>0&&De(H,U,z),_t.length>0&&De(_t,U,z),St.length>0&&De(St,U,z),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function Kt(M,U,z,R){if(ot===null){const wt=et.isWebGL2;ot=new jn(1024,1024,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?Yi:Hn,minFilter:Xi,samples:wt&&a===!0?4:0})}const H=d.getRenderTarget();d.setRenderTarget(ot),d.clear();const _t=d.toneMapping;d.toneMapping=cn,De(M,z,R),Rt.updateMultisampleRenderTarget(ot),Rt.updateRenderTargetMipmap(ot);let St=!1;for(let wt=0,At=U.length;wt<At;wt++){const Pt=U[wt],Lt=Pt.object,Dt=Pt.geometry,Bt=Pt.material,ge=Pt.group;if(Bt.side===rn&&Lt.layers.test(R.layers)){const Ve=Bt.side;Bt.side=be,Bt.needsUpdate=!0,je(Lt,z,R,Dt,Bt,ge),Bt.side=Ve,Bt.needsUpdate=!0,St=!0}}St===!0&&(Rt.updateMultisampleRenderTarget(ot),Rt.updateRenderTargetMipmap(ot)),d.setRenderTarget(H),d.toneMapping=_t}function De(M,U,z){const R=U.isScene===!0?U.overrideMaterial:null;for(let H=0,_t=M.length;H<_t;H++){const St=M[H],wt=St.object,At=St.geometry,Pt=R===null?St.material:R,Lt=St.group;wt.layers.test(z.layers)&&je(wt,U,z,At,Pt,Lt)}}function je(M,U,z,R,H,_t){M.onBeforeRender(d,U,z,R,H,_t),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(d,U,z,R,M,_t),H.transparent===!0&&H.side===rn&&H.forceSinglePass===!1?(H.side=be,H.needsUpdate=!0,d.renderBufferDirect(z,U,R,H,M,_t),H.side=bn,H.needsUpdate=!0,d.renderBufferDirect(z,U,R,H,M,_t),H.side=rn):d.renderBufferDirect(z,U,R,H,M,_t),M.onAfterRender(d,U,z,R,H,_t)}function os(M,U,z){U.isScene!==!0&&(U=it);const R=ht.get(M),H=g.state.lights,_t=g.state.shadowsArray,St=H.state.version,wt=Yt.getParameters(M,H.state,_t,U,z),At=Yt.getProgramCacheKey(wt);let Pt=R.programs;R.environment=M.isMeshStandardMaterial?U.environment:null,R.fog=U.fog,R.envMap=(M.isMeshStandardMaterial?ue:se).get(M.envMap||R.environment),Pt===void 0&&(M.addEventListener("dispose",$t),Pt=new Map,R.programs=Pt);let Lt=Pt.get(At);if(Lt!==void 0){if(R.currentProgram===Lt&&R.lightsStateVersion===St)return Yo(M,wt),Lt}else wt.uniforms=Yt.getUniforms(M),M.onBuild(z,wt,d),M.onBeforeCompile(wt,d),Lt=Yt.acquireProgram(wt,At),Pt.set(At,Lt),R.uniforms=wt.uniforms;const Dt=R.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Dt.clippingPlanes=B.uniform),Yo(M,wt),R.needsLights=Sh(M),R.lightsStateVersion=St,R.needsLights&&(Dt.ambientLightColor.value=H.state.ambient,Dt.lightProbe.value=H.state.probe,Dt.directionalLights.value=H.state.directional,Dt.directionalLightShadows.value=H.state.directionalShadow,Dt.spotLights.value=H.state.spot,Dt.spotLightShadows.value=H.state.spotShadow,Dt.rectAreaLights.value=H.state.rectArea,Dt.ltc_1.value=H.state.rectAreaLTC1,Dt.ltc_2.value=H.state.rectAreaLTC2,Dt.pointLights.value=H.state.point,Dt.pointLightShadows.value=H.state.pointShadow,Dt.hemisphereLights.value=H.state.hemi,Dt.directionalShadowMap.value=H.state.directionalShadowMap,Dt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Dt.spotShadowMap.value=H.state.spotShadowMap,Dt.spotLightMatrix.value=H.state.spotLightMatrix,Dt.spotLightMap.value=H.state.spotLightMap,Dt.pointShadowMap.value=H.state.pointShadowMap,Dt.pointShadowMatrix.value=H.state.pointShadowMatrix);const Bt=Lt.getUniforms(),ge=Ns.seqWithValue(Bt.seq,Dt);return R.currentProgram=Lt,R.uniformsList=ge,Lt}function Yo(M,U){const z=ht.get(M);z.outputEncoding=U.outputEncoding,z.instancing=U.instancing,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function yh(M,U,z,R,H){U.isScene!==!0&&(U=it),Rt.resetTextureUnits();const _t=U.fog,St=R.isMeshStandardMaterial?U.environment:null,wt=T===null?d.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:Wn,At=(R.isMeshStandardMaterial?ue:se).get(R.envMap||St),Pt=R.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Lt=!!R.normalMap&&!!z.attributes.tangent,Dt=!!z.morphAttributes.position,Bt=!!z.morphAttributes.normal,ge=!!z.morphAttributes.color,Ve=R.toneMapped?d.toneMapping:cn,Tn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Zt=Tn!==void 0?Tn.length:0,Nt=ht.get(R),nr=g.state.lights;if(tt===!0&&(st===!0||M!==L)){const Ee=M===L&&R.id===P;B.setState(R,M,Ee)}let oe=!1;R.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==nr.state.version||Nt.outputEncoding!==wt||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||Nt.envMap!==At||R.fog===!0&&Nt.fog!==_t||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==B.numPlanes||Nt.numIntersection!==B.numIntersection)||Nt.vertexAlphas!==Pt||Nt.vertexTangents!==Lt||Nt.morphTargets!==Dt||Nt.morphNormals!==Bt||Nt.morphColors!==ge||Nt.toneMapping!==Ve||et.isWebGL2===!0&&Nt.morphTargetsCount!==Zt)&&(oe=!0):(oe=!0,Nt.__version=R.version);let En=Nt.currentProgram;oe===!0&&(En=os(R,U,H));let $o=!1,Ei=!1,ir=!1;const _e=En.getUniforms(),An=Nt.uniforms;if(ft.useProgram(En.program)&&($o=!0,Ei=!0,ir=!0),R.id!==P&&(P=R.id,Ei=!0),$o||L!==M){if(_e.setValue(O,"projectionMatrix",M.projectionMatrix),et.logarithmicDepthBuffer&&_e.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),L!==M&&(L=M,Ei=!0,ir=!0),R.isShaderMaterial||R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshStandardMaterial||R.envMap){const Ee=_e.map.cameraPosition;Ee!==void 0&&Ee.setValue(O,q.setFromMatrixPosition(M.matrixWorld))}(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&_e.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial||R.isShadowMaterial||H.isSkinnedMesh)&&_e.setValue(O,"viewMatrix",M.matrixWorldInverse)}if(H.isSkinnedMesh){_e.setOptional(O,H,"bindMatrix"),_e.setOptional(O,H,"bindMatrixInverse");const Ee=H.skeleton;Ee&&(et.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),_e.setValue(O,"boneTexture",Ee.boneTexture,Rt),_e.setValue(O,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sr=z.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0&&et.isWebGL2===!0)&&at.update(H,z,En),(Ei||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,_e.setValue(O,"receiveShadow",H.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(An.envMap.value=At,An.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),Ei&&(_e.setValue(O,"toneMappingExposure",d.toneMappingExposure),Nt.needsLights&&Mh(An,ir),_t&&R.fog===!0&&Me.refreshFogUniforms(An,_t),Me.refreshMaterialUniforms(An,R,I,X,ot),Ns.upload(O,Nt.uniformsList,An,Rt)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Ns.upload(O,Nt.uniformsList,An,Rt),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&_e.setValue(O,"center",H.center),_e.setValue(O,"modelViewMatrix",H.modelViewMatrix),_e.setValue(O,"normalMatrix",H.normalMatrix),_e.setValue(O,"modelMatrix",H.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){const Ee=R.uniformsGroups;for(let rr=0,bh=Ee.length;rr<bh;rr++)if(et.isWebGL2){const Ko=Ee[rr];gt.update(Ko,En),gt.bind(Ko,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Mh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Sh(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,U,z){ht.get(M.texture).__webglTexture=U,ht.get(M.depthTexture).__webglTexture=z;const R=ht.get(M);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=z===void 0,R.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){const z=ht.get(M);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,z=0){T=M,v=U,S=z;let R=!0,H=null,_t=!1,St=!1;if(M){const At=ht.get(M);At.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(36160,null),R=!1):At.__webglFramebuffer===void 0?Rt.setupRenderTarget(M):At.__hasExternalTextures&&Rt.rebindTextures(M,ht.get(M.texture).__webglTexture,ht.get(M.depthTexture).__webglTexture);const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(St=!0);const Lt=ht.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(H=Lt[U],_t=!0):et.isWebGL2&&M.samples>0&&Rt.useMultisampledRTT(M)===!1?H=ht.get(M).__webglMultisampledFramebuffer:H=Lt,C.copy(M.viewport),y.copy(M.scissor),E=M.scissorTest}else C.copy(Z).multiplyScalar(I).floor(),y.copy(Y).multiplyScalar(I).floor(),E=j;if(ft.bindFramebuffer(36160,H)&&et.drawBuffers&&R&&ft.drawBuffers(M,H),ft.viewport(C),ft.scissor(y),ft.setScissorTest(E),_t){const At=ht.get(M.texture);O.framebufferTexture2D(36160,36064,34069+U,At.__webglTexture,z)}else if(St){const At=ht.get(M.texture),Pt=U||0;O.framebufferTextureLayer(36160,36064,At.__webglTexture,z||0,Pt)}P=-1},this.readRenderTargetPixels=function(M,U,z,R,H,_t,St){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=ht.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){ft.bindFramebuffer(36160,wt);try{const At=M.texture,Pt=At.format,Lt=At.type;if(Pt!==We&&G.convert(Pt)!==O.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Dt=Lt===Yi&&(vt.has("EXT_color_buffer_half_float")||et.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Lt!==Hn&&G.convert(Lt)!==O.getParameter(35738)&&!(Lt===Bn&&(et.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Dt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-R&&z>=0&&z<=M.height-H&&O.readPixels(U,z,R,H,G.convert(Pt),G.convert(Lt),_t)}finally{const At=T!==null?ht.get(T).__webglFramebuffer:null;ft.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(M,U,z=0){const R=Math.pow(2,-z),H=Math.floor(U.image.width*R),_t=Math.floor(U.image.height*R);Rt.setTexture2D(U,0),O.copyTexSubImage2D(3553,z,0,0,M.x,M.y,H,_t),ft.unbindTexture()},this.copyTextureToTexture=function(M,U,z,R=0){const H=U.image.width,_t=U.image.height,St=G.convert(z.format),wt=G.convert(z.type);Rt.setTexture2D(z,0),O.pixelStorei(37440,z.flipY),O.pixelStorei(37441,z.premultiplyAlpha),O.pixelStorei(3317,z.unpackAlignment),U.isDataTexture?O.texSubImage2D(3553,R,M.x,M.y,H,_t,St,wt,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(3553,R,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,St,U.mipmaps[0].data):O.texSubImage2D(3553,R,M.x,M.y,St,wt,U.image),R===0&&z.generateMipmaps&&O.generateMipmap(3553),ft.unbindTexture()},this.copyTextureToTexture3D=function(M,U,z,R,H=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _t=M.max.x-M.min.x+1,St=M.max.y-M.min.y+1,wt=M.max.z-M.min.z+1,At=G.convert(R.format),Pt=G.convert(R.type);let Lt;if(R.isData3DTexture)Rt.setTexture3D(R,0),Lt=32879;else if(R.isDataArrayTexture)Rt.setTexture2DArray(R,0),Lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(37440,R.flipY),O.pixelStorei(37441,R.premultiplyAlpha),O.pixelStorei(3317,R.unpackAlignment);const Dt=O.getParameter(3314),Bt=O.getParameter(32878),ge=O.getParameter(3316),Ve=O.getParameter(3315),Tn=O.getParameter(32877),Zt=z.isCompressedTexture?z.mipmaps[0]:z.image;O.pixelStorei(3314,Zt.width),O.pixelStorei(32878,Zt.height),O.pixelStorei(3316,M.min.x),O.pixelStorei(3315,M.min.y),O.pixelStorei(32877,M.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(Lt,H,U.x,U.y,U.z,_t,St,wt,At,Pt,Zt.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Lt,H,U.x,U.y,U.z,_t,St,wt,At,Zt.data)):O.texSubImage3D(Lt,H,U.x,U.y,U.z,_t,St,wt,At,Pt,Zt),O.pixelStorei(3314,Dt),O.pixelStorei(32878,Bt),O.pixelStorei(3316,ge),O.pixelStorei(3315,Ve),O.pixelStorei(32877,Tn),H===0&&R.generateMipmaps&&O.generateMipmap(Lt),ft.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Rt.setTextureCube(M,0):M.isData3DTexture?Rt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Rt.setTexture2DArray(M,0):Rt.setTexture2D(M,0),ft.unbindTexture()},this.resetState=function(){v=0,S=0,T=null,ft.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class ky extends vh{}ky.prototype.isWebGL1Renderer=!0;class Gy extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class yo extends ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xc=new te,Mo=new ih,Ds=new Qs,Is=new N;class yc extends he{constructor(t=new Ze,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(s),Ds.radius+=r,t.ray.intersectsSphere(Ds)===!1)return;xc.copy(s).invert(),Mo.copy(t.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=l.getX(g);Is.fromBufferAttribute(h,m),Mc(Is,m,c,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)Is.fromBufferAttribute(h,g),Mc(Is,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mc(n,t,e,i,s,r,o){const a=Mo.distanceSqToPoint(n);if(a<e){const c=new N;Mo.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}const Sc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Hy{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Wy=new Hy;class xh{constructor(t){this.manager=t!==void 0?t:Wy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class jy extends xh{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Sc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ki("img");function c(){u(),Sc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class qy extends xh{constructor(t){super(t)}load(t,e,i,s){const r=new we,o=new jy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Xy extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Yr=new te,bc=new N,wc=new N;class Yy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jo,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),wc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wc),e.updateMatrixWorld(),Yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $y extends Yy{constructor(){super(new dh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ky extends Xy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new $y}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);function Tc(n){const t=new Float32Array(n*3);let e=n;for(;e;)t[e]=(Math.random()-.5)*10,e-=1;return t}function Zy(){const n=Et.useRef(null);return Et.useEffect(()=>{if(!n.current)return;let[t,e]=[0,0];const i=new vh({canvas:n.current}),s=new qy,r=new Gy;i.setClearColor(new zt("#1d2c33"));const o=new Ky(16777215,1);o.position.set(-1,2,4),r.add(o);const a=new Fe(75,2,1.5,5);a.position.z=2;const c=[new Ze,new Ze];c[0].setAttribute("position",new Oe(Tc(450),3)),c[1].setAttribute("position",new Oe(Tc(1500),3));const l=[new yo({size:.075,map:s.load("assets/images/stars/star1.png"),transparent:!0}),new yo({size:.1,map:s.load("assets/images/stars/star2.png"),transparent:!0})],u=new yc(c[0],l[0]),h=new yc(c[1],l[1]);r.add(u),r.add(h);function f(){const g=i.domElement,_=g.clientWidth,m=g.clientHeight;(g.width!==_||g.height!==m)&&(i.setSize(_,m,!1),a.aspect=g.clientWidth/g.clientHeight,a.updateProjectionMatrix());const[b,v]=[t*1e-4,e*-1e-4];u.position.x=b,u.position.y=v,h.position.x=b,h.position.y=v,i.render(r,a),requestAnimationFrame(f)}requestAnimationFrame(f);const p=g=>{[t,e]=[g.clientX,g.clientY]};return document.addEventListener("mousemove",p),()=>{i.dispose(),r.remove(u),r.remove(h),c.forEach(g=>g.dispose()),l.forEach(g=>{var _;g.dispose(),(_=g.map)==null||_.dispose()}),document.removeEventListener("mousemove",p)}},[]),Tt("canvas",{ref:n,className:"fixed w-full h-full"})}function Jy({logo:n,name:t}){return jt("div",{className:"inline-flex flex-col items-center gap-2",children:[Tt("img",{src:n,alt:`${t} logo`,className:"w-[50px] h-[50px]"}),Tt("p",{className:"text-sm",children:t})]})}function Qy(){return jt(Ho,{headingText:"About",headingId:"about",className:"flex flex-col justify-center items-center",children:[Tt("h1",{className:"p-1 mb-4 text-2xl max-sm:text-xl font-bold",children:"Skills"}),Tt("div",{className:"flex justify-center flex-wrap gap-6 max-w-[928px]",children:[{name:"JavaScript",logo:"assets/images/logos/javascript-logo.svg"},{name:"Typescript",logo:"assets/images/logos/typescript-logo.svg"},{name:"React",logo:"assets/images/logos/react-logo.svg"},{name:"NextJS",logo:"assets/images/logos/nextjs-logo.svg"},{name:"TailwindCSS",logo:"assets/images/logos/tailwindcss-logo.svg"},{name:"Git",logo:"assets/images/logos/git-logo.svg"},{name:"Vite",logo:"assets/images/logos/vite-logo.svg"},{name:"Webpack",logo:"assets/images/logos/webpack-logo.svg"},{name:"NPM",logo:"assets/images/logos/npm-logo.svg"},{name:"Jest",logo:"assets/images/logos/jest-logo.svg"},{name:"Firebase",logo:"assets/images/logos/firebase-logo.svg"}].map(t=>Tt(Jy,{name:t.name,logo:t.logo},t.name))})]})}function iM(){const n=Th();return n.exports.documentProps={title:"Sharkri's Portfolio"},jt("div",{className:"text-white",children:[Tt(Zy,{}),jt("div",{className:"absolute w-full h-full flex flex-col justify-between",children:[Tt(Um,{}),jt("div",{className:"grow flex flex-col gap-8 px-10 max-w-[1440px] mx-auto pt-[92px]",children:[Tt(Nm,{}),Tt(Qy,{}),Tt(km,{}),Tt(Im,{})]})]})]})}export{iM as Page};
