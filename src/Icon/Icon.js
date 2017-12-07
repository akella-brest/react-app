import React, { Component } from 'react';
import './Icon.css';
import IconText from '../IconText/IconText.js'

class Icon extends Component {
    render() {
        const fullNameIcon = "fa fa-" + this.props.icon;
        return (
            <div className="Icon">
                <IconText icon={fullNameIcon} rel={this.props.rel} text={this.props.text} />
            </div>
        );
    }
}

export default Icon;
