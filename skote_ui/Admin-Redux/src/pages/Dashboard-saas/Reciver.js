import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap"

class Reciver extends Component {
    render() {
        const message = this.props.message;
        return (
            <li>
                <div className="conversation-list">
                    <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle">
                            <i className="bx bx-dots-vertical-rounded" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem to="#">Copy</DropdownItem>
                            <DropdownItem to="#">Save</DropdownItem>
                            <DropdownItem to="#">Forward</DropdownItem>
                            <DropdownItem to="#">Delete</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="ctext-wrap">
                        <div className="conversation-name">
                            {message['name']}
                        </div>
                        <p>{message['msg']}</p>
                        <p className="chat-time mb-0">
                            <i className="bx bx-time-five align-middle me-1" />{" "}
                            {message['time']}
                        </p>
                    </div>
                </div>
            </li>
        )
    }
}


Reciver.propTypes = {
    message: PropTypes.object
}

export default Reciver;

