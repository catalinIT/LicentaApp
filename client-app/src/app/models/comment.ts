import { Interface } from "readline";
import { LearningUnit } from "./learningUnit";
import { User } from "./user";

export interface LUComment {
    id?: string;
    user?: User | null;
    learningUnitId?: string;
    learningUnit?: LearningUnit;
    content?: string;
    createdAt?: Date;
}
