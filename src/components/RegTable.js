import TableView from 'react-table-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import Request from 'superagent';
import '../styles/RegTable-style.css'

class RegTable extends Component {
  constructor() {
    super()
    this.state = {RData:[{"id":"0","registry":"loading","name":"loading","value":"loading"}]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
  }

//https://github.com/visionmedia/superagent/issues/270
  getValue() {
    //Request.get("/api/values")
    Request.get("/api/values/5")
    .withCredentials()
    .end((err, res) => {
      console.log(res.body)
      this.setState({RData: res.body })
      console.log('request ')
      
    })
  }
// {this.state.value}
  render () {
    /* must ensure all of your fields have values */
    // const DATA = 
    //   { Reg: 0, Name: 'Robot on', Value: 'Yes', },
    //   { Reg: 1, Name: 'Amps', Value: '43 A'},
    //   { Reg: 2, Name: 'Temp', Value: '63'}
    // ]
    /* define the look of each column, OPTIONAL */
    // let COLUMNS = {
    // 	registry: function(data) {
    // 	  return <h3>{data.registry}</h3>
    // 	},
    // 	name: function(data) {
    // 	  return <h3>{data.name}</h3>;
    // 	},
    // 	value: function(data) {
    // 	  return <h3>{data.value}</h3>;
    // 	}
    // }

    return (
        <section>
            <TableView data={this.state.RData}/>
        </section>
    )
  }
}

export default RegTable