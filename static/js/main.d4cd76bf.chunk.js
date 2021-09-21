(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1555:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),r=s(21),n=s.n(r),i=s(9),l=s(20),o=s(11),b=s(44),d=s(50);const j=window.alert,u=(...e)=>{j(e.map((e=>Array.isArray(e)?e.map(JSON.stringify).join(", "):JSON.stringify(e))).join(", "))};var O=s(14),h=s(17);const p=(e,t)=>e.filter((e=>e.id!==t)),y=(...e)=>[...new Set(e)],k=Object(o.b)("tasks/set"),m=Object(o.b)("task/create"),f=Object(o.b)("tasks/fetch"),g=Object(o.b)("task/delete/success");var x=Object(o.c)({tasksList:[]},(e=>{e.addCase(k,((e,{payload:t})=>({...e,tasksList:t}))).addCase(g,((e,{payload:t})=>({...e,tasksList:p(e.tasksList,t)})))}));const T=Object(o.b)("subTasks/fetch"),C=Object(o.b)("subTasks/set"),v=Object(o.b)("subTasks/set:taskId"),w=Object(o.b)("subTask/delete"),S=Object(o.b)("subTask/delete/success");var I=Object(o.c)({allSubTasks:{}},(e=>{e.addCase(v,((e,{payload:{taskId:t,subTasks:s}})=>({...e,allSubTasks:{...e.allSubTasks,[t]:s}}))).addCase(C,((e,{payload:t})=>{return{...e,allSubTasks:(s=t,s.reduce(((e,t)=>(e[t.taskId]=e[t.taskId]||[],e[t.taskId].push(t),e)),{}))};var s})).addCase(S,((e,{payload:{id:t,taskId:s}})=>({...e,allSubTasks:{...e.allSubTasks,[s]:p(e.allSubTasks[s],t)}})))}));const E=Object(o.b)("app/mode"),L=Object(o.b)("app/searchItems"),N=Object(o.b)("app/searchItems:byLabel");var B=Object(o.c)({isSearchMode:!1,searchQuery:"",filters:[]},(e=>{e.addCase(N,((e,{payload:t})=>({...e,isSearchMode:!0,searchQuery:"",filters:y(...e.filters,t)}))).addCase(E,((e,{payload:t})=>({...e,isSearchMode:t,searchQuery:t?e.searchQuery:"",filters:t?e.filters:[]}))).addCase(L,((e,{payload:t})=>({...e,searchQuery:t})))}));const R=Object(O.a)();var A=Object(h.b)({router:Object(l.b)(R),tasks:x,subTasks:I,app:B}),M=s(7),P=s(19),q=s.n(P);class J{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var Q={tasks:new J("tasks"),subTasks:new J("subTasks")},_=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const F=Array.from({length:10}).map((()=>q.a.lorem.word())),D=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,$=(e,t)=>(...s)=>{const a=t(...s);return console.log("Request",e,"args",s,"result",a),a};var z=_((({title:e})=>{const t=Q.tasks.get(),s=Q.subTasks.get(),a={id:q.a.datatype.uuid(),createTime:Date.now(),title:e||q.a.lorem.sentence()},c=Array.from({length:D(1,10)}).map((()=>({id:q.a.datatype.uuid(),taskId:a.id,title:q.a.lorem.sentence(),labels:[...new Set(Array.from({length:D(1,5)}).map((()=>F[D(0,9)])))]})));return Q.tasks.set([...t,a]),Q.subTasks.set([...s,...c]),a})),U=_((()=>Q.tasks.get())),V=_($("deleteTask",(e=>{const t=Q.tasks.get(),s=t.some((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return Q.tasks.set([...t.filter((t=>t.id!==e))]),s}))),W=_($("findTasks",(e=>{const t=Q.tasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})));const Y=e=>t=>t.subTasks.allSubTasks[e]||[],G=e=>e.app.isSearchMode,H=e=>e.app.searchQuery,K=e=>e.app.filters;function*X(){const e=yield Object(M.b)(U);yield Object(M.c)(k(e))}function*Z(){const e=yield Object(M.d)(H);if(e){const t=yield Object(M.b)(W,e);yield Object(M.c)(k(t))}}function*ee({payload:e}){yield Object(M.b)(z,e),yield Object(M.b)(X)}function*te({payload:e}){try{yield Object(M.b)(V,e),yield Object(M.c)(g(e))}catch(t){u("Delete task failed:",t)}}function*se({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&t.some((({id:t})=>t===e)))(s,yield Object(M.d)(Y,t))&&(yield Object(M.b)(te,{payload:t}))}function*ae(){yield Object(M.f)(f.type,X),yield Object(M.e)(m.type,ee),yield Object(M.f)(L.type,Z),yield Object(M.e)(S.type,se)}var ce=_($("deleteSubTask",(e=>{const t=Q.subTasks.get(),s=t.find((t=>t.id===e));if(s)return Q.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)}))),re=_((e=>Q.subTasks.get().filter((t=>t.taskId===e)))),ne=_($("findSubTasks",(e=>{const t=Q.subTasks.get();if(!e)return[];const s=e.toLowerCase();return t.filter((e=>e.searchQuery.toLowerCase().includes(s)))}))),ie=_($("findSubTasksByLabel",(e=>{const t=Q.subTasks.get();return e.reduce(((e,t)=>{const s=t.toLowerCase();return e.filter((e=>e.labels.some((e=>e.toLowerCase()===s))))}),t)})));function*le({payload:e}){const t=yield Object(M.b)(re,e);yield Object(M.c)(v({taskId:e,subTasks:t}))}function*oe(){const e=yield Object(M.d)(H);if(e){const t=yield Object(M.b)(ne,e);yield Object(M.c)(C(t))}}function*be(){const e=yield Object(M.d)(K);if(e){const t=yield Object(M.b)(ie,e);yield Object(M.c)(C(t))}}function*de({payload:e}){try{const{id:t}=e;yield Object(M.b)(ce,t),yield Object(M.c)(S(e))}catch(t){u("Delete subTask request failed:",t)}}function*je(){yield Object(M.e)(T.type,le),yield Object(M.e)(w.type,de),yield Object(M.f)(L.type,oe),yield Object(M.f)(N.type,be)}const ue=Object(b.a)(R),Oe=Object(d.a)({onError:(e,{sagaStack:t})=>{u("Something came up",e,t)}}),he=[...Object(o.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),ue,Oe],pe=Object(o.a)({reducer:A,middleware:he,enhancers:[],preloadedState:{},devTools:{trace:!0}});Oe.run((function*(){yield Object(M.a)([ae(),je()])}));var ye=pe,ke=s(10);const me=()=>"/";var fe=s(8);const ge=fe.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var xe=s(2);var Te=({children:e})=>Object(xe.jsx)(ge,{children:e}),Ce=s(5),ve=s.n(Ce);const we=fe.b.button.withConfig({displayName:"Wrapper"})(["padding:4px 6px;height:fit-content;border-radius:1em;background-color:#96fbe4;border:none;&.yellow-button{background-color:#ffe082;}&.purple-button{background-color:#9c9cc7;color:#fff;}"]);var Se=e=>Object(xe.jsx)(we,{...e});const Ie={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},Ee=Object(fe.b)(Se).withConfig({displayName:"SortButton"})(["margin-right:5px;"]),Le={[Ie.CREATE_TIME]:"Sort by create-date",[Ie.TITLE]:"Sort by title"};var Ne=({sortType:e,sortBy:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(xe.jsx)(Ee,{className:"yellow-button",onClick:s,children:Le[e]})};const Be=fe.b.input.attrs({type:"text"}).withConfig({displayName:"Input"})(["border-radius:1em;border:1px solid #656565;padding:2px 5px;"]),Re=({value:e,placeholder:t,onValueChange:s})=>{const[c,r]=Object(a.useState)(e),n=Object(a.useCallback)((e=>{r(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>r(e)),[e]),Object(xe.jsx)(Be,{placeholder:t,value:c,onChange:n})};Re.defaultProps={value:"",placeholder:""};var Ae=Re;var Me=()=>Object(xe.jsx)("h1",{children:"Processes"});const Pe=fe.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}&.hidden{display:none;}"]),qe=({items:e,ItemComponent:t,className:s})=>Object(xe.jsx)(Pe,{className:s,children:e.map((e=>Object(xe.jsx)("li",{children:Object(xe.jsx)(t,{...e})},e.id)))});qe.defaultProps={className:""};var Je=qe;const Qe=fe.b.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox"})(["margin-right:5px;"]),_e=({onCheck:e,isUncheckable:t})=>{const[s,c]=Object(a.useState)(!1),r=Object(a.useCallback)((()=>{s||e(),c((e=>!!t||!e))}),[e,s,t]);return Object(xe.jsx)(Qe,{onChange:r,checked:s})};_e.defaultProps={isUncheckable:!1};var Fe=_e;var De=({children:e})=>{const t=Object(i.e)(H),s=new RegExp(`(${t})`,"gi"),a=e.split(s);return t?Object(xe.jsx)(xe.Fragment,{children:a.map(((e,t)=>{const a=s.test(e);return Object(xe.jsx)(c.a.Fragment,{children:a?Object(xe.jsx)("mark",{children:e}):e},t)}))}):e};const $e=Object(fe.b)(Se).withConfig({displayName:"LabelStyled"})(["padding:0 5px;"]);var ze=({label:e})=>{const t=Object(i.d)(),s=Object(a.useCallback)((()=>t(N(e))),[t,e]);return Object(xe.jsxs)($e,{className:"label purple-button",onClick:s,children:["#",e]})};var Ue=({onToggle:e,onTitle:t,offTitle:s})=>{const[c,r]=Object(a.useState)(!1),n=Object(a.useCallback)((()=>{r((e=>!e)),e(!c)}),[c,e]);return Object(xe.jsx)(Se,{onClick:n,children:c?t:s})};const Ve=({id:e,title:t,labels:s,taskId:c})=>{const r=Object(i.d)(),n=Object(a.useCallback)((()=>r(w({id:e,taskId:c}))),[r,e,c]);return Object(xe.jsxs)("span",{children:[Object(xe.jsx)(Fe,{onCheck:n,isUncheckable:!0}),Object(xe.jsx)("span",{id:e,children:Object(xe.jsx)(De,{children:t})}),Object(xe.jsx)(Ze,{labels:s})]})};Ve.defaultProps={labels:[]};ve.a.string.isRequired,ve.a.string.isRequired,ve.a.string.isRequired,ve.a.arrayOf(ve.a.string);var We=Ve;const Ye=fe.b.div.withConfig({displayName:"ButtonContainer"})(["margin:5px 0;"]);var Ge=({sortBy:e})=>Object(xe.jsx)(Ye,{children:Object.values(Ie).map((t=>Object(xe.jsx)(Ne,{sortBy:e,sortType:t},t)))});const He=fe.b.ul.withConfig({displayName:"LabelsListContainer"})(["margin:3px 0 10px;& > li{display:inline-block;margin-right:5px;}"]),Ke=fe.b.li.withConfig({displayName:"LabelListItem"})(["display:inline-block;margin-right:5px;"]),Xe=({labels:e})=>Object(xe.jsx)(He,{children:e.map((e=>Object(xe.jsx)(Ke,{children:Object(xe.jsx)(ze,{label:e})},e)))});Xe.defaultProps={labels:[]};var Ze=Xe;var et=({taskId:e,isExpanded:t})=>{const s=Object(i.e)(G),c=((e,t)=>{const s=Object(a.useCallback)(e(...t),[e,...t]);return Object(i.e)(s)})(Y(e)),r=(t||s)&&c.length;return Object(xe.jsx)(Je,{className:!r&&"hidden",items:c,ItemComponent:We})};const tt=e=>{const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},st=fe.b.div.withConfig({displayName:"TaskWrapper"})(["display:flex;justify-content:space-between;margin:5px 0;"]),at=fe.b.span.withConfig({displayName:"TaskName"})(["flex-basis:40%;max-width:40%;overflow:hidden;text-overflow:ellipsis;"]);ve.a.string.isRequired,ve.a.string.isRequired,ve.a.number.isRequired;var ct=({title:e,id:t,createTime:s})=>{const c=Object(i.e)(G),[r,n]=Object(a.useState)(!1),l=Object(i.d)(),o=Object(a.useCallback)((e=>{e&&l(T(t)),n(e)}),[t,l]);return Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsxs)(st,{children:[Object(xe.jsx)(at,{children:Object(xe.jsx)(De,{children:e})}),Object(xe.jsx)("span",{children:tt(s)}),!c&&Object(xe.jsx)(Ue,{onToggle:o,onTitle:"\u02c5",offTitle:"\u02c4"})]}),Object(xe.jsx)(et,{taskId:t,isExpanded:r})]})};const rt=e=>e.tasks.tasksList,nt={[Ie.CREATE_TIME]:(e,t)=>e.createTime-t.createTime,[Ie.TITLE]:(e,t)=>e.title<t.title?-1:1};var it=e=>{const[t,s]=Object(a.useState)(Ie.CREATE_TIME);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(nt[t]),s})(e,t),sortBy:s}};var lt=()=>{const e=Object(i.e)(rt),{sortedItems:t,sortBy:s}=it(e),c=Object(i.d)();return u(e),Object(a.useEffect)((()=>{c(f())}),[]),Object(xe.jsxs)("section",{children:[Object(xe.jsx)(Ge,{sortBy:s}),Object(xe.jsx)(Je,{items:t,ItemComponent:ct})]})};var ot=()=>{const e=Object(i.e)(K);return Object(xe.jsx)("div",{children:Object(xe.jsx)(Ze,{labels:e})})};const bt=fe.b.section.withConfig({displayName:"TaskFormContainer"})(["& button{margin-left:5px;}"]),dt=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),r=Object(i.e)(G),n=Object(a.useCallback)((()=>{c(m({title:t})),s("")}),[t,c]),l=Object(a.useCallback)((()=>{r?s(""):c(L(t)),c(E(!r))}),[c,r,t]),o=Object(a.useCallback)((e=>{s(e),r&&c(L(e))}),[r,c]);return Object(xe.jsxs)(bt,{children:[Object(xe.jsx)(Ae,{value:t,placeholder:"task title",onValueChange:o}),!r&&Object(xe.jsx)(Se,{onClick:n,children:"Create"}),Object(xe.jsx)(Se,{onClick:l,children:r?"Exit Search":"Start Search"}),Object(xe.jsx)(ot,{})]})};dt.defaultProps={title:""};var jt=dt;var ut=()=>Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(Me,{}),Object(xe.jsxs)("main",{children:[Object(xe.jsx)(jt,{}),Object(xe.jsx)(lt,{})]})]});var Ot=()=>Object(xe.jsx)(Te,{children:Object(xe.jsx)(ut,{})}),ht=s(25);var pt=()=>Object(xe.jsxs)(Te,{children:[Object(xe.jsx)("h1",{children:"Page not found"}),Object(xe.jsx)(ht.a,{to:me(),children:"Go to home"})]});var yt=()=>Object(xe.jsxs)(ke.c,{children:[Object(xe.jsx)(ke.a,{path:me(),component:Ot}),Object(xe.jsx)(ke.a,{component:pt})]}),kt=fe.a`
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
`;var mt=()=>Object(xe.jsxs)(xe.Fragment,{children:[Object(xe.jsx)(kt,{}),Object(xe.jsx)(i.a,{store:ye,children:Object(xe.jsx)(l.a,{history:R,children:Object(xe.jsx)(yt,{})})})]});window.logError=alert,n.a.render(Object(xe.jsx)(c.a.StrictMode,{children:Object(xe.jsx)(mt,{})}),document.getElementById("root"))}},[[1555,1,2]]]);
//# sourceMappingURL=main.d4cd76bf.chunk.js.map