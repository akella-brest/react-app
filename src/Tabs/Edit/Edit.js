import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheck: false,
            text: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentDidMount() {
        return fetch('https://api.github.com/users/gaearon')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    text: responseJson.bio
                }, function() {});
            })
    }

    handleClick() {
        if (this.state.isCheck) {
            this.setState({
                isCheck: false,
                text: this.state.value
            })
        } else {
            this.setState({
                isCheck: true,
                text: this.state.value
            })
        }
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    render() {
        if (this.state.isCheck) {
            return (
                <div className="Edit">
                    <form>
                        <label>
                            <input
                                name="isCheck"
                                type="checkbox"
                                onClick={this.handleClick}
                            />
                            Edit
                        </label>
                    </form>
                    <textarea
                        className="textarea"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                    />
                </div>
            );
        } else {
            return (
                <div className="Edit">
                    <form>
                        <label>
                            <input
                                name="isCheck"
                                type="checkbox"
                                onClick={this.handleClick}
                            />
                            Edit
                        </label>
                    </form>
                    <textarea
                        className="textarea"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        disabled
                    />
                </div>
            );
        }
    }
}

export default Edit;
