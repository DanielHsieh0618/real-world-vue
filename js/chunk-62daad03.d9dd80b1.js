(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62daad03"],{3961:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"articles"}},[i("ArticleList")],1)},r=[],s=i("64e5"),n={components:{ArticleList:s["a"]}},l=n,c=i("2877"),o=Object(c["a"])(l,a,r,!1,null,null,null);e["default"]=o.exports},"64e5":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.loading?i("b-spinner",{staticClass:"m-4",attrs:{variant:"primary",label:"Spinning"}}):i("div",[t._l(t.articles,(function(t){return i("ArticlePreview",{key:t.createdAt,staticClass:"article-preview",attrs:{article:t}})})),i("div",[i("b-pagination-nav",{staticClass:"float-left",attrs:{"number-of-pages":t.totalPage,"use-router":"","link-gen":t.linkGen},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),i("div",{staticClass:"float-right"},[t._v(" items per page "),i("div",{staticClass:"btn-group btn-group-sm"},t._l(t.itemsPerPageList,(function(e,a){return i("button",{key:e+"-"+a,staticClass:"btn btn-primary",class:{active:t.query.limit===e},on:{click:function(i){return t.onClickItemCount(e)}}},[t._v(t._s(e))])})),0)])],1)],2)},r=[],s=(i("d3b7"),i("c5fa")),n=i("ab89"),l={props:["tag","author","favorited","itemsPerPage"],components:{ArticlePreview:n["a"]},computed:{totalPage:function(){var t=Math.round(this.articlesCount/this.query.limit);return 0===t?1:t},currentPage:{get:function(){return this.query.offset/this.query.limit+1},set:function(t){this.query.offset=(t-1)*this.query.limit}},listConfig:function(){var t=this.query;return this.author&&(t.author=this.author),this.tag&&(t.tag=this.tag),this.favorited&&(t.favorited=this.favorited),this.itemsPerPage&&(t.limit=this.itemsPerPage,t.offset=(this.currentPage-1)*this.itemsPerPage),t}},data:function(){return{articles:[],articlesCount:0,itemsPerPageList:[5,10,15,20],query:{favorited:null,author:null,tag:null,limit:20,offset:0},loading:!1}},methods:{getArticles:function(){var t=this;this.loading=!0,s["b"].getList(this.listConfig).then((function(e){t.articles=e.data.articles,t.articlesCount=e.data.articlesCount})).catch((function(t){throw new Error("[ERROR_ARTICLE_GET] ".concat(t))})).finally((function(){t.loading=!1}))},onClickItemCount:function(t){this.query.limit=t},linkGen:function(){}},watch:{listConfig:{immediate:!0,handler:function(){this.getArticles()},deep:!0}}},c=l,o=i("2877"),u=Object(o["a"])(c,a,r,!1,null,null,null);e["a"]=u.exports},ab89:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"article-meta"},[i("b-avatar",{attrs:{src:t.article.author.image,to:{name:"Profile",params:{username:t.article.author.username}}}}),i("div",{staticClass:"info"},[i("b-link",{staticClass:"author",attrs:{to:{name:"Profile",params:{username:t.article.author.username}}}},[t._v(t._s(t.article.author.username))]),i("span",{staticClass:"date"},[t._v(t._s(new Date(t.article.createdAt).toLocaleString()))])],1),i("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right"},[i("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+" ")])],1),i("router-link",{staticClass:"preview-link",attrs:{to:{name:"Article",params:{slug:t.article.slug}}}},[i("h1",[t._v(t._s(t.article.title))]),i("p",[t._v(t._s(t.article.description))]),i("div",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e){return i("span",{key:e,staticClass:"tag-default tag-pill tag-outline float-right",attrs:{pill:"",variant:"primary"}},[t._v(t._s(e))])})),0),i("span",{staticClass:"d-inline-block"},[t._v("Read more...")])])],1)},r=[],s={name:"ArticlePreview",props:{article:{Type:Object,required:!0}}},n=s,l=i("2877"),c=Object(l["a"])(n,a,r,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-62daad03.d9dd80b1.js.map