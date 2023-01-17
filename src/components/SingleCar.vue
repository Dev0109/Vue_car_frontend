<template>
  <!-- <v-col class="single-car" cols="12" md="6" lg="4" xl="3">
    <v-card class="mx-auto my-2 indigo lighten-4" max-width="400">
      <v-img class="white--text align-end" height="200px" :src="car.Picture">
        <v-card-title class="text-capitalize">{{ car.Name }}</v-card-title>
      </v-img>

      <v-card-subtitle
        v-if="!showEdit"
        class="pb-0 headline indigo--text text--darken-4"
      >{{ car.Price | USD }}</v-card-subtitle>
      <v-card-subtitle v-if="showEdit" class="pb-0 headline indigo--text text--darken-4">
        <input type="text" placeholder="Enter new price" v-model="price" />
        <v-btn text icon color="indigo" @click="updatePrice">
          <v-icon>save</v-icon>
        </v-btn>
      </v-card-subtitle>

      <v-card-text class="white--text mt-2 body-3 indigo pt-3 card-text">
        <div class="miles">
          <div v-if="switchMiles" class="ml">Miles per Gallon: {{ car.Miles_per_Gallon }}</div>
          <div
            v-if="!switchMiles"
            class="km"
          >Liters per 100km: {{ car.Miles_per_Gallon | litresPer100km }}</div>
          <v-switch v-model="switchMiles" class="ml-5"></v-switch>
        </div>

        <div>Cylinders: {{ car.Cylinders }}</div>
        <div>Displacement: {{ car.Displacement }}</div>
        <div>Horsepower: {{ car.Horsepower }}</div>
        <div class="lbs">
          <div v-if="switchLbs">Weight in lbs: {{ car.Weight_in_lbs }}</div>
          <div v-if="!switchLbs">Weight in kg: {{ car.Weight_in_lbs | lbsToKg }}</div>
          <v-switch v-model="switchLbs" class="ml-5"></v-switch>
        </div>

        <div>Year: {{ car.Year | formatDate }}</div>
        <div>Origin: {{ car.Origin }}</div>
        <div v-if="!showEdit">Quantity: {{ car.Quantity }}</div>
        <input
          class="white--text"
          v-if="showEdit"
          type="text"
          placeholder="Enter new quantity"
          v-model="quantity"
        />
        <v-btn v-if="showEdit" text icon color="indigo accent-1" @click="updateQuantity" class>
          <v-icon>saved</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-actions v-if="!error && $auth.isAuthenticated">
        <v-btn @click="showEdit = !showEdit" text>Edit</v-btn>

        <v-btn class="indigo--text" text @click="buyCar">Buy</v-btn>
        <v-btn class="indigo--text" text @click="delCar">Del</v-btn>
      </v-card-actions>
      <v-card-actions v-if="error">
        <div class="errorMSG indigo white--text body-1 px-4">{{error}}</div>
      </v-card-actions>
    </v-card>
  </v-col> -->
  <v-row>
    <v-col
      v-for="car in cardata.slice(0, n)"
      :key="car.id"
      class="col-12 col-sm-12 col-md-3 col-lg-3"
    >
      <v-card class="mx-auto" max-width="374" rounded>
        <v-img height="250" :src="car.Image"></v-img>

        <v-row>
          <v-col class="col-12">
            <v-btn @click="viewDealer(car.Makename, car.Modelname, car, car.VehicleId)" class="col-12 enquirebutton primary">
          <!-- <v-col class="primary white--text text-center"> -->
            Enquire Now
          <!-- </v-col> -->
          </v-btn>
          </v-col>
        </v-row>

        <v-row class="px-4 pb-3 text-center">
          <v-col class="col-12 pb-0">
            <h1>{{ car.VehiclePrice }}</h1>
          </v-col>
          <v-col
            class="carmake col-12 pb-0 pt-0"
            justify="center"
            align="center"
          >
            <a :href="car.link">
              <h3 class="my-auto">{{ car.Makename }} {{ car.Range }} {{ car.Modelname }}</h3>
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
        <v-row class="px-3" justify="center">
          <v-col class="col-3 px-3 text-center kingprice">
            <v-img src="../assets/KP_Single_Colour_Logo_White.svg" width="50px" />
          </v-col>
          <v-col class="col-9 px-3 kingprice white--text text-center">
            <p>Insure Car from {{ car.Installment }} p/m</p>
          </v-col>
        </v-row>
        <!-- <v-card-actions>
                <v-btn
                  color="orange lighten-2"
                  text
                >
                  Installment
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  icon
                  @click="show = !show"
                >
                  <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
              </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
              </div>
            </v-expand-transition> -->
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { SingleCarAsync } from "../mixins/AsyncMixin";

export default {
  mixins: [SingleCarAsync],
  props: {
    car: { type: Object },
  },
  data() {
    return {
      switchMiles: true,
      switchLbs: true,
      showEdit: false,
      price: this.car.Price,
      quantity: this.car.Quantity,
      mutableCar: this.car,
      error: "",
      cardata:[]
    };
  },
  computed: {
    userEmail() {
      return this.$auth.user.email || "";
    },
      async created() {
    //cardata.log("Store", this.$store.state.cardata.Make);
    this.cardata = this.$store.state.cardata.cardata;
  },
  },
  methods:{
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
  }
};
</script>

<style scoped>
.miles,
.lbs {
  content: "";
  clear: both;
  display: table;
  width: 100%;
  padding-right: 10%;
}
.miles .km,
.miles .ml {
  float: left;
}
.card-text .v-input,
.lbs v-input {
  float: right;
  height: 22px;
  padding-top: 0;
  margin-top: 0;
}

.lbs > div {
  float: left;
}
div > input {
  width: 70%;
}
div .v-btn {
  width: 30%;
  padding-right: 5px;
}
.errorMSG {
  margin: 0 auto;
  padding: 6px;
  border-radius: 3px;
}
</style>
