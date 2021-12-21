import React, { Component } from "react"
import PropTypes from 'prop-types'

class FeatureBox extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mt-4 mt-md-auto">
          <div className="d-flex align-items-center mb-2">
            <div className="features-number font-weight-semibold display-4 me-3">
              {this.props.num}
            </div>
            <h4 className="mb-0">{this.props.title}</h4>
          </div>
          <p className="text-muted">{this.props.desc}</p>
          <div className="text-muted mt-4">
            {this.props.features.map((feature, key) => (
              <p key={key} className={feature.id === 1 ? "mb-2" : ""}>
                <i className="mdi mdi-circle-medium text-success me-1" />
                {feature.desc}
              </p>
            ))}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

FeatureBox.propTypes = {
  desc: PropTypes.any,
  features: PropTypes.array,
  num: PropTypes.string,
  title: PropTypes.string
}

export default FeatureBox
