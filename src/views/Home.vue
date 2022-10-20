<template>
  
  <v-app id="inspire">
    
    <Overlay /> 
    <Snackbar />
    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-list dense>
      <v-list-item link @click="$router.push({name: 'home'})">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  
  <v-app-bar
  app
  color="indigo"
  dark
  >
  <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  <v-toolbar-title>Dashboard</v-toolbar-title>
  <v-spacer></v-spacer>
  <span class="hidden-sm-and-down" v-if="$store.getters.getAdmin">Olá, {{$helper.firstName($store.getters.getAdmin.nome)}}</span>
  <v-icon class="hidden-sm-and-up">person</v-icon>
  <v-btn icon @click="logout">
    <v-icon>power_settings_new</v-icon>
  </v-btn>
</v-app-bar>

<v-main>
  <v-container
  class="fill-height"
  fluid
  >
  <router-view></router-view>
  <!-- <v-col class="text-center">
    <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn
        :href="source"
        icon
        large
        target="_blank"
        v-on="on"
        >
        <v-icon large>mdi-code-tags</v-icon>
      </v-btn>
    </template>
    <span>Source</span>
  </v-tooltip>
</v-col> -->
</v-container>
</v-main>
<v-footer
color="indigo"
app
>
<span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
</v-footer>
</v-app>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import Footer from "../components/core/Footer";
  import Overlay from "../components/shared/Overlay";
  import Snackbar from "../components/shared/Snackbar"; 
  
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    name: 'Home',
    components: {
      HelloWorld
    },
    components: {
      Footer,
      Overlay,
      Snackbar
    },
    methods: {
      logout() {
        sessionStorage.clear();
        this.$router.push({ name: "login" });
        this.$store.commit("setUser", null);
        location.reload();
      }
    },
    created() {
      // let admin = sessionStorage.getItem('admin');
      // if(!admin){
      //   if(this.$route.name != 'login'){
      //     sessionStorage.redirectTo = window.location.href
      //   }
      //   this.$router.push({ name: "login" });
      // }
    },
    
  }
</script>
