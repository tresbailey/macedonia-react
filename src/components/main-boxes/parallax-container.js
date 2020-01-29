import React, { Component } from "react";
import './parallax-container.scss';

export default class ParallaxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            componentName: '',
            articleName: '',
            boxTitle: '',
            transitionQuote: '',
			showTitle: true,
        };
    }

    subRender() {
        return '<div />';
    }

	title(show) {
		if (show) {
        	return (<header className="special container">
        <div className="winger">
        <span className="fa cross"></span>
        </div>
        <h2 className="rusty">{this.state.boxTitle}</h2>
        </header>);
		} else {
			return null
		}
	}

    render() {
		const styles = this.getStyles();
        return (
            <div id={this.state.componentName+'-wrapper'} style={styles.parallaxContainer}>
                <div style={styles.overlayBg}>
                    <h2 className="rusty" style={{color: 'white', fontSize: '4rem', textAlign: 'center'}}>{this.state.transitionQuote}</h2>
                </div>
                <article id={this.state.articleName} className="flex-column simple-parallax" style={styles.screenBox}>
					{this.title(this.state.showTitle)}
                    {this.subRender()}
                </article>
            </div>
        );
    }

	getStyles() {
		var styles = {
			screenBox: {
				backgroundPosition: 'top left, top right, bottom left, bottom right',
				backgroundRepeat: 'no-repeat',
				backgroundSize: '25em',
				cursor: 'default',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-start',
			},
			parallaxContainer: {
				background: `url(${this.state.parallaxImage}) no-repeat center center fixed`,
				backgroundSize: 'cover',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-end'
			},
			overlayBg: {
				height: '100vh',
				width: '100%',
				backgroundColor: '#3F81BB',
				opacity: 0.8,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignContent: 'space-around',
				padding: '3rem',
			},
		}
		if (this.state.styleOverrides) {
			Object.keys(this.state.styleOverrides).map((key, index) => {
				styles[key] = Object.assign(styles[key], this.state.styleOverrides[key]);
			});
		}
		return styles;
	}
}
