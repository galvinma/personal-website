import React from 'react'

// SVG
import { ReactComponent as Oregon } from '../.././Images/SVG/oregon.svg'

// CSS
import './Footer.scss'

class Footer extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <div className="footer-content-container">
        <div className="oregon-container">
          <Oregon className="oregon"/>
        </div>
        <div className="footer-text-container">
          <div className="body3 footer-attribution">Developed and designed by Matthew Galvin</div>

          <div className="nav-content-container">
            <div className="nav-text-container">
              <div class="body3 nav-link-container">
                <a class="nav-link" href="mailto:matthewrgalvin@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
              </div>

              <div class="body3 nav-spacer">|</div>

              <div class="body3 nav-link-container">
                <a class="nav-link" href="https://github.com/galvinma" target="_blank" rel="noopener noreferrer">Github</a>
              </div>
              
              <div class="body3 nav-spacer">|</div>

              <div class="body3 nav-link-container">
                <a class="nav-link" href="https://www.linkedin.com/in/matthewrgalvin/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </div>
            </div>
          </div>

        </div>
      </div>
  )}
}

export default (Footer)
