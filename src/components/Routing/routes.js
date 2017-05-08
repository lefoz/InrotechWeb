import React, { Component } from 'react'
import Login from '../Login'
import Settings from '../Settings'
import Main from '../Main'
<<<<<<< HEAD
import Graph from '../Graph'
import RobotSelector from '../RobotSelector'
=======
>>>>>>> de3bf597d56df7cc0473f8d1dcf8323929e50568
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
                        <Route path="/Graph" component={Graph} />
                        <Route path="/settings" component={Settings} />
                        <Route component={NotFound} />
                    </Switch>
            </Router>
        )
    }
}

export default Routes