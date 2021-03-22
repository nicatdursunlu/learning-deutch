<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign in</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-alert
                :value="error"
                border="bottom"
                color="pink darken-1"
                dark
            >
              {{ error }}
            </v-alert>
            <v-form v-model="valid">
              <v-text-field name="login" label="E-mail" type="email" v-model="email" required :rules="emailRules" />
              <v-text-field
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  v-model="password"
                  required
                  :rules="passwordRules"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn @click.prevent="signin" class="primary" :disabled="processing || !valid">Sign in</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
    valid: false,
    emailRules: [
      (v) => !!v || "Please write your email",
      (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Wrong email"
    ],
    passwordRules: [
      (v) => !!v || "Please write password",
      (v) => (v && v.length >= 6) || "Password is so short - minimum 6 symbols"
    ]
  }),
  computed: {
    error() {
      return this.$store.getters.getError
    },
    processing() {
      return this.$store.getters.getProcessing
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated
    }
  },
  watch: {
    isUserAuthenticated(val) {
      if (val) {
        this.$router.push("/")
      }
    }
  },
  methods: {
    signin() {
      this.$store.dispatch("SIGNIN", {email: this.email, password: this.password})
    }
  }
}
</script>

<style scoped>

</style>