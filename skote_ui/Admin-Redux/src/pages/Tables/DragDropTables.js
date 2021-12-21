import React, { Component } from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle, Table } from "reactstrap"
import ReactDragListView from 'react-drag-listview/lib/index.js';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

class DragDropTables extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      data: [
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
          username: "@fat"
        },
        {
          id: "3",
          firstname: "Larry",
          lastname: "the Bird",
          username: "@twitter"
        },
      ],

      data1: [
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
          username: "@fat"
        },
        {
          id: "3",
          firstname: "Larry",
          lastname: "the Bird",
          username: "@twitter"
        },
      ],
     
    }
  };
  render() {
    const that = this;
    const dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const data = [...that.state.data];
        const item = data.splice(fromIndex, 1)[0];
        data.splice(toIndex, 0, item);
        that.setState({ data });
      },
      nodeSelector: 'tr',
      handleSelector: 'tr'
    };

    const dragProps1 = {
      onDragEnd(fromIndex1, toIndex1) {
        const data1 = [...that.state.data1];
        const item = data1.splice(fromIndex1, 1)[0];
        data1.splice(toIndex1, 0, item);
        that.setState({ data1 });
      },
      nodeSelector: 'tr',
      handleSelector: 'tr'
    };

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Drag & Drop Table | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <div className="container-fluid">
            <Breadcrumbs title="Tables" breadcrumbItem="Drag & Drop Table" />

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
                            {this.state.data.map((item, index) => (
                              <tr key={index}>
                                <th scope="row">{item.id}</th>
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

              <Col lg={12}>
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
                            {this.state.data1.map((item, index) => (
                              <tr key={index + "black"}>
                                <th scope="row">{item.id}</th>
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
    )
  }
}

export default DragDropTables