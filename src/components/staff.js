import React, { Component } from "react";
import tom from '../resources/images/Tom-Campbell.png';

export default class Staff extends React.Component {
  render() {
  return (
	  <div className="parallax-container">
        <article className="screen-box flex-column simple-parallax">
        <header className="special container">
        <div className="winger">
          <span className="fa cross"></span>
        </div>
        <h2 className="rusty">Leading Us</h2>
        </header>
  <div className="categories">
    <div className="profile">
    <img className="img-responsive profile-pic summary" src={ tom } />
    </div>
    <div className="profile-details">
    <h2 className="standout" >Pastor Tom Campbell</h2>
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
      <span><span className="fa fa-envelope"></span>: <a href="mailto:tom@macedoniaofgaffney.com">tom@macedoniaofgaffney.com</a></span>
    </div>
  </div>
  </article>
    </div>
  )
  }
};

