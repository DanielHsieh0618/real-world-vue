<template>
  <div id="nav">
    <nav class="navbar navbar-light">
      <div class="container">
        <router-link class="navbar-brand" :to="{name:'Home'}">conduit</router-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Home'}">Home</router-link>
          </li>
          <li v-if='isAuthenticated' class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Editor'}">
              <i class="ion-compose"></i>&nbsp;New Post
            </router-link>
          </li>
          <li v-if='isAuthenticated' class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Settings'}">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>
       
          <li v-if='isAuthenticated' class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Profile'}">
              <i class="ion-person"></i>&nbsp; {{user.username}}
            </router-link>
          </li>
          <li v-if='!status.loggedIn'  class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Login'}">
              <i class="ion-compose"></i>&nbsp;Sign in
            </router-link>
          </li>
          <li v-if='!status.loggedIn' class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Register'}">
              <i class="ion-compose"></i>&nbsp;Sign up
            </router-link>
          </li>
        
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["user", "status"]),
    isAuthenticated(){
      return this.status.loggedIn
    }
  },
  mathods: {
    ...mapActions(["auth/logout"])
  }
};
</script>