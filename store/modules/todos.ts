import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { $axios } from '~/utils/api'

@Module({
  name: 'modules/todos',
  stateFactory: true,
  namespaced: true,
})
export default class Todos extends VuexModule {
  todos = []

  @Mutation
  setTodos(payload: any) {
    this.todos = payload
  }

  @Action({ rawError: true })
  async callTodos() {
    const todos = await $axios.$get('todos')
    this.context.commit('setTodos', todos)
  }
}
