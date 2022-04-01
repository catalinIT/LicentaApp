import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import { FaAirbnb } from "react-icons/fa";
function App() {

  const [learningUnits, setLearningUnits] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/learningUnits').then(response => {
      console.log(response);
      setLearningUnits(response.data);
    })
  }, []);


  return (

    <div>
      <FaAirbnb /> <Header as='h1' content='Reactivities' />
      <List>
        {learningUnits.map((learningUnit: any) => (
          <List.Item key={learningUnit.id}>
            {learningUnit.title}
          </List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
