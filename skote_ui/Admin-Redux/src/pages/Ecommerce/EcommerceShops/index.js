import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Card
import CardShop from "./CardShop"
import { getShops } from "store/e-commerce/actions"

class EcommerceShops extends Component {
  componentDidMount() {
    const { onGetShops } = this.props
    onGetShops()
  }

  render() {
    const { shops } = this.props

    return (
      <React.Fragment>
        <div className="page-content">
        <MetaTags>
            <title>Shops | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Shops" />
            <Row>
              {map(shops, (shop, key) => (
                <CardShop shop={shop} key={"_shop_" + key} />
              ))}
            </Row>
            <Row>
              <Col xs="12">
                <div className="text-center my-3">
                  <Link to="#" className="text-success">
                    <i className="bx bx-loader bx-spin font-size-18 align-middle me-2" />
                    Load more
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

EcommerceShops.propTypes = {
  shops: PropTypes.array,
  onGetShops: PropTypes.func,
}

const mapStateToProps = ({ ecommerce }) => ({
  shops: ecommerce.shops,
})

const mapDispatchToProps = dispatch => ({
  onGetShops: () => dispatch(getShops()),
})

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceShops)
