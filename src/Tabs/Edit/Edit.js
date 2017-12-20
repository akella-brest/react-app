import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            text: ''
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentDidMount() {
        this.setState({ text: this.props.text });
    }

    handleClick() {
        if (this.state.isDisabled) {
            this.setState({
                isDisabled: false,
                text: this.state.value
            })
        } else {
            this.setState({
                isDisabled: true,
                text: this.state.value
            })
        }
    }

    handleTextChange(e) {
        this.setState({ text: e.target.value });
    }

    render() {
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
                        disabled={this.state.isDisabled ? "disabled" : false}
                    />
                </div>
            );
        }
}

export default Edit;
