import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie.js";

// 부모 컴포넌트가 자식 컴포넌트에게 데이터를 줌

// const movieTitles = [
//   "사바하",
//   "증인",
//   "극한직업",
//   "알리타"
// ]

// const movieImages = [
//   "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81616/81616_1000.jpg",
//   "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81581/81581_185.jpg",
//   "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81552/81552_1000.jpg",
//   "https://cdn.clien.net/web/api/file/F01/7960316/c44f2d7231bf3.jpg"
// ]

class App extends Component {
  // Life cycle
  // render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {}

  componentWillMount() {
    // console.log("Life cycle 1: Will Mount.")
  }
  

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => { // async를 쓰지 않으면 await는 작동하지 않음.
    const movies = await this._callApi() // 작업이 끝날때까지 아래 작업이 실행 안됨.
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json()) // 위 작업이 끝나면 실행. 성공하든 실패하든...
    .then(json => json.data.movies) // arrow function
    .catch(err => console.log(err)) // Error가 있으면 catch에서 실행
  }

  // componentDidMount() {
  //   // console.log("Life cycle 3: Did Mount.")
  //   setTimeout(() => { // function은 오래된 방식, () => : 최신방식
  //     // console.log("Hello!")
  //     this.setState({
  //       // Map을 이용한 데이터 생성할 예정
  //       movies: [
  //         {
  //           title: "사바하",
  //           poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81616/81616_1000.jpg"
  //         },
  //         {
  //           title: "증인",
  //           poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81581/81581_185.jpg"
  //         },
  //         {
  //           title: "극한직업",
  //           poster: "http://img.cgv.co.kr/Movie/Thumbnail/Poster/000081/81552/81552_1000.jpg"
  //         },
  //         {
  //           title: "알리타",
  //           poster: "https://cdn.clien.net/web/api/file/F01/7960316/c44f2d7231bf3.jpg"
  //         },
  //         {
  //           title: "캡틴마블",
  //           poster: "https://file2.nocutnews.co.kr/newsroom/image/2019/03/06/20190306032809346893_0_777_1113.jpg"
  //         },
  //       ]
  //       // ...this.state.movies, // 이전 목록은 놔두고, 데이터 추가!
  //     })
  //   }, 3000)
  // }

  // 나의 기능과 리액트 자체 기능을 구분하기위해 언더스코어 사용하여 구분하면 좋음.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => { // mapping!!
        console.log(movie)
        return <Movie
        title={movie.title_english}
        poster={movie.small_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}
        /* key값으로 component의 id를 사용하는 것은 느려서 좋지 않음. *//>  
    })
    return movies
  }

  render() { // 이 컴포넌트가 나한테 보여주려는 것이 무엇인가?
    console.log("Did render.")
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading..." /* loading state */}
        {/* {this.state.greeting} */}
        {/* {this.state.movies.map((movie, index) => { // mapping!!
            return <Movie title={movie.title} poster={movie.poster} key={index}/>  
        })} */}
        
        {/* <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/> */}
      </div>
    );
  }
}

export default App;