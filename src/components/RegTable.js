import TableView from 'react-table-view'
import React, { Component} from 'react'
import Request from 'superagent';
import '../styles/RegTable-style.css'

class RegTable extends Component {
  constructor() {
    super()
    this.state = {RData:[{"id":"0","registry":"loading","value":"loading"}]}
    this.getValue = this.getValue.bind(this)
  }

  componentDidMount() {
    this.getValue();
  }

  getValue() {
    Request.get( window.robotUrl+"2")
    .end((err, res) => {
      this.setState({RData: res.body })
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

export default RegTable