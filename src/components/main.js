import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from '../resources/images/macedonia-logo-white.png';
import Home from "./home.js";
import Sermons from "./sermons/sermons.js";
import Newsletters from "./newsletters/newsletters.js";

export default class Main extends React.Component {

    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/sermons" component={Sermons} />
                    <Route path="/newsletters" component={Newsletters} />
                </Switch>
            </main>
        )
    }
};

