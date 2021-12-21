import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Collapse,
  DropdownMenu,
  DropdownToggle,
  UncontrolledAlert,
  UncontrolledDropdown,
} from "reactstrap"

const FileRightBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <React.Fragment>
      <Card className="filemanager-sidebar me-md-2">
        <CardBody>
          <div className="d-flex flex-column h-100">
            <div className="mb-4">
              <div className="mb-3">
                <UncontrolledDropdown>
                  <DropdownToggle
                    className="btn btn-light w-100"
                    color="#eff2f7"
                  >
                    <i className="mdi mdi-plus me-1"></i> Create New
                  </DropdownToggle>
                  <DropdownMenu>
                    <Link className="dropdown-item" to="#">
                      <i className="bx bx-folder me-1"></i> Folder
                    </Link>
                    <Link className="dropdown-item" to="#">
                      <i className="bx bx-file me-1"></i> File
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <ul className="list-unstyled categories-list">
                <li>
                  <div className="custom-accordion">
                    <Link
                      className="text-body fw-medium py-1 d-flex align-items-center"
                      onClick={toggle}
                      to="#"
                    >
                      <i className="mdi mdi-folder font-size-16 text-warning me-2"></i>{" "}
                      Files{" "}
                      {/* <i className="mdi mdi-chevron-up accor-down-icon ms-auto"></i> */}
                      <i
                        className={
                          isOpen
                            ? "mdi mdi-chevron-up accor-down-icon ms-auto"
                            : "mdi mdi-chevron-down accor-down-icon ms-auto"
                        }
                      />
                    </Link>
                    <Collapse isOpen={isOpen}>
                      <div className="card border-0 shadow-none ps-2 mb-0">
                        <ul className="list-unstyled mb-0">
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Design</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Development</span>{" "}
                              <i className="mdi mdi-pin ms-auto"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Project A</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" className="d-flex align-items-center">
                              <span className="me-auto">Admin</span>{" "}
                              <i className="mdi mdi-pin ms-auto"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-google-drive font-size-16 text-muted me-2"></i>{" "}
                    <span className="me-auto">Google Drive</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-dropbox font-size-16 me-2 text-primary"></i>{" "}
                    <span className="me-auto">Dropbox</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-share-variant font-size-16 me-2"></i>{" "}
                    <span className="me-auto">Shared</span>{" "}
                    <i className="mdi mdi-circle-medium text-danger ms-2"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-star-outline text-muted font-size-16 me-2"></i>{" "}
                    <span className="me-auto">Starred</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-trash-can text-danger font-size-16 me-2"></i>{" "}
                    <span className="me-auto">Trash</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-body d-flex align-items-center">
                    <i className="mdi mdi-cog text-muted font-size-16 me-2"></i>{" "}
                    <span className="me-auto">Setting</span>
                    <span className="badge bg-success rounded-pill ms-2">
                      01
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-auto">
              <UncontrolledAlert color="success" className="px-3 mb-0 alert-dismissible">
                <div className="mb-3">
                  <i className="bx bxs-folder-open h1 text-success"></i>
                </div>

                <div>
                  <h5 className="text-success">Upgrade Features</h5>
                  <p>Cum sociis natoque penatibus et</p>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-link text-decoration-none text-success"
                    >
                      Upgrade <i className="mdi mdi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </UncontrolledAlert>
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default FileRightBar
