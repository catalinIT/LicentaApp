import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import { FaAirbnb } from "react-icons/fa";
import { LearningUnit } from '../models/learningUnit';
function App() {

  const [learningUnits, setLearningUnits] = useState<LearningUnit[]>([]);

  useEffect(() => {
    axios.get<LearningUnit[]>('http://localhost:5000/api/learningUnits').then(response => {
      console.log(response);
      setLearningUnits(response.data);
    })
  }, []);


  return (

    <div>
      <div>
        <FaAirbnb /> <Header as='h1' content='Learning Units' />
      </div>
      <List>
        {learningUnits.map(learningUnit => (
          <List.Item key={learningUnit.id}>
            {learningUnit.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
