import{y as j,z as D,h as p,e as f,i as I,A as _,m as E}from"./index-f36be370.js";function c(t){return j()?(D(t),!0):!1}var g;const l=typeof window!="undefined",L=t=>typeof t=="string",v=()=>{},O=l&&((g=window==null?void 0:window.navigator)==null?void 0:g.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function N(t,e=1e3,n={}){const{immediate:r=!0,immediateCallback:i=!1}=n;let s=null;const u=p(!1);function o(){s&&(clearInterval(s),s=null)}function a(){u.value=!1,o()}function d(){e<=0||(u.value=!0,i&&t(),o(),s=setInterval(t,f(e)))}if(r&&l&&d(),I(e)){const S=_(e,()=>{r&&l&&d()});c(S)}return c(a),{isActive:u,pause:a,resume:d}}function C(t){var e;const n=f(t);return(e=n==null?void 0:n.$el)!=null?e:n}const y=l?window:void 0;l&&window.document;l&&window.navigator;l&&window.location;function A(...t){let e,n,r,i;if(L(t[0])?([n,r,i]=t,e=y):[e,n,r,i]=t,!e)return v;let s=v;const u=_(()=>C(e),a=>{s(),a&&(a.addEventListener(n,r,i),s=()=>{a.removeEventListener(n,r,i),s=v})},{immediate:!0,flush:"post"}),o=()=>{u(),s()};return c(o),o}var K=Object.defineProperty,q=Object.defineProperties,T=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,P=(t,e,n)=>e in t?K(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,R=(t,e)=>{for(var n in e||(e={}))W.call(e,n)&&P(t,n,e[n]);if(h)for(var n of h(e))x.call(e,n)&&P(t,n,e[n]);return t},V=(t,e)=>q(t,T(e));const z=t=>typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):t?()=>!0:()=>!1;function M(t,e,n={}){const{target:r=y,eventName:i="keydown",passive:s=!1}=n,u=z(t);return A(r,i,a=>{u(a)&&e(a)},s)}function Q(t,e,n={}){return M(t,e,V(R({},n),{eventName:"keyup"}))}const w=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m="__vueuse_ssr_handlers__";w[m]=w[m]||{};w[m];function U(t,e={}){const{immediate:n=!0,window:r=y}=e,i=p(!1);let s=null;function u(){!i.value||!r||(t(),s=r.requestAnimationFrame(u))}function o(){!i.value&&r&&(i.value=!0,u())}function a(){i.value=!1,s!=null&&r&&(r.cancelAnimationFrame(s),s=null)}return n&&o(),c(a),{isActive:i,pause:a,resume:o}}var k=Object.defineProperty,$=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable,b=(t,e,n)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,G=(t,e)=>{for(var n in e||(e={}))B.call(e,n)&&b(t,n,e[n]);if($)for(var n of $(e))F.call(e,n)&&b(t,n,e[n]);return t};function X(t={}){const{controls:e=!1,interval:n="requestAnimationFrame"}=t,r=p(new Date),i=()=>r.value=new Date,s=n==="requestAnimationFrame"?U(i,{immediate:!0}):N(i,n,{immediate:!0});return e?G({now:r},s):r}function H(t){const e=t||window.event;return e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}function Y(t,e=!1){const n=p(e);let r=null,i;_(()=>f(t),o=>{if(o){const a=o;i=a.style.overflow,n.value&&(a.style.overflow="hidden")}},{immediate:!0});const s=()=>{const o=f(t);!o||n.value||(O&&(r=A(o,"touchmove",H,{passive:!1})),o.style.overflow="hidden",n.value=!0)},u=()=>{const o=f(t);!o||!n.value||(O&&(r==null||r()),o.style.overflow=i,n.value=!1)};return c(u),E({get(){return n.value},set(o){o?s():u()}})}export{X as a,Q as o,Y as u};