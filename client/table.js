import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './app.js'
import User from './user.js'
import ClickedUser from './clicked-user.js';

export default class Table extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			users: this.props.table,
			desc: false,
			column: null,
			clickedUser: null
		};

	}


	componentWillReceiveProps(nextProps){
		this.setState({
			users: nextProps.table,
			clickedUser: nextProps.clickedUser
		});
		console.log("Table props received");
	}

	tableSort(e){
		e.preventDefault();
		console.log(this.state.users);
		var col = e.target.id;
		console.log(col);
		var des = !((col == this.state.column) && (this.state.desc));
		var sortedTable = this.state.users;
		sortedTable.sort(function(a, b){
			return des ? a[col] - b[col] : b[col] - a[col]
		});
		this.setState({
			users: sortedTable,
			column: col,
			desc: des
		},console.log(this.state));
		
	}

	userClicked(usr, e){
		e.preventDefault();
		this.setState({
			clickedUser: usr
		});
	}

	render(){
		 console.log(this.props.table);
		 console.log(this.state.users);
		 if(this.state.users)
		 	{var userTemplate = this.state.users.map(function(item, index){
		 	return(
		 		<User key={index} user={item} userClicked={this.props.userClicked} />) 
		 }, this)
		}
		else var userTemplate = null;
		return(
			<div>
			<table className='table'> 
				<tbody>
					<tr>
						<td id='id' onClick={this.tableSort.bind(this)}>id</td>
						<td id='firstName' onClick={this.tableSort.bind(this)}>firstName</td>
						<td id='lastName' onClick={this.tableSort.bind(this)}>lastName</td>
						<td id='email' onClick={this.tableSort.bind(this)}>email</td>
						<td id='phone' onClick={this.tableSort.bind(this)}>phone</td>
					</tr>
					{userTemplate}
				</tbody>
			</table>
			<ClickedUser user={this.state.clickedUser} />
			</div>);
	}

}