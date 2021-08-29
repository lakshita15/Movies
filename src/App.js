import React, { Component } from "react";
import Header from "./Components/Header/Header.jsx";
import Movies from "./Components/Movies/Movies.jsx";
import HomeView from "./Components/HomePage/HomeView.jsx";
import axios from "axios";
import { api, apiurl } from "./API/Data";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    moviesData: [],
    currentMovie: "Conjuring",
    pages: [],  
  };

  async componentDidMount() {
  
    let data = await axios.get(apiurl + "/search/movie", {
      params: { api_key: api, page: 1, query: this.state.currentMovie },
    });
    console.log(data);
    let moviesData = data.data.results.slice(0, 10);
    let pagesCount = data.data.total_pages; //3
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    this.setState({
      moviesData: moviesData,
      pages: pages,
    });
  }

  setMovies = async (newMovieName) => {
    let data = await axios.get(apiurl + "/search/movie", {
      params: {api_key: api, page: 1, query: newMovieName },
    });
    let moviesData = data.data.results.slice(0, 10);
    let pagesCount = data.data.total_pages; //3
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    this.setState({
      moviesData: moviesData,
      currentMovie: newMovieName,
      pages: pages,
    });
  };

  
  render() {
    return (
      <Router>
        <div className="App">
          <Header setMovies={this.setMovies}></Header>
          <Switch>
            <Route path="/" exact>
              <HomeView></HomeView>
            </Route>

            <Route path="/more" exact>
              {this.state.moviesData.length ? (
                <React.Fragment>
                  <Movies movies={this.state.moviesData}></Movies>
                 
                </React.Fragment>
              ) : (
                <h1>Error</h1>
              )}
            </Route>
            
          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
