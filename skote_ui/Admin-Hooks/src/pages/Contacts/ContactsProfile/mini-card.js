import PropTypes from 'prop-types'
import React from "react"
import { Card, CardBody, Col } from "reactstrap"

const MiniCards = props => {
  const { title, text, iconClass } = props
  return (
    <React.Fragment>
      <Col md="4">
        <Card className="mini-stats-wid">
          <CardBody>
            <div className="d-flex">
              <div className="flex-grow-1">
                <p className="text-muted fw-medium mb-2">{title}</p>
                <h4 className="mb-0">{text}</h4>
              </div>
              <div className="mini-stat-icon avatar-sm align-self-center rounded-circle bg-primary">
                <span className="avatar-title">
                  <i className={"bx " + iconClass + " font-size-24"} />
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

MiniCards.propTypes = {
  iconClass: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
}

export default MiniCards
