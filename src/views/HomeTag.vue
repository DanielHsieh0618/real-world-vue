<template>
  <div id="articles">
    <ArticleList :tag="$route.query.tag"></ArticleList>
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";
export default {
  components: {
    ArticleList
  }
};
</script>

<style>
</style>