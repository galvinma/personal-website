import React from 'react'
import { NavLink } from 'react-router-dom';

// Content
import Nav from '../../Components/Nav/Nav'


// CSS
import '../../App.scss'
import '../../Font.scss'
import './NotFound.scss'

class NotFound extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {}
  }

  render() {
    return (

      <div className="single-page-content-wrapper">

        <Nav />
        
        <div className="not-found-content-wrapper">
          <div className="not-found-text-container">
            <div className="subtitle1 not-found-text">Uh, oh. Something went wrong.</div>
            <div className="subtitle1 not-found-text">
              <NavLink exact to="/" className="unstyled-link">Take me back.</NavLink>
            </div>
          </div>
        </div>

      </div>
  )}
}

export default (NotFound)
