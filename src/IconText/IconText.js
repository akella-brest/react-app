import React, { Component } from 'react';
import '../IconText/IconText.css';
import Icon from '../Icon/Icon.js'

class IconText extends Component {
    render() {
        const children = this.props.children;
        const texts = this.props.texts;
        const listIconText = texts.map((text) =>{
            if (text.type === 'a') {
                return <a href={text}>{text}</a>
            } else {
                return text;
            }
        });

        return (
            <div className="IconText">
                {children.map((icon, index) => {
                    return <div>
                        <i className={icon} key={icon.toString()}>
                        </i> <span>{listIconText[index]}</span><br/>
                    </div>
                })}
            </div>
        );
    }
}

export default IconText;
