import React, { useState, useEffect } from "react";
import { Row, Col, Collapse, Modal, Button, Form } from "reactstrap";

const Navbar = props => {
  const [get_token, setGet_token] = useState(false);

  function removeBodyCss() {
    document.body.classList.add("no_padding");
  }

  function tog_token() {
    setGet_token(!get_token);
    removeBodyCss();
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={false}
              className="navbar-collapse"
              id="topnav-menu-content"
              style={{ height: "48px", justifyContent: "end" }}
            >
              <div className="d-flex gap-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ float: "right" }}
                  onClick={() => {
                    tog_token();
                  }}
                >
                  Get Tokens
                </button>
                <Modal
                  isOpen={get_token}
                  toggle={() => {
                    tog_token();
                  }}
                  centered
                >
                  <div className="modal-body">
                    <Form>
                      <h5 style={{ textAlign: "center" }}>Get Token</h5>
                      <hr />
                      <div className="row mb-4">
                        <Col sm={6}>
                          <Button
                            type="submit"
                            className="btn-block btn-lg"
                            color="light"
                            outline
                          >
                            Bitcoin
                          </Button>
                        </Col>
                        <Col sm={6}>
                          <Button
                            type="submit"
                            className="btn-block btn-lg"
                            color="light"
                            outline
                          >
                            Binance
                          </Button>
                        </Col>
                      </div>
                      <div className="row mb-4">
                        <Col sm={6}>
                          <Button
                            type="submit"
                            color="light"
                            className="btn-block btn-lg"
                            outline
                          >
                            USDC
                          </Button>
                        </Col>
                        <Col sm={6}>
                          <Button
                            type="submit"
                            color="light"
                            className="btn-block btn-lg"
                            outline
                          >
                            USDT
                          </Button>
                        </Col>
                      </div>
                    </Form>
                  </div>
                </Modal>
              </div>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
