import React, { Component } from 'react';
import Edit from './Edit/Edit.js';
import './Tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: "main",
            education: "",
            contacts: ""
        };

        this.handleOnMain = this.handleOnMain.bind(this);
        this.handleOnEducation = this.handleOnEducation.bind(this);
        this.handleOnContacts = this.handleOnContacts.bind(this);
    }

    handleOnMain() {
        this.setState({
            main: "main",
            education: "",
            contacts: ""
        });
    }

    handleOnEducation() {
        this.setState({
            main: "",
            education: "education",
            contacts: ""
        });
    }

    handleOnContacts() {
        this.setState({
            main: "",
            education: "",
            contacts: "contacts"
        });
    }

    render() {
        return (
            <div className="Tabs">
                <div className="Menu">
                    <p id={this.state.main} onClick={this.handleOnMain}>Основное</p>
                    <p id={this.state.education} onClick={this.handleOnEducation}>Образование</p>
                    <p id={this.state.contacts} onClick={this.handleOnContacts}>Контакты</p>
                </div>
                <Edit
                    text={this.props.text}
                />
            </div>
        );
    }
}

export default Tabs;
