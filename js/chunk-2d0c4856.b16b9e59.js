(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c4856"],{"3ad6":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article-page"},[e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.article.title))]),e("div",{staticClass:"article-meta"},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:t.article.author.image}})]),e("div",{staticClass:"info"},[e("a",{staticClass:"author",attrs:{href:""}},[t._v(t._s(t.article.author.username))]),e("span",{staticClass:"date"},[t._v(t._s(t.article.createdAt))])]),e("button",{staticClass:"btn btn-sm btn-outline-secondary"},[e("i",{staticClass:"ion-plus-round"}),t._v(" Follow "+t._s(t.article.author.username)+" ")]),t._v(" "),e("button",{staticClass:"btn btn-sm btn-outline-primary"},[e("i",{staticClass:"ion-heart"}),t._v(" Favorite Post "),e("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])])])]),e("div",{staticClass:"container page"},[e("div",{staticClass:"row article-content"},[e("div",{staticClass:"col-md-12"},[e("p",[t._v(t._s(t.article.body))])])]),e("hr")])])},r=[],n=(e("96cf"),e("1da1")),i=e("c5fa"),c={name:"Article",data:function(){return{article:{}}},computed:{slug:function(){return this.$route.params.slug}},methods:{getArticle:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i["b"].get(t.slug).then((function(t){return t.data.article}));case 3:t.article=a.sent,a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),console.log("ERROR",a.t0);case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()}},mounted:function(){this.getArticle()}},l=c,o=e("2877"),u=Object(o["a"])(l,s,r,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c4856.b16b9e59.js.map