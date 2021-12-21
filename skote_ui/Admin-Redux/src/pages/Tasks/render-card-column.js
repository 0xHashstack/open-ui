import React, { Component } from "react"
import { Link } from "react-router-dom"

class RenderCardColumn extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-end">
          <Link
            to="#"
            className="btn btn-primary btn-block"
          >
            <i className="mdi mdi-plus me-1"/>
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default RenderCardColumn
