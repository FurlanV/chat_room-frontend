import auth from './reducers/auth';
import chat from "./reducers/chat";
import common from './reducers/common';
import profile from "./reducers/profile";
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
    auth,
    chat,
    common,
    profile,
    router: connectRouter(history)
});

export default rootReducer
