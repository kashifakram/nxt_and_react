(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[468],{2829:(e,t,n)=>{Promise.resolve().then(n.bind(n,581))},581:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});var r=n(5155),l=n(9749),c=n(2115);let i=(0,c.createContext)(null),d=(0,c.createContext)(null);function s(e){let t,n;let s=(0,l.c)(5),{children:a}=e,[h,x]=(0,c.useReducer)(o,u);return s[0]!==a?(t=(0,r.jsx)(d.Provider,{value:x,children:a}),s[0]=a,s[1]=t):t=s[1],s[2]!==t||s[3]!==h?(n=(0,r.jsx)(i.Provider,{value:h,children:t}),s[2]=t,s[3]=h,s[4]=n):n=s[4],n}function a(){return(0,c.useContext)(d)}function o(e,t){switch(t.type){case"added":return[...e,{id:t.id,text:t.text,done:!1}];case"changed":return e.map(e=>e.id===t.task.id?t.task:e);case"deleted":return e.filter(e=>e.id!==t.id);default:throw Error("Unknown action: "+t.type)}}let u=[{id:0,text:"Philosopher’s Path",done:!0},{id:1,text:"Visit the temple",done:!1},{id:2,text:"Drink matcha",done:!1}];function h(e){let{onAddTask:t}=e,[n,l]=(0,c.useState)(""),i=a();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("input",{placeholder:"Add task",value:n,onChange:e=>l(e.target.value)}),(0,r.jsx)("button",{onClick:()=>{l(""),i({type:"added",id:x++,text:n}),t()},style:{margin:"10px"},children:"Add"})]})}let x=3;function _(){let e,t;let n=(0,l.c)(4),d=(0,c.useContext)(i);return n[0]!==d?(e=d.map(f),n[0]=d,n[1]=e):e=n[1],n[2]!==e?(t=(0,r.jsx)("ul",{children:e}),n[2]=e,n[3]=t):t=n[3],t}function f(e){return(0,r.jsx)("li",{children:(0,r.jsx)(k,{task:e})},e.id)}function k(e){let t,n,i,d,s,o;let u=(0,l.c)(26),{task:h}=e,[x,_]=(0,c.useState)(!1),f=a();if(x){let e,n,l,c;u[0]!==f||u[1]!==h?(e=e=>{f({type:"changed",task:{...h,text:e.target.value}})},u[0]=f,u[1]=h,u[2]=e):e=u[2],u[3]!==e||u[4]!==h.text?(n=(0,r.jsx)("input",{value:h.text,onChange:e}),u[3]=e,u[4]=h.text,u[5]=n):n=u[5],u[6]===Symbol.for("react.memo_cache_sentinel")?(l=(0,r.jsx)("button",{onClick:()=>_(!1),children:"Save"}),u[6]=l):l=u[6],u[7]!==n?(c=(0,r.jsxs)(r.Fragment,{children:[n,l]}),u[7]=n,u[8]=c):c=u[8],t=c}else{let e,n;u[9]===Symbol.for("react.memo_cache_sentinel")?(e=(0,r.jsx)("button",{onClick:()=>_(!0),children:"Edit"}),u[9]=e):e=u[9],u[10]!==h.text?(n=(0,r.jsxs)(r.Fragment,{children:[h.text,e]}),u[10]=h.text,u[11]=n):n=u[11],t=n}return u[12]===Symbol.for("react.memo_cache_sentinel")?(n={display:"block"},u[12]=n):n=u[12],u[13]!==f||u[14]!==h?(i=e=>{f({type:"changed",task:{...h,done:e.target.checked}})},u[13]=f,u[14]=h,u[15]=i):i=u[15],u[16]!==i||u[17]!==h.done?(d=(0,r.jsx)("input",{type:"checkbox",checked:h.done,onChange:i}),u[16]=i,u[17]=h.done,u[18]=d):d=u[18],u[19]!==f||u[20]!==h.id?(s=(0,r.jsx)("button",{onClick:()=>{f({type:"deleted",id:h.id})},children:"Delete"}),u[19]=f,u[20]=h.id,u[21]=s):s=u[21],u[22]!==d||u[23]!==s||u[24]!==t?(o=(0,r.jsxs)("label",{style:n,children:[d,t,s]}),u[22]=d,u[23]=s,u[24]=t,u[25]=o):o=u[25],o}function m(){let e;let t=(0,l.c)(1);return t[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,r.jsxs)(s,{children:[(0,r.jsx)("h1",{children:"Day off in Kyoto"}),(0,r.jsx)(h,{onAddTask:j}),(0,r.jsx)(_,{})]}),t[0]=e):e=t[0],e}function j(){return alert("new task has been created")}let p=()=>(0,r.jsx)(m,{})},4873:(e,t,n)=>{"use strict";var r=n(2115).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;t.c=function(e){return r.H.useMemoCache(e)}},9749:(e,t,n)=>{"use strict";e.exports=n(4873)}},e=>{var t=t=>e(e.s=t);e.O(0,[441,75,358],()=>t(2829)),_N_E=e.O()}]);