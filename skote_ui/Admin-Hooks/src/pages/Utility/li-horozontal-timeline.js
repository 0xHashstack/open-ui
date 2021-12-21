import PropTypes from 'prop-types'
import React from "react"

const LiHorizontalTimeline = props => {
  return (
    <React.Fragment>
      <div
        className={
          props.event.id === 3 ? "item event-list active" : "item event-list"
        }
        key={props.key}
        style={{ width: 279 }}
      >
        <div>
          <div className="event-date">
            <div className="text-primary mb-1">{props.event.date}</div>
            <h5 className="mb-4">{props.event.title}</h5>
          </div>
          <div className="event-down-icon">
            <i className="bx bx-down-arrow-circle h1 text-primary down-arrow-icon"/>
          </div>

          <div className="mt-3 px-3">
            <p className="text-muted">{props.event.desc}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

LiHorizontalTimeline.propTypes = {
  event: PropTypes.object,
  key: PropTypes.any
}

export default LiHorizontalTimeline
