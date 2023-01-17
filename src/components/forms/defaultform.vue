<template>
    <v-row>
      <v-overlay v-if="formisloading == true">
      <v-progress-circular
        indeterminate
        size="150"
      >
      <h4>Please Wait ...</h4>
      </v-progress-circular>
      </v-overlay>
        <v-col class="col-12">
         <v-form v-model="valid" ref="form">
              <v-row>
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
                        label="Contact Number"
                        :rules="[rules.required]"
                    ></v-text-field>
                  </v-col>
                  <v-col class="col-12">
                      <v-text-field
                        v-model="formdata.emailAddress"
                        label="Email Address"
                        :rules="emailRules"
                    ></v-text-field>
                  </v-col>
                   <v-col class="col-12">
                       <v-select
                            v-model="formdata.finance"
                            :items="financelist"
                            :rules="[rules.required]"
                            item-text="text"
                            item-value="value"
                            label="Need Finance"
                        ></v-select>
                      <!-- <v-text-field
                        v-model="formdata.finance"
                        label="Finance"
                        :rules="[rules.required]"
                    ></v-text-field> -->
                  </v-col>
                   <v-col class="col-12">
                       <v-select
                            v-model="formdata.tradeIn"
                            :items="tradeInlist"
                            :rules="[rules.required]"
                            item-text="text"
                            item-value="value"
                            label="Do you have a trade in ?"
                        ></v-select>
                      <!-- <v-text-field
                      v-model="formdata.tradeIn"
                        label="Province"
                        :rules="[rules.required]"
                    ></v-text-field> -->
                  </v-col>
                   <v-col v-if="formdata.tradeIn == 'yes'" class="col-12">
                      <v-text-field
                      v-model="formdata.tradeInvehicle"
                        label="Trade In Vehicle"
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
        </v-col>
    </v-row>
</template>


<script>
import axios from "axios"
import moment from "moment"
export default {
    props:(['StockCode', 'DealershipID', 'Dealer_Name', 'CurrentVehicle']),
    data: () => ({
        formisloading:false,
        nowtime:'',
        datetoday:'',
        nameofdealer:'',
        financelist:[
            {text:'Yes', value: 'yes'},
            {text:'No', value: 'no'}
        ],
        tradeInlist:[
            {text:'Yes', value: 'yes'},
            {text:'No', value: 'no'}
        ],
        formdata: [{
            firstName: '',
            lastName:'',
            contactNumber:'',
            emailAddress:'',
            finance:'',
            tradeIn:'',
            tradeInvehicle:'',
            consent:''
        }],
        // form:false,
        valid:false,
        rules: {
          required: value => !!value || 'Required.',
         // max: value => value > 15 || 'Cant go past max rounds.',
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
    }),
    created(){
        //console.log('helloooo')
        // console.log('this.CurrentVehicle',this.CurrentVehicle)
      
        // this.nowtime = moment.now()
        // let datetoday = moment(this.nowtime).format('YYYY-MM-DD')
        // console.log('nowtime', datetoday)
    },
    methods:{
        validate () {
            this.$refs.form.validate()
        },
        submit(){
          this.formisloading = true
          this.nowtime = moment.now()
          this.datetoday = moment(this.nowtime).format('YYYY-MM-DD')
          // let datetoday = this.nowtime.format('YYYY-MM-DD')
          var data = JSON.stringify({
            "consent": this.formdata.consent,
            "DealershipID": this.DealershipID,
            "email": this.formdata.emailAddress,
            "enquiry_date": this.datetoday,
            "enquiry_time": this.nowtime,
            "Finance": this.formdata.finance,
            "FirstName": this.formdata.firstName,
            "LastName": this.formdata.lastName,
            "phonstringber": this.formdata.contactNumber,
            "sales_status": "",
            "Salesman": "unassigned",
            "status": "pending",
            "Trade_in": this.formdata.tradeIn,
            "vehicleid": this.StockCode
          });

          var config = {
            method: 'post',
            url: 'https://1wk2xps2l4.execute-api.eu-west-1.amazonaws.com/default/SecondHandCarsAPI/enquiriesInsert/',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

           axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            // if(response.data) {
            //   this.sendemail()
            // }
          })
          .catch(function (error) {
            console.log(error);
            this.formisloading = false
            // this.formdata = []
          });

          this.facebookevent(this.formdata.firstName, this.formdata.lastName, this.formdata.emailAddress, this.formdata.contactNumber)
        },
        facebookevent(firstname, lastname, email, number) {
          let curcarmake = this.CurrentVehicle.Makename.replaceAll(" ", "-").toLowerCase()
          let curcarmodel = this.CurrentVehicle.Modelname.replaceAll(" ", "-").toLowerCase()

          var data = JSON.stringify({
              "event_type":"Vehicle Submission",
              "source_url":"https://secondhandcars.co.za/usedcar/" + curcarmake + "/" + curcarmodel + "/" + this.StockCode,
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
              "emailSubject": "New Second Hand Cars Vehicle Enquiry",
              "emailBody": "<div><h2>Good Day " + this.Dealer_Name + "</h2><h4>You have a new enquiry from Second Hand Cars</h4><p>First Name: " + this.formdata.firstName +"</p><p>Last Name: " + this.formdata.lastName + "</p><p>Email: " + this.formdata.emailAddress + "</p><p>Mobile: " + this.formdata.contactNumber + "</p><p>Stockcode: " + this.StockCode + "</p><div style='background-image: url(https://secondhandcars.co.za/uploads/emailfooterbannernew1-01-min.png);width:600px;height:200px; background-size:cover; background-repeat: no-repeat'></div></div>"              
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
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
              // this.formisloading = false
              // this.formdata = []
            });
            this.formisloading = false
            this.thankyou(this.Dealer_Name)
            
        },
        thankyou(Dealer_Name) {
          //console.log('Dealer_Name', Dealer_Name)
            // let dealer = item
          let zayzay =  Dealer_Name.replaceAll(' ', '-').toLowerCase();
          this.$router.push({
              name: 'ThankYou',
              params: {
                  Dealer_Name: zayzay,
                  CurrentVehicle: this.CurrentVehicle
              }
          })
        },
    }
}

</script>

<style lang="sass">

</style>