import React, { useEffect } from "react"

import { connect } from "react-redux"
import { Segment, Header, Button, Input, Grid, Comment } from 'semantic-ui-react'

import {
    INSERT_CHAT_MESSAGE,
    UPDATE_CHAT_INPUT
} from "../../constants/actionTypes"

const ChatPanel = props => {

    const renderChatMessages = () => {
        const chatMessages = [];
        props.chat.messages.forEach((data) => chatMessages.push(
            <Comment style={{ width: "100%" }}>
                <Comment.Avatar src={data.userAvatar} />
                <Comment.Content>
                    <Comment.Author as='a'>{data.username}</Comment.Author>
                    <Comment.Metadata>
                        <div>{data.timestamp}</div>
                    </Comment.Metadata>
                    <Comment.Text>{data.message}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Like</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
            </Comment>
        ));

        return chatMessages;
    }

    const sendMessage = () => {
        const chatPayload = {
            username: props.profile.username,
            message: props.chat.chatInput,
            timestamp: `${new Date().getMonth()}/${new Date().getDay()}`,
            userAvatar: props.profile.userAvatar
        }
        props.sendChatMessage(chatPayload)
    }

    const onInputchange = ev => {
        props.messageInputChange(ev.target.value)
    }

    const onEnterKeyPress = ev => {
        if (ev.keyCode === 13) {
            sendMessage();
          }
    }

    return (
        <React.Fragment>
            <Segment style={{ height: window.innerHeight / 1.22, width: "100%" }}>
                <Header as='h2' dividing>
                    Chatbox
                </Header>
                <Comment.Group style={{ width: "100%", height: '100%' }} size="big">
                    {renderChatMessages()}
                </Comment.Group>
            </Segment>
            <Grid style={{ paddingTop: 15 }}>
                <Grid.Column width={15}>
                    <Input fluid placeholder='Type your message here and press enter' onChange={onInputchange} value={props.chat.chatInput} onKeyDown={onEnterKeyPress}/>
                </Grid.Column>
                <Grid.Column width={1}>
                    <Button content='Send' onClick={() => sendMessage()} />
                </Grid.Column>
            </Grid>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    profile: state.profile,
    chat: state.chat,
})

const mapDispatchToProps = dispatch => ({
    sendChatMessage: message =>
        dispatch({ 'type': INSERT_CHAT_MESSAGE, message }),
    messageInputChange: value =>
        dispatch({ 'type': UPDATE_CHAT_INPUT, key: "chatInput", value }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatPanel)