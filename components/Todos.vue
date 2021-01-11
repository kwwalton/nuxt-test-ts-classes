<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const todosStore = namespace('modules/todos')

@Component
export default class Todos extends Vue {
  // store state
  @todosStore.State
  todos!: any

  // store actions
  @todosStore.Action
  callTodos!: () => Promise<any>

  beforeMount() {
    this.callTodos()
  }
}
</script>
