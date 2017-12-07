import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import Tabs from './Tabs/Tabs.js';

class App extends Component {
    render() {
        const icon = ['users', 'map-marker', 'envelope', 'link'];
        const rel = ['facebook.com', '', 'mailto:akella1997@tut.by', 'vk.com/artsiom_pas_blr'];
        const text = ['@facebook', 'Brest, Belarus', 'akella1997@tut.by', '@vk'];
        return (
            <div className="App">
                    <Profile url="profile.jpg" title="profile" name="Artsiom Pas" info="Student" />
                    <Tabs />
                    {icon.map((icon, index) => <Icon icon={icon} rel={rel[index]} text={text[index]}/>)}
            </div>
        );
    }
}

export default App;
