import React, { Component } from "react"
import { Link } from "react-router-dom"
import MetaTags from 'react-meta-tags';
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap"
import Select from "react-select"
import Dropzone from "react-dropzone"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class EcommerceAddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedFiles: [],
    }
  }

  handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: this.formatBytes(file.size),
      })
    )

    this.setState({ selectedFiles: files })
  }

  formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  render() {
    const options = [
      { value: "AK", label: "Alaska" },
      { value: "HI", label: "Hawaii" },
      { value: "CA", label: "California" },
      { value: "NV", label: "Nevada" },
      { value: "OR", label: "Oregon" },
      { value: "WA", label: "Washington" },
    ]
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Add Product | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Product" />

            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Basic Information</CardTitle>
                    <p className="card-title-desc">Fill all information below</p>

                    <Form>
                      <Row>
                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label htmlFor="productname">Product Name</Label>
                            <Input
                              id="productname"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="manufacturername">
                              Manufacturer Name
                            </Label>
                            <Input
                              id="manufacturername"
                              name="manufacturername"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="manufacturerbrand">
                              Manufacturer Brand
                            </Label>
                            <Input
                              id="manufacturerbrand"
                              name="manufacturerbrand"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="price">Price</Label>
                            <Input
                              id="price"
                              name="price"
                              type="text"
                              className="form-control"
                            />
                          </FormGroup>
                        </Col>

                        <Col sm="6">
                          <FormGroup className="mb-3">
                            <Label className="control-label">Category</Label>
                            <select className="form-control select2">
                              <option>Select</option>
                              <option value="AK">Alaska</option>
                              <option value="HI">Hawaii</option>
                            </select>
                          </FormGroup>
                          <FormGroup className="select2-container mb-3">
                            <Label className="control-label">Features</Label>
                            <Select
                              classNamePrefix="form-control"
                              placeholder="Choose ..."
                              title="Country"
                              options={options}
                              isMulti
                            />
                          </FormGroup>
                          <FormGroup className="mb-3">
                            <Label htmlFor="productdesc">
                              Product Description
                            </Label>
                            <textarea
                              className="form-control"
                              id="productdesc"
                              rows="5"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <div className="d-flex flex-wrap gap-2">
                        <Button
                          type="submit"
                          color="primary"
                        >
                          Save Changes
                      </Button>
                        <Button
                          type="submit"
                          color="secondary"
                        >
                          Cancel
                      </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <CardTitle className="mb-3 h4">Product Images</CardTitle>
                    <Form className="dropzone">
                      <Dropzone
                        onDrop={acceptedFiles =>
                          this.handleAcceptedFiles(acceptedFiles)
                        }
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div>
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="dz-message needsclick">
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                                </div>
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                      <div
                        className="dropzone-previews mt-3"
                        id="file-previews"
                      >
                        {this.state.selectedFiles.map((f, i) => {
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
                                      <strong>{f.formattedSize}</strong>
                                    </p>
                                  </Col>
                                </Row>
                              </div>
                            </Card>
                          )
                        })}
                      </div>
                    </Form>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <CardTitle className="h4">Meta Data</CardTitle>
                    <p className="card-title-desc">
                      Fill all information below
                    </p>

                    <Form>
                      <Row>
                        <Col sm={6}>
                          <div className="mb-3">
                            <Label htmlFor="metatitle">Meta title</Label>
                            <Input
                              id="metatitle"
                              name="productname"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="mb-3">
                            <Label htmlFor="metakeywords">Meta Keywords</Label>
                            <Input
                              id="metakeywords"
                              name="manufacturername"
                              type="text"
                              className="form-control"
                            />
                          </div>
                        </Col>

                        <Col sm={6}>
                          <div className="mb-3">
                            <Label htmlFor="metadescription">
                              Meta Description
                            </Label>
                            <textarea
                              className="form-control"
                              id="metadescription"
                              rows="5"
                            />
                          </div>
                        </Col>
                      </Row>

                      <Button
                        type="submit"
                        color="primary"
                        className="me-1"
                      >
                        Save Changes
                      </Button>{" "}
                      <Button
                        type="submit"
                        color="secondary"
                      >
                        Cancel
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default EcommerceAddProduct
