import React, { Component } from 'react';
import './Icon.css';
import IconText from '../IconText/IconText.js'

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listIconText: {
                company: '',
                location: '',
                email: '',
                url: ''
            }
        }
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/akella-brest')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    company: responseJson.company,
                    location: responseJson.location,
                    email: responseJson.email,
                    url: responseJson.blog
                }, function () {

                });
            })
    }

    render() {
        const icons = this.props.icons;
        const fullNameIcons = icons.map ((icon) => {
            return "fa fa-" + icon;
        });

        return (
            <div className="Icon">
                <IconText icons={fullNameIcons} rel={this.props.rel} text={this.props.text} />
            </div>
        );
    }
}

export default Icon;
