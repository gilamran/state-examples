import { action, makeObservable, observable } from 'mobx';
import { TaskStore } from './TaskStore';

export class TasksStore {
  @observable public tasks: TaskStore[] = [];

  constructor() {
    makeObservable(this);
  }

  @action.bound
  public addTask(todo: string) {
    const task = new TaskStore(todo);
    this.tasks.push(task);
  }

  @action.bound
  public removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
