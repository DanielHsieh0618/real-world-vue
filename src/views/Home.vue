<template>
  <div class="home">
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="overflow-auto"></div>
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li v-show="isLoggedIn" class="nav-item">
                  <a class="nav-link" href>Your Feed</a>
                </li>
                <li class="nav-item">
                  <router-link
                    class="nav-link"
                    :to="{name:'Home'}"
                    exact
                    active-class="active"
                  >Global Feed</router-link>
                </li>
                <li class="nav-item">
                  <router-link
                    v-show="query.tag"
                    class="nav-link"
                    :to="{name:'Home',query:{tag :query.tag}}"
                    active-class="active"
                  >{{'#'+query.tag}}</router-link>
                </li>
              </ul>
            </div>
            <router-view :articles="articles"></router-view>
            <!-- <div
              id="articles"
              v-for="article of articles"
              :key="article.createdAt"
              class="article-preview"
            >
              <ArticlePreview :article="article"></ArticlePreview>
            </div>-->

            <div class="list-tool">
              <b-pagination-nav
                v-model="currentPage"
                :number-of-pages="totalPage"
                use-router
                :link-gen="linkGen"
              ></b-pagination-nav>
              <div>
                items per page
                <div class="btn-group btn-group-sm">
                  <button
                    v-for="(itemsCount,idx) of itemsPerPage"
                    :key="itemsCount+'-'+idx"
                    class="btn btn-primary"
                    :class="{'active':query.limit===itemsCount}"
                    @click="onClickItemCount(itemsCount)"
                  >{{itemsCount}}</button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <TheTags :tags="tags" :query.sync="query"></TheTags>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTags from "@/components/TheTags.vue";
import { ArticlesService, TagsService } from "../services/api.service";
import { mapGetters } from "vuex";

//isLoggedIn
export default {
  name: "Home",
  components: {
    TheTags
  },
  data() {
    return {
      articles: [],
      articlesCount: 0,
      tags: null,
      query: {
        favorited: null,
        author: null,
        tag: null,
        limit: 20,
        offset: 0
      },
      itemsPerPage: [5, 10, 15, 20]
    };
  },
  computed: {
    totalPage() {
      let pages = Math.round(this.articlesCount / this.query.limit);
      return pages === 0 ? 1 : pages;
    },
    currentPage: {
      get() {
        return this.query.offset / this.query.limit + 1;
      },
      set(val) {
        this.query.offset = (val - 1) * this.query.limit;
      }
    },
    ...mapGetters("auth", ["isLoggedIn"])
  },
  methods: {
    getArticles() {
      ArticlesService.getList(this.query)
        .then(res => {
          this.articles = res.data.articles;
          this.articlesCount = res.data.articlesCount;
        })
        .catch(err => {
          throw new Error(`[ERROR_ARTICLE_GET] ${err}`);
        });
    },
    onClickPageButton(n) {
      this.query.offset = this.query.limit * (n - 1);
      this.getArticles();
    },
    onClickItemCount(itemsCount) {
      this.query.limit = itemsCount;
      this.getArticles();
    },
    linkGen() {
      return;
    }
  },
  mounted() {
    TagsService.get()
      .then(res => {
        this.tags = res.data.tags;
      })
      .catch(err => {
        throw new Error(`[ERROR_TAGS_GET ${err}]`);
      });
  },
  watch: {
    "$route.query.tag"(tag) {
      this.query.tag = tag;
      this.getArticles();
    },
    query: {
      immediate: true,
      handler: function() {
        this.getArticles();
      },
      deep: true
    }
  }
};
</script>


<style>
.list-tool {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>