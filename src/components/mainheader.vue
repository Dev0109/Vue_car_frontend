<template>
<div>
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
    >
    <v-row>
        <v-col class="my-3">
       <v-img src="../assets/newsecondhandlogo.png" width="100px" class="mx-auto"/>
    </v-col>
    </v-row>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="link in links"
          :key="link.id"
          link
          :to="{ path: link.link }"
        >
          <v-list-item-icon>
            <v-icon color="mainheadingcolor">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

       <v-app-bar flat height="100">
      
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-container class="hidden-md-and-down">
        <v-row align="center" justify="center">
        <v-col class="col-1">
          <v-img
          alt="Secondhandcars Name"
          class="shrink mt-1"
          contain
          min-width="100"
          src="../assets/newsecondhandlogo.png"
          width="100"
        />
        </v-col>
          <v-col class="col-8 text-center mx-auto">
            <v-btn
            plain
              v-for="link in links"
              :key="link.id"
              class="mx-1"
              :to="link.link"
            >
              {{ link.text }}
            </v-btn>
           </v-col>
          <v-col class="col-3 text-right">
            
            <v-btn 
              @click="gotosearch()"
              target="_blank"
              plain
              >
              <v-icon color="mainheadingcolor">
                mdi-magnify
                </v-icon>
            </v-btn>
            <!-- <v-btn plain><v-icon color="mainheadingcolor px-2">mdi-facebook</v-icon></v-btn> -->
            <v-btn 
              href="https://www.facebook.com/secondhandcarsSA/"
              target="_blank"
              plain
              >
              <v-icon color="mainheadingcolor">
                mdi-facebook
                </v-icon>
            </v-btn>
            <v-btn 
              plain
              href="https://www.instagram.com/secondhandcars_sa/"
              target="_blank"
            >
              <v-icon color="mainheadingcolor" >
                mdi-instagram
                </v-icon>
              </v-btn>
            
        </v-col>
        
        
      </v-row>
      </v-container>

       <v-row class="hidden-sm-and-up" align="center" justify="center">
        <v-col class="col-4">
          <v-img
          alt="Secondhandcars Name"
          class="shrink mt-1"
          contain
          min-width="100"
          src="../assets/newsecondhandlogo.png"
          width="100"
        />

        </v-col>
        <v-col class="col-8 text-right">
          <v-btn 
              @click="gotosearch()"
              target="_blank"
              plain
              >
              <v-icon color="mainheadingcolor">
                mdi-magnify
                </v-icon>
            </v-btn>
          <!-- <a href="https://www.facebook.com/secondhandcarsSA/"><v-icon color="mainheadingcolor px-2">mdi-facebook</v-icon></a> -->
            <v-btn 
            href="https://www.facebook.com/secondhandcarsSA/"
            target="_blank"
            plain
            ><v-icon color="mainheadingcolor">mdi-facebook</v-icon></v-btn>
            <v-btn 
              plain
              href="https://www.instagram.com/secondhandcars_sa/"
              target="_blank"
            ><v-icon color="mainheadingcolor">mdi-instagram</v-icon></v-btn>
            
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- </div> -->

</div>  
</template>

<script>
export default {
    data: () => ({
    // drawer
    drawer: false,
    links:[
      {text:'Used', icon:'mdi-car-sports', link:'/'},
      // {text:'Demo', link:'/demo'},
      {text:'Dealers', icon:'mdi-home-modern', link:'/dealers'},
      {text:'Insurance', icon:'mdi-account-star', link:'/insurance'},
      {text:'Finance Calculator', icon:'mdi-calculator', link:'/finance-calculator'},
      // {text:'Insurance', link:'/insurance'},
      {text:'Contact Us', icon:'mdi-email-alert', link:'/contact-us'},
    ],
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
  }),
  methods: {
    gotosearch() {
        this.$router.replace('/usedcars');
      },
  }
}
</script>