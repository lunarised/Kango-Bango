import {action, autorun, computed, makeObservable, observable, when} from "mobx";


class Person {
    @observable
    firstName: string
    @observable
    lastName: string;
    @observable
    age: number;
    @observable
    isAlive: boolean;
    @observable
    money: number;


    constructor(name: string, lastName: string, age: number, isAlive: boolean, money: number){
        makeObservable(this)
        this.firstName = name
        this.lastName = lastName
        this.age = age
        this.isAlive = isAlive
        this.money = money

        when(
            () => this.age > 21,
            () => this.die()
        )
    }

    @action
    updateFullName(name: string, lastName: string){
        this.firstName = name;
        this.lastName = lastName;
    }

    @action
    birthday(){
        this.age++;
    }
    @action
    die(){
        this.isAlive = false;
        console.log("Mah boi is dead");
    }

    @computed
    get euros(){
        console.log("C:")
        return this.money **2
    }
    
    @action
    withdraw(){
        this.money--;
    }


}



const newPerson = new Person ("toby", "hartigan", 21, true, 3);
console.log(newPerson);

autorun( () => {
    console.log(`Persons name is ${newPerson.firstName} ${newPerson.lastName} Dollars ${newPerson.money} Euros ${newPerson.euros}`);
})


newPerson.updateFullName("tobina", "tasset")
newPerson.birthday();
newPerson.withdraw();
newPerson.withdraw();
console.log(newPerson.euros);
console.log(newPerson.euros);
console.log(newPerson.euros);
console.log(newPerson.euros);
console.log(newPerson.euros);

newPerson.withdraw();


export {};