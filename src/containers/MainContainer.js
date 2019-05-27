import React, { Component } from 'react';
import ChatroomsContainer   from './ChatroomsContainer';
import MessagesContainer    from './MessagesContainer';
import UsersContainer       from '../auth/UsersContainer';
import { withRouter}        from 'react-router-dom'

class MainContainer extends Component {

  state = {
    chatrooms: [],
	  messages: [],
	  users: []
  };

  componentDidMount() {
    // const token = localStorage.getItem("token");
    if (!this.props.currentUser) {
      // this check is insufficient
      // we also need to see if the user with that token exists

      // Checking for token could be abstracted out into seperate funciton if it
      // winds up being repeated in a lot of places
      this.props.history.push("/")
    } else {
      fetch('http://localhost:3000/chatrooms')
      .then(r => r.json())
      .then(data => this.setState({

        chatrooms: data,
        messages: data[0].messages,
        users: data[0].usersInChat
      }, () => console.log('state', this.state)))
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
		  	console.log(error.message)
		  })
  };

  render() {
  	// console.log('rendering', this.state.messages)
    return (
      <div className="ui internally celled grid comp-container">
        <div className="row">
          <ChatroomsContainer />
          <MessagesContainer messages={this.state.messages} addNewMessage={this.addNewMessage} renderMessage={this.renderMessage}/>
          <UsersContainer />
        </div>
      </div>
    )
  }
}

export default withRouter(MainContainer);
