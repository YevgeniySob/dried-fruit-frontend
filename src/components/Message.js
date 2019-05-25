import {Comment} from "semantic-ui-react";
import React     from "react";

const Message = (props) => {


	return (

		<Comment>
			{/*<Comment.Avatar src={props.message.user_image} />*/}
			{}
			<Comment.Content>
				<Comment.Author as='a'>{props.message.username}</Comment.Author>
				<Comment.Metadata>
					<div>{props.message.created_at}</div>
				</Comment.Metadata>
				<Comment.Text>{props.message.content}</Comment.Text>
				{/*<Comment.Actions>*/}
					{/*<Comment.Action>Reply</Comment.Action>*/}
				{/*</Comment.Actions>*/}
			</Comment.Content>
		</Comment>
	)
};
export default Message
