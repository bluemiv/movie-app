import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie.js";

// 부모 컴포넌트가 자식 컴포넌트에게 데이터를 줌
const movieTitles = [
  "사바하",
  "증인",
  "극한직업",
  "알리타"
]

const movieImages = [
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81616/81616_1000.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81581/81581_185.jpg",
  "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81552/81552_1000.jpg",
  "https://cdn.clien.net/web/api/file/F01/7960316/c44f2d7231bf3.jpg"
]

class App extends Component {
  render() { // 이 컴포넌트가 나한테 보여주려는 것이 무엇인가?
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
