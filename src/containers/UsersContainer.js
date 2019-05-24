import React, { Component } from 'react';
import UserList from '../components/UserList';

class UsersContainer extends Component {

  render() {
    return (
      <div className="three wide column" id="users-panel">
        <p>UsersContainer</p>
        <UserList />
      </div>
    )
  }
}

export default UsersContainer;
