(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={buttonWrap:"Button_buttonWrap__ljYWk",button:"Button_button__3K7ff"}},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(50),a=n(3),c="ADD-MESSAGE",s={dialogs:[{id:1,message:"First message"},{id:2,message:"Second message v rot kompot ne pishi mne bolshe"},{id:3,message:"Third message"}],people:[{id:1,name:"Marina"},{id:2,name:"Maksim"},{id:3,name:"Dmitry"},{id:4,name:"Pes"}]},o=function(e){return{type:c,message:e.message}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:3,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{dialogs:[].concat(Object(r.a)(e.dialogs),[n])});default:return e}}},13:function(e,t,n){e.exports={wrapper:"CentralMenu_wrapper__2lRlz",wrapperCentral:"CentralMenu_wrapperCentral__1cbPW",leftCentralMenu:"CentralMenu_leftCentralMenu__1a7qE",rightCentralMenu:"CentralMenu_rightCentralMenu__3ILsv",item:"CentralMenu_item__LdXFU",active:"CentralMenu_active__SdYCa"}},142:function(e,t,n){e.exports={wrapper:"LeftColumn_wrapper__2juOt"}},143:function(e,t,n){e.exports={wrap:"Content_wrap__2mTzc"}},145:function(e,t,n){e.exports={footerWrapper:"Footer_footerWrapper__2DS-n",divHeadImg:"Footer_divHeadImg__htw7-",headImg:"Footer_headImg__33l9X"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o}));var r=n(139),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"0198ea73-ecaa-43b0-9858-5124d6f0a451"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},postFollow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},delFollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},putStatus:function(e){return a.put("profile/status",{status:e})},putPhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multypart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={authMe:function(){return a.get("auth/me")},login:function(e){return a.post("auth/login",{email:e.email,password:e.password,rememberMe:e.rememberMe})},logout:function(){return a.delete("auth/login")}}},175:function(e,t,n){},19:function(e,t,n){e.exports={textAreaWrap:"FormsControl_textAreaWrap__Nw_un",textArea:"FormsControl_textArea__38Chg",input:"FormsControl_input__uoHMi",error:"FormsControl_error__3bpNl",errorMessage:"FormsControl_errorMessage__3a9MT",checkbox:"FormsControl_checkbox__1-UKd"}},258:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},27:function(e,t,n){"use strict";n.d(t,"e",(function(){return j})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m}));var r=n(7),a=n.n(r),c=n(12),s=n(3),o=n(15),u=n(43),i=n(35),l="SET_USER",p="LOG_OUT_USER",d={id:null,email:null,login:null,isAuth:!1,inProgress:!1},j=function(e){return{type:l,data:e}},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(t(j(n.data.data)),t(Object(i.d)(n.data.data.id)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.login(e);case 2:0===(r=t.sent).data.resultCode?n(b()):n(Object(u.a)("login",{_error:r.data.messages}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.logout();case 2:0===e.sent.data.resultCode&&(t({type:p}),t(Object(i.b)()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(window.state=e,t.type){case l:return Object(s.a)(Object(s.a)(Object(s.a)({},e),t.data),{},{isAuth:!0});case p:return Object(s.a)({},d);default:return e}}},30:function(e,t,n){"use strict";n(0),n.p;var r=n(99),a=n.n(r),c=n(1);t.a=function(){return Object(c.jsx)("div",{className:a.a.wrapper,children:Object(c.jsx)("div",{className:a.a.preloader,children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsx)("div",{})})})})})})})}},301:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,321)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},a=n(0),c=n.n(a),s=n(70),o=n.n(s),u=(n(175),n(16)),i=n(17),l=n(10),p=n(35),d=n(113),j={},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return e},f=n(46),m=n(27),h=n(7),O=n.n(h),v=n(12),g=n(3),x="INIT_APP",A={initApp:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(g.a)(Object(g.a)({},e),{},{initApp:!0});default:return e}},N=n(140),M=n(137),_=Object(l.c)({postsPage:p.c,messagesPage:d.b,sideBar:b,usersPage:f.b,auth:m.b,form:M.a,init:w}),k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,C=Object(l.e)(_,k(Object(l.a)(N.a)));window.store=C;var y=C,S=n(39),P=n(40),F=n(42),T=n(41),G=(n(258),n(75)),B=n.n(G),W=n(1),U=function(){return Object(W.jsx)("div",{className:B.a.header,children:Object(W.jsx)("div",{className:B.a.divHeadImg,children:Object(W.jsx)("img",{className:B.a.headImg,src:"https://i.pinimg.com/originals/c4/9a/fc/c49afc3e6634c8e2d8161618b57aa122.jpg",alt:""})})})},Y=n(142),D=n.n(Y),Z=n(37),R=n.n(Z),I=function(e){var t=function(e){return Object(W.jsxs)("div",{className:R.a.loginWrap,children:[Object(W.jsxs)("div",{className:R.a.login,children:["Hello, ",e.login]}),Object(W.jsx)("button",{onClick:e.logout,className:R.a.logoutButton,children:" Logout "})]})};return Object(W.jsx)("div",{className:R.a.wrap,children:Object(W.jsx)("div",{className:R.a.items,children:e.auth.isAuth?Object(W.jsx)(t,{login:e.auth.login,logout:e.logout}):Object(W.jsx)(i.b,{activeClassName:R.a.active,to:"/login",children:"Login"})})})},E=function(e){Object(F.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(S.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).logout=function(){e.props.logoutThunk()},e}return Object(P.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(W.jsx)(I,Object(g.a)(Object(g.a)({},this.props),{},{logout:this.logout}))}}]),n}(c.a.Component),L=Object(u.b)((function(e){return{auth:e.auth}}),{setAuthUser:m.e,logoutThunk:m.d})(E),H=n(51),Q=n.n(H),z=n(95),q=n.p+"static/media/banner-small.4350b9d2.jpg",K=n(30),V=function(e){return Object(W.jsxs)("div",{className:Q.a.divAvatar,children:[e.inProgress?Object(W.jsx)(K.a,{}):null,Object(W.jsx)("div",{className:Q.a.backAvatar,children:"/profile"==e.location.pathname?Object(W.jsx)("img",{className:Q.a.avatar,alt:"avatar",src:e.photo?e.photo:z.a}):e.photo?Object(W.jsx)("img",{src:e.photo,alt:"avatar"}):Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)("img",{className:Q.a.miniBanner,src:q,alt:""}),Object(W.jsx)("img",{className:Q.a.miniAvatar,src:z.a,alt:""})]})})]})},J=n(124),X=Object(l.d)(Object(u.b)((function(e){return{photo:e.postsPage.user.photos.large,inProgress:e.usersPage.inProgress}}),{savePhoto:p.f}),J.a)(V),$=function(){return Object(W.jsxs)("div",{className:D.a.wrapper,children:[Object(W.jsx)(X,{}),Object(W.jsx)(L,{})]})},ee=n(13),te=n.n(ee),ne=function(){return Object(W.jsx)("div",{className:te.a.wrapper,children:Object(W.jsxs)("div",{className:te.a.wrapperCentral,children:[Object(W.jsx)("div",{className:te.a.leftCentralMenu}),Object(W.jsxs)("div",{className:te.a.rightCentralMenu,children:[Object(W.jsx)("div",{className:te.a.item,children:Object(W.jsx)(i.b,{activeClassName:te.a.active,to:"/profile",children:"Profile"})}),Object(W.jsx)("div",{className:te.a.item,children:Object(W.jsx)(i.b,{activeClassName:te.a.active,to:"/dialogs",children:"Messages"})}),Object(W.jsx)("div",{className:te.a.item,children:Object(W.jsx)(i.b,{activeClassName:te.a.active,to:"/users",children:"Users"})}),Object(W.jsx)("div",{className:te.a.item,children:Object(W.jsx)(i.b,{activeClassName:te.a.active,to:"/news",children:"News"})}),Object(W.jsx)("div",{className:te.a.item,children:Object(W.jsx)(i.b,{activeClassName:te.a.active,to:"/music",children:"Music"})}),Object(W.jsx)("div",{className:te.a.item,children:Object(W.jsx)(i.b,{activeClassName:te.a.active,to:"/settings",children:"Settings"})})]})]})})},re=n(143),ae=n.n(re),ce=(n(261),function(){return Object(W.jsx)("div",{children:"News"})}),se=(n(262),function(){return Object(W.jsx)("div",{children:"Music"})}),oe=(n(263),function(){return Object(W.jsx)("div",{children:Object(W.jsx)(K.a,{})})}),ue=n(11),ie=n(135),le=n(136),pe=n(71),de=n(68),je=n(38),be=n.n(je),fe=n(100),me=n.n(fe),he=function(e){return Object(W.jsx)("div",{className:me.a.buttonWrap,children:Object(W.jsx)("button",{className:me.a.button,children:"Login"})})},Oe=function(e){var t=e.handleSubmit,n=e.error;return Object(W.jsxs)("form",{onSubmit:t,children:[Object(W.jsx)("div",{children:Object(W.jsx)(ie.a,{placeholder:"email",type:"email",name:"email",validate:[pe.c,pe.b],component:de.c})}),Object(W.jsx)("div",{children:Object(W.jsx)(ie.a,{type:"password",name:"password",placeholder:"password",validate:[pe.c],component:de.c})}),Object(W.jsx)(ie.a,{type:"hidden",name:"rememberMe",value:"1",component:de.c}),n&&Object(W.jsx)("div",{className:be.a.errorWrapper,children:Object(W.jsx)("div",{className:be.a.errorField,children:n})}),Object(W.jsx)("div",{className:be.a.buttonWrapper,children:Object(W.jsx)(he,{})})]})};Oe=Object(le.a)({form:"login"})(Oe);var ve=function(e){return Object(W.jsxs)("div",{className:be.a.loginWrap,children:[Object(W.jsx)("div",{className:be.a.title,children:"Login Page"}),Object(W.jsxs)("div",{className:be.a.test,children:[Object(W.jsx)("p",{children:"Test account "}),Object(W.jsx)("p",{children:"Email: paliev1@mail.ru"}),Object(W.jsx)("p",{children:"Password: testtest"})]}),Object(W.jsx)(Oe,{onSubmit:e.onSubmit})]})},ge=n(144),xe=function(e){Object(F.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(S.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.loginThunk(t)},e}return Object(P.a)(n,[{key:"render",value:function(){return this.props.auth?Object(W.jsx)(ge.a,{to:"/profile"}):Object(W.jsx)(ve,{onSubmit:this.onSubmit})}}]),n}(c.a.Component),Ae=Object(u.b)((function(e){return{status:e.postsPage.status,auth:e.auth.isAuth}}),{loginThunk:m.c})(xe),we=c.a.lazy((function(){return n.e(4).then(n.bind(null,324))})),Ne=c.a.lazy((function(){return n.e(3).then(n.bind(null,322))})),Me=c.a.lazy((function(){return n.e(5).then(n.bind(null,323))})),_e=function(e){return Object(W.jsx)("div",{className:ae.a.wrap,children:Object(W.jsxs)(c.a.Suspense,{fallback:Object(W.jsx)(K.a,{}),children:[Object(W.jsx)(ue.b,{path:"/profile/:userId?",render:function(){return Object(W.jsx)(Ne,{})}}),Object(W.jsx)(ue.b,{path:"/dialogs",render:function(){return Object(W.jsx)(we,{})}}),Object(W.jsx)(ue.b,{path:"/users",render:function(){return Object(W.jsx)(Me,{})}}),Object(W.jsx)(ue.b,{path:"/news",component:ce}),Object(W.jsx)(ue.b,{path:"/music",component:se}),Object(W.jsx)(ue.b,{path:"/settings",component:oe}),Object(W.jsx)(ue.b,{path:"/login",render:function(){return Object(W.jsx)(Ae,{})}})]})})},ke=n(145),Ce=n.n(ke),ye=function(){return Object(W.jsx)("div",{className:Ce.a.footerWrapper,children:"footer"})},Se=function(e){Object(F.a)(n,e);var t=Object(T.a)(n);function n(){return Object(S.a)(this,n),t.apply(this,arguments)}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.props.initAppThunk()}},{key:"render",value:function(){return this.props.initApp?Object(W.jsxs)("div",{className:"app-wrapper",children:[Object(W.jsx)(U,{}),Object(W.jsx)(ne,{}),Object(W.jsx)("div",{className:"middle-wrapper",children:Object(W.jsxs)("div",{className:"middle",children:[Object(W.jsx)($,{}),Object(W.jsx)(_e,{})]})}),Object(W.jsx)(ye,{})]}):Object(W.jsx)(K.a,{})}}]),n}(c.a.Component),Pe=Object(u.b)((function(e){return{initApp:e.init.initApp}}),{initAppThunk:function(){return function(){var e=Object(v.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t(Object(m.a)());case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:t({type:x});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()}})(Se),Fe=function(){return Object(W.jsx)(i.a,{basename:"/SocialNetwork",children:Object(W.jsx)(u.a,{store:y,children:Object(W.jsx)(Pe,{})})})};o.a.render(Object(W.jsx)(Fe,{}),document.getElementById("root")),r()},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"h",(function(){return A})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return N}));var r=n(7),a=n.n(r),c=n(12),s=n(50),o=n(3),u=n(15),i=n(46),l=n(43),p="ADD_POST",d="SET_USER_PROFILE",j="SET_STATUS",b="SET_PHOTO",f="CLEAR_USER_INFO",m={posts:[{id:1,post:"Hi. I glad to see you in my home page. I hope that you feel yourself good and your mood want to dance",like:0},{id:2,post:"It's my first post",like:0}],inProgress:!1,user:{aboutMe:null,contacts:{facebook:null,website:null,vk:null,twitter:null,instagram:null,youtube:null,github:null,mainLink:null},fullName:null,lookingForAJob:!1,lookingForAJobDescription:null,photos:{small:null,large:null},userId:null}},h=function(e){return{type:p,post:e}},O=function(e){return{type:j,text:e}},v=function(){return{type:f}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,user:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.putStatus(e);case 2:0==t.sent.data.resultCode&&n(O(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Object(i.f)(!0),t.prev=1,t.next=4,u.b.putPhoto(e);case 4:r=t.sent,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),Object(i.f)(!1);case 11:0==r.data.resultCode&&n((a=r.data.data.photos,{type:b,photo:a})),Object(i.f)(!1);case 13:case"end":return t.stop()}var a}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.id,t.prev=1,t.next=4,u.b.saveProfile(e);case 4:s=t.sent,t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0),s.data.resultCode&&(s.data.resultCode=1,s.data.messages=["something goes wrong"]);case 11:if(0!==s.data.resultCode){t.next=15;break}n(g(c)),t.next=17;break;case 15:return n(Object(l.a)("editProfile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 17:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:var n={id:3,post:t.post,like:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case d:return Object(o.a)(Object(o.a)({},e),{},{user:t.user});case j:return Object(o.a)(Object(o.a)({},e),{},{status:t.text});case b:return Object(o.a)(Object(o.a)({},e),{},{user:Object(o.a)(Object(o.a)({},e.user),{},{photos:t.photo})});case f:return Object(o.a)(Object(o.a)({},e),{},{user:Object(o.a)({},m.user)});default:return e}}},37:function(e,t,n){e.exports={wrap:"NavMenu_wrap__2RhFN",items:"NavMenu_items__1qYKU",loginWrap:"NavMenu_loginWrap__2BA87",login:"NavMenu_login__3-5bH",active:"NavMenu_active__1SHZe",logoutButton:"NavMenu_logoutButton__2HwBP"}},38:function(e,t,n){e.exports={loginWrap:"Login_loginWrap__2ANgR",title:"Login_title__2UYzH",newPostWrap:"Login_newPostWrap__UF53R",textAreaWrap:"Login_textAreaWrap__1f2bb",errorWrapper:"Login_errorWrapper__skmeZ",errorField:"Login_errorField__2GV5Q",buttonWrapper:"Login_buttonWrapper__3Up9z"}},46:function(e,t,n){"use strict";n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return g})),n.d(t,"a",(function(){return x})),n.d(t,"d",(function(){return A})),n.d(t,"g",(function(){return N})),n.d(t,"c",(function(){return M}));var r=n(7),a=n.n(r),c=n(12),s=n(50),o=n(3),u=n(15),i="FOLLOW",l="UNFOLLOW",p="SET_USERS",d="SET_CURRENT_PAGE",j="SET_TOTAL_USER_COUNT",b="SHOW_PROGRESS_BAR",f="TOGGLE_FETCHING_PROCESS",m={users:[],pageSize:10,totalUsersCount:0,currentPage:1,inProgress:!1,fetchingProcess:[]},h=function(e){return{type:i,userId:e}},O=function(e){return{type:l,userId:e}},v=function(e){return{type:d,page:e}},g=function(e){return{type:b,show:e}},x=function(e,t){return{type:f,fetchingProcess:e,userId:t}},A=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),n.prev=1,n.next=4,u.c.getUsers(e,t);case 4:c=n.sent,r(g(!1)),r((s=c.items,{type:p,users:s})),r((a=c.totalCount,{type:j,totalUserCount:a})),r(v(e)),n.next=15;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0),r(g(!1));case 15:case"end":return n.stop()}var a,s}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}()},w=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(x(!0,t)),e.prev=1,e.next=4,r(t);case 4:s=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:0==s.resultCode&&n(c(t)),n(x(!1,t));case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),N=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(e,n,u.c.delFollow.bind(u.c),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:w(e,n,u.c.postFollow.bind(u.c),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case l:return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case p:return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case d:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.page});case j:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalUserCount});case b:return Object(o.a)(Object(o.a)({},e),{},{inProgress:t.show});case f:return Object(o.a)(Object(o.a)({},e),{},{fetchingProcess:t.fetchingProcess?[].concat(Object(s.a)(e.fetchingProcess),[t.userId]):e.fetchingProcess.filter((function(e){return e!=t.userId}))});default:return e}}},51:function(e,t,n){e.exports={divAvatar:"Avatar_divAvatar__1rJOc",backAvatar:"Avatar_backAvatar__IZ98z",avatar:"Avatar_avatar__1JcGz",miniBanner:"Avatar_miniBanner__2vSTd",miniAvatar:"Avatar_miniAvatar__3dRHN"}},68:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var r=n(3),a=(n(0),n(19)),c=n.n(a),s=n(1),o=function(e){var t=e.meta.touched&&e.meta.error;return Object(s.jsxs)("div",{className:c.a.textAreaWrap,children:[Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({className:c.a.textArea+" "+(t?c.a.error:"")},e),e.input)),t&&Object(s.jsxs)("span",{className:c.a.errorMessage,children:[e.meta.error," "]})]})},u=function(e){var t=e.meta.touched&&e.meta.error;return Object(s.jsxs)("div",{className:c.a.textAreaWrap,children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({className:c.a.input+" "+(t?c.a.error:"")},e),e.input)),t&&Object(s.jsxs)("span",{className:c.a.errorMessage,children:[e.meta.error," "]})]})},i=function(e){var t=e.meta.touched&&e.meta.error;return Object(s.jsxs)("div",{className:c.a.textAreaWrap,children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({className:c.a.checkbox+" "+(t?c.a.error:"")},e),e.input)),t&&Object(s.jsxs)("span",{className:c.a.errorMessage,children:[e.meta.error," "]})]})},l=function(e){var t=e.meta.touched&&e.meta.error;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({hidden:!0},e),e.input)),t&&Object(s.jsxs)("span",{className:c.a.errorMessage,children:[e.meta.error," "]})]})}},71:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t)return t.length>e?"max length ".concat(e," symbols"):void 0}},c=function(e){if(e.length>30)return"max length 30 symbols"}},75:function(e,t,n){e.exports={header:"Header_header__1T4FC",divHeadImg:"Header_divHeadImg__1U3bU",headImg:"Header_headImg__3ORRH"}},95:function(e,t,n){"use strict";t.a="data:image/png;base64,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"},99:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__2UNeM",preloader:"Preloader_preloader__19vM6","preloader-spin":"Preloader_preloader-spin__1zu9x"}}},[[301,1,2]]]);
//# sourceMappingURL=main.129a243c.chunk.js.map