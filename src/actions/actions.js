export const LOADING_DATA = 'LOADING_DATA'
export const CHOOSE_MAIN = 'CHOOSE_MAIN'
export const CHOOSE_EDUCATION = 'CHOOSE_EDUCATION'
export const CHOOSE_CONTACTS = 'CHOOSE_CONTACTS'

export function receiveDataProfile(data) {
    return {
        type: LOADING_DATA,
        data
    }
}