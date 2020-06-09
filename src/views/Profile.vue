<template>
  <div
    v-if='profile'
    class="profile-page"
  >
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <b-img
              :src="profile.image"
              class="user-img"
            />
            <h4>{{profile.username}}</h4>
            <!-- <p>Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games</p> -->
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow {{profile.username}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">

                <router-link
                  class="nav-link"
                  active-class="active"
                  :to="{name:'Profile',params:{username:profile.username}}"
                  exact
                >My Articles</router-link>
              </li>
              <li class="nav-item">

                <router-link
                  class="nav-link"
                  active-class="active"
                  :to="{name:'ProfileFavorited',params:{username:profile.username}}"
                >Favorited Articles</router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProfileService } from "@/services/api.service";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"])
  },
  data() {
    return {
      profile: null
    };
  },
  mounted() {
    ProfileService.get(this.$route.params.username)
      .then(res => {
        this.profile = res.data.profile;
      })
      .catch(err => {
        throw new Error("Error:", err);
      });
  }
};
</script>