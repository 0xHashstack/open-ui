import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  UncontrolledTooltip,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  InputGroup,
} from "reactstrap";
import { Link } from "react-router-dom";
import { size } from "lodash";

import { chatData } from "../../common/data";
import Reciver from "./Reciver";
import Sender from "./Sender";

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

class ChatBox extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      search_Menu: false,
      settings_Menu: false,
      other_Menu: false,
      messages: [...chatData],
      text: "",
    }),
      (this.messageBox = null);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleOther = this.toggleOther.bind(this);
    this.onSendMessage = this.onSendMessage.bind(this);
  }

  //Toggle Chat Box Menus
  toggleSearch() {
    this.setState(prevState => ({
      search_Menu: !prevState.search_Menu,
    }));
  }

  toggleSettings() {
    this.setState(prevState => ({
      settings_Menu: !prevState.settings_Menu,
    }));
  }

  toggleOther() {
    this.setState(prevState => ({
      other_Menu: !prevState.other_Menu,
    }));
  }

  scrollToBottom = () => {
    if (this.messageBox) {
      this.messageBox.scrollTop = this.messageBox.scrollHeight + 1000;
    }
  };

  onSendMessage() {
    const obj = JSON.parse(localStorage.getItem("authUser"));
    const name = obj && obj.username ? obj.username : "Admin";

    var modifiedMessages = [...this.state.messages];
    const lastItem = modifiedMessages.length
      ? modifiedMessages[modifiedMessages.length - 1]
      : { id: 1 };
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const senderObj = {
      id: lastItem["id"] + 1,
      name: name,
      msg: this.state.text,
      time: `${hour}.${minute}`,
      isSender: true,
    };
    modifiedMessages.push({ ...senderObj });
    this.setState({ messages: modifiedMessages });
    this.setState({ text: "" });
  }

  componentDidUpdate(prevProps) {
    const { messages } = this.state;
    if (size(messages) !== size(prevProps.messages)) {
      this.scrollToBottom();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Col xl="4">
          <Card>
            <CardBody className="border-bottom">
              <Row>
                <Col md="4" xs="9">
                  <h5 className="font-size-15 mb-1">Steven Franklin</h5>
                  <p className="text-muted mb-0">
                    <i className="mdi mdi-circle text-success align-middle me-1" />{" "}
                    Active now
                  </p>
                </Col>
                <Col md="8" xs="3">
                  <ul className="list-inline user-chat-nav text-end mb-0">
                    <li className="list-inline-item d-none d-sm-inline-block">
                      <Dropdown
                        isOpen={this.state.search_Menu}
                        toggle={this.toggleSearch}
                      >
                        <DropdownToggle
                          tag="a"
                          className="btn nav-btn"
                          type="button"
                        >
                          <i className="bx bx-search-alt-2" />
                        </DropdownToggle>
                        <DropdownMenu className="py-0 dropdown-menu-md">
                          <Form className="p-3">
                            <FormGroup className="m-0">
                              <InputGroup>
                                <Input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search ..."
                                  aria-label="Recipient's username"
                                />
                                <Button color="primary" type="submit">
                                  <i className="mdi mdi-magnify" />
                                </Button>
                              </InputGroup>
                            </FormGroup>
                          </Form>
                        </DropdownMenu>
                      </Dropdown>
                    </li>{" "}
                    <li className="list-inline-item  d-none d-sm-inline-block">
                      <Dropdown
                        isOpen={this.state.settings_Menu}
                        toggle={this.toggleSettings}
                      >
                        <DropdownToggle className="btn nav-btn" tag="i">
                          <i className="bx bx-cog" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="#">View Profile</DropdownItem>
                          <DropdownItem href="#">Clear chat</DropdownItem>
                          <DropdownItem href="#">Muted</DropdownItem>
                          <DropdownItem href="#">Delete</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </li>{" "}
                    <li className="list-inline-item">
                      <Dropdown
                        isOpen={this.state.other_Menu}
                        toggle={this.toggleOther}
                      >
                        <DropdownToggle className="btn nav-btn" tag="i">
                          <i className="bx bx-dots-horizontal-rounded" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                          <DropdownItem href="#">Action</DropdownItem>
                          <DropdownItem href="#">Another Action</DropdownItem>
                          <DropdownItem href="#">Something else</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  </ul>
                </Col>
              </Row>
            </CardBody>
            <CardBody className="pb-0">
              <div>
                <div className="chat-conversation">
                  <PerfectScrollbar
                    style={{ marginBottom: "1rem", maxHeight: "260px" }}
                    containerRef={ref => (this.messageBox = ref)}
                  >
                    <ul className="list-unstyled">
                      <li>
                        <div className="chat-day-title">
                          <span className="title">Today</span>
                        </div>
                      </li>
                      {(this.state.messages || []).map((message, index) => (
                        <React.Fragment key={index}>
                          {message["isSender"] ? (
                            <Sender message={message} />
                          ) : (
                            <Reciver message={message} />
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </PerfectScrollbar>
                </div>
              </div>
            </CardBody>

            <div className="p-3 chat-input-section">
              <Row>
                <Col>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control rounded chat-input"
                      placeholder="Enter Message..."
                      value={this.state.text}
                      onChange={e => {
                        this.setState({ text: e.target.value });
                      }}
                    />
                    <div className="chat-input-links">
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item">
                          <Link to="#">
                            <i
                              className="mdi mdi-emoticon-happy-outline"
                              id="Emojitooltip"
                            />
                            <UncontrolledTooltip
                              placement="top"
                              target="Emojitooltip"
                            >
                              Emojis
                            </UncontrolledTooltip>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#">
                            <i
                              className="mdi mdi-file-image-outline"
                              id="Imagetooltip"
                            />
                            <UncontrolledTooltip
                              placement="top"
                              target="Imagetooltip"
                            >
                              Images
                            </UncontrolledTooltip>
                          </Link>
                        </li>{" "}
                        <li className="list-inline-item">
                          <Link to="#">
                            <i
                              className="mdi mdi-file-document-outline"
                              id="Filetooltip"
                            />
                            <UncontrolledTooltip
                              placement="top"
                              target="Filetooltip"
                            >
                              Add Files
                            </UncontrolledTooltip>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <div className="col-auto">
                  <Button
                    type="submit"
                    color="primary"
                    className="chat-send w-md"
                    onClick={() => this.onSendMessage()}
                  >
                    <span className="d-none d-sm-inline-block me-2">Send</span>{" "}
                    <i className="mdi mdi-send" />
                  </Button>
                </div>
              </Row>
            </div>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

ChatBox.propTypes = {
  messages: PropTypes.any,
};

export default ChatBox;
