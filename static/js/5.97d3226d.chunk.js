(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{302:function(n,e,r){"use strict";r.d(e,"a",(function(){return o}));var t=r(103);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var r=[],t=!0,o=!1,a=void 0;try{for(var s,u=n[Symbol.iterator]();!(t=(s=u.next()).done)&&(r.push(s.value),!e||r.length!==e);t=!0);}catch(i){o=!0,a=i}finally{try{t||null==u.return||u.return()}finally{if(o)throw a}}return r}}(n,e)||Object(t.a)(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},319:function(n,e,r){n.exports={paginatorWrapper:"Paginator_paginatorWrapper__1ERZE",pagination:"Paginator_pagination__1R38m",paginationActive:"Paginator_paginationActive__2JlhE",paginatorArrow:"Paginator_paginatorArrow__2pd6W"}},320:function(n,e,r){n.exports={wrapper:"Users_wrapper__3fVek",avatarContainer:"Users_avatarContainer__1Dw5_",userInfo:"Users_userInfo__2yLgi",userName:"Users_userName__3j0cK",userStatus:"Users_userStatus__6Nprf",followButtonWrap:"Users_followButtonWrap__rwnRJ",button:"Users_button__2CZCk",follow:"Users_follow__1Ig55",unfollow:"Users_unfollow__32cxe",pagination:"Users_pagination__1-Bzl",paginationActive:"Users_paginationActive__2b-p7"}},323:function(n,e,r){"use strict";r.r(e);var t=r(39),o=r(40),a=r(42),s=r(41),u=r(0),i=r.n(u),c=r(16),l=r(46);function p(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var f=r(302),g=r(319),h=r.n(g),d=r(1),b=function(n){for(var e=n.totalItems,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,a=n.portionSize,s=void 0===a?10:a,i=Math.ceil(e/r),c=[],l=1;l<=i;l++)c.push(l);var p=Math.ceil(i/s),g=Object(u.useState)(1),b=Object(f.a)(g,2),j=b[0],v=b[1],w=(j-1)*s+1,_=j*s;return Object(d.jsxs)("div",{className:h.a.paginatorWrapper,children:[j>1&&Object(d.jsx)("button",{className:h.a.paginatorArrow,onClick:function(){return v(j-1)},children:"< "}),c.filter((function(n){return n>=w&&n<=_})).map((function(n){return Object(d.jsx)("div",{onClick:function(e){return o(n)},className:t===n?[h.a.pagination,h.a.paginationActive].join(" "):h.a.pagination,children:n},n)})),p>j&&Object(d.jsx)("button",{onClick:function(){return v(j+1)},className:h.a.paginatorArrow,children:" >"})]})},j=r(320),v=r.n(j),w=r(95),_=r(17),m=function(n){var e=n.user,r=n.fetchingProcess,t=n.unFollowThunk,o=n.followThunk,a=n.isAuth;return Object(d.jsxs)("div",{className:v.a.wrapper,children:[Object(d.jsx)(_.b,{to:"/profile/"+e.id,children:Object(d.jsx)("div",{className:v.a.avatarContainer,children:Object(d.jsx)("img",{src:e.photos.small?e.photos.small:w.a,alt:"user avatar"})})}),Object(d.jsxs)("div",{className:v.a.userInfo,children:[Object(d.jsx)("div",{className:v.a.userName,children:e.name}),Object(d.jsx)("div",{className:v.a.userStatus,children:e.status}),a?Object(d.jsx)("div",{className:v.a.followButtonWrap,children:e.followed?Object(d.jsx)("button",{disabled:r.some((function(n){return n===e.id})),className:[v.a.button,v.a.unfollow].join(" "),onClick:function(){return t(e.id)},children:"Unfollow"}):Object(d.jsx)("button",{disabled:r.some((function(n){return n===e.id})),className:[v.a.button,v.a.follow].join(" "),onClick:function(){return o(e.id)},children:"Follow"})}):null]})]},e.id)},P=function(n){var e=n.totalUsersCount,r=n.pageSize,t=n.currentPage,o=n.onPageChanged,a=n.users,s=n.unFollowThunk,u=n.followThunk,i=n.fetchingProcess,c=n.isAuth;p(n,["totalUsersCount","pageSize","currentPage","onPageChanged","users","unFollowThunk","followThunk","fetchingProcess","isAuth"]);return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{totalItems:e,pageSize:r,currentPage:t,onPageChanged:o}),a.map((function(n){return Object(d.jsx)(m,{user:n,unFollowThunk:s,followThunk:u,fetchingProcess:i,isAuth:c},n.id)}))]})},y=r(30);function O(n,e){return n===e}function k(n,e,r){if(null===e||null===r||e.length!==r.length)return!1;for(var t=e.length,o=0;o<t;o++)if(!n(e[o],r[o]))return!1;return!0}function x(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var r=e.map((function(n){return typeof n})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+r+"]")}return e}var C=function(n){for(var e=arguments.length,r=Array(e>1?e-1:0),t=1;t<e;t++)r[t-1]=arguments[t];return function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];var a=0,s=t.pop(),u=x(t),i=n.apply(void 0,[function(){return a++,s.apply(null,arguments)}].concat(r)),c=n((function(){for(var n=[],e=u.length,r=0;r<e;r++)n.push(u[r].apply(null,arguments));return i.apply(null,n)}));return c.resultFunc=s,c.dependencies=u,c.recomputations=function(){return a},c.resetRecomputations=function(){return a=0},c}}((function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,r=null,t=null;return function(){return k(e,r,arguments)||(t=n.apply(null,arguments)),r=arguments,t}}));var A=function(n){return n.usersPage.inProgress},S=function(n){return n.usersPage.totalUsersCount},U=function(n){return n.usersPage.pageSize},T=function(n){return n.usersPage.currentPage},N=C((function(n){return n.usersPage.users}),(function(n){return n})),z=function(n){return n.usersPage.fetchingProcess},F=function(n){return n.auth.isAuth},I=function(n){Object(a.a)(r,n);var e=Object(s.a)(r);function r(){var n;Object(t.a)(this,r);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(n=e.call.apply(e,[this].concat(a))).onPageChanged=function(e){n.props.getUsersThunk(e,n.props.pageSize)},n.render=function(){return Object(d.jsxs)(d.Fragment,{children:[n.props.inProgress?Object(d.jsx)(y.a,{}):null,Object(d.jsx)(P,{totalUsersCount:n.props.totalUsersCount,pageSize:n.props.pageSize,onPageChanged:n.onPageChanged,currentPage:n.props.currentPage,users:n.props.users,fetchingProcess:n.props.fetchingProcess,unFollowThunk:n.props.unFollowThunk,followThunk:n.props.followThunk,setCurrentPage:n.props.setCurrentPage,isAuth:n.props.isAuth})]})},n}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}}]),r}(i.a.Component),W={setCurrentPage:l.e,changefetchingProcess:l.a,getUsersThunk:l.d,unFollowThunk:l.g,followThunk:l.c},E=Object(c.b)((function(n){return{totalUsersCount:S(n),pageSize:U(n),currentPage:T(n),users:N(n),fetchingProcess:z(n),inProgress:A(n),isAuth:F(n)}}),W)(I);e.default=E}}]);
//# sourceMappingURL=5.97d3226d.chunk.js.map