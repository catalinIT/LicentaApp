import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

// trasform the error itself into an observable
export default class CommonStore {
    error: ServerError | null = null;
    token: string | null = window.localStorage.getItem("jwt");
    appLoaded = false;

    // inside the constructor we use a reaction to adapt at the local storage value change
    // 1st param - to what value change are we reacting to
    // 2nd param - cover the 2 possible scenarios that trigger a reaction
    // the defined reaction runs only when there's a change regarding our token
    constructor() {
        makeAutoObservable(this);

        reaction(
            () => this.token,
            token => {
                if (token) {
                    window.localStorage.setItem('jwt', token)
                } else {
                    window.localStorage.removeItem('jwt');
                }
            }
        )
    }

    setServerError = (error: ServerError) => {
        this.error = error;
    }

    // if there is an emmited token, we're going to store it on the browser's local storage
    setToken = (token: string | null) => {
        this.token = token;
    }

    setAppLoaded = () => {
        this.appLoaded = true;
    }
}