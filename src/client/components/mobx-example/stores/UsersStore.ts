import { observable, makeObservable, action } from 'mobx';
import { UserStore } from './UserStore';

export class UsersStore {
  @observable public users: UserStore[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  public addUser(name: string) {
    const user = new UserStore(name);
    this.users.push(user);
  }

  @action.bound
  public removeUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
