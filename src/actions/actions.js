export const LOADING_DATA = 'LOADING_DATA'
export const CHOOSE_MAIN = 'CHOOSE_MAIN'
export const CHOOSE_EDUCATION = 'CHOOSE_EDUCATION'
export const CHOOSE_CONTACTS = 'CHOOSE_CONTACTS'
export const EDIT = 'EDIT'
export const EDIT_MENU = 'EDIT_MENU'

export function receiveDataProfile(data) {
    return {
        type: LOADING_DATA,
        data
    }
}

export function chooseMain() {
    return {
        type: CHOOSE_MAIN,
        isActive: {
            id: 0
        }
    }
}

export function chooseEducation() {
    return {
        type: CHOOSE_EDUCATION,
        isActive: {
            id: 1
        }
    }
}

export function chooseContacts() {
    return {
        type: CHOOSE_CONTACTS,
        isActive: {
            id: 2
        }
    }
}

export function edit() {
    return {
        type: EDIT
    }
}

export function editMenu(main) {
    return {
        type: EDIT_MENU,
        main
    }
}