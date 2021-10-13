import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PetList from './PetList';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './Store'
import PetDetail from './PetDetail';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <Router>
        
        <Route exact path='/pets/:id'>
          <PetDetail />
        </Route>

        <Route exact path='/' >
          <PetList />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
