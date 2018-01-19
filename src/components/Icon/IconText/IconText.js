import React, { Component } from 'react';
import './IconText.css';

class IconText extends Component {
    render() {
        const { texts } = this.props;

        if (texts[0] != undefined) {
            var listIconText = texts.map((text) => {
                if (text === null) {
                    return `email is not visible`;
                } else if (text.indexOf('http') != -1) {
                    return (<a href={text}>{text}</a>);
                }
                return text;
            });

            var IconText = this.props.children.map((icon, index) => {
                return <div key={index}>
                    <i className={icon}>
                    </i><span>{listIconText[index]}</span><br/>
                </div>
            })
        }

        return (
            <div className="IconText">
                {IconText}
            </div>
        );
    }
}

export default IconText;
