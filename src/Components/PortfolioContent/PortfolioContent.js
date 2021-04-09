import React from 'react'
import variables from '../.././Variables.scss'

// Content
import PortfolioRow from './PortfolioRow'

// CSS
import './PortfolioContent.scss'

// Images
var daisyjournal_signup = require('../.././Images/Portfolio/daisyjournal_signup.png')
var daisyjournal_journal = require('../.././Images/Portfolio/daisyjournal_journal.png')
var daisyjournal_habits = require('../.././Images/Portfolio/daisyjournal_habits.png')
var daisyjournal_landing = require('../.././Images/Portfolio/daisyjournal_landing.png')

var jennifergalvin_landing = require('../.././Images/Portfolio/jennifergalvin_landing.png')
var jennifergalvin_process = require('../.././Images/Portfolio/jennifergalvin_process.png')
var jennifergalvin_about = require('../.././Images/Portfolio/jennifergalvin_about.png')
var jennifergalvin_gallery = require('../.././Images/Portfolio/jennifergalvin_gallery.png')

var mathtronaut_practice = require('../.././Images/Portfolio/mathtronaut_practice.png')
var mathtronaut_play = require('../.././Images/Portfolio/mathtronaut_play.png')
var mathtronaut_blastoff = require('../.././Images/Portfolio/mathtronaut_blastoff.png')
var mathtronaut_landing = require('../.././Images/Portfolio/mathtronaut_landing.png')

var rankedchoicepoll_about = require('../.././Images/Portfolio/rankedchoicepoll_about.png')
var rankedchoicepoll_signup = require('../.././Images/Portfolio/rankedchoicepoll_signup.png')
var rankedchoicepoll_form = require('../.././Images/Portfolio/rankedchoicepoll_form.png')
var rankedchoicepoll_landing = require('../.././Images/Portfolio/rankedchoicepoll_landing.png')

class PortfolioContent extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      content: []
    }
  }

  componentDidMount()
  {
    // 'content' is an array of arrays that feeds into PortfolioRow
    // Title, Description, Images array
    let content = [
      ["Daisy Journal",
      "Life planning software.",
      [daisyjournal_landing, daisyjournal_signup, daisyjournal_journal, daisyjournal_habits],
      "https://daisyjournal.com",
      "https://github.com/galvinma/daisy-journal"
    ],
      ["Mathtronaut",
      "Educational multiplication game.",
      [mathtronaut_landing, mathtronaut_play, mathtronaut_blastoff, mathtronaut_practice],
      "https://mathtronaut.org",
      "https://github.com/galvinma/mathtronaut"
    ],
      ["Jennifer Galvin's Artist Portfolio",
      "Website for Virginia artist Jennifer Galvin.",
      [jennifergalvin_landing, jennifergalvin_about, jennifergalvin_gallery, jennifergalvin_process],
      "https://jennifergalvin.com"
    ],
      ["Ranked Choice Poll",
      "Instant-runoff voting application.",
      [rankedchoicepoll_landing, rankedchoicepoll_signup, rankedchoicepoll_about, rankedchoicepoll_form],
      "https://rankedchoicepoll.com",
      "https://github.com/galvinma/ranked-choice-poll"
    ]]
    this.setState({
      content: content
    })

  }

  render() {
    return (
      <div className="portfolio-content-container">
        {this.state.content.map((index, value) => {
          return (
              <PortfolioRow
                title={this.state.content[value][0]}
                description={this.state.content[value][1]}
                images={this.state.content[value][2]}
                link={this.state.content[value][3]}
                githubLink={this.state.content[value][4]}
              />
            )
          })
        }

      </div>
  )}
}

export default (PortfolioContent)
