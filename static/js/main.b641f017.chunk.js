(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1555:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(21),r=s.n(n),i=s(13),l=s(20),o=s(11),b=s(44),d=s(50),j=s(12),u=s(16);const O=Object(o.b)("tasks/set"),h=Object(o.b)("task/create"),k=Object(o.b)("tasks/fetch"),m=Object(o.b)("subtasks/fetch"),g=Object(o.b)("subtasks/set"),p=Object(o.b)("subTask/delete"),y=Object(o.b)("subTask/delete/success");var f=Object(o.c)({tasksList:[],allSubTasks:{}},(e=>{e.addCase(O,((e,{payload:t})=>({...e,tasksList:t}))),e.addCase(g,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}})))}));const x=Object(j.a)();var v=Object(u.b)({router:Object(l.b)(x),tasks:f}),w=s(8),C=s(19),T=s.n(C);class S{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var I={tasks:new S("tasks"),subTasks:new S("subTasks")},E=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const q=Array.from({length:10}).map((()=>T.a.lorem.word())),N=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var P=E((({title:e})=>{const t=I.tasks.get(),s=I.subTasks.get(),a={id:T.a.datatype.uuid(),createTime:Date.now(),title:e},c=Array.from({length:N(1,10)}).map((()=>({id:T.a.datatype.uuid(),taskId:a.id,title:T.a.lorem.sentence(),labels:[...new Set(Array.from({length:N(1,5)}).map((()=>q[N(0,9)])))]})));return I.tasks.set([...t,a]),I.subTasks.set([...s,...c]),a})),R=E((()=>I.tasks.get())),A=E((e=>{const t=I.tasks.get(),s=I.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return I.tasks.set([...t.filter((t=>t.id!==e))]),s}));const J=e=>e.tasks.tasksList,$=(e,t)=>e.tasks.allSubTasks[t]||[],z=window.alert;var F=(...e)=>{z(e.join(" "))};function*L(){const e=yield Object(w.b)(R);yield Object(w.c)(O(e))}function*D({payload:e}){yield Object(w.b)(P,e),yield Object(w.b)(L)}function*M({payload:e}){try{yield Object(w.b)(A,e),yield Object(w.b)(L)}catch(t){F("Delete task failed:",t)}}function*V({payload:e}){const{taskId:t,id:s}=e,a=yield Object(w.d)($,t);((e,t)=>!t.length||1===t.length&&!!t.find((({id:t})=>t===e)))(s,a)?yield Object(w.b)(M,{payload:t}):F(`TaskId: ${t}, subTask: ${s}, subTasks length: ${a.length}`)}function*B(){yield Object(w.f)(k,L),yield Object(w.e)(h,D),yield Object(w.e)(y,V)}var G=E((e=>{const t=I.subTasks.get(),s=t.find((t=>t.id===e));if(s)return I.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),H=E((e=>I.subTasks.get().filter((t=>t.taskId===e))));function*W({payload:e}){const t=yield Object(w.b)(H,e);yield Object(w.c)(g({taskId:e,subTasks:t}))}function*K({payload:e}){try{const{id:t,taskId:s}=e;yield Object(w.b)(G,t),yield Object(w.c)(y(e)),yield Object(w.b)(W,{payload:s})}catch(t){F("Delete subTask request failed:",t)}}function*Q(){yield Object(w.e)(m,W),yield Object(w.e)(p,K)}function*U(){yield Object(w.b)(L)}const X=Object(b.a)(x),Y=Object(d.a)({onError:(e,{sagaStack:t})=>{console.error("Something came up",e,t)}}),Z=[...Object(o.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),X,Y],_=Object(o.a)({reducer:v,middleware:Z,enhancers:[],preloadedState:{},devTools:{trace:!0}});Y.run((function*(){yield Object(w.f)("app/init",U),yield Object(w.a)([B(),Q()])}));var ee=_,te=s(7);const se=()=>"/";var ae=s(17);const ce=ae.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var ne=s(2);var re=({children:e})=>Object(ne.jsx)(ce,{children:e}),ie=s(6),le=s.n(ie);const oe=ae.b.button.withConfig({displayName:"Wrapper"})([""]);var be=e=>Object(ne.jsx)(oe,{...e});const de=({value:e,placeholder:t,onValueChange:s})=>{const[c,n]=Object(a.useState)(e),r=Object(a.useCallback)((e=>{n(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>n(e)),[e]),Object(ne.jsx)("input",{type:"text",placeholder:t,value:c,onChange:r})};de.defaultProps={value:"",placeholder:""};var je=de;var ue=()=>Object(ne.jsx)("h1",{children:"Processes"});const Oe=ae.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var he=({itemsSelector:e,ItemComponent:t})=>{const s=Object(i.e)(e);return Object(ne.jsx)(Oe,{children:s.map((e=>Object(ne.jsx)("li",{children:Object(ne.jsx)(t,{...e})},e.id)))})};const ke=({id:e,title:t,labels:s,taskId:c})=>{const n=Object(i.d)(),r=Object(a.useCallback)((()=>n(p({id:e,taskId:c}))),[n,e,c]);return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("span",{id:e,children:t}),Object(ne.jsx)(be,{onClick:r,children:"Remove"}),Object(ne.jsx)("ul",{children:s.map((e=>Object(ne.jsxs)("li",{children:["#",e]},e)))})]})};ke.defaultProps={labels:[]};le.a.string.isRequired,le.a.string.isRequired,le.a.string.isRequired,le.a.arrayOf(le.a.string);var me=ke;var ge=({taskId:e})=>{const t=Object(a.useCallback)((t=>$(t,e)),[e]);return Object(ne.jsx)(he,{itemsSelector:t,ItemComponent:me})};le.a.string.isRequired,le.a.string.isRequired;var pe=({title:e,id:t})=>{const s=Object(i.d)(),c=Object(a.useCallback)((()=>{s(m(t))}),[t,s]);return Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)("span",{children:e}),Object(ne.jsx)(be,{onClick:c,children:"View Subtasks"}),Object(ne.jsx)(ge,{taskId:t})]})};var ye=()=>Object(ne.jsx)(he,{itemsSelector:J,ItemComponent:pe});const fe=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),n=Object(a.useCallback)((()=>{c(h({title:t})),s("")}),[t,c]);return Object(ne.jsxs)("div",{children:[Object(ne.jsx)(je,{value:t,placeholder:"task title",onValueChange:s}),Object(ne.jsx)(be,{onClick:n,children:"Create"})]})};fe.defaultProps={title:""};var xe=fe;var ve=()=>Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ue,{}),Object(ne.jsxs)("main",{children:[Object(ne.jsx)(xe,{}),Object(ne.jsx)(ye,{})]})]});var we=()=>Object(ne.jsx)(re,{children:Object(ne.jsx)(ve,{})}),Ce=s(25);var Te=()=>Object(ne.jsxs)(re,{children:[Object(ne.jsx)("h1",{children:"Page not found"}),Object(ne.jsx)(Ce.a,{to:se(),children:"Go to home"})]});var Se=()=>Object(ne.jsxs)(te.c,{children:[Object(ne.jsx)(te.a,{path:se(),component:we}),Object(ne.jsx)(te.a,{component:Te})]}),Ie=ae.a`
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
`;var Ee=()=>(Object(a.useEffect)((()=>{ee.dispatch({type:"app/init"})}),[]),Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(Ie,{}),Object(ne.jsx)(i.a,{store:ee,children:Object(ne.jsx)(l.a,{history:x,children:Object(ne.jsx)(Se,{})})})]}));window.logError=alert,r.a.render(Object(ne.jsx)(c.a.StrictMode,{children:Object(ne.jsx)(Ee,{})}),document.getElementById("root"))}},[[1555,1,2]]]);
//# sourceMappingURL=main.b641f017.chunk.js.map