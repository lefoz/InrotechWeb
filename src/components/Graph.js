import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Request from 'superagent';
import Video from './Video';
import logo from '../images/Inrotechlogo_White_Cyan.png';
import RTChart from 'react-rt-chart'
import '../../node_modules/c3/c3.css'

class Graph extends Component {

  constructor() {
    super()
    this.state = {value:[]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
    window.setInterval(() => this.forceUpdate(), 1500);
    setInterval(() => this.getValue(), 1500)
    
  }

  getValue() {
    //Request.get("/api/values")
    Request.get("/api/values")
    .withCredentials()
    .end((err, res) => {
      var _val1 = res.body.x
      this.setState({ value: res.body.x 
      })
      console.log('request ')
      console.log(res.body.x)
    })
  }

render() {
        var flow = {
            duration: 100
        };
        var data = {
            date: new Date(),
            Car: this.state.value,
        };

        return <RTChart
        flow = { flow }
        fields = {
            ['Car']
        }
        data = { data }
        />
    }
}
export default Graph;