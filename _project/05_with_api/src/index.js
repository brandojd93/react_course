import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://lewagon-task-manager.herokuapp.com/api';
axios.defaults.headers.common['X-User-Email'] = 'YOUR_EMAIL';
axios.defaults.headers.common['X-User-Token'] = 'YOUR_TOKEN';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()