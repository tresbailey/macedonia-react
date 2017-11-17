import React from "react";

const Footer = () => {
  "use strict";
  return (
		<footer>
			<div className="nav-footer">
				<span><span className="fa fa-map-marker"></span>: 216 Macedonia Road || Gaffney, SC 29341</span>
				<span><span className="fa fa-phone"></span>: <a href="+1864-489-7712">864.489.7712</a></span>
				<span><span className="fa fa-envelope"></span>: <a href="mailto:contact@macedoniaofgaffney.com">contact@macedoniaofgaffney.com</a></span>
			</div>
			<div className="footer-lockup">
				<label className="icon-lockup">
					<p>&copy; 2016</p>
				</label>
				<label className="icon-lockup">
					<a href="http://tresback.com">Tresback Solutions</a>
				</label>
			</div>
		</footer>
  );
};

export default Footer;
