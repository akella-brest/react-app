import React, { Component } from 'react';
import Edit from './Edit/Edit.js';
import '../Tabs/Tabs.css';

import { store } from '../../index';
import {
    chooseMain,
    chooseContacts,
    chooseEducation
} from '../../actions/actions';
import { connect } from 'react-redux';

class Tabs extends Component {
    handleOnMain = () => store.dispatch(chooseMain());
    handleOnEducation = () => store.dispatch(chooseEducation());
    handleOnContacts = () => store.dispatch(chooseContacts());

    render() {
        const { id } = this.props.listState.chooseMenu.isActive;

        return (
            <div className="Tabs">
                <div className="Menu">
                    <p id={id === 0 ? '0' : ''} onClick={this.handleOnMain.bind(this)}>Основное</p>
                    <p id={id === 1 ? '1' : ''} onClick={this.handleOnEducation.bind(this)}>Образование</p>
                    <p id={id === 2 ? '2' : ''} onClick={this.handleOnContacts.bind(this)}>Контакты</p>
                </div>
                <Edit
                    main={this.props.main}
                    education={this.props.education}
                    contacts={this.props.contacts}
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
)(Tabs);

