import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { isEmpty, size } from "lodash"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import { Link } from "react-router-dom"

import { Button, Card, CardBody, Badge } from "reactstrap"

import {
  getOrders,
  addNewOrder,
  updateOrder,
  deleteOrder
} from "store/actions"

import EcommerceOrdersModal from "../Ecommerce/EcommerceOrders/EcommerceOrdersModal"

class LatestTranaction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewmodal: false,
      modal: false,
      orders: [],
      EcommerceOrderColumns: [
        {
          text: "id",
          dataField: "id",
          sort: true,
          hidden: true,
          formatter: (cellContent, user) => (
            <>
              {order.id}
            </>
          ),
        },
        {
          dataField: "orderId",
          text: "Order ID",
          sort: true,
          formatter: (cellContent, row) => (
            <Link to="#" className="text-body fw-bold">
              {row.orderId}
            </Link>
          ),
        },
        {
          dataField: "billingName",
          text: "Billing Name",
          sort: true,
        },
        {
          dataField: "orderdate",
          text: "Date",
          sort: true
        },
        {
          dataField: "total",
          text: "Total",
          sort: true,
        },
        {
          dataField: "paymentStatus",
          text: "Payment Status",
          sort: true,
          formatter: (cellContent, row) => (
            <Badge
              className={"font-size-12 badge-soft-" + row.badgeclass}
              color={row.badgeclass}
              pill
            >
              {row.paymentStatus}
            </Badge>
          ),
        },
        {
          dataField: "paymentMethod",
          isDummyField: true,
          text: "Payment Method",
          sort: true,
          formatter: (cellContent, row) => (
            <>
              <i className={
                (row.paymentMethod !== 'COD') ?
                  'fab fa-cc-' + this.toLowerCase1(row.paymentMethod) + " me-1"
                  : 'fab fas fa-money-bill-alt me-1'
              } />{" "}
              {row.paymentMethod}
            </>
          ),
        },
        {
          dataField: "view",
          isDummyField: true,
          text: "View Details",
          sort: true,
          formatter: () => (
            <Button
              type="button"
              color="primary"
              className="btn-sm btn-rounded"
              onClick={this.toggleViewModal}
            >
              View Details
            </Button>
          ),
        }
      ]
    }
    this.toggle = this.toggle.bind(this)
    this.toLowerCase1 = this.toLowerCase1.bind(this)
  }

  toLowerCase1(str) {
    return str.toLowerCase();
  }

  componentDidMount() {
    const { orders, onGetOrders } = this.props
    if (orders && !orders.length) {
      onGetOrders()
    }
    this.setState({ orders })
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { orders } = this.props
    if (!isEmpty(orders) && size(prevProps.orders) !== size(orders)) {
      this.setState({ orders: {}, isEdit: false })
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }))
  }


  toggleViewModal = () => {
    this.setState(prevState => ({
      viewmodal: !prevState.viewmodal,
    }))
  }
  render() {
    const { orders } = this.props

    //pagination customization
    const pageOptions = {
      sizePerPage: 6,
      totalSize: orders.length, // replace later with size(Order),
      custom: true,
    }

    const defaultSorted = [{
      dataField: 'orderId',
      order: 'desc'
    }];

    const selectRow = {
      mode: 'checkbox',
    };

    return (
      <React.Fragment>
        <EcommerceOrdersModal
          isOpen={this.state.viewmodal}
          toggle={this.toggleViewModal}
        />
        <Card>
          <CardBody>
            <div className="mb-4 h4 card-title">Latest Transaction</div>
            <PaginationProvider
              pagination={paginationFactory(pageOptions)}
              keyField='id'
              columns={this.state.EcommerceOrderColumns}
              data={orders}
            >
              {({ paginationProps, paginationTableProps }) => (
                <ToolkitProvider
                  keyField="id"
                  data={orders}
                  columns={this.state.EcommerceOrderColumns}
                  bootstrap4
                  search
                >
                  {toolkitProps => (
                    <React.Fragment>
                      <div className="table-responsive">
                        <BootstrapTable
                          {...toolkitProps.baseProps}
                          {...paginationTableProps}
                          responsive
                          defaultSorted={defaultSorted}
                          bordered={false}
                          striped={false}
                          selectRow={selectRow}
                          classes={
                            "table align-middle table-nowrap table-check"
                          }
                          headerWrapperClasses={"table-light"}
                        />
                      </div>
                      <div className="pagination pagination-rounded justify-content-end">
                        <PaginationListStandalone
                          {...paginationProps}
                        />
                      </div>
                    </React.Fragment>
                  )}
                </ToolkitProvider>
              )}
            </PaginationProvider>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

LatestTranaction.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func
}

const mapStateToProps = state => ({
  orders: state.ecommerce.orders,
})

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders()),
  onAddNewOrder: order => dispatch(addNewOrder(order)),
  onUpdateOrder: order => dispatch(updateOrder(order)),
  onDeleteOrder: order => dispatch(deleteOrder(order)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LatestTranaction))