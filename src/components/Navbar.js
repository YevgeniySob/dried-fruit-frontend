import React, {Component} from 'react';
import {Link}             from 'react-router-dom';
import LoginContainer     from '../auth/LoginContainer'

class Navbar extends Component {

	state = {
		signup: false
	};

	render() {
		console.log("Navbar currentUser: ", this.props.currentUser)
		return (
			<div className="ui top fixed borderless inverted fluid menu">
				<div className="ui container">
					<a className="header item">Project Name</a>
					<div className="right menu">
						<div className="item">
							<form className="ui form">
								<LoginContainer handleLogInSubmission={this.props.handleLogInSubmission} currentUser={this.props.currentUser} logOut={this.props.logOut}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Navbar;

