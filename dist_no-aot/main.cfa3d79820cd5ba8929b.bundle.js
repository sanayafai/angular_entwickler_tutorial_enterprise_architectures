webpackJsonp([2],{0:function(t,e,r){t.exports=r("8m+e")},"2HsC":function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r("WT6e"),o=r("bfOx"),i=r("UWNI"),a=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.router=t,this.authService=e}return t.prototype.canActivate=function(t,e){return!!this.authService.userName||(this.router.navigate(["/home",{needLogin:!0}]),!0)},t=a([Object(n.A)(),c("design:paramtypes",[o.b,i.a])],t)}()},"8m+e":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("WT6e"),o=r("4PVY"),i=r("ItHS"),a=r("OE0E"),c=r("bfOx"),s=r("hIrG"),l=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},f=function(){function t(){}return t=l([Object(n.A)()],t)}(),u=r("Xjw4"),p=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(t){this.config=t}return t.prototype.debug=function(t){this.config.enableDebug&&console.debug(t)},t.prototype.log=function(t){console.log(t)},t=p([Object(n.A)(),d("design:paramtypes",[f])],t)}(),b=(function(){}(),this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}),g=(function(){function t(){}t.prototype.format=function(t){return t},t=b([Object(n.A)()],t)}(),this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}),y=function(){function t(){}return e=t,t.forRoot=function(t){return{ngModule:e,providers:[h,{provide:f,useValue:t}]}},t=e=g([Object(n.I)({imports:[u.b],declarations:[]})],t);var e}(),v=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},m=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(){function t(t){this.logger=t,t.debug("Hallo Welt!"),t.log("Application started")}return t=v([Object(n.n)({selector:"flight-app",template:r("kRDL"),styles:[r("CGiE")]}),m("design:paramtypes",[h])],t)}(),O=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},R=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},w=function(){function t(){}return t=O([Object(n.n)({selector:"basket",template:r("Be3l"),styles:[r("AVw7")]}),R("design:paramtypes",[])],t)}(),_=r("UWNI"),k=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},P=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},x=function(){function t(t,e){this.authService=t,this.route=e,this._userName=""}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){return t.needsLogin=!!e.needLogin})},Object.defineProperty(t.prototype,"userName",{get:function(){return this.authService.userName},enumerable:!0,configurable:!0}),t.prototype.login=function(){this.authService.login()},t.prototype.logout=function(){this.authService.logout()},t=k([Object(n.n)({selector:"app-home",template:r("GBRt"),styles:[r("qiTL")],encapsulation:n._10.None}),P("design:paramtypes",[_.a,c.a])],t)}(),D=r("YnPY"),T=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:x},{path:"flight-booking",loadChildren:"./flight-booking/flight-booking.module#FlightBookingModule",data:{preload:!1}},{path:"basket",component:w,outlet:"aux"},{path:"**",redirectTo:"home"}],L={preloadingStrategy:D.a},A=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},N=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},I=function(){function t(){this.sidebarVisible=!1}return t.prototype.sidebarToggle=function(){var t=document.getElementsByTagName("body")[0];0==this.sidebarVisible?(t.classList.add("nav-open"),this.sidebarVisible=!0):(this.sidebarVisible=!1,t.classList.remove("nav-open"))},t=A([Object(n.n)({selector:"navbar-cmp",template:r("Xa3r")}),N("design:paramtypes",[])],t)}(),S=r("vzPd"),W=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},H=function(){function t(){}return t=W([Object(n.n)({selector:"sidebar-cmp",template:r("S3on")})],t)}(),B=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},G=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},M=function(){function t(){}return t=G([Object(n.I)({imports:[a.a,i.c,s.a.forRoot(),y.forRoot({enableDebug:!0}),S.a.forRoot(),c.c.forRoot(T.slice(),B({},L))],declarations:[j,H,I,x,w],providers:[],bootstrap:[j]})],t)}();r("MQ0p"),r("HUv8"),r("kJrM"),r("o53x"),r("owTz"),r("CGeg"),r("qYgd");Object(n._13)(),Object(o.a)().bootstrapModule(M)},AVw7:function(t,e){t.exports=".gray-bg {\r\n  opacity: 0.4;\r\n  background-color: black;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n}\r\n\r\n.flight-history {\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: fixed;\r\n}\r\n\r\n.flight-history-inside {\r\n  background-color: white;\r\n  margin: 100px auto;\r\n  width: 400px;\r\n}\r\n"},Be3l:function(t,e){t.exports='<div class="gray-bg" style="z-index:99"></div>\r\n\r\n<div class="flight-history" style="z-index:100">\r\n\r\n  <div class="flight-history-inside card">\r\n\r\n    <h2>Your Basket [<a [routerLink]="[\'/\', {outlets: {aux: null}}]">x</a>]</h2>\r\n\r\n    <ul class="list-group">\r\n\r\n      <li class="list-group-item">\r\n        <p>Hamburg - Graz</p>\r\n      </li>\r\n      <li class="list-group-item">\r\n        <p>Graz - Hamburg</p>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n'},CGiE:function(t,e){t.exports=".loading-indicator {\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: black;\r\n  opacity: 0.3;\r\n}\r\n\r\n.spinner {\r\n  width: 40px;\r\n  height: 40px;\r\n\r\n  position: relative;\r\n  margin: 100px auto;\r\n}\r\n\r\n.double-bounce1, .double-bounce2 {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 50%;\r\n  background-color: #FFF;\r\n  opacity: 0.6;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\r\n  animation: sk-bounce 2.0s infinite ease-in-out;\r\n}\r\n\r\n.double-bounce2 {\r\n  -webkit-animation-delay: -1.0s;\r\n  animation-delay: -1.0s;\r\n}\r\n\r\n@-webkit-keyframes sk-bounce {\r\n  0%, 100% {\r\n    -webkit-transform: scale(0.0)\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.0)\r\n  }\r\n}\r\n\r\n@keyframes sk-bounce {\r\n  0%, 100% {\r\n    transform: scale(0.0);\r\n    -webkit-transform: scale(0.0);\r\n  }\r\n  50% {\r\n    transform: scale(1.0);\r\n    -webkit-transform: scale(1.0);\r\n  }\r\n}\r\n"},GBRt:function(t,e){t.exports='<div class="card">\r\n  <div class="header">\r\n    <h1 class="title">Welcome {{userName}}</h1>\r\n  </div>\r\n  <div class="content">\r\n\r\n    <div *ngIf="needsLogin" class="alert alert-warning">\r\n      You have been redirected to this page because you don\'t have the necessary\r\n      rights for the reqeusted action. Login with a respective user account!\r\n    </div>\r\n\r\n    <button (click)="login()" class="btn btn-default">Login</button>\r\n    <button (click)="logout()" class="btn btn-default">Logout</button>\r\n\r\n    \x3c!--\r\n    <tabbed-pane [activeId]="0">\r\n        <tab title="Booked" [id]="0">\r\n            This page could display all booked passengers ...\r\n        </tab>\r\n        <tab title="Checked in" [id]="1">\r\n            This page could display all checked in passengers ...\r\n        </tab>\r\n\r\n        <tab title="Boarded" [id]="2">\r\n            This page could display all boarded passengers ...\r\n        </tab>\r\n    </tabbed-pane>\r\n    --\x3e\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n'},RahT:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("WT6e"),o=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},i=function(){function t(){}return t.prototype.canDeactivate=function(t,e,r,n){return t.canExit()},t=o([Object(n.A)()],t)}()},S3on:function(t,e){t.exports='<div class="sidebar-wrapper">\r\n  <div class="logo">\r\n    <a class="simple-text">\r\n      <div class="logo-img">\r\n        <img src="../../assets/img/angular2-logo.png" alt="">\r\n      </div>\r\n      Flight42\r\n    </a>\r\n  </div>\r\n  <ul class="nav">\r\n    <li>\r\n      <a routerLink="home">\r\n        <i class="ti-home"></i>\r\n        <p>Home</p>\r\n      </a>\r\n    </li>\r\n\r\n    <li>\r\n      <a routerLink="flight-booking/flight-search">\r\n        <i class="ti-arrow-top-right"></i>\r\n        <p>Flights</p>\r\n      </a>\r\n    </li>\r\n\r\n    \x3c!--\r\n    <li>\r\n        <a routerLink="passenger-search">\r\n            <i class="ti-user"></i>\r\n            <p>Passengers</p>\r\n        </a>\r\n    </li>\r\n--\x3e\r\n\r\n    <li routerLinkActive="active">\r\n      <a [routerLink]="[{outlets: { aux: \'basket\'  }}]">\r\n        <i class="ti-shopping-cart"></i>\r\n        <p>Basket</p>\r\n      </a>\r\n    </li>\r\n\r\n    \x3c!--\r\n        <li routerLinkActive="active">\r\n        <a>\r\n            <i class="ti-close"></i>\r\n            <p>Hide Basket</p>\r\n        </a>\r\n        </li>\r\n    --\x3e\r\n\r\n  </ul>\r\n</div>\r\n'},UWNI:function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=r("WT6e"),o=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},i=function(){function t(){this.userName=null}return t.prototype.login=function(){this.userName="Max"},t.prototype.logout=function(){this.userName=null},t=o([Object(n.A)()],t)}()},Xa3r:function(t,e){t.exports='<nav class="navbar navbar-default">\r\n  <div class="container-fluid">\r\n    <div class="navbar-header">\r\n      <button type="button" class="navbar-toggle" (click)="sidebarToggle()">\r\n        <span class="sr-only">Toggle navigation</span>\r\n        <span class="icon-bar bar1"></span>\r\n        <span class="icon-bar bar2"></span>\r\n        <span class="icon-bar bar3"></span>\r\n      </button>\r\n      <a class="navbar-brand" href="#">Flight42</a>\r\n    </div>\r\n    <div class="collapse navbar-collapse">\r\n      <ul class="nav navbar-nav navbar-right">\r\n        <li>\r\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n            <i class="ti-panel"></i>\r\n            <p>Stats</p>\r\n          </a>\r\n        </li>\r\n        <li class="dropdown">\r\n          <a href="#" class="dropdown-toggle" data-toggle="dropdown">\r\n            <i class="ti-bell"></i>\r\n            <p class="notification">5</p>\r\n            <p>Notifications</p>\r\n            <b class="caret"></b>\r\n          </a>\r\n          <ul class="dropdown-menu">\r\n            <li><a href="#">Notification 1</a></li>\r\n            <li><a href="#">Notification 2</a></li>\r\n            <li><a href="#">Notification 3</a></li>\r\n            <li><a href="#">Notification 4</a></li>\r\n            <li><a href="#">Another notification</a></li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <a href="#">\r\n            <i class="ti-settings"></i>\r\n            <p>Settings</p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n</nav>\r\n'},YnPY:function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r("YWe0"),o=r("WT6e"),i=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},a=function(){function t(){}return t.prototype.preload=function(t,e){return t.data&&t.data.preload?e():Object(n.a)(null)},t=i([Object(o.A)()],t)}()},aL3k:function(t,e,r){var n={"./flight-booking/flight-booking.module":["WNfo",0]};function o(t){var e=n[t];return e?r.e(e[1]).then(function(){return r(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}o.keys=function(){return Object.keys(n)},o.id="aL3k",t.exports=o},hIrG:function(t,e,r){"use strict";var n=r("Xjw4"),o=r("WT6e"),i=r("ItHS"),a=this&&this.__assign||Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},c=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(t){this.http=t,this.flights=[],this.baseUrl="http://www.angular.at/api",this.reqDelay=1e3}return t.prototype.load=function(t,e,r){var n=this;this.find(t,e,r).subscribe(function(t){n.flights=t},function(t){return console.error("Error loading flights",t)})},t.prototype.find=function(t,e,r){void 0===r&&(r=!1);var n=[this.baseUrl,"flight"].join("/");r&&(n=[this.baseUrl,"error?code=403"].join("/"));var o={params:(new i.e).set("from",t).set("to",e),headers:(new i.d).set("Accept","application/json")};return this.http.get(n,o)},t.prototype.findById=function(t){var e={params:null};e.params=(new i.e).set("id",t);var r=[this.baseUrl,"flight"].join("/");return this.http.get(r,e)},t.prototype.save=function(t){var e=[this.baseUrl,"flight"].join("/");return this.http.post(e,t)},t.prototype.delay=function(){var t=this.flights,e=t[0],r=new Date(e.date),n=new Date(r.getTime()+9e5),o=[a({},e,{date:n.toISOString()})].concat(t.slice(1));this.flights=o},t=c([Object(o.A)(),s("design:paramtypes",[i.b])],t)}(),f=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},u=function(){function t(){}return e=t,t.forRoot=function(){return{ngModule:e,providers:[l]}},t=e=f([Object(o.I)({imports:[n.b],declarations:[],exports:[]})],t);var e}();r.d(e,"a",function(){return u}),r.d(e,"b",function(){return l})},kRDL:function(t,e){t.exports='<div class="wrapper">\r\n  <div class="sidebar" data-background-color="white" data-active-color="danger">\r\n    <sidebar-cmp></sidebar-cmp>\r\n  </div>\r\n  <div class="main-panel">\r\n    <navbar-cmp></navbar-cmp>\r\n    <div class="content">\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n      <router-outlet name="aux"></router-outlet>\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n'},qiTL:function(t,e){t.exports=""},vzPd:function(t,e,r){"use strict";var n=r("Xjw4"),o=r("WT6e"),i=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},a=function(){function t(){}return t.prototype.transform=function(t,e){var r,n;switch(t){case"Hamburg":r="HAM",n="Airport Hamburg Fulsb\xfcttel Helmut Schmidt";break;case"Graz":r="GRZ",n="Flughafen Graz Thalerhof";break;default:r=n=t}return"short"==e?r:n},t=i([Object(o.T)({name:"city",pure:!0})],t)}(),c=r("2HsC"),s=r("UWNI"),l=r("RahT"),f=r("ItHS"),u=r("l5y7"),p=r("JRsO"),d=r("bfOx"),h=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},b=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(t){this.router=t}return t.prototype.intercept=function(t,e){var r=this;if(t.url.startsWith("http://www.angular.at")){var n=t.headers.set("Authorization","Dummy-Token");t=t.clone({headers:n})}return e.handle(t).pipe(Object(u.a)(function(t){return r.handleError(t)}))},t.prototype.handleError=function(t){return 401!=t.status&&403!=t.status||this.router.navigate(["/home",{needLogin:!0}]),Object(p.a)(t)},t=h([Object(o.A)(),b("design:paramtypes",[d.b])],t)}(),y=r("YnPY");r.d(e,"a",function(){return m});var v=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},m=function(){function t(){}return e=t,t.forRoot=function(){return{ngModule:e,providers:[s.a,c.a,y.a,l.a,{provide:f.a,useClass:g,multi:!0}]}},t.forChild=function(){return{ngModule:e,providers:[]}},t=e=v([Object(o.I)({imports:[n.b],declarations:[a],exports:[a]})],t);var e}()}},[0]);