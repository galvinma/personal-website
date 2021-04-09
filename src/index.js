import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";import './index.css';
import history from './history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Theme
import theme from './Theme/muiTheme'

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </MuiThemeProvider>,
document.getElementById('root'));

serviceWorker.unregister();
