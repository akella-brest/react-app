import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        const information = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
        'Vivamus nec cursus nibh. ']
        return (
            <div className="Profile">
                <img className="img" src={this.props.url} alt={`${this.props.title} picture`} />
                <p id="name"> {this.props.name} </p>
                <p id="status"> {this.props.info} </p>
                <p id="information">{information}</p>
            </div>
        );
    }
}

export default Profile;
