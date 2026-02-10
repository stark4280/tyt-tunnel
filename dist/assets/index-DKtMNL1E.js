var Pl=Object.defineProperty;var Dl=(n,e,t)=>e in n?Pl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var un=(n,e,t)=>Dl(n,typeof e!="symbol"?e+"":e,t);import{R as Xr,j as a,m as H,r as m,A as zt}from"./motion-VlMnAOG-.js";import{r as Ol,R as Ml,L as Ll,C as jl,X as Fl,Y as Ul,T as Bl,a as zl,b as Vl}from"./charts-Bp2sNNfL.js";import{_ as Zr}from"./pdf-dGVY_e1R.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();var xs={},ji=Ol;xs.createRoot=ji.createRoot,xs.hydrateRoot=ji.hydrateRoot;class Hl extends Xr.Component{constructor(){super(...arguments);un(this,"state",{hasError:!1,error:null,errorInfo:null});un(this,"handleReload",()=>{window.location.reload()});un(this,"handleEmergencyBackup",()=>{try{const t=localStorage.getItem("citadel_v2_progress"),s=localStorage.getItem("citadel_v2_settings");if(!t){alert("Yedeklenecek veri bulunamadı.");return}const i={version:"2.0.0",exportDate:new Date().toISOString(),progress:JSON.parse(t),settings:s?JSON.parse(s):null},r=JSON.stringify(i,null,2),o=new Blob([r],{type:"application/json"}),l=URL.createObjectURL(o),c=document.createElement("a");c.href=l,c.download=`citadel_emergency_backup_${Date.now()}.json`,c.click(),URL.revokeObjectURL(l),alert("✅ Acil yedek oluşturuldu!")}catch(t){console.error("[Emergency Backup] Failed:",t),alert("❌ Acil yedek oluşturulamadı! Browser console'u kontrol edin.")}})}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,s){console.error("[ErrorBoundary] Caught error:",t),console.error("[ErrorBoundary] Component stack:",s.componentStack),this.setState({errorInfo:s})}render(){var t;return this.state.hasError?a.jsxs("div",{className:`flex flex-col items-center justify-center min-h-screen \r
                        bg-[#050505] p-8 text-center`,children:[a.jsx("div",{className:"text-red-500 text-8xl mb-6 animate-pulse",children:"💥"}),a.jsx("h1",{className:"text-red-400 text-3xl font-bold mb-3",children:"Bir hata oluştu"}),a.jsx("pre",{className:`text-gray-500 text-sm mb-8 max-w-md text-left \r
                          bg-white/5 rounded-lg p-4 overflow-auto max-h-40`,children:((t=this.state.error)==null?void 0:t.message)||"Bilinmeyen hata"}),a.jsxs("div",{className:"text-gray-600 text-sm mb-8 max-w-md",children:[a.jsx("p",{className:"mb-2",children:"Bu uygulama beta aşamasındadır. Lütfen aşağıdaki adımları deneyin:"}),a.jsxs("ol",{className:"text-left list-decimal list-inside space-y-1 text-gray-500",children:[a.jsx("li",{children:"Sayfayı yenileyin"}),a.jsx("li",{children:"Tarayıcı cache\\'ini temizleyin"}),a.jsx("li",{children:"Yedek alıp tarayıcı verilerini sıfırlayın"})]})]}),a.jsxs("div",{className:"flex gap-4 flex-wrap justify-center",children:[a.jsx("button",{onClick:this.handleReload,className:`px-8 py-4 bg-blue-500/20 border-2 border-blue-500/50\r
                         rounded-xl text-blue-400 font-bold text-lg\r
                         hover:bg-blue-500/30 hover:border-blue-400\r
                         transition-all active:scale-95`,children:"🔄 Sayfayı Yenile"}),a.jsx("button",{onClick:this.handleEmergencyBackup,className:`px-8 py-4 bg-red-500/20 border-2 border-red-500/50\r
                         rounded-xl text-red-400 font-bold text-lg\r
                         hover:bg-red-500/30 hover:border-red-400\r
                         transition-all active:scale-95`,children:"💾 Acil Yedek Al"})]}),!1]}):this.props.children}}function eo({message:n="Yükleniyor...",subMessage:e}){return a.jsxs(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`fixed inset-0 bg-[#050505]/95 backdrop-blur-xl z-50\r
                 flex flex-col items-center justify-center`,children:[a.jsx(H.div,{className:`w-20 h-20 border-4 border-blue-500/20 border-t-blue-500\r
                   rounded-full mb-8`,animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"}}),a.jsx("div",{className:"text-blue-400 text-2xl font-bold font-mono mb-3 animate-pulse",children:n}),e&&a.jsx("div",{className:"text-gray-500 text-sm max-w-md text-center",children:e}),a.jsx("div",{className:"text-gray-700 text-xs mt-8 max-w-xs text-center",children:"💡 İlk yükleme biraz sürebilir. Sonraki açılışlar anında olacak."})]})}function $l({onSubmit:n}){const[e,t]=m.useState(""),[s,i]=m.useState(null),r=o=>{o.preventDefault(),n("")};return a.jsxs("div",{className:"min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] relative overflow-hidden",children:[a.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[a.jsx("div",{className:"absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),a.jsx("div",{className:"absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"})]}),a.jsxs(H.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},className:"w-full max-w-2xl relative z-10",children:[a.jsx("div",{className:"text-center mb-12",children:a.jsxs(H.div,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{delay:.2,duration:.5},children:[a.jsxs("h1",{className:"text-6xl md:text-7xl font-black text-white mb-4 tracking-tight",children:["THE CITADEL ",a.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500",children:"V2"})]}),a.jsxs("div",{className:"flex items-center justify-center gap-2 text-gray-400 text-sm mb-2",children:[a.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent to-gray-600"}),a.jsx("span",{className:"font-mono",children:"105 GÜNLÜK SİSTEMATİK PROGRAM"}),a.jsx("div",{className:"h-px w-12 bg-gradient-to-l from-transparent to-gray-600"})]}),a.jsx("p",{className:"text-gray-500 text-base max-w-md mx-auto",children:"Strateji • Takip • Analiz • Başarı"})]})}),a.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},className:`bg-white/5 backdrop-blur-xl border border-white/10\r
                        rounded-3xl p-8 md:p-10 shadow-2xl`,children:[a.jsxs("div",{className:"flex items-start gap-4 mb-6",children:[a.jsx("div",{className:"flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",children:a.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),a.jsxs("div",{className:"flex-1",children:[a.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Hazır mısın?"}),a.jsx("p",{className:"text-gray-400 text-sm leading-relaxed",children:"105 günlük sistematik TYT hazırlık programına başlamak için butona tıkla. Video linklerini çalışma ekranında ekleyebilirsin."})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",children:[a.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[a.jsx("div",{className:"text-blue-400 text-2xl mb-2",children:"📚"}),a.jsx("div",{className:"text-white font-semibold text-sm mb-1",children:"Günlük Takip"}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Her gün için özel konu planı"})]}),a.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[a.jsx("div",{className:"text-purple-400 text-2xl mb-2",children:"📊"}),a.jsx("div",{className:"text-white font-semibold text-sm mb-1",children:"Detaylı Analiz"}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Net ve performans takibi"})]}),a.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[a.jsx("div",{className:"text-green-400 text-2xl mb-2",children:"🎯"}),a.jsx("div",{className:"text-white font-semibold text-sm mb-1",children:"Hedef Odaklı"}),a.jsx("div",{className:"text-gray-500 text-xs",children:"Sınava özel strateji"})]})]}),a.jsxs("form",{onSubmit:r,className:"space-y-4",children:[s&&a.jsxs(H.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:`bg-red-500/10 border border-red-500/30 rounded-xl p-4\r
                           text-red-400 text-sm flex items-center gap-3`,children:[a.jsx("span",{className:"text-xl",children:"⚠️"}),a.jsx("span",{children:s})]}),a.jsxs("button",{type:"submit",className:`w-full py-5 bg-gradient-to-r from-blue-500 to-purple-600 \r
                                     text-white font-black text-lg rounded-xl \r
                                     hover:from-blue-400 hover:to-purple-500 \r
                                     transition-all duration-300\r
                                     active:scale-[0.98] shadow-lg shadow-blue-500/30\r
                                     hover:shadow-xl hover:shadow-blue-500/40\r
                                     relative overflow-hidden group`,children:[a.jsxs("span",{className:"relative z-10 flex items-center justify-center gap-2",children:["PROGRAMA BAŞLA",a.jsx("svg",{className:"w-5 h-5 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 7l5 5m0 0l-5 5m5-5H6"})})]}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"})]})]}),a.jsx("div",{className:"mt-6 pt-6 border-t border-white/10",children:a.jsxs("div",{className:"flex items-center justify-center gap-6 text-xs text-gray-500",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"w-2 h-2 bg-green-500 rounded-full animate-pulse"}),a.jsx("span",{children:"Sistem Aktif"})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:a.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),a.jsx("span",{children:"Verileriniz Güvende"})]})]})})]}),a.jsx(H.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.8},className:"text-center text-gray-600 text-xs mt-6",children:"TYT 2026 • Hedefine ulaşmanın en sistematik yolu"})]})]})}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=(...n)=>n.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=n=>{const e=Kl(n);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=m.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:i="",children:r,iconNode:o,...l},c)=>m.createElement("svg",{ref:c,...Gl,width:e,height:e,stroke:n,strokeWidth:s?Number(t)*24/Number(e):t,className:to("lucide",i),...!r&&!Ql(l)&&{"aria-hidden":"true"},...l},[...o.map(([d,f])=>m.createElement(d,f)),...Array.isArray(r)?r:[r]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(n,e)=>{const t=m.forwardRef(({className:s,...i},r)=>m.createElement(ql,{ref:r,iconNode:e,className:to(`lucide-${Wl(Fi(n))}`,`lucide-${n}`,s),...i}));return t.displayName=Fi(n),t};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Jl=F("activity",Yl);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Zl=F("chevron-left",Xl);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],no=F("circle-check-big",ec);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],so=F("circle-x",tc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=[["path",{d:"M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057",key:"1uxyv8"}],["path",{d:"M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78",key:"99tcn7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],sc=F("cloud-off",nc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],Ui=F("cloud",ic);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ws=F("download",rc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=[["path",{d:"M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",key:"g5wo59"}],["path",{d:"m5.082 11.09 8.828 8.828",key:"1wx5vj"}]],ac=F("eraser",oc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],cc=F("external-link",lc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],uc=F("eye",dc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],io=F("grip-vertical",hc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],ro=F("minimize-2",fc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],mc=F("pause",pc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],_c=F("pen",gc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],bc=F("play",yc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xc=F("plus",vc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Bi=F("refresh-cw",wc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Ic=F("rotate-ccw",kc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ks=F("trash-2",Cc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Sc=F("trending-down",Ec);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Nc=F("trending-up",Tc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],oo=F("upload",Ac);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Pc=F("video",Rc);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gn=F("x",Dc);function St({label:n,value:e,sub:t,icon:s}){return a.jsxs(H.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`bg-white/5 backdrop-blur-md border border-white/10\r
                 rounded-xl p-5 hover:bg-white/10 transition-colors`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsx("div",{className:"text-gray-500 text-xs uppercase tracking-wider",children:n}),s&&a.jsx("div",{className:"text-gray-600 text-xl",children:s})]}),a.jsx("div",{className:"text-3xl font-bold text-blue-400 font-mono mb-1",children:e}),t&&a.jsx("div",{className:"text-gray-600 text-xs",children:t})]})}function Oc({data:n,targetNet:e=75}){return!n||n.length===0?a.jsx("div",{className:"flex items-center justify-center h-64 text-gray-600 text-sm",children:"Henüz yeterli veri yok"}):a.jsx(Ml,{width:"100%",height:280,children:a.jsxs(Ll,{data:n,margin:{top:5,right:20,bottom:5,left:0},children:[a.jsx(jl,{strokeDasharray:"3 3",stroke:"#ffffff08"}),a.jsx(Fl,{dataKey:"day",stroke:"#666",fontSize:11,tick:{fill:"#666"}}),a.jsx(Ul,{stroke:"#666",fontSize:11,tick:{fill:"#666"},domain:[0,"auto"]}),a.jsx(Bl,{contentStyle:{backgroundColor:"#111",border:"1px solid #00ff00",borderRadius:"8px",color:"#fff",fontSize:"13px"}}),a.jsx(zl,{y:e,stroke:"#ff4444",strokeDasharray:"5 5",label:{value:`HEDEF: ${e}`,fill:"#ff4444",fontSize:11,position:"insideTopRight"}}),a.jsx(Vl,{type:"monotone",dataKey:"net",stroke:"#00ff00",strokeWidth:2.5,dot:{r:3,fill:"#00ff00",strokeWidth:0},activeDot:{r:5,fill:"#00ff00"}})]})})}const Pt="https://lively-firefly-3d41.stark4280.workers.dev",Gs={MAT_345:"1Nuh2j1gVonFs-k6iHV2hlT-wTIetvH_V",MAT_PROB:"1bvQrIB6tFBIRPovOaIwbmnUXjq5K2Sax",MAT_BS:"10Lij-uDXZbCatfX3WWCIx5a6-tJ4UGw3",TURKCE_345:"1aHW_SZ6j3hpRjEbXyJfwmDnKEFdgIYNs",TURKCE_HIZ:"161bXwF7ZE_sJyCft0DamMzTZGlNM7oCj",PARAGRAF_LIMIT:"1YQJJdgyF41Sq_cFAjU8G5uRvdOxdQAuS",PARAGRAF_PARAF:"1z0yilGIdj7Q09rHZtjuCJVB8mHLYjt6c",GEO_3D_VDD:"13SmSqdg4sPmauiHOMelfvlQzLatC_0xI",GEO_BS:"1wNL5RntoQOfOUhX_qPXHtzMdebspcx0J",FIZIK_345:"1fsPOHuOJKaN_j-xvVCBgwZHr9cSlMmGo",FIZIK_AYDIN:"1wBWL0HHv115BrhZ_Mw52DJwhWKD2J13X",KIMYA_345:"1xyEEgbsjCI2ESwjM6JrrmjyhZdhfaZAW",KIMYA_PALME:"1f8S3UISPFtZfDO4uQV7xKnoRxv9azKJM",BIYO_345:"1hVYQXCZ4Un_-2laHeRptr2nz2qbn8O3l",BIYO_BIYOTIK:"1kF2Za3aldzaKKZXDrTakQy5b1HxPFxxo",SOSYAL_345:"1IbMyaGMzAOKvJyXwOLdhZ5PVlWGQz-pP",COG_BS:"1C67fvqhnEIEyBM3GZ_iULGymjz8UMCSs",FEL_LIMIT_EL:"1yzStR0xOB3MaYGXxqcX9ilEk0jodMbSV",DIN_LIMIT_EL:"1rcp3h_EepUMrr-TtNhTtZejOPHKywHl3"},Mc={matematik:[{id:"formul_hatasi",label:"Formül hatası"},{id:"islem_hatasi",label:"İşlem hatası"},{id:"konu_eksikligi",label:"Konu eksikliği"},{id:"sozel_problem",label:"Sözel problem anlama"},{id:"grafik_tablo",label:"Grafik/tablo yorumu"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],geometri:[{id:"sekil_cizimi",label:"Şekil çizimi/yorumu"},{id:"formul_hatasi",label:"Formül hatası"},{id:"acı_hesabi",label:"Açı hesabı"},{id:"alan_hacim",label:"Alan/hacim hesabı"},{id:"benzerlik_eslik",label:"Benzerlik/eşlik"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],turkce:[{id:"anlam_kavrami",label:"Anlam/kavram bilgisi"},{id:"cumle_analizi",label:"Cümle analizi"},{id:"sozcuk_anlami",label:"Sözcük anlamı"},{id:"paragraf_anlama",label:"Paragraf anlama"},{id:"ana_dusunce",label:"Ana düşünce bulma"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],fizik:[{id:"formul_hatasi",label:"Formül hatası"},{id:"birim_donusum",label:"Birim dönüşümü"},{id:"grafik_yorumu",label:"Grafik yorumu"},{id:"konu_eksikligi",label:"Konu eksikliği"},{id:"islem_hatasi",label:"İşlem hatası"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],kimya:[{id:"formul_hatasi",label:"Formül hatası"},{id:"mol_hesabi",label:"Mol hesabı"},{id:"denklem_denkles",label:"Denklem denkleştirme"},{id:"periyodik_cetvel",label:"Periyodik cetvel"},{id:"konu_eksikligi",label:"Konu eksikliği"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],biyoloji:[{id:"ezber_eksikligi",label:"Ezber eksikliği"},{id:"sekil_yorumu",label:"Şekil yorumu"},{id:"sistem_bilgisi",label:"Sistem bilgisi"},{id:"hucre_bilgisi",label:"Hücre bilgisi"},{id:"konu_karistirma",label:"Konu karıştırma"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],tarih:[{id:"tarih_karistirma",label:"Tarih karıştırma"},{id:"olay_sirasi",label:"Olay sırası"},{id:"kavram_bilgisi",label:"Kavram bilgisi"},{id:"harita_yorumu",label:"Harita yorumu"},{id:"ezber_eksikligi",label:"Ezber eksikliği"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],cografya:[{id:"harita_yorumu",label:"Harita yorumu"},{id:"grafik_tablo",label:"Grafik/tablo yorumu"},{id:"konum_bilgisi",label:"Konum bilgisi"},{id:"iklim_bilgisi",label:"İklim bilgisi"},{id:"ezber_eksikligi",label:"Ezber eksikliği"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],felsefe:[{id:"kavram_bilgisi",label:"Kavram bilgisi"},{id:"dusunur_bilgisi",label:"Düşünür bilgisi"},{id:"metin_yorumu",label:"Metin yorumu"},{id:"mantik_hatasi",label:"Mantık hatası"},{id:"konu_eksikligi",label:"Konu eksikliği"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}],din:[{id:"ayet_hadis",label:"Ayet/hadis bilgisi"},{id:"kavram_bilgisi",label:"Kavram bilgisi"},{id:"ibadet_bilgisi",label:"İbadet bilgisi"},{id:"ezber_eksikligi",label:"Ezber eksikliği"},{id:"konu_karistirma",label:"Konu karıştırma"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"}]},Lc=[{id:"formul",label:"Formül hatası"},{id:"birim_donusum",label:"Birim dönüşümü"},{id:"grafik_tablo",label:"Grafik/tablo yorumu"},{id:"sozel_problem",label:"Sözel problem anlama"},{id:"sure_yetmedi",label:"Süre yetmedi"},{id:"dikkatsizlik",label:"Dikkatsizlik"},{id:"konu_eksik",label:"Konu eksikliği"},{id:"islem_hatasi",label:"İşlem hatası"}],jc={formul:"Formül hatası",birim_donusum:"Birim dönüşümü",grafik_tablo:"Grafik/tablo",sozel_problem:"Sözel problem",sure_yetmedi:"Süre yetmedi",dikkatsizlik:"Dikkatsizlik",konu_eksik:"Konu eksikliği",islem_hatasi:"İşlem hatası"},Dt={PROGRESS:"citadel_v2_progress",SETTINGS:"citadel_v2_settings",OLD_V13:"citadel_v13_pdfjs"};function Fc({topics:n}){var t;if(!n||n.length===0)return a.jsx("p",{className:"text-gray-600 text-sm",children:"Henüz zayıf nokta kaydedilmedi 🎉"});const e=((t=n[0])==null?void 0:t[1])||1;return a.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto",children:n.slice(0,8).map(([s,i])=>a.jsx("div",{className:"flex items-center gap-3",children:a.jsxs("div",{className:"flex-1",children:[a.jsxs("div",{className:"flex justify-between text-sm mb-1",children:[a.jsx("span",{className:"text-gray-300",children:jc[s]||s}),a.jsxs("span",{className:"text-gray-500 font-mono",children:[i,"×"]})]}),a.jsx("div",{className:"w-full h-2 bg-white/5 rounded-full overflow-hidden",children:a.jsx("div",{className:`h-full rounded-full transition-all ${i/e>.6?"bg-red-500":i/e>.3?"bg-yellow-500":"bg-blue-500"}`,style:{width:`${i/e*100}%`}})})]})},s))})}function Uc({onSave:n,onClose:e}){const[t,s]=m.useState(""),[i,r]=m.useState(""),[o,l]=m.useState(""),[c,d]=m.useState(""),[f,h]=m.useState(""),[u,p]=m.useState(""),g=_=>{_.preventDefault();const w=parseFloat(i)||0,T=parseFloat(o)||0,v=parseFloat(c)||0,b=parseFloat(f)||0,x=w+T+v+b;if(!t.trim()){alert("Deneme kaynağını girin!");return}n({date:new Date().toISOString().split("T")[0],source:t.trim(),scores:{mat:w,tur:T,fen:v,sos:b},total:x,note:u.trim()})};return a.jsx(zt,{children:a.jsx(H.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 \r
                   flex items-center justify-center p-4`,onClick:e,children:a.jsxs(H.div,{initial:{opacity:0,scale:.9,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.9},onClick:_=>_.stopPropagation(),className:`w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10\r
                     rounded-2xl p-6`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:"Deneme Sınavı Ekle"}),a.jsx("button",{onClick:e,className:"text-gray-600 hover:text-gray-400 transition-colors",children:a.jsx(gn,{size:24})})]}),a.jsxs("form",{onSubmit:g,className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Deneme Kaynağı"}),a.jsx("input",{type:"text",value:t,onChange:_=>s(_.target.value),placeholder:"örn: 3D Deneme 4",className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                           text-white focus:border-blue-500/50 focus:outline-none`,required:!0})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Mat Net"}),a.jsx("input",{type:"number",step:"0.25",value:i,onChange:_=>r(_.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2\r
                             text-center text-white font-mono\r
                             focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Türkçe Net"}),a.jsx("input",{type:"number",step:"0.25",value:o,onChange:_=>l(_.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2\r
                             text-center text-white font-mono\r
                             focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Fen Net"}),a.jsx("input",{type:"number",step:"0.25",value:c,onChange:_=>d(_.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2\r
                             text-center text-white font-mono\r
                             focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Sosyal Net"}),a.jsx("input",{type:"number",step:"0.25",value:f,onChange:_=>h(_.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2\r
                             text-center text-white font-mono\r
                             focus:border-blue-500/50 focus:outline-none`})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Not (opsiyonel)"}),a.jsx("textarea",{value:u,onChange:_=>p(_.target.value),placeholder:"Denemede dikkat çekenler...",rows:2,className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-2\r
                           text-white text-sm resize-none\r
                           focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{className:"flex gap-3 pt-2",children:[a.jsx("button",{type:"button",onClick:e,className:`flex-1 py-3 bg-white/5 border border-white/10 rounded-lg\r
                           text-gray-400 hover:text-white hover:bg-white/10 transition-colors`,children:"İptal"}),a.jsx("button",{type:"submit",className:`flex-1 py-3 bg-blue-500 text-black font-bold rounded-lg\r
                           hover:bg-blue-400 transition-colors`,children:"Kaydet"})]})]})]})})})}const Bc="citadel_store",zc=2,oe="pdfs",se="ink",ge="optik",ie=()=>new Promise((n,e)=>{const t=indexedDB.open(Bc,zc);t.onupgradeneeded=s=>{const i=s.target.result;i.objectStoreNames.contains(oe)||i.createObjectStore(oe),i.objectStoreNames.contains(se)||i.createObjectStore(se),i.objectStoreNames.contains(ge)||i.createObjectStore(ge)},t.onsuccess=s=>n(s.target.result),t.onerror=s=>e(s.target.error)}),ao=async n=>{try{const e=await ie();return new Promise(t=>{const i=e.transaction(oe,"readonly").objectStore(oe).get(n);i.onsuccess=()=>t(i.result||null),i.onerror=()=>t(null)})}catch(e){return console.error("[IndexedDB] getCachedPDF error:",e),null}},lo=async(n,e)=>{try{(await ie()).transaction(oe,"readwrite").objectStore(oe).put(e,n)}catch(t){console.error("[IndexedDB] cachePDF error:",t)}},Vc=async(n,e)=>{const t=await ao(n);if(t)return console.log(`[PDF Cache HIT] ${n}`),t;console.log(`[PDF Cache MISS] ${n} — fetching from proxy...`),console.log(`[Fetch URL] ${e}`);const s=await fetch(e);if(!s.ok)throw new Error(`PDF fetch failed (HTTP ${s.status})`);const i=await s.arrayBuffer(),r=new Uint8Array(i.slice(0,4));if(String.fromCharCode(...r)!=="%PDF"){const f=new TextDecoder().decode(i.slice(0,200));throw console.error("[PDF Validation Fail] Content preview:",f),new Error("Invalid PDF structure (Received HTML or corrupt data)")}const l=i.slice(0),c=i.slice(0);return lo(n,l).catch(d=>console.error("Cache save failed:",d)),console.log(`[PDF Cached] ${n} (${(i.byteLength/1024/1024).toFixed(2)} MB)`),c},Hc=async n=>{try{(await ie()).transaction(oe,"readwrite").objectStore(oe).delete(n),console.log(`[Cache Cleared] ${n}`)}catch(e){console.error("[IndexedDB] clearPDFCache error:",e)}},ws=async(n,e,t)=>{try{const i=(await ie()).transaction(se,"readwrite"),r=`${n}_${e}`;t?i.objectStore(se).put(t,r):i.objectStore(se).delete(r)}catch(s){console.error("[IndexedDB] saveInk error:",s)}},co=async(n,e)=>{try{const t=await ie();return new Promise(s=>{const i=t.transaction(se,"readonly"),r=`${n}_${e}`,o=i.objectStore(se).get(r);o.onsuccess=()=>s(o.result||null),o.onerror=()=>s(null)})}catch(t){return console.error("[IndexedDB] loadInk error:",t),null}},$c=async n=>{try{const e=await ie();return new Promise(t=>{const r=e.transaction(se,"readonly").objectStore(se).getAllKeys();r.onsuccess=()=>{const l=r.result.filter(c=>c.startsWith(`${n}_`)).map(c=>parseInt(c.split("_")[1]));t(l)},r.onerror=()=>t([])})}catch(e){return console.error("[IndexedDB] getAllInkForPDF error:",e),[]}},uo=async()=>{try{const n=await ie();return new Promise(e=>{const t=n.transaction([oe,se],"readonly");let s=0;const i=t.objectStore(oe).getAll();i.onsuccess=()=>{i.result.forEach(o=>{o&&o.byteLength&&(s+=o.byteLength)})};const r=t.objectStore(se).getAll();r.onsuccess=()=>{r.result.forEach(o=>{o&&(s+=o.length*.75)})},t.oncomplete=()=>{e(s)}})}catch(n){return console.error("[IndexedDB] getCacheSize error:",n),0}},Wc=async()=>{try{const e=(await ie()).transaction([oe,se],"readwrite");e.objectStore(oe).clear(),e.objectStore(se).clear(),console.log("[IndexedDB] All cache cleared")}catch(n){console.error("[IndexedDB] clearAllCache error:",n)}},ks=async(n,e,t)=>{try{const i=(await ie()).transaction(ge,"readwrite"),r=`day${n}_${e}`,o={day:n,topicName:e,answers:t,savedAt:new Date().toISOString()};i.objectStore(ge).put(o,r),console.log(`[Optik Saved] Day ${n} - ${e}`)}catch(s){console.error("[IndexedDB] saveOptik error:",s)}},ho=async(n,e)=>{try{const t=await ie();return new Promise(s=>{const i=t.transaction(ge,"readonly"),r=`day${n}_${e}`,o=i.objectStore(ge).get(r);o.onsuccess=()=>{const l=o.result;l&&l.answers?(console.log(`[Optik Loaded] Day ${n} - ${e} (${l.answers.filter(c=>c.answer).length} cevap)`),s(l.answers)):s(null)},o.onerror=()=>s(null)})}catch(t){return console.error("[IndexedDB] loadOptik error:",t),null}},fo=async()=>{try{const n=await ie();return new Promise(e=>{const i=n.transaction(ge,"readonly").objectStore(ge).getAll();i.onsuccess=()=>{const r=i.result.map(o=>({day:o.day,topicName:o.topicName,answeredCount:o.answers.filter(l=>l.answer).length,totalQuestions:o.answers.length,savedAt:o.savedAt}));e(r)},i.onerror=()=>e([])})}catch(n){return console.error("[IndexedDB] getAllOptiks error:",n),[]}},po=async(n,e)=>{try{const s=(await ie()).transaction(ge,"readwrite"),i=`day${n}_${e}`;s.objectStore(ge).delete(i),console.log(`[Optik Deleted] Day ${n} - ${e}`)}catch(t){console.error("[IndexedDB] deleteOptik error:",t)}},mo=Object.freeze(Object.defineProperty({__proto__:null,cachePDF:lo,clearAllCache:Wc,clearPDFCache:Hc,deleteOptik:po,fetchAndCachePDF:Vc,getAllInkForPDF:$c,getAllOptiks:fo,getCacheSize:uo,getCachedPDF:ao,loadInk:co,loadOptik:ho,openDB:ie,saveInk:ws,saveOptik:ks},Symbol.toStringTag,{value:"Module"}));function Kc(){const[n,e]=m.useState([]),[t,s]=m.useState(!0),i=async()=>{s(!0);const o=await fo();o.sort((l,c)=>new Date(c.savedAt)-new Date(l.savedAt)),e(o),s(!1)};m.useEffect(()=>{i()},[]);const r=async(o,l)=>{confirm(`Gün ${o} - ${l} optik kaydını silmek istediğinize emin misiniz?`)&&(await po(o,l),i())};return t?a.jsx("div",{className:"bg-white/5 rounded-xl p-6 border border-white/10",children:a.jsx("div",{className:"text-gray-500 text-center",children:"Optik kayıtları yükleniyor..."})}):n.length===0?a.jsxs("div",{className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-3",children:"📝 Optik Geçmişi"}),a.jsx("div",{className:"text-gray-500 text-sm text-center py-4",children:"Henüz kaydedilmiş optik formu yok"})]}):a.jsxs("div",{className:"bg-white/5 rounded-xl p-6 border border-white/10",children:[a.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"📝 Optik Geçmişi"}),a.jsx("div",{className:"space-y-2 max-h-96 overflow-y-auto custom-scrollbar",children:n.map((o,l)=>{const c=Math.round(o.answeredCount/o.totalQuestions*100),d=o.answeredCount===o.totalQuestions;return a.jsx(H.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:l*.05},className:"bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-colors",children:a.jsxs("div",{className:"flex items-start justify-between gap-3",children:[a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[a.jsxs("span",{className:"text-blue-400 font-mono text-xs font-semibold",children:["GÜN ",o.day]}),d?a.jsx(no,{size:14,className:"text-green-400"}):a.jsx(so,{size:14,className:"text-yellow-400"})]}),a.jsx("div",{className:"text-white text-sm font-medium truncate mb-2",children:o.topicName}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"flex-1 h-2 bg-white/10 rounded-full overflow-hidden",children:a.jsx("div",{className:`h-full transition-all ${d?"bg-green-500":"bg-yellow-500"}`,style:{width:`${c}%`}})}),a.jsxs("span",{className:"text-xs font-mono text-gray-400 w-16 text-right",children:[o.answeredCount,"/",o.totalQuestions]})]}),a.jsx("div",{className:"text-xs text-gray-500 mt-1",children:new Date(o.savedAt).toLocaleDateString("tr-TR",{day:"numeric",month:"short",hour:"2-digit",minute:"2-digit"})})]}),a.jsx("button",{onClick:()=>r(o.day,o.topicName),className:"text-gray-600 hover:text-red-400 transition-colors p-1",title:"Sil",children:a.jsx(Ks,{size:14})})]})},`${o.day}-${o.topicName}`)})}),a.jsx("div",{className:"mt-4 pt-4 border-t border-white/10 text-center",children:a.jsxs("div",{className:"text-xs text-gray-500",children:["Toplam ",a.jsx("span",{className:"text-green-400 font-semibold",children:n.length})," optik kaydı"]})})]})}const Gc=()=>{};var zi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(n,e){if(!n)throw yt(e)},yt=function(n){return new Error("Firebase Database ("+go.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qc=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Qs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,f=r>>2,h=(r&3)<<4|l>>4;let u=(l&15)<<2|d>>6,p=d&63;c||(p=64,o||(u=64)),s.push(t[f],t[h],t[u],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_o(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||l==null||d==null||h==null)throw new qc;const u=r<<2|l>>4;if(s.push(u),d!==64){const p=l<<4&240|d>>2;if(s.push(p),h!==64){const g=d<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class qc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yo=function(n){const e=_o(n);return Qs.encodeByteArray(e,!0)},wn=function(n){return yo(n).replace(/\./g,"")},kn=function(n){try{return Qs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){return bo(void 0,n)}function bo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Jc(t)||(n[t]=bo(n[t],e[t]));return n}function Jc(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=()=>Xc().__FIREBASE_DEFAULTS__,ed=()=>{if(typeof process>"u"||typeof zi>"u")return;const n=zi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},td=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&kn(n[1]);return e&&JSON.parse(e)},qs=()=>{try{return Gc()||Zc()||ed()||td()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vo=n=>{var e,t;return(t=(e=qs())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},nd=n=>{const e=vo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},xo=()=>{var n;return(n=qs())==null?void 0:n.config},wo=n=>{var e;return(e=qs())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ko(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[wn(JSON.stringify(t)),wn(JSON.stringify(o)),""].join(".")}const Ot={};function id(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ot))Ot[e]?n.emulator.push(e):n.prod.push(e);return n}function rd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Vi=!1;function Io(n,e){if(typeof window>"u"||typeof document>"u"||!bt(window.location.host)||Ot[n]===e||Ot[n]||Vi)return;Ot[n]=e;function t(u){return`__firebase__banner__${u}`}const s="__firebase__banner",r=id().prod.length>0;function o(){const u=document.getElementById(s);u&&u.remove()}function l(u){u.style.display="flex",u.style.background="#7faaf0",u.style.position="fixed",u.style.bottom="5px",u.style.left="5px",u.style.padding=".5em",u.style.borderRadius="5px",u.style.alignItems="center"}function c(u,p){u.setAttribute("width","24"),u.setAttribute("id",p),u.setAttribute("height","24"),u.setAttribute("viewBox","0 0 24 24"),u.setAttribute("fill","none"),u.style.marginLeft="-6px"}function d(){const u=document.createElement("span");return u.style.cursor="pointer",u.style.marginLeft="16px",u.style.fontSize="24px",u.innerHTML=" &times;",u.onclick=()=>{Vi=!0,o()},u}function f(u,p){u.setAttribute("id",p),u.innerText="Learn more",u.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",u.setAttribute("target","__blank"),u.style.paddingLeft="5px",u.style.textDecoration="underline"}function h(){const u=rd(s),p=t("text"),g=document.getElementById(p)||document.createElement("span"),_=t("learnmore"),w=document.getElementById(_)||document.createElement("a"),T=t("preprendIcon"),v=document.getElementById(T)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(u.created){const b=u.element;l(b),f(w,_);const x=d();c(v,T),b.append(v,g,w,x),document.body.appendChild(b)}r?(g.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",p)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ys(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function od(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ad(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Co(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ld(){const n=J();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cd(){return go.NODE_ADMIN===!0}function dd(){try{return typeof indexedDB=="object"}catch{return!1}}function ud(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="FirebaseError";class We extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=hd,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}}class Zt{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?fd(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new We(i,l,s)}}function fd(n,e){return n.replace(pd,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pd=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){return JSON.parse(n)}function $(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Vt(kn(r[0])||""),t=Vt(kn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},md=function(n){const e=Eo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},gd=function(n){const e=Eo(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ft(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Is(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function In(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ye(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Hi(r)&&Hi(o)){if(!Ye(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Hi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const u=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],d,f;for(let h=0;h<80;h++){h<40?h<20?(d=l^r&(o^l),f=1518500249):(d=r^o^l,f=1859775393):h<60?(d=r&o|l&(r|o),f=2400959708):(d=r^o^l,f=3395469782);const u=(i<<5|i>>>27)+d+c+f+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function yd(n,e){const t=new bd(n,e);return t.subscribe.bind(t)}class bd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=rs),i.error===void 0&&(i.error=rs),i.complete===void 0&&(i.complete=rs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rs(){}function Js(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,y(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Wn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(n){return n&&n._delegate?n._delegate:n}class Je{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new $n;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Id(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(n){return n===Ke?void 0:n}function Id(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new wd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const Ed={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Sd=D.INFO,Td={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Nd=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Td[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xs{constructor(e){this.name=e,this._logLevel=Sd,this._logHandler=Nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ed[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Ad=(n,e)=>e.some(t=>n instanceof t);let $i,Wi;function Rd(){return $i||($i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pd(){return Wi||(Wi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const So=new WeakMap,Cs=new WeakMap,To=new WeakMap,os=new WeakMap,Zs=new WeakMap;function Dd(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Me(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&So.set(t,n)}).catch(()=>{}),Zs.set(e,n),e}function Od(n){if(Cs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Cs.set(n,e)}let Es={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Cs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||To.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Me(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Md(n){Es=n(Es)}function Ld(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(as(this),e,...t);return To.set(s,e.sort?e.sort():[e]),Me(s)}:Pd().includes(n)?function(...e){return n.apply(as(this),e),Me(So.get(this))}:function(...e){return Me(n.apply(as(this),e))}}function jd(n){return typeof n=="function"?Ld(n):(n instanceof IDBTransaction&&Od(n),Ad(n,Rd())?new Proxy(n,Es):n)}function Me(n){if(n instanceof IDBRequest)return Dd(n);if(os.has(n))return os.get(n);const e=jd(n);return e!==n&&(os.set(n,e),Zs.set(e,n)),e}const as=n=>Zs.get(n);function Fd(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),l=Me(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Me(o.result),c.oldVersion,c.newVersion,Me(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Ud=["get","getKey","getAll","getAllKeys","count"],Bd=["put","add","delete","clear"],ls=new Map;function Ki(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ls.get(e))return ls.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Bd.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ud.includes(t)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return s&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return ls.set(e,r),r}Md(n=>({...n,get:(e,t,s)=>Ki(e,t)||n.get(e,t,s),has:(e,t)=>!!Ki(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vd(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Vd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ss="@firebase/app",Gi="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke=new Xs("@firebase/app"),Hd="@firebase/app-compat",$d="@firebase/analytics-compat",Wd="@firebase/analytics",Kd="@firebase/app-check-compat",Gd="@firebase/app-check",Qd="@firebase/auth",qd="@firebase/auth-compat",Yd="@firebase/database",Jd="@firebase/data-connect",Xd="@firebase/database-compat",Zd="@firebase/functions",eu="@firebase/functions-compat",tu="@firebase/installations",nu="@firebase/installations-compat",su="@firebase/messaging",iu="@firebase/messaging-compat",ru="@firebase/performance",ou="@firebase/performance-compat",au="@firebase/remote-config",lu="@firebase/remote-config-compat",cu="@firebase/storage",du="@firebase/storage-compat",uu="@firebase/firestore",hu="@firebase/ai",fu="@firebase/firestore-compat",pu="firebase",mu="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="[DEFAULT]",gu={[Ss]:"fire-core",[Hd]:"fire-core-compat",[Wd]:"fire-analytics",[$d]:"fire-analytics-compat",[Gd]:"fire-app-check",[Kd]:"fire-app-check-compat",[Qd]:"fire-auth",[qd]:"fire-auth-compat",[Yd]:"fire-rtdb",[Jd]:"fire-data-connect",[Xd]:"fire-rtdb-compat",[Zd]:"fire-fn",[eu]:"fire-fn-compat",[tu]:"fire-iid",[nu]:"fire-iid-compat",[su]:"fire-fcm",[iu]:"fire-fcm-compat",[ru]:"fire-perf",[ou]:"fire-perf-compat",[au]:"fire-rc",[lu]:"fire-rc-compat",[cu]:"fire-gcs",[du]:"fire-gcs-compat",[uu]:"fire-fst",[fu]:"fire-fst-compat",[hu]:"fire-vertex","fire-js":"fire-js",[pu]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Map,_u=new Map,Ns=new Map;function Qi(n,e){try{n.container.addComponent(e)}catch(t){ke.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function pt(n){const e=n.name;if(Ns.has(e))return ke.debug(`There were multiple attempts to register component ${e}.`),!1;Ns.set(e,n);for(const t of Cn.values())Qi(t,n);for(const t of _u.values())Qi(t,n);return!0}function ei(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function le(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Le=new Zt("app","Firebase",yu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt=mu;function No(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Ts,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Le.create("bad-app-name",{appName:String(i)});if(t||(t=xo()),!t)throw Le.create("no-options");const r=Cn.get(i);if(r){if(Ye(t,r.options)&&Ye(s,r.config))return r;throw Le.create("duplicate-app",{appName:i})}const o=new Cd(i);for(const c of Ns.values())o.addComponent(c);const l=new bu(t,s,o);return Cn.set(i,l),l}function Ao(n=Ts){const e=Cn.get(n);if(!e&&n===Ts&&xo())return No();if(!e)throw Le.create("no-app",{appName:n});return e}function je(n,e,t){let s=gu[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ke.warn(o.join(" "));return}pt(new Je(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="firebase-heartbeat-database",xu=1,Ht="firebase-heartbeat-store";let cs=null;function Ro(){return cs||(cs=Fd(vu,xu,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ht)}catch(t){console.warn(t)}}}}).catch(n=>{throw Le.create("idb-open",{originalErrorMessage:n.message})})),cs}async function wu(n){try{const t=(await Ro()).transaction(Ht),s=await t.objectStore(Ht).get(Po(n));return await t.done,s}catch(e){if(e instanceof We)ke.warn(e.message);else{const t=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ke.warn(t.message)}}}async function qi(n,e){try{const s=(await Ro()).transaction(Ht,"readwrite");await s.objectStore(Ht).put(e,Po(n)),await s.done}catch(t){if(t instanceof We)ke.warn(t.message);else{const s=Le.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ke.warn(s.message)}}}function Po(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku=1024,Iu=30;class Cu{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Su(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Yi();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Iu){const o=Tu(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ke.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Yi(),{heartbeatsToSend:s,unsentEntries:i}=Eu(this._heartbeatsCache.heartbeats),r=wn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ke.warn(t),""}}}function Yi(){return new Date().toISOString().substring(0,10)}function Eu(n,e=ku){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ji(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ji(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Su{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dd()?ud().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await wu(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return qi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ji(n){return wn(JSON.stringify({version:2,heartbeats:n})).length}function Tu(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(n){pt(new Je("platform-logger",e=>new zd(e),"PRIVATE")),pt(new Je("heartbeat",e=>new Cu(e),"PRIVATE")),je(Ss,Gi,n),je(Ss,Gi,"esm2020"),je("fire-js","")}Nu("");var Xi={};const Zi="@firebase/database",er="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Do="";function Au(n){Do=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Vt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Ru(e)}}catch{}return new Pu},Qe=Oo("localStorage"),Du=Oo("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new Xs("@firebase/database"),Ou=function(){let n=1;return function(){return n++}}(),Mo=function(n){const e=xd(n),t=new _d;t.update(e);const s=t.digest();return Qs.encodeByteArray(s)},en=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=en.apply(null,s):typeof s=="object"?e+=$(s):e+=s,e+=" "}return e};let Mt=null,tr=!0;const Mu=function(n,e){y(!0,"Can't turn on custom loggers persistently."),lt.logLevel=D.VERBOSE,Mt=lt.log.bind(lt)},q=function(...n){if(tr===!0&&(tr=!1,Mt===null&&Du.get("logging_enabled")===!0&&Mu()),Mt){const e=en.apply(null,n);Mt(e)}},tn=function(n){return function(...e){q(n,...e)}},As=function(...n){const e="FIREBASE INTERNAL ERROR: "+en(...n);lt.error(e)},Ie=function(...n){const e=`FIREBASE FATAL ERROR: ${en(...n)}`;throw lt.error(e),new Error(e)},ee=function(...n){const e="FIREBASE WARNING: "+en(...n);lt.warn(e)},Lu=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ju=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},mt="[MIN_NAME]",Xe="[MAX_NAME]",wt=function(n,e){if(n===e)return 0;if(n===mt||e===Xe)return-1;if(e===mt||n===Xe)return 1;{const t=nr(n),s=nr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Fu=function(n,e){return n===e?0:n<e?-1:1},Tt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$(e))},ti=function(n){if(typeof n!="object"||n===null)return $(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$(e[s]),t+=":",t+=ti(n[e[s]]);return t+="}",t},jo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function te(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Fo=function(n){y(!Lo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,l,c;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=l+s,o=Math.round(n*Math.pow(2,t-l)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const d=[];for(c=t;c;c-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)d.push(r%2?1:0),r=Math.floor(r/2);d.push(i?1:0),d.reverse();const f=d.join("");let h="";for(c=0;c<64;c+=8){let u=parseInt(f.substr(c,8),2).toString(16);u.length===1&&(u="0"+u),h=h+u}return h.toLowerCase()},Uu=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bu=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zu(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Vu=new RegExp("^-?(0*)\\d{1,10}$"),Hu=-2147483648,$u=2147483647,nr=function(n){if(Vu.test(n)){const e=Number(n);if(e>=Hu&&e<=$u)return e}return null},kt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ee("Exception was thrown by user callback.",t),e},Math.floor(0))}},Wu=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Lt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,le(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ee(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ee(e)}}class _n{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_n.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="5",Uo="v",Bo="s",zo="r",Vo="f",Ho=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$o="ls",Wo="p",Rs="ac",Ko="websocket",Go="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,s,i,r=!1,o="",l=!1,c=!1,d=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=c,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Qe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Qe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Qu(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function qo(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let s;if(e===Ko)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Go)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Qu(n)&&(t.ns=n.namespace);const i=[];return te(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.counters_={}}incrementCounter(e,t=1){Se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Yc(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds={},us={};function si(n){const e=n.toString();return ds[e]||(ds[e]=new qu),ds[e]}function Yu(n,e){const t=n.toString();return us[t]||(us[t]=e()),us[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&kt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="start",Xu="close",Zu="pLPCommand",eh="pRTLPCB",Yo="id",Jo="pw",Xo="ser",th="cb",nh="seg",sh="ts",ih="d",rh="dframe",Zo=1870,ea=30,oh=Zo-ea,ah=25e3,lh=3e4;class ot{constructor(e,t,s,i,r,o,l){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tn(e),this.stats_=si(t),this.urlFn=c=>(this.appCheckToken&&(c[Rs]=this.appCheckToken),qo(t,Go,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ju(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lh)),ju(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ii((...r)=>{const[o,l,c,d,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sr)this.id=l,this.password=c;else if(o===Xu)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[sr]="t",s[Xo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[th]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Uo]=ni,this.transportSessionId&&(s[Bo]=this.transportSessionId),this.lastSessionId&&(s[$o]=this.lastSessionId),this.applicationId&&(s[Wo]=this.applicationId),this.appCheckToken&&(s[Rs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ho.test(location.hostname)&&(s[zo]=Vo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ot.forceAllow_=!0}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){return ot.forceAllow_?!0:!ot.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Uu()&&!Bu()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=yo(t),i=jo(s,oh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[rh]="t",s[Yo]=e,s[Jo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ii{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ou(),window[Zu+this.uniqueCallbackIdentifier]=e,window[eh+this.uniqueCallbackIdentifier]=t,this.myIFrame=ii.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){q("frame writing exception"),l.stack&&q(l.stack),q(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||q("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yo]=this.myID,e[Jo]=this.myPW,e[Xo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ea+s.length<=Zo;){const o=this.pendingSegs.shift();s=s+"&"+nh+i+"="+o.seg+"&"+sh+i+"="+o.ts+"&"+ih+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ah)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch=16384,dh=45e3;let En=null;typeof MozWebSocket<"u"?En=MozWebSocket:typeof WebSocket<"u"&&(En=WebSocket);class ce{constructor(e,t,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tn(this.connId),this.stats_=si(t),this.connURL=ce.connectionURL_(t,o,l,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Uo]=ni,typeof location<"u"&&location.hostname&&Ho.test(location.hostname)&&(o[zo]=Vo),t&&(o[Bo]=t),s&&(o[$o]=s),i&&(o[Rs]=i),r&&(o[Wo]=r),qo(e,Ko,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Qe.set("previous_websocket_failure",!0);try{let s;cd(),this.mySock=new En(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ce.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&En!==null&&!ce.forceDisallow_}static previouslyFailed(){return Qe.isInMemoryStorage||Qe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Qe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Vt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=jo(t,ch);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ce.responsesRequiredToBeHealthy=2;ce.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{static get ALL_TRANSPORTS(){return[ot,ce]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ce&&ce.isAvailable();let s=t&&!ce.previouslyFailed();if(e.webSocketOnly&&(t||ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ce];else{const i=this.transports_=[];for(const r of $t.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$t.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$t.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=6e4,hh=5e3,fh=10*1024,ph=100*1024,hs="t",ir="d",mh="s",rr="r",gh="e",or="o",ar="a",lr="n",cr="p",_h="h";class yh{constructor(e,t,s,i,r,o,l,c,d,f){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=d,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tn("c:"+this.id+":"),this.transportManager_=new $t(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Lt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ph?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>fh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hs in e){const t=e[hs];t===ar?this.upgradeIfSecondaryHealthy_():t===rr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===or&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Tt("t",e),s=Tt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:cr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ar,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:lr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Tt("t",e),s=Tt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Tt(hs,e);if(ir in e){const s=e[ir];if(t===_h){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===lr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===mh?this.onConnectionShutdown_(s):t===rr?this.onReset_(s):t===gh?As("Server Error: "+s):t===or?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):As("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ni!==s&&ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Lt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(uh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Lt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(hh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:cr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Qe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends na{static getInstance(){return new Sn}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ys()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=32,ur=768;class O{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function R(){return new O("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ze(n){return n.pieces_.length-n.pieceNum_}function M(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new O(n.pieces_,e)}function sa(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function bh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ia(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ra(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new O(e,0)}function W(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof O)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new O(t,0)}function S(n){return n.pieceNum_>=n.pieces_.length}function Y(n,e){const t=N(n),s=N(e);if(t===null)return e;if(t===s)return Y(M(n),M(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function oa(n,e){if(ze(n)!==ze(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function de(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ze(n)>ze(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class vh{constructor(e,t){this.errorPrefix_=t,this.parts_=ia(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Wn(this.parts_[s]);aa(this)}}function xh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Wn(e),aa(n)}function wh(n){const e=n.parts_.pop();n.byteLength_-=Wn(e),n.parts_.length>0&&(n.byteLength_-=1)}function aa(n){if(n.byteLength_>ur)throw new Error(n.errorPrefix_+"has a key path longer than "+ur+" bytes ("+n.byteLength_+").");if(n.parts_.length>dr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+dr+") or object contains a cycle "+Ge(n))}function Ge(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends na{static getInstance(){return new ri}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=1e3,kh=60*5*1e3,hr=30*1e3,Ih=1.3,Ch=3e4,Eh="server_kill",fr=3;class we extends ta{constructor(e,t,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=we.nextPersistentConnectionId_++,this.log_=tn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nt,this.maxReconnectDelay_=kh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ri.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_($(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new $n,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?t.resolve(l):t.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,d=l.s;we.warnOnListenWarnings_(c,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),d!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(d,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Se(e,"w")){const s=ft(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gd(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=md(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):As("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ch&&(this.reconnectDelay_=Nt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ih)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+we.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},d=function(h){y(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:d};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,u]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?q("getToken() completed but was canceled"):(q("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=u&&u.token,l=new yh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{ee(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(Eh)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ee(h),c())}}}interrupt(e){q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Is(this.interruptReasons_)&&(this.reconnectDelay_=Nt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>ti(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new O(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){q("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fr&&(this.reconnectDelay_=hr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){q("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Do.replace(/\./g,"-")]=1,Ys()?e["framework.cordova"]=1:Co()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sn.getInstance().currentlyOnline();return Is(this.interruptReasons_)&&e}}we.nextPersistentConnectionId_=0;we.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new E(mt,e),i=new E(mt,t);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn;class la extends Kn{static get __EMPTY_NODE(){return hn}static set __EMPTY_NODE(e){hn=e}compare(e,t){return wt(e.name,t.name)}isDefinedOn(e){throw yt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(Xe,hn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,hn)}toString(){return".key"}}const ct=new la;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class G{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??G.RED,this.left=i??Z.EMPTY_NODE,this.right=r??Z.EMPTY_NODE}copy(e,t,s,i,r){return new G(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Z.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Z.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,G.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,G.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}G.RED=!0;G.BLACK=!1;class Sh{copy(e,t,s,i,r){return this}insert(e,t,s){return new G(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Z{constructor(e,t=Z.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Z(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,G.BLACK,null,null))}remove(e){return new Z(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,G.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new fn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new fn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new fn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new fn(this.root_,null,this.comparator_,!0,e)}}Z.EMPTY_NODE=new Sh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(n,e){return wt(n.name,e.name)}function oi(n,e){return wt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ps;function Nh(n){Ps=n}const ca=function(n){return typeof n=="number"?"number:"+Fo(n):"string:"+n},da=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Se(e,".sv"),"Priority must be a string or number.")}else y(n===Ps||n.isEmpty(),"priority of unexpected type.");y(n===Ps||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pr;class K{static set __childrenNodeConstructor(e){pr=e}static get __childrenNodeConstructor(){return pr}constructor(e,t=K.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),da(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new K(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:N(e)===".priority"?this.priorityNode_:K.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:K.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=N(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(y(s!==".priority"||ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,K.__childrenNodeConstructor.EMPTY_NODE.updateChild(M(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ca(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Fo(this.value_):e+=this.value_,this.lazyHash_=Mo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===K.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof K.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=K.VALUE_TYPE_ORDER.indexOf(t),r=K.VALUE_TYPE_ORDER.indexOf(s);return y(i>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}K.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ua,ha;function Ah(n){ua=n}function Rh(n){ha=n}class Ph extends Kn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?wt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(Xe,new K("[PRIORITY-POST]",ha))}makePost(e,t){const s=ua(e);return new E(t,new K("[PRIORITY-POST]",s))}toString(){return".priority"}}const z=new Ph;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=Math.log(2);class Oh{constructor(e){const t=r=>parseInt(Math.log(r)/Dh,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tn=function(n,e,t,s){n.sort(e);const i=function(c,d){const f=d-c;let h,u;if(f===0)return null;if(f===1)return h=n[c],u=t?t(h):h,new G(u,h.node,G.BLACK,null,null);{const p=parseInt(f/2,10)+c,g=i(c,p),_=i(p+1,d);return h=n[p],u=t?t(h):h,new G(u,h.node,G.BLACK,g,_)}},r=function(c){let d=null,f=null,h=n.length;const u=function(g,_){const w=h-g,T=h;h-=g;const v=i(w+1,T),b=n[w],x=t?t(b):b;p(new G(x,b.node,_,null,v))},p=function(g){d?(d.left=g,d=g):(f=g,d=g)};for(let g=0;g<c.count;++g){const _=c.nextBitIsOne(),w=Math.pow(2,c.count-(g+1));_?u(w,G.BLACK):(u(w,G.BLACK),u(w,G.RED))}return f},o=new Oh(n.length),l=r(o);return new Z(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs;const rt={};class be{static get Default(){return y(rt&&z,"ChildrenNode.ts has not been loaded"),fs=fs||new be({".priority":rt},{".priority":z}),fs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ft(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Z?t:null}hasIndex(e){return Se(this.indexSet_,e.toString())}addIndex(e,t){y(e!==ct,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Tn(s,e.getCompare()):l=rt;const c=e.toString(),d={...this.indexSet_};d[c]=e;const f={...this.indexes_};return f[c]=l,new be(f,d)}addToIndexes(e,t){const s=In(this.indexes_,(i,r)=>{const o=ft(this.indexSet_,r);if(y(o,"Missing index implementation for "+r),i===rt)if(o.isDefinedOn(e.node)){const l=[],c=t.getIterator(E.Wrap);let d=c.getNext();for(;d;)d.name!==e.name&&l.push(d),d=c.getNext();return l.push(e),Tn(l,o.getCompare())}else return rt;else{const l=t.get(e.name);let c=i;return l&&(c=c.remove(new E(e.name,l))),c.insert(e,e.node)}});return new be(s,this.indexSet_)}removeFromIndexes(e,t){const s=In(this.indexes_,i=>{if(i===rt)return i;{const r=t.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new be(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At;class k{static get EMPTY_NODE(){return At||(At=new k(new Z(oi),null,be.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&da(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||At}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?At:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(M(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new E(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?At:this.priorityNode_;return new k(i,o,r)}}updateChild(e,t){const s=N(e);if(s===null)return t;{y(N(e)!==".priority"||ze(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(M(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(z,(o,l)=>{t[o]=l.val(e),s++,r&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in t)o[l]=t[l];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ca(this.getPriority().val())+":"),this.forEachChild(z,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Mo(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nn?-1:0}withIndex(e){if(e===ct||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ct||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(z),i=t.getIterator(z);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ct?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Mh extends k{constructor(){super(new Z(oi),k.EMPTY_NODE,be.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const nn=new Mh;Object.defineProperties(E,{MIN:{value:new E(mt,k.EMPTY_NODE)},MAX:{value:new E(Xe,nn)}});la.__EMPTY_NODE=k.EMPTY_NODE;K.__childrenNodeConstructor=k;Nh(nn);Rh(nn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=!0;function Q(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new K(t,Q(e))}if(!(n instanceof Array)&&Lh){const t=[];let s=!1;if(te(n,(o,l)=>{if(o.substring(0,1)!=="."){const c=Q(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),t.push(new E(o,c)))}}),t.length===0)return k.EMPTY_NODE;const r=Tn(t,Th,o=>o.name,oi);if(s){const o=Tn(t,z.getCompare());return new k(r,Q(e),new be({".priority":o},{".priority":z}))}else return new k(r,Q(e),be.Default)}else{let t=k.EMPTY_NODE;return te(n,(s,i)=>{if(Se(n,s)&&s.substring(0,1)!=="."){const r=Q(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Q(e))}}Ah(Q);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends Kn{constructor(e){super(),this.indexPath_=e,y(!S(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?wt(e.name,t.name):r}makePost(e,t){const s=Q(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(t,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,nn);return new E(Xe,e)}toString(){return ia(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Kn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?wt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const s=Q(e);return new E(t,s)}toString(){return".value"}}const Uh=new Fh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){return{type:"value",snapshotNode:n}}function gt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Wt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Kt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Bh(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(t);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Wt(t,l)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(gt(t,s)):o.trackChildChange(Kt(t,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(z,(i,r)=>{t.hasChild(i)||s.trackChildChange(Wt(i,r))}),t.isLeafNode()||t.forEachChild(z,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Kt(i,r,o))}else s.trackChildChange(gt(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.indexedFilter_=new ai(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gt.getStartPost_(e),this.endPost_=Gt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new E(t,s))||(s=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=k.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(z,(o,l)=>{r.matches(new E(o,l))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new E(t,s))||(s=k.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(u,p)=>h(p,u)}else o=this.index_.getCompare();const l=e;y(l.numChildren()===this.limit_,"");const c=new E(t,s),d=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(c);if(l.hasChild(t)){const h=l.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,d,this.reverse_);for(;u!=null&&(u.name===t||l.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const p=u==null?1:o(u,c);if(f&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(Kt(t,s,h)),l.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Wt(t,h));const _=l.updateImmediateChild(t,k.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(gt(u.name,u.node)),_.updateImmediateChild(u.name,u.node)):_}}else return s.isEmpty()?e:f&&o(d,c)>=0?(r!=null&&(r.trackChildChange(Wt(d.name,d.node)),r.trackChildChange(gt(t,s))),l.updateImmediateChild(t,s).updateImmediateChild(d.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===z}copy(){const e=new li;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Vh(n){return n.loadsAllData()?new ai(n.getIndex()):n.hasLimit()?new zh(n):new Gt(n)}function mr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===z?t="$priority":n.index_===Uh?t="$value":n.index_===ct?t="$key":(y(n.index_ instanceof jh,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=$(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+$(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=$(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+$(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function gr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==z&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ta{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=tn("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Nn.getListenId_(e,s),l={};this.listens_[o]=l;const c=mr(e._queryParams);this.restRequest_(r+".json",c,(d,f)=>{let h=f;if(d===404&&(h=null,d=null),d===null&&this.onDataUpdate_(r,h,!1,s),ft(this.listens_,o)===l){let u;d?d===401?u="permission_denied":u="rest_error:"+d:u="ok",i(u,null)}})}unlisten(e,t){const s=Nn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=mr(e._queryParams),s=e._path.toString(),i=new $n;return this.restRequest_(s+".json",t,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+vt(t);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Vt(l.responseText)}catch{ee("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&ee("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return{value:null,children:new Map}}function pa(n,e,t){if(S(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=N(e);n.children.has(s)||n.children.set(s,An());const i=n.children.get(s);e=M(e),pa(i,e,t)}}function Ds(n,e,t){n.value!==null?t(e,n.value):$h(n,(s,i)=>{const r=new O(e.toString()+"/"+s);Ds(i,r,t)})}function $h(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&te(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=10*1e3,Kh=30*1e3,Gh=5*60*1e3;class Qh{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Wh(e);const s=_r+(Kh-_r)*Math.random();Lt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;te(e,(i,r)=>{r>0&&Se(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Lt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Gh))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ue||(ue={}));function ma(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ci(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function di(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ue.ACK_USER_WRITE,this.source=ma()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new O(e));return new Rn(R(),t,this.revert)}}else return y(N(this.path)===e,"operationForChild called for unrelated child."),new Rn(M(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.source=e,this.path=t,this.type=ue.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new Qt(this.source,R()):new Qt(this.source,M(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ue.OVERWRITE}operationForChild(e){return S(this.path)?new Ze(this.source,R(),this.snap.getImmediateChild(e)):new Ze(this.source,M(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ue.MERGE}operationForChild(e){if(S(this.path)){const t=this.children.subtree(new O(e));return t.isEmpty()?null:t.value?new Ze(this.source,R(),t.value):new qt(this.source,R(),t)}else return y(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qt(this.source,M(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yh(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bh(o.childName,o.snapshotNode))}),Rt(n,i,"child_removed",e,s,t),Rt(n,i,"child_added",e,s,t),Rt(n,i,"child_moved",r,s,t),Rt(n,i,"child_changed",e,s,t),Rt(n,i,"value",e,s,t),i}function Rt(n,e,t,s,i,r){const o=s.filter(l=>l.type===t);o.sort((l,c)=>Xh(n,l,c)),o.forEach(l=>{const c=Jh(n,l,r);i.forEach(d=>{d.respondsTo(l.type)&&e.push(d.createEvent(c,n.query_))})})}function Jh(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Xh(n,e,t){if(e.childName==null||t.childName==null)throw yt("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,e){return{eventCache:n,serverCache:e}}function jt(n,e,t,s){return Gn(new Ve(e,t,s),n.serverCache)}function ga(n,e,t,s){return Gn(n.eventCache,new Ve(e,t,s))}function Pn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function et(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;const Zh=()=>(ps||(ps=new Z(Fu)),ps);class j{static fromObject(e){let t=new j(null);return te(e,(s,i)=>{t=t.set(new O(s),i)}),t}constructor(e,t=Zh()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:R(),value:this.value};if(S(e))return null;{const s=N(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(M(e),t);return r!=null?{path:W(new O(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const t=N(e),s=this.children.get(t);return s!==null?s.subtree(M(e)):new j(null)}}set(e,t){if(S(e))return new j(t,this.children);{const s=N(e),r=(this.children.get(s)||new j(null)).set(M(e),t),o=this.children.insert(s,r);return new j(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=N(e),s=this.children.get(t);if(s){const i=s.remove(M(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const t=N(e),s=this.children.get(t);return s?s.get(M(e)):null}}setTree(e,t){if(S(e))return t;{const s=N(e),r=(this.children.get(s)||new j(null)).setTree(M(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new j(this.value,o)}}fold(e){return this.fold_(R(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(W(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,R(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(S(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(M(e),W(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,R(),t)}foreachOnPath_(e,t,s){if(S(e))return this;{this.value&&s(t,this.value);const i=N(e),r=this.children.get(i);return r?r.foreachOnPath_(M(e),W(t,i),s):new j(null)}}foreach(e){this.foreach_(R(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(W(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.writeTree_=e}static empty(){return new fe(new j(null))}}function Ft(n,e,t){if(S(e))return new fe(new j(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Y(i,e);return r=r.updateChild(o,t),new fe(n.writeTree_.set(i,r))}else{const i=new j(t),r=n.writeTree_.setTree(e,i);return new fe(r)}}}function yr(n,e,t){let s=n;return te(t,(i,r)=>{s=Ft(s,W(e,i),r)}),s}function br(n,e){if(S(e))return fe.empty();{const t=n.writeTree_.setTree(e,new j(null));return new fe(t)}}function Os(n,e){return it(n,e)!=null}function it(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Y(t.path,e)):null}function vr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(z,(s,i)=>{e.push(new E(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function Fe(n,e){if(S(e))return n;{const t=it(n,e);return t!=null?new fe(new j(t)):new fe(n.writeTree_.subtree(e))}}function Ms(n){return n.writeTree_.isEmpty()}function _t(n,e){return _a(R(),n.writeTree_,e)}function _a(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=_a(W(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(W(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,e){return xa(e,n)}function ef(n,e,t,s,i){y(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Ft(n.visibleWrites,e,t)),n.lastWriteId=s}function tf(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function nf(n,e){const t=n.allWrites.findIndex(l=>l.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const l=n.allWrites[o];l.visible&&(o>=t&&sf(l,s.path)?i=!1:de(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return rf(n),!0;if(s.snap)n.visibleWrites=br(n.visibleWrites,s.path);else{const l=s.children;te(l,c=>{n.visibleWrites=br(n.visibleWrites,W(s.path,c))})}return!0}else return!1}function sf(n,e){if(n.snap)return de(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&de(W(n.path,t),e))return!0;return!1}function rf(n){n.visibleWrites=ya(n.allWrites,of,R()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function of(n){return n.visible}function ya(n,e,t){let s=fe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let l;if(r.snap)de(t,o)?(l=Y(t,o),s=Ft(s,l,r.snap)):de(o,t)&&(l=Y(o,t),s=Ft(s,R(),r.snap.getChild(l)));else if(r.children){if(de(t,o))l=Y(t,o),s=yr(s,l,r.children);else if(de(o,t))if(l=Y(o,t),S(l))s=yr(s,R(),r.children);else{const c=ft(r.children,N(l));if(c){const d=c.getChild(M(l));s=Ft(s,R(),d)}}}else throw yt("WriteRecord should have .snap or .children")}}return s}function ba(n,e,t,s,i){if(!s&&!i){const r=it(n.visibleWrites,e);if(r!=null)return r;{const o=Fe(n.visibleWrites,e);if(Ms(o))return t;if(t==null&&!Os(o,R()))return null;{const l=t||k.EMPTY_NODE;return _t(o,l)}}}else{const r=Fe(n.visibleWrites,e);if(!i&&Ms(r))return t;if(!i&&t==null&&!Os(r,R()))return null;{const o=function(d){return(d.visible||i)&&(!s||!~s.indexOf(d.writeId))&&(de(d.path,e)||de(e,d.path))},l=ya(n.allWrites,o,e),c=t||k.EMPTY_NODE;return _t(l,c)}}}function af(n,e,t){let s=k.EMPTY_NODE;const i=it(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(z,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Fe(n.visibleWrites,e);return t.forEachChild(z,(o,l)=>{const c=_t(Fe(r,new O(o)),l);s=s.updateImmediateChild(o,c)}),vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Fe(n.visibleWrites,e);return vr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function lf(n,e,t,s,i){y(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=W(e,t);if(Os(n.visibleWrites,r))return null;{const o=Fe(n.visibleWrites,r);return Ms(o)?i.getChild(t):_t(o,i.getChild(t))}}function cf(n,e,t,s){const i=W(e,t),r=it(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Fe(n.visibleWrites,i);return _t(o,s.getNode().getImmediateChild(t))}else return null}function df(n,e){return it(n.visibleWrites,e)}function uf(n,e,t,s,i,r,o){let l;const c=Fe(n.visibleWrites,e),d=it(c,R());if(d!=null)l=d;else if(t!=null)l=_t(c,t);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],h=o.getCompare(),u=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let p=u.getNext();for(;p&&f.length<i;)h(p,s)!==0&&f.push(p),p=u.getNext();return f}else return[]}function hf(){return{visibleWrites:fe.empty(),allWrites:[],lastWriteId:-1}}function Dn(n,e,t,s){return ba(n.writeTree,n.treePath,e,t,s)}function ui(n,e){return af(n.writeTree,n.treePath,e)}function xr(n,e,t,s){return lf(n.writeTree,n.treePath,e,t,s)}function On(n,e){return df(n.writeTree,W(n.treePath,e))}function ff(n,e,t,s,i,r){return uf(n.writeTree,n.treePath,e,t,s,i,r)}function hi(n,e,t){return cf(n.writeTree,n.treePath,e,t)}function va(n,e){return xa(W(n.treePath,e),n.writeTree)}function xa(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Kt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Wt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,gt(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Kt(s,e.snapshotNode,i.oldSnap));else throw yt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const wa=new mf;class fi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Ve(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hi(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:et(this.viewCache_),r=ff(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n){return{filter:n}}function _f(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function yf(n,e,t,s,i){const r=new pf;let o,l;if(t.type===ue.OVERWRITE){const d=t;d.source.fromUser?o=Ls(n,e,d.path,d.snap,s,i,r):(y(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered()&&!S(d.path),o=Mn(n,e,d.path,d.snap,s,i,l,r))}else if(t.type===ue.MERGE){const d=t;d.source.fromUser?o=vf(n,e,d.path,d.children,s,i,r):(y(d.source.fromServer,"Unknown source."),l=d.source.tagged||e.serverCache.isFiltered(),o=js(n,e,d.path,d.children,s,i,l,r))}else if(t.type===ue.ACK_USER_WRITE){const d=t;d.revert?o=kf(n,e,d.path,s,i,r):o=xf(n,e,d.path,d.affectedTree,s,i,r)}else if(t.type===ue.LISTEN_COMPLETE)o=wf(n,e,t.path,s,r);else throw yt("Unknown operation type: "+t.type);const c=r.getChanges();return bf(e,o,c),{viewCache:o,changes:c}}function bf(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Pn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(fa(Pn(e)))}}function ka(n,e,t,s,i,r){const o=e.eventCache;if(On(s,t)!=null)return e;{let l,c;if(S(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=et(e),f=d instanceof k?d:k.EMPTY_NODE,h=ui(s,f);l=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const d=Dn(s,et(e));l=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const d=N(t);if(d===".priority"){y(ze(t)===1,"Can't have a priority with additional path components");const f=o.getNode();c=e.serverCache.getNode();const h=xr(s,t,f,c);h!=null?l=n.filter.updatePriority(f,h):l=o.getNode()}else{const f=M(t);let h;if(o.isCompleteForChild(d)){c=e.serverCache.getNode();const u=xr(s,t,o.getNode(),c);u!=null?h=o.getNode().getImmediateChild(d).updateChild(f,u):h=o.getNode().getImmediateChild(d)}else h=hi(s,d,e.serverCache);h!=null?l=n.filter.updateChild(o.getNode(),d,h,f,i,r):l=o.getNode()}}return jt(e,l,o.isFullyInitialized()||S(t),n.filter.filtersNodes())}}function Mn(n,e,t,s,i,r,o,l){const c=e.serverCache;let d;const f=o?n.filter:n.filter.getIndexedFilter();if(S(t))d=f.updateFullNode(c.getNode(),s,null);else if(f.filtersNodes()&&!c.isFiltered()){const p=c.getNode().updateChild(t,s);d=f.updateFullNode(c.getNode(),p,null)}else{const p=N(t);if(!c.isCompleteForPath(t)&&ze(t)>1)return e;const g=M(t),w=c.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?d=f.updatePriority(c.getNode(),w):d=f.updateChild(c.getNode(),p,w,g,wa,null)}const h=ga(e,d,c.isFullyInitialized()||S(t),f.filtersNodes()),u=new fi(i,h,r);return ka(n,h,t,i,u,l)}function Ls(n,e,t,s,i,r,o){const l=e.eventCache;let c,d;const f=new fi(i,e,r);if(S(t))d=n.filter.updateFullNode(e.eventCache.getNode(),s,o),c=jt(e,d,!0,n.filter.filtersNodes());else{const h=N(t);if(h===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),s),c=jt(e,d,l.isFullyInitialized(),l.isFiltered());else{const u=M(t),p=l.getNode().getImmediateChild(h);let g;if(S(u))g=s;else{const _=f.getCompleteChild(h);_!=null?sa(u)===".priority"&&_.getChild(ra(u)).isEmpty()?g=_:g=_.updateChild(u,s):g=k.EMPTY_NODE}if(p.equals(g))c=e;else{const _=n.filter.updateChild(l.getNode(),h,g,u,f,o);c=jt(e,_,l.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function wr(n,e){return n.eventCache.isCompleteForChild(e)}function vf(n,e,t,s,i,r,o){let l=e;return s.foreach((c,d)=>{const f=W(t,c);wr(e,N(f))&&(l=Ls(n,l,f,d,i,r,o))}),s.foreach((c,d)=>{const f=W(t,c);wr(e,N(f))||(l=Ls(n,l,f,d,i,r,o))}),l}function kr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function js(n,e,t,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,d;S(t)?d=s:d=new j(null).setTree(t,s);const f=e.serverCache.getNode();return d.children.inorderTraversal((h,u)=>{if(f.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=kr(n,p,u);c=Mn(n,c,new O(h),g,i,r,o,l)}}),d.children.inorderTraversal((h,u)=>{const p=!e.serverCache.isCompleteForChild(h)&&u.value===null;if(!f.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),_=kr(n,g,u);c=Mn(n,c,new O(h),_,i,r,o,l)}}),c}function xf(n,e,t,s,i,r,o){if(On(i,t)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(S(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Mn(n,e,t,c.getNode().getChild(t),i,r,l,o);if(S(t)){let d=new j(null);return c.getNode().forEachChild(ct,(f,h)=>{d=d.set(new O(f),h)}),js(n,e,t,d,i,r,l,o)}else return e}else{let d=new j(null);return s.foreach((f,h)=>{const u=W(t,f);c.isCompleteForPath(u)&&(d=d.set(f,c.getNode().getChild(u)))}),js(n,e,t,d,i,r,l,o)}}function wf(n,e,t,s,i){const r=e.serverCache,o=ga(e,r.getNode(),r.isFullyInitialized()||S(t),r.isFiltered());return ka(n,o,t,s,wa,i)}function kf(n,e,t,s,i,r){let o;if(On(s,t)!=null)return e;{const l=new fi(s,e,i),c=e.eventCache.getNode();let d;if(S(t)||N(t)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Dn(s,et(e));else{const h=e.serverCache.getNode();y(h instanceof k,"serverChildren would be complete if leaf node"),f=ui(s,h)}f=f,d=n.filter.updateFullNode(c,f,r)}else{const f=N(t);let h=hi(s,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=c.getImmediateChild(f)),h!=null?d=n.filter.updateChild(c,f,h,M(t),l,r):e.eventCache.getNode().hasChild(f)?d=n.filter.updateChild(c,f,k.EMPTY_NODE,M(t),l,r):d=c,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Dn(s,et(e)),o.isLeafNode()&&(d=n.filter.updateFullNode(d,o,r)))}return o=e.serverCache.isFullyInitialized()||On(s,R())!=null,jt(e,d,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ai(s.getIndex()),r=Vh(s);this.processor_=gf(r);const o=t.serverCache,l=t.eventCache,c=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),d=r.updateFullNode(k.EMPTY_NODE,l.getNode(),null),f=new Ve(c,o.isFullyInitialized(),i.filtersNodes()),h=new Ve(d,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=Gn(h,f),this.eventGenerator_=new qh(this.query_)}get query(){return this.query_}}function Cf(n){return n.viewCache_.serverCache.getNode()}function Ef(n){return Pn(n.viewCache_)}function Sf(n,e){const t=et(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!S(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function Ir(n){return n.eventRegistrations_.length===0}function Tf(n,e){n.eventRegistrations_.push(e)}function Cr(n,e,t){const s=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Er(n,e,t,s){e.type===ue.MERGE&&e.source.queryId!==null&&(y(et(n.viewCache_),"We should always have a full cache before handling merges"),y(Pn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=yf(n.processor_,i,e,t,s);return _f(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ia(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Nf(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(z,(r,o)=>{s.push(gt(r,o))}),t.isFullyInitialized()&&s.push(fa(t.getNode())),Ia(n,s,t.getNode(),e)}function Ia(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Yh(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;class Ca{constructor(){this.views=new Map}}function Af(n){y(!Ln,"__referenceConstructor has already been defined"),Ln=n}function Rf(){return y(Ln,"Reference.ts has not been loaded"),Ln}function Pf(n){return n.views.size===0}function pi(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return y(r!=null,"SyncTree gave us an op for an invalid query."),Er(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Er(o,e,t,s));return r}}function Ea(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let l=Dn(t,i?s:null),c=!1;l?c=!0:s instanceof k?(l=ui(t,s),c=!1):(l=k.EMPTY_NODE,c=!1);const d=Gn(new Ve(l,c,!1),new Ve(s,i,!1));return new If(e,d)}return o}function Df(n,e,t,s,i,r){const o=Ea(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Tf(o,t),Nf(o,t)}function Of(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const l=He(n);if(i==="default")for(const[c,d]of n.views.entries())o=o.concat(Cr(d,t,s)),Ir(d)&&(n.views.delete(c),d.query._queryParams.loadsAllData()||r.push(d.query));else{const c=n.views.get(i);c&&(o=o.concat(Cr(c,t,s)),Ir(c)&&(n.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!He(n)&&r.push(new(Rf())(e._repo,e._path)),{removed:r,events:o}}function Sa(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ue(n,e){let t=null;for(const s of n.views.values())t=t||Sf(s,e);return t}function Ta(n,e){if(e._queryParams.loadsAllData())return qn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Na(n,e){return Ta(n,e)!=null}function He(n){return qn(n)!=null}function qn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn;function Mf(n){y(!jn,"__referenceConstructor has already been defined"),jn=n}function Lf(){return y(jn,"Reference.ts has not been loaded"),jn}let jf=1;class Sr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=hf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Aa(n,e,t,s,i){return ef(n.pendingWriteTree_,e,t,s,i),i?rn(n,new Ze(ma(),e,t)):[]}function qe(n,e,t=!1){const s=tf(n.pendingWriteTree_,e);if(nf(n.pendingWriteTree_,e)){let r=new j(null);return s.snap!=null?r=r.set(R(),!0):te(s.children,o=>{r=r.set(new O(o),!0)}),rn(n,new Rn(s.path,r,t))}else return[]}function sn(n,e,t){return rn(n,new Ze(ci(),e,t))}function Ff(n,e,t){const s=j.fromObject(t);return rn(n,new qt(ci(),e,s))}function Uf(n,e){return rn(n,new Qt(ci(),e))}function Bf(n,e,t){const s=gi(n,t);if(s){const i=_i(s),r=i.path,o=i.queryId,l=Y(r,e),c=new Qt(di(o),l);return yi(n,r,c)}else return[]}function Ra(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Na(o,e))){const c=Of(o,e,t,s);Pf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const d=c.removed;if(l=c.events,!i){const f=d.findIndex(u=>u._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(u,p)=>He(p));if(f&&!h){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const p=$f(u);for(let g=0;g<p.length;++g){const _=p[g],w=_.query,T=Ma(n,_);n.listenProvider_.startListening(Ut(w),Yt(n,w),T.hashFn,T.onComplete)}}}!h&&d.length>0&&!s&&(f?n.listenProvider_.stopListening(Ut(e),null):d.forEach(u=>{const p=n.queryToTagMap.get(Yn(u));n.listenProvider_.stopListening(Ut(u),p)}))}Wf(n,d)}return l}function Pa(n,e,t,s){const i=gi(n,s);if(i!=null){const r=_i(i),o=r.path,l=r.queryId,c=Y(o,e),d=new Ze(di(l),c,t);return yi(n,o,d)}else return[]}function zf(n,e,t,s){const i=gi(n,s);if(i){const r=_i(i),o=r.path,l=r.queryId,c=Y(o,e),d=j.fromObject(t),f=new qt(di(l),c,d);return yi(n,o,f)}else return[]}function Vf(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,p)=>{const g=Y(u,i);r=r||Ue(p,g),o=o||He(p)});let l=n.syncPointTree_.get(i);l?(o=o||He(l),r=r||Ue(l,R())):(l=new Ca,n.syncPointTree_=n.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=k.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const _=Ue(g,R());_&&(r=r.updateImmediateChild(p,_))}));const d=Na(l,e);if(!d&&!e._queryParams.loadsAllData()){const u=Yn(e);y(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const p=Kf();n.queryToTagMap.set(u,p),n.tagToQueryMap.set(p,u)}const f=Qn(n.pendingWriteTree_,i);let h=Df(l,e,t,f,r,c);if(!d&&!o&&!s){const u=Ta(l,e);h=h.concat(Gf(n,e,u))}return h}function mi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,l)=>{const c=Y(o,e),d=Ue(l,c);if(d)return d});return ba(i,e,r,t,!0)}function Hf(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(d,f)=>{const h=Y(d,t);s=s||Ue(f,h)});let i=n.syncPointTree_.get(t);i?s=s||Ue(i,R()):(i=new Ca,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Ve(s,!0,!1):null,l=Qn(n.pendingWriteTree_,e._path),c=Ea(i,e,l,r?o.getNode():k.EMPTY_NODE,r);return Ef(c)}function rn(n,e){return Da(e,n.syncPointTree_,null,Qn(n.pendingWriteTree_,R()))}function Da(n,e,t,s){if(S(n.path))return Oa(n,e,t,s);{const i=e.get(R());t==null&&i!=null&&(t=Ue(i,R()));let r=[];const o=N(n.path),l=n.operationForChild(o),c=e.children.get(o);if(c&&l){const d=t?t.getImmediateChild(o):null,f=va(s,o);r=r.concat(Da(l,c,d,f))}return i&&(r=r.concat(pi(i,n,s,t))),r}}function Oa(n,e,t,s){const i=e.get(R());t==null&&i!=null&&(t=Ue(i,R()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=t?t.getImmediateChild(o):null,d=va(s,o),f=n.operationForChild(o);f&&(r=r.concat(Oa(f,l,c,d)))}),i&&(r=r.concat(pi(i,n,s,t))),r}function Ma(n,e){const t=e.query,s=Yt(n,t);return{hashFn:()=>(Cf(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Bf(n,t._path,s):Uf(n,t._path);{const r=zu(i,t);return Ra(n,t,null,r)}}}}function Yt(n,e){const t=Yn(e);return n.queryToTagMap.get(t)}function Yn(n){return n._path.toString()+"$"+n._queryIdentifier}function gi(n,e){return n.tagToQueryMap.get(e)}function _i(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new O(n.substr(0,e))}}function yi(n,e,t){const s=n.syncPointTree_.get(e);y(s,"Missing sync point for query tag that we're tracking");const i=Qn(n.pendingWriteTree_,e);return pi(s,t,i,null)}function $f(n){return n.fold((e,t,s)=>{if(t&&He(t))return[qn(t)];{let i=[];return t&&(i=Sa(t)),te(s,(r,o)=>{i=i.concat(o)}),i}})}function Ut(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lf())(n._repo,n._path):n}function Wf(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Yn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Kf(){return jf++}function Gf(n,e,t){const s=e._path,i=Yt(n,e),r=Ma(n,t),o=n.listenProvider_.startListening(Ut(e),i,r.hashFn,r.onComplete),l=n.syncPointTree_.subtree(s);if(i)y(!He(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((d,f,h)=>{if(!S(d)&&f&&He(f))return[qn(f).query];{let u=[];return f&&(u=u.concat(Sa(f).map(p=>p.query))),te(h,(p,g)=>{u=u.concat(g)}),u}});for(let d=0;d<c.length;++d){const f=c[d];n.listenProvider_.stopListening(Ut(f),Yt(n,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new bi(t)}node(){return this.node_}}class vi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=W(this.path_,e);return new vi(this.syncTree_,t)}node(){return mi(this.syncTree_,this.path_)}}const Qf=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Tr=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return qf(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Yf(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},qf=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},Yf=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&y(!1,"Unexpected increment value: "+s);const i=e.node();if(y(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Jf=function(n,e,t,s){return xi(e,new vi(t,n),s)},La=function(n,e,t){return xi(n,new bi(e),t)};function xi(n,e,t){const s=n.getPriority().val(),i=Tr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,l=Tr(o.getValue(),e,t);return l!==o.getValue()||i!==o.getPriority().val()?new K(l,Q(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new K(i))),o.forEachChild(z,(l,c)=>{const d=xi(c,e.getImmediateChild(l),t);d!==c&&(r=r.updateImmediateChild(l,d))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ki(n,e){let t=e instanceof O?e:new O(e),s=n,i=N(t);for(;i!==null;){const r=ft(s.node.children,i)||{children:{},childCount:0};s=new wi(i,s,r),t=M(t),i=N(t)}return s}function It(n){return n.node.value}function ja(n,e){n.node.value=e,Fs(n)}function Fa(n){return n.node.childCount>0}function Xf(n){return It(n)===void 0&&!Fa(n)}function Jn(n,e){te(n.node.children,(t,s)=>{e(new wi(t,n,s))})}function Ua(n,e,t,s){t&&e(n),Jn(n,i=>{Ua(i,e,!0)})}function Zf(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function on(n){return new O(n.parent===null?n.name:on(n.parent)+"/"+n.name)}function Fs(n){n.parent!==null&&ep(n.parent,n.name,n)}function ep(n,e,t){const s=Xf(t),i=Se(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Fs(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Fs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=/[\[\].#$\/\u0000-\u001F\u007F]/,np=/[\[\].#$\u0000-\u001F\u007F]/,ms=10*1024*1024,Ba=function(n){return typeof n=="string"&&n.length!==0&&!tp.test(n)},za=function(n){return typeof n=="string"&&n.length!==0&&!np.test(n)},sp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),za(n)},ip=function(n,e,t,s){Ii(Js(n,"value"),e,t)},Ii=function(n,e,t){const s=t instanceof O?new vh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ge(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ge(s)+" with contents = "+e.toString());if(Lo(e))throw new Error(n+"contains "+e.toString()+" "+Ge(s));if(typeof e=="string"&&e.length>ms/3&&Wn(e)>ms)throw new Error(n+"contains a string greater than "+ms+" utf8 bytes "+Ge(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(te(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ba(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ge(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);xh(s,o),Ii(n,l,s),wh(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ge(s)+" in addition to actual children.")}},Va=function(n,e,t,s){if(!za(t))throw new Error(Js(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},rp=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Va(n,e,t)},op=function(n,e){if(N(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ap=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ba(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!sp(t))throw new Error(Js(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ha(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!oa(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function _e(n,e,t){Ha(n,t),cp(n,s=>de(s,e)||de(e,s))}function cp(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(dp(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function dp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Mt&&q("event: "+t.toString()),kt(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="repo_interrupt",hp=25;class fp{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new lp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=An(),this.transactionQueueTree_=new wi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function pp(n,e,t){if(n.stats_=si(n.repoInfo_),n.forceRestClient_||Wu())n.server_=new Nn(n.repoInfo_,(s,i,r,o)=>{Nr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ar(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new we(n.repoInfo_,e,(s,i,r,o)=>{Nr(n,s,i,r,o)},s=>{Ar(n,s)},s=>{gp(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Yu(n.repoInfo_,()=>new Qh(n.stats_,n.server_)),n.infoData_=new Hh,n.infoSyncTree_=new Sr({startListening:(s,i,r,o)=>{let l=[];const c=n.infoData_.getNode(s._path);return c.isEmpty()||(l=sn(n.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Ei(n,"connected",!1),n.serverSyncTree_=new Sr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(l,c)=>{const d=o(l,c);_e(n.eventQueue_,s._path,d)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function mp(n){const t=n.infoData_.getNode(new O(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ci(n){return Qf({timestamp:mp(n)})}function Nr(n,e,t,s,i){n.dataUpdateCount++;const r=new O(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const c=In(t,d=>Q(d));o=zf(n.serverSyncTree_,r,c,i)}else{const c=Q(t);o=Pa(n.serverSyncTree_,r,c,i)}else if(s){const c=In(t,d=>Q(d));o=Ff(n.serverSyncTree_,r,c)}else{const c=Q(t);o=sn(n.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=Zn(n,r)),_e(n.eventQueue_,l,o)}function Ar(n,e){Ei(n,"connected",e),e===!1&&bp(n)}function gp(n,e){te(e,(t,s)=>{Ei(n,t,s)})}function Ei(n,e,t){const s=new O("/.info/"+e),i=Q(t);n.infoData_.updateSnapshot(s,i);const r=sn(n.infoSyncTree_,s,i);_e(n.eventQueue_,s,r)}function $a(n){return n.nextWriteId_++}function _p(n,e,t){const s=Hf(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=Q(i).withIndex(e._queryParams.getIndex());Vf(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=sn(n.serverSyncTree_,e._path,r);else{const l=Yt(n.serverSyncTree_,e);o=Pa(n.serverSyncTree_,e._path,r,l)}return _e(n.eventQueue_,e._path,o),Ra(n.serverSyncTree_,e,t,null,!0),r},i=>(Xn(n,"get for query "+$(e)+" failed: "+i),Promise.reject(new Error(i))))}function yp(n,e,t,s,i){Xn(n,"set",{path:e.toString(),value:t,priority:s});const r=Ci(n),o=Q(t,s),l=mi(n.serverSyncTree_,e),c=La(o,l,r),d=$a(n),f=Aa(n.serverSyncTree_,e,c,d,!0);Ha(n.eventQueue_,f),n.server_.put(e.toString(),o.val(!0),(u,p)=>{const g=u==="ok";g||ee("set at "+e+" failed: "+u);const _=qe(n.serverSyncTree_,d,!g);_e(n.eventQueue_,e,_),xp(n,i,u,p)});const h=qa(n,e);Zn(n,h),_e(n.eventQueue_,h,[])}function bp(n){Xn(n,"onDisconnectEvents");const e=Ci(n),t=An();Ds(n.onDisconnect_,R(),(i,r)=>{const o=Jf(i,r,n.serverSyncTree_,e);pa(t,i,o)});let s=[];Ds(t,R(),(i,r)=>{s=s.concat(sn(n.serverSyncTree_,i,r));const o=qa(n,i);Zn(n,o)}),n.onDisconnect_=An(),_e(n.eventQueue_,R(),s)}function vp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(up)}function Xn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),q(t,...e)}function xp(n,e,t,s){e&&kt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Wa(n,e,t){return mi(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function Si(n,e=n.transactionQueueTree_){if(e||es(n,e),It(e)){const t=Ga(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&wp(n,on(e),t)}else Fa(e)&&Jn(e,t=>{Si(n,t)})}function wp(n,e,t){const s=t.map(d=>d.currentWriteId),i=Wa(n,e,s);let r=i;const o=i.hash();for(let d=0;d<t.length;d++){const f=t[d];y(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=Y(e,f.path);r=r.updateChild(h,f.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;n.server_.put(c.toString(),l,d=>{Xn(n,"transaction put response",{path:c.toString(),status:d});let f=[];if(d==="ok"){const h=[];for(let u=0;u<t.length;u++)t[u].status=2,f=f.concat(qe(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&h.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();es(n,ki(n.transactionQueueTree_,e)),Si(n,n.transactionQueueTree_),_e(n.eventQueue_,e,f);for(let u=0;u<h.length;u++)kt(h[u])}else{if(d==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ee("transaction at "+c.toString()+" failed: "+d);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=d}Zn(n,e)}},o)}function Zn(n,e){const t=Ka(n,e),s=on(t),i=Ga(n,t);return kp(n,i,s),s}function kp(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],d=Y(t,c.path);let f=!1,h;if(y(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)f=!0,h=c.abortReason,i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=hp)f=!0,h="maxretry",i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0));else{const u=Wa(n,c.path,o);c.currentInputSnapshot=u;const p=e[l].update(u.val());if(p!==void 0){Ii("transaction failed: Data returned ",p,c.path);let g=Q(p);typeof p=="object"&&p!=null&&Se(p,".priority")||(g=g.updatePriority(u.getPriority()));const w=c.currentWriteId,T=Ci(n),v=La(g,u,T);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=v,c.currentWriteId=$a(n),o.splice(o.indexOf(w),1),i=i.concat(Aa(n.serverSyncTree_,c.path,v,c.currentWriteId,c.applyLocally)),i=i.concat(qe(n.serverSyncTree_,w,!0))}else f=!0,h="nodata",i=i.concat(qe(n.serverSyncTree_,c.currentWriteId,!0))}_e(n.eventQueue_,t,i),i=[],f&&(e[l].status=2,function(u){setTimeout(u,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}es(n,n.transactionQueueTree_);for(let l=0;l<s.length;l++)kt(s[l]);Si(n,n.transactionQueueTree_)}function Ka(n,e){let t,s=n.transactionQueueTree_;for(t=N(e);t!==null&&It(s)===void 0;)s=ki(s,t),e=M(e),t=N(e);return s}function Ga(n,e){const t=[];return Qa(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Qa(n,e,t){const s=It(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Jn(e,i=>{Qa(n,i,t)})}function es(n,e){const t=It(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ja(e,t.length>0?t:void 0)}Jn(e,s=>{es(n,s)})}function qa(n,e){const t=on(Ka(n,e)),s=ki(n.transactionQueueTree_,e);return Zf(s,i=>{gs(n,i)}),gs(n,s),Ua(s,i=>{gs(n,i)}),t}function gs(n,e){const t=It(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(y(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(y(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(qe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ja(e,void 0):t.length=r+1,_e(n.eventQueue_,on(e),i);for(let o=0;o<s.length;o++)kt(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Cp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ee(`Invalid query segment '${t}' in query '${n}'`)}return e}const Rr=function(n,e){const t=Ep(n),s=t.namespace;t.domain==="firebase.com"&&Ie(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Lu();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new O(t.pathString)}},Ep=function(n){let e="",t="",s="",i="",r="",o=!0,l="https",c=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(l=n.substring(0,d-1),n=n.substring(d+2));let f=n.indexOf("/");f===-1&&(f=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(f,h)),f<h&&(i=Ip(n.substring(f,h)));const u=Cp(n.substring(Math.min(n.length,h)));d=e.indexOf(":"),d>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(d+1),10)):d=e.length;const p=e.slice(0,d);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:c,domain:t,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class Tp{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return S(this._path)?null:sa(this._path)}get ref(){return new Te(this._repo,this._path)}get _queryIdentifier(){const e=gr(this._queryParams),t=ti(e);return t==="{}"?"default":t}get _queryObject(){return gr(this._queryParams)}isEqual(e){if(e=re(e),!(e instanceof Ti))return!1;const t=this._repo===e._repo,s=oa(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bh(this._path)}}class Te extends Ti{constructor(e,t){super(e,t,new li,!1)}get parent(){const e=ra(this._path);return e===null?null:new Te(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new O(e),s=Us(this.ref,e);return new Jt(this._node.getChild(t),s,z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Jt(i,Us(this.ref,s),z)))}hasChild(e){const t=new O(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ya(n,e){return n=re(n),n._checkNotDeleted("ref"),e!==void 0?Us(n._root,e):n._root}function Us(n,e){return n=re(n),N(n._path)===null?rp("child","path",e):Va("child","path",e),new Te(n._repo,W(n._path,e))}function Ap(n,e){n=re(n),op("set",n._path),ip("set",e,n._path);const t=new $n;return yp(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Rp(n){n=re(n);const e=new Np(()=>{}),t=new Ni(e);return _p(n._repo,n,t).then(s=>new Jt(s,new Te(n._repo,n._path),n._queryParams.getIndex()))}class Ni{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Sp("value",this,new Jt(e.snapshotNode,new Te(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Tp(this,e,t):null}matches(e){return e instanceof Ni?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}Af(Te);Mf(Te);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp="FIREBASE_DATABASE_EMULATOR_HOST",Bs={};let Dp=!1;function Op(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=bt(r);n.repoInfo_=new Qo(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Mp(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),q("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Rr(r,i),l=o.repoInfo,c;typeof process<"u"&&Xi&&(c=Xi[Pp]),c?(r=`http://${c}?ns=${l.namespace}`,o=Rr(r,i),l=o.repoInfo):o.repoInfo.secure;const d=new Gu(n.name,n.options,e);ap("Invalid Firebase Database URL",o),S(o.path)||Ie("Database URL must point to the root of a Firebase Database (not including a child path).");const f=jp(l,n,d,new Ku(n,t));return new Fp(f,n)}function Lp(n,e){const t=Bs[e];(!t||t[n.key]!==n)&&Ie(`Database ${e}(${n.repoInfo_}) has already been deleted.`),vp(n),delete t[n.key]}function jp(n,e,t,s){let i=Bs[e.name];i||(i={},Bs[e.name]=i);let r=i[n.toURLString()];return r&&Ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new fp(n,Dp,t,s),i[n.toURLString()]=r,r}class Fp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(pp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Te(this._repo,R())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Lp(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ie("Cannot call "+e+" on a deleted database.")}}function Up(n=Ao(),e){const t=ei(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=nd("database");s&&Bp(t,...s)}return t}function Bp(n,e,t,s={}){n=re(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Ye(s,r.repoInfo_.emulatorOptions))return;Ie("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&Ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new _n(_n.OWNER);else if(s.mockUserToken){const l=typeof s.mockUserToken=="string"?s.mockUserToken:sd(s.mockUserToken,n.app.options.projectId);o=new _n(l)}bt(e)&&(ko(e),Io("Database",!0)),Op(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(n){Au(xt),pt(new Je("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Mp(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Zi,er,n),je(Zi,er,"esm2020")}we.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};we.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};zp();var Vp="firebase",Hp="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(Vp,Hp,"app");function Ja(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $p=Ja,Xa=new Zt("auth","Firebase",Ja());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Xs("@firebase/auth");function Wp(n,...e){Fn.logLevel<=D.WARN&&Fn.warn(`Auth (${xt}): ${n}`,...e)}function yn(n,...e){Fn.logLevel<=D.ERROR&&Fn.error(`Auth (${xt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n,...e){throw Ai(n,...e)}function pe(n,...e){return Ai(n,...e)}function Za(n,e,t){const s={...$p(),[e]:t};return new Zt("auth","Firebase",s).create(e,{appName:n.name})}function Be(n){return Za(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ai(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Xa.create(n,...e)}function I(n,e,...t){if(!n)throw Ai(e,...t)}function ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yn(e),new Error(e)}function Ee(n,e){n||ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Kp(){return Pr()==="http:"||Pr()==="https:"}function Pr(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kp()||ad()||"connection"in navigator)?navigator.onLine:!0}function Qp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=Ys()||Co()}get(){return Gp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Jp=new an(3e4,6e4);function ts(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ct(n,e,t,s,i={}){return tl(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=vt({key:n.config.apiKey,...o}).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:c,...r};return od()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&bt(n.emulatorConfig.host)&&(d.credentials="include"),el.fetch()(await sl(n,n.config.apiHost,t,l),d)})}async function tl(n,e,t){n._canInitEmulator=!1;const s={...qp,...e};try{const i=new Xp(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw pn(n,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Za(n,f,d);Ce(n,f)}}catch(i){if(i instanceof We)throw i;Ce(n,"network-request-failed",{message:String(i)})}}async function nl(n,e,t,s,i={}){const r=await Ct(n,e,t,s,i);return"mfaPendingCredential"in r&&Ce(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function sl(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Ri(n.config,i):`${n.config.apiScheme}://${i}`;return Yp.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Xp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pe(this.auth,"network-request-failed")),Jp.get())})}}function pn(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=pe(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function Un(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function em(n,e=!1){const t=re(n),s=await t.getIdToken(e),i=Pi(s);I(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Bt(_s(i.auth_time)),issuedAtTime:Bt(_s(i.iat)),expirationTime:Bt(_s(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function _s(n){return Number(n)*1e3}function Pi(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return yn("JWT malformed, contained fewer than 3 sections"),null;try{const i=kn(t);return i?JSON.parse(i):(yn("Failed to decode base64 JWT payload"),null)}catch(i){return yn("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Dr(n){const e=Pi(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof We&&tm(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function tm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bt(this.lastLoginAt),this.creationTime=Bt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n){var h;const e=n.auth,t=await n.getIdToken(),s=await Xt(n,Un(e,{idToken:t}));I(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(h=i.providerUserInfo)!=null&&h.length?il(i.providerUserInfo):[],o=im(n.providerData,r),l=n.isAnonymous,c=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=l?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vs(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function sm(n){const e=re(n);await Bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function im(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function il(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(n,e){const t=await tl(n,{},async()=>{const s=vt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await sl(n,i,"/v1/token",`key=${r}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:s};return n.emulatorConfig&&bt(n.emulatorConfig.host)&&(c.credentials="include"),el.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function om(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",ts(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){I(e.length!==0,"internal-error");const t=Dr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(I(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await rm(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new dt;return s&&(I(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(I(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(I(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class he{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new nm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return em(this,e)}reload(){return sm(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new he({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Bn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(Be(this.auth));const e=await this.getIdToken();return await Xt(this,Zp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,l=t.tenantId??void 0,c=t._redirectEventId??void 0,d=t.createdAt??void 0,f=t.lastLoginAt??void 0,{uid:h,emailVerified:u,isAnonymous:p,providerData:g,stsTokenManager:_}=t;I(h&&_,e,"internal-error");const w=dt.fromJSON(this.name,_);I(typeof h=="string",e,"internal-error"),Ae(s,e.name),Ae(i,e.name),I(typeof u=="boolean",e,"internal-error"),I(typeof p=="boolean",e,"internal-error"),Ae(r,e.name),Ae(o,e.name),Ae(l,e.name),Ae(c,e.name),Ae(d,e.name),Ae(f,e.name);const T=new he({uid:h,auth:e,email:i,emailVerified:u,displayName:s,isAnonymous:p,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:w,createdAt:d,lastLoginAt:f});return g&&Array.isArray(g)&&(T.providerData=g.map(v=>({...v}))),c&&(T._redirectEventId=c),T}static async _fromIdTokenResponse(e,t,s=!1){const i=new dt;i.updateFromServerResponse(t);const r=new he({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Bn(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];I(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?il(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new dt;l.updateFromIdToken(s);const c=new he({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Vs(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map;function xe(n){Ee(n instanceof Function,"Expected a class definition");let e=Or.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Or.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rl.type="NONE";const Mr=rl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e,t){return`firebase:${n}:${e}:${t}`}class ut{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=bn(this.userKey,i.apiKey,r),this.fullPersistenceKey=bn("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Un(this.auth,{idToken:e}).catch(()=>{});return t?he._fromGetAccountInfoResponse(this.auth,t,e):null}return he._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ut(xe(Mr),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||xe(Mr);const o=bn(s,e.config.apiKey,e.name);let l=null;for(const d of t)try{const f=await d._get(o);if(f){let h;if(typeof f=="string"){const u=await Un(e,{idToken:f}).catch(()=>{});if(!u)break;h=await he._fromGetAccountInfoResponse(e,u,f)}else h=he._fromJSON(e,f);d!==r&&(l=h),r=d;break}}catch{}const c=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ut(r,e,s):(r=c[0],l&&await r._set(o,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new ut(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ol(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ul(e))return"Blackberry";if(hl(e))return"Webos";if(al(e))return"Safari";if((e.includes("chrome/")||ll(e))&&!e.includes("edge/"))return"Chrome";if(dl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ol(n=J()){return/firefox\//i.test(n)}function al(n=J()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ll(n=J()){return/crios\//i.test(n)}function cl(n=J()){return/iemobile/i.test(n)}function dl(n=J()){return/android/i.test(n)}function ul(n=J()){return/blackberry/i.test(n)}function hl(n=J()){return/webos/i.test(n)}function Di(n=J()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function am(n=J()){var e;return Di(n)&&!!((e=window.navigator)!=null&&e.standalone)}function lm(){return ld()&&document.documentMode===10}function fl(n=J()){return Di(n)||dl(n)||hl(n)||ul(n)||/windows phone/i.test(n)||cl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n,e=[]){let t;switch(n){case"Browser":t=Lr(J());break;case"Worker":t=`${Lr(J())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${xt}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,l)=>{try{const c=e(r);o(c)}catch(c){l(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",ts(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=6;class hm{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??um,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jr(this),this.idTokenSubscription=new jr(this),this.beforeStateQueue=new cm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xa,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xe(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await ut.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Un(this,{idToken:e}),s=await he._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(le(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Bn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(Be(this));const t=e?re(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(Be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(Be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dm(this),t=new hm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zt("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await om(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xe(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await ut.create(this,[xe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,s,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Wp(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ns(n){return re(n)}class jr{constructor(e){this.auth=e,this.observer=null,this.addObserver=yd(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pm(n){Oi=n}function mm(n){return Oi.loadJS(n)}function gm(){return Oi.gapiScript}function _m(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n,e){const t=ei(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Ye(r,e??{}))return i;Ce(i,"already-initialized")}return t.initialize({options:e})}function bm(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function vm(n,e,t){const s=ns(n);I(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=ml(e),{host:o,port:l}=xm(e),c=l===null?"":`:${l}`,d={url:`${r}//${o}${c}/`},f=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){I(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),I(Ye(d,s.config.emulator)&&Ye(f,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=f,s.settings.appVerificationDisabledForTesting=!0,bt(o)?(ko(`${r}//${o}${c}`),Io("Auth",!0)):wm()}function ml(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function xm(n){const e=ml(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Fr(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Fr(o)}}}function Fr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function wm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(n,e){return nl(n,"POST","/v1/accounts:signInWithIdp",ts(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="http://localhost";class tt extends gl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ce("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new tt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ht(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ht(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ht(e,t)}buildRequest(){const e={requestUri:km,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends _l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends ln{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.FACEBOOK_SIGN_IN_METHOD="facebook.com";Re.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends ln{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Pe.credential(t,s)}catch{return null}}}Pe.GOOGLE_SIGN_IN_METHOD="google.com";Pe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends ln{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.GITHUB_SIGN_IN_METHOD="github.com";De.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends ln{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Oe.credential(t,s)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Im(n,e){return nl(n,"POST","/v1/accounts:signUp",ts(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await he._fromIdTokenResponse(e,s,i),o=Ur(s);return new $e({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Ur(s);return new $e({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Ur(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(n){var i;if(le(n.app))return Promise.reject(Be(n));const e=ns(n);if(await e._initializationPromise,(i=e.currentUser)!=null&&i.isAnonymous)return new $e({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await Im(e,{returnSecureToken:!0}),s=await $e._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends We{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,zn.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new zn(e,t,s,i)}}function yl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?zn._fromErrorAndOperation(n,r,e,s):r})}async function Em(n,e,t=!1){const s=await Xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $e._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sm(n,e,t=!1){const{auth:s}=n;if(le(s.app))return Promise.reject(Be(s));const i="reauthenticate";try{const r=await Xt(n,yl(s,i,e,n),t);I(r.idToken,s,"internal-error");const o=Pi(r.idToken);I(o,s,"internal-error");const{sub:l}=o;return I(n.uid===l,s,"user-mismatch"),$e._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ce(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(n,e,t=!1){if(le(n.app))return Promise.reject(Be(n));const s="signIn",i=await yl(n,s,e),r=await $e._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function Nm(n,e,t,s){return re(n).onIdTokenChanged(e,t,s)}function Am(n,e,t){return re(n).beforeAuthStateChanged(e,t)}function Rm(n,e,t,s){return re(n).onAuthStateChanged(e,t,s)}const Vn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vn,"1"),this.storage.removeItem(Vn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=1e3,Dm=10;class vl extends bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);lm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dm):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Pm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vl.type="LOCAL";const Om=vl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xl.type="SESSION";const wl=xl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new ss(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async d=>d(t.origin,r)),c=await Mm(l);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ss.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,c)=>{const d=Mi("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const u=h;if(u.data.eventId===d)switch(u.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(u.data.response);break;default:clearTimeout(f),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(){return window}function jm(n){me().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){return typeof me().WorkerGlobalScope<"u"&&typeof me().importScripts=="function"}async function Fm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Um(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Bm(){return kl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="firebaseLocalStorageDb",zm=1,Hn="firebaseLocalStorage",Cl="fbase_key";class cn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function is(n,e){return n.transaction([Hn],e?"readwrite":"readonly").objectStore(Hn)}function Vm(){const n=indexedDB.deleteDatabase(Il);return new cn(n).toPromise()}function Hs(){const n=indexedDB.open(Il,zm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Hn,{keyPath:Cl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Hn)?e(s):(s.close(),await Vm(),e(await Hs()))})})}async function Br(n,e,t){const s=is(n,!0).put({[Cl]:e,value:t});return new cn(s).toPromise()}async function Hm(n,e){const t=is(n,!1).get(e),s=await new cn(t).toPromise();return s===void 0?null:s.value}function zr(n,e){const t=is(n,!0).delete(e);return new cn(t).toPromise()}const $m=800,Wm=3;class El{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Wm)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ss._getInstance(Bm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Fm(),!this.activeServiceWorker)return;this.sender=new Lm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Um()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hs();return await Br(e,Vn,"1"),await zr(e,Vn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Br(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Hm(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>zr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=is(i,!1).getAll();return new cn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}El.type="LOCAL";const Km=El;new an(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n,e){return e?xe(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends gl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qm(n){return Tm(n.auth,new Li(n),n.bypassAuthState)}function qm(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Sm(t,new Li(n),n.bypassAuthState)}async function Ym(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),Em(t,new Li(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qm;case"linkViaPopup":case"linkViaRedirect":return Ym;case"reauthViaPopup":case"reauthViaRedirect":return qm;default:Ce(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm=new an(2e3,1e4);class at extends Sl{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,at.currentPopupAction&&at.currentPopupAction.cancel(),at.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,at.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Jm.get())};e()}}at.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm="pendingRedirect",vn=new Map;class Zm extends Sl{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=vn.get(this.auth._key());if(!e){try{const s=await eg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}vn.set(this.auth._key(),e)}return this.bypassAuthState||vn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eg(n,e){const t=sg(e),s=ng(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function tg(n,e){vn.set(n._key(),e)}function ng(n){return xe(n._redirectPersistence)}function sg(n){return bn(Xm,n.config.apiKey,n.name)}async function ig(n,e,t=!1){if(le(n.app))return Promise.reject(Be(n));const s=ns(n),i=Gm(s,e),o=await new Zm(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=10*60*1e3;class og{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ag(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Tl(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(pe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vr(e))}saveEventToCache(e){this.cachedEventUids.add(Vr(e)),this.lastProcessedEventTime=Date.now()}}function Vr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Tl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ag(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dg=/^https?/;async function ug(n){if(n.config.emulator)return;const{authorizedDomains:e}=await lg(n);for(const t of e)try{if(hg(t))return}catch{}Ce(n,"unauthorized-domain")}function hg(n){const e=zs(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!dg.test(t))return!1;if(cg.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new an(3e4,6e4);function Hr(){const n=me().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function pg(n){return new Promise((e,t)=>{var i,r,o;function s(){Hr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hr(),t(pe(n,"network-request-failed"))},timeout:fg.get()})}if((r=(i=me().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=me().gapi)!=null&&o.load)s();else{const l=_m("iframefcb");return me()[l]=()=>{gapi.load?s():t(pe(n,"network-request-failed"))},mm(`${gm()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw xn=null,e})}let xn=null;function mg(n){return xn=xn||pg(n),xn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg=new an(5e3,15e3),_g="__/auth/iframe",yg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xg(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ri(e,yg):`https://${n.config.authDomain}/${_g}`,s={apiKey:e.apiKey,appName:n.name,v:xt},i=vg.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${vt(s).slice(1)}`}async function wg(n){const e=await mg(n),t=me().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:xg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),l=me().setTimeout(()=>{r(o)},gg.get());function c(){me().clearTimeout(l),i(s)}s.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,Cg=600,Eg="_blank",Sg="http://localhost";class $r{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tg(n,e,t,s=Ig,i=Cg){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c={...kg,width:s.toString(),height:i.toString(),top:r,left:o},d=J().toLowerCase();t&&(l=ll(d)?Eg:t),ol(d)&&(e=e||Sg,c.scrollbars="yes");const f=Object.entries(c).reduce((u,[p,g])=>`${u}${p}=${g},`,"");if(am(d)&&l!=="_self")return Ng(e||"",l),new $r(null);const h=window.open(e||"",l,f);I(h,n,"popup-blocked");try{h.focus()}catch{}return new $r(h)}function Ng(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="__/auth/handler",Rg="emulator/auth/handler",Pg=encodeURIComponent("fac");async function Wr(n,e,t,s,i,r){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:xt,eventId:i};if(e instanceof _l){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Is(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof ln){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),d=c?`#${Pg}=${encodeURIComponent(c)}`:"";return`${Dg(n)}?${vt(l).slice(1)}${d}`}function Dg({config:n}){return n.emulator?Ri(n,Rg):`https://${n.authDomain}/${Ag}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="webStorageSupport";class Og{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wl,this._completeRedirectFn=ig,this._overrideRedirectResult=tg}async _openPopup(e,t,s,i){var o;Ee((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Wr(e,t,s,zs(),i);return Tg(e,r,Mi())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Wr(e,t,s,zs(),i);return jm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Ee(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await wg(e),s=new og(e);return t.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ys,{type:ys},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[ys];r!==void 0&&t(!!r),Ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ug(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fl()||al()||Di()}}const Mg=Og;var Kr="@firebase/auth",Gr="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Fg(n){pt(new Je("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pl(n)},d=new fm(s,i,r,c);return bm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),pt(new Je("auth-internal",e=>{const t=ns(e.getProvider("auth").getImmediate());return(s=>new Lg(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(Kr,Gr,jg(n)),je(Kr,Gr,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=5*60,Bg=wo("authIdTokenMaxAge")||Ug;let Qr=null;const zg=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Bg)return;const i=t==null?void 0:t.token;Qr!==i&&(Qr=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Vg(n=Ao()){const e=ei(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ym(n,{popupRedirectResolver:Mg,persistence:[Km,Om,wl]}),s=wo("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=zg(r.toString());Am(t,o,()=>o(t.currentUser)),Nm(t,l=>o(l))}}const i=vo("auth");return i&&vm(t,`http://${i}`),t}function Hg(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pm({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=pe("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Hg().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Fg("Browser");const $g={apiKey:"AIzaSyDkclrBMUGgJlQwUJaIvbrANaKdoEIo3Wc",authDomain:"tyt-tunnel.firebaseapp.com",databaseURL:"https://tyt-tunnel-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tyt-tunnel",storageBucket:"tyt-tunnel.firebasestorage.app",messagingSenderId:"246968713119",appId:"1:246968713119:web:2efc71b64b5da0820e87aa"},Nl=No($g),Al=Up(Nl),qr=Vg(Nl),Wg=()=>new Promise((n,e)=>{Rm(qr,t=>{t?(console.log("[Firebase] User authenticated:",t.uid),n(t)):Cm(qr).then(s=>{console.log("[Firebase] Anonymous sign-in successful:",s.user.uid),n(s.user)}).catch(s=>{console.error("[Firebase] Auth error:",s),e(s)})})});let nt=null,st=!1;const Kg=async()=>{try{return nt=(await Wg()).uid,st=!0,console.log("[Firebase Sync] Initialized for user:",nt),!0}catch(n){return console.error("[Firebase Sync] Init failed:",n),st=!1,!1}},bs=async(n,e)=>{if(!st||!nt)return console.warn("[Firebase Sync] Not enabled or no user"),!1;try{const t=Ya(Al,`users/${nt}/${n}`);return await Ap(t,{data:e,updatedAt:new Date().toISOString()}),console.log(`[Firebase Sync] Uploaded: ${n}`),!0}catch(t){return console.error("[Firebase Sync] Upload failed:",t),!1}},vs=async n=>{if(!st||!nt)return console.warn("[Firebase Sync] Not enabled or no user"),null;try{const e=Ya(Al,`users/${nt}/${n}`),t=await Rp(e);if(t.exists()){const s=t.val();return console.log(`[Firebase Sync] Downloaded: ${n}`),s.data}else return console.log(`[Firebase Sync] No data found: ${n}`),null}catch(e){return console.error("[Firebase Sync] Download failed:",e),null}},Gg=async()=>{if(!st)return console.warn("[Firebase Sync] Not enabled"),!1;try{const n=JSON.parse(localStorage.getItem("tyt_progress")||"{}"),e=JSON.parse(localStorage.getItem("tyt_settings")||"{}"),{getAllOptiks:t}=await Zr(async()=>{const{getAllOptiks:i}=await Promise.resolve().then(()=>mo);return{getAllOptiks:i}},void 0),s=await t();return await bs("progress",n),await bs("settings",e),await bs("optiks",s),console.log("[Firebase Sync] All data synced to cloud"),!0}catch(n){return console.error("[Firebase Sync] Full sync failed:",n),!1}},Qg=async()=>{if(!st)return console.warn("[Firebase Sync] Not enabled"),!1;try{const n=await vs("progress"),e=await vs("settings"),t=await vs("optiks");if(n&&localStorage.setItem("tyt_progress",JSON.stringify(n)),e&&localStorage.setItem("tyt_settings",JSON.stringify(e)),t&&Array.isArray(t)){const{saveOptik:s}=await Zr(async()=>{const{saveOptik:i}=await Promise.resolve().then(()=>mo);return{saveOptik:i}},void 0);for(const i of t)i.day&&i.topicName&&i.answers&&await s(i.day,i.topicName,i.answers)}return console.log("[Firebase Sync] All data downloaded from cloud"),!0}catch(n){return console.error("[Firebase Sync] Download failed:",n),!1}},qg=()=>st,Yr=()=>nt;function Yg(){const[n,e]=m.useState(!1),[t,s]=m.useState(null),[i,r]=m.useState(!1),[o,l]=m.useState(null),[c,d]=m.useState({type:"",message:""});m.useEffect(()=>{(async()=>{const g=qg();e(g),g&&s(Yr())})()},[]);const f=async()=>{r(!0),d({type:"info",message:"Firebase bağlantısı kuruluyor..."}),await Kg()?(e(!0),s(Yr()),d({type:"success",message:"Firebase bağlantısı başarılı!"}),await h()):d({type:"error",message:"Firebase bağlantısı başarısız! Config dosyasını kontrol et."}),r(!1)},h=async()=>{r(!0),d({type:"info",message:"Veriler buluta yükleniyor..."}),await Gg()?(l(new Date),d({type:"success",message:"Tüm veriler buluta yüklendi!"})):d({type:"error",message:"Yükleme başarısız!"}),r(!1)},u=async()=>{if(!confirm("Buluttaki veriler yerel verilerin üzerine yazılacak. Devam edilsin mi?"))return;r(!0),d({type:"info",message:"Veriler buluttan indiriliyor..."}),await Qg()?(l(new Date),d({type:"success",message:"Veriler buluttan indirildi! Sayfa yenileniyor..."}),setTimeout(()=>window.location.reload(),1500)):d({type:"error",message:"İndirme başarısız!"}),r(!1)};return a.jsxs("div",{className:"bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[n?a.jsx(Ui,{size:24,className:"text-green-400"}):a.jsx(sc,{size:24,className:"text-gray-600"}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:"Bulut Senkronizasyonu"}),a.jsxs("p",{className:"text-xs text-gray-500",children:[n?"Aktif":"Pasif"," • Firebase Realtime Database"]})]})]}),n&&t&&a.jsxs("div",{className:"text-xs text-gray-500 font-mono",children:["ID: ",t.substring(0,8),"..."]})]}),c.message&&a.jsxs(H.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:`mb-4 p-3 rounded-lg border flex items-center gap-2 text-sm ${c.type==="success"?"bg-green-500/10 border-green-500/30 text-green-400":c.type==="error"?"bg-red-500/10 border-red-500/30 text-red-400":"bg-blue-500/10 border-blue-500/30 text-blue-400"}`,children:[c.type==="success"&&a.jsx(no,{size:16}),c.type==="error"&&a.jsx(so,{size:16}),c.type==="info"&&a.jsx(Bi,{size:16,className:"animate-spin"}),c.message]}),n?a.jsxs("div",{className:"space-y-3",children:[o&&a.jsxs("div",{className:"text-xs text-gray-500 text-center mb-2",children:["Son senkronizasyon: ",o.toLocaleTimeString("tr-TR")]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("button",{onClick:h,disabled:i,className:`py-3 bg-green-500/20 border border-green-500/50 rounded-lg\r
                                     text-green-400 hover:bg-green-500/30 transition-colors\r
                                     disabled:opacity-50 disabled:cursor-not-allowed\r
                                     flex items-center justify-center gap-2 font-medium`,children:[a.jsx(oo,{size:18}),"Yükle"]}),a.jsxs("button",{onClick:u,disabled:i,className:`py-3 bg-blue-500/20 border border-blue-500/50 rounded-lg\r
                                     text-blue-400 hover:bg-blue-500/30 transition-colors\r
                                     disabled:opacity-50 disabled:cursor-not-allowed\r
                                     flex items-center justify-center gap-2 font-medium`,children:[a.jsx(Ws,{size:18}),"İndir"]})]}),a.jsx("p",{className:"text-xs text-gray-500 text-center",children:"Veriler otomatik olarak senkronize edilir. Manuel yükleme/indirme için butonları kullan."})]}):a.jsxs("div",{className:"space-y-4",children:[a.jsx("p",{className:"text-gray-400 text-sm",children:"Firebase ile cihazlar arası otomatik senkronizasyon. Tüm verileriniz (ilerleme, optikler, çizimler) güvenli şekilde bulutta saklanır."}),a.jsx("button",{onClick:f,disabled:i,className:`w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 \r
                                 text-white font-semibold rounded-lg hover:from-blue-400 hover:to-purple-500\r
                                 disabled:opacity-50 disabled:cursor-not-allowed transition-all\r
                                 flex items-center justify-center gap-2`,children:i?a.jsxs(a.Fragment,{children:[a.jsx(Bi,{size:20,className:"animate-spin"}),"Bağlanıyor..."]}):a.jsxs(a.Fragment,{children:[a.jsx(Ui,{size:20}),"Senkronizasyonu Başlat"]})}),a.jsx("div",{className:"bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 text-xs text-yellow-400",children:"⚠️ İlk kullanımda Firebase config dosyasını düzenlemelisin!"})]})]})}const Jg=n=>{const e={};return Object.values(n).forEach(t=>{t.weakTags&&Array.isArray(t.weakTags)&&t.weakTags.forEach(s=>{e[s]=(e[s]||0)+1})}),Object.entries(e).sort((t,s)=>s[1]-t[1])},Xg=(n,e=7)=>{const t=Object.values(n).filter(r=>r.completed);if(t.length===0)return 0;const s=t.slice(-e),i=s.reduce((r,o)=>{var l;return r+(((l=o.stats)==null?void 0:l.net)||0)},0);return parseFloat((i/s.length).toFixed(2))},Zg=n=>{const e=Object.values(n).filter(d=>d.completed);if(e.length<7)return{trend:"insufficient_data",change:0};const t=e.slice(-7),s=e.slice(-14,-7);if(s.length===0)return{trend:"insufficient_data",change:0};const i=t.reduce((d,f)=>{var h;return d+(((h=f.stats)==null?void 0:h.net)||0)},0)/t.length,r=s.reduce((d,f)=>{var h;return d+(((h=f.stats)==null?void 0:h.net)||0)},0)/s.length,o=parseFloat((i-r).toFixed(2)),l=r>0?parseFloat((o/r*100).toFixed(1)):0;let c="stable";return o>2?c="improving":o<-2&&(c="declining"),{trend:c,change:o,percentChange:l,recentAvg:i,previousAvg:r}},e_=n=>{const e=Object.values(n).filter(s=>s.completed),t=e.reduce((s,i)=>{var r;return s+(((r=i.stats)==null?void 0:r.studyMinutes)||0)},0);return{minutes:t,hours:parseFloat((t/60).toFixed(1)),days:e.length}},t_=(n,e)=>{const t={version:"2.0.0",exportDate:new Date().toISOString(),progress:n,settings:e},s=JSON.stringify(t,null,2),i=new Blob([s],{type:"application/json"}),r=URL.createObjectURL(i),o=document.createElement("a");o.href=r;const l=new Date().toISOString().split("T")[0];o.download=`citadel_v2_backup_${l}.json`,o.click(),URL.revokeObjectURL(r),console.log("[Export] Backup exported successfully")},n_=n=>new Promise((e,t)=>{const s=new FileReader;s.onload=i=>{try{const r=JSON.parse(i.target.result);if(!r.version||r.version!=="2.0.0"){t(new Error("Yedek dosyası V2.0 formatında değil"));return}if(!r.progress||!r.settings){t(new Error("Eksik veri: progress veya settings bulunamadı"));return}if(!r.progress.days||!r.progress.streak){t(new Error("Geçersiz progress formatı"));return}console.log("[Import] Backup imported successfully"),e({progress:r.progress,settings:r.settings})}catch(r){t(new Error(`JSON parse hatası: ${r.message}`))}},s.onerror=()=>{t(new Error("Dosya okunamadı"))},s.readAsText(n)}),s_=async()=>{const n={timestamp:new Date().toISOString(),browser:i_(),storage:await r_(),proxy:await o_(),pdfs:a_(),overall:"unknown"},e=Object.values(n).some(s=>s.status==="error"),t=Object.values(n).some(s=>s.status==="warning");return e?n.overall="error":t?n.overall="warning":n.overall="ok",n},i_=()=>{const n=navigator.userAgent;let e="Unknown";return n.includes("Chrome")?e="Chrome":n.includes("Firefox")?e="Firefox":n.includes("Safari")?e="Safari":n.includes("Edge")&&(e="Edge"),{name:e,userAgent:n,platform:navigator.platform,language:navigator.language,online:navigator.onLine,cookiesEnabled:navigator.cookieEnabled}},r_=async()=>{const n={status:"ok",localStorage:{available:!1,used:0,quota:0},indexedDB:{available:!1,size:0},issues:[]};try{const e="__storage_test__";localStorage.setItem(e,"test"),localStorage.removeItem(e),n.localStorage.available=!0;let t=0;for(let s in localStorage)localStorage.hasOwnProperty(s)&&(t+=localStorage[s].length+s.length);n.localStorage.used=t,n.localStorage.quota=5*1024*1024,t>n.localStorage.quota*.8&&(n.status="warning",n.issues.push("localStorage %80 dolu"))}catch(e){n.status="error",n.issues.push(`localStorage hatası: ${e.message}`)}try{const e=await uo();n.indexedDB.available=!0,n.indexedDB.size=e,e>100*1024*1024&&(n.status="warning",n.issues.push("IndexedDB cache 100MB üzerinde"))}catch(e){n.status="error",n.issues.push(`IndexedDB hatası: ${e.message}`)}return n},o_=async()=>{const n={status:"unknown",url:Pt,reachable:!1,responseTime:0,issues:[]};if(!Pt.startsWith("http"))return n.status="error",n.issues.push("PROXY_URL geçersiz veya tanımsız"),n;try{const e=Date.now(),t=await fetch(Pt,{method:"HEAD",mode:"no-cors"});n.responseTime=Date.now()-e,n.reachable=!0,n.status="ok",n.responseTime>3e3&&(n.status="warning",n.issues.push("Proxy yanıt süresi yavaş (>3s)"))}catch(e){n.status="error",n.reachable=!1,n.issues.push(`Proxy erişilemez: ${e.message}`)}return n},a_=()=>{const n={status:"ok",totalPDFs:0,missingIDs:[],issues:[]},e=Object.entries(Gs);return n.totalPDFs=e.length,e.forEach(([t,s])=>{(!s||s.length<10)&&n.missingIDs.push(t)}),n.missingIDs.length>0&&(n.status="warning",n.issues.push(`${n.missingIDs.length} PDF ID eksik veya geçersiz`)),n},l_=async()=>{console.log("🔍 THE CITADEL V2 - System Diagnostics"),console.log(`=====================================
`);const n=await s_();console.log("📊 Overall Status:",n.overall.toUpperCase()),console.log(`
🌐 Browser:`,n.browser.name,"|",n.browser.platform),console.log("   Online:",n.browser.online?"✅":"❌"),console.log("   Cookies:",n.browser.cookiesEnabled?"✅":"❌"),console.log(`
💾 Storage:`),console.log("   localStorage:",n.storage.localStorage.available?"✅":"❌",`(${(n.storage.localStorage.used/1024).toFixed(1)} KB used)`),console.log("   IndexedDB:",n.storage.indexedDB.available?"✅":"❌",`(${(n.storage.indexedDB.size/1024/1024).toFixed(2)} MB cached)`),console.log(`
🌍 Proxy:`),console.log("   URL:",n.proxy.url),console.log("   Reachable:",n.proxy.reachable?"✅":"❌"),n.proxy.reachable&&console.log("   Response Time:",n.proxy.responseTime,"ms"),console.log(`
📄 PDF Config:`),console.log("   Total PDFs:",n.pdfs.totalPDFs),console.log("   Missing IDs:",n.pdfs.missingIDs.length);const e=[...n.storage.issues,...n.proxy.issues,...n.pdfs.issues];return e.length>0?(console.log(`
⚠️ Issues Found:`),e.forEach((t,s)=>{console.log(`   ${s+1}. ${t}`)})):console.log(`
✅ No issues found!`),console.log(`
=====================================`),n};function c_({progress:n,settings:e,onStartStudy:t,onAddMockExam:s,onResumeStudy:i}){var U;const[r,o]=m.useState(!1),[l,c]=m.useState(!1),[d,f]=m.useState(!1),h=Object.values(n.days).filter(B=>B.completed),u=Jg(n.days);Xg(n.days,7),Zg(n.days);const p=n.dayIdx<105&&!((U=n.days[n.dayIdx])!=null&&U.completed);e_(n.days);const g=n.dayIdx>=105,_=105,w=h.length,T=_-w,v=e.targetDate?new Date(e.targetDate):new Date("2026-06-06"),b=new Date;b.setHours(0,0,0,0),v.setHours(0,0,0,0);const x=Math.ceil((v-b)/(1e3*60*60*24)),A=Object.entries(n.days).filter(([B,ye])=>ye.completed).slice(-7),V=A.length>0?(Date.now()-new Date(A[0][1].completedAt).getTime())/(1e3*60*60*24):0,P=V>0?A.length/V:0,L=x>0?T/x:0,ne=Object.entries(n.days).filter(([B,ye])=>ye.completed).map(([B,ye])=>{var Et;return{day:parseInt(B)+1,net:((Et=ye.stats)==null?void 0:Et.net)||0}}),X=B=>{s(B),o(!1)},ae=()=>{t_(n,e)},C=()=>{const B=document.createElement("input");B.type="file",B.accept=".json",B.onchange=async ye=>{const Et=ye.target.files[0];if(Et){c(!0);try{const{progress:dn,settings:Rl}=await n_(Et);localStorage.setItem("citadel_v2_progress",JSON.stringify(dn)),localStorage.setItem("citadel_v2_settings",JSON.stringify(Rl)),alert("✅ Yedek başarıyla içe aktarıldı! Sayfa yenileniyor..."),window.location.reload()}catch(dn){alert(`❌ İçe aktarma hatası: ${dn.message}`),console.error("[Import Error]",dn)}finally{c(!1)}}},B.click()},Ne=async()=>{f(!0);try{await l_(),alert(`✅ Diagnostic raporu konsola yazdırıldı!

Tarayıcı konsolunu açın (F12) ve kontrol edin.`)}catch(B){alert(`❌ Diagnostic hatası: ${B.message}`)}finally{f(!1)}};return a.jsx("div",{className:"min-h-screen bg-[#050505] p-6 lg:p-12 overflow-y-auto",children:a.jsxs("div",{className:"max-w-7xl mx-auto",children:[a.jsxs("div",{className:"flex items-center justify-between mb-8",children:[a.jsxs("div",{children:[a.jsxs("h1",{className:"text-4xl font-black text-white mb-2",children:["THE CITADEL ",a.jsx("span",{className:"text-blue-400",children:"V2"})]}),a.jsxs("p",{className:"text-gray-500",children:["GÜN ",n.dayIdx+1," / 105"]})]}),a.jsxs("div",{className:"flex gap-2 flex-wrap justify-end",children:[a.jsx("button",{onClick:Ne,disabled:d,className:`px-3 py-2 bg-white/5 border border-white/10 rounded-lg\r
                         text-gray-400 hover:text-white hover:bg-white/10\r
                         transition-colors flex items-center gap-2 disabled:opacity-50`,title:"Sistem Kontrolü",children:a.jsx(Jl,{size:18})}),a.jsxs("button",{onClick:C,disabled:l,className:`px-3 py-2 bg-white/5 border border-white/10 rounded-lg\r
                         text-gray-400 hover:text-white hover:bg-white/10\r
                         transition-colors flex items-center gap-2 disabled:opacity-50`,children:[a.jsx(oo,{size:18}),a.jsx("span",{className:"hidden sm:inline",children:l?"Yükleniyor...":"İçe Aktar"})]}),a.jsxs("button",{onClick:ae,className:`px-3 py-2 bg-white/5 border border-white/10 rounded-lg\r
                         text-gray-400 hover:text-white hover:bg-white/10\r
                         transition-colors flex items-center gap-2`,children:[a.jsx(Ws,{size:18}),a.jsx("span",{className:"hidden sm:inline",children:"Yedek Al"})]}),p&&i&&a.jsx("button",{onClick:i,className:`px-6 py-3 bg-green-500 text-black font-bold rounded-lg\r
                                     hover:bg-green-400 transition-colors flex items-center gap-2`,title:"Aktif günü devam ettir",children:"▶ DEVAM ET"}),a.jsx("button",{onClick:t,disabled:g,className:`px-6 py-3 bg-blue-500 text-black font-bold rounded-lg\r
                         hover:bg-blue-400 transition-colors disabled:opacity-50 \r
                         disabled:cursor-not-allowed`,title:g?"Tünel tamamlandı!":"Çalışmaya başla",children:g?"✓ TAMAMLANDI":"BAŞLA →"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8",children:[a.jsx(St,{label:"Sınava Kalan",value:x>0?x:"0",sub:`${v.toLocaleDateString("tr-TR",{day:"numeric",month:"long"})}`,icon:"🎯"}),a.jsx(St,{label:"Kalan Konu",value:T,sub:`${w} / ${_} tamamlandı`,icon:"📚"}),a.jsx(St,{label:"Günlük Hız",value:P>0?P.toFixed(2):"—",sub:P>0?"konu/gün (son 7 gün)":"henüz veri yok",icon:"⚡"}),a.jsx(St,{label:"Gerekli Hız",value:L>0?L.toFixed(2):"—",sub:L>0?"konu/gün (hedefe ulaşmak için)":"—",icon:"🎲"}),a.jsx(St,{label:"Streak",value:n.streak.current,sub:`En uzun: ${n.streak.longest}`,icon:"🔥"})]}),P>0&&T>0&&x>0&&a.jsx(H.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:`bg-gradient-to-r ${P>=L?"from-blue-500/10 to-purple-500/10 border-blue-500/30":"from-yellow-500/10 to-orange-500/10 border-yellow-500/30"} border rounded-xl p-4 mb-8`,children:a.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-4",children:[a.jsxs("div",{children:[a.jsx("div",{className:`${P>=L?"text-blue-400":"text-yellow-400"} font-bold text-lg mb-1`,children:P>=L?"🚀 Mükemmel! Hedefe yetişiyorsun.":"⚠️ Dikkat! Hedefe yetişmek için hızlanmalısın."}),a.jsxs("div",{className:"text-gray-400 text-sm",children:["Şu anki hızın: ",a.jsxs("strong",{children:[P.toFixed(2)," konu/gün"]})," • Gerekli hız: ",a.jsxs("strong",{children:[L.toFixed(2)," konu/gün"]}),P<L&&a.jsxs("span",{className:"text-yellow-400",children:[" • Günde ",(L-P).toFixed(2)," konu daha fazla çalışmalısın!"]})]})]}),P>=L?a.jsx(Nc,{className:"text-blue-400",size:32}):a.jsx(Sc,{className:"text-yellow-400",size:32})]})}),a.jsxs("div",{className:`bg-white/5 backdrop-blur-md border border-white/10\r
                        rounded-2xl p-6 mb-8`,children:[a.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Net Trend"}),a.jsx(Oc,{data:ne,targetNet:75})]}),a.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 mb-8",children:[a.jsxs("div",{className:`bg-white/5 backdrop-blur-md border border-white/10\r
                          rounded-2xl p-6`,children:[a.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"Zayıf Noktalar"}),a.jsx(Fc,{topics:u})]}),a.jsxs("div",{className:`bg-white/5 backdrop-blur-md border border-white/10\r
                          rounded-2xl p-6`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-xl font-bold text-white",children:"Deneme Sınavları"}),a.jsx("button",{onClick:()=>o(!0),className:`p-2 bg-blue-500/20 border border-blue-500/50 rounded-lg\r
                           text-blue-400 hover:bg-blue-500/30 transition-colors`,children:a.jsx(xc,{size:20})})]}),n.mockExams.length===0?a.jsx("p",{className:"text-gray-600 text-sm",children:"Henüz deneme eklenmedi"}):a.jsx("div",{className:"space-y-3 max-h-60 overflow-y-auto",children:n.mockExams.slice().reverse().map((B,ye)=>a.jsxs("div",{className:"bg-white/5 rounded-lg p-4 border border-white/10",children:[a.jsxs("div",{className:"flex justify-between items-start mb-2",children:[a.jsx("div",{className:"font-semibold text-white text-sm",children:B.source}),a.jsx("div",{className:"text-blue-400 font-mono font-bold",children:B.total.toFixed(1)})]}),a.jsxs("div",{className:"grid grid-cols-4 gap-2 text-xs text-gray-500",children:[a.jsxs("div",{children:["Mat: ",a.jsx("span",{className:"text-white font-mono",children:B.scores.mat})]}),a.jsxs("div",{children:["Tür: ",a.jsx("span",{className:"text-white font-mono",children:B.scores.tur})]}),a.jsxs("div",{children:["Fen: ",a.jsx("span",{className:"text-white font-mono",children:B.scores.fen})]}),a.jsxs("div",{children:["Sos: ",a.jsx("span",{className:"text-white font-mono",children:B.scores.sos})]})]}),B.note&&a.jsx("p",{className:"text-gray-600 text-xs mt-2",children:B.note})]},ye))})]})]}),a.jsx("div",{className:"mb-8",children:a.jsx(Yg,{})}),a.jsx("div",{className:"mb-8",children:a.jsx(Kc,{})}),r&&a.jsx(Uc,{onSave:X,onClose:()=>o(!1)})]})})}function $s({children:n,initialX:e=0,initialY:t=0,className:s="",style:i={},zIndex:r=40,dragHandleClassName:o="drag-handle"}){const[l,c]=m.useState({x:e,y:t}),[d,f]=m.useState(!1),h=m.useRef(null),u=m.useRef({x:0,y:0}),p=w=>{if(!w.target.closest(`.${o}`)||w.button!==0)return;f(!0);const T=h.current.getBoundingClientRect();u.current={x:w.clientX-T.left,y:w.clientY-T.top},w.preventDefault()},g=w=>{if(!d)return;const T=w.clientX-u.current.x,v=w.clientY-u.current.y;c({x:T,y:v})},_=()=>{f(!1)};return m.useEffect(()=>{if(d)return document.addEventListener("mousemove",g),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",_)}},[d]),a.jsx("div",{ref:h,className:s,style:{...i,position:"fixed",left:`${l.x}px`,top:`${l.y}px`,zIndex:r,userSelect:"none"},onMouseDown:p,children:n})}function d_({pdfId:n,pageNumber:e}){const t=m.useRef(null),[s,i]=m.useState(!1),[r,o]=m.useState("view"),[l,c]=m.useState(2),[d,f]=m.useState("#000000"),h=m.useRef(null);m.useEffect(()=>{const v=t.current;if(!v)return;const b=v.getContext("2d");b.clearRect(0,0,v.width,v.height),console.log("[InkOverlay] Loading ink for:",n,"page:",e),co(n,e).then(x=>{if(x){console.log("[InkOverlay] Ink found, loading...");const A=new Image;A.onload=()=>{b.drawImage(A,0,0),console.log("[InkOverlay] Ink loaded successfully")},A.onerror=()=>{console.error("[InkOverlay] Failed to load ink image")},A.src=x}else console.log("[InkOverlay] No saved ink found")}).catch(x=>{console.error("[InkOverlay] Ink load failed:",x)})},[n,e]),m.useEffect(()=>{const v=t.current;if(!v)return;const b=v.parentElement;b&&(v.width=b.offsetWidth,v.height=b.offsetHeight)},[]);const u=m.useCallback(v=>{const b=t.current,x=b.getBoundingClientRect(),A=b.width/x.width,V=b.height/x.height;return{x:(v.clientX-x.left)*A,y:(v.clientY-x.top)*V,pressure:v.pressure||.5}},[]),p=m.useCallback(v=>{if(r==="view")return;v.preventDefault(),v.stopPropagation(),i(!0);const b=u(v);h.current=b;const x=t.current.getContext("2d");x.beginPath(),x.moveTo(b.x,b.y)},[u,r]),g=m.useCallback(v=>{if(!s||r==="view")return;v.preventDefault(),v.stopPropagation();const b=t.current.getContext("2d"),x=u(v);r==="eraser"?(b.globalCompositeOperation="destination-out",b.lineWidth=30):(b.globalCompositeOperation="source-over",b.lineWidth=l*(.5+x.pressure*1.5),b.strokeStyle=d),b.lineCap="round",b.lineJoin="round",b.lineTo(x.x,x.y),b.stroke(),b.beginPath(),b.moveTo(x.x,x.y),h.current=x},[s,r,l,d,u]),_=m.useCallback(()=>{if(!s)return;i(!1),h.current=null;const b=t.current.toDataURL("image/png");console.log("[InkOverlay] Saving ink for:",n,"page:",e),ws(n,e,b).then(()=>{console.log("[InkOverlay] Ink saved successfully")}).catch(x=>{console.error("[InkOverlay] Ink save failed:",x)})},[s,n,e]),w=()=>{t.current.getContext("2d").clearRect(0,0,t.current.width,t.current.height),console.log("[InkOverlay] Clearing ink for:",n,"page:",e),ws(n,e,null).then(()=>{console.log("[InkOverlay] Ink cleared successfully")})},T=["#000000","#ffffff","#ff3333","#00ff00","#3399ff","#ffff00"];return a.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[a.jsx("canvas",{ref:t,className:`absolute inset-0 ${r==="view"?"pointer-events-none":"pointer-events-auto"}`,style:{touchAction:"none",cursor:r==="view"?"default":r==="pen"?"crosshair":"cell",zIndex:r==="view"?0:40},onPointerDown:p,onPointerMove:g,onPointerUp:_,onPointerLeave:_,onPointerCancel:_}),a.jsx($s,{initialX:window.innerWidth-100,initialY:20,zIndex:50,children:a.jsxs("div",{className:"flex flex-col gap-1.5 bg-black/90 backdrop-blur-md rounded-2xl p-2 border border-white/10 pointer-events-auto",children:[a.jsx("div",{className:"drag-handle flex items-center justify-center py-1 cursor-grab active:cursor-grabbing border-b border-white/10 mb-1",children:a.jsx(io,{size:16,className:"text-gray-400 pointer-events-none"})}),a.jsx("button",{onClick:()=>o("view"),className:`p-2 rounded-lg transition-colors ${r==="view"?"bg-blue-500/30 text-blue-400":"text-gray-500 hover:text-gray-300"}`,title:"Görüntüle (PDF'i kaydır)",children:a.jsx(uc,{size:20})}),a.jsx("button",{onClick:()=>o("pen"),className:`p-2 rounded-lg transition-colors ${r==="pen"?"bg-green-500/30 text-green-400":"text-gray-500 hover:text-gray-300"}`,title:"Kalem (Çiz)",children:a.jsx(_c,{size:20})}),a.jsx("button",{onClick:()=>o("eraser"),className:`p-2 rounded-lg transition-colors ${r==="eraser"?"bg-red-500/30 text-red-400":"text-gray-500 hover:text-gray-300"}`,title:"Silgi",children:a.jsx(ac,{size:20})}),a.jsx("div",{className:"border-t border-white/10 pt-1.5 flex flex-col gap-1",children:[1,2,4].map(v=>a.jsx("button",{onClick:()=>{c(v),o("pen")},className:`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${l===v&&r==="pen"?"bg-green-500/20 border border-green-500/30":"bg-white/5 hover:bg-white/10"}`,children:a.jsx("div",{className:"rounded-full",style:{width:v*3+2,height:v*3+2,backgroundColor:d}})},v))}),a.jsx("div",{className:"border-t border-white/10 pt-1.5 flex flex-col gap-1",children:T.map(v=>a.jsx("button",{onClick:()=>{f(v),o("pen")},className:`w-8 h-8 rounded-lg flex items-center justify-center ${d===v&&r==="pen"?"ring-2 ring-white/50":""}`,children:a.jsx("div",{className:"w-5 h-5 rounded-full border border-white/20",style:{backgroundColor:v}})},v))}),a.jsx("div",{className:"border-t border-white/10 pt-1.5",children:a.jsx("button",{onClick:w,className:`p-2 rounded-lg text-red-500 hover:bg-red-500/20 \r
                       transition-colors w-full`,title:"Tümünü temizle",children:a.jsx(Ks,{size:20})})})]})})]})}function u_({pdfData:n,currentPage:e,onPageChange:t,totalPages:s,setTotalPages:i,pdfId:r}){const[o,l]=m.useState(null),[c,d]=m.useState("");return m.useEffect(()=>{const f=window.currentPdfFileId;if(f&&f!==o){l(f);const h=`${Pt}?id=${f}`;d(h),console.log("[PdfViewer] PDF URL:",h)}},[o]),m.useEffect(()=>{const f=setInterval(()=>{const h=window.currentPdfFileId;if(h&&h!==o){l(h);const u=`${Pt}?id=${h}`;d(u),console.log("[PdfViewer] Updated PDF URL")}},500);return()=>clearInterval(f)},[o]),c?a.jsxs("div",{className:"relative w-full h-full bg-gray-900 flex flex-col",children:[a.jsxs("div",{className:"relative w-full h-full",children:[a.jsx("iframe",{src:c,className:"w-full h-full border-0 absolute inset-0",title:"PDF Viewer",style:{pointerEvents:"auto"},onError:f=>{console.error("[PdfViewer] iframe error:",f)}},c),a.jsx("div",{className:"absolute inset-0 pointer-events-none",children:a.jsx(d_,{pdfId:r,pageNumber:e})})]}),a.jsxs("div",{className:"absolute top-4 left-4 z-50 flex gap-2",children:[a.jsxs("button",{onClick:()=>window.open(c,"_blank"),className:`flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-md \r
                             text-white rounded-lg border border-white/20 hover:bg-blue-500 \r
                             hover:text-black transition-colors shadow-xl`,title:"Yeni sekmede aç",children:[a.jsx(cc,{size:18}),a.jsx("span",{className:"text-sm font-medium",children:"Yeni Sekmede Aç"})]}),a.jsxs("a",{href:c,download:!0,className:`flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-md \r
                             text-white rounded-lg border border-white/20 hover:bg-blue-500 \r
                             hover:text-black transition-colors shadow-xl`,title:"İndir",children:[a.jsx(Ws,{size:18}),a.jsx("span",{className:"text-sm font-medium",children:"İndir"})]})]}),a.jsx("div",{className:`absolute bottom-4 left-1/2 transform -translate-x-1/2 \r
                          bg-black/90 backdrop-blur-md px-6 py-3 rounded-full\r
                          border border-white/20 shadow-2xl z-50`,children:a.jsx("div",{className:"text-blue-400 font-mono text-sm",children:"📄 Browser PDF Viewer"})})]}):a.jsx("div",{className:"relative w-full h-full bg-gray-900 flex items-center justify-center",children:a.jsxs("div",{className:"text-gray-400 text-center",children:[a.jsx("div",{className:"text-4xl mb-4",children:"📄"}),a.jsx("div",{children:"PDF hazırlanıyor..."})]})})}function h_({videoId:n}){return n?a.jsx("div",{className:"relative w-full h-full bg-black",children:a.jsx("iframe",{src:`https://www.youtube-nocookie.com/embed/${n}?rel=0&modestbranding=1`,title:"YouTube Video",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"absolute inset-0 w-full h-full border-0"})}):a.jsx("div",{className:"w-full h-full flex items-center justify-center bg-black",children:a.jsx("div",{className:"text-gray-600 text-sm",children:"Video ID bekleniyor..."})})}function f_(n=25,e=5){const[t,s]=m.useState(null),[i,r]=m.useState(n*60),[o,l]=m.useState(!1),[c,d]=m.useState("work"),[f,h]=m.useState(0),[u,p]=m.useState(0),g=m.useCallback(()=>{const x=Date.now();s(x+i*1e3),l(!0)},[i]),_=m.useCallback(()=>{if(t){const x=Math.max(0,Math.round((t-Date.now())/1e3));r(x)}s(null),l(!1)},[t]),w=m.useCallback(()=>{l(!1),s(null),d("work"),r(n*60),h(0),p(0)},[n]);m.useEffect(()=>{if(!o||!t)return;const A=setInterval(()=>{const V=Date.now(),P=Math.max(0,Math.round((t-V)/1e3));if(r(P),P<=0)if(c==="work"){h(X=>X+1),p(X=>X+n*60);const L=(f+1)%4===0?15:e;d("break");const ne=Date.now()+L*60*1e3;s(ne),r(L*60),T(),v("☕ Mola zamanı!","Biraz dinlen, kafanı topla.")}else{d("work");const L=Date.now()+n*60*1e3;s(L),r(n*60),T(),v("📚 Çalışma zamanı!","Yeniden odaklan!")}},250);return()=>clearInterval(A)},[o,t,c,f,n,e]);const T=()=>{try{const x=new Audio("/ding.mp3");x.volume=.5,x.play().catch(A=>console.warn("[Pomodoro] Audio play failed:",A))}catch(x){console.warn("[Pomodoro] Audio error:",x)}},v=(x,A)=>{"Notification"in window&&Notification.permission==="granted"&&new Notification(x,{body:A,icon:"/icon-192.png",badge:"/icon-192.png",tag:"pomodoro",requireInteraction:!1})},b=`${Math.floor(i/60).toString().padStart(2,"0")}:${(i%60).toString().padStart(2,"0")}`;return{timeLeft:i,isRunning:o,mode:c,completedPomodoros:f,totalWorkMinutes:Math.round(u/60),start:g,pause:_,reset:w,formattedTime:b}}const p_=()=>{"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission().then(n=>{console.log("[Pomodoro] Notification permission:",n)})};function m_({workMinutes:n=25,breakMinutes:e=5}){const t=f_(n,e),[s,i]=m.useState(!0);return m.useEffect(()=>{p_()},[]),s?a.jsxs(H.button,{onClick:()=>i(!1),drag:!0,dragMomentum:!1,dragElastic:0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},className:`fixed top-4 left-4 z-40 bg-black/90 backdrop-blur-md\r
                   border border-white/10 rounded-full px-4 py-2\r
                   text-blue-400 font-mono text-sm hover:bg-black/95 transition-colors\r
                   flex items-center gap-2 cursor-move shadow-xl`,whileHover:{scale:1.05},title:"Sürükle veya tıkla",children:["⏱ ",t.isRunning?t.formattedTime:"Pomodoro"]}):a.jsx(zt,{children:a.jsxs(H.div,{drag:!0,dragMomentum:!1,dragElastic:0,initial:{opacity:0,scale:.8,y:-20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.8},className:`fixed top-4 left-4 z-40 bg-black/95 backdrop-blur-xl\r
                   border border-white/10 rounded-2xl p-4 w-64\r
                   shadow-2xl shadow-blue-500/10 cursor-move`,children:[a.jsxs("div",{className:"flex items-center justify-between mb-3 cursor-move",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("div",{className:"text-gray-500",children:"⏱"}),a.jsx("div",{className:`text-xs uppercase tracking-wider font-semibold ${t.mode==="work"?"text-blue-400":"text-purple-400"}`,children:t.mode==="work"?"Çalışma":"Mola"})]}),a.jsx("button",{onClick:()=>i(!0),className:"text-gray-600 hover:text-gray-400 transition-colors p-1 hover:bg-white/5 rounded",title:"Küçült",children:a.jsx(ro,{size:14})})]}),a.jsx("div",{className:`text-center text-4xl font-mono font-bold mb-4 ${t.mode==="work"?"text-blue-400":"text-purple-400"}`,children:t.formattedTime}),a.jsx("div",{className:"flex justify-center gap-1 mb-4",children:[...Array(8)].map((r,o)=>a.jsx("div",{className:`w-1.5 h-1.5 rounded-full transition-colors ${o<t.completedPomodoros?"bg-blue-400":"bg-white/10"}`},o))}),a.jsxs("div",{className:"flex justify-center gap-2 mb-4",children:[t.isRunning?a.jsxs("button",{onClick:t.pause,className:`flex items-center gap-2 px-4 py-2 bg-yellow-500/20 \r
                         border border-yellow-500/50 rounded-lg text-yellow-400 text-xs font-medium\r
                         hover:bg-yellow-500/30 transition-colors`,children:[a.jsx(mc,{size:14}),"Duraklat"]}):a.jsxs("button",{onClick:t.start,className:`flex items-center gap-2 px-4 py-2 bg-blue-500/20 \r
                         border border-blue-500/50 rounded-lg text-blue-400 text-xs font-medium\r
                         hover:bg-blue-500/30 transition-colors`,children:[a.jsx(bc,{size:14}),"Başlat"]}),a.jsx("button",{onClick:t.reset,className:`flex items-center gap-2 px-3 py-2 bg-white/5 border \r
                       border-white/10 rounded-lg text-gray-500 text-xs \r
                       hover:text-gray-300 hover:bg-white/10 transition-colors`,title:"Sıfırla",children:a.jsx(Ic,{size:14})})]}),a.jsxs("div",{className:"pt-3 border-t border-white/10 space-y-1.5",children:[a.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[a.jsx("span",{children:"Tamamlanan"}),a.jsx("span",{className:"font-mono text-blue-400",children:t.completedPomodoros})]}),a.jsxs("div",{className:"flex justify-between text-xs text-gray-500",children:[a.jsx("span",{children:"Toplam süre"}),a.jsxs("span",{className:"font-mono text-blue-400",children:[t.totalWorkMinutes," dk"]})]})]})]})})}function g_({day:n,topicName:e}){const[t,s]=m.useState(Array.from({length:40},(u,p)=>({id:p+1,answer:null}))),[i,r]=m.useState(!1),[o,l]=m.useState(!0);m.useEffect(()=>{n&&e&&ho(n,e).then(u=>{u&&s(u)})},[n,e]),m.useEffect(()=>{if(n&&e){const u=setTimeout(()=>{ks(n,e,t)},500);return()=>clearTimeout(u)}},[t,n,e]);const c=["A","B","C","D","E"],d=(u,p)=>{s(g=>g.map(_=>_.id===u?{..._,answer:_.answer===p?null:p}:_))},f=()=>{if(confirm("Tüm işaretlemeleri temizlemek istediğinize emin misiniz?")){const u=t.map(p=>({...p,answer:null}));s(u),n&&e&&ks(n,e,u)}},h=t.filter(u=>u.answer!==null).length;return o?i?a.jsx($s,{initialX:window.innerWidth-200,initialY:window.innerHeight-100,zIndex:45,children:a.jsxs("button",{onClick:()=>r(!1),className:`bg-black/90 backdrop-blur-md border border-white/10 rounded-full px-4 py-2\r
                       text-green-400 font-mono text-sm hover:bg-black/95 transition-colors\r
                       flex items-center gap-2 shadow-xl`,children:["📝 ",e?`${e.substring(0,15)}...`:"Optik"," (",h,"/40)"]})}):a.jsx($s,{initialX:window.innerWidth-340,initialY:window.innerHeight-650,zIndex:45,children:a.jsxs("div",{className:`bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl w-80\r
                   shadow-2xl shadow-green-500/10 flex flex-col max-h-[80vh]`,children:[a.jsxs("div",{className:"drag-handle flex items-center justify-between p-3 border-b border-white/10 cursor-grab active:cursor-grabbing",children:[a.jsxs("div",{className:"flex items-center gap-2 pointer-events-none",children:[a.jsx(io,{size:16,className:"text-gray-600"}),a.jsxs("div",{className:"text-sm font-semibold text-green-400",children:["📝 ",e||"Optik Form"]})]}),a.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[a.jsxs("div",{className:"text-xs text-gray-500 font-mono",children:[h,"/40"]}),a.jsx("button",{onClick:()=>r(!0),className:"text-gray-600 hover:text-gray-400 transition-colors p-1 hover:bg-white/5 rounded",title:"Küçült",children:a.jsx(gn,{size:14})}),a.jsx("button",{onClick:()=>l(!1),className:"text-gray-600 hover:text-red-400 transition-colors p-1 hover:bg-white/5 rounded",title:"Kapat",children:a.jsx(gn,{size:14})})]})]}),a.jsx("div",{className:"flex-1 overflow-y-auto p-3 custom-scrollbar",children:a.jsx("div",{className:"space-y-2",children:t.map(u=>a.jsxs("div",{className:"flex items-center gap-2 bg-white/5 rounded-lg p-2 border border-white/5",children:[a.jsx("div",{className:"text-xs font-mono text-gray-500 w-6 text-center",children:u.id}),a.jsx("div",{className:"flex gap-1 flex-1",children:c.map(p=>a.jsx("button",{onClick:()=>d(u.id,p),className:`flex-1 py-1.5 rounded text-xs font-semibold transition-all ${u.answer===p?"bg-green-500 text-black shadow-lg":"bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300"}`,children:p},p))}),u.answer&&a.jsx("button",{onClick:()=>d(u.id,u.answer),className:"text-gray-600 hover:text-red-400 transition-colors",title:"Temizle",children:a.jsx(gn,{size:14})})]},u.id))})}),a.jsxs("div",{className:"p-3 border-t border-white/10 flex items-center justify-between",children:[a.jsxs("div",{className:"text-xs text-gray-500",children:[a.jsx("span",{className:"text-green-400 font-semibold",children:h})," soru işaretlendi"]}),a.jsxs("button",{onClick:f,className:`flex items-center gap-1 px-3 py-1.5 bg-red-500/10 border border-red-500/30\r
                             rounded-lg text-red-400 text-xs hover:bg-red-500/20 transition-colors`,children:[a.jsx(Ks,{size:12}),"Temizle"]})]})]})}):a.jsx("button",{onClick:()=>l(!0),className:`fixed top-20 right-4 z-45 bg-black/90 backdrop-blur-md\r
                   border border-white/10 rounded-full px-4 py-2\r
                   text-green-400 font-mono text-sm hover:bg-black/95 transition-colors\r
                   flex items-center gap-2 shadow-xl`,title:"Optik Panelini Aç",children:"📝 Optik"})}function __({videoId:n,curriculum:e,settings:t,onComplete:s,onBack:i}){const[r,o]=m.useState(null),[l,c]=m.useState(1),[d,f]=m.useState(0),[h,u]=m.useState(!0),[p,g]=m.useState(null),[_,w]=m.useState("split"),[T,v]=m.useState(!0),[b,x]=m.useState(45),[A,V]=m.useState(n),[P,L]=m.useState(""),[ne,X]=m.useState(!n),ae=e.topics[0],C=t.fileIds[ae],Ne=()=>{let U=P.trim();U.includes("v=")?U=U.split("v=")[1].split("&")[0]:U.includes("youtu.be/")&&(U=U.split("youtu.be/")[1].split("?")[0]),U&&(V(U),X(!1))};return m.useEffect(()=>{if(!C){g(`Bu konu için PDF File ID tanımlı değil: ${ae}`),u(!1);return}window.currentPdfFileId=C,console.log("[StudyView] Setting PDF fileId:",C),o(null),u(!1)},[C,ae]),h?a.jsx(eo,{message:"PDF hazırlanıyor..."}):p?a.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-[#050505] gap-6 p-8",children:[a.jsx("div",{className:"text-red-500 text-6xl mb-4",children:"⚠️"}),a.jsx("div",{className:"text-red-400 text-xl text-center max-w-md",children:p}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx("button",{onClick:()=>window.location.reload(),className:"px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 text-white",children:"Tekrar Dene"}),a.jsx("button",{onClick:s,className:"px-6 py-3 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30",children:"Atla ve Devam Et"})]})]}):a.jsxs("div",{className:"h-screen flex flex-col bg-[#050505] overflow-hidden",children:[a.jsxs("div",{className:"h-14 border-b border-white/10 flex items-center justify-between px-4 bg-black/50 backdrop-blur-sm z-50",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("button",{onClick:i,className:`flex items-center gap-2 px-3 py-2 bg-white/5 hover:bg-white/10 \r
                                 rounded-lg text-gray-400 hover:text-white transition-colors border border-white/10`,title:"Dashboard'a Dön",children:[a.jsx(Zl,{size:20}),a.jsx("span",{className:"text-sm font-medium",children:"Dashboard"})]}),a.jsxs("div",{children:[a.jsxs("span",{className:"text-blue-400 font-bold font-mono text-lg",children:["GÜN ",e.day]}),a.jsxs("span",{className:"text-gray-500 text-sm ml-3 hidden md:inline",children:["| ",e.title]})]})]}),a.jsxs("div",{className:"flex bg-white/5 rounded-lg p-1 gap-1",children:[a.jsx("button",{onClick:()=>w("video"),className:`px-3 py-2 rounded text-sm font-medium transition-colors ${_==="video"?"bg-blue-500/20 text-blue-400":"text-gray-500 hover:text-white hover:bg-white/10"}`,title:"Sadece Video",children:"🎥 Video"}),a.jsx("button",{onClick:()=>w("split"),className:`px-3 py-2 rounded text-sm font-medium transition-colors ${_==="split"?"bg-blue-500/20 text-blue-400":"text-gray-500 hover:text-white hover:bg-white/10"}`,title:"İkili Görünüm",children:"🌗 İkili"}),a.jsx("button",{onClick:()=>w("pdf"),className:`px-3 py-2 rounded text-sm font-medium transition-colors ${_==="pdf"?"bg-blue-500/20 text-blue-400":"text-gray-500 hover:text-white hover:bg-white/10"}`,title:"Sadece PDF",children:"📄 PDF"}),_==="split"&&a.jsxs("div",{className:"flex items-center gap-2 ml-2 pl-2 border-l border-white/10",children:[a.jsx("span",{className:"text-xs text-gray-500",children:"Bölme:"}),a.jsx("input",{type:"range",min:"20",max:"80",value:b,onChange:U=>x(Number(U.target.value)),className:`w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer\r
                                         [&::-webkit-slider-thumb]:appearance-none\r
                                         [&::-webkit-slider-thumb]:w-3\r
                                         [&::-webkit-slider-thumb]:h-3\r
                                         [&::-webkit-slider-thumb]:rounded-full\r
                                         [&::-webkit-slider-thumb]:bg-blue-400\r
                                         [&::-webkit-slider-thumb]:cursor-pointer`}),a.jsxs("span",{className:"text-xs text-blue-400 font-mono w-8",children:[b,"%"]})]})]}),a.jsx("button",{onClick:s,className:`px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg\r
                             text-blue-400 hover:bg-blue-500/30 transition-colors font-medium text-sm`,children:"✓ Tamamla"})]}),a.jsxs("div",{className:"flex-1 flex overflow-hidden relative",children:[a.jsx(zt,{mode:"popLayout",children:(_==="split"||_==="video")&&a.jsxs(H.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0,width:_==="video"?"100%":_==="split"?`${b}%`:"0%"},exit:{opacity:0,x:-50,width:"0%"},transition:{type:"spring",stiffness:300,damping:30},className:"h-full border-r border-white/10 relative bg-[#0a0a0a] flex flex-col",children:[a.jsxs("div",{className:"flex-1 overflow-y-auto custom-scrollbar",children:[a.jsx("div",{className:"w-full aspect-video bg-black sticky top-0 z-10 shadow-xl",children:A?a.jsx(h_,{videoId:A}):a.jsx("div",{className:"w-full h-full flex items-center justify-center bg-gray-900",children:a.jsxs("div",{className:"text-center p-6",children:[a.jsx(Pc,{size:48,className:"text-gray-600 mx-auto mb-4"}),a.jsx("p",{className:"text-gray-400 mb-4",children:"Video eklenmedi"}),a.jsxs("div",{className:"flex gap-2 justify-center",children:[a.jsx("button",{onClick:()=>X(!0),className:"px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-400 font-medium",children:"Video Ekle"}),a.jsxs("button",{onClick:()=>{const U=`${e.title} TYT konu anlatımı`;window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(U)}`,"_blank")},className:"px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 font-medium flex items-center gap-2",children:[a.jsx("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),"YouTube'da Ara"]})]})]})})}),ne&&a.jsxs("div",{className:"p-4 bg-white/5 border-b border-white/10",children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-2 block",children:"YouTube Video ID veya URL"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("input",{type:"text",value:P,onChange:U=>L(U.target.value),placeholder:"örn: dQw4w9WgXcQ",className:`flex-1 bg-white/5 border border-white/20 rounded-lg px-3 py-2\r
                                                         text-white text-sm focus:border-blue-500/50 focus:outline-none`,onKeyPress:U=>U.key==="Enter"&&Ne()}),a.jsx("button",{onClick:Ne,className:"px-4 py-2 bg-blue-500 text-black rounded-lg hover:bg-blue-400 text-sm font-medium",children:"Ekle"}),A&&a.jsx("button",{onClick:()=>X(!1),className:"px-3 py-2 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 text-sm",children:"İptal"})]})]}),a.jsxs("div",{className:"p-6 space-y-6",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:e.title}),a.jsxs("div",{className:"flex items-center gap-3 text-sm",children:[a.jsxs("span",{className:"px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20",children:["Hedef: ",e.targetQuestions," Soru"]}),A?a.jsx("button",{onClick:()=>X(!ne),className:"text-gray-500 hover:text-blue-400 text-xs",children:"Video Değiştir"}):a.jsxs("button",{onClick:()=>{const U=`${e.title} TYT konu anlatımı`;window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(U)}`,"_blank")},className:"text-red-500 hover:text-red-400 text-xs flex items-center gap-1",children:[a.jsx("svg",{className:"w-3 h-3",viewBox:"0 0 24 24",fill:"currentColor",children:a.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})}),"YouTube'da Ara"]})]})]}),a.jsx("div",{className:"p-4 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm leading-relaxed",children:"Bu ders için ayrılan süre boyunca odaklanın. PDF materyalini yandaki panelden takip edebilirsiniz."})]})]}),a.jsx("div",{className:"p-4 border-t border-white/10 bg-[#050505] backdrop-blur-lg z-20",children:a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"text-xs text-gray-500 text-center",children:["Hedef: ",e.targetQuestions," soru"]}),a.jsx("button",{onClick:s,className:`w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 \r
                                                 text-black font-bold text-lg tracking-wide rounded-xl \r
                                                 hover:from-blue-400 hover:to-purple-500 \r
                                                 transform active:scale-[0.98] transition-all shadow-lg shadow-green-900/20`,children:"GÜNÜ TAMAMLA ✓"})]})})]})}),a.jsx(zt,{mode:"popLayout",children:(_==="split"||_==="pdf")&&a.jsxs(H.div,{initial:{opacity:0,x:50},animate:{opacity:1,x:0,width:_==="pdf"?"100%":_==="split"?`${100-b}%`:"0%"},exit:{opacity:0,x:50,width:"0%"},transition:{type:"spring",stiffness:300,damping:30},className:"h-full relative bg-[#111]",children:[a.jsx(u_,{pdfData:r,currentPage:l,onPageChange:c,totalPages:d,setTotalPages:f,pdfId:ae}),_==="pdf"&&a.jsx("button",{onClick:()=>w("split"),className:"absolute top-4 left-4 z-50 p-2 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-blue-500 hover:text-black transition-colors",children:a.jsx(ro,{size:20})})]})})]}),a.jsx(m_,{workMinutes:t.pomodoroWork,breakMinutes:t.pomodoroBreak}),a.jsx(g_,{day:e.day,topicName:e.title})]})}const y_=(n,e)=>n-e/4,b_=(n,e,t,s)=>n===e+t+s;function v_({curriculum:n,dayNumber:e,onSubmit:t}){const[s,i]=m.useState(""),[r,o]=m.useState(""),[l,c]=m.useState(""),[d,f]=m.useState(""),[h,u]=m.useState(""),[p,g]=m.useState([]),[_,w]=m.useState(""),[T,v]=m.useState(null),b=parseInt(s)||0,x=parseInt(r)||0,A=parseInt(l)||0,V=parseInt(d)||0,P=y_(x,A),L=m.useMemo(()=>{const C=n.title.toLowerCase();return C.includes("matematik")?"matematik":C.includes("geometri")?"geometri":C.includes("türkçe")||C.includes("paragraf")?"turkce":C.includes("fizik")?"fizik":C.includes("kimya")?"kimya":C.includes("biyoloji")?"biyoloji":C.includes("tarih")?"tarih":C.includes("coğrafya")?"cografya":C.includes("felsefe")?"felsefe":C.includes("din")?"din":null},[n.title]),ne=L?Mc[L]:Lc,X=C=>{g(Ne=>Ne.includes(C)?Ne.filter(U=>U!==C):[...Ne,C])},ae=()=>{if(b===0){v("Çözülen soru sayısı 0 olamaz.");return}if(!b_(b,x,A,V)){v(`Sayılar uyuşmuyor: ${x} + ${A} + ${V} = ${x+A+V}, ama çözülen ${b}`);return}if(!h||parseInt(h)<=0){v("Çalışma süresi girilmeli.");return}v(null),t({solved:b,correct:x,wrong:A,blank:V,net:P,studyMinutes:parseInt(h),weakTags:p,note:_.trim()})};return a.jsx(H.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:"min-h-screen flex items-center justify-center p-4 bg-[#050505]",children:a.jsxs("div",{className:`w-full max-w-lg bg-white/5 backdrop-blur-md border border-white/10\r
                      rounded-2xl p-8 space-y-6`,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"text-blue-400 font-mono text-sm",children:["GÜN ",e," / 105"]}),a.jsx("h2",{className:"text-2xl font-bold text-white mt-1",children:n.title})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Çözülen"}),a.jsx("input",{type:"number",min:"0",value:s,onChange:C=>i(C.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                         text-white text-center text-lg font-mono\r
                         focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Doğru"}),a.jsx("input",{type:"number",min:"0",value:r,onChange:C=>o(C.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                         text-blue-400 text-center text-lg font-mono\r
                         focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Yanlış"}),a.jsx("input",{type:"number",min:"0",value:l,onChange:C=>c(C.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                         text-red-400 text-center text-lg font-mono\r
                         focus:border-red-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Boş"}),a.jsx("input",{type:"number",min:"0",value:d,onChange:C=>f(C.target.value),className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                         text-gray-400 text-center text-lg font-mono\r
                         focus:border-white/30 focus:outline-none`})]})]}),a.jsxs("div",{className:"bg-white/5 rounded-xl p-4 text-center border border-white/10",children:[a.jsx("div",{className:"text-gray-400 text-xs uppercase mb-1",children:"NET"}),a.jsx("div",{className:`text-4xl font-bold font-mono ${P>=0?"text-blue-400":"text-red-400"}`,children:b>0?P.toFixed(2):"—"}),a.jsx("div",{className:"text-gray-600 text-xs mt-1",children:"doğru - (yanlış ÷ 4)"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Çalışma Süresi (dakika)"}),a.jsx("input",{type:"number",min:"1",value:h,onChange:C=>u(C.target.value),placeholder:"örn: 120",className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                       text-white font-mono\r
                       focus:border-blue-500/50 focus:outline-none`})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"text-gray-400 text-xs uppercase mb-2 block",children:["Zorlandığın Alanlar ",L&&a.jsxs("span",{className:"text-blue-400",children:["(",n.title,")"]})]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:ne.map(C=>a.jsx("button",{onClick:()=>X(C.id),className:`px-3 py-1.5 rounded-lg text-sm transition-all ${p.includes(C.id)?"bg-red-500/20 border border-red-500/50 text-red-400":"bg-white/5 border border-white/10 text-gray-500 hover:text-gray-300"}`,children:C.label},C.id))})]}),a.jsxs("div",{children:[a.jsx("label",{className:"text-gray-400 text-xs uppercase mb-1 block",children:"Not (opsiyonel)"}),a.jsx("textarea",{value:_,onChange:C=>w(C.target.value),placeholder:"Bu konuda dikkat etmem gereken şeyler...",rows:3,className:`w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3\r
                       text-white text-sm resize-none\r
                       focus:border-blue-500/50 focus:outline-none`})]}),T&&a.jsxs(H.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:`bg-red-500/10 border border-red-500/30 rounded-lg p-3\r
                       text-red-400 text-sm`,children:["❌ ",T]}),a.jsx("button",{onClick:ae,className:`w-full py-4 bg-blue-500 text-black font-black text-lg\r
                     rounded-xl hover:bg-blue-400 transition-colors\r
                     active:scale-[0.98] shadow-lg shadow-blue-500/20`,children:"GÜNÜ TAMAMLA ✓"})]})})}function Jr(n,e){const[t,s]=m.useState(null),[i,r]=m.useState(()=>{try{const o=localStorage.getItem(n);return o?JSON.parse(o):e}catch(o){return console.error(`[useLocalStorage] Read error for key "${n}":`,o),s(o.message),e}});return m.useEffect(()=>{try{localStorage.setItem(n,JSON.stringify(i)),s(null)}catch(o){console.error(`[useLocalStorage] Write error for key "${n}":`,o),s(o.message),o.name==="QuotaExceededError"&&alert(`⚠️ Depolama alanı doldu!

Lütfen:
1. Dashboard'dan yedek alın
2. Tarayıcı verilerini temizleyin
3. Veya yedeği içe aktarın`)}},[n,i]),[i,r,t]}function x_(n,e){const[t,s]=m.useState(null),i=l=>{const c=l,{current:d,longest:f,lastActiveDate:h}=n;if(h===c)return;const u=new Date(new Date(c).getTime()-24*60*60*1e3).toISOString().split("T")[0];let p;d===0||h===u?p=d+1:p=1;const g=Math.max(f,p),_={current:p,longest:g,lastActiveDate:c};r(p),e&&e(_)},r=l=>{const d=[{streak:7,emoji:"🔥",msg:"7 günlük streak!"},{streak:10,emoji:"⚡",msg:"10 gün! Unstoppable!"},{streak:14,emoji:"💎",msg:"14 gün! Legend status!"},{streak:21,emoji:"👑",msg:"21 gün! Alışkanlık kazandın!"},{streak:30,emoji:"🚀",msg:"30 günlük streak! Beast mode!"},{streak:50,emoji:"🏆",msg:"50 GÜN! Efsanesin!"},{streak:100,emoji:"🌟",msg:"100 GÜN STREAK! IMMORTAL!"}].find(f=>f.streak===l);d&&(s(d),setTimeout(()=>{s(null)},5e3))};return{updateStreak:i,showMilestone:t,streakLevel:(()=>{const{current:l}=n;return l>=50?{level:"legendary",color:"gold",label:"LEGENDARY"}:l>=21?{level:"master",color:"purple",label:"MASTER"}:l>=14?{level:"expert",color:"blue",label:"EXPERT"}:l>=7?{level:"advanced",color:"green",label:"ADVANCED"}:l>=3?{level:"building",color:"yellow",label:"BUILDING"}:{level:"starting",color:"gray",label:"STARTING"}})(),closeMilestone:()=>s(null)}}const w_=()=>{var i;const n=Dt.PROGRESS,e=Dt.SETTINGS,t=Dt.OLD_V13;if(localStorage.getItem(n))return console.log("[Migration] V2 data already exists, skipping migration"),null;const s=localStorage.getItem(t);if(!s)return console.log("[Migration] No V13 data found, starting fresh"),null;try{const r=JSON.parse(s);console.log("[Migration] Migrating V13 → V2...");const o={dayIdx:r.dayIdx||0,startDate:null,days:{},mockExams:[],streak:{current:0,longest:0,lastActiveDate:null}};Array.isArray(r.history)&&(r.history.forEach((c,d)=>{o.days[d]={completed:!0,date:c.date||new Date().toISOString().split("T")[0],topics:c.topics||["MIGRATED"],stats:{solved:0,correct:0,wrong:0,blank:0,net:0,studyMinutes:0},weakTags:[],note:"V1'den migrate edildi",videoId:c.videoId||null}}),console.log(`[Migration] Migrated ${r.history.length} days from history`));const l={pomodoroWork:25,pomodoroBreak:5,fileIds:Gs};return localStorage.setItem(n,JSON.stringify(o)),localStorage.setItem(e,JSON.stringify(l)),localStorage.setItem("citadel_v13_backup",s),console.log("[Migration] ✅ V13 → V2 migration completed"),console.log('[Migration] Old data backed up as "citadel_v13_backup"'),alert(`✅ Verileriniz V2 formatına yükseltildi!

${((i=r.history)==null?void 0:i.length)||0} günlük ilerleme kaydedildi.
Eski verileriniz "citadel_v13_backup" olarak korundu.`),o}catch(r){return console.error("[Migration] Migration failed:",r),alert(`❌ Veri migration hatası!

Lütfen tarayıcı konsolunu kontrol edin.
Eski verileriniz korundu, tekrar deneyin.`),null}},k_=n=>!(!n||typeof n!="object"||!["dayIdx","days","mockExams","streak"].every(s=>s in n)||!n.streak||typeof n.streak!="object"||!("current"in n.streak)||!("longest"in n.streak)),I_=n=>{const e={...n};return typeof e.dayIdx!="number"&&(e.dayIdx=0),(!e.days||typeof e.days!="object")&&(e.days={}),Array.isArray(e.mockExams)||(e.mockExams=[]),!e.streak||typeof e.streak!="object"?e.streak={current:0,longest:0,lastActiveDate:null}:(typeof e.streak.current!="number"&&(e.streak.current=0),typeof e.streak.longest!="number"&&(e.streak.longest=0)),e},mn=[{day:1,topics:["TURKCE_345"],title:"Sözcükte Anlam",targetQuestions:60,isCritical:!1},{day:2,topics:["MAT_345"],title:"Temel Kavramlar",targetQuestions:100,isCritical:!0},{day:3,topics:["FIZIK_345"],title:"Fizik Bilimine Giriş",targetQuestions:40,isCritical:!1},{day:4,topics:["TURKCE_345"],title:"Cümlede Anlam",targetQuestions:60,isCritical:!1},{day:5,topics:["MAT_BS"],title:"Sayı Basamakları",targetQuestions:60,isCritical:!1},{day:6,topics:["KIMYA_345"],title:"Atom ve Periyodik Sistem",targetQuestions:70,isCritical:!0},{day:7,topics:[],title:"HAFTALIK ANALİZ + TELAFİ",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:8,topics:["BIYO_345"],title:"Canlıların Ortak Özellikleri",targetQuestions:40,isCritical:!1},{day:9,topics:["PARAGRAF_LIMIT"],title:"Paragrafta Anlatım Teknikleri",targetQuestions:80,isCritical:!0},{day:10,topics:["MAT_345"],title:"Bölme ve Bölünebilme",targetQuestions:60,isCritical:!1},{day:11,topics:["GEO_3D_VDD"],title:"Doğruda ve Üçgende Açılar",targetQuestions:80,isCritical:!0},{day:12,topics:["FIZIK_AYDIN"],title:"Madde ve Özellikleri",targetQuestions:50,isCritical:!0},{day:13,topics:["PARAGRAF_PARAF"],title:"Paragrafta Ana Düşünce",targetQuestions:100,isCritical:!0},{day:14,topics:[],title:"HAFTALIK ANALİZ + DENEME 1",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:15,topics:["MAT_345"],title:"EBOB-EKOK",targetQuestions:50,isCritical:!1},{day:16,topics:["KIMYA_PALME"],title:"Kimyasal Türler Arası Etkileşimler",targetQuestions:80,isCritical:!0},{day:17,topics:["BIYO_BIYOTIK"],title:"Hücre ve Organeller",targetQuestions:60,isCritical:!0},{day:18,topics:["TURKCE_345"],title:"Ses Bilgisi",targetQuestions:50,isCritical:!1},{day:19,topics:["MAT_BS"],title:"Rasyonel ve Ondalık Sayılar",targetQuestions:50,isCritical:!0},{day:20,topics:["GEO_BS"],title:"Dik Üçgen ve Özel Üçgenler",targetQuestions:100,isCritical:!0},{day:21,topics:[],title:"HAFTALIK ANALİZ + TEKRAR",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:22,topics:["MAT_345"],title:"Basit Eşitsizlikler",targetQuestions:70,isCritical:!0},{day:23,topics:["FIZIK_345"],title:"Hareket ve Kuvvet",targetQuestions:80,isCritical:!0},{day:24,topics:["TURKCE_345"],title:"Yazım Kuralları",targetQuestions:80,isCritical:!0},{day:25,topics:["MAT_BS"],title:"Mutlak Değer",targetQuestions:80,isCritical:!0},{day:26,topics:["KIMYA_345"],title:"Maddenin Halleri",targetQuestions:50,isCritical:!1},{day:27,topics:["GEO_3D_VDD"],title:"İkizkenar ve Eşkenar Üçgen",targetQuestions:80,isCritical:!1},{day:28,topics:[],title:"HAFTALIK ANALİZ + DENEME 2",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:29,topics:["MAT_PROB"],title:"Oran-Orantı",targetQuestions:80,isCritical:!0},{day:30,topics:["BIYO_345"],title:"Canlıların Sınıflandırılması",targetQuestions:60,isCritical:!0},{day:31,topics:["TURKCE_HIZ"],title:"Noktalama İşaretleri",targetQuestions:80,isCritical:!0},{day:32,topics:["MAT_345"],title:"Üslü Sayılar",targetQuestions:80,isCritical:!0},{day:33,topics:["FIZIK_AYDIN"],title:"İş, Güç, Enerji",targetQuestions:80,isCritical:!0},{day:34,topics:["GEO_BS"],title:"Açıortay ve Kenarortay",targetQuestions:60,isCritical:!1},{day:35,topics:[],title:"HAFTALIK ANALİZ + TELAFİ",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:36,topics:["MAT_BS"],title:"Köklü Sayılar",targetQuestions:80,isCritical:!0},{day:37,topics:["MAT_PROB"],title:"Sayı ve Kesir Problemleri",targetQuestions:120,isCritical:!0},{day:38,topics:["KIMYA_PALME"],title:"Doğa ve Kimya",targetQuestions:30,isCritical:!1},{day:39,topics:["TURKCE_345"],title:"Sözcük Türleri (İsim, Sıfat, Zamir)",targetQuestions:60,isCritical:!1},{day:40,topics:["BIYO_BIYOTIK"],title:"Hücre Bölünmeleri (Mitoz-Mayoz)",targetQuestions:70,isCritical:!0},{day:41,topics:["GEO_3D_VDD"],title:"Üçgende Benzerlik",targetQuestions:100,isCritical:!0},{day:42,topics:[],title:"HAFTALIK ANALİZ + DENEME 3",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:43,topics:["MAT_PROB"],title:"Yaş Problemleri",targetQuestions:60,isCritical:!1},{day:44,topics:["FIZIK_345"],title:"Isı ve Sıcaklık",targetQuestions:80,isCritical:!0},{day:45,topics:["MAT_345"],title:"Çarpanlara Ayırma",targetQuestions:80,isCritical:!1},{day:46,topics:["MAT_PROB"],title:"Hız Problemleri",targetQuestions:80,isCritical:!0},{day:47,topics:["TURKCE_HIZ"],title:"Sözcük Türleri (Zarf, Edat, Bağlaç)",targetQuestions:60,isCritical:!1},{day:48,topics:["GEO_BS"],title:"Üçgende Alan",targetQuestions:100,isCritical:!0},{day:49,topics:[],title:"HAFTALIK ANALİZ + TEKRAR",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:50,topics:["SOSYAL_345"],title:"Tarih Bilimine Giriş + İlk Çağ",targetQuestions:40,isCritical:!1},{day:51,topics:["MAT_PROB"],title:"Yüzde, Kar-Zarar Problemleri",targetQuestions:100,isCritical:!0},{day:52,topics:["KIMYA_345"],title:"Kimyanın Temel Kanunları",targetQuestions:50,isCritical:!0},{day:53,topics:["BIYO_345"],title:"Kalıtım",targetQuestions:80,isCritical:!0},{day:54,topics:["MAT_PROB"],title:"Karışım Problemleri",targetQuestions:50,isCritical:!1},{day:55,topics:["GEO_3D_VDD"],title:"Açı-Kenar Bağıntıları",targetQuestions:40,isCritical:!1},{day:56,topics:[],title:"HAFTALIK ANALİZ + DENEME 4",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:57,topics:["FIZIK_AYDIN"],title:"Elektrostatik",targetQuestions:70,isCritical:!0},{day:58,topics:["MAT_PROB"],title:"Grafik Problemleri",targetQuestions:60,isCritical:!0},{day:59,topics:["TURKCE_345"],title:"Fiiller ve Fiilimsiler",targetQuestions:60,isCritical:!0},{day:60,topics:["KIMYA_PALME"],title:"Mol Kavramı",targetQuestions:80,isCritical:!0},{day:61,topics:["COG_BS"],title:"Doğa ve İnsan + Coğrafi Konum",targetQuestions:40,isCritical:!1},{day:62,topics:["GEO_BS"],title:"Çokgenler",targetQuestions:60,isCritical:!1},{day:63,topics:[],title:"HAFTALIK ANALİZ + TELAFİ",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:64,topics:["MAT_345"],title:"Mantık",targetQuestions:40,isCritical:!1},{day:65,topics:["MAT_345"],title:"Kümeler",targetQuestions:60,isCritical:!0},{day:66,topics:["FIZIK_345"],title:"Elektrik Akımı ve Devreler",targetQuestions:90,isCritical:!0},{day:67,topics:["MAT_BS"],title:"Fonksiyonlar - 1",targetQuestions:80,isCritical:!0},{day:68,topics:["BIYO_BIYOTIK"],title:"Ekosistem Ekolojisi",targetQuestions:60,isCritical:!0},{day:69,topics:["GEO_3D_VDD"],title:"Dörtgenler ve Deltoid",targetQuestions:60,isCritical:!1},{day:70,topics:[],title:"HAFTALIK ANALİZ + DENEME 5",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:71,topics:["MAT_BS"],title:"Fonksiyonlar - 2",targetQuestions:80,isCritical:!0},{day:72,topics:["TURKCE_HIZ"],title:"Cümlenin Ögeleri",targetQuestions:60,isCritical:!1},{day:73,topics:["FIZIK_AYDIN"],title:"Optik - 1 (Aydınlanma, Gölge)",targetQuestions:60,isCritical:!0},{day:74,topics:["KIMYA_345"],title:"Kimyasal Hesaplamalar",targetQuestions:60,isCritical:!0},{day:75,topics:["SOSYAL_345"],title:"Türk İslam Tarihi",targetQuestions:40,isCritical:!1},{day:76,topics:["GEO_BS"],title:"Paralelkenar ve Eşkenar Dörtgen",targetQuestions:80,isCritical:!1},{day:77,topics:[],title:"HAFTALIK ANALİZ + TEKRAR",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:78,topics:["FIZIK_345"],title:"Optik - 2 (Aynalar, Mercekler)",targetQuestions:90,isCritical:!0},{day:79,topics:["MAT_BS"],title:"Polinomlar",targetQuestions:70,isCritical:!1},{day:80,topics:["MAT_BS"],title:"İkinci Dereceden Denklemler",targetQuestions:60,isCritical:!1},{day:81,topics:["TURKCE_345"],title:"Anlatım Bozuklukları",targetQuestions:40,isCritical:!1},{day:82,topics:["COG_BS"],title:"İklim Bilgisi",targetQuestions:60,isCritical:!0},{day:83,topics:["GEO_3D_VDD"],title:"Dikdörtgen ve Kare",targetQuestions:100,isCritical:!0},{day:84,topics:[],title:"HAFTALIK ANALİZ + DENEME 6",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:85,topics:["MAT_345"],title:"Permütasyon",targetQuestions:60,isCritical:!0},{day:86,topics:["MAT_345"],title:"Kombinasyon",targetQuestions:60,isCritical:!0},{day:87,topics:["KIMYA_PALME"],title:"Karışımlar",targetQuestions:60,isCritical:!0},{day:88,topics:["BIYO_345"],title:"Güncel Çevre Sorunları",targetQuestions:30,isCritical:!1},{day:89,topics:["FEL_LIMIT_EL"],title:"Felsefe Bilimi ve Varlık Felsefesi",targetQuestions:40,isCritical:!1},{day:90,topics:["GEO_BS"],title:"Yamuk",targetQuestions:60,isCritical:!1},{day:91,topics:[],title:"HAFTALIK ANALİZ + TELAFİ",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:92,topics:["MAT_345"],title:"Binom ve Olasılık",targetQuestions:80,isCritical:!0},{day:93,topics:["FIZIK_AYDIN"],title:"Dalgalar (Yay, Su, Ses, Deprem)",targetQuestions:80,isCritical:!0},{day:94,topics:["KIMYA_345"],title:"Asitler, Bazlar ve Tuzlar",targetQuestions:70,isCritical:!0},{day:95,topics:["DIN_LIMIT_EL"],title:"Din Kültürü Genel Tekrar",targetQuestions:50,isCritical:!1},{day:96,topics:["COG_BS"],title:"Nüfus ve Yerleşme",targetQuestions:50,isCritical:!0},{day:97,topics:["GEO_3D_VDD"],title:"Çemberde Açı ve Uzunluk",targetQuestions:80,isCritical:!0},{day:98,topics:[],title:"HAFTALIK ANALİZ + DENEME 7",targetQuestions:0,isCritical:!1,isAnalysis:!0},{day:99,topics:["MAT_BS"],title:"Veri (İstatistik)",targetQuestions:40,isCritical:!1},{day:100,topics:["KIMYA_PALME"],title:"Kimya Her Yerde",targetQuestions:30,isCritical:!1},{day:101,topics:["SOSYAL_345"],title:"Osmanlı Tarihi ve İnkılap Tarihi",targetQuestions:60,isCritical:!0},{day:102,topics:["COG_BS"],title:"Afetler ve Bölge Kavramı",targetQuestions:40,isCritical:!1},{day:103,topics:["GEO_BS"],title:"Dairede Alan",targetQuestions:60,isCritical:!0},{day:104,topics:["GEO_3D_VDD"],title:"Katı Cisimler (Prizma, Silindir, Küre)",targetQuestions:80,isCritical:!0},{day:105,topics:[],title:"TÜNEL SONU — GENEL TEKRAR VE MOTİVASYON",targetQuestions:0,isCritical:!0,isAnalysis:!0}];function C_(){const[n,e,t]=Jr(Dt.PROGRESS,{dayIdx:0,startDate:null,days:{},mockExams:[],streak:{current:0,longest:0,lastActiveDate:null}}),[s,i,r]=Jr(Dt.SETTINGS,{pomodoroWork:25,pomodoroBreak:5,fileIds:Gs,videoId:null}),[o,l]=m.useState(-1),[c,d]=m.useState(!0),f=x_(n.streak,b=>{e(x=>({...x,streak:b}))});m.useEffect(()=>{if(console.log("[App] Initial load..."),t||r){console.error("[App] Storage errors:",{progressError:t,settingsError:r}),d(!1);return}if(n&&!k_(n)){console.warn("[App] Invalid progress data, attempting repair...");const b=I_(n);e(b)}if(h(),!s.videoId){console.log("[App] No video ID found, starting with VideoSetup"),l(0),d(!1);return}if(!n.days||Object.keys(n.days).length===0){const b=w_();b&&e(b),l(-1)}else l(-1);d(!1)},[]);const h=async()=>{try{const x=indexedDB.open("citadel_store");x.onsuccess=A=>{const V=A.target.result;if(!V.objectStoreNames.contains("pdfs")){console.log("[Cache Check] PDF store not found, skipping check"),V.close();return}const ne=V.transaction(["pdfs"],"readonly").objectStore("pdfs").getAll();ne.onsuccess=()=>{const X=ne.result;let ae=!1;X.forEach(C=>{C&&C.byteLength<1e4&&(console.warn("[Cache Check] Broken cache detected:",C.byteLength,"bytes"),ae=!0)}),ae&&(console.log("[Cache] Clearing broken cache..."),u())}},x.onerror=()=>{console.error("[Cache Check] IndexedDB error")}}catch(b){console.error("[Cache Check] Error:",b)}},u=async()=>{try{const x=indexedDB.open("citadel_store");x.onsuccess=A=>{const P=A.target.result.transaction(["pdfs"],"readwrite");P.objectStore("pdfs").clear(),P.oncomplete=()=>{console.log("[Cache] Broken cache cleared successfully"),alert("🧹 Bozuk PDF cache temizlendi! Sayfa yenileniyor..."),window.location.reload()},P.onerror=()=>{console.error("[Cache] Clear failed")}}}catch(b){console.error("[Cache Clear] Error:",b)}},p=b=>{i(x=>({...x,videoId:b})),e(x=>({...x,startDate:new Date().toISOString().split("T")[0]})),l(-1)},g=()=>{l(1)},_=()=>{l(2)},w=b=>{const x=new Date().toISOString().split("T")[0],A=n.dayIdx,V=mn[A],P={...n.days,[A]:{completed:!0,date:x,topics:V.topics||[],stats:b,weakTags:b.weakTags||[],note:b.note||"",videoId:s.videoId}};f.updateStreak(x);const L=A+1;e(ne=>({...ne,dayIdx:L,days:P})),L>=mn.length&&alert("🎉 TÜNEL TAMAMLANDI! Sınava hazırsın!"),l(-1)},T=b=>{e(x=>({...x,mockExams:[...x.mockExams,b]}))};if(c)return a.jsx(eo,{message:"Yükleniyor..."});if(t)return a.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-[#050505] gap-6 p-8",children:[a.jsx("div",{className:"text-red-500 text-6xl mb-4",children:"💾"}),a.jsxs("div",{className:"text-red-400 text-xl text-center max-w-md",children:["LocalStorage hatası: ",t]}),a.jsx("div",{className:"text-gray-500 text-sm max-w-lg text-center",children:"Tarayıcı depolama alanı dolu olabilir. Lütfen tarayıcı verilerini temizleyin veya başka bir tarayıcı deneyin."})]});const v=n.dayIdx<mn.length?mn[n.dayIdx]:null;return a.jsxs(Hl,{children:[a.jsxs(zt,{mode:"wait",children:[o===0&&a.jsx($l,{onSubmit:p},"video-setup"),o===-1&&a.jsx(c_,{progress:n,settings:s,onStartStudy:g,onAddMockExam:T,onResumeStudy:()=>l(1)},"dashboard"),o===1&&v&&a.jsx(__,{videoId:s.videoId,curriculum:v,settings:s,onComplete:_,onBack:()=>l(-1)},"study-view"),o===2&&v&&a.jsx(v_,{curriculum:v,dayNumber:n.dayIdx+1,onSubmit:w},"day-complete"),!v&&o!==0&&o!==-1&&a.jsxs("div",{className:"flex flex-col items-center justify-center h-screen bg-[#050505] gap-6 p-8",children:[a.jsx("div",{className:"text-green-500 text-8xl mb-4",children:"🎉"}),a.jsx("div",{className:"text-green-400 text-3xl font-bold text-center",children:"TÜNEL TAMAMLANDI!"}),a.jsx("div",{className:"text-gray-400 text-lg text-center max-w-md",children:"105 günlük çalışma programını başarıyla tamamladınız!"}),a.jsx("button",{onClick:()=>l(-1),className:`px-8 py-4 bg-green-500 text-black font-bold rounded-xl\r
                                     hover:bg-green-400 transition-all`,children:"Dashboard'a Dön"})]})]}),f.showMilestone&&a.jsxs("div",{className:`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2\r
                        z-[100] bg-black/95 backdrop-blur-xl border-2 border-green-500\r
                        rounded-2xl p-8 shadow-2xl shadow-green-500/30\r
                        text-center animate-bounce`,children:[a.jsx("div",{className:"text-6xl mb-4",children:f.showMilestone.emoji}),a.jsx("div",{className:"text-green-400 text-2xl font-bold",children:f.showMilestone.msg})]})]})}console.log("[Main] Mounting React app...");xs.createRoot(document.getElementById("root")).render(a.jsx(Xr.StrictMode,{children:a.jsx(C_,{})}));
