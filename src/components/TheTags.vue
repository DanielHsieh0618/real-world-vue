<template>
  <div>
    <p>Popular Tags</p>

    <div class="tag-list">
      <router-link
        v-for="tag of tags"
        :key="tag"
        class="tag-pill tag-default"
        active-class="tag-primary"
        :to="{name:'Home',query:{tag:tag}}"
        exact
      >{{ tag }}
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "theTags",
  props: {
    tags: {
      Type: "Array",
      required: true
    }
  }
};
</script>

<style>
</style>>