const initialState = [];

export default function tabs(state = initialState, action) {
    if (action.type === 'CHOOSE_MAIN') {
        return state;
    } else if (action.type === 'CHOOSE_EDUCATION') {
        return state;
    } else if (action.type === 'CHOOSE_CONTACTS') {
        return state;
    }

    return state;
}