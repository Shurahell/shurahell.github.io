import{a as e}from"./rolldown-runtime-B0Z9INg1.js";import{a as t,i as n,n as r,r as i,t as a}from"./react-D5pFCoOC.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./mui-CdoEWMwV.js";import{n as f,r as p,t as m}from"./i18n-BP8umvRC.js";import{A as h,B as g,C as _,D as v,E as y,F as b,I as x,L as S,M as C,N as w,O as T,P as E,R as D,S as O,T as k,V as A,_ as j,a as M,b as N,c as P,d as F,f as I,g as L,h as R,i as z,j as B,k as V,l as H,m as U,n as W,o as ee,p as G,r as K,s as te,t as ne,u as q,v as J,w as re,x as ie,y as Y,z as ae}from"./vendor-ElkmqGjr.js";import{a as oe,c as se,i as ce,l as le,n as ue,o as de,r as fe,s as pe,t as me,u as X}from"./landing-3d-DwOsMVdW.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var he=r(),Z=a(),Q=e(t(),1),$=n(),ge=()=>{let e=(0,Z.c)(3),t=(0,Q.useRef)(null),n,r;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=()=>{let e=globalThis.matchMedia(`(pointer: fine)`),n=globalThis.matchMedia(`(prefers-reduced-motion: reduce)`),r=e.matches&&!n.matches,i=0,a=0,o=0,s=e=>{a=e.clientX,o=e.clientY,cancelAnimationFrame(i),i=requestAnimationFrame(()=>{t.current?.style.setProperty(`transform`,`translate3d(${a}px, ${o}px, 0)`)})};return r&&globalThis.addEventListener(`mousemove`,s),()=>{cancelAnimationFrame(i),r&&globalThis.removeEventListener(`mousemove`,s)}},r=[],e[0]=n,e[1]=r):(n=e[0],r=e[1]),(0,Q.useEffect)(n,r);let i;return e[2]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,$.jsx)(`div`,{ref:t,className:`landing-cursor`,"aria-hidden":`true`}),e[2]=i):i=e[2],i},_e={sm:{chip:28,row:26,font:12},md:{chip:32,row:30,font:13},lg:{chip:44,row:40,font:14}},ve=4,ye=1,be=6,xe=[`One`,`Two`,`Three`],Se=e=>typeof e==`string`?{value:e,label:e}:e,Ce=e=>typeof e.label==`string`?e.label:e.value,we=(e,t,n)=>{let r=n.toLowerCase(),i=e.length;for(let n=1;n<=i;n++){let a=(t+n)%i;if(Ce(e[a]).toLowerCase().startsWith(r))return a}return t},Te=({options:e=xe,value:t,defaultValue:n,onChange:r,placeholder:i=`Select…`,showTags:a=!0,accentColor:o=`#f5f5f5`,surfaceColor:s=`#27272a`,highlightColor:c=`#3f3f46`,textColor:l=`#f5f5f5`,size:u=`md`,radius:d=10,menuWidth:f=176,placement:p=`bottom`,align:m=`left`,popDuration:h=180,glideDuration:_=220,rememberPosition:v=!0,disabled:y=!1,ariaLabel:b=`Select`,className:x=``})=>{let S=e.map(Se),[C,w]=(0,Q.useState)(n??``),T=t??C,E=S.findIndex(e=>e.value===T),[D,O]=(0,Q.useState)(`closed`),[k,j]=(0,Q.useState)(null),[M,N]=(0,Q.useState)(p),P=(0,Q.useRef)(null),F=(0,Q.useRef)(null),I=(0,Q.useRef)(null),L=(0,Q.useRef)(null),R=(0,Q.useRef)(!1),z=(0,Q.useRef)(void 0),B=(0,Q.useRef)(null),V=(0,Q.useId)(),H=_e[u]??_e.md,U=H.row+ye,W=Math.round(h*2/3);(0,Q.useLayoutEffect)(()=>{if(D!==`open`)return;let e=I.current,t=P.current;if(!e||!t)return;let n=t.getBoundingClientRect(),r=e.offsetHeight+be;N(p===`bottom`&&n.bottom+r>window.innerHeight?`top`:p===`top`&&n.top-r<0?`bottom`:p),e.style.transitionDuration=R.current?`0ms`:``,e.dataset.state=`closed`,e.offsetHeight,e.dataset.state=`open`;let i=L.current;i&&(i.style.transition=`none`,i.style.transform=`translateY(${Math.max(0,E)*U}px)`,i.style.opacity=`0`,i.offsetHeight,i.style.transition=``)},[D]),(0,Q.useLayoutEffect)(()=>{let e=L.current;if(!e||D!==`open`)return;if(k===null){e.style.opacity=`0`;return}let t=R.current||e.style.opacity!==`1`;e.style.transitionDuration=t?`0ms, 150ms`:``,e.style.transform=`translateY(${k*U}px)`,e.style.opacity=`1`,R.current=!1},[k,D,U]);let ee=e=>{y||(clearTimeout(z.current),R.current=!0,j(E>=0?E:e?0:null),O(`open`))},G=e=>{j(null),clearTimeout(z.current);let t=I.current;if(e===`instant`||!t){O(`closed`);return}t.style.transitionDuration=``,t.dataset.state=`closed`,O(`closing`),z.current=setTimeout(()=>O(`closed`),W+20)},K=(e,n)=>{let i=S[e];if(!i){G(`instant`);return}i.value!==T&&(t===void 0&&w(i.value),r?.(i.value,i),!n&&P.current&&(P.current.dataset.swap=``)),G(`instant`),F.current?.focus({preventScroll:!0})},te=e=>{let t=e.key,n=S.length,r=k??Math.max(0,E);if(D!==`open`){(t===`Enter`||t===` `||t===`ArrowDown`||t===`ArrowUp`)&&(e.preventDefault(),ee(!0));return}let i=t=>{e.preventDefault(),R.current=!0,j(Math.min(n-1,Math.max(0,t)))};t===`ArrowDown`||t===`ArrowUp`?i(k===null?r:r+(t===`ArrowDown`?1:-1)):t===`Home`||t===`End`?i(t===`Home`?0:n-1):t===`Enter`||t===` `?(e.preventDefault(),K(r,!0)):t===`Escape`||t===`Tab`?(t===`Escape`&&e.preventDefault(),G(`instant`)):t.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&i(we(S,r,t))};(0,Q.useEffect)(()=>{if(D===`closed`)return;let e=e=>{P.current&&!P.current.contains(e.target)&&G(`pop`)};return document.addEventListener(`pointerdown`,e,!0),()=>document.removeEventListener(`pointerdown`,e,!0)},[D]),(0,Q.useEffect)(()=>{y&&D!==`closed`&&G(`instant`)},[y]),(0,Q.useEffect)(()=>()=>clearTimeout(z.current),[]);let ne=e=>{let t=B.current;if(!t)return null;let n=Math.floor((e-t.top-ve)/U);return n>=0&&n<S.length?n:null},q=e=>{if(!B.current){try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}B.current={id:e.pointerId,top:e.currentTarget.getBoundingClientRect().top},R.current=!0,j(ne(e.clientY))}},J=e=>{if(!B.current||B.current.id!==e.pointerId)return;let t=ne(e.clientY);t!==k&&j(t)},re=e=>{if(!B.current||B.current.id!==e.pointerId)return;let t=e.type===`pointerup`?ne(e.clientY):null;B.current=null,t===null?v||j(null):K(t,!1)},ie=e=>{if(e.pointerType===`touch`||B.current)return;let t=e.target.closest(`[data-index]`);if(!t)return;let n=Number(t.dataset.index);n!==k&&j(n)},Y=`${M===`bottom`?`top`:`bottom`} ${m}`;return(0,$.jsxs)(`div`,{ref:P,className:`glide-select${x?` ${x}`:``}`,"data-size":u,"data-disabled":y?``:void 0,style:{"--gs-accent":o,"--gs-surface":s,"--gs-highlight":c,"--gs-text":l,"--gs-radius":`${d}px`,"--gs-inner-radius":`${Math.max(3,d-4)}px`,"--gs-chip":`${H.chip}px`,"--gs-row":`${H.row}px`,"--gs-font":`${H.font}px`,"--gs-menu-w":`${f}px`,"--gs-pop":`${h}ms`,"--gs-pop-out":`${W}ms`,"--gs-glide":`${_}ms`,"--gs-origin":Y},onAnimationEnd:e=>{e.animationName===`gs-swap`&&P.current&&delete P.current.dataset.swap},children:[(0,$.jsxs)(`button`,{ref:F,type:`button`,role:`combobox`,"aria-haspopup":`listbox`,"aria-expanded":D===`open`,"aria-controls":`${V}-list`,"aria-activedescendant":k===null?void 0:`${V}-${k}`,"aria-label":b,disabled:y,className:`glide-select__trigger`,onPointerDown:e=>{e.button!==0||y||(e.currentTarget.focus({preventScroll:!0}),D===`open`?G(`pop`):ee(!1))},onKeyDown:te,children:[(0,$.jsx)(`span`,{className:`glide-select__label`,"data-empty":E<0?``:void 0,children:E>=0?S[E].label:i},T),(0,$.jsx)(`span`,{className:`glide-select__chevron`,"aria-hidden":`true`,children:(0,$.jsx)(ae,{icon:A,size:12,strokeWidth:2.5})})]}),D===`closed`?null:(0,$.jsx)(`div`,{ref:I,className:`glide-select__menu`,"data-state":`open`,"data-side":M,"data-align":m,children:(0,$.jsxs)(`div`,{id:`${V}-list`,role:`listbox`,"aria-label":b,className:`glide-select__list`,"data-live":k===null?void 0:``,onPointerOver:ie,onPointerLeave:()=>{!B.current&&!v&&j(null)},onPointerDown:q,onPointerMove:J,onPointerUp:re,onPointerCancel:re,onLostPointerCapture:re,children:[(0,$.jsx)(`span`,{ref:L,className:`glide-select__pill`,"aria-hidden":`true`}),S.map((e,t)=>(0,$.jsxs)(`div`,{id:`${V}-${t}`,role:`option`,"aria-selected":t===E,"data-index":t,className:`glide-select__option`,children:[(0,$.jsx)(`span`,{className:`glide-select__name`,children:e.label}),a&&e.tag?(0,$.jsx)(`span`,{className:`glide-select__tag`,children:e.tag}):null,(0,$.jsx)(`span`,{className:`glide-select__check`,"data-on":t===E?``:void 0,"aria-hidden":`true`,children:(0,$.jsx)(ae,{icon:g,size:13,strokeWidth:2.5})})]},e.value))]})})]})},Ee=[`ru`,`kk`,`en`],De=`/assets/common-DxftSFv4.json`,Oe=`/assets/common-Bsofa96M.json`,ke=`/assets/common-CJC4iU1u.json`,Ae=`Shurahell`,je=`1.2.1`,Me=Object.assign({"./locales/en/common.json":De,"./locales/kk/common.json":Oe,"./locales/ru/common.json":ke});(async()=>{await p.use(S).use(D).use(f).init({backend:{loadPath:(e,t)=>{let[n]=e,[r]=t;return Me[`./locales/${n}/${r}.json`]}},fallbackLng:Ee[0],ns:[`common`],defaultNS:`common`,fallbackNS:`common`,supportedLngs:Ee,load:`languageOnly`,cleanCode:!0,nonExplicitSupportedLngs:!0,interpolation:{defaultVariables:{appName:Ae},escapeValue:!1}}),document.documentElement.lang=p.resolvedLanguage??p.language,document.documentElement.dir=p.dir()})(),p.on(`languageChanged`,e=>{document.documentElement.lang=e,document.documentElement.dir=p.dir(e)});var Ne=p,Pe=(e=Ne)=>e.language.slice(0,2),Fe=(e,t)=>{e.changeLanguage(t)},Ie={ru:`рус`,kk:`каз`,en:`eng`},Le=Ee.map(e=>({value:e,label:(0,$.jsxs)(`span`,{className:`landing-language-option`,children:[(0,$.jsx)(`img`,{src:`/images/flags/${e}.png`,alt:``,"aria-hidden":`true`,className:`landing-lang-flag`}),(0,$.jsx)(`span`,{children:Ie[e]})]})})),Re=()=>{let e=(0,Z.c)(7),{i18n:t}=m(),n;e[0]===t?n=e[1]:(n=Pe(t),e[0]=t,e[1]=n);let r;e[2]===t?r=e[3]:(r=e=>Fe(t,e),e[2]=t,e[3]=r);let i;return e[4]!==n||e[5]!==r?(i=(0,$.jsx)(Te,{options:Le,value:n,onChange:r,ariaLabel:`Language`,className:`landing-lang-select`,accentColor:`#c755f7`,surfaceColor:`#160b24`,highlightColor:`#4b1a69`,textColor:`#fff`,size:`md`,radius:10,menuWidth:112,align:`right`,showTags:!1}),e[4]=n,e[5]=r,e[6]=i):i=e[6],i},ze=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Be=`
precision highp float;

varying vec2 vUv;
uniform vec2 uResolution;
uniform float uTime;
uniform vec3 uColor;
uniform vec3 uBackgroundColor;
uniform float uCurvature;
uniform float uScanlineStrength;
uniform float uScanlineFrequency;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uBloom;
uniform float uBloomRadius;
uniform float uNoise;
uniform float uVignette;
uniform float uBrightness;
uniform float uPixelation;
uniform float uRgbShift;
uniform vec2 uPointer;
uniform float uMouseStrength;
uniform float uMouseReact;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec2 crtCurve(vec2 uv, float radius) {
  vec2 p = (uv - 0.5) * 2.0;
  float safeRadius = max(radius, 1.415);
  float cornerScale = safeRadius / sqrt(max(safeRadius * safeRadius - 2.0, 0.001));
  p = safeRadius * p / sqrt(max(safeRadius * safeRadius - dot(p, p), 0.001));
  p /= cornerScale;
  return p * 0.5 + 0.5;
}

float referencePlasma(vec2 uv, float t) {
  float frequencyScale = max(uWaveFrequency / 2.2, 0.001);
  uv = (uv - 0.5) * frequencyScale + 0.5;

  float scanline = 0.5 - 0.5 * cos(uv.y * 3.14159265 * uScanlineFrequency);
  scanline = mix(1.0, scanline, uScanlineStrength);

  uv *= vec2(80.0, 24.0);
  uv = ceil(uv);
  uv /= vec2(80.0, 24.0);

  float amplitude = uWaveAmplitude / 0.28;
  float field = 0.0;
  field += 0.7 * sin(0.5 * uv.x + t / 5.0);
  field += 3.0 * sin(1.6 * uv.y + t / 5.0);
  field += sin(10.0 * (uv.y * sin(t / 2.0) + uv.x * cos(t / 5.0)) + t / 2.0);

  float cx = uv.x + 0.5 * sin(t / 2.0);
  float cy = uv.y + 0.5 * cos(t / 4.0);
  field += 0.4 * sin(sqrt(100.0 * cx * cx + 100.0 * cy * cy + 1.0) + t);
  field += 0.9 * sin(sqrt(75.0 * cx * cx + 25.0 * cy * cy + 1.0) + t);
  field -= 1.4 * sin(sqrt(256.0 * cx * cx + 25.0 * cy * cy + 1.0) + t);
  field += 0.3 * sin(0.5 * uv.y + uv.x + sin(t));

  return scanline * floor(3.0 * (0.5 + 0.499 * sin(field * amplitude))) / 3.0;
}

