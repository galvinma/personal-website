import React from 'react'
import variables from '../.././Variables.scss'

// Content
import PortfolioRow from './PortfolioRow'

// CSS
import './PortfolioContent.scss'

// Images
import daisyjournal_signup from '../.././Images/Portfolio/daisyjournal_signup.png'
import daisyjournal_journal from '../.././Images/Portfolio/daisyjournal_journal.png'
import daisyjournal_habits from '../.././Images/Portfolio/daisyjournal_habits.png'
import daisyjournal_landing from '../.././Images/Portfolio/daisyjournal_landing.png'

import jennifergalvin_landing from '../.././Images/Portfolio/jennifergalvin_landing.png'
import jennifergalvin_process from '../.././Images/Portfolio/jennifergalvin_process.png'
import jennifergalvin_about from '../.././Images/Portfolio/jennifergalvin_about.png'
import jennifergalvin_gallery from '../.././Images/Portfolio/jennifergalvin_gallery.png'

import mathtronaut_practice from '../.././Images/Portfolio/mathtronaut_practice.png'
import mathtronaut_play from '../.././Images/Portfolio/mathtronaut_play.png'
import mathtronaut_blastoff from '../.././Images/Portfolio/mathtronaut_blastoff.png'
import mathtronaut_landing from '../.././Images/Portfolio/mathtronaut_landing.png'

import rankedchoicepoll_about from '../.././Images/Portfolio/rankedchoicepoll_about.png'
import rankedchoicepoll_signup from '../.././Images/Portfolio/rankedchoicepoll_signup.png'
import rankedchoicepoll_form from '../.././Images/Portfolio/rankedchoicepoll_form.png'
import rankedchoicepoll_landing from '../.././Images/Portfolio/rankedchoicepoll_landing.png'


import crossword from '../.././Images/Portfolio/crossword.png'
import wordsearch from '../.././Images/Portfolio/wordsearch.png'
import wordle from '../.././Images/Portfolio/wordle.png'
import wordweb from '../.././Images/Portfolio/wordweb.png'

class PortfolioContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    }
  }

  componentDidMount() {
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
        "https://jennifergalvin.com",
        "https://jennifergalvin.com"
      ],
      ["Ranked Choice Poll",
        "Instant-runoff voting application.",
        [rankedchoicepoll_landing, rankedchoicepoll_signup, rankedchoicepoll_about, rankedchoicepoll_form],
        "https://rankedchoicepoll.com",
        "https://github.com/galvinma/ranked-choice-poll"
      ],
      ["Word Games",
        "Simple JavaScript Word Games.",
        [crossword, wordsearch, wordle, wordweb],
        "https://github.com/galvinma/word-games",
        "https://github.com/galvinma/word-games"
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
    )
  }
}

export default (PortfolioContent)
