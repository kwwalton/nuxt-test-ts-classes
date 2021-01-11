import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import example from '~/store/modules/example'
import Todos from '~/store/modules/todos'

// eslint-disable-next-line import/no-mutable-exports
let exampleStore: example
// eslint-disable-next-line import/no-mutable-exports
let todosStore: Todos

function initialiseStores(store: Store<any>): void {
  exampleStore = getModule(example, store)
  todosStore = getModule(Todos, store)
}

export { initialiseStores, exampleStore, todosStore }
