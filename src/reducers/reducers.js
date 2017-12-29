import { combineReducers } from 'redux'
import {
    LOADING_DATA,
    CHOOSE_MAIN,
    CHOOSE_EDUCATION,
    CHOOSE_CONTACTS,
    EDIT,
    EDIT_MENU
} from '../actions/actions';


const initialStateData = [];

function loadingData(state = initialStateData, action) {
    switch(action.type) {
        case LOADING_DATA:
            return action.data;
    }
    return state;
}

const initialStateMenu = {
    isActive: {
        id: 0
    }
};

function chooseMenu(state = initialStateMenu, action) {
    switch(action.type) {
        case CHOOSE_MAIN:
            return action;
        case CHOOSE_EDUCATION:
            return action;
        case CHOOSE_CONTACTS:
            return action;
        default:
            return state;
    }
}

const initialStateEditData = {
    isDisabled: true
};


function editData(state = initialStateEditData, action) {
    switch(action.type) {
        case EDIT:
            return Object.assign({}, state, {
                isDisabled: !state.isDisabled,
                main: state.main
            });
        case EDIT_MENU:
            return {
                main: action.main
            };
        default:
            return state;
    }
}

export default combineReducers({
    loadingData,
    chooseMenu,
    editData
});
