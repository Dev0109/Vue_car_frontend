<template>
<div class="demo">
  <v-parallax src="../assets/bg.jpeg"
      min-height="400"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto text-center">
          <!-- <v-card
              class="px-5 py-5"
            > -->
            <v-tabs
              v-model="tab"
              background-color="mainheadingcolor"
              dark
              fixed-tabs
              icons-and-text
              next-icon="mdi-arrow-right-bold-box-outline"
              prev-icon="mdi-arrow-left-bold-box-outline"
              show-arrows
            >
              <v-tabs-slider></v-tabs-slider>
              

              <v-tab href="#tab-1" class="white--text">
                <h4 class="my-2">Cars</h4>
                <v-icon color="secondary">
                  mdi-car-side
                </v-icon>
                <!-- <v-icon>mdi-heart</v-icon> -->
              </v-tab>

              <v-tab href="#tab-2" class="white--text">
                <h4 class="my-2">Finance</h4>
                <v-icon color="secondary">
                 mdi-bank
                </v-icon>
                
                <!-- <v-icon>mdi-phone</v-icon> -->
              </v-tab>

              <!-- <v-tab href="#tab-3">
                Nearby
                <v-icon>mdi-account-box</v-icon>
              </v-tab> -->
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item
                value="tab-1"
                class="tabbackground px-4 py-4"
              >
              <v-row>
                <v-col class="col-12">
                   <h2 class="mainheadingcolor--text">Find Your Car</h2>
                  <v-select
                    :items="items"
                    label="Search Make, Model and Variant"
                    dense
                  >
                  </v-select>
                </v-col>
                <v-col class="col-12">
                  <v-btn>
                    Search 10 345 cars
                  </v-btn>
                </v-col>
              </v-row>

              <!-- <v-expansion-panels accordion>
                <v-expansion-panel
                  v-for="(item,i) in 1"
                  :key="i"
                >
                  <v-expansion-panel-header>Item</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels> -->
              </v-tab-item>
              <v-tab-item
                value="tab-2"
                class="tabbackground px-4 py-4"
              >

              <v-row>
                <v-col class="col-12">
                  <h2 class="mainheadingcolor--text">Find Your Car</h2>
                </v-col>
                <v-col class="col-6">
                    <v-select
                    :items="items"
                    label="Min Repayment"
                    dense
                  >
                  </v-select>
                </v-col>
                <v-col class="col-6">
                  <v-select
                    :items="items"
                    label="Max Repayment"
                    dense
                  >
                  </v-select>
                </v-col>
                <v-col class="col-6">
                    <v-select
                    :items="items"
                    label="Location"
                    dense
                  >
                  </v-select>
                </v-col>
                <v-col class="col-6">
                  <v-select
                    :items="items"
                    label="Body Type"
                    dense
                  >
                  </v-select>
                </v-col>
                 <v-col class="col-12">
                  <v-btn>
                    Search
                  </v-btn>
                </v-col>
              </v-row>
              
              </v-tab-item>
            </v-tabs-items>
              </v-col>
          <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 my-auto hidden-sm-and-down">
            <h2 class="bannerheadingh2">Welcome to</h2>
            <h1 class="bannerheadingh1">SecondhandCars</h1>
          </v-col>
        </v-row>
      </v-container>
  </v-parallax>
  <v-container class="my-5">
    <v-row>
      <v-col class="col-12 text-center">
        <h1>Browse our cars</h1>
      </v-col>
      <v-col v-for="car in cars" :key="car.id" class="col-12 col-sm-12 col-md-3 col-lg-3">
        <v-card
            class="mx-auto"
            max-width="374"
            rounded
          >

            <v-img
              height="250"
              :src="car.Img"
            ></v-img>

            <v-row>
              <v-col class="primary white--text mt-3 mx-3 text-center">
                Enquire Now
              </v-col>
            </v-row>

            <v-row class="px-4 pb-3 text-center">
              <v-col class="col-12 pb-0">
                  <h1 >{{car.Price}}</h1>
              </v-col>
              <v-col class="col-12 pb-0 pt-0">
                 <h3>{{car.Make}} {{car.Model}} {{car.Varient}}</h3>
              </v-col>
              <v-col class="col-12 pt-0 mb-2">
                  <v-row>
                    <v-col>
                      <h3>{{car.Department}}</h3>
                    </v-col>
                    <v-col>
                      <h3>{{car.Year}}</h3>
                    </v-col>
                    <v-col>
                      <h3>{{car.transmission}}</h3>
                    </v-col>
                    
                  </v-row>
                </v-col>
            </v-row>

            <v-divider class="mx-4"></v-divider>

            <!-- <v-card-title>Kind Price Ad</v-card-title> -->
            <v-row class="px-3" justify="center">
              <v-col class="col-3 px-3 text-center kingprice" >
                <v-img src="../assets/kp-logo-desktop.png" width="50px"/>
              </v-col>
              <v-col class="col-9 px-3 kingprice white--text text-center">
                 <p>Insure Car from R854.99 p/m </p>                                      
              </v-col>
            </v-row>
          </v-card>
      </v-col>
    </v-row>
  </v-container>

</div>
  
</template>

<script>

  export default {
    name: 'Home',
    data: () => ({
      tab:'',
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      cars: [
        {Make:'BMW', Model: '120 i', Varient:'M sport', Img: 'https://sc24.autoslm.net/workspace/carimages_1543/183762_20220117145710-1.jpg', Price:'R200 000', Department: 'Used', Year:'2018', transmission: 'Auto' },
        {Make:'BMW', Model: '120 i', Varient:'M sport', Img: 'https://www.carshophub.co.za/XMLFeedOutput/VehicleImages/889375/13D1U92959/13D1U92959-1.jpg', Price:'R200 000', Department: 'Used', Year:'2018', transmission: 'Auto' },
        {Make:'BMW', Model: '120 i', Varient:'M sport', Img: 'https://stockservice.apcloud.co.za/GetVehicleImage.ashx?ID=341981', Price:'R200 000', Department: 'Used', Year:'2018', transmission: 'Auto' },
        {Make:'BMW', Model: '120 i', Varient:'M sport', Img: 'https://image.blob.ix.co.za/Used/7570933/6/2019-Silver-Ford-Ranger-RANGER-22TDCi-XLS-AT-PU-SUPCAB-7570933-6-1080x810.jpg', Price:'R200 000', Department: 'Used', Year:'2018', transmission: 'Auto' },
        {Make:'BMW', Model: '120 i', Varient:'M sport', Img: 'https://image.blob.ix.co.za/Used/7538672/1/2015-RED-Mazda-Mazda-CX-5-22DE-Akera-AWD-7538672-1-1080x810.jpg', Price:'R200 000', Department: 'Used', Year:'2018', transmission: 'Auto' }
      ]
    }),

    components: {

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
</style>
