(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{125:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(16),i=n.n(c),s=n(27),o=(n(125),n(11)),u=n(24),l=n(106),b=n(17),d=n.n(b),j=n(10),p="SIGN_IN",O="SIGN_IN_SUCCEEDED",x="SIGN_IN_FAILED",f="SIGN_OUT",h="SIGN_OUT_SUCCEEDED",m="SIGN_OUT_FAILED",g="SIGN_UP",v="SIGN_UP_SUCCEEDED",k="SIGN_UP_FAILED",y="UPDATE_USER",S="UPDATE_USER_SUCCEEDED",w="UPDATE_USER_FAILED ",E="CLEAR_TYPE_USER",D="UPDATE_PROFILE_USER",A=n(91),C=n.n(A).a.create({baseURL:"https://api-nodejs-todolist.herokuapp.com"}),T=function(e){return C.post("/user/register",e)},_=function(e){return C.post("/user/login",e)},N=function(e){var t={headers:{Authorization:e}};return C.post("/user/logout",{},t)},I=function(e,t){var n={headers:{Authorization:t}};return C.put("/user/me",e,n)},R=function(e,t){var n={headers:{Authorization:t}};return C.post("/user/me/avatar",e,n)},U=d.a.mark(z),L=d.a.mark(W),F=d.a.mark(G),B=d.a.mark(K),P=d.a.mark(M),q=d.a.mark(H);function z(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(j.b)(_,e.account);case 3:if(200!==(t=n.sent).status){n.next=9;break}return n.next=7,Object(j.c)({type:O,data:t.data});case 7:n.next=11;break;case 9:return n.next=11,Object(j.c)({type:x,error:"Do not know"});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(j.c)({type:x,error:n.t0.message});case 17:case"end":return n.stop()}}),U,null,[[0,13]])}function W(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.b)(T,e.account);case 3:if(201!==t.sent.status){t.next=9;break}return t.next=7,Object(j.c)({type:v});case 7:t.next=11;break;case 9:return t.next=11,Object(j.c)({type:k,error:"Do not know signUpSaga"});case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(j.c)({type:k,error:t.t0.message});case 17:case"end":return t.stop()}}),L,null,[[0,13]])}function G(e){var t,n,r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,t=e.token,n=e.informationUser,a.next=4,Object(j.b)(I,n,t);case 4:if(200!==(r=a.sent).status){a.next=10;break}return a.next=8,Object(j.c)({type:S,data:r.data.data});case 8:a.next=12;break;case 10:return a.next=12,Object(j.c)({type:w});case 12:a.next=18;break;case 14:return a.prev=14,a.t0=a.catch(0),a.next=18,Object(j.c)({type:w,error:a.t0.message});case 18:case"end":return a.stop()}}),F,null,[[0,14]])}function K(e){var t,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.formData,n=e.token,r.next=3,Object(j.b)(R,t,n);case 3:case"end":return r.stop()}}),B)}function M(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.b)(N,e.token);case 3:if(200!==t.sent.status){t.next=9;break}return t.next=7,Object(j.c)({type:h});case 7:t.next=11;break;case 9:return t.next=11,Object(j.c)({type:m});case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(j.c)({type:m,error:t.t0.message});case 17:case"end":return t.stop()}}),P,null,[[0,13]])}function H(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(p,z);case 2:return e.next=4,Object(j.d)(g,W);case 4:return e.next=6,Object(j.d)(y,G);case 6:return e.next=8,Object(j.d)(D,K);case 8:return e.next=10,Object(j.d)(f,M);case 10:case"end":return e.stop()}}),q)}var V="GET_ALL_TASKS",Y="GET_ALL_TASKS_SUCCEEDED",J="GET_ALL_TASKS_FAILED",Z="REMOVE_TASK",$="REMOVE_TASK_SUCCEEDED",Q="REMOVE_TASK_FAILED",X="UPDATE_TASK",ee="UPDATE_TASK_SUCCEEDED",te="UPDATE_TASK_FAILED",ne="ADD_TASK",re="ADD_TASK_SUCCEEDED",ae="ADD_TASK_FAILED",ce="CLEAR_TYPE_TODO_LIST",ie=function(e){var t={headers:{Authorization:e}};return C.get("/task",t)},se=function(e,t,n){var r="/task/".concat(e),a={headers:{Authorization:n}};return C.put(r,t,a)},oe=function(e,t){var n="/task/".concat(e),r={headers:{Authorization:t}};return C.delete(n,r)},ue=function(e,t){var n={headers:{Authorization:t}};return C.post("/task",e,n)},le=d.a.mark(Oe),be=d.a.mark(xe),de=d.a.mark(fe),je=d.a.mark(he),pe=d.a.mark(me);function Oe(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(j.b)(ie,e.token);case 3:if(200!==(t=n.sent).status){n.next=9;break}return n.next=7,Object(j.c)({type:Y,data:t.data.data});case 7:n.next=11;break;case 9:return n.next=11,Object(j.c)({type:J,error:"get all tasks fail"});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(j.c)({type:J,error:n.t0.message});case 17:case"end":return n.stop()}}),le,null,[[0,13]])}function xe(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(j.b)(ue,e.bodyTask,e.token);case 3:if(201!==(t=n.sent).status){n.next=9;break}return n.next=7,Object(j.c)({type:re,newTask:t.data.data});case 7:n.next=11;break;case 9:return n.next=11,Object(j.c)({type:ae,error:"err create new task"});case 11:n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(0),n.next=17,Object(j.c)({type:ae,error:n.t0.message});case 17:case"end":return n.stop()}}),be,null,[[0,13]])}function fe(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.b)(oe,e.idTask,e.token);case 3:if(200!==t.sent.status){t.next=9;break}return t.next=7,Object(j.c)({type:$,_id:e.idTask});case 7:t.next=11;break;case 9:return t.next=11,Object(j.c)({type:Q,error:"remove task Saga"});case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(j.c)({type:Q,error:t.t0.message});case 17:case"end":return t.stop()}}),de,null,[[0,13]])}function he(e){var t,n,r,a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.idTask,n=e.taskUpdate,r=e.token,c.next=4,Object(j.b)(se,t,n,r);case 4:if(200!==(a=c.sent).status){c.next=10;break}return c.next=8,Object(j.c)({type:ee,_id:t,taskUpdate:a.data.data});case 8:c.next=12;break;case 10:return c.next=12,Object(j.c)({type:te,error:"updateTaskSaga error"});case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(0),c.next=18,Object(j.c)({type:te,error:c.t0.message});case 18:case"end":return c.stop()}}),je,null,[[0,14]])}function me(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(V,Oe);case 2:return e.next=4,Object(j.d)(ne,xe);case 4:return e.next=6,Object(j.d)(Z,fe);case 6:return e.next=8,Object(j.d)(X,he);case 8:case"end":return e.stop()}}),pe)}var ge=d.a.mark(ve);function ve(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)([H(),me()]);case 2:case"end":return e.stop()}}),ge)}var ke=n(92),ye=n(105),Se=n(6),we={tasks:null,request:!1,type:null,error:null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case Y:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,tasks:t.data,type:Y,error:null});case J:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:J,error:t.error});case ne:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case re:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,tasks:[].concat(Object(ye.a)(e.tasks),[t.newTask]),type:re,error:null});case ae:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:ae,error:t.error});case Z:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case $:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,tasks:e.tasks.filter((function(e){return e._id!==t._id})),type:$,error:null});case Q:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:Q,error:t.error});case X:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case ee:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,tasks:e.tasks.map((function(e){return e._id===t._id?e=t.taskUpdate:e})),type:ee,error:null});case te:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:te,error:t.error});case ce:return Object(Se.a)(Object(Se.a)({},e),{},{type:null});case h:return we;default:return e}},De={token:null,data:null,request:!1,isAuthenticated:!1,type:null,error:null},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case O:return Object(Se.a)(Object(Se.a)({},e),{},{token:t.data.token,data:t.data.user,request:!1,isAuthenticated:!0,type:O});case x:return Object(Se.a)(Object(Se.a)({},e),{},{data:null,request:!1,isAuthenticated:!1,type:x,error:t.error});case g:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case v:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:v});case k:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:k,error:t.error});case y:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case S:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,data:t.data,type:S});case w:return Object(Se.a)(Object(Se.a)({},e),{},{request:!1,type:w});case f:return Object(Se.a)(Object(Se.a)({},e),{},{request:!0});case h:return Object(Se.a)(Object(Se.a)({},e),{},{token:null,data:null,request:!1,isAuthenticated:!1,type:h,error:null});case m:return Object(Se.a)(Object(Se.a)({},e),{},{type:m,error:t.error});case E:return Object(Se.a)(Object(Se.a)({},e),{},{type:null});default:return e}},Ce="OPEN_DIALOG",Te="CLOSE_DIALOG",_e="ADD_TASK_DIALOG",Ne="EDIT_TASK_DIALOG",Ie={isOpen:!1,kindOfDialog:null,state:null},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ce:return Object(Se.a)(Object(Se.a)({},e),{},{isOpen:!0,kindOfDialog:t.kindOfDialog,state:t.state});case Te:return Ie;default:return e}},Ue=Object(u.combineReducers)({todoList:Ee,user:Ae,dialog:Re}),Le=n(76),Fe=n(93),Be={key:"root",storage:n.n(Fe).a,whitelist:["user"]},Pe=Object(Le.a)(Be,Ue),qe=Object(l.a)(),ze=Object(u.createStore)(Pe,Object(ke.composeWithDevTools)(Object(u.applyMiddleware)(qe))),We=Object(Le.b)(ze);qe.run(ve);var Ge=n(94),Ke=n(19),Me=n(54),He=n.p+"static/media/logo1.ef15cafb.png",Ve=n(71),Ye=function(){return{type:E}},Je=n(195),Ze=n(193),$e="#f5f7fa",Qe="#ffffff",Xe="#e5e7eb",et="rgb(97, 97, 97)",tt="#3f51b5",nt=n(2);Object(Ze.a)((function(e){return{root:{fontWeight:"600",margin:"2px"},active:{color:tt}}}));var rt=n(95),at=n.n(rt),ct=n(96),it=n.n(ct),st=n(97),ot=n.n(st);at.a,it.a,ot.a;n(211);var ut=n(207);n(197),n(98),Object(Ze.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%",padding:"30px 20px",boxSizing:"border-box","& img":{marginBottom:20}},bottomSideBar:{marginLeft:"20px"},notification:{margin:"5px 20%",display:"inline-block"},profileAva:{margin:"0 10%",backgroundColor:tt,width:e.spacing(7),height:e.spacing(7),"& img":{marginBottom:0}}}}));var lt=Object(Ze.a)((function(e){return{parent:{},sidebar:{minHeight:"100vh",background:$e}}}));var bt=function(e){var t=lt();return Object(nt.jsx)(ut.a,{className:t.parent,children:Object(nt.jsx)(ut.a,{children:e.children})})},dt=function(){return{type:Te}},jt=Object(Ze.a)({body:{padding:"0 10px",display:"flex",flexWrap:"wrap"},titleShape:{padding:"30px 30px",marginTop:5,marginRight:5,borderRadius:5,border:"1px solid ".concat(Xe),backgroundColor:Qe,"& > h3":{color:et,fontWeight:"600",fontSize:"18px"}},buttonAdd:{position:"fixed",right:"20px",bottom:"25px",borderRadius:"50% 50%",backgroundColor:"#f3f4ff",boxShadow:"10px 10px 10px #c7c7c7"},pagination:{"& .MuiPagination-ul":{justifyContent:"center",margin:40}}}),pt=n(99),Ot=n.n(pt),xt=n(198),ft=n(200),ht=n(199),mt=n(160),gt=Object(Ze.a)({parentCard:{minWidth:340,maxWidth:375,margin:"10px 10px 0px 0px",padding:5,border:"1px solid ".concat(Xe)},time:{color:"rgb(97, 97, 97)",marginBottom:15},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12}});var vt=function(e){var t=e.description,n=(e.completed,e.updatedAt,e.createdAt),r=e._id,a=gt(),c=Object(o.b)(),i=Object(o.c)((function(e){return e.user})).token,s=Ot()(n).fromNow();return Object(nt.jsxs)(xt.a,{className:a.parentCard,variant:"outlined",children:[Object(nt.jsxs)(ht.a,{children:[Object(nt.jsx)(mt.a,{variant:"h5",component:"p",children:t}),Object(nt.jsx)(mt.a,{className:a.time,variant:"subtitle2",component:"p",children:s})]}),Object(nt.jsxs)(ft.a,{children:[Object(nt.jsx)(Je.a,{size:"small",onClick:function(){c(function(e,t){return{type:Z,idTask:e,token:t}}(r,i))},children:"Done"}),Object(nt.jsx)(Je.a,{size:"small",onClick:function(){c(function(e){return{type:Ce,kindOfDialog:Ne,state:e}}({_id:r,description:t}))},children:"Edit"})]})]})},kt=n(201),yt=n(100),St=n.n(yt);var wt=function(){var e=jt(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.todoList})).tasks;console.log("Home - task: ",n);var a=Object(o.c)((function(e){return e.user})).token,c=Object(o.c)((function(e){return e.todoList.type})),i=function(){t(function(e){return{type:V,token:e}}(a))};return Object(r.useEffect)((function(){!n&&i()}),[n]),Object(r.useEffect)((function(){c&&t({type:ce})}),[c]),Object(nt.jsxs)(bt,{children:[Object(nt.jsx)(ut.a,{className:e.titleShape,children:Object(nt.jsx)(mt.a,{variant:"h3",children:"Todo list for, Toi \ud83d\udc93 Nheo"})}),Object(nt.jsx)(ut.a,{className:e.body,children:!!n&&n.map((function(e,t){return Object(r.createElement)(vt,Object(Se.a)(Object(Se.a)({},e),{},{key:t}))}))}),Object(nt.jsx)(kt.a,{className:e.buttonAdd,"aria-label":"add",color:"primary",onClick:function(){t({type:Ce,kindOfDialog:_e})},children:Object(nt.jsx)(St.a,{fontSize:"large"})})]})};var Et=function(e){return Object(nt.jsx)("div",{children:Object(nt.jsx)("h3",{children:"Not Found page"})})},Dt=Object(Ze.a)((function(e){return{root:{width:"50%",margin:"20px auto",padding:"10px 20px",borderRadius:"5px",border:"1px solid ".concat(Xe),backgroundColor:Qe,"& h3":{fontSize:"18px",fontWeight:"bold",margin:"20px 0"},"& h6":{color:"rgb(97, 97, 97)",fontSize:"14px"},"& .MuiFormControl-root":{display:"block",margin:"15px 0"},"& .MuiInputBase-root":{width:"80%"}},colorTitle:{color:"#3f51b5"},buttonSave:{marginBottom:10},wrapperUploadForm:{padding:"0 10px",margin:"20px 0",display:"flex",alignItems:"flex-end"},wrapperButtonUpload:{maxWidth:"200px",marginLeft:"20px","& > button":{margin:"5px 0"}}}})),At=n(101),Ct=n.n(At);var Tt=function(e){var t=e.setSelectedFile,n=a.a.useRef(null);return Object(nt.jsxs)("div",{children:[Object(nt.jsx)(Je.a,{color:"primary",size:"small",variant:"contained",startIcon:Object(nt.jsx)(Ct.a,{}),onClick:function(e){n.current.click()},children:"Upload"}),Object(nt.jsx)("input",{type:"file",onChange:function(e){var n=new FileReader;n.onload=function(){document.getElementById("outputUserProfile").src=n.result},n.readAsDataURL(e.target.files[0]),t(e.target.files[0])},ref:n,style:{display:"none"}})]})},_t=n(206);var Nt=function(){var e=Dt(),t=Object(Ke.g)(),n=Object(o.b)(),a=Object(o.c)((function(e){return e.user.data})),c=Object(o.c)((function(e){return e.user.type})),i=Object(o.c)((function(e){return e.user})).token,s=Object(r.useRef)(),u=Object(r.useRef)(),l=Object(r.useRef)(),b=Object(r.useRef)(),d=Object(r.useState)(),j=Object(Me.a)(d,2),p=j[0],O=j[1],x=Object(r.useCallback)((function(){c&&n(Ye())}),[n,c]);return Object(r.useEffect)((function(){x()}),[x]),console.log("UserProfile"),Object(nt.jsx)(bt,{children:Object(nt.jsxs)(ut.a,{className:e.root,children:[Object(nt.jsx)(mt.a,{variant:"h3",className:e.colorTitle,children:"EDIT INFORMATION"}),Object(nt.jsxs)(ut.a,{className:e.wrapperUploadForm,children:[Object(nt.jsx)("img",{id:"outputUserProfile",alt:"profile user",height:"170px",width:"160px"}),Object(nt.jsxs)(ut.a,{className:e.wrapperButtonUpload,children:[Object(nt.jsx)(Tt,{setSelectedFile:O}),Object(nt.jsx)(mt.a,{variant:"subtitle2",children:"Acceptable format jpg, png. And max file size is 500kb"})]})]}),Object(nt.jsx)(mt.a,{variant:"h3",children:"ACCOUNT INFORMATION"}),Object(nt.jsxs)("form",{children:[Object(nt.jsx)(_t.a,{variant:"outlined",label:"Full name",defaultValue:a.name,inputRef:s}),Object(nt.jsx)(_t.a,{variant:"outlined",label:"Email",defaultValue:a.email,inputRef:u})]}),Object(nt.jsx)(mt.a,{variant:"h3",children:"CHANGE PASSWORD"}),Object(nt.jsxs)("form",{children:[Object(nt.jsx)(_t.a,{type:"password",label:"New Password",variant:"outlined",inputRef:l}),Object(nt.jsx)(_t.a,{type:"password",label:"Confirm Password",variant:"outlined",inputRef:b})]}),Object(nt.jsx)(Je.a,{className:e.buttonSave,variant:"outlined",color:"primary",onClick:function(){var e=l.current.value;if(e===b.current.value){var t={name:s.current.value,email:u.current.value,password:e};n(function(e,t){return{type:y,informationUser:e,token:t}}(t,i));var r=new FormData;r.append("avatar",p),n(function(e,t){return{type:D,formData:e,token:t}}(r,i))}else alert("Password must to similar, type again!")},children:"Save"}),Object(nt.jsx)("br",{}),Object(nt.jsx)(Je.a,{variant:"outlined",color:"default",onClick:function(){t.push("/")},children:"Back"})]})})},It=Object(Ze.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},boxSignIn:{width:"50%",padding:"40px 100px",border:"1px solid #eaeaea",boxShadow:"0 25px 50px -12px #b2b2b2",borderRadius:"5px"},title:{marginBottom:"20px"},subTitle1:{fontWeight:"bold",fontSize:"18px",margin:"25px 0"},subTitle2:{color:"rgb(97, 97, 97)",fontSize:"14px","& a":{textDecoration:"none"}},gitHubButton:{color:"white",backgroundColor:"black",minWidth:"100px",padding:"12px 30px",marginRight:"5px"},linkedInButton:{minWidth:"100px",padding:"12px 30px",margin:"5px",backgroundColor:"#0077b5",color:"white"},facebookButton:{minWidth:"100px",padding:"12px 30px",margin:"5px"},submitButton:{fontWeight:"bold",margin:"15px 0px 50px 0px"},signInForm:{"& > div":{margin:"5px 0",width:"100%"}}}})),Rt=n(102),Ut=n.n(Rt),Lt=n(103),Ft=n.n(Lt),Bt=n(104),Pt=n.n(Bt);var qt=function(){var e=It(),t=Object(o.b)(),n=Object(Ke.h)(),a=Object(Ke.g)(),c=Object(o.c)((function(e){return e.user})).isAuthenticated,i=Object(o.c)((function(e){return e.user.type})),u=Object(r.useRef)(),l=Object(r.useRef)(),b=Object(r.useState)(),d=Object(Me.a)(b,2),j=d[0],O=d[1];return Object(r.useEffect)((function(){c&&(n.state?a.push(n.state):a.push("/"))}),[c,n.state,a]),Object(r.useEffect)((function(){i&&t(Ye())}),[i,t]),console.log("SignIn"),Object(nt.jsx)(ut.a,{className:e.root,children:Object(nt.jsxs)(ut.a,{className:e.boxSignIn,children:[Object(nt.jsx)(ut.a,{className:e.title,children:Object(nt.jsx)("img",{src:He,alt:"hi",height:"50px",width:"200px"})}),Object(nt.jsx)(mt.a,{className:e.subTitle1,variant:"subtitle1",gutterBottom:!0,children:"Sign in with your account"}),Object(nt.jsx)(mt.a,{className:e.subTitle2,variant:"subtitle2",gutterBottom:!0,children:"Sign in using a secure email"}),Object(nt.jsx)("form",{children:Object(nt.jsxs)(ut.a,{className:e.signInForm,children:[Object(nt.jsx)(_t.a,{id:"outlined-basic",label:"Enter your email address",type:"email",variant:"outlined",inputRef:u,error:j,helperText:j?"Incorrect email type":"",onChange:function(e){var t=e.target.value;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?O(!1):O(!0)}}),Object(nt.jsx)("br",{}),Object(nt.jsx)(_t.a,{id:"outlined-basic",label:"Your password",type:"password",variant:"outlined",inputRef:l})]})}),Object(nt.jsx)(Je.a,{className:e.submitButton,variant:"contained",color:"primary",onClick:function(){var e={email:u.current.value,password:l.current.value};t(function(e){return{type:p,account:e}}(e))},disabled:j,children:"Submit"}),Object(nt.jsxs)(mt.a,{className:e.subTitle2,variant:"subtitle1",gutterBottom:!0,children:[Object(nt.jsx)(s.b,{to:"/signUp",children:"Create new account"}),", or connect with application"]}),Object(nt.jsx)(Je.a,{className:e.gitHubButton,variant:"contained",color:"default",startIcon:Object(nt.jsx)(Ut.a,{}),children:"Github"}),Object(nt.jsx)(Je.a,{className:e.linkedInButton,variant:"contained",startIcon:Object(nt.jsx)(Ft.a,{}),children:"LinkedIn"}),Object(nt.jsx)(Je.a,{className:e.facebookButton,variant:"contained",color:"primary",startIcon:Object(nt.jsx)(Pt.a,{}),children:"Facebook"})]})})},zt=Object(Ze.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},boxSignUp:{width:"50%",padding:"40px 100px",border:"1px solid #eaeaea",boxShadow:"0 25px 50px -12px #b2b2b2",borderRadius:"5px"},title:{marginBottom:"20px"},subTitle1:{fontWeight:"bold",fontSize:"18px",margin:"25px 0"},subTitle2:{color:"rgb(97, 97, 97)",fontSize:"14px","& a":{textDecoration:"none"}},submitButton:{fontWeight:"bold",margin:"15px 0px 10px 0px"},signInForm:{"& > div":{margin:"5px 0",width:"100%"}}}}));var Wt=[{path:"/signIn",component:qt,exact:!0},{path:"/signUp",component:function(){var e=zt(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.user.type})),a=Object(o.c)((function(e){return e.user})).isAuthenticated,c=Object(r.useRef)(),i=Object(r.useRef)(),u=Object(r.useRef)(),l=Object(Ke.g)(),b=Object(Ke.h)();return Object(r.useEffect)((function(){n&&t(Ye())}),[n,t]),Object(r.useEffect)((function(){a&&(b.state?l.push(b.state):l.push("/"))}),[a,l,b.state]),console.log("SignUp:"),Object(nt.jsx)(ut.a,{className:e.root,children:Object(nt.jsxs)(ut.a,{className:e.boxSignUp,maxWidth:"sm",children:[Object(nt.jsx)(ut.a,{className:e.title,children:Object(nt.jsx)("img",{src:He,alt:"hi",height:"50px",width:"200px"})}),Object(nt.jsx)(mt.a,{className:e.subTitle1,variant:"subtitle1",gutterBottom:!0,children:"Create an account"}),Object(nt.jsx)(mt.a,{className:e.subTitle2,variant:"subtitle2",gutterBottom:!0,children:"Register new your account"}),Object(nt.jsx)("form",{children:Object(nt.jsxs)(ut.a,{className:e.signInForm,children:[Object(nt.jsx)(_t.a,{type:"text",id:"outlined-basic",label:"Enter your name",variant:"outlined",inputRef:c}),Object(nt.jsx)(_t.a,{type:"email",id:"outlined-basic",label:"Enter your email",variant:"outlined",inputRef:i}),Object(nt.jsx)(_t.a,{type:"password",id:"outlined-basic",label:"Enter password",variant:"outlined",inputRef:u})]})}),Object(nt.jsx)(Je.a,{className:e.submitButton,variant:"contained",color:"primary",onClick:function(){var e={name:c.current.value,email:i.current.value,password:u.current.value};t({type:g,account:e})},children:"Submit"}),Object(nt.jsx)(mt.a,{className:e.subTitle2,variant:"subtitle1",gutterBottom:!0,children:Object(nt.jsx)(s.b,{to:"/signIn",children:"I already had an account"})})]})})}}],Gt=[{path:"/userProfile",component:Nt},{path:"/",component:wt,exact:!0},{path:"*",component:Et}];var Kt=function(e){return Object(nt.jsx)("div",{children:Object(nt.jsx)("main",{style:{minHeight:"100vh",backgroundColor:$e},children:e.children})})};var Mt=function(e){var t=e.component,n=e.path,r=(e.exact,Object(Ve.a)(e,["component","path","exact"])),a=Object(o.c)((function(e){return e.user})).isAuthenticated;return console.log("PrivateRoute"),Object(nt.jsx)(Ke.b,Object(Se.a)(Object(Se.a)({},r),{},{exact:!0,render:function(e){return a?Object(nt.jsx)(t,Object(Se.a)({},e)):Object(nt.jsx)(Ke.a,{to:{pathname:"/signIn",state:n}})}}))};var Ht=function(){return Object(nt.jsx)(Kt,{children:Object(nt.jsxs)(Ke.d,{children:[Wt.map((function(e,t){return Object(nt.jsx)(Ke.b,Object(Se.a)({},e),t)})),Gt.map((function(e,t){return Object(nt.jsx)(Mt,Object(Se.a)({},e),t)}))]})})},Vt=n(57),Yt=(n(155),function(e){var t=e.includes("SUCCEEDED"),n=function(e){switch(e){case Y:return"Successfully fetch all tasks";case J:return"Failed fetch task";case re:return"Successfully adding new task";case ae:return"Failed adding new task";case $:return"Successfully removing new task";case Q:return"Failed removing new task";case ee:return"Successfully updating new task";case te:return"Failed updating new task";case O:return"Successfully sign in";case x:return"Failed sign in";case v:return"Successfully sign up";case k:return"Failed sign up";case h:return"Successfully sign out";case m:return"Failed sign out";case S:return"Successfully updating";case w:return"Failed updating";default:return"Nothing"}}(e);return t?Vt.c.success(n):Vt.c.error(n)});var Jt=function(){var e=Object(o.c)((function(e){return e.user.type})),t=Object(o.c)((function(e){return e.todoList.type})),n=e||t,a={position:"top-right",autoClose:500,transition:Vt.a,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0};return Object(r.useEffect)((function(){n&&Yt(n)}),[n]),console.log("MyToast"),Object(nt.jsx)(Vt.b,Object(Se.a)({},a))},Zt=n(202);var $t=function(){var e=Object(o.c)((function(e){return e.user.request})),t=Object(o.c)((function(e){return e.todoList.request})),n=e||t;console.log("Loading");var r={wrapperLoading:{position:"absolute",left:0,top:0,backgroundColor:"rgba(97, 97, 97, 0.1)",padding:"45vh 45vw",height:"100vh",width:"100vw",boxSizing:"border-box"},iconLoading:{height:100,width:100}};return Object(nt.jsx)("div",{children:n&&Object(nt.jsxs)("div",{style:r.wrapperLoading,children:[" ",Object(nt.jsx)("div",{style:r.iconLoading,children:Object(nt.jsx)(Zt.a,{})})]})})},Qt=Object(Ze.a)({root:{margin:0,"& button":{margin:"10px 10px 10px 0px"}},formDialog:{"& > div":{marginBottom:10}},title:{fontWeight:"bold",color:et,fontSize:20}}),Xt=n(205),en=n(203),tn=n(204);var nn=function(){var e=Qt(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.user})).token,a=Object(r.useRef)(),c=function(){t(dt())};return Object(nt.jsxs)(ut.a,{className:e.root,children:[Object(nt.jsx)(en.a,{id:"customized-dialog-title",onClose:c,children:Object(nt.jsx)(mt.a,{className:e.title,children:"ADDING"})}),Object(nt.jsx)(tn.a,{dividers:!0,children:Object(nt.jsx)("form",{className:e.formDialog,children:Object(nt.jsx)(_t.a,{id:"outlined-basic",label:"Description of task",type:"text",variant:"outlined",inputRef:a,fullWidth:!0})})}),Object(nt.jsxs)(Xt.a,{children:[Object(nt.jsx)(Je.a,{onClick:function(){c()},color:"secondary",variant:"outlined",children:"Cancel"}),Object(nt.jsx)(Je.a,{onClick:function(){var e={description:a.current.value};t(function(e,t){return{type:ne,bodyTask:e,token:t}}(e,n)),c()},color:"primary",variant:"outlined",children:"Save"})]})]})};var rn=function(){var e=Qt(),t=Object(o.b)(),n=Object(o.c)((function(e){return e.user})).token,a=Object(o.c)((function(e){return e.dialog.state})),c=a._id,i=a.description,s=Object(r.useRef)(),u=function(){t(dt())};return Object(nt.jsxs)(ut.a,{className:e.root,children:[Object(nt.jsx)(en.a,{id:"customized-dialog-title",onClose:u,children:Object(nt.jsx)(mt.a,{className:e.title,children:"EDIT"})}),Object(nt.jsx)(tn.a,{dividers:!0,children:Object(nt.jsx)("form",{className:e.formDialog,children:Object(nt.jsx)(_t.a,{id:"outlined-basic",label:"Description of task",type:"text",variant:"outlined",fullWidth:!0,defaultValue:i,inputRef:s})})}),Object(nt.jsxs)(Xt.a,{children:[Object(nt.jsx)(Je.a,{onClick:function(){u()},color:"secondary",variant:"outlined",children:"Cancel"}),Object(nt.jsx)(Je.a,{onClick:function(){var e={description:s.current.value};t(function(e,t,n){return{type:X,idTask:e,taskUpdate:t,token:n}}(c,e,n)),u()},color:"primary",variant:"outlined",children:"Save"})]})]})},an=n(209);var cn=function(){var e=Object(o.c)((function(e){return e.dialog})),t=e.kindOfDialog,n=e.isOpen,r=Object(o.b)();return console.log("DialogControl"),Object(nt.jsx)("div",{children:Object(nt.jsx)(an.a,{onClose:function(){r(dt())},"aria-labelledby":"customized-dialog-title",open:n,fullWidth:!0,maxWidth:"md",children:function(){switch(t){case _e:return Object(nt.jsx)(nn,{});case Ne:return Object(nt.jsx)(rn,{});default:return null}}()})})};var sn=function(){return Object(nt.jsx)("div",{children:Object(nt.jsx)(o.a,{store:ze,children:Object(nt.jsxs)(Ge.PersistGate,{loading:Object(nt.jsx)($t,{}),persistor:We,children:[Object(nt.jsx)(Ht,{}),Object(nt.jsx)(Jt,{}),Object(nt.jsx)($t,{}),Object(nt.jsx)(cn,{})]})})})},on=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,213)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(nt.jsx)(a.a.StrictMode,{children:Object(nt.jsx)(s.a,{children:Object(nt.jsx)(sn,{})})}),document.getElementById("root")),on()}},[[156,1,2]]]);
//# sourceMappingURL=main.187ed983.chunk.js.map