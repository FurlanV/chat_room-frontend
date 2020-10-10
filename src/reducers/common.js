import {
    APP_LOAD,
    REDIRECT,
    LOGIN,
    LOGOUT,
    LOGIN_PAGE_UNLOADED,
    REGISTER
} from "../constants/actionTypes"

const defaultState = {
    appName: 'chatRoom',
    token: null,
    currentUser: null,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true,
                currentUser: action.payload ? action.payload.user : null
            };
        case REDIRECT:
            return { ...state, redirectTo: null };
        case LOGOUT:
            return { ...state, redirectTo: '/', token: null, currentUser: null };
        case LOGIN:
        case REGISTER:
            return {
                ...state,
                redirectTo: action.error ? null : '/',
                token: action.error ? null : action.payload.user.token,
                currentUser: action.error ? null : action.payload.user
            };
        case LOGIN_PAGE_UNLOADED:
            return state
        default:
            return state
    }

}