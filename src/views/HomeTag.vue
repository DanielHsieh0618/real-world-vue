<template>
  <div id="articles">
    <ArticlePreview
      v-for="article of articles"
      :key="article.createdAt"
      class="article-preview"
      :article="article"
    ></ArticlePreview>
  </div>
</template>

<script>
import ArticlePreview from "@/components/ArticlePreview.vue";
export default {
  components: {
    ArticlePreview
  },
  props: {
    articles: {
      Type: Array
    }
  }
};
</script>

<style>
</style>