import React, { Component } from 'react';
import Login from '../Login'
import SignUp from '../SignUp'
import Main from '../Main'
import AboutUs from '../AboutUs'
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
                        <Route path="/Main" component={Main} />
                        <Route path="/SignUp" component={SignUp} />
                        <Route path="/AboutUs" component={AboutUs} />
                        <Route component={NotFound} />
                    </Switch>
                    
                    {this.props.children}
                </div>
            </Router>
        )
    }
}

export default Routes