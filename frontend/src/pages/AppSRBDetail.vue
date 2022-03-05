<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main>
      <HelloWorld />
    </v-main>

    <!-- footer -->
    <v-footer app>
      <span>&copy; 2022 Jongmin Han</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue"
import SRBDetail from "../components/SRBDetail.vue";

export default {
  components: { MainMenu ,SRBDetail },
  data: () => ({
    // drawer: null,
    // items: [
    //   { title: "Dashboard", icon: "mdi-view-dashboard" },
    //   { title: "Photos", icon: "mdi-image" },
    //   { title: "About", icon: "mdi-help-box" },
    // ],
  }),
};
</script>