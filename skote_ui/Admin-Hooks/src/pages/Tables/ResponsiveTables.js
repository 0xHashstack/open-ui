import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const ResponsiveTables = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Responsive Table | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Responsive Table" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Example </CardTitle>
                  <CardSubtitle className="mb-3">
                    This is an experimental awesome solution for responsive
                    tables with complex data.
                  </CardSubtitle>

                  <div className="table-rep-plugin">
                    <div
                      className="table-responsive mb-0"
                      data-pattern="priority-columns"
                    >
                      <Table
                        id="tech-companies-1"
                        className="table table-striped table-bordered"
                      >
                        <Thead>
                          <Tr>
                            <Th>Company</Th>
                            <Th data-priority="1">Last Trade</Th>
                            <Th data-priority="3">Trade Time</Th>
                            <Th data-priority="1">Change</Th>
                            <Th data-priority="3">Prev Close</Th>
                            <Th data-priority="3">Open</Th>
                            <Th data-priority="6">Bid</Th>
                            <Th data-priority="6">Ask</Th>
                            <Th data-priority="6">1y Target Est</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th>
                            <Td>597.74</Td>
                            <Td>12:12PM</Td>
                            <Td>14.81 (2.54%)</Td>
                            <Td>582.93</Td>
                            <Td>597.95</Td>
                            <Td>597.73 x 100</Td>
                            <Td>597.91 x 300</Td>
                            <Td>731.10</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AAPL <span className="co-name">Apple Inc.</span>
                            </Th>
                            <Td>378.94</Td>
                            <Td>12:22PM</Td>
                            <Td>5.74 (1.54%)</Td>
                            <Td>373.20</Td>
                            <Td>381.02</Td>
                            <Td>378.92 x 300</Td>
                            <Td>378.99 x 100</Td>
                            <Td>505.94</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AMZN{" "}
                              <span className="co-name">Amazon.com Inc.</span>
                            </Th>
                            <Td>191.55</Td>
                            <Td>12:23PM</Td>
                            <Td>3.16 (1.68%)</Td>
                            <Td>188.39</Td>
                            <Td>194.99</Td>
                            <Td>191.52 x 300</Td>
                            <Td>191.58 x 100</Td>
                            <Td>240.32</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              ORCL{" "}
                              <span className="co-name">
                                Oracle Corporation
                              </span>
                            </Th>
                            <Td>31.15</Td>
                            <Td>12:44PM</Td>
                            <Td>1.41 (4.72%)</Td>
                            <Td>29.74</Td>
                            <Td>30.67</Td>
                            <Td>31.14 x 6500</Td>
                            <Td>31.15 x 3200</Td>
                            <Td>36.11</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              MSFT{" "}
                              <span className="co-name">
                                Microsoft Corporation
                              </span>
                            </Th>
                            <Td>25.50</Td>
                            <Td>12:27PM</Td>
                            <Td>0.66 (2.67%)</Td>
                            <Td>24.84</Td>
                            <Td>25.37</Td>
                            <Td>25.50 x 71100</Td>
                            <Td>25.51 x 17800</Td>
                            <Td>31.50</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              CSCO{" "}
                              <span className="co-name">
                                Cisco Systems, Inc.
                              </span>
                            </Th>
                            <Td>18.65</Td>
                            <Td>12:45PM</Td>
                            <Td>0.97 (5.49%)</Td>
                            <Td>17.68</Td>
                            <Td>18.23</Td>
                            <Td>18.65 x 10300</Td>
                            <Td>18.66 x 24000</Td>
                            <Td>21.12</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              YHOO <span className="co-name">Yahoo! Inc.</span>
                            </Th>
                            <Td>15.81</Td>
                            <Td>12:25PM</Td>
                            <Td>0.11 (0.67%)</Td>
                            <Td>15.70</Td>
                            <Td>15.94</Td>
                            <Td>15.79 x 6100</Td>
                            <Td>15.80 x 17000</Td>
                            <Td>18.16</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th>
                            <Td>597.74</Td>
                            <Td>12:12PM</Td>
                            <Td>14.81 (2.54%)</Td>
                            <Td>582.93</Td>
                            <Td>597.95</Td>
                            <Td>597.73 x 100</Td>
                            <Td>597.91 x 300</Td>
                            <Td>731.10</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AAPL <span className="co-name">Apple Inc.</span>
                            </Th>
                            <Td>378.94</Td>
                            <Td>12:22PM</Td>
                            <Td>5.74 (1.54%)</Td>
                            <Td>373.20</Td>
                            <Td>381.02</Td>
                            <Td>378.92 x 300</Td>
                            <Td>378.99 x 100</Td>
                            <Td>505.94</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AMZN{" "}
                              <span className="co-name">Amazon.com Inc.</span>
                            </Th>
                            <Td>191.55</Td>
                            <Td>12:23PM</Td>
                            <Td>3.16 (1.68%)</Td>
                            <Td>188.39</Td>
                            <Td>194.99</Td>
                            <Td>191.52 x 300</Td>
                            <Td>191.58 x 100</Td>
                            <Td>240.32</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              ORCL{" "}
                              <span className="co-name">
                                Oracle Corporation
                              </span>
                            </Th>
                            <Td>31.15</Td>
                            <Td>12:44PM</Td>
                            <Td>1.41 (4.72%)</Td>
                            <Td>29.74</Td>
                            <Td>30.67</Td>
                            <Td>31.14 x 6500</Td>
                            <Td>31.15 x 3200</Td>
                            <Td>36.11</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              MSFT{" "}
                              <span className="co-name">
                                Microsoft Corporation
                              </span>
                            </Th>
                            <Td>25.50</Td>
                            <Td>12:27PM</Td>
                            <Td>0.66 (2.67%)</Td>
                            <Td>24.84</Td>
                            <Td>25.37</Td>
                            <Td>25.50 x 71100</Td>
                            <Td>25.51 x 17800</Td>
                            <Td>31.50</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              CSCO{" "}
                              <span className="co-name">
                                Cisco Systems, Inc.
                              </span>
                            </Th>
                            <Td>18.65</Td>
                            <Td>12:45PM</Td>
                            <Td>0.97 (5.49%)</Td>
                            <Td>17.68</Td>
                            <Td>18.23</Td>
                            <Td>18.65 x 10300</Td>
                            <Td>18.66 x 24000</Td>
                            <Td>21.12</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              YHOO <span className="co-name">Yahoo! Inc.</span>
                            </Th>
                            <Td>15.81</Td>
                            <Td>12:25PM</Td>
                            <Td>0.11 (0.67%)</Td>
                            <Td>15.70</Td>
                            <Td>15.94</Td>
                            <Td>15.79 x 6100</Td>
                            <Td>15.80 x 17000</Td>
                            <Td>18.16</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th>
                            <Td>597.74</Td>
                            <Td>12:12PM</Td>
                            <Td>14.81 (2.54%)</Td>
                            <Td>582.93</Td>
                            <Td>597.95</Td>
                            <Td>597.73 x 100</Td>
                            <Td>597.91 x 300</Td>
                            <Td>731.10</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AAPL <span className="co-name">Apple Inc.</span>
                            </Th>
                            <Td>378.94</Td>
                            <Td>12:22PM</Td>
                            <Td>5.74 (1.54%)</Td>
                            <Td>373.20</Td>
                            <Td>381.02</Td>
                            <Td>378.92 x 300</Td>
                            <Td>378.99 x 100</Td>
                            <Td>505.94</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AMZN{" "}
                              <span className="co-name">Amazon.com Inc.</span>
                            </Th>
                            <Td>191.55</Td>
                            <Td>12:23PM</Td>
                            <Td>3.16 (1.68%)</Td>
                            <Td>188.39</Td>
                            <Td>194.99</Td>
                            <Td>191.52 x 300</Td>
                            <Td>191.58 x 100</Td>
                            <Td>240.32</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              ORCL{" "}
                              <span className="co-name">
                                Oracle Corporation
                              </span>
                            </Th>
                            <Td>31.15</Td>
                            <Td>12:44PM</Td>
                            <Td>1.41 (4.72%)</Td>
                            <Td>29.74</Td>
                            <Td>30.67</Td>
                            <Td>31.14 x 6500</Td>
                            <Td>31.15 x 3200</Td>
                            <Td>36.11</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              MSFT{" "}
                              <span className="co-name">
                                Microsoft Corporation
                              </span>
                            </Th>
                            <Td>25.50</Td>
                            <Td>12:27PM</Td>
                            <Td>0.66 (2.67%)</Td>
                            <Td>24.84</Td>
                            <Td>25.37</Td>
                            <Td>25.50 x 71100</Td>
                            <Td>25.51 x 17800</Td>
                            <Td>31.50</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              CSCO{" "}
                              <span className="co-name">
                                Cisco Systems, Inc.
                              </span>
                            </Th>
                            <Td>18.65</Td>
                            <Td>12:45PM</Td>
                            <Td>0.97 (5.49%)</Td>
                            <Td>17.68</Td>
                            <Td>18.23</Td>
                            <Td>18.65 x 10300</Td>
                            <Td>18.66 x 24000</Td>
                            <Td>21.12</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              YHOO <span className="co-name">Yahoo! Inc.</span>
                            </Th>
                            <Td>15.81</Td>
                            <Td>12:25PM</Td>
                            <Td>0.11 (0.67%)</Td>
                            <Td>15.70</Td>
                            <Td>15.94</Td>
                            <Td>15.79 x 6100</Td>
                            <Td>15.80 x 17000</Td>
                            <Td>18.16</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th>
                            <Td>597.74</Td>
                            <Td>12:12PM</Td>
                            <Td>14.81 (2.54%)</Td>
                            <Td>582.93</Td>
                            <Td>597.95</Td>
                            <Td>597.73 x 100</Td>
                            <Td>597.91 x 300</Td>
                            <Td>731.10</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AAPL <span className="co-name">Apple Inc.</span>
                            </Th>
                            <Td>378.94</Td>
                            <Td>12:22PM</Td>
                            <Td>5.74 (1.54%)</Td>
                            <Td>373.20</Td>
                            <Td>381.02</Td>
                            <Td>378.92 x 300</Td>
                            <Td>378.99 x 100</Td>
                            <Td>505.94</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AMZN{" "}
                              <span className="co-name">Amazon.com Inc.</span>
                            </Th>
                            <Td>191.55</Td>
                            <Td>12:23PM</Td>
                            <Td>3.16 (1.68%)</Td>
                            <Td>188.39</Td>
                            <Td>194.99</Td>
                            <Td>191.52 x 300</Td>
                            <Td>191.58 x 100</Td>
                            <Td>240.32</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              ORCL{" "}
                              <span className="co-name">
                                Oracle Corporation
                              </span>
                            </Th>
                            <Td>31.15</Td>
                            <Td>12:44PM</Td>
                            <Td>1.41 (4.72%)</Td>
                            <Td>29.74</Td>
                            <Td>30.67</Td>
                            <Td>31.14 x 6500</Td>
                            <Td>31.15 x 3200</Td>
                            <Td>36.11</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              MSFT{" "}
                              <span className="co-name">
                                Microsoft Corporation
                              </span>
                            </Th>
                            <Td>25.50</Td>
                            <Td>12:27PM</Td>
                            <Td>0.66 (2.67%)</Td>
                            <Td>24.84</Td>
                            <Td>25.37</Td>
                            <Td>25.50 x 71100</Td>
                            <Td>25.51 x 17800</Td>
                            <Td>31.50</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              CSCO{" "}
                              <span className="co-name">
                                Cisco Systems, Inc.
                              </span>
                            </Th>
                            <Td>18.65</Td>
                            <Td>12:45PM</Td>
                            <Td>0.97 (5.49%)</Td>
                            <Td>17.68</Td>
                            <Td>18.23</Td>
                            <Td>18.65 x 10300</Td>
                            <Td>18.66 x 24000</Td>
                            <Td>21.12</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              YHOO <span className="co-name">Yahoo! Inc.</span>
                            </Th>
                            <Td>15.81</Td>
                            <Td>12:25PM</Td>
                            <Td>0.11 (0.67%)</Td>
                            <Td>15.70</Td>
                            <Td>15.94</Td>
                            <Td>15.79 x 6100</Td>
                            <Td>15.80 x 17000</Td>
                            <Td>18.16</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              GOOG <span className="co-name">Google Inc.</span>
                            </Th>
                            <Td>597.74</Td>
                            <Td>12:12PM</Td>
                            <Td>14.81 (2.54%)</Td>
                            <Td>582.93</Td>
                            <Td>597.95</Td>
                            <Td>597.73 x 100</Td>
                            <Td>597.91 x 300</Td>
                            <Td>731.10</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AAPL <span className="co-name">Apple Inc.</span>
                            </Th>
                            <Td>378.94</Td>
                            <Td>12:22PM</Td>
                            <Td>5.74 (1.54%)</Td>
                            <Td>373.20</Td>
                            <Td>381.02</Td>
                            <Td>378.92 x 300</Td>
                            <Td>378.99 x 100</Td>
                            <Td>505.94</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              AMZN{" "}
                              <span className="co-name">Amazon.com Inc.</span>
                            </Th>
                            <Td>191.55</Td>
                            <Td>12:23PM</Td>
                            <Td>3.16 (1.68%)</Td>
                            <Td>188.39</Td>
                            <Td>194.99</Td>
                            <Td>191.52 x 300</Td>
                            <Td>191.58 x 100</Td>
                            <Td>240.32</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              ORCL{" "}
                              <span className="co-name">
                                Oracle Corporation
                              </span>
                            </Th>
                            <Td>31.15</Td>
                            <Td>12:44PM</Td>
                            <Td>1.41 (4.72%)</Td>
                            <Td>29.74</Td>
                            <Td>30.67</Td>
                            <Td>31.14 x 6500</Td>
                            <Td>31.15 x 3200</Td>
                            <Td>36.11</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              MSFT{" "}
                              <span className="co-name">
                                Microsoft Corporation
                              </span>
                            </Th>
                            <Td>25.50</Td>
                            <Td>12:27PM</Td>
                            <Td>0.66 (2.67%)</Td>
                            <Td>24.84</Td>
                            <Td>25.37</Td>
                            <Td>25.50 x 71100</Td>
                            <Td>25.51 x 17800</Td>
                            <Td>31.50</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              CSCO{" "}
                              <span className="co-name">
                                Cisco Systems, Inc.
                              </span>
                            </Th>
                            <Td>18.65</Td>
                            <Td>12:45PM</Td>
                            <Td>0.97 (5.49%)</Td>
                            <Td>17.68</Td>
                            <Td>18.23</Td>
                            <Td>18.65 x 10300</Td>
                            <Td>18.66 x 24000</Td>
                            <Td>21.12</Td>
                          </Tr>
                          <Tr>
                            <Th>
                              YHOO <span className="co-name">Yahoo! Inc.</span>
                            </Th>
                            <Td>15.81</Td>
                            <Td>12:25PM</Td>
                            <Td>0.11 (0.67%)</Td>
                            <Td>15.70</Td>
                            <Td>15.94</Td>
                            <Td>15.79 x 6100</Td>
                            <Td>15.80 x 17000</Td>
                            <Td>18.16</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ResponsiveTables
