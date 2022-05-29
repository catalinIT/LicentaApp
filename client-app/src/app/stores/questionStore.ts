import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { QuestionState} from "../models/question";


export default class QuestionStore {
    quizQuestions: QuestionState[] = [];
    
    constructor() {
        makeAutoObservable(this);
    }

    loadQuestions = async () => {
        try {
            const questions = await agent.Questions.list();
            runInAction(() => {
                this.quizQuestions = [];
                questions.forEach(question => {
                    const ia = question.incorrectAnswers.map(q => q.answer);
                    this.quizQuestions.push(new QuestionState(question, [...ia, question.correctAnswer]))
                })
            })
        } catch (error) {
            console.log(error);
        }
    }
}