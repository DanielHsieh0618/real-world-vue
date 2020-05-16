<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="index.html">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" :to="{name:'Home'}">Home</router-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href>
                <i class="ion-compose"></i>&nbsp;New Post
              </a>-->
              <router-link class="nav-link" active-class="active" :to="{name:'Login'}">Sign in</router-link>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href>
                <i class="ion-gear-a"></i>&nbsp;Settings
              </a>
            </li>-->
            <li class="nav-item">
              <!-- <a class="nav-link" href>Sign up</a> -->
              <router-link class="nav-link" active-class="active" :to="{name:'Register'}">Sign up</router-link>
            </li>
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
