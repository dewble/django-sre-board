<template>
  <div>
    <!-- drawer -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- app-bar -->
    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue.js + Django CRUD Board</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="/">HOME</v-btn>
      <v-btn text href="/blog/post/list">Blog</v-btn>
      <v-btn text href="/admin">Admin</v-btn>

      <v-btn text href="/post_list.html">POST LIST</v-btn>
      <v-btn text href="/post_detail.html">POST Detail</v-btn>

      <v-spacer></v-spacer>

      <v-menu offset-y left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
            Annoymous
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="dialog = true">
          <!-- <v-list-item @click.stop="dialog = true"> -->
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Password change</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- dialog -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>

        </v-toolbar>

        <v-card-text>
          <v-form>
            <v-text-field
              prepend-icon="mdi-account"
              name="login"
              label="Login"
              type="text"
            ></v-text-field>
            <v-text-field
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="grey" @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" class="mr-5" @click="dialog = false">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    dialog: false,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
  }),
};
</script>

<style>
</style>