import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import Tabs from './Tabs/Tabs.js';

import { store } from '../index';
import { receiveDataProfile } from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount() {
        return fetch('https://api.github.com/users/gaearon')
            .then((response) => response.json())
            .then((responseJson) => {
                store.dispatch(receiveDataProfile(responseJson));
            });
    }

    render() {
        const icons = ['users', 'map-marker', 'envelope', 'link'];
        const {avatar_url, name, login, bio, company, location, email, blog} = this.props.listState.loadingData;

        return (
            <div className="App">
                <Profile
                    url={avatar_url}
                    name={name}
                    nickname={login}
                    information={bio}
                />
                <Tabs
                    main={bio}
                    education={bio}
                    contacts={bio}
                />
                <Icon
                    icons={icons}
                    listIcon={{company, location, email, blog}}
                />
            </div>
        );
    }
}


export default connect(
    state => ({
        listState: state
    }),
    dispatch => ({})
)(App);