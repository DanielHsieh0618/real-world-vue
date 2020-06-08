<template>
  <div id="articles">
    <p v-if='loading'> loading...</p>
    <ArticlePreview
      v-else
      v-for="article of articles"
      :key="article.createdAt"
      class="article-preview"
      :article="article"
    ></ArticlePreview>
  </div>
</template>

<script>
import ArticlePreview from "@/components/ArticlePreview.vue";
import { ArticlesService } from "../services/api.service";

export default {
  components: {
    ArticlePreview
  },
  data() {
    return {
      articles: [],
      loading: false
    };
  },
  async mounted() {
    this.loading = true;
    let res = await ArticlesService.getFeed({});
    this.articles = res.data.articles;
    this.loading = false;
  }
};
</script>

<style>
</style>