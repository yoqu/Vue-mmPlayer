(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbcf7f66"],{1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},2332:function(t,e,n){"use strict";var r=n("ba7f"),i=n.n(r);i.a},"24c5":function(t,e,n){"use strict";var r,i,o,c,a=n("b8e3"),s=n("e53d"),u=n("d864"),f=n("40c3"),l=n("63b6"),h=n("f772"),d=n("79aa"),v=n("1173"),p=n("a22a"),m=n("f201"),y=n("4178").set,g=n("aba2")(),w=n("656e"),b=n("4439"),_=n("bc13"),x=n("cd78"),L="Promise",j=s.TypeError,E=s.process,O=E&&E.versions,P=O&&O.v8||"",k=s[L],T="process"==f(E),S=function(){},C=i=w.f,N=!!function(){try{var t=k.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(S,S)};return(T||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof e&&0!==P.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(r){}}(),M=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){var r=t._v,i=1==t._s,o=0,c=function(e){var n,o,c,a=i?e.ok:e.fail,s=e.resolve,u=e.reject,f=e.domain;try{a?(i||(2==t._h&&I(t),t._h=1),!0===a?n=r:(f&&f.enter(),n=a(r),f&&(f.exit(),c=!0)),n===e.promise?u(j("Promise-chain cycle")):(o=M(n))?o.call(n,s,u):s(n)):u(r)}catch(l){f&&!c&&f.exit(),u(l)}};while(n.length>o)c(n[o++]);t._c=[],t._n=!1,e&&!t._h&&F(t)})}},F=function(t){y.call(s,function(){var e,n,r,i=t._v,o=G(t);if(o&&(e=b(function(){T?E.emit("unhandledRejection",i,t):(n=s.onunhandledrejection)?n({promise:t,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=T||G(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},G=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){y.call(s,function(){var e;T?E.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},R=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},U=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw j("Promise can't be resolved itself");(e=M(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,u(U,r,1),u(R,r,1))}catch(i){R.call(r,i)}}):(n._v=t,n._s=1,A(n,!1))}catch(r){R.call({_w:n,_d:!1},r)}}};N||(k=function(t){v(this,k,L,"_h"),d(t),r.call(this);try{t(u(U,this,1),u(R,this,1))}catch(e){R.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("5c95")(k.prototype,{then:function(t,e){var n=C(m(this,k));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=T?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(U,t,1),this.reject=u(R,t,1)},w.f=C=function(t){return t===k||t===c?new o(t):i(t)}),l(l.G+l.W+l.F*!N,{Promise:k}),n("45f2")(k,L),n("4c95")(L),c=n("584a")[L],l(l.S+l.F*!N,L,{reject:function(t){var e=C(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(a||!N),L,{resolve:function(t){return x(a&&this===c?k:this,t)}}),l(l.S+l.F*!(N&&n("4ee1")(function(t){k.all(t)["catch"](S)})),L,{all:function(t){var e=this,n=C(e),r=n.resolve,i=n.reject,o=b(function(){var n=[],o=0,c=1;p(t,!1,function(t){var a=o++,s=!1;n.push(void 0),c++,e.resolve(t).then(function(t){s||(s=!0,n[a]=t,--c||r(n))},i)}),--c||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,i=b(function(){p(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"31ff":function(t,e,n){"use strict";var r=n("d6bf"),i=n.n(r);i.a},"3c11":function(t,e,n){"use strict";var r=n("63b6"),i=n("584a"),o=n("e53d"),c=n("f201"),a=n("cd78");r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return a(e,t()).then(function(){return n})}:t,n?function(n){return a(e,t()).then(function(){throw n})}:t)}})},"3d93":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("cebc"),i=n("2f62"),o=(Object(r["a"])({},Object(i["c"])(["playing","currentMusic"])),Object(r["a"])({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(i["d"])({setPlaying:"SET_PLAYING"}),Object(i["b"])(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout(function(){e.mmLoadShow=!1},200)}}})},4178:function(t,e,n){var r,i,o,c=n("d864"),a=n("3024"),s=n("32fc"),u=n("1ec9"),f=n("e53d"),l=f.process,h=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,p=f.Dispatch,m=0,y={},g="onreadystatechange",w=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},b=function(t){w.call(t.data)};h&&d||(h=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return y[++m]=function(){a("function"==typeof t?t:Function(t),e)},r(m),m},d=function(t){delete y[t]},"process"==n("6b4c")(l)?r=function(t){l.nextTick(c(w,t,1))}:p&&p.now?r=function(t){p.now(c(w,t,1))}:v?(i=new v,o=i.port2,i.port1.onmessage=b,r=c(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",b,!1)):r=g in u("script")?function(t){s.appendChild(u("script"))[g]=function(){s.removeChild(this),w.call(t)}}:function(t){setTimeout(c(w,t,1),0)}),t.exports={set:h,clear:d}},"43fc":function(t,e,n){"use strict";var r=n("63b6"),i=n("656e"),o=n("4439");r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"4c95":function(t,e,n){"use strict";var r=n("e53d"),i=n("584a"),o=n("d9f6"),c=n("8e60"),a=n("5168")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];c&&e&&!e[a]&&o.f(e,a,{configurable:!0,get:function(){return this}})}},"5c95":function(t,e,n){var r=n("35e8");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},"650b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),n("div",{staticClass:"search-head"},[t._l(t.Artists.slice(0,5),function(e,r){return n("span",{key:r,on:{click:function(n){return t.clickHot(e.first)}}},[t._v(t._s(e.first))])}),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchValue,expression:"searchValue",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",placeholder:"音乐/歌手"},domProps:{value:t.searchValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onEnter(e)},input:function(e){e.target.composing||(t.searchValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})],2),n("music-list",{ref:"musicList",attrs:{list:t.list,listType:2},on:{select:t.selectItem,pullUp:t.pullUpLoad}})],1)},i=[],o=(n("96cf"),n("795b")),c=n.n(o);function a(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(f){return void n(f)}s.done?e(u):c.a.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new c.a(function(r,i){var o=t.apply(e,n);function c(t){a(o,r,i,c,s,"next",t)}function s(t){a(o,r,i,c,s,"throw",t)}c(void 0)})}}var u=n("75fc"),f=(n("a481"),n("cebc")),l=n("2f62"),h=n("365c"),d=n("8dd1"),v=n("f904"),p=n("5362"),m=n("3d93"),y={name:"search",mixins:[m["a"]],components:{MmLoading:v["a"],MusicList:p["a"]},data:function(){return{searchValue:"",Artists:[],list:[],page:0,lockUp:!0}},computed:Object(f["a"])({},Object(l["c"])(["playing","currentMusic"])),watch:{list:function(t,e){t.length!==e.length?this.lockUp=!1:t[t.length-1].id!==e[e.length-1].id&&(this.lockUp=!1)}},created:function(){var t=this;Object(h["i"])().then(function(e){200===e.data.code&&(t.Artists=e.data.result.hots,t.mmLoadShow=!1)})},methods:Object(f["a"])({clickHot:function(t){this.searchValue=t,this.onEnter()},onEnter:function(){var t=this;""!==this.searchValue.replace(/(^\s+)|(\s+$)/g,"")?(this.mmLoadShow=!0,this.page=0,this.list.length>0&&this.$refs.musicList.scrollTo(),Object(h["h"])(this.searchValue).then(function(e){200===e.data.code&&(t.list=Object(d["b"])(e.data.result.songs),t._hideLoad())})):this.$mmToast("搜索内容不能为空！")},pullUpLoad:function(){var t=this;this.page+=1,Object(h["h"])(this.searchValue,this.page).then(function(e){if(200===e.data.code){if(!e.data.result.songs)return void t.$mmToast("没有更多歌曲啦！");t.list=[].concat(Object(u["a"])(t.list),Object(u["a"])(Object(d["b"])(e.data.result.songs)))}})},selectItem:function(){var t=s(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this._getMusicDetail(e.id);case 2:n=t.sent,e.image=n,this.selectAddPlay(e);case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),_getMusicDetail:function(t){return Object(h["c"])(t).then(function(t){if(200===t.data.code)return t.data.songs[0].al.picUrl})}},Object(l["d"])({setPlaying:"SET_PLAYING"}),Object(l["b"])(["selectAddPlay"]))},g=y,w=(n("31ff"),n("2877")),b=Object(w["a"])(g,r,i,!1,null,"23fd9442",null);e["default"]=b.exports},"656e":function(t,e,n){"use strict";var r=n("79aa");function i(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"795b":function(t,e,n){t.exports=n("696e")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function s(t,e,n,r){var i=e&&e.prototype instanceof p?e:p,o=Object.create(i.prototype),c=new k(r||[]);return o._invoke=j(t,n,c),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",h="executing",d="completed",v={};function p(){}function m(){}function y(){}var g={};g[o]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(T([])));b&&b!==n&&r.call(b,o)&&(g=b);var _=y.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){function e(n,i,o,c){var a=u(t[n],t,i);if("throw"!==a.type){var s=a.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,o,c)},function(t){e("throw",t,o,c)}):Promise.resolve(f).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,c)})}c(a.arg)}var n;function i(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=i}function j(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===i)throw o;return S()}n.method=i,n.arg=o;while(1){var c=n.delegate;if(c){var a=E(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?d:l,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:S}}function S(){return{value:e,done:!0}}return m.prototype=_.constructor=y,y.constructor=m,y[a]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(L.prototype),L.prototype[c]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,i){var o=new L(s(e,n,r,i));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},x(_),_[a]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=T,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:T(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a22a:function(t,e,n){var r=n("d864"),i=n("b0dc"),o=n("3702"),c=n("e4ae"),a=n("b447"),s=n("7cd6"),u={},f={};e=t.exports=function(t,e,n,l,h){var d,v,p,m,y=h?function(){return t}:s(t),g=r(n,l,e?2:1),w=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(d=a(t.length);d>w;w++)if(m=e?g(c(v=t[w])[0],v[1]):g(t[w]),m===u||m===f)return m}else for(p=y.call(t);!(v=p.next()).done;)if(m=i(p,g,v.value,e),m===u||m===f)return m};e.BREAK=u,e.RETURN=f},aba2:function(t,e,n){var r=n("e53d"),i=n("4178").set,o=r.MutationObserver||r.WebKitMutationObserver,c=r.process,a=r.Promise,s="process"==n("6b4c")(c);t.exports=function(){var t,e,n,u=function(){var r,i;s&&(r=c.domain)&&r.exit();while(t){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,r&&r.enter()};if(s)n=function(){c.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var f=a.resolve(void 0);n=function(){f.then(u)}}else n=function(){i.call(r,u)};else{var l=!0,h=document.createTextNode("");new o(u).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},ba7f:function(t,e,n){},bc13:function(t,e,n){var r=n("e53d"),i=r.navigator;t.exports=i&&i.userAgent||""},c207:function(t,e){},cd78:function(t,e,n){var r=n("e4ae"),i=n("f772"),o=n("656e");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),c=n.resolve;return c(e),n.promise}},d6bf:function(t,e,n){},f201:function(t,e,n){var r=n("e4ae"),i=n("79aa"),o=n("5168")("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||void 0==(n=r(c)[o])?e:i(n)}},f904:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:t.loadingBgColor}},[n("div",{staticClass:"mm-loading-content"},[n("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[n("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},i=[],o={name:"mm-loading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String}}},c=o,a=(n("2332"),n("2877")),s=Object(a["a"])(c,r,i,!1,null,null,null);e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-bbcf7f66.3b92a2c0.js.map