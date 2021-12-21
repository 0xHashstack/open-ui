import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';

import {
    Row,
    Col,
    Card,
    CardBody,
    Container,
    Button,
    Toast,
    ToastHeader,
    ToastBody,
    Spinner,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//import images
import logo from "../../assets/images/logo.svg";

const UiToast = () => {
    const [toast, setToast] = useState(false);

    const toggleToast = () => {
        setToast(!toast);
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Toast | Skote - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid={true}>
                    <Breadcrumbs title="UI Elements" breadcrumbItem="Toast" />

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Live Example</h5>
                                    <p className="card-title-des">Click the button below to show a toast (positioned with our
                                        utilities in the
                                        lower right corner) that has been hidden by default.</p>

                                    <div className="d-flex flex-wrap gap-2">
                                        <div>
                                            <Button
                                                type="button"
                                                color="primary"
                                                id="liveToastBtn"
                                                onClick={toggleToast}
                                            >
                                                Show live toast</Button>

                                            <div className="position-fixed top-0 end-0 p-3" style={{ zIndex: "1005" }}>
                                                <Toast isOpen={toast}>
                                                    <ToastHeader toggle={toggleToast}>
                                                        <img src={logo} alt="" className="me-2" height="18" />
                                                        Reactstrap
                                                    </ToastHeader>
                                                    <ToastBody>
                                                        Hello, world! This is a toast message.
                                                    </ToastBody>
                                                </Toast>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Basic Toast with Background</h5>
                                    <p className="card-title-des">Push notifications to your visitors with a Toast, a lightweight and easily customizable alert message.</p>
                                    <div>
                                        <div className="p-3 my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a white background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-primary my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a primary background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-secondary my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a secondary background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-success my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a success background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-danger my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a danger background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-warning my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a warning background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Toast Header Icon</h5>
                                    <p className="card-title-des">Push notifications to your visitors with a Toast, a lightweight and easily customizable alert message.</p>
                                    <div>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="primary" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a primary icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="secondary" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a secondary icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="success" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a success icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="danger" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a danger icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="warning" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a warning icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="info" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with an info icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="light" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a light icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="dark" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a dark icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiToast;