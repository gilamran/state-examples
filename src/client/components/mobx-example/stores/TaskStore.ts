import { action, makeObservable, observable } from 'mobx';

export class TaskStore {
  @observable public id: number;
  @observable public isCompleted: boolean;
  @observable public todo: string;

  constructor(todo: string) {
    this.id = Math.random();
    this.isCompleted = false;
    this.todo = todo;
    makeObservable(this);
  }

  @action.bound
  public toggleCompletion() {
    this.isCompleted = !this.isCompleted;
  }
}
