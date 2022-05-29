import { createContext, useContext } from "react";
import CommentStore from "./commentStore";
import CommonStore from "./commonStore";
import LearningUnitStore from "./learningUnitStore";
import ModalStore from "./modalStore";
import QuestionStore from "./questionStore";
import UserStore from "./userStore";

interface Store {
    learningUnitStore: LearningUnitStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModalStore;
    commentStore: CommentStore;
    questionStore: QuestionStore;
}

// object of type store with a property corresponding to a new instance of LearningUnitStore
export const store: Store = {
    learningUnitStore: new LearningUnitStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModalStore(),
    commentStore: new CommentStore(),
    questionStore: new QuestionStore()
}

export const StoreContext = createContext(store);

//simple react hook, allows us to use the store inside our components
export function useStore() {
    return useContext(StoreContext);
}