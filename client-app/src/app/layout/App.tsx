import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import { FaAirbnb } from "react-icons/fa";
import { LearningUnit } from '../models/learningUnit';
import NavBar from './navbar';
import ActivityDashboard from '../../features/learningUnits/dashboard/learningUnitsDashboard';
function App() {

  const [learningUnits, setLearningUnits] = useState<LearningUnit[]>([]);
  const [selectedLearningUnit, setSelectedLearningUnit] = useState<LearningUnit | undefined>(undefined);

  useEffect(() => {
    axios.get<LearningUnit[]>('http://localhost:5000/api/learningUnits').then(response => {
      console.log(response);
      setLearningUnits(response.data);
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
