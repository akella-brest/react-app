import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import TabsElement from './Tabs/Tabs.js';

import { store } from '../index';
import { fetchData } from '../actions/actions';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

    componentDidMount() {
        store.dispatch(fetchData('gaearon'));
    }

    render() {
        const icons = ['users', 'map-marker', 'envelope', 'link'];
        const {avatar_url, name, login, bio, company, location, email, blog} = this.props.listData.data;

        return (
            <div className="App">
                {/*<Switch>*/}
                    <Profile
                        url={avatar_url}
                        name={name}
                        nickname={login}
                        information={bio}
                    />

                    <TabsElement
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