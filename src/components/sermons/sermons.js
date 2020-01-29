import React from 'react';
import logo from '../../resources/images/macedonia-logo-white.png';
import axios from 'axios';
import Footer from "../footer.js";
import Navbar from "../navbar/navbar.js";
import SermonOption from './sermon_option.js';

export default class Sermons extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sermons: [] };
    }

    componentDidMount() {
        axios.get('https://68bb8j4plk.execute-api.us-east-1.amazonaws.com/dev/macedonia-static-site/recordings')
            .then(res => {
                this.setState({sermons: res.data });
            })
    }

    render() {
        var articleStyle= {
            marginTop: '6rem'
        };

        return (
                <div>
                <Navbar />
                 <article style={articleStyle}>
                    <header className="special container">
                    <div className="winger">
                      <span className="fa cross"></span>
                    </div>
                    <h2 className="rusty">Sermons</h2>
                    </header>
                    {this.state.sermons.map((sermon, index) => <SermonOption sermon_file={sermon} />)}
                 </article>
                <Footer />
                </div>
               );
    }
}
