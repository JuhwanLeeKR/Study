import React from 'react';
import ReactDOM from 'react-dom'; // react-dom에서 ReactDOM 객체를 임포트 한다.
import './index.css';
import App from './App'; // 하나인 파일은 .js를 입력하지 않는다.
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); // render 메서드가 객체를 가져온다.
// <App />: JSX 객체

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
