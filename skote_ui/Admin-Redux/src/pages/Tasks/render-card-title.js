import React, { Component } from "react"
import PropTypes from 'prop-types'
import {
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"

class RenderCardTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <UncontrolledDropdown className="float-end">
          <DropdownToggle className="arrow-none" tag="a">
            <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Edit</DropdownItem>
            <DropdownItem to="#">Delete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <CardTitle className="mb-4 h4">{this.props.title}</CardTitle>
      </React.Fragment>
    )
  }
}

RenderCardTitle.propTypes = {
  title: PropTypes.string
}

export default RenderCardTitle
