<template>
  <div class="dealers">
    <v-parallax src="../assets/bg.jpeg" height="200">
      <v-container>
        <v-row>
          <v-col
            class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto"
          >
            <h2 class="bannerheadingh2">DEALERS</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    <v-container>
      <v-row>
        <v-col class="text-center"><h1>Browse Our Dealers</h1></v-col>
      </v-row>
      <v-data-iterator
        :items="dealerdata"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :search="search"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar dark color="mainheadingcolor" class="mb-1">
            <v-text-field
              v-model="search"
              clearable
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="Search"
            ></v-text-field>
            <template v-if="$vuetify.breakpoint.mdAndUp">
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Sort by"
            ></v-select> -->
              <!-- <v-spacer></v-spacer> -->
              <!-- <v-btn-toggle
              v-model="sortDesc"
              mandatory
            >
              <v-btn
                large
                depressed
                color="secondary"
                :value="false"
              >
                <v-icon color="mainheadingcolor">mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn
                large
                depressed
                color="secondary"
                :value="true"
              >
                <v-icon color="mainheadingcolor">mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle> -->
            </template>
          </v-toolbar>
        </template>

        <template v-slot:default="props">
          <v-row class="py-5">
            <v-col
              v-for="item in props.items"
              :key="item.name"
              cols="12"
              sm="6"
              md="4"
              lg="3"
              class="my-3"
            >
              <v-card class="text-center">
                <v-row>
                  <v-col class="col-12">
                    <v-avatar size="97">
                      <img :src="item.DealerLogo" />
                    </v-avatar>
                  </v-col>
                  <v-col class="col-12">
                    <h3>{{ item.Dealer_Name }}</h3>
                  </v-col>
                </v-row>

                <!-- <v-card-title class="subheading font-weight-bold text-center">
                {{ item.Dealer_Name }}
              </v-card-title> -->

                <v-divider></v-divider>
                <v-row class="py-5 px-2">
                  <v-col class="col-12">
                    <a href="">
                      <v-icon class="mainheadingcolor--text"
                        >mdi-cellphone</v-icon
                      >
                      {{ item.Number }}</a
                    >
                  </v-col>
                  <v-col class="col-12">
                    <a href=""
                      ><v-icon class="mainheadingcolor--text">mdi-email</v-icon>
                      {{ item.Email }}</a
                    >
                  </v-col>
                  <v-col class="col-12 addresscol">
                    <a href=""
                      ><v-icon class="mainheadingcolor--text"
                        >mdi-home-modern</v-icon
                      >
                      {{ item.DealerAddress }}</a
                    >
                  </v-col>
                </v-row>

                <v-divider></v-divider>
                <v-row class="py-5 px-2">
                  <v-col class="col-12">
                    <v-btn @click="viewDealer(item.Dealer_Name, item)">
                      View
                    </v-btn>
                  </v-col>
                </v-row>

                <!-- <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">
                    {{ key }}:
                  </v-list-item-content>
                  <v-list-item-content
                    class="align-end"
                    :class="{ 'blue--text': sortBy === key }"
                  >
                    {{ item[key.toLowerCase()] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list> -->
              </v-card>
            </v-col>
          </v-row>
        </template>

        <template v-slot:footer>
          <v-row class="mt-2" align="center" justify="center">
            <span class="grey--text">Items per page</span>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  text
                  color="primary"
                  class="ml-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  {{ itemsPerPage }}
                  <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(number, index) in itemsPerPageArray"
                  :key="index"
                  @click="updateItemsPerPage(number)"
                >
                  <v-list-item-title>{{ number }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-spacer></v-spacer>

            <span class="mr-4 grey--text">
              Page {{ page }} of {{ numberOfPages }}
            </span>
            <v-btn
              fab
              dark
              color="mainheadingcolor"
              class="mr-1"
              @click="formerPage"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              color="mainheadingcolor"
              class="ml-1"
              @click="nextPage"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: 'Dealers',
  data: () => ({
    itemsPerPageArray: [8, 12, 16],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: "name",
    keys: ["Dealer Name"],
    items: [],
  }),
  // created() {
  // console.log('hello')
  // },
  computed: {
    numberOfPages() {
      return Math.ceil(this.dealerdata.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
    ...mapGetters(["dealerdata"]),
  },
  mounted() {
    //console.log("Test1");
     this.$ga.page('/Dealers');
    //this.$gtm.trackView("Dealers", "/dealers");
      //console.log("Test2");
  },
  methods: {
    change() {
      this.items = dealerdata;
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
    viewDealer(Dealer_Name, item) {
      // let dealer = item
      let zayzay = Dealer_Name.replaceAll(" ", "-").toLowerCase();
      this.$router.push({
        name: "Dealership",
        params: {
          Dealer_Name: zayzay,
          item: item,
        },
      });
    },
  },
};
</script>

<style lang="sass">
a
  text-decoration: none

.addresscol
  height: 100px
</style>