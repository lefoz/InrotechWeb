import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Main-style.css';
import Request from 'superagent';
import Video from './Video';
import logo from '../images/Inrotechlogo_White_Cyan.png';
import RTChart from 'react-rt-chart'
import '../../node_modules/c3/c3.css'

//var url=window.robotUrl;
class Graph extends Component {
  constructor() {
    super()
    this.state = { value: [] }
    this.getValue = this.getValue.bind(this)
    console.log(window.robotUrl)
  }
  componentDidMount() {
    this.getValue();
    //window.setInterval(() => this.forceUpdate(), 1500);
    setInterval(() => this.getValue(), 1000)

  }

  getValue() {
    //Request.get("/api/values")
    Request.get(window.sessionStorage.getItem('webUrl'))
      .withCredentials()
      .end((err, res) => {
        //var _val1 = res.body.x
        this.setState({
          volt_value: res.body.volt,
          amp_value: res.body.amp,
          date: res.body.date
        })
        console.log('request ')
        console.log(res.body.volt)
      })
  }
 
 render() {
    var flow = {
      duration: 50,

    };

    var chart = ({
      transition: {
        duration: 0
      }
    });


    var data = {
      xFormat: '%S',
      date: new Date(),
      Volt: this.state.volt_value,
      Amp: this.state.amp_value
    }
    var axis = {
      x: {
        type: 'timeseries',
        tick: {
          format: '%S'
        }
      }
    };

    return <section><RTChart
      flow={flow}
      maxValues={10}
      fields={
        ['Volt','Amp']
      }

      data={data}
    /></section>
  }
}
export default Graph;