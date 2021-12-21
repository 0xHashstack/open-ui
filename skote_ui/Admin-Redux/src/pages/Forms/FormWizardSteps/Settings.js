import React, { Component } from "react"
import AUX from "../../../hoc/Aux_"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

class Settings extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false,
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }))
  }

  render() {
    return (
      <AUX>
        <div className="float-right d-none d-md-block">
          <div className="dropdown">
            <Dropdown
              isOpen={this.state.dropdownOpen}
              className=""
              toggle={this.toggle}
            >
              <DropdownToggle className="btn btn-primary">
                <i className="mdi mdi-settings me-2"/> Settings
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Seperated link</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </AUX>
    )
  }
}

export default Settings
