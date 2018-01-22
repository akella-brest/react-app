import React, { Component } from 'react';
import './App.css';
import Icon from './Icon/Icon.js';
import Profile from './Profile/Profile.js';
import TabsElement from './Tabs/Tabs.js';
import PropTypes from 'prop-types';

import { store } from '../index';
import { fetchData } from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {

    static propTypes = {
        listData: PropTypes.shape({
            avatar_url: PropTypes.string,
            name: PropTypes.string,
            login: PropTypes.string,
            bio: PropTypes.string,
            company: PropTypes.string,
            location: PropTypes.string,
            email: PropTypes.string,
            blog: PropTypes.string
        })
    };

    componentDidMount() {
        store.dispatch(fetchData('gaearon'));
    }

    render() {
        const { isFetching } = this.props.listData;

        const icons = ['users', 'map-marker', 'envelope', 'link'];
        const { avatar_url, name, login, bio, company, location, email, blog } = this.props.listData.data;

        return (

            isFetching ?
                <div id="bowlG">
                    <div id="bowl_ringG">
                        <div className="ball_holderG">
                            <div className="ballG">
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="App">
                        <Profile
                            url={avatar_url}
                            name={name}
                            nickname={login}
                            information={bio}
                        />
                        <TabsElement
                            text={bio}
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
        listData: state.data
    }))
(App);