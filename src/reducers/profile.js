import {
    LOAD_USER_PROFILE,
    UNLOAD_USER_PROFILE
} from "../constants/actionTypes"

const defaultProfileState = {
    id: 0,
    username: "Anonymous",
    bio: "Anonymous",
    joined: "31/12/2020",
    userAvatar: "avatar/small/daniel.jpg"
}

export default (state = defaultProfileState, action) => {
    switch (action.type) {
        case LOAD_USER_PROFILE:
            return {
                ...state,
                id: action.payload ? action.payload.id : 0,
                username: action.payload ? action.payload.username : null,
                bio: action.payload ? action.payload.bio : null
            }
        case UNLOAD_USER_PROFILE:
            return defaultProfileState
        default:
            return state;
    }

    return state;
};