
import { action,  computed,  makeObservable, observable, reaction, when } from "mobx";


let runningID = 0;



class ToDo{
    id: number;
    @observable
    name: string
    @observable
    isCompleted: boolean;

    private disposer: () => void;

    constructor( name: string){
        makeObservable(this);
        this.id = runningID++
        this.name = name;
        this.isCompleted =false;
        this.disposer = reaction(
            ()=> this.isCompleted,
            ()=> console.log(`${this.name} changed to ${this.isCompleted ? "competed" : "incomplete"}`)
        )
    }

    @action
    updateName(newName: string){
        this.name = newName;
    }

    @action
    updateCompletion(){
        this.isCompleted = !this.isCompleted;
    }
    dispose(){
        this.disposer();
    }
}

class ToDoList{
    @observable
    toDoList: ToDo[] = [];

    constructor(){
        makeObservable(this); 

        reaction(
            () => this.toDoList.length,
            () => {
                console.log(
                    `Total: ${this.toDoList.length}, Completed: ${this.Completed.length} InComplete: ${this.NotCompleted.length}`
                );
            }
        )
        
        when(
            () => this.toDoList.length > 10&& this.toDoList.every(toDo => toDo.isCompleted === true),
            () => console.log("all tasks are done!")
        )
        
    }
    @action
    addToDo(name: string){
        this.toDoList.push(new ToDo(name))
    }
    @action
    removeToDo(name: string){
        const toDoToRemove = this.toDoList.find(todo => todo.name === name);
        if (toDoToRemove){
            toDoToRemove.dispose()
            const toDoIndex = this.toDoList.indexOf(toDoToRemove);
            this.toDoList.splice(toDoIndex, 1);
        }
    }
    @computed
    get Completed(){
        return this.toDoList.filter(toDo => toDo.isCompleted === true);
    }
    @computed
    get NotCompleted(){
        return this.toDoList.filter(toDo => toDo.isCompleted === false);
    }

}

const toDoList = new ToDoList();
toDoList.addToDo("smellson");
