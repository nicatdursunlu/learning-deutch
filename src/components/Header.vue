<template>
  <v-app>
    <v-navigation-drawer absolute temporary v-model="drawer">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app dark class="primary">
      <v-toolbar-title v-text="'Learning Deutch'"></v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
        <v-btn v-for="(item, index) in menuItems" :key="index" flat :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return [
        {
          icon: "visibility",
          title: "Read",
          route: "/books"
        },
        {
          icon: "extension",
          title: "Learn words",
          route: "/words"
        },
        {
          icon: "account_circle",
          title: "My profile",
          route: "/profile"
        },
        {
          icon: "exit_to_app",
          title: "Logout",
          route: "/logout"
        },
        {
          icon: "input",
          title: "Signin",
          route: "/signin"
        },
        {
          icon: "lock_open",
          title: "Signup",
          route: "/signup"
        },
      ]
    }
  },
  data: () => ({
    drawer: false
  })
}
</script>

<style scoped>

</style>