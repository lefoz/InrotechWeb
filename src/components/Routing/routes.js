import React, { Component } from 'react'
import Login from '../Login'
import Settings from '../Settings'
import Main from '../Main'
import NotFound from '../NotFound'


import {
    BrowserRouter as Router,
    Route,
    Switch,
    DefaultRoute
} from 'react-router-dom'

class Routes extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Route path="/" component={Login} />
                        <Route path="/main" component={Main} />
                        <Route path="/settings" component={Settings} />
                        <Route component={NotFound} />
                    </Switch>
            </Router>
        )
    }
}

export default Routes