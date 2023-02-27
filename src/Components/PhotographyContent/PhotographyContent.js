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
        [kleinescheidegg, "Kleinescheidegg, Switzerland"],
        [damnationcreek, "Damnation Creek, Northern California"],
        [mount_hood, "Mount Hood"],
        [portland_roses, "Portland Rose Garden"],
        [columbia, "Columbia River Gorge"],
        [whitneysunrise, "Mount Whitney, High Sierra Trail"],
        [oeschinenseeSide, "Oeschinensee, Switzerland"],
        [carlsbad_sunset, "Near Carlsbad, San Diego"],
        [ca_coast, "Highway 101, Northern California"],
        [fred, "Fredericksburg, VA"],
        [arno, "Florence, Italy"],
        [finny, "Finny"],
        [pl_mom_dad, "Family, Idaho"],
        [priestlake_point, "Priest Lake, Idaho"],
        [lake_lucerne, "Lake Lucerne, Switzerland"],
        [landsendrocks, "Lands End, San Francisco"],
        [pl_storm, "Priest Lake, Idaho"],
        [lincolncity, "Lincoln City, Oregon"],
        [lugano, "Lugano, Switzerland"],
        [church, "Mount Rigi, Switzerland"],
        [or_coast, "Oregon Coast Sunset"],
        [col, "Colosseum, Italy"],
        [sardinia, "Sardinia, Italy"],
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
      animate={false}
      forceOrder={true}
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
