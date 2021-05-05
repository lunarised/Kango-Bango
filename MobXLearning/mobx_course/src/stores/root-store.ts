import DataStore from "./data/data-store";

class RootStore{
    dataStore: DataStore;
    uiStore: UiStore;

    constructor(){
        this.dataStore = new DataStore(this);
        this.uiStore = new UiStore(this);
    }
}