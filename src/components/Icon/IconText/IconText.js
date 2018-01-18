import React, { Component } from 'react';
import './IconText.css';

class IconText extends Component {


    render() {
        const texts = this.props.texts;

        const listIconText = texts.map((text, index) => {
            if (text == null) {
                return `email is not visible`
            } else if (index >= 3) {
                return (<a href={text}>{text}</a>);
            } else {
                return text;
            }
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
