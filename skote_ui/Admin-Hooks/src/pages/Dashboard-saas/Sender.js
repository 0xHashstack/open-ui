import React from "react"
import PropTypes from 'prop-types';

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const Sender = ({ message }) => {
  const obj = JSON.parse(localStorage.getItem("authUser"))
  const name = obj && obj.username ? obj.username : message["name"]

  return (
    <li className="right">
      <div className="conversation-list">
        <UncontrolledDropdown direction="left">
          <DropdownToggle tag="a" className="dropdown-toggle">
            <i className="bx bx-dots-vertical-rounded" />
          </DropdownToggle>
          <DropdownMenu direction="right">
            <DropdownItem href="#">Copy</DropdownItem>
            <DropdownItem href="#">Save</DropdownItem>
            <DropdownItem href="#">Forward</DropdownItem>
            <DropdownItem href="#">Delete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <div className="ctext-wrap">
          <div className="conversation-name">{name}</div>
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

Sender.propTypes = {
  message: PropTypes.any
}

export default Sender
