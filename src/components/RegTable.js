import TableView from '../TableView' // 'react-table-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
import '../styles/RegTable-style.css'

class RegTable extends Component {

  render () {
    /* must ensure all of your fields have values */
    const DATA = [
      { Reg: 0, Name: 'Robot on', Value: 'Yes', },
      { Reg: 1, Name: 'Amps', Value: '43 A'},
      { Reg: 2, Name: 'Temp', Value: '63'}
    ]
    /* define the look of each column, OPTIONAL */
    let COLUMNS = {
    	make: function(data) {
    	  return <span>{data.year}</span>
    	},
    	model: function(data) {
    	  return <h3>{data.model}</h3>;
    	},
    	year: function(data) {
    	  return <h3>{data.id}</h3>;
    	}
    }

    return (
        <section>
              <TableView data={DATA} columns={COLUMNS} />
     </section>
    )
  }
}

export default RegTable