export default class DataStore{
    todoStore: TodoStore;

    constructor(rootStore: RootStore){
        this.todoStore = new TodoStore(rootStore)
    }
}