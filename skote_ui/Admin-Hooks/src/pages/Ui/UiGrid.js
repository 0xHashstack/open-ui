import React from "react"
import MetaTags from 'react-meta-tags';

import {
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiGrid = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Grid | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Grid" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Grid options</CardTitle>
                  <CardSubtitle className="mb-3">
                    See how aspects of the Bootstrap grid system work across
                    multiple devices with a handy table.
                  </CardSubtitle>

                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th />
                          <th className="text-center">
                            Extra small
                            <br />
                            <small>&lt;576px</small>
                          </th>
                          <th className="text-center">
                            Small
                            <br />
                            <small>≥576px</small>
                          </th>
                          <th className="text-center">
                            Medium
                            <br />
                            <small>≥768px</small>
                          </th>
                          <th className="text-center">
                            Large
                            <br />
                            <small>≥992px</small>
                          </th>
                          <th className="text-center">
                            Extra large
                            <br />
                            <small>≥1200px</small>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            Grid behavior
                          </th>
                          <td>Horizontal at all times</td>
                          <td colSpan="4">
                            Collapsed to start, horizontal above breakpoints
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            Max container width
                          </th>
                          <td>None (auto)</td>
                          <td>540px</td>
                          <td>720px</td>
                          <td>960px</td>
                          <td>1140px</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            class prefix
                          </th>
                          <td>
                            <code>.col-</code>
                          </td>
                          <td>
                            <code>.col-sm-</code>
                          </td>
                          <td>
                            <code>.col-md-</code>
                          </td>
                          <td>
                            <code>.col-lg-</code>
                          </td>
                          <td>
                            <code>.col-xl-</code>
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            # of columns
                          </th>
                          <td colSpan="5">12</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            Gutter width
                          </th>
                          <td colSpan="5">
                            24px (12px on each side of a column)
                          </td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            Nestable
                          </th>
                          <td colSpan="5">Yes</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            Offsets
                          </th>
                          <td colSpan="5">Yes</td>
                        </tr>
                        <tr>
                          <th className="text-nowrap" scope="row">
                            Column ordering
                          </th>
                          <td colSpan="5">Yes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiGrid
