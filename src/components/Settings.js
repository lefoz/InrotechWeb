import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Settings-style.css';

//https://visionmedia.github.io/superagent/

/*  request.post('/user')
    .send({ name: 'tj', pet: 'tobi' })
    .end(callback)*/

class Settings extends Component {
  render() {
    return (
      <div className="wrapper">
       <div>
         <div className="menuStyle">
         <h1>SETTINGS</h1>
         
        </div>
          <div className="divContent">
            
            <Link to="main">
            <input type="submit" value="SAVE SETTINGS"/> 
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Settings;