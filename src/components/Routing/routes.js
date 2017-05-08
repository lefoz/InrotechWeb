import React, { Component } from 'react';
import Login from '../Login'
import Settings from '../Settings'
import Main from '../Main'
import Graph from '../Graph'
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
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/main" component={Main} />
                        <Route path="/Graph" component={Graph} />
                        <Route path="/settings" component={Settings} />
                        <Route path="/robotselector" component={RobotSelector} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes