import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class BasicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Basic Tables | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="Tables" breadcrumbItem="Basic Tables" />

            <Row>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Basic example</CardTitle>
                    <p className="card-title-desc">
                      For basic styling—light padding and only horizontal
                      dividers—add the base className <code>.table</code> to any
                      <code>&lt;table&gt;</code>.
                    </p>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Dark table</CardTitle>
                    <p className="card-title-desc">
                      You can also invert the colors—with light text on dark
                      backgrounds—with <code>.table-dark</code>.
                    </p>

                    <div className="table-responsive">
                      <Table className="table table-dark mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Table head</CardTitle>
                    <p className="card-title-desc">
                      Use one of two modifier classNames to make{" "}
                      <code>&lt;thead&gt;</code>s appear light or dark gray.
                    </p>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Striped rows</CardTitle>
                    <p className="card-title-desc">
                      Use <code>.table-striped</code> to add zebra-striping to
                      any table row within the <code>&lt;tbody&gt;</code>.
                    </p>

                    <div className="table-responsive">
                      <Table className="table table-striped mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Bordered table</CardTitle>
                    <p className="card-title-desc">
                      Add <code>.table-bordered</code> for borders on all sides
                      of the table and cells.
                    </p>

                    <div className="table-responsive">
                      <Table className="table table-bordered mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Borderless table</CardTitle>
                    <p className="card-title-desc">
                      {" "}
                      Add <code>.table-borderless</code> for a table without
                      borders.
                    </p>

                    <div className="table-responsive">
                      <Table className="table table-borderless mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <div className="table-responsive">
                      <h4 className="card-title">Vertical alignment</h4>
                      <p className="card-title-desc">Table cells in <code>&lt;tbody&gt;</code> inherit their alignment from <code>&lt;table&gt;</code> and are aligned to the the top by default. Use the vertical align classes to re-align where needed.</p>

                      <div className="table-responsive">
                        <Table className="align-middle mb-0">

                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>
                                <button type="button" className="btn btn-light btn-sm">View</button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>

                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xl={6}>
                <Card>
                  <CardBody>
                    <h4 className="card-title">Nesting</h4>
                    <p className="card-title-desc"> Border styles, active styles, and table variants are not inherited by nested tables.</p>

                    <div className="table-responsive">
                      <Table className="table-striped table-bordered mb-0">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <td colSpan="4">
                              <table className="table mb-0">
                                <thead>
                                  <tr>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                    <th scope="col">Header</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">A</th>
                                    <td>First</td>
                                    <td>Last</td>
                                  </tr>
                                  <tr>
                                    <th scope="row">B</th>
                                    <td>First</td>
                                    <td>Last</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Hoverable </CardTitle>
                    <p className="card-title-desc">
                      Add <code>.table-hover</code> to enable a hover state on
                      table rows within a <code>&lt;tbody&gt;</code>.
                    </p>

                    <div className="table-responsive">
                      <Table className="table table-hover mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Small table </CardTitle>
                    <p className="card-title-desc">
                      {" "}
                      Add <code>.table-sm</code> to make tables more compact by
                      cutting cell padding in half.
                    </p>

                    <div className="table-responsive">
                      <Table className="table table-sm m-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Contextual classNames </CardTitle>
                    <p className="card-title-desc">
                      Use contextual classNames to color table rows or
                      individual cells.
                    </p>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="table-light">
                            <th scope="row">1</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>

                          <tr className="table-success">
                            <th scope="row">2</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>

                          <tr className="table-info">
                            <th scope="row">3</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>

                          <tr className="table-warning">
                            <th scope="row">4</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>

                          <tr className="table-danger">
                            <th scope="row">5</th>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={6}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Captions </CardTitle>
                    <p className="card-title-desc">
                      A <code>&lt;caption&gt;</code> functions like a heading
                      for a table. It helps users with screen readers to find a
                      table and understand what it’s about and decide if they
                      want to read it.
                    </p>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <caption>List of users</caption>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col lg={12}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Responsive table </CardTitle>
                    <p className="card-title-desc">
                      Create responsive table by wrapping any{" "}
                      <code>.table</code> in <code>.table-responsive</code>
                      to make them scroll horizontally on small devices (under
                      768px).
                    </p>

                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BasicTable
