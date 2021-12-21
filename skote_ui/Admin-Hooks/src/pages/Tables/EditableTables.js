import React from "react"
import MetaTags from 'react-meta-tags';

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
// Editable
import BootstrapTable from "react-bootstrap-table-next"
import cellEditFactory from "react-bootstrap-table2-editor"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const products = [
  { id: 1, age: 25, qty: 1500, cost: 1000 },
  { id: 2, age: 34, qty: 1900, cost: 1300 },
  { id: 3, age: 67, qty: 1300, cost: 1300 },
  { id: 4, age: 23, qty: 1100, cost: 6400 },
  { id: 5, age: 78, qty: 1400, cost: 4000 },
]

const columns = [
  {
    dataField: "id",
    text: "ID",
  },
  {
    dataField: "age",
    text: "Age(AutoFill)",
  },
  {
    dataField: "qty",
    text: "Qty(AutoFill and Editable)",
  },
  {
    dataField: "cost",
    text: "Cost(Editable)",
  },
]

const EditableTables = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Editable Table | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Tables" breadcrumbItem="Editable Table" />

          <Row>
            <Col>
              <Card>
                <CardBody>
                  <CardTitle>Datatable Editable </CardTitle>

                  <div className="table-responsive">
                    <BootstrapTable
                      keyField="id"
                      data={products}
                      columns={columns}
                      cellEdit={cellEditFactory({ mode: "click" })}
                    />
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

export default EditableTables
