(function(){"use strict";var t={3283:function(t,n,e){var i=e(6369),a=function(){var t=this,n=t._self._c;return n("div",{staticClass:"view"},[n("el-carousel",{attrs:{height:"500px"}},t._l(t.imgList,(function(t){return n("el-carousel-item",{key:t},[n("img",{staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:t,alt:"img"}})])})),1),n("headerView"),n("mainView"),n("footerView")],1)},s=[],r=function(){var t=this,n=t._self._c;return n("nav",{staticClass:"site-nav",class:{see:t.opacityStyle}},[t._m(0),n("div",{staticClass:"site-nav-right"},[n("ul",{staticClass:"site-nav-list"},[t._m(1),n("li",[n("a",{attrs:{href:"javascript:void (0);"},on:{click:function(n){return t.handleScrollTo("ServerList")}}},[t._v("服务器")])]),n("li",[n("a",{attrs:{href:"javascript:void (0);"},on:{click:function(n){return t.handleScrollTo("moneyList")}}},[t._v("玩家贡献")])]),t._m(2),t._m(3)])])])},o=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"site-nav-left"},[n("div",{staticClass:"site-nav-logo-box"},[n("img",{staticClass:"site-nav-logo",attrs:{src:"https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg",alt:""}})])])},function(){var t=this,n=t._self._c;return n("li",[n("a",{attrs:{href:"https://mc.data07.cn/"}},[t._v("首页")])])},function(){var t=this,n=t._self._c;return n("li",[n("a",{attrs:{href:"https://mc.minebbs.com/"}},[t._v("游戏下载")])])},function(){var t=this,n=t._self._c;return n("li",[n("a",{attrs:{href:"#"}},[t._v("黑名单")])])}],l={name:"HeaderView",data(){return{opacityStyle:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{handleScroll(){let t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.opacityStyle=t>=420},handleScrollTo(t){var n=document.getElementById(t);n.scrollIntoView({behavior:"smooth",block:"center"})}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},c=l,u=e(1001),f=(0,u.Z)(c,r,o,!1,null,"7980822b",null),m=f.exports,d=function(){var t=this,n=t._self._c;return n("div",{staticClass:"main"},[n("boxTitle"),n("listView"),n("TableUi")],1)},v=[],p=function(){var t=this,n=t._self._c;return n("div",{staticClass:"box"},[n("div",{staticClass:"title-box"},[t._m(0),n("button03",{attrs:{init:"更多内容"}})],1),t._m(1),n("BlackInfoBox")],1)},h=[function(){var t=this,n=t._self._c;return n("h2",[t._v("灵泉工作室 "),n("span",{staticClass:"text-red"},[t._v("SpringCraft")])])},function(){var t=this,n=t._self._c;return n("div",[n("span",{staticClass:"description"},[t._v("SpringCraft工作室期待与你一起探索新世界,跳跃新高度！")])])}],_=function(){var t=this,n=t._self._c;return n("button",{staticClass:"button03"},[t._v(t._s(t.info))])},b=[],g={name:"Button03",props:{init:{default:"默认按钮",type:String}},data(){return{info:this.init}}},w=g,C=(0,u.Z)(w,_,b,!1,null,"0b7f1e4c",null),x=C.exports,y=function(){var t=this,n=t._self._c;return n("div",{staticClass:"black-view"},[n("span",{staticClass:"info"},[t._v(" SpringCraft工作室，由CnData07创建，拥有Lition等一众精英成员，旨在为玩家带来更为卓越、周到的我的世界游戏内外服务。工作室不断创新，致力于研发想法新颖的游戏、玩法和环境，为用户打造一次次脑洞大开的畅快体验。目前，我们的主要业务领域包括服务器运营和插件开发。 ")]),n("button01",{attrs:{init:"支持我们"}})],1)},k=[],S=function(){var t=this,n=t._self._c;return n("button",{staticClass:"button01"},[t._v(t._s(t.info))])},B=[],L={name:"Button01",props:{init:{default:"重要按钮",type:String}},data(){return{info:this.init}}},T=L,O=(0,u.Z)(T,S,B,!1,null,"bacce06a",null),M=O.exports,V={name:"BlackInfoBox",components:{button01:M}},j=V,D=(0,u.Z)(j,y,k,!1,null,"0d25a467",null),Z=D.exports,I={name:"InfoBox01",components:{button03:x,BlackInfoBox:Z}},Q=I,P=(0,u.Z)(Q,p,h,!1,null,"327c092c",null),W=P.exports,A=function(){var t=this,n=t._self._c;return n("div",{staticClass:"img-info-box"},[n("div",{staticClass:"left"},[t._m(0),n("span",{staticClass:"description",staticStyle:{"font-size":"16px"}},[t._v(" SpringCraft工作室，由CnData07创建，拥有Lition等一众精英成员，旨在为玩家带来更为卓越、周到的我的世界游戏内外服务。工作室不断创新，致力于研发想法新颖的游戏、玩法和环境，为用户打造一次次脑洞大开的畅快体验。目前，我们的主要业务领域包括服务器运营和插件开发。 ")]),n("div",{staticClass:"all-button"},[n("button01",{attrs:{init:"开始游戏"}}),n("button02",{staticStyle:{"margin-left":"16px"},attrs:{init:"了解服务器"}})],1)]),t._m(1)])},F=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"info-title-box"},[n("h2",[t._v("The #1 Job Board Graphic"),n("br"),t._v("Design Jobs")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"right"},[n("img",{attrs:{src:"https://www.minecraft.net/content/dam/games/minecraft/key-art/MC_The-Wild-Update_540x300.jpg",alt:""}})])}],q=function(){var t=this,n=t._self._c;return n("button",{staticClass:"button02"},[t._v(t._s(t.info))])},z=[],E={name:"Button02",props:{init:{default:"一般按钮",type:String}},data(){return{info:this.init}}},H=E,G=(0,u.Z)(H,q,z,!1,null,"8d7d2206",null),U=G.exports,J={name:"ImgInfoBox",components:{button01:M,button02:U}},K=J,Y=(0,u.Z)(K,A,F,!1,null,"5c5ed3fc",null),X=Y.exports,N=function(){var t=this,n=t._self._c;return n("div",[t._m(0),t._l(t.serverList,(function(t){return n("ServerPreview",{attrs:{title:t.title,logo:t.logo,keyword:t.keyword,buttonA:t.buttonA,buttonB:t.buttonB}})}))],2)},R=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"title-box"},[n("h2",{attrs:{id:"ServerList"}},[t._v("服务器列表")]),n("div",{staticClass:"description-box"},[n("span",{staticClass:"description"},[t._v("展示着灵泉旗下服务器列表")])])])}],$=function(){var t=this,n=t._self._c;return n("div",{staticClass:"box"},[n("div",{staticClass:"right"},[n("div",{staticClass:"logoBox"},[n("img",{attrs:{src:t.logo,alt:"Logo"}})]),n("div",{staticClass:"titleBox"},[n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),n("ul",{staticClass:"keyword"},t._l(t.keyword,(function(e){return n("li",{domProps:{textContent:t._s(e)}})})),0)])]),t._m(0),n("div",{staticClass:"bot"},[n("a",{attrs:{href:t.buttonA.link}},[n("button03",{staticStyle:{"background-color":"#fff"},attrs:{init:t.buttonA.text}})],1),n("a",{attrs:{href:t.buttonB.link,target:"_blank"}},[n("button03",{staticStyle:{"background-color":"#fff","margin-left":"12px"},attrs:{init:t.buttonB.text}})],1)])])},tt=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"left"},[n("span",[t._v("CnData07")]),n("span",{staticStyle:{"margin-top":"8px"}},[t._v("群聊：372774464")])])}],nt={name:"ServerPreview",components:{button03:x},props:{title:{default:""},logo:{default:"https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg"},keyword:{default:[]},buttonA:{default:{text:"加入服务器",link:""}},buttonB:{default:{text:"加入群聊",link:""}}}},et=nt,it=(0,u.Z)(et,$,tt,!1,null,"68bbca10",null),at=it.exports,st={name:"ListView",components:{button03:x,ServerPreview:at},data(){return{serverList:[{title:"灵泉服务器",logo:"https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg",keyword:["空岛","合作生存","基岩版"],buttonA:{text:"添加服务器",link:"minecraft://?addExternalSever=测试服务器|127.0.0.1:19132"},buttonB:{text:"添加群聊",link:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=UtVySc_aOub_goyjsrtjA8mXbRbCGvqJ&authKey=TqtHgDZvg0IHI7AxBMKB39lIpzFylGgCo68myVkd3EThmr3Ki1YVW%2FFPcZkSUHrB&noverify=0&group_code=372774464"}}]}}},rt=st,ot=(0,u.Z)(rt,N,R,!1,null,"9fcec4ba",null),lt=ot.exports,ct=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"moneyList"}},[t._m(0),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[n("el-table-column",{attrs:{prop:"name",label:"玩家名"}}),n("el-table-column",{attrs:{prop:"m",label:"贡献值"}})],1)],1)},ut=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"title-box"},[n("h2",[t._v("灵泉累计贡献")]),n("div",{staticClass:"description-box"},[n("span",{staticClass:"description"},[t._v("感谢以下玩家对灵泉工作室的支持")])])])}],ft={name:"FooterView",data(){return{tableData:[{name:"hncdata",m:"1000"},{name:"Severys",m:"509"},{name:"GHGZDLD",m:"364"},{name:"Dashanzzk",m:"288"},{name:"huxian2023",m:"256"},{name:"lanyi233",m:"145.01"},{name:"LiuMou0518",m:"40"},{name:"Waosai",m:"38"},{name:"Waosao",m:"38"},{name:"douding348",m:"28"},{name:"Newrainbow13042",m:"26.5"},{name:"trafficfam633",m:"10"},{name:"xiaoxin5348QWQ",m:"10"},{name:"XDDDOokoukioO",m:"4"}]}},components:{BoxTitle:W}},mt=ft,dt=(0,u.Z)(mt,ct,ut,!1,null,"c92dab02",null),vt=dt.exports,pt={name:"MainView",components:{TableUi:vt,boxTitle:W,imgInfoBox:X,listView:lt},data(){return{}}},ht=pt,_t=(0,u.Z)(ht,d,v,!1,null,"68179e8f",null),bt=_t.exports,gt=function(){var t=this,n=t._self._c;return n("div",{staticClass:"box"},[n("div",{staticClass:"footer"},[t._m(0),n("div",{staticClass:"right"},t._l(t.urlList,(function(e,i){return n("div",{staticClass:"list"},[n("h3",{staticClass:"title"},[t._v(t._s(i))]),t._l(e,(function(e,i){return n("span",{staticClass:"urlLi"},[n("a",{attrs:{href:e},domProps:{textContent:t._s(i)}})])}))],2)})),0)]),t._m(1)])},wt=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"left"},[n("div",{staticClass:"logo-box"},[n("img",{staticClass:"logo",attrs:{src:"https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg",alt:""}})]),n("span",{staticClass:"dis"},[t._v("SpringCraft工作室"),n("br"),t._v("期待与你一起探索新世界,"),n("br"),t._v("跳跃新高度！")])])},function(){var t=this,n=t._self._c;return n("div",{staticClass:"allFooter"},[n("span",[t._v("© 2023 SpringCraft工作室. 致敬.")]),n("span",[n("span",{staticStyle:{"font-weight":"700",padding:"0 6px"}},[t._v("1,034")]),t._v("玩家曾经游玩")])])}],Ct={name:"FooterView",data(){return{urlList:{"联系我们":{QQ:"123123123123",QxQ:"123123123123",QQx:"123123123123",QQ2:"123123123123",Q2Q:"123123123123"},"资源":{FastMirror:"https://www.fastmirror.net/#/home","浮居内网穿透":"https://www.frp.cool/?page=panel"},"论坛":{MineBBS:"https://www.minebbs.com/account/alerts",MCBBS:"https://www.mcbbs.net/portal.php","苦力怕论坛":"https://klpbbs.com/","我的世界命令论坛":"https://cbergit.com/",LiteLoaderBDS:"https://www.litebds.com/"},Wiki:{"Minecraft Wiki":"https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki","Minecraft Wiki镜像":"https://wiki.biligame.com/mc/Minecraft_Wiki","MC百科":"https://www.mcmod.cn/","MC插件百科":"https://mineplugin.org/"},"游戏":{Minecraft:"https://www.minecraft.net/zh-hans","我的世界中国版":"https://mc.163.com/index.html","泰拉瑞亚":"https://www.bbstr.net/"}}}}},xt=Ct,yt=(0,u.Z)(xt,gt,wt,!1,null,"7894c01c",null),kt=yt.exports,St={components:{headerView:m,mainView:bt,footerView:kt},data(){return{imgList:["https://help.minecraft.net/hc/static/media/Homepage_Banner_Desktop.a6a98d73204ed84e8644.jpg","https://www.minecraft.net/content/dam/games/minecraft/screenshots/Allay.png","https://i.328888.xyz/2023/05/10/iY6mgp.jpeg"]}}},Bt=St,Lt=(0,u.Z)(Bt,a,s,!1,null,null,null),Tt=Lt.exports,Ot=e(8499),Mt=e.n(Ot);i["default"].use(Mt()),i["default"].config.productionTip=!1,new i["default"]({render:t=>t(Tt)}).$mount("#app")}},n={};function e(i){var a=n[i];if(void 0!==a)return a.exports;var s=n[i]={id:i,loaded:!1,exports:{}};return t[i](s,s.exports,e),s.loaded=!0,s.exports}e.m=t,function(){e.amdO={}}(),function(){var t=[];e.O=function(n,i,a,s){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],s=t[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||r>=s)&&Object.keys(e.O).every((function(t){return e.O[t](i[l])}))?i.splice(l--,1):(o=!1,s<r&&(r=s));if(o){t.splice(u--,1);var c=a();void 0!==c&&(n=c)}}return n}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[i,a,s]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,i){var a,s,r=i[0],o=i[1],l=i[2],c=0;if(r.some((function(n){return 0!==t[n]}))){for(a in o)e.o(o,a)&&(e.m[a]=o[a]);if(l)var u=l(e)}for(n&&n(i);c<r.length;c++)s=r[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(u)},i=self["webpackChunkclidemo"]=self["webpackChunkclidemo"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=e.O(void 0,[998],(function(){return e(3283)}));i=e.O(i)})();
//# sourceMappingURL=app.97a28b99.js.map