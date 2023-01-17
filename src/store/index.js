import Vue from 'vue'
import Vuex from 'vuex'
import cardata from './Modules/cardata'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

// export default new Vuex.Store({
//    modules: {
//       cardata
//    }
// });

export default new Vuex.Store({
   modules: {
      cardata
   },
   plugins: [
    createPersistedState({
      paths: ["cardata"]
    })
  ]
});


