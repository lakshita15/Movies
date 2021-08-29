import React, { Component } from "react";
import { api, apiurl, imageurl } from "../../API/Data";
import { Link } from "react-router-dom";
import "./Movie.css";
import axios from "axios";
class Movie extends Component {
  state = {
    detailedMovieObj: {},
  };

  async componentDidMount() {
   
    let response = await axios.get(
      `${apiurl}/movie/${this.props.movie.id}?api_key=${api}`
    );
    // console.log(response.data);
    let detailedMovieObj = response.data;
    let posterPath = imageurl + detailedMovieObj.poster_path;
    this.setState({
      detailedMovieObj: { ...detailedMovieObj, poster_path: posterPath },
    });
  }

  
  render() {
    let { poster_path, title, vote_average } = this.props.movie;
    let posterPath = imageurl + poster_path;
    return (
      <div className="movie-item">
        <div className="movie-poster">
         
            <img src={posterPath} alt="" />
       
        </div>
        <div className="movie-info">
          <div className="movie-title">{title}</div>
          <div className="movie-rating">{vote_average} IMDB</div>
        </div>
      </div>
    );
  }
}

export default Movie;
// Movie lani hai , imdb rating , title 