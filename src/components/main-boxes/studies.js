import React, { Component } from "react";
import ParallaxContainer from './parallax-container.js';
import Background from '../../resources/images/IMG_0459.png';

export default class FeaturedStudies extends ParallaxContainer {
    constructor(props) {
        super(props);
        this.state = {componentName: 'study',
            parallaxImage: Background,
            articleName: 'featured-study',
            boxTitle: 'Current Study',
            transitionQuote: 'We believe the Holy Bible is the Word of God written by men divinely inspired and is the sole authority for life and faith',
			styleOverrides: {
				overlayBg: {backgroundColor: '#8e0c56'},
			},
        };
    }

    subRender() {

        return (
            <div className="categories flexible flex-row" style={{width: '100%'}}>
				<div className="feature">
					<img className="img-responsive summary" src="https://orig00.deviantart.net/c7bd/f/2011/336/0/6/06f495c03d66f42763a42bbaa9ee05b0-d4hx5dm.jpg" />
				</div>
				<div className="flex-column">
					{this.title(true)}
                <span className="softer" style={{padding: '1rem'}}>
                Our service will not end when we get to Heaven. We will still have jobs to do and will not be sitting around only singing songs.
                </span>
				</div>
            </div>
               )
    }
}

