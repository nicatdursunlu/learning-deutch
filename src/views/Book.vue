<template>
  <v-container v-if="book" grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <BookDetails :book="book"/>
      </v-flex>
      <v-flex v-for="part in book.parts" :key="part.id" xs12 sm10 offset-sm1>
        <BookPartListItem :part="part" :bookId="book.id"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookDetails from "@/components/BookDetails";
import BookPartListItem from "@/components/BookPartListItem";

export default {
  components: {
    BookDetails,
    BookPartListItem
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    book() {
      return this.$store.getters.getBooks.find(book => book.id === this.id)
    }
  }
}
</script>

<style scoped>

</style>