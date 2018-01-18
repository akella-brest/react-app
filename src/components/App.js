import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import Tabs from './Tabs/Tabs.js';

import { store } from '../index';
import { receiveDataProfile } from '../actions/actions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

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
        const {avatar_url, name, login, bio, company, location, email, blog} = this.props.listData;

        return (
            <div className="App">
                {/*<Switch>*/}
                    <Profile
                        url={avatar_url}
                        name={name}
                        nickname={login}
                        information={bio}
                    />

                    <Tabs
                        text={bio}
                    />
                        {/*<Route exact path='/main' component={Tabs}/>*/}
                    <Icon
                        icons={icons}
                        listIcon={{company, location, email, blog}}
                    />
                {/*</Switch>*/}
            </div>
        );
    }
}


export default connect(
    state => ({
        listData: state.data
    }))
(App);