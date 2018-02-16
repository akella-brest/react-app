import React, { Component } from 'react';
import './IconText.css';
import PropTypes from 'prop-types';

class IconText extends Component {

    static propTypes = {
        texts: PropTypes.array
    };

    render() {
        const { texts } = this.props;

        var listIconText = texts.map((text) => {
            if (text === null) {
                return `email is not visible`;
            } else if (text !== undefined && text.indexOf('http') !== -1) {
                return (<a href={text}>{text}</a>);
            }
            return text;
        });

        var IconText = this.props.children.map((icon, index) => {
            return <div key={index}>
                <i className={icon}>
                </i><span>{listIconText[index]}</span><br/>
            </div>
        });

        return (
            <div className="IconText">
                {IconText}
            </div>
        );
    }
}

export default IconText;
