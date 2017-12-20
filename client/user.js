import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';
import ClickedUser from './clicked-user.js';

export default class User extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.user.id,
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			email: this.props.user.email,
			phone: this.props.user.phone
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			id: this.props.user.id,
			firstName: this.props.user.firstName,
			lastName: this.props.user.lastName,
			email: this.props.user.email,
			phone: this.props.user.phone
		});
	}


	render(){
		if (this.state)
		{
			return(
				<tr key={this.state.id} onClick={this.props.userClicked}>
					<td>{this.state.id}</td>
					<td>{this.state.firstName}</td>
					<td>{this.state.lastName}</td>
					<td>{this.state.email}</td>
					<td>{this.state.phone}</td>
				</tr>
				);
		}
		else return null;
	}
}