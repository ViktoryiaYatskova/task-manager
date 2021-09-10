(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1556:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(21),r=s.n(n),i=s(11),o=s(20),l=s(8),b=s(45),d=s(51);const j=window.alert;var u=(...e)=>{j(e.join(" "))},O=s(14),h=s(17);const p=Object(l.b)("tasks/set"),k=Object(l.b)("task/create"),y=Object(l.b)("tasks/fetch"),f=Object(l.b)("tasks/set/found"),m=Object(l.b)("tasks/reset/found");var x=Object(l.c)({tasksList:[],foundTasksList:[]},(e=>{e.addCase(p,((e,{payload:t})=>({...e,tasksList:t}))).addCase(f,((e,{payload:t})=>({...e,foundTasksList:t}))).addCase(m,(e=>({...e,foundTasksList:[]})))}));const g=Object(l.b)("subTasks/fetch"),C=Object(l.b)("subTasks/set"),T=Object(l.b)("subTasks/set/found"),v=Object(l.b)("subTask/reset/found"),w=Object(l.b)("subTask/delete"),S=Object(l.b)("subTask/delete/success");var I=Object(l.c)({allSubTasks:{},foundSubTasksList:[]},(e=>{e.addCase(C,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}}))).addCase(T,((e,{payload:t})=>({...e,foundSubTasksList:t}))).addCase(v,(e=>({...e,foundSubTasksList:[]})))}));const E=Object(l.b)("app/mode"),L=Object(l.b)("app/searchItems");var N=Object(l.c)({isSearchMode:!1,searchQuery:""},(e=>{e.addCase(E,((e,{payload:t})=>({...e,isSearchMode:t,searchQuery:t?e.searchQuery:""}))).addCase(L,((e,{payload:t})=>({...e,searchQuery:t})))}));const B=Object(O.a)();var M=Object(h.b)({router:Object(o.b)(B),tasks:x,subTasks:I,app:N}),R=s(7),A=s(19),P=s.n(A);class q{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var _={tasks:new q("tasks"),subTasks:new q("subTasks")},F=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const D=Array.from({length:10}).map((()=>P.a.lorem.word())),J=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var Q=F((({title:e})=>{const t=_.tasks.get(),s=_.subTasks.get(),a={id:P.a.datatype.uuid(),createTime:Date.now(),title:e||P.a.lorem.sentence()},c=Array.from({length:J(1,10)}).map((()=>({id:P.a.datatype.uuid(),taskId:a.id,title:P.a.lorem.sentence(),labels:[...new Set(Array.from({length:J(1,5)}).map((()=>D[J(0,9)])))]})));return _.tasks.set([...t,a]),_.subTasks.set([...s,...c]),a})),$=F((()=>_.tasks.get())),z=F((e=>{const t=_.tasks.get(),s=_.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return _.tasks.set([...t.filter((t=>t.id!==e))]),s})),U=F((e=>{const t=_.tasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})),V=s(23);const W=e=>e.app.isSearchMode,Y=e=>e.app.searchQuery,G=e=>e.subTasks.foundSubTasksList,H=(e,t)=>e.subTasks.allSubTasks[t]||[],K=e=>Object(V.a)(W,(e=>Object(V.a)(G,(t=>t.filter((t=>t.taskId===e)))))(e),(t=>H(t,e)),((e,t,s)=>e?t:s));function*X(){const e=yield Object(R.b)($);yield Object(R.c)(p(e))}function*Z({payload:e}){const t=yield Object(R.b)(U,e);yield Object(R.c)(f(t))}function*ee({payload:e}){yield Object(R.b)(Q,e),yield Object(R.b)(X)}function*te({payload:e}){try{yield Object(R.b)(z,e),yield Object(R.b)(X)}catch(t){u("Delete task failed:",t)}}function*se({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&!!t.find((({id:t})=>t===e)))(s,yield Object(R.d)(H,t))&&(yield Object(R.b)(te,{payload:t}))}function*ae(){yield Object(R.f)(y.type,X),yield Object(R.e)(k.type,ee),yield Object(R.f)(L.type,Z),yield Object(R.e)(S.type,se)}var ce=F((e=>{const t=_.subTasks.get(),s=t.find((t=>t.id===e));if(s)return _.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),ne=F((e=>_.subTasks.get().filter((t=>t.taskId===e)))),re=F((e=>{const t=_.subTasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))}));function*ie({payload:e}){const t=yield Object(R.b)(ne,e);yield Object(R.c)(C({taskId:e,subTasks:t}))}function*oe({payload:e}){const t=yield Object(R.b)(re,e);yield Object(R.c)(T(t))}function*le({payload:e}){try{const{id:t,taskId:s}=e;yield Object(R.b)(ce,t),yield Object(R.c)(S(e)),yield Object(R.b)(ie,{payload:s})}catch(t){u("Delete subTask request failed:",t)}}function*be(){yield Object(R.e)(g.type,ie),yield Object(R.e)(w.type,le),yield Object(R.f)(L.type,oe)}function*de(){yield Object(R.b)(X)}const je=Object(b.a)(B),ue=Object(d.a)({onError:(e,{sagaStack:t})=>{u("Something came up",e,t)}}),Oe=[...Object(l.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),je,ue],he=Object(l.a)({reducer:M,middleware:Oe,enhancers:[],preloadedState:{},devTools:{trace:!0}});ue.run((function*(){yield Object(R.f)("app/init",de),yield Object(R.a)([ae(),be()])}));var pe=he,ke=s(9);const ye=()=>"/";var fe=s(10);const me=fe.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var xe=s(2);var ge=({children:e})=>Object(xe.jsx)(me,{children:e}),Ce=s(5),Te=s.n(Ce);const ve=fe.b.button.withConfig({displayName:"Wrapper"})(["padding:4px 6px;height:fit-content;border-radius:1em;background-color:#96fbe4;border:none;&.yellow-button{background-color:#ffe082;}"]);var we=e=>Object(xe.jsx)(ve,{...e});const Se={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},Ie=Object(fe.b)(we).withConfig({displayName:"SortButton"})(["margin-right:5px;"]),Ee={[Se.CREATE_TIME]:"Sort by create-date",[Se.TITLE]:"Sort by title"};var Le=({sortType:e,sortBy:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(xe.jsx)(Ie,{className:"yellow-button",onClick:s,children:Ee[e]})};const Ne=fe.b.input.attrs({type:"text"}).withConfig({displayName:"Input"})(["border-radius:1em;border:1px solid #656565;padding:2px 5px;"]),Be=({value:e,placeholder:t,onValueChange:s})=>{const[c,n]=Object(a.useState)(e),r=Object(a.useCallback)((e=>{n(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>n(e)),[e]),Object(xe.jsx)(Ne,{placeholder:t,value:c,onChange:r})};Be.defaultProps={value:"",placeholder:""};var Me=Be;var Re=()=>Object(xe.jsx)("h1",{children:"Processes"});const Ae=fe.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var Pe=({items:e,ItemComponent:t})=>Object(xe.jsx)(Ae,{children:e.map((e=>Object(xe.jsx)("li",{children:Object(xe.jsx)(t,{...e})},e.id)))});const qe=fe.b.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox"})(["margin-right:5px;"]),_e=({onCheck:e,isUncheckable:t})=>{const[s,c]=Object(a.useState)(!1),n=Object(a.useCallback)((()=>{s||e(),c((e=>!!t||!e))}),[e,s,t]);return Object(xe.jsx)(qe,{onChange:n,checked:s})};_e.defaultProps={isUncheckable:!1};var Fe=_e;var De=({children:e})=>{const t=Object(i.e)(Y),s=new RegExp(`(${t})`,"gi"),a=e.split(s);return t?Object(xe.jsx)(xe.Fragment,{children:a.map(((e,t)=>{const a=s.test(e);return Object(xe.jsx)(c.a.Fragment,{children:a?Object(xe.jsx)("mark",{children:e}):e},t)}))}):e};const Je=fe.b.div.withConfig({displayName:"ButtonContainer"})(["margin:5px 0;"]);var Qe=({sortBy:e})=>Object(xe.jsx)(Je,{children:Object.values(Se).map((t=>Object(xe.jsx)(Le,{sortBy:e,sortType:t},t)))});const $e=fe.b.li.withConfig({displayName:"LabelStyled"})(["display:inline-block;margin-right:5px;padding:0 5px;border-radius:1em;background-color:#9c9cc7;color:#fff;"]),ze=fe.b.ul.withConfig({displayName:"LabelsListContainer"})(["margin:3px 0 10px;"]),Ue=({label:e,onClick:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(xe.jsxs)($e,{className:"label",onClick:s,children:["#",e]})};Ue.defaultProps={onClick:()=>null};const Ve=({labels:e,onLabelClick:t})=>Object(xe.jsx)(ze,{children:e.map((e=>Object(xe.jsx)(Ue,{label:e,onClick:t},e)))});Ve.defaultProps={labels:[],onLabelClick:()=>null};var We=Ve;const Ye=({id:e,title:t,labels:s,taskId:c})=>{const n=Object(i.d)(),r=Object(a.useCallback)((()=>n(w({id:e,taskId:c}))),[n,e,c]);return Object(xe.jsxs)("span",{children:[Object(xe.jsx)(Fe,{onCheck:r,isUncheckable:!0}),Object(xe.jsx)("span",{id:e,children:Object(xe.jsx)(De,{children:t})}),Object(xe.jsx)(We,{labels:s})]})};Ye.defaultProps={labels:[]};Te.a.string.isRequired,Te.a.string.isRequired,Te.a.string.isRequired,Te.a.arrayOf(Te.a.string);var Ge=Ye;var He=({taskId:e})=>{const t=((e,t)=>{const s=Object(a.useCallback)(e(...t),[e,...t]);return Object(i.e)(s)})(K,[e]);return Object(xe.jsx)(Pe,{items:t,ItemComponent:Ge})};const Ke=e=>{const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},Xe=(e,t,s)=>e.filter((e=>(e=>{return t=e,a="id",s.find((e=>e[a]===t[a]));var t,a})(e.id)||((e,t)=>e.find((e=>e.taskId===t)))(t,e.id))),Ze=fe.b.div.withConfig({displayName:"TaskWrapper"})(["display:flex;justify-content:space-between;"]),et=fe.b.span.withConfig({displayName:"TaskName"})(["flex-basis:40%;max-width:40%;overflow:hidden;text-overflow:ellipsis;"]);Te.a.string.isRequired,Te.a.string.isRequired,Te.a.number.isRequired;var tt=({title:e,id:t,createTime:s})=>{const c=Object(i.d)(),n=Object(a.useCallback)((()=>c(g(t))),[t,c]);return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsxs)(Ze,{children:[Object(xe.jsx)(et,{children:Object(xe.jsx)(De,{children:e})}),Object(xe.jsx)("span",{children:Ke(s)}),Object(xe.jsx)(we,{onClick:n,children:"Expand"})]}),Object(xe.jsx)(He,{taskId:t})]})};const st=Object(V.a)(W,(e=>e.tasks.tasksList),(e=>e.tasks.foundTasksList),G,((e,t,s,a)=>e?Xe(t,a,s):t)),at={[Se.CREATE_TIME]:(e,t)=>e.createTime-t.createTime,[Se.TITLE]:(e,t)=>e.title<t.title?-1:1};var ct=e=>{const[t,s]=Object(a.useState)(Se.CREATE_TIME);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(at[t]),s})(e,t),sortBy:s}};var nt=()=>{const e=Object(i.e)(st),{sortedItems:t,sortBy:s}=ct(e);return Object(xe.jsxs)("section",{children:[Object(xe.jsx)(Qe,{sortBy:s}),Object(xe.jsx)(Pe,{items:t,ItemComponent:tt})]})};var rt=()=>{const e=Object(a.useMemo)((()=>["ut","sed","sunt","commodi","dolores"]));return Object(xe.jsx)("div",{children:Object(xe.jsx)(We,{labels:e})})};const it=fe.b.section.withConfig({displayName:"TaskFormContainer"})(["& button{margin-left:5px;}"]),ot=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),n=Object(i.e)(W),r=Object(a.useCallback)((()=>{c(k({title:t})),s("")}),[t,c]),o=Object(a.useCallback)((()=>{n?s(""):c(L(t)),c(E(!n))}),[c,n,t]),l=Object(a.useCallback)((e=>{s(e),n&&c(L(e))}),[n,c]);return Object(xe.jsxs)(it,{children:[Object(xe.jsx)(Me,{value:t,placeholder:"task title",onValueChange:l}),!n&&Object(xe.jsx)(we,{onClick:r,children:"Create"}),Object(xe.jsx)(we,{onClick:o,children:n?"Exit Search":"Start Search"}),Object(xe.jsx)(rt,{})]})};ot.defaultProps={title:""};var lt=ot;var bt=()=>Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(Re,{}),Object(xe.jsxs)("main",{children:[Object(xe.jsx)(lt,{}),Object(xe.jsx)(nt,{})]})]});var dt=()=>Object(xe.jsx)(ge,{children:Object(xe.jsx)(bt,{})}),jt=s(26);var ut=()=>Object(xe.jsxs)(ge,{children:[Object(xe.jsx)("h1",{children:"Page not found"}),Object(xe.jsx)(jt.a,{to:ye(),children:"Go to home"})]});var Ot=()=>Object(xe.jsxs)(ke.c,{children:[Object(xe.jsx)(ke.a,{path:ye(),component:dt}),Object(xe.jsx)(ke.a,{component:ut})]}),ht=fe.a`
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
`;var pt=()=>(Object(a.useEffect)((()=>{pe.dispatch({type:"app/init"})}),[]),Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(ht,{}),Object(xe.jsx)(i.a,{store:pe,children:Object(xe.jsx)(o.a,{history:B,children:Object(xe.jsx)(Ot,{})})})]}));window.logError=alert,r.a.render(Object(xe.jsx)(c.a.StrictMode,{children:Object(xe.jsx)(pt,{})}),document.getElementById("root"))}},[[1556,1,2]]]);
//# sourceMappingURL=main.4b46b4d1.chunk.js.map