import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Button,
  Form,
  Input,
  Table,
  Modal,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Label,
  InputGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import classnames from "classnames";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const HashstackCrypto = props => {
  const [assets] = useState([
    {
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: "BTC",
      investRate: "1.2601",
      investPrice: "6225.74",
      price: "7525.47",
      loansRate: "0.1512",
      loansPrice: "742.32",
      totalRate: "4.2562",
      totalPrice: "6425.42",
    },
    {
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: "ETH",
      investRate: "0.0814",
      investPrice: "3256.29",
      price: "4235.78",
      loansRate: "0.0253",
      loansPrice: "675.04",
      totalRate: "0.0921",
      totalPrice: "4536.24",
    },
    {
      icon: "mdi mdi-litecoin",
      color: "info",
      title: "LTC",
      investRate: "0.0682",
      investPrice: "2936.14",
      price: "3726.06",
      loansRate: "0.0234",
      loansPrice: "523.17",
      totalRate: "0.0823",
      totalPrice: "3254.23",
    },
    {
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: "BTC",
      investRate: "1.2601",
      investPrice: "6225.74",
      price: "7525.47",
      loansRate: "0.1512",
      loansPrice: "742.32",
      totalRate: "4.2562",
      totalPrice: "6425.42",
    },
    {
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: "ETH",
      investRate: "0.0814",
      investPrice: "3256.29",
      price: "4235.78",
      loansRate: "0.0253",
      loansPrice: "675.04",
      totalRate: "0.0921",
      totalPrice: "4536.24",
    },
  ]);

  const [isMenu, setIsMenu] = useState(false);
  const [customActiveTab, setcustomActiveTab] = useState("1");
  const [modal_center, setmodal_center] = useState(false);
  const [modal_borrow, setmodal_borrow] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };
  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }
  function tog_center() {
    setmodal_center(!modal_center);
    removeBodyCss();
  }
  function tog_borrow() {
    setmodal_borrow(!modal_borrow);
    removeBodyCss();
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Hashstack Finance | Lending</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Crypto" breadcrumbItem="Lending" />

          <Row>
            <Col xl="4">
              <Card>
                {customActiveTab == 2 ?
                  <CardBody>
                    <form>
                      <div className="mb-4 me-3">
                        <h4 className="card-title mb-4">Repay</h4>
                      </div>

                      <div className="mb-4">
                        <Label>Currency :</Label>

                        <Row>
                          <Col sm="4">
                            <div className="mb-3">
                              <label className="card-radio-label mb-2">
                                <input
                                  type="radio"
                                  name="currency"
                                  id="buycurrencyoption1"
                                  className="card-radio-input"
                                  defaultChecked
                                  readOnly
                                />

                                <div className="card-radio">
                                  <div>
                                    <i className="mdi mdi-bitcoin font-size-24 text-warning align-middle me-2" />
                                    <span>BTC</span>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </Col>

                          <Col sm="4">
                            <div className="mb-3">
                              <Label className="card-radio-label mb-2">
                                <Input
                                  type="radio"
                                  name="currency"
                                  id="buycurrencyoption2"
                                  className="card-radio-input"
                                />

                                <div className="card-radio">
                                  <div>
                                    <i className="mdi mdi-ethereum font-size-24 text-primary align-middle me-2" />
                                    <span>ETH</span>
                                  </div>
                                </div>
                              </Label>
                            </div>
                          </Col>

                          <Col sm="4">
                            <div className="mb-3">
                              <Label className="card-radio-label mb-2">
                                <Input
                                  type="radio"
                                  name="currency"
                                  id="buycurrencyoption3"
                                  className="card-radio-input"
                                />

                                <div className="card-radio">
                                  <div>
                                    <i className="mdi mdi-litecoin font-size-24 text-info align-middle me-2" />
                                    <span>LTC</span>
                                  </div>
                                </div>
                              </Label>
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="mb-4">
                        <Label>Payment method :</Label>
                        <Row>
                          <Col sm="4">
                            <Label className="card-radio-label mb-3">
                              <Input
                                type="radio"
                                name="pay-method"
                                id="pay-methodoption1"
                                className="card-radio-input"
                              />

                              <div className="card-radio">
                                <i className="fab fa-cc-mastercard font-size-24 text-primary align-middle me-2" />

                                <span>Credit / Debit Card</span>
                              </div>
                            </Label>
                          </Col>

                          <Col sm="4">
                            <Label className="card-radio-label mb-3">
                              <Input
                                type="radio"
                                name="pay-method"
                                id="pay-methodoption2"
                                className="card-radio-input"
                              />

                              <div className="card-radio">
                                <i className="fas fa-money-check font-size-24 text-primary align-middle me-2" />

                                <span>UPI</span>
                              </div>
                            </Label>
                          </Col>

                          <Col sm="4">
                            <Label className="card-radio-label mb-3">
                              <Input
                                type="radio"
                                name="pay-method"
                                id="pay-methodoption3"
                                className="card-radio-input"
                                defaultChecked
                                readOnly
                              />

                              <div className="card-radio">
                                <i className="fab fa-cc-paypal font-size-24 text-primary align-middle me-2" />

                                <span>Paypal</span>
                              </div>
                            </Label>
                          </Col>
                        </Row>
                      </div>
                    </form>
                  </CardBody>
                  :
                  <CardBody>
                    <Dropdown
                      isOpen={isMenu}
                      toggle={toggleMenu}
                      className="float-end ms-2"
                    >
                      <DropdownToggle tag="a" className="text-muted">
                        <i className="mdi mdi-dots-horizontal font-size-18" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Another action</DropdownItem>
                        <DropdownItem href="#">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>

                    <div className="mb-4 me-3">
                      <h4 className="card-title mb-4">How Deposits work</h4>
                    </div>

                    <div>
                      <ul className="verti-timeline list-unstyled">
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="bx bx-user-plus h2 text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-14">Register account</h5>
                                <p className="text-muted">
                                  New common language will be more simple and
                                  regular than the existing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="bx bx-copy-alt h2 text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-14">Select Deposit</h5>
                                <p className="text-muted">
                                  To achieve this, it would be necessary to have
                                  uniform grammar.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <i className="bx bx-cloud-download h2 text-primary" />
                            </div>
                            <div className="flex-grow-1">
                              <div>
                                <h5 className="font-size-14">Get Earnings</h5>
                                <p className="text-muted">
                                  New common language will be more simple and
                                  regular than the existing.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </CardBody>}

              </Card>
            </Col>

            <Col xl="8">
              <Card>
                <CardBody>
                  <Nav tabs className="nav-tabs-custom">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "1",
                        })}
                        onClick={() => {
                          toggleCustom("1");
                        }}
                      >
                        <span className="d-none d-sm-block">Dashboard</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: customActiveTab === "2",
                        })}
                        onClick={() => {
                          toggleCustom("2");
                        }}
                      >
                        <span className="d-none d-sm-block">Passbook</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent
                    activeTab={customActiveTab}
                    className="p-1"
                  >
                    <TabPane tabId="1">
                      <div className="table-responsive">
                        <Table className="table table-nowrap align-middle mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Markets<br /><br /></th>
                              <th scope="col">Savings interest
                                <br />
                                <select className="form-control form-control-sm">
                                  <option>One Week</option>
                                  <option>Two weeks</option>
                                  <option>Four weeks</option>
                                  <option>Twelve weeks</option>
                                </select>
                              </th>
                              <th scope="col">Borrow interest
                                <br />
                                <select className="form-control form-control-sm">
                                  <option>One Month</option>
                                  <option>Two Months</option>
                                </select>
                              </th>
                              <th scope="col">D2D<br /><br /></th>
                              <th scope="col">
                                Deposit
                                <br /><br />
                              </th>
                              <th scope="col" colSpan="2">
                                Borrow
                                <br /><br />
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {assets.map((asset, key) => (
                              <tr key={key}>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span
                                        className={
                                          "avatar-title rounded-circle bg-soft bg-" +
                                          asset.color +
                                          " text-" +
                                          asset.color +
                                          " font-size-18"
                                        }
                                      >
                                        <i className={asset.icon} />
                                      </span>
                                    </div>
                                    <span>{asset.title}</span>
                                  </div>
                                </th>
                                <td>
                                  <div className="text-muted">$ {asset.price}</div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.investRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.investPrice}
                                  </div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.loansRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.loansPrice}
                                  </div>
                                </td>
                                <td style={{ width: "120px" }}>
                                  <button
                                    type="button"
                                    className="btn btn-dark btn-sm w-xs"
                                    onClick={() => {
                                      tog_center();
                                    }}
                                  >
                                    Deposit
                                  </button>
                                  <Modal
                                    isOpen={modal_center}
                                    toggle={() => {
                                      tog_center();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="horizontal-firstname-Input"
                                              placeholder="Market"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="number"
                                              className="form-control"
                                              id="horizontal-email-Input"
                                              placeholder="Amount"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="horizontal-password-Input"
                                              placeholder="Commitment"
                                            />
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <p>fixed APY <strong>15%</strong></p>
                                          </Col>
                                        </div>

                                        <div className="d-grid gap-2">
                                          <Button
                                            type="submit"
                                            color="primary"
                                            className="w-md"
                                          >
                                            Deposit
                                          </Button>
                                        </div>
                                      </Form>
                                    </div>
                                  </Modal>
                                </td>
                                <td style={{ width: "120px" }}>
                                  <button
                                    type="button"
                                    className="btn btn-secondary btn-sm w-xs"
                                    onClick={() => {
                                      tog_borrow();
                                    }}
                                  >
                                    Borrow
                                  </button>
                                  <Modal
                                    isOpen={modal_borrow}
                                    toggle={() => {
                                      tog_borrow();
                                    }}
                                    centered
                                  >
                                    <div className="modal-body">
                                      <Form>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-control" placeholder="Loan market">
                                              <option>Loan market</option>
                                              <option>BTC</option>
                                              <option>USDC</option>
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <select className="form-control" placeholder="Loan market">
                                              <option>Collateral market</option>
                                              <option>BTC</option>
                                              <option>USDT</option>
                                            </select>
                                          </Col>
                                        </div>
                                        <div className="row mb-4">
                                          <Col sm={12}>
                                            <Input
                                              type="text"
                                              className="form-control"
                                              id="horizontal-password-Input"
                                              placeholder="Amount"
                                            />
                                          </Col>
                                        </div>

                                        <div className="d-grid gap-2">
                                          <Button
                                            type="submit"
                                            color="primary"
                                            className="w-md"
                                          >
                                            Repay
                                          </Button>
                                        </div>
                                      </Form>
                                    </div>
                                  </Modal>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="row justify-content-end">
                        <Col sm={3}>
                          <select className="form-control form-control-sm">
                            <option>Active loans</option>
                            <option>Active deposits</option>
                            <option>Inactive loans</option>
                            <option>Inactive deposits</option>
                          </select>
                        </Col>
                      </div>
                      <div className="table-responsive">
                        <Table className="table table-nowrap align-middle mb-0">
                          <thead>
                            <tr>
                              <th scope="col">Loan Market</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Collateral Market</th>
                              <th scope="col">Amount</th>
                              <th scope="col" colSpan="2">Interest</th>
                            </tr>
                          </thead>
                          <tbody>
                            {assets.map((asset, key) => (
                              <tr key={key}>
                                <th scope="row">
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span
                                        className={
                                          "avatar-title rounded-circle bg-soft bg-" +
                                          asset.color +
                                          " text-" +
                                          asset.color +
                                          " font-size-18"
                                        }
                                      >
                                        <i className={asset.icon} />
                                      </span>
                                    </div>
                                    <span>{asset.title}</span>
                                  </div>
                                </th>
                                <td>
                                  <div className="text-muted">$ {asset.price}</div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="avatar-xs me-3">
                                      <span
                                        className={
                                          "avatar-title rounded-circle bg-soft bg-" +
                                          asset.color +
                                          " text-" +
                                          asset.color +
                                          " font-size-18"
                                        }
                                      >
                                        <i className={asset.icon} />
                                      </span>
                                    </div>
                                    <span>{asset.title}</span>
                                  </div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.investRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.investPrice}
                                  </div>
                                </td>
                                <td>
                                  <h5 className="font-size-14 mb-1">
                                    {asset.loansRate}
                                  </h5>
                                  <div className="text-muted">
                                    ${asset.loansPrice}
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default HashstackCrypto;
