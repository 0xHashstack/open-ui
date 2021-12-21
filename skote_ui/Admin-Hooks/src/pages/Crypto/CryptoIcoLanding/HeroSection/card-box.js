import PropTypes from 'prop-types';
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const CardBox = props => {
  return (
    <React.Fragment>
      {props.coins.map((coin, key) => (
        <Col md="4" key={key}>
          <Card>
            <CardBody>
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span
                    className={
                      "avatar-title rounded-circle bg-soft bg-" +
                      coin.color +
                      " text-" +
                      coin.color +
                      " font-size-18"
                    }
                  >
                    <i className={coin.icon} />
                  </span>
                </div>
                <div className="flex-grow-1">
                  <p className="text-muted">{coin.title}</p>
                  <h5>$ {coin.value}</h5>
                  <p className="text-muted text-truncate mb-0">
                    {coin.isIncrease ? "+ " : "- "} {coin.rate}{" "}
                    <i
                      className={
                        coin.isIncrease
                          ? "mdi mdi-arrow-up ms-1 text-success"
                          : "mdi mdi-arrow-down ms-1 text-danger"
                      }
                    />
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

CardBox.propTypes = {
  coins: PropTypes.array
};

export default CardBox;
