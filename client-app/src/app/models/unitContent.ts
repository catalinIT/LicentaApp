import { LearningUnit } from "./learningUnit";

export interface UnitContent {
    learningUnitId: string;
    id: string;
    headline: string;
    content: string;
    category: number;
    learningUnit: LearningUnit; 
}
