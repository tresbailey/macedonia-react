import React from 'react';
import logo from '../../resources/images/macedonia-logo-white.png';
import { Link } from "react-router-dom";
import './sermons.scss';

export default class SermonOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sermon: props.sermon_file };
    }

    render() {
        if (!this.state.sermon.Tags.Title) {
            return null;
        }
        return (
            <div className="container central-content">
                <article className="sermon-container">
                    <aside className="sermon-image">
                        <img className="img-responsive summary" src={this.state.sermon.Tags.Background} />
                    </aside>
                    <section className="sermon-details">
                    <h2 className="standout">{this.state.sermon.Tags.Title}</h2>
                    <div className="softer">{this.state.sermon.Tags.Speaker}</div>
                    <audio controls>
                        <source src={this.state.sermon.url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="softer">{this.state.sermon.Tags.Description}</div>
                    </section>
                </article>
            </div>
        )
    }
}

