!function(){function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(e,r,t,n,i,s,o){try{var a=e[s](o),l=a.value}catch(f){return void t(f)}a.done?r(l):Promise.resolve(l).then(n,i)}function t(e){return function(){var t=this,n=arguments;return new Promise(function(i,s){var o=e.apply(t,n);function a(e){r(o,i,s,a,l,"next",e)}function l(e){r(o,i,s,a,l,"throw",e)}a(void 0)})}}function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,r,t){return r&&i(e.prototype,r),t&&i(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{nYbb:function(r,i,o){"use strict";o.r(i),o.d(i,"ion_refresher",function(){return x}),o.d(i,"ion_refresher_content",function(){return w});var a=o("A36C"),l=o("Zgba"),f=o("6Kqc"),c=o("bP7C"),h=o("bC4P"),u=o("39oe"),p=o("qULd"),g=o("h3R7"),d=function(e){var r=e.querySelector("ion-spinner"),t=r.shadowRoot.querySelector("circle"),n=e.querySelector(".spinner-arrow-container"),i=e.querySelector(".arrow-container"),s=i?i.querySelector("ion-icon"):null,o=Object(c.a)().duration(1e3).easing("ease-out"),a=Object(c.a)().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]),l=Object(c.a)().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]),f=Object(c.a)().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var h=Object(c.a)().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]),u=Object(c.a)().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([h,u])}return o.addAnimation([a,l,f])},m=function(e,r){e.style.setProperty("opacity",r.toString())},b=function(e,r){if(!e)return Promise.resolve();var t=y(e,200);return Object(a.f)(function(){e.style.setProperty("transition","0.2s all ease-out"),void 0===r?e.style.removeProperty("transform"):e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))}),t},v=function(e,r){var t=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return null!==t&&null!==n&&("ios"===r&&Object(l.e)("mobile")&&void 0!==e.style.webkitOverflowScrolling||"md"===r)},y=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return new Promise(function(t){k(e,r,t)})},k=function(e){var r,t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,s={passive:!0},o=function(){r&&r()},a=function(r){void 0!==r&&e!==r.target||(o(),i(r))};return e&&(e.addEventListener("webkitTransitionEnd",a,s),e.addEventListener("transitionend",a,s),t=setTimeout(a,n+500),r=function(){t&&(clearTimeout(t),t=void 0),e.removeEventListener("webkitTransitionEnd",a,s),e.removeEventListener("transitionend",a,s)}),o},x=function(){function r(e){n(this,r),Object(a.o)(this,e),this.ionRefresh=Object(a.g)(this,"ionRefresh",7),this.ionPull=Object(a.g)(this,"ionPull",7),this.ionStart=Object(a.g)(this,"ionStart",7),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.pointerDown=!1,this.needsCompletion=!1,this.didRefresh=!1,this.lastVelocityY=0,this.animations=[],this.nativeRefresher=!1,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1}var i,u,g,k,x,w,j;return s(r,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"checkNativeRefresher",value:function(){var e=v(this.el,Object(l.b)(this));if(e&&!this.nativeRefresher){var r=this.el.closest("ion-content");this.setupNativeRefresher(r)}else e||this.destroyNativeRefresher()}},{key:"destroyNativeRefresher",value:function(){this.scrollEl&&this.scrollListenerCallback&&(this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback),this.scrollListenerCallback=void 0),this.nativeRefresher=!1}},{key:"resetNativeRefresher",value:(j=t(regeneratorRuntime.mark(function e(r,t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=t,"ios"!==Object(l.b)(this)){e.next=6;break}return e.next=4,b(r,void 0);case 4:e.next=8;break;case 6:return e.next=8,y(this.el.querySelector(".refresher-refreshing-icon"),200);case 8:this.didRefresh=!1,this.needsCompletion=!1,this.pointerDown=!1,this.animations.forEach(function(e){return e.destroy()}),this.animations=[],this.progress=0,this.state=1;case 15:case"end":return e.stop()}},e,this)})),function(e,r){return j.apply(this,arguments)})},{key:"setupiOSNativeRefresher",value:(w=t(regeneratorRuntime.mark(function e(r,t){var n,i,s,l=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.elementToTransform=this.scrollEl,n=r.shadowRoot.querySelectorAll("svg"),i=.16*this.scrollEl.clientHeight,s=n.length,Object(a.f)(function(){return n.forEach(function(e){return e.style.setProperty("animation","none")})}),this.scrollListenerCallback=function(){(l.pointerDown||1!==l.state)&&Object(a.h)(function(){var e=l.scrollEl.scrollTop,o=l.el.clientHeight;if(e>0){if(8===l.state){var c=Object(f.h)(0,e/(.5*o),1);return void Object(a.f)(function(){return m(t,1-c)})}Object(a.f)(function(){return m(r,0)})}else{l.pointerDown&&(l.didStart||(l.didStart=!0,l.ionStart.emit()),l.pointerDown&&l.ionPull.emit());var h,u,g=Object(f.h)(0,Math.abs(e)/o,.99),d=l.progress=Object(f.h)(0,(Math.abs(e)-30)/i,1),v=Object(f.h)(0,Math.floor(d*s),s-1);8===l.state||v===s-1?(l.pointerDown&&(h=t,u=l.lastVelocityY,Object(a.f)(function(){h.style.setProperty("--refreshing-rotation-duration",u>=1?"0.5s":"2s"),h.style.setProperty("opacity","1")})),l.didRefresh||(l.beginRefresh(),l.didRefresh=!0,Object(p.d)({style:"light"}),l.pointerDown||b(l.elementToTransform,o+"px"))):(l.state=2,function(e,r,t,n){Object(a.f)(function(){m(e,t),r.forEach(function(e,r){return e.style.setProperty("opacity",r<=n?"0.99":"0")})})}(r,n,g,v))}})},this.scrollEl.addEventListener("scroll",this.scrollListenerCallback),e.next=9,Promise.resolve().then(o.bind(null,"iWo5"));case 9:this.gesture=e.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){l.pointerDown=!0,l.didRefresh||b(l.elementToTransform,"0px"),0===i&&(i=.16*l.scrollEl.clientHeight)},onMove:function(e){l.lastVelocityY=e.velocityY},onEnd:function(){l.pointerDown=!1,l.didStart=!1,l.needsCompletion?(l.resetNativeRefresher(l.elementToTransform,32),l.needsCompletion=!1):l.didRefresh&&Object(a.h)(function(){return b(l.elementToTransform,l.el.clientHeight+"px")})}}),this.disabledChanged();case 11:case"end":return e.stop()}},e,this)})),function(e,r){return w.apply(this,arguments)})},{key:"setupMDNativeRefresher",value:(x=t(regeneratorRuntime.mark(function e(r,n,i){var s,l,u,p=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(f.g)(n).querySelector("circle"),l=this.el.querySelector("ion-refresher-content .refresher-pulling-icon"),u=Object(f.g)(i).querySelector("circle"),null!==s&&null!==u&&Object(a.f)(function(){s.style.setProperty("animation","none"),i.style.setProperty("animation-delay","-655ms"),u.style.setProperty("animation-delay","-655ms")}),e.next=4,Promise.resolve().then(o.bind(null,"iWo5"));case 4:this.gesture=e.sent.createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return 8!==p.state&&32!==p.state&&0===p.scrollEl.scrollTop},onStart:function(e){e.data={animation:void 0,didStart:!1,cancelled:!1}},onMove:function(e){if(e.velocityY<0&&0===p.progress&&!e.data.didStart||e.data.cancelled)e.data.cancelled=!0;else{if(!e.data.didStart)return e.data.didStart=!0,p.state=2,void Object(a.f)(function(){var t=function(e,r){return"scale"===e?function(e){var r=e.clientHeight,t=Object(c.a)().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(r+20,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return d(e).addAnimation([t])}(r):function(e){var r=e.clientHeight,t=Object(c.a)().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(r+20,"px)")},{offset:1,transform:"translateY(100px)"}]);return d(e).addAnimation([t])}(r)}(function(e){var r=e.previousElementSibling;return null!==r&&"ION-HEADER"===r.tagName?"translate":"scale"}(r),l);e.data.animation=t,p.scrollEl.style.setProperty("--overflow","hidden"),t.progressStart(!1,0),p.ionStart.emit(),p.animations.push(t)});p.progress=Object(f.h)(0,e.deltaY/180*.5,1),e.data.animation.progressStep(p.progress),p.ionPull.emit()}},onEnd:function(e){if(e.data.didStart){if(Object(a.f)(function(){return p.scrollEl.style.removeProperty("--overflow")}),p.progress<=.4)return p.gesture.enable(!1),void e.data.animation.progressEnd(0,p.progress,500).onFinish(function(){p.animations.forEach(function(e){return e.destroy()}),p.animations=[],p.gesture.enable(!0),p.state=1});var r=Object(h.a)([0,0],[0,0],[1,1],[1,1],p.progress)[0],n=function(e){return Object(c.a)().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")}(l);p.animations.push(n),Object(a.f)(t(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l.style.setProperty("--ion-pulling-refresher-translate",100*r+"px"),e.data.animation.progressEnd(),t.next=4,n.play();case 4:p.beginRefresh(),e.data.animation.destroy();case 6:case"end":return t.stop()}},t)})))}}}),this.disabledChanged();case 6:case"end":return e.stop()}},e,this)})),function(e,r,t){return x.apply(this,arguments)})},{key:"setupNativeRefresher",value:(k=t(regeneratorRuntime.mark(function e(r){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.scrollListenerCallback&&r&&!this.nativeRefresher&&this.scrollEl){e.next=2;break}return e.abrupt("return");case 2:this.nativeRefresher=!0,t=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner"),n=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner"),"ios"===Object(l.b)(this)?this.setupiOSNativeRefresher(t,n):this.setupMDNativeRefresher(r,t,n);case 5:case"end":return e.stop()}},e,this)})),function(e){return k.apply(this,arguments)})},{key:"componentDidUpdate",value:function(){this.checkNativeRefresher()}},{key:"connectedCallback",value:(g=t(regeneratorRuntime.mark(function e(){var r,t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("fixed"===this.el.getAttribute("slot")){e.next=2;break}return e.abrupt("return",void console.error('Make sure you use: <ion-refresher slot="fixed">'));case 2:if(!(r=this.el.closest("ion-content"))){e.next=20;break}return e.next=6,r.componentOnReady();case 6:return e.next=8,r.getScrollElement();case 8:if(this.scrollEl=e.sent,this.backgroundContentEl=Object(f.g)(r).querySelector("#background-content"),!v(this.el,Object(l.b)(this))){e.next=14;break}this.setupNativeRefresher(r),e.next=18;break;case 14:return e.next=16,Promise.resolve().then(o.bind(null,"iWo5"));case 16:this.gesture=e.sent.createGesture({el:r,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:!1,canStart:function(){return t.canStart()},onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(){return t.onEnd()}}),this.disabledChanged();case 18:e.next=21;break;case 20:console.error("<ion-refresher> must be used inside an <ion-content>");case 21:case"end":return e.stop()}},e,this)})),function(){return g.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.destroyNativeRefresher(),this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:(u=t(regeneratorRuntime.mark(function e(){var r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?(this.needsCompletion=!0,this.pointerDown||Object(f.p)(function(){return Object(f.p)(function(){return r.resetNativeRefresher(r.elementToTransform,32)})})):this.close(32,"120ms");case 1:case"end":return e.stop()}},e,this)})),function(){return u.apply(this,arguments)})},{key:"cancel",value:(i=t(regeneratorRuntime.mark(function e(){var r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.nativeRefresher?this.pointerDown||Object(f.p)(function(){return Object(f.p)(function(){return r.resetNativeRefresher(r.elementToTransform,16)})}):this.close(16,"");case 1:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)})},{key:"getProgress",value:function(){return Promise.resolve(this.progress)}},{key:"canStart",value:function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)}},{key:"onStart",value:function(){this.progress=0,this.state=1}},{key:"onMove",value:function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,n=e.deltaY*t;if(n<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(n,"0ms",!0,""),0!==n){var i=this.pullMin;this.progress=n/i,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),n<i?this.state=2:n>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}}},{key:"onEnd",value:function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()}},{key:"beginRefresh",value:function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})}},{key:"close",value:function(e,r){var t=this;setTimeout(function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")},600),this.state=e,this.setCss(0,this.closeDuration,!0,r)}},{key:"setCss",value:function(e,r,t,n){var i=this;this.nativeRefresher||(this.appliedStyles=e>0,Object(a.f)(function(){if(i.scrollEl&&i.backgroundContentEl){var s=i.scrollEl.style,o=i.backgroundContentEl.style;s.transform=o.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"",s.transitionDuration=o.transitionDuration=r,s.transitionDelay=o.transitionDelay=n,s.overflow=t?"hidden":""}}))}},{key:"render",value:function(){var r,t=Object(l.b)(this);return Object(a.j)(a.c,{slot:"fixed",class:(r={},e(r,t,!0),e(r,"refresher-"+t,!0),e(r,"refresher-native",this.nativeRefresher),e(r,"refresher-active",1!==this.state),e(r,"refresher-pulling",2===this.state),e(r,"refresher-ready",4===this.state),e(r,"refresher-refreshing",8===this.state),e(r,"refresher-cancelling",16===this.state),e(r,"refresher-completing",32===this.state),r)})}},{key:"el",get:function(){return Object(a.k)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),r}();x.style={ios:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}",md:"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}[dir=rtl] ion-refresher,:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}[dir=rtl] .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .arrow-container ion-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;border-radius:100%;padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid #ececec;background:white;-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}"};var w=function(){function e(r){n(this,e),Object(a.o)(this,r)}return s(e,[{key:"componentWillLoad",value:function(){if(void 0===this.pullingIcon){var e=Object(l.b)(this),r=void 0!==this.el.style.webkitOverflowScrolling?"lines":"arrow-down";this.pullingIcon=l.c.get("refreshingIcon","ios"===e&&Object(l.e)("mobile")?l.c.get("spinner",r):"circular")}if(void 0===this.refreshingSpinner){var t=Object(l.b)(this);this.refreshingSpinner=l.c.get("refreshingSpinner",l.c.get("spinner","ios"===t?"lines":"circular"))}}},{key:"render",value:function(){var e=this.pullingIcon,r=null!=e&&void 0!==g.a[e],t=Object(l.b)(this);return Object(a.j)(a.c,{class:t},Object(a.j)("div",{class:"refresher-pulling"},this.pullingIcon&&r&&Object(a.j)("div",{class:"refresher-pulling-icon"},Object(a.j)("div",{class:"spinner-arrow-container"},Object(a.j)("ion-spinner",{name:this.pullingIcon,paused:!0}),"md"===t&&"circular"===this.pullingIcon&&Object(a.j)("div",{class:"arrow-container"},Object(a.j)("ion-icon",{name:"caret-back-sharp"})))),this.pullingIcon&&!r&&Object(a.j)("div",{class:"refresher-pulling-icon"},Object(a.j)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(a.j)("div",{class:"refresher-pulling-text",innerHTML:Object(u.a)(this.pullingText)})),Object(a.j)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(a.j)("div",{class:"refresher-refreshing-icon"},Object(a.j)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(a.j)("div",{class:"refresher-refreshing-text",innerHTML:Object(u.a)(this.refreshingText)})))}},{key:"el",get:function(){return Object(a.k)(this)}}]),e}()}}])}();