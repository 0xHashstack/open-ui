import React, { Component } from "react"
import PropTypes from "prop-types"
import { CardBody, Collapse } from "reactstrap"
import { Link } from "react-router-dom"

class Accordian extends Component {
  constructor(props) {
    super(props)
    this.state = {
      col1: true,
      col2: false,
      col3: false,
      col4: false
    }
    this.t_col1 = this.t_col1.bind(this)
    this.t_col2 = this.t_col2.bind(this)
    this.t_col3 = this.t_col3.bind(this)
    this.t_col4 = this.t_col4.bind(this)
  }

  t_col1() {
    this.setState({
      col1: !this.state.col1,
      col2: false,
      col3: false,
      col4: false
    })
  }

  t_col2() {
    this.setState({
      col2: !this.state.col2,
      col1: false,
      col3: false,
      col4: false
    })
  }

  t_col3() {
    this.setState({
      col3: !this.state.col3,
      col2: false,
      col1: false,
      col4: false
    })
  }

  t_col4() {
    this.setState({
      col4: !this.state.col4,
      col2: false,
      col3: false,
      col1: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div id="gen-ques-accordion" className="accordion custom-accordion">
            <div className="mb-3">
              <Link
                to="#"
                className="accordion-list"
                onClick={this.t_col1}
                style={{ cursor: "pointer" }}
              >
                <div>{this.props.question1}</div>
                <i
                  className={
                    this.state.col1
                      ? "mdi mdi-minus accor-plus-icon"
                      : "mdi mdi-plus accor-plus-icon"
                  }
                />
              </Link>

              <Collapse isOpen={this.state.col1}>
                <CardBody>
                  <p className="mb-0">{this.props.answer1}</p>
                </CardBody>
              </Collapse>
            </div>

            <div className="mb-3">
              <Link
                to="#"
                className="accordion-list"
                onClick={this.t_col2}
                style={{ cursor: "pointer" }}
              >
                <div>{this.props.question2}</div>
                <i
                  className={
                    this.state.col2
                      ? "mdi mdi-minus accor-plus-icon"
                      : "mdi mdi-plus accor-plus-icon"
                  }
                />
              </Link>
              <Collapse isOpen={this.state.col2}>
                <CardBody>
                  <p className="mb-0">{this.props.answer2}</p>
                </CardBody>
              </Collapse>
            </div>

            <div className="mb-3">
              <Link
                to="#"
                className="accordion-list"
                onClick={this.t_col3}
                style={{ cursor: "pointer" }}
              >
                <div>{this.props.question3}</div>
                <i
                  className={
                    this.state.col3
                      ? "mdi mdi-minus accor-plus-icon"
                      : "mdi mdi-plus accor-plus-icon"
                  }
                />
              </Link>
              <Collapse isOpen={this.state.col3}>
                <CardBody>
                  <p className="mb-0">{this.props.answer3}</p>
                </CardBody>
              </Collapse>
            </div>

            <div>
              <Link
                to="#"
                className="accordion-list"
                onClick={this.t_col4}
                style={{ cursor: "pointer" }}
              >
                <div>{this.props.question4}</div>
                <i
                  className={
                    this.state.col4
                      ? "mdi mdi-minus accor-plus-icon"
                      : "mdi mdi-plus accor-plus-icon"
                  }
                />
              </Link>
              <Collapse isOpen={this.state.col4}>
                <CardBody>
                  <p className="mb-0">{this.props.answer4}</p>
                </CardBody>
              </Collapse>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

Accordian.propTypes = {
  answer1: PropTypes.any,
  answer2: PropTypes.any,
  answer3: PropTypes.any,
  answer4: PropTypes.any,
  question1: PropTypes.any,
  question2: PropTypes.any,
  question3: PropTypes.any,
  question4: PropTypes.any
}

export default Accordian
