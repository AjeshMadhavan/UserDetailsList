(function(){"use strict";var e={3965:function(e,t,n){var r=n(5471),o=n(8444),i=n(5868);r.Ay.use(i.A);var a=new i.A({}),u=n(5738),s=n(4235),c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container",attrs:{id:"app"}},[t("nav",{staticClass:"container__nav"},[t("router-link",{staticClass:"container__nav__link",attrs:{to:"/"}},[e._v("Home")]),t("router-link",{staticClass:"container__nav__link",attrs:{to:"/about"}},[e._v("About")]),t("router-link",{staticClass:"container__nav__link",attrs:{to:"/addUser"}},[e._v("Add User")]),t("router-link",{staticClass:"container__nav__link",attrs:{to:"/userList"}},[e._v("User List")])],1),t("router-view")],1)},f=[],l=n(1656),d={},p=(0,l.A)(d,c,f,!1,null,"1760a126",null),v=p.exports;r.Ay.use(o.R2);const h=(0,o.Ey)();r.Ay.use(u.Ay),r.Ay.config.productionTip=!1,new r.Ay({router:s.A,vuetify:a,pinia:h,render:e=>e(v)}).$mount("#app")},4235:function(e,t,n){var r=n(5471),o=n(173);r.Ay.use(o.Ay);const i=[{path:"/",name:"home",component:()=>n.e(20).then(n.bind(n,1020))},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,999))},{path:"/addUser",name:"userView",component:()=>Promise.all([n.e(859),n.e(139),n.e(937)]).then(n.bind(n,937))},{path:"/userList",name:"userdetails",component:()=>Promise.all([n.e(859),n.e(139),n.e(291)]).then(n.bind(n,5291))},{path:"/userDetails/:id",name:"userDetails",props:!0,component:()=>Promise.all([n.e(859),n.e(717)]).then(n.bind(n,7138))}],a=new o.Ay({routes:i});t.A=a}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(594===e?"about":e)+"."+{20:"2e10adce",139:"9651f160",291:"7dc12cb3",594:"9028e08a",717:"36f86398",859:"5000e15d",937:"751fbc26"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{20:"044aa03f",139:"51957f2a",291:"5d102060",717:"77019040",937:"6629cfe9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="user-details:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var l=c[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/UserDetailsList/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",n.nc&&(a.nonce=n.nc);var u=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var r=n&&n.type,u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+u+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=u,a.parentNode&&a.parentNode.removeChild(a),i(s)}};return a.onerror=a.onload=u,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={20:1,139:1,291:1,717:1,937:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var f=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkuser_details"]=self["webpackChunkuser_details"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(3965)}));r=n.O(r)})();
//# sourceMappingURL=app.95ca794a.js.map