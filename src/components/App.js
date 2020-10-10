import React, { useEffect } from 'react';
import Topbar from "../components/Topbar"

import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from '../constants/actionTypes';
import { Route, Switch } from 'react-router-dom';
import { store } from '../store';
import { push } from 'react-router-redux';

import ChatRoom from "./ChatRoom"
import agent from '../agent';

const App = props => {

    return (
        <div>
            <Topbar />
            <Switch>
                <Route exact path="/" component={ChatRoom} />
            </Switch>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo
    }
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({ type: APP_LOAD, payload, token }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);