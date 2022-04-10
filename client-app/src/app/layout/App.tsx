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

  useEffect(() => {
    axios.get<LearningUnit[]>('http://localhost:5000/api/learningUnits').then(response => {
      console.log(response);
      setLearningUnits(response.data);
    })
  }, []);


  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }} >
        <ActivityDashboard learningUnits={learningUnits} />
      </Container>
    </>
  );
}

export default App;
