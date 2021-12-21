import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap"


export default class Sender extends Component {
    render() {
        const { message } = this.props;
        const obj = JSON.parse(localStorage.getItem("authUser"))
        const name = obj && obj.username ? obj.username : message['name'];
        return (
            <li className="right">
                <div className="conversation-list">
                    <UncontrolledDropdown direction="left">
                        <DropdownToggle tag="a" className="dropdown-toggle">
                            <i className="bx bx-dots-vertical-rounded" />
                        </DropdownToggle>
                        <DropdownMenu direction="right">
                            <DropdownItem to="#">Copy</DropdownItem>
                            <DropdownItem to="#">Save</DropdownItem>
                            <DropdownItem to="#">Forward</DropdownItem>
                            <DropdownItem to="#">Delete</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="ctext-wrap">
                        <div className="conversation-name">{name}</div>
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

Sender.propTypes = {
    message: PropTypes.any
}
