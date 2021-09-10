(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1556:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(21),r=s.n(n),i=s(11),o=s(20),l=s(8),b=s(45),d=s(51);const j=window.alert;var u=(...e)=>{j(e.join(" "))},O=s(14),h=s(17);const p=Object(l.b)("tasks/set"),k=Object(l.b)("task/create"),y=Object(l.b)("tasks/fetch"),f=Object(l.b)("tasks/set/found"),m=Object(l.b)("tasks/reset/found");var x=Object(l.c)({tasksList:[],foundTasksList:[]},(e=>{e.addCase(p,((e,{payload:t})=>({...e,tasksList:t}))).addCase(f,((e,{payload:t})=>({...e,foundTasksList:t}))).addCase(m,(e=>({...e,foundTasksList:[]})))}));const g=Object(l.b)("subTasks/fetch"),C=Object(l.b)("subTasks/set"),T=Object(l.b)("subTasks/set/found"),v=Object(l.b)("subTask/reset/found"),w=Object(l.b)("subTask/delete"),S=Object(l.b)("subTask/delete/success"),I=Object(l.b)("subTask/search:byLabel");var L=Object(l.c)({allSubTasks:{},foundSubTasksList:[]},(e=>{e.addCase(C,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}}))).addCase(T,((e,{payload:t})=>({...e,foundSubTasksList:t}))).addCase(v,(e=>({...e,foundSubTasksList:[]})))}));const E=Object(l.b)("app/mode"),N=Object(l.b)("app/searchItems");var B=Object(l.c)({isSearchMode:!1,searchQuery:""},(e=>{e.addCase(E,((e,{payload:t})=>({...e,isSearchMode:t,searchQuery:t?e.searchQuery:""}))).addCase(N,((e,{payload:t})=>({...e,searchQuery:t})))}));const M=Object(O.a)();var R=Object(h.b)({router:Object(o.b)(M),tasks:x,subTasks:L,app:B}),A=s(7),P=s(19),q=s.n(P);class _{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var F={tasks:new _("tasks"),subTasks:new _("subTasks")},D=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const J=Array.from({length:10}).map((()=>q.a.lorem.word())),Q=(e,t)=>Math.floor(Math.random()*(t-e+1))+e;var $=D((({title:e})=>{const t=F.tasks.get(),s=F.subTasks.get(),a={id:q.a.datatype.uuid(),createTime:Date.now(),title:e||q.a.lorem.sentence()},c=Array.from({length:Q(1,10)}).map((()=>({id:q.a.datatype.uuid(),taskId:a.id,title:q.a.lorem.sentence(),labels:[...new Set(Array.from({length:Q(1,5)}).map((()=>J[Q(0,9)])))]})));return F.tasks.set([...t,a]),F.subTasks.set([...s,...c]),a})),z=D((()=>F.tasks.get())),U=D((e=>{const t=F.tasks.get(),s=F.tasks.get().find((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return F.tasks.set([...t.filter((t=>t.id!==e))]),s})),V=D((e=>{const t=F.tasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})),W=s(23);const Y=e=>e.app.isSearchMode,G=e=>e.app.searchQuery,H=e=>e.subTasks.foundSubTasksList,K=(e,t)=>e.subTasks.allSubTasks[t]||[],X=e=>Object(W.a)(Y,(e=>Object(W.a)(H,(t=>t.filter((t=>t.taskId===e)))))(e),(t=>K(t,e)),((e,t,s)=>e?t:s));function*Z(){const e=yield Object(A.b)(z);yield Object(A.c)(p(e))}function*ee({payload:e}){const t=yield Object(A.b)(V,e);yield Object(A.c)(f(t))}function*te({payload:e}){yield Object(A.b)($,e),yield Object(A.b)(Z)}function*se({payload:e}){try{yield Object(A.b)(U,e),yield Object(A.b)(Z)}catch(t){u("Delete task failed:",t)}}function*ae({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&t.some((({id:t})=>t===e)))(s,yield Object(A.d)(K,t))&&(yield Object(A.b)(se,{payload:t}))}function*ce(){yield Object(A.f)(y.type,Z),yield Object(A.e)(k.type,te),yield Object(A.f)(N.type,ee),yield Object(A.e)(S.type,ae)}var ne=D((e=>{const t=F.subTasks.get(),s=t.find((t=>t.id===e));if(s)return F.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)})),re=D((e=>F.subTasks.get().filter((t=>t.taskId===e)))),ie=D((e=>{const t=F.subTasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))})),oe=D((e=>{const t=F.subTasks.get(),s=e.toLowerCase();return t.filter((e=>e.labels.some((e=>e.toLowerCase()===s))))}));function*le({payload:e}){const t=yield Object(A.b)(re,e);yield Object(A.c)(C({taskId:e,subTasks:t}))}function*be({payload:e}){const t=yield Object(A.b)(ie,e);yield Object(A.c)(T(t))}function*de({payload:e}){const t=yield Object(A.b)(oe,e);yield Object(A.c)(T(t))}function*je({payload:e}){try{const{id:t,taskId:s}=e;yield Object(A.b)(ne,t),yield Object(A.c)(S(e)),yield Object(A.b)(le,{payload:s})}catch(t){u("Delete subTask request failed:",t)}}function*ue(){yield Object(A.e)(g.type,le),yield Object(A.e)(w.type,je),yield Object(A.f)(N.type,be),yield Object(A.f)(I.type,de)}function*Oe(){yield Object(A.b)(Z)}const he=Object(b.a)(M),pe=Object(d.a)({onError:(e,{sagaStack:t})=>{u("Something came up",e,t)}}),ke=[...Object(l.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),he,pe],ye=Object(l.a)({reducer:R,middleware:ke,enhancers:[],preloadedState:{},devTools:{trace:!0}});pe.run((function*(){yield Object(A.f)("app/init",Oe),yield Object(A.a)([ce(),ue()])}));var fe=ye,me=s(9);const xe=()=>"/";var ge=s(10);const Ce=ge.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var Te=s(2);var ve=({children:e})=>Object(Te.jsx)(Ce,{children:e}),we=s(5),Se=s.n(we);const Ie=ge.b.button.withConfig({displayName:"Wrapper"})(["padding:4px 6px;height:fit-content;border-radius:1em;background-color:#96fbe4;border:none;&.yellow-button{background-color:#ffe082;}"]);var Le=e=>Object(Te.jsx)(Ie,{...e});const Ee={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},Ne=Object(ge.b)(Le).withConfig({displayName:"SortButton"})(["margin-right:5px;"]),Be={[Ee.CREATE_TIME]:"Sort by create-date",[Ee.TITLE]:"Sort by title"};var Me=({sortType:e,sortBy:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(Te.jsx)(Ne,{className:"yellow-button",onClick:s,children:Be[e]})};const Re=ge.b.input.attrs({type:"text"}).withConfig({displayName:"Input"})(["border-radius:1em;border:1px solid #656565;padding:2px 5px;"]),Ae=({value:e,placeholder:t,onValueChange:s})=>{const[c,n]=Object(a.useState)(e),r=Object(a.useCallback)((e=>{n(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>n(e)),[e]),Object(Te.jsx)(Re,{placeholder:t,value:c,onChange:r})};Ae.defaultProps={value:"",placeholder:""};var Pe=Ae;var qe=()=>Object(Te.jsx)("h1",{children:"Processes"});const _e=ge.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}"]);var Fe=({items:e,ItemComponent:t})=>Object(Te.jsx)(_e,{children:e.map((e=>Object(Te.jsx)("li",{children:Object(Te.jsx)(t,{...e})},e.id)))});const De=ge.b.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox"})(["margin-right:5px;"]),Je=({onCheck:e,isUncheckable:t})=>{const[s,c]=Object(a.useState)(!1),n=Object(a.useCallback)((()=>{s||e(),c((e=>!!t||!e))}),[e,s,t]);return Object(Te.jsx)(De,{onChange:n,checked:s})};Je.defaultProps={isUncheckable:!1};var Qe=Je;var $e=({children:e})=>{const t=Object(i.e)(G),s=new RegExp(`(${t})`,"gi"),a=e.split(s);return t?Object(Te.jsx)(Te.Fragment,{children:a.map(((e,t)=>{const a=s.test(e);return Object(Te.jsx)(c.a.Fragment,{children:a?Object(Te.jsx)("mark",{children:e}):e},t)}))}):e};const ze=ge.b.div.withConfig({displayName:"ButtonContainer"})(["margin:5px 0;"]);var Ue=({sortBy:e})=>Object(Te.jsx)(ze,{children:Object.values(Ee).map((t=>Object(Te.jsx)(Me,{sortBy:e,sortType:t},t)))});const Ve=ge.b.li.withConfig({displayName:"LabelStyled"})(["display:inline-block;margin-right:5px;padding:0 5px;border-radius:1em;background-color:#9c9cc7;color:#fff;"]),We=ge.b.ul.withConfig({displayName:"LabelsListContainer"})(["margin:3px 0 10px;"]),Ye=({label:e,onClick:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(Te.jsxs)(Ve,{className:"label",onClick:s,children:["#",e]})};Ye.defaultProps={onClick:()=>null};const Ge=({labels:e,onLabelClick:t})=>Object(Te.jsx)(We,{children:e.map((e=>Object(Te.jsx)(Ye,{label:e,onClick:t},e)))});Ge.defaultProps={labels:[],onLabelClick:()=>null};var He=Ge;const Ke=({id:e,title:t,labels:s,taskId:c})=>{const n=Object(i.d)(),r=Object(a.useCallback)((()=>n(w({id:e,taskId:c}))),[n,e,c]);return Object(Te.jsxs)("span",{children:[Object(Te.jsx)(Qe,{onCheck:r,isUncheckable:!0}),Object(Te.jsx)("span",{id:e,children:Object(Te.jsx)($e,{children:t})}),Object(Te.jsx)(He,{labels:s})]})};Ke.defaultProps={labels:[]};Se.a.string.isRequired,Se.a.string.isRequired,Se.a.string.isRequired,Se.a.arrayOf(Se.a.string);var Xe=Ke;var Ze=({taskId:e})=>{const t=((e,t)=>{const s=Object(a.useCallback)(e(...t),[e,...t]);return Object(i.e)(s)})(X,[e]);return Object(Te.jsx)(Fe,{items:t,ItemComponent:Xe})};const et=e=>{const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},tt=(e,t,s)=>e.filter((e=>(e=>{return t=e,a="id",s.find((e=>e[a]===t[a]));var t,a})(e.id)||((e,t)=>e.find((e=>e.taskId===t)))(t,e.id))),st=ge.b.div.withConfig({displayName:"TaskWrapper"})(["display:flex;justify-content:space-between;"]),at=ge.b.span.withConfig({displayName:"TaskName"})(["flex-basis:40%;max-width:40%;overflow:hidden;text-overflow:ellipsis;"]);Se.a.string.isRequired,Se.a.string.isRequired,Se.a.number.isRequired;var ct=({title:e,id:t,createTime:s})=>{const c=Object(i.d)(),n=Object(a.useCallback)((()=>c(g(t))),[t,c]);return Object(Te.jsxs)(Te.Fragment,{children:[Object(Te.jsxs)(st,{children:[Object(Te.jsx)(at,{children:Object(Te.jsx)($e,{children:e})}),Object(Te.jsx)("span",{children:et(s)}),Object(Te.jsx)(Le,{onClick:n,children:"Expand"})]}),Object(Te.jsx)(Ze,{taskId:t})]})};const nt=Object(W.a)(Y,(e=>e.tasks.tasksList),(e=>e.tasks.foundTasksList),H,((e,t,s,a)=>e?tt(t,a,s):t)),rt={[Ee.CREATE_TIME]:(e,t)=>e.createTime-t.createTime,[Ee.TITLE]:(e,t)=>e.title<t.title?-1:1};var it=e=>{const[t,s]=Object(a.useState)(Ee.CREATE_TIME);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(rt[t]),s})(e,t),sortBy:s}};var ot=()=>{const e=Object(i.e)(nt),{sortedItems:t,sortBy:s}=it(e);return Object(Te.jsxs)("section",{children:[Object(Te.jsx)(Ue,{sortBy:s}),Object(Te.jsx)(Fe,{items:t,ItemComponent:ct})]})};var lt=()=>{const e=Object(a.useMemo)((()=>["ut","sed","sunt","commodi","dolores"])),t=Object(i.d)(),s=Object(a.useCallback)((e=>t(I(e))),[t,I]);return Object(Te.jsx)("div",{children:Object(Te.jsx)(He,{labels:e,onLabelClick:s})})};const bt=ge.b.section.withConfig({displayName:"TaskFormContainer"})(["& button{margin-left:5px;}"]),dt=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),n=Object(i.e)(Y),r=Object(a.useCallback)((()=>{c(k({title:t})),s("")}),[t,c]),o=Object(a.useCallback)((()=>{n?s(""):c(N(t)),c(E(!n))}),[c,n,t]),l=Object(a.useCallback)((e=>{s(e),n&&c(N(e))}),[n,c]);return Object(Te.jsxs)(bt,{children:[Object(Te.jsx)(Pe,{value:t,placeholder:"task title",onValueChange:l}),!n&&Object(Te.jsx)(Le,{onClick:r,children:"Create"}),Object(Te.jsx)(Le,{onClick:o,children:n?"Exit Search":"Start Search"}),Object(Te.jsx)(lt,{})]})};dt.defaultProps={title:""};var jt=dt;var ut=()=>Object(Te.jsxs)(Te.Fragment,{children:[Object(Te.jsx)(qe,{}),Object(Te.jsxs)("main",{children:[Object(Te.jsx)(jt,{}),Object(Te.jsx)(ot,{})]})]});var Ot=()=>Object(Te.jsx)(ve,{children:Object(Te.jsx)(ut,{})}),ht=s(26);var pt=()=>Object(Te.jsxs)(ve,{children:[Object(Te.jsx)("h1",{children:"Page not found"}),Object(Te.jsx)(ht.a,{to:xe(),children:"Go to home"})]});var kt=()=>Object(Te.jsxs)(me.c,{children:[Object(Te.jsx)(me.a,{path:xe(),component:Ot}),Object(Te.jsx)(me.a,{component:pt})]}),yt=ge.a`
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
`;var ft=()=>(Object(a.useEffect)((()=>{fe.dispatch({type:"app/init"})}),[]),Object(Te.jsxs)(Te.Fragment,{children:[Object(Te.jsx)(yt,{}),Object(Te.jsx)(i.a,{store:fe,children:Object(Te.jsx)(o.a,{history:M,children:Object(Te.jsx)(kt,{})})})]}));window.logError=alert,r.a.render(Object(Te.jsx)(c.a.StrictMode,{children:Object(Te.jsx)(ft,{})}),document.getElementById("root"))}},[[1556,1,2]]]);
//# sourceMappingURL=main.74c7a6d6.chunk.js.map