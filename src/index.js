import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // id가 root인곳에 출력(render)
// 리액트 돔은 한개의 컴포넌트를 출력(render)

serviceWorker.unregister();


// 참고!
// react는 UI 라이브러리..
// reactDOM Document Object Model: 출력을 도와주는 모델
// 리액트를 모바일에 쓰고 싶다면 reactNative를 사용..