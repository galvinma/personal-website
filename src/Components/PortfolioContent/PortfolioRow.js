import React from 'react'
import variables from '../.././Variables.scss'

// CSS
import './PortfolioContent.scss'

class PortfolioRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="portfolio-row-wrapper">
        <a class="h3 nav-link nav-icon-container" href={this.props.githubLink} target="_blank" rel="noopener noreferrer">
          {this.props.title}
        </a>
        <div className="portfolio-image-wrapper">
          {this.props.images.map((value, index) => {
            return (
              <div className="portfolio-image-container">
                <img src={value} className="portfolio-row-image" />
              </div>
            )
          })
          }
        </div>
        <div className="body1 portfolio-row-description">{this.props.description}</div>
      </div>
    )
  }
}

export default (PortfolioRow)
