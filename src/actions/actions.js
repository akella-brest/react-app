export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const CHECK_CLICKED = 'CHECK_CLICKED'
export const EDIT_BUTTON = 'EDIT_BUTTON' //button
export const EDIT_DATA = 'EDIT_DATA' //edit data text

export function requestData(data) {
    return {
        type: REQUEST_DATA,
        data
    }
}

export function receiveData(data, json) {
    return {
        type: RECEIVE_DATA,
        data: json
    }
}

export function fetchData(data) {
    return dispatch => {
        dispatch(requestData(data))
        return fetch(`https://api.github.com/users/${data}`)
            .then((response) => response.json())
            .then((responseJson) => dispatch(receiveData(data, responseJson)))
    }
}

export function checkClicked(name, text) {
    return {
        type: CHECK_CLICKED,
        name
    }
}

export function editButton() {
    return {
        type: EDIT_BUTTON
    }
}

export function editData(elementName, data) {
    return {
        type: EDIT_DATA,
        elementName,
        data
    }
}
