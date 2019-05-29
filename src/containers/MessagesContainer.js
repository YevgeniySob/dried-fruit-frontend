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

	handleClick = () => {
		this.props.addNewMessage(this.state.content);
		this.setState(defaultState)
	};

	handleChange = (e) => {
		this.setState({content: e.target.value})
	};

  render() {
    return (
      <Fragment>
	      <ActionCableConsumer
		      channel={{channel: "ChatroomChannel"}}
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
	            {/*<div className="ui input"><input type="text" placeholder="Search..."/></div>*/}
							<div className="ui fluid input">
					      <input type="text" onChange={this.handleChange} value={this.state.content} fluid={true} placeholder='Write your message...' />
					      <button id="send-btn" className="ui basic button" onClick={this.handleClick}>Send</button>
							</div>
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
