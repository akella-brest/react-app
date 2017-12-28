import React, { Component } from 'react';
import Edit from './Edit/Edit.js';
import './Tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: {
                id: 0
            }
        };

        this.handleOnMain = this.handleOnMain.bind(this);
        this.handleOnEducation = this.handleOnEducation.bind(this);
        this.handleOnContacts = this.handleOnContacts.bind(this);
    }

    handleOnMain() {
        this.setState({
            isActive: {
                id: 0
            }
        });
    }

    handleOnEducation() {
        this.setState({
            isActive: {
                id: 1
            }
        });
    }

    handleOnContacts() {
        this.setState({
            isActive: {
                id: 2
            }
        });
    }

    render() {
        return (
            <div className="Tabs">
                <div className="Menu">
                    <p id={this.state.isActive.id === 0 ? '0' : ''}  onClick={this.handleOnMain}>Основное</p>
                    <p id={this.state.isActive.id === 1 ? '1' : ''} onClick={this.handleOnEducation}>Образование</p>
                    <p id={this.state.isActive.id === 2 ? '2' : ''} onClick={this.handleOnContacts}>Контакты</p>
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

export default Tabs;
