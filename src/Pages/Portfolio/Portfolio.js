import React from 'react'

// Content
import Nav from '../../Components/Nav/Nav'
import PortfolioContent from '../../Components/PortfolioContent/PortfolioContent'
import Footer from '../../Components/Footer/Footer'

// CSS
import '../../App.scss'
import '../../Font.scss'
import './Portfolio.scss'


class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="page-wrapper">
        <Nav />
        <div className="content">
          <div className="portfolio-content-container">
            <p className="body1 port-des">
              I have worked on a number of web development and engineering projects in my career. Below you will find a few visual examples of web applications I have authored. If you would like to discuss non-visual or other proprietary work such as API, pipeline, or database development as described in my <a class="nav-link unstyled-link" href="/MatthewGalvin_Resume_Public.pdf" target="_blank" rel="noopener noreferrer">resume</a>, please send me an <a className="unstyled-link" href="mailto:matthewrgalvin@gmail.com">email</a>.
            </p>
          </div>

          <PortfolioContent />
        </div>

        <div className="footer footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}

export default (Portfolio)
