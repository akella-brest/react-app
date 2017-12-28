import { combineReducers } from 'redux'
import {
    LOADING_DATA
    // CHOOSE_CONTACTS,
    // CHOOSE_EDUCATION,
    // CHOOSE_EDUCATION
} from '../actions/actions';


const initialState = [];

function loadingData(state = initialState, action) {
    switch(action.type) {
        case LOADING_DATA:
            return action.data;
    }
    return state;
}



export default combineReducers({
    loadingData
});
