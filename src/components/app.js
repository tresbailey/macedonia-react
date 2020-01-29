import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from '../resources/images/macedonia-logo-white.png';
import Main from "./main.js";
import Navbar from "./navbar/navbar.js";

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Main />
            </div>
        )
    }
};
