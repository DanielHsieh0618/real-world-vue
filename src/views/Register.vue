<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>
          <p class="text-xs-center">
            <!-- <a href>Have an account?</a> -->
            <router-link :to="{name:'Login'}">Have an account?</router-link>
          </p>

          <ul class="error-messages">
            <!-- <li>That email is already taken</li> -->
            <li v-if="message">{{message}}</li>
          </ul>
          <ul class='success-messages'>
            <li v-if='isSuccess'>success</li>
            </ul>

          <form @submit.prevent="handleSubmit">
            <fieldset class="form-group">
              <input
                v-model="user.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="user.email"
                class="form-control form-control-lg"
                type="text"
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
            <button :disabled="loading" class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/models/user";
// import AuthService from "@/services";

export default {
  data() {
    return {
      user: new User("", "", ""),
      message: "",
      loading:false,
      isSuccess: false
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.user);
      this.loading = true;
      this.$store
        .dispatch("auth/register", this.user)
        .then(() => {
          //this.$router.push("/");
          this.isSuccess = true
        })
        .catch(error => {
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>