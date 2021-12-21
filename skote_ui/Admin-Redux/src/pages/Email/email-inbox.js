import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import {
  Button, Card, Col, Container, Input, Label, Row, TabContent, TabPane,
  Nav,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  NavItem,
  NavLink
} from "reactstrap"
import MetaTags from 'react-meta-tags';
import classnames from "classnames"

import { map } from "lodash"

import {
  getInboxMails,
  getStarredMails,
  getImportantMails,
  getDraftMails,
  getSentMails,
  getTrashMails,
} from "store/mails/actions"

// Import Editor
import { Editor } from "react-draft-wysiwyg"

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

//Import images
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"

class EmailInbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      activeTab: "1",
      resultArray: [],
      inboxmails: [],
      starredmails: [],
      importantmails: [],
      draftmails: [],
      sentmails: [],
      trashmails: [],
    }
    this.togglemodal.bind(this)
    this.toggleTab = this.toggleTab.bind(this)
  }

  componentDidMount() {
    const { inboxmails, onGetInboxMails,
      starredmails, onGetStarredMails,
      importantmails, onGetImportantMails,
      draftmails, onGetDraftMails,
      sentmails, onGetSentMails,
      trashmails, onGetTrashMails } = this.props;

    onGetInboxMails()
    onGetStarredMails()
    onGetImportantMails(),
      onGetDraftMails(),
      onGetSentMails(),
      onGetTrashMails(),

      this.setState({ inboxmails })
    this.setState({ starredmails })
    this.setState({ importantmails })
    this.setState({ draftmails })
    this.setState({ sentmails })
    this.setState({ trashmails })
  }

  toggleTab(tab) {

    if (this.props.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  togglemodal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }

  render() {
    const { inboxmails, starredmails, importantmails, draftmails, sentmails, trashmails } = this.props;

    return (
      <React.Fragment>
        <div className="page-content">
          {/* add meta title */}
          <MetaTags>
            <title>Inbox | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Email" breadcrumbItem="Inbox" />

            <Row>
              <Col xs="12">
                {/* Render Email SideBar */}
                <Card className="email-leftbar">
                  <Button
                    type="button"
                    color="danger"
                    onClick={this.togglemodal}
                    block
                  >
                    Compose
                  </Button>
                  <div className="mail-list mt-4">
                    <Nav tabs className="nav-tabs-custom" vertical role="tablist">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "1",
                          })}
                          onClick={() => {
                            this.toggleTab("1")
                          }}
                        >
                          <i className="mdi mdi-email-outline me-2"></i> Inbox{" "}
                          <span className="ml-1 float-end">(18)</span>
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "2",
                          })}
                          onClick={() => {
                            this.toggleTab("2")
                          }}
                        >
                          <i className="mdi mdi-star-outline me-2"></i>Starred
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "3",
                          })}
                          onClick={() => {
                            this.toggleTab("3")
                          }}
                        >
                          <i className="mdi mdi-diamond-stone me-2"></i>Important
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "4",
                          })}
                          onClick={() => {
                            this.toggleTab("4")
                          }}
                        >
                          <i className="mdi mdi-file-outline me-2"></i>Draft
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "5",
                          })}
                          onClick={() => {
                            this.toggleTab("5")
                          }}
                        >
                          <i className="mdi mdi-email-check-outline me-2"></i>Sent Mail
                        </NavLink>
                      </NavItem>

                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === "6",
                          })}
                          onClick={() => {
                            this.toggleTab("6")
                          }}
                        >
                          <i className="mdi mdi-trash-can-outline me-2"></i>Trash
                        </NavLink>
                      </NavItem>

                    </Nav>

                  </div>

                  <h6 className="mt-4">Labels</h6>

                  <div className="mail-list mt-1">
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-info float-end"></span>
                      Theme Support
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-warning float-end"></span>
                      Freelance
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-primary float-end"></span>
                      Social
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-danger float-end"></span>
                      Friends
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-success float-end"></span>
                      Family
                    </Link>
                  </div>

                  <h6 className="mt-4">Chat</h6>

                  <div className="mt-2">
                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src={avatar2}
                        alt="skote"
                        height="36"
                      />
                      <Media className="chat-user-box" body>
                        <p className="user-title m-0">Scott Median</p>
                        <p className="text-muted">Hello</p>
                      </Media>
                    </Link>

                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src={avatar3}
                        alt="skote"
                        height="36"
                      />
                      <Media className="chat-user-box" body>
                        <p className="user-title m-0">Julian Rosa</p>
                        <p className="text-muted">What about our next..</p>
                      </Media>
                    </Link>

                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src={avatar4}
                        alt="skote"
                        height="36"
                      />
                      <Media className="chat-user-box" body>
                        <p className="user-title m-0">David Medina</p>
                        <p className="text-muted">Yeah everything is fine</p>
                      </Media>
                    </Link>

                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src={avatar6}
                        alt="skote"
                        height="36"
                      />
                      <Media className="chat-user-box" body>
                        <p className="user-title m-0">Jay Baker</p>
                        <p className="text-muted">Wow that&apos;s great</p>
                      </Media>
                    </Link>
                  </div>
                </Card>

                <Modal
                  isOpen={this.state.modal}
                  role="dialog"
                  autoFocus={true}
                  centered={true}
                  className="exampleModal"
                  tabIndex="-1"
                  toggle={this.togglemodal}
                >
                  <div className="modal-content">
                    <ModalHeader toggle={this.togglemodal}>New Message</ModalHeader>
                    <ModalBody>
                      <form>
                        <div className="mb-3">
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="To"
                          />
                        </div>

                        <div className="mb-3">
                          <Input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                        <Editor
                          toolbarClassName="toolbarClassName"
                          wrapperClassName="wrapperClassName"
                          editorClassName="editorClassName"
                        />
                      </form>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        type="button"
                        color="secondary"
                        onClick={this.togglemodal}
                      >
                        Close
                      </Button>
                      <Button type="button" color="primary">
                        Send <i className="fab fa-telegram-plane ms-1"></i>
                      </Button>
                    </ModalFooter>
                  </div>
                </Modal>
                <div className="email-rightbar mb-3">
                  <Card>
                    {/* Render Email Top Tool Bar */}
                    <EmailToolbar />
                    <TabContent
                      activeTab={this.state.activeTab}
                    >
                      <TabPane tabId="1">
                        <ul className="message-list">
                          {map(inboxmails, (inbox, key) => (
                            <li key={key} className={inbox.read ? "" : "unread"}>
                              <div className="col-mail col-mail-1">
                                <div className="checkbox-wrapper-mail">
                                  <Input type="checkbox" id={inbox.id} />
                                  <Label htmlFor={inbox.id} className="toggle" />
                                </div>
                                <Link to="#" className="title">
                                  {inbox.name}
                                </Link>
                                <span className="star-toggle far fa-star" />
                              </div>
                              <div className="col-mail col-mail-2">

                                <div dangerouslySetInnerHTML={{ __html: inbox.description }}></div>
                                <div className="date">{inbox.date}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="2">
                        <ul className="message-list">
                          {map(starredmails, (starred, key) => (
                            <li key={"starred-" + key} className={starred.read ? "" : "unread"}>
                              <div className="col-mail col-mail-1">
                                <div className="checkbox-wrapper-mail">
                                  <Input type="checkbox" id={starred.id + 'starred'} />
                                  <Label htmlFor={starred.id + 'starred'} className="toggle" />
                                </div>
                                <Link to="#" className="title">
                                  {starred.name}
                                </Link>
                                <span className="star-toggle fas fa-star" />
                              </div>
                              <div className="col-mail col-mail-2">

                                <div dangerouslySetInnerHTML={{ __html: starred.description }}></div>
                                <div className="date">{starred.date}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="3">
                        <ul className="message-list">
                          {map(importantmails, (important, key) => (
                            <li key={"important-" + key} className={important.read ? "" : "unread"}>
                              <div className="col-mail col-mail-1">
                                <div className="checkbox-wrapper-mail">
                                  <Input type="checkbox" id={important.id + 'important'} />
                                  <Label htmlFor={important.id + 'important'} className="toggle" />
                                </div>
                                <Link to="#" className="title">
                                  {important.name}
                                </Link>
                                <span className="star-toggle far fa-star" />
                              </div>
                              <div className="col-mail col-mail-2">

                                <div dangerouslySetInnerHTML={{ __html: important.description }}></div>
                                <div className="date">{important.date}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="4">
                        <ul className="message-list">
                          {map(draftmails, (draft, key) => (
                            <li key={"draft-" + key} className={draft.read ? "" : "unread"}>
                              <div className="col-mail col-mail-1">
                                <div className="checkbox-wrapper-mail">
                                  <Input type="checkbox" id={draft.id + 'draft'} />
                                  <Label htmlFor={draft.id + 'draft'} className="toggle" />
                                </div>
                                <Link to="#" className="title">
                                  {draft.name}
                                </Link>
                                <span className="star-toggle far fa-star" />
                              </div>
                              <div className="col-mail col-mail-2">

                                <div dangerouslySetInnerHTML={{ __html: draft.description }}></div>
                                <div className="date">{draft.date}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="5">
                        <ul className="message-list">
                          {map(sentmails, (sent, key) => (
                            <li key={"sent-" + key} className={sent.read ? "" : "unread"}>
                              <div className="col-mail col-mail-1">
                                <div className="checkbox-wrapper-mail">
                                  <Input type="checkbox" id={sent.id + 'sent'} />
                                  <Label htmlFor={sent.id + 'sent'} className="toggle" />
                                </div>
                                <Link to="#" className="title">
                                  {sent.name}
                                </Link>
                                <span className="star-toggle far fa-star" />
                              </div>
                              <div className="col-mail col-mail-2">

                                <div dangerouslySetInnerHTML={{ __html: sent.description }}></div>
                                <div className="date">{sent.date}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPane>
                      <TabPane tabId="6">
                        <ul className="message-list">
                          {map(trashmails, (trash, key) => (
                            <li key={"trash-" + key} className={trash.read ? "" : "unread"}>
                              <div className="col-mail col-mail-1">
                                <div className="checkbox-wrapper-mail">
                                  <Input type="checkbox" id={trash.id + 'trash'} />
                                  <Label htmlFor={trash.id + 'trash'} className="toggle" />
                                </div>
                                <Link to="#" className="title">
                                  {trash.name}
                                </Link>
                                <span className="star-toggle far fa-star" />
                              </div>
                              <div className="col-mail col-mail-2">

                                <div dangerouslySetInnerHTML={{ __html: trash.description }}></div>
                                <div className="date">{trash.date}</div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPane>
                    </TabContent>
                  </Card>
                  <Row>
                    <Col xs="7">Showing 1 - 20 of 1,524</Col>
                    <Col xs="5">
                      <div className="btn-group float-end">
                        <Button
                          type="button"
                          color="success"
                          size="sm"
                        >
                          <i className="fa fa-chevron-left" />
                        </Button>
                        <Button
                          type="button"
                          color="success"
                          size="sm"
                        >
                          <i className="fa fa-chevron-right" />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

EmailInbox.propTypes = {
  activeTab: PropTypes.string,
  draftmails: PropTypes.any,
  sentmails: PropTypes.any,
  trashmails: PropTypes.any,
  onGetSentMails: PropTypes.func,
  onGetDraftMails: PropTypes.func,
  onGetTrashMails: PropTypes.func,
  inboxmails: PropTypes.array,
  starredmails: PropTypes.array,
  onGetInboxMails: PropTypes.func,
  onGetStarredMails: PropTypes.func,
  importantmails: PropTypes.array,
  onGetImportantMails: PropTypes.func,
  importantmails: PropTypes.array,
  onGetImportantMails: PropTypes.func,
  importantmails: PropTypes.array,
  onGetImportantMails: PropTypes.func,
  importantmails: PropTypes.array,
  onGetImportantMails: PropTypes.func,
}

const mapStateToProps = ({ mails }) => ({
  inboxmails: mails.inboxmails,
  starredmails: mails.starredmails,
  importantmails: mails.importantmails,
  trashmails: mails.trashmails,
  draftmails: mails.draftmails,
  sentmails: mails.sentmails,
})

const mapDispatchToProps = dispatch => ({
  onGetInboxMails: () => dispatch(getInboxMails()),
  onGetStarredMails: () => dispatch(getStarredMails()),
  onGetImportantMails: () => dispatch(getImportantMails()),
  onGetDraftMails: () => dispatch(getDraftMails()),
  onGetSentMails: () => dispatch(getSentMails()),
  onGetTrashMails: () => dispatch(getTrashMails()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EmailInbox))