import { createContext, useContext } from "react";
import LearningUnitStore from "./learningUnitStore";

interface Store {
    learningUnitStore: LearningUnitStore
}

// object of type store with a property corresponding to a new instance of LearningUnitStore
export const store: Store = {
    learningUnitStore: new LearningUnitStore()
}

export const StoreContext = createContext(store);

//simple react hook, allows us to use the store inside our components
export function useStore() {
    return useContext(StoreContext);
}