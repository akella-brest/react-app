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
        return fetch('https://api.github.com/users/gaearon')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    company: responseJson.company,
                    location: responseJson.location,
                    email: responseJson.email ?
                        <a href={'mailto:' + responseJson.email}>{responseJson.email}</a> :
                        'email is not visible',
                    url: responseJson.blog ?
                        <a href={responseJson.blog}>{responseJson.blog}</a> :
                        'blog is not visible',
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
                <IconText texts={listIconText}>
                    {fullNameIcons}
                </IconText>
            </div>
        );
    }
}

export default Icon;
