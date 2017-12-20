import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';
import User from './user.js';
import {App} from './app.js';

export default class ClickedUser extends React.Component {
	constructor(props){
		super(props);
		this.state={
			user: null
		};
	}

	

	componentWillReceiveProps(nextProps){
		this.setState({
			user: nextProps.user
		});
		console.log("ClickedUser props received");
	}


	render(){
		if (this.state.user)
		{
			var userTmp = this.state.user.map(function(item, index){
				return(<p>{item}</p>);
			})
		}
		else var userTmp = null;
		return(<div className='clicked-user'>
				{userTmp}
			</div>);
	}
}