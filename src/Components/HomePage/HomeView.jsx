import React, { Component } from 'react'
import axios from "axios"
import "./HomeView.css"
import Categories from '../Categories/Categories'
import {
  apiurl,
  imageurl,
  netflixOriginals,
  trendingNow,
  TopRated,
  ActionMovies,
  ComedyMovies,
  HorrorMovies,
  RomanticMovies,
  Documentries,
} from "../../API/Data";


export default class HomeView extends Component {
  state={
    bannerImage :{},

  }
  async componentDidMount(){
    let netflixOriginalsResponse = await axios.get(
      `${apiurl}${netflixOriginals}`
    );
    let data = netflixOriginalsResponse.data.results;
    let random = Math.floor(Math.random()*10)
    let randomMovie = data[random]

    this.setState({
      bannerImage:randomMovie
    })
  }
  render() {
    let { poster_path, original_name, title, overview } = this.state.bannerImage;
    let bannerTitle = title?title:original_name;
    let posterpath = imageurl +  poster_path;

    return (
      <div className="homeview">
               <div className="homeview-banner">
                 <div className="homeview-banner-poster">
                   <img src={posterpath}></img>
                 </div>
                 <div className="homeview-details">
                   <div className="homeview-title">
                     <h1>{bannerTitle}</h1>
                   </div>
                   <h1 className="homeview-overview">{overview}</h1>
                 </div>
                 <div className="banner-fade"></div>
               </div>
               <Categories></Categories>
             </div>
    )
  }
}
