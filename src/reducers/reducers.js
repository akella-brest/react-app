import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {
    LOADING_DATA,
    CHECK_CLICKED,
    EDIT_BUTTON,
    EDIT_DATA
} from '../actions/actions';

function loadingData(state = [], action) {
    switch(action.type) {
        case LOADING_DATA:
            return action.data;
    }
    return state;
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

const initialStateEditData = {
    isDisabled: true
};


function editButton(state = initialStateEditData, action) {
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
