import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
interface UserData {
  first: string
  last: string
}

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class User extends VuexModule {
  public info: UserData = {
    first: 'Ken',
    last: 'Walton',
  }

  get fullName(): string {
    return this.info.first + ' ' + this.info.last
  }

  @Mutation
  public updateUserInfo(data: UserData) {
    this.info = { ...this.info, ...data }
  }
}
