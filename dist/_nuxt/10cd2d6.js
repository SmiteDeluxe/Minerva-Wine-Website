(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{924:function(r,e,t){var content=t(941);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,t(66).default)("594a07a4",content,!0,{sourceMap:!1})},933:function(r,e,t){"use strict";t.r(e);var o=t(23),n=(t(109),t(79),t(5));t(38);function d(r){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function r(e){var t,o,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(e),t=200*Math.random()+80,o=100*Math.random()+20,n={running:!0,price:Math.floor(t),min:Math.floor(o/(10*Math.random())),max:Math.floor(o),current:Math.floor(o-o/(7*Math.random()+1)),maxBuy:5},r.next=6,new Promise((function(r){setTimeout((function(){r(n)}),500)}));case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var l=n.a.extend({name:"CrowdfundCard",props:{crowdF:{type:Object,required:!0},large:{type:Boolean,required:!1,default:!1},onDetailSite:{type:Boolean,required:!1,default:!1}},data:function(){return{cfbInfo:{},amount:1,timeLeft:"",timeToStart:"",started:!1,ended:!0}},fetch:function(){var r=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("asdasd");case 2:t=e.sent,r.cfbInfo=t;case 4:case"end":return e.stop()}}),e)})))()},mounted:function(){this.getTimeLeft()},methods:{getTimeLeft:function(){var r=this;setInterval((function(){var e=(new Date).getTime(),t=Date.parse(r.crowdF.start)-e,o=Date.parse(r.crowdF.end)-e;if(t>0){r.ended=!1;var n=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),c=Math.floor(t%36e5/6e4)+1;r.timeToStart=n+"d "+d+"h "+c+"m "}else if(o>0){r.started=!0,r.ended=!1;var l=Math.floor(o/864e5),f=Math.floor(o%864e5/36e5),w=Math.floor(o%36e5/6e4)+1;r.timeLeft=l+"d "+f+"h "+w+"m "}else r.ended=!0}),1e3)}}}),f=(t(940),t(37)),component=Object(f.a)(l,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return"filler"!==r.crowdF.slug.current.substring(0,6)?t("div",{staticClass:"wrapperCrowdCard",class:{large:r.large}},[t("div",{staticClass:"info"},[t("div",{staticClass:"title"},[t("NuxtLink",{attrs:{to:"/wine/"+r.crowdF.merchant.slug.current}},[t("span",{staticClass:"titleText"},[r._v(r._s(r.crowdF.merchant.title))]),t("span",{staticClass:"linkArrow"},[r._v("↗")])])],1),r._v(" "),t("div",{staticClass:"country"},[t("portableImage",{staticClass:"flag",attrs:{asset:r.crowdF.merchant.flag.asset,"new-height":"40",alt:r.crowdF.country+" flag"}}),r._v(" "),t("span",{staticClass:"countryName"},[r._v(r._s(r.crowdF.country))])],1),r._v(" "),t("div",{staticClass:"variety meta"},[t("span",{staticClass:"catName"},[r._v("Variety")]),t("span",{staticClass:"infoItem"},[r._v(r._s(r.crowdF.variety))])]),r._v(" "),t("div",{staticClass:"type meta"},[t("span",{staticClass:"catName"},[r._v("Type")]),t("span",{staticClass:"infoItem"},[r._v(r._s(r.crowdF.type))])]),r._v(" "),t("div",{staticClass:"vintage meta"},[t("span",{staticClass:"catName"},[r._v("Vintage")]),t("span",{staticClass:"infoItem"},[r._v(r._s(r.crowdF.vintage))])]),r._v(" "),t("div",{staticClass:"date meta"},[t("span",{staticClass:"catName"},[r._v("Delivery Snapshot Date")]),t("span",{staticClass:"infoItem"},[r._v(r._s(r.crowdF.date))])]),r._v(" "),t("div",{staticClass:"tc meta"},[t("span",{staticClass:"catName"},[r._v("Terms & Conditions")]),t("span",{staticClass:"infoItem"},[r._v(r._s(r.crowdF.tc))])]),r._v(" "),t("div",{staticClass:"timer"},[t("span",{staticClass:"timerLabel"},[r._v(r._s(r.ended?"ENDED":r.started?"TIME LEFT":"STARTS IN"))]),t("span",{staticClass:"time"},[r._v("\n        "+r._s(r.ended?"":r.started?r.timeLeft:r.timeToStart))])])]),r._v(" "),t("div",{staticClass:"image"},[t("portableImage",{staticClass:"thumbnail",attrs:{asset:r.crowdF.cardImage.asset,"new-height":"500",alt:r.crowdF.merchant.title+" Crowdloan Thumbnail"}})],1),r._v(" "),t("div",{staticClass:"crowdInfo"},[t("div",{staticClass:"rest"},[t("div",{staticClass:"purchaseInfo"},[t("span",{staticClass:"case"},[r._v("Case Of 6 Bottles")]),r._v(" "),t("span",{staticClass:"price"},[r._v(r._s(r.cfbInfo.price)+" "),t("span",{staticClass:"smaller"},[r._v("UST")])])]),r._v(" "),t("div",{staticClass:"buy"},[t("div",{staticClass:"btns"},[t("form",{staticClass:"purchase"},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.amount,expression:"amount"}],staticClass:"amount",attrs:{type:"text"},domProps:{value:r.amount},on:{input:function(e){e.target.composing||(r.amount=e.target.value)}}}),r._v(" "),t("button",{staticClass:"button"},[r._v("BUY NOW")])]),r._v(" "),r.onDetailSite?t("a",{on:{click:function(e){return r.$emit("infoClicked")}}},[t("button",{staticClass:"buttonLight"})]):t("NuxtLink",{attrs:{to:{path:"/wine/cf/"+r.crowdF.slug.current}}},[t("button",{staticClass:"buttonLight"})])],1),r._v(" "),t("span",{staticClass:"disclaimer"},[t("input",{attrs:{id:r.crowdF.slug.current,type:"checkbox"}}),t("label",{attrs:{for:r.crowdF.slug.current}},[r._v("By buying you agree to the\n            "),t("a",{attrs:{href:"https://docs.minerva.market/legal-documents/minerva-privacy-policy",target:"_blank"}},[r._v("Terms and Conditions")]),r._v("."),t("br"),r._v("Delivery included in price")])])])]),r._v(" "),t("div",{staticClass:"progress"},[r._v("\n      FUNDED\n      "),t("div",{staticClass:"progressBar"},[r.cfbInfo.current/r.cfbInfo.max>.1?t("span",{staticClass:"value",style:{width:r.cfbInfo.current/r.cfbInfo.max*100+"%"}},[t("span",{staticClass:"label",style:{right:99.5-r.cfbInfo.current/r.cfbInfo.max*100+"%"}},[r._v(r._s(r.cfbInfo.current))]),r._v(" "),r.cfbInfo.min<=r.cfbInfo.max-r.cfbInfo.max/4?t("span",{staticClass:"minMark",style:{left:r.cfbInfo.min/r.cfbInfo.max*100+"%"}},[t("span",{staticClass:"minText"},[r._v("MIN")])]):r._e(),r._v(" "),t("span",{staticClass:"labelMimax max"},[r._v("MAX: "+r._s(r.cfbInfo.max)+" Cases")])]):r._e()])])])]):t("div",{staticClass:"wrapperCrowdCard filler"})}),[],!1,null,null,null);e.default=component.exports},940:function(r,e,t){"use strict";t(924)},941:function(r,e,t){var o=t(65)(!1);o.push([r.i,'.wrapperCrowdCard{height:730px;display:grid;grid-template-columns:55% 45%;grid-template-rows:65% 35%;grid-template-areas:"info image" "crowdInfo crowdInfo";padding:45px;box-sizing:border-box;border-right:1px solid #ccc;border-bottom:1px solid #ccc;color:#333;background-color:#fff;font-size:max(1em,12px)}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperCrowdCard{height:680px}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperCrowdCard{height:630px}}@media screen and (max-width:1085px){.wrapperCrowdCard{height:auto}}@media screen and (max-width:525px){.wrapperCrowdCard{padding:32px 32px 35px}}@media screen and (max-width:435px){.wrapperCrowdCard{padding:25px 20px 27px}}.wrapperCrowdCard .info{display:flex;flex-direction:column;margin-right:10px}.wrapperCrowdCard .info>*{margin-bottom:10px}.wrapperCrowdCard .info .title{position:relative;margin-bottom:5px}.wrapperCrowdCard .info .title a{text-decoration:none;color:#333;word-wrap:break-word}.wrapperCrowdCard .info .title .titleText{font-size:max(2.875em,32px);font-family:"Roslindale";word-wrap:break-word}.wrapperCrowdCard .info .title .linkArrow{font-size:1.2em;position:absolute;bottom:12px;margin-left:5px;color:#777}.wrapperCrowdCard .info .shortInfo{color:#777;margin-bottom:20px;margin-top:15px}.wrapperCrowdCard .info .infoItem{font-size:1.05em;color:#333}.wrapperCrowdCard .info .meta{display:flex;flex-direction:column}.wrapperCrowdCard .info .catName{color:#777;text-transform:uppercase;font-size:1.05em}.wrapperCrowdCard .info .country{display:flex;align-items:center;margin-bottom:20px}.wrapperCrowdCard .info .country .countryName{text-transform:uppercase;color:#d6a11a;margin-left:15px;font-size:max(1.125em,14px)}.wrapperCrowdCard .info .country .flag img{border:1px solid rgba(0,0,0,.2);max-width:39px;height:39px;border-radius:50%}@media screen and (max-width:643px){.wrapperCrowdCard .info .country .flag img{height:25px;max-width:25px}}.wrapperCrowdCard .timer{margin-top:10px;margin-bottom:50px;color:#777;font-size:1.3em}@media screen and (max-width:643px){.wrapperCrowdCard .timer{margin-top:0;margin-bottom:15px}}.wrapperCrowdCard .timer .time{font-size:1em;color:#333}.wrapperCrowdCard .image{margin-left:20px}.wrapperCrowdCard .image .thumbnail{width:100%;height:100%}@media screen and (max-width:1085px){.wrapperCrowdCard .image .thumbnail{max-height:275px}}.wrapperCrowdCard .image .thumbnail img{width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}.wrapperCrowdCard .crowdInfo{grid-area:crowdInfo;display:flex;flex-direction:column;justify-content:flex-end}@media screen and (max-width:1085px){.wrapperCrowdCard .crowdInfo{margin-top:40px}}.wrapperCrowdCard .crowdInfo .rest{display:flex}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo{display:flex;flex-direction:column;justify-content:flex-start;margin-right:40px}@media screen and (max-width:435px){.wrapperCrowdCard .crowdInfo .rest .purchaseInfo{margin-right:0;padding-right:20px;box-sizing:border-box}}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .case{font-size:.875em;color:#777;padding-bottom:5px;padding-right:10px;box-sizing:border-box}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .price{font-family:"Roslindale";font-size:3.5em}@media screen and (max-width:400px){.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .price{line-height:.7;margin-top:5px}}.wrapperCrowdCard .crowdInfo .rest .purchaseInfo .price .smaller{font-family:"Roslindale";font-size:.5em}.wrapperCrowdCard .crowdInfo .rest .buy .btns{padding-bottom:10px;display:flex}.wrapperCrowdCard .crowdInfo .rest .buy .btns button{min-width:0;padding-left:26px;padding-right:26px;height:59px!important;font-size:1em}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{height:52px!important}}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{height:49px!important}}@media screen and (max-width:643px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{height:42px!important}}@media screen and (max-width:525px){.wrapperCrowdCard .crowdInfo .rest .buy .btns button{padding-left:20px!important;padding-right:20px!important;min-width:0!important;min-height:0!important}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight{color:#8b8b8b;border-color:#adadad;border-width:1px;margin-left:12px}.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:after{content:"MORE INFO";position:relative;bottom:auto;left:auto;width:auto;background-color:transparent}@media screen and (max-width:525px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:after{content:"MORE"}}@media screen and (max-width:435px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:after{content:"ℹ";font-size:1.6em}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight:hover{color:#fff;border-color:#fff}@media screen and (max-width:435px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .buttonLight{padding:0!important;width:39px}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase{display:flex}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .amount{border-top-left-radius:7px;border-bottom-left-radius:7px;border:1px solid #adadad;width:40px;color:#777;font-size:1.5em;text-align:center}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .amount:focus{border:1px solid #8b8b8b;outline:none}@media screen and (max-width:525px){.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .amount{width:30px;font-size:1.2em}}.wrapperCrowdCard .crowdInfo .rest .buy .btns .purchase .button{border-top-left-radius:0;border-bottom-left-radius:0}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer{font-size:.81em;display:flex;align-items:flex-start}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer input{margin-top:1px;margin-right:8px;filter:saturate(0);cursor:pointer}@media screen and (max-height:900px),screen and (max-width:1180px){.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer input{margin-top:0}}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer label{cursor:pointer}.wrapperCrowdCard .crowdInfo .rest .buy .disclaimer label a{color:#d6a11a}.wrapperCrowdCard .crowdInfo .progress{display:flex;flex-direction:column;justify-content:flex-end;font-size:.875em;margin-top:20px;margin-bottom:5px;position:relative;color:#777}@media screen and (max-width:400px){.wrapperCrowdCard .crowdInfo .progress{margin-top:35px}}.wrapperCrowdCard .crowdInfo .progress .progressBar{margin-top:5px;width:100%;border-radius:0;height:5px;position:relative;background-color:#e9e9e9;display:flex}.wrapperCrowdCard .crowdInfo .progress .progressBar .value{height:100%;background-color:#d6a11a;display:inline-block}.wrapperCrowdCard .crowdInfo .progress .progressBar .label{position:absolute;bottom:10px;color:#777}.wrapperCrowdCard .crowdInfo .progress .progressBar .labelMimax{position:absolute;top:10px;color:#777}.wrapperCrowdCard .crowdInfo .progress .progressBar .max{right:0}.wrapperCrowdCard .crowdInfo .progress .progressBar .minMark{top:5px;border-right:2px solid #999;position:absolute;height:18px}.wrapperCrowdCard .crowdInfo .progress .progressBar .minMark .minText{position:absolute;top:5px;left:8px}.wrapperCrowdCard .crowdInfo .progress .progress::-webkit-progress-bar{background-color:#e9e9e9}.wrapperCrowdCard .crowdInfo .progress .progress::-webkit-progress-value{background-color:#d6a11a!important}.wrapperCrowdCard .crowdInfo .progress .progress::-moz-progress-bar{background-color:#d6a11a!important}.filler{background-color:transparent;border:none}@media screen and (max-width:1085px){.filler{height:0;padding:0}}.large{grid-template-columns:65% 35%}.large .info{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;justify-content:flex-start;position:relative;font-size:1.15em}.large .info>*{min-width:100%}.large .info .title{font-size:1.1em}.large .info .country{position:relative;top:-10px;font-size:1.1em}.large .info .meta{position:relative;top:0;min-width:40%}.large .info .date,.large .info .tc,.large .info .vintage{top:0}.large .rest{grid-gap:50px;gap:50px;position:relative}.large .timer{top:10px;position:relative;display:flex;height:28px;flex-direction:column}.large .progressBar{height:6px!important}',""]),r.exports=o},945:function(r,e,t){var content=t(964);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,t(66).default)("2ebc7200",content,!0,{sourceMap:!1})},959:function(r,e,t){"use strict";var o=t(33),n=t(8),d=t(14),c=t(229),l=t(51),f=t(42),w=t(506),m=t(94),h=t(228),x=t(504),C=t(17),v=t(166).f,I=t(81).f,y=t(48).f,_=t(960),L=t(961).trim,k="Number",N=n.Number,W=N.prototype,M=n.TypeError,F=d("".slice),T=d("".charCodeAt),z=function(r){var e=x(r,"number");return"bigint"==typeof e?e:E(e)},E=function(r){var e,t,o,n,d,c,l,code,f=x(r,"number");if(h(f))throw M("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=L(f),43===(e=T(f,0))||45===e){if(88===(t=T(f,2))||120===t)return NaN}else if(48===e){switch(T(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(d=F(f,2)).length,l=0;l<c;l++)if((code=T(d,l))<48||code>n)return NaN;return parseInt(d,o)}return+f};if(c(k,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var D,O=function(r){var e=arguments.length<1?0:N(z(r)),t=this;return m(W,t)&&C((function(){_(t)}))?w(Object(e),t,O):e},S=o?v(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;S.length>R;R++)f(N,D=S[R])&&!f(O,D)&&y(O,D,I(N,D));O.prototype=W,W.constructor=O,l(n,k,O)}},960:function(r,e,t){var o=t(14);r.exports=o(1..valueOf)},961:function(r,e,t){var o=t(14),n=t(60),d=t(39),c=t(962),l=o("".replace),f="["+c+"]",w=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(r){return function(e){var t=d(n(e));return 1&r&&(t=l(t,w,"")),2&r&&(t=l(t,m,"")),t}};r.exports={start:h(1),end:h(2),trim:h(3)}},962:function(r,e){r.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},963:function(r,e,t){"use strict";t(945)},964:function(r,e,t){var o=t(65)(!1);o.push([r.i,".wrapperWheel{width:100%;margin-bottom:calc(84px + 3vw);box-sizing:border-box;padding-left:50px;display:flex;justify-content:center;align-items:center;position:relative;padding-bottom:100px;padding-top:50px;z-index:2}@media screen and (max-width:900px){.wrapperWheel{padding-left:0}}.wrapperWheel hr{height:1px;color:#ececec;background-color:#ececec;border-width:0;width:50%;position:absolute;top:0}.wrapperWheel .arrowLeft,.wrapperWheel .arrowRight{background-color:#d6a11a;display:flex;align-items:center;justify-content:center;border-radius:50%;width:45px;height:45px;cursor:pointer}.wrapperWheel .arrowLeft{margin-right:20px;margin-left:20px;transform:rotate(180deg)}@media screen and (max-width:900px){.wrapperWheel .arrowLeft{position:absolute;bottom:0;margin-left:auto;margin-right:auto;left:0;right:100px}}.wrapperWheel .arrowRight{margin-left:20px;margin-right:40px}@media screen and (max-width:900px){.wrapperWheel .arrowRight{position:absolute;bottom:0;margin-left:auto;margin-right:auto;left:100px;right:0}}.wrapperWheel .deactivated{pointer-events:none;background-color:#e2e2e2;cursor:default}.wrapperWheel .wheel{width:85%;opacity:1;max-width:1640px!important;display:grid;transition:opacity .2s ease;overflow:hidden}@media screen and (max-width:900px){.wrapperWheel .wheel{width:100%}}.wrapperWheel .wheel>div:first-child{transition:border .5s linear;transition:background-color .5s linear;border-left:1px solid transparent;border-top:1px solid transparent;border-bottom:1px solid transparent}@media screen and (max-width:900px){.wrapperWheel .wheel>div:first-child{border-bottom:1px solid #ccc}}.wrapperWheel .wheel>*{border-bottom-width:0}@media screen and (max-height:950px),screen and (max-width:1330px){.wrapperWheel .wheel>*{height:auto!important}}.wrapperWheel .wheel div:last-of-type{border-right-width:0}.wrapperWheel .highlight>div:first-child{border:1px solid #ddd;background-color:hsla(0,0%,92.5%,.18431)}.wrapperWheel .arrowPressed{opacity:0;transition:opacity 0s ease}.wrapperWheel .dots{position:absolute;bottom:0;display:flex;align-items:center;justify-content:center;padding-right:20px}@media screen and (max-width:1050px){.wrapperWheel .dots{display:none}}.wrapperWheel .dots .dot{height:10px;width:10px;border-radius:50%;background-color:#ccc;margin-left:30px;margin-right:30px;cursor:pointer}.wrapperWheel .dots .dotSelect{background-color:#777}",""]),r.exports=o},981:function(r,e,t){"use strict";t.r(e);t(959),t(109);var o=t(5).a.extend({name:"CrowdfundWheel",props:{cfs:{type:Array,required:!0},newIndex:{type:Number,required:!1,default:-1}},data:function(){return{cfsOnDisplay:0,cfIndexLeft:0,arrowPressed:!1,windowWidth:0}},computed:{displayedCfs:function(){for(var r=[],i=0;i<this.cfsOnDisplay;i++)this.cfIndexLeft+i<this.cfs.length?r.push(this.cfs[this.cfIndexLeft+i]):r.push(this.cfs[-1+i]);return r}},watch:{newIndex:function(r){this.cfIndexLeft=r;var e=document.querySelector(".wheel");e&&(e.classList.add("highlight"),setTimeout((function(){e.classList.remove("highlight")}),1500))}},mounted:function(){this.recalcDisplayedCfs(),window.addEventListener("resize",this.recalcDisplayedCfs)},beforeDestroy:function(){window.removeEventListener("resize",this.recalcDisplayedCfs)},methods:{recalcDisplayedCfs:function(){var r=window.innerWidth;this.windowWidth=r,r<=1650||this.cfs.length<=1?this.cfsOnDisplay=1:this.cfsOnDisplay=2},scrollWheel:function(r){this.wheelFadeOutIn(),r?this.cfs.length<=this.cfIndexLeft+1?this.cfIndexLeft=0:this.cfIndexLeft++:this.cfIndexLeft-1<0?this.cfIndexLeft=this.cfs.length-1:this.cfIndexLeft--},wheelFadeOutIn:function(){var r=this;this.arrowPressed=!0,setTimeout((function(){r.arrowPressed=!1}),10)},infoClicked:function(r){this.$emit("infoClicked",r+"details")}}}),n=(t(963),t(37)),component=Object(n.a)(o,(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"wrapperWheel noselect"},[t("div",{staticClass:"arrowLeft",class:{deactivated:r.cfs.length<=1},on:{click:function(e){return e.preventDefault(),r.scrollWheel(!1)}}},[t("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M11.0526 24.6096C10.8903 24.6095 10.7317 24.5614 10.5968 24.4712C10.4619 24.381 10.3568 24.2529 10.2948 24.103C10.2327 23.9531 10.2165 23.7881 10.2482 23.629C10.2799 23.4699 10.3581 23.3237 10.4729 23.209L20.0044 13.6775L10.4729 4.14605C10.3234 3.99134 10.2408 3.78413 10.2426 3.56904C10.2445 3.35396 10.3308 3.14822 10.4829 2.99612C10.635 2.84403 10.8407 2.75776 11.0558 2.75589C11.2709 2.75402 11.4781 2.8367 11.6328 2.98613L21.7445 13.0979C21.8983 13.2517 21.9847 13.4603 21.9847 13.6778C21.9847 13.8953 21.8983 14.1039 21.7445 14.2578L11.6328 24.3695C11.5566 24.4457 11.4661 24.5061 11.3666 24.5472C11.267 24.5884 11.1603 24.6096 11.0526 24.6096Z",fill:"white"}})])]),r._v(" "),t("div",{staticClass:"wheel",class:{arrowPressed:r.arrowPressed},style:{"grid-template-columns":"repeat(auto-fill, calc(100%/"+r.displayedCfs.length+"))","max-width":r.cfs.length<=1?"1340px !important":"none"}},r._l(r.displayedCfs,(function(e){return t("CrowdCard",{key:e.slug.current,attrs:{"crowd-f":e,large:r.cfs.length<=1&&r.windowWidth>1520||r.windowWidth<1650&&r.windowWidth>1520}})})),1),r._v(" "),t("div",{staticClass:"arrowRight",class:{deactivated:r.cfs.length<=1},on:{click:function(e){return e.preventDefault(),r.scrollWheel(!0)}}},[t("svg",{attrs:{width:"28",height:"28",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M11.0526 24.6096C10.8903 24.6095 10.7317 24.5614 10.5968 24.4712C10.4619 24.381 10.3568 24.2529 10.2948 24.103C10.2327 23.9531 10.2165 23.7881 10.2482 23.629C10.2799 23.4699 10.3581 23.3237 10.4729 23.209L20.0044 13.6775L10.4729 4.14605C10.3234 3.99134 10.2408 3.78413 10.2426 3.56904C10.2445 3.35396 10.3308 3.14822 10.4829 2.99612C10.635 2.84403 10.8407 2.75776 11.0558 2.75589C11.2709 2.75402 11.4781 2.8367 11.6328 2.98613L21.7445 13.0979C21.8983 13.2517 21.9847 13.4603 21.9847 13.6778C21.9847 13.8953 21.8983 14.1039 21.7445 14.2578L11.6328 24.3695C11.5566 24.4457 11.4661 24.5061 11.3666 24.5472C11.267 24.5884 11.1603 24.6096 11.0526 24.6096Z",fill:"white"}})])]),r._v(" "),r.cfs.length>=2?t("div",{staticClass:"dots"},r._l(r.cfs.length,(function(i){return t("div",{key:i,staticClass:"dot",class:{dotSelect:r.cfIndexLeft===i-1},on:{click:function(e){r.cfIndexLeft=i-1,r.wheelFadeOutIn()}}})})),0):r._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CrowdCard:t(933).default})}}]);