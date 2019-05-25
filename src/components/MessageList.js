import React, { Component } from 'react'
import Message from './Message'
import { Comment } from 'semantic-ui-react'

export default class MessageList extends Component {

	renderMes = () => {
		return this.props.messages.map( message => {
			return <Message key={message.id} message={message}/>
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
