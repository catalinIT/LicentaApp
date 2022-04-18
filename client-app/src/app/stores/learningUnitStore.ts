import { makeObservable, observable } from "mobx";

export default class LearningUnitStore {
    title = 'bla bla enchilada';

    constructor() {
        makeObservable(this, {
            title: observable
        })
    }
}