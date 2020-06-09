<template>
  <div class='profile-mine'>
    <ArticleList
      :favorited="author"
      items-per-page="5"
    />
  </div>
</template>

<script>
import ArticleList from "@/components/ArticleList.vue";

export default {
  name: "ProfileMine",
  components: { ArticleList },
  computed: {
    author() {
      return this.$route.params.username;
    }
  }
};
</script>