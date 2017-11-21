import React, { Component } from "react";

export default class Believe extends React.Component {

  render() {
    return (
	  <div id="believe-wrapper" className="parallax-container">
      <article id="we-believe" className="screen-box flex-column simple-parallax">
      <header className="special container">
      <div className="winger">
        <span className="fa cross"></span>
      </div>
      <h2 className="rusty">We Believe</h2>
      </header>
      <div className="categories">
      <span className="softer">
        We believe the Holy Bible is the Word of God written by men divinely inspired and is the sole authority for life and faith. We believe there is one and only one true God who exists in the eternal triune (three persons); the Father, the Son, and the Holy Spirit. God as Father reigns with providential care over His universe, His creatures, and human history according to the purposes of His grace.
      </span>
       </div>
      </article>
	  </div>
    )
  }
}
