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
  constructor(props)
  {
    super(props);

    this.state = {}
  }

  render() {
    return (
        <div className="page-wrapper">
          <Nav />
          <div className="content">
            <PortfolioContent/>
          </div>

          <div className="footer footer-wrapper">
            <Footer />
          </div>
        </div>
  )}
}

export default (Portfolio)
