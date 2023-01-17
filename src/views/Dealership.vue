<template>
  <div class="Dealership">
    <parallaxheader :PropDealerName="this.dealername"/>
  <v-overlay v-if="isloading == true">
      <v-progress-circular
        indeterminate
        size="150"
      >
      <h4>Please Wait ...</h4>
      </v-progress-circular>
    </v-overlay>
    <v-container>
      <!-- <h1>This is an Dealership page</h1> -->
      <v-row>
          <v-col class="col-12">
              <v-btn
                class="mainheadingcolor white--text"
                @click="back()"
              >
              <v-icon
                    right
                    dark
                    class="mr-2"
                >
                    mdi-arrow-left-bold-circle-outline
                </v-icon>
                  Back
              </v-btn>
          </v-col>
          <v-col class="col-12 col-sm-12 col-mb-8 col-lg-8">
              <v-row>
                <v-col v-if="this.error" class="col-12">
                  <v-alert
                    dense
                    outlined
                    type="mainheadingcolor"

                    class="text-center"
                  >
                    No Vehicles
                  </v-alert>
                </v-col>
                <v-col v-for="car in cars" :key="car.id" class="col-12 col-sm-12 col-md-4 col-lg-4">
                  <v-card
                      class="mx-auto"
                      max-width="374"
                      rounded
                    >
                      <v-img
                        height="250"
                        :src="car.Image"
                      ></v-img>

                      <v-row>
                        <v-col class="col-12">
                          <v-btn @click="viewDealer(car.Makename, car.Modelname, car, car.VehicleId)" class="col-12 enquirebutton primary">
                        <!-- <v-col class="primary white--text text-center"> -->
                          Enquire Now
                        <!-- </v-col> -->
                        </v-btn>
                        </v-col>
                      </v-row>

                      <v-row class="px-4 pb-3 text-center" @click="viewDealer(car.Makename, car.Modelname, car, car.VehicleId)">
                        <v-col class="col-12 pb-0">
                            <h1>R {{(Math.round(car.VehiclePrice * 100) / 100).toLocaleString()}}</h1>
                        </v-col>
                        <v-col class="carmake col-12 pb-0 pt-0" justify="center" align="center">
                          <a :href="car.link">
                          <h3 class="my-auto">{{car.Makename}} {{ car.Range }} {{ car.Modelname }}</h3>
                          </a>
                        </v-col>
                        <v-col class="col-12 pt-0 mb-2">
                            <v-row>
                              <v-col>
                                <h4>{{car.Type}}</h4>
                              </v-col>
                              <v-col>
                                <h4>{{car.VehicleYear}}</h4>
                              </v-col>
                              <v-col>
                                <h4>{{car.TransmissonType}}</h4>
                              </v-col>
                              
                            </v-row>
                          </v-col>
                      </v-row>

                      <v-divider class="mx-4"></v-divider>

                      <!-- <v-card-title>Kind Price Ad</v-card-title> -->
                      <router-link to="/insurance">
                      <v-row class="px-3" justify="center">
                        <v-col class="col-3 px-3 text-center kingprice" >
                          <v-img src="../assets/kp-logo-desktop.png" width="50px"/>
                        </v-col>
                        <v-col class="col-9 px-3 kingprice white--text text-right">
                          <p>Insure Car from R {{Number(car.InsurancePrice).toFixed(2)}} p/m </p>                                      
                        </v-col>
                      </v-row>
                      </router-link>
                    </v-card>
                </v-col>

              </v-row>
          </v-col>
          <v-col class="col-12 col-sm-12 col-mb-4 col-lg-4 text-center py-5 px-5">
            <v-row justify="center" align="center" class="mb-2">
                <v-col class="col-6">
                  <h3>Share</h3>
                </v-col>
                <v-col class="col-6 text-right">
                  <ShareNetwork
                      network="WhatsApp"
                      :url='"https://www.secondhandcars.co.za/dealership/" + this.Dealer_Name'
                      :title='this.formatteddealername + " | Second hand Cars"'
                      :description='" " + this.formatteddealername + " | " + this.dealerinfo.Number'
                    >
                    <v-icon size="40" class="green--text">mdi-whatsapp</v-icon>
                  </ShareNetwork>
                </v-col>
              </v-row> 
              <v-divider></v-divider>           
            <v-avatar size="100">
                <img
                    :src="this.dealerinfo.DealerLogo"
                >
            </v-avatar>
            <v-row>
                <v-col class="col-12">
                    <h2>{{this.dealerinfo.Dealer_Name}}</h2>
                </v-col>
                <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <v-btn dark class="mainheadingcolor" @click="fireoffgtcall()">Call Dealer</v-btn>
                    <!-- <h4>{{this.dealerinfo.Number}}</h4> -->
                    <!-- <a @click="fireoffgt()"> <h4>{{ this.dealerinfo.Number }}</h4> </a> -->
                </v-col>
                <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                  <v-btn dark class="mainheadingcolor" @click="fireoffgtemail()">Email Dealer</v-btn>
                    <!-- <h4>{{this.dealerinfo.Email}}</h4> -->
                    <!-- <a :href="'mailto:' + this.dealerinfo.Email"> <h4>{{this.dealerinfo.Email}}</h4></a> -->
                </v-col>
                <v-col class="col-12 py-0">
                    <h4>{{this.dealerinfo.DealerAddress}}</h4>
                </v-col>
            </v-row>
            <v-row>
                <v-form v-model="valid" ref="form">
                      <v-row>
                          <v-col class="col-12">
                            <h1>Contact Us</h1>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                              v-model="formdata.firstName"
                                label="First Name"
                                :rules="[rules.required]"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                              v-model="formdata.lastName"
                                label="Last Name"
                                :rules="[rules.required]"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                              v-model="formdata.contactNumber"
                                label="Mobile"
                                :rules="[rules.required]"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                              v-model="formdata.emailAddress"
                                label="Email"
                                :rules="emailRules"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                              v-model="formdata.lookingfor"
                                label="What you looking for?"
                                :rules="[rules.required]"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-checkbox
                                v-model="formdata.consent"
                                :rules="[rules.required]"
                                label="* Consent (I have read and agree to the T&C's and Privacy Policy)"
                              ></v-checkbox>
                              <a href="/terms-and-conditions">Terms & Conditions</a>
                          </v-col>
                          <v-col class="col-12">
                              <v-btn @click="submit()" :disabled="!valid">
                                  Submit
                              </v-btn>
                          </v-col>
                      </v-row>
                  </v-form>
            </v-row>

            
          </v-col>
      </v-row>

    </v-container>
  </div>
