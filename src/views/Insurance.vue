<template>
  <div class="insurance">
    <v-overlay v-if="formisloading == true">
      <v-progress-circular indeterminate size="150">
        <h4>Please Wait ...</h4>
      </v-progress-circular>
    </v-overlay>
    <v-parallax src="../assets/bg.jpeg" height="200">
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">INSURANCE</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <div class="firstsection kp-price-img-bg">
      <v-container>
        <v-row justify="center" align="center">
          <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
            <!-- <div class="textforbanner">
              <h2 class="white--text">We’ve got what you’ve</h2>
              <h2 class="white--text">looking for</h2>
            </div> -->
            <v-img src="../assets/Simple-Cheap-Insurance-With-Text.png" width="100%" />
            <!-- <p>Insuring with King Price is so cheap and simple, it feels strange.</p>
                <p>The good kind of strange. Make every cent and second count with the king of insurance.</p>
                <p>Get a mind-blowing car insurance quote</p> -->
          </v-col>
          <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
            <v-card class="kpsubmitform my-9 mx-9 py-5 px-5">
              <v-form v-model="valid" ref="form">
                <v-row class="py-5">
                  <v-col class="col-12 text-center kingprice--text">
                    <h1>Submit Your Details</h1>
                  </v-col>
                  <v-col class="col-12 py-0">
                    <v-text-field color="red" v-model="formdata.firstname" outlined label="First Name"
                      :rules="[rules.required]">
                    </v-text-field>
                  </v-col>
                  <v-col class="col-12 py-0">
                    <v-text-field v-model="formdata.surname" outlined label="Surname" :rules="[rules.required]">
                    </v-text-field>
                  </v-col>
                  <v-col class="col-12 py-0">
                    <v-text-field v-model="formdata.emailAddress" outlined label="Email" :rules="emailRules">
                    </v-text-field>
                  </v-col>
                  <v-col class="col-12 py-0">
                    <v-text-field v-model="formdata.contactNumber" outlined label="Mobile" :rules="[rules.required]">
                    </v-text-field>
                  </v-col>
                  <v-col class="col-12 py-0">
                    <v-text-field v-model="formdata.currentcar" outlined
                      label="What car do you currently Have? (Optional)">
                    </v-text-field>
                  </v-col>
                  <v-col class="col-12 py-0">
                    <v-btn @click="inserttotable()" :disabled="!valid">
                      Submit
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="secondsection">
      <v-container class="py-5 text-center">
        <v-row class="my-5" justify="center" align="center">
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 kingprice--text">

            <h1 class="royal_benefits mb-5">Royal benefits</h1>
            <v-row justify="center" align="center">
              <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
                <v-card class="insurancecard py-4 px-4" height="280px" flat>
                  <img src="../assets/Emergency assist.png" alt="" width="100px" class="pb-5 pt-3" />
                  <h2 class="kingprice--text">Emergency assist</h2>
                  <p>The king has you covered. 24 hours
                    a day, 7 days a week, 365 days a
                    year. Whether medical, technical or
                    domestic, you're in safe hands.</p>
                </v-card>
              </v-col>
              <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
                <v-card class="insurancecard py-4 px-4" height="280px" flat>
                  <img src="../assets/Super simple claims.png" alt="" class="pt-3 pb-3" width="60px" />
                  <h2 class="kingprice--text">Super simple claims</h2>
                  <p>If you have an accident, call our
                    emergency assist line. We'll
                    organise emergency medical help
                    and car towing, and guide you.</p>
                </v-card>
              </v-col>
              <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
                <v-card class="insurancecard py-4 px-4" height="280px" flat>
                  <img src="../assets/The king’s cab.png" alt="" width="100px" class="pb-5 pt-3" />
                  <h2 class="kingprice--text">The king’s cab</h2>
                  <p>When the cold ones are flowing,
                    rely on us to get you (and your car)
                    home safely. With comprehensive
                    car insurance, it's a small extra
                    cost... For big peace-of-mind.<br />
                  </p>
                </v-card>
              </v-col>
            </v-row>
            <!-- <p>There's a great new way to save! It's called 'multiple car discount' and it's exactly what it sounds
              like... <br> The more cars you comprehensively cover with us, the more discount you get!</p>
            <v-img src="../assets/secondinsurance (1).png" width="60%" class="mx-auto my-3" />
            <h3>Here's how it works:</h3>
            <p>1 car = super cheap insurance.</p>
            <p>2 cars = up to 10% discount on both cars.</p>
            <p>3 cars = up to 15% discount on all 3 cars.</p>
            <p>4+ cars = up to 20% discount on all your cars.</p> -->
          </v-col>
        </v-row>

      </v-container>
    </div>
    <div class="thirdsection">
      <v-container>
        <v-row justify="center" align="center">
          <v-col class="col-12">
            <img src="../assets/InsureCars.png" width="100%" />
            <!-- <h1 class="kingprice--text">Why choose the king of insurance</h1>
            <h4>Premiums that decrease monthly, royal service, and so much more</h4>

            <h4>Car insurance premiums that decrease monthly</h4>
            <p>You know that your car loses value every month, right? So why pay premiums that only ever increase? We’re
              the first and only insurer to offer comprehensive car insurance premiums that decrease monthly as the
              value of your car depreciates! We just think it’s the strangely simple way insurance should be done.</p>

            <h4>No bogus 'no claim bonus'</h4>
            <p> We just wouldn’t feel good about increasing your premiums in order to give you some of your own money
              back if you don’t claim. Nope, instead all our clients benefit from super cheap premiums and instant
              savings from the get-go… And you should too.</p> -->

          </v-col>
          <!-- <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
            <v-img src="../assets/insurancethird (1).png" />
          </v-col> -->
        </v-row>

      </v-container>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment"

