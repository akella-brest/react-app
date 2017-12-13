import React, { Component } from 'react';
import './Icon.css';
import IconText from '../IconText/IconText.js'

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            location: '',
            email: '',
            url: ''
        }
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/akella-brest')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    company: responseJson.company,
                    location: responseJson.location,
                    email: <a href={responseJson.email}> {responseJson.email} </a>,
                    url: <a href={responseJson.email}> {responseJson.blog} </a>
                }, function () {
                });
            })
    }

    render() {
        const icons = this.props.icons;
        const fullNameIcons = icons.map ((icon) => {
            return "fa fa-" + icon;
        });
        const listIconText = [
            this.state.company,
            this.state.location,
            this.state.email,
            this.state.url
        ];

        return (
            <div className="Icon">
                <IconText>
                    {fullNameIcons.map ((icon, index) =>
                        <div>
                            <i className={icon}
                               key={icon.toString()}>
                            </i>
                            {listIconText[index]}
                        </div>
                    )}
                </IconText>
            </div>
        );
    }
}

export default Icon;
