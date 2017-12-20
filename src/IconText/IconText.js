import React, { Component } from 'react';
import '../IconText/IconText.css';

class IconText extends Component {
    render() {
        const texts = this.props.texts;
        const listIconText = texts.map((text) => {
            return (text.type === 'a') ?
                <a href={text}>{text}</a> :
                text;
        });

        return (
            <div className="IconText">
                {this.props.children.map((icon, index) => {
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
