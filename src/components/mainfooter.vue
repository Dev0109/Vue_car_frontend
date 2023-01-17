<template>
    <div class="mainfooter">
        <v-container>
            <v-row class="py-4" align="center" justify="center">
                <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 white--text">
                    <h1>Contact Us</h1>
                </v-col>
                <v-col class="col-12 col-sm-12 col-md-6 col-lg-6 text-md-right text-sm-left">
                    <v-btn
                    color="secondary"
                    class="black--text"
                    >
                        info@secondhandcars.co.za
                    </v-btn>
                </v-col>
            </v-row>
            <v-divider color="white" class="mx-4"></v-divider>
            <v-row class="pt-5 white--text">
                <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
                    <v-img src="../assets/newsecondhandlogo.png" width="150" class="my-4"/>
                    <!-- <p>2 Robin Close, Infinity <br>
                        Office Park Block C, Ground Floor Corner<br>
                        Hennie Alberts and Michelle Ave Meyersdal,<br>
                        Alberton, 1447<br>
                        Johannesburg
                    </p> -->
                     <v-btn 
            href="https://www.facebook.com/secondhandcarsSA/"
            target="_blank"
            plain
            rounded
            class="px-0"
            ><v-icon color="secondary">mdi-facebook</v-icon></v-btn>
            <v-btn 
            rounded
              plain
              class="px-0"
              href="https://www.instagram.com/secondhandcars_sa/"
              target="_blank"
            ><v-icon color="secondary">mdi-instagram</v-icon></v-btn>
                </v-col>
                <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
                    <h2>Pages</h2>
                    <v-list-item-group
                        color="secondary"
                    >
                        <v-list-item
                        v-for="(link, i) in links"
                        :key="i"
                        class="white--text"
                        :to="link.link"
                        >
                        <v-list-item-icon>
                            <v-icon color="white" v-text="link.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>

                </v-col>
                <v-col class="col-12 col-sm-12 col-md-4 col-lg-4">
                    <h2>Information</h2>
                    <v-list-item-group
                        color="secondary"
                    >
                        <v-list-item
                        v-for="(info, i) in infos"
                        :key="i"
                        class="white--text"
                        :to="info.link"
                        >
                        <v-list-item-icon>
                            <v-icon color="white" v-text="info.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="info.text"></v-list-item-title>
                        </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                </v-col>
            </v-row>
            <!-- <v-divider color="white" class="mx-4"></v-divider> -->
            <v-row>
                <v-col class="col-12 white--text py-0">
                    <p>Copyright ©2022 Second Hand Cars All rights reserved | Driven By Secondhandcars</p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        links: [
            { text: 'Used', icon: 'mdi-arrow-right-thick', link:'/' },
            // { text: 'Demo', icon: 'mdi-arrow-right-thick', link:'/demo' },
            { text: 'Dealers', icon: 'mdi-arrow-right-thick', link:'/dealers' },
            { text: 'Insurance', icon: 'mdi-arrow-right-thick', link:'/insurance' },
            { text: 'Finance Calculator', icon: 'mdi-arrow-right-thick', link:'/finance-calculator' },
            { text: 'Contact Us', icon: 'mdi-arrow-right-thick', link:'/contact-us' },
        ],
    //     links:[
    //   {text:'Used', link:'/'},
    //   {text:'Demo', link:'/demo'},
    //   {text:'Dealers', link:'/dealers'},
    //   {text:'Insurance', link:'/insurance'},
    //   {text:'Finance Calculator', link:'/finance-calculator'},
    //   // {text:'Insurance', link:'/insurance'},
    //   {text:'Contact Us', link:'/contact-us'},
    // ],
        infos: [
            { text: 'Privacy Policy', icon: 'mdi-arrow-right-thick', link:"/privacy-policy" },
            { text: 'Terms & Conditions', icon: 'mdi-arrow-right-thick', link:'/terms-and-conditions' },
            { text: 'Articles', icon: 'mdi-arrow-right-thick', link:'/articles' },
        ],
    })
}
</script>

<style lang="sass">
.mainfooter 
        min-height: 500px
        background-image: url('../assets/footer-bg-min.jpeg')
        background-size: cover

.v-application--is-ltr .v-list-item__icon:first-child 
    margin-right: 15px !important

</style>