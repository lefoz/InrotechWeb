import React, { Component } from 'react';
import Login from '../Login'
import Settings from '../Settings'
import Main from '../Main'
import RobotSelector from '../RobotSelector'
import NotFound from '../NotFound'

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

class Routes extends Component {
    render() {
        return (
            <Router>
            <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/RobotSelector" component={RobotSelector} />
                        <Route path="/Main" component={Main} />
                        <Route path="/Settings" component={Settings} />
                        <Route component={NotFound} />
            </Switch>
            </Router>
        )
    }
}

export default Routes