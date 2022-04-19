import React, { useEffect } from "react";
import LearningUnitList from "./learningUnitList";
import { Container, Row, Col } from 'react-grid-system'
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../../app/layout/LoadingComponents";

export default observer(function LearningUnitDashboard() {
    const { learningUnitStore } = useStore();
    const { loadLearningUnits, learningUnits } = learningUnitStore;

    useEffect(() => {
        if(learningUnits.length <= 1) {
            loadLearningUnits()
        }
    }, [learningUnitStore]);


    if (learningUnitStore.loadingInitial) return <LoadingComponent />

    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <LearningUnitList />
                </Col>
                <Col sm={8}>
                    <h2>Learning Units Filter</h2>
                </Col>
            </Row>
        </Container>
    )
})