(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{395:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const n={name:"SanityImage",functional:!0,props:{assetId:{type:String,required:!0},projectId:{type:String,default:null},dataset:{type:String,default:null},auto:{type:String},bg:{type:String},blur:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},crop:{type:String,validator:t=>["top","bottom","left","right","center","focalpoint","entropy"].includes(t)},dl:{type:String},dpr:{type:[Number,String],validator:t=>[1,2,3].includes(Number(t))},fit:{type:String,validator:t=>["clip","crop","fill","fillmax","max","scale","min"].includes(t)},flip:{type:String,validator:t=>["h","v","hv"].includes(t)},fm:{type:String,validator:t=>["jpg","pjpg","png","webp"].includes(t)},fpX:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},fpY:{type:[Number,String],validator:t=>Number(t)<=1&&Number(t)>=0},h:{type:[Number,String]},invert:{type:Boolean},maxH:{type:[Number,String]},maxW:{type:[Number,String]},minH:{type:[Number,String]},minW:{type:[Number,String]},or:{type:[Number,String],validator:t=>[0,90,180,270].includes(Number(t))},q:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},rect:{type:String},sat:{type:[Number,String]},sharpen:{type:[Number,String],validator:t=>Number(t)>=0&&Number(t)<=100},w:{type:[Number,String]}},render(t,{props:e,data:data,parent:r,scopedSlots:n}){const o=["auto","bg","blur","crop","dl","dpr","fit","flip","fm","fpX","fpY","h","invert","maxH","maxW","minH","minW","or","q","rect","sat","sharpen","w"].map((t=>{const r=t.replace(/[A-Z]/,(t=>"-"+t.toLowerCase()));return e[t]?`${r}=${e[t]}`:void 0})).filter(Boolean).join("&"),l=e.assetId.split("-").slice(1),m=l.pop(),d=`https://cdn.sanity.io/images/${e.projectId||r&&r.$sanity.config.projectId}/${e.dataset||r.$sanity&&r.$sanity.config.dataset||"production"}/${l.join("-")}.${m}${o?"?"+o:""}`,c=()=>t("img",{...data,attrs:{...data.attrs,src:d}});return n.default&&n.default({src:d})||c()}};e.SanityImage=n,e.default=n}}]);