import React, { Component } from "react";
import ParallaxContainer from './parallax-container.js';
import Background from '../../resources/images/IMG_0459.png';
import tom from '../../resources/images/Tom-Campbell.png';

export default class Staff extends ParallaxContainer {
    constructor(props) {
        super(props);
        this.state = {componentName: 'staff',
            parallaxImage: Background,
            articleName: 'the-staff',
            boxTitle: 'Leading Us',
			transitionQuote: 'Whoever aspires to be an overseer desires a noble task',
        };
    }

  subRender() {
	  var profileDetails = {
		padding: '1rem',
	  };
	  return (
		<div className="categories flexible flex-row" style={{width: '100%', padding: '1rem',}}>
		<div className="profile">
		<img className="img-responsive summary" src={ tom } />
		</div>
		<div style={profileDetails}>
		<h2 className="rusty" style={{fontSize: '4rem', textAlign: 'center'}} >Pastor Tom Campbell</h2>
		<span className="softer">I experienced a call to ministry at a very young age.
When I was ten years old, my mother showed me an
entry blank in my Baby Book that stated, “What I want
to be when I grow up”. In that space I wrote, “ I want
to be a pastor”. At the age of nineteen, God confirmed
His calling upon my life and I formally surrendered to
the ministry. The journey that God has led me on began
as a youth pastor and then as an associate pastor before
I served as a senior pastor. When I surrendered to the
call of the ministry, I surrendered myself to be used by
God in any way that He chooses. I believe that we learn
through each chapter of our life, which in turn prepares
us for the next chapter. My experiences as a youth
pastor and an associate pastor helped shape me and
prepare me to serve as a senior pastor. I absolutely love
pastoring. It is the fulfillment of God’s calling on my
life and my joy in ministry.</span>
<br/>
		  <span className="normal"><span className="fa fa-envelope"></span>: <a href="mailto:tom@macedoniaofgaffney.com">tom@macedoniaofgaffney.com</a></span>
		</div>
	  </div>
	  )
  }
};

