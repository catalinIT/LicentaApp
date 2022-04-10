import React from "react";
import { Grid, List } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import LearningUnitList from "./learningUnitList";

interface Props {
    learningUnits: LearningUnit[];
}

export default function ActivityDashboard({learningUnits}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <LearningUnitList learningUnits={learningUnits} />
            </Grid.Column>
        </Grid>
    )
}