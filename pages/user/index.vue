<template>
  <div class="user">
    <div class="title">Welcome {{ first }}</div>
    <div>
      First:
      <input type="text" />
    </div>
    <haircut />
    <todos />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class User extends Vue {
  first: string = ''

  beforeMount() {
    // Directly access the store with $store
    this.first = this.$store.state.users.info.first
  }
}
</script>
