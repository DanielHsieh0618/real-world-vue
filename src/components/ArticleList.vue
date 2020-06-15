<template>
  <!-- <div v-if="loading">loading...</div> -->
  <!-- <b-spinner v-if="loading" variant="primary" type="grow" label="Spinning"></b-spinner> -->
  <b-spinner v-if="loading" class="m-4" variant="primary" label="Spinning"></b-spinner>
  <div v-else>
    <!-- <div v-show="articles.lenght==0">No articles are here... yet.</div> -->
    <ArticlePreview
      v-for="article of articles"
      :key="article.createdAt"
      class="article-preview"
      :article="article"
    ></ArticlePreview>

    <div>
      <b-pagination-nav
        v-model="currentPage"
        :number-of-pages="totalPage"
        use-router
        :link-gen="linkGen"
        class="float-left"
      ></b-pagination-nav>
      <div class="float-right">
        items per page
        <div class="btn-group btn-group-sm">
          <button
            v-for="(itemsCount,idx) of itemsPerPageList"
            :key="itemsCount+'-'+idx"
            class="btn btn-primary"
            :class="{'active':query.limit===itemsCount}"
            @click="onClickItemCount(itemsCount)"
          >{{itemsCount}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArticlesService } from "../services/api.service";
import ArticlePreview from "@/components/ArticlePreview.vue";
export default {
  props: ["tag", "author", "favorited", "itemsPerPage"],
  components: {
    ArticlePreview
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
    listConfig() {
      let params = this.query;
      if (this.author) {
        params.author = this.author;
      }
      if (this.tag) {
        params.tag = this.tag;
      }
      if (this.favorited) {
        params.favorited = this.favorited;
      }
      if (this.itemsPerPage) {
        params.limit = this.itemsPerPage;
        params.offset = (this.currentPage - 1) * this.itemsPerPage;
      }

      return params;
    }
  },
  data() {
    return {
      articles: [],
      articlesCount: 0,
      itemsPerPageList: [5, 10, 15, 20],
      query: {
        favorited: null,
        author: null,
        tag: null,
        limit: 20,
        offset: 0
      },
      loading: false
    };
  },
  methods: {
    getArticles() {
      this.loading = true;
      ArticlesService.getList(this.listConfig)
        .then(res => {
          this.articles = res.data.articles;
          this.articlesCount = res.data.articlesCount;
        })
        .catch(err => {
          throw new Error(`[ERROR_ARTICLE_GET] ${err}`);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onClickItemCount(itemsCount) {
      this.query.limit = itemsCount;
    },
    linkGen() {
      return;
    }
  },
  watch: {
    listConfig: {
      immediate: true,
      handler: function() {
        this.getArticles();
      },
      deep: true
    }
  }
};
</script>
