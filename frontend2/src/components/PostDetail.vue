<template>
    <v-container>

      <v-row align="center" justify="center">
        <v-col cols="12" lg="10">
          <h1>Post title</h1>
          <p>2022-01-19 작성자: 한종민</p>
        </v-col>
      </v-row>

      <v-row align="start" justify="center">
        <v-col cols="12" sm="8" lg="7">
          <v-card class="pa-2" outlined tile>
            <p>
              Create CRUD Board with <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              vue.js and django
            </p>
            <div>
              <strong>TAGs: </strong>
              <v-chip class="ma-2" color="" outlined>
                django
              </v-chip>
              <v-chip class="ma-2" color="" outlined>
                vue.js
              </v-chip>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" lg="3">
          <v-card class="pa-2 mb-5" tile>
            <p>prev post</p>
            <h2>Previous title here</h2>
          </v-card>
          <v-card class="pa-2 mb-5" tile>
            <p>next post</p>
            <h2>Next title here</h2>
          </v-card>
          <v-card class="pa-2 mb-5" tile>
            <h2>Tag cloud</h2>
            <v-chip class="ma-2" color="green" text-color="white">
              <v-avatar left class="green darken-4">
                1
              </v-avatar>
              django
            </v-chip>
            <v-chip class="ma-2" color="green" text-color="white">
              <v-avatar left class="green darken-4">
                1
              </v-avatar>
              vue.js
            </v-chip>

          </v-card>
        </v-col>
      </v-row>

    </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
};
</script>
