import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { LearningUnit } from "../models/learningUnit";

export default class LearningUnitStore {
    learningUnits: LearningUnit[] = [];
    databaseUnits: LearningUnit[] = [];
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
            runInAction(() => {
                learningUnits.forEach(learningUnit => {
                    this.learningUnits.push(learningUnit);
                })
                this.learningUnits.forEach(learningUnit => {
                    this.databaseUnits.push(learningUnit);
                })
                this.setLoadingInitial(false);
            })
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadFavoriteLearningUnits = async () => {
        this.learningUnits = [...this.learningUnits.filter(l => l.isFavorite === true)];
    }

    setDatabaseUnits = async () => {
        this.learningUnits = this.databaseUnits;
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
                runInAction(() => {
                    if (learningUnit) {
                        let learningUnitIndex = this.learningUnits.findIndex(l => l.id === learningUnit?.id);
                        this.learningUnits[learningUnitIndex] = learningUnit;
                    }
                    this.selectedLearningUnit = learningUnit;
                    this.setLoadingInitial(false)
                })
            } catch (error) {
                console.log(error);
                runInAction(() => {
                    this.setLoadingInitial(false);
                })
            }
        }
    }

    setLearningUnit(learningUnit: LearningUnit) {
        let learningUnitIndex = this.learningUnits.findIndex(l => l.id === learningUnit?.id);
        if (learningUnitIndex) {
            this.learningUnits[learningUnitIndex] = learningUnit;
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