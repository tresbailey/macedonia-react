import React, { Component } from "react";

export default class Worships extends React.Component {

  render() {
    return (
      <div>
      <div className="flex-row" style={{justifyContent: 'space-around'}}>
        <h4>
          Sunday Morning Services
        </h4>
          <div>
            8:30 a.m.
            <span className="softer">Early Worship</span>
          </div>
          <div>
            9:30 a.m.
            <span className="softer">Sunday School</span>
          </div>
          <div>
            10:30 a.m.
            <span className="softer">Second Service</span>
          </div>
      </div>
      </div>
    )
  }
}
