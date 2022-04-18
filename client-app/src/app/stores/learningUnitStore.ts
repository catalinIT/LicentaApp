import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { LearningUnit } from "../models/learningUnit";

export default class LearningUnitStore {
    learningUnits: LearningUnit[] = [];
    selectedLearningUnit: LearningUnit | undefined = undefined;
    loading = false;
    loadingInitial = false;
    favoriteValue = false

    constructor() {
        makeAutoObservable(this)
    }

    loadLearningUnits = async () => {
        this.setLoadingInitial(true);
        try {
            const learningUnits = await agent.LearningUnits.list();
            learningUnits.forEach(learningUnit => {
                this.learningUnits.push(learningUnit);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    
    selectLearningUnit = (id: string) => {
        this.selectedLearningUnit = this.learningUnits.find(l => l.id === id);
    }

    cancelSelectedLearningUnit = () => {
        this.selectedLearningUnit = undefined;
    }

   
    updateLearningUnitFavoriteState = async (learningUnit: LearningUnit) => {
        this.loading = true;
        try {
            learningUnit.isFavorite = !learningUnit.isFavorite;
            await agent.LearningUnits.update(learningUnit);
            runInAction(() => {
                let favoriteIndex = this.learningUnits.findIndex(l => l.id === learningUnit.id);
                this.learningUnits[favoriteIndex] = learningUnit;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}