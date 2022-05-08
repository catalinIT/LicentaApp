import { LUComment } from "./comment";
import { UnitContent } from "./unitContent";

export interface LearningUnit {
    id: string;
    title: string;
    isFavorite: boolean;
    unitContent: UnitContent;
    category?: string;
    comments?: LUComment [];
}
