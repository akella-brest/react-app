import React, { Component } from 'react';
import './Icon.css';
import Icon from './Icon';

class IconText extends Component {
    render() {
        return (
            <div className="IconText">
                <Icon
                    social=""
                    location="London, UK"
                    mail=""
                    link=""
                />
            </div>
        );
    }
}

export default IconText;
