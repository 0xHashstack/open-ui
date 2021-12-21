import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Col, Card, CardBody } from "reactstrap"

class CardMaintenance extends Component {
  render() {
    return (
      <React.Fragment>
        <Col md="4">
          <Card className="mt-4 maintenance-box">
            <CardBody>{this.props.children}</CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

CardMaintenance.propTypes = {
  children: PropTypes.array
}

export default CardMaintenance
