import { observable, makeObservable, action } from 'mobx';
import { TasksStore } from './TasksStore';
import { UsersStore } from './UsersStore';

export interface IProject {
  id: number;
  name: string;
  tasks: TasksStore;
}

export class ProjectsStore {
  @observable public projects: IProject[] = [];

  constructor(private usersStore: UsersStore) {
    makeObservable(this);
  }

  @action.bound
  public addProject(name: string) {
    const tasks = new TasksStore();
    const id = Math.random();
    this.projects.push({ id, name, tasks });
  }

  @action.bound
  public removeProject(id: number) {
    this.projects = this.projects.filter((task) => task.id !== id);
    this.usersStore.users.forEach((user) => {
      if (user.assignedProjects.includes(id)) {
        user.unassignProject(id);
      }
    });
  }
}
