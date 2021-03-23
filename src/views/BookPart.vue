<template>
  <v-container grid-list-md v-if="part">
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <!--        Content-->
        <BookPartContent :part="part"/>
      </v-flex>
      <v-flex xs12 sm10 offset-sm1>
        <!--        Words-->
        <BookPartWords :words="part.words"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BookPartContent from "@/components/BookPartContent";
import BookPartWords from "@/components/BookPartWords";

export default {
  components: {
    BookPartContent,
    BookPartWords
  },
  props: {
    bookId: {
      type: String,
      required: true
    },
    partId: {
      type: String,
      required: true
    },
  },
  computed: {
    part() {
      // let val = this.$store.getters.getParts.find(book => book.bookId === this.bookId && book.bookPartId === this.partId)
      // return val;
      let val = this.$store.getters.getParts.find(b => b.bookPartId === this.partId)
      return val;
    }
  }
}
</script>

<style scoped>

</style>