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
                <div>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/Main" component={Main} />
                        <Route path="/graph" component={Graph} />
                        <Route path="/Settings" component={Settings} />
                        <Route path="/RobotSelector" component={RobotSelector} />
                        <Route component={NotFound} />
                    </Switch>
                    
                    {this.props.children}
                </div>
            </Router>
        )
    }
}

export default Routes