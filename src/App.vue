<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-light">
        <div class="container">
          <router-link class="navbar-brand" :to="{name:'Home'}">conduit</router-link>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Home'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Editor'}">
                <i class="ion-compose"></i>&nbsp;New Post
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Settings'}">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Login'}">
                <i class="ion-compose"></i>&nbsp;Sign in
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Profile'}">
                <i class="ion-compose"></i>&nbsp;Profile
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Register'}">
                <i class="ion-compose"></i>&nbsp;Sign up
              </router-link>
            </li>
            <!-- <li>{{user}}</li> -->
            <li>{{status}}</li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />

    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user", "status"])
  },
  mathods: {
    ...mapActions(["auth/logout"])
  }
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
