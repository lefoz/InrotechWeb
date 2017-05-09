import React, { Component } from 'react';
import Dropdown from '../Dropdown.js'


class SelectDropdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: { value: 'Selection', label: 'SELECTION'}
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.label)
    this.setState({selected: option})
  }

  render () {
    const options = [
      {
       type: 'group', name: 'Project', items: [
         { value: 'Project Robot', label: 'Project Robot' },
        ]
      },
      {
       type: 'group', name: 'Simulation', items: [
         { value: 'Simulated Robot', label: 'Simulated Robot' },
        ]
      }
    ]

    const defaultOption = this.state.selected
    const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

    return (
      <section>
      <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
      </section>
    )
  }
}

export default SelectDropdown