import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Settings-style.css';

class Settings extends Component {
  render() {
    return (
      <div className="wrapper">
       <div>
         <div className="menuStyle">
         <h1>SETTINGS</h1>
         
        </div>
          <div className="divContent">
            
            <Link to="/Main">
            <input type="submit" value="SAVE SETTINGS"/> 
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Settings;