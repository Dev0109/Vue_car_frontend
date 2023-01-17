<template>
  <div class="articles">
      <v-parallax src="../assets/bg.jpeg"
      height="200"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">Articles</h2>
          </v-col>
        </v-row>
      </v-container>
  </v-parallax>
    <v-container>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" class="col-12 col-sm-12 col-md-3 col-lg-3">
            <v-card
              :loading="loading"
              class="mx-auto my-12"
              max-width="374"
            >
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img
                height="250"
                :src="`https://secondhandcars.co.za/secondhandcars/admin/uploads/posts/` + post.Post_img"
              ></v-img>
              <v-row class="px-4 py-4" justify="center" align="center">
                <v-col class="col-12 posttitle">
                  <!-- <v-card-title> -->
                    <h3>{{post.Title}}</h3>
                    
                    <!-- </v-card-title> -->
                </v-col>
              </v-row>
              <v-card-text>
                <v-row>
                  <v-col class="col-12 py-0">
                    Author: {{post.post_author}}
                  </v-col>
                  <v-col class="col-12 py-0">
                    Date: {{post.published}}
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn
                  color="mainheadingcolor"
                  text
                  @click="viewArticle(post.Title, post)"
                >
                  View
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { HTTP } from '../myapi/myconfig';
export default {
    data: () => ({
      posts:[],
      loading: false,
    }),
    created(){
      this.getposts()
    },
    methods: {
      getposts() {
        this.loading = true
        if(this.$store.state.cardata.postsdata == '') {
        console.log('this.$store.state.cardata ==', this.$store.state.cardata.postsdata)
          HTTP.get(`/SecondHandCarsAPI/postsFilterSelect`)
            .then(response => {
                this.postsdata = response.data.Posts
                this.posts = this.postsdata
                console.log(this.postsdata)
                this.loading = false
            })
            .catch(e => {
                this.errors.push(e)
            })
      }else{
        console.log('postsdata', this.$store.state.cardata.postsdata)
        this.posts = this.$store.state.cardata.postsdata
        this.loading = false
      }
      },
       viewArticle(Title, post) {
        // let dealer = item
       let newtitle =  Title.replaceAll(' ', '-').toLowerCase();
      this.$router.push({
          name: 'ArticlesPage',
          params: {
              Title: newtitle,
              post: post
          }
      })
    },
  }
   
}
</script>

<style lang="sass">
.v-card__title
  word-break: normal !important
.posttitle 
  height: 100px 

</style>