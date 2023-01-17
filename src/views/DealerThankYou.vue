<template>
  <div class="dealerthankyou">
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
    props:['Dealer_Name'],
    data: () => ({
        dealername:'',
        triggerinfo:''
  }),
  created() {
    this.tigger()
    setTimeout( () => this.$router.push({ path: '/'}), 60000);
  },
  methods: {
    tigger() {
        this.triggerinfo = this.Dealer_Name.replaceAll('-', ' ').toLocaleUpperCase();

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'event': 'Dealership Submission',
        'dealershipName': this.toTitleCase(this.triggerinfo)
        });
        // Dealership Submission, Vehicle Submission
      // dataLayer.push({'event':'dealership-submission'});
    },
      toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
        },
      morecars() {
          this.$router.push({
              name: 'Usedcars',
        })
    },
  },
  metaInfo () {
      this.dealername = this.Dealer_Name.replaceAll('-', ' ').toLocaleUpperCase();
      return {
        title: 'Thank You Dealer Enquiry | ' + this.toTitleCase(this.dealername) + ' | Second Hand Cars',
      }
    },
}
</script>

<style lang="scss">


</style>