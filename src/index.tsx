import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
       light: '#fff',
       main: '#252934',
       dark: '#000'
    },
    secondary: {
      main: '#04C2C9'
    },
    text: {
      primary: '#fff',
      secondary: '#04C2C9'
    }
  },
  typography: {
    htmlFontSize: 10,
    useNextVariants: true
  }
});






ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
