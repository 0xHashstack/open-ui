import React from "react";
import { Col, Card, CardBody } from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

//Import Images
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";

const Notifications = () => {
  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Notifications</h4>
            <SimpleBar style={{ maxHeight: "390px" }}>
              <ul className="list-group">
                <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={img1} alt="" height="18" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">Donec vitae sapien ut</h5>
                      <p className="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          <i className="mdi mdi-account me-1" /> Joseph
                        </p>
                      </div>
                      <p className="text-muted mb-0">12 Mar, 2020</p>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={img2} alt="" height="18" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">
                        Cras ultricies mi eu turpis
                      </h5>
                      <p className="text-muted">
                        To an English person, it will seem like simplified
                        English, as a skeptical cambridge
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          <i className="mdi mdi-account me-1" /> Jerry
                        </p>
                      </div>
                      <p className="text-muted mb-0">13 Mar, 2020</p>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={img3} alt="" height="18" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">
                        Duis arcu tortor suscipit
                      </h5>
                      <p className="text-muted">
                        It va esser tam simplic quam occidental in fact, it va
                        esser occidental.
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          <i className="mdi mdi-account me-1" /> Calvin
                        </p>
                      </div>
                      <p className="text-muted mb-0">14 Mar, 2020</p>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="avatar-xs me-3">
                      <span className="avatar-title rounded-circle bg-light">
                        <img src={img1} alt="" height="18" />
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">Donec vitae sapien ut</h5>
                      <p className="text-muted">
                        If several languages coalesce, the grammar of the
                        resulting language
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          <i className="mdi mdi-account me-1" /> Joseph
                        </p>
                      </div>
                      <p className="text-muted mb-0">12 Mar, 2020</p>
                    </div>
                  </div>
                </li>
              </ul>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Notifications;
