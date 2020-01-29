import React, { Component } from "react";
import './worship.scss';

export default class Worships extends React.Component {

  render() {
    return (
      <div>
      <div className="flexible flex-row" style={{justifyContent: 'space-around'}}>
        <h4 className="serviceTitle">
          Sunday Morning Services
        </h4>
          <div className="flex-row times">
            <span className="normal">
            8:30 a.m.
            </span>
            <span className="softer">Early Worship</span>
          </div>
          <div className="flex-row times">
            <span className="normal">
            9:30 a.m.
            </span>
            <span className="softer">Sunday School</span>
          </div>
          <div className="flex-row times">
            <span className="normal">
            10:30 a.m.
            </span>
            <span className="softer">Second Service</span>
          </div>
      </div>
      </div>
    )
  }
}
