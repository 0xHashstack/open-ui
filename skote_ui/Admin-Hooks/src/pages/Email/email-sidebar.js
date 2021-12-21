import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Card,
} from "reactstrap"

// Import Editor
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

//Import images
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import avatar3 from "../../assets/images/users/avatar-3.jpg"
import avatar4 from "../../assets/images/users/avatar-4.jpg"
import avatar6 from "../../assets/images/users/avatar-6.jpg"

const EmailSideBar = props => {
  const [modal, setmodal] = useState(false)

  return (
    <React.Fragment>
      <Card className="email-leftbar">
        <Button
          type="button"
          color="danger"
          className=""
          onClick={() => {
            setmodal(!modal)
          }}
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
          <Link to="#" className="d-flex">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar2}
              alt="skote"
              height="36"
            />
            <div className="flex-grow-1 chat-user-box">
              <p className="user-title m-0">Scott Median</p>
              <p className="text-muted">Hello</p>
            </div>
          </Link>

          <Link to="#" className="d-flex">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar3}
              alt="skote"
              height="36"
            />
            <div className="chat-user-box">
              <p className="user-title m-0">Julian Rosa</p>
              <p className="text-muted">What about our next..</p>
            </div>
          </Link>

          <Link to="#" className="d-flex">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar4}
              alt="skote"
              height="36"
            />
            <div className="chat-user-box">
              <p className="user-title m-0">David Medina</p>
              <p className="text-muted">Yeah everything is fine</p>
            </div>
          </Link>

          <Link to="#" className="d-flex">
            <img
              className="d-flex me-3 rounded-circle"
              src={avatar6}
              alt="skote"
              height="36"
            />
            <div className="chat-user-box">
              <p className="user-title m-0">Jay Baker</p>
              <p className="text-muted">Wow that&apos;s great</p>
            </div>
          </Link>
        </div>
      </Card>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex="-1"
        toggle={() => {
          setmodal(!modal)
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal)
            }}
          >
            New Message
          </ModalHeader>
          <ModalBody>
            <form>
              <div className="mb-3">
                <Input type="email" className="form-control" placeholder="To" />
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
              onClick={() => {
                setmodal(!modal)
              }}
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

export default EmailSideBar
