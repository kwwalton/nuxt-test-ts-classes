<template>
  <div>
    <h1>{{ message }}</h1>
    <p>The count is {{ count }}</p>
    <v-btn class="mb-2" @click="incr">Add to count</v-btn>
    <br />
    <v-btn class="mb-2" @click="decr">Remove from count</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const exampleStore = namespace('modules/example')

@Component
export default class Haircut extends Vue {
  // data
  message: string = 'I got a haircut.'

  // store state
  @exampleStore.State
  count!: number

  // store actions
  @exampleStore.Action
  incr!: () => Promise<any>

  @exampleStore.Action
  decr!: () => Promise<any>
}
</script>
