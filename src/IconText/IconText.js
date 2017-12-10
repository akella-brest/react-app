import React, { Component } from 'react';
import '../IconText/IconText.css';
import Icon from '../Icon/Icon.js'

class IconText extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rel = this.props.rel;
        if (rel === "") {
            return (
                <div className="IconText">
                    <i className={this.props.icon} aria-hidden="true">&nbsp; {this.props.text} </i>
                </div>
            );
        } else {
            return (
                <div className="IconText">
                    <i className={this.props.icon} aria-hidden="true">&nbsp; <a href={rel}> {this.props.text}</a> </i>
                </div>
            );
        }
    }
}

export default IconText;
