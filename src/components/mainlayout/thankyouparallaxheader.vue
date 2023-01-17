<template>
    <v-parallax src="../../assets/bg.jpeg"
      height="200"
      >
      <v-container>
        <v-row>
          <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 text-center my-auto">
            <h2 class="bannerheadingh2">THANK YOU {{this.PropDealerName}}</h2>
          </v-col>
        </v-row>
      </v-container>
      </v-parallax>
</template>

<script>
export default {
    props:['PropDealerName'],
    data: () =>({

    })
}
</script>