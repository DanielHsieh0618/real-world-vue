<template>
  <div>

    <div class="article-meta">
      <b-avatar
        :src='article.author.image'
        :to="{name:'Profile', params:{username:article.author.username}}"
      ></b-avatar>
      <div class="info">
        <b-link
          class="author"
          :to="{name:'Profile', params:{username:article.author.username}}"
        >{{ article.author.username }}</b-link>

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

      <span>Read more...</span>
      <ul class="tag-list">
        <li
          v-for="tag of article.tagList"
          :key="tag"
          class="tag-default tag-pill tag-outline"
        >
          {{tag}}
        </li>
      </ul>
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