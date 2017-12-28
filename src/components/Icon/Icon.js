import React, { Component } from 'react';
import './Icon.css';
import IconText from './IconText/IconText';

class Icon extends Component {

    render() {
        const icons = this.props.icons;
        const fullNameIcons = icons.map ((icon) => {
            return "fa fa-" + icon;
        });
        const listIconText = [
            this.props.listIcon.company,
            this.props.listIcon.location,
            this.props.listIcon.email,
            this.props.listIcon.blog
        ];

        return (
            <div className="Icon">
                <IconText texts={listIconText}>
                    {fullNameIcons}
                </IconText>
            </div>
        );
    }
}

export default Icon;
