(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{925:function(t,o,n){var content=n(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(66).default)("4d408a0e",content,!0,{sourceMap:!1})},934:function(t,o,n){"use strict";n.r(o);var e=n(5).a.extend({data:function(){return{textVis:!1,sttVis:!1}},beforeMount:function(){window.addEventListener("scroll",this.sttVisObs)},beforeDestroy:function(){window.removeEventListener("scroll",this.sttVisObs)},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},sttVisObs:function(){var t,o=null===(t=document.scrollingElement)||void 0===t?void 0:t.scrollTop,n=window.innerHeight;this.sttVis=!!(o&&o>=.7*n)}}}),r=(n(942),n(37)),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"scrollToTop"},[n("div",{staticClass:"sticky",class:{sttVis:t.sttVis},on:{click:function(o){return t.scrollToTop()},mouseleave:function(o){t.textVis=!1},mouseover:function(o){t.textVis=!0}}},[n("svg",{staticClass:"noselect",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#888"},on:{mouseleave:function(o){t.textVis=!1},mouseover:function(o){t.textVis=!0}}},[n("path",{attrs:{d:"M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"}})]),t._v(" "),n("span",{staticClass:"text noselect",class:{textVis:t.textVis}},[t._v("BACK TO TOP")])])])}),[],!1,null,"34923fa8",null);o.default=component.exports},942:function(t,o,n){"use strict";n(925)},943:function(t,o,n){var e=n(65)(!1);e.push([t.i,'.scrollToTop[data-v-34923fa8]{display:none;position:absolute;height:100%;top:0;right:0;box-sizing:border-box;padding-bottom:30px;pointer-events:none}.scrollToTop .sticky[data-v-34923fa8]{pointer-events:all;top:calc(100vh - 130px);height:60px;position:-webkit-sticky;position:sticky;box-sizing:border-box;overflow:hidden;z-index:3;margin-left:35px;padding-left:20px;padding-right:5px;display:flex;align-items:center;cursor:pointer;border-top-left-radius:12px;border-bottom-left-radius:12px;right:0;width:60px;background-color:#fcfcfc;box-shadow:-2px 2px 15px -3px rgba(0,0,0,.1);visibility:hidden;opacity:0;transition-duration:1s;transition-property:opacity width visibility;transition-timing-function:ease}.scrollToTop .sticky[data-v-34923fa8]:hover{width:210px}.scrollToTop .sttVis[data-v-34923fa8]{visibility:visible;opacity:1;transition-duration:.3s}.scrollToTop svg[data-v-34923fa8]{transform:rotate(-90deg);width:25px;height:25px;position:absolute}.scrollToTop .text[data-v-34923fa8]{text-align:right;max-width:210px;padding-left:45px;font-size:1.3em;color:#555;font-family:"Glacial-Indifference";opacity:0;visibility:hidden;transition-delay:0s;transition-duration:0s;transition-property:opacity visibility;transition-timing-function:ease}.scrollToTop .textVis[data-v-34923fa8]{visibility:visible;opacity:1;transition-delay:.2s;transition-duration:.2s}@media screen and (min-width:530px){.scrollToTop[data-v-34923fa8]{display:block}}',""]),t.exports=e}}]);