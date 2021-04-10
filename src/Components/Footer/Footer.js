import React from 'react'

// Icons
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

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
                <a class="nav-link nav-icon-container" href="mailto:matthewrgalvin@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MdEmail className="nav-icon" />
                </a>
              </div>

              <div class="body3 nav-spacer">|</div>
              <div class="body3 nav-link-container">
                <a class="nav-link nav-icon-container" href="https://github.com/galvinma" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="nav-icon" />
                </a>
              </div>
              
              <div class="body3 nav-spacer">|</div>
              <div class="body3 nav-link-container">
                <a class="nav-link nav-icon-container" href="https://www.linkedin.com/in/matthewrgalvin/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="nav-icon" />
                </a>
              </div>

              <div class="body3 nav-spacer">|</div>
              <div class="body3 nav-link-container">
                <a class="nav-link nav-icon-container" href="https://www.twitter.com/galvinmath" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="nav-icon" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
  )}
}

export default (Footer)
