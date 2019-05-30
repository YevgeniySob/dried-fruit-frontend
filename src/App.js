import React, {Component} from 'react';
import { Route, Switch }  from 'react-router-dom';
import './App.css';

import Particles from 'react-particles-js';

import MainContainer   from './containers/MainContainer';
import Navbar          from './components/Navbar';
import SignupContainer from './auth/SignupContainer';


class App extends Component {

  state = {
    currentUser: null,
    fetching: true,
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
            this.setState({
              currentUser: user,
              fetching: false
            });
          }
          // need to finish
        })
    }
  }

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({currentUser: null});
  };

  handleLogInSubmission = user  => {

    console.log('USER response', user);
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
        <Switch>
          <Route path="/chatrooms" render={() => <MainContainer currentUser={this.state.currentUser} fetching={this.state.fetching}/>} />
          <Route path="/signup" component={SignupContainer}/>
          <Route path="/" render={() => <Particles
            params={{
              particles: {
                shape: {
                  type: 'images',
                  images: [
                    {src: 'path/to/first/image.svg', height: 20, width: 20},
                    {src: 'path/to/second/image.jpg', height: 20, width: 20},
                  ]
                }
              }
            }}
          />} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
