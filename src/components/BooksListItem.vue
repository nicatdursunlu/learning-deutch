<template>
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
              <div>Level: {{ getBookLevel(book.level) }}, {{ book.parts.length }} parts</div>
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
            <div>Level: {{ getBookLevel(book.level) }}, {{ book.parts.length }} parts</div>
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
</template>

<script>
import * as bookHelper from '../helpers/book'

export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    getBookLevel: bookHelper.getBookLevel
  }
}
</script>

<style scoped>

</style>