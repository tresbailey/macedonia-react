import React from 'react';
import logo from '../resources/images/macedonia-logo-white.png';
import Worships from "./worship/worships.js";
import Believe from "./main-boxes/believe.js";
import Location from "./main-boxes/location.js";
import Staff from "./main-boxes/staff.js";
import FeaturedStudies from "./main-boxes/studies.js";
import Navbar from "./navbar/navbar.js";
import Footer from "./footer.js";

export default class Home extends React.Component {
  
  render() {
    return (
      <div>
      <Navbar isPrelim="true"/>
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
	  <FeaturedStudies />
      <Location/>
      <Footer />
      </div>
    );
  }
}
