<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field name="login" label="E-mail" type="email" required />
              <v-text-field id="password" name="password" label="Password" type="password" required />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="primary">Login</v-btn>
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
    password: null
  })
}
</script>

<style scoped>

</style>