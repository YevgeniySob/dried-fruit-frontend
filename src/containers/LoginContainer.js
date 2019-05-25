import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginContainer extends Component {

  render() {
    return (
      <div className="ui container form-container">
        <div className="ui internally celled grid">
          <div className="row">
            <div className="eight wide column">
              <h1 class="ui header">Login</h1>
              <form className="ui form">
                <div className="field">
                  <label>Username</label>
                  <input type="text" name="username" placeholder="User Name" />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
                <Link to="signup"><button className="ui button">Sign Up</button></Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginContainer
