import React, { Component } from "react";
import GoogleApiComponent from './utils/GoogleApiComponent.js';

export default class Location extends React.Component {

  render() {
    return (
	  <div className="parallax-container">
        <article className="screen-box flex-column simple-parallax">
        <header className="special container">
        <div className="winger">
          <span className="fa cross"></span>
        </div>
        <h2 className="rusty">Reaching Us</h2>
        </header>
        <div>&nbsp;</div>
        <ul className="buttons">
          <li>216 Macedonia Road</li>
          <li>Gaffney, SC 29341</li>
          <li>864.489.7712</li>
          <li><a href="mailto:contact@macedoniaofgaffney.com">contact@macedoniaofgaffney.com</a></li>
        </ul>
        <div id="floating-panel">
          <div id="map-link">Open our address in <a href="https://maps.google.com/maps/place/Macedonia+Baptist+Church/@35.077922,-81.7651193">Google Maps</a></div>
        </div>
        <div id="floating-panel">
          <strong>Start:</strong>
          <select id="start">
            <option value="initial"></option>
            <option value="gaffney, sc">Gaffney</option>
            <option value="spartanburg, sc">Spartanburg</option>
            <option value="shelby, nc">Shelby</option>
            <option value="columbia, sc">Columbia</option>
          </select>
        </div>
        <div id="right-panel"></div>
        <div id="map"></div>
        </article>
      </div>
    )
  }
}

/*
export default GoogleApiComponent({
  apiKey: 'AIzaSyByyd8Bta6OsgqXS4zParQ7AdWGHSGjvys'
})(Container)
*/
