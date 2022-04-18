import React from "react";
import { Grid, List } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import LearningUnitDetails from "../details/learningUnitDetails";
import LearningUnitList from "./learningUnitList";
import { Container, Row, Col } from 'react-grid-system'
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
    learningUnits: LearningUnit[];
}

export default observer(function ActivityDashboard({ learningUnits }: Props) {

    const {learningUnitStore} = useStore();
    const {selectedLearningUnit} = learningUnitStore;
    
    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <LearningUnitList
                        learningUnits={learningUnits}/>
                </Col>
                <Col sm={8}>
                    {selectedLearningUnit &&
                        <LearningUnitDetails />}
                </Col>
            </Row>
        </Container>
    )
})