</template>


<script>
import parallaxheader from "@/components/mainlayout/parallaxheader.vue";
import axios from "axios"
import { HTTP } from '../myapi/myconfig';
import { mapGetters } from "vuex";
export default {
   name: "Dealerships",
    components:{
      parallaxheader
    },
    props: ['Dealer_Name'],
    data: () => ({
    checkemailsent:'',
    valid:false,
    dealername:'',
    dealer:[],
    dealerinfo:[],
    cars:[],
    error:false,
    isloading:false,
    formatteddealername:'',
    rules: {
          required: value => !!value || 'Required.',
         // max: value => value > 15 || 'Cant go past max rounds.',
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      formdata: [{
            firstName: '',
            lastName:'',
            contactNumber:'',
            emailAddress:'',
            lookingfor:'',
            consent:''
            // finance:'',
            // tradeIn:'',
            // tradeInvehicle:''
        }],
  }),
  computed:{
    ...mapGetters(['cardata', 'dealerdata'])
  },
   created(){

    this.getdealerinfo()
    //this.$gtm.trackView("Dealership", "/dealership/" + this.Dealer_Name);
  },
    metaInfo () {
      this.dealername = this.Dealer_Name.replaceAll('-', ' ').toLocaleUpperCase();
      return {
        title: this.toTitleCase(this.dealername) +  ' | Second Hand Cars',
        meta: [
          { vmid: 'description', name: 'description', content: this.description }
        ]
      }
    },
  methods:{
    fireoffgtcall(){
      let catcall = "Call Link Click"
      let actcall = "Click"
      let labcall = this.dealerinfo.Number
      //console.log(cat + act + lab)
       this.$ga.event(catcall, actcall, labcall)
       window.location.assign("tel:" + labcall);
    },
    fireoffgtemail(){
      let cat = "Email Link Click"
      let act = "Click"
      let lab = this.dealerinfo.Email
      //console.log(cat + act + lab)
       this.$ga.event(cat, act, lab)
       window.location.assign("mailto:" + lab);
    },
      back() {
          this.$router.push({
          name: 'Dealers',
          
      })
    },
     toTitleCase(str) {
      return str.replace(
          /\w\S*/g,
          function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
      );
    },
    getdealerinfo() {
      this.dealername = this.Dealer_Name.replaceAll('-', ' ').toLocaleUpperCase();
      //console.log(this.toTitleCase(this.dealername))
      this.formatteddealername = this.toTitleCase(this.dealername)

        this.isloading = true
        this.apicallfordealerinfo(this.formatteddealername)
 
    },
    apicallfordealerinfo(nameofdealer) {
      HTTP.get(`SecondHandCarsAPI/dealershipinfoFilterSelect/Dealer_Name/` + nameofdealer)
            .then(response => {
                this.dealerinfo  = response.data.DealershipInfo[0]
                //console.log('this.currentDealer', this.dealerinfo)
                let apidealername = this.dealerinfo.Dealer_Name
                this.getcarsfordealer(apidealername)
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    getcarsfordealer(dealernamevar) {
      // this.cars = this.cardata.filter(c => c.Dealer_Name.indexOf(this.toTitleCase(dealernamevar)) > -1)
      //console.log('this.cars', dealernamevar)
      HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelect/Dealer_Name/` + dealernamevar)
            .then(response => {
                this.cars  = response.data.Table1
                //console.log('this.getcarsfordealer', this.cars)
                this.isloading = false
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    viewDealer(Makename, Modelname, car, VehicleId) {
       let zayzay =  Makename.replaceAll(' ', '-').toLowerCase();
       let zayzayy =  Modelname.replaceAll(' ', '-').toLowerCase();
    
      this.$router.push({
          name: 'ViewCar',
          params: {
              Makename: zayzay,
              Modelname: zayzayy,
              car: car,
              VehicleId: VehicleId
          }
      })
    },
    submit(){
          this.isloading = true
          // this.nowtime = moment.now()
          // this.datetoday = moment(this.nowtime).format('YYYY-MM-DD')
          // // let datetoday = this.nowtime.format('YYYY-MM-DD')
          // var data = JSON.stringify({
          //   "consent": "Yes",
          //   "DealershipID": this.DealershipID,
          //   "email": this.formdata.emailAddress,
          //   "enquiry_date": this.datetoday,
          //   "enquiry_time": this.nowtime,
          //   "Finance": 'null',
          //   "FirstName": this.formdata.firstName,
          //   "LastName": this.formdata.lastName,
          //   "phonstringber": this.formdata.contactNumber,
          //   "sales_status": "",
          //   "Salesman": "unassigned",
          //   "status": "pending",
          //   "Trade_in": 'null',
          //   "vehicleid": this.StockCode
          // });

          // var config = {
          //   method: 'post',
          //   url: 'https://1wk2xps2l4.execute-api.eu-west-1.amazonaws.com/default/SecondHandCarsAPI/enquiriesInsert/',
          //   headers: { 
          //     'Content-Type': 'application/json'
          //   },
          //   data : data
          // };

          //  axios(config)
          // .then(function (response) {
          //   console.log(JSON.stringify(response.data));
          // })
          // .catch(function (error) {
          //   console.log(error);
          //   // this.formisloading = false
          //   // this.formdata = []
          // });
          this.facebookevent(this.formdata.firstName, this.formdata.lastName, this.formdata.emailAddress, this.formdata.contactNumber)

          this.sendemail()
        },
        async sendemail() {
          let ouremail = 'danetopham@gmail.com'
          let client = "abrie@applord.co.za"
          // let clientdealername = this.
          // var axios = require('axios');
            var data = JSON.stringify({
              "toaddress": client,
              "ccaddress": ouremail,
              "emailSubject": "Second Hand Cars Dealer Enquiry " + this.formatteddealername,
              "emailBody": "<div><h2>Good Day</h2><h4>You have a new Dealer enquiry from Second Hand Cars</h4><br><p>First Name: " + this.formdata.firstName +"</p><p>Last Name: " + this.formdata.lastName + "</p><p>Email: " + this.formdata.emailAddress + "</p><p>Mobile: " + this.formdata.contactNumber + "</p><p>What client is looking for: " + this.formdata.lookingfor + "</p><div style='background-image: url(https://secondhandcars.co.za/secondhandcars/images/emailfooterbannernew1-01-min.jpg);width:850px;height:200px; background-size:cover; background-repeat: no-repeat'></div></div>"
            });
            //console.log('data', data)

            var config = {
              method: 'post',
              url: 'https://n0ksx3kjrb.execute-api.eu-west-1.amazonaws.com/Dev/',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };

            await axios(config)
            .then(function (response) {

            })
            .catch(function (error) {
              //console.log(error);
              this.isloading = false
              // this.formdata = []
            });
            this.isloading = false
            
        },
        facebookevent(firstname, lastname, email, number) {
          var data = JSON.stringify({
              "event_type":"Dealer Submission",
              "source_url":"https://secondhandcars.co.za/dealership/" + this.Dealer_Name.replaceAll(' ', '-').toLowerCase(),
              form_data:{
              "external_id": "001",
              "first_name": firstname,
              "last_name": lastname,
              "email": email,
              "contact_number": number,
              },
            });
            console.log('data', data)

            var config = {
              method: 'post',
              url: 'https://n0ksx3kjrb.execute-api.eu-west-1.amazonaws.com/Dev/conversion',
              headers: { 
                'Content-Type': 'application/json'
              },
              data : data
            };

           axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);

            });
          //   this.thankyoucontactus()
          this.thankyou(this.Dealer_Name)
        },
        thankyou(Dealer_Name) {
          //console.log('Dealer_Name', Dealer_Name)
            // let dealer = item
          let zayzay =  Dealer_Name.replaceAll(' ', '-').toLowerCase();
          this.$router.push({
              name: 'DealerThankyou',
              params: {
                  Dealer_Name: zayzay,
              }
          })
        },
  },
}
</script>

<style lang="sass">
.enquirebutton
  border-radius: 0px

</style>