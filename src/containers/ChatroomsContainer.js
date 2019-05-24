import React , { Component } from 'react';
import ChatroomList from '../components/ChatroomList';

class ChatroomsContainer extends Component {

  render() {
    return (
      <div className="three wide column" id="chroom-panel">
      <p>ChatroomsContainer</p>
      <ChatroomList />
      </div>
    )
  }
}

export default ChatroomsContainer;
