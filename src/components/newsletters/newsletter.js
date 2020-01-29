import React from 'react';
import logo from '../../resources/images/macedonia-logo-white.png';
import { Link } from "react-router-dom";
import './newsletters.scss';

export default class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newsletter: props.newsletter_file };
    }

    render() {
        if (!this.state.newsletter.Tags.PublishDate) {
            return null;
        }
        return (
            <div className="container central-content">
                <div><a href={this.state.newsletter.url}>{this.state.newsletter.Tags.PublishDate}</a></div>
            </div>
        )
    }
}
