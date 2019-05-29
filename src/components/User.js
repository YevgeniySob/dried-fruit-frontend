import React, { Component } from 'react'

export default class User extends Component {

	render() {
		return (
			<div >
				<img className="ui avatar image" src={this.props.user.image} />
					<span>{this.props.user.username}</span>
			</div>

		);
	}
}
