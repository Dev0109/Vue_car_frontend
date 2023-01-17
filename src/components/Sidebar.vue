<template>
  <v-container>
    <v-overlay v-if="isloading == true">
      <v-progress-circular indeterminate size="150">
        <h4>Please Wait ...</h4>
      </v-progress-circular>
    </v-overlay>
    <v-row>
      <v-col id="aside" cols="12" sm="4" md="3" class="hidden-sm-and-down">
        <v-card elevation="2" class="px-3 py-3" color="#eeeeee">
          <v-row>
            <v-col class="col-12 py-2">
              <v-card-actions>
                <v-btn color="primary" v-on:click="Reset">
                  <v-icon class="mr-1">mdi-history</v-icon>
                  Reset
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="mainheadingcolor white--text" @click="dialog = false">
                  <v-icon class="mr-1">mdi-magnify</v-icon>
                  Search
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedMake" :items="dataMake" label="Select Make" item-text="Make"
                item-value="Make" multiple chips v-on:change="onChangeMake" color="mainheadingcolor">
              </v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedRange" :items="dataRange" label="Select Model" item-text="Range"
                item-value="Range" multiple v-on:change="onChangeModel" chips></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedModel" :items="dataModel" label="Select Variant" item-text="Model"
                item-value="Model" v-on:change="onChangeRange" multiple chips></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedYear" :items="dataYear" label="Select Year" item-text="Year"
                item-value="Year" v-on:change="onChangeYear" multiple chips></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedMileage" :items="dataMileage" label="Select Mileage" item-text="Mileage"
                item-value="Mileage" v-on:change="onChangeMileage" multiple chips></v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedTransmission" :items="dataTransmission" label="Select Transmission"
                item-text="Transmisson" item-value="Transmisson" v-on:change="onChangeTransmisson" multiple chips>
              </v-combobox>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12 my-0">
              <v-combobox v-model="selectedEngineCap" :items="dataEngineCap" label="Select Engine" item-text="Engine"
                item-value="Engine" v-on:change="onChangeEngine" multiple chips></v-combobox>
            </v-col>
          </v-row>
          <!-- <v-row>
          <v-col cols="12 my-0">
            <v-overflow-btn
              class="mb-2 pt-0"
              :items="SortBy"
              label="Sort cars by"
              target="#button-dropdown"
              v-model="sortWord"
              @input="handleClick(sortWord)"
            ></v-overflow-btn>
          </v-col>
        </v-row> -->
          <v-row>
            <v-col class="col-12">
              <v-card-actions>
                <v-btn color="primary" v-on:click="Reset">
                  <v-icon class="mr-1">mdi-history</v-icon>
                  Reset
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="mainheadingcolor white--text" @click="dialog = false">
                  <v-icon class="mr-1">mdi-magnify</v-icon>
                  Search
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col cols="12" sm="8" md="9">
        <v-row>
          <v-col class="col-7 hidden-md-and-up">
            <v-dialog transition="dialog-bottom-transition" v-model="dialog" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="col-12" color="mainheadingcolor" dark v-bind="attrs" v-on="on">
                  <v-icon class="white--text">mdi-filter</v-icon>
                  Filter Cars
                </v-btn>
              </template>

              <v-card>
                <v-toolbar color="primary" height="110px" dark class="text-center">
                  <v-row>
                    <v-col class="col-12">
                      <v-btn class="text-right" icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                      <h2>Filter Cars: {{ this.cardata.length }}</h2>
                    </v-col>
                  </v-row>
                </v-toolbar>
                <!-- <v-card-title class="text-h5 grey lighten-2">
              <h4>Filter Cars: {{ this.cardata.length }}</h4>
            </v-card-title> -->
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <v-row class="mb-5">
                        <!-- <v-col cols="12" class="text-center">
                          <h1>Filter Cars: {{ this.cardata.length }}</h1>
                        </v-col> -->
                        <v-col cols="12">
                          <v-card-actions>
                            <v-btn text color="primary" v-on:click="Reset">
                              <v-icon class="mr-1">mdi-history</v-icon>
                              Reset
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="mainheadingcolor white--text" @click="dialog = false">
                              <v-icon class="mr-1">mdi-magnify</v-icon>
                              Search
                            </v-btn>
                          </v-card-actions>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedMake" :items="dataMake" label="Select Make" item-text="Make"
                            item-value="Make" multiple chips v-on:change="onChangeMake">
                          </v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedRange" :items="dataRange" label="Select Model" item-text="Range"
                            item-value="Range" multiple v-on:change="onChangeModel" chips></v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedModel" :items="dataModel" label="Select Variant"
                            item-text="Model" item-value="Model" v-on:change="onChangeRange" multiple chips>
                          </v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedYear" :items="dataYear" label="Select Year" item-text="Year"
                            item-value="Year" v-on:change="onChangeYear" multiple chips></v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedMileage" :items="dataMileage" label="Select Mileage"
                            item-text="Mileage" item-value="Mileage" v-on:change="onChangeMileage" multiple chips>
                          </v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedTransmission" :items="dataTransmission"
                            label="Select Transmission" item-text="Transmisson" item-value="Transmisson"
                            v-on:change="onChangeTransmisson" multiple chips></v-combobox>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12 py-0">
                          <v-combobox v-model="selectedEngineCap" :items="dataEngineCap" label="Select Engine"
                            item-text="Engine" item-value="Engine" v-on:change="onChangeEngine" multiple chips>
                          </v-combobox>
                        </v-col>
                      </v-row>
                      <!-- <v-row>
                        <v-col cols="12 py-0">
                          <v-overflow-btn
                            class="mb-2 pt-0"
                            :items="SortBy"
                            label="Sort cars by"
                            target="#button-dropdown"
                            v-model="sortWord"
                            @input="handleClick(sortWord)"
                          ></v-overflow-btn>
                        </v-col>
                      </v-row> -->
                    </v-col>
                  </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-btn text color="primary" v-on:click="Reset">
                    <v-icon class="mr-1">mdi-history</v-icon>
                    Reset
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="mainheadingcolor white--text" @click="dialog = false">
                    <v-icon class="mr-1">mdi-magnify</v-icon>
                    Search
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col class="col-5 col-sm-5 col-md-12 col-lg-12 text-right">
            <v-btn class="mr-3 hidden-md-and-down" color="primary" v-on:click="ShowMore">
              <v-icon class="mr-1">mdi-arrow-down-bold-circle-outline</v-icon>
              Show More
            </v-btn>
            <v-btn class="white--text" depressed color="mainheadingcolor" v-on:click="Reset">
              <v-icon class="mr-2">mdi-history</v-icon>
              Reset
            </v-btn>
          </v-col>
          <v-col v-for="car in cardata.slice(0, n)" :key="car.id" class="col-12 col-sm-12 col-md-4 col-lg-4">
            <v-card class="mx-auto" max-width="374" rounded>
              <v-img height="250" :src="car.Image"></v-img>

              <v-row>
                <v-col class="col-12">
                  <v-btn @click="
                    viewDealer(
                      car.Makename,
                      car.Modelname,
                      car,
                      car.VehicleId
                    )
                  " class="col-12 enquirebutton primary">
                    <!-- <v-col class="primary white--text text-center"> -->
                    Enquire Now
                    <!-- </v-col> -->
                  </v-btn>
                </v-col>
              </v-row>

              <v-row class="px-4 pb-3 text-center" @click="viewDealer(car.Makename, car.Modelname, car, car.VehicleId)">
                <v-col class="col-12 pb-0">
                  <h1>
                    R
                    {{
                        (
                          Math.round(car.VehiclePrice * 100) / 100
                        ).toLocaleString()
                    }}
                  </h1>
                </v-col>
                <v-col class="carmake col-12 pb-0 pt-0" justify="center" align="center">
                  <a :href="car.link">
                    <h3 class="my-auto">
                      {{ car.Makename }} {{ car.Range }} {{ car.Modelname }}
                    </h3>
                  </a>
                </v-col>
                <v-col class="col-12 pt-0 mb-2">
                  <v-row>
                    <v-col>
                      <h4>{{ car.Type }}</h4>
                    </v-col>
                    <v-col>
                      <h4>{{ car.VehicleYear }}</h4>
                    </v-col>
                    <v-col>
                      <h4>{{ car.TransmissonType }}</h4>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <v-divider class="mx-4"></v-divider>

              <!-- <v-card-title>Kind Price Ad</v-card-title> -->
              <router-link to="/insurance">
                <v-row class="px-3" justify="center">
                  <v-col class="col-3 px-3 text-center kingprice">
                    <v-img src="../assets/kp-logo-desktop.png" width="50px" />
                  </v-col>
                  <v-col class="col-9 px-3 kingprice white--text text-right">
                    <p>Insure Car from R {{ Number(car.InsurancePrice).toFixed(2) }} p/m</p>
                  </v-col>
                </v-row>
              </router-link>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="pt-5">
          <v-col class="col-12 text-center">
            <v-btn color="primary" v-on:click="ShowMore">
              <v-icon class="mr-1">mdi-arrow-down-bold-circle-outline</v-icon>
              Show More
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { HTTP } from "../myapi/myconfig";
import { LoadCars } from "../mixins/AsyncMixin";
import axios from "axios"
//https://second-hand-cars-xml-bucket.s3.eu-west-1.amazonaws.com/LiveCarData.json
//import * as jsonData from '../../CarliveData.json'
export default {
  mixins: [LoadCars],
  props: ["cars"],
  data() {
    return {
      jsonData2: [],
      isloading: false,
      dialog: false,
      SortBy: [
        "By name ascending",
        "By name descending",
        "By price ascending",
        "By price descending",
        "By origin ascending",
        "By origin descending",
      ],
      n: 12,
      sortWord: "",
      search: "",
      min: 0,
      max: 5000000,
      Make: [],
      Model: [],
      Year: [],
      Mileage: [],
      Transmission: [],
      EngineCap: [],
      dataYear: [],
      selectedYear: null,
      dataRange: [],
      selectedRange: null,
      dataModel: [],
      selectedModel: null,
      dataMake: [],
      selectedMake: null,
      dataYear: [],
      selectedYear: null,
      dataMileage: [],
      selectedMileage: null,
      dataTransmission: [],
      selectedTransmission: null,
      dataEngineCap: [],
      selectedEngineCap: null,
      slider: 40,
      range: [0, 5000000],
      cardata: [],
      carLiveJson: [],
    };
  },
  methods: {
    ShowMore() {
      this.n = this.n + 12;
    },
    viewDealer(Makename, Modelname, car, VehicleId) {
      let zayzay = Makename.replaceAll(" ", "-").toLowerCase();
      let zayzayy = Modelname.replaceAll(" ", "-").toLowerCase();
      this.$router.push({
        name: "ViewCar",
        params: {
          Makename: zayzay,
          Modelname: zayzayy,
          car: car,
          VehicleId: VehicleId,
        },
      });
    },
    handleClick(sortWord) {
      this.$emit("sorting", sortWord);
    },
    handleEmptySearchField() {
      this.search == "" ? this.$emit("loadCars") : "";
    },
    emitSliderRanges() {
      let lowerRange = this.range[0];
      let upperRange = this.range[1];
      this.$emit("EmittingSliderRanges", [lowerRange, upperRange]);
    },
    onChangeMake: function (args) {
      ////

      try {
        if (this.selectedMake == null) {
          this.selectedRange = null;
          this.selectedRange.value = "";
          this.selectedModel = null;
          this.selectedModel.value = "";
          this.cardata = this.cardata;
          this.dataYear = this.Year;
          this.dataMileage = this.Mileage;
          this.dataTransmission = this.Transmission;
          this.dataEngineCap = this.EngineCap;
          this.selectedYear = null;
          this.selectedMileage = null;
          this.selectedTransmission = null;
          this.selectedEngineCap = null;
          this.ResetDD();
        }
        //console.log(this.selectedMake[0]);

        let buildvar = "";
        //console.log("Filter data Test");

        let val = null;
        let activeCards = [];
        for (let i = 0; i < this.selectedMake.length; i++) {
          let mm = this.Make;
          //console.log("selectedMake", this.selectedMake[i].Make);
          mm.forEach((c) => {
            if (c.Make == this.selectedMake[i].Make) {
              activeCards.push(c);
            }
          });
        }
        let allcars = [];
        for (let i = 0; i < this.selectedMake.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata;
          //console.log("selectedMake", this.selectedMake[i].Make);
          mm.forEach((c) => {
            if (c.Make == this.selectedMake[i].Make) {
              allcars.push(c);
            }
          });
        }
        this.dataModel = activeCards;
        //this.dataRange = activeCards;
        let allcars1 = [];
        for (let i = 0; i < this.selectedMake.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata;
          //console.log("mm", mm);
          mm.forEach((c) => {
            //console.log("Range", c.Range);
            if (c.Range == this.selectedMake[i].Range) {
              allcars1.push(c);
            }
          });
        }
        //console.log("allcars", allcars1);
        this.cardata = allcars1;
        console.log("allcars", allcars1);
        //console.log("Filter data123", activeCards);
        //this.ResetDD();
        this.dataModel = null;
        this.selectedModel = null;
        this.dataModel = activeCards;
        //this.cardata = activeCards;
        // let rr = this.dataRange;
        // rr = rr.filter((c) => c.Make.indexOf(this.selectedMake[0].Make) > -1);
        this.selectedRange = null;
        this.dataRange = null;
        this.dataRange = activeCards;

        //Filter Main cars list

        //this.cardata = cd;
        if (this.cardata.length == 0) {
          this.cardata = this.cardata1;
        }
        //console.log("All cars under Make", this.cardata);
      } catch (exception) {
        console.log("Error");
        this.cardata = this.cardata1;
        this.dataMake = this.Make;
        this.dataModel = this.Make;
        this.dataRange = this.Make;
        this.dataYear = this.Year;
        this.dataMileage = this.Mileage;
        this.dataTransmission = this.Transmission;
        this.dataEngineCap = this.EngineCap;
      }
      //this.BuildBoxes();
    },
    cardContainsFilter: function (filter) {
      return card.Make.indexOf(filter.Make) != -1;
    },
    onChangeModel: function (args) {
      this.BuildBoxes();
    },
    onChangeRange: function (args) {

      this.BuildBoxes();
    },
    onChangeYear: function (args) {

      let cd = this.cardata;
      this.BuildBoxes();
      ////
    },
    onChangeMileage: function (args) {

      this.BuildBoxes();

    },
    onChangeTransmisson: function (args) {

      this.BuildBoxes();

    },
    onChangeEngine: function (args) {

      this.BuildBoxes();

    },
    BuildBoxes: function (args) {
      let Year = [];
      let Mileage = [];
      let Transmission = [];
      let EngineCap = [];

      // Filter from Makes
      if (this.selectedRange != null && this.selectedRange.length > 0) {
        let activeCards = [];
        for (let i = 0; i < this.selectedRange.length; i++) {
          let mm = this.Make;
          //console.log("selectedRange", this.selectedRange[i].Make);
          mm.forEach((c) => {
            if (c.Range == this.selectedRange[i].Range) {
              activeCards.push(c);
            }
          });
        }

        this.dataModel = activeCards;
        //this.dataRange = activeCards;
        let allcars1 = [];
        for (let i = 0; i < this.selectedRange.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata1;
          //console.log("mm", mm);
          mm.forEach((c) => {
            //console.log("Range", c.Range);
            if (c.Range == this.selectedRange[i].Range) {
              allcars1.push(c);
            }
          });
        }
        //console.log("allcars", allcars1);
        this.cardata = allcars1;
      }
      //////////////

      // Filter from Range down
      if (this.selectedModel != null && this.selectedModel.length > 0) {
        let allcars = [];
        for (let i = 0; i < this.selectedModel.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata1;
          //console.log("selectedModel - allcars", this.selectedModel[i].Model);
          mm.forEach((c) => {
            if (c.Modelname == this.selectedModel[i].Model) {
              allcars.push(c);
            }
          });
        }
        //console.log("allcars", allcars);
        this.cardata = allcars;
      }
      ///////////////////////////

      // Filter from Range down
      // if (this.selectedModel != null && this.selectedModel.length > 0) {
      //   let allcars = [];
      //   for (let i = 0; i < this.selectedModel.length; i++) {
      //     //let mm = this.Make;
      //     let mm = this.cardata;
      //     //console.log("selectedModel - allcars", this.selectedModel[i].Model);
      //     mm.forEach((c) => {
      //       if (c.Modelname == this.selectedModel[i].Model) {
      //         allcars.push(c);
      //       }
      //     });
      //   }
      //   //console.log("allcars", allcars);
      //   this.cardata = allcars;
      // }
      ///////////////////////////

      this.cardata.forEach((element) => {
        if (!Year.includes(element.VehicleYear)) {
          Year.push({ Year: element.VehicleYear });
        }
        if (!Mileage.includes(element.VehicleMileage)) {
          Mileage.push({ Mileage: element.VehicleMileage });
        }
        if (!Transmission.includes(element.TransmissonType)) {
          Transmission.push({ Transmisson: element.TransmissonType });
        }
        if (!EngineCap.includes(element.EngineSize)) {
          EngineCap.push({ Engine: element.EngineSize });
        }
      });

      // Filter from selectedYear down
      if (this.selectedYear != null && this.selectedYear.length > 0) {
        let allcars = [];
        for (let i = 0; i < this.selectedYear.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata;
          //console.log("selectedYear - allcars", this.selectedYear[i].Year);
          mm.forEach((c) => {
            if (c.VehicleYear == this.selectedYear[i].Year) {
              allcars.push(c);
            }
          });
        }
        //console.log("allcars", allcars);
        this.cardata = allcars;
      }
      ///////////////////////////

      // Filter from selectedMileage  down
      if (this.selectedMileage != null && this.selectedMileage.length > 0) {
        let allcars = [];
        for (let i = 0; i < this.selectedMileage.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata;
          // console.log(
          //   "selectedMileage  - allcars",
          //   this.selectedMileage[i].Mileage
          // );
          mm.forEach((c) => {
            if (c.VehicleMileage == this.selectedMileage[i].Mileage) {
              allcars.push(c);
            }
          });
        }
        //console.log("allcars", allcars);
        this.cardata = allcars;
      }
      ///////////////////////////

      // Filter from selectedTransmission   down
      if (
        this.selectedTransmission != null &&
        this.selectedTransmission.length > 0
      ) {
        let allcars = [];
        for (let i = 0; i < this.selectedTransmission.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata;
          // console.log(
          //   "selectedMileage  - allcars",
          //   this.selectedTransmission[i].Transmisson
          // );
          mm.forEach((c) => {
            if (c.TransmissonType == this.selectedTransmission[i].Transmisson) {
              allcars.push(c);
            }
          });
        }
        //console.log("allcars", allcars);
        this.cardata = allcars;
      }
      ///////////////////////////

      // Filter from selectedTransmission   down
      if (this.selectedEngineCap != null && this.selectedEngineCap.length > 0) {
        let allcars = [];
        for (let i = 0; i < this.selectedEngineCap.length; i++) {
          //let mm = this.Make;
          let mm = this.cardata;
          // console.log(
          //   "selectedMileage  - allcars",
          //   this.selectedEngineCap[i].Engine
          // );
          mm.forEach((c) => {
            if (c.EngineCapacitycc == this.selectedEngineCap[i].Engine) {
              allcars.push(c);
            }
          });
        }
        //console.log("allcars", allcars);
        this.cardata = allcars;
      }
      ///////////////////////////

      this.cardata.forEach((element) => {
        if (!Year.includes(element.VehicleYear)) {
          Year.push({ Year: element.VehicleYear });
        }
        if (!Mileage.includes(element.VehicleMileage)) {
          Mileage.push({ Mileage: element.VehicleMileage });
        }
        if (!Transmission.includes(element.TransmissonType)) {
          Transmission.push({ Transmisson: element.TransmissonType });
        }
        if (!EngineCap.includes(element.EngineSize)) {
          EngineCap.push({ Engine: element.EngineSize });
        }
      });
      this.dataYear = Year;
      this.dataMileage = Mileage;
      this.dataTransmission = Transmission;
      this.dataEngineCap = EngineCap;
    },
    Reset: function (args) {
      this.dataMake = this.Make;
      this.dataModel = this.Make;
      this.dataRange = this.Make;
      this.dataYear = this.Year;
      this.dataMileage = this.Mileage;
      this.dataTransmission = this.Transmission;
      this.dataEngineCap = this.EngineCap;
      this.cardata = this.cardata1;
      this.selectedYear = null;
      this.selectedRange = null;
      this.selectedModel = null;
      this.selectedMake = null;
      this.selectedYear = null;
      this.selectedMileage = null;
      this.selectedTransmission = null;
      this.selectedEngineCap = null;
    },
    ResetDD: function (args) {
      this.dataModel = this.Make;
      this.dataRange = this.Make;
      this.dataYear = this.Year;
      this.dataMileage = this.Mileage;
      this.dataTransmission = this.Transmission;
      this.dataEngineCap = this.EngineCap;
      this.cardata = this.cardata1;
      this.selectedYear = null;
      this.selectedRange = null;

      this.selectedModel = null;
      this.selectedYear = null;
      this.selectedMileage = null;
      this.selectedTransmission = null;
      this.selectedEngineCap = null;
    },
    getallcars: function (args) {
      this.isloading = true
      var data = JSON.stringify({
        maxRecordsCount: 5,
      });
      //console.log("First Respond", "123456");
      HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelect`)
        .then((response) => {
          var data = JSON.stringify({
            maxRecordsCount: 5,
          });
          //console.log("First Respond", response.data.Table1);
          this.cardata1 = response.data.Table1;
          HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelectLast`).then(
            (response1) => {
              //console.log("cardata other", response1.data.Table1);
              let mm = response1.data.Table1;
              mm.forEach((c) => {
                this.cardata1.push(c);
              });

              let carcount = this.cardata1.length;
              //console.log("Count", this.cardata1.length);
              //Build Search Values Make Model Year Mileage Transmission EngineCap
              let Make = [];
              let Model = [];
              let Year = [];
              let Mileage = [];
              let Transmission = [];
              let EngineCap = [];
              let i = 0;

              response.data.Table1.forEach((element) => {
                if (!Make.some((code) => code.Make === element.Makename)) {
                  Make.push({
                    Make: element.Makename,
                    Model: element.Modelname,
                    Range: element.Range,
                  });
                } else {
                  if (!Make.some((code) => code.Model === element.Modelname)) {
                    Make.push({
                      Make: element.Makename,
                      Model: element.Modelname,
                      Range: element.Range,
                    });
                  }
                }

                if (!Year.includes(element.VehicleYear)) {
                  Year.push({ Year: element.VehicleYear });
                }
                if (!Mileage.includes(element.VehicleMileage)) {
                  Mileage.push({ Mileage: element.VehicleMileage });
                }
                if (!Transmission.includes(element.TransmissonType)) {
                  Transmission.push({ Transmisson: element.TransmissonType });
                }
                if (!EngineCap.includes(element.EngineSize)) {
                  EngineCap.push({ Engine: element.EngineSize });
                }
                i++;
              });

              response1.data.Table1.forEach((element) => {
                if (!Make.some((code) => code.Make === element.Makename)) {
                  Make.push({
                    Make: element.Makename,
                    Model: element.Modelname,
                    Range: element.Range,
                  });
                } else {
                  if (!Make.some((code) => code.Model === element.Modelname)) {
                    Make.push({
                      Make: element.Makename,
                      Model: element.Modelname,
                      Range: element.Range,
                    });
                  }
                }

                if (!Year.includes(element.VehicleYear)) {
                  Year.push({ Year: element.VehicleYear });
                }
                if (!Mileage.includes(element.VehicleMileage)) {
                  Mileage.push({ Mileage: element.VehicleMileage });
                }
                if (!Transmission.includes(element.TransmissonType)) {
                  Transmission.push({ Transmisson: element.TransmissonType });
                }
                if (!EngineCap.includes(element.EngineSize)) {
                  EngineCap.push({ Engine: element.EngineSize });
                }
                i++;
              });

              /////  Make Model Year Mileage Transmission EngineCap
              Make.sort((a, b) => a.name - b.name);
              let Makesorted = Make.sort((a, b) =>
                a.Make > b.Make ? 1 : b.Make > a.Make ? -1 : 0
              );

              // let loadingfalse = false
              // commit('SET_LOADING', loadingfalse)
              //console.log("this.cardata", this.cardata);
              // this.
              this.dataMake = Makesorted;
              this.dataModel = Model;
              this.dataRange = this.Make;
              this.dataYear = Year;
              this.dataMileage = Mileage;
              this.dataTransmission = Transmission;
              this.dataEngineCap = EngineCap;
              this.cardata = this.cardata1;
              //console.log("Reload");
              this.isloading = false
              //location.reload();


            }

          );
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    downloadFile() {
      axios({
        url: 'https://second-hand-cars-xml-bucket.s3.eu-west-1.amazonaws.com/LiveCarData.json', // File URL Goes Here
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }).then((res) => {

        this.cardata = res.data;
        this.carLiveJson = res.data;
        this.cardata1 = res.data;
        //console.log("Json Data2", this.carLiveJson);
        //console.log("Json Data", this.carLiveJson);
        let i = 0;
        this.carLiveJson.forEach((element) => {
          if (!this.Make.some((code) => code.Make === element.Makename)) {
            this.Make.push({
              Make: element.Makename,
              Model: element.Modelname,
              Range: element.Range,
            });
          } else {
            if (!this.Make.some((code) => code.Model === element.Modelname)) {
              this.Make.push({
                Make: element.Makename,
                Model: element.Modelname,
                Range: element.Range,
              });
            }
          }

          if (!this.Year.includes(element.VehicleYear)) {
            this.Year.push({ Year: element.VehicleYear });
          }
          if (!this.Mileage.includes(element.VehicleMileage)) {
            this.Mileage.push({ Mileage: element.VehicleMileage });
          }
          if (!this.Transmission.includes(element.TransmissonType)) {
            this.Transmission.push({ Transmisson: element.TransmissonType });
          }
          if (!this.EngineCap.includes(element.EngineSize)) {
            this.EngineCap.push({ Engine: element.EngineSize });
          }
          i++;
        });
        /////  Make Model Year Mileage Transmission EngineCap
        this.Make.sort((a, b) => a.name - b.name);
        let Makesorted = this.Make.sort((a, b) =>
          a.Make > b.Make ? 1 : b.Make > a.Make ? -1 : 0
        );
        this.dataMake = Makesorted;
        this.isloading = false
      });
    }
  },
  async created() {
    this.downloadFile();
    //const module = await import('https://second-hand-cars-xml-bucket.s3.eu-west-1.amazonaws.com/LiveCarData.json');
    //console.log("Json Data",module);

    this.isloading = true
    if (this.cardata.length == 0) {
      //console.log("Reload1");
      //this.getallcars();
    } else {
      //console.log("NotReload", this.cardata.length);
      this.isloading = false
    }
    //cardataObj.getallcars();

    //console.log("Store", this.$store.state);
    this.dataMake = this.Make;
    this.dataModel = this.Make;
    this.dataRange = this.Make;
    this.dataYear = this.Year;
    this.dataMileage = this.Mileage;
    this.dataTransmission = this.Transmission;
    this.dataEngineCap = this.EngineCap;
    //this.cardata = this.cardata;

  },

};
</script>

<style>
.search #input-21 {
  margin: 4px 0;
  padding-left: 10px;
}

.search label {
  padding-left: 16px;
}

#filters .v-card {
  width: 100%;
}

.v-select__selection.v-select__selection--comma,
.v-label.theme--light,
#main input,
.v-list-item__content {
  color: #ab2328;
}

.v-card.v-card--flat.v-sheet.theme--light.transparent {
  width: 100%;
}

#app .theme--light.v-overflow-btn .v-input__control::before {
  background-color: #ab2328 !important;
}

.theme--light.v-text-field>.v-input__control>.v-input__slot::before {
  border-color: #ab2328 !important;
}

.mdi-menu-down::before {
  color: #ab2328;
}

#app .search input {
  padding-left: 10px;
}
</style>