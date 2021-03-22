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
        <v-card color="info" class="white--text">
          <v-container fluid>
            <v-layout row class="hidden-sm-and-down">
              <v-flex xs4 md3>
                <v-img
                    src="https://webbiesworld.com/wp-content/uploads/2020/10/Harry-Potter.jpg"/>
                <div class="text-center">
                  <v-btn style="color: white" color="primary">You Tube</v-btn>
                </div>
              </v-flex>
              <v-flex xs8 md9>
                <v-card-title>
                  <div>
                    <div class="headline">{{ book.title }}</div>
                    <div>{{ book.description }}</div>
                    <v-divider class="white"/>
                    <div>Level: {{ getBookLevel(book.level) }}, {{ book.parts }} parts</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                  <div class="ml-1">
                    <span>{{ book.rating }}</span>
                    <span>({{ book.ratingsCount }})</span>
                  </div>
                  <v-spacer/>
                  <v-btn class="primary" flat>Open</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>

            <div class="hidden-md-and-up">
              <v-layout row>
                <v-flex xs4 md3>
                  <v-img
                      src="https://webbiesworld.com/wp-content/uploads/2020/10/Harry-Potter.jpg"/>
                </v-flex>
                <v-flex xs8 md9>
                  <v-card-title>
                    <div>
                      <h4 class="headline">{{ book.title }}</h4>
                      <div class="text-center">
                        <v-btn style="color: white" color="primary">You Tube</v-btn>
                      </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <div>{{ book.description }}</div>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <div>Level: {{ getBookLevel(book.level) }}, {{ book.parts }} parts</div>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-card-actions>
                    <v-rating v-model="book.rating" color="yellow" readonly dense half-increments></v-rating>
                    <div class="ml-1">
                      <span>{{ book.rating }}</span>
                      <span>({{ book.ratingsCount }})</span>
                    </div>
                    <v-spacer/>
                    <v-btn class="primary" flat>Open</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </div>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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
  methods: {
    getBookLevel(level) {
      return level.join('/')
    }
  }
}
</script>

<style scoped>

</style>