import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import LearningUnitStore from "./learningUnitStore";

interface Store {
    learningUnitStore: LearningUnitStore;
    commonStore: CommonStore;
}

// object of type store with a property corresponding to a new instance of LearningUnitStore
export const store: Store = {
    learningUnitStore: new LearningUnitStore(),
    commonStore: new CommonStore()
}

export const StoreContext = createContext(store);

//simple react hook, allows us to use the store inside our components
export function useStore() {
    return useContext(StoreContext);
}