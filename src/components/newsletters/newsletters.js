import React from 'react';
import logo from '../../resources/images/macedonia-logo-white.png';
import axios from 'axios';
import Footer from "../footer.js";
import Navbar from "../navbar/navbar.js";
import Newsletter from './newsletter.js';

export default class Newsletters extends React.Component {
    constructor(props) {
        super(props);
        this.state = { newsletters: [] };
    }

    componentDidMount() {
        axios.get('https://68bb8j4plk.execute-api.us-east-1.amazonaws.com/dev/macedonia-static-site/newsletters/')
            .then(res => {
                this.setState({newsletters: res.data})
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
                    <h2 className="rusty">Newsletters</h2>
                    </header>
                    {this.state.newsletters.map((newsletter, index) => <Newsletter newsletter_file={newsletter} />)}
                 </article>
                <Footer />
                </div>
               );
    }
}
