import{_ as l,p as s,q as r,R as d,t as a,v as n,x as u}from"./framework-f3fd2962.js";const h={props:{title:{type:String,default:null,required:!0},slug:{type:String,default:null,required:!0},tab:{type:String,default:"result"},team:{type:Boolean,default:!1},user:{type:String,default:"Aeroxian"},name:{type:String,default:"Aeroxian"},height:{type:Number,default:300},theme:{type:String,default:"dark"},preview:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},version:{type:String,default:null}},mounted(){const t=document.createElement("script");t.setAttribute("src","https://cpwebassets.codepen.io/assets/embed/ei.js"),t.async=!0,this.$el.appendChild(t)},computed:{href(){return`https://codepen.io/${this.team?"team":""}${this.user}/pen/${this.slug}`}}},o=["data-theme-id","data-preview","data-editable","data-height","data-default-tab","data-user","data-slug-hash","data-pen-title","data-embed-version"],c=["href"],f=["href"],p=d("a",{href:"https://codepen.io"},"CodePen",-1);function _(t,m,e,g,y,i){return s(),r("p",{class:"codepen","data-theme-id":e.theme,"data-preview":e.preview||null,"data-editable":e.editable||null,"data-height":e.height,"data-default-tab":e.tab,"data-user":e.user,"data-slug-hash":e.slug,"data-pen-title":e.title,"data-embed-version":e.version,style:u(`height: ${e.height}px`)},[d("span",null,[a("See the Pen "),d("a",{href:i.href},n(e.title),9,c),a(" by "+n(e.name||e.user)+" (",1),d("a",{href:`https://codepen.io/${e.user}`},"@"+n(e.user),9,f),a(") on "),p,a(".")])],12,o)}const S=l(h,[["render",_],["__file","codepen-snippet.vue"]]);export{S as default};