export default {
    data: () => ({
      formisloading:false,
      formdata: [{
            firstname: '',
            surname: '',
            contactNumber:'',
            emailAddress:'',
            currentcar:'',
        }],
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
    methods: {
      validate () {
            this.$refs.form.validate()
        },
        facebookevent(firstname, lastname, email, number) {

          var data = JSON.stringify({
              "event_type":"Insurance Submission",
              "source_url":"https://secondhandcars.co.za/usedcar/insurance",
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
           this.sendtokingprice()
        },
       async inserttotable(){
         this.formisloading = true
          this.nowtime = moment.now()
          this.datetoday = moment(this.nowtime).format('YYYY-MM-DD')
         var data = JSON.stringify({
            "consent": "Yes",
            "Current_car": this.formdata.currentcar,
            "Email": this.formdata.emailAddress,
            "FirstName": this.formdata.firstname,
            "Surname": this.formdata.surname,
            "Insurance_Amount": "0",
            "Insurance_date": this.datetoday,
            "Mobile": this.formdata.contactNumber,
            "response": "",
            "errorMessage": ""
          });

          var config = {
            method: 'post',
            url: 'https://1wk2xps2l4.execute-api.eu-west-1.amazonaws.com/default/SecondHandCarsAPI/insuranceInsert/',
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
          this.facebookevent(this.formdata.firstname, this.formdata.surname, this.formdata.emailAddress, this.formdata.contactNumber)
         
      },
      async sendtokingprice() {
        var datakp = JSON.stringify({
          "FirstName": this.formdata.firstname,
          "surname":this.formdata.surname,
          "Mobile": this.formdata.contactNumber,
          "Email": this.formdata.emailAddress,
          "Comments": this.formdata.currentcar
        });

        console.log('data king price', datakp)

        var config = {
          method: 'POST',
          url: 'https://api.secondhandcars.co.za/create.php',
          headers: { 
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin":"*"
          },
          data : datakp
        };
         console.log('config', config)

         await axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
       this.sendemail()
      },
      sendemail() {
          let ouremail = 'danetopham@gmail.com'
          let client = "abrie@applord.co.za"
          // let clientdealername = this.
          // var axios = require('axios');
            var data = JSON.stringify({
              "toaddress": client,
              "ccaddress": ouremail,
              "emailSubject": "Second Hand Insurance Enquiry ",
              "emailBody": "<div><h2>Good Day</h2><h4>You have a new insurance enquiry from Second Hand Cars</h4><p>First Name: " + this.formdata.firstname +"</p><p>Surname: " + this.formdata.surname +"</p><p>Email: " + this.formdata.emailAddress + "</p><p>Mobile: " + this.formdata.contactNumber + "</p><div style='background-image: url(https://secondhandcars.co.za/uploads/emailfooterbannernew1-01-min.png);width:600px;height:200px; background-size:cover; background-repeat: no-repeat'></div></div>"
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

            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
              console.log(error);
            });
            this.formisloading = false
            this.thankyou()
            
        },
        thankyou() {
          this.$router.push({
              name: 'InsuranceThankYou',
          })
        },
    }
}
</script>

<style lang="css">
.secondsection h1 {
    font-size: 60px
}
.secondsection p {
    font-size: 16px
}
.kp-price-img-bg {
  background-image: url("../assets/kp-new-background.png");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  
}
.textforbanner {
  margin-top: 80px;
  margin-left: 100px;
  z-index: 99999;
  text-align: center;
  position: absolute;
  font-size: 25px;
}

.kpsubmitform {
  border-radius: 20px !important;
}

.text-field-outlined-fieldset-border {
  border:2px solid
}

.insurancecard {
  background-color: #f5f5f5 !important;
}

.royal_benefits {
  font-size: 50px;
}
</style>