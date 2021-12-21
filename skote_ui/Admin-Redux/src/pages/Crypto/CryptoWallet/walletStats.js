import React,{Component} from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"
import { Link } from "react-router-dom"

class WalletStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="d-flex align-items-start">
              <div className="me-4">
                <i className="mdi mdi-account-circle text-primary h1" />
              </div>

              <div className="flex-grow-1">
                <div className="text-muted">
                  <h5>{this.props.wallet.userName}</h5>
                  <p className="mb-1">{this.props.wallet.email}</p>
                  <p className="mb-0">Id no: {this.props.wallet.id}</p>
                </div>
              </div>

              <Dropdown isOpen={this.props.isMenu} toggle={this.props.toggleMenu} className="ms-2">
                <DropdownToggle tag="a" className="text-muted">
                  <i className="mdi mdi-dots-horizontal font-size-18" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem href="#">Action</DropdownItem>
                  <DropdownItem href="#">Another action</DropdownItem>
                  <DropdownItem href="#">Something else</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </CardBody>
          <CardBody className="border-top">
            <Row>
              <Col sm="6">
                <div>
                  <p className="text-muted mb-2">Available Balance</p>
                  <h5>{this.props.wallet.availableBalance}</h5>
                </div>
              </Col>
              <Col sm="6">
                <div className="text-sm-end mt-4 mt-sm-0">
                  <p className="text-muted mb-2">Since last month</p>
                  <h5>
                    {this.props.wallet.lastMonthDifference}{"  "}
                    <span className="badge bg-success ms-1 align-bottom">
                      {this.props.wallet.lastMonthDifferencePercent}
                    </span>
                  </h5>
                </div>
              </Col>
            </Row>
          </CardBody>
          <CardBody className="border-top">
            <p className="text-muted mb-4">In this month</p>
            <div className="text-center">
              <Row>
                <Col sm="4">
                  <div>
                    <div className="font-size-24 text-primary mb-2">
                      <i className="bx bx-send" />
                    </div>

                    <p className="text-muted mb-2">Send</p>
                    <h5>{this.props.wallet.send}</h5>

                    <div className="mt-3">
                      <Link to="#" className="btn btn-primary btn-sm w-md">
                        Send
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="mt-4 mt-sm-0">
                    <div className="font-size-24 text-primary mb-2">
                      <i className="bx bx-import" />
                    </div>

                    <p className="text-muted mb-2">receive</p>
                    <h5>{this.props.wallet.receive}</h5>

                    <div className="mt-3">
                      <Link to="#" className="btn btn-primary btn-sm w-md">
                        Receive
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col sm="4">
                  <div className="mt-4 mt-sm-0">
                    <div className="font-size-24 text-primary mb-2">
                      <i className="bx bx-wallet" />
                    </div>

                    <p className="text-muted mb-2">Withdraw</p>
                    <h5>{this.props.wallet.withdraw}</h5>

                    <div className="mt-3">
                      <Link to="#" className="btn btn-primary btn-sm w-md">
                        Withdraw
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
      );
    }
}

WalletStats.propTypes = {
  wallet: PropTypes.any,
  isMenu: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

export default WalletStats
