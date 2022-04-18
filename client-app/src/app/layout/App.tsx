import React, { useEffect, useState } from 'react';
import './styles.css';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import { LearningUnit } from '../models/learningUnit';
import NavBar from './navbar';
import ActivityDashboard from '../../features/learningUnits/dashboard/learningUnitsDashboard';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const {learningUnitStore} = useStore();

  useEffect(() => {
    learningUnitStore.loadLearningUnits()
  }, [learningUnitStore]);


  if(learningUnitStore.loadingInitial) return <LoadingComponent/>

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }} >
        <ActivityDashboard
          learningUnits={learningUnitStore.learningUnits}
        />
      </Container>
    </>
  );
}

export default observer(App);
