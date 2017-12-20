import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import Tabs from './Tabs/Tabs.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProfile: {
                url: '',
                name: '',
                nickname: '',
                information: ''
            },
            listIcon: {
                company: '',
                location: '',
                email: '',
                url: ''
            },
            listTabs: {
                text: ''
            }
        }
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/gaearon')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    listProfile: {
                        url: responseJson.avatar_url,
                        name: responseJson.name,
                        nickname: responseJson.login,
                        information: responseJson.bio
                    },
                    listIcon: {
                        company: responseJson.company,
                        location: responseJson.location,
                        email: responseJson.email ?
                            <a href={'mailto:' + responseJson.email}>{responseJson.email}</a> :
                            'email is not visible',
                        url: responseJson.blog ?
                            <a href={responseJson.blog}>{responseJson.blog}</a> :
                            'blog is not visible',
                    },
                    listTabs: {
                        text: responseJson.bio
                    }
                }, function() {
                    // do something with new state
                });
            })
    }

    render() {
        const icons = ['users', 'map-marker', 'envelope', 'link'];

        return (
            <div className="App">
                    <Profile
                        url={this.state.listProfile.url}
                        name={this.state.listProfile.name}
                        nickname={this.state.listProfile.nickname}
                        information={this.state.listProfile.information}
                    />
                    <Tabs
                        text={this.state.listTabs.text}
                    />
                    <Icon
                        icons={icons}
                        listIcon={this.state.listIcon}
                    />
            </div>
        );
    }
}

export default App;
