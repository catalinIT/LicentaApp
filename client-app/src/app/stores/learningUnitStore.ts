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
        this.loadingInitial = true;
        try {
            const learningUnits = await agent.LearningUnits.list();
            this.learningUnits = [];
            learningUnits.forEach(learningUnit => {
                this.learningUnits.push(learningUnit);
            })
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    // no need to extra load from the api
    loadLearningUnit = async (id: string) => {
        let learningUnit = this.getLearningUnit(id);
        if (learningUnit) {
            this.selectedLearningUnit = learningUnit;
        } else {
            this.loadingInitial = true;
            try {
                learningUnit = await agent.LearningUnits.details(id);
                let learningUnitIndex = this.learningUnits.findIndex(l => l.id === learningUnit?.id);
                this.learningUnits[learningUnitIndex] = learningUnit;
                this.selectedLearningUnit = learningUnit;
                this.setLoadingInitial(false)
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    private getLearningUnit = (id: string) => {
        return this.learningUnits.find(l => l.id === id);
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
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