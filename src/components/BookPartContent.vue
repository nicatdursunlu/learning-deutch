<template>
  <v-card class="pa-2">
    <div>
      <div class="display-1">{{ part.bookTitle }}</div>
      <div class="headline">{{ part.partTitle }}</div>
      <v-divider class="black"/>
    </div>
    <div class="text-center mt-2 mb-2 primary">
      <youtube :video-id="part.youtubeId"/>
    </div>
    <div class="mt-2">
      <v-tabs v-model="tabMode" color="accent" fixed-tabs slider-color="success">
        <v-tab :key="'german'" ripple>Text with hint</v-tab>
        <v-tab :key="'sideBySide'" ripple>Parallel</v-tab>

        <v-tab-item :key="'german'">
          <div v-for="(paragraph, i) in part.content" :key="`par1${i}`">
            <span>&nbsp;&nbsp;</span>
            <span v-for="(sentence, y) in paragraph.sentences" :key="`par1${i}sen1${y}`">
              <span>{{ sentence.origText }}</span>
              <v-icon size="18" @click.prevent="toggleVisibility(i, y)">help</v-icon>
              <span v-if="getVisibilityFlag(i, y).value" class="success--text" style="font-weight: bold">
                {{ sentence.transText }}
              </span>
            </span>
          </div>
        </v-tab-item>

        <v-tab-item :key="'sideBySide'">
          <v-container>
            <v-layout row wrap v-for="(paragraph, i) in part.content" :key="`par2${i}`">
              <v-flex xs6>
                <span>&nbsp;&nbsp;</span>
                <span v-for="(sentence, y) in paragraph.sentences" :key="`par2${i}sen2${y}_orig`">
                  <span>{{ sentence.origText }}</span>
                </span>
              </v-flex>
              <v-flex xs6>
                <span>&nbsp;&nbsp;</span>
                <span v-for="(sentence, y) in paragraph.sentences" :key="`par2${i}sen2${y}_trans`">
                  <span>{{ sentence.transText }}</span>
                </span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-tab-item>

      </v-tabs>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    part: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    tabMode: 'german',
    visibilityKeys: []
  }),
  methods: {
    getVisibilityFlag(i, y) {
      return this.visibilityKeys.find(k => k.key === `${i}${y}`);
    },
    toggleVisibility(i, y) {
      let flag = this.getVisibilityFlag(i, y);
      flag.value = !flag.value
    }
  },
  created() {
    for (var i = 0; i < this.part.content, length; i++) {
      for (var y = 0; y < this.part.content[i].sentences.length; y++) {
        this.visibilityKeys.push({
          key: `${i}${y}`,
          value: false
        })
      }
    }
  },
  computed: {
    // playerWidth() {
    //   switch (this.$vuetify.breakpoint.name) {
    //     case 'xs': return 220
    //     case 'sm': return 400
    //     case 'md': return 500
    //     case 'lg': return 600
    //     case 'xl': return 800
    //   }
    // }
  }
}
</script>

<style scoped>

</style>