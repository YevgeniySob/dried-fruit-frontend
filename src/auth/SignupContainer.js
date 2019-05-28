import React, { Component } from 'react';
import { withRouter}        from 'react-router-dom'

const defaultFields = {
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  image: ''
};

class SignupContainer extends Component {

  state = defaultFields;

  handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    this.props.history.push("/")

  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  render() {
    return (
      <div className="ui container form-container">
        <div className="ui internally celled grid">
          <div className="row">
            <div className="eight wide column">
              <h1 className="ui header">Sign Up</h1>
              <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label>First Name</label>
                  <input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange}/>
                </div>
                <div className="field">
                  <label>Last Name</label>
                  <input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange}/>
                </div>
                <div className="field">
                  <label>Username</label>
                  <input type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="field">
                  <label>Password</label>
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className="field">
                  <label>Photo</label>
                  <input type="text" name="image" placeholder="Image URL" value={this.state.image} onChange={this.handleChange}/>
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

export default withRouter(SignupContainer);
