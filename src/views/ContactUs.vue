<template>
  <div class="contactus">
      <v-parallax src="../assets/bg.jpeg"
      height="200"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">CONTACT US</h2>
          </v-col>
        </v-row>
      </v-container>
  </v-parallax>
  <v-overlay v-if="formisloading == true">
            <v-progress-circular
                indeterminate
                size="150"
            >
            <h4>Please Wait ...</h4>
            </v-progress-circular>
        </v-overlay>
    <v-container>
      <v-row>
          <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
              <h1>Let’s Work Together</h1>
              <p>To make requests for further information on becoming a dealer please fill out the form on the right.</p>
              <v-row>
                  <v-col class="col-3">
                      Weekday:
                  </v-col>
                  <v-col class="col-9">
                    08:00 am to 18:00 pm
                  </v-col>
                   <v-col class="col-3">
                      Saturday:
                  </v-col>
                  <v-col class="col-9">
                    10:00 am to 16:00 pm
                  </v-col>
                   <v-col class="col-3">
                      Sunday:
                  </v-col>
                  <v-col class="col-9">
                    Closed
                  </v-col>
              </v-row>
          </v-col>
          <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
              <v-form v-model="valid" ref="form">
                      <v-row>
                          <v-col class="col-12">
                            <h1>Contact Us</h1>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                              v-model="formdata.firstName"
                                :rules="[rules.required]"
                                label="First Name"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                               v-model="formdata.lastName"
                              :rules="[rules.required]"
                                label="Last Name"
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12">
                              <v-text-field
                               v-model="formdata.contactNumber"
                              :rules="[rules.required]"
                                label="Mobile"
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
                              <v-checkbox
                                v-model="formdata.consent"
                                :rules="[rules.required]"
                                label="* Consent (I have read and agree to the T&C's and Privacy Policy)"
                              ></v-checkbox>
                              <a href="/terms-and-conditions">Terms & Conditions</a>
                          </v-col>
                          <v-col class="col-12">
                              <v-btn @click="sendemail()" :disabled="!valid">
                                  Submit
                              </v-btn>
                          </v-col>
                      </v-row>
                  </v-form>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data: () => ({
    valid:false,
    formisloading:false,
    nowtime:'',
    datetoday:'',
    formdata:[
      {
        firstName: '',
        lastName:'',
        contactNumber:'',
        emailAddress:'',
        consent:''
      }
    ],
    rules: {
          required: value => !!value || 'Required.',
         // max: value => value > 15 || 'Cant go past max rounds.',
      },
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
  }),
  created() {
    // console.log('hello')
    //this.facebookevent()
  },
  methods:{
    async sendemail() {
        this.formisloading = true
          let ouremail = 'dane@rightclickmedia.co.za'
          let client = "danetopham@gmail.com"
          // let clientdealername = this. https://secondhandcars.co.za/secondhandcars/images/emailfooterbannernew1-01-min.jpg
          // var axios = require('axios');
            var data = JSON.stringify({
              "toaddress": client,
              "ccaddress": ouremail,
              "emailSubject": "Second Hand Cars Contact Us Enquiry",
              "emailBody": "<div><h2>Good Day</h2><h4>You have a new contact us enquiry from Second Hand Cars</h4><p>First Name: " + this.formdata.firstName +"</p><p>Last Name: " + this.formdata.lastName + "</p><p>Email: " + this.formdata.emailAddress + "</p><p>Mobile: " + this.formdata.contactNumber + "</p><div style='background-image: url(https://secondhandcars.co.za/uploads/emailfooterbannernew1-01-min.png);width:600px;height:200px; background-size:cover; background-repeat: no-repeat'></div></div>"
            });
            console.log('data', data)

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

            });
            this.formisloading = false
            this.facebookevent(this.formdata.firstName, this.formdata.lastName, this.formdata.emailAddress, this.formdata.contactNumber)
            
        },
        facebookevent(firstname, lastname, email, number) {
          var data = JSON.stringify({
              "event_type":"Contact Submission",
              "source_url":"https://secondhandcars.co.za/contact-us",
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
            this.thankyoucontactus()
        },
        thankyoucontactus() {
          this.$router.push({
              name: 'ContactThankYou',
          })
        },
  }
}
</script>