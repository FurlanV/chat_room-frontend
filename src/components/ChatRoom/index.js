import React from "react"
import {
    CHAT_ROOM_LOADED,
    CHAT_ROOM_UNLOADED,
} from '../../constants/actionTypes';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import UserPanel from "./UserPanel";
import ChatPanel from "./ChatPanel";

const ChatRoom = props => {

    return (
        <Grid celled="internally" style={{ height: '89.5vh' }}>
            <Grid.Column width={3} textAlign="center">
                <UserPanel />
            </Grid.Column>
            <Grid.Column width={13}>
                <ChatPanel />
            </Grid.Column>
        </Grid>
    )
}

const mapStateToProps = state => ({
    ...state,
})

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: CHAT_ROOM_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: CHAT_ROOM_UNLOADED })
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom)