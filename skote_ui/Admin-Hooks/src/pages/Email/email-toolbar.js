import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const EmailToolbar = () => {
  const [folder_Menu, setfolder_Menu] = useState(false);
  const [tag_Menu, settag_Menu] = useState(false);
  const [more_Menu, setmore_Menu] = useState(false);

  return (
    <React.Fragment>
      <div className="btn-toolbar p-3" role="toolbar">
        <div className="btn-group me-2 mb-2 mb-sm-0">
          <Button
            type="button"
            color="primary"
          >
            <i className="fa fa-inbox" />
          </Button>
          <Button
            type="button"
            color="primary"
          >
            <i className="fa fa-exclamation-circle" />
          </Button>
          <Button
            type="button"
            color="primary"
          >
            <i className="far fa-trash-alt" />
          </Button>
        </div>
        <Dropdown
          isOpen={folder_Menu}
          toggle={() => {
            setfolder_Menu(!folder_Menu);
          }}
          className="btn-group me-2 mb-2 mb-sm-0"
        >
          <DropdownToggle
            className="btn btn-primary  dropdown-toggle"
            tag="i"
          >
            <i className="fa fa-folder" />{" "}
            <i className="mdi mdi-chevron-down ms-1" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Updates</DropdownItem>
            <DropdownItem to="#">Social</DropdownItem>
            <DropdownItem to="#">Team Manage</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          isOpen={tag_Menu}
          toggle={() => {
            settag_Menu(!tag_Menu);
          }}
          className="btn-group me-2 mb-2 mb-sm-0"
        >
          <DropdownToggle
            className="btn btn-primary  dropdown-toggle"
            tag="i"
          >
            <i className="fa fa-tag" />{" "}
            <i className="mdi mdi-chevron-down ms-1" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Updates</DropdownItem>
            <DropdownItem to="#">Social</DropdownItem>
            <DropdownItem to="#">Team Manage</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown
          isOpen={more_Menu}
          toggle={() => {
            setmore_Menu(!more_Menu);
          }}
          className="btn-group me-2 mb-2 mb-sm-0"
        >
          <DropdownToggle
            className="btn btn-primary  dropdown-toggle"
            tag="div"
          >
            More <i className="mdi mdi-dots-vertical ms-2" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem to="#">Mark as Unread</DropdownItem>
            <DropdownItem to="#">Mark as Important</DropdownItem>
            <DropdownItem to="#">Add to Tasks</DropdownItem>
            <DropdownItem to="#">Add Star</DropdownItem>
            <DropdownItem to="#">Mute</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
};

export default EmailToolbar;
