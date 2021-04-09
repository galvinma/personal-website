import React from 'react'

// Content
import Nav from '../../Components/Nav/Nav'
import PhotographyContent from '../../Components/PhotographyContent/PhotographyContent'
import Footer from '../../Components/Footer/Footer'

// CSS
import '../../App.scss'
import '../../Font.scss'
import './Photography.css'


class Photography extends React.Component {
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
            <PhotographyContent/>
          </div>

          <div className="footer footer-wrapper">
            <Footer />
          </div>
        </div>
  )}
}

export default (Photography)
