import { observable, makeObservable, action } from 'mobx';
import TasksStore from './TasksStore';

export interface IProject {
    id: number;
    name: string;
    tasks: TasksStore;
}

class ProjectsStore {
    @observable public projects: IProject[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    public addProject(name: string) {
        const tasks = new TasksStore();
        this.projects.push({ id: this.projects.length + 1, name, tasks });
    }

    @action
    public removeProject(id: number) {
        this.projects = this.projects.filter((task) => task.id !== id);
    }
}

export default ProjectsStore;
