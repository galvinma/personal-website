import React from 'react'
import { Link } from "react-router-dom";

// CSS
import './Nav.scss'
import variables from '../.././Variables.scss'

// Functions
import { stripPx } from '../.././Util/stripPx'

class Nav extends React.Component {
    constructor(props)
    {
      super(props);
  
      this.setLineHeight = this.setLineHeight.bind(this)
      this.stripPx = stripPx.bind(this)
    }
  
    componentDidMount()
    {
      this.updateDimensions()
      window.addEventListener("resize",  this.updateDimensions.bind(this));
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize",  this.updateDimensions.bind(this));
    }
  
    updateDimensions()
    {
      this.setLineHeight()
    }


  setLineHeight()
  {
    if (document.getElementById("landing-content-title") === null || document.getElementById("landing-content-title") === undefined)
    {
      return
    }

    if (document.getElementById("landing-content-subtitle") === null || document.getElementById("landing-content-subtitle") === undefined)
    {
      return
    }

    if (document.getElementById("title-line") === null || document.getElementById("title-line") === undefined)
    {
      return
    }


    let titleHeight = document.getElementById("landing-content-title").clientHeight
    let subtitleHeight = document.getElementById("landing-content-subtitle").clientHeight
    if (window.innerWidth < 600)
    {
      document.getElementById("title-line").style.height = `${titleHeight + subtitleHeight + 2*this.stripPx(variables.indentSpacing)}px`
    } else
    {
      document.getElementById("title-line").style.height = `${titleHeight + subtitleHeight + 2*this.stripPx(variables.tabSpacing)}px`
    }
  }




  render() {
    return (
        <div className="top-nav">
            <div id="landing-title-container" className="landing-title-container">
                <div id="title-line" className="themed-vertical-line"></div>
                <div className="landing-text-container">
                <div id="landing-content-title" className="name h1">Matthew Galvin</div>
                <div id="landing-content-subtitle"  className="h3">Software Engineer</div>
                </div>
            </div>

            <div className="top-nav-link-container">
                <div className="nav-text-container">
                    <div class="body3 nav-link-container">
                        <Link class="nav-link" to="/">Home</Link>            
                    </div>

                    <div class="body3 nav-spacer">|</div>
                    <div class="body3 nav-link-container">
                        <Link class="nav-link" to="/portfolio">Portfolio</Link>            
                    </div>

                    <div class="body3 nav-spacer">|</div>
                    <div class="body3 nav-link-container">
                      <a class="nav-link" href="/MatthewGalvin_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                    
                    <div class="body3 nav-spacer">|</div>
                    <div class="body3 nav-link-container">
                        <Link class="nav-link" to="/photography">Photography</Link>            
                    </div>
                </div>
                </div>
        </div>
  )}
}

export default (Nav)
