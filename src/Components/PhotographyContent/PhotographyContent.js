import React from 'react'
import ImageMasonry from 'react-image-masonry';

// CSS
import './PhotographyContent.scss'

// Images
import aboveguitar from '../.././Images/Gallery/aboveguitar.jpg'
import alpsRolling from '../.././Images/Gallery/alpsRolling.jpg'
import arno from '../.././Images/Gallery/arno.jpg'
import ca_coast from '../.././Images/Gallery/ca_coast.jpg'
import carlsbad_sunset from '../.././Images/Gallery/carlsbad_sunset.jpg'
import church from '../.././Images/Gallery/church.jpg'
import col from '../.././Images/Gallery/col.jpg'
import columbia from '../.././Images/Gallery/columbia.jpg'
import damnationcreek_ocean from '../.././Images/Gallery/damnationcreek_ocean.jpg'
import sardiniasunset from '../.././Images/Gallery/SardiniaSunset.jpg'
import damnationcreek from '../.././Images/Gallery/damnationcreek.jpg'
import flor from '../.././Images/Gallery/flor.jpg'
import finny from '../.././Images/Gallery/finny.jpg'
import fred from '../.././Images/Gallery/fredericksburgbridge.jpg'
import geneva from '../.././Images/Gallery/geneva.jpg'
import kleinescheidegg from '../.././Images/Gallery/kleinescheidegg.jpg'
import lake_lucerne from '../.././Images/Gallery/lake_lugano.jpg'
import landsendrocks from '../.././Images/Gallery/landsendrocks.jpg'
import lincolncity from '../.././Images/Gallery/lincolncity.jpg'
import lugano_swim from '../.././Images/Gallery/lugano_swim.jpg'
import lugano from '../.././Images/Gallery/lugano.jpg'
import mountrigi from '../.././Images/Gallery/mountrigi.jpg'
import mount_constitution from '../.././Images/Gallery/mount_constitution.jpg'
import mount_hood from '../.././Images/Gallery/mount_hood.jpg'
import oeschinenseeClouds from '../.././Images/Gallery/oeschinenseeClouds.jpg'
import oeschinenseeSide from '../.././Images/Gallery/oeschinenseeSide.jpg'
import or_coast from '../.././Images/Gallery/or_coast.jpg'
import beach_camp from '../.././Images/Gallery/beach_camp.jpg'
import pl_mom_dad from '../.././Images/Gallery/pl_mom_dad.jpg'
import pl_storm from '../.././Images/Gallery/pl_storm.jpg'
import priestlake_point from '../.././Images/Gallery/priestlake_point.jpg'
import portland_roses from '../.././Images/Gallery/portland_roses.jpg'
import rome_bridge from '../.././Images/Gallery/rome_bridge.jpg'
import rome_street from '../.././Images/Gallery/rome_street.jpg'
import sardinia from '../.././Images/Gallery/sardinia.jpg'
import or_coast_beach from '../.././Images/Gallery/or_coast_beach.jpg'
import super_bloom from '../.././Images/Gallery/super_bloom.jpg'
import thor from '../.././Images/Gallery/thor.jpg'
import thunderstormcalm from '../.././Images/Gallery/thunderstormcalm.jpg'
import whitneysunrise from '../.././Images/Gallery/whitneysunrise.jpg'

class PhotographyContent extends React.Component {
  constructor(props) {
    super(props);


    var numCols
    if (window.innerWidth > 2000) {
      numCols = 3
    } else if (window.innerWidth > 1200) {
      numCols = 2
    } else {
      numCols = 1
    }


    this.state = {
      images: [
        [mount_hood, "Mount Hood"],
        [ca_coast, "Highway 101, Northern California"],
        [arno, "Florence, Italy"],
        [carlsbad_sunset, "Near Carlsbad, San Diego"],
        [whitneysunrise, "Mount Whitney, High Sierra Trail"],
        [finny, "Finny"],
        [columbia, "Columbia River Gorge"],
        [damnationcreek_ocean, "Waves, Northern California"],
        [rome_street, "Rome, Italy"],
        [damnationcreek, "Damnation Creek, Northern California"],
        [oeschinenseeSide, "Oeschinensee, Switzerland"],
        [flor, "Plaza Michelangelo, Florence"],
        [fred, "Fredericksburg, VA"],
        [priestlake_point, "Priest Lake, Idaho"],
        [kleinescheidegg, "Kleinescheidegg, Switzerland"],
        [pl_mom_dad, "Family, Idaho"],
        [lake_lucerne, "Lake Lucerne, Switzerland"],
        [landsendrocks, "Lands End, San Francisco"],
        [lincolncity, "Lincoln City, Oregon"],
        [aboveguitar, "Guitar Lake, High Sierra Trail"],
        [beach_camp, "Oregon Coast"],
        [alpsRolling, "Above Wengen, Switzerland"],
        [sardiniasunset, "Alghero, Italy"],
        [lugano, "Lugano, Switzerland"],
        [mountrigi, "Mount Rigi, Switzerland"],
        [mount_constitution, "Mount Constitution"],
        [church, "Mount Rigi, Switzerland"],
        [oeschinenseeClouds, "Oeschinensee, Switzerland"],
        [or_coast, "Oregon Coast Sunset"],
        [or_coast_beach, "Otter Rock"],
        [pl_storm, "Priest Lake, Idaho"],
        [portland_roses, "Portland Rose Garden"],
        [lugano_swim, "Lugano, Switzerland"],
        [rome_bridge, "Rome, Italy"],
        [col, "Colosseum, Italy"],
        [sardinia, "Sardinia, Italy"],
        [super_bloom, "Desert, Southern California"],
        [thor, "Train, Switzerland"],
        [thunderstormcalm, "After the storm, High Sierra Trail"],
        [geneva, "Geneva, Switzerland"]
      ],
      numCols: numCols
    }

    this.returnImageArray = this.returnImageArray.bind(this)
    this.returnImageMasonry = this.returnImageMasonry.bind(this)
    this.findNumCols = this.findNumCols.bind(this)
    this.setNumCols = this.setNumCols.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", this.setNumCols.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setNumCols.bind(this));
  }

  findNumCols() {
    if (window.innerWidth > 2000) {
      return 3
    } else if (window.innerWidth > 1200) {
      return 2
    } else {
      return 1
    }
  }

  setNumCols() {
    this.setState({
      numCols: this.findNumCols()
    })
  }

  returnImageArray() {
    let ret = []
    this.state.images.map((value, index) => {
      let img = this.state.images[index][0]
      ret.push(
        <img src={img} className="photography-image" />
      )
    })

    return ret
  }

  returnImageMasonry(numCols) {
    return <ImageMasonry
      children={this.returnImageArray()}
      numCols={numCols}
    ></ImageMasonry>
  }

  render() {
    let images = this.returnImageMasonry(this.state.numCols)
    return (
      <div className="photography-wrapper">
        {images}
      </div>
    )
  }
}

export default (PhotographyContent)
