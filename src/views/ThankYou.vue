<template>
  <div class="finance">
    <thankyouparallaxheader :PropDealerName="this.dealername"/>
    <v-container>
      <v-row>
        <v-col class="col-12 text-center">
          <h1>Thank you for your Enquiry</h1>
          <h2>Branch will be in contact with you soon.</h2>
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
import thankyouparallaxheader from "@/components/mainlayout/thankyouparallaxheader.vue";
export default {
  components:{
    thankyouparallaxheader
    },
    props:['Dealer_Name', 'CurrentVehicle'],
    data: () => ({
        dealername:'',
        triggerinfo:''
  }),
  created() {
      // let vehicle = this.CurrentVehicle
      this.tigger(this.CurrentVehicle)
      //setTimeout( () => this.$router.push({ path: '/'}), 60000);
      // console.log(this.CurrentVehicle)
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
    tigger(vehicle) {
        this.triggerinfo = this.Dealer_Name.replaceAll('-', ' ').toLocaleUpperCase();
        //console.log(vehicle.Makename + ' ' + vehicle.Modelname + ' | ' + this.toTitleCase(this.triggerinfo))

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
        'event': 'Vehicle Submission',
        'dealershipName': this.toTitleCase(this.triggerinfo),
        'vehicleName': vehicle.Makename + ' ' + vehicle.Modelname + ' | ' + this.toTitleCase(this.triggerinfo)
        });
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
        title: 'Thank You Enquiry Now | ' + this.toTitleCase(this.dealername) + ' | Second Hand Cars',
      }
    },

    // currencyFormat(num) {
    // return "R" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "R1,")
    // }
}
</script>

<style lang="scss">


</style>