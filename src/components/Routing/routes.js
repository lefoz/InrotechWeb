import React, { Component } from 'react'
import Login from '../Login'
import Settings from '../Settings'
import Main from '../Main'

import Graph from '../Graph'
import RobotSelector from '../RobotSelector_comp'
import Login_comp from '../Login_comp'

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
                        <Route path="/main" component={Main} />
                        <Route path="/graph" component={Graph} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/" component={Login} />
                        <Route component={NotFound} />
                    </Switch>
            </Router>
        )
    }
}

export default Routes