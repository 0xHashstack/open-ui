import React, { useState } from "react"
import MetaTags from "react-meta-tags"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Label,
  Button,
  Input,
  Form,
  FormGroup,
} from "reactstrap"
import classnames from "classnames"
import { Link } from "react-router-dom"

//Dropzone
import Dropzone from "react-dropzone"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import images
import verificationImg from "../../assets/images/verification-img.png"

const CryptoKYCApplication = props => {
  const [modal, setModal] = useState(false)
  const [activeTab, setActiveTab] = useState(1)
  const [selectedFiles, setSelectedFiles] = useState([])

  const togglemodal = () => {
    setModal(!modal)
  }

  const [passedSteps, setPassedSteps] = useState([1])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      const modifiedSteps = [...passedSteps]
      modifiedSteps.push(tab)
      setActiveTab(tab)
      setPassedSteps(modifiedSteps);
    }
  }

  const handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setSelectedFiles(files)
  }

  /**
   * Formats the size
   */
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            KYC Application | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="KYC Application" />

          <Row className="justify-content-center mt-lg-5">
            <Col xl="5" sm="8">
              <Card>
                <CardBody>
                  <div className="text-center">
                    <Row className="justify-content-center">
                      <Col lg="10">
                        <h4 className="mt-4 font-weight-semibold">
                          KYC Verification
                        </h4>
                        <p className="text-muted mt-3">
                          Itaque earum rerum hic tenetur a sapiente delectus ut
                          aut reiciendis perferendis asperiores repellat.
                        </p>

                        <div className="mt-4">
                          {/* button triggers modal */}
                          <Button
                            type="button"
                            color="primary"
                            onClick={togglemodal}
                          >
                            Click here for Verification
                          </Button>
                        </div>
                      </Col>
                    </Row>

                    <Row className="justify-content-center mt-5 mb-2">
                      <Col sm="6" xs="8">
                        <div>
                          <img
                            src={verificationImg}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>

                  {/* modal */}
                  <Modal
                    isOpen={modal}
                    role="dialog"
                    size="lg"
                    autoFocus={true}
                    centered
                    id="verificationModal"
                    toggle={togglemodal}
                  >
                    <div className="modal-content">
                      <ModalHeader toggle={togglemodal}>
                        Verify your Account
                      </ModalHeader>
                      <ModalBody>
                        <div id="kyc-verify-wizard" className="wizard clearfix">
                          <div className="steps clearfix">
                            <ul>
                              <NavItem
                                className={classnames({
                                  current: activeTab === 1,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 1,
                                  })}
                                  onClick={() => {
                                    toggleTab(1)
                                  }}
                                  disabled={!passedSteps.includes(1)}
                                >
                                  <span className="number">1.</span>
                                  Personal Info
                                </NavLink>
                              </NavItem>
                              <NavItem
                                className={classnames({
                                  current: activeTab === 2,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 2,
                                  })}
                                  onClick={() => {
                                    toggleTab(2)
                                  }}
                                  disabled={!passedSteps.includes(2)}
                                >
                                  <span className="number">2.</span>
                                  Confirm email
                                </NavLink>
                              </NavItem>
                              <NavItem
                                className={classnames({
                                  current: activeTab === 3,
                                })}
                              >
                                <NavLink
                                  className={classnames({
                                    active: activeTab === 3,
                                  })}
                                  onClick={() => {
                                    toggleTab(3)
                                  }}
                                  disabled={!passedSteps.includes(3)}
                                >
                                  <span className="number">3.</span>
                                  Document Verification
                                </NavLink>
                              </NavItem>
                            </ul>
                          </div>
                          <div className="content clearfix">
                            <TabContent
                              activeTab={activeTab}
                              className="twitter-bs-wizard-tab-content"
                            >
                              <TabPane tabId={1} id="personal-info">
                                <Form>
                                  <Row>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycfirstname-input"
                                          className="form-label"
                                        >
                                          First name
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kycfirstname-input"
                                          placeholder="Enter First name"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kyclastname-input"
                                          className="form-label"
                                        >
                                          Last name
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kyclastname-input"
                                          placeholder="Enter Last name"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>

                                  <Row>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycphoneno-input"
                                          className="form-label"
                                        >
                                          Phone
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kycphoneno-input"
                                          placeholder="Enter Phone number"
                                        />
                                      </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycbirthdate-input"
                                          className="form-label"
                                        >
                                          Date of birth
                                        </Label>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          id="kycbirthdate-input"
                                          placeholder="Enter Date of birth"
                                        />
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                  <Row>
                                    <Col lg="12">
                                      <FormGroup className="mb-3">
                                        <Label
                                          htmlFor="kycselectcity-input"
                                          className="form-label"
                                        >
                                          City
                                        </Label>
                                        <select
                                          className="form-select"
                                          id="kycselectcity-input"
                                        >
                                          <option>San Francisco</option>
                                          <option>Los Angeles</option>
                                          <option>San Diego</option>
                                        </select>
                                      </FormGroup>
                                    </Col>
                                  </Row>
                                </Form>
                              </TabPane>
                              <TabPane tabId={2} id="confirm-email">
                                <div>
                                  <Form>
                                    <Row>
                                      <Col lg="12">
                                        <FormGroup className="mb-3">
                                          <Label htmlFor="kycemail-input">
                                            Email
                                          </Label>
                                          <Input
                                            type="email"
                                            className="form-control"
                                            id="kycemail-input"
                                            placeholder="Enter Email Address"
                                          />
                                        </FormGroup>

                                        <FormGroup className="mb-3">
                                          <Label htmlFor="kycconfirmcode-input">
                                            Confirm code
                                          </Label>
                                          <Input
                                            type="email"
                                            className="form-control"
                                            id="kycconfirmcode-input"
                                            placeholder="Enter Confirm code"
                                          />
                                        </FormGroup>

                                        <div className="mb-3">
                                          Didn&apos;t receive code ?
                                          <Button type="button" color="link">
                                            Resend Code
                                          </Button>
                                        </div>
                                      </Col>
                                    </Row>
                                  </Form>
                                </div>
                              </TabPane>
                              <TabPane tabId={3} id="doc-verification">
                                <h5 className="font-size-14 mb-3">
                                  Upload document file for a verification
                                </h5>
                                <div className="kyc-doc-verification mb-3">
                                  <Dropzone
                                    onDrop={acceptedFiles =>
                                      handleAcceptedFiles(acceptedFiles)
                                    }
                                  >
                                    {({ getRootProps, getInputProps }) => (
                                      <div className="dropzone">
                                        <div
                                          className="dz-message needsclick"
                                          {...getRootProps()}
                                        >
                                          <input {...getInputProps()} />
                                          <div className="mb-3">
                                            <i className="display-4 text-muted bx bxs-cloud-upload"></i>
                                          </div>
                                          <h4>
                                            Drop files here or click to upload.
                                          </h4>
                                        </div>
                                      </div>
                                    )}
                                  </Dropzone>
                                  <div
                                    className="dropzone-previews mt-3"
                                    id="file-previews"
                                  >
                                    {selectedFiles.map((f, i) => {
                                      return (
                                        <Card
                                          className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                          key={i + "-file"}
                                        >
                                          <div className="p-2">
                                            <Row className="align-items-center">
                                              <Col className="col-auto">
                                                <img
                                                  data-dz-thumbnail=""
                                                  height="80"
                                                  className="avatar-sm rounded bg-light"
                                                  alt={f.name}
                                                  src={f.preview}
                                                />
                                              </Col>
                                              <Col>
                                                <Link
                                                  to="#"
                                                  className="text-muted font-weight-bold"
                                                >
                                                  {f.name}
                                                </Link>
                                                <p className="mb-0">
                                                  <strong>
                                                    {f.formattedSize}
                                                  </strong>
                                                </p>
                                              </Col>
                                            </Row>
                                          </div>
                                        </Card>
                                      )
                                    })}
                                  </div>
                                </div>
                              </TabPane>
                            </TabContent>
                          </div>
                          <div className="actions clearfix">
                            <ul role="menu" aria-label="Pagination">
                              <li
                                className={
                                  activeTab === 1
                                    ? "previous disabled"
                                    : "previous"
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab - 1)
                                  }}
                                >
                                  Previous
                                </Link>
                              </li>
                              <li
                                className={
                                  activeTab === 3 ? "next disabled" : "next"
                                }
                              >
                                <Link
                                  to="#"
                                  onClick={() => {
                                    toggleTab(activeTab + 1)
                                  }}
                                >
                                  Next
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </ModalBody>
                    </div>
                  </Modal>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default CryptoKYCApplication
