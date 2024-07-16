import { action, makeObservable, observable } from 'mobx';

export class UserStore {
  @observable public id: number;
  @observable public name: string;
  @observable public assignedProjects: number[];

  constructor(name: string) {
    this.id = Math.random();
    this.name = name;
    this.assignedProjects = [];
    makeObservable(this);
  }

  @action.bound
  public assignProject(projectId: number) {
    this.assignedProjects.push(projectId);
  }

  @action.bound
  public unassignProject(projectId: number) {
    this.assignedProjects = this.assignedProjects.filter((id) => id !== projectId);
  }
}
