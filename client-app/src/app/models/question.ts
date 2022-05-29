import React from "react";
import { AnswerObject } from "./asnwer";


export interface Question {
    id: string;
    difficulty: number;
    correctAnswer: string;
    question: string;
    incorrectAnswers: AnswerObject[];
}


export class QuestionState  {
    question: Question 
    answers: string[]
    constructor(question: Question, answers: string[]) {  
        this.question = question;  
        this.answers = answers;  
       }  
};