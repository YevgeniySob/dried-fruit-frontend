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
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token) {
      fetch("http://localhost:3000/current_user", {
        headers: {
          Authenticate: token
        }
      })
        .then(res => res.json())
        .then(user => {
          if (!user.error) {
            this.setState({currentUser: user});
          }
          // need to finish with the case that the user
          // DOES exist
        })
    }
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
    localStorage.setItem("token", user.token);
    this.setState({currentUser: user})
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
      </React.Fragment>
    )
  }
}

export default App;
