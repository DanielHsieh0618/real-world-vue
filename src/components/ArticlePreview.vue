<template>
  <div>
    <div class="article-meta">
      <a href="profile.html">
        <img :src="article.author.image" />
      </a>
      <div class="info">
        <a
          href
          class="author"
        >{{ article.author.username }}</a>
        <span class="date">
          {{new Date(article.createdAt).toLocaleString() }}
        </span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i>
        {{ article.favoritesCount }}
      </button>
    </div>
    <router-link
      class="preview-link"
      :to="{name:'Article',params:{slug:article.slug}}"
    >
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>

      <div>
        <span
          v-for="tag of article.tagList"
          :key="tag"
          class="tag-pill tag-default"
          :class="{'tag-primary':$route.query.tag===tag}"
        >{{tag}}
        </span>
      </div>
      <span>Read more...</span>

    </router-link>
  </div>

</template>

<script>
export default {
  name: "ArticlePreview",
  props: {
    article: {
      Type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>>