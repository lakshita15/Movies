import axios from "axios";
import React, { Component } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import YouTube from "react-youtube"
//npm i movie-trailer


import {
  apiurl,
  api,
  imageurl,
  netflixOriginals,
  trendingNow,
  TopRated,
  ActionMovies,
  ComedyMovies,
  HorrorMovies,
  RomanticMovies,
  Documentries,
  trailerQuery
} from "../../API/Data";




export default class Categories extends Component {
  state = {
    netflixOriginals: [],
    trendingNow: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: [],
    romanceMovies: [],
    trailerUrl :"60e11868072166002cd5cb6a" 
  };

  async componentDidMount() {
    let netflixOriginalsResponse = await axios.get(
      `${apiurl}${netflixOriginals}`
    );
    let trendingNowResponse = await axios.get(`${apiurl}${trendingNow}`);
    let topRatedResponse = await axios.get(`${apiurl}${TopRated}`);
    let actionMovies = await axios.get(`${apiurl}${ActionMovies}`);
    let comedyMovies = await axios.get(`${apiurl}${ComedyMovies}`);
    let horrorMovies = await axios.get(`${apiurl}${HorrorMovies}`);
    let romanceMovies = await axios.get(`${apiurl}${RomanticMovies}`);
    
     this.setState({
      netflixOriginals: netflixOriginalsResponse.data.results,
      trendingNow: trendingNowResponse.data.results,
      topRated: topRatedResponse.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
    });
  }


   fetchMovieTrailer = async (movie) => {
    for(let i = 0 ; i <=5; i++){

      await axios
        .get(`${apiurl}/movie/${movie}${trailerQuery}&language=en-US`)
        .then((responseData) => {
          // console.log(responseData.data.results[0].key);
          // this.setStaUte({
          //   trailerUrl:responseData.data.results[0].id
          // })
          // setTrailerUrl(responseData.data.results[0]?.key);
        })
        .catch((error) => console.log(error));
    };
    }

  //fetch trailer url when a movie is clicked
   handleClick = (movie) => {
    if (this.state.trailerUrl) {
     this.setState({
       trailerUrl:""
     })
    } else {
      this.fetchMovieTrailer(movie);
    }
  };
  
  render() {
    let opts = {
      height:"100%",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };
    let movieGenres = [
      { genre: "Netflix Originals", stateName: "netflixOriginals" },
      { genre: "Trending Now", stateName: "trendingNow" },
      { genre: "Top Rated", stateName: "topRated" },
      { genre: "Action Movies", stateName: "actionMovies" },
      { genre: "Comedy Movies", stateName: "comedyMovies" },
      { genre: "Horror Movies", stateName: "horrorMovies" },
      { genre: "Romance Movies", stateName: "romanceMovies" },
    ];
    return (
      <div className="movie-rows">
        {movieGenres.map((genre) => {
        //  console.log(genre.genre);
          return (
            <div className="genre-row">
              <h2>{genre.genre}</h2>
              <div className="movie-row-list">
                {this.state[genre.stateName].map((movieObj) => {

                
                  
                  return (
                    <img src={imageurl + movieObj.poster_path}   
                     onClick={
                     this.handleClick(movieObj.id)
                      }
                    alt={movieObj.name}
                    />
                    
                    );
                  })}
                  {this.state.trailerUrl &&  <YouTube videoId={this.state.trailerUrl} opts={opts} />}
          
              </div> 
            </div>
          );
        })}
      </div>
    );
  }
}


