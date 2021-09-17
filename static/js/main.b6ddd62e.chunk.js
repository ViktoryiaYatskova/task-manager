(this["webpackJsonporca-test-task"]=this["webpackJsonporca-test-task"]||[]).push([[0],{1556:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(21),r=s.n(n),i=s(10),o=s(20),l=s(8),b=s(45),d=s(51);const j=window.alert,u=(...e)=>{j(e.join(" "))};var O=s(14),h=s(17);const p=(e,t)=>e.filter((e=>e.id!==t)),k=(...e)=>[...new Set(e)],f=Object(l.b)("tasks/set"),y=Object(l.b)("task/create"),m=Object(l.b)("tasks/fetch"),g=Object(l.b)("tasks/set/found"),x=Object(l.b)("tasks/reset/found"),T=Object(l.b)("task/delete/success");var C=Object(l.c)({tasksList:[],foundTasksList:[]},(e=>{e.addCase(f,((e,{payload:t})=>({...e,tasksList:t}))).addCase(g,((e,{payload:t})=>({...e,foundTasksList:t}))).addCase(x,(e=>({...e,foundTasksList:[]}))).addCase(T,((e,{payload:t})=>({...e,tasksList:p(e.tasksList,t),foundTasksList:p(e.foundTasksList,t)})))}));const v=Object(l.b)("subTasks/fetch"),w=Object(l.b)("subTasks/set"),S=Object(l.b)("subTasks/set/found"),L=Object(l.b)("subTask/reset/found"),I=Object(l.b)("subTask/delete"),E=Object(l.b)("subTask/delete/success");var N=Object(l.c)({allSubTasks:{},foundSubTasksList:[]},(e=>{e.addCase(w,((e,{payload:t})=>({...e,allSubTasks:{...e.allSubTasks,[t.taskId]:t.subTasks}}))).addCase(S,((e,{payload:t})=>({...e,foundSubTasksList:t}))).addCase(L,(e=>({...e,foundSubTasksList:[]}))).addCase(E,((e,{payload:{id:t,taskId:s}})=>({...e,foundSubTasksList:p(e.foundSubTasksList,t),allSubTasks:{...e.allSubTasks,[s]:p(e.allSubTasks[s],t)}})))}));const B=Object(l.b)("app/mode"),R=Object(l.b)("app/searchItems"),M=Object(l.b)("app/searchItems:byLabel");var A=Object(l.c)({isSearchMode:!1,searchQuery:"",filters:[]},(e=>{e.addCase(M,((e,{payload:t})=>({...e,isSearchMode:!0,searchQuery:"",filters:k(...e.filters,t)}))).addCase(B,((e,{payload:t})=>({...e,isSearchMode:t,searchQuery:t?e.searchQuery:"",filters:t?e.filters:[]}))).addCase(R,((e,{payload:t})=>({...e,searchQuery:t})))}));const P=Object(O.a)();var q=Object(h.b)({router:Object(o.b)(P),tasks:C,subTasks:N,app:A}),_=s(7),F=s(19),Q=s.n(F);class D{constructor(e){this.key=null,this.key=e,localStorage.getItem(this.key)||localStorage.setItem(this.key,JSON.stringify([]))}get(){try{return JSON.parse(localStorage.getItem(this.key))}catch{return null}}set(e){localStorage.setItem(this.key,JSON.stringify(e))}}var J={tasks:new D("tasks"),subTasks:new D("subTasks")},$=e=>(...t)=>new Promise((s=>setTimeout((()=>s(e(...t))),1500)));const z=Array.from({length:10}).map((()=>Q.a.lorem.word())),U=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,V=(e,t)=>(...s)=>{const a=t(...s);return console.log("Request",e,"args",s,"result",a),a};var W=$((({title:e})=>{const t=J.tasks.get(),s=J.subTasks.get(),a={id:Q.a.datatype.uuid(),createTime:Date.now(),title:e||Q.a.lorem.sentence()},c=Array.from({length:U(1,10)}).map((()=>({id:Q.a.datatype.uuid(),taskId:a.id,title:Q.a.lorem.sentence(),labels:[...new Set(Array.from({length:U(1,5)}).map((()=>z[U(0,9)])))]})));return J.tasks.set([...t,a]),J.subTasks.set([...s,...c]),a})),Y=$((()=>J.tasks.get())),G=$(V("deleteTask",(e=>{const t=J.tasks.get(),s=t.some((t=>t.id===e));if(!s)throw new Error(`Task ${e} wasn't found`);return J.tasks.set([...t.filter((t=>t.id!==e))]),s}))),H=$(V("findTasks",(e=>{const t=J.tasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))}))),K=s(23);const X=e=>e.app.isSearchMode,Z=e=>e.app.searchQuery,ee=e=>e.subTasks.foundSubTasksList,te=e=>e.subTasks.filters,se=(e,t)=>e.subTasks.allSubTasks[t]||[],ae=e=>Object(K.a)(X,(e=>Object(K.a)(ee,(t=>t.filter((t=>t.taskId===e)))))(e),(t=>se(t,e)),((e,t,s)=>e?t:s));function*ce(){const e=yield Object(_.b)(Y);yield Object(_.c)(f(e))}function*ne(){const e=yield Object(_.d)(Z);if(e){const t=yield Object(_.b)(H,e);yield Object(_.c)(g(t))}}function*re({payload:e}){yield Object(_.b)(W,e),yield Object(_.b)(ce)}function*ie({payload:e}){try{yield Object(_.b)(G,e),yield Object(_.c)(T(e))}catch(t){u("Delete task failed:",t)}}function*oe({payload:e}){const{taskId:t,id:s}=e;((e,t)=>!t.length||1===t.length&&t.some((({id:t})=>t===e)))(s,yield Object(_.d)(se,t))&&(yield Object(_.b)(ie,{payload:t}))}function*le(){yield Object(_.f)(m.type,ce),yield Object(_.e)(y.type,re),yield Object(_.f)(R.type,ne),yield Object(_.e)(E.type,oe)}var be=$(V("deleteSubTask",(e=>{const t=J.subTasks.get(),s=t.find((t=>t.id===e));if(s)return J.subTasks.set(t.filter((t=>t.id!==e))),s;throw new Error(`SubTask [${e}] not found`)}))),de=$((e=>J.subTasks.get().filter((t=>t.taskId===e)))),je=$(V("findSubTasks",(e=>{const t=J.subTasks.get(),s=e.toLowerCase();return t.filter((e=>e.title.toLowerCase().includes(s)))}))),ue=$(V("findSubTasksByLabel",(e=>{const t=J.subTasks.get();return e.reduce(((e,t)=>{const s=t.toLowerCase();return e.filter((e=>e.labels.some((e=>e.toLowerCase()===s))))}),t)})));function*Oe({payload:e}){const t=yield Object(_.b)(de,e);yield Object(_.c)(w({taskId:e,subTasks:t}))}function*he(){const e=yield Object(_.d)(Z);if(e){const t=yield Object(_.b)(je,e);yield Object(_.c)(S(t))}}function*pe(){const e=yield Object(_.d)(te);if(e){const t=yield Object(_.b)(ue,e);yield Object(_.c)(S(t))}}function*ke({payload:e}){try{const{id:t}=e;yield Object(_.b)(be,t),yield Object(_.c)(E(e))}catch(t){u("Delete subTask request failed:",t)}}function*fe(){yield Object(_.e)(v.type,Oe),yield Object(_.e)(I.type,ke),yield Object(_.f)(R.type,he),yield Object(_.f)(M.type,pe)}const ye=Object(b.a)(P),me=Object(d.a)({onError:(e,{sagaStack:t})=>{u("Something came up",e,t)}}),ge=[...Object(l.d)({thunk:!1,serializableCheck:!1,immutableCheck:{warnAfter:300}}),ye,me],xe=Object(l.a)({reducer:q,middleware:ge,enhancers:[],preloadedState:{},devTools:{trace:!0}});me.run((function*(){yield Object(_.a)([le(),fe()])}));var Te=xe,Ce=s(11);const ve=()=>"/";var we=s(9);const Se=we.b.div.withConfig({displayName:"BorderedCenterArea"})(["width:500px;margin:20px auto;padding:20px;max-width:100%;border:1px dashed #a5a2a2;"]);var Le=s(2);var Ie=({children:e})=>Object(Le.jsx)(Se,{children:e}),Ee=s(5),Ne=s.n(Ee);const Be=we.b.button.withConfig({displayName:"Wrapper"})(["padding:4px 6px;height:fit-content;border-radius:1em;background-color:#96fbe4;border:none;&.yellow-button{background-color:#ffe082;}&.purple-button{background-color:#9c9cc7;color:#fff;}"]);var Re=e=>Object(Le.jsx)(Be,{...e});const Me={CREATE_TIME:"BY_CREATE_TIME",TITLE:"BY_TITLE"},Ae=Object(we.b)(Re).withConfig({displayName:"SortButton"})(["margin-right:5px;"]),Pe={[Me.CREATE_TIME]:"Sort by create-date",[Me.TITLE]:"Sort by title"};var qe=({sortType:e,sortBy:t})=>{const s=Object(a.useCallback)((()=>t(e)),[t,e]);return Object(Le.jsx)(Ae,{className:"yellow-button",onClick:s,children:Pe[e]})};const _e=we.b.input.attrs({type:"text"}).withConfig({displayName:"Input"})(["border-radius:1em;border:1px solid #656565;padding:2px 5px;"]),Fe=({value:e,placeholder:t,onValueChange:s})=>{const[c,n]=Object(a.useState)(e),r=Object(a.useCallback)((e=>{n(e.target.value),s(e.target.value)}),[s]);return Object(a.useEffect)((()=>n(e)),[e]),Object(Le.jsx)(_e,{placeholder:t,value:c,onChange:r})};Fe.defaultProps={value:"",placeholder:""};var Qe=Fe;var De=()=>Object(Le.jsx)("h1",{children:"Processes"});const Je=we.b.ul.withConfig({displayName:"ListContainter"})(["margin-left:10px;margin-bottom:5px;.item{margin-bottom:5px;}&.hidden{display:none;}"]),$e=({items:e,ItemComponent:t,className:s})=>Object(Le.jsx)(Je,{className:s,children:e.map((e=>Object(Le.jsx)("li",{children:Object(Le.jsx)(t,{...e})},e.id)))});$e.defaultProps={className:""};var ze=$e;const Ue=we.b.input.attrs({type:"checkbox"}).withConfig({displayName:"Checkbox"})(["margin-right:5px;"]),Ve=({onCheck:e,isUncheckable:t})=>{const[s,c]=Object(a.useState)(!1),n=Object(a.useCallback)((()=>{s||e(),c((e=>!!t||!e))}),[e,s,t]);return Object(Le.jsx)(Ue,{onChange:n,checked:s})};Ve.defaultProps={isUncheckable:!1};var We=Ve;var Ye=({children:e})=>{const t=Object(i.e)(Z),s=new RegExp(`(${t})`,"gi"),a=e.split(s);return t?Object(Le.jsx)(Le.Fragment,{children:a.map(((e,t)=>{const a=s.test(e);return Object(Le.jsx)(c.a.Fragment,{children:a?Object(Le.jsx)("mark",{children:e}):e},t)}))}):e};const Ge=Object(we.b)(Re).withConfig({displayName:"LabelStyled"})(["padding:0 5px;"]);var He=({label:e})=>{const t=Object(i.d)(),s=Object(a.useCallback)((()=>t(M(e))),[t,e]);return Object(Le.jsxs)(Ge,{className:"label purple-button",onClick:s,children:["#",e]})};var Ke=({onToggle:e,onTitle:t,offTitle:s})=>{const[c,n]=Object(a.useState)(!1),r=Object(a.useCallback)((()=>{n((e=>!e)),e(!c)}),[c,e]);return Object(Le.jsx)(Re,{onClick:r,children:c?t:s})};const Xe=we.b.div.withConfig({displayName:"ButtonContainer"})(["margin:5px 0;"]);var Ze=({sortBy:e})=>Object(Le.jsx)(Xe,{children:Object.values(Me).map((t=>Object(Le.jsx)(qe,{sortBy:e,sortType:t},t)))});const et=we.b.ul.withConfig({displayName:"LabelsListContainer"})(["margin:3px 0 10px;& > li{display:inline-block;margin-right:5px;}"]),tt=we.b.li.withConfig({displayName:"LabelListItem"})(["display:inline-block;margin-right:5px;"]),st=({labels:e})=>Object(Le.jsx)(et,{children:e.map((e=>Object(Le.jsx)(tt,{children:Object(Le.jsx)(He,{label:e})},e)))});st.defaultProps={labels:[]};var at=st;const ct=({id:e,title:t,labels:s,taskId:c})=>{const n=Object(i.d)(),r=Object(a.useCallback)((()=>n(I({id:e,taskId:c}))),[n,e,c]);return Object(Le.jsxs)("span",{children:[Object(Le.jsx)(We,{onCheck:r,isUncheckable:!0}),Object(Le.jsx)("span",{id:e,children:Object(Le.jsx)(Ye,{children:t})}),Object(Le.jsx)(at,{labels:s})]})};ct.defaultProps={labels:[]};Ne.a.string.isRequired,Ne.a.string.isRequired,Ne.a.string.isRequired,Ne.a.arrayOf(Ne.a.string);var nt=ct;var rt=({taskId:e,isExpanded:t})=>{const s=Object(i.e)(X),c=((e,t)=>{const s=Object(a.useCallback)(e(...t),[e,...t]);return Object(i.e)(s)})(ae,[e]),n=t||s&&c.length;return Object(Le.jsx)(ze,{className:!n&&"hidden",items:c,ItemComponent:nt})};const it=e=>{const t=new Date(e);return`${t.toLocaleDateString()} ${t.toLocaleTimeString()}`},ot=we.b.div.withConfig({displayName:"TaskWrapper"})(["display:flex;justify-content:space-between;margin:5px 0;"]),lt=we.b.span.withConfig({displayName:"TaskName"})(["flex-basis:40%;max-width:40%;overflow:hidden;text-overflow:ellipsis;"]);Ne.a.string.isRequired,Ne.a.string.isRequired,Ne.a.number.isRequired;var bt=({title:e,id:t,createTime:s})=>{const c=Object(i.e)(X),[n,r]=Object(a.useState)(!1),o=Object(i.d)(),l=Object(a.useCallback)((e=>{e&&o(v(t)),r(e)}),[t,o]);return Object(Le.jsxs)(Le.Fragment,{children:[Object(Le.jsxs)(ot,{children:[Object(Le.jsx)(lt,{children:Object(Le.jsx)(Ye,{children:e})}),Object(Le.jsx)("span",{children:it(s)}),!c&&Object(Le.jsx)(Ke,{onToggle:l,onTitle:"Collapse",offTitle:"Expand"})]}),Object(Le.jsx)(rt,{taskId:t,isExpanded:n})]})};const dt=Object(K.a)(X,(e=>e.tasks.tasksList),(e=>e.tasks.foundTasksList),ee,((e,t,s,a)=>{return e?(c=a,n=s,t.filter((e=>((e,t)=>{return s=e,a="id",!!t.find((e=>e[a]===s[a]));var s,a})(e,n)||((e,t)=>e.some((e=>e.taskId===t)))(c,e.id)))):t;var c,n})),jt={[Me.CREATE_TIME]:(e,t)=>e.createTime-t.createTime,[Me.TITLE]:(e,t)=>e.title<t.title?-1:1};var ut=e=>{const[t,s]=Object(a.useState)(Me.CREATE_TIME);return{sortedItems:((e,t)=>{const s=[...e];return s.sort(jt[t]),s})(e,t),sortBy:s}};var Ot=()=>{const e=Object(i.e)(dt),{sortedItems:t,sortBy:s}=ut(e),c=Object(i.d)();return Object(a.useEffect)((()=>{c(m())}),[]),Object(Le.jsxs)("section",{children:[Object(Le.jsx)(Ze,{sortBy:s}),Object(Le.jsx)(ze,{items:t,ItemComponent:bt})]})};var ht=()=>{const e=Object(i.e)(te);return Object(Le.jsx)("div",{children:Object(Le.jsx)(at,{labels:e})})};const pt=we.b.section.withConfig({displayName:"TaskFormContainer"})(["& button{margin-left:5px;}"]),kt=({title:e})=>{const[t,s]=Object(a.useState)(e),c=Object(i.d)(),n=Object(i.e)(X),r=Object(a.useCallback)((()=>{c(y({title:t})),s("")}),[t,c]),o=Object(a.useCallback)((()=>{n?s(""):c(R(t)),c(B(!n))}),[c,n,t]),l=Object(a.useCallback)((e=>{s(e),n&&c(R(e))}),[n,c]);return Object(Le.jsxs)(pt,{children:[Object(Le.jsx)(Qe,{value:t,placeholder:"task title",onValueChange:l}),!n&&Object(Le.jsx)(Re,{onClick:r,children:"Create"}),Object(Le.jsx)(Re,{onClick:o,children:n?"Exit Search":"Start Search"}),Object(Le.jsx)(ht,{})]})};kt.defaultProps={title:""};var ft=kt;var yt=()=>Object(Le.jsxs)(Le.Fragment,{children:[Object(Le.jsx)(De,{}),Object(Le.jsxs)("main",{children:[Object(Le.jsx)(ft,{}),Object(Le.jsx)(Ot,{})]})]});var mt=()=>Object(Le.jsx)(Ie,{children:Object(Le.jsx)(yt,{})}),gt=s(26);var xt=()=>Object(Le.jsxs)(Ie,{children:[Object(Le.jsx)("h1",{children:"Page not found"}),Object(Le.jsx)(gt.a,{to:ve(),children:"Go to home"})]});var Tt=()=>Object(Le.jsxs)(Ce.c,{children:[Object(Le.jsx)(Ce.a,{path:ve(),component:mt}),Object(Le.jsx)(Ce.a,{component:xt})]}),Ct=we.a`
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
`;var vt=()=>Object(Le.jsxs)(Le.Fragment,{children:[Object(Le.jsx)(Ct,{}),Object(Le.jsx)(i.a,{store:Te,children:Object(Le.jsx)(o.a,{history:P,children:Object(Le.jsx)(Tt,{})})})]});window.logError=alert,r.a.render(Object(Le.jsx)(c.a.StrictMode,{children:Object(Le.jsx)(vt,{})}),document.getElementById("root"))}},[[1556,1,2]]]);
//# sourceMappingURL=main.b6ddd62e.chunk.js.map