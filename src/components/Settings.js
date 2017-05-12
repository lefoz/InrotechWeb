import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import RegTableAll from './RegTableAll'
import Checkbox from './CheckboxImp'
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
          <div><RegTableAll/></div>
          <div><Checkbox/></div>  
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