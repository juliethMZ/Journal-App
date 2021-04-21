
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegistrerScreen } from '../components/RegistrerScreen'

export const AuthRouter = () => {




    return (
        <div className="auth__main">

            <div className ="auth__box-container">
        <Switch>
            <Route
            exact
            path = "/auth/login"
            component = {LoginScreen}
            />

            <Route
            exact
            path = "/auth/register"
            component = {RegistrerScreen}
            />

            <Redirect to = "/auth/Login" />
        </Switch>
            </div>

        </div>
    )
}
