
import './styles.css';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import NavBar from './navbar';
import LearningUnitDashboard from '../../features/learningUnits/dashboard/learningUnitsDashboard';
import { observer } from 'mobx-react-lite';
import { Route } from 'react-router-dom';
import HomePage from '../../features/learningUnits/home/HomePage';
import LieDetector from '../../features/learningUnits/lieDetector/LieDetector';
import RandomQuiz from '../../features/learningUnits/quiz/randomQuiz';
import LearningUnitDetails from '../../features/learningUnits/details/learningUnitDetails';

function App() {


  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '3em' }} >
              <Route exact path='/learningUnits' component={LearningUnitDashboard} />
              <Route path='/learningUnits/:id' component={LearningUnitDetails} />
              <Route path='/lieDetector' component={LieDetector} />
              <Route path='/randomQuiz' component={RandomQuiz} />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
