<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ml-4">4.5 (413)</div>
      </v-row>
    </v-card-text>
    <slot></slot>
    <span>{{ message }} {{ tired }}</span>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <p>{{ exampleProperty }}</p>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve {{ numberExample }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Watch, Prop } from 'vue-property-decorator'

@Component
export default class Test extends Vue {
  @Prop({ default: 'Example' })
  exampleProperty!: string

  // data
  message: string = 'This is a message'
  someNum: number = 4
  loading: boolean = false

  // methods
  reserve(): void {
    this.message = 'message has changed'
  }

  // computed
  get tired(): string {
    return 'so tired'
  }

  get numberExample(): number {
    return this.someNum * this.someNum
  }

  // watchers
  @Watch('message')
  onPropertyChanged(value: string) {
    alert(`changed: ${value}`)
  }
}
</script>
