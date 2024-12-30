/*! For license information please see main.d50b3f6b83681fe37d73.bundle.js.LICENSE.txt */
!function(){"use strict";function t(t,e){var r=document.createElement(t);return function(t,e){for(var r=Object.keys(e),n=0;n<r.length;n+=1){var o=r[n];t.setAttribute(o,e[o])}}(r,e),r}function e(t){for(var e=0;e<(arguments.length<=1?0:arguments.length-1);e+=1)t.appendChild(e+1<1||arguments.length<=e+1?void 0:arguments[e+1])}var r=function(e,r,n,o,i){return t(e,{class:"data","data-metricmagnitude":r,"data-metricunit":n,"data-imperialmagnitude":o,"data-imperialunit":i})},n=function(e){return t(e,{class:"icon"})},o=function(e){return t("div",{class:e})};function i(t,e){return(t%e+e)%e}var a=0,c=15,u=30,s=45,l=90,f=135,h=180,d=225,v=270,y=315,p=360;function m(t){return t<a?"freezing":t<c?"cold":t<u?"warm":"hot"}var g=250;function w(){var t;(t=document.querySelector(".reload")).classList.add("rotate"),setTimeout((function(){t.classList.remove("rotate")}),g);var e=document.querySelector(".resolvedAddress").textContent;document.querySelector("#search-box input").style.color="white",document.querySelector("#search-box input").value=e,document.querySelector("#weather-form").requestSubmit()}var b=function(){var e=t("div",{class:"reload-container"});return e.appendChild(function(){var e=t("button",{class:"reload"});return e.addEventListener("click",w),e}()),e},L=.621371,x=function(n,i,a,c,u,s,l){var f=o(i),h=r(n,a,c,u,s),d=function(e,r){var n=t(e,{class:"description"});return n.textContent=r,n}(n,l);return e(f,d,h),f},E=function(t){var e=function(t){var e=i(t,360);return e<s/2?" north":e<(l+s)/2?" northeast":e<(l+f)/2?" east":e<(f+h)/2?" southeast":e<(h+d)/2?" south":e<(d+v)/2?" southwest":e<(v+y)/2?" west":e<(y+p)/2?" northwest":"⬆ (North)"}(t.winddir),r=t.windspeed,n=(r*L).toFixed(1);return x("div","winddir",r,"kph".concat(e),n,"mph".concat(e),"Wind: ")},S=function(r){var n=t("div",{id:"current-conditions-card"});return e(n,function(t){return x("div","sunrise",t.sunrise,"",t.sunrise,"","Sunrise: ")}(r),function(t){return x("div","sunset",t.sunset,"",t.sunset,"","Sunset: ")}(r),function(t){return x("div","humidity",t.humidity,"%",t.humidity,"%","Humidity: ")}(r),function(t){var e=t.visibility,r=(e*L).toFixed(1);return x("div","visibility",e,"km",r,"mi","Visibility: ")}(r),E(r),function(t){var e=t.precip,r=(.03973701*e).toFixed(2),n=t.preciptype,o=t.precipprob,i=x("div","precip","".concat(o,"% chance of ").concat(n,", ").concat(e),"mm","".concat(o,"% chance of ").concat(n,", ").concat(r),"in","Precipitation: ");return 0!==e&&null!==n&&0!==o||(i=x("div","precip","N/A","","N/A","","Precipitation: ")),i}(r),b()),n},k=function(r){var n=t("div",{id:"current-conditions-container"});return e(n,S(r)),n},C={0:31,1:28,2:31,3:30,4:31,5:30,6:31,7:31,8:30,9:31,10:30,11:31};function _(t,e){var r={second:t.getUTCSeconds(),hour:t.getUTCHours(),minute:t.getUTCMinutes(),day:t.getUTCDate(),month:t.getUTCMonth(),year:t.getUTCFullYear(),weekday:t.getUTCDay()};return r.minute+=e%1*60,r.hour+=Math.trunc(e),r.minute>=60&&(r.hour+=1),r.minute<0&&(r.hour-=1),r.minute=i(r.minute,60),r.hour>=24&&(r.day+=1,r.weekday+=1),r.hour<0&&(r.day-=1,r.weekday-=1),r.hour=i(r.hour,24),r.weekday=i(r.weekday,7),r.day<1?(r.day=C[i(r.month-1,12)],r.month-=1):r.day>C[r.month]&&(r.day=1,r.month+=1),r.month<0&&(r.year-=1),r.month>11&&(r.year+=1),r.month=i(r.month,12),r}var O={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"},j={0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};function F(t){var e,r,n,o,i,a=function(t){var e=_(new Date,t);return{year:e.year,month:e.month,day:e.day,weekday:e.weekday}}(t);return r=(e=a).year,n=e.month,o=e.day,i=e.weekday,{year:r,month:n=O[n],day:o,weekday:i=j[i]}}var N=function(t,i,a,c,u,s){var l=o(i);return e(l,n(t),r(t,a,c,u,s)),l},P=function(t){var e,r={year:(e=t.datetime).slice(0,4),month:O[e.slice(5,7)-1],day:e.slice(8)};return N("div","date","".concat(r.month," ").concat(r.day),"","".concat(r.month," ").concat(r.day),"")},T=function(r){var n=t("div",{class:"forecast-card daily"});return e(n,P(r),function(t){var e=t.tempmin,r=(1.8*e+32).toFixed(1),n=N("div","temp","Low: ".concat(e)," °C","Low: ".concat(r)," °F"),o=m(e);return n.children[0].classList.add(o),n}(r),function(t){var e=t.tempmax,r=(1.8*e+32).toFixed(1),n=N("div","temp","High: ".concat(e)," °C","High: ".concat(r)," °F"),o=m(e);return n.children[0].classList.add(o),n}(r),function(t){var e=N("div","conditions",t.conditions,"",t.conditions,"");return e.children[0].classList.add("".concat(t.icon)),e}(r)),n},G=function(r){for(var n=t("div",{id:"daily-container"}),o=0;o<r.days.length;o+=1)e(n,T(r.days[o]));return n},q=function(t,i,a,c,u,s){var l=o(i);return e(l,n(t),r(t,a,c,u,s)),l},A=function(r){var n=t("div",{class:"forecast-card hourly"});return e(n,function(t){return q("div","time",t.datetime,"",t.datetime,"")}(r),function(t){var e=t.temp,r=(1.8*e+32).toFixed(1),n=q("div","temp",e," °C",r," °F"),o=m(e);return n.children[0].classList.add(o),n}(r),function(t){var e=q("div","conditions",t.conditions,"",t.conditions,"");return e.children[0].classList.add("".concat(t.icon)),e}(r)),n},I=function(r){for(var n=t("div",{id:"hourly-container"}),o=0,i=r.currentConditions.datetimeEpoch,a=r.days[0].hours,c=r.days[1].hours,u=0;u<a.length;u+=1){if(o>=24)return n;i<a[u].datetimeEpoch&&(e(n,A(a[u])),o+=1)}for(var s=0;s<c.length;s+=1){if(o>=24)return n;i<c[s].datetimeEpoch&&(e(n,A(c[s])),o+=1)}return n},U=function(r){var n=t("div",{id:"forecast-container"});return e(n,G(r),I(r)),n},D=function(){var e=t("input",{type:"text",id:"location",name:"location",placeholder:"Search Location"});return e.required=!0,e.pattern="^(?=.*[a-zA-Z])[a-zA-Z0-9, .\\-]+$",e.addEventListener("invalid",(function(){e.validity.valid||e.setCustomValidity("Please enter a valid location query")})),e},M=function(){return t("button",{})},Y=function(){var r=t("form",{id:"weather-form"});return e(r,function(){var r=t("div",{id:"search-box"});return e(r,D(),M()),r}(),M()),r};function z(t){return t<10?"0".concat(t):"".concat(t)}function Z(t){var e,r,n,o,i=function(t){var e=_(new Date,t);return{hour:e.hour,minute:e.minute,second:e.second}}(t);return r=(e=i).hour,n=e.minute,o=e.second,{hour:r=z(r),minute:n=z(n),second:o=z(o)}}var H=function(t,i,a,c,u,s){var l=o(i);return e(l,n(t),r(t,a,c,u,s)),l},V=function(t){var n=t.currentConditions.temp,o=(1.8*n+32).toFixed(1),i=H("div","temp",n," °C",o," °F"),a=m(n);return i.children[0].classList.add(a),i.appendChild(function(t){var n=t.currentConditions.feelslike,o=(1.8*n+32).toFixed(1),i=document.createElement("span"),a=r("span",n," °C)",o," °F)"),c=document.createElement("span");return c.textContent=" (Feels like: ",e(i,c,a),i}(t)),i},W=function(r){var n=t("div",{id:"snapshot-card"});return e(n,function(t){var e=F(t.tzoffset),r=e.year,n=e.month,o=e.day,i=e.weekday;return H("div","date","".concat(i,", ").concat(n," ").concat(o," ").concat(r),"","".concat(i,", ").concat(n," ").concat(o," ").concat(r),"")}(r),function(t){var e=H("div","conditions",t.currentConditions.conditions,"",t.currentConditions.conditions,"");return e.children[0].classList.add("".concat(t.currentConditions.icon)),e}(r),function(t){return H("div","resolvedAddress",t.resolvedAddress,"",t.resolvedAddress,"")}(r),function(t){var e=Z(t.tzoffset),r=e.hour,n=e.minute,o=e.second;return H("div","time","".concat(r,":").concat(n,":").concat(o),"","".concat(r,":").concat(n,":").concat(o),"")}(r),V(r),Y()),n},R=function(e){var r=t("div",{id:"snapshot-container"});return r.appendChild(W(e)),r};function J(t,e){document.querySelector("button.".concat(t)).classList.remove("system-selected"),document.querySelector("button.".concat(e)).classList.add("system-selected")}function B(t){J("metric"===t?"imperial":"metric",t),function(t){for(var e=document.querySelectorAll(".data"),r=0;r<e.length;r+=1){var n="".concat(t,"magnitude"),o="".concat(t,"unit");e[r].textContent="".concat(e[r].dataset[n]).concat(e[r].dataset[o])}}(t)}var K=function(){var r,n=t("div",{id:"measurement-system-options"});return e(n,((r=t("button",{class:"imperial"})).textContent="Imperial",r.addEventListener("click",(function(){B("imperial")})),r),document.createTextNode(" | "),function(){var e=t("button",{class:"metric"});return e.textContent="Metric",e.addEventListener("click",(function(){B("metric")})),e}()),n};function Q(t,e){document.querySelector("button.".concat(t)).classList.remove("forecast-selected"),document.querySelector("button.".concat(e)).classList.add("forecast-selected")}function X(t){var e;Q("daily"===t?"hourly":"daily",t),"hourly"===(e=t)?document.querySelector("#daily-container").classList.add("invisible"):document.querySelector("#hourly-container").classList.add("invisible"),document.querySelector("#".concat(e,"-container")).classList.remove("invisible")}var $=function(){var r,n=t("div",{id:"forecast-options"});return e(n,((r=t("button",{class:"daily"})).addEventListener("click",(function(){return X("daily")})),r.textContent="Daily",r),document.createTextNode(" | "),function(){var e=t("button",{class:"hourly"});return e.addEventListener("click",(function(){return X("hourly")})),e.textContent="Hourly",e}()),n};function tt(t){return tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tt(t)}function et(){et=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new F(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",v="executing",y="completed",p={};function m(){}function g(){}function w(){}var b={};s(b,a,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=w.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==tt(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(tt(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}function rt(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var nt="BANRMLZEW5W39B5YGXZPZCZRQ",ot={mode:"cors"};function it(t){var e=function(t){return encodeURIComponent(t)}(t);return"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/".concat(e,"?iconSet=icons2&unitGroup=metric&key=").concat(nt)}function at(t){return t.ok?"response ok":400===t.status?"location not found":(console.log("Unexpected server response: ".concat(t.status)),"bad server response")}function ct(t){return ut.apply(this,arguments)}function ut(){var t;return t=et().mark((function t(e){var r,n,o;return et().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=it(e),t.prev=1,t.next=4,fetch(r,ot);case 4:if("response ok"===at(n=t.sent)){t.next=7;break}return t.abrupt("return",at(n));case 7:return t.next=9,n.json();case 9:return o=t.sent,t.abrupt("return",o);case 13:return t.prev=13,t.t0=t.catch(1),console.error(t.t0),t.abrupt("return",null);case 17:return t.prev=17,t.finish(17);case 19:case"end":return t.stop()}}),t,null,[[1,13,17,19]])})),ut=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){rt(i,n,o,a,c,"next",t)}function c(t){rt(i,n,o,a,c,"throw",t)}a(void 0)}))},ut.apply(this,arguments)}var st=86400,lt=11;function ft(t,e,r){return 60*t*60+60*e+r}function ht(t){var e={hour:parseInt(t.slice(0,2),10),minute:parseInt(t.slice(3,5),10),second:parseInt(t.slice(6,8),10)};return ft(e.hour,e.minute,e.second)}function dt(t,e,r){for(var n=function(t,e){var r=e-t;return[r*(1/6),r*(2/6),.5*r,r*(4/6),r*(5/6),1*r,r+1/6*(st-r),r+2/6*(st-r),r+.5*(st-r),r+4/6*(st-r),r+5/6*(st-r),r+1*(st-r)]}(e,r),o=i(t-e,st),a=0;a<n.length;a+=1)if(o<=n[a])return a;return lt}function vt(t,e){var r=_(new Date,t.tzoffset),n=document.querySelector("html");if("sunrise"in t.currentConditions&&"sunset"in t.currentConditions){var o=ht(t.currentConditions.sunrise),i=ht(t.currentConditions.sunset),a=dt(ft(r.hour,r.minute,r.second),o,i);n.setAttribute("class","phase".concat(a)),e||n.classList.add("change-background-transition")}else n.setAttribute("class","phase1")}var yt=function(){var e=t("div",{id:"serverNotRespondingError",class:"hidden-message"});return e.textContent="Visual Crossing API not responding",e};function pt(t){return pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(t)}function mt(){mt=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new F(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",v="executing",y="completed",p={};function m(){}function g(){}function w(){}var b={};s(b,a,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=w.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==pt(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(pt(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}function gt(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var wt=function(r){var n=t("div",{id:"top"});return e(n,K(),R(r),k(r.currentConditions)),n},bt=function(r){var n=t("div",{id:"bottom"});return e(n,$(),U(r)),n},Lt=function(){var r,n=(r=mt().mark((function r(n,o,i,a){var c,u,s,l;return mt().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,ct(n);case 2:c=r.sent,u=document.querySelector("body"),console.log(c),"location not found"===c?(f=n,h=void 0,(h=t("div",{id:"locationNotFoundError",class:"hidden-message"})).textContent='Could not find data for "'.concat(f,'"'),s=h,u.append(s),s.addEventListener("animationend",(function(){s.remove()}))):"bad server response"===c?(l=yt(),u.append(l),l.addEventListener("animationend",(function(){l.remove()}))):(u.textContent="",vt(c,a),e(u,wt(c),bt(c)),B(o),X(i),document.body.addEventListener("click",(function(){document.querySelector("input#location").setCustomValidity("")})));case 6:case"end":return r.stop()}var f,h}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){gt(i,n,o,a,c,"next",t)}function c(t){gt(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(t,e,r,o){return n.apply(this,arguments)}}(),xt=Lt;function Et(t){return Et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Et(t)}function St(){St=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new F(n||[]);return o(a,"_invoke",{value:C(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",d="suspendedYield",v="executing",y="completed",p={};function m(){}function g(){}function w(){}var b={};s(b,a,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=w.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==Et(l)&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,r,n){var o=h;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?y:d,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,p;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(Et(e)+" is not iterable")}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=s(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},S(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=N,F.prototype={constructor:F,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:N(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}function kt(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function Ct(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){kt(i,n,o,a,c,"next",t)}function c(t){kt(i,n,o,a,c,"throw",t)}a(void 0)}))}}function _t(t){return Ot.apply(this,arguments)}function Ot(){return(Ot=Ct(St().mark((function t(e){var r,n,o;return St().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),r=document.querySelector("#location").value,n=document.querySelector(".system-selected").classList.contains("metric")?"metric":"imperial",o=document.querySelector(".forecast-selected").classList.contains("daily")?"daily":"hourly",t.next=6,xt(r,n,o,!1);case 6:document.querySelector("#weather-form").addEventListener("submit",_t);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function jt(){return(jt=Ct(St().mark((function t(e,r,n){return St().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xt(e,r,n,!0);case 2:document.querySelector("#weather-form").addEventListener("submit",_t);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){jt.apply(this,arguments)}("London, UK","metric","daily")}();