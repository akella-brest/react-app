import React, { Component } from 'react';
import './Edit.css';

import { store } from '../../../index';
import { editData, editButton } from '../../../actions/actions';
import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        const { isDisabled } = this.props.editButton;
        const { text, name } = this.props;

            return (
                <div className="Edit">
                    <div id="toggles">
                        <input
                            type="checkbox"
                            name="checkbox1"
                            id="checkbox1"
                            className="ios-toggle"
                            onClick={() => store.dispatch(editButton())}
                        />
                        <label htmlFor="checkbox1" className="checkbox-label" data-off="Not edit" data-on="Edit"></label>
                    </div>
                    <textarea
                        onChange={(e) => store.dispatch(editData(name, e.target.value))}
                        value={text}
                        disabled={isDisabled ? "disabled" : false}
                    />
                </div>
            );
        }
}

export default connect(
    state => ({
        editButton: state.editButton,
        editData: state.text
    })
)(Edit);
