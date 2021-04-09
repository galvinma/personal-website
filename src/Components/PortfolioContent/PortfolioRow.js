import React from 'react'
import variables from '../.././Variables.scss'

// CSS
import './PortfolioContent.scss'

class PortfolioRow extends React.Component {
    constructor(props)
    {
      super(props);
    }

  render() {
    console.log(this.props)
    return (
      <div className="portfolio-row-wrapper">
        <div className="h3 portfolio-row-title">
            {this.props.title}
        </div>
        <div className="portfolio-image-wrapper">
          {this.props.images.map((value, index) => {
            return (
                <div className="portfolio-image-container">
                    <img src={value} className="portfolio-row-image"/>
                </div>
              )
            })
          }
        </div>
        <div className="subtitle1 portfolio-row-description">{this.props.description}</div>
      </div>
  )}
}

export default (PortfolioRow)
