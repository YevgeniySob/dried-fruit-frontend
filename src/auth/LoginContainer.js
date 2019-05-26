import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter} from 'react-router-dom'

const initialState = {
  error: null,
  fields: {
    username: '',
    password: ''
  }
};

class LoginContainer extends Component {

  state = initialState;

  handleSubmit = e => {
    e.preventDefault();
    this.setState(initialState)
    fetch('http://localhost:3000/auth', {
      method: "POST",
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    })
      .then(r => r.json())
      .then(userData => {
        if (userData.error) {
          this.setState({
            error: true
          })
        } else {
          this.props.handleLogInSubmission(userData);
          this.setState({ currentUser: userData })
        }
      })
  };

  handleChange = e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value
      }
    })
  };

  render() {
    return (
      <div className="ui container form-container">
        <div className="ui internally celled grid">
          <div className="row">
            <div className="eight wide column">
              <h1 class="ui header">Login</h1>
              <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label>Username</label>
                  <input onChange={this.handleChange} value={this.state.fields.username} type="text" name="username" placeholder="User Name" />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input onChange={this.handleChange} value={this.state.fields.password} type="password" name="password" placeholder="Password"/>
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

export default withRouter(LoginContainer);
