export const SET_TOKEN = (userInfo) => {
    localStorage.setItem('USERINFO', JSON.stringify(userInfo))
}
export const GET_TOKEN = () => {
    // TODO: if localStorage dose not have USERINFO, will raise an error with JSON.parse, how to fix it in correct way ?
    return localStorage.getItem('USERINFO') ? JSON.parse(localStorage.getItem('USERINFO').toString()) : {}
}

export const REMOVE_TOKEN = () => {
    localStorage.removeItem('USERINFO')
}