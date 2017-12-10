import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import Tabs from './Tabs/Tabs.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            name: '',
            nickname: '',
            information: ''
        }
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/akella-brest')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    url: responseJson.avatar_url,
                    name: responseJson.name,
                    nickname: responseJson.login,
                    information: responseJson.bio
                }, function() {
                    // do something with new state
                });
            })
    }

    render() {
        const icon = ['users', 'map-marker', 'envelope', 'link'];
        const rel = ['facebook.com', '', 'mailto:akella1997@tut.by', 'vk.com/artsiom_pas_blr'];
        const text = ['@facebook', 'Brest, Belarus', 'akella1997@tut.by', '@vk'];
        return (
            <div className="App">
                    <Profile
                        url={this.state.url}
                        name={this.state.name}
                        nickname={this.state.nickname}
                        information={this.state.information}
                    />
                    <Tabs />
                    {icon.map((icon, index) => <Icon
                        icon={icon}
                        rel={rel[index]}
                        text={text[index]}
                    />)}
            </div>
        );
    }
}

export default App;
