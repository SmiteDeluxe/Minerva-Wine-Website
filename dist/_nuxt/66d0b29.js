(window.webpackJsonp=window.webpackJsonp||[]).push([[21,12,13,17],{1025:function(e,t,r){"use strict";r.r(t);var n=r(23),o=(r(38),r(58),r(79),r(5)),c=r(915),d=r.n(c),l=r(956),h=r(938),m=r(922),f=r(950),x=r(949),w=o.a.extend({name:"MerchantDetails",asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app.$sanity,n=e.route,t.next=3,Object(l.a)(n.params.merchant,r);case 3:return o=t.sent,t.next=6,Object(h.b)(o._id,r);case 6:return c=t.sent,t.abrupt("return",{merch:o,cfs:c});case 8:case"end":return t.stop()}}),t)})))()},data:function(){return{serializers:{types:{image:m.default,youtube:x.default},marks:{link:f.default}},merch:{},cfs:[],newIndex:-1}},mounted:function(){this.addScrollAnim(),this.slowerImageSCroll()},beforeMount:function(){window.addEventListener("scroll",this.slowerImageSCroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.slowerImageSCroll)},methods:{slowerImageSCroll:function(){this.$el.querySelectorAll(".slowscroll").forEach((function(e){var t=e;if(t){var r=.2*t.getBoundingClientRect().top;r<1&&r>-1?t.style.backgroundPosition="center calc(-"+1*r+"px + 40%)":(r=-r,t.style.backgroundPosition="center calc("+1*r+"px + 40%)")}}))},scrollTo:function(e){var t=document.querySelector("#"+e);window.scrollTo({top:t.offsetTop,behavior:"smooth"})},urlFor:function(e){return d()(this.$sanity.config).image(e)},addScrollAnim:function(){var e=this.$el.querySelectorAll(".fade-in"),t=this.$el.querySelectorAll(".slide-in"),r=new IntersectionObserver((function(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("appear"),t.unobserve(e.target))}))}),{threshold:0,rootMargin:"0px 0px -120px 0px"});e.forEach((function(e){r.observe(e)})),t.forEach((function(e){r.observe(e)}))}}}),v=(r(998),r(37)),component=Object(v.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapperMerchantDetails"},[r("div",{staticClass:"firstLarge slowscroll",style:{backgroundImage:"url("+e.urlFor(e.merch.largeFirstImage.asset._ref).url()+"?w=2560&h=1144&fit=crop)"}}),e._v(" "),r("div",{staticClass:"infoWrapper"},[r("div",{style:{"max-width":1===e.cfs.length?"1600px":"none"}},[r("div",{staticClass:"info"},[r("div",{staticClass:"mainInfo"},[r("div",{staticClass:"textInfo",style:{"padding-right":1===e.cfs.length?"3vw !important":"0"}},[r("h2",{staticClass:"customh2"},[e._v("Welcome to")]),e._v(" "),r("span",{staticClass:"smallerH1"},[r("h1",{staticClass:"customh1"},[e._v("\n                "+e._s(e.merch.title)+"\n              ")])]),e._v(" "),r("div",{staticClass:"map"},[r("portableImage",{style:{height:e.merch.links?"90%":"100%"},attrs:{asset:e.merch.map.asset}}),e._v(" "),e.merch.links?r("ul",{staticClass:"links"},[r("li",{staticClass:"title"},[e._v("LINKS:")]),e._v(" "),e._l(e.merch.links,(function(link){return r("li",{key:link._key,staticClass:"link"},[r("a",{attrs:{href:link.url,target:"_blank"}},[e._v(e._s(link.text))])])}))],2):e._e()],1),e._v(" "),r("SanityContent",{attrs:{blocks:e.merch.description,serializers:e.serializers}})],1)]),e._v(" "),e.merch.description2?r("div",{staticClass:"additionalInfo"},[e.merch.description2?r("SanityContent",{staticClass:"firstAdd",style:{width:e.merch.description3?"50%":"100%","padding-right":e.merch.description3?"3vw":"0 !important"},attrs:{blocks:e.merch.description2,serializers:e.serializers}}):e._e(),e._v(" "),e.merch.description3?r("SanityContent",{staticClass:"secondAdd",attrs:{blocks:e.merch.description3,serializers:e.serializers}}):e._e()],1):e._e()])])]),e._v(" "),e.cfs.length>=1?r("div",{staticClass:"wheelWrapper fade-in"},[r("CrowdWheel",{attrs:{id:"buy",name:"buy",cfs:e.cfs,"new-index":e.newIndex},on:{infoClicked:e.scrollTo}})],1):e._e(),e._v(" "),r("div",{staticClass:"secondLarge slowscroll",style:{backgroundImage:"url("+e.urlFor(e.merch.largeSecondImage.asset._ref).url()+"?w=2560&h=1144&fit=crop)"}}),e._v(" "),r("div",{staticClass:"quote"},[r("span",{staticClass:"smallerH1"},[r("h1",{staticClass:"customh1"},[e._v(e._s(e.merch.quote))])])]),e._v(" "),r("ScrollTop")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SanityContent:r(932).default,CrowdWheel:r(1017).default,ScrollTop:r(934).default})},914:function(e,t,r){var content=r(919);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("00044304",content,!0,{sourceMap:!1})},918:function(e,t,r){"use strict";r(914)},919:function(e,t,r){var n=r(65)(!1);n.push([e.i,".cover[data-v-23f2ac0b]{display:block;width:100%}",""]),e.exports=n},921:function(e,t,r){var content=r(929);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("fd077144",content,!0,{sourceMap:!1})},922:function(e,t,r){"use strict";r.r(t);var n=r(915),o=r.n(n),c=r(5).a.extend({props:{asset:{type:Object,required:!0},newHeight:{type:String,required:!1,default:""},alt:{type:String,required:!1,default:""}},computed:{newHeightString:function(){return""!==this.newHeight?"?h="+this.newHeight:""},keyword:function(){return this.$accessor&&""===this.alt?this.$accessor.currentArticleKeyword:this.alt}},methods:{urlFor:function(e){return o()(this.$sanity.config).image(e)}}}),d=(r(918),r(37)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"imgwrapper"},[r("img",{staticClass:"cover",attrs:{src:e.urlFor(e.asset._ref).url()+e.newHeightString,quality:"85",alt:e.keyword}})])}),[],!1,null,"23f2ac0b",null);t.default=component.exports},924:function(e,t,r){var content=r(941);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("21ee52d0",content,!0,{sourceMap:!1})},925:function(e,t,r){var content=r(943);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("7a65af98",content,!0,{sourceMap:!1})},928:function(e,t,r){"use strict";r(921)},929:function(e,t,r){var n=r(65)(!1);n.push([e.i,'.scrollToTop[data-v-187e53b8]{display:none;position:absolute;height:100%;top:0;right:0;box-sizing:border-box;padding-bottom:30px;pointer-events:none}.scrollToTop .sticky[data-v-187e53b8]{pointer-events:all;top:calc(100vh - 130px);height:60px;position:-webkit-sticky;position:sticky;box-sizing:border-box;overflow:hidden;z-index:3;margin-left:35px;padding-left:20px;padding-right:5px;display:flex;align-items:center;cursor:pointer;border-top-left-radius:12px;border-bottom-left-radius:12px;right:0;width:60px;background-color:#fcfcfc;box-shadow:-2px 2px 15px -3px rgba(0,0,0,.1);visibility:hidden;opacity:0;transition-duration:1s;transition-property:opacity width visibility;transition-timing-function:ease}.scrollToTop .sticky[data-v-187e53b8]:hover{width:210px}.scrollToTop .sttVis[data-v-187e53b8]{visibility:visible;opacity:1;transition-duration:.3s}.scrollToTop svg[data-v-187e53b8]{transform:rotate(-90deg);width:25px;height:25px;position:absolute}.scrollToTop .text[data-v-187e53b8]{text-align:right;max-width:210px;padding-left:45px;font-size:1.3em;color:#555;font-family:"Glacial-Indifference";opacity:0;visibility:hidden;transition-delay:0s;transition-duration:0s;transition-property:opacity visibility;transition-timing-function:ease}.scrollToTop .textVis[data-v-187e53b8]{visibility:visible;opacity:1;transition-delay:.2s;transition-duration:.2s}@media screen and (min-width:530px){.scrollToTop[data-v-187e53b8]{display:block}}',""]),e.exports=n},934:function(e,t,r){"use strict";r.r(t);var n=r(5).a.extend({data:function(){return{textVis:!1,sttVis:!1}},beforeMount:function(){window.addEventListener("scroll",this.sttVisObs)},beforeDestroy:function(){window.removeEventListener("scroll",this.sttVisObs)},methods:{scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},sttVisObs:function(){var e,t=null===(e=document.scrollingElement)||void 0===e?void 0:e.scrollTop,r=window.innerHeight;this.sttVis=!!(t&&t>=1*r)}}}),o=(r(928),r(37)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scrollToTop"},[r("div",{staticClass:"sticky",class:{sttVis:e.sttVis},on:{click:function(t){return e.scrollToTop()},mouseleave:function(t){e.textVis=!1},mouseover:function(t){e.textVis=!0}}},[r("svg",{staticClass:"noselect",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#888"},on:{mouseleave:function(t){e.textVis=!1},mouseover:function(t){e.textVis=!0}}},[r("path",{attrs:{d:"M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z"}})]),e._v(" "),r("span",{staticClass:"text noselect",class:{textVis:e.textVis}},[e._v("BACK TO TOP")])])])}),[],!1,null,"187e53b8",null);t.default=component.exports},938:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return y}));var n,o,c,d=r(916),l=r(23),h=r(946),m=(r(79),r(38),r(165),r(503),r(917));function f(e){for(var t=(new Date).getTime(),r=[],i=0;i<e.length;i++){Date.parse(e[i].end.toString())-t<-6e4&&(r.push(e[i]),e.splice(i--,1))}return e.push.apply(e,Object(h.a)(r.reverse())),e}function x(e){return w.apply(this,arguments)}function w(){return(w=Object(l.a)(regeneratorRuntime.mark((function e(t){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(m.a)(n||(n=Object(d.a)(['*[_type == "crowdfund" ]{merchant->{flag,title,slug},start,end,contract,cardImage,country,date,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)']))),e.next=3,t.fetch(r);case 3:return o=e.sent,e.abrupt("return",f(o));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(regeneratorRuntime.mark((function e(t,r){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.a)(o||(o=Object(d.a)(['*[_type == "crowdfund" && merchant._ref == "','"]{merchant->{flag,title,slug},detail1,detail2,detail3,artwork,start,end,contract,cardImage,country,acidity,body,fruitiness,date,shortInfo,slug,tc,type,variety,vintage}  | order(start asc)'])),t),e.next=3,r.fetch(n);case 3:return c=e.sent,e.abrupt("return",f(c));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return M.apply(this,arguments)}function M(){return(M=Object(l.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(m.a)(c||(c=Object(d.a)(['*[_type == "crowdfund" && slug.current == "','"]{merchant->{flag,title,slug},detail1,detail2,detail3,artwork,start,end,contract,cardImage,country,acidity,body,fruitiness,date,shortInfo,slug,tc,type,variety,vintage}'])),t),e.next=3,r.fetch(n);case 3:return o=e.sent[0],e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},940:function(e,t,r){"use strict";r(924)},941:function(e,t,r){var n=r(65)(!1);n.push([e.i,"a[data-v-5945f07c]{color:#d6a11a;text-decoration:underline}",""]),e.exports=n},942:function(e,t,r){"use strict";r(925)},943:function(e,t,r){var n=r(65)(!1);n.push([e.i,"iframe[data-v-3dc09594]{display:block;margin:50px auto;width:50em;height:28.125em}@media screen and (max-width:930px),screen and (max-width:1050px)and (min-height:950px){iframe[data-v-3dc09594]{width:80vw;height:45vw}}",""]),e.exports=n},949:function(e,t,r){"use strict";r.r(t);var n=r(5).a.extend({props:{url:{type:String,required:!0}}}),o=(r(942),r(37)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("iframe",{attrs:{frameborder:"0",allowfullscreen:"",src:e.url}})])}),[],!1,null,"3dc09594",null);t.default=component.exports},950:function(e,t,r){"use strict";r.r(t);r(940);var n=r(37),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{staticClass:"text",attrs:{target:"_blank",href:e.$attrs.href}},[e._t("default")],2)}),[],!1,null,"5945f07c",null);t.default=component.exports},956:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return f}));var n,o,c=r(916),d=r(23),l=(r(79),r(917));function h(e,t){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(regeneratorRuntime.mark((function e(t,r){var o,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=Object(l.a)(n||(n=Object(c.a)(['*[_type == "merchant" && slug.current == "','"]{_id,country,description,description2,description3,flag,largeFirstImage,largeSecondImage,map,quote,seo,slug,title,links}'])),t),e.next=3,r.fetch(o);case 3:return d=e.sent[0],e.abrupt("return",d);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(l.a)(o||(o=Object(c.a)(['*[_type == "merchant"]{_id,card,country,flag,quote,seo,slug,title}']))),e.next=3,t.fetch(r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},972:function(e,t,r){var content=r(999);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(66).default)("621852bd",content,!0,{sourceMap:!1})},998:function(e,t,r){"use strict";r(972)},999:function(e,t,r){var n=r(65)(!1);n.push([e.i,".wrapperMerchantDetails{background-color:#fff;display:flex;flex-direction:column;scroll-behavior:smooth;height:100%;position:relative}.wrapperMerchantDetails p{font-size:max(1.3em,16px)}.wrapperMerchantDetails .firstLarge{height:580px;background-size:auto 130%;width:100%;background-attachment:scroll}@media screen and (min-width:1700px){.wrapperMerchantDetails .firstLarge{background-size:cover}}@media screen and (max-width:1050px){.wrapperMerchantDetails .firstLarge{height:40vw;min-height:250px}}.wrapperMerchantDetails .infoWrapper{padding:calc(84px + 3vw) 108px calc(84px + 3vw) 167px;display:flex;justify-content:center}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper{padding:calc(44px + 5vw) 6vw calc(24px + 3vw) 7vw}}.wrapperMerchantDetails .infoWrapper .info{width:100%;max-width:1600px}@media screen and (min-width:2000px){.wrapperMerchantDetails .infoWrapper .info{max-width:1800px}}.wrapperMerchantDetails .infoWrapper .info .mainInfo{display:grid;grid-template-columns:50% 50%;position:relative;min-height:500px}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .info .mainInfo{display:inline-block;min-height:0}}.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo{padding-right:3vw!important;box-sizing:border-box;display:flex;flex-direction:column;justify-content:flex-end;text-align:justify}@media screen and (min-width:2000px){.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo{padding-right:4vw!important}}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo{display:block}}@media screen and (max-width:780px),screen and (max-width:800px)and (min-height:901px),screen and (max-width:1000px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo{display:flex;flex-direction:column}}.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo .smallerH1{font-size:.9em}.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo .smallerH1 .customh1{color:#15364a;margin-bottom:40px;width:100%;word-wrap:break-word}@media screen and (max-width:417px){.wrapperMerchantDetails .infoWrapper .info .mainInfo .textInfo .smallerH1 .customh1{margin-bottom:5vw}}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map{position:absolute;top:0;bottom:0;left:50%;right:0;width:50%;overflow:hidden;padding-left:3vw;box-sizing:border-box}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .info .mainInfo .map{position:relative;float:right;left:auto;right:auto;bottom:auto;top:auto;margin-bottom:3vw;margin-left:3vw;min-width:400px}}@media screen and (max-width:780px),screen and (max-width:800px)and (min-height:901px),screen and (max-width:1000px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .info .mainInfo .map{float:none;order:10;width:87vw;margin-bottom:20px;margin-left:0;padding:40px 10px 0;box-sizing:border-box;min-width:0}}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map div{width:100%}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map div img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links{width:100%;height:9%;background-color:#fff;border-bottom:1px solid #e9e9e9;margin-top:-1px;display:flex;align-items:center;overflow-x:scroll;padding-top:7px;box-sizing:border-box}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links *{scrollbar-width:thin;scrollbar-color:#c7c7c7 #fff}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links::-webkit-scrollbar-track{border-radius:10px;background-color:#fff}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links::-webkit-scrollbar{height:4px;background-color:#fff}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links::-webkit-scrollbar-thumb{border:0 solid #fff;border-radius:20px;background-color:#e9e9e9}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links .title{color:#777}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links li{list-style:none;margin-right:40px;margin-bottom:0}.wrapperMerchantDetails .infoWrapper .info .mainInfo .map .links li a{text-decoration:none;color:#d6a11a}.wrapperMerchantDetails .infoWrapper .additionalInfo{margin-top:70px;display:flex;text-align:justify}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .additionalInfo{display:flex;flex-direction:column;margin-top:40px}}@media screen and (max-width:780px),screen and (max-width:800px)and (min-height:901px),screen and (max-width:1000px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .additionalInfo{margin-top:10px}}.wrapperMerchantDetails .infoWrapper .additionalInfo .secondAdd{width:50%;box-sizing:border-box;padding-left:3vw}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .additionalInfo .secondAdd{padding-left:0}}.wrapperMerchantDetails .infoWrapper .additionalInfo .firstAdd{box-sizing:border-box}@media screen and (min-width:2000px){.wrapperMerchantDetails .infoWrapper .additionalInfo .firstAdd{padding-right:4vw!important}}@media screen and (max-width:1100px),screen and (max-width:1150px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .infoWrapper .additionalInfo .firstAdd,.wrapperMerchantDetails .infoWrapper .additionalInfo .secondAdd{width:100%!important;margin:0}}.wrapperMerchantDetails .infoWrapper p{margin:5px 0;color:#333;min-height:1em;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased!important;-moz-font-smoothing:antialiased!important;text-rendering:optimizelegibility!important;letter-spacing:.05em;line-height:1.4}.wrapperMerchantDetails .infoWrapper h4{font-size:1.7em}.wrapperMerchantDetails .infoWrapper h3{font-size:2em}.wrapperMerchantDetails .infoWrapper h4{font-size:2.2em}.wrapperMerchantDetails .infoWrapper ul{font-size:1.5em;color:#333}.wrapperMerchantDetails .infoWrapper ul li{margin-bottom:12px;max-width:min(30em,65vw)}.wrapperMerchantDetails .quote{padding:min(11vw,180px) calc(4vw + 20px);box-sizing:border-box;display:flex;justify-content:center;text-align:center}.wrapperMerchantDetails .quote .smallerH1{font-size:.6em}.wrapperMerchantDetails .quote .smallerH1 .customh1{line-height:1.2;max-width:1500px;color:#444}.wrapperMerchantDetails .secondLarge{height:650px;background-size:auto 150%;width:100%;background-attachment:scroll}@media screen and (min-width:1950px){.wrapperMerchantDetails .secondLarge{background-size:cover}}@media screen and (max-width:1050px){.wrapperMerchantDetails .secondLarge{height:60vw;min-height:350px}}@media screen and (max-width:800px){.wrapperMerchantDetails .secondLarge{background-size:auto 160%}}@media screen and (max-width:716px){.wrapperMerchantDetails .secondLarge{background-size:auto 165%}}@media screen and (max-width:680px){.wrapperMerchantDetails .secondLarge{background-size:auto 170%}}@media screen and (max-width:655px){.wrapperMerchantDetails .secondLarge{background-size:auto 175%}}@media screen and (max-width:625px){.wrapperMerchantDetails .secondLarge{background-size:auto 180%}}@media screen and (max-width:600px){.wrapperMerchantDetails .secondLarge{background-size:auto 185%}}.wrapperMerchantDetails .crowdDetails{color:#333;padding:calc(34px + 3vw) 108px calc(94px + 3vw) 147px;display:flex;justify-content:center;position:relative}@media screen and (max-width:770px),screen and (max-width:880px)and (min-height:901px),screen and (max-width:950px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails{padding:calc(34px + 3vw) 50px calc(94px + 3vw) 60px}}@media screen and (max-width:530px){.wrapperMerchantDetails .crowdDetails{padding:calc(34px + 3vw) 20px calc(94px + 3vw) 25px}}.wrapperMerchantDetails .crowdDetails .wrapper{padding-top:50px}.wrapperMerchantDetails .crowdDetails hr{position:absolute;bottom:0;height:1px;color:#b4b4b4;background-color:#b4b4b4;width:50%;border-width:0}@media screen and (max-width:530px){.wrapperMerchantDetails .crowdDetails hr{width:80%}}.wrapperMerchantDetails .crowdDetails h1{font-size:6em;width:45%}@media screen and (max-width:1300px),screen and (max-width:1400px)and (min-height:901px),screen and (max-width:1500px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails h1{width:55%}}@media screen and (max-width:1100px),screen and (max-width:1200px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails h1{width:100%}}.wrapperMerchantDetails .crowdDetails .mainInfo{display:grid;grid-template-columns:50% 40%;grid-column-gap:8vw;-moz-column-gap:8vw;column-gap:8vw;max-width:1600px}@media screen and (min-width:2000px){.wrapperMerchantDetails .crowdDetails .mainInfo{max-width:1900px;grid-column-gap:12vw;-moz-column-gap:12vw;column-gap:12vw;grid-template-columns:48% 38%}}@media screen and (max-width:1300px),screen and (max-width:1400px)and (min-height:901px),screen and (max-width:1500px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails .mainInfo{grid-template-columns:55% 35%}}@media screen and (max-width:1100px),screen and (max-width:1200px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails .mainInfo{display:flex;flex-direction:column}}.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper{display:flex;flex-direction:column}.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .vintage{display:flex;align-items:center;margin-top:20px}.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .vintage button{min-width:0;padding-left:26px;padding-right:26px;height:59px!important;font-size:1em;margin-left:30px}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .vintage button{height:52px!important}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .vintage button{height:49px!important}}@media screen and (max-width:643px){.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .vintage button{height:42px!important}}@media screen and (max-width:525px){.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .vintage button{padding-left:20px!important;padding-right:20px!important;min-width:0!important;min-height:0!important}}.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .detail{margin-top:50px}@media screen and (max-width:700px){.wrapperMerchantDetails .crowdDetails .mainInfo .textWrapper .detail{margin-top:20px}}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo{display:flex;flex-direction:column}@media screen and (max-width:1100px),screen and (max-width:1200px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo{flex-direction:row;justify-content:space-between;margin-top:5vw}}@media screen and (max-width:530px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo{flex-direction:column}}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo h3{margin-bottom:30px;margin-top:20px}@media screen and (max-width:1100px),screen and (max-width:1200px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile{width:50%;display:flex;flex-direction:column;justify-content:space-between}}@media screen and (max-width:670px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile{width:45%}}@media screen and (max-width:600px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile{width:42%}}@media screen and (max-width:530px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile{width:100%}}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile .progressWrapper{margin-bottom:30px}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile .progressWrapper .progressBar{margin-top:5px;width:100%;border-radius:0;height:5px;position:relative;background-color:#e9e9e9;display:flex}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .profile .progressWrapper .progressBar .value{height:100%;background-color:#d6a11a;display:inline-block}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper{width:100%;height:70%;margin-top:20px}@media screen and (max-width:1100px),screen and (max-width:1200px)and (min-height:901px),screen and (max-width:1300px)and (min-height:950px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper{width:40%}}@media screen and (max-width:670px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper{width:45%}}@media screen and (max-width:600px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper{width:49%}}@media screen and (max-width:530px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper{width:100%;display:flex;justify-content:center}}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper .artwork{height:100%}@media screen and (max-width:530px){.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper .artwork{width:95%}}.wrapperMerchantDetails .crowdDetails .mainInfo .sideInfo .artworkWrapper .artwork img{-o-object-fit:contain;object-fit:contain;width:100%}.wrapperMerchantDetails .customh2{margin-bottom:5px}.wrapperMerchantDetails .customh3{color:inherit}.wrapperMerchantDetails h1{color:#15364a}",""]),e.exports=n}}]);