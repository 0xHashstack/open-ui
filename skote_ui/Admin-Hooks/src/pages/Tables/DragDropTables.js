import React, { useState } from 'react';
import MetaTags from 'react-meta-tags';
import ReactDragListView from 'react-drag-listview/lib/index.js';
import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const DragDropTables = () => {
    const tabledata = [
        {
            id: "1",
            firstname: "Mark",
            lastname: "Otto",
            username: "@mdo"
        },
        {
            id: "2",
            firstname: "Jacob",
            lastname: "Thornton",
            username: "@1fat"
        },
        {
            id: "3",
            firstname: "Larry",
            lastname: "the Bird",
            username: "@twitter"
        },
    ]

    const tabledata1 = [
        {
            id: "11",
            firstname: "Mark",
            lastname: "Otto",
            username: "@mdo"
        },
        {
            id: "12",
            firstname: "Jacob",
            lastname: "Thornton",
            username: "@1fat"
        },
        {
            id: "13",
            firstname: "Larry",
            lastname: "the Bird",
            username: "@twitter"
        },
    ]


    const [data, SetData] = useState(tabledata);
    const dragProps = {
        onDragEnd(fromIndex, toIndex) {
            const modifiedData = [...data];

            const item = modifiedData.splice(fromIndex, 1)[0];
            modifiedData.splice(toIndex, 0, item);
            SetData(modifiedData);
        },
        nodeSelector: 'tr',
        handleSelector: 'tr'
    };

    const [data1, SetData1] = useState(tabledata1);
    const dragProps1 = {
        onDragEnd(fromIndex, toIndex) {
            const modifiedData = [...data1];

            const item = modifiedData.splice(fromIndex, 1)[0];
            modifiedData.splice(toIndex, 0, item);
            SetData1(modifiedData);
        },
        nodeSelector: 'tr',
        handleSelector: 'tr'
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <MetaTags>
                    <title>Drag & Drop Tables | Skote - React Admin & Dashboard Template</title>
                </MetaTags>
                <div className="container-fluid">
                    <Breadcrumbs title="Tables" breadcrumbItem="Drag & Drop Tables" />


                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Drag & Drop Light Row</CardTitle>
                                    <p className="card-title-desc">
                                        For basic styling—light padding and only horizontal
                                        dividers—add the base className <code>.table</code> to any
                                        <code>&lt;table&gt;</code>.
                                    </p>

                                    <div className="table-responsive">
                                        <ReactDragListView {...dragProps}>
                                            <Table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(data || []).map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row" className="drag-pointer">{item.id}</th>
                                                            <td>{item.firstname}</td>
                                                            <td>{item.lastname}</td>
                                                            <td>{item.username}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </ReactDragListView>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h4">Drag & Drop Dark table</CardTitle>
                                    <p className="card-title-desc">
                                        You can also invert the colors—with light text on dark
                                        backgrounds—with <code>.table-dark</code>.
                                    </p>

                                    <div className="table-responsive">
                                        <ReactDragListView {...dragProps1}>
                                            <Table className="table table-dark mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Username</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(data1 || []).map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row" className="drag-pointer">{item.id}</th>
                                                            <td>{item.firstname}</td>
                                                            <td>{item.lastname}</td>
                                                            <td>{item.username}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </ReactDragListView>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DragDropTables;