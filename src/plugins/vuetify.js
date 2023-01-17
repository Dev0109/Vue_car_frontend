import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        themes: {
            light:{
                primary: '#1f1f1f',
                secondary: '#fff',
                mainheadingcolor: '#ab2328',
                kingprice: '#ab2328',
                insurancetextonpage:'#ab2328'
                // tabbackground: '#111111',
                // Wins: '#007b1c',
                // Losses: '#dc4647',
                // Draws: '#62aaf9',
            }
        }
    }
});
