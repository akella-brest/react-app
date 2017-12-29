import React, { Component } from 'react';
import './Edit.css';

import { store } from '../../../index';
import {
    edit,
    editMenu
} from '../../../actions/actions';
import { connect } from 'react-redux';

class Edit extends Component {
    render() {
        const { isDisabled } = this.props.listState.editData;
        const { id } = this.props.listState.chooseMenu.isActive;
        const { main, education, contacts } = this.props.listState;
        let textArea  = {};
        if (id === 0) {
            textArea = <textarea
                onChange={(e) => store.dispatch(editMenu(e.target.values))}
                value={main}
                disabled={isDisabled ? "disabled" : false}
            />
        } else if (id === 1) {
            textArea = <textarea
                onChange={(e) => store.dispatch(editMenu(e.target.values))}
                value={education}
                disabled={isDisabled ? "disabled" : false}
            />
        } else if (id === 2) {
            textArea = <textarea
                onChange={(e) => store.dispatch(editMenu(e.target.values))}
                value={contacts}
                disabled={isDisabled ? "disabled" : false}
            />
        }

        console.log(isDisabled, id);
            return (
                <div className="Edit">
                    <form>
                        <label>
                            <input
                                name="isCheck"
                                type="checkbox"
                                onClick={() => store.dispatch(edit())}
                            />
                            Edit
                        </label>
                    </form>
                    {textArea}
                </div>
            );
        }
}

export default connect(
    state => ({
        listState: state
    }),
    dispatch => ({})
)(Edit);