void main() {
  vec2 uv = vUv;
  if (uPixelation > 1.001) {
    vec2 cells = max(uResolution / uPixelation, vec2(1.0));
    uv = (floor(uv * cells) + 0.5) / cells;
  }

  float curveRadius = 1.1 + 0.42 / max(uCurvature, 0.001);
  if (uMouseReact > 0.5) {
    curveRadius *= exp(-uPointer.y * uMouseStrength * 0.4);
  }
  vec2 curvedUv = crtCurve(uv, curveRadius);
  if (uMouseReact > 0.5) {
    curvedUv.x -= uPointer.x * uMouseStrength * 0.035;
  }

  float signal = referencePlasma(curvedUv, uTime);
  float radius = 0.01 * uBloomRadius;
  float glow = signal * 0.2;
  glow += referencePlasma(curvedUv + vec2(radius, 0.0), uTime) * 0.12;
  glow += referencePlasma(curvedUv - vec2(radius, 0.0), uTime) * 0.12;
  glow += referencePlasma(curvedUv + vec2(0.0, radius), uTime) * 0.12;
  glow += referencePlasma(curvedUv - vec2(0.0, radius), uTime) * 0.12;
  glow += referencePlasma(curvedUv + vec2(radius), uTime) * 0.08;
  glow += referencePlasma(curvedUv - vec2(radius), uTime) * 0.08;
  glow += referencePlasma(curvedUv + vec2(radius, -radius), uTime) * 0.08;
  glow += referencePlasma(curvedUv + vec2(-radius, radius), uTime) * 0.08;

  float redSignal = referencePlasma(curvedUv + vec2(uRgbShift, 0.0), uTime);
  float blueSignal = referencePlasma(curvedUv - vec2(uRgbShift, 0.0), uTime);
  vec3 channelSignal = vec3(redSignal, signal, blueSignal);
  vec3 waveColor = uColor * (0.3 + signal * 0.7 + glow * uBloom * 0.65);
  waveColor += (channelSignal - signal) * 0.42;

  float edge = clamp(1.0 - dot(vUv - 0.5, vUv - 0.5) * 2.0, 0.0, 1.0);
  float edgeFade = mix(1.0, smoothstep(0.0, 1.0, edge), uVignette);
  float waveMask = clamp(signal * 0.82 + glow * 0.52, 0.0, 1.0) * edgeFade;

  float grain = hash21(gl_FragCoord.xy + vec2(fract(uTime) * 173.0));
  waveColor = max(waveColor * uBrightness, vec3(0.0));
  vec3 color = mix(uBackgroundColor, waveColor, waveMask);
  color += (grain - 0.5) * uNoise;
  gl_FragColor = vec4(max(color, vec3(0.0)), 1.0);
}
`;function Ve(e){let t=(0,Z.c)(52),{color:n,backgroundColor:r,speed:i,curvature:a,scanlineStrength:o,scanlineFrequency:s,waveAmplitude:c,waveFrequency:l,bloom:u,bloomRadius:d,noise:f,vignette:p,brightness:m,pixelation:h,rgbShift:g,mouseReact:_,mouseStrength:v,dpr:y,fps:b,paused:x,className:S,style:C}=e,w=n===void 0?`#c755f7`:n,T=r===void 0?`#05010a`:r,E=i===void 0?.5:i,D=a===void 0?.25:a,O=o===void 0?.25:o,k=s===void 0?200:s,A=c===void 0?.3:c,j=l===void 0?2.5:l,M=u===void 0?1.5:u,N=d===void 0?1:d,P=f===void 0?.1:f,F=p===void 0?0:p,I=m===void 0?1.25:m,L=h===void 0?1:h,R=g===void 0?.015:g,z=_===void 0||_,B=v===void 0?.5:v,V=y===void 0?1:y,H=b===void 0?30:b,U=x!==void 0&&x,W=(0,Q.useRef)(null),ee=(0,Q.useRef)(null),G=(0,Q.useRef)(null),K=(0,Q.useRef)(null),te=(0,Q.useRef)(U),ne;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(ne=new X(0,0),t[0]=ne):ne=t[0];let q=(0,Q.useRef)(ne),J;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(J=new X(0,0),t[1]=J):J=t[1];let re=(0,Q.useRef)(J),ie=(0,Q.useRef)(!0),Y=(0,Q.useRef)(H),ae=(0,Q.useRef)(0),he,ge;t[2]===U?(he=t[3],ge=t[4]):(he=()=>{te.current=U},ge=[U],t[2]=U,t[3]=he,t[4]=ge),(0,Q.useEffect)(he,ge);let _e,ve;t[5]===H?(_e=t[6],ve=t[7]):(_e=()=>{Y.current=Math.max(1,H)},ve=[H],t[5]=H,t[6]=_e,t[7]=ve),(0,Q.useEffect)(_e,ve);let ye,be;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(ye=()=>{let e=W.current;if(!e)return;let t=new se,n=new oe(-1,1,1,-1,0,1),r=new de(2,2),i=new le({vertexShader:ze,fragmentShader:Be,uniforms:{uResolution:{value:new X(1,1)},uTime:{value:0},uSpeed:{value:.5},uColor:{value:new fe(`#c755f7`)},uBackgroundColor:{value:new fe(`#05010a`)},uCurvature:{value:.25},uScanlineStrength:{value:.25},uScanlineFrequency:{value:200},uWaveAmplitude:{value:.3},uWaveFrequency:{value:2.5},uBloom:{value:1.5},uBloomRadius:{value:1},uNoise:{value:.1},uVignette:{value:0},uBrightness:{value:1.25},uPixelation:{value:1},uRgbShift:{value:.015},uPointer:{value:new X(0,0)},uMouseStrength:{value:.5},uMouseReact:{value:1}}});ee.current=i;let a=new ce(r,i);t.add(a);let o=new me({antialias:!1,alpha:!1,powerPreference:`low-power`});G.current=o,o.outputColorSpace=pe,o.setPixelRatio(Math.min(window.devicePixelRatio||1,1)),o.domElement.style.width=`100%`,o.domElement.style.height=`100%`,o.domElement.style.display=`block`,e.appendChild(o.domElement);let s=()=>{let t=Math.max(e.clientWidth,1),n=Math.max(e.clientHeight,1);o.setSize(t,n,!1),i.uniforms.uResolution.value.set(o.domElement.width,o.domElement.height)},c=new ResizeObserver(s);c.observe(e),s();let l=new ue,u=new IntersectionObserver(e=>{let[t]=e;ie.current=t.isIntersecting});u.observe(e);let d=e=>{if(K.current=requestAnimationFrame(d),!ie.current||document.hidden)return;let r=1e3/Y.current;if(e-ae.current<r)return;ae.current=e-(e-ae.current)%r;let a=Math.min(l.getDelta(),.1);te.current||(i.uniforms.uTime.value=i.uniforms.uTime.value+a*i.uniforms.uSpeed.value),re.current.lerp(q.current,.08),i.uniforms.uPointer.value.copy(re.current),o.render(t,n)};d(0);let f=t=>{let n=e.getBoundingClientRect();q.current.set((t.clientX-n.left)/Math.max(n.width,1)*2-1,-((t.clientY-n.top)/Math.max(n.height,1)*2-1))},p=()=>q.current.set(0,0);return globalThis.addEventListener(`pointermove`,f,{passive:!0}),globalThis.addEventListener(`pointerleave`,p),()=>{K.current!==null&&cancelAnimationFrame(K.current),c.disconnect(),u.disconnect(),globalThis.removeEventListener(`pointermove`,f),globalThis.removeEventListener(`pointerleave`,p),r.dispose(),i.dispose(),o.dispose(),o.domElement.remove(),ee.current=null,G.current=null}},be=[],t[8]=ye,t[9]=be):(ye=t[8],be=t[9]),(0,Q.useEffect)(ye,be);let xe;t[10]!==T||t[11]!==M||t[12]!==N||t[13]!==I||t[14]!==w||t[15]!==D||t[16]!==V||t[17]!==z||t[18]!==B||t[19]!==P||t[20]!==L||t[21]!==R||t[22]!==k||t[23]!==O||t[24]!==E||t[25]!==F||t[26]!==A||t[27]!==j?(xe=()=>{let e=ee.current,t=G.current;if(!e||!t)return;let n=e.uniforms;n.uColor.value.set(w),n.uBackgroundColor.value.set(T),n.uSpeed.value=E,n.uCurvature.value=D,n.uScanlineStrength.value=O,n.uScanlineFrequency.value=k,n.uWaveAmplitude.value=A,n.uWaveFrequency.value=j,n.uBloom.value=M,n.uBloomRadius.value=N,n.uNoise.value=P,n.uVignette.value=F,n.uBrightness.value=I,n.uPixelation.value=L,n.uRgbShift.value=R,n.uMouseReact.value=+!!z,n.uMouseStrength.value=B,t.setPixelRatio(Math.min(window.devicePixelRatio||1,V));let r=W.current;r&&(t.setSize(Math.max(r.clientWidth,1),Math.max(r.clientHeight,1),!1),n.uResolution.value.set(t.domElement.width,t.domElement.height))},t[10]=T,t[11]=M,t[12]=N,t[13]=I,t[14]=w,t[15]=D,t[16]=V,t[17]=z,t[18]=B,t[19]=P,t[20]=L,t[21]=R,t[22]=k,t[23]=O,t[24]=E,t[25]=F,t[26]=A,t[27]=j,t[28]=xe):xe=t[28];let Se;t[29]!==T||t[30]!==M||t[31]!==N||t[32]!==I||t[33]!==w||t[34]!==D||t[35]!==V||t[36]!==H||t[37]!==z||t[38]!==B||t[39]!==P||t[40]!==L||t[41]!==R||t[42]!==k||t[43]!==O||t[44]!==E||t[45]!==F||t[46]!==A||t[47]!==j?(Se=[T,M,N,I,w,D,V,z,B,P,L,R,k,O,E,H,F,A,j],t[29]=T,t[30]=M,t[31]=N,t[32]=I,t[33]=w,t[34]=D,t[35]=V,t[36]=H,t[37]=z,t[38]=B,t[39]=P,t[40]=L,t[41]=R,t[42]=k,t[43]=O,t[44]=E,t[45]=F,t[46]=A,t[47]=j,t[48]=Se):Se=t[48],(0,Q.useEffect)(xe,Se);let Ce=`crt-warp-container ${S||``}`,we;return t[49]!==C||t[50]!==Ce?(we=(0,$.jsx)(`div`,{ref:W,className:Ce,style:C}),t[49]=C,t[50]=Ce,t[51]=we):we=t[51],we}var He=e=>{let t=(0,Z.c)(28),n,r,i,a,o,s,c,l,u;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9]):({children:n,padding:i,disabled:a,magnetStrength:o,activeTransition:s,inactiveTransition:c,wrapperClassName:l,innerClassName:u,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u);let d=i===void 0?100:i,f=a!==void 0&&a,p=o===void 0?2:o,m=s===void 0?`transform 0.3s ease-out`:s,h=c===void 0?`transform 0.5s ease-in-out`:c,g=l===void 0?``:l,_=u===void 0?``:u,[v,y]=(0,Q.useState)(!1),b;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(b={x:0,y:0},t[10]=b):b=t[10];let[x,S]=(0,Q.useState)(b),C=(0,Q.useRef)(null),w,T;t[11]!==f||t[12]!==p||t[13]!==d?(T=()=>{if(f){S({x:0,y:0});return}let e=e=>{if(!C.current)return;let{left:t,top:n,width:r,height:i}=C.current.getBoundingClientRect(),a=t+r/2,o=n+i/2,s=Math.abs(a-e.clientX),c=Math.abs(o-e.clientY);if(s<r/2+d&&c<i/2+d){y(!0);let t=(e.clientX-a)/p,n=(e.clientY-o)/p;S({x:t,y:n})}else y(!1),S({x:0,y:0})};return globalThis.addEventListener(`mousemove`,e),()=>{globalThis.removeEventListener(`mousemove`,e)}},w=[d,f,p],t[11]=f,t[12]=p,t[13]=d,t[14]=w,t[15]=T):(w=t[14],T=t[15]),(0,Q.useEffect)(T,w);let E=v?m:h,D;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(D={position:`relative`,display:`inline-block`},t[16]=D):D=t[16];let O=`translate3d(${x.x}px, ${x.y}px, 0)`,k;t[17]!==O||t[18]!==E?(k={transform:O,transition:E,willChange:`transform`},t[17]=O,t[18]=E,t[19]=k):k=t[19];let A;t[20]!==n||t[21]!==_||t[22]!==k?(A=(0,$.jsx)(`div`,{className:_,style:k,children:n}),t[20]=n,t[21]=_,t[22]=k,t[23]=A):A=t[23];let j;return t[24]!==r||t[25]!==A||t[26]!==g?(j=(0,$.jsx)(`div`,{ref:C,className:g,style:D,...r,children:A}),t[24]=r,t[25]=A,t[26]=g,t[27]=j):j=t[27],j},Ue=e=>{let t=(0,Z.c)(19),{colors:n,baseSpring:r,baseFriction:i,baseThickness:a,offsetFactor:o,maxAge:s,pointCount:c,speedMultiplier:l,enableFade:u,enableShaderEffect:d,effectAmplitude:f,backgroundColor:p}=e,m;t[0]===n?m=t[1]:(m=n===void 0?[`#ff9346`,`#7cff67`,`#ffee51`,`#5227FF`]:n,t[0]=n,t[1]=m);let g=m,_=r===void 0?.03:r,v=i===void 0?.9:i,y=a===void 0?30:a,b=o===void 0?.05:o,S=s===void 0?500:s,C=c===void 0?50:c,D=l===void 0?.6:l,O=u!==void 0&&u,k=d!==void 0&&d,A=f===void 0?2:f,j;t[2]===p?j=t[3]:(j=p===void 0?[0,0,0,0]:p,t[2]=p,t[3]=j);let M=j,N=(0,Q.useRef)(null),P,F;t[4]!==M||t[5]!==v||t[6]!==_||t[7]!==y||t[8]!==g||t[9]!==A||t[10]!==O||t[11]!==k||t[12]!==S||t[13]!==b||t[14]!==C||t[15]!==D?(P=()=>{let e=N.current;if(!e)return;let t=new E({dpr:window.devicePixelRatio||2,alpha:!0}),n=t.gl;Array.isArray(M)&&M.length===4?n.clearColor(M[0],M[1],M[2],M[3]):n.clearColor(0,0,0,0),n.canvas.style.position=`absolute`,n.canvas.style.top=`0`,n.canvas.style.left=`0`,n.canvas.style.width=`100%`,n.canvas.style.height=`100%`,e.appendChild(n.canvas);let r=new w,i=[],a=function(){if(!e)return;let n=e.clientWidth,r=e.clientHeight;t.setSize(n,r),i.forEach(We)};window.addEventListener(`resize`,a);let o=(g.length-1)/2;g.forEach((e,t)=>{let a=_+(Math.random()-.5)*.05,s=v+(Math.random()-.5)*.05,c=y+(Math.random()-.5)*3,l=new x((t-o)*b+(Math.random()-.5)*.01,(Math.random()-.5)*.1,0),u={spring:a,friction:s,mouseVelocity:new x,mouseOffset:l,points:[],polyline:{}},d=C,f=[];for(let e=0;e<d;e++)f.push(new x);u.points=f,u.polyline=new T(n,{points:f,vertex:`
      precision highp float;
      
      attribute vec3 position;
      attribute vec3 next;
      attribute vec3 prev;
      attribute vec2 uv;
      attribute float side;
      
      uniform vec2 uResolution;
      uniform float uDPR;
      uniform float uThickness;
      uniform float uTime;
      uniform float uEnableShaderEffect;
      uniform float uEffectAmplitude;
      
      varying vec2 vUV;
      
      vec4 getPosition() {
          vec4 current = vec4(position, 1.0);
          vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
          vec2 nextScreen = next.xy * aspect;
          vec2 prevScreen = prev.xy * aspect;
          vec2 tangent = normalize(nextScreen - prevScreen);
          vec2 normal = vec2(-tangent.y, tangent.x);
          normal /= aspect;
          normal *= mix(1.0, 0.1, pow(abs(uv.y - 0.5) * 2.0, 2.0));
          float dist = length(nextScreen - prevScreen);
          normal *= smoothstep(0.0, 0.02, dist);
          float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
          float pixelWidth = current.w * pixelWidthRatio;
          normal *= pixelWidth * uThickness;
          current.xy -= normal * side;
          if(uEnableShaderEffect > 0.5) {
            current.xy += normal * sin(uTime + current.x * 10.0) * uEffectAmplitude;
          }
          return current;
      }
      
      void main() {
          vUV = uv;
          gl_Position = getPosition();
      }
    `,fragment:`
      precision highp float;
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uEnableFade;
      varying vec2 vUV;
      void main() {
          float fadeFactor = 1.0;
          if(uEnableFade > 0.5) {
              fadeFactor = 1.0 - smoothstep(0.0, 1.0, vUV.y);
          }
          gl_FragColor = vec4(uColor, uOpacity * fadeFactor);
      }
    `,uniforms:{uColor:{value:new h(e)},uThickness:{value:c},uOpacity:{value:1},uTime:{value:0},uEnableShaderEffect:{value:+!!k},uEffectAmplitude:{value:A},uEnableFade:{value:+!!O}}}),u.polyline.mesh.setParent(r),i.push(u)}),a();let s=new x,c=function(t){let n,r;if(!e)return;let i=e.getBoundingClientRect();`changedTouches`in t&&t.changedTouches.length?(n=t.changedTouches[0].clientX-i.left,r=t.changedTouches[0].clientY-i.top):t instanceof MouseEvent?(n=t.clientX-i.left,r=t.clientY-i.top):(n=0,r=0);let a=e.clientWidth,o=e.clientHeight;s.set(n/a*2-1,r/o*-2+1,0)};window.addEventListener(`mousemove`,c),e.addEventListener(`touchstart`,c),e.addEventListener(`touchmove`,c);let l=new x,u,d=performance.now();function f(){u=requestAnimationFrame(f);let e=performance.now(),n=e-d;d=e,i.forEach(t=>{l.copy(s).add(t.mouseOffset).sub(t.points[0]).multiply(t.spring),t.mouseVelocity.add(l).multiply(t.friction),t.points[0].add(t.mouseVelocity);for(let e=1;e<t.points.length;e++)if(isFinite(S)&&S>0){let r=S/(t.points.length-1),i=Math.min(1,n*D/r);t.points[e].lerp(t.points[e-1],i)}else t.points[e].lerp(t.points[e-1],.9);t.polyline.mesh.program.uniforms.uTime&&(t.polyline.mesh.program.uniforms.uTime.value=e*.001),t.polyline.updateGeometry()}),t.render({scene:r})}return f(),()=>{window.removeEventListener(`resize`,a),window.removeEventListener(`mousemove`,c),e.removeEventListener(`touchstart`,c),e.removeEventListener(`touchmove`,c),cancelAnimationFrame(u),n.canvas&&n.canvas.parentNode===e&&e.removeChild(n.canvas)}},F=[g,_,v,y,b,S,C,D,O,k,A,M],t[4]=M,t[5]=v,t[6]=_,t[7]=y,t[8]=g,t[9]=A,t[10]=O,t[11]=k,t[12]=S,t[13]=b,t[14]=C,t[15]=D,t[16]=P,t[17]=F):(P=t[16],F=t[17]),(0,Q.useEffect)(P,F);let I;return t[18]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,$.jsx)(`div`,{ref:N,className:`ribbons-container`}),t[18]=I):I=t[18],I};function We(e){return e.polyline.resize()}var Ge=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Ke=`#version 300 es
