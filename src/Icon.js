import React, { Component } from 'react';
import './Icon.css';
import './font-awesome-4.7.0/css/font-awesome.min.css';

class Icon extends Component {
    render() {
        return (
            <div className="Icon">
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <i className="fa fa-link" aria-hidden="true"></i>
            </div>
        );
    }
}

export default Icon;
