// import React, { Component } from 'react'; // class component
import React from 'react'; // functional component
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css'; // css 파일 임포트

// // class component -> smart component
// class Movie extends Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         console.log(this.props);
//         return(
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>            
//         );
//     }
// }

// class MoviePoster extends Component {

//     static propTypes = {
//         poster: PropTypes.string.isRequired
//     }

//     render() {
//         console.log(this.props);
//         return (
//             <img src={this.props.poster}/>
//         );
//     }
// }



// functinal component -> life cycle, function reder 등등 다 없음. 오직 return만 있음
// dumps component
function Movie({title, poster, genres, synopsis}) {
    return (
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                <LinesEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis=' (...)'
                    trimRight
                    basedOn='letters'
                />
                </div>
            </div>
        </div>
    )
}
function MoviePoster({poster, alt}) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
    )
}
function MovieGenres({genre}) {
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    synopsis: PropTypes.string.isRequired,
}
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}
MovieGenres.propTypes = {
    genre: PropTypes.string.isRequired,
}
export default Movie;

// 참고!
// component > render > return > JSX(react로 작성하는 html)

// Data flow!
// 부모(메인)이 데이터를 다 가지고 있고 자식에게 데이터를 전달해줌.
// 자식 컴포넌트에서 데이터를 가져올때는 props를 이용