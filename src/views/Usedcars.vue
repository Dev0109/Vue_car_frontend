<template>
  <div class="usedcars">
      <v-parallax src="../assets/bg.jpeg"
      height="200"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">Used Cars</h2>
          </v-col>
        </v-row>
      </v-container>
  </v-parallax>
    <v-container>
      <!-- <h1>Used cars</h1> -->
        <AllCars/>
    </v-container>
  </div>
</template>


<script>
import AllCars from "@/components/AllCars.vue"
export default {
    components:{
        AllCars
    },
    data: () => ({

  })

}
</script>

<style lang="scss">


</style>