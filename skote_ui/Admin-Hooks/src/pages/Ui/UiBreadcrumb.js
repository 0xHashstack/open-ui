import React from 'react';
import MetaTags from 'react-meta-tags';

import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Container,
    Row,
} from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

function UiBreadcrumb(props) {
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Breadcrumb | Skote - React Admin & Dashboard Template</title>
                </MetaTags>
                <Container fluid={true}>
                    <Breadcrumbs title="UI Elements" breadcrumbItem="Breadcrumb" />
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4 mb-3">
                                        Breadcrumb Style 1
                                    </CardTitle>
                                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                                        <h4 className="mb-sm-0 font-size-18">Dashboard</h4>
                                        <div className="page-title-right">
                                            <ol className="breadcrumb m-0">
                                                <li className="breadcrumb-item"><Link to="#">Dashboards</Link></li>
                                                <li className="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4 mb-3">Breadcrumb Style 2</CardTitle>
                                    <div className="page-title-box d-block align-items-center justify-content-between">
                                        <h4 className="mb-1 font-size-18">Dashboard</h4>
                                        <div className="page-title-right">
                                            <nav className="">
                                                <ol className="breadcrumb m-0">
                                                    <li className="breadcrumb-item"><Link to="/#">Dashboards</Link></li>
                                                    <li className="active breadcrumb-item" aria-current="page"><a href="/#">Dashboard</a></li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4 mb-3">Breadcrumb Style 3</CardTitle>
                                    <div className="page-title-box d-block align-items-center justify-content-between">
                                        <h4 className="mb-1 font-size-18 text-center">Dashboard</h4>
                                        <div className="page-title-right">
                                            <nav className="">
                                                <ol className="breadcrumb m-0 justify-content-center">
                                                    <li className="breadcrumb-item"><Link to="/#">Dashboards</Link></li>
                                                    <li className="active breadcrumb-item" aria-current="page"><a href="/#">Dashboard</a></li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </React.Fragment>
    );
}

export default UiBreadcrumb;