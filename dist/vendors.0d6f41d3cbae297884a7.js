(function(e){function n(e){delete installedChunks[e]}function t(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.src=u.p+""+e+"."+_+".hot-update.js",n.appendChild(t)}function i(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var t=new XMLHttpRequest,i=u.p+""+_+".hot-update.json";t.open("GET",i,!0),t.timeout=1e4,t.send(null)}catch(e){return n(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)n(new Error("Manifest request to "+i+" failed."));else{try{var o=JSON.parse(t.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=z[e];if(!n)return u;var t=function(t){return n.hot.active?(z[t]?z[t].parents.indexOf(e)<0&&z[t].parents.push(e):k=[e],n.children.indexOf(t)<0&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),k=[]),w=!1,u(t)};for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&Object.defineProperty(t,i,function(e){return{configurable:!0,enumerable:!0,get:function(){return u[e]},set:function(n){u[e]=n}}}(i));return Object.defineProperty(t,"e",{enumerable:!0,value:function(e){function n(){D--,"prepare"===F&&(E[e]||d(e),0===D&&0===O&&p())}return"ready"===F&&l("prepare"),D++,u.e(e).then(n,function(e){throw n(),e})}}),t}function r(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:w,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var i=0;i<e.length;i++)n._acceptedDependencies[e[i]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:a,apply:f,status:function(e){if(!e)return F;j.push(e)},addStatusHandler:function(e){j.push(e)},removeStatusHandler:function(e){var n=j.indexOf(e);n>=0&&j.splice(n,1)},data:b[e]};return w=!0,n}function l(e){F=e;for(var n=0;n<j.length;n++)j[n].call(null,e)}function c(e){return+e+""===e?+e:e}function a(e){if("idle"!==F)throw new Error("check() is only allowed in idle status");return v=e,l("check"),i().then(function(e){if(!e)return l("idle"),null;M={},E={},H=e.c,y=e.h,l("prepare");var n=new Promise(function(e,n){g={resolve:e,reject:n}});m={};return d(0),"prepare"===F&&0===D&&0===O&&p(),n})}function s(e,n){if(H[e]&&M[e]){M[e]=!1;for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(m[t]=n[t]);0==--O&&0===D&&p()}}function d(e){H[e]?(M[e]=!0,O++,t(e)):E[e]=!0}function p(){l("ready");var e=g;if(g=null,e)if(v)f(v).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in m)Object.prototype.hasOwnProperty.call(m,t)&&n.push(c(t));e.resolve(n)}}function f(t){function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];e.indexOf(i)<0&&e.push(i)}}if("ready"!==F)throw new Error("apply() is only allowed in ready status");t=t||{};var o,r,a,s,d,p={},f=[],h={},g=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var v in m)if(Object.prototype.hasOwnProperty.call(m,v)){d=c(v);var w;w=m[v]?function(e){for(var n=[e],t={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var r=o.pop(),l=r.id,c=r.chain;if((s=z[l])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:l};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:l};for(var a=0;a<s.parents.length;a++){var d=s.parents[a],p=z[d];if(p){if(p.hot._declinedDependencies[l])return{type:"declined",chain:c.concat([d]),moduleId:l,parentId:d};n.indexOf(d)>=0||(p.hot._acceptedDependencies[l]?(t[d]||(t[d]=[]),i(t[d],[l])):(delete t[d],n.push(d),o.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}(d):{type:"disposed",moduleId:v};var x=!1,j=!1,O=!1,D="";switch(w.chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(x=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(x=new Error("Aborted because "+d+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(w),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),O=!0;break;default:throw new Error("Unexception type "+w.type)}if(x)return l("abort"),Promise.reject(x);if(j){h[d]=m[d],i(f,w.outdatedModules);for(d in w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,d)&&(p[d]||(p[d]=[]),i(p[d],w.outdatedDependencies[d]))}O&&(i(f,[w.moduleId]),h[d]=g)}var E=[];for(r=0;r<f.length;r++)d=f[r],z[d]&&z[d].hot._selfAccepted&&E.push({module:d,errorHandler:z[d].hot._selfAccepted});l("dispose"),Object.keys(H).forEach(function(e){H[e]===!1&&n(e)});for(var M,P=f.slice();P.length>0;)if(d=P.pop(),s=z[d]){var B={},T=s.hot._disposeHandlers;for(a=0;a<T.length;a++)(o=T[a])(B);for(b[d]=B,s.hot.active=!1,delete z[d],a=0;a<s.children.length;a++){var I=z[s.children[a]];I&&((M=I.parents.indexOf(d))>=0&&I.parents.splice(M,1))}}var C,A;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)&&(s=z[d]))for(A=p[d],a=0;a<A.length;a++)C=A[a],(M=s.children.indexOf(C))>=0&&s.children.splice(M,1);l("apply"),_=y;for(d in h)Object.prototype.hasOwnProperty.call(h,d)&&(e[d]=h[d]);var L=null;for(d in p)if(Object.prototype.hasOwnProperty.call(p,d)){s=z[d],A=p[d];var G=[];for(r=0;r<A.length;r++)C=A[r],o=s.hot._acceptedDependencies[C],G.indexOf(o)>=0||G.push(o);for(r=0;r<G.length;r++){o=G[r];try{o(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:d,dependencyId:A[r],error:e}),t.ignoreErrored||L||(L=e)}}}for(r=0;r<E.length;r++){var U=E[r];d=U.module,k=[d];try{u(d)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,orginalError:e}),t.ignoreErrored||L||(L=n),L||(L=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:d,error:e}),t.ignoreErrored||L||(L=e)}}return L?(l("fail"),Promise.reject(L)):(l("idle"),Promise.resolve(f))}function u(n){if(z[n])return z[n].exports;var t=z[n]={i:n,l:!1,exports:{},hot:r(n),parents:(x=k,k=[],x),children:[]};return e[n].call(t.exports,t,t.exports,o(n)),t.l=!0,t.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var g,m,y,v=!0,_="0d6f41d3cbae297884a7",b={},w=!0,k=[],x=[],j=[],F="idle",O=0,D=0,E={},M={},H={},z={};u.m=e,u.c=z,u.i=function(e){return e},u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.h=function(){return _},o(2)(u.s=2)})([function(module,exports){module.exports=function anonymous(locals,filters,escape,rethrow){function rethrow(e,n,t,i){var o=n.split("\n"),r=Math.max(i-3,0),l=Math.min(o.length,i+3),c=o.slice(r,l).map(function(e,n){var t=n+r+1;return(t==i?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=t,e.message=(t||"ejs")+":"+i+"\n"+c+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:'<% const data = htmlWebpackPlugin.options; %>\n\n<!DOCTYPE html>\n<html>\n  <head>\n\n    <% include src/app/partials/head/head %>\n\n  </head>\n  <body>\n\n    <div style="height: 0; width: 0; position: absolute; top: 0; visibility: hidden; display: none;">\n      <% include src/app/partials/svgs/svgs %>\n    </div>\n\n    <% include src/app/partials/main/main %>\n\n    <% include src/app/partials/scripts/scripts %>\n\n  </body>\n</html>\n',filename:"."};try{var buf=[];with(locals||{})(function(){buf.push(""),__stack.lineno=1;const e=htmlWebpackPlugin.options;buf.push("\n\n<!DOCTYPE html>\n<html>\n  <head>\n\n    "+function(){var n=[];return n.push("<title>",escape((__stack.lineno=1,e.head.title)),'</title>\n\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n\n<meta property="og:title" content="',escape((__stack.lineno=6,e.head.title)),'" />\n<meta property="og:type" content="',escape((__stack.lineno=7,e.head.ogType)),'" />\n<meta property="og:url" content="',escape((__stack.lineno=8,e.head.ogUrl)),'" />\n<meta property="og:image" content="',escape((__stack.lineno=9,e.head.ogImg)),"\" />\n\n<link href=\"https://fonts.googleapis.com/css?family=Raleway:300,400\" rel=\"stylesheet\">\n\n<!-- Google Tag Manager -->\n<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-PBXRQTG');</script>\n<!-- End Google Tag Manager -->\n"),n.join("")}()+'\n\n  </head>\n  <body>\n\n    <div style="height: 0; width: 0; position: absolute; top: 0; visibility: hidden; display: none;">\n      '+function(){var e=[];return e.push('<svg><defs/><symbol id=""/><symbol id="icon-angular" viewBox="0 0 128 128"><style type="text/css">\n\t.st0{fill:#DD1B16;}\n\t.st1{fill:#B3B3B3;}\n\t.st2{fill:#F2F2F2;}\n</style><g><g><g><g><circle class="st0" cx="64" cy="64" r="50"/></g></g></g></g><g><polygon class="st1" points="90.8,88.5 64,31.5 64,49.8 72.3,68 64,68 64,75.5 75.8,75.5 81.7,88.5  "/><polygon class="st2" points="37.2,88.5 64,31.5 64,49.8 55.7,68 64,68 64,75.5 52.2,75.5 46.3,88.5  "/></g></symbol><symbol id="icon-css" viewBox="0 0 512 512"><g id="g2990"><path d="M 512,256 C 512,397.3849 397.38489,512 256,512 114.6151,512 -1.47e-6,397.3849 -1.47e-6,256 -1.47e-6,114.61511 114.6151,1.34e-6 256,1.34e-6 397.38489,1.34e-6 512,114.61511 512,256 z" id="path2989" style="fill:#379ad6;fill-opacity:1"/><g id="g3015"><polygon id="polygon3962" points="389.402,450.579 420.191,117.07 91.809,117.07 122.593,450.579 255.999,486.501 " style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd" transform="matrix(0.66995146,0,0,0.66995146,84.49242,84.15745)"/><polygon id="polygon3968" points="364.257,428.863 389.175,144.084 255.997,144.084 255.997,457.852 256.298,457.933 " style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd" transform="matrix(0.66995146,0,0,0.66995146,84.49242,84.15745)"/><path d="m 190.7226,143.04082 h 33.95515 v -13.27977 h -19.40246 v -13.29854 h 19.40246 V 101.91049 H 190.7226 v 41.13033 z m 48.4663,-26.57764 c 4.54294,4.54294 6.91189,6.71693 13.48277,13.28849 -3.84016,0 -13.48277,0.0141 -13.48277,0.0127 v 13.27642 h 33.95783 v -13.27974 l -13.56384,-13.29854 h 13.56384 V 101.91049 H 239.1889 c 0,0 0,7.30381 0,14.55269 z m 82.08848,-14.55269 h -33.95984 c 0,0 0,7.30381 0,14.55269 4.54295,4.54294 6.91323,6.71693 13.48412,13.28849 -3.83882,0 -13.48412,0.0141 -13.48412,0.0127 v 13.27642 h 33.95984 v -13.27974 l -13.5645,-13.29854 h 13.5645 v -14.55202 z" id="path4016" style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd"/><path d="m 186.10184,207.69363 4,27.25 69.5,-0.5 -67,28.25 1.75,27 95,0 -2.25,35.5 -30.5,9.25 -31,-8.5 -1.75,-21.25 -27.25,0 3.5,41.75 55.75,16.25 56.75,-15.75 7,-84.25 -64.25,0 66.75,-28.25 2,-27 z" id="path4169" style="fill:#379ad6;fill-opacity:1;stroke:none"/></g></g><g id="Layer_1_1_"/></symbol><symbol id="icon-facebook" viewBox="0 0 32 32"><g><path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" fill="#3B5998"/><path d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z" fill="#FFFFFF" id="f"/></g><g/><g/><g/><g/><g/><g/></symbol><symbol id="icon-html" viewBox="0 0 512 512"><g id="g2996" transform="translate(0.32800146,0.07000866)"><g id="g2987" style="fill:#e44d26;fill-opacity:1"><path d="m 511.672,255.92999 c 0,141.3849 -114.61511,256 -256,256 -141.3849,0 -256.00000293,-114.6151 -256.00000293,-256 C -0.32800293,114.5451 114.2871,-0.07000732 255.672,-0.07000732 c 141.38489,0 256,114.61510732 256,255.99999732 z" id="path2989" style="fill:#e44d26;fill-opacity:1"/></g><g id="g4311" transform="translate(546.9375,-48.721188)"><polygon id="polygon4184" points="255.8,486.486 389.249,449.489 418.938,116.909 93.063,116.909 122.719,449.542 " style="fill:#ffffff;fill-rule:evenodd" transform="matrix(0.67510549,0,0,0.67510549,-464.09284,131.48662)"/><path d="m -353.99731,163.21455 h -12.80338 v -13.82818 h -13.99561 v 41.87544 h 13.99629 v -14.02262 h 12.8027 v 14.02262 h 13.99629 v -41.87544 h -13.99697 v 13.82818 z m 20.08101,0.0581 h 12.32203 v 27.9892 h 13.99696 v -27.9892 h 12.32742 v -13.88624 h -38.64641 v 13.88624 z m 68.35173,0.82768 -8.97823,-14.71392 h -14.59375 v 41.87544 h 13.69451 v -20.75612 l 9.63578,14.88945 h 0.24102 l 9.62903,-14.88945 v 20.75612 h 13.93822 v -41.87544 h -14.59983 l -8.96675,14.71392 z m 44.53401,13.31983 v -28.03375 h -14.00034 v 41.87544 h 33.68372 v -13.84169 h -19.68338 z" id="path4208" style="fill:#ffffff;fill-rule:evenodd"/><path d="m -360.5,255.75 138.25,0 -2.25,28.5 -105.75,0 3,27.5 99.5,0 -7,85.25 -56,15.25 -56.75,-15.25 -4.25,-43.5 27.75,0 2.25,21.5 30.75,8.75 30.75,-8.75 3,-35.25 -95.5,0 z" id="path4309" style="fill:#e44d26;fill-opacity:1;stroke:none" transform="translate(-0.32800146,-0.07000866)"/></g></g><g id="Layer_1_1_"/></symbol><symbol id="icon-ionic" viewBox="0 0 128 128"><style type="text/css">\n\t.st0{fill:#E6F0FF;}\n\t.st1{fill:#2F72E1;}\n</style><path class="st0" d="M64,14c-27.6,0-50,22.4-50,50s22.4,50,50,50s50-22.4,50-50S91.6,14,64,14z"/><g><path class="st1" d="M87.4,47.4c0.6-0.8,1-1.9,1-3c0-2.6-2.1-4.8-4.8-4.8c-1.1,0-2.2,0.4-3,1c-4.7-3.3-10.4-5.3-16.6-5.3   c-15.8,0-28.7,12.8-28.7,28.7S48.2,92.7,64,92.7c15.8,0,28.7-12.8,28.7-28.7C92.7,57.8,90.7,52.1,87.4,47.4z M64,88.4   c-13.4,0-24.4-10.9-24.4-24.4c0-13.4,10.9-24.4,24.4-24.4c5.6,0,10.7,1.9,14.8,5c0.1,2.4,2.1,4.4,4.5,4.5c3.2,4.1,5.1,9.3,5.1,14.8   C88.4,77.4,77.4,88.4,64,88.4z"/><circle class="st1" cx="64" cy="64" r="13.2"/></g></symbol><symbol id="icon-js" viewBox="0 0 128 128"><g><g><g><circle cx="64" cy="64" r="50" style="fill:#F0DB4F;"/></g></g><g id="Layer_1_1_"><g><g><path d="M48.4,44.6h8.7v24.5c0,11-5.3,14.9-13.7,14.9c-2.1,0-4.7-0.3-6.4-0.9l1-7.1      c1.2,0.4,2.8,0.7,4.5,0.7c3.7,0,6-1.7,6-7.6L48.4,44.6L48.4,44.6z" style="fill:#323330;"/><path d="M64.8,74.4c2.3,1.2,6,2.4,9.7,2.4c4,0,6.1-1.7,6.1-4.3c0-2.4-1.8-3.8-6.5-5.4      c-6.4-2.3-10.7-5.9-10.7-11.6C63.4,49,69,44,78.1,44c4.4,0,7.6,0.9,9.9,2l-2,7c-1.5-0.7-4.3-1.8-8-1.8c-3.8,0-5.6,1.8-5.6,3.7      c0,2.5,2.1,3.6,7.2,5.5c6.8,2.5,10,6.1,10,11.6c0,6.5-4.9,12-15.6,12c-4.4,0-8.8-1.2-11-2.4L64.8,74.4z" style="fill:#323330;"/></g></g></g></g></symbol><symbol id="icon-linkedin" viewBox="0 0 32 32"><g><path d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" fill="#007BB5"/><g><rect fill="#FFFFFF" height="14" width="4" x="7" y="11"/><path d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z" fill="#FFFFFF"/><circle cx="9" cy="8" fill="#FFFFFF" r="2"/></g></g><g/><g/><g/><g/><g/><g/></symbol><symbol id="icon-mail" viewBox="0 0 24 24"><path clip-rule="evenodd" d="M11.984,13C10.031,13-0.031,4.891-0.031,4.891V4c0-1.104,0.896-2,2.002-2h20.026  C23.104,2,24,2.896,24,4l-0.016,1C23.984,5,14.031,13,11.984,13z M11.984,15.75c2.141,0,12-7.75,12-7.75L24,20  c0,1.104-0.896,2-2.003,2H1.971c-1.105,0-2.002-0.896-2.002-2l0.016-12C-0.016,8,10.031,15.75,11.984,15.75z" fill-rule="evenodd"/></symbol></svg>'),e.join("")}()+"\n    </div>\n\n    "+function(){var n=[];return n.push('<main class="',escape((__stack.lineno=1,e.prefix)),'-m-main">\n\n  '+function(){var n=[];return n.push('<section class="',escape((__stack.lineno=1,e.prefix)),'-m-thumbnail">\n  <figure>\n    <img src="',escape((__stack.lineno=3,e.img)),'" alt="',escape((__stack.lineno=3,e.imgAlt)),'">\n    <figcaption>',escape((__stack.lineno=4,e.figureCaption)),"</figcaption>\n  </figure>\n</section>\n"),n.join("")}()+"\n\n  "+function(){var n=[];return n.push('<section class="',escape((__stack.lineno=1,e.prefix)),'-m-profile">\n\n  <h1>',escape((__stack.lineno=3,e.name)),"</h1>\n\n  <h2>",escape((__stack.lineno=5,e.jobTitle)),'</h2>\n\n  <p class="description">\n    ',(__stack.lineno=8,e.description),'\n  </p>\n\n  <ul class="svg-container">\n    <li>\n      <svg role="img" class="icon-same-size"><use xlink:href="#icon-html"/></svg>\n    </li>\n\n    <li>\n      <svg role="img" class="icon-same-size"><use xlink:href="#icon-css"/></svg>\n    </li>\n\n    <li>\n      <svg role="img"><use xlink:href="#icon-js"/></svg>\n    </li>\n\n    <li>\n      <svg role="img"><use xlink:href="#icon-angular"/></svg>\n    </li>\n\n    <li>\n      <svg role="img"><use xlink:href="#icon-ionic"/></svg>\n    </li>\n\n    <li class="col item-and-more">\n      <span>and more...</span>\n    </li>\n  </ul>\n\n  <footer class="social-footer">\n\n    <strong>Find me:</strong>\n\n    <ul class="social-list">\n      <li>\n        <a href="',escape((__stack.lineno=43,e.social.linkedin)),'" target="_blank">\n          <svg role="img"><use xlink:href="#icon-linkedin"/></svg>\n        </a>\n      </li>\n\n      <li>\n        <a href="',escape((__stack.lineno=49,e.social.mail)),'" target="_blank">\n          <svg role="img"><use xlink:href="#icon-mail"/></svg>\n        </a>\n      </li>\n    </ul>\n\n  </footer>\n\n</section>\n'),n.join("")}()+"\n\n</main>\n"),n.join("")}()+"\n\n    "+function(){var e=[];return e.push('<!-- Google Tag Manager (noscript) -->\n<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PBXRQTG"\nheight="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>\n<!-- End Google Tag Manager (noscript) -->\n'),e.join("")}()+"\n\n  </body>\n</html>\n")})();return buf.join("")}catch(e){(function rethrow(e,n,t,i){var o=n.split("\n"),r=Math.max(i-3,0),l=Math.min(o.length,i+3),c=o.slice(r,l).map(function(e,n){var t=n+r+1;return(t==i?" >> ":"    ")+t+"| "+e}).join("\n");throw e.path=t,e.message=(t||"ejs")+":"+i+"\n"+c+"\n\n"+e.message,e})(e,__stack.input,__stack.filename,__stack.lineno)}}},function(e,n){},function(e,n,t){"use strict";t(1),t(0)}]);