import React from "react"
import { connect } from "react-redux"
import { Card, Icon, Image } from 'semantic-ui-react'

import UserFeed from "./UserFeed"

import {
    LOGIN,
    LOGOUT,
    REGISTER
} from "../../constants/actionTypes";

const UserPanel = props => {
    return (
        <React.Fragment>
            <Card style={{ width: '100%', height: "70%" }}>
                <Image src="/avatar/large/Anon.png" wrapped ui={false} style={{ margin: 10 }} />
                <Card.Content>
                    <Card.Header>{props.user.username}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{props.user.joined}</span>
                    </Card.Meta>
                    <Card.Description>
                        {props.user.bio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                    </a>
                </Card.Content>
            </Card>
            <UserFeed />
        </React.Fragment>
    )
}


const mapStateToProps = state => ({
    user: state.profile
})

const mapDispatchToProps = dispatch => ({
    onLogin: payload =>
        dispatch({ type: LOGIN, payload }),
    onLogout: () =>
        dispatch({ type: LOGOUT }),
    userRegister: payload =>
        dispatch({ type: REGISTER, payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPanel)