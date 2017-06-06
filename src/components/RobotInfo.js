import React, { Component } from 'react';
import Request from 'superagent';

var info=[];
class RobotInfo extends Component {
   constructor(){
     super()
     this.state = {info}
     this.getValue = this.getValue.bind(this)
   }
    componentWillMount() {
     this.getValue();
    }
     getValue() {
     Request.get(window.sessionStorage.getItem('webUrl')+"/getarray/2")
     .withCredentials()
     .end((err, res) => {
       console.log(res.body)
       this.setState({info: res.body })
       console.log('request info')
     
     })
 }
 
   //to get picture swap src with src .... /picture
   render() {
     return (
         <div className="info">
         <h3>ROBOT INFO</h3>
         <p>ROBOT ID | {this.state.info[0]} | ROBOT IP | {this.state.info[1]} |</p>
         <p>JOB ID | {this.state.info[2]} | JOB NUMBER | {this.state.info[3]} |</p>
         </div>
     );
   }
 }
 
 export default RobotInfo