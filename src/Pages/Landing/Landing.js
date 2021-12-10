import React from 'react'
import { Link } from "react-router-dom";

// Content
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'

// CSS
import '../../App.scss'
import '../../Font.scss'
import './Landing.scss'


class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page-wrapper">
        <Nav />

        <div className="content">
          <div className="landing-about-container">
            <div className="about-text-container">
              <div className="about-text">
                <p className="body1">Hi, I’m Matthew! 👋</p>
              </div>
              <div className="about-text">
                <div className="body1">I’m a full-stack software engineer living in Portland, Oregon 🌲⛰️🌧️</div>
              </div>
              <div className="about-text">
                <div className="body1">I work at <a className="unstyled-link" href="https://www.invitae.com" target="_blank" rel="noopener noreferrer">Invitae</a> where I build bioinformatics pipelines. Previously, I have worked at the <a className="unstyled-link" href="https://oregon.providence.org/our-services/p/providence-cancer-center/" target="_blank" rel="noopener noreferrer">Providence Cancer Institute</a> and <a className="unstyled-link" href="https://www.illumina.com" target="_blank" rel="noopener noreferrer">Illumina.</a></div>
              </div>

              <div className="about-text">
                <div className="body1">Thank you for visiting my website. Be sure to checkout out my <Link class="nav-link unstyled-link" to="/portfolio">portfolio</Link>, <a class="nav-link unstyled-link" href="/MatthewGalvin_Resume_Public.pdf" target="_blank" rel="noopener noreferrer">resume</a>, and <Link class="nav-link unstyled-link" to="/photography">photography</Link>. I am always looking for new and exciting projects; If you would like to work together, or have any questions about my work, please <a className="unstyled-link" href="mailto:matthewrgalvin@gmail.com">reach out</a>.</div>
              </div>
            </div>
          </div>

        </div>
        <div className="footer footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}

export default (Landing)
