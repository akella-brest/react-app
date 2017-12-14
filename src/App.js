import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import Tabs from './Tabs/Tabs.js';
import Edit from './Tabs/Edit/Edit.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            name: '',
            nickname: '',
            information: '',
        }
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/gaearon')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    url: responseJson.avatar_url,
                    name: responseJson.name,
                    nickname: responseJson.login,
                    information: responseJson.bio,
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
                        url={this.state.url}
                        name={this.state.name}
                        nickname={this.state.nickname}
                        information={this.state.information}
                    />
                    <Tabs />
                    <Icon icons={icons}/>
            </div>
        );
    }
}

export default App;
