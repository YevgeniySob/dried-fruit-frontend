import React, { Component } from 'react';
import MessageList from '../components/MessageList'

class MessagesContainer extends Component {

  render() {
    return (
      <div className="ten wide column" id="msg-panel">
        <p>MessagesContainer</p>
        <MessageList />
      </div>
    )
  }
}

export default MessagesContainer;
