import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import red from '@material-ui/core/colors/red';
import './App.css';
import LoginForm from './Components/LoginForm';
import { api } from './utils';
import Results from './Components/Results';

class App extends Component {

	state = {
		auth: false,
		loading: false, 
		result: {},
		error: false
	}

	submit = (id, pass) => {
		this.setState({loading: true});
		api(id, pass).then((result) => {
			console.log(result);
			this.setState({loading: false, result, auth: true});
		}).catch((error) => {
			console.log(error);
			this.setState({loading: false, error});
		});
	}

	handleErrorClose = (e, reason) => {
		if (reason == 'clickaway')
			return;
		this.setState({error: ""});
	}

	closeDialog = () => {
		this.setState({loading: ""});
	}

	render() {
		const {auth, loading, result, error} = this.state;
		return (
			<div className="center vertical" style={{height: "100vh"}}>
				<Dialog
					open={loading}
					onClose={this.closeDialog}
					disableBackdropClick
					disableEscapeKeyDown
				>	
					<DialogContent>
						<DialogActions>
							<CircularProgress color="secondary"/>
							<DialogContentText>Calculating Average</DialogContentText>
						</DialogActions>
					</DialogContent>
				</Dialog>
				<Snackbar
					
					anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
					open={!!error}
					onClose={this.handleErrorClose}>
					<SnackbarContent 
					style={{backgroundColor: red[700]}}
					message={<span className="snackbar-message"><ErrorIcon />  {`\t${error}`}</span>}
					action={[
						<IconButton onClick={this.handleErrorClose}><CloseIcon /></IconButton>
					]}
					/>
				</Snackbar>
				{!auth && <LoginForm submit={this.submit} />}
				{auth && <Results results={result} />}
			</div>
		)
	}
}

export default App;