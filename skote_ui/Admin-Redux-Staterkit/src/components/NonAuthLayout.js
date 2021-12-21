import React, { Component } from "react"
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"

class NonAuthLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.capitalizeFirstLetter.bind(this)
  }

  capitalizeFirstLetter = string => {
    return string.charAt(1).toUpperCase() + string.slice(2)
  }
  
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}

NonAuthLayout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
}

export default withRouter(NonAuthLayout)
