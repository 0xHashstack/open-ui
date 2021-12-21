import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Col, Row } from "reactstrap";

class Breadcrumbs extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs="12">
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
              <h4 className="mb-0 font-size-18">{this.props.breadcrumbItem}</h4>
              <div className="page-title-right">
                <Breadcrumb listClassName="m-0">
                  <BreadcrumbItem>
                    <Link to="#">{this.props.title}</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>
                    <Link to="#">{this.props.breadcrumbItem}</Link>
                  </BreadcrumbItem>
                </Breadcrumb>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

Breadcrumbs.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string
}

export default Breadcrumbs
