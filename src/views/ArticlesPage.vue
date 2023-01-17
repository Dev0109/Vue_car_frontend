<template>
  <div class="article">
    <v-parallax src="../assets/bg.jpeg" height="200">
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h3>Article</h3>
            <h2 class="bannerheadingh2">{{this.newposttitle}}</h2>
            <!-- <h4>Arthur: {{ post.post_author }}</h4> -->
          </v-col>
          <v-col class="col-6 ml-auto mr-auto text-center">
            <v-row>
              <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                <h4>Author: {{ post.post_author }}</h4>
              </v-col>
              <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                <h4>Published: {{ post.published }}</h4>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col class="col-12">
          <v-btn class="mainheadingcolor white--text" @click="backtoarticles()">
            <v-icon right dark class="mr-2">
              mdi-arrow-left-bold-circle-outline
            </v-icon>
            Back
          </v-btn>
        </v-col>
        <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 mx-auto text-center">
          <v-img :src="`https://secondhandcars.co.za/secondhandcars/admin/uploads/posts/` + post.Post_img" width="50%"
            class="ml-auto mr-auto" />
        </v-col>
        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
          <span v-html="post.Description"></span>
          <!-- {{ post.Description }} -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
export default {
    props:['Title', 'post'],
    data: () => ({
        newposttitle:'',
        articletitle:''
  }),
  created(){
      this.gettitle()
  },
  methods: {
      toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    },
      gettitle(){
          this.articletitle = this.Title.replaceAll('-', ' ').toLocaleUpperCase();
          console.log(this.toTitleCase(this.articletitle))
          this.newposttitle = this.toTitleCase(this.articletitle)
          console.log('formatteddealername', this.newposttitle)
          console.log('post', this.post)
      },
    backtoarticles() {
          this.$router.push({
          name: 'Articles',
      })
    },
    },
  metaInfo () {
      return {
        title: this.newposttitle + ' | Article | Second Hand Cars',
      }
    },
}
</script>

<style lang="scss">


</style>