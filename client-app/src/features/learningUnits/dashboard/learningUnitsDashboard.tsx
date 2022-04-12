import React from "react";
import { Grid, List } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import LearningUnitDetails from "../details/learningUnitDetails";
import LearningUnitList from "./learningUnitList";
import { Container, Row, Col } from 'react-grid-system'

interface Props {
    learningUnits: LearningUnit[];
    selectedLearningUnit: LearningUnit | undefined;
    selectLearningUnit: (id: string) => void;
    cancelSelectLearningUnit: () => void;
    handleSetLearningUnitFavorite: (learningUnit: LearningUnit) => void;
}

export default function ActivityDashboard({ learningUnits,
    selectedLearningUnit,
    selectLearningUnit,
    cancelSelectLearningUnit,
    handleSetLearningUnitFavorite }: Props) {
    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <LearningUnitList
                        learningUnits={learningUnits}
                        selectLearningUnit={selectLearningUnit}
                        handleSetLearningUnitFavorite={handleSetLearningUnitFavorite} />
                </Col>
                <Col sm={8}>
                    {selectedLearningUnit &&
                        <LearningUnitDetails learningUnit={selectedLearningUnit} cancelSelectLearningUnit={cancelSelectLearningUnit} />}
                </Col>
            </Row>
        </Container>
    )
}