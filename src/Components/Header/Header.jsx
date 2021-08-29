import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
class Header extends Component {
  state = {
    newMovieName: "",
    backgroundColor: 'none'
  };

  handleOnChange = (e) => {
    let value = e.target.value;
    this.setState({
      newMovieName: value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key == "Enter") {
      this.props.setMovies(this.state.newMovieName);
    }
  };
  listenScrollEvent =( e )=> {
  
    if (window.scrollY >=0) {
      this.setState({backgroundColor: 'black'})
    } else {
      this.setState({backgroundColor: 'none'})
    }
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className="header" style={{backgroundColor: this.state.backgroundColor}}>
        <div className="logo">
          <img src="logo.svg" alt="" />
        </div>
          <div className="search-btn">
            <input
              className="search-movies"
              value={this.state.newMovieName}
              type="text"
              placeholder="Search"
              onChange={this.handleOnChange}
              onKeyPress={this.handleKeyPress}
            />
          </div>
        <div className="header-links">
          <div className="header-link">
            <Link to="/">Home</Link>
          </div>

          <div className="header-link">
            <Link to="/more">Movies</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
