import { observable, makeObservable, action } from "mobx";

export interface User {
    id: number;
    name: string;
}

class UsersStore {
    @observable public users: User[] = [];

    constructor() {
        makeObservable(this);
    }

    @action
    public addUser(name: string) {
        this.users.push({ id: Math.random(), name });
    }

    @action
    public removeUser(id: number) {
        this.users = this.users.filter((user) => user.id !== id);
    }
}

export default UsersStore;
