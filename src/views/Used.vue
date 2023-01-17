<template>
<div>
  <v-parallax src="../assets/bg.jpeg"
      min-height="300px"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 my-auto">
            <h2 class="bannerheadingh2">Welcome to</h2>
            <h1 class="bannerheadingh1">Second Hand Cars</h1>
              <v-btn large class="mainheadingcolor white--text" @click="getcountofcars()">
                Search {{ this.apicarcount }} cars
              </v-btn>
          </v-col>
        </v-row>
      </v-container>
  </v-parallax>
  <v-container class="my-5">
    <v-row>
      <!-- <v-col class="col-12">
        Second Hand Cars provides you with a one-stop auto shop for used vehicles across South Africa. With a range of models and makes available, from SA's top auto-dealers, we have a little something for everyone, no matter what type of vehicle you are looking for. On top of our offers to buy second hand cars online, from the comfort of your home, we also offer specialised motor insurance and a range of specialised motor services to ensure that your vehicle is always at its best.
      </v-col> -->
      <v-col class="col-12 text-center">
        <h1>Browse Our Cars</h1>
      </v-col>
      <v-col v-if="this.isloadingfrontcars == true" class="col-12 text-center">
        <v-progress-circular
          :size="100"
          color="primary"
          indeterminate
        >
        Loading...
        </v-progress-circular>
      </v-col>
      <v-col v-for="car in cars" :key="car.id" class="col-12 col-sm-12 col-md-3 col-lg-3">
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
                <v-img src="../assets/KP_Single_Colour_Logo_White.svg" width="50px"/>
              </v-col>
              <v-col class="col-9 px-3 kingprice white--text text-right">
                 <p>Insure Car from R {{Number(car.InsurancePrice).toFixed(2)}} p/m </p>                                      
              </v-col>
            </v-row>
            </router-link>
          </v-card>
      </v-col>
      <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-5">
        <v-btn class="mainheadingcolor white--text" @click="getcountofcars()">
          View All Cars
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
    <!-- <v-container> -->
      <v-row justify="center" align="center" class="hidden-sm-and-down">
        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 contentblock">
          <h1>Why People Choose Us</h1>
          Second Hand Cars provides you with a one-stop auto shop for used vehicles across South Africa. With a range of models and makes available, from SA's top auto-dealers, we have a little something for everyone, no matter what type of vehicle you are looking for. On top of our offers to buy second hand cars online, from the comfort of your home, we also offer specialised motor insurance and a range of specialised motor services to ensure that your vehicle is always at its best.
          <!-- <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Integer et nisl et massa tempor ornare vel id orci.</li>
            <li>Nunc consectetur ligula vitae nisl placerat tempus.</li>
            <li>Curabitur quis ante vitae lacus varius pretium.</li>
          </ul> -->
        </v-col>
         <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
          <v-img src="../assets/chooseus-video (1).png"/>
        </v-col>
      </v-row>
    <!-- </v-container> -->
  <v-container>
    <v-row>
       <v-col class="col-12 text-center">
         <h4 class="mainheadingcolor--text">A Few</h4>
         <h1>Second Hand Car Tips</h1>
       </v-col>
       <v-col class="col-12">
         <v-expansion-panels>
          <v-expansion-panel
          >
            <v-expansion-panel-header class="mainheadingcolor--text">
              Looking for a Second Hand Car?
            </v-expansion-panel-header>
            <v-expansion-panel-content>
             <p>Trying to find the right second hand car has been a difficult task for the longest time, however, thanks to Second Hand Cars, this process has been made a whole lot easier. We have made it simpler to buy used cars across South Africa.</p>

              <p>The platform is designed in order to connect the you to a dealership, allow you to search for a vehi-cle and find the second hand car of your choice.</p>
              
              <p>All you have to do is find the car you want, and you will be able to get into contact with that dealer-ship in no time at all.</p>
              
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel
          >
            <v-expansion-panel-header class="mainheadingcolor--text">
              Second Hand Cars For Sale
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Second Hand Cars has built a business which connects the client and the dealership with each other instantly.</p>
              <p>The benefit in using Second Hand Cars is that everything is right in front of you, all on one website.</p>
              <p>The convenience of the service itself ensures that you will get the second hand car of your dreams all with a few clicks on the site.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="mainheadingcolor--text">
              Comparing Second Hand Cars
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Our platform allows you to choose the make of car, as well as the model which you would like to view, with a wide choice in selection from dealerships across South Africa.</p>
              <p>You are also able to set your own maximum and minimum price which you are willing to spend, giving you the second hand cars which are available.</p>
              <p>This will make certain that you are looking at the right car, from the right dealership, all on one page.</p>
              <p>In addition, Second Hand Cars also allows you to compare different cars which you are interested in, providing you with information in terms of the model, price and other important information.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="mainheadingcolor--text">
              Car Insurance
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Car insurance is available from the website, and is supplied by a reputable insurance provider and affiliate of Second Hand Cars.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="mainheadingcolor--text">
              Car Finance
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>An added feature on the Second Hand Cars website is the ability to use the Vehicle Finance Calculator, which takes into account the price of the vehicle, the interest rate, period of payment on the car, and your deposit, which will give you a rough estimate on how much you will be paying.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header class="mainheadingcolor--text">
              Motoring Services
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <p>Second Hand Cars has partnered up with professional car service providers, in order to give you the quality of maintenance which you will need.</p>
              <p>Services will include regular check ups and maintenance, such as check the brakes, car fluid, the engine, tyres, and software updates, to name a few.</p>
            </v-expansion-panel-content>
          </v-expansion-panel>



        </v-expansion-panels>
       </v-col>
    </v-row>
  </v-container>
  <!-- <v-container>
    <v-row>
      <v-col class="col-12 text-center">
         <h4 class="mainheadingcolor--text">Our Article's</h4>
         <h1>Latest News Updates</h1>
       </v-col>
       <v-col class="col-12">
         <v-row>
           <v-col class="col-12 col-sm-12 col-md-4 col-lg-4" v-for="car in cars.slice(0,3)" :key="car.id">
             <v-card
             flat
                class="mx-auto"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="car.Img"
                >
                  <v-card-title>{{car.Make}} {{car.Model}} {{car.Varient}}
                  </v-card-title>
                </v-img>

                <v-card-actions>
                  <v-btn
                    color="mainheadingcolor"
                    text
                  >
                    View Move
                  </v-btn>
                </v-card-actions>
              </v-card>
           </v-col>
           <v-col class="col-12 text-center">
              <v-btn
                    color="mainheadingcolor"
                    class="white--text"
                  >
                    View All
                  </v-btn>
           </v-col>
         </v-row>
       </v-col>
    </v-row>
  </v-container> -->

