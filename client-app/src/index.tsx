import React from 'react';
import ReactDOM from 'react-dom';
import './app/layout/styles.css';
import App from './app/layout/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './app/stores/store';
import {  Router } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {createBrowserHistory} from 'history';
// with BrowserRouter, we could use the history object inside components and within hooks, however this is how we enable its usage elsewhere as well
export const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <App />
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
