<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="posts"
      sort-by="name"
      class="elevation-1"
      :items-per-page="5"
      @click:row="serverPage"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>
            Post List
            <span v-if="tagname" class="body-1 font-italic ml-3"
              >(with {{ tagname }} tagged)</span
            >
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click.stop="dialogOpen('create', {})"
            >New Post</v-btn
          >
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <!-- <template v-slot:item.actions="{ item }"> -->
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="fetchPostList"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "제목", value: "title" },
      { text: "요약", value: "description" },
      { text: "수정일", value: "modify_dt" },
      { text: "작성자", value: "owner" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    posts: [],
    tagname: '',
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    const params = new URL(location).searchParams;
    this.tagname = params.get("tagname");
    this.fetchPostList();
  },

  methods: {
    fetchPostList() {
      console.log("fetchPostList()...", this.tagname);

      let getUrl = "";
      if (this.tagname) getUrl = `/api/post/list/?tagname=${this.tagname}`;
      else getUrl = "/api/post/list/";
      axios
        .get(getUrl)
        .then((res) => {
          // 화살표 함수를 사용해야 this가 에러가 안난다
          console.log("POST LIST GET RES", res);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log("POST LIST GET ERR>RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    serverPage(item){
      console.log("serverPage()...", item);
      location.href = `/blog/post/${item.id}/`;
    },

    editItem(item) {
      this.editedIndex = this.posts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.posts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped>
.v-data-table >>> tbody > tr  {
  cursor: pointer;
}
</style>