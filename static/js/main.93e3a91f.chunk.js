(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1555:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),r=s(21),n=s.n(r),i=s(11),o=s(20),l=s(12),b=s(44),d=s(50),j=s(13),u=s(16);const O=Object(l.b)("tasks/set"),h=Object(l.b)("task/create"),k=Object(l.b)("tasks/fetch"),m=Object(l.b)("subtasks/fetch"),g=Object(l.b)("subtasks/set"),p=Object(l.b)("subTask/delete"),y=Object(l.b)("subTask/delete/success");var x=Object(l.c)({tasksList:[],allSubTasks:{}},(e=>{e.addCase(O,((e,{payload:t})=>({...e,tasksList:t}))),e.addCase(g,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}})))}));const f=Object(j.a)();var T=Object(u.b)({router:Object(o.b)(f),tasks:x}),v=s(8),C=s(19),w=s.n(C);class I{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var E={tasks:new I("tasks"),subTasks:new I("subTasks")},S=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const A=Array.from({length:10}).map((()=>w.a.lorem.word())),B=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var R=S((({title:e})=>{const t=E.tasks.get(),s=E.subTasks.get(),a={id:w.a.datatype.uuid(),createTime:Date.now(),title:e},c=Array.from({length:B(1,10)}).map((()=>({id:w.a.datatype.uuid(),taskId:a.id,title:w.a.lorem.sentence(),labels:[...new Set(Array.from({length:B(1,5)}).map((()=>A[B(0,9)])))]})));return E.tasks.set([...t,a]),E.subTasks.set([...s,...c]),a})),_=S((()=>E.tasks.get())),L=S((e=>{const t=E.tasks.get(),s=E.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return E.tasks.set([...t.filter((t=>t.id!==e))]),s}));const q=e=>e.tasks.tasksList,F=(e,t)=>e.tasks.allSubTasks[t]||[],M=window.alert;var N=(...e)=>{M(e.join(" "))};function*P(){const e=yield Object(v.b)(_);yield Object(v.c)(O(e))}function*D({payload:e}){yield Object(v.b)(R,e),yield Object(v.b)(P)}function*J({payload:e}){try{yield Object(v.b)(L,e),yield Object(v.b)(P)}catch(t){N("Delete task failed:",t)}}function*Y({payload:e}){const{taskId:t,id:s}=e,a=yield Object(v.d)(F,t);((e,t)=>!t.length||1===t.length&&!!t.find((({id:t})=>t===e)))(s,a)?yield Object(v.b)(J,{payload:t}):N(`TaskId: ${t}, subTask: ${s}, subTasks length: ${a.length}`)}function*$(){yield Object(v.f)(k,P),yield Object(v.e)(h,D),yield Object(v.e)(y,Y)}var z=S((e=>{const t=E.subTasks.get(),s=t.find((t=>t.id===e));if(s)return E.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),V=S((e=>E.subTasks.get().filter((t=>t.taskId===e))));function*G({payload:e}){const t=yield Object(v.b)(V,e);yield Object(v.c)(g({taskId:e,subTasks:t}))}function*H({payload:e}){try{const{id:t,taskId:s}=e;yield Object(v.b)(z,t),yield Object(v.c)(y(e)),yield Object(v.b)(G,{payload:s})}catch(t){N("Delete subTask request failed:",t)}}function*W(){yield Object(v.e)(m,G),yield Object(v.e)(p,H)}function*K(){yield Object(v.b)(P)}const Q=Object(b.a)(f),U=Object(d.a)({onError:(e,{sagaStack:t})=>{console.error("Something came up",e,t)}}),X=[...Object(l.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),Q,U],Z=Object(l.a)({reducer:T,middleware:X,enhancers:[],preloadedState:{},devTools:{trace:!0}});U.run((function*(){yield Object(v.f)("app/init",K),yield Object(v.a)([$(),W()])}));var ee=Z,te=s(7);const se=()=>"/";var ae=s(17);const ce=ae.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var re=s(2);var ne=({children:e})=>Object(re.jsx)(ce,{children:e}),ie=s(6),oe=s.n(ie);const le=ae.b.button.withConfig({displayName:"Wrapper"})([""]);var be=e=>Object(re.jsx)(le,{...e});const de=({value:e,placeholder:t,onValueChange:s})=>{const[c,r]=Object(a.useState)(e),n=Object(a.useCallback)((e=>{r(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>r(e)),[e]),Object(re.jsx)("input",{type:"text",placeholder:t,value:c,onChange:n})};de.defaultProps={value:"",placeholder:""};var je=de;var ue=()=>Object(re.jsx)("h1",{children:"Processes"});const Oe=ae.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var he=({items:e,ItemComponent:t})=>Object(re.jsx)(Oe,{children:e.map((e=>Object(re.jsx)("li",{children:Object(re.jsx)(t,{...e})},e.id)))});const ke=({id:e,title:t,labels:s,taskId:c})=>{const r=Object(i.d)(),n=Object(a.useCallback)((()=>r(p({id:e,taskId:c}))),[r,e,c]);return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)("span",{id:e,children:t}),Object(re.jsx)(be,{onClick:n,children:"Remove"}),Object(re.jsx)("ul",{children:s.map((e=>Object(re.jsxs)("li",{children:["#",e]},e)))})]})};ke.defaultProps={labels:[]};oe.a.string.isRequired,oe.a.string.isRequired,oe.a.string.isRequired,oe.a.arrayOf(oe.a.string);var me=ke;var ge=({taskId:e})=>{const t=Object(a.useCallback)((t=>F(t,e)),[e]),s=Object(i.e)(t);return Object(re.jsx)(he,{items:s,ItemComponent:me})};oe.a.string.isRequired,oe.a.string.isRequired;var pe=({title:e,id:t})=>{const s=Object(i.d)(),c=Object(a.useCallback)((()=>s(m(t))),[t]);return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)("span",{children:e}),Object(re.jsx)(be,{onClick:c,children:"View Subtasks"}),Object(re.jsx)(ge,{taskId:t})]})};const ye={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},xe={[ye.BY_CREATE_DATE]:"Sort by create-date",[ye.BY_TITLE]:"Sort by title"};var fe=({sortBy:e})=>Object(re.jsx)(re.Fragment,{children:Object.keys(ye).map((t=>Object(re.jsx)(be,{onClick:()=>e(t),children:xe[t]},t)))});const Te={[ye.CREATE_TIME]:(e,t)=>e.createTime<t.createTime,[ye.TITLE]:(e,t)=>e.title<t.title};var ve=e=>{const[t,s]=Object(a.useState)(ye.BY_CREATE_DATE);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(Te[t]),s})(e,t),sortBy:s}};var Ce=()=>{const e=Object(i.e)(q),{sortedItems:t,sortBy:s}=ve(e);return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(fe,{sortBy:s}),Object(re.jsx)(he,{items:t,ItemComponent:pe})]})};const we=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),r=Object(a.useCallback)((()=>{c(h({title:t})),s("")}),[t,c]);return Object(re.jsxs)("div",{children:[Object(re.jsx)(je,{value:t,placeholder:"task title",onValueChange:s}),Object(re.jsx)(be,{onClick:r,children:"Create"})]})};we.defaultProps={title:""};var Ie=we;var Ee=()=>Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(ue,{}),Object(re.jsxs)("main",{children:[Object(re.jsx)(Ie,{}),Object(re.jsx)(Ce,{})]})]});var Se=()=>Object(re.jsx)(ne,{children:Object(re.jsx)(Ee,{})}),Ae=s(25);var Be=()=>Object(re.jsxs)(ne,{children:[Object(re.jsx)("h1",{children:"Page not found"}),Object(re.jsx)(Ae.a,{to:se(),children:"Go to home"})]});var Re=()=>Object(re.jsxs)(te.c,{children:[Object(re.jsx)(te.a,{path:se(),component:Se}),Object(re.jsx)(te.a,{component:Be})]}),_e=ae.a`
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
`;var Le=()=>(Object(a.useEffect)((()=>{ee.dispatch({type:"app/init"})}),[]),Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(_e,{}),Object(re.jsx)(i.a,{store:ee,children:Object(re.jsx)(o.a,{history:f,children:Object(re.jsx)(Re,{})})})]}));window.logError=alert,n.a.render(Object(re.jsx)(c.a.StrictMode,{children:Object(re.jsx)(Le,{})}),document.getElementById("root"))}},[[1555,1,2]]]);
//# sourceMappingURL=main.93e3a91f.chunk.js.map