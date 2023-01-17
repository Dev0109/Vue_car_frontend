<template>
  <div class="finance">
    <contactusparallaxheader/>
    <v-container>
      <v-row>
        <v-col class="col-12 text-center">
          <h1>Thank you for your Enquiry</h1>
          <h2>We will be in contact with you soon.</h2>
        </v-col>
        <v-col class="col-3 mx-auto">
          <v-img src="../assets/newsecondhandlogo.png" />
        </v-col>
        <v-col class="col-12 text-center">
          <v-btn @click="morecars()" class="mainheadingcolor white--text">Browse More Vehicles</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<script>
import contactusparallaxheader from "@/components/mainlayout/contactusparallaxheader.vue";
export default {
  components:{
    contactusparallaxheader
    },
    // props:['Dealer_Name'],
    data: () => ({
        // dealername:''
  }),
  created() {
    this.tigger()
    setTimeout( () => this.$router.push({ path: '/'}), 60000);
  },
  methods: {
      morecars() {
          this.$router.push({
              name: 'Usedcars',
        })
    },
    tigger() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'event': 'Contact Submission',
        });
    },

  },
  metaInfo () {
      return {
        title: 'Thank You | Contact Us | Second Hand Cars',
      }
    },
}
</script>

<style lang="scss">


</style>