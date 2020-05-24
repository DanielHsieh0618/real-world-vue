<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form v-if='user' @submit.prevent='handleSubmit' >
            <fieldset>
              <fieldset class="form-group">
                <input v-model='user.image' class="form-control" type="text" placeholder="URL of profile picture" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model='user.username' class="form-control form-control-lg" type="text" placeholder="Your Name" />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model='user.email' class="form-control form-control-lg" type="text" placeholder="Email" />
              </fieldset>
              <fieldset class="form-group">
                <input v-model='user.password' class="form-control form-control-lg" type="password" placeholder="Password" />
              </fieldset>
              <span>{{message}}</span>
              <button type='submit' class="btn btn btn-primary pull-xs-right">Update Settings</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import {  UserService } from "@/services/auth.service"

export default {
  // methods: {
  //   ...mapActions("auth", ["logout"]),
  //   onSignOutClick(){
  //     this.logout()
  //     this.$router.push({name:'Home'})
  //   }
  // }

  data(){
    return {
      user:null,
      message:''
    }
  },
  methods:{
    handleSubmit(){
      try{
          UserService.update(this.user)
            this.message ='完成更新'
      } catch(err){
        throw new Error(err)
      }
    }
  },

async mounted(){
  try{
     let res = await UserService.get()
     this.user = res.data.user;
    
  }
  catch(err){
    throw new Error(err)
  }
}
};
</script>