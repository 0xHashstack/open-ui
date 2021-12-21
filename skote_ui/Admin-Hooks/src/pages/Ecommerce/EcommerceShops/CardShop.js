import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import { Card, Col, Row } from "reactstrap"

const CardShop = props => {
  const { shop } = props
  const name = shop.name
  const nameIcon = name.charAt(0)
  return (
    <React.Fragment>
      <Col xl="4" sm="6">
        <Card>
          <Row>
            <Col xl="5">
              <div className="text-center p-4 border-end">
                <div className="avatar-sm mx-auto mb-3 mt-1">
                  <span
                    className={
                      "avatar-title rounded-circle bg-soft bg-" +
                      shop.color +
                      " primary text-" +
                      shop.color +
                      " font-size-16"
                    }
                  >
                    {nameIcon}
                  </span>
                </div>
                <h5 className="text-truncate">{shop.name}</h5>
              </div>
            </Col>

            <Col xl="7">
              <div className="p-4 text-center text-xl-start">
                <Row>
                  <Col xs="6">
                    <div>
                      <p className="text-muted mb-2 text-truncate">Products</p>
                      <h5>{shop.product}</h5>
                    </div>
                  </Col>
                  <Col xs="6">
                    <div>
                      <p className="text-muted mb-2 text-truncate">
                        Wallet Balance
                      </p>
                      <h5>${shop.balance}</h5>
                    </div>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Link to="#" className="text-decoration-underline text-reset">See Profile <i className="mdi mdi-arrow-right"></i></Link>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardShop.propTypes = {
  shop: PropTypes.object
}

export default CardShop
