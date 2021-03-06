import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import GithubIcon from '../img/github.svg';
export class LoginForm extends Component {

    state = {
        id: '',
        pass: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submit = e => {
        e.preventDefault();
        const {id, pass} = this.state;
        this.props.submit(id, pass);
    }

    render() {
        const {id, pass} = this.state;
        return (
            <div className="container center vertical">
                <h1>Do you have 75% attendance?</h1>
                <p className="p">Check it here.</p>
                <form onSubmit={this.submit} className="form">
                        <TextField 
                        type="text" 
                        required
                        name="id" 
                        variant="outlined"
                        style={{margin: '30px 10px'}}
                        id="id" 
                        value={id}
                        onChange={this.onChange}
                        label="Enter your TEC ID"
                        placeholder="TU3F...."/>
                        <TextField 
                        type="password" 
                        required
                        name="pass" 
                        onChange={this.onChange}
                        variant="outlined"
                        style={{margin: '0px 10px'}}
                        value={pass}
                        label="Enter your ERP Password"
                        id="pass" 
                        placeholder="Your password is not stored."/>
                        <button className="button">GO</button>
                </form>   
                <div className="links center vertical">
                    <a target="_blank" rel="noopener noreferrer" href="https://ajeshd17.tk">Created by Ajesh DS</a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/thekillingspree/do-you-have-75">View Code on Github <img src={GithubIcon}  alt="Github"/></a>
                </div>
            </div>
        )
    }
}

export default LoginForm
