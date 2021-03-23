<template>
  <div>
    <v-card color="accent" class="white--text">
      <v-card-title primary-title class="headline">{{ part.title }}</v-card-title>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" flat :to="{ name: 'BookPart', params: { bookId, partId: part.id} }">Open</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true
    },

    bookId: {
      required: true
    }
  }
}
</script>

<style scoped>

</style>