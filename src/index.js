import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';
import App from './App';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#fff",
            contrastText: "#fff"
        }
    }
})

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));