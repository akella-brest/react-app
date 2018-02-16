import React, { Component } from 'react';
import './Edit.css';

import { store } from '../../../index';
import { editData, editButton } from '../../../actions/actions';
import PropTypes from 'prop-types';

class Edit extends Component {

    static propTypes = {
        isDisabled: PropTypes.bool,
        text: PropTypes.string,
        name: PropTypes.string
    };

    render() {
        const { isDisabled, text, name } = this.props;

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
                        <label htmlFor="checkbox1" className="checkbox-label" data-off="Not edit" data-on="Edit">
                        </label>
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

export default Edit;
