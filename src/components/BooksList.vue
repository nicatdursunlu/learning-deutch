<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-container fluid>
          <v-layout row>
            <v-flex xs7 md8>
              <v-text-field label="Search" v-model="searchTerm"/>
            </v-flex>
            <v-flex xs5 md4>
              <v-select label="Level" :items="levels" multiple/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex v-for="book in filteredBooks" :key="book.id" xs12 sm10 md8 offset-sm1 offset-md2>
       <BooksListItem :book="book" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BooksListItem from "@/components/BooksListItem";

export default {
  components: {
    BooksListItem
  },
  data: () => ({
    searchTerm: null,
    level: [],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
  }),
  computed: {
    books() {
      return this.$store.getters.getBooks
    },
    filteredBooks() {
      let books = this.books
      if (this.searchTerm) {
        books = books.filter(book =>
            book.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0
            || book.description.toLowerCase().indexOf(this.searchTerm.toLowerCase()) >= 0)
      }
      if (this.level.length) {
        books = books.filter(book => this.level.filter((val) => book.level.indexOf(val) !== -1).length > 0)
      }
      return books
    }
  },
}
</script>

<style scoped>

</style>