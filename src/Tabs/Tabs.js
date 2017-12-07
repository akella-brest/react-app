import React, { Component } from 'react';
import './Tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: "main",
            education: "",
            contacts: ""
        };

        this.onMain = this.onMain.bind(this);
        this.onEducation = this.onEducation.bind(this);
        this.onContacts = this.onContacts.bind(this);
    }

    onMain() {
        this.setState({
            main: "main",
            education: "",
            contacts: ""
        });
    }

    onEducation() {
        this.setState({
            main: "",
            education: "education",
            contacts: ""
        });
    }

    onContacts() {
        this.setState({
            main: "",
            education: "",
            contacts: "contacts"
        });
    }

    render() {
        return (
            <div className="Tabs">
                <p className={this.state.main} onClick={this.onMain}>Основное</p>
                <p className={this.state.education} onClick={this.onEducation}>Образование</p>
                <p className={this.state.contacts} onClick={this.onContacts}>Контакты</p>
            </div>
        );
    }
}

export default Tabs;
