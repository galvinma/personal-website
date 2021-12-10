import React from 'react'

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
import damnationcreek_ocean from '../.././Images/Gallery/damnationcreek_ocean.jpg'
import damnationcreek from '../.././Images/Gallery/damnationcreek.jpg'
import flor from '../.././Images/Gallery/flor.jpg'
import geneva from '../.././Images/Gallery/geneva.jpg'
import kleinescheidegg from '../.././Images/Gallery/kleinescheidegg.jpg'
import lake_lucerne from '../.././Images/Gallery/lake_lugano.jpg'
import landsendrocks from '../.././Images/Gallery/landsendrocks.jpg'
import lincolncity from '../.././Images/Gallery/lincolncity.jpg'
import lugano_swim from '../.././Images/Gallery/lugano_swim.jpg'
import lugano from '../.././Images/Gallery/lugano.jpg'
import mountrigi from '../.././Images/Gallery/mountrigi.jpg'
import oeschinenseeClouds from '../.././Images/Gallery/oeschinenseeClouds.jpg'
import oeschinenseeSide from '../.././Images/Gallery/oeschinenseeSide.jpg'
import pl_mom_dad from '../.././Images/Gallery/pl_mom_dad.jpg'
import pl_storm from '../.././Images/Gallery/pl_storm.jpg'
import priestlake_point from '../.././Images/Gallery/priestlake_point.jpg'
import rome_bridge from '../.././Images/Gallery/rome_bridge.jpg'
import rome_street from '../.././Images/Gallery/rome_street.jpg'
import sardinia from '../.././Images/Gallery/sardinia.jpg'
import sardiniasunset from '../.././Images/Gallery/SardiniaSunset.jpg'
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
      ],
      img_content: []
    }

    this.shuffleArray = this.shuffleArray.bind(this)
    this.returnImageArray = this.returnImageArray.bind(this)
  }

  componentDidMount() {
    this.setState({
      images: this.shuffleArray(this.state.images)
    })

    this.returnImageArray()
    window.addEventListener("resize", this.returnImageArray.bind(this));
  }


  componentWillUnmount() {
    window.removeEventListener("resize", this.returnImageArray.bind(this));
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  returnImageArray() {
    let ret = []
    {
      this.state.images.map((value, index) => {
        if (window.innerWidth > 768) {
          if (index % 2 == 0 && this.state.images.length >= index + 1) {
            let img_1 = this.state.images[index][0]
            let caption_1 = this.state.images[index][1]
            let img_2 = this.state.images[index + 1][0]
            let caption_2 = this.state.images[index + 1][1]
            ret.push(
              <div className="photography-container">
                <div className="photo-container">
                  <a href={img_1} target="_blank">
                    <img src={img_1} className="photography-image" />
                  </a>
                  <div className="body1 photo-caption">{caption_1}</div>
                </div>

                <div className="photo-container">
                  <a href={img_2} target="_blank">
                    <img src={img_2} className="photography-image" />
                  </a>
                  <div className="body1 photo-caption">{caption_2}</div>
                </div>
              </div>
            )
          }
        } else {
          let img_1 = this.state.images[index][0]
          let caption_1 = this.state.images[index][1]
          ret.push(
            <div className="photography-container">
              <div className="photo-container">
                <a href={img_1} target="_blank">
                  <img src={img_1} className="photography-image" />
                </a>
                <div className="body1 photo-caption">{caption_1}</div>
              </div>
            </div>
          )
        }
      })
    }
    this.setState({ img_content: ret })
  }

  render() {
    return (
      <div className="photography-wrapper">
        {this.state.img_content}
      </div>
    )
  }
}

export default (PhotographyContent)
