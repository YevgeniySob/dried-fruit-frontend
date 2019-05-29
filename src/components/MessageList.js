import React, { Component } from 'react'
import Message from './Message'
import { Comment } from 'semantic-ui-react'

export default class MessageList extends Component {

	sortMessages = () => {
		return this.props.messages.sort((msgA, msgB) => {
			return msgA.id - msgB.id
		})
	}

	renderMes = () => {
		const sorted = this.sortMessages();
		return sorted.map( (message, idx) => {
			return <Message key={idx} message={message}/>
		})
	};

  render() {
    return (
      <div className={'message-list'}>
        <Comment.Group>
        { this.renderMes() }
        </Comment.Group>
      </div>
    );
  }
}
