import React, { Component } from 'react';
import './App.css';
import LoginForm from './Components/LoginForm';

class App extends Component {

	state = {
		auth: false
	}

	submit = (id, pass) => {

	}

	render() {
		const {auth} = this.state;
		return (
			<div className="fullscreen center all vertical">
				<h1>Do you have 75% attendance?</h1>
				{!auth && <LoginForm submit={this.submit} />}
			</div>
		)
	}
}

export default App;