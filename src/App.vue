<template>
  <v-app>
    <Mainheader />
    <!-- <v-overlay :value="loading == true">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay> -->
    <v-main>
      <router-view/>
    </v-main>
    <mainfooter class="mt-4"/>
  </v-app>
</template>

<script>
import Mainfooter from './components/mainfooter.vue';
import Mainheader from './components/mainheader.vue'
export default {
  name: 'App',
  data: () => ({
    loading: false
  }),
  components: {
    Mainheader,
    Mainfooter
  },

  data: () => ({
    //
  }),
  created() {
    this.getlist()
  },
  methods: {
    getlist() {
      // this.loading = true
      // this.$store.dispatch('setloading', this.loading)
      if(this.$store.state.cardata.cardata == '') {
        //console.log('this.$store.state.cardata ==', this.$store.state.cardata.cardata)
        //this.$store.dispatch('getallcars')
        this.$store.dispatch('getalldealers')
        this.$store.dispatch('getallposts')
      }else{
        // this.loading = false
        // this.$store.dispatch('setloading', this.loading)
        //console.log('hello', this.$store.state.cardata.cardata)
        // this.$store.dispatch('setloading', loading)
      }
      
    }
  }
  // watch: {
	// 	'$route' (to, from) {
	// 		document.title = to.meta.title || 'Other Title'
	// 	}
	// }
};
</script>
