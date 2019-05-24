import React, { Component } from 'react';
import ChatroomsContainer from './ChatroomsContainer';
import MessagesContainer from './MessagesContainer';
import UsersContainer from './UsersContainer';
class MainContainer extends Component {

  state = {
    
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="ui internally celled grid comp-container">
        <div className="row">
          <ChatroomsContainer />
          <MessagesContainer />
          <UsersContainer />
        </div>
      </div>
    )
  }
}

export default MainContainer;
