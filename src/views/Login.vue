<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <!-- <a href>Need an account?</a> -->
            <router-link :to="{name:'Register'}">Need an account?</router-link>
          </p>
          <!--validation sections-->
          <ul
            v-if="message"
            class="error-messages"
          >
            <li>{{message}}</li>
            <!-- <li>That email is already taken</li> -->
          </ul>

          <form @submit.prevent="handleLogin">
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
              />
            </fieldset>
            <button
              :disabled="loading"
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
            >Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "Login",
  data() {
    return {
      user: new User({}),
      loading: false,
      message: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      // validation
      if (this.user.email && this.user.password) {
        // syntax : dispatch ({{module}}/{{action}}  )
        this.$store
          .dispatch("auth/login", this.user)
          .then(() => {
            this.$router.push({ name: "HomeFeed" });
          })
          .catch(error => {
            this.loading = false;
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          });
      }
    }
  }
};
</script>