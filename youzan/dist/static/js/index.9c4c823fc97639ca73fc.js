webpackJsonp([3],{0:function(e,t,a){"use strict";var n={hotLists:"search/list",banner:"index/banner",topList:"category/topList",subList:"category/subList",rankList:"category/rank",searchList:"search/list",detailsList:"goods/details",dealList:"goods/deal",cartList:"cart/list",cartrmList:"cart/remove",addgoods:"cart/add",reducegoods:"cart/reduce",updatagoods:"cart/update",addressList:"address/list",addressDefault:"address/setDefault",addressAdd:"address/add",addressDelate:"address/remove",addressUpdate:"address/update"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="https://easy-mock.com/mock/5c9b6e2da88cf9475e3996c0/youzan/"+n[s]);t.a=n},10:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom-nav"},[a("ul",e._l(e.massage,function(t,n){return a("li",{class:{active:n===e.curtIndex},on:{click:function(a){e.change(t,n)}}},[a("a",[a("i",{class:t.icon}),a("div",[e._v(e._s(t.name))])])])}))])},staticRenderFns:[]}},111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(84),s=(a.n(n),a(2)),i=(a.n(s),a(1)),r=a(0),o=a(4),c=a.n(o),l=a(86),d=(a.n(l),a(3)),u=a.n(d),f=a(19),p=a.n(f);i.default.use(l.InfiniteScroll);new i.default({el:"#app",data:{lists:null,pageNum:0,pageSize:6,loading:!1,allloaded:!1,banner:null},created:function(){this.getlist(),this.getbanner()},methods:{getlist:function(){var e=this;this.loading=!0,this.allloaded||c.a.get(r.a.hotLists,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(t){var a=t.data.lists;a.length<e.pageSize&&(e.allloaded=!0),e.lists?e.lists=e.lists.concat(a):e.lists=a,e.loading=!1,e.pageNum+=1})},getbanner:function(){var e=this;c.a.get(r.a.banner).then(function(t){e.banner=t.data.lists})}},components:{Foot:u.a,Swiper:p.a}})},19:function(e,t,a){function n(e){a(37)}var s=a(8)(a(26),a(38),n,null,null);e.exports=s.exports},2:function(e,t){},26:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(67),s=a(36),i=(a.n(s),a(68));a.n(i);t.default={props:{bannerlists:{type:Array,required:!0}},mounted:function(){new n.a(".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}})}}},3:function(e,t,a){var n=a(8)(a(9),a(10),null,null,null);e.exports=n.exports},36:function(e,t){},37:function(e,t){},38:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},e._l(e.bannerlists,function(e){return a("div",{staticClass:"swp-page swiper-slide"},[a("a",{staticClass:"js-no-follow"},[a("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:e.img}})])])})),e._v(" "),a("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]}},84:function(e,t){},9:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{name:"有赞",icon:"icon-home",href:"./index.html"},{name:"分类",icon:"icon-category",href:"./category.html"},{name:"购物车",icon:"icon-cart",href:"./cart.html"},{name:"我",icon:"icon-user",href:"./member.html"}];if(location.href.split("=")[1])var s=location.href.split("=")[1].replace(/[^0-9]/g,"");t.default={data:function(){return{massage:n,curtIndex:0|s}},create:function(){this.change()},methods:{change:function(e,t){location.href=e.href+"?index="+t}}}}},[111]);
//# sourceMappingURL=index.9c4c823fc97639ca73fc.js.map