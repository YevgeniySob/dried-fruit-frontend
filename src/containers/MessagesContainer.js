import React, { Component, Fragment } from 'react';
import MessageList                    from '../components/MessageList'
import { Input }                      from 'semantic-ui-react'
import { ActionCableConsumer } from 'react-actioncable-provider';

const defaultState = {content: ""}

class MessagesContainer extends Component {

	state = {
		content: ''
	};

	scrollToBottom = () => {
	  this.messagesEnd.scrollIntoView();
	}

	componentDidMount() {
	  this.scrollToBottom();
	}

	componentDidUpdate() {
	  this.scrollToBottom();
	}

	handleClick = (e) => {
		e.preventDefault()
		this.props.addNewMessage(this.state.content);
		this.setState(defaultState)
	};

	handleChange = (e) => {
		this.setState({content: e.target.value})
	};

  render() {
    	console.log('chatroom ID: ', this.props.chatRoomId)
    return (
      <Fragment>
	      <ActionCableConsumer
		      channel={{channel: "MessageChannel", chatroomId: this.props.chatRoomId}}
		      onReceived={(message) => {
			      console.log('message was received', message);
			      this.props.renderMessage(message)
		      }}
	      />
        <div className="ten wide column" id="msg-panel">
		      <div className="row" >
	          <MessageList messages={this.props.messages}/>
	        </div>
		      <div className="row">
			      <div className="sixteen wide column" id="msg-panel">
							<form className="ui fluid input"onSubmit={this.handleClick}>
					      <input type="text" onChange={this.handleChange} value={this.state.content} fluid={true} placeholder='Write your message...' />
					      <button type="submit" id="send-btn" className="ui basic button">Send</button>
							</form>
	          </div>
          </div>
					<div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        	</div>
        </div>

      </Fragment>
    )
  }
}

export default MessagesContainer;
