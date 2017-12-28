import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <img className="img" src={this.props.url} alt={'profile picture'} />
                <p id="name">{this.props.name}</p>
                <p id="status">{this.props.nickname}</p>
                <p id="information">{this.props.information}</p>
            </div>
        );
    }
}

export default Profile;
