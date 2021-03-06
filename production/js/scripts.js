/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/* Countup.js */
var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.decimalMult)/s.decimalMult,s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+="").split("."))[0],e=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){r="";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign({},this.defaults,a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();export{CountUp};

/* Location.js */
const images = [
  'img/location/a0.jpg',
  'img/location/a1.jpg',
  'img/location/a2.jpg',
  'img/location/a3.jpg',
  'img/location/a4.jpg',
  'img/location/a5.jpg',
  'img/location/a6.jpg',
  'img/location/a7.jpg',
  'img/location/a8.jpg',
  'img/location/a9.jpg',
  'img/location/a10.jpg',
  'img/location/a11.jpg',
  'img/location/a12.jpg',
  'img/location/a13.jpg',
  'img/location/a14.jpg',
  'img/location/a15.jpg',
  'img/location/a16.jpg',
  'img/location/a17.jpg',
  'img/location/a18.jpg',
  'img/location/a19.jpg',
  'img/location/a20.jpg',
  'img/location/k0.jpg',
  'img/location/k1.jpg',
  'img/location/k2.jpg',
  'img/location/k3.jpg',
  'img/location/k4.jpg',
  'img/location/k5.jpg',
  'img/location/k6.jpg',
  'img/location/k7.jpg',
  'img/location/k8.jpg',
  'img/location/k9.jpg',
  'img/location/k10.jpg',
  'img/location/k11.jpg',
  'img/location/k12.jpg',
  'img/location/k13.jpg',
  'img/location/k14.jpg',
  'img/location/k15.jpg',
  'img/location/k16.jpg',
  'img/location/k17.jpg',
  'img/location/k18.jpg',
  'img/location/k19.jpg',
  'img/location/k20.jpg',
  'img/location/k21.jpg',
  'img/location/k22.jpg',
  'img/location/k23.jpg',
  'img/location/k24.jpg',
  'img/location/k25.jpg',
  'img/location/k26.jpg',
  'img/location/k27.jpg',
  'img/location/k28.jpg',
  'img/location/r0.jpg',
  'img/location/r1.jpg',
  'img/location/r2.jpg',
  'img/location/r3.jpg',
  'img/location/r4.jpg',
  'img/location/r5.jpg',
  'img/location/r6.jpg',
  'img/location/r7.jpg',
  'img/location/r8.jpg',
  'img/location/r9.jpg',
  'img/location/r10.jpg',
  'img/location/r11.jpg',
  'img/location/r12.jpg',
  'img/location/r13.jpg',
  'img/location/r14.jpg',
  'img/location/r15.jpg',
  'img/location/r16.jpg',
  'img/location/r17.jpg',
  'img/location/r18.jpg',
  'img/location/r19.jpg',
  'img/location/r20.jpg',
  'img/location/r21.jpg',
  'img/location/r22.jpg',
  'img/location/r23.jpg',
  'img/location/r24.jpg',
  'img/location/r25.jpg'
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let shuffledImages = shuffle(images);

let i = 0;
const canvas = document.querySelector('.section--locations .js-drawcanvas');

function placeImage(x, y) {
  const nextImage = shuffledImages[i];
  const img = document.createElement('img');
  img.setAttribute('src', nextImage);
  img.setAttribute('class', 'js-img');
  img.style.left = x + 'px';
  img.style.top = y + 'px';
  img.style.transform =
    'translate(-50%, -50%) scale(0.5) rotate(' + (Math.random() * 20 - 10) + 'deg)';

  canvas.appendChild(img);

  i++;
  if (i >= shuffledImages.length) {
    i = 0;
  }
}

var clientX, clientY;

canvas.addEventListener('click', function(e) {
  e.preventDefault();
  placeImage(e.pageX, e.pageY);
  console.log('click', e.pageX, e.pageY);
});

canvas.addEventListener('touchstart', function(e) {
  e.preventDefault();
  clientX = Math.floor(e.touches[0].clientX);
  clientY = Math.floor(e.touches[0].clientY);
});

canvas.addEventListener('touchend', function(e) {
  e.preventDefault();
  placeImage(clientX, clientY);
  console.log('click', clientX, clientY);
});

const resetButton = document.querySelector('.section--locations .js-reset');
resetButton.addEventListener('click', function(e) {
  e.preventDefault();
  canvas.innerHTML = '';
});

/* Draw.js */
var aniFrame;

function initCanvas() {
  const canvas = document.querySelector('#drawingboard');

  canvas.width = window.innerWidth * 2;
  canvas.height = window.innerHeight * 2;

  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';

  const context = canvas.getContext('2d');
  context.scale(2, 2);

  let aimX = null;
  let aimY = null;
  let currentX = null;
  let currentY = null;

  let i = 0;
  const images = ['img/at-logo.png', 'img/at-2019.png', 'img/at-more.png'].map(src => {
    const image = document.createElement('img');
    image.src = src;
    return image;
  });

  document.addEventListener('mousemove', function(e) {
    aimX = e.pageX;
    aimY = e.pageY;
    if (currentX === null) {
      currentX = e.pageX;
      currentY = e.pageY;
    }
  });

  canvas.addEventListener('click', function(e) {
    i = i + 1;
    if (i >= images.length) {
      i = 0;
    }
  });

  const draw = function() {
    if (currentX) {
      if (images[i].complete) {
        context.drawImage(images[i], currentX - 122, currentY - 35, 243, 70);
      }
      currentX = currentX + (aimX - currentX) * 0.1;
      currentY = currentY + (aimY - currentY) * 0.1;
    }

    aniFrame = requestAnimationFrame(draw);
  };

  const resetButton = document.querySelector('.section--intro .js-reset');
  resetButton.addEventListener('click', function(e) {
    console.log(context);
    e.preventDefault();
    resetCanvas(context);
  });
  draw();
}

function resetCanvas(el) {
  cancelAnimationFrame(aniFrame);
  el.clearRect(0, 0, window.innerWidth * 2, window.innerHeight * 2);
  restartCanvas();
}
function restartCanvas() {
  var countID = setInterval(
    function(e) {
      initCanvas();
      console.log(countID);
      clearInterval(countID);
    },
    3000,
    this
  );
}
initCanvas();

/* Animation.js */
var AnimateElement = function(element, method, callback) {
  console.log('animate', element, 'method', method, 'when done do:', callback);
  var node = element;
  if (typeof element === 'string') {
    node = document.querySelector(element);
  }
  node.classList.add('animated', ...method);
  function handleAnimationEnd() {
    node.classList.remove('animated', method);
    node.removeEventListener('animationed', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }
  node.addEventListener('animationend', handleAnimationEnd);
}
export {AnimateElement};

/* Tinder.js */
'use strict';

var TinderCards = function(){

var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');

function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(' + 24 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);
}

export {TinderCards};

/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(Rt,Nt){"use strict";var zt="fullpage-wrapper",jt="."+zt,Pt="fp-responsive",Dt="fp-notransition",Vt="fp-destroyed",Wt="fp-enabled",Yt="fp-viewing",Ft="active",Ut="."+Ft,Xt="fp-completely",Kt="fp-section",_t="."+Kt,$t=_t+Ut,qt="fp-tableCell",Qt="."+qt,Gt="fp-auto-height",Jt="fp-normal-scroll",Zt="fp-nav",en="#"+Zt,tn="fp-tooltip",nn="fp-slide",on="."+nn,rn=on+Ut,ln="fp-slides",an="."+ln,sn="fp-slidesContainer",cn="."+sn,un="fp-table",fn="fp-slidesNav",dn="."+fn,vn=dn+" a",e="fp-controlArrow",pn="."+e,hn="fp-prev",gn=pn+".fp-prev",mn=pn+".fp-next";function Sn(e,t){Rt.console&&Rt.console[e]&&Rt.console[e]("fullPage: "+t)}function wn(e,t){return(t=1<arguments.length?t:Nt)?t.querySelectorAll(e):null}function bn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=bn(e[r],o[r]))}return e}function yn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function En(){return"innerHeight"in Rt?Rt.innerHeight:Nt.documentElement.offsetHeight}function Ln(){return Rt.innerWidth}function xn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!_n(o,t);)o=o[n];return o}function An(e,t){return n(e,t,"previousElementSibling")}function Tn(e,t){return n(e,t,"nextElementSibling")}function kn(e){return e.previousElementSibling}function On(e){return e.nextElementSibling}function Mn(e){return e[e.length-1]}function Cn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?wn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return i(e)?e:[e]}function Hn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function In(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function Bn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function Rn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function Nn(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||Nt.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function zn(e,t){o(e,t,!0)}function jn(e,t){for("string"==typeof t&&(t=qn(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function Pn(e){for(var t=Nt.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function Dn(e,t){return e&&1===e.nodeType?_n(e,t)?e:Dn(e.parentNode,t):null}function Vn(e,t){r(e,e.nextSibling,t)}function Wn(e,t){r(e,e,t)}function r(e,t,n){i(n)||("string"==typeof n&&(n=qn(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function Yn(){var e=Nt.documentElement;return(Rt.pageYOffset||e.scrollTop)-(e.clientTop||0)}function Fn(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function Un(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function Xn(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Kn(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof Rt.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=Nt.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function _n(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function $n(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function qn(e){var t=Nt.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Qn(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function a(e,t,n){for(var o=e[n],r=[];o;)(_n(o,t)||null==t)&&r.push(o),o=o[n];return r}function Gn(e,t){return a(e,t,"nextElementSibling")}function Jn(e,t){return a(e,t,"previousElementSibling")}return Rt.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Rt;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),Rt.fp_utils={$:wn,deepExtend:bn,hasClass:yn,getWindowHeight:En,css:xn,until:n,prevUntil:An,nextUntil:Tn,prev:kn,next:On,last:Mn,index:Cn,getList:l,hide:Hn,show:In,isArrayOrList:i,addClass:Bn,removeClass:Rn,appendTo:Nn,wrap:o,wrapAll:zn,wrapInner:jn,unwrap:Pn,closest:Dn,after:Vn,before:Wn,insertBefore:r,getScrollTop:Yn,siblings:Fn,preventDefault:Un,isFunction:Xn,trigger:Kn,matches:_n,toggle:$n,createElementFromHTML:qn,remove:Qn,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:a,nextAll:Gn,prevAll:Jn,showError:Sn},function(e,E){var n=E&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey)||-1<Nt.domain.indexOf("alvarotrigo.com"),r=wn("html, body"),u=wn("html")[0],L=wn("body")[0];if(!yn(u,Wt)){var h={};E=bn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Rt.fp_scrolloverflow?Rt.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?wn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},E);var x,i,c,f,a=!1,o=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),l="ontouchstart"in Rt||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,d="string"==typeof e?wn(e)[0]:e,A=En(),s=Ln(),g=!1,t=!0,T=!0,v=[],p={m:{up:!0,down:!0,left:!0,right:!0}};p.k=bn({},p.m);var m,S,w,b,y,k,O,M,C,H=Rt.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},I={touchmove:"ontouchmove"in Rt?"touchmove":H.move,touchstart:"ontouchstart"in Rt?"touchstart":H.down},B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',R=!1;try{var N=Object.defineProperty({},"passive",{get:function(){R=!0}});Rt.addEventListener("testPassive",null,N),Rt.removeEventListener("testPassive",null,N)}catch(e){}var z,j,P=bn({},E),D=!1,V=!0,W=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Ot(),Rt.fp_easings=bn(Rt.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),d&&(h.version="3.0.8",h.setAutoScrolling=J,h.setRecordHistory=Z,h.setScrollingSpeed=ee,h.setFitToSection=te,h.setLockAnchors=function(e){E.lockAnchors=e},h.setMouseWheelScrolling=ne,h.setAllowScrolling=oe,h.setKeyboardScrolling=ie,h.moveSectionUp=le,h.moveSectionDown=ae,h.silentMoveTo=se,h.moveTo=ce,h.moveSlideRight=ue,h.moveSlideLeft=fe,h.fitToSection=Le,h.reBuild=de,h.setResponsive=pe,h.getFullpageData=function(){return E},h.destroy=function(e){J(!1,"internal"),oe(!0),re(!1),ie(!1),Bn(d,Vt),[y,b,S,k,O,C,w].forEach(function(e){clearTimeout(e)}),Rt.removeEventListener("scroll",Ee),Rt.removeEventListener("hashchange",$e),Rt.removeEventListener("resize",it),Nt.removeEventListener("keydown",Qe),Nt.removeEventListener("keyup",Ge),["click","touchstart"].forEach(function(e){Nt.removeEventListener(e,he)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){Nt.removeEventListener(e,me,!0)}),e&&(xt(0),wn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",d).forEach(function(e){De(e,"src")}),wn("img[data-srcset]").forEach(function(e){De(e,"srcset")}),Qn(wn(en+", "+dn+", "+pn)),xn(wn(_t),{height:"","background-color":"",padding:""}),xn(wn(on),{width:""}),xn(d,{height:"",position:"","-ms-touch-action":"","touch-action":""}),xn(r,{overflow:"",height:""}),Rn(u,Wt),Rn(L,Pt),L.className.split(/\s+/).forEach(function(e){0===e.indexOf(Yt)&&Rn(L,e)}),wn(_t+", "+on).forEach(function(e){E.scrollOverflowHandler&&E.scrollOverflow&&E.scrollOverflowHandler.remove(e),Rn(e,un+" "+Ft+" "+Xt);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),yn(e,Kt)&&!D&&e.removeAttribute("data-anchor")}),ct(d),[Qt,cn,an].forEach(function(e){wn(e,d).forEach(function(e){Pn(e)})}),xn(d,{"-webkit-transition":"none",transition:"none"}),Rt.scrollTo(0,0),[Kt,nn,sn].forEach(function(e){Rn(wn("."+e),e)}))},h.getActiveSection=function(){return new It(wn($t)[0])},h.getActiveSlide=function(){return ze(wn(rn,wn($t)[0])[0])},h.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<wn(E.sectionSelector,d).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<wn(E.sectionSelector,d).length;t++)e.push(0);return e}(),options:E,setAutoScrolling:J},h.shared={afterRenderActions:ye,isNormalScrollElement:!1},Rt.fullpage_api=h,E.$&&Object.keys(h).forEach(function(e){E.$.fn.fullpage[e]=h[e]}),E.css3&&(E.css3=function(){var e,t=Nt.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",Nt.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Rt.getComputedStyle(t).getPropertyValue(n[o]));return Nt.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),E.scrollBar=E.scrollBar||E.hybrid,function(){if(!E.anchors.length){var e="[data-anchor]",t=wn(E.sectionSelector.split(",").join(e+",")+e,d);t.length&&(D=!0,t.forEach(function(e){E.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!E.navigationTooltips.length){var n="[data-tooltip]",o=wn(E.sectionSelector.split(",").join(n+",")+n,d);o.length&&o.forEach(function(e){E.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){xn(d,{height:"100%",position:"relative"}),Bn(d,zt),Bn(u,Wt),A=En(),Rn(d,Vt),Bn(wn(E.sectionSelector,d),Kt),Bn(wn(E.slideSelector,d),nn);for(var e=wn(_t),t=0;t<e.length;t++){var n=t,o=e[t],r=wn(on,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),s=o,(c=n)||null!=wn($t)[0]||Bn(s,Ft),f=wn($t)[0],xn(s,{height:A+"px"}),E.paddingTop&&xn(s,{"padding-top":E.paddingTop}),E.paddingBottom&&xn(s,{"padding-bottom":E.paddingBottom}),void 0!==E.sectionsColor[c]&&xn(s,{"background-color":E.sectionsColor[c]}),void 0!==E.anchors[c]&&s.setAttribute("data-anchor",E.anchors[c]),l=o,a=n,void 0!==E.anchors[a]&&yn(l,Ft)&&ut(E.anchors[a],a),E.menu&&E.css3&&null!=Dn(wn(E.menu)[0],jt)&&wn(E.menu).forEach(function(e){L.appendChild(e)}),0<i?we(o,r,i):E.verticalCentered&&dt(o)}var l,a,s,c;E.fixedElements&&E.css3&&wn(E.fixedElements).forEach(function(e){L.appendChild(e)}),E.navigation&&function(){var e=Nt.createElement("div");e.setAttribute("id",Zt);var t=Nt.createElement("ul");e.appendChild(t),Nn(e,L);var n=wn(en)[0];Bn(n,"fp-"+E.navigationPosition),E.showActiveTooltip&&Bn(n,"fp-show-active");for(var o="",r=0;r<wn(_t).length;r++){var i="";E.anchors.length&&(i=E.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+be(r,"Section")+"</span><span></span></a>";var l=E.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+tn+" fp-"+E.navigationPosition+'">'+l+"</div>"),o+="</li>"}wn("ul",n)[0].innerHTML=o,xn(wn(en),{"margin-top":"-"+wn(en)[0].offsetHeight/2+"px"}),Bn(wn("a",wn("li",wn(en)[0])[Cn(wn($t)[0],_t)]),Ft)}(),wn('iframe[src*="youtube.com/embed/"]',d).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),E.scrollOverflow&&(m=E.scrollOverflowHandler.init(E))}(),oe(!0),re(!0),J(E.autoScrolling,"internal"),at(),yt(),"complete"===Nt.readyState&&_e(),Rt.addEventListener("load",_e),E.scrollOverflow||ye(),function(){for(var e=1;e<4;e++)C=setTimeout(Se,350*e)}(),Rt.addEventListener("scroll",Ee),Rt.addEventListener("hashchange",$e),Rt.addEventListener("blur",tt),Rt.addEventListener("resize",it),Nt.addEventListener("keydown",Qe),Nt.addEventListener("keyup",Ge),["click","touchstart"].forEach(function(e){Nt.addEventListener(e,he)}),E.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){ge(e,!1)}),["mouseleave","touchend"].forEach(function(e){ge(e,!0)})));var Y=!1,F=0,U=0,X=0,K=0,_=0,$=(new Date).getTime(),q=0,Q=0,G=A;return h}function J(e,t){e||xt(0),kt("autoScrolling",e,t);var n=wn($t)[0];if(E.autoScrolling&&!E.scrollBar)xn(r,{overflow:"hidden",height:"100%"}),Z(P.recordHistory,"internal"),xn(d,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&xt(n.offsetTop);else if(xn(r,{overflow:"visible",height:"initial"}),Z(!!E.autoScrolling&&P.recordHistory,"internal"),xn(d,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=je(n.offsetTop);o.element.scrollTo(0,o.options)}}function Z(e,t){kt("recordHistory",e,t)}function ee(e,t){kt("scrollingSpeed",e,t)}function te(e,t){kt("fitToSection",e,t)}function ne(e){e?(function(){var e,t="";Rt.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in Nt.createElement("div")?"wheel":void 0!==Nt.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!R&&{passive:!1};"DOMMouseScroll"==n?Nt[e](t+"MozMousePixelScroll",Ce,o):Nt[e](t+n,Ce,o)}(),d.addEventListener("mousedown",Je),d.addEventListener("mouseup",Ze)):(Nt.addEventListener?(Nt.removeEventListener("mousewheel",Ce,!1),Nt.removeEventListener("wheel",Ce,!1),Nt.removeEventListener("MozMousePixelScroll",Ce,!1)):Nt.detachEvent("onmousewheel",Ce),d.removeEventListener("mousedown",Je),d.removeEventListener("mouseup",Ze))}function oe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Tt(t,e,"m")}):Tt(t,"all","m")}function re(e){e?(ne(!0),function(){if(o||l){E.autoScrolling&&(L.removeEventListener(I.touchmove,Ae,{passive:!1}),L.addEventListener(I.touchmove,Ae,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Oe),e.removeEventListener(I.touchmove,Te,{passive:!1}),e.addEventListener(I.touchstart,Oe),e.addEventListener(I.touchmove,Te,{passive:!1})}}()):(ne(!1),function(){if(o||l){E.autoScrolling&&(L.removeEventListener(I.touchmove,Te,{passive:!1}),L.removeEventListener(I.touchmove,Ae,{passive:!1}));var e=E.touchWrapper;e.removeEventListener(I.touchstart,Oe),e.removeEventListener(I.touchmove,Te,{passive:!1})}}())}function ie(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Tt(t,e,"k")}):(Tt(t,"all","k"),E.keyboardScrolling=t)}function le(){var e=An(wn($t)[0],_t);e||!E.loopTop&&!E.continuousVertical||(e=Mn(wn(_t))),null!=e&&Be(e,null,!0)}function ae(){var e=Tn(wn($t)[0],_t);e||!E.loopBottom&&!E.continuousVertical||(e=wn(_t)[0]),null!=e&&Be(e,null,!1)}function se(e,t){ee(0,"internal"),ce(e,t),ee(P.scrollingSpeed,"internal")}function ce(e,t){var n=ht(e);void 0!==t?gt(e,t):null!=n&&Be(n)}function ue(e){He("right",e)}function fe(e){He("left",e)}function de(e){if(!yn(d,Vt)){g=!0,A=En(),s=Ln();for(var t=wn(_t),n=0;n<t.length;++n){var o=t[n],r=wn(an,o)[0],i=wn(on,o);E.verticalCentered&&xn(wn(Qt,o),{height:vt(o)+"px"}),xn(o,{height:A+"px"}),1<i.length&&ot(r,wn(rn,r)[0])}E.scrollOverflow&&m.createScrollBarForAll();var l=Cn(wn($t)[0],_t);l&&se(l+1),g=!1,Xn(E.afterResize)&&e&&E.afterResize.call(d,Rt.innerWidth,Rt.innerHeight),Xn(E.afterReBuild)&&!e&&E.afterReBuild.call(d)}}function ve(){return yn(L,Pt)}function pe(e){var t=ve();e?t||(J(!1,"internal"),te(!1,"internal"),Hn(wn(en)),Bn(L,Pt),Xn(E.afterResponsive)&&E.afterResponsive.call(d,e),E.scrollOverflow&&m.createScrollBarForAll()):t&&(J(P.autoScrolling,"internal"),te(P.autoScrolling,"internal"),In(wn(en)),Rn(L,Pt),Xn(E.afterResponsive)&&E.afterResponsive.call(d,e))}function he(e){var t=e.target;t&&Dn(t,en+" a")?function(e){Un(e);var t=Cn(Dn(this,en+" li"));Be(wn(_t)[t])}.call(t,e):_n(t,".fp-tooltip")?function(){Kn(kn(this),"click")}.call(t):_n(t,pn)?function(){var e=Dn(this,_t);yn(this,hn)?p.m.left&&fe(e):p.m.right&&ue(e)}.call(t,e):_n(t,vn)||null!=Dn(t,vn)?function(e){Un(e);var t=wn(an,Dn(this,_t))[0],n=wn(on,t)[Cn(Dn(this,"li"))];ot(t,n)}.call(t,e):Dn(t,E.menu+" [data-menuanchor]")&&function(e){!wn(E.menu)[0]||!E.lockAnchors&&E.anchors.length||(Un(e),ce(this.getAttribute("data-menuanchor")))}.call(t,e)}function ge(e,t){Nt["fp_"+e]=t,Nt.addEventListener(e,me,!0)}function me(e){var t=e.type,o=!1,r=E.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==Nt||!i)return re(!0),void(r&&E.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(V=!1,setTimeout(function(){V=!0},800)),("mouseenter"!==t||V)&&(E.normalScrollElements.split(",").forEach(function(e){if(!o){var t=_n(i,e),n=Dn(i,e);(t||n)&&(h.shared.isNormalScrollElement||(re(!1),r&&E.scrollOverflowHandler.setIscroll(i,!1)),h.shared.isNormalScrollElement=!0,o=!0)}}),!o&&h.shared.isNormalScrollElement&&(re(!0),r&&E.scrollOverflowHandler.setIscroll(i,!0),h.shared.isNormalScrollElement=!1))}function Se(){var e=En(),t=Ln();A===e&&s===t||(A=e,s=t,de(!0))}function we(e,t,n){var o=100*n,r=100/n,i=Nt.createElement("div");i.className=ln,zn(t,i);var l,a,s=Nt.createElement("div");s.className=sn,zn(t,s),xn(wn(cn,e),{width:o+"%"}),1<n&&(E.controlArrows&&(l=e,a=[qn('<div class="fp-controlArrow fp-prev"></div>'),qn('<div class="fp-controlArrow fp-next"></div>')],Vn(wn(an,l)[0],a),"#fff"!==E.controlArrowColor&&(xn(wn(mn,l),{"border-color":"transparent transparent transparent "+E.controlArrowColor}),xn(wn(gn,l),{"border-color":"transparent "+E.controlArrowColor+" transparent transparent"})),E.loopHorizontal||Hn(wn(gn,l))),E.slidesNavigation&&function(e,t){Nn(qn('<div class="'+fn+'"><ul></ul></div>'),e);var n=wn(dn,e)[0];Bn(n,"fp-"+E.slidesNavPosition);for(var o=0;o<t;o++)Nn(qn('<li><a href="#"><span class="fp-sr-only">'+be(o,"Slide")+"</span><span></span></a></li>"),wn("ul",n)[0]);xn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),Bn(wn("a",wn("li",n)[0]),Ft)}(e,n)),t.forEach(function(e){xn(e,{width:r+"%"}),E.verticalCentered&&dt(e)});var c=wn(rn,e)[0];null!=c&&(0!==Cn(wn($t),_t)||0===Cn(wn($t),_t)&&0!==Cn(c))?Lt(c,"internal"):Bn(t[0],Ft)}function be(e,t){return E.navigationTooltips[e]||E.anchors[e]||t+" "+(e+1)}function ye(){var e,t,n=wn($t)[0];Bn(n,Xt),We(n),Ve(),Fe(n),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e=qe(),t=ht(e.section),e.section&&t&&(void 0===t||Cn(t)!==Cn(f))||!Xn(E.afterLoad)||Re("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:Cn(n,_t)}),Xn(E.afterRender)&&Re("afterRender")}function Ee(){var e,t,n,o,r,i;if(!E.autoScrolling||E.scrollBar){var l=Yn(),a=(i=F<(r=l)?"down":"up",q=F=r,i),s=0,c=l+En()/2,u=L.offsetHeight-En()===l,f=wn(_t);if(u)s=f.length-1;else if(l)for(var d=0;d<f.length;++d)f[d].offsetTop<=c&&(s=d);else s=0;if(t=a,n=wn($t)[0].offsetTop,o=n+En(),("up"!=t?n<=Yn():o>=Yn()+En())&&(yn(wn($t)[0],Xt)||(Bn(wn($t)[0],Xt),Rn(Fn(wn($t)[0]),Xt))),!yn(e=f[s],Ft)){Y=!0;var v,p,h=wn($t)[0],g=Cn(h,_t)+1,m=ft(e),S=e.getAttribute("data-anchor"),w=Cn(e,_t)+1,b=wn(rn,e)[0],y={activeSection:h,sectionIndex:w-1,anchorLink:S,element:e,leavingSection:g,direction:m};b&&(p=b.getAttribute("data-anchor"),v=Cn(b)),T&&(Bn(e,Ft),Rn(Fn(e),Ft),Xn(E.onLeave)&&Re("onLeave",y),Xn(E.afterLoad)&&Re("afterLoad",y),Xe(h),We(e),Fe(e),ut(S,w-1),E.anchors.length&&(x=S),St(v,p,S)),clearTimeout(k),k=setTimeout(function(){Y=!1},100)}E.fitToSection&&(clearTimeout(O),O=setTimeout(function(){E.fitToSection&&wn($t)[0].offsetHeight<=A&&Le()},E.fitToSectionDelay))}}function Le(){T&&(g=!0,Be(wn($t)[0]),g=!1)}function xe(e){if(p.m[e]){var t="down"===e?ae:le;if(E.scrollOverflow){var n=E.scrollOverflowHandler.scrollable(wn($t)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!E.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ae(e){E.autoScrolling&&ke(e)&&p.m.up&&Un(e)}function Te(e){var t=Dn(e.target,_t)||wn($t)[0];if(ke(e)){E.autoScrolling&&Un(e);var n=Et(e);K=n.y,_=n.x,wn(an,t).length&&Math.abs(X-_)>Math.abs(U-K)?!a&&Math.abs(X-_)>Ln()/100*E.touchSensitivity&&(_<X?p.m.right&&ue(t):p.m.left&&fe(t)):E.autoScrolling&&T&&Math.abs(U-K)>Rt.innerHeight/100*E.touchSensitivity&&(K<U?xe("down"):U<K&&xe("up"))}}function ke(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Oe(e){if(E.fitToSection&&(z=!1),ke(e)){var t=Et(e);U=t.y,X=t.x}}function Me(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Ce(e){var t=(new Date).getTime(),n=yn(wn(".fp-completely")[0],Jt);if(!p.m.down&&!p.m.up)return Un(e),!1;if(E.autoScrolling&&!c&&!n){var o=(e=e||Rt.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<v.length&&v.shift(),v.push(Math.abs(o)),E.scrollBar&&Un(e);var a=t-$;if($=t,200<a&&(v=[]),T){var s=Me(v,10);Me(v,70)<=s&&l&&xe(r<0?"down":"up")}return!1}E.fitToSection&&(z=!1)}function He(e,t){var n=null==t?wn($t)[0]:t,o=wn(an,n)[0];if(!(null==o||a||wn(on,o).length<2)){var r=wn(rn,o)[0],i=null;if(null==(i="left"===e?An(r,on):Tn(r,on))){if(!E.loopHorizontal)return;var l=Fn(r);i="left"===e?l[l.length-1]:l[0]}a=!h.test.isTesting,ot(o,i,e)}}function Ie(){for(var e=wn(rn),t=0;t<e.length;t++)Lt(e[t],"internal")}function Be(e,t,n){if(null!=e){var o,r,i,l,a,s,c,u,f,d={element:e,callback:t,isMovementUp:n,dtop:(r=(o=e).offsetHeight,i=o.offsetTop,a=q<(l=i),s=l-A+r,c=E.bigSectionsDestination,A<r?(a||c)&&"bottom"!==c||(l=s):(a||g&&null==On(o))&&(l=s),q=l),yMovement:ft(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Cn(e,_t),activeSlide:wn(rn,e)[0],activeSection:wn($t)[0],leavingSection:Cn(wn($t),_t)+1,localIsResizing:g};if(!(d.activeSection==e&&!g||E.scrollBar&&Yn()===d.dtop&&!yn(e,Gt))){if(null!=d.activeSlide&&(u=d.activeSlide.getAttribute("data-anchor"),f=Cn(d.activeSlide)),!d.localIsResizing){var v=d.yMovement;if(void 0!==n&&(v=n?"up":"down"),d.direction=v,Xn(E.onLeave)&&!1===Re("onLeave",d))return}E.autoScrolling&&E.continuousVertical&&void 0!==d.isMovementUp&&(!d.isMovementUp&&"up"==d.yMovement||d.isMovementUp&&"down"==d.yMovement)&&((p=d).isMovementUp?Wn(wn($t)[0],Gn(p.activeSection,_t)):Vn(wn($t)[0],Jn(p.activeSection,_t).reverse()),xt(wn($t)[0].offsetTop),Ie(),p.wrapAroundElements=p.activeSection,p.dtop=p.element.offsetTop,p.yMovement=ft(p.element),d=p),d.localIsResizing||Xe(d.activeSection),E.scrollOverflow&&E.scrollOverflowHandler.beforeLeave(),Bn(e,Ft),Rn(Fn(e),Ft),We(e),E.scrollOverflow&&E.scrollOverflowHandler.onLeave(),T=h.test.isTesting,St(f,u,d.anchorLink,d.sectionIndex),function(e){if(E.css3&&E.autoScrolling&&!E.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";pt(t,!0),E.scrollingSpeed?(clearTimeout(b),b=setTimeout(function(){Pe(e)},E.scrollingSpeed)):Pe(e)}else{var n=je(e.dtop);h.test.top=-e.dtop+"px",Mt(n.element,n.options,E.scrollingSpeed,function(){E.scrollBar?setTimeout(function(){Pe(e)},30):Pe(e)})}}(d),x=d.anchorLink,ut(d.anchorLink,d.sectionIndex)}}var p}function Re(e,t){var n,o,r,i,l=(o=e,r=t,(i=E.v2compatible?{afterRender:function(){return[d]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ne(wn($t)[0]),slide:ze(wn(rn,wn($t)[0])[0])}},onLeave:function(){return{origin:Ne(r.activeSection),destination:Ne(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ne(r.section),origin:ze(r.prevSlide),destination:ze(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(E.v2compatible){if(!1===E[e].apply(l[0],l.slice(1)))return!1}else if(Kn(d,e,l),!1===E[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ne(e){return e?new It(e):null}function ze(e){return e?new Bt(e):null}function je(e){var t={};return E.autoScrolling&&!E.scrollBar?(t.options=-e,t.element=wn(jt)[0]):(t.options=e,t.element=Rt),t}function Pe(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?Wn(wn(_t)[0],t.wrapAroundElements):Vn(wn(_t)[wn(_t).length-1],t.wrapAroundElements),xt(wn($t)[0].offsetTop),Ie()),Xn(E.afterLoad)&&!e.localIsResizing&&Re("afterLoad",e),E.scrollOverflow&&E.scrollOverflowHandler.afterLoad(),e.localIsResizing||Fe(e.element),Bn(e.element,Xt),Rn(Fn(e.element),Xt),Ve(),T=!0,Xn(e.callback)&&e.callback()}function De(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Ve(){var e=wn(".fp-auto-height")[0]||ve()&&wn(".fp-auto-height-responsive")[0];E.lazyLoading&&e&&wn(_t+":not("+Ut+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<A&&0<n||2<o&&o<A)&&We(e)})}function We(o){E.lazyLoading&&wn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ke(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(De(n,e),n.addEventListener("load",function(){Ye(o)}))}),_n(n,"source")){var e=Dn(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){Ye(o)})}})}function Ye(e){E.scrollOverflow&&(clearTimeout(j),j=setTimeout(function(){m.createScrollBar(e)},200))}function Fe(e){var t=Ke(e);wn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),wn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ue(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ue(e)}})}function Ue(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Xe(e){var t=Ke(e);wn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),wn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ke(e){var t=wn(rn,e);return t.length&&(e=t[0]),e}function _e(){var e=qe(),t=e.section,n=e.slide;t&&(E.animateAnchor?gt(t,n):se(t,n))}function $e(){if(!Y&&!E.lockAnchors){var e=qe(),t=e.section,n=e.slide,o=void 0===x,r=void 0===x&&void 0===n&&!a;t&&t.length&&(t&&t!==x&&!o||r||!a&&i!=n)&&gt(t,n)}}function qe(){var e,t,n=Rt.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function Qe(e){clearTimeout(M);var t=Nt.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=Nt.activeElement,u=et(Ke(wn($t)[0]));function f(e){return Un(e),u[0]?u[0].focus():null}(t=e,n=et(Nt),o=n.indexOf(Nt.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=ze(Dn(i,on)),a=Ne(Dn(i,_t)),l||a)&&(c?null==Dn(c,$t+","+$t+" "+rn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&Un(e))}(e):_n(t,"textarea")||_n(t,"input")||_n(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!E.keyboardScrolling||!E.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&Un(e),c=e.ctrlKey,M=setTimeout(function(){!function(e){var t=e.shiftKey,n=Nt.activeElement,o=_n(n,"video")||_n(n,"audio");if(T||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:p.k.up&&le();break;case 32:if(t&&p.k.up&&!o){le();break}case 40:case 34:p.k.down&&(32===e.keyCode&&o||ae());break;case 36:p.k.up&&ce(1);break;case 35:p.k.down&&ce(wn(_t).length);break;case 37:p.k.left&&fe();break;case 39:p.k.right&&ue()}}(e)},150))}function Ge(e){t&&(c=e.ctrlKey)}function Je(e){2==e.which&&(Q=e.pageY,d.addEventListener("mousemove",nt))}function Ze(e){2==e.which&&d.removeEventListener("mousemove",nt)}function et(e){return[].slice.call(wn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function tt(){c=t=!1}function nt(e){E.autoScrolling&&(T&&(e.pageY<Q&&p.m.up?le():e.pageY>Q&&p.m.down&&ae()),Q=e.pageY)}function ot(e,t,n){var o,r,i=Dn(e,_t),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:Cn(t),section:i,sectionIndex:Cn(i,_t),anchorLink:i.getAttribute("data-anchor"),slidesNav:wn(dn,i)[0],slideAnchor:bt(t),prevSlide:wn(rn,i)[0],prevSlideIndex:Cn(wn(rn,i)[0]),localIsResizing:g};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":r<o?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(T=!1),E.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&Xn(E.onSlideLeave)&&!1===Re("onSlideLeave",l)?a=!1:(Bn(t,Ft),Rn(Fn(t),Ft),l.localIsResizing||(Xe(l.prevSlide),We(t)),!E.loopHorizontal&&E.controlArrows&&($n(wn(gn,i),0!==l.slideIndex),$n(wn(mn,i),null!=On(t))),yn(i,Ft)&&!l.localIsResizing&&St(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(E.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";h.test.translate3dH[t.sectionIndex]=r,xn(st(wn(cn,e)),At(r)),y=setTimeout(function(){n&&rt(t)},E.scrollingSpeed)}else h.test.left[t.sectionIndex]=Math.round(o.left),Mt(e,Math.round(o.left),E.scrollingSpeed,function(){n&&rt(t)})}(e,l,!0))}function rt(e){var t,n;t=e.slidesNav,n=e.slideIndex,E.slidesNavigation&&null!=t&&(Rn(wn(Ut,t),Ft),Bn(wn("a",wn("li",t)[n]),Ft)),e.localIsResizing||(Xn(E.afterSlideLoad)&&Re("afterSlideLoad",e),T=!0,Fe(e.destiny)),a=!1}function it(){clearTimeout(S),S=setTimeout(function(){for(var e=0;e<4;e++)w=setTimeout(lt,200*e)},200)}function lt(){if(at(),o){var e=Nt.activeElement;if(!_n(e,"textarea")&&!_n(e,"input")&&!_n(e,"select")){var t=En();Math.abs(t-G)>20*Math.max(G,t)/100&&(de(!0),G=t)}}else Se()}function at(){var e=E.responsive||E.responsiveWidth,t=E.responsiveHeight,n=e&&Rt.innerWidth<e,o=t&&Rt.innerHeight<t;e&&t?pe(n||o):e?pe(n):t&&pe(o)}function st(e){var t="all "+E.scrollingSpeed+"ms "+E.easingcss3;return Rn(e,Dt),xn(e,{"-webkit-transition":t,transition:t})}function ct(e){return Bn(e,Dt)}function ut(e,t){var n,o,r;n=e,wn(E.menu).forEach(function(e){E.menu&&null!=e&&(Rn(wn(Ut,e),Ft),Bn(wn('[data-menuanchor="'+n+'"]',e),Ft))}),o=e,r=t,E.navigation&&null!=wn(en)[0]&&(Rn(wn(Ut,wn(en)[0]),Ft),Bn(o?wn('a[href="#'+o+'"]',wn(en)[0]):wn("a",wn("li",wn(en)[0])[r]),Ft))}function ft(e){var t=Cn(wn($t)[0],_t),n=Cn(e,_t);return t==n?"none":n<t?"up":"down"}function dt(e){if(!yn(e,un)){var t=Nt.createElement("div");t.className=qt,t.style.height=vt(e)+"px",Bn(e,un),jn(e,t)}}function vt(e){var t=A;if(E.paddingTop||E.paddingBottom){var n=e;yn(n,Kt)||(n=Dn(e,_t));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=A-o}return t}function pt(e,t){t?st(d):ct(d),xn(d,At(e)),h.test.translate3d=e,setTimeout(function(){Rn(d,Dt)},10)}function ht(e){var t=wn(_t+'[data-anchor="'+e+'"]',d)[0];if(!t){var n=void 0!==e?e-1:0;t=wn(_t)[n]}return t}function gt(e,t){var n=ht(e);if(null!=n){var o,r,i,l=(null==(i=wn(on+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=wn(on,r)[o]),i);bt(n)===x||yn(n,Ft)?mt(l):Be(n,function(){mt(l)})}}function mt(e){null!=e&&ot(Dn(e,an),e)}function St(e,t,n,o){var r="";E.anchors.length&&!E.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),wt(r+"/"+(i=t))):(null!=e&&(i=t),wt(n))),yt()}function wt(e){if(E.recordHistory)location.hash=e;else if(o||l)Rt.history.replaceState(void 0,void 0,"#"+e);else{var t=Rt.location.href.split("#")[0];Rt.location.replace(t+"#"+e)}}function bt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Cn(e);return null==t&&(t=n),t}function yt(){var e=wn($t)[0],t=wn(rn,e)[0],n=bt(e),o=bt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+Yt+"-[^\\s]+\\b","g");L.className=L.className.replace(i,""),Bn(L,Yt+"-"+r)}function Et(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,l&&ke(e)&&E.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Lt(e,t){ee(0,"internal"),void 0!==t&&(g=!0),ot(Dn(e,an),e),void 0!==t&&(g=!1),ee(P.scrollingSpeed,"internal")}function xt(e){var t=Math.round(e);if(E.css3&&E.autoScrolling&&!E.scrollBar)pt("translate3d(0px, -"+t+"px, 0px)",!1);else if(E.autoScrolling&&!E.scrollBar)xn(d,{top:-t+"px"}),h.test.top=-t+"px";else{var n=je(t);Ct(n.element,n.options)}}function At(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Tt(t,e,n){"all"!==e?p[n][e]=t:Object.keys(p[n]).forEach(function(e){p[n][e]=t})}function kt(e,t,n){E[e]=t,"internal"!==n&&(P[e]=t)}function Ot(){var e=E.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Sn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Sn("error","https://github.com/alvarotrigo/fullPage.js#options.")),yn(u,Wt)?Sn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(E.continuousVertical&&(E.loopTop||E.loopBottom)&&(E.continuousVertical=!1,Sn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!E.scrollOverflow||!E.scrollBar&&E.autoScrolling||Sn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!E.continuousVertical||!E.scrollBar&&E.autoScrolling||(E.continuousVertical=!1,Sn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),E.scrollOverflow&&null==E.scrollOverflowHandler&&(E.scrollOverflow=!1,Sn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),W.forEach(function(e){E[e]&&Sn("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),E.anchors.forEach(function(t){var e=[].slice.call(wn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(wn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Sn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Sn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function Mt(t,n,o,r){var e,i=(e=t).self!=Rt&&yn(e,ln)?e.scrollLeft:!E.autoScrolling||E.scrollBar?Yn():e.offsetTop,l=n-i,a=0;z=!0;var s=function(){if(z){var e=n;a+=20,o&&(e=Rt.fp_easings[E.easing](a,i,l,o)),Ct(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Ct(e,t){!E.autoScrolling||E.scrollBar||e.self!=Rt&&yn(e,ln)?e.self!=Rt&&yn(e,ln)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function Ht(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Cn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function It(e){Ht.call(this,e,_t)}function Bt(e){Ht.call(this,e,on)}Ot()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
//# sourceMappingURL=fullpage.min.js.map

/* APP */
/* Modules */
//import {CountUp} from './countup.min.js';
//import {AnimateElement} from './animation.js';
//import {TinderCards} from './tinder.js';

/* Fullpage JS */
new fullpage('#app', {
  menu: '#menu',
  lockAnchors: false,
  anchors: [
    'intro',
    'summary',
    'industries',
    'time',
    'locations',
    'projects',
    'quote',
    'clients',
    'thanks'
  ],
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: [
    'intro',
    'summary',
    'industries',
    'time',
    'locations',
    'projects',
    'quote',
    'clients',
    'thanks'
  ],
  showActiveTooltip: false,
  slidesNavigation: false,
  slidesNavPosition: 'bottom',

  //Scrolling
  css3: true,
  scrollingSpeed: 600,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '',
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: false,
  sectionsColor: [
    '#010fff',
    '#010fff',
    '#fff010',
    '#fff010',
    '#ffffff',
    '#010fff',
    '#fff010',
    '#010fff',
    '#ffffff'
  ],
  paddingTop: '0',
  paddingBottom: '0',
  fixedElements: '.allthis',
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,
  parallax: false,
  parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
  cards: false,
  cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

  //Custom selectors
  sectionSelector: '.section',
  slideSelector: '.slide',

  lazyLoading: true,

  //Licence
  licenseKey: 'D62A0CA5-A6F748B1-AADF056F-D8133285',

  //events
  onLeave: function(origin, destination, direction) {
    if (destination.index == 0) {
      onEnterIntro();
    }
    if (destination.index == 1) {
      onEnterSummary();
    }
    if (destination.index == 2) {
      onEnterIndustries();
    }
    if (destination.index == 3) {
      onEnterTime();
    }
    if (destination.index == 4) {
      onEnterLocations();
    }
    if (destination.index == 5) {
      onEnterProjects();
    }
    if (destination.index == 6) {
      onEnterQuote();
    }
    if (destination.index == 7) {
      onEnterClients();
    }
    if (destination.index == 8) {
      onEnterThanks();
    }
    if (destination.index == 9) {
      onEnterOutro();
    }
    resetDefaults();
    console.log(origin.index, destination.index, direction);
  },
  afterLoad: function(origin, destination, direction) {},
  afterRender: function() {
    onLoadStage();
  },
  afterResize: function(width, height) {},
  afterReBuild: function() {},
  afterResponsive: function(isResponsive) {},
  afterSlideLoad: function(section, origin, destination, direction) {},
  onSlideLeave: function(section, origin, destination, direction) {}
});

/* Custom onEnterFunctions */
function onLoadStage() {
  console.log('init');
  // resize marque tag
  fitMarquee();
  activateControls();
}
function onEnterIntro() {
  console.log('intro');
}
function onEnterSummary() {
  console.log('summary');

  const txt = document.querySelector('.section--summary .js-animate');
  AnimateElement(txt, ['fadeInUpBig'], startCounter());
  // start Counter
  // startCounter();
}
function onEnterIndustries() {
  console.log('industries');
  // Animate listitems
  const listItems = document.querySelectorAll('.section--industries .js-animate-li');
  listItems.forEach(el => {
    AnimateElement(el, ['fadeInLeft']);
  });
}
function onEnterTime() {
  console.log('time');
  const graphItems = document.querySelectorAll('.section--time .bar');
  graphItems.forEach(el => {
    AnimateElement(el, ['fadeInUpBig']);
  });
}
function onEnterLocations() {
  console.log('locations');
  AnimateElement('.location--rotterdam', ['whobble', 'infinite']);
}
function onEnterProjects() {
  console.log('projects');
  TinderCards();
}
function onEnterQuote() {
  console.log('quote');
  // Animate quote
  //AnimateElement('.js-animate-quote', ['flash']);
}
function onEnterClients() {
  console.log('clients');
}
function onEnterThanks() {
  console.log('thanks');
}
function onEnterOutro() {
  console.log('outro');
}

function activateControls() {
  const down = document.querySelector('.js-down');
  const up = document.querySelector('.js-up');
  down.addEventListener('click', function() {
    fullpage_api.moveTo('summary', 1);
  });
}
/* Util functions */
function fitMarquee() {
  const marquee = document.querySelectorAll('.section--marquee');
  marquee.forEach(el => {
    el.style.width = el.firstElementChild.offsetWidth + 'px';

    console.log(el.style.width, el.firstElementChild.offsetWidth, 'px');
  });
}

function startCounter() {
  var countID = setInterval(
    function(e) {
      const counter = document.querySelector('.js-animate-counter');
      const options = {
        useEasing: false,
        startVal: 0,
        duration: 3
      };
      let display = new CountUp(counter, 28, options);
      if (!display.error) {
        display.start(onCounterEnd);
      } else {
        console.error(display.error);
      }
      clearInterval(countID);
    },
    1000,
    this
  );
}

function resetCounter() {
  const counter = document.querySelector('.js-animate-counter');
  counter.innerHTML = '0';
  counter.classList.remove('filled', 'bounce', 'animated');
}

function onCounterEnd() {
  AnimateElement('.js-animate-counter', ['bounce', 'filled']);
}

/* Reset Stage */
function resetDefaults() {
  resetCounter();
}
