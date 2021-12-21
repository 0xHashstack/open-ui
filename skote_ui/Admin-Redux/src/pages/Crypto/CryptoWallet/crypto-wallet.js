import React, { Component } from "react"
import PropTypes from "prop-types"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux"
import { isEmpty } from "lodash"
import { Container, Row, Col, Card, CardBody } from "reactstrap"
import { withRouter } from "react-router-dom"
import "assets/scss/datatables.scss"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import { getWallet } from "store/actions"
import WalletActivities from "./walletActivities"
import WalletStats from "./walletStats"
import WalletOverView from "./walletOverView"

class CryptoWallet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenu: false,
      activeTab: "1",
    }
    this.toggleTab = this.toggleTab.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  componentDidMount() {
    const { onGetWallet } = this.props
    onGetWallet()
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenu: !prevState.isMenu,
    }))
  }

  render() {
    const {
      wallet,
      wallet: { walletHistory },
    } = this.props
    const { activeTab, isMenu } = this.state

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Wallet | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs title="Crypto" breadcrumbItem="Wallet" />
            {!isEmpty(wallet) && (
              <Row>
                <Col xl="4">
                  <WalletStats
                    wallet={wallet}
                    isMenu={isMenu}
                    toggleMenu={this.toggleMenu}
                  />
                </Col>
                <Col xl="8">
                  <Row>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-bitcoin h2 text-warning mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">Bitcoin Wallet</p>
                              <h5 className="mb-0">
                                1.02356 BTC{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 9148.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-ethereum h2 text-primary mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">Ethereum Wallet</p>
                              <h5 className="mb-0">
                                0.04121 ETH{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 8235.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col sm="4">
                      <Card className="mini-stats-wid">
                        <CardBody>
                          <div className="d-flex">
                            <div className="me-3 align-self-center">
                              <i className="mdi mdi-litecoin h2 text-info mb-0" />
                            </div>
                            <div className="flex-grow-1">
                              <p className="text-muted mb-2">litecoin Wallet</p>
                              <h5 className="mb-0">
                                0.00356 BTC{" "}
                                <span className="font-size-14 text-muted">
                                  = $ 4721.00
                                </span>
                              </h5>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>

                  <WalletOverView wallet={wallet} />
                </Col>
              </Row>
            )}
            <Row>
              <Col lg="12">
                {!isEmpty(walletHistory) && (
                  <WalletActivities
                    walletHistory={walletHistory}
                    activeTab={activeTab}
                    toggleTab={this.toggleTab}
                  />
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

CryptoWallet.propTypes = {
  wallet: PropTypes.any,
  onGetWallet: PropTypes.func,
}

const mapStateToProps = ({ crypto }) => ({
  wallet: crypto.wallet,
})

const mapDispatchToProps = dispatch => ({
  onGetWallet: () => dispatch(getWallet()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoWallet))