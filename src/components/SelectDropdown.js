import React, { Component } from 'react';
import Dropdown from '../Dropdown.js'


class SelectDropdown extends Component {
  constructor (props) {
    super(props)
    sessionStorage.clear();
    this.state = {
      selected: { value: 'Selection', label: 'SELECT ROBOT'}
    }
    this._onSelect = this._onSelect.bind(this)
  }

  _onSelect (option) {
    console.log('You selected ', option.value)
    //window.robotUrl = option.value,
    window.sessionStorage.setItem('webUrl', option.value);
    this.setState({selected: option})
  }

  render () {
    const options = [
      {
       type: 'group', name: 'Project', items: [
         { value: "/api/robot/", label: 'Project Robot' },
        ]
      },
      {
       type: 'group', name: 'Simulation', items: [
         { value: "/api/values/", label: 'Simulated Robot' },
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