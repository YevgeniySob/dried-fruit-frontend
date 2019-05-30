import React , { Component, Fragment } from 'react';
import ChatroomList from '../components/ChatroomList';
import { ActionCableConsumer } from 'react-actioncable-provider';

class ChatroomsContainer extends Component {

  renderChatNames = () => {
    return this.props.chatRooms.map((chat, idx) => {
      return <ChatroomList changeChat={this.props.changeChat} key={idx} chat={chat}/>
    })
  };

  render() {
    return (
      <Fragment>
        <ActionCableConsumer
          channel={{channel: "ChatroomChannel", id: this.props.chat.id}}
          onReceived={(chat) => {
            console.log('chat was received', chat);
            this.props.changeChat(chat)
          }}
        />
        <div className="three wide column" id="chroom-panel">
          <h4>Chatrooms</h4>
          {this.renderChatNames()}
        </div>
      </Fragment>
    )
  }
}

export default ChatroomsContainer;
