import React from "react"
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const Reciver = ({ message }) => {
  return (
    <li>
      <div className="conversation-list">
        <UncontrolledDropdown>
          <DropdownToggle tag="a" className="dropdown-toggle">
            <i className="bx bx-dots-vertical-rounded" />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#">Copy</DropdownItem>
            <DropdownItem href="#">Save</DropdownItem>
            <DropdownItem href="#">Forward</DropdownItem>
            <DropdownItem href="#">Delete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <div className="ctext-wrap">
          <div className="conversation-name">{message["name"]}</div>
          <p>{message["msg"]}</p>
          <p className="chat-time mb-0">
            <i className="bx bx-time-five align-middle me-1" />{" "}
            {message["time"]}
          </p>
        </div>
      </div>
    </li>
  )
}

Reciver.propTypes = {
  message: PropTypes.object
}

export default Reciver;
