import React, { Component } from 'react'

import RobotSelector_comp from '../RobotSelector_comp'
import Login_comp from '../Login_comp'


import {
    BrowserRouter as Router,
    Route,
    Switch,
    DefaultRoute
} from 'react-router-dom'

class Routes_login extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Login_comp}/>
                    <Route path='/robotselector' component={RobotSelector_comp}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes_login