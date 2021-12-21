import React, { Component } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Input,
  Media,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import images
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"

class EmailSideBar extends Component {
  constructor(props) {

    super(props)
    this.state = {
      modal: false,
      activeTab: "1",
    }

    this.togglemodal.bind(this)
    this.toggleTab = this.toggleTab.bind(this)
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

    return (
      <React.Fragment>
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
            <Link to="email-inbox" className="active">
              <i className="mdi mdi-email-outline me-2"></i> Inbox{" "}
              <span className="ml-1 float-end">(18)</span>
            </Link>
            <Link to="/email-inbox" filter="SHOW_COMPLETED">
              <i className="mdi mdi-star-outline me-2"></i>Starred
            </Link>
            <Link to="/email-inbox">
              <i className="mdi mdi-diamond-stone me-2"></i>Important
            </Link>
            <Link to="/email-inbox">
              <i className="mdi mdi-file-outline me-2"></i>Draft
            </Link>
            <Link to="/email-inbox">
              <i className="mdi mdi-email-check-outline me-2"></i>Sent Mail
            </Link>
            <Link to="/email-inbox">
              <i className="mdi mdi-trash-can-outline me-2"></i>Trash
            </Link>
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
      </React.Fragment>
    )
  }
}
EmailSideBar.propTypes = {
  activeTab: PropTypes.any
}
export default EmailSideBar