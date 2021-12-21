import React, { Component } from "react"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

class SettingMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.setting_menu}
          toggle={() =>
            this.setState({ setting_menu: !this.state.setting_menu })
          }
        >
          <DropdownToggle
            color="primary"
            className="arrow-none"
          >
            <i className="mdi mdi-settings me-2"></i> Settings
          </DropdownToggle>
          <DropdownMenu className="language-switch" right>
            <DropdownItem tag="a" href="#">
              Action
            </DropdownItem>
            <DropdownItem tag="a" href="#">
              Another action
            </DropdownItem>
            <DropdownItem tag="a" href="#">
              Something else here
            </DropdownItem>
            <div className="dropdown-divider"></div>
            <DropdownItem tag="a" href="#">
              Separated link
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </React.Fragment>
    )
  }
}

export default SettingMenu
