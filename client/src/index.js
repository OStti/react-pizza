import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import store from './store';
import customTheme from './theme';

import App from './App';

import './reset.css';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={customTheme}>
      <ThemeProvider theme={customTheme}>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
