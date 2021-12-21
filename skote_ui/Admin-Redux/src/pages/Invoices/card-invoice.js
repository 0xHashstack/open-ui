import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, UncontrolledTooltip } from "reactstrap";
import images from "assets/images";

class CardInvoice extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const name = this.props.data.founder;
    const nameIcon = name.charAt(0);

    return (
      <React.Fragment>
        <Col xl="4" sm="6">
          <Card>
            <CardBody>
              <Row>
                <Col lg="4">
                  <div className="text-lg-center">
                    {this.props.data.image ? (
                      <img
                        src={images[this.props.data.image]}
                        className="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                        alt="img"
                      />
                    ) : (
                      <div className="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none">
                        <span
                          className={
                            "avatar-title rounded-circle bg-soft bg-" +
                            this.props.data.color +
                            " text-primary font-size-16"
                          }
                        >
                          {nameIcon}
                        </span>
                      </div>
                    )}

                    <h5 className="mb-1 font-size-15 text-truncate">
                      {this.props.data.founder}
                    </h5>
                    <Link to="#" className="text-muted">
                      @Skote
                    </Link>
                  </div>
                </Col>

                <Col lg="8">
                  <div>
                    <Link
                      to={"/invoices-detail/" + this.props.data.id}
                      className="d-block text-primary text-decoration-underline mb-2"
                    >
                      Invoice #{this.props.data.invoiceID}
                    </Link>
                    <h5 className="text-truncate mb-4 mb-lg-5">
                      {this.props.data.company}
                    </h5>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-3">
                        <h5 className="font-size-14" id="amountTooltip">
                          <i className="bx bx-money me-1 text-muted" /> ${" "}
                          {this.props.data.invoicePrice}
                          <UncontrolledTooltip
                            placement="top"
                            target="amountTooltip"
                          >
                            Amount
                          </UncontrolledTooltip>
                        </h5>
                      </li>{" "}
                      <li className="list-inline-item">
                        <h5 className="font-size-14" id="duedateTooltip">
                          <i className="bx bx-calendar me-1 text-muted" />{" "}
                          {this.props.data.date}
                          <UncontrolledTooltip
                            placement="top"
                            target="duedateTooltip"
                          >
                            Due Date
                          </UncontrolledTooltip>
                        </h5>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
  }
}

CardInvoice.propTypes = {
  data: PropTypes.object,
};

export default CardInvoice;