import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            text: ''
        };
    }

    handleOnClick() {
        if (this.state.isDisabled) {
            this.setState({
                isDisabled: false,
                text: this.state.text
            })
        } else {
            this.setState({
                isDisabled: true,
                text: this.state.text
            })
        }
    }

    handleOnChange(e) {
        e.preventDefault();
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
                                onClick={(e) => this.handleOnClick(e)}
                            />
                            Edit
                        </label>
                    </form>
                    <textarea
                        onChange={(e) => this.handleOnChange(e)}
                        value={this.state.text == '' ? this.props.text : this.state.text}
                        disabled={this.state.isDisabled ? "disabled" : false}
                    />
                </div>
            );
        }
}

export default Edit;
