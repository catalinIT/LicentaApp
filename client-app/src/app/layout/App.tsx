import React, { useEffect, useState } from 'react';
import './styles.css';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import { LearningUnit } from '../models/learningUnit';
import NavBar from './navbar';
import ActivityDashboard from '../../features/learningUnits/dashboard/learningUnitsDashboard';
import agent from '../api/agent';
import LoadingComponent from './LoadingComponents';
import { useStore } from '../stores/store';

function App() {
  const {learningUnitStore} = useStore();

  const [learningUnits, setLearningUnits] = useState<LearningUnit[]>([]);
  const [selectedLearningUnit, setSelectedLearningUnit] = useState<LearningUnit | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.LearningUnits.list().then(response => {
      setLearningUnits(response);
      setLoading(false);
    })
  }, []);

  //scrie in licenta
  //create a function to handle the selection of an activity - function that is going to be passed down
  function handleSelectLearningUnit(id: string) {
    setSelectedLearningUnit(learningUnits.find(x => x.id === id));
  }

  function handleCancelSelectLearningUnit() {
    setSelectedLearningUnit(undefined);
  }

  function handleSetLearningUnitFavorite(learningUnit: LearningUnit) {
    setLearningUnits([...learningUnits.filter(x => x.id !== learningUnit.id), learningUnit]);
  }

  if(loading) return <LoadingComponent/>

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }} >
        <ActivityDashboard
          learningUnits={learningUnits}
          selectedLearningUnit={selectedLearningUnit}
          selectLearningUnit={handleSelectLearningUnit}
          cancelSelectLearningUnit={handleCancelSelectLearningUnit}
          handleSetLearningUnitFavorite={handleSetLearningUnitFavorite}
        />
      </Container>
    </>
  );
}

export default App;
