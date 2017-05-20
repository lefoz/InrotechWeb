import React, { Component } from 'react';
import '../styles/Main-style.css';
import Request from 'superagent';
import RTChart from 'react-rt-chart'
import '../../node_modules/c3/c3.css'

class Graph extends Component {
  constructor() {
    super()
    this.state = { value: [] }
    this.getValue = this.getValue.bind(this)
  }
  componentDidMount() {
    setInterval(() => this.getValue(), 1000)
  }

  getValue() {
    Request.get(window.sessionStorage.getItem('webUrl'))
      .withCredentials()
      .end((err, res) => {
        this.setState({
          volt_value: res.body.volt,
          amp_value: res.body.amp,
          date: res.body.date
        })

      })
  }
 
 render() {
    var flow = {
      duration: 50,

    };



    var data = {
      xFormat: '%S',
      date: new Date(),
      Volt: this.state.volt_value,
      Amp: this.state.amp_value
    }


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