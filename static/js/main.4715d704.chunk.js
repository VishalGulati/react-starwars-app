(this["webpackJsonpreact-starwars-app"]=this["webpackJsonpreact-starwars-app"]||[]).push([[0],{127:function(e,t,n){e.exports=n(214)},137:function(e,t,n){},138:function(e,t,n){},211:function(e,t,n){},213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(13),o=n.n(c),s=n(28),i=n(29),l=n(32),u=n(30),p=n(33),m=n(96),h=n(54),f=n(16),d=n.n(f),g=n(23),b=n(126),v=n(24),w=n(122),O=n.n(w),E=n(73),j="LOGIN",y="LOGIN_SUCCESS",k="LOGIN_FAIL",x=function(e){var t=e.username,n=e.password;return new Promise((function(e,r){t.toLowerCase().indexOf("luke")>=0&&"19bby"===n.toLowerCase()?e({status:200,data:"authenticated"}):r({status:400,error:{code:400,message:"user not found!"}})}))},C=function(e){return t="".concat("https://swapi.co/api").concat("/planets/","?search=").concat(e),fetch(t,n).then((function(e){return e.status>=200&&e.status<300?e.json().then((function(e){return{payload:e}})).catch((function(e){return{error:e}})):e.text().then((function(e){return{error:e}}))})).then((function(e){if(e.payload&&!e.error)return e.payload;var t={message:e.error,code:"000"};throw new Error(JSON.stringify(t))})).catch((function(e){var t={message:e.message,code:"000"};throw new Error(JSON.stringify(t))}));var t,n};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=d.a.mark(W),P=d.a.mark(_),D={isLoading:!1,data:null,error:null},R=function(e){var t=e.username,n=e.password;return{type:j,username:t,password:n}},A=function(e){return{type:y,data:e}},I=function(e){return{type:k,error:e}};function W(e){var t,n,r,a,c;return d.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.username,n=e.password,o.next=4,Object(v.b)(x,{username:t,password:n});case 4:return r=o.sent,o.next=7,Object(v.c)(A(r));case 7:o.next=15;break;case 9:return o.prev=9,o.t0=o.catch(0),a=o.t0.code,c=o.t0.message,o.next=15,Object(v.c)(I({code:a,message:c}));case 15:case"end":return o.stop()}}),L,null,[[0,9]])}function _(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(j,W);case 2:case"end":return e.stop()}}),P)}var U="SEARCH",F="SEARCH_SUCCESS",G="SEARCH_FAIL";function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(n,!0).forEach((function(t){Object(E.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=d.a.mark(K),B=d.a.mark(M),V={isLoading:!1,searchResults:null,error:null},z=function(e){return{type:U,searchTerm:e}},$=function(e){return{type:F,data:e}},q=function(e){return{type:G,error:e}};function K(e){var t,n,r,a;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,t=e.searchTerm,c.next=4,Object(v.b)(C,t);case 4:return n=c.sent,c.next=7,Object(v.c)($(n.results));case 7:c.next=15;break;case 9:return c.prev=9,c.t0=c.catch(0),r=c.t0.code,a=c.t0.message,c.next=15,Object(v.c)(q({code:r,message:a}));case 15:case"end":return c.stop()}}),H,null,[[0,9]])}function M(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.d)(U,K);case 2:case"end":return e.stop()}}),B)}var Q=Object(b.a)(),X=Object(g.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return S({},e,{isLoading:!0});case y:return S({},e,{isLoading:!1,data:t.data});case k:return S({},e,{isLoading:!1,error:t.error});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return T({},e,{isLoading:!0});case F:return T({},e,{isLoading:!1,searchResults:t.data});case G:return T({},e,{isLoading:!1,error:t.error});default:return e}}}),Y=[];Y.push(O.a),Y.push(Q);var Z=Object(g.e)(X,g.a.apply(void 0,Y));Q.run(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([_(),M()]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));var ee=Z,te=(n(137),"login"),ne="searchDetails",re=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).logout=function(){window.location.href="/".concat(te)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("header",{className:"app-header"},a.a.createElement("span",null,"Star Wars"),a.a.createElement("div",{className:"pull-right app-header__logout"},a.a.createElement("span",{onClick:this.logout},"Logout")))}}]),t}(r.Component),ae=(n(138),function(){return a.a.createElement("footer",{className:"app-footer"},"Designed and Coded by Vishal Gulati (",a.a.createElement("a",{id:"footer-link",target:"_blank",rel:"noopener noreferrer",href:"https://www.vishalgulati.com"},"www.vishalgulati.com"),")")}),ce=n(42),oe=n(15),se=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).getValidationState=function(){var e=n.state,t=e.username,r=e.password;return t&&r?"success":"error"},n.handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.userLogin=function(e){var t=n.state,r=t.username,a=t.password;n.props.loginAction({username:r,password:a}),e.preventDefault()},n.state={username:"",password:""},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.login!==this.props.login){var t=e.login,n=t.isLoading,r=t.error;n||r||this.props.history.push("/".concat("search"))}}},{key:"render",value:function(){return a.a.createElement("div",{className:"login container"},a.a.createElement("h1",{className:"text-center",style:{marginTop:"10px"}}," Login "),a.a.createElement("form",{className:"form-horizontal"},a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"email"},"Email:"),a.a.createElement("div",{className:"col-sm-10"},a.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",name:"email",onChange:this.handleUsernameChange}))),a.a.createElement("div",{className:"form-group"},a.a.createElement("label",{className:"control-label col-sm-2",htmlFor:"pwd"},"Password:"),a.a.createElement(oe.b,{sm:10},a.a.createElement("input",{type:"password",className:"form-control",id:"pwd",placeholder:"Enter password",name:"pwd",onChange:this.handlePasswordChange}))),a.a.createElement("div",{className:"form-group"},a.a.createElement(oe.b,{smOffset:2,sm:10},a.a.createElement(oe.a,{bsStyle:"primary",type:"submit",onClick:this.userLogin},"Login")))))}}]),t}(r.Component),ie=Object(h.b)((function(e){return{login:e.login}}),(function(e){return Object(g.b)({loginAction:R},e)}))(se),le=n(124),ue=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleSearch=function(){var e=Object(le.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.searchAction(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.showSearchDetails=function(e){n.props.history.push({pathname:"/".concat(ne),params:e})},n.state={searchTerm:"",searchResult:[]},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.search!==this.props.search){var t=e.search;t.isLoading,t.error}}},{key:"render",value:function(){var e=this,t=[];return this.props.searchResults&&(t=this.props.searchResults.map((function(t,n){return a.a.createElement(oe.i,{onClick:function(){return e.showSearchDetails(t)},key:n},a.a.createElement("span",null,t.name),a.a.createElement("span",{className:"pull-right"},a.a.createElement(oe.f,{glyph:"user"})," ",t.population))}))),a.a.createElement("div",{className:"search"},a.a.createElement(oe.j,{className:"text-center"},"Search"),a.a.createElement(oe.c,null,a.a.createElement(oe.e,{controlId:"formUsername"},a.a.createElement(oe.b,{sm:12},a.a.createElement(oe.g,null,a.a.createElement(oe.d,{type:"text",placeholder:"Enter search here ...",autoComplete:"off",onChange:this.handleSearch}),a.a.createElement(oe.g.Addon,null,a.a.createElement(oe.f,{glyph:"search"})))))),t.length>0&&a.a.createElement(oe.b,{sm:12},a.a.createElement(oe.h,null,t)))}}]),t}(r.Component),pe=Object(h.b)((function(e){return{searchResults:e.search.searchResults}}),(function(e){return Object(g.b)({searchAction:z},e)}))(ue),me=(n(211),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=[];if(this.props.location.params){var t=this.props.location.params;e=Object.keys(t).map((function(e,n){return a.a.createElement("tr",{key:n},a.a.createElement("td",null,e),a.a.createElement("td",null,t[e]))}))}return a.a.createElement("div",null,a.a.createElement("h1",null,"Search Details"),a.a.createElement(oe.k,{striped:!0,bordered:!0,condensed:!0,hover:!0,className:"search-details"},a.a.createElement("tbody",null,e)))}}]),t}(r.Component)),he=[{path:"/",component:ie,exact:!0},{path:"/".concat(te),component:ie},{path:"/".concat("search"),component:pe},{path:"/".concat(ne),component:me}],fe=function(e){return a.a.createElement(ce.a,{path:e.path,exact:e.exact,render:function(t){return a.a.createElement(e.component,Object.assign({},t,{routes:e.routes}))}})},de=function(){return a.a.createElement("main",null,a.a.createElement(ce.c,null,he.map((function(e,t){return a.a.createElement(fe,Object.assign({key:t},e))}))))},ge=(n(213),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(h.a,{store:ee},a.a.createElement("div",{className:"app"},a.a.createElement(re,null),a.a.createElement(de,null),a.a.createElement(ae,null))))}}]),t}(r.Component)),be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ve(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(a.a.createElement(ge,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-starwars-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/react-starwars-app","/service-worker.js");be?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ve(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):ve(e)}))}}()}},[[127,1,2]]]);
//# sourceMappingURL=main.4715d704.chunk.js.map