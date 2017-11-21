import React, {Component} from "react";
import logo from '../resources/images/macedonia-logo-minimal.png';

export default class Navbar extends Component {
    constructor(props){
      super(props);
      this.state={isPrelim:true};
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
       let {isPrelim} = this.state
       var elem = document.getElementById('believe-wrapper');
       var offset = this.getOffset(elem);
       window.pageYOffset >= offset.top?
       this.refs.navbar.classList.remove('preliminary-menu')
       :
       this.refs.navbar.classList.add('preliminary-menu')
    }

    componentDidMount() {
        window.addEventListener('scroll', this.hideBar);        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.hideBar);
    }

  render() {
      let prelim_menu = this.state.isPrelim?"preliminary-menu":"";
      return (
      <nav id="main-header" className="navbar-default navbar-fixed-top preliminary-menu" role="navigation" ref="navbar">
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
                <div id="primary-menu-"
                    className="lockup-link-item">
                    <a href="/sermons" id="pm-link-" >Sermons</a>
                </div>
              </div>
          </div>
      </nav>
    );
  }
}
