import React, { Component } from 'react';

class SignupContainer extends Component {

  render() {
    return (
      <div className="ui container form-container">
        <div className="ui internally celled grid">
          <div className="row">
            <div className="eight wide column">
              <h1 class="ui header">Sign Up</h1>
              <form className="ui form">
                <div className="field">
                  <label>First Name</label>
                  <input type="text" name="first-name" placeholder="First Name" />
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" name="last-name" placeholder="Last Name" />
                </div>
                <div className="field">
                  <label>Username</label>
                  <input type="text" name="username" placeholder="User Name" />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password"/>
                </div>
                <div className="field">
                  <label>Photo</label>
                  <input type="text" name="image" placeholder="Image URL" />
                </div>
                <button className="ui button" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupContainer;
