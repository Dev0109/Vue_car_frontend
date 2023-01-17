<template>
  <div class="ViewCar">
    <v-parallax src="../assets/bg.jpeg" height="200">
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">
              {{ this.currentvehicle.Makename }}
              {{ this.currentvehicle.Range }}
               {{ this.currentvehicle.Modelname }}
            </h2>
          </v-col>
          <v-col class="col-md-12 col-lg-12 text-center my-auto">
            Home > Usedcars > {{ this.currentvehicle.Makename }} > {{ this.currentvehicle.Modelname +  this.currentvehicle.Range }}
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-overlay v-if="isloading == true">
      <v-progress-circular indeterminate size="150">
        <h4>Please Wait ...</h4>
      </v-progress-circular>
    </v-overlay>
    <v-container>
      <v-container>
        <v-row v-if="this.currentvehicle.VehiclePrice" class="hidden-md-and-up" justify="center" align="center">
          <v-col class="col-3">
            <h3>Price:</h3>
          </v-col>
          <v-col class="col-9 text-right">
            <h2 class="theprice">
              R
              {{
              (
              Math.round(this.currentvehicle.VehiclePrice * 100) / 100
              ).toLocaleString()
              }}
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-8 col-lg-8">
            <v-card flat>
              <v-row>
                <v-col class="12">
                  <!-- <v-carousel :show-arrows="false">
                                    <v-carousel-item v-for="currentcarimage in currentcarimages"
                                    :key="currentcarimage.id"
                                    :src="currentcarimage[0].ImagePath"
                                    cover
                                    ></v-carousel-item>
                                </v-carousel> -->
                  <!-- <v-carousel :show-arrows="false">
                                    <v-carousel-item
                                    :src="this.currentvehicle.Image"
                                    cover
                                    ></v-carousel-item>
                                </v-carousel> -->
                  <v-carousel>
                    <v-carousel-item v-for="(item, i) in caritems" :key="i" :src="item.ImagePath"
                      reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col class="col-12">
                  <v-tabs v-model="tab" background-color="mainheadingcolor" dark fixed-tabs icons-and-text
                    next-icon="mdi-arrow-right-bold-box-outline" prev-icon="mdi-arrow-left-bold-box-outline" show-arrows
                    height="100px">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-1" class="white--text">
                      <h4 class="my-2">Vehicle <br> Overview</h4>
                      <v-icon color="secondary"> mdi-car-side </v-icon>
                    </v-tab>

                    <v-tab href="#tab-2" class="white--text">
                      <h4 class="my-2">Finance <br> Calculator</h4>
                      <v-icon color="secondary"> mdi-bank </v-icon>
                    </v-tab>
                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item value="tab-1" class="tabbackground px-4 py-4">
                      <v-row>
                        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                          <v-list flat>
                            <v-list-item-group color="primary">
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-calendar</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Year</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.VehicleYear != ''
                                        ">{{
                                        this.currentvehicle.VehicleYear
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-speedometer</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Mileage</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.VehicleMileage !=
                                          ''
                                        ">{{
                                        this.currentvehicle.VehicleMileage
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-sort-descending</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Acceleration 0 - 100</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle
                                            .Acceleration0100kmh != ''
                                        ">{{
                                        this.currentvehicle
                                        .Acceleration0100kmh
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-minecraft</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Engine Capacity cc</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle
                                            .EngineCapacitycc != ''
                                        ">{{
                                        this.currentvehicle.EngineCapacitycc
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                  <!-- <v-list-item-title>Hello</v-list-item-title> -->
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-gas-station</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Fuel Type</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.FuelType != ''
                                        ">{{
                                        this.currentvehicle.FuelType
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                  <!-- <v-list-item-title>Hello</v-list-item-title> -->
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-col>
                        <!-- list 2 -->
                        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                          <v-list flat>
                            <v-list-item-group color="primary">
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-car-hatchback</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Shape</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.ShapeName != ''
                                        ">{{
                                        this.currentvehicle.ShapeName
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-cards-playing-outline</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Color:</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.VehicleColor != ''
                                        ">{{
                                        this.currentvehicle.VehicleColor
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-set-all</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Driven Wheels</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.DrivenWheels != ''
                                        ">{{
                                        this.currentvehicle.DrivenWheels
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-calculator</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Fuel Per 100Km</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle.FuelPer100km != ''
                                        ">{{
                                        this.currentvehicle.FuelPer100km
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                  <!-- <v-list-item-title>Hello</v-list-item-title> -->
                                </v-list-item-content>
                              </v-list-item>
                              <v-list-item>
                                <v-list-item-icon>
                                  <v-icon color="primary">mdi-fuel</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                  <v-row>
                                    <v-col class="col-6">
                                      <v-list-item-title class="primary--text">Fuel Tank Capacity</v-list-item-title>
                                    </v-col>
                                    <v-col class="col-6 text-right">
                                      <v-list-item-title v-if="
                                          this.currentvehicle
                                            .FuelTankCapacity != ''
                                        ">{{
                                        this.currentvehicle.FuelTankCapacity
                                        }}</v-list-item-title>
                                      <v-list-item-title v-else>N/A</v-list-item-title>
                                    </v-col>
                                  </v-row>
                                  <!-- <v-list-item-title>Hello</v-list-item-title> -->
                                </v-list-item-content>
                              </v-list-item>
                            </v-list-item-group>
                          </v-list>
                        </v-col>
                      </v-row>
                    </v-tab-item>
                    <v-tab-item value="tab-2" class="tabbackground px-4 py-4">
                      <v-row justify="center" align="center">
                        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6">
                          <h1>Calculate Repayments</h1>
                          <form @submit.prevent="calculate">
                            <v-row>
                              <v-col class="col-12">
                                <v-text-field v-model.number="loanAmount" label="Loan Amount"></v-text-field>
                              </v-col>
                              <v-col class="col-12">
                                <v-text-field v-model.number="interestRate" label="Interest Rate"></v-text-field>
                              </v-col>
                              <v-col class="col-12">
                                <v-text-field v-model.number="numMonths" label="Number Of Months To Pay Off Loan">
                                </v-text-field>
                              </v-col>
                              <v-col class="col-12 text-center">
                                <v-btn class="mainheadingcolor white--text" type="submit">calculate monthly payment
                                </v-btn>
                              </v-col>
                            </v-row>
                          </form>
                        </v-col>
                        <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 text-center">
                          <h1>Monthly Payment:</h1>
                          <h1>{{ monthlyPayment.toFixed(2) }}</h1>
                          <!-- <v-img src="../assets/finance (1).gif" width="100%" /> -->
                        </v-col>
                      </v-row>
                    </v-tab-item>
                  </v-tabs-items>
                </v-col>
              </v-row>
            </v-card>
            <!-- <h1>This is an Car Details page</h1> -->
          </v-col>
          <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
            <v-card flat class="py-3 px-3 cardcontactform">
              <v-row justify="center" align="center" class="mb-2">
                <v-col class="col-6">
                  <h3>Share</h3>
                </v-col>
                <v-col class="col-6 text-right">
                  <ShareNetwork network="WhatsApp" :url="
                      'https://www.secondhandcars.co.za/usedcar/' +
                      this.Makename +
                      '/' +
                      this.Modelname +
                      '/' +
                      this.VehicleId
                    " :title="
                      this.currentvehicle.Makename +
                      ' ' +
                      this.currentvehicle.Modelname +
                      ' | Second hand Cars'
                    " :description="
                      this.currentvehicle.Makename +
                      ' ' +
                      this.currentvehicle.Modelname +
                      ' for R ' +
                      (
                        Math.round(this.currentvehicle.VehiclePrice * 100) / 100
                      ).toLocaleString()
                    ">
                    <v-icon size="40" class="green--text">mdi-whatsapp</v-icon>
                  </ShareNetwork>
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <v-row class="px-3 text-center hidden-md-and-down" justify="center" align="center">
                <v-col class="col-4 text-left">
                  <v-avatar size="97">
                    <img :src="currentDealer.DealerLogo" />
                  </v-avatar>
                </v-col>
                <v-col class="col-8 text-right">
                  <h2>{{ this.currentDealer.Dealer_Name }}</h2>
                </v-col>
                <v-col class="col-12 text-center">
                  <v-btn @click="gotodealerpage()" class="mainheadingcolor white--text">View Dealer Vehicles</v-btn>
                </v-col>
              </v-row>
              <v-row class="hidden-md-and-down">
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
                <!-- <v-col class="col-4">
                  <v-icon class="mainheadingcolor--text">mdi-cellphone</v-icon>
                </v-col>
                <v-col class="col-8 text-right">
                  <a :href='"tel:" + this.currentDealer.Number'> {{ this.currentDealer.Number }}</a>
                </v-col>
                <v-col class="col-4">
                  <v-icon class="mainheadingcolor--text">mdi-email</v-icon>
                </v-col>
                <v-col class="col-8 text-right">
                  <a :href="'mailto:' + this.currentDealer.Email"> {{ this.currentDealer.Email }}</a>
                </v-col> -->
                <v-col class="col-4 addresscol">
                  <v-icon class="mainheadingcolor--text">mdi-home-modern</v-icon>
                </v-col>
                <v-col class="col-8 text-right">
                  <a href=""> {{ this.currentDealer.DealerAddress }}</a>
                </v-col>
              </v-row>
              <v-row class="px-3 mb-4 hidden-md-and-down" justify="center" align="center">
                <v-col class="col-3">
                  <h2>Price</h2>
                </v-col>
                <v-col class="col-9 text-right">
                  <h1 class="theprice">
                    R
                    {{
                    (
                    Math.round(this.currentvehicle.VehiclePrice * 100) / 100
                    ).toLocaleString()
                    }}
                  </h1>
                </v-col>
              </v-row>
              <v-row class="hidden-md-and-up">
                <v-col class="col-3 px-3 text-center kingprice">
                  <v-img src="../assets/KP_Single_Colour_Logo_White.svg" width="50px" />
                </v-col>
                <v-col class="col-9 px-3 kingprice white--text text-right">
                  <p>
                    Insure Car from R
                    {{ Number(this.currentvehicle.InsurancePrice).toFixed(2) }}
                    p/m
                  </p>
                </v-col>
              </v-row>
              <v-row class=" hidden-md-and-down">
                <v-col class="col-3 px-3 text-center kingprice">
                  <v-img src="../assets/KP_Single_Colour_Logo_White.svg" width="60px" />
                </v-col>
                <v-col class="col-9 px-3 insurancetextonpage white--text text-right">
                  <p class="mb-0">
                    Insure Car from R
                    {{ Number(this.currentvehicle.InsurancePrice).toFixed(2) }}
                    p/m
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="col-12 text-center">
                  <h1>Enquire Now</h1>
                </v-col>
              </v-row>
              <ix v-if="this.currentDealer.api_feed == 'ix'" :StockCode="currentvehicle.StockCode"
                :DealershipID="this.currentvehicle.DealershipID" :Dealer_Name="this.currentDealer.Dealer_Name"
                :CurrentVehicle="currentvehicle" />
              <vmg v-if="this.currentDealer.api_feed == 'vmg'" :StockCode="currentvehicle.StockCode"
                :DealershipID="this.currentvehicle.DealershipID" :Dealer_Name="this.currentDealer.Dealer_Name"
                :CurrentVehicle="currentvehicle" />
              <defaultform v-if="this.currentDealer.api_feed == '' || this.currentDealer.api_feed == 'carportal'"
                :StockCode="currentvehicle.StockCode" :DealershipID="this.currentvehicle.DealershipID"
                :Dealer_Name="this.currentDealer.Dealer_Name" :CurrentVehicle="currentvehicle" />
              <autoslm v-if="this.currentDealer.api_feed == 'autoslm'" :StockCode="currentvehicle.StockCode"
                :DealershipID="this.currentvehicle.DealershipID" :VehicleYear="this.currentvehicle.VehicleYear"
                :VehicleMakeName="this.currentvehicle.Makename" :VehicleModelName="this.currentvehicle.Modelname"
                :Dealer_Name="this.currentDealer.Dealer_Name" :CurrentVehicle="currentvehicle" />
              <v-row class="px-3 text-center hidden-md-and-up" justify="center" align="center">
                <v-col class="col-6 text-left">
                  <v-avatar size="97">
                    <img :src="currentDealer.DealerLogo" />
                  </v-avatar>
                </v-col>
                <v-col class="col-6 text-right">
                  <h2>{{ this.currentDealer.Dealer_Name }}</h2>
                </v-col>
              </v-row>
              <v-row class="hidden-md-and-up">
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
                <v-col class="col-4 addresscol">
                  <v-icon class="mainheadingcolor--text">mdi-home-modern</v-icon>
                </v-col>
                <v-col class="col-8 text-right">
                  <a href=""> {{ this.currentDealer.DealerAddress }}</a>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </div>
</template>


<script>
import axios from "axios";
import { HTTP } from "../myapi/myconfig";
import defaultform from "../components/forms/defaultform.vue";
import ix from "../components/forms/ix.vue";
import autoslm from "../components/forms/autoslm.vue";
import vmg from "../components/forms/vmg.vue";

import { mapGetters } from "vuex";
export default {
  components: { defaultform, ix, autoslm, vmg },
  props: ["Makename", "Modelname", "car", "VehicleId"],
  data() {
    return {
      loanAmount: "",
      interestRate: 10,
      numMonths: "",
      monthlyPayment: 0,
      vehicle: [],
      isloading: true,
      currentvehicle: [],
      currentvehicle1: [],
      currentDealer: [],
      dealercurrent: [],
      currentcarimages: [],
      caritems: [],
      tab: "",
      // items: [],
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          value: "Department",
        },
        { text: "Calories", value: "calories" },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
        },
        {
          name: "Eclair",
          calories: 262,
        },
        {
          name: "Cupcake",
          calories: 305,
        },
        {
          name: "Gingerbread",
          calories: 356,
        },
        {
          name: "Jelly bean",
          calories: 375,
        },
        {
          name: "Lollipop",
          calories: 392,
        },
        {
          name: "Honeycomb",
          calories: 408,
        },
        {
          name: "Donut",
          calories: 452,
        },
        {
          name: "KitKat",
          calories: 518,
        },
      ],
    };
  },
  // created() {
  //   this.getvehicle();
  // },
  computed: {
    ...mapGetters(["cardata", "dealerdata"]),
    formValid() {
      const { loanAmount, interestRate, numMonths } = this;
      return (
        +loanAmount >= 0 &&
        0 <= +interestRate &&
        +interestRate <= 100 &&
        +numMonths > 0
      );
    },
  },
  methods: {
    fireoffgtcall(){
      let catcall = "Call Link Click"
      let actcall = "Click"
      let labcall = this.currentDealer.Number
      //console.log(cat + act + lab)
       this.$ga.event(catcall, actcall, labcall)
       window.location.assign("tel:" + labcall);
    },
    fireoffgtemail(){
      let cat = "Email Link Click"
      let act = "Click"
      let lab = this.currentDealer.Email
      //console.log(cat + act + lab)
       this.$ga.event(cat, act, lab)
       window.location.assign("mailto:" + lab);
    },
    calculate() {
      if (!this.formValid) {
        return;
      }
      const { loanAmount, interestRate, numMonths } = this;
      this.monthlyPayment = (loanAmount * (1 + interestRate / 100)) / numMonths;
    },
    currencyFormat(num) {
      return "R" + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "R1,");
    },
    // async getvehicle() {
    //   console.log("this.VehicleId", this.VehicleId);
    //   // if(this.car != null) {
    //   //   this.vehicle = this.cardata.filter(c => c.VehicleId.indexOf(this.VehicleId) > -1)
    //   //   this.currentvehicle = this.vehicle[0]
    //   //   this.dealercurrent = this.dealerdata.filter(c => c.Dealer_Name.indexOf(this.currentvehicle.Dealer_Name) > -1)
    //   //   this.currentDealer = this.dealercurrent[0]
    //   //   console.log('this.car',this.currentvehicle)
    //   //   console.log('this.currentDealer',this.currentDealer)
    //   // }else {
    //   this.getcurrentcar();
    //   // }
    // },
    // thankyou(Dealer_Name) {
    //   console.log("Dealer_Name", Dealer_Name);
    //   // let dealer = item
    //   let zayzay = Dealer_Name.replaceAll(" ", "-").toLowerCase();
    //   this.$router.push({
    //     name: "ThankYou",
    //     params: {
    //       Dealer_Name: zayzay,
    //     },
    //   });
    // },
    getcurrentcar() {
      this.isloading = true;
      HTTP.get(
        `SecondHandCarsAPI/vehiclesFilterSelect/v.vehicleId/` + this.VehicleId
      )
        .then((response) => {
          this.car = response.data.Table1[0];
          // this.carcount = this.dealerdata.length
          this.currentvehicle = this.car;
          this.getcurrentdealer(this.currentvehicle.Dealer_Name);
          // this.isloading = false;
          // commit('SET_DEALERS', this.dealerdata)
          // commit('SET_CAR_COUNT', this.carcount)
          console.log("heyyyyyyyyy", this.currentvehicle);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getcurrentdealer(dealernames) {
      HTTP.get(
        `SecondHandCarsAPI/dealershipinfoFilterSelect/Dealer_Name/` +
          dealernames
      )
        .then((response) => {
          this.currentDealer = response.data.DealershipInfo[0];
          console.log("this.currentDealer", this.currentDealer);
          //let iddealer = this.currentDealer.DealerId
          //this.getimagesforcurrentcar();
        })
        .catch((e) => {
          this.errors.push(e);
        });
        this.getimagesforcurrentcar()
    },
    getimagesforcurrentcar(){
      var data = JSON.stringify({});
      let currentcarimages = [];

      var data = JSON.stringify({
        FilterColumnName: "VehicleId",
        maxRecordsCount: 0,
        FilterColumnValue: this.VehicleId,
      });
      console.log("First Respond", "123456");
      HTTP.post(`SecondHandCarsAPI/vehicleimagesFilterSelect`, data)
        .then((response) => {
          currentcarimages = response.data.VehicleImages;
          console.log("gettingimages", currentcarimages);

          this.caritems = currentcarimages;
          // this.currentvehicle1 = currentcarimages;
        })
        .catch(function (error) {
          console.log(error);
        });

      this.isloading = false;
      // this.items = this.currentcarimages
    },
    gotodealerpage() {
      let gotodealercars = this.currentDealer.Dealer_Name.replaceAll(" ", "-").toLowerCase()
      this.$router.push({
        name: "Dealership",
        params: {
          Dealer_Name: gotodealercars,
        },
      });
    },
  },
    
  created() {
    this.getcurrentcar();
  },
  metaInfo() {
    return {
      title:
        this.currentvehicle.Type +
        " | " +
        this.currentvehicle.Makename +
        " " +
        this.currentvehicle.Modelname +
        " " +
        this.currentvehicle.VehicleYear +
        " | Second Hand Cars",
    };
  },
};
</script>

<style lang="css">
.theprice{
  font-size: 50px
}
@media (max-width: 900px){
.v-carousel__controls {
    display: none !important
}
}
</style>