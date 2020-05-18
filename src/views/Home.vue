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
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <!-- <li class="nav-item">
                  <a class="nav-link disabled" href>Your Feed</a>
                </li> -->
                <li class="nav-item">
                  <a class="nav-link active" href>Global Feed</a>
                </li>
              </ul>
            </div>

            <div v-for='article  of articles'  :key='article.createdAt' class="article-preview">
              <div class="article-meta">
                <a href="profile.html">
                  <img :src="article.author.image" />
                </a>
                <div class="info">
                  <a href class="author">{{article.author.username}}</a>
                  <span class="date">{{new Date(article.createdAt).toLocaleString()}}</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> {{article.favoritesCount}}
                </button>
              </div>
              <a href class="preview-link">
                <h1>{{article.title}}</h1>
                <p>{{article.description}}</p>
                <span>Read more...</span>
              </a>
            </div>

            <!-- <div class="article-preview">
              <div class="article-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/N4VcUeJ.jpg" />
                </a>
                <div class="info">
                  <a href class="author">Albert Pai</a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 32
                </button>
              </div>
              <a href class="preview-link">
                <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div> -->
          </div>

          <div class="col-md-3">
            <div class="sidebar">
              <p>Popular Tags</p>

              <div class="tag-list">
                <a href class="tag-pill tag-default">programming</a>
                <a href class="tag-pill tag-default">javascript</a>
                <a href class="tag-pill tag-default">emberjs</a>
                <a href class="tag-pill tag-default">angularjs</a>
                <a href class="tag-pill tag-default">react</a>
                <a href class="tag-pill tag-default">mean</a>
                <a href class="tag-pill tag-default">node</a>
                <a href class="tag-pill tag-default">rails</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import User from "../services/user.service"

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data(){
    return{
      articles:null
    }
  },
  mounted(){
    User.getAllArticles().then(res=>{
      console.log('res', res)
      this.articles = res.data.articles;
    }).catch(err=>{
      throw new Error('Error:', err)
    })
  }
};
</script>
