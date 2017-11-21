import React from 'react';
import logo from '../resources/images/macedonia-logo-white.png';
import Worships from "./worships.js";
import Believe from "./believe.js";
import Location from "./location.js";
import Staff from "./staff.js";
import Navbar from "./navbar.js";
import Footer from "./footer.js";

export default class Home extends React.Component {
  
  render() {
    return (
      <div>
      <Navbar />
      <article>
      <div className="container-fluid primary-content window-height tagline-box">
        <div className="row">
          <div className="col-md-12">
            <div className="main-marquee">
              <div className="jumbotron jumbotron-fluid">
                <div className="tagline-wrapper">
                  <div className="main-tagline">
                    <img src={ logo } />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Worships/>
      </div>
      </article>
      <Believe ref="beliefs"/>
	  <Staff/>
      <Location/>
      <Footer />
      </div>
    );
  }
}
