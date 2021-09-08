(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1555:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(21),r=s.n(n),i=s(11),l=s(20),o=s(12),b=s(44),d=s(50),j=s(13),u=s(16);const O=Object(o.b)("tasks/set"),h=Object(o.b)("task/create"),k=Object(o.b)("tasks/fetch"),m=Object(o.b)("subtasks/fetch"),p=Object(o.b)("subtasks/set"),g=Object(o.b)("subTask/delete"),y=Object(o.b)("subTask/delete/success");var x=Object(o.c)({tasksList:[],allSubTasks:{}},(e=>{e.addCase(O,((e,{payload:t})=>({...e,tasksList:t}))),e.addCase(p,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}})))}));const f=Object(j.a)();var v=Object(u.b)({router:Object(l.b)(f),tasks:x}),w=s(8),C=s(19),T=s.n(C);class S{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var I={tasks:new S("tasks"),subTasks:new S("subTasks")},q=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const E=Array.from({length:10}).map((()=>T.a.lorem.word())),N=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var P=q((({title:e})=>{const t=I.tasks.get(),s=I.subTasks.get(),a={id:T.a.datatype.uuid(),createTime:Date.now(),title:e},c=Array.from({length:N(1,10)}).map((()=>({id:T.a.datatype.uuid(),taskId:a.id,title:T.a.lorem.sentence(),labels:[...new Set(Array.from({length:N(1,5)}).map((()=>E[N(0,9)])))]})));return I.tasks.set([...t,a]),I.subTasks.set([...s,...c]),a})),R=q((()=>I.tasks.get())),A=q((e=>{const t=I.tasks.get(),s=I.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return I.tasks.set([...t.filter((t=>t.id!==e))]),s}));const J=e=>e.tasks.tasksList,z=(e,t)=>e.tasks.allSubTasks[t]||[];function*F(){const e=yield Object(w.b)(R);yield Object(w.c)(O(e))}function*L({payload:e}){yield Object(w.b)(P,e),yield Object(w.b)(F)}function*D({payload:e}){try{yield Object(w.b)(A,e),yield Object(w.b)(F)}catch(t){alert("Delete task failed:",t)}}function*M({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&t.includes(e))(s,yield Object(w.d)(z,t))&&(yield Object(w.b)(D,{payload:t}))}function*V(){yield Object(w.f)(k,F),yield Object(w.e)(h,L),yield Object(w.e)(y,M)}var B=q((e=>{const t=I.subTasks.get(),s=t.find((t=>t.id===e));if(s)return I.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),$=q((e=>I.subTasks.get().filter((t=>t.taskId===e))));function*G({payload:e}){const t=yield Object(w.b)($,e);yield Object(w.c)(p({taskId:e,subTasks:t}))}function*H({payload:e}){try{const{id:t,taskId:s}=e;yield Object(w.b)(B,t),yield Object(w.c)(y(e)),yield Object(w.b)(G,{payload:s})}catch(t){console.error("Delete subTask request failed:",t)}}function*W(){yield Object(w.e)(m,G),yield Object(w.e)(g,H)}function*K(){yield Object(w.b)(F)}const Q=Object(b.a)(f),U=Object(d.a)({onError:(e,{sagaStack:t})=>{console.error("Something came up",e,t)}}),X=[...Object(o.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),Q,U],Y=Object(o.a)({reducer:v,middleware:X,enhancers:[],preloadedState:{},devTools:{trace:!0}});U.run((function*(){yield Object(w.f)("app/init",K),yield Object(w.a)([V(),W()])}));var Z=Y,_=s(7);const ee=()=>"/";var te=s(17);const se=te.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var ae=s(2);var ce=({children:e})=>Object(ae.jsx)(se,{children:e}),ne=s(6),re=s.n(ne);const ie=te.b.button.withConfig({displayName:"Wrapper"})([""]);var le=e=>Object(ae.jsx)(ie,{...e});const oe=({value:e,placeholder:t,onValueChange:s})=>{const[c,n]=Object(a.useState)(e),r=Object(a.useCallback)((e=>{n(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>n(e)),[e]),Object(ae.jsx)("input",{type:"text",placeholder:t,value:c,onChange:r})};oe.defaultProps={value:"",placeholder:""};var be=oe;var de=()=>Object(ae.jsx)("h1",{children:"Processes"});const je=te.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var ue=({items:e,ItemComponent:t})=>Object(ae.jsx)(je,{children:e.map((e=>Object(ae.jsx)("li",{children:Object(ae.jsx)(t,{...e})},e.id)))});const Oe=({id:e,title:t,labels:s,taskId:c})=>{const n=Object(i.d)(),r=Object(a.useCallback)((()=>n(g({id:e,taskId:c}))),[n,e,c]);return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("span",{id:e,children:t}),Object(ae.jsx)(le,{onClick:r,children:"Remove"}),Object(ae.jsx)("ul",{children:s.map((e=>Object(ae.jsxs)("li",{children:["#",e]},e)))})]})};Oe.defaultProps={labels:[]};re.a.string.isRequired,re.a.string.isRequired,re.a.string.isRequired,re.a.arrayOf(re.a.string);var he=Oe;var ke=({taskId:e})=>{const t=Object(a.useCallback)((t=>z(t,e)),[e]),s=Object(i.e)(t);return Object(ae.jsx)(ue,{items:s,ItemComponent:he})};re.a.string.isRequired,re.a.string.isRequired;var me=({title:e,id:t})=>{const s=Object(i.d)(),c=Object(a.useCallback)((()=>{s(m(t))}),[t,s]);return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)("span",{children:e}),Object(ae.jsx)(le,{onClick:c,children:"View Subtasks"}),Object(ae.jsx)(ke,{taskId:t})]})};var pe=({tasks:e})=>Object(ae.jsx)(ue,{items:e,ItemComponent:me});const ge=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),n=Object(a.useCallback)((()=>{c(h({title:t})),s("")}),[t,c]);return Object(ae.jsxs)("div",{children:[Object(ae.jsx)(be,{value:t,placeholder:"task title",onValueChange:s}),Object(ae.jsx)(le,{onClick:n,children:"Create"})]})};ge.defaultProps={title:""};var ye=ge;var xe=()=>{const e=Object(i.e)(J);return Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(de,{}),Object(ae.jsxs)("main",{children:[Object(ae.jsx)(ye,{}),Object(ae.jsx)(pe,{tasks:e})]})]})};var fe=()=>Object(ae.jsx)(ce,{children:Object(ae.jsx)(xe,{})}),ve=s(25);var we=()=>Object(ae.jsxs)(ce,{children:[Object(ae.jsx)("h1",{children:"Page not found"}),Object(ae.jsx)(ve.a,{to:ee(),children:"Go to home"})]});var Ce=()=>Object(ae.jsxs)(_.c,{children:[Object(ae.jsx)(_.a,{path:ee(),component:fe}),Object(ae.jsx)(_.a,{component:we})]}),Te=te.a`
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
`;var Se=()=>(Object(a.useEffect)((()=>{Z.dispatch({type:"app/init"})}),[]),Object(ae.jsxs)(ae.Fragment,{children:[Object(ae.jsx)(Te,{}),Object(ae.jsx)(i.a,{store:Z,children:Object(ae.jsx)(l.a,{history:f,children:Object(ae.jsx)(Ce,{})})})]}));r.a.render(Object(ae.jsx)(c.a.StrictMode,{children:Object(ae.jsx)(Se,{})}),document.getElementById("root"))}},[[1555,1,2]]]);
//# sourceMappingURL=main.75ade6ee.chunk.js.map