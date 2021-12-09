import React from 'react'
import variables from '../.././Variables.scss'

// CSS
import './PhotographyContent.scss'

// Images
import aboveguitar from '../.././Images/Gallery/aboveguitar.jpg'
import alpsRolling from '../.././Images/Gallery/alpsRolling.jpg'
import arno from '../.././Images/Gallery/arno.jpg'
import beach_camp from '../.././Images/Gallery/beach_camp.jpg'
import ca_coast from '../.././Images/Gallery/ca_coast.jpg'
import carlsbad_sunset from '../.././Images/Gallery/carlsbad_sunset.jpg'
import church from '../.././Images/Gallery/church.jpg'
import col from '../.././Images/Gallery/col.jpg'
import concertZurich from '../.././Images/Gallery/concertZurich.jpg'
import damnationcreek_ocean from '../.././Images/Gallery/damnationcreek_ocean.jpg'
import damnationcreek from '../.././Images/Gallery/damnationcreek.jpg'
import dark from '../.././Images/Gallery/dark.jpg'
import flor from '../.././Images/Gallery/flor.jpg'
import fredericksburgbridge from '../.././Images/Gallery/fredericksburgbridge.jpg'
import geneva from '../.././Images/Gallery/geneva.jpg'
import genevaBoats from '../.././Images/Gallery/genevaBoats.jpg'
import kleinescheidegg from '../.././Images/Gallery/kleinescheidegg.jpg'
import lake_lucerne from '../.././Images/Gallery/lake_lugano.jpg'
import landsendrocks from '../.././Images/Gallery/landsendrocks.jpg'
import landsendsurf from '../.././Images/Gallery/landsendsurf.jpg'
import lincolncity from '../.././Images/Gallery/lincolncity.jpg'
import lugano_swim from '../.././Images/Gallery/lugano_swim.jpg'
import lugano from '../.././Images/Gallery/lugano.jpg'
import mountrigi from '../.././Images/Gallery/mountrigi.jpg'
import nightBlur from '../.././Images/Gallery/nightBlur.jpg'
import oeschinenseeClouds from '../.././Images/Gallery/oeschinenseeClouds.jpg'
import oeschinenseeSide from '../.././Images/Gallery/oeschinenseeSide.jpg'
import pl_mom_dad from '../.././Images/Gallery/pl_mom_dad.jpg'
import pl_storm from '../.././Images/Gallery/pl_storm.jpg'
import priestlake_point from '../.././Images/Gallery/priestlake_point.jpg'
import rome_bridge from '../.././Images/Gallery/rome_bridge.jpg'
import rome_street from '../.././Images/Gallery/rome_street.jpg'
import sardinia from '../.././Images/Gallery/sardinia.jpg'
import sardiniasunset from '../.././Images/Gallery/SardiniaSunset.jpg'
import sequoia from '../.././Images/Gallery/sequoia.jpg'
import super_bloom from '../.././Images/Gallery/super_bloom.jpg'
import thor from '../.././Images/Gallery/thor.jpg'
import thunderstormcalm from '../.././Images/Gallery/thunderstormcalm.jpg'
import whitneysunrise from '../.././Images/Gallery/whitneysunrise.jpg'

class PhotographyContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        [aboveguitar, "Guitar Lake, High Sierra Trail"],
        [alpsRolling, "Above Wengen, Switzerland"],
        [arno, "Florence, Italy"],
        [beach_camp, "Oregon Coast"],
        [ca_coast, "Highway 101, Northern California"],
        [carlsbad_sunset, "Near Carlsbad, San Diego"],
        [church, "Mount Rigi, Switzerland"],
        [whitneysunrise, "Mount Whitney, High Sierra Trail"],
        [col, "Colosseum, Italy"],
        [damnationcreek_ocean, "Waves, Northern California"],
        [rome_street, "Rome, Italy"],
        [damnationcreek, "Damnation Creek, Northern California"],
        [oeschinenseeSide, "Oeschinensee, Switzerland"],
        [flor, "Plaza Michelangelo, Florence"],
        [priestlake_point, "Priest Lake, Idaho"],
        [kleinescheidegg, "Kleinescheidegg, Switzerland"],
        [pl_mom_dad, "Family, Idaho"],
        [lake_lucerne, "Lake Lucerne, Switzerland"],
        [landsendrocks, "Lands End, San Francisco"],
        [lincolncity, "Lincoln City, Oregon"],
        [lugano, "Lugano, Switzerland"],
        [mountrigi, "Mount Rigi, Switzerland"],
        [oeschinenseeClouds, "Oeschinensee, Switzerland"],
        [pl_storm, "Priest Lake, Idaho"],
        [lugano_swim, "Lugano, Switzerland"],
        [rome_bridge, "Rome, Italy"],
        [sardinia, "Sardinia, Italy"],
        [sardiniasunset, "Alghero, Italy"],
        [super_bloom, "Desert, Southern California"],
        [thor, "Train, Switzerland"],
        [thunderstormcalm, "After the storm, High Sierra Trail"],
        [geneva, "Geneva, Switzerland"]
      ]
    }

    this.shuffleArray = this.shuffleArray.bind(this)
  }

  componentDidMount() {
    this.setState({
      images: this.shuffleArray(this.state.images)
    })
  }



  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array
  }

  render() {
    return (
      <div className="photography-wrapper">
        {this.state.images.map((index, value) => {

          return (
            <div className="photography-container">
              <a href={this.state.images[value][0]} target="_blank">
                <img src={this.state.images[value][0]} className="photography-image" />
              </a>
              <div className="body1 photo-caption">{this.state.images[value][1]}</div>
            </div>
          )
        })
        }

      </div>
    )
  }
}

export default (PhotographyContent)
