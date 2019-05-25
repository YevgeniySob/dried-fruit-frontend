import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import MainContainer from './containers/MainContainer';
import Navbar from './components/Navbar';
import LoginContainer from './containers/LoginContainer';
import SignupContainer from './containers/SignupContainer';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
      </Switch>
    </React.Fragment>
  )
}

export default App;
