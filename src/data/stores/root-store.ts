import {makeAutoObservable} from "mobx";

export class RootStore {
    private _counter: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get counter(){
        return this._counter;
    }

    setCounter = (counter: number) => {
        this._counter = counter;
    }
}
