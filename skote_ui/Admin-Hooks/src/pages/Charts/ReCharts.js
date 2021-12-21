import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import MetaTags from 'react-meta-tags';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import SimpleLineChart from '../AllCharts/rechart/SimpleLineChart';
import SimpleAreaChart from '../AllCharts/rechart/SimpleAreaChart';
import MixBarChart from '../AllCharts/rechart/MixBarChart';
import VerticalComposedChart from '../AllCharts/rechart/VerticalComposedChart';
import ThreeDimScatterChart from '../AllCharts/rechart/ThreeDimScatterChart';
import SpecifiedDomainRadarChart from '../AllCharts/rechart/SpecifiedDomainRadarChart';
import SimpleRadialBarChart from '../AllCharts/rechart/SimpleRadialBarChart';
import CustomActiveShapePieChart from '../AllCharts/rechart/CustomActiveShapePieChart';

const ReCharts = () => {
    return (
        <React.Fragment>
            <React.Fragment>
                <div className="page-content">
                    <MetaTags>
                        <title>Re Chart | Skote - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <div className="container-fluid">
                        <Breadcrumbs title="Charts" breadcrumbItem="Re Chart" />

                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">SimpleLine Chart</CardTitle>
                                        <SimpleLineChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">SimpleArea Chart</CardTitle>
                                        <SimpleAreaChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">SimpleLine Chart</CardTitle>
                                        <MixBarChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">SimpleArea Chart</CardTitle>
                                        <VerticalComposedChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">ThreeDimScatter Chart</CardTitle>
                                        <ThreeDimScatterChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">SpecifiedDomain Radar Chart</CardTitle>
                                        <SpecifiedDomainRadarChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">SimpleRadialBar Chart</CardTitle>
                                        <SimpleRadialBarChart />
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={6}>
                                <Card>
                                    <CardBody>
                                        <CardTitle className="mb-4">CustomActiveShapePie Chart</CardTitle>
                                        <CustomActiveShapePieChart />
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </React.Fragment>
        </React.Fragment>
    );
}

export default ReCharts;