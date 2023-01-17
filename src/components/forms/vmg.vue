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
                      v-model="formdata.fullname"
                        label="Full Name"
                        :rules="[rules.required]"
                    ></v-text-field>
                  </v-col>
                  <!-- <v-col class="col-12">
                      <v-text-field
                        v-model="formdata.lastName"
                        label="Last Name"
                        :rules="[rules.required]"
                    ></v-text-field>
                  </v-col> -->
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
        formdata: [{
            StockCode:'',
            DealershipID:'',
            fullname: '',
            // lastName:'',
            contactNumber:'',
            emailAddress:'',
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
        //console.log('this.StockCode',this.StockCode)
        //console.log('this.DealershipID',this.DealershipID)
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
            "Finance": 'null',
            "FirstName": this.formdata.fullname,
            "LastName": "null",
            "phonstringber": this.formdata.contactNumber,
            "sales_status": "null",
            "Salesman": "unassigned",
            "status": "pending",
            "Trade_in": 'null',
            "vehicleid": this.StockCode
          });

          //console.log('data', data)

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
          })
          .catch(function (error) {
            console.log(error);
            // this.formisloading = false
            // this.formdata = []
          });
             this.facebookevent(this.formdata.fullname, this.formdata.emailAddress, this.formdata.contactNumber)
          //this.sendemail()
        },
        facebookevent(firstname, email, number) {
          let curcarmake = this.CurrentVehicle.Makename.replaceAll(" ", "-").toLowerCase()
          let curcarmodel = this.CurrentVehicle.Modelname.replaceAll(" ", "-").toLowerCase()

          var data = JSON.stringify({
              "event_type":"Vehicle Submission",
              "source_url":"https://secondhandcars.co.za/usedcar/" + curcarmake + "/" + curcarmodel + "/" + this.StockCode,
              form_data:{
              "external_id": "001",
              "first_name": firstname,
              "last_name": firstname,
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
              "emailSubject": "Thank you for your enquriy " + this.Dealer_Name,
              "emailBody": "<div><h2>Good Day " + this.Dealer_Name + "</h2><h4>You have a new enquiry from Second Hand Cars</h4><p>First Name: " + this.formdata.fullname +"</p><p>Email: " + this.formdata.emailAddress + "</p><p>Mobile: " + this.formdata.contactNumber + "</p><p>Stockcode: " + this.StockCode + "</p><div style='background-image: url(https://secondhandcars.co.za/uploads/emailfooterbannernew1-01-min.png);width:600px;height:200px; background-size:cover; background-repeat: no-repeat'></div></div>"
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
            this.vmgfirstcall()
            // this.thankyou(this.Dealer_Name)
            
        },
        vmgfirstcall() {
            var data = JSON.stringify({
              "dealer_id": this.DealershipID,
              "lead_name": this.formdata.fullname,
              "cellphone_no": this.formdata.contactNumber,
              "email_address": this.formdata.emailAddress,
              "stock_id": this.StockCode,
              "lead_source": "Second Hand Cars",
              "branch_guid": this.DealershipID
            });

            var config = {
              method: 'post',
              url: 'https://1wk2xps2l4.execute-api.eu-west-1.amazonaws.com/default/SecondHandCarsAPI/VMGInsert',
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