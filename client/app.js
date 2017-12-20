import React from 'react';
import ReactDOM from 'react-dom';
import Table from './table.js';
import User from './user.js';
import axios from 'axios';
import ClickedUser from './clicked-user.js';


export class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			users: ''	
		};
		axios.get("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
		.then(res => {
			this.setState({users: res.data}, console.log(this.state))
		})
	}
	
	

	render(){
			return(
				<Table table={this.state.users} />
			);
		};

}

ReactDOM.render(
	<App />,
	document.getElementById('root'));