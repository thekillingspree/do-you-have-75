import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

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
            <div className="container center all">
                <form onSubmit={this.submit} className="form">
                        <TextField 
                        type="text" 
                        required
                        name="id" 
                        variant="outlined"
                        style={{margin: '30px 0'}}
                        id="id" 
                        value={id}
                        onChange={this.onChange}
                        label="Enter your TEC ID"
                        placeholder="TU3F...."/>
                        <TextField 
                        type="text" 
                        required
                        name="pass" 
                        onChange={this.onChange}
                        variant="outlined"
                        value={pass}
                        label="Enter your ERP Password"
                        id="pass" 
                        placeholder="Your password is not stored."/>
                        <button className="button">GO</button>
                </form>   
            </div>
        )
    }
}

export default LoginForm
