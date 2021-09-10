(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1556:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),r=s(21),n=s.n(r),i=s(11),o=s(20),l=s(8),b=s(45),d=s(51);const j=window.alert;var u=(...e)=>{j(e.join(" "))},h=s(14),O=s(17);const p=Object(l.b)("tasks/set"),k=Object(l.b)("task/create"),y=Object(l.b)("tasks/fetch"),f=Object(l.b)("tasks/set/found"),m=Object(l.b)("tasks/reset/found");var g=Object(l.c)({tasksList:[],foundTasksList:[]},(e=>{e.addCase(p,((e,{payload:t})=>({...e,tasksList:t}))).addCase(f,((e,{payload:t})=>({...e,foundTasksList:t}))).addCase(m,(e=>({...e,foundTasksList:[]})))}));const x=Object(l.b)("subTasks/fetch"),T=Object(l.b)("subTasks/set"),C=Object(l.b)("subTasks/set/found"),v=Object(l.b)("subTask/reset/found"),w=Object(l.b)("subTask/delete"),S=Object(l.b)("subTask/delete/success");var I=Object(l.c)({allSubTasks:{},foundSubTasksList:[]},(e=>{e.addCase(T,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}}))).addCase(C,((e,{payload:t})=>({...e,foundSubTasksList:t}))).addCase(v,(e=>({...e,foundSubTasksList:[]})))}));const E=Object(l.b)("app/mode"),L=Object(l.b)("app/searchItems");var N=Object(l.c)({isSearchMode:!1,searchQuery:""},(e=>{e.addCase(E,((e,{payload:t})=>({...e,isSearchMode:t,searchQuery:t?e.searchQuery:""}))).addCase(L,((e,{payload:t})=>({...e,searchQuery:t})))}));const B=Object(h.a)();var R=Object(O.b)({router:Object(o.b)(B),tasks:g,subTasks:I,app:N}),M=s(7),A=s(19),P=s.n(A);class q{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var F={tasks:new q("tasks"),subTasks:new q("subTasks")},_=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const D=Array.from({length:10}).map((()=>P.a.lorem.word())),J=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var Q=_((({title:e})=>{const t=F.tasks.get(),s=F.subTasks.get(),a={id:P.a.datatype.uuid(),createTime:Date.now(),title:e||P.a.lorem.sentence()},c=Array.from({length:J(1,10)}).map((()=>({id:P.a.datatype.uuid(),taskId:a.id,title:P.a.lorem.sentence(),labels:[...new Set(Array.from({length:J(1,5)}).map((()=>D[J(0,9)])))]})));return F.tasks.set([...t,a]),F.subTasks.set([...s,...c]),a})),$=_((()=>F.tasks.get())),z=_((e=>{const t=F.tasks.get(),s=F.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return F.tasks.set([...t.filter((t=>t.id!==e))]),s})),U=_((e=>{const t=F.tasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})),V=s(23);const W=e=>e.app.isSearchMode,Y=e=>e.app.searchQuery,G=e=>e.subTasks.foundSubTasksList,H=(e,t)=>e.subTasks.allSubTasks[t]||[],K=e=>Object(V.a)(W,(e=>Object(V.a)(G,(t=>t.filter((t=>t.taskId===e)))))(e),(t=>H(t,e)),((e,t,s)=>e?t:s));function*X(){const e=yield Object(M.b)($);yield Object(M.c)(p(e))}function*Z({payload:e}){const t=yield Object(M.b)(U,e);yield Object(M.c)(f(t))}function*ee({payload:e}){yield Object(M.b)(Q,e),yield Object(M.b)(X)}function*te({payload:e}){try{yield Object(M.b)(z,e),yield Object(M.b)(X)}catch(t){u("Delete task failed:",t)}}function*se({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&!!t.find((({id:t})=>t===e)))(s,yield Object(M.d)(H,t))&&(yield Object(M.b)(te,{payload:t}))}function*ae(){yield Object(M.f)(y.type,X),yield Object(M.e)(k.type,ee),yield Object(M.f)(L.type,Z),yield Object(M.e)(S.type,se)}var ce=_((e=>{const t=F.subTasks.get(),s=t.find((t=>t.id===e));if(s)return F.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),re=_((e=>F.subTasks.get().filter((t=>t.taskId===e)))),ne=_((e=>{const t=F.subTasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))}));function*ie({payload:e}){const t=yield Object(M.b)(re,e);yield Object(M.c)(T({taskId:e,subTasks:t}))}function*oe({payload:e}){const t=yield Object(M.b)(ne,e);yield Object(M.c)(C(t))}function*le({payload:e}){try{const{id:t,taskId:s}=e;yield Object(M.b)(ce,t),yield Object(M.c)(S(e)),yield Object(M.b)(ie,{payload:s})}catch(t){u("Delete subTask request failed:",t)}}function*be(){yield Object(M.e)(x.type,ie),yield Object(M.e)(w.type,le),yield Object(M.f)(L.type,oe)}function*de(){yield Object(M.b)(X)}const je=Object(b.a)(B),ue=Object(d.a)({onError:(e,{sagaStack:t})=>{u("Something came up",e,t)}}),he=[...Object(l.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),je,ue],Oe=Object(l.a)({reducer:R,middleware:he,enhancers:[],preloadedState:{},devTools:{trace:!0}});ue.run((function*(){yield Object(M.f)("app/init",de),yield Object(M.a)([ae(),be()])}));var pe=Oe,ke=s(9);const ye=()=>"/";var fe=s(10);const me=fe.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var ge=s(2);var xe=({children:e})=>Object(ge.jsx)(me,{children:e}),Te=s(5),Ce=s.n(Te);const ve=fe.b.button.withConfig({displayName:"Wrapper"})(["padding:4px 6px;height:fit-content;border-radius:1em;background-color:#96fbe4;border:none;&.yellow-button{background-color:#ffe082;}"]);var we=e=>Object(ge.jsx)(ve,{...e});const Se={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},Ie=Object(fe.b)(we).withConfig({displayName:"SortButton"})(["margin-right:5px;"]),Ee={[Se.CREATE_TIME]:"Sort by create-date",[Se.TITLE]:"Sort by title"};var Le=({sortType:e,sortBy:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(ge.jsx)(Ie,{className:"yellow-button",onClick:s,children:Ee[e]})};const Ne=fe.b.input.attrs({type:"text"}).withConfig({displayName:"Input"})(["border-radius:1em;border:1px solid #656565;padding:2px 5px;"]),Be=({value:e,placeholder:t,onValueChange:s})=>{const[c,r]=Object(a.useState)(e),n=Object(a.useCallback)((e=>{r(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>r(e)),[e]),Object(ge.jsx)(Ne,{placeholder:t,value:c,onChange:n})};Be.defaultProps={value:"",placeholder:""};var Re=Be;var Me=()=>Object(ge.jsx)("h1",{children:"Processes"});const Ae=fe.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var Pe=({items:e,ItemComponent:t})=>Object(ge.jsx)(Ae,{children:e.map((e=>Object(ge.jsx)("li",{children:Object(ge.jsx)(t,{...e})},e.id)))});const qe=fe.b.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox"})(["margin-right:5px;"]),Fe=({onCheck:e,isUncheckable:t})=>{const[s,c]=Object(a.useState)(!1),r=Object(a.useCallback)((()=>{s||e(),c((e=>!!t||!e))}),[e,s,t]);return Object(ge.jsx)(qe,{onChange:r,checked:s})};Fe.defaultProps={isUncheckable:!1};var _e=Fe;var De=({children:e})=>{const t=Object(i.e)(Y),s=new RegExp(`(${t})`,"gi"),a=e.split(s);return t?Object(ge.jsx)(ge.Fragment,{children:a.map(((e,t)=>{const a=s.test(e);return Object(ge.jsx)(c.a.Fragment,{children:a?Object(ge.jsx)("mark",{children:e}):e},t)}))}):e};const Je=fe.b.div.withConfig({displayName:"ButtonContainer"})(["margin:5px 0;"]);var Qe=({sortBy:e})=>Object(ge.jsx)(Je,{children:Object.values(Se).map((t=>Object(ge.jsx)(Le,{sortBy:e,sortType:t},t)))});const $e=fe.b.li.withConfig({displayName:"Label"})(["display:inline-block;margin-right:5px;padding:0 5px;border-radius:1em;background-color:#9c9cc7;color:#fff;"]),ze=fe.b.ul.withConfig({displayName:"LabelsListContainer"})(["margin:3px 0 10px;"]),Ue=({labels:e})=>Object(ge.jsx)(ze,{children:e.map((e=>Object(ge.jsxs)($e,{className:"label",children:["#",e]},e)))});Ue.defaultProps={labels:[]};var Ve=Ue;const We=({id:e,title:t,labels:s,taskId:c})=>{const r=Object(i.d)(),n=Object(a.useCallback)((()=>r(w({id:e,taskId:c}))),[r,e,c]);return Object(ge.jsxs)("span",{children:[Object(ge.jsx)(_e,{onCheck:n,isUncheckable:!0}),Object(ge.jsx)("span",{id:e,children:Object(ge.jsx)(De,{children:t})}),Object(ge.jsx)(Ve,{labels:s})]})};We.defaultProps={labels:[]};Ce.a.string.isRequired,Ce.a.string.isRequired,Ce.a.string.isRequired,Ce.a.arrayOf(Ce.a.string);var Ye=We;var Ge=({taskId:e})=>{const t=((e,t)=>{const s=Object(a.useCallback)(e(...t),[e,...t]);return Object(i.e)(s)})(K,[e]);return Object(ge.jsx)(Pe,{items:t,ItemComponent:Ye})};const He=e=>{const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},Ke=(e,t,s)=>e.filter((e=>(e=>{return t=e,a="id",s.find((e=>e[a]===t[a]));var t,a})(e.id)||((e,t)=>e.find((e=>e.taskId===t)))(t,e.id))),Xe=fe.b.div.withConfig({displayName:"TaskWrapper"})(["display:flex;justify-content:space-between;"]),Ze=fe.b.span.withConfig({displayName:"TaskName"})(["flex-basis:40%;max-width:40%;overflow:hidden;text-overflow:ellipsis;"]);Ce.a.string.isRequired,Ce.a.string.isRequired,Ce.a.number.isRequired;var et=({title:e,id:t,createTime:s})=>{const c=Object(i.d)(),r=Object(a.useCallback)((()=>c(x(t))),[t,c]);return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsxs)(Xe,{children:[Object(ge.jsx)(Ze,{children:Object(ge.jsx)(De,{children:e})}),Object(ge.jsx)("span",{children:He(s)}),Object(ge.jsx)(we,{onClick:r,children:"Expand"})]}),Object(ge.jsx)(Ge,{taskId:t})]})};const tt=Object(V.a)(W,(e=>e.tasks.tasksList),(e=>e.tasks.foundTasksList),G,((e,t,s,a)=>e?Ke(t,a,s):t)),st={[Se.CREATE_TIME]:(e,t)=>e.createTime-t.createTime,[Se.TITLE]:(e,t)=>e.title<t.title?-1:1};var at=e=>{const[t,s]=Object(a.useState)(Se.CREATE_TIME);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(st[t]),s})(e,t),sortBy:s}};var ct=()=>{const e=Object(i.e)(tt),{sortedItems:t,sortBy:s}=at(e);return Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(Qe,{sortBy:s}),Object(ge.jsx)(Pe,{items:t,ItemComponent:et})]})};const rt=fe.b.div.withConfig({displayName:"TaskFormContainer"})(["& button{margin-left:5px;}"]),nt=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),r=Object(i.e)(W),n=Object(a.useCallback)((()=>{c(k({title:t})),s("")}),[t,c]),o=Object(a.useCallback)((()=>{r?s(""):c(L(t)),c(E(!r))}),[c,r,t]),l=Object(a.useCallback)((e=>{s(e),r&&c(L(e))}),[r,c]);return Object(ge.jsxs)(rt,{children:[Object(ge.jsx)(Re,{value:t,placeholder:"task title",onValueChange:l}),!r&&Object(ge.jsx)(we,{onClick:n,children:"Create"}),Object(ge.jsx)(we,{onClick:o,children:r?"Exit Search":"Start Search"})]})};nt.defaultProps={title:""};var it=nt;var ot=()=>Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(Me,{}),Object(ge.jsxs)("main",{children:[Object(ge.jsx)(it,{}),Object(ge.jsx)(ct,{})]})]});var lt=()=>Object(ge.jsx)(xe,{children:Object(ge.jsx)(ot,{})}),bt=s(26);var dt=()=>Object(ge.jsxs)(xe,{children:[Object(ge.jsx)("h1",{children:"Page not found"}),Object(ge.jsx)(bt.a,{to:ye(),children:"Go to home"})]});var jt=()=>Object(ge.jsxs)(ke.c,{children:[Object(ge.jsx)(ke.a,{path:ye(),component:lt}),Object(ge.jsx)(ke.a,{component:dt})]}),ut=fe.a`
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
`;var ht=()=>(Object(a.useEffect)((()=>{pe.dispatch({type:"app/init"})}),[]),Object(ge.jsxs)(ge.Fragment,{children:[Object(ge.jsx)(ut,{}),Object(ge.jsx)(i.a,{store:pe,children:Object(ge.jsx)(o.a,{history:B,children:Object(ge.jsx)(jt,{})})})]}));window.logError=alert,n.a.render(Object(ge.jsx)(c.a.StrictMode,{children:Object(ge.jsx)(ht,{})}),document.getElementById("root"))}},[[1556,1,2]]]);
//# sourceMappingURL=main.a710ec64.chunk.js.map