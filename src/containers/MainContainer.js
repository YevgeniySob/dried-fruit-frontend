import React, {Component, Fragment} from 'react';
import ChatroomsContainer           from './ChatroomsContainer';
import MessagesContainer            from './MessagesContainer';
import UsersContainer               from '../auth/UsersContainer';
import { withRouter}                from 'react-router-dom'

class MainContainer extends Component {

  state = {
    chatrooms: [],
	  currentChatRoom: null,
	  fetching: true
  };

  changeChat = chat => {
  	this.setState({
		  currentChatRoom: chat
	  })
  };

  getInfo = (index) => {
  	console.log("chat ID: ", index)
	  if (!this.props.currentUser && !this.props.fetching) {
		  this.props.history.push("/")
	  } else {
  		console.log("FETCHING: ", this.state)
		  fetch('http://localhost:3000/chatrooms')
			  .then(r => r.json())
			  .then(data => this.setState({

				  chatrooms: data,

				  currentChatRoom: data[index],
				  // messages: data[0].messages,
				  // users: data[0].usersInChat,
				  fetching: false
			  }))
	  }
  };

  componentDidMount() {
  	if (!this.state.currentChatRoom) {
		  this.getInfo(0)
  		console.log("No Chat Room Yet: ", this.state)
	  } else {
  		console.log("Chatroom ID in CDM: ", this.state.currentChatRoom.id)
  		this.getInfo(this.state.currentChatRoom.id - 1)
  	}
  }

	renderMessage = message => {
    console.log("render message is running", message);
    // if(message.chatroom_id === this.state.currentChatRoom.id) {
	    this.setState(prevState => {
		    return {
			    ...prevState,
			    currentChatRoom: {
				    ...prevState.currentChatRoom,
				    messages: [...prevState.currentChatRoom.messages, message]
			    }
		    };
	    });
    // } else {
    // 	console.log("WRONG CHANNEL")
    // }
	};

  addNewMessage = (newMessage) => {
  	let formData = {
  		content: newMessage,
		  user_id: this.props.currentUser.id,
		  chatroom_id: this.state.currentChatRoom.id
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
	        {( !this.state.fetching && this.state.currentChatRoom) &&
	        <Fragment>
		        {console.log('what is this?', this.state.currentChatRoom)}
	          <ChatroomsContainer chatRooms={this.state.chatrooms} changeChat={this.changeChat} chat={this.state.currentChatRoom}/>
	          <MessagesContainer chatRoomId={this.state.currentChatRoom.id} messages={this.state.currentChatRoom.messages} addNewMessage={this.addNewMessage} renderMessage={this.renderMessage}/>
	          <UsersContainer users={this.state.currentChatRoom.usersInChat}/>
	        </Fragment>
	        }
        </div>
      </div>
    )
  }
}

export default withRouter(MainContainer);
