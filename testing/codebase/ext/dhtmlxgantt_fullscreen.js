/*
@license

dhtmlxGantt v.6.3.0 Standard

This version of dhtmlxGantt is distributed under GPL 2.0 license and can be legally used in GPL projects.

To use dhtmlxGantt in non-GPL projects (and get Pro version of the product), please obtain Commercial/Enterprise or Ultimate license on our site https://dhtmlx.com/docs/products/dhtmlxGantt/#licensing or contact us at sales@dhtmlx.com

(c) XB Software Ltd.

*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ext/dhtmlxgantt_fullscreen",[],t):"object"==typeof exports?exports["ext/dhtmlxgantt_fullscreen"]=t():e["ext/dhtmlxgantt_fullscreen"]=t()}(window,function(){return function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/codebase/",n(n.s=239)}({239:function(e,t){function n(){var e=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;return!(!e||e!==document.body)}gantt.$services.getService("state").registerProvider("fullscreen",function(){return{fullscreen:n()}});var l={overflow:null,padding:null,paddingTop:null,paddingRight:null,paddingBottom:null,paddingLeft:null},o={width:null,height:null,top:null,left:null,position:null,modified:!1},d=null;function i(e,t){t.width=e.width,t.height=e.height,t.top=e.top,t.left=e.left,t.position=e.position}var u=!1;function r(){var e;gantt.$container&&(n()?u&&(e="onExpand",function(){var e=gantt.ext.fullscreen.getFullscreenElement(),t=document.body;i(e.style,o),l={overflow:t.style.overflow,padding:t.style.padding?t.style.padding:null,paddingTop:t.style.paddingTop?t.style.paddingTop:null,paddingRight:t.style.paddingRight?t.style.paddingRight:null,paddingBottom:t.style.paddingBottom?t.style.paddingBottom:null,paddingLeft:t.style.paddingLeft?t.style.paddingLeft:null},t.style.padding&&(t.style.padding="0"),t.style.paddingTop&&(t.style.paddingTop="0"),t.style.paddingRight&&(t.style.paddingRight="0"),t.style.paddingBottom&&(t.style.paddingBottom="0"),t.style.paddingLeft&&(t.style.paddingLeft="0"),t.style.overflow="hidden",e.style.width="100vw",e.style.height="100vh",e.style.top="0px",e.style.left="0px",e.style.position="absolute",o.modified=!0,d=function(e){for(var t=e.parentNode,n=[];t&&t.style;)n.push({element:t,originalPositioning:t.style.position}),t.style.position="static",t=t.parentNode;return n}(e)}()):u&&(u=!1,e="onCollapse",function(){var e=gantt.ext.fullscreen.getFullscreenElement(),t=document.body;o.modified&&(l.padding&&(t.style.padding=l.padding),l.paddingTop&&(t.style.paddingTop=l.paddingTop),l.paddingRight&&(t.style.paddingRight=l.paddingRight),l.paddingBottom&&(t.style.paddingBottom=l.paddingBottom),l.paddingLeft&&(t.style.paddingLeft=l.paddingLeft),t.style.overflow=l.overflow,l={overflow:null,padding:null,paddingTop:null,paddingRight:null,paddingBottom:null,paddingLeft:null},i(o,e.style),o.modified=!1),function(e){e.forEach(function(e){e.element.style.position=e.originalPositioning})}(d),d=null}()),setTimeout(function(){gantt.render()}),setTimeout(function(){gantt.callEvent(e,[gantt.ext.fullscreen.getFullscreenElement()])}))}function a(){return!gantt.$container||(!gantt.ext.fullscreen.getFullscreenElement()||!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&((console.warning||console.log)("The `fullscreen` feature not being allowed, or full-screen mode not being supported"),!0))}gantt.ext.fullscreen={expand:function(){if(!a()&&!n()&&gantt.callEvent("onBeforeExpand",[this.getFullscreenElement()])){u=!0;var e=document.body,t=e.webkitRequestFullscreen?[Element.ALLOW_KEYBOARD_INPUT]:[],l=e.msRequestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullscreen||e.requestFullscreen;l&&l.apply(e,t)}},collapse:function(){if(!a()&&n()&&gantt.callEvent("onBeforeCollapse",[this.getFullscreenElement()])){var e=document.msExitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.exitFullscreen;e&&e.apply(document)}},toggle:function(){a()||(n()?this.collapse():this.expand())},getFullscreenElement:function(){return gantt.$root}},gantt.expand=function(){gantt.ext.fullscreen.expand()},gantt.collapse=function(){gantt.ext.fullscreen.collapse()},gantt.attachEvent("onGanttReady",function(){gantt.event(document,"webkitfullscreenchange",r),gantt.event(document,"mozfullscreenchange",r),gantt.event(document,"MSFullscreenChange",r),gantt.event(document,"fullscreenChange",r),gantt.event(document,"fullscreenchange",r)})}})});
//# sourceMappingURL=dhtmlxgantt_fullscreen.js.map