import React from 'react'
import variables from '../.././Variables.scss'

// CSS
import './PhotographyContent.scss'

// Images
var aboveguitar = require('../.././Images/Gallery/aboveguitar.jpg')
var alpsRolling = require('../.././Images/Gallery/alpsRolling.jpg')
var arno = require('../.././Images/Gallery/arno.jpg')
var beach_camp = require('../.././Images/Gallery/beach_camp.jpg')
var ca_coast = require('../.././Images/Gallery/ca_coast.jpg')
var carlsbad_sunset = require('../.././Images/Gallery/carlsbad_sunset.jpg')
var church = require('../.././Images/Gallery/church.jpg')
var col = require('../.././Images/Gallery/col.jpg')
var concertZurich = require('../.././Images/Gallery/concertZurich.jpg')
var damnationcreek_ocean = require('../.././Images/Gallery/damnationcreek_ocean.jpg')
var damnationcreek = require('../.././Images/Gallery/damnationcreek.jpg')
var dark = require('../.././Images/Gallery/dark.jpg')
var flor = require('../.././Images/Gallery/flor.jpg')
var fredericksburgbridge = require('../.././Images/Gallery/fredericksburgbridge.jpg')
var geneva = require('../.././Images/Gallery/geneva.jpg')
var genevaBoats = require('../.././Images/Gallery/genevaBoats.jpg')
var kleinescheidegg = require('../.././Images/Gallery/kleinescheidegg.jpg')
var lake_lucerne = require('../.././Images/Gallery/lake_lugano.jpg')
var landsendrocks = require('../.././Images/Gallery/landsendrocks.jpg')
var landsendsurf = require('../.././Images/Gallery/landsendsurf.jpg')
var lincolncity = require('../.././Images/Gallery/lincolncity.jpg')
var lugano_swim = require('../.././Images/Gallery/lugano_swim.jpg')
var lugano = require('../.././Images/Gallery/lugano.jpg')
var mountrigi = require('../.././Images/Gallery/mountrigi.jpg')
var nightBlur = require('../.././Images/Gallery/nightBlur.jpg')
var oeschinenseeClouds = require('../.././Images/Gallery/oeschinenseeClouds.jpg')
var oeschinenseeSide = require('../.././Images/Gallery/oeschinenseeSide.jpg')
var pl_mom_dad = require('../.././Images/Gallery/pl_mom_dad.jpg')
var pl_storm = require('../.././Images/Gallery/pl_storm.jpg')
var priestlake_point = require('../.././Images/Gallery/priestlake_point.jpg')
var rome_bridge = require('../.././Images/Gallery/rome_bridge.jpg')
var rome_street = require('../.././Images/Gallery/rome_street.jpg')
var sardinia = require('../.././Images/Gallery/sardinia.jpg')
var sardiniasunset = require('../.././Images/Gallery/SardiniaSunset.jpg')
var sequoia = require('../.././Images/Gallery/sequoia.jpg')
var super_bloom = require('../.././Images/Gallery/super_bloom.jpg')
var thor = require('../.././Images/Gallery/thor.jpg')
var thunderstormcalm = require('../.././Images/Gallery/thunderstormcalm.jpg')
var whitneysunrise = require('../.././Images/Gallery/whitneysunrise.jpg')

class PhotographyContent extends React.Component {
    constructor(props)
    {
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
    }

  render() {
    return (
      <div className="photography-wrapper">
        {this.state.images.map((index, value) => {

          return (
              <div className="photography-container">
                <a href={this.state.images[value][0]} target="_blank">
                  <img src={this.state.images[value][0]} className="photography-image"/>
                </a>
                <div className="h6 photo-caption">{this.state.images[value][1]}</div>
              </div>
            )
          })
        }

      </div>
  )}
}

export default (PhotographyContent)
