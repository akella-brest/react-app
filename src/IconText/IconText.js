import React, { Component } from 'react';
import '../IconText/IconText.css';
import Icon from '../Icon/Icon.js'

class IconText extends Component {
    render() {
        const icons = this.props.icons;
        const listIcon = icons.map((icon) =>
            <i className={icon} key={icon.toString()}> </i>
        );

        return (
            <div className="IconText">
                {listIcon}
            </div>
        );
    }
}

export default IconText;
