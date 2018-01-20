import React, { Component } from 'react';
import './Profile.css';
import PropTypes from "prop-types";

class Profile extends Component {

    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string,
        nickname: PropTypes.string,
        information: PropTypes.string,
    };

    render() {
        const { url, name, nickname, information } = this.props;

        return (
            <div className="Profile">
                <img className="img" src={url} alt={'profile picture'} />
                <p id="name">{name}</p>
                <p id="status">{nickname}</p>
                <p id="information">{information}</p>
            </div>
        );
    }
}

export default Profile;
