<template>
  <div id="main">
    <v-container fluid>
      <v-row>
        <v-col id="aside" cols="12" sm="12" md="12">
          <Sidebar
            @sorting="sortCars"
            @searchInput="handleSearch($event)"
            @loadCars="updateComp"
            @EmittingSliderRanges="handeSliderRanges($event)"
            :cars="cars"
          />
        </v-col>

        <!-- <v-col cols="12" sm="8" md="9">
          <v-row>
            <SingleCar
              v-for="(car, i) of visibleCars.slice(0,50)"
              :key="i"
              :car="car"
              @update="loadCars"
            >
              {{car.Name}}
            </SingleCar>
          </v-row>
        </v-col> -->
      </v-row>
    </v-container>
    <!-- <div class="text-center" id="pagination">
      <v-tabs>
        <v-tab @click="changePageSize(10)">Show 10</v-tab>
        <v-tab @click="changePageSize(20)">Show 20</v-tab>
        <v-tab @click="changePageSize(30)">Show 30</v-tab>
      </v-tabs>
      <v-pagination total-visible="7" v-model="page" class="my-4" :length="paginationTabs"></v-pagination>
    </div> -->
  </div>
</template>

<script>
import SingleCar from "./SingleCar";
import Sidebar from "./Sidebar";
import { LoadCars } from "../mixins/AsyncMixin";
import { SortingMixin } from "../mixins/SortingMixin";
import { SliderMixin } from "../mixins/AsyncMixin";
export default {
  mixins: [LoadCars, SortingMixin, SliderMixin],
  data() {
    return {
      cars: [],
      page: 0,
      pageSize: 12,
      visibleCars: [],
      paginationTabs: 0
    };
  },
  components: {
    SingleCar,
    Sidebar
  },
  watch: {
    page: function() {
      this.visibleCars = this.cars.slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
    }
  },
  created() {
    this.loadCars();
    //console.log('hey')
  },
  beforeMount: function() {
    this.updateVisibleCars();
  },
  methods: {
    updateVisibleCars() {
      this.visibleCars = this.cars.slice(
        this.page * this.pageSize,
        this.page * this.pageSize + this.pageSize
      );
    },
    updatePage(pageNumber) {
      this.page = pageNumber;
    },
    getNumberOfTabs() {
      this.paginationTabs = Math.ceil(this.cars.length / this.pageSize);
    },
    changePageSize(size) {
      this.page = 1;
      this.pageSize = size;
      this.updateVisibleCars();
      this.getNumberOfTabs();
    },
    updateComp() {
      this.loadCars();
    },
    handleSearch(searchTerm) {
      this.cars = this.cars.filter(car =>
        car.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      this.updateVisibleCars();
    }
  }
};
</script>

<style>
#pagination .v-slide-group__content,
.cars {
  display: flex;
  justify-content: center;
}
#pagination {
  margin: 0 auto;
}

#pagination .v-tabs {
  background: #90caf9;
}
.v-slide-group__content.v-tabs-bar__content {
  background: #ab2328;
  color: white;
}
#pagination .v-tab {
  color: white;
}
</style>
