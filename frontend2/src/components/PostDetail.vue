<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="10">
        <h1>{{ post.title }}</h1>
        <p>{{ post.modify_dt}}, 작성자 : {{ post.owner }}</p>
      </v-col>
    </v-row>

    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" lg="7">
        <v-card class="pa-2" outlined tile>
          <p style="white-space: pre-wrap;">{{ post.content }}</p>
          <div>
            <strong>TAGs: </strong>
            <v-chip class="ma-2" color="" outlined v-for="(tag, index) in post.tags" :key="index"> {{ tag }} </v-chip>
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
            <v-avatar left class="green darken-4"> 1 </v-avatar>
            django
          </v-chip>
          <v-chip class="ma-2" color="green" text-color="white">
            <v-avatar left class="green darken-4"> 1 </v-avatar>
            vue.js
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    post: {},
  }),

  created() {
    console.log("created()...");
    this.fetchPostDetail();
  },

  methods: {
    fetchPostDetail() {
      console.log("fetchPostDetail()...");
      axios
        .get("/api/post/2/")
        .then((res) => {
          console.log("POST DETAIL GET RES", res);
          this.post = res.data;
        })
        .catch((err) => {
          console.log("POST DETAIL GET ERR>.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
  },
};
</script>
