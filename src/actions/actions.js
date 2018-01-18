export const LOADING_DATA = 'LOADING_DATA'
export const CHECK_CLICKED = 'CHECK_CLICKED'
export const EDIT_BUTTON = 'EDIT_BUTTON' //button
export const EDIT_DATA = 'EDIT_DATA' //edit data text

export function receiveDataProfile(data) {
    return {
        type: LOADING_DATA,
        data
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

export function editData(name, data) {
    return {
        type: EDIT_DATA,
        name,
        data
    }
}
