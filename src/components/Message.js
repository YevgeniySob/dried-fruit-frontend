import {Comment}          from "semantic-ui-react";
import React, {Component} from "react";

class Message extends Component {
	state = {
		likes: this.props.message.likes
	}

	handleClick = () => {
		console.log("Liked", this.state.likes);
		console.log("MESSAGE", this.props.message.id);
		console.log("PROPS", this.props);
		// const likes = this.state.likes += 1;
		fetch("http://localhost:3000/message_update", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json"
			},
			body: JSON.stringify({
				id: this.props.message.id
				// likes: likes
			})

		})
			.then(res => res.json())
			.then(msg => this.setState({likes: msg.likes}))
			.catch(error => console.log(error))
	};

	render() {

		return (

			<Comment>
				{/*<Comment.Avatar src={props.message.user_image} />*/}
				{}
				<Comment.Content>
					<Comment.Author as='a'>{this.props.message.username}</Comment.Author>
					<Comment.Metadata>
						<div>{this.props.message.created_at.slice(11,16)}</div>
					</Comment.Metadata>
					<Comment.Text>{this.props.message.content}</Comment.Text>
					{/*<Comment.Actions>*/}
					{/*<Comment.Action>Reply</Comment.Action>*/}
					{/*</Comment.Actions>*/}
					<div onClick={this.handleClick} className="ui labeled button" tabIndex="0">
						<div className="ui button">
							<i className="heart icon"></i> Like
						</div>
						<a className="ui basic label">
							{this.state.likes}
						</a>
					</div>
				</Comment.Content>
			</Comment>
		)
	}
}

export default Message
