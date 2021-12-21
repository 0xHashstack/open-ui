import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Col, Card, CardBody, Media } from "reactstrap"

class MiniCards extends Component {
  render() {
    return (
      <React.Fragment>
        <Col md="4">
          <Card className="mini-stats-wid">
            <CardBody>
              <div className="d-flex">
                <div className="flex-grow-1">
                  <p className="text-muted fw-medium mb-2">
                    {this.props.title}
                  </p>
                  <h4 className="mb-0">{this.props.text}</h4>
                </div>

                <div className="mini-stat-icon avatar-sm align-self-center rounded-circle bg-primary">
                  <span className="avatar-title">
                    <i
                      className={"bx " + this.props.iconClass + " font-size-24"}
                    />
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    )
  }
}

MiniCards.propTypes = {
  iconClass: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
}

export default MiniCards
