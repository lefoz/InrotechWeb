import TableView from 'react-table-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import Request from 'superagent';
import '../styles/RegTable-style.css'

class RegTableAll extends Component {
  constructor() {
    super()
    this.state = {RData:[{"id":"0","registry":"loading","name":"loading","value":"loading","selcted":"loading"}]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
  }

//https://github.com/visionmedia/superagent/issues/270
  getValue() {
    //Request.get("/api/values")
    Request.get("/api/values/1")
    .withCredentials()
    .end((err, res) => {
      console.log(res.body)
      this.setState({RData: res.body })
      
      console.log('request ')
      
    })
  }

  render () {
    return (
        <section>
            <TableView data={this.state.RData}/>
        </section>
    )
  }
}

export default RegTableAll