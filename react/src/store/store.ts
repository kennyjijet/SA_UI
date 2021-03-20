import { observable, action, makeObservable } from 'mobx';

export class Store {
    @observable test = 'Test';
    constructor() {
        makeObservable(this);
    }
    @action setTest = (newValue: string): void => {
        this.test = newValue;
    };
}

export default new Store();
