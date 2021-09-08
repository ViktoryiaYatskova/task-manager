(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1555:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),i=s(21),r=s.n(i),n=s(11),l=s(20),o=s(12),d=s(44),b=s(50),j=s(13),u=s(16);const O=Object(o.b)("tasks/set"),h=Object(o.b)("task/create"),k=Object(o.b)("tasks/fetch"),p=Object(o.b)("subtasks/fetch"),y=Object(o.b)("subtasks/set"),f=Object(o.b)("subTask/delete"),g=Object(o.b)("subTask/delete/success");var x=Object(o.c)({tasksList:[],allSubTasks:{}},(e=>{e.addCase(O,((e,{payload:t})=>({...e,tasksList:t}))),e.addCase(y,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}})))}));const m=Object(j.a)();var v=Object(u.b)({router:Object(l.b)(m),tasks:x}),w=s(8),T=s(19),C=s.n(T);class S{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var I={tasks:new S("tasks"),subTasks:new S("subTasks")},q=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const N=Array.from({length:10}).map((()=>C.a.lorem.word())),P=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var R=q((({title:e})=>{const t=I.tasks.get(),s=I.subTasks.get(),a={id:C.a.datatype.uuid(),createTime:Date.now(),title:e},c=Array.from({length:P(1,10)}).map((()=>({id:C.a.datatype.uuid(),taskId:a.id,title:C.a.lorem.sentence(),labels:[...new Set(Array.from({length:P(1,5)}).map((()=>N[P(0,9)])))]})));return I.tasks.set([...t,a]),I.subTasks.set([...s,...c]),a})),A=q((()=>I.tasks.get())),E=q((e=>{const t=I.tasks.get(),s=I.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return I.tasks.set([...t.filter((t=>t.id!==e))]),s}));const J=e=>e.tasks.tasksList,z=(e,t)=>e.tasks.allSubTasks[t]||[];function*F(){const e=yield Object(w.b)(A);yield Object(w.c)(O(e))}function*L({payload:e}){yield Object(w.b)(R,e),yield Object(w.b)(F)}function*D({payload:e}){try{yield Object(w.b)(E,e),yield Object(w.b)(F)}catch(t){console.error("Delete task failed:",t)}}function*M({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&t.find((({id:t})=>t===e)))(s,yield Object(w.d)(z,t))&&(yield Object(w.b)(D,{payload:t}))}function*V(){yield Object(w.f)(k,F),yield Object(w.e)(h,L),yield Object(w.e)(g,M)}var B=q((e=>{const t=I.subTasks.get(),s=t.find((t=>t.id===e));if(s)return I.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),$=q((e=>I.subTasks.get().filter((t=>t.taskId===e))));function*G({payload:e}){const t=yield Object(w.b)($,e);yield Object(w.c)(y({taskId:e,subTasks:t}))}function*H({payload:e}){try{const{id:t,taskId:s}=e;yield Object(w.b)(B,t),yield Object(w.c)(g(e)),yield Object(w.b)(G,{payload:s})}catch(t){console.error("Delete subTask request failed:",t)}}function*W(){yield Object(w.e)(p,G),yield Object(w.e)(f,H)}function*K(){yield Object(w.b)(F)}const Q=Object(d.a)(m),U=Object(b.a)(),X=[...Object(o.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),Q,U],Y=Object(o.a)({reducer:v,middleware:X,enhancers:[],preloadedState:{},devTools:{trace:!0}});U.run((function*(){yield Object(w.f)("app/init",K),yield Object(w.a)([V(),W()])}));var Z=Y,_=s(7);const ee=()=>"/";var te=s(17);const se=te.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var ae=s(2);var ce=({children:e})=>Object(ae.jsx)(se,{children:e}),ie=s(6),re=s.n(ie);const ne=te.b.button.withConfig({displayName:"Wrapper"})([""]);var le=e=>Object(ae.jsx)(ne,{...e});const oe=({value:e,placeholder:t,onValueChange:s})=>{const[c,i]=Object(a.useState)(e),r=Object(a.useCallback)((e=>{i(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>i(e)),[e]),Object(ae.jsx)("input",{type:"text",placeholder:t,value:c,onChange:r})};oe.defaultProps={value:"",placeholder:""};var de=oe;var be=()=>Object(ae.jsx)("h1",{children:"Processes"});const je=({id:e,title:t,labels:s,taskId:c})=>{const i=Object(n.d)(),r=Object(a.useCallback)((()=>i(f({id:e,taskId:c}))),[i,e,c]);return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("span",{id:e,children:t}),Object(ae.jsx)(le,{onClick:r,children:"Remove"}),Object(ae.jsx)("ul",{children:s.map((e=>Object(ae.jsxs)("li",{children:["#",e]},e)))})]})};je.defaultProps={labels:[]};re.a.string.isRequired,re.a.string.isRequired,re.a.string.isRequired,re.a.arrayOf(re.a.string);var ue=je;var Oe=({taskId:e})=>{const t=Object(a.useCallback)((t=>z(t,e)),[e]),s=Object(n.e)(t);return Object(ae.jsx)("ul",{children:s.map((e=>Object(ae.jsx)("li",{children:Object(ae.jsx)(ue,{...e})},e.id)))})};re.a.string.isRequired,re.a.string.isRequired;var he=({title:e,id:t})=>{const s=Object(n.d)(),c=Object(a.useCallback)((()=>{s(p(t))}),[t,s]);return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("span",{children:e}),Object(ae.jsx)(le,{onClick:c,children:"View Subtasks"}),Object(ae.jsx)(Oe,{taskId:t})]})};const ke=te.b.ul.withConfig({displayName:"List"})([""]);var pe=({tasks:e})=>Object(ae.jsx)(ke,{children:e.map((e=>Object(ae.jsx)("li",{children:Object(ae.jsx)(he,{...e})},e.id)))});const ye=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(n.d)(),i=Object(a.useCallback)((()=>{c(h({title:t})),s("")}),[t,c]);return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(de,{value:t,placeholder:"task title",onValueChange:s}),Object(ae.jsx)(le,{onClick:i,children:"Create"})]})};ye.defaultProps={title:""};var fe=ye;var ge=()=>{const e=Object(n.e)(J);return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(be,{}),Object(ae.jsxs)("main",{children:[Object(ae.jsx)(fe,{}),Object(ae.jsx)(pe,{tasks:e})]})]})};var xe=()=>Object(ae.jsx)(ce,{children:Object(ae.jsx)(ge,{})}),me=s(25);var ve=()=>Object(ae.jsxs)(ce,{children:[Object(ae.jsx)("h1",{children:"Page not found"}),Object(ae.jsx)(me.a,{to:ee(),children:"Go to home"})]});var we=()=>Object(ae.jsxs)(_.c,{children:[Object(ae.jsx)(_.a,{path:ee(),component:xe}),Object(ae.jsx)(_.a,{component:ve})]}),Te=te.a`
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
`;var Ce=()=>(Object(a.useEffect)((()=>{Z.dispatch({type:"app/init"})}),[]),Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Te,{}),Object(ae.jsx)(n.a,{store:Z,children:Object(ae.jsx)(l.a,{history:m,children:Object(ae.jsx)(we,{})})})]}));r.a.render(Object(ae.jsx)(c.a.StrictMode,{children:Object(ae.jsx)(Ce,{})}),document.getElementById("root"))}},[[1555,1,2]]]);
//# sourceMappingURL=main.f9a6f204.chunk.js.map