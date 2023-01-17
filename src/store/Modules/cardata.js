import { HTTP } from '../../myapi/myconfig';

const state = {
    cardata: [],
    carcount: '',
    dealerdata: [],
    isloadingdata: false,
    postsdata: []
};
const getters = {
    cardata: state => {
        return state.cardata
    },
    carcount: state => {
        return state.carcount
    },
    dealerdata: state => {
        return state.dealerdata
    },
    isloadingdata: state => {
        return state.isloadingdata
    },
    postsdata: state => {
        return state.postsdata
    }

};
const actions = {
    setloading: ({ commit }, isloadingdata) => {
        //console.log('isloadingdata', isloadingdata)
        commit('SET_LOADING', isloadingdata)
    },
    async getallcars({ commit }) {
        var data = JSON.stringify({
            "maxRecordsCount": 5
        });
        // HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelect`)
        //     .then(response => {

        //         var data = JSON.stringify({
        //             "maxRecordsCount": 5
        //         });
        //         this.cardata = response.data.Table1
        //         HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelectLast`)
        //             .then(response1 => {
        //                 HTTP.get(`SecondHandCarsAPI/vehiclesFilterSelectLast2`)
        //                     .then(response2 => {
        //                         //console.log("cardata other", response1);
        //                         let mm = response1.data.Table1;
        //                         mm.forEach((c) => {
        //                             this.cardata.push(c);
        //                         });
        //                         let mm2 = response2.data.Table1;
        //                         mm2.forEach((c) => {
        //                             this.cardata.push(c);
        //                         });
        //                         let carcount = this.cardata.length
        //                             //console.log("Count", this.cardata.length);
        //                             //Build Search Values Make Model Year Mileage Transmission EngineCap
        //                         let Make = [];
        //                         let Model = [];
        //                         let Year = [];
        //                         let Mileage = [];
        //                         let Transmission = [];
        //                         let EngineCap = [];
        //                         let i = 0;
        //                         // response2.data.Table1.forEach(element => {
        //                         //     if (!Make.some(code => code.Make === element.Makename)) {
        //                         //         Make.push({ "Make": element.Makename, "Model": element.Modelname, "Range": element.Range });
        //                         //     } else {
        //                         //         if (!Make.some(code => code.Model === element.Modelname)) {
        //                         //             Make.push({ "Make": element.Makename, "Model": element.Modelname, "Range": element.Range });
        //                         //         }
        //                         //     }

        //                         //     if (!Year.includes(element.VehicleYear)) {
        //                         //         Year.push({ "Year": element.VehicleYear });
        //                         //     }
        //                         //     if (!Mileage.includes(element.VehicleMileage)) {
        //                         //         Mileage.push({ "Mileage": element.VehicleMileage });
        //                         //     }
        //                         //     if (!Transmission.includes(element.TransmissonType)) {
        //                         //         Transmission.push({ "Transmisson": element.TransmissonType });
        //                         //     }
        //                         //     if (!EngineCap.includes(element.EngineSize)) {
        //                         //         EngineCap.push({ "Engine": element.EngineSize });
        //                         //     }
        //                         //     i++;
        //                         // });
        //                         // response1.data.Table1.forEach(element => {
        //                         //     if (!Make.some(code => code.Make === element.Makename)) {
        //                         //         Make.push({ "Make": element.Makename, "Model": element.Modelname, "Range": element.Range });
        //                         //     } else {
        //                         //         if (!Make.some(code => code.Model === element.Modelname)) {
        //                         //             Make.push({ "Make": element.Makename, "Model": element.Modelname, "Range": element.Range });
        //                         //         }
        //                         //     }

        //                         //     if (!Year.includes(element.VehicleYear)) {
        //                         //         Year.push({ "Year": element.VehicleYear });
        //                         //     }
        //                         //     if (!Mileage.includes(element.VehicleMileage)) {
        //                         //         Mileage.push({ "Mileage": element.VehicleMileage });
        //                         //     }
        //                         //     if (!Transmission.includes(element.TransmissonType)) {
        //                         //         Transmission.push({ "Transmisson": element.TransmissonType });
        //                         //     }
        //                         //     if (!EngineCap.includes(element.EngineSize)) {
        //                         //         EngineCap.push({ "Engine": element.EngineSize });
        //                         //     }
        //                         //     i++;
        //                         // });
        //                         // response.data.Table1.forEach(element => {
        //                         //     if (!Make.some(code => code.Make === element.Makename)) {
        //                         //         Make.push({ "Make": element.Makename, "Model": element.Modelname, "Range": element.Range });
        //                         //     } else {
        //                         //         if (!Make.some(code => code.Model === element.Modelname)) {
        //                         //             Make.push({ "Make": element.Makename, "Model": element.Modelname, "Range": element.Range });
        //                         //         }
        //                         //     }

        //                         //     if (!Year.includes(element.VehicleYear)) {
        //                         //         Year.push({ "Year": element.VehicleYear });
        //                         //     }
        //                         //     if (!Mileage.includes(element.VehicleMileage)) {
        //                         //         Mileage.push({ "Mileage": element.VehicleMileage });
        //                         //     }
        //                         //     if (!Transmission.includes(element.TransmissonType)) {
        //                         //         Transmission.push({ "Transmisson": element.TransmissonType });
        //                         //     }
        //                         //     if (!EngineCap.includes(element.EngineSize)) {
        //                         //         EngineCap.push({ "Engine": element.EngineSize });
        //                         //     }
        //                         //     i++;
        //                         // });

        //                         // /////  Make Model Year Mileage Transmission EngineCap
        //                         // //this.Make.sort((a, b) => a.name - b.name);
        //                         // let Makesorted = Make.sort((a, b) => (a.Make > b.Make) ? 1 : ((b.Make > a.Make) ? -1 : 0))
        //                         //     //let Makesorted2 = Makesorted.sort((a, b) => (a.Range > b.Range) ? 1 : ((b.Range > a.Range) ? -1 : 0))
        //                         //     //console.log("MakeName", Makesorted2)
        //                         //     //console.log('Makesorted', Makesorted)
        //                         //     //commit('SET_CARS', this.cardata)
        //                         // commit('SET_CARS_MAKE', Makesorted)
        //                         // commit('SET_CARS_MODEL', Model)
        //                         // commit('SET_CARS_YEAR', Year)
        //                         // commit('SET_CARS_MILEAGE', Mileage)
        //                         // commit('SET_CARS_TRANSMISSION', Transmission)
        //                         // commit('SET_CARS_ENGINE', EngineCap)

        //                         commit('SET_CARS', this.cardata)
        //                         commit('SET_CAR_COUNT', carcount)
        //                             // let loadingfalse = false
        //                             // commit('SET_LOADING', loadingfalse)
        //                             //console.log('this.cardata', this.cardata)
        //                             // this.
        //                     })
        //             })


        //     })
        //     .catch(e => {
        //         this.errors.push(e)
        //     })
    },
    async getalldealers({ commit }) {
        HTTP.get(`SecondHandCarsAPI/dealershipinfoFilterSelect`)
            .then(response => {
                this.dealerdata = response.data.DealershipInfo
                    // this.carcount = this.dealerdata.length
                commit('SET_DEALERS', this.dealerdata)
                    // commit('SET_CAR_COUNT', this.carcount)
                    //console.log(this.dealerdata)
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    async getallposts({ commit }) {
        HTTP.get(`/SecondHandCarsAPI/postsFilterSelect`)
            .then(response => {
                this.postsdata = response.data.Posts
                    // this.carcount = this.dealerdata.length
                commit('SET_POSTS', this.postsdata)
                    // commit('SET_CAR_COUNT', this.carcount)
                    //console.log(this.postsdata)
            })
            .catch(e => {
                this.errors.push(e)
            })
    },
    // async getcurrentvehicle() {

    // }
};
const mutations = {
    'SET_CARS' (state, cardata) {
        state.cardata = cardata
    },
    'SET_CAR_COUNT' (state, carcount) {
        state.carcount = carcount
    },
    'SET_DEALERS' (state, dealerdata) {
        state.dealerdata = dealerdata
    },
    'SET_CARS_MAKE' (state, Make) {
        state.Make = Make
    },
    'SET_CARS_MODEL' (state, Model) {
        state.Model = Model
    },
    'SET_CARS_YEAR' (state, Year) {
        state.Year = Year
    },
    'SET_CARS_MILEAGE' (state, Mileage) {
        state.Mileage = Mileage
    },
    'SET_CARS_TRANSMISSION' (state, Transmission) {
        state.Transmission = Transmission
    },
    'SET_CARS_ENGINE' (state, EngineCap) {
        state.EngineCap = EngineCap
    },
    'SET_LOADING' (state, isloadingdata) {
        state.isloadingdata = isloadingdata
    },
    'SET_POSTS' (state, postsdata) {
        state.postsdata = postsdata
    },

};
export default {
    state,
    getters,
    actions,
    mutations
}