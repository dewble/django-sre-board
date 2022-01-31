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
        <v-icon small class="mr-2" @click.stop="dialogOpen('update', item)"
          >mdi-pencil</v-icon
        >
        <v-icon small @click.stop="deletePost(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="fetchPostList">Reset</v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-form id="post-form" ref="postForm">
            <v-text-field
              label="ID"
              name="id"
              v-model="editedItem.id"
              readonly
            ></v-text-field>
            <v-text-field
              label="TITLE"
              name="title"
              v-model="editedItem.title"
            ></v-text-field>
            <v-text-field
              label="DESCRIPTION"
              name="description"
              v-model="editedItem.description"
            ></v-text-field>
            <v-textarea
              outlined
              label="CONTENT"
              name="content"
              v-model="editedItem.content"
            ></v-textarea>
            <v-text-field
              label="OWNER"
              name="owner"
              v-model="editedItem.owner"
              readonly
            ></v-text-field>
            <v-text-field
              label="TAGS"
              name="tags"
              v-model="editedItem.tags"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    tagname: "",
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
    actionKind: '',
  }),

  computed: {
    formTitle() {
      // return this.editedIndex === -1 ? "New Item" : "Update Item";
      if (this.actionKind === 'create') return 'New Item';
      else return 'Update Item';
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

    serverPage(item) {
      console.log("serverPage()...", item);
      location.href = `/blog/post/${item.id}/`;
    },

    dialogOpen(actionKind, item) {
      console.log("dialogopen()...", actionKind, item);
      this.actionKind = actionKind;
      if (actionKind === "create") {
        this.editedIndex = -1;
        this.editedItem = {};
      } else {
        this.editedIndex = this.posts.indexOf(item);
        this.editedItem = Object.assign({}, item);
      }
      this.dialog = true;
    },

    cancel() {
      console.log("cancel()...");
      this.dialog = false;
    },

    save() {
      console.log("cancel()...");
      this.dialog = false;
    },

  },
};
</script>

<style scoped>
.v-data-table >>> tbody > tr {
  cursor: pointer;
}
</style>