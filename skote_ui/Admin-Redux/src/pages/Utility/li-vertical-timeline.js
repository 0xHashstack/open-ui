import React, { Component } from "react"
import PropTypes from 'prop-types'

class LiVerticalTimeline extends Component {
  render() {
    return (
      <React.Fragment>
        <li className="event-list">
          <div className="event-timeline-dot">
            <i
              className={
                this.props.status.id === 3
                  ? "bx bx-right-arrow-circle bx-fade-right"
                  : "bx bx-right-arrow-circle"
              }
            />
          </div>
          <div className="media">
            <div className="me-3">
              <i
                className={
                  "bx " + this.props.status.iconClass + " h2 text-primary"
                }
              />
            </div>
            <div className="media-body">
              <div>
                <h5>{this.props.status.stausTitle}</h5>
                <p className="text-muted">{this.props.status.description}</p>
              </div>
            </div>
          </div>
        </li>
      </React.Fragment>
    )
  }
}

LiVerticalTimeline.propTypes = {
  status: PropTypes.object
}

export default LiVerticalTimeline
