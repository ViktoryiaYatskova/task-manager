(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1556:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),r=s(21),n=s.n(r),i=s(11),o=s(20),l=s(8),b=s(45),d=s(51);const j=window.alert;var u=(...e)=>{j(e.join(" "))},O=s(14),h=s(17);const p=Object(l.b)("tasks/set"),y=Object(l.b)("task/create"),k=Object(l.b)("tasks/fetch"),f=Object(l.b)("tasks/set/found"),m=Object(l.b)("tasks/reset/found");var g=Object(l.c)({tasksList:[],foundTasksList:[]},(e=>{e.addCase(p,((e,{payload:t})=>({...e,tasksList:t}))).addCase(f,((e,{payload:t})=>({...e,foundTasksList:t}))).addCase(m,(e=>({...e,foundTasksList:[]})))}));const x=Object(l.b)("app/mode"),T=Object(l.b)("app/searchItems"),C=Object(l.b)("subTasks/fetch"),v=Object(l.b)("subTasks/set"),w=Object(l.b)("subTasks/set/found"),S=Object(l.b)("subTask/reset/found"),I=Object(l.b)("subTask/delete"),L=Object(l.b)("subTask/delete/success"),E=Object(l.b)("subTask/search:byLabel");var N=Object(l.c)({allSubTasks:{},foundSubTasksList:[],filters:[]},(e=>{e.addCase(v,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}}))).addCase(w,((e,{payload:t})=>({...e,foundSubTasksList:t}))).addCase(S,(e=>({...e,foundSubTasksList:[]}))).addCase(E,((e,{payload:t})=>{return{...e,filters:(s=t,[...new Set(s)])};var s})).addCase(x,((e,{payload:t})=>({...e,filters:t?[]:e.filters})))}));var B=Object(l.c)({isSearchMode:!1,searchQuery:""},(e=>{e.addCase(E,(e=>({...e,isSearchMode:!0,searchQuery:""}))).addCase(x,((e,{payload:t})=>({...e,isSearchMode:t,searchQuery:t?e.searchQuery:""}))).addCase(T,((e,{payload:t})=>({...e,searchQuery:t})))}));const M=Object(O.a)();var R=Object(h.b)({router:Object(o.b)(M),tasks:g,subTasks:N,app:B}),A=s(7),q=s(19),P=s.n(q);class _{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var D={tasks:new _("tasks"),subTasks:new _("subTasks")},F=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const Q=Array.from({length:10}).map((()=>P.a.lorem.word())),J=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var $=F((({title:e})=>{const t=D.tasks.get(),s=D.subTasks.get(),a={id:P.a.datatype.uuid(),createTime:Date.now(),title:e||P.a.lorem.sentence()},c=Array.from({length:J(1,10)}).map((()=>({id:P.a.datatype.uuid(),taskId:a.id,title:P.a.lorem.sentence(),labels:[...new Set(Array.from({length:J(1,5)}).map((()=>Q[J(0,9)])))]})));return D.tasks.set([...t,a]),D.subTasks.set([...s,...c]),a})),z=F((()=>D.tasks.get())),U=F((e=>{const t=D.tasks.get(),s=D.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return D.tasks.set([...t.filter((t=>t.id!==e))]),s})),V=F((e=>{const t=D.tasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})),W=s(23);const Y=e=>e.app.isSearchMode,G=e=>e.app.searchQuery,H=e=>e.subTasks.foundSubTasksList,K=e=>e.subTasks.filters,X=(e,t)=>e.subTasks.allSubTasks[t]||[],Z=e=>Object(W.a)(Y,(e=>Object(W.a)(H,(t=>t.filter((t=>t.taskId===e)))))(e),(t=>X(t,e)),((e,t,s)=>e?t:s));function*ee(){const e=yield Object(A.b)(z);yield Object(A.c)(p(e))}function*te({payload:e}){const t=yield Object(A.b)(V,e);yield Object(A.c)(f(t))}function*se({payload:e}){yield Object(A.b)($,e),yield Object(A.b)(ee)}function*ae({payload:e}){try{yield Object(A.b)(U,e),yield Object(A.b)(ee)}catch(t){u("Delete task failed:",t)}}function*ce({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&t.some((({id:t})=>t===e)))(s,yield Object(A.d)(X,t))&&(yield Object(A.b)(ae,{payload:t}))}function*re(){yield Object(A.f)(k.type,ee),yield Object(A.e)(y.type,se),yield Object(A.f)(T.type,te),yield Object(A.e)(L.type,ce)}var ne=F((e=>{const t=D.subTasks.get(),s=t.find((t=>t.id===e));if(s)return D.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),ie=F((e=>D.subTasks.get().filter((t=>t.taskId===e)))),oe=F((e=>{const t=D.subTasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})),le=F((e=>{try{const t=D.subTasks.get();return e.reduce(((e,t)=>{const s=t.toLowerCase();return e.filter((e=>e.labels.some((e=>e.toLowerCase()===s))))}),t)}catch(t){return u("findSubTasksByLabel",t),D.subTasks.get()}}));function*be({payload:e}){const t=yield Object(A.b)(ie,e);yield Object(A.c)(v({taskId:e,subTasks:t}))}function*de({payload:e}){const t=yield Object(A.b)(oe,e);yield Object(A.c)(w(t))}function*je(){try{const e=yield Object(A.d)(K),t=yield Object(A.b)(le,e);yield Object(A.c)(w(t))}catch(e){u("Delete subTask request failed:",e)}}function*ue({payload:e}){try{const{id:t,taskId:s}=e;yield Object(A.b)(ne,t),yield Object(A.c)(L(e)),yield Object(A.b)(be,{payload:s})}catch(t){u("Delete subTask request failed:",t)}}function*Oe(){yield Object(A.e)(C.type,be),yield Object(A.e)(I.type,ue),yield Object(A.f)(T.type,de),yield Object(A.f)(E.type,je)}function*he(){yield Object(A.b)(ee)}const pe=Object(b.a)(M),ye=Object(d.a)({onError:(e,{sagaStack:t})=>{u("Something came up",e,t)}}),ke=[...Object(l.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),pe,ye],fe=Object(l.a)({reducer:R,middleware:ke,enhancers:[],preloadedState:{},devTools:{trace:!0}});ye.run((function*(){yield Object(A.f)("app/init",he),yield Object(A.a)([re(),Oe()])}));var me=fe,ge=s(9);const xe=()=>"/";var Te=s(10);const Ce=Te.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var ve=s(2);var we=({children:e})=>Object(ve.jsx)(Ce,{children:e}),Se=s(5),Ie=s.n(Se);const Le=Te.b.button.withConfig({displayName:"Wrapper"})(["padding:4px 6px;height:fit-content;border-radius:1em;background-color:#96fbe4;border:none;&.yellow-button{background-color:#ffe082;}&.purple-button{background-color:#9c9cc7;color:#fff;}"]);var Ee=e=>Object(ve.jsx)(Le,{...e});const Ne={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},Be=Object(Te.b)(Ee).withConfig({displayName:"SortButton"})(["margin-right:5px;"]),Me={[Ne.CREATE_TIME]:"Sort by create-date",[Ne.TITLE]:"Sort by title"};var Re=({sortType:e,sortBy:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(ve.jsx)(Be,{className:"yellow-button",onClick:s,children:Me[e]})};const Ae=Te.b.input.attrs({type:"text"}).withConfig({displayName:"Input"})(["border-radius:1em;border:1px solid #656565;padding:2px 5px;"]),qe=({value:e,placeholder:t,onValueChange:s})=>{const[c,r]=Object(a.useState)(e),n=Object(a.useCallback)((e=>{r(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>r(e)),[e]),Object(ve.jsx)(Ae,{placeholder:t,value:c,onChange:n})};qe.defaultProps={value:"",placeholder:""};var Pe=qe;var _e=()=>Object(ve.jsx)("h1",{children:"Processes"});const De=Te.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var Fe=({items:e,ItemComponent:t})=>Object(ve.jsx)(De,{children:e.map((e=>Object(ve.jsx)("li",{children:Object(ve.jsx)(t,{...e})},e.id)))});const Qe=Te.b.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox"})(["margin-right:5px;"]),Je=({onCheck:e,isUncheckable:t})=>{const[s,c]=Object(a.useState)(!1),r=Object(a.useCallback)((()=>{s||e(),c((e=>!!t||!e))}),[e,s,t]);return Object(ve.jsx)(Qe,{onChange:r,checked:s})};Je.defaultProps={isUncheckable:!1};var $e=Je;var ze=({children:e})=>{const t=Object(i.e)(G),s=new RegExp(`(${t})`,"gi"),a=e.split(s);return t?Object(ve.jsx)(ve.Fragment,{children:a.map(((e,t)=>{const a=s.test(e);return Object(ve.jsx)(c.a.Fragment,{children:a?Object(ve.jsx)("mark",{children:e}):e},t)}))}):e};const Ue=Te.b.div.withConfig({displayName:"ButtonContainer"})(["margin:5px 0;"]);var Ve=({sortBy:e})=>Object(ve.jsx)(Ue,{children:Object.values(Ne).map((t=>Object(ve.jsx)(Re,{sortBy:e,sortType:t},t)))});const We=Object(Te.b)(Ee).withConfig({displayName:"LabelStyled"})(["padding:0 5px;"]),Ye=Te.b.ul.withConfig({displayName:"LabelsListContainer"})(["margin:3px 0 10px;& > li{display:inline-block;margin-right:5px;}"]),Ge=Te.b.li.withConfig({displayName:"LabelListItem"})(["display:inline-block;margin-right:5px;"]),He=({label:e})=>{const t=Object(i.d)(),s=Object(a.useCallback)((()=>t(E(e))),[t,E,e]);return Object(ve.jsxs)(We,{className:"label purple-button",onClick:s,children:["#",e]})},Ke=({labels:e})=>Object(ve.jsx)(Ye,{children:e.map((e=>Object(ve.jsx)(Ge,{children:Object(ve.jsx)(He,{label:e})},e)))});Ke.defaultProps={labels:[]};var Xe=Ke;const Ze=({id:e,title:t,labels:s,taskId:c})=>{const r=Object(i.d)(),n=Object(a.useCallback)((()=>r(I({id:e,taskId:c}))),[r,e,c]);return Object(ve.jsxs)("span",{children:[Object(ve.jsx)($e,{onCheck:n,isUncheckable:!0}),Object(ve.jsx)("span",{id:e,children:Object(ve.jsx)(ze,{children:t})}),Object(ve.jsx)(Xe,{labels:s})]})};Ze.defaultProps={labels:[]};Ie.a.string.isRequired,Ie.a.string.isRequired,Ie.a.string.isRequired,Ie.a.arrayOf(Ie.a.string);var et=Ze;var tt=({taskId:e})=>{const t=((e,t)=>{const s=Object(a.useCallback)(e(...t),[e,...t]);return Object(i.e)(s)})(Z,[e]);return Object(ve.jsx)(Fe,{items:t,ItemComponent:et})};const st=e=>{const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},at=(e,t,s)=>e.filter((e=>(e=>{return t=e,a="id",s.find((e=>e[a]===t[a]));var t,a})(e.id)||((e,t)=>e.find((e=>e.taskId===t)))(t,e.id))),ct=Te.b.div.withConfig({displayName:"TaskWrapper"})(["display:flex;justify-content:space-between;"]),rt=Te.b.span.withConfig({displayName:"TaskName"})(["flex-basis:40%;max-width:40%;overflow:hidden;text-overflow:ellipsis;"]);Ie.a.string.isRequired,Ie.a.string.isRequired,Ie.a.number.isRequired;var nt=({title:e,id:t,createTime:s})=>{const c=Object(i.d)(),r=Object(a.useCallback)((()=>c(C(t))),[t,c]);return Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsxs)(ct,{children:[Object(ve.jsx)(rt,{children:Object(ve.jsx)(ze,{children:e})}),Object(ve.jsx)("span",{children:st(s)}),Object(ve.jsx)(Ee,{onClick:r,children:"Expand"})]}),Object(ve.jsx)(tt,{taskId:t})]})};const it=Object(W.a)(Y,(e=>e.tasks.tasksList),(e=>e.tasks.foundTasksList),H,((e,t,s,a)=>e?at(t,a,s):t)),ot={[Ne.CREATE_TIME]:(e,t)=>e.createTime-t.createTime,[Ne.TITLE]:(e,t)=>e.title<t.title?-1:1};var lt=e=>{const[t,s]=Object(a.useState)(Ne.CREATE_TIME);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(ot[t]),s})(e,t),sortBy:s}};var bt=()=>{const e=Object(i.e)(it),{sortedItems:t,sortBy:s}=lt(e);return Object(ve.jsxs)("section",{children:[Object(ve.jsx)(Ve,{sortBy:s}),Object(ve.jsx)(Fe,{items:t,ItemComponent:nt})]})};var dt=()=>{const e=Object(i.e)(K);return Object(ve.jsx)("div",{children:Object(ve.jsx)(Xe,{labels:e})})};const jt=Te.b.section.withConfig({displayName:"TaskFormContainer"})(["& button{margin-left:5px;}"]),ut=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),r=Object(i.e)(Y),n=Object(a.useCallback)((()=>{c(y({title:t})),s("")}),[t,c]),o=Object(a.useCallback)((()=>{r?s(""):c(T(t)),c(x(!r))}),[c,r,t]),l=Object(a.useCallback)((e=>{s(e),r&&c(T(e))}),[r,c]);return Object(ve.jsxs)(jt,{children:[Object(ve.jsx)(Pe,{value:t,placeholder:"task title",onValueChange:l}),!r&&Object(ve.jsx)(Ee,{onClick:n,children:"Create"}),Object(ve.jsx)(Ee,{onClick:o,children:r?"Exit Search":"Start Search"}),Object(ve.jsx)(dt,{})]})};ut.defaultProps={title:""};var Ot=ut;var ht=()=>Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(_e,{}),Object(ve.jsxs)("main",{children:[Object(ve.jsx)(Ot,{}),Object(ve.jsx)(bt,{})]})]});var pt=()=>Object(ve.jsx)(we,{children:Object(ve.jsx)(ht,{})}),yt=s(26);var kt=()=>Object(ve.jsxs)(we,{children:[Object(ve.jsx)("h1",{children:"Page not found"}),Object(ve.jsx)(yt.a,{to:xe(),children:"Go to home"})]});var ft=()=>Object(ve.jsxs)(ge.c,{children:[Object(ve.jsx)(ge.a,{path:xe(),component:pt}),Object(ve.jsx)(ge.a,{component:kt})]}),mt=Te.a`
  * {
    padding: 0;
    margin: 0;
    outline: none;

    &,
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Helvetica', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.4;
  }

  a {
    text-decoration: none;

    &,
    &:hover {
      color: inherit;
    }
  }

  p {
    margin: 0;
  }

  ul,
  ol {
    margin: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  pre {
    margin: 0;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;var gt=()=>(Object(a.useEffect)((()=>{me.dispatch({type:"app/init"})}),[]),Object(ve.jsxs)(ve.Fragment,{children:[Object(ve.jsx)(mt,{}),Object(ve.jsx)(i.a,{store:me,children:Object(ve.jsx)(o.a,{history:M,children:Object(ve.jsx)(ft,{})})})]}));window.logError=alert,n.a.render(Object(ve.jsx)(c.a.StrictMode,{children:Object(ve.jsx)(gt,{})}),document.getElementById("root"))}},[[1556,1,2]]]);
//# sourceMappingURL=main.8852aa9f.chunk.js.map