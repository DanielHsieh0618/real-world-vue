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
            <!--tab navs-->
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li
                  v-show="isLoggedIn"
                  class="nav-item"
                >
                  <router-link
                    class="nav-link"
                    active-class="active"
                    :to="{name:'HomeFeed'}"
                  >Your Feed</router-link>
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
                    v-show="tag"
                    class="nav-link"
                    :to="{name:'HomeTag',query:{tag}}"
                    active-class="active"
                  >{{'#'+ tag}}</router-link>
                </li>
              </ul>
            </div>
            <!--tabs-->
            <router-view></router-view>

          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <TheTags :tags="tags"></TheTags>
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
import { TagsService } from "../services/api.service";
import { mapGetters } from "vuex";

//isLoggedIn
export default {
  name: "Home",
  components: {
    TheTags
  },
  data() {
    return {
      tags: null
    };
  },
  computed: {
    tag() {
      return this.$route.query.tag;
    },
    ...mapGetters("auth", ["isLoggedIn"])
  },
  mounted() {
    TagsService.get()
      .then(res => {
        this.tags = res.data.tags;
      })
      .catch(err => {
        throw new Error(`[ERROR_TAGS_GET ${err}]`);
      });
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