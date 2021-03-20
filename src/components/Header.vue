<template>
  <div>
    <v-navigation-drawer absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item v-for="(item, index) in menuItems" :key="index">
          <v-list-item-action>
            <v-icon>mdi-export-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <router-link :to="item.route">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app dark class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <router-link to="/" tag="span" style="cursor: pointer">
        <v-toolbar-title>Learning Deutch</v-toolbar-title>
      </router-link>
      <v-spacer/>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="(item, index) in menuItems" :key="index" flat :to="item.route">
          <v-icon left>mdi-export-variant</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
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