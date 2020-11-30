import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBluBgb53MjEZV5tCB16HlUyIQUQGGbfvw",
  authDomain: "vago-3f654.firebaseapp.com",
  databaseURL: "https://vago-3f654.firebaseio.com",
  projectId: "vago-3f654",
  storageBucket: "vago-3f654.appspot.com",
  messagingSenderId: "869792446902",
  appId: "1:869792446902:web:4899abe6eca3b41806e917"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

messaging.requestPermission()
.then(() => {
  console.log('Have permission');
  return messaging.getToken()
})
.then((token) => {
 console.log(token)
})
.catch(() => {
  console.log();
})

messaging.onMessage( (payload) => {
  console.log('onMessage', payload)
})

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
