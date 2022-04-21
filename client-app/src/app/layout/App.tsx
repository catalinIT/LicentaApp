
import './styles.css';
import { Container, Header, Icon, List } from 'semantic-ui-react';
import NavBar from './navbar';
import LearningUnitDashboard from '../../features/learningUnits/dashboard/learningUnitsDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../../features/learningUnits/home/HomePage';
import LieDetector from '../../features/learningUnits/lieDetector/LieDetector';
import RandomQuiz from '../../features/learningUnits/quiz/randomQuiz';
import LearningUnitDetails from '../../features/learningUnits/details/learningUnitDetails';
import TestErrors from '../../features/learningUnits/errors/TestErrors';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/learningUnits/errors/NotFound';
import ServerError from '../../features/learningUnits/errors/ServerError';
//a toast container allows us to display toast messages from anywhere within our app
// adding the not found component in the last route we state that, any request that does not redirect the use to one of the other routes will led him to see the not found component
// surrounding our routes inside a switch component we ensure that one and only one route could be activated at one time
function App() {


  return (
    <>
      <ToastContainer position='top-center' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '3em' }} >
              <Switch>
                <Route exact path='/learningUnits' component={LearningUnitDashboard} />
                <Route path='/learningUnits/:id' component={LearningUnitDetails} />
                <Route path='/lieDetector' component={LieDetector} />
                <Route path='/randomQuiz' component={RandomQuiz} />
                <Route path='/errors' component={TestErrors} />
                <Route path='/server-errors' component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
