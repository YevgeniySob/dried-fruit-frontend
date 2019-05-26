import React, { Component, Fragment } from 'react';
import { Link }             from 'react-router-dom';
import { withRouter}        from 'react-router-dom'

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
          this.props.history.push("/chatrooms")
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

  handleLogOut = () => {
    this.props.history.push("/");
    this.props.logOut();
  }

  render() {

    return (
      <div className="inline fields">
        { !this.props.currentUser ?
          (
            <Fragment>
            <div className="field">

              <input
                onChange={this.handleChange}
                value={this.state.fields.username}
                type="text"
                name="username"
                placeholder="User Name"
              />
            </div>
            <div className="field">
              <input
                onChange={this.handleChange}
                value={this.state.fields.password}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="field">
              <button className="ui green button" onClick={this.handleSubmit}>Log in</button>
            </div>
            <div className="field">
              <button className="ui green button">Sign up</button>
            </div>
          </Fragment>
          )
          :
          (
            <div className="field">
              <button className="ui green button" onClick={this.handleLogOut}>Logout</button>
            </div>
          )



        }


      </div>

    )
  }
}

export default withRouter(LoginContainer);
// export default LoginContainer;