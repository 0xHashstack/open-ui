import React, { useState } from "react";
import {
  Col,
  Card,
  CardBody,
  InputGroup,
  Button,
  Label,
  Input,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";

const BuySell = () => {
  // Declare a new state variable, which we'll call "menu"
  const [activeTab, setactiveTab] = useState("1");

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Buy / Sell</h4>

            <Nav pills className="bg-light rounded" role="tablist">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    setactiveTab("1");
                  }}
                >
                  Buy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    setactiveTab("2");
                  }}
                >
                  Sell
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent
              activeTab={activeTab}
              className="mt-4"
              style={{ minHeight: "340px" }}
            >
              <TabPane tabId="1">
                <div className="float-end ms-2">
                  <h5 className="font-size-14">
                    <i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
                    $4235.23
                  </h5>
                </div>
                <h5 className="font-size-14 mb-4">Buy Coin</h5>

                <div>
                  <FormGroup className="mb-3">
                    <Label>Payment method :</Label>
                    <select className="form-select">
                      <option>Credit / Debit Card</option>
                      <option>Paypal</option>
                    </select>
                  </FormGroup>

                  <div>
                    <Label>Add Amount :</Label>
                    <InputGroup className="mb-3">

                      <Label className="input-group-text">Amount</Label>
                      <select
                        defaultValue="1"
                        className="form-select"
                        style={{ maxWidth: "90px" }}
                      >
                        <option value="1" >
                          BTC
                        </option>
                        <option value="2">ETH</option>
                        <option value="3">LTC</option>
                      </select>
                      <Input type="text" className="form-control" />
                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Label className="input-group-text">Price</Label>
                      <Input type="text" className="form-control" />
                      <div className="input-group-append">
                        <Label className="input-group-text">$</Label>
                      </div>
                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Label className="input-group-text">Total</Label>
                      <Input type="text" className="form-control" />
                    </InputGroup>
                  </div>

                  <div className="text-center">
                    <Button type="button" color="success" className="w-md">
                      Buy Coin
                    </Button>
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="float-end ms-2">
                  <h5 className="font-size-14">
                    <i className="bx bx-wallet text-primary font-size-16 align-middle me-1"></i>{" "}
                    $4235.23
                  </h5>
                </div>
                <h5 className="font-size-14 mb-4">Sell Coin</h5>

                <div>
                  <FormGroup className="mb-3">
                    <Label>Email :</Label>
                    <Input type="email" className="form-control" />
                  </FormGroup>

                  <div>
                    <Label>Add Amount :</Label>
                    <InputGroup className="mb-3">
                      <Label className="input-group-text">Amount</Label>
                      <select
                        defaultValue="1"
                        className="form-select"
                        style={{ maxWidth: "90px" }}
                      >
                        <option value="1">
                          BTC
                        </option>
                        <option value="2">ETH</option>
                        <option value="3">LTC</option>
                      </select>
                      <Input type="text" className="form-control" />
                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Label className="input-group-text">Price</Label>
                      <Input type="text" className="form-control" />
                      <div className="input-group-append">
                        <Label className="input-group-text">$</Label>
                      </div>
                    </InputGroup>

                    <InputGroup className="mb-3">

                      <Label className="input-group-text">Total</Label>
                      <Input type="text" className="form-control" />
                    </InputGroup>
                  </div>

                  <div className="text-center">
                    <Button type="button" color="danger" className="w-md">
                      Sell Coin
                    </Button>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default BuySell;
