<template>
  <div id="articles">
    <b-spinner v-if="loading" class="m-4" variant="primary" label="Spinning"></b-spinner>
    <ArticlePreview
      v-else
      v-for="article of articles"
      :key="article.createdAt"
      class="article-preview"
      :article="article"
    ></ArticlePreview>

    <div class="list-tool">
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
import ArticlePreview from "@/components/ArticlePreview.vue";
import { ArticlesService } from "../services/api.service";

export default {
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
    }
  },
  data() {
    return {
      articles: [],
      loading: false,
      articlesCount: 0,
      itemsPerPageList: [5, 10, 15, 20],
      query: {
        limit: 20,
        offset: 0
      }
    };
  },
  methods: {
    async getArticles() {
      this.loading = true;
      let res = await ArticlesService.getFeed(this.query);
      this.articles = res.data.articles;
      this.articlesCount = res.data.articlesCount;
      this.loading = false;

      // ArticlesService.getList(this.listConfig)
      //   .then(res => {
      //     this.articles = res.data.articles;
      //     this.articlesCount = res.data.articlesCount;
      //   })
      //   .catch(err => {
      //     throw new Error(`[ERROR_ARTICLE_GET] ${err}`);
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });
    },
    linkGen() {
      return;
    },
    onClickItemCount(itemsCount) {
      this.query.limit = itemsCount;
    }
  },
  watch: {
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
</style>