import React from 'react'
import { Link } from "react-router-dom";

// CSS
import './Nav.scss'
import variables from '../.././Variables.scss'

// Functions
import { stripPx } from '../.././Util/stripPx'

import headshot from '../.././Images/Headshot/mrg_headshot.jpg'

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioActive: "nav-link-active-false",
      photographyActive: "nav-link-active-false",
      homeActive: "nav-link-active-false",
    }

    this.resetActiveState = this.resetActiveState.bind(this)
    this.toggleNavActiveClass = this.toggleNavActiveClass.bind(this)


  }

  resetActiveState() {
    this.setState({
      portfolioActive: "nav-link-active-false",
      photographyActive: "nav-link-active-false",
      homeActive: "nav-link-active-false",
    })
  }


  toggleNavActiveClass(loc) {
    this.resetActiveState()

    if (loc === "" || loc === undefined) {
      loc = window.location.href.split("/").pop()
    }

    if (loc === "portfolio") {
      this.setState({
        portfolioActive: "nav-link-active"
      })
    }
    else if (loc === "photography") {
      this.setState({
        photographyActive: "nav-link-active"
      })

    }
    else if (loc === "") {
      this.setState({
        homeActive: "nav-link-active"
      })
    }
  }

  componentDidMount() {
    this.toggleNavActiveClass()
  }



  render() {
    return (
      <div className="top-nav">
        <div id="nav-title-container" className="nav-title-container">
          <div className="headshot-container">
            <img src={headshot} className="headshot-image" />
          </div>
          <div className="nav-text-container">
            <div id="nav-content-title" className="name h1"><Link class="nav-link" to="/">Matthew Galvin</Link></div>
            <div id="nav-content-subtitle" className="h3"><Link class="nav-link" to="/">Software Engineer</Link></div>
          </div>
        </div>

        <div className="top-nav-link-container">
          <div className="nav-link-container-wrapper">

            <div className="body1 nav-link-container">
              <Link id="home" className={`nav-link ${this.state.homeActive}`} to="/">Home</Link>
            </div>

            <div className="body1 nav-spacer">|</div>
            <div className="body1 nav-link-container">
              <Link id="portfolio" className={`nav-link ${this.state.portfolioActive}`} to="/portfolio">Portfolio</Link>
            </div>

            <div className="body1 nav-spacer">|</div>
            <div className="body1 nav-link-container">
              <Link id="photography" className={`nav-link ${this.state.photographyActive}`} to="/photography">Photography</Link>
            </div>

            <div className="body1 nav-spacer">|</div>
            <div className="body1 nav-link-container">
              <a className="nav-link" href="/MatthewGalvin_Resume_Public.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default (Nav)
