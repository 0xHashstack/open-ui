import React, { Component } from "react"
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"

class EmailToolbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      folder_Menu: false,
      tag_Menu: false,
      more_Menu: false,
    }
    this.toggleFolder = this.toggleFolder.bind(this)
    this.toggleTag = this.toggleTag.bind(this)
    this.toggleMore = this.toggleMore.bind(this)
  }

  //Toggle Folder Menus
  toggleFolder() {
    this.setState(prevState => ({
      folder_Menu: !prevState.folder_Menu,
    }))
  }

  //Toggle Tag Menus
  toggleTag() {
    this.setState(prevState => ({
      tag_Menu: !prevState.tag_Menu,
    }))
  }

  //Toggle More Menus
  toggleMore() {
    this.setState(prevState => ({
      more_Menu: !prevState.more_Menu,
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div className="btn-toolbar p-3" role="toolbar">
          <div className="btn-group me-2 mb-2 mb-sm-0">
            <Button
              type="button"
              color="primary"
            >
              <i className="fa fa-inbox"/>
            </Button>
            <Button
              type="button"
              color="primary"
            >
              <i className="fa fa-exclamation-circle"/>
            </Button>
            <Button
              type="button"
              color="primary"
            >
              <i className="far fa-trash-alt"/>
            </Button>
          </div>
          <Dropdown
            isOpen={this.state.folder_Menu}
            toggle={this.toggleFolder}
            className="btn-group me-2 mb-2 mb-sm-0"
          >
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              tag="i"
            >
              <i className="fa fa-folder"/>{" "}
              <i className="mdi mdi-chevron-down ms-1"/>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="#">Updates</DropdownItem>
              <DropdownItem to="#">Social</DropdownItem>
              <DropdownItem to="#">Team Manage</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            isOpen={this.state.tag_Menu}
            toggle={this.toggleTag}
            className="btn-group me-2 mb-2 mb-sm-0"
          >
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              tag="i"
            >
              <i className="fa fa-tag"/>{" "}
              <i className="mdi mdi-chevron-down ms-1"/>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="#">Updates</DropdownItem>
              <DropdownItem to="#">Social</DropdownItem>
              <DropdownItem to="#">Team Manage</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            isOpen={this.state.more_Menu}
            toggle={this.toggleMore}
            className="btn-group me-2 mb-2 mb-sm-0"
          >
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              tag="div"
            >
              More <i className="mdi mdi-dots-vertical ms-2"/>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem to="#">Mark as Unread</DropdownItem>
              <DropdownItem to="#">Mark as Important</DropdownItem>
              <DropdownItem to="#">Add to Tasks</DropdownItem>
              <DropdownItem to="#">Add Star</DropdownItem>
              <DropdownItem to="#">Mute</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </React.Fragment>
    )
  }
}

export default EmailToolbar
