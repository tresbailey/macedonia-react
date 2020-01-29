import React, { Component } from "react";
import ParallaxContainer from './parallax-container.js';
import Background from '../../resources/images/IMG_0459.png';

export default class Believe extends ParallaxContainer {
    constructor(props) {
        super(props);
        this.state = {componentName: 'believe',
            parallaxImage: Background,
            articleName: 'we-believe',
            boxTitle: 'We Believe',
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
					<img className="img-responsive summary" src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350" />
				</div>
				<div className="flex-column">
					{this.title(true)}
                <span className="softer" style={{padding: '1rem'}}>
                We believe the Holy Bible is the Word of God written by men divinely inspired and is the sole authority for life and faith. We believe there is one and only one true God who exists in the eternal triune (three persons); the Father, the Son, and the Holy Spirit. God as Father reigns with providential care over His universe, His creatures, and human history according to the purposes of His grace.
                </span>
                <span className="softer" style={{padding: '1rem'}}>
                We believe there is one and only one true God who exists in the eternal triune (three persons); the Father, the Son, and the Holy Spirit, with distinct personal attributes, but without division of nature, essence, or being.
                </span>
				</div>
            </div>
               )
    }
}
