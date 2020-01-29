import React, { Component } from "react";
import ParallaxContainer from './parallax-container.js';
import Background from '../../resources/images/IMG_0459.png';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class Location extends ParallaxContainer {
    constructor(props) {
        super(props);
        this.state = { componentName: 'location',
            parallaxImage: Background,
            articleName: 'location',
            boxTitle: 'Reaching Us',
			transitionQuote: 'Lead me, O LORD, in Your righteousness because of my enemies; make straight Your way before me',
			showTitle: true,
			styleOverrides: {
				screenBox: {
					padding: '2rem',
				},
			},
        };
    }

  subRender() {
	const style = {
	  width: '40vw',
	  height: '40vh',
	}
    return (
    <div className="categories" style={{flexDirection: 'column'}}>
        <ul className="softer">
          <li>216 Macedonia Road</li>
          <li>Gaffney, SC 29341</li>
          <li>864.489.7712</li>
          <li><a href="mailto:contact@macedoniaofgaffney.com">contact@macedoniaofgaffney.com</a></li>
        </ul>
        <div id="map-link">Open our address in <a href="https://www.google.com/maps/place/Macedonia+Baptist+Church/@35.0743012,-81.766583,15.84z/data=!4m8!1m2!3m1!2sMacedonia+Baptist+Church!3m4!1s0x88570e6899265edb:0x88894b315cc4c4a!8m2!3d35.0779216!4d-81.7607421">Google Maps</a></div>
      </div>
    )
  }
}

/*
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQysxNdPQC80uxDZFhxGPS31O8mVEEWHs'
})(Location);
*/
