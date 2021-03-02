import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 1, message: 'First message'},
    {id: 2, message: 'Second message v rot kompot ne pishi mne bolshe'},
    {id: 3, message: 'Third message'},
]

let people = [
    {id: 1, name: 'Marina'},
    {id: 2, name: 'Maksim'},
    {id: 3, name: 'Dmitry'},
    {id: 4, name: 'Pes'},
]

let posts = [
    {id: 1, post: 'Hi psina'},
    {id: 2, post: 'It\'s my first post'},
]

let data = {dialogs, people, posts}

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
