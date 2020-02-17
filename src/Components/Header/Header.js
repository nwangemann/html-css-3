import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
  constructor() {
    super();

    this.state = {
      toggleMenu: true
    };
  }

  toggleMenuFunc() {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    });
  }

  render() {
    return (
      <div className="headerStatic">
        <div className="headerParent">
        <h1 id="headerTitle">Start Bootstrap</h1>
        <nav className="desktop-view">
          <a className="headerLink" href="#">Services</a>
          <a className="headerLink" href="#">Portfolio</a>
          <a className="headerLink" href="#">About</a>
          <a className="headerLink" href="#">Team</a>
          <a className="headerLink" href="#">Contact</a>
        </nav>
        <button onClick={() => this.toggleMenuFunc()} className="menuButton"
        >Menu</button>
        </div>
        <div className="mobile-menu-parent">
        <div className={this.state.toggleMenu ? "mobile-view-hide" : "mobile-view-show"}>
        <nav className="mobile-view-show mobile-view-hide">
          <a className="headerLink" href="#">Services</a>
          <a className="headerLink" href="#">Portfolio</a>
          <a className="headerLink" href="#">About</a>
          <a className="headerLink" href="#">Team</a>
          <a className="headerLink" href="#">Contact</a>
        </nav>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;
