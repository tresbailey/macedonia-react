import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from '../../resources/images/macedonia-logo-minimal.png';
import './navbar.scss';

export default class Navbar extends Component {
    constructor(props){
      super(props);
      this.state={isPrelim: props.isPrelim};
      this.hideBar = this.hideBar.bind(this)
    }

    getOffset(element) {
      var bounding = element.getBoundingClientRect();
      return {
          top: bounding.top + document.body.scrollTop,
          left: bounding.left + document.body.scrollLeft
        };
    }

    hideBar(){
       var elem = document.getElementById('believe-wrapper');
       var offset = this.getOffset(elem);
       window.pageYOffset >= offset.top?
       this.refs.navbar.classList.remove('preliminary-menu')
       :
       this.refs.navbar.classList.add('preliminary-menu')
    }

    componentDidMount() {
        if (this.state.isPrelim) {
        window.addEventListener('scroll', this.hideBar);        
        }
    }

    componentWillUnmount() {
        if (this.state.isPrelim) {
        window.removeEventListener('scroll', this.hideBar);
        }
    }

  render() {
      console.log(this.state);
      return (
      <nav id="main-header" className={"navbar-default navbar-fixed-top " + (this.state.isPrelim ? 'preliminary-menu' : "")} role="navigation" ref="navbar">
          <div className="main-lockup">
              <div className="lockup-logo">
                  <a href="/">
                      <img src={ logo } />
                  </a>
              </div>
              <div className="link-lockup flex-column">
              <div className="flex-row icon-lockup">
                  <a href="https://www.facebook.com/Macedonia-Baptist-Church-135698603145980">
                      <span className="fa fa-facebook-official"></span>
                  </a>
              </div>
              <div className="flex-row">
                <div id="primary-menu-"
                    className="lockup-link-item">
                    <Link to='/sermons'>Sermons</Link>
                </div>
                <div id="primary-menu-"
                    className="lockup-link-item">
                    <Link to='/newsletters'>Newsletters</Link>
                </div>
            </div>
              </div>
          </div>
      </nav>
    );
  }
}