precision highp float;

uniform sampler2D uTextTexture;
uniform vec2 uResolution;
uniform vec2 uPointer;
uniform float uPointerActive;
uniform float uTime;
uniform float uWarpStrength;
uniform float uWarpScale;
uniform float uSpeed;
uniform float uPointerInfluence;
uniform float uPointerStrength;
uniform float uRefraction;
uniform float uRipple;
uniform float uMotion;

in vec2 vUv;
out vec4 fragColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);

  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));

  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p *= 2.02;
    amplitude *= 0.5;
  }
  return value;
}

vec4 sampleText(vec2 uv) {
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec4(0.0);
  }
  return texture(uTextTexture, uv);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  float time = uTime * uSpeed;
  float scale = max(uWarpScale, 0.001);

  vec2 drift = vec2(time * 0.055, -time * 0.045);
  float n1 = fbm(uv * scale * 3.1 + drift);
  float n2 = fbm((uv + 19.17) * scale * 3.4 - drift.yx);
  vec2 ambient = (vec2(n1, n2) - 0.5) * uWarpStrength * 0.045 * uMotion;

  vec2 pointerDelta = uv - uPointer;
  vec2 aspectDelta = vec2(pointerDelta.x * aspect, pointerDelta.y);
  float dist = length(aspectDelta);
  float radius = max(uPointerInfluence, 0.001);
  float t = clamp(dist / radius, 0.0, 1.0);
  float lens = smoothstep(radius, 0.0, dist) * uPointerActive;
  float bulge = t * (1.0 - t) * (1.0 - t) * 6.75 * uPointerActive;
  vec2 dir = dist > 0.0001 ? vec2(aspectDelta.x / aspect, aspectDelta.y) / dist : vec2(0.0);

  float rippleWave = sin(dist * 28.0 - time * 4.2) * 0.5 + 0.5;
  float rippleRing = (rippleWave - 0.5) * uRipple;
  vec2 pointerWarp = -dir * bulge * uPointerStrength * 0.045;
  pointerWarp += dir * rippleRing * bulge * uPointerStrength * 0.016;

  vec2 displaced = uv + ambient + pointerWarp;
  vec2 splitDir = ambient + pointerWarp;
  float splitLen = length(splitDir);
  splitDir = splitLen > 0.00001 ? splitDir / splitLen : vec2(0.7071, 0.7071);
  vec2 split = splitDir * uRefraction * 0.16 * (0.35 + lens * 1.65);

  vec4 base = sampleText(displaced);
  float r = sampleText(displaced + split).r;
  float g = base.g;
  float b = sampleText(displaced - split).b;
  float a = max(max(sampleText(displaced + split).a, base.a), sampleText(displaced - split).a);

  vec3 color = vec3(r, g, b) + lens * base.a * 0.055;
  fragColor = vec4(color, a);
}
`,qe=e=>typeof e==`number`?`${e}px`:e,Je=(e,t,n)=>{let r=Array.from(t);return r.reduce((t,n)=>t+e.measureText(n).width,0)+Math.max(0,r.length-1)*n},Ye=(e,t,n,r,i)=>{let a=Array.from(t),o=n-Je(e,t,i)/2;a.forEach((t,n)=>{e.fillText(t,o,r),o+=e.measureText(t).width+(n===a.length-1?0:i)})},Xe=({container:e,width:t,height:n,dpr:r,props:i})=>{let a=document.createElement(`canvas`);a.width=Math.max(1,Math.floor(t*r)),a.height=Math.max(1,Math.floor(n*r));let o=a.getContext(`2d`);if(!o)return a;let s=document.createElement(`span`);s.textContent=i.text,Object.assign(s.style,{position:`absolute`,visibility:`hidden`,pointerEvents:`none`,whiteSpace:`pre`,inset:`0 auto auto 0`,fontFamily:i.fontFamily,fontSize:qe(i.fontSize),fontWeight:String(i.fontWeight),letterSpacing:qe(i.letterSpacing),lineHeight:typeof i.lineHeight==`number`?String(i.lineHeight):i.lineHeight}),e.appendChild(s);let c=window.getComputedStyle(s),l=parseFloat(c.fontSize)||96,u=c.fontFamily||`sans-serif`,d=c.fontWeight||String(i.fontWeight),f=c.letterSpacing===`normal`?0:parseFloat(c.letterSpacing)||0,p=parseFloat(c.lineHeight);Number.isFinite(p)||(p=l*(typeof i.lineHeight==`number`?i.lineHeight:.92)),s.remove(),o.setTransform(r,0,0,r,0,0),o.clearRect(0,0,t,n),o.textAlign=`left`,o.textBaseline=`middle`,o.fillStyle=i.color,o.imageSmoothingEnabled=!0,o.imageSmoothingQuality=`high`;let m=String(i.text||``).split(`
`),h=()=>{o.font=`${d} ${l}px ${u}`};h();let g=t*.86,_=n*.78,v=Math.max(...m.map(e=>Je(o,e,f)),1),y=Math.max(p*m.length,1),b=Math.min(1,g/v,_/y);b<1&&(l*=b,f*=b,p*=b,h());let x=n/2-p*(m.length-1)/2;return m.forEach((e,n)=>Ye(o,e,t/2,x+n*p,f)),a},Ze=(e,t)=>{let n=e.uniforms;n.uWarpStrength.value=t.warpStrength,n.uWarpScale.value=t.warpScale,n.uSpeed.value=t.speed,n.uPointerInfluence.value=t.pointerInfluence,n.uPointerStrength.value=t.pointerStrength,n.uRefraction.value=t.refraction,n.uRipple.value=+!!t.ripple},Qe=({text:e=`Bend the moment`,color:t=`#f8f5ff`,warpStrength:n=.08,warpScale:r=1.7,speed:i=.55,pointerInfluence:a=.42,pointerStrength:o=.38,refraction:s=.018,ripple:c=!0,fontSize:l=`clamp(3rem, 10vw, 9rem)`,fontWeight:u=800,fontFamily:d=`inherit`,letterSpacing:f=`-0.06em`,lineHeight:p=.9,className:m=``,style:h})=>{let g=(0,Q.useRef)(null),_=(0,Q.useRef)({text:e,color:t,fontSize:l,fontWeight:u,fontFamily:d,letterSpacing:f,lineHeight:p,warpStrength:n,warpScale:r,speed:i,pointerInfluence:a,pointerStrength:o,refraction:s,ripple:c}),v=(0,Q.useRef)(null);return(0,Q.useEffect)(()=>{_.current={text:e,color:t,fontSize:l,fontWeight:u,fontFamily:d,letterSpacing:f,lineHeight:p,warpStrength:n,warpScale:r,speed:i,pointerInfluence:a,pointerStrength:o,refraction:s,ripple:c},v.current&&(Ze(v.current.program,_.current),v.current.rasterize())},[e,t,l,u,d,f,p,n,r,i,a,o,s,c]),(0,Q.useEffect)(()=>{let e=g.current;if(!e||typeof window>`u`)return;let t,n,r,i,a,o,s=null,c=null,l=0,u=!1,d=!1,f=!0,p=!document.hidden,m=window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1,h=0,y={x:.5,y:.5,tx:.5,ty:.5,active:0,activeTarget:0},x=performance.now();try{t=new E({webgl:2,alpha:!0,premultipliedAlpha:!1,antialias:!0,dpr:Math.min(window.devicePixelRatio||1,2)}),n=t.gl}catch(e){console.warn(`WarpText: WebGL could not be initialized.`,e);return}n.clearColor(0,0,0,0);let S=n.canvas;S.style.position=`absolute`,S.style.inset=`0`,S.style.width=`100%`,S.style.height=`100%`,S.style.display=`block`,S.setAttribute(`aria-hidden`,`true`),e.appendChild(S),o=new B(n,{generateMipmaps:!1,minFilter:n.LINEAR,magFilter:n.LINEAR,wrapS:n.CLAMP_TO_EDGE,wrapT:n.CLAMP_TO_EDGE}),i=new V(n),r=new b(n,{vertex:Ge,fragment:Ke,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uTextTexture:{value:o},uResolution:{value:new Float32Array([1,1])},uPointer:{value:new Float32Array([.5,.5])},uPointerActive:{value:0},uTime:{value:0},uWarpStrength:{value:_.current.warpStrength},uWarpScale:{value:_.current.warpScale},uSpeed:{value:_.current.speed},uPointerInfluence:{value:_.current.pointerInfluence},uPointerStrength:{value:_.current.pointerStrength},uRefraction:{value:_.current.refraction},uRipple:{value:+!!_.current.ripple},uMotion:{value:+!m}}}),a=new C(n,{geometry:i,program:r});let w=()=>{u||d||t.render({scene:a})},T=async()=>{let t=++h;if(document.fonts?.ready)try{await document.fonts.ready}catch{}if(u||d||t!==h)return;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return;let r=Math.min(window.devicePixelRatio||1,2),i=Xe({container:e,width:n.width,height:n.height,dpr:r,props:_.current});o.image=i,o.needsUpdate=!0,w()},D=()=>{if(u||d)return;let i=e.getBoundingClientRect();i.width<=0||i.height<=0||(t.dpr=Math.min(window.devicePixelRatio||1,2),t.setSize(i.width,i.height),r.uniforms.uResolution.value[0]=n.drawingBufferWidth,r.uniforms.uResolution.value[1]=n.drawingBufferHeight,T())},O=e=>{if(e.pointerType===`touch`)return;let t=S.getBoundingClientRect();t.width<=0||t.height<=0||(y.tx=(e.clientX-t.left)/t.width,y.ty=1-(e.clientY-t.top)/t.height,y.activeTarget=1)},k=()=>{y.activeTarget=0},A=e=>{e.preventDefault(),d=!0,l&&cancelAnimationFrame(l),l=0},j=()=>{p=!document.hidden,p&&f&&!l&&(l=requestAnimationFrame(P)),!p&&l&&(cancelAnimationFrame(l),l=0)},M=window.matchMedia?.(`(prefers-reduced-motion: reduce)`),N=e=>{m=e.matches,r.uniforms.uMotion.value=+!m,w()},P=e=>{if(u||d)return;let t=(e-x)*.001,n=.5+Math.sin(t*.33)*.12,i=.5+Math.cos(t*.27)*.1,a=y.activeTarget>0?y.tx:n,o=y.activeTarget>0?y.ty:i,s=y.activeTarget>0?.12:.035;y.x+=(a-y.x)*s,y.y+=(o-y.y)*s,y.active+=((y.activeTarget>0?1:.18)-y.active)*.06,r.uniforms.uPointer.value[0]=y.x,r.uniforms.uPointer.value[1]=y.y,r.uniforms.uPointerActive.value=m?y.active*.35:y.active,r.uniforms.uTime.value=m?0:t,w(),l=requestAnimationFrame(P)};return s=new ResizeObserver(D),s.observe(e),c=new IntersectionObserver(([e])=>{f=e.isIntersecting,f&&p&&!l&&(l=requestAnimationFrame(P)),!f&&l&&(cancelAnimationFrame(l),l=0)},{threshold:0}),c.observe(e),S.addEventListener(`pointermove`,O),S.addEventListener(`pointerleave`,k),S.addEventListener(`webglcontextlost`,A,!1),document.addEventListener(`visibilitychange`,j),M?.addEventListener(`change`,N),Ze(r,_.current),v.current={program:r,rasterize:T},D(),l=requestAnimationFrame(P),()=>{if(u=!0,v.current=null,l&&cancelAnimationFrame(l),s?.disconnect(),c?.disconnect(),S.removeEventListener(`pointermove`,O),S.removeEventListener(`pointerleave`,k),S.removeEventListener(`webglcontextlost`,A),document.removeEventListener(`visibilitychange`,j),M?.removeEventListener(`change`,N),!d)try{o?.texture&&n.deleteTexture(o.texture),i?.remove?.(),r?.remove?.(),n.getExtension(`WEBGL_lose_context`)?.loseContext()}catch{}S.parentNode===e&&e.removeChild(S)}},[]),(0,$.jsx)(`div`,{ref:g,className:`warp-text ${m}`.trim(),style:h,role:`img`,"aria-label":e})},$e=()=>{let e=(0,Z.c)(12),t=s(),n;return e[0]!==t.palette.background.paper||e[1]!==t.palette.divider||e[2]!==t.palette.error.main||e[3]!==t.palette.info.main||e[4]!==t.palette.primary.contrastText||e[5]!==t.palette.primary.light||e[6]!==t.palette.primary.main||e[7]!==t.palette.secondary.main||e[8]!==t.palette.success.main||e[9]!==t.palette.text.primary||e[10]!==t.palette.warning.main?(n={divider:t.palette.divider,paper:t.palette.background.paper,primary:t.palette.primary.main,primaryLight:t.palette.primary.light,secondary:t.palette.secondary.main,text:t.palette.text.primary,contrastText:t.palette.primary.contrastText,foreground:`#fff`,background:`#000`,success:t.palette.success.main,warning:t.palette.warning.main,error:t.palette.error.main,info:t.palette.info.main},e[0]=t.palette.background.paper,e[1]=t.palette.divider,e[2]=t.palette.error.main,e[3]=t.palette.info.main,e[4]=t.palette.primary.contrastText,e[5]=t.palette.primary.light,e[6]=t.palette.primary.main,e[7]=t.palette.secondary.main,e[8]=t.palette.success.main,e[9]=t.palette.text.primary,e[10]=t.palette.warning.main,e[11]=n):n=e[11],n},et=`
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,tt=`
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`,nt=e=>{let t=(0,Z.c)(10),{color:n,speed:r,amplitude:i,mouseReact:a}=e,o;t[0]===n?o=t[1]:(o=n===void 0?[1,1,1]:n,t[0]=n,t[1]=o);let s=o,c=r===void 0?1:r,l=i===void 0?.1:i,u=a===void 0||a,d=(0,Q.useRef)(null),f;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(f={x:.5,y:.5},t[2]=f):f=t[2];let p=(0,Q.useRef)(f),m,g;t[3]!==l||t[4]!==s||t[5]!==u||t[6]!==c?(m=()=>{if(!d.current)return;let e=d.current,t=new E,n=t.gl;n.clearColor(1,1,1,1);let r,i=()=>{t.setSize(e.offsetWidth*1,e.offsetHeight*1),r&&(r.uniforms.uResolution.value=new h(n.canvas.width,n.canvas.height,n.canvas.width/n.canvas.height))};globalThis.addEventListener(`resize`,i,!1),i();let a=new V(n);r=new b(n,{vertex:et,fragment:tt,uniforms:{uTime:{value:0},uColor:{value:new h(...s)},uResolution:{value:new h(n.canvas.width,n.canvas.height,n.canvas.width/n.canvas.height)},uMouse:{value:new Float32Array([p.current.x,p.current.y])},uAmplitude:{value:l},uSpeed:{value:c}}});let o=new C(n,{geometry:a,program:r}),f,m=e=>{f=requestAnimationFrame(m),r.uniforms.uTime.value=e*.001,t.render({scene:o})};f=requestAnimationFrame(m),e.appendChild(n.canvas);let g=t=>{let n=e.getBoundingClientRect(),i=(t.clientX-n.left)/n.width,a=1-(t.clientY-n.top)/n.height;p.current={x:i,y:a},r.uniforms.uMouse.value[0]=i,r.uniforms.uMouse.value[1]=a};return u&&e.addEventListener(`mousemove`,g),()=>{cancelAnimationFrame(f),globalThis.removeEventListener(`resize`,i),u&&e.removeEventListener(`mousemove`,g),e.removeChild(n.canvas),n.getExtension(`WEBGL_lose_context`)?.loseContext()}},g=[s,c,l,u],t[3]=l,t[4]=s,t[5]=u,t[6]=c,t[7]=m,t[8]=g):(m=t[7],g=t[8]),(0,Q.useEffect)(m,g);let _;return t[9]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,$.jsx)(`div`,{ref:d,className:`h-full w-full`}),t[9]=_):_=t[9],_},rt=e=>{let t=(0,Z.c)(11),{children:n,className:r,delay:i,scrollAnchor:a}=e,o=r===void 0?``:r,s=i===void 0?0:i,c=a!==void 0&&a?``:void 0,l,u,d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(l={opacity:0,y:18,filter:`blur(8px)`},u={opacity:1,y:0,filter:`blur(0px)`},d={once:!0,margin:`-40px`},t[0]=l,t[1]=u,t[2]=d):(l=t[0],u=t[1],d=t[2]);let f;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(f=[.22,1,.36,1],t[3]=f):f=t[3];let p;t[4]===s?p=t[5]:(p={duration:.65,delay:s,ease:f},t[4]=s,t[5]=p);let m;return t[6]!==n||t[7]!==o||t[8]!==c||t[9]!==p?(m=(0,$.jsx)(W.div,{className:o,"data-scroll-anchor":c,initial:l,whileInView:u,viewport:d,transition:p,children:n}),t[6]=n,t[7]=o,t[8]=c,t[9]=p,t[10]=m):m=t[10],m},it=`CONTACT / 05`,at=`Discord`,ot=`shurionno`,st=[.2,.2,.2],ct=[{id:`gmail`,name:`Gmail`,value:`i.r.i.n.a.69kz@gmail.com`,href:`mailto:i.r.i.n.a.69kz@gmail.com`,icon:K,featured:!0},{id:`github`,name:`GitHub`,value:`@Shurahell`,href:`https://github.com/Shurahell`,icon:k},{id:`telegram`,name:`Telegram`,value:`@Shurahell`,href:`https://t.me/Shurahell`,icon:v},{id:`steam`,name:`Steam`,value:`shyrik45`,href:`https://steamcommunity.com/id/shyrik45/`,icon:y}],lt=()=>{let e=(0,Z.c)(53),{t}=m(),[n,r]=(0,Q.useState)(!1),i=(0,Q.useRef)(null),a,o;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(a=()=>()=>{i.current&&globalThis.clearTimeout(i.current)},o=[],e[0]=a,e[1]=o):(a=e[0],o=e[1]),(0,Q.useEffect)(a,o);let s;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(s=async()=>{try{await navigator.clipboard.writeText(ot)}catch{return}r(!0),i.current&&globalThis.clearTimeout(i.current),i.current=globalThis.setTimeout(()=>r(!1),1800)},e[2]=s):s=e[2];let c=s,l;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,$.jsx)(`div`,{className:`portfolio-contact-flow`,"aria-hidden":`true`,children:(0,$.jsx)(nt,{color:st,speed:.3,amplitude:0,mouseReact:!1})}),e[3]=l):l=e[3];let u;e[4]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,$.jsx)(`span`,{className:`portfolio-contact-index`,"aria-hidden":`true`,children:it}),e[4]=u):u=e[4];let d;e[5]===t?d=e[6]:(d=t(`common:landing.contact.title`),e[5]=t,e[6]=d);let f;e[7]===d?f=e[8]:(f=(0,$.jsxs)(`div`,{children:[u,(0,$.jsx)(`h2`,{id:`contact-title`,children:d})]}),e[7]=d,e[8]=f);let p;e[9]===t?p=e[10]:(p=t(`common:landing.contact.description`),e[9]=t,e[10]=p);let h;e[11]===p?h=e[12]:(h=(0,$.jsx)(`p`,{children:p}),e[11]=p,e[12]=h);let g;e[13]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,$.jsx)(`i`,{"aria-hidden":`true`}),e[13]=g):g=e[13];let _;e[14]===t?_=e[15]:(_=t(`common:landing.contact.status`),e[14]=t,e[15]=_);let v;e[16]===_?v=e[17]:(v=(0,$.jsxs)(`span`,{className:`portfolio-contact-status`,children:[g,_]}),e[16]=_,e[17]=v);let y;e[18]!==v||e[19]!==h?(y=(0,$.jsxs)(`div`,{className:`portfolio-contact-intro`,children:[h,v]}),e[18]=v,e[19]=h,e[20]=y):y=e[20];let b;e[21]!==y||e[22]!==f?(b=(0,$.jsxs)(`header`,{className:`portfolio-contact-header`,children:[f,y]}),e[21]=y,e[22]=f,e[23]=b):b=e[23];let x;e[24]===Symbol.for(`react.memo_cache_sentinel`)?(x=ct.map(ut),e[24]=x):x=e[24];let S;e[25]===Symbol.for(`react.memo_cache_sentinel`)?(S=()=>void c(),e[25]=S):S=e[25];let C;e[26]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,$.jsx)(`span`,{className:`portfolio-contact-icon`,children:(0,$.jsx)(re,{"aria-hidden":!0})}),e[26]=C):C=e[26];let w;e[27]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,$.jsxs)(`span`,{className:`portfolio-contact-channel-copy`,children:[(0,$.jsx)(`small`,{children:at}),(0,$.jsx)(`strong`,{children:ot})]}),e[27]=w):w=e[27];let T;e[28]===n?T=e[29]:(T=(0,$.jsx)(`span`,{className:`portfolio-contact-action`,"aria-hidden":`true`,children:n?(0,$.jsx)(M,{}):(0,$.jsx)(q,{})}),e[28]=n,e[29]=T);let E;e[30]!==n||e[31]!==t?(E=t(n?`common:landing.contact.copied`:`common:landing.contact.copyDiscord`),e[30]=n,e[31]=t,e[32]=E):E=e[32];let D;e[33]===E?D=e[34]:(D=(0,$.jsx)(`span`,{className:`sr-only`,"aria-live":`polite`,children:E}),e[33]=E,e[34]=D);let O;e[35]!==T||e[36]!==D?(O=(0,$.jsxs)(`div`,{className:`portfolio-contact-channels`,children:[x,(0,$.jsxs)(`button`,{className:`portfolio-contact-channel portfolio-contact-channel--discord`,type:`button`,onClick:S,children:[C,w,T,D]})]}),e[35]=T,e[36]=D,e[37]=O):O=e[37];let k;e[38]===t?k=e[39]:(k=t(`common:landing.footer.copyright`),e[38]=t,e[39]=k);let A;e[40]===k?A=e[41]:(A=(0,$.jsx)(`p`,{children:k}),e[40]=k,e[41]=A);let j;e[42]===t?j=e[43]:(j=t(`common:landing.footer.author`),e[42]=t,e[43]=j);let N;e[44]===j?N=e[45]:(N=(0,$.jsx)(`span`,{children:j}),e[44]=j,e[45]=N);let P;e[46]!==A||e[47]!==N?(P=(0,$.jsxs)(`footer`,{className:`portfolio-contact-footer`,children:[A,N]}),e[46]=A,e[47]=N,e[48]=P):P=e[48];let F;return e[49]!==b||e[50]!==O||e[51]!==P?(F=(0,$.jsx)(`section`,{className:`portfolio-contact`,id:`contact`,"aria-labelledby":`contact-title`,children:(0,$.jsx)(`div`,{className:`portfolio-container`,children:(0,$.jsx)(rt,{scrollAnchor:!0,children:(0,$.jsxs)(`div`,{className:`portfolio-contact-shell`,children:[l,b,O,P]})})})}),e[49]=b,e[50]=O,e[51]=P,e[52]=F):F=e[52],F};function ut(e){let t=e.icon;return(0,$.jsxs)(`a`,{className:`portfolio-contact-channel portfolio-contact-channel--${e.id}${e.featured?` is-featured`:``}`,href:e.href,target:e.id===`gmail`?void 0:`_blank`,rel:e.id===`gmail`?void 0:`noreferrer`,children:[(0,$.jsx)(`span`,{className:`portfolio-contact-icon`,children:(0,$.jsx)(t,{"aria-hidden":!0})}),(0,$.jsxs)(`span`,{className:`portfolio-contact-channel-copy`,children:[(0,$.jsx)(`small`,{children:e.name}),(0,$.jsx)(`strong`,{children:e.value})]}),(0,$.jsx)(`span`,{className:`portfolio-contact-action`,"aria-hidden":`true`,children:(0,$.jsx)(R,{})})]},e.id)}var dt=`FIELD NOTES / 04`,ft=[{id:`afm`,icon:N,href:`https://www.gov.kz/memleket/entities/afm/press/news/details/1249263?lang=ru`},{id:`hackAlem`,icon:ie,href:`https://www.hackalem.ai/`},{id:`codeMasters`,icon:H,href:`https://astanahub.com/ru/event/oskemen-hub-codemasters-hackathon-7-0/`}],pt=()=>{let e=(0,Z.c)(27),{t}=m(),n;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsx)(`span`,{className:`portfolio-about-index`,"aria-hidden":`true`,children:dt}),e[0]=n):n=e[0];let r;e[1]===t?r=e[2]:(r=t(`common:landing.about.title`),e[1]=t,e[2]=r);let i;e[3]===r?i=e[4]:(i=(0,$.jsxs)(`div`,{children:[n,(0,$.jsx)(`h2`,{id:`about-title`,children:r})]}),e[3]=r,e[4]=i);let a;e[5]===t?a=e[6]:(a=t(`common:landing.about.description`),e[5]=t,e[6]=a);let o;e[7]===a?o=e[8]:(o=(0,$.jsx)(`p`,{children:a}),e[7]=a,e[8]=o);let s;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsx)(`strong`,{children:ft.length}),e[9]=s):s=e[9];let c;e[10]===t?c=e[11]:(c=t(`common:landing.about.events`),e[10]=t,e[11]=c);let l;e[12]===c?l=e[13]:(l=(0,$.jsxs)(`span`,{children:[s,c]}),e[12]=c,e[13]=l);let u;e[14]!==o||e[15]!==l?(u=(0,$.jsxs)(`div`,{className:`portfolio-about-intro`,children:[o,l]}),e[14]=o,e[15]=l,e[16]=u):u=e[16];let d;e[17]!==i||e[18]!==u?(d=(0,$.jsxs)(rt,{className:`portfolio-about-heading`,scrollAnchor:!0,children:[i,u]}),e[17]=i,e[18]=u,e[19]=d):d=e[19];let f;e[20]===t?f=e[21]:(f=ft.map((e,n)=>{let{id:r,icon:i,href:a}=e,o=`common:landing.about.hackathons.${r}`;return(0,$.jsx)(rt,{delay:n*.08,children:(0,$.jsxs)(`a`,{className:`portfolio-hackathon-card portfolio-hackathon-card--${r}`,href:a,target:`_blank`,rel:`noreferrer`,children:[(0,$.jsxs)(`div`,{className:`portfolio-hackathon-card-top`,children:[(0,$.jsx)(`span`,{children:String(n+1).padStart(2,`0`)}),(0,$.jsx)(`i`,{"aria-hidden":`true`,children:(0,$.jsx)(i,{})})]}),(0,$.jsxs)(`div`,{className:`portfolio-hackathon-title`,children:[(0,$.jsx)(`span`,{children:t(`${o}.meta`)}),(0,$.jsx)(`h3`,{children:t(`${o}.title`)})]}),(0,$.jsxs)(`dl`,{className:`portfolio-hackathon-details`,children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:t(`common:landing.about.goal`)}),(0,$.jsx)(`dd`,{children:t(`${o}.goal`)})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`dt`,{children:t(`common:landing.about.theme`)}),(0,$.jsx)(`dd`,{children:t(`${o}.theme`)})]})]}),(0,$.jsxs)(`span`,{className:`portfolio-hackathon-source`,children:[t(`common:landing.about.source`),(0,$.jsx)(z,{"aria-hidden":!0})]})]})},r)}),e[20]=t,e[21]=f);let p;e[22]===f?p=e[23]:(p=(0,$.jsx)(`div`,{className:`portfolio-hackathon-grid`,children:f}),e[22]=f,e[23]=p);let h;return e[24]!==p||e[25]!==d?(h=(0,$.jsx)(`section`,{className:`portfolio-about`,id:`about`,"aria-labelledby":`about-title`,children:(0,$.jsxs)(`div`,{className:`portfolio-container`,children:[d,p]})}),e[24]=p,e[25]=d,e[26]=h):h=e[26],h};function mt(e){let t=e.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);return t?{h:parseFloat(t[1]),s:parseFloat(t[2]),l:parseFloat(t[3])}:{h:40,s:80,l:80}}function ht(e,t){let{h:n,s:r,l:i}=mt(e),a=`${n}deg ${r}% ${i}%`,o=[100,60,50,40,30,20,10],s=[``,`-60`,`-50`,`-40`,`-30`,`-20`,`-10`],c={};for(let e=0;e<o.length;e++)c[`--glow-color${s[e]}`]=`hsl(${a} / ${Math.min(o[e]*t,100)}%)`;return c}var gt=[`80% 55%`,`69% 34%`,`8% 6%`,`41% 38%`,`86% 85%`,`82% 18%`,`51% 4%`],_t=[`--gradient-one`,`--gradient-two`,`--gradient-three`,`--gradient-four`,`--gradient-five`,`--gradient-six`,`--gradient-seven`],vt=[0,1,2,0,1,2,1];function yt(e){let t={};for(let n=0;n<7;n++){let r=e[Math.min(vt[n],e.length-1)];t[_t[n]]=`radial-gradient(at ${gt[n]}, ${r} 0px, transparent 50%)`}return t[`--gradient-base`]=`linear-gradient(${e[0]} 0 100%)`,t}function bt(e){let t=e.trim().replace(`#`,``);if(!/^[\da-f]{3}([\da-f]{3})?$/i.test(t))return!1;let n=t.length===3?t.split(``).map(e=>e+e).join(``):t,r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return r*.2126+i*.7152+a*.0722>180}function xt(e){return 1-(1-e)**3}function St(e){return e*e*e}function Ct({start:e=0,end:t=100,duration:n=1e3,delay:r=0,ease:i=xt,onUpdate:a,onEnd:o}){let s=performance.now()+r;function c(){let r=performance.now()-s,l=Math.min(r/n,1);a(e+(t-e)*i(l)),l<1?requestAnimationFrame(c):o&&o()}setTimeout(()=>requestAnimationFrame(c),r)}var wt=e=>{let t=(0,Z.c)(29),{children:n,className:r,edgeSensitivity:i,glowColor:a,backgroundColor:o,borderRadius:s,glowRadius:c,glowIntensity:l,coneSpread:u,animated:d,colors:f,fillOpacity:p}=e,m=r===void 0?``:r,h=i===void 0?30:i,g=a===void 0?`40 80 80`:a,_=o===void 0?`#120F17`:o,v=s===void 0?28:s,y=c===void 0?40:c,b=l===void 0?1:l,x=u===void 0?25:u,S=d!==void 0&&d,C;t[0]===f?C=t[1]:(C=f===void 0?[`#c084fc`,`#f472b6`,`#38bdf8`]:f,t[0]=f,t[1]=C);let w=C,T=p===void 0?.5:p,E=(0,Q.useRef)(null),D=Tt,O;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(O=(e,t,n)=>{let[r,i]=D(e),a=t-r,o=n-i,s=1/0,c=1/0;return a!==0&&(s=r/Math.abs(a)),o!==0&&(c=i/Math.abs(o)),Math.min(Math.max(1/Math.min(s,c),0),1)},t[2]=O):O=t[2];let k=O,A;t[3]===Symbol.for(`react.memo_cache_sentinel`)?(A=(e,t,n)=>{let[r,i]=D(e),a=t-r,o=n-i;if(a===0&&o===0)return 0;let s=180/Math.PI*Math.atan2(o,a)+90;return s<0&&(s+=360),s},t[3]=A):A=t[3];let j=A,M;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(M=e=>{let t=E.current;if(!t)return;let n=t.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top,a=k(t,r,i),o=j(t,r,i);t.style.setProperty(`--edge-proximity`,`${(a*100).toFixed(3)}`),t.style.setProperty(`--cursor-angle`,`${o.toFixed(3)}deg`)},t[4]=M):M=t[4];let N=M,P,F;t[5]===S?(P=t[6],F=t[7]):(P=()=>{if(!S||!E.current)return;let e=E.current;e.classList.add(`sweep-active`),e.style.setProperty(`--cursor-angle`,`110deg`),Ct({duration:500,onUpdate:t=>e.style.setProperty(`--edge-proximity`,`${t}`)}),Ct({ease:St,duration:1500,end:50,onUpdate:t=>{e.style.setProperty(`--cursor-angle`,`${t/100*355+110}deg`)}}),Ct({ease:xt,delay:1500,duration:2250,start:50,end:100,onUpdate:t=>{e.style.setProperty(`--cursor-angle`,`${t/100*355+110}deg`)}}),Ct({ease:St,delay:2500,duration:1500,start:100,end:0,onUpdate:t=>e.style.setProperty(`--edge-proximity`,`${t}`),onEnd:()=>e.classList.remove(`sweep-active`)})},F=[S],t[5]=S,t[6]=P,t[7]=F),(0,Q.useEffect)(P,F);let I;t[8]!==g||t[9]!==b?(I=ht(g,b),t[8]=g,t[9]=b,t[10]=I):I=t[10];let L=I,R=`border-glow-card${bt(_)?` border-glow-card--light`:``} ${m}`,z=`${v}px`,B=`${y}px`,V;t[11]===w?V=t[12]:(V=yt(w),t[11]=w,t[12]=V);let H;t[13]!==_||t[14]!==x||t[15]!==h||t[16]!==T||t[17]!==L||t[18]!==z||t[19]!==B||t[20]!==V?(H={"--card-bg":_,"--edge-sensitivity":h,"--border-radius":z,"--glow-padding":B,"--cone-spread":x,"--fill-opacity":T,...L,...V},t[13]=_,t[14]=x,t[15]=h,t[16]=T,t[17]=L,t[18]=z,t[19]=B,t[20]=V,t[21]=H):H=t[21];let U=H,W;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,$.jsx)(`span`,{className:`edge-light`}),t[22]=W):W=t[22];let ee;t[23]===n?ee=t[24]:(ee=(0,$.jsx)(`div`,{className:`border-glow-inner`,children:n}),t[23]=n,t[24]=ee);let G;return t[25]!==R||t[26]!==U||t[27]!==ee?(G=(0,$.jsxs)(`div`,{ref:E,onPointerMove:N,className:R,style:U,children:[W,ee]}),t[25]=R,t[26]=U,t[27]=ee,t[28]=G):G=t[28],G};function Tt(e){let{width:t,height:n}=e.getBoundingClientRect();return[t/2,n/2]}var Et=[`#c084fc`,`#f472b6`,`#38bdf8`],Dt=e=>{let t=(0,Z.c)(65),{index:n,project:r,onOpen:i}=e,{t:a}=m(),o=r.icon,s=`common:landing.projects.items.${r.translationKey}`,c=Math.min(n*.04,.2),l;t[0]!==i||t[1]!==r?(l=()=>i(r),t[0]=i,t[1]=r,t[2]=l):l=t[2];let u=String(n+1),d;t[3]===u?d=t[4]:(d=u.padStart(2,`0`),t[3]=u,t[4]=d);let f;t[5]===d?f=t[6]:(f=(0,$.jsx)(`span`,{className:`portfolio-project-card-index`,"aria-hidden":`true`,children:d}),t[5]=d,t[6]=f);let p=r.screenshots[0],h=`${s}.imageAlt`,g;t[7]!==a||t[8]!==h?(g=a(h),t[7]=a,t[8]=h,t[9]=g):g=t[9];let _=n<4?`eager`:`lazy`,v;t[10]!==r.screenshots[0]||t[11]!==g||t[12]!==_?(v=(0,$.jsx)(`img`,{src:p,alt:g,loading:_}),t[10]=r.screenshots[0],t[11]=g,t[12]=_,t[13]=v):v=t[13];let y=r.screenshots.length,b;t[14]===a?b=t[15]:(b=a(`common:landing.projects.screenshots`),t[14]=a,t[15]=b);let x;t[16]!==r.screenshots.length||t[17]!==b?(x=(0,$.jsxs)(`span`,{className:`portfolio-project-image-count`,children:[y,` `,b]}),t[16]=r.screenshots.length,t[17]=b,t[18]=x):x=t[18];let S;t[19]!==v||t[20]!==x?(S=(0,$.jsxs)(`div`,{className:`portfolio-project-image`,children:[v,x]}),t[19]=v,t[20]=x,t[21]=S):S=t[21];let C;t[22]===o?C=t[23]:(C=(0,$.jsx)(o,{"aria-hidden":!0}),t[22]=o,t[23]=C);let w=`${s}.category`,T;t[24]!==a||t[25]!==w?(T=a(w),t[24]=a,t[25]=w,t[26]=T):T=t[26];let E;t[27]!==C||t[28]!==T?(E=(0,$.jsxs)(`span`,{className:`portfolio-project-category`,children:[C,T]}),t[27]=C,t[28]=T,t[29]=E):E=t[29];let D=`${s}.title`,O;t[30]!==a||t[31]!==D?(O=a(D),t[30]=a,t[31]=D,t[32]=O):O=t[32];let k;t[33]===O?k=t[34]:(k=(0,$.jsx)(`h3`,{children:O}),t[33]=O,t[34]=k);let A=`${s}.summary`,j;t[35]!==a||t[36]!==A?(j=a(A),t[35]=a,t[36]=A,t[37]=j):j=t[37];let M;t[38]===j?M=t[39]:(M=(0,$.jsx)(`p`,{children:j}),t[38]=j,t[39]=M);let N;t[40]===r.technologies?N=t[41]:(N=r.technologies.slice(0,2).join(` / `),t[40]=r.technologies,t[41]=N);let P;t[42]===N?P=t[43]:(P=(0,$.jsx)(`span`,{children:N}),t[42]=N,t[43]=P);let F;t[44]===a?F=t[45]:(F=a(`common:landing.projects.open`),t[44]=a,t[45]=F);let I;t[46]===Symbol.for(`react.memo_cache_sentinel`)?(I=(0,$.jsx)(z,{}),t[46]=I):I=t[46];let L;t[47]===F?L=t[48]:(L=(0,$.jsxs)(`span`,{className:`portfolio-project-open`,"aria-hidden":`true`,children:[F,I]}),t[47]=F,t[48]=L);let R;t[49]!==P||t[50]!==L?(R=(0,$.jsxs)(`div`,{className:`portfolio-project-card-footer`,children:[P,L]}),t[49]=P,t[50]=L,t[51]=R):R=t[51];let B;t[52]!==E||t[53]!==k||t[54]!==M||t[55]!==R?(B=(0,$.jsxs)(`div`,{className:`portfolio-project-copy`,children:[E,k,M,R]}),t[52]=E,t[53]=k,t[54]=M,t[55]=R,t[56]=B):B=t[56];let V;t[57]!==S||t[58]!==l||t[59]!==B||t[60]!==f?(V=(0,$.jsx)(wt,{className:`portfolio-project-glow`,backgroundColor:`var(--portfolio-bg)`,borderRadius:20,glowRadius:22,glowIntensity:.62,edgeSensitivity:18,fillOpacity:.13,colors:Et,children:(0,$.jsxs)(`button`,{className:`portfolio-project-card`,type:`button`,"aria-haspopup":`dialog`,onClick:l,children:[f,S,B]})}),t[57]=S,t[58]=l,t[59]=B,t[60]=f,t[61]=V):V=t[61];let H;return t[62]!==c||t[63]!==V?(H=(0,$.jsx)(rt,{className:`portfolio-project-reveal`,delay:c,children:V}),t[62]=c,t[63]=V,t[64]=H):H=t[64],H},Ot=i(),kt=[`scope`,`architecture`,`result`],At=e=>{let t=(0,Z.c)(122),{chronologyIndex:n,project:r,onClose:i}=e,{t:a}=m(),[o,s]=(0,Q.useState)(0),[c,l]=(0,Q.useState)(!1),u=(0,Q.useRef)(null),d;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(d=[],t[0]=d):d=t[0];let f=(0,Q.useRef)(d),p=`common:landing.projects.items.${r.translationKey}`,h=r.screenshots[o],g,v;t[1]!==i||t[2]!==r.screenshots.length?(g=()=>{let e=globalThis.document.body.style.overflow,t=globalThis.document.activeElement,n=e=>{e.key===`Escape`&&i(),(e.key===`ArrowLeft`||e.key===`ArrowRight`)&&(e.preventDefault(),l(!1),s(t=>e.key===`ArrowLeft`?Math.max(0,t-1):Math.min(r.screenshots.length-1,t+1)))};return globalThis.document.body.style.overflow=`hidden`,globalThis.addEventListener(`keydown`,n),u.current?.focus(),()=>{globalThis.document.body.style.overflow=e,globalThis.removeEventListener(`keydown`,n),t instanceof HTMLElement&&t.focus()}},v=[i,r.screenshots.length],t[1]=i,t[2]=r.screenshots.length,t[3]=g,t[4]=v):(g=t[3],v=t[4]),(0,Q.useEffect)(g,v);let y,b;t[5]===o?(y=t[6],b=t[7]):(y=()=>{f.current[o]?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`center`})},b=[o],t[5]=o,t[6]=y,t[7]=b),(0,Q.useEffect)(y,b);let x;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(x=e=>{s(e),l(!1)},t[8]=x):x=t[8];let S=x,C;t[9]===c?C=t[10]:(C=e=>{if(!c)return;let t=e.currentTarget.getBoundingClientRect(),n=(e.clientX-t.left)/t.width*100,r=(e.clientY-t.top)/t.height*100;e.currentTarget.style.setProperty(`--zoom-x`,`${n}%`),e.currentTarget.style.setProperty(`--zoom-y`,`${r}%`)},t[9]=c,t[10]=C);let w=C,T;t[11]===i?T=t[12]:(T=e=>{e.target===e.currentTarget&&i()},t[11]=i,t[12]=T);let E;t[13]===a?E=t[14]:(E=a(`common:landing.projects.projectLabel`),t[13]=a,t[14]=E);let D=String(n+1),k;t[15]===D?k=t[16]:(k=D.padStart(2,`0`),t[15]=D,t[16]=k);let A;t[17]!==k||t[18]!==E?(A=(0,$.jsxs)(`span`,{children:[E,` / `,k]}),t[17]=k,t[18]=E,t[19]=A):A=t[19];let j;t[20]===a?j=t[21]:(j=a(`common:landing.projects.close`),t[20]=a,t[21]=j);let M;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(M=(0,$.jsx)(P,{"aria-hidden":!0}),t[22]=M):M=t[22];let N;t[23]!==i||t[24]!==j?(N=(0,$.jsx)(`button`,{type:`button`,onClick:i,"aria-label":j,ref:u,children:M}),t[23]=i,t[24]=j,t[25]=N):N=t[25];let F;t[26]!==A||t[27]!==N?(F=(0,$.jsxs)(`header`,{className:`portfolio-project-modal-header`,children:[A,N]}),t[26]=A,t[27]=N,t[28]=F):F=t[28];let I=`portfolio-project-stage${c?` is-zoomed`:``}`,L=c?`common:landing.projects.disableZoom`:`common:landing.projects.enableZoom`,R;t[29]!==a||t[30]!==L?(R=a(L),t[29]=a,t[30]=L,t[31]=R):R=t[31];let z;t[32]===Symbol.for(`react.memo_cache_sentinel`)?(z=()=>l(jt),t[32]=z):z=t[32];let B=`${p}.imageAlt`,V;t[33]!==a||t[34]!==B?(V=a(B),t[33]=a,t[34]=B,t[35]=V):V=t[35];let H;t[36]!==h||t[37]!==V?(H=(0,$.jsx)(`img`,{src:h,alt:V,draggable:!1}),t[36]=h,t[37]=V,t[38]=H):H=t[38];let U;t[39]===c?U=t[40]:(U=c?(0,$.jsx)(_,{}):(0,$.jsx)(O,{}),t[39]=c,t[40]=U);let W=c?`common:landing.projects.zoomActive`:`common:landing.projects.zoomHint`,G;t[41]!==a||t[42]!==W?(G=a(W),t[41]=a,t[42]=W,t[43]=G):G=t[43];let K;t[44]!==U||t[45]!==G?(K=(0,$.jsxs)(`span`,{className:`portfolio-project-zoom-hint`,children:[U,G]}),t[44]=U,t[45]=G,t[46]=K):K=t[46];let ne;t[47]!==w||t[48]!==I||t[49]!==R||t[50]!==H||t[51]!==K||t[52]!==c?(ne=(0,$.jsxs)(`button`,{className:I,type:`button`,"aria-label":R,"aria-pressed":c,onClick:z,onPointerMove:w,children:[H,K]}),t[47]=w,t[48]=I,t[49]=R,t[50]=H,t[51]=K,t[52]=c,t[53]=ne):ne=t[53];let q;t[54]!==o||t[55]!==a?(q=o>0?(0,$.jsx)(`button`,{className:`portfolio-project-gallery-arrow`,type:`button`,"aria-label":a(`common:landing.projects.previousScreenshot`),onClick:()=>S(o-1),children:(0,$.jsx)(ee,{"aria-hidden":!0})}):(0,$.jsx)(`span`,{}),t[54]=o,t[55]=a,t[56]=q):q=t[56];let J;t[57]!==r.screenshots||t[58]!==o||t[59]!==a?(J=r.screenshots.map((e,t)=>(0,$.jsxs)(`button`,{className:`portfolio-project-thumbnail${t===o?` is-active`:``}`,type:`button`,"aria-label":a(`common:landing.projects.selectScreenshot`,{number:t+1}),"aria-current":t===o?`true`:void 0,onClick:()=>S(t),ref:e=>{f.current[t]=e},children:[(0,$.jsx)(`img`,{src:e,alt:``,loading:`lazy`}),(0,$.jsx)(`span`,{children:String(t+1).padStart(2,`0`)})]},e)),t[57]=r.screenshots,t[58]=o,t[59]=a,t[60]=J):J=t[60];let re;t[61]===J?re=t[62]:(re=(0,$.jsx)(`div`,{className:`portfolio-project-thumbnails`,children:J}),t[61]=J,t[62]=re);let ie;t[63]!==r.screenshots.length||t[64]!==o||t[65]!==a?(ie=o<r.screenshots.length-1?(0,$.jsx)(`button`,{className:`portfolio-project-gallery-arrow`,type:`button`,"aria-label":a(`common:landing.projects.nextScreenshot`),onClick:()=>S(o+1),children:(0,$.jsx)(te,{"aria-hidden":!0})}):(0,$.jsx)(`span`,{}),t[63]=r.screenshots.length,t[64]=o,t[65]=a,t[66]=ie):ie=t[66];let Y;t[67]!==q||t[68]!==re||t[69]!==ie?(Y=(0,$.jsxs)(`div`,{className:`portfolio-project-gallery-nav`,children:[q,re,ie]}),t[67]=q,t[68]=re,t[69]=ie,t[70]=Y):Y=t[70];let ae;t[71]!==ne||t[72]!==Y?(ae=(0,$.jsxs)(`div`,{className:`portfolio-project-gallery`,children:[ne,Y]}),t[71]=ne,t[72]=Y,t[73]=ae):ae=t[73];let oe=`${p}.category`,se;t[74]!==a||t[75]!==oe?(se=a(oe),t[74]=a,t[75]=oe,t[76]=se):se=t[76];let ce;t[77]===se?ce=t[78]:(ce=(0,$.jsx)(`span`,{children:se}),t[77]=se,t[78]=ce);let le=`${p}.title`,ue;t[79]!==a||t[80]!==le?(ue=a(le),t[79]=a,t[80]=le,t[81]=ue):ue=t[81];let de;t[82]===ue?de=t[83]:(de=(0,$.jsx)(`h2`,{id:`project-modal-title`,children:ue}),t[82]=ue,t[83]=de);let fe=`${p}.description`,pe;t[84]!==a||t[85]!==fe?(pe=a(fe),t[84]=a,t[85]=fe,t[86]=pe):pe=t[86];let me;t[87]===pe?me=t[88]:(me=(0,$.jsx)(`p`,{id:`project-modal-description`,children:pe}),t[87]=pe,t[88]=me);let X;t[89]!==ce||t[90]!==de||t[91]!==me?(X=(0,$.jsxs)(`div`,{className:`portfolio-project-details-main`,children:[ce,de,me]}),t[89]=ce,t[90]=de,t[91]=me,t[92]=X):X=t[92];let he;t[93]!==a||t[94]!==p?(he=kt.map((e,t)=>(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,$.jsx)(`p`,{children:a(`${p}.highlights.${e}`)})]},e)),t[93]=a,t[94]=p,t[95]=he):he=t[95];let ge;t[96]===he?ge=t[97]:(ge=(0,$.jsx)(`div`,{className:`portfolio-project-highlights`,children:he}),t[96]=he,t[97]=ge);let _e;t[98]===a?_e=t[99]:(_e=a(`common:landing.projects.technologies`),t[98]=a,t[99]=_e);let ve;t[100]===_e?ve=t[101]:(ve=(0,$.jsx)(`h3`,{children:_e}),t[100]=_e,t[101]=ve);let ye;t[102]===r.technologies?ye=t[103]:(ye=r.technologies.map(Mt),t[102]=r.technologies,t[103]=ye);let be;t[104]===ye?be=t[105]:(be=(0,$.jsx)(`div`,{children:ye}),t[104]=ye,t[105]=be);let xe;t[106]!==ve||t[107]!==be?(xe=(0,$.jsxs)(`div`,{className:`portfolio-project-technologies`,children:[ve,be]}),t[106]=ve,t[107]=be,t[108]=xe):xe=t[108];let Se;t[109]!==X||t[110]!==ge||t[111]!==xe?(Se=(0,$.jsxs)(`article`,{className:`portfolio-project-details`,children:[X,ge,xe]}),t[109]=X,t[110]=ge,t[111]=xe,t[112]=Se):Se=t[112];let Ce;t[113]!==ae||t[114]!==Se?(Ce=(0,$.jsxs)(`div`,{className:`portfolio-project-modal-scroll`,"data-lenis-prevent":!0,children:[ae,Se]}),t[113]=ae,t[114]=Se,t[115]=Ce):Ce=t[115];let we;t[116]!==F||t[117]!==Ce?(we=(0,$.jsxs)(`section`,{className:`portfolio-project-modal`,role:`dialog`,"aria-modal":`true`,"aria-labelledby":`project-modal-title`,"aria-describedby":`project-modal-description`,children:[F,Ce]}),t[116]=F,t[117]=Ce,t[118]=we):we=t[118];let Te;return t[119]!==we||t[120]!==T?(Te=(0,Ot.createPortal)((0,$.jsx)(`div`,{className:`portfolio-project-modal-backdrop`,role:`presentation`,onMouseDown:T,children:we}),globalThis.document.body),t[119]=we,t[120]=T,t[121]=Te):Te=t[121],Te};function jt(e){return!e}function Mt(e){return(0,$.jsx)(`span`,{children:e},e)}var Nt=(e,t)=>Array.from({length:t},(t,n)=>`/images/projects/${e}/image${n+1}.png`),Pt=[{id:`vko-monitoring`,translationKey:`vkoMonitoring`,icon:U,screenshots:Nt(`vko-monitoring`,7),technologies:[`React`,`TypeScript`,`Node.js`,`PostgreSQL`,`Socket.IO`]},{id:`ai-media-watch`,translationKey:`aiMediaWatch`,icon:L,screenshots:Nt(`ai-media-watch`,7),technologies:[`React`,`FastAPI`,`Whisper`,`OpenCV`,`llama.cpp`]},{id:`my-strange-idol`,translationKey:`myStrangeIdol`,icon:Y,screenshots:Nt(`my-strange-idol`,7),technologies:[`React`,`Ollama`,`Llama`,`Socket.IO`,`PostgreSQL`]},{id:`eda`,translationKey:`eda`,icon:j,screenshots:Nt(`eda`,7),technologies:[`Python`,`pandas`,`NumPy`,`Matplotlib`,`Seaborn`]},{id:`airport-system`,translationKey:`airportSystem`,icon:F,screenshots:Nt(`airport-system`,7),technologies:[`React`,`Material UI`,`Node.js`,`PostgreSQL`]},{id:`mathematical-analysis`,translationKey:`mathematicalAnalysis`,icon:I,screenshots:Nt(`mathematical-analysis`,7),technologies:[`Clickteam Fusion Developer+`,`Desktop`]},{id:`cargo-transportation`,translationKey:`cargoTransportation`,icon:G,screenshots:Nt(`cargo-transportation`,4),technologies:[`React`,`MobX`,`Node.js`,`PostgreSQL`,`JWT`]},{id:`school-project`,translationKey:`schoolProject`,icon:J,screenshots:Nt(`school-project`,7),technologies:[`Clickteam Fusion Developer`,`Desktop`]}],Ft=`WORK / 02`,It=()=>{let e=(0,Z.c)(32),{t}=m(),[n,r]=(0,Q.useState)(null),i;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=()=>r(null),e[0]=i):i=e[0];let a=i,o;e[1]===n?o=e[2]:(o=n?Pt.findIndex(e=>e.id===n.id):-1,e[1]=n,e[2]=o);let s=o,c;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(c=(0,$.jsx)(`span`,{className:`portfolio-projects-index`,"aria-hidden":`true`,children:Ft}),e[3]=c):c=e[3];let l;e[4]===t?l=e[5]:(l=t(`common:landing.projects.title`),e[4]=t,e[5]=l);let u;e[6]===l?u=e[7]:(u=(0,$.jsxs)(`div`,{children:[c,(0,$.jsx)(`h2`,{children:l})]}),e[6]=l,e[7]=u);let d;e[8]===t?d=e[9]:(d=t(`common:landing.projects.description`),e[8]=t,e[9]=d);let f;e[10]===d?f=e[11]:(f=(0,$.jsx)(`p`,{children:d}),e[10]=d,e[11]=f);let p;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,$.jsx)(`strong`,{children:Pt.length}),e[12]=p):p=e[12];let h;e[13]===t?h=e[14]:(h=t(`common:landing.projects.total`),e[13]=t,e[14]=h);let g;e[15]===h?g=e[16]:(g=(0,$.jsxs)(`span`,{children:[p,h]}),e[15]=h,e[16]=g);let _;e[17]!==f||e[18]!==g?(_=(0,$.jsxs)(`div`,{className:`portfolio-projects-intro`,children:[f,g]}),e[17]=f,e[18]=g,e[19]=_):_=e[19];let v;e[20]!==_||e[21]!==u?(v=(0,$.jsxs)(rt,{className:`portfolio-projects-heading`,scrollAnchor:!0,children:[u,_]}),e[20]=_,e[21]=u,e[22]=v):v=e[22];let y;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,$.jsx)(`div`,{className:`portfolio-project-grid`,children:Pt.map((e,t)=>(0,$.jsx)(Dt,{project:e,index:t,onOpen:r},e.id))}),e[23]=y):y=e[23];let b;e[24]===v?b=e[25]:(b=(0,$.jsxs)(`div`,{className:`portfolio-container`,children:[v,y]}),e[24]=v,e[25]=b);let x;e[26]!==s||e[27]!==n?(x=n&&s>=0?(0,$.jsx)(At,{project:n,chronologyIndex:s,onClose:a}):null,e[26]=s,e[27]=n,e[28]=x):x=e[28];let S;return e[29]!==b||e[30]!==x?(S=(0,$.jsxs)(`section`,{className:`portfolio-projects`,id:`projects`,children:[b,x]}),e[29]=b,e[30]=x,e[31]=S):S=e[31],S},Lt={duration:1.6,easing:e=>Math.min(1,1.001-2**(-10*e)),gestureOrientation:`vertical`,orientation:`vertical`,smoothWheel:!0,touchMultiplier:2,wheelMultiplier:1},Rt=()=>{let e=(0,Z.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=[],e[0]=t):t=e[0],(0,Q.useEffect)(Ht,t),null};function zt(){return globalThis.cancelAnimationFrame(0)}function Bt(){return-(document.querySelector(`.portfolio-nav`)?.offsetHeight??52)-28}function Vt(e){return e===`#top`?document.body:document.querySelector(`#${globalThis.CSS.escape(e.slice(1))}`)}function Ht(){if(globalThis.matchMedia(`(prefers-reduced-motion: reduce)`).matches)return zt;let e=new ne(Lt),t=0,n=0,r=Bt,i=Vt,a=e=>{let t=i(e);return e===`#top`||!t?t:t.querySelector(`[data-scroll-anchor]`)??t},o=t=>{let n=a(t);n&&e.scrollTo(n,{offset:t===`#top`?0:r()})},s=n=>{e.raf(n),t=globalThis.requestAnimationFrame(s)},c=e=>{let{target:t}=e;if(!(t instanceof Element))return;let n=t.closest(`a[href^="#"]`)?.getAttribute(`href`);n&&n!==`#`&&a(n)&&(e.preventDefault(),globalThis.history.pushState(null,``,n),o(n))},l=()=>o(globalThis.location.hash||`#top`);return t=globalThis.requestAnimationFrame(s),document.addEventListener(`click`,c),globalThis.addEventListener(`popstate`,l),globalThis.location.hash?n=globalThis.requestAnimationFrame(()=>o(globalThis.location.hash)):e.scrollTo(0,{immediate:!0}),()=>{document.removeEventListener(`click`,c),globalThis.removeEventListener(`popstate`,l),globalThis.cancelAnimationFrame(t),globalThis.cancelAnimationFrame(n),e.destroy()}}var Ut=`SYSTEM / 03`,Wt=[{id:`foundation`,index:`01`,items:[[`TypeScript`,`typescript.svg`,`https://www.typescriptlang.org/`],[`Node.js`,`nodejs.svg`,`https://nodejs.org/`],[`PostgreSQL`,`postgresql.svg`,`https://www.postgresql.org/`],[`Python`,`python.svg`,`https://www.python.org/`]]},{id:`interface`,index:`02`,items:[[`React`,`react.svg`,`https://react.dev/`],[`Next.js`,`nextjs.svg`,`https://nextjs.org/`],[`Vite`,`vite.svg`,`https://vite.dev/`],[`MUI`,`mui.svg`,`https://mui.com/`],[`Axios`,`axios.svg`,`https://axios-http.com/`],[`Express`,`express.svg`,`https://expressjs.com/`],[`React Bits`,`react-bits.svg`,`https://reactbits.dev/`]]},{id:`intelligence`,index:`03`,items:[[`OpenAI`,`openai.svg`,`https://openai.com/`],[`Ollama`,`ollama.svg`,`https://ollama.com/`],[`llama.cpp`,`llama-cpp.svg`,`https://github.com/ggml-org/llama.cpp`],[`PyTorch`,`pytorch.svg`,`https://pytorch.org/`],[`TensorFlow`,`tensorflow.svg`,`https://www.tensorflow.org/`],[`scikit-learn`,`scikit-learn.svg`,`https://scikit-learn.org/`]]},{id:`dataCreative`,index:`04`,items:[[`NumPy`,`numpy.svg`,`https://numpy.org/`],[`SciPy`,`scipy.svg`,`https://scipy.org/`],[`Pandas`,`pandas.svg`,`https://pandas.pydata.org/`],[`Matplotlib`,`matplotlib.svg`,`https://matplotlib.org/`],[`Seaborn`,`seaborn.svg`,`https://seaborn.pydata.org/`],[`Clickteam Fusion`,`clickteam-fusion-developer.svg`,`https://www.clickteam.com/clickteam-fusion-2-5-developer`]]}],Gt=Wt.reduce((e,t)=>e+t.items.length,0),Kt=()=>{let e=(0,Z.c)(36),{t}=m(),n;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(n=(0,$.jsx)(`span`,{className:`portfolio-stack-index`,"aria-hidden":`true`,children:Ut}),e[0]=n):n=e[0];let r;e[1]===t?r=e[2]:(r=t(`common:landing.techStack.title`),e[1]=t,e[2]=r);let i;e[3]===r?i=e[4]:(i=(0,$.jsxs)(`div`,{className:`portfolio-stack-title-block`,children:[n,(0,$.jsx)(`h2`,{id:`stack-title`,children:r})]}),e[3]=r,e[4]=i);let a;e[5]===t?a=e[6]:(a=t(`common:landing.techStack.description`),e[5]=t,e[6]=a);let o;e[7]===a?o=e[8]:(o=(0,$.jsx)(`p`,{children:a}),e[7]=a,e[8]=o);let s;e[9]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,$.jsx)(`strong`,{children:Gt}),e[9]=s):s=e[9];let c;e[10]===t?c=e[11]:(c=t(`common:landing.techStack.stats.technologies`),e[10]=t,e[11]=c);let l;e[12]===c?l=e[13]:(l=(0,$.jsxs)(`span`,{children:[s,c]}),e[12]=c,e[13]=l);let u;e[14]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,$.jsx)(`strong`,{children:Wt.length}),e[14]=u):u=e[14];let d;e[15]===t?d=e[16]:(d=t(`common:landing.techStack.stats.systems`),e[15]=t,e[16]=d);let f;e[17]===d?f=e[18]:(f=(0,$.jsxs)(`span`,{children:[u,d]}),e[17]=d,e[18]=f);let p;e[19]!==f||e[20]!==l?(p=(0,$.jsxs)(`div`,{className:`portfolio-stack-stats`,"aria-hidden":`true`,children:[l,f]}),e[19]=f,e[20]=l,e[21]=p):p=e[21];let h;e[22]!==p||e[23]!==o?(h=(0,$.jsxs)(`div`,{className:`portfolio-stack-summary`,children:[o,p]}),e[22]=p,e[23]=o,e[24]=h):h=e[24];let g;e[25]!==h||e[26]!==i?(g=(0,$.jsxs)(rt,{className:`portfolio-stack-heading`,scrollAnchor:!0,children:[i,h]}),e[25]=h,e[26]=i,e[27]=g):g=e[27];let _;e[28]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,$.jsx)(`div`,{className:`portfolio-tech-map-line`,"aria-hidden":`true`,children:(0,$.jsx)(`span`,{})}),e[28]=_):_=e[28];let v;e[29]===t?v=e[30]:(v=Wt.map((e,n)=>(0,$.jsxs)(rt,{className:`portfolio-tech-cluster portfolio-tech-cluster--${e.id}`,delay:n*.06,children:[(0,$.jsxs)(`header`,{className:`portfolio-tech-cluster-header`,children:[(0,$.jsx)(`span`,{children:e.index}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`h3`,{children:t(`common:landing.techStack.groups.${e.id}.title`)}),(0,$.jsx)(`p`,{children:t(`common:landing.techStack.groups.${e.id}.caption`)})]})]}),(0,$.jsx)(`div`,{className:`portfolio-tech-grid`,children:e.items.map(e=>{let[n,r,i]=e;return(0,$.jsxs)(`a`,{className:`portfolio-tech-item`,href:i,target:`_blank`,rel:`noreferrer`,"aria-label":`${n} — ${t(`common:landing.techStack.officialSource`)}`,children:[(0,$.jsx)(`span`,{className:`portfolio-tech-icon`,children:(0,$.jsx)(`img`,{src:`/tech/${r}`,alt:``,loading:`lazy`})}),(0,$.jsx)(`strong`,{children:n}),(0,$.jsx)(R,{"aria-hidden":!0})]},n)})})]},e.id)),e[29]=t,e[30]=v);let y;e[31]===v?y=e[32]:(y=(0,$.jsxs)(`div`,{className:`portfolio-tech-map`,children:[_,v]}),e[31]=v,e[32]=y);let b;return e[33]!==g||e[34]!==y?(b=(0,$.jsx)(`section`,{className:`portfolio-stack`,id:`stack`,"aria-labelledby":`stack-title`,children:(0,$.jsxs)(`div`,{className:`portfolio-container`,children:[g,y]})}),e[33]=g,e[34]=y,e[35]=b):b=e[35],b},qt=`PROFILE / 01`,Jt=[`top`,`projects`,`stack`,`about`,`contact`],Yt=(e,t)=>{if(/^#[\da-f]{6}$/iu.test(e))return e;if(typeof document>`u`)return t;let n=/^var\((?<name>--[^,)]+)/u.exec(e)?.groups?.name,r=n?getComputedStyle(document.documentElement).getPropertyValue(n).trim():``;return/^#[\da-f]{6}$/iu.test(r)?r:t},Xt=()=>{let e=(0,Z.c)(61),{t}=m(),n=$e(),r;e[0]===n.primary?r=e[1]:(r=Yt(n.primary,`#3f51b5`),e[0]=n.primary,e[1]=r);let i;e[2]===n.success?i=e[3]:(i=Yt(n.success,`#ffffff`),e[2]=n.success,e[3]=i);let a;e[4]===n.secondary?a=e[5]:(a=Yt(n.secondary,`#673ab7`),e[4]=n.secondary,e[5]=a);let o;e[6]!==r||e[7]!==i||e[8]!==a?(o=[r,i,a],e[6]=r,e[7]=i,e[8]=a,e[9]=o):o=e[9];let s=o,[c,l]=(0,Q.useState)(`top`),u,d;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(u=()=>{let e=0,t=()=>{let e=globalThis.innerHeight*.4,t=`top`;if(globalThis.scrollY+globalThis.innerHeight>=document.documentElement.scrollHeight-2){l(`contact`);return}for(let n of Jt){let r=n===`top`?document.querySelector(`.portfolio-hero`):document.querySelector(`#${n}`);r&&r.getBoundingClientRect().top<=e&&(t=n)}l(e=>e===t?e:t)},n=()=>{globalThis.cancelAnimationFrame(e),e=globalThis.requestAnimationFrame(t)};return t(),globalThis.addEventListener(`scroll`,n,{passive:!0}),globalThis.addEventListener(`resize`,n),()=>{globalThis.cancelAnimationFrame(e),globalThis.removeEventListener(`scroll`,n),globalThis.removeEventListener(`resize`,n)}},d=[],e[10]=u,e[11]=d):(u=e[10],d=e[11]),(0,Q.useEffect)(u,d);let f,p;e[12]===Symbol.for(`react.memo_cache_sentinel`)?(f=(0,$.jsx)(Rt,{}),p=(0,$.jsx)(ge,{}),e[12]=f,e[13]=p):(f=e[12],p=e[13]);let h;e[14]===s?h=e[15]:(h=(0,$.jsx)(`div`,{className:`portfolio-ribbons`,"aria-hidden":`true`,children:(0,$.jsx)(Ue,{colors:s,baseThickness:12,offsetFactor:.025,maxAge:260,pointCount:36,speedMultiplier:.8,enableFade:!0})}),e[14]=s,e[15]=h);let g;e[16]===t?g=e[17]:(g=t(`common:landing.navigation.skipToMain`),e[16]=t,e[17]=g);let _;e[18]===g?_=e[19]:(_=(0,$.jsx)(`a`,{className:`portfolio-skip`,href:`#main-content`,children:g}),e[18]=g,e[19]=_);let v;e[20]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,$.jsx)(`div`,{className:`portfolio-backdrop`,"aria-hidden":`true`,children:(0,$.jsx)(Ve,{color:`#c755f7`,backgroundColor:`#291147`,speed:.7,curvature:0,scanlineStrength:.17,scanlineFrequency:120,waveAmplitude:.5,waveFrequency:6,bloom:.25,bloomRadius:.1,noise:.25,vignette:1,brightness:.5,pixelation:1,rgbShift:.01,mouseReact:!0,mouseStrength:.66,dpr:1,fps:30})}),e[20]=v):v=e[20];let y;e[21]===t?y=e[22]:(y=t(`common:landing.navigation.primary`),e[21]=t,e[22]=y);let b;e[23]===Symbol.for(`react.memo_cache_sentinel`)?(b={top:`calc(var(--safe-top) + 15px)`},e[23]=b):b=e[23];let x;e[24]!==c||e[25]!==t?(x=Jt.map(e=>(0,$.jsx)(`a`,{className:`portfolio-nav-link${c===e?` is-active`:``}`,href:`#${e}`,"aria-current":c===e?`location`:void 0,children:t(`common:landing.navigation.${e===`top`?`home`:e}`)},e)),e[24]=c,e[25]=t,e[26]=x):x=e[26];let S;e[27]===x?S=e[28]:(S=(0,$.jsx)(`div`,{className:`portfolio-nav-sections`,children:x}),e[27]=x,e[28]=S);let C;e[29]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,$.jsx)(`div`,{className:`portfolio-nav-language`,children:(0,$.jsx)(Re,{})}),e[29]=C):C=e[29];let w;e[30]===S?w=e[31]:(w=(0,$.jsxs)(`div`,{className:`portfolio-nav-inner`,children:[S,C]}),e[30]=S,e[31]=w);let T;e[32]!==y||e[33]!==w?(T=(0,$.jsx)(`nav`,{className:`portfolio-nav`,"aria-label":y,style:b,children:w}),e[32]=y,e[33]=w,e[34]=T):T=e[34];let E;e[35]===Symbol.for(`react.memo_cache_sentinel`)?(E={paddingTop:`var(--safe-top)`},e[35]=E):E=e[35];let D;e[36]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,$.jsx)(rt,{className:`portfolio-portrait-column`,children:(0,$.jsx)(He,{padding:72,magnetStrength:5,wrapperClassName:`portfolio-portrait-magnet`,children:(0,$.jsx)(`div`,{className:`portfolio-portrait-frame`,children:(0,$.jsx)(`img`,{src:`/shurahell-portrait.png`,alt:`Shurahell character portrait`})})})}),e[36]=D):D=e[36];let O;e[37]===Symbol.for(`react.memo_cache_sentinel`)?(O=(0,$.jsx)(Qe,{text:`Shurahell`,color:`#f8f5ff`,warpStrength:.08,warpScale:1.6,speed:.55,pointerInfluence:.75,pointerStrength:.38,refraction:.018,ripple:!0,fontSize:`clamp(3rem, 10vw, 9rem)`,fontWeight:800,style:{height:`320px`},fontFamily:`ui-monospace, SFMono-Regular, Menlo, monospace`,letterSpacing:-.08}),e[37]=O):O=e[37];let k;e[38]===Symbol.for(`react.memo_cache_sentinel`)?(k=(0,$.jsx)(`span`,{className:`portfolio-hero-label`,"aria-hidden":`true`,children:qt}),e[38]=k):k=e[38];let A;e[39]===t?A=e[40]:(A=t(`common:landing.hero.role`),e[39]=t,e[40]=A);let j;e[41]===A?j=e[42]:(j=(0,$.jsx)(`p`,{className:`portfolio-hero-role`,children:A}),e[41]=A,e[42]=j);let M;e[43]===t?M=e[44]:(M=t(`common:landing.hero.motto`),e[43]=t,e[44]=M);let N;e[45]===M?N=e[46]:(N=(0,$.jsx)(`p`,{className:`portfolio-hero-motto`,children:M}),e[45]=M,e[46]=N);let P;e[47]!==j||e[48]!==N?(P=(0,$.jsx)(`section`,{className:`portfolio-hero`,id:`top`,children:(0,$.jsxs)(`div`,{className:`portfolio-container portfolio-hero-grid`,children:[D,(0,$.jsxs)(rt,{className:`portfolio-warp-name`,delay:.1,children:[O,(0,$.jsxs)(`div`,{className:`portfolio-hero-identity`,children:[k,j,N]})]})]})}),e[47]=j,e[48]=N,e[49]=P):P=e[49];let F,I,L,R;e[50]===Symbol.for(`react.memo_cache_sentinel`)?(F=(0,$.jsx)(It,{}),I=(0,$.jsx)(Kt,{}),L=(0,$.jsx)(pt,{}),R=(0,$.jsx)(lt,{}),e[50]=F,e[51]=I,e[52]=L,e[53]=R):(F=e[50],I=e[51],L=e[52],R=e[53]);let z;e[54]===P?z=e[55]:(z=(0,$.jsxs)(`div`,{id:`main-content`,className:`portfolio-main`,style:E,children:[P,F,I,L,R]}),e[54]=P,e[55]=z);let B;return e[56]!==_||e[57]!==T||e[58]!==z||e[59]!==h?(B=(0,$.jsxs)(`main`,{className:`portfolio-landing select-none`,children:[f,p,h,_,v,T,z]}),e[56]=_,e[57]=T,e[58]=z,e[59]=h,e[60]=B):B=e[60],B};function Zt(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function Qt({SIM_RESOLUTION:e=128,DYE_RESOLUTION:t=1440,CAPTURE_RESOLUTION:n=512,DENSITY_DISSIPATION:r=3.5,VELOCITY_DISSIPATION:i=2,PRESSURE:a=.1,PRESSURE_ITERATIONS:o=20,CURL:s=3,SPLAT_RADIUS:c=.2,SPLAT_FORCE:l=6e3,SHADING:u=!0,COLOR_UPDATE_SPEED:d=10,BACK_COLOR:f={r:.5,g:0,b:0},TRANSPARENT:p=!0,RAINBOW_MODE:m=!1,COLOR:h=`#ff0000`}){let g=(0,Q.useRef)(null);return(0,Q.useEffect)(()=>{let _=g.current;if(!_)return;let v=[Zt()],y={SIM_RESOLUTION:e,DYE_RESOLUTION:t,CAPTURE_RESOLUTION:n,DENSITY_DISSIPATION:r,VELOCITY_DISSIPATION:i,PRESSURE:a,PRESSURE_ITERATIONS:o,CURL:s,SPLAT_RADIUS:c,SPLAT_FORCE:l,SHADING:u,COLOR_UPDATE_SPEED:d,PAUSED:!1,BACK_COLOR:f,TRANSPARENT:p,RAINBOW_MODE:m,COLOR:h},{gl:b,ext:x}=S(_);if(!b||!x)return;x.supportLinearFiltering||(y.DYE_RESOLUTION=256,y.SHADING=!1);function S(e){let t={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1},n=e.getContext(`webgl2`,t);if(n||=e.getContext(`webgl`,t)||e.getContext(`experimental-webgl`,t),!n)throw Error(`Unable to initialize WebGL.`);let r=`drawBuffers`in n,i=!1,a=null;r?(n.getExtension(`EXT_color_buffer_float`),i=!!n.getExtension(`OES_texture_float_linear`)):(a=n.getExtension(`OES_texture_half_float`),i=!!n.getExtension(`OES_texture_half_float_linear`)),n.clearColor(0,0,0,1);let o=r?n.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0,s,c,l;if(r?(s=C(n,n.RGBA16F,n.RGBA,o),c=C(n,n.RG16F,n.RG,o),l=C(n,n.R16F,n.RED,o)):(s=C(n,n.RGBA,n.RGBA,o),c=C(n,n.RGBA,n.RGBA,o),l=C(n,n.RGBA,n.RGBA,o)),!s||!c||!l)throw Error(`Unable to initialize WebGL render texture formats.`);return{gl:n,ext:{formatRGBA:s,formatRG:c,formatR:l,halfFloatTexType:o,supportLinearFiltering:i}}}function C(e,t,n,r){if(!w(e,t,n,r)){if(`drawBuffers`in e){let n=e;switch(t){case n.R16F:return C(n,n.RG16F,n.RG,r);case n.RG16F:return C(n,n.RGBA16F,n.RGBA,r);default:return null}}return null}return{internalFormat:t,format:n}}function w(e,t,n,r){let i=e.createTexture();if(!i)return!1;e.bindTexture(e.TEXTURE_2D,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,t,4,4,0,n,r,null);let a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function T(e){if(!e.length)return 0;let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function E(e,t){if(!t)return e;let n=``;for(let e of t)n+=`#define ${e}\n`;return n+e}function D(e,t,n=null){let r=E(t,n),i=b.createShader(e);return i?(b.shaderSource(i,r),b.compileShader(i),b.getShaderParameter(i,b.COMPILE_STATUS)||console.trace(b.getShaderInfoLog(i)),i):null}function O(e,t){if(!e||!t)return null;let n=b.createProgram();return n?(b.attachShader(n,e),b.attachShader(n,t),b.linkProgram(n),b.getProgramParameter(n,b.LINK_STATUS)||console.trace(b.getProgramInfoLog(n)),n):null}function k(e){let t={},n=b.getProgramParameter(e,b.ACTIVE_UNIFORMS);for(let r=0;r<n;r++){let n=b.getActiveUniform(e,r);n&&(t[n.name]=b.getUniformLocation(e,n.name))}return t}class A{program;uniforms;constructor(e,t){this.program=O(e,t),this.uniforms=this.program?k(this.program):{}}bind(){this.program&&b.useProgram(this.program)}}class j{vertexShader;fragmentShaderSource;programs;activeProgram;uniforms;constructor(e,t){this.vertexShader=e,this.fragmentShaderSource=t,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(e){let t=0;for(let n of e)t+=T(n);let n=this.programs[t];if(n==null){let r=D(b.FRAGMENT_SHADER,this.fragmentShaderSource,e);n=O(this.vertexShader,r),this.programs[t]=n}n!==this.activeProgram&&(n&&(this.uniforms=k(n)),this.activeProgram=n)}bind(){this.activeProgram&&b.useProgram(this.activeProgram)}}let M=D(b.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),N=D(b.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),P=D(b.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),F=D(b.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),I=D(b.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,x.supportLinearFiltering?null:[`MANUAL_FILTERING`]),L=D(b.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),R=D(b.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),z=D(b.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),B=D(b.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),V=D(b.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),H=(()=>{let e=b.createBuffer();b.bindBuffer(b.ARRAY_BUFFER,e),b.bufferData(b.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),b.STATIC_DRAW);let t=b.createBuffer();return b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,t),b.bufferData(b.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),b.STATIC_DRAW),b.vertexAttribPointer(0,2,b.FLOAT,!1,0,0),b.enableVertexAttribArray(0),(e,t=!1)=>{b&&(e?(b.viewport(0,0,e.width,e.height),b.bindFramebuffer(b.FRAMEBUFFER,e.fbo)):(b.viewport(0,0,b.drawingBufferWidth,b.drawingBufferHeight),b.bindFramebuffer(b.FRAMEBUFFER,null)),t&&(b.clearColor(0,0,0,1),b.clear(b.COLOR_BUFFER_BIT)),b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0))}})(),U,W,ee,G,K,te=new A(M,N),ne=new A(M,P),q=new A(M,F),J=new A(M,I),re=new A(M,L),ie=new A(M,R),Y=new A(M,z),ae=new A(M,B),oe=new A(M,V),se=new j(M,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `);function ce(e,t,n,r,i,a){b.activeTexture(b.TEXTURE0);let o=b.createTexture();b.bindTexture(b.TEXTURE_2D,o),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,a),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE),b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE),b.texImage2D(b.TEXTURE_2D,0,n,e,t,0,r,i,null);let s=b.createFramebuffer();return b.bindFramebuffer(b.FRAMEBUFFER,s),b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,o,0),b.viewport(0,0,e,t),b.clear(b.COLOR_BUFFER_BIT),{texture:o,fbo:s,width:e,height:t,texelSizeX:1/e,texelSizeY:1/t,attach(e){return b.activeTexture(b.TEXTURE0+e),b.bindTexture(b.TEXTURE_2D,o),e}}}function le(e,t,n,r,i,a){let o=ce(e,t,n,r,i,a),s=ce(e,t,n,r,i,a);return{width:e,height:t,texelSizeX:o.texelSizeX,texelSizeY:o.texelSizeY,read:o,write:s,swap(){let e=this.read;this.read=this.write,this.write=e}}}function ue(e,t,n,r,i,a,o){let s=ce(t,n,r,i,a,o);return te.bind(),te.uniforms.uTexture&&b.uniform1i(te.uniforms.uTexture,e.attach(0)),H(s,!1),s}function de(e,t,n,r,i,a,o){return e.width===t&&e.height===n?e:(e.read=ue(e.read,t,n,r,i,a,o),e.write=ce(t,n,r,i,a,o),e.width=t,e.height=n,e.texelSizeX=1/t,e.texelSizeY=1/n,e)}function fe(){let e=me(y.SIM_RESOLUTION),t=me(y.DYE_RESOLUTION),n=x.halfFloatTexType,r=x.formatRGBA,i=x.formatRG,a=x.formatR,o=x.supportLinearFiltering?b.LINEAR:b.NEAREST;b.disable(b.BLEND),U=U?de(U,t.width,t.height,r.internalFormat,r.format,n,o):le(t.width,t.height,r.internalFormat,r.format,n,o),W=W?de(W,e.width,e.height,i.internalFormat,i.format,n,o):le(e.width,e.height,i.internalFormat,i.format,n,o),ee=ce(e.width,e.height,a.internalFormat,a.format,n,b.NEAREST),G=ce(e.width,e.height,a.internalFormat,a.format,n,b.NEAREST),K=le(e.width,e.height,a.internalFormat,a.format,n,b.NEAREST)}function pe(){let e=[];y.SHADING&&e.push(`SHADING`),se.setKeywords(e)}function me(e){let t=b.drawingBufferWidth,n=b.drawingBufferHeight,r=t/n,i=r<1?1/r:r,a=Math.round(e),o=Math.round(e*i);return t>n?{width:o,height:a}:{width:a,height:o}}function X(e){let t=window.devicePixelRatio||1;return Math.floor(e*t)}pe(),fe();let he=Date.now(),Z=0;function Q(){let e=$();ge()&&fe(),_e(e),ve(),ye(e),be(null),requestAnimationFrame(Q)}function $(){let e=Date.now(),t=(e-he)/1e3;return t=Math.min(t,.016666),he=e,t}function ge(){let e=X(_.clientWidth),t=X(_.clientHeight);return _.width!==e||_.height!==t?(_.width=e,_.height=t,!0):!1}function _e(e){Z+=e*y.COLOR_UPDATE_SPEED,Z>=1&&(Z=Pe(Z,0,1),v.forEach(e=>{e.color=Me()}))}function ve(){for(let e of v)e.moved&&(e.moved=!1,Se(e))}function ye(e){b.disable(b.BLEND),ie.bind(),ie.uniforms.texelSize&&b.uniform2f(ie.uniforms.texelSize,W.texelSizeX,W.texelSizeY),ie.uniforms.uVelocity&&b.uniform1i(ie.uniforms.uVelocity,W.read.attach(0)),H(G),Y.bind(),Y.uniforms.texelSize&&b.uniform2f(Y.uniforms.texelSize,W.texelSizeX,W.texelSizeY),Y.uniforms.uVelocity&&b.uniform1i(Y.uniforms.uVelocity,W.read.attach(0)),Y.uniforms.uCurl&&b.uniform1i(Y.uniforms.uCurl,G.attach(1)),Y.uniforms.curl&&b.uniform1f(Y.uniforms.curl,y.CURL),Y.uniforms.dt&&b.uniform1f(Y.uniforms.dt,e),H(W.write),W.swap(),re.bind(),re.uniforms.texelSize&&b.uniform2f(re.uniforms.texelSize,W.texelSizeX,W.texelSizeY),re.uniforms.uVelocity&&b.uniform1i(re.uniforms.uVelocity,W.read.attach(0)),H(ee),ne.bind(),ne.uniforms.uTexture&&b.uniform1i(ne.uniforms.uTexture,K.read.attach(0)),ne.uniforms.value&&b.uniform1f(ne.uniforms.value,y.PRESSURE),H(K.write),K.swap(),ae.bind(),ae.uniforms.texelSize&&b.uniform2f(ae.uniforms.texelSize,W.texelSizeX,W.texelSizeY),ae.uniforms.uDivergence&&b.uniform1i(ae.uniforms.uDivergence,ee.attach(0));for(let e=0;e<y.PRESSURE_ITERATIONS;e++)ae.uniforms.uPressure&&b.uniform1i(ae.uniforms.uPressure,K.read.attach(1)),H(K.write),K.swap();oe.bind(),oe.uniforms.texelSize&&b.uniform2f(oe.uniforms.texelSize,W.texelSizeX,W.texelSizeY),oe.uniforms.uPressure&&b.uniform1i(oe.uniforms.uPressure,K.read.attach(0)),oe.uniforms.uVelocity&&b.uniform1i(oe.uniforms.uVelocity,W.read.attach(1)),H(W.write),W.swap(),J.bind(),J.uniforms.texelSize&&b.uniform2f(J.uniforms.texelSize,W.texelSizeX,W.texelSizeY),!x.supportLinearFiltering&&J.uniforms.dyeTexelSize&&b.uniform2f(J.uniforms.dyeTexelSize,W.texelSizeX,W.texelSizeY);let t=W.read.attach(0);J.uniforms.uVelocity&&b.uniform1i(J.uniforms.uVelocity,t),J.uniforms.uSource&&b.uniform1i(J.uniforms.uSource,t),J.uniforms.dt&&b.uniform1f(J.uniforms.dt,e),J.uniforms.dissipation&&b.uniform1f(J.uniforms.dissipation,y.VELOCITY_DISSIPATION),H(W.write),W.swap(),!x.supportLinearFiltering&&J.uniforms.dyeTexelSize&&b.uniform2f(J.uniforms.dyeTexelSize,U.texelSizeX,U.texelSizeY),J.uniforms.uVelocity&&b.uniform1i(J.uniforms.uVelocity,W.read.attach(0)),J.uniforms.uSource&&b.uniform1i(J.uniforms.uSource,U.read.attach(1)),J.uniforms.dissipation&&b.uniform1f(J.uniforms.dissipation,y.DENSITY_DISSIPATION),H(U.write),U.swap()}function be(e){b.blendFunc(b.ONE,b.ONE_MINUS_SRC_ALPHA),b.enable(b.BLEND),xe(e)}function xe(e){let t=e?e.width:b.drawingBufferWidth,n=e?e.height:b.drawingBufferHeight;se.bind(),y.SHADING&&se.uniforms.texelSize&&b.uniform2f(se.uniforms.texelSize,1/t,1/n),se.uniforms.uTexture&&b.uniform1i(se.uniforms.uTexture,U.read.attach(0)),H(e,!1)}function Se(e){let t=e.deltaX*y.SPLAT_FORCE,n=e.deltaY*y.SPLAT_FORCE;we(e.texcoordX,e.texcoordY,t,n,e.color)}function Ce(e){let t=Me();t.r*=10,t.g*=10,t.b*=10;let n=10*(Math.random()-.5),r=30*(Math.random()-.5);we(e.texcoordX,e.texcoordY,n,r,t)}function we(e,t,n,r,i){q.bind(),q.uniforms.uTarget&&b.uniform1i(q.uniforms.uTarget,W.read.attach(0)),q.uniforms.aspectRatio&&b.uniform1f(q.uniforms.aspectRatio,_.width/_.height),q.uniforms.point&&b.uniform2f(q.uniforms.point,e,t),q.uniforms.color&&b.uniform3f(q.uniforms.color,n,r,0),q.uniforms.radius&&b.uniform1f(q.uniforms.radius,Te(y.SPLAT_RADIUS/100)),H(W.write),W.swap(),q.uniforms.uTarget&&b.uniform1i(q.uniforms.uTarget,U.read.attach(0)),q.uniforms.color&&b.uniform3f(q.uniforms.color,i.r,i.g,i.b),H(U.write),U.swap()}function Te(e){let t=_.width/_.height;return t>1&&(e*=t),e}function Ee(e,t,n,r){e.id=t,e.down=!0,e.moved=!1,e.texcoordX=n/_.width,e.texcoordY=1-r/_.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=Me()}function De(e,t,n,r){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=t/_.width,e.texcoordY=1-n/_.height,e.deltaX=ke(e.texcoordX-e.prevTexcoordX),e.deltaY=Ae(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=r}function Oe(e){e.down=!1}function ke(e){let t=_.width/_.height;return t<1&&(e*=t),e}function Ae(e){let t=_.width/_.height;return t>1&&(e/=t),e}function je(e){let t=e.replace(`#`,``);t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);let n=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,i=parseInt(t.slice(4,6),16)/255;return{r:n*.15,g:r*.15,b:i*.15}}function Me(){if(!y.RAINBOW_MODE)return je(y.COLOR);let e=Ne(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Ne(e,t,n){let r=0,i=0,a=0,o=Math.floor(e*6),s=e*6-o,c=n*(1-t),l=n*(1-s*t),u=n*(1-(1-s)*t);switch(o%6){case 0:r=n,i=u,a=c;break;case 1:r=l,i=n,a=c;break;case 2:r=c,i=n,a=u;break;case 3:r=c,i=l,a=n;break;case 4:r=u,i=c,a=n;break;case 5:r=n,i=c,a=l}return{r,g:i,b:a}}function Pe(e,t,n){let r=n-t;return r===0?t:(e-t)%r+t}window.addEventListener(`mousedown`,e=>{let t=v[0];Ee(t,-1,X(e.clientX),X(e.clientY)),Ce(t)});function Fe(e){let t=v[0],n=X(e.clientX),r=X(e.clientY),i=Me();Q(),De(t,n,r,i),document.body.removeEventListener(`mousemove`,Fe)}document.body.addEventListener(`mousemove`,Fe),window.addEventListener(`mousemove`,e=>{let t=v[0],n=X(e.clientX),r=X(e.clientY),i=t.color;De(t,n,r,i)});function Ie(e){let t=e.targetTouches,n=v[0];for(let e=0;e<t.length;e++){let r=X(t[e].clientX),i=X(t[e].clientY);Q(),Ee(n,t[e].identifier,r,i)}document.body.removeEventListener(`touchstart`,Ie)}document.body.addEventListener(`touchstart`,Ie),window.addEventListener(`touchstart`,e=>{let t=e.targetTouches,n=v[0];for(let e=0;e<t.length;e++){let r=X(t[e].clientX),i=X(t[e].clientY);Ee(n,t[e].identifier,r,i)}},!1),window.addEventListener(`touchmove`,e=>{let t=e.targetTouches,n=v[0];for(let e=0;e<t.length;e++)De(n,X(t[e].clientX),X(t[e].clientY),n.color)},!1),window.addEventListener(`touchend`,e=>{let t=e.changedTouches,n=v[0];for(let e=0;e<t.length;e++)Oe(n)})},[e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h]),(0,$.jsx)(`div`,{style:{position:`fixed`,top:0,left:0,zIndex:50,pointerEvents:`none`,width:`100%`,height:`100%`},children:(0,$.jsx)(`canvas`,{ref:g,id:`fluid`,style:{width:`100vw`,height:`100vh`,display:`block`}})})}var $t=()=>{let e=(0,Z.c)(1),t;return e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(Qt,{DENSITY_DISSIPATION:10,VELOCITY_DISSIPATION:10,CURL:29,SPLAT_RADIUS:.1,SPLAT_FORCE:4e3,COLOR:`#8c1ff1`}),(0,$.jsx)(Xt,{})]}),e[0]=t):t=e[0],t},en=`Play, sans-serif`,tn=o({cssVariables:{colorSchemeSelector:`class`},palette:{mode:`dark`,primary:l,secondary:d},typography:{fontFamily:en,fontSize:16,body1:{fontSize:`1rem`},body2:{fontSize:`1rem`},button:{fontSize:`1rem`},subtitle2:{fontSize:`1rem`}},components:{MuiButton:{styleOverrides:{root:{fontFamily:en,fontSize:`1rem`}}},MuiAppBar:{styleOverrides:{root:{fontFamily:en}}},MuiTypography:{styleOverrides:{root:{fontFamily:en}}},MuiInputBase:{styleOverrides:{root:{fontFamily:en,fontSize:`1rem`}}},MuiInputLabel:{styleOverrides:{root:{fontFamily:en,fontSize:`1rem`}}},MuiFormControlLabel:{styleOverrides:{label:{fontFamily:en,fontSize:`1rem`}}}}}),nn=e=>{let t=(0,Z.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,$.jsx)(c,{theme:tn,children:n}),t[0]=n,t[1]=r),r},rn={debug:(...e)=>{},info:(...e)=>{},warn:(...e)=>{},error:(...e)=>{}},an=document.querySelector(`#root`);if(rn.info(`Welcome to ${Ae} v${je}`),!an)throw Error(`Root element not found`);(0,he.createRoot)(an).render((0,$.jsxs)(nn,{children:[(0,$.jsx)(u,{}),(0,$.jsx)($t,{})]})),(async()=>{if(!(`serviceWorker`in globalThis.navigator))return;let e=await globalThis.navigator.serviceWorker.getRegistrations();await Promise.all(e.map(e=>e.unregister()))})();