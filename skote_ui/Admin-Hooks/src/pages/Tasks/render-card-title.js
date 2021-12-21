import PropTypes from 'prop-types'
import React from "react"
import {
  CardTitle,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const RenderCardTitle = props => {
  return (
    <React.Fragment>
      <UncontrolledDropdown className="float-end">
        <DropdownToggle href="#" className="arrow-none" tag="i">
          <i className="mdi mdi-dots-vertical m-0 text-muted h5"/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href="#">Edit</DropdownItem>
          <DropdownItem href="#">Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <CardTitle className="mb-4">{props.title}</CardTitle>
    </React.Fragment>
  )
}

RenderCardTitle.propTypes = {
  title: PropTypes.string
}

export default RenderCardTitle
