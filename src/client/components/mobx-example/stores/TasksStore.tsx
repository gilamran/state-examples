import { action, makeObservable, observable } from "mobx";

export interface ITask {
    id: number;
    isCompleted: boolean;
    todo: string;
}

class TasksStore {
    @observable public tasks: ITask[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    public addTask(todo: string) {
        this.tasks.push({ id: this.tasks.length + 1, todo, isCompleted: false });
    }

    @action
    public removeTask(id: number) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
    }

    @action
    public toggleTaskCompletion(id: number) {
        const task = this.tasks.find((t) => t.id === id);
        if (task) {
            task.isCompleted = !task.isCompleted;
        }
    }
}

export default TasksStore;
