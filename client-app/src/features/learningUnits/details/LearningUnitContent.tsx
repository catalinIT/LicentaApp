import React from "react";
import { LearningUnit } from "../../../app/models/learningUnit";

interface Props {
    learningUnit: LearningUnit
}

export default function LearningUnitContent({learningUnit}: Props) {
    return (
        <div className="learningUnitContent">
            {learningUnit.unitContent.content}
        </div>
    )
}