</div>
  
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { HTTP } from '../myapi/myconfig';

  export default {
    name: 'Home',
    data: () => ({
      isloadingfrontcars:false,
      cars:[],
      apicarcount:'',
      show: false,
      n:4,
      tab:'',
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
    computed: {
      ...mapGetters(['cardata', 'carcount'])
    },
    created() {
      // this.getcarcount()
      this.getfrontpagecars()
      // console.log('carcount', this.carcount)
      // this.$store.dispatch('getallcars');
      // this.$store.dispatch('getalldealers')
    },
    methods: {
      getcountofcars() {
        this.$router.replace('/usedcars');
      },
      viewDealer(Makename, Modelname, car, VehicleId) {
       let makename =  Makename.replaceAll(' ', '-').toLowerCase();
       let modelname =  Modelname.replaceAll(' ', '-').toLowerCase();
      this.$router.push({
          name: 'ViewCar',
          params: {
              Makename: makename,
              Modelname: modelname,
              car: car,
              VehicleId: VehicleId
          }
      })
    },
    getfrontpagecars() {
      // this.getcarcount()
      this.isloadingfrontcars = true
      HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelectMax/5`)
            .then(response => {
                this.cars = response.data.Table1
                this.isloadingfrontcars = false
                //console.log('this.cars', this.cars)
            })
            .catch(e => {
                this.errors.push(e)
            })
            this.getcarcount()
    },
    getcarcount() {
      // carcount
       HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelectCount`)
            .then(response => {
                this.apicarcount = response.data.Table1[0].Çounts
                this.$store.dispatch('getcarcount', this.apicarcount)
                // let heyy = this.apicarcount.Counts
                // console.log('heyy', heyy)
                // this.getfrontpagecars()
                //console.log('this.apicarcount', this.apicarcount)
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    },
  }
</script>

<style lang="sass">
  .bannerheadingh1 
    font-size: 60px

 .bannerheadingh2 
    font-size: 40px

 .kingprice p 
    font-size: 9px !important
    margin-bottom: 0px 

 .v-tabs 
   border-radius: 10px 10px 0px 0px
 
 .v-tabs-item 
   border-radius: 0px 0px 10px 10px

 .v-btn--active
    border-bottom: 2px solid #ab2328
    border-radius: 0px

 .carmake
   height: 80px 

 .section3
   background:#e3e3e3 !important

 .contentblock
   padding-left:250px


 @media screen and (max-width: 900px) 
    //do Smth
    .bannerheadingh1 
      font-size: 40px !important

 @media screen and (max-width: 900px) 
    //do Smth
    .bannerheadingh2 
      font-size: 30px !important
  
//  @media screen and (min-width: 900px) 
//     //do Smth
//       font-size: 60px
  

</style>
