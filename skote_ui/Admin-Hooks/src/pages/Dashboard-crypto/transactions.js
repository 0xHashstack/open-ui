import React, { useState } from "react"
import {
  Col,
  Card,
  Nav,
  CardBody,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Table,
} from "reactstrap"
import classnames from "classnames"

//Simple bar
import SimpleBar from "simplebar-react"

const Transactions = () => {
  const [activeTab, setactiveTab] = useState("1")

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Transactions</h4>

            <Nav pills className="bg-light rounded" role="tablist">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    setactiveTab("1")
                  }}
                >
                  All
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    setactiveTab("2")
                  }}
                >
                  Buy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    setactiveTab("3")
                  }}
                >
                  Sell
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="mt-4">
              <TabPane tabId="1">
                <SimpleBar style={{ maxHeight: "330px" }}>
                  <div className="table-responsive">
                    <Table className="table align-middle table-nowrap">
                      <tbody>
                        <tr>
                          <td style={{ width: "50px" }}>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy BTC</h5>
                              <p className="text-muted mb-0">14 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $125.20
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-danger">
                              <i className="bx bx-up-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Sell ETH</h5>
                              <p className="text-muted mb-0">15 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $112.34
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy LTC</h5>
                              <p className="text-muted mb-0">16 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">1.88 LTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $94.22
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy ETH</h5>
                              <p className="text-muted mb-0">17 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.42 ETH</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $84.32
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-danger">
                              <i className="bx bx-up-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Sell BTC</h5>
                              <p className="text-muted mb-0">18 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.018 BTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $145.80
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style={{ width: "50px" }}>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy BTC</h5>
                              <p className="text-muted mb-0">14 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $125.20
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-danger">
                              <i className="bx bx-up-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Sell ETH</h5>
                              <p className="text-muted mb-0">15 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $112.34
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </SimpleBar>
              </TabPane>
              <TabPane tabId="2">
                <SimpleBar style={{ maxHeight: "330px" }}>
                  <div className="table-responsive">
                    <Table className="table align-middle table-nowrap">
                      <tbody>

                        <tr>
                          <td style={{ width: "50px" }}>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy BTC</h5>
                              <p className="text-muted mb-0">14 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $125.20
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy ETH</h5>
                              <p className="text-muted mb-0">17 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.42 ETH</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $84.32
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy LTC</h5>
                              <p className="text-muted mb-0">16 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">1.88 LTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $94.22
                              </h5>
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style={{ width: "50px" }}>
                            <div className="font-size-22 text-primary">
                              <i className="bx bx-down-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Buy BTC</h5>
                              <p className="text-muted mb-0">14 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.016 BTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $125.20
                              </h5>
                            </div>
                          </td>
                        </tr>
                      
                      </tbody>
                    </Table>
                  </div>
                </SimpleBar>
              </TabPane>

              <TabPane tabId="3">
                <SimpleBar style={{ maxHeight: "330px" }}>
                  <div className="table-responsive">
                    <Table className="table align-middle table-nowrap">
                      <tbody>
                       
                        <tr>
                          <td>
                            <div className="font-size-22 text-danger">
                              <i className="bx bx-up-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Sell ETH</h5>
                              <p className="text-muted mb-0">15 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $112.34
                              </h5>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-size-22 text-danger">
                              <i className="bx bx-up-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Sell BTC</h5>
                              <p className="text-muted mb-0">18 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.018 BTC</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $145.80
                              </h5>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="font-size-22 text-danger">
                              <i className="bx bx-up-arrow-circle"/>
                            </div>
                          </td>

                          <td>
                            <div>
                              <h5 className="font-size-14 mb-1">Sell ETH</h5>
                              <p className="text-muted mb-0">15 Mar, 2020</p>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 mb-0">0.56 ETH</h5>
                            </div>
                          </td>

                          <td>
                            <div className="text-end">
                              <h5 className="font-size-14 text-muted mb-0">
                                $112.34
                              </h5>
                            </div>
                          </td>
                        </tr>

                      </tbody>
                    </Table>
                  </div>
                </SimpleBar>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default Transactions
