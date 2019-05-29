import React, { Component } from 'react';
import ChatroomsContainer   from './ChatroomsContainer';
import MessagesContainer    from './MessagesContainer';
import UsersContainer       from '../auth/UsersContainer';
import { withRouter}        from 'react-router-dom'

class MainContainer extends Component {

  state = {
    chatrooms: [],
	  messages: [],
	  users: [],
	  currentChatRoom: null
  };

  componentDidMount() {
    if (!this.props.currentUser && !this.props.fetching) {
      this.props.history.push("/")
    } else {
      fetch('http://localhost:3000/chatrooms')
      .then(r => r.json())
      .then(data => this.setState({

        chatrooms: data,
        messages: data[0].messages,
        users: data[0].usersInChat
      }))
    }
  }

	renderMessage = message => {
    console.log("render message is running");
		this.setState(prevState => {
			return {
				messages: [...prevState.messages, message]
			};
		});
	};

  addNewMessage = (newMessage) => {
  	let formData = {
  		content: newMessage,
		  user_id: this.props.currentUser.id,
		  chatroom_id: 1
	  };

	  let configObj = {
  		method: "POST",
		  headers: {
  			"Content-Type": "application/json",
			  "Accept": "application/json"
		  },
		  body: JSON.stringify(formData)
	  };

	  fetch("http://localhost:3000/messages", configObj)
		  .catch(error => {
		  	alert(error.message);
		  	console.log('ERROR', error.message)
		  })
  };

  render() {
    return (
      <div id={'main-container'} className="ui internally celled grid comp-container">
        <div className="row">
          <ChatroomsContainer />
          <MessagesContainer messages={this.state.messages} addNewMessage={this.addNewMessage} renderMessage={this.renderMessage}/>
          <UsersContainer users={this.state.users}/>
        </div>
      </div>
    )
  }
}

export default withRouter(MainContainer);
