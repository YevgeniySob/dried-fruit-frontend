import React, {Component} from 'react';
import { Route, Switch }  from 'react-router-dom';
import './App.css';

import MainContainer   from './containers/MainContainer';
import Navbar          from './components/Navbar';
import SignupContainer from './auth/SignupContainer';

class App extends Component {

  state = {
    currentUser: null,
    login: true,
    error: false
  }

  handleSignUp = () => {
    this.setState({
      login: false
    })
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({currentUser: null});
  }

  handleLogInSubmission = user  => {
    console.log('USER response', user);
    localStorage.setItem("token", user.jwt);
    this.setState({currentUser: user.user})
  };

  render() {
    console.log('App currentUser: ', this.state.currentUser)

    return (
      <React.Fragment>
        <Navbar
          handleLogInSubmission={this.handleLogInSubmission}
          currentUser={this.state.currentUser}
          logOut={this.logOut}
        />
        {/*<MainContainer />*/}
        <Switch>
          <Route path="/chatrooms" render={() => <MainContainer currentUser={this.state.currentUser}/>} />
          <Route path="/signup" component={SignupContainer}/>
          <Route path="/" component={null} />
        </Switch>
        <footer style={{height: "100px", backgroundColor: "black"}}></footer>
      </React.Fragment>
    )
  }
}

export default App;
