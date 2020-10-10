import {
    INSERT_CHAT_MESSAGE,
    UPDATE_CHAT_INPUT,
} from "../constants/actionTypes"

const defaultChatState = {
    messages: [
        { username: "Justen", message: "Hello, friends!!", timestamp: "10/09", userAvatar: "/avatar/small/justen.jpg" },
        { username: "Steve", message: "Hi! How you're doing?", timestamp: "10/09", userAvatar: "/avatar/small/steve.jpg" },
        { username: "Justen", message: "I'm fine and you my friend?", timestamp: "10/09", userAvatar: "/avatar/small/justen.jpg" },
        { username: "Steve", message: "I'm doing well too", timestamp: "10/09", userAvatar: "/avatar/small/steve.jpg" },
    ]
}

export default (state = defaultChatState, action) => {
    switch (action.type) {
        case INSERT_CHAT_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message],
                chatInput: "",
            }
        case UPDATE_CHAT_INPUT:
            return {
                ...state,
                [action.key]: action.value
            }
        default:
            return state
    }

    return state;
}