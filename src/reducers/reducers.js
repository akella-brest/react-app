import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    REQUEST_DATA,
    RECEIVE_DATA,
    CHECK_CLICKED,
    EDIT_BUTTON,
    EDIT_DATA,
} from '../actions/actions';

function loadingData (state = {
        isFetching: false,
        didInvalidate: false,
        data: []
}, action) {
    switch (action.type) {
        case REQUEST_DATA:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_DATA:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                data: action.data
            })
        default:
            return state
    }
}

function showText (state = [], action) {
    switch(action.type) {
        case CHECK_CLICKED:
            return {
                ...state,
                [action.name]: action.data
            };
        case EDIT_DATA:
            return  {
                ...state,
                [action.name]: action.data
            };
        default:
            return state;
    }
}

function editButton(state = {
    isDisabled: true
}, action) {
    switch(action.type) {
        case EDIT_BUTTON:
            return  {
                ...state,
                isDisabled: !state.isDisabled
            };
        default:
            return state;
    }
}

export default combineReducers({
    routing: routerReducer,
    data: loadingData,
    text: showText,
    editButton: editButton
});
