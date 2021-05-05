import { observable } from "mobx";

class Todo{}

export default class TodoStore {
    @observable
    list: Todo[];

    private rootStore: RootStore;
    constructor(rootStore: RootStore){
        this.rootStore = rootStore;
    }
}
