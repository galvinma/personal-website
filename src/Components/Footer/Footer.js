import React from 'react'

// Icons
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

// CSS
import './Footer.scss'
import '.././Nav/Nav.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="footer-content-container">
        <div className="footer-text-container">
          <div className="body1 footer-attribution footer-text">Developed and designed by Matthew Galvin</div>

          <div className="nav-link-container-wrapper">
            <div className="footer-icons-container">

              <div class="body1 nav-link-container">
                <a class="nav-link nav-icon-container" href="mailto:matthewrgalvin@gmail.com" target="_blank" rel="noopener noreferrer">
                  <MdEmail className="nav-icon" />
                </a>
              </div>

              <div class="body1 nav-spacer">|</div>
              <div class="body1 nav-link-container">
                <a class="nav-link nav-icon-container" href="https://github.com/galvinma" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="nav-icon" />
                </a>
              </div>

              <div class="body1 nav-spacer">|</div>
              <div class="body1 nav-link-container">
                <a class="nav-link nav-icon-container" href="https://www.linkedin.com/in/matthewrgalvin/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="nav-icon" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default (Footer)
