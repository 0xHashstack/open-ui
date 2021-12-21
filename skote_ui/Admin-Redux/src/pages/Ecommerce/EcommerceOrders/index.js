import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MetaTags from "react-meta-tags";
import { withRouter } from "react-router-dom";
import { isEmpty, size } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Link } from "react-router-dom";
import * as moment from "moment";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  Badge,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import {
  getOrders,
  addNewOrder,
  updateOrder,
  deleteOrder,
} from "store/actions";

import EcommerceOrdersModal from "./EcommerceOrdersModal";
import DeleteModal from "../../../components/Common/DeleteModal";

class EcommerceOrders extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.state = {
      viewmodal: false,
      modal: false,
      orders: [],
      order: "",
      deleteModal: false,
      EcommerceOrderColumns: [
        {
          text: "id",
          dataField: "id",
          sort: true,
          hidden: true,
          formatter: (cellContent, user) => <>{order.id}</>,
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
          sort: true,
          formatter: (cellContent, row) => this.handleValidDate(row.orderdate),
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
              <i
                className={
                  row.paymentMethod !== "COD"
                    ? "fab fa-cc-" +
                    this.toLowerCase1(row.paymentMethod) +
                    " me-1"
                    : "fab fas fa-money-bill-alt me-1"
                }
              />{" "}
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
        },
        {
          dataField: "action",
          isDummyField: true,
          text: "Action",
          formatter: (cellContent, order) => (
            <>
              <div className="d-flex gap-3">
                <Link to="#" className="text-success">
                  <i
                    className="mdi mdi-pencil font-size-18"
                    id="edittooltip"
                    onClick={() => this.handleOrderClick(order)}
                  />
                </Link>
                <Link to="#" className="text-danger">
                  <i
                    className="mdi mdi-delete font-size-18"
                    id="deletetooltip"
                    onClick={() => this.onClickDelete(order)}
                  />
                </Link>
              </div>
            </>
          ),
        },
      ],
    };

    this.handleOrderClick = this.handleOrderClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleOrderClicks = this.handleOrderClicks.bind(this);
    this.toLowerCase1 = this.toLowerCase1.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  toLowerCase1(str) {
    return str.toLowerCase();
  }

  componentDidMount() {
    const { orders, onGetOrders } = this.props;
    if (orders && !orders.length) {
      onGetOrders();
    }
    this.setState({ orders });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { orders } = this.props;
    if (!isEmpty(orders) && size(prevProps.orders) !== size(orders)) {
      this.setState({ order: {}, isEdit: false });
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  handleOrderClicks = () => {
    this.setState({ order: "", isEdit: false });
    this.toggle();
  };

  toggleViewModal = () => {
    this.setState(prevState => ({
      viewmodal: !prevState.viewmodal,
    }));
  };

  onPaginationPageChange = page => {
    if (
      this.node &&
      this.node.current &&
      this.node.current.props &&
      this.node.current.props.pagination &&
      this.node.current.props.pagination.options
    ) {
      this.node.current.props.pagination.options.onPageChange(page);
    }
  };

  /* Insert,Update Delete data */

  toggleDeleteModal = () => {
    this.setState(prevState => ({
      deleteModal: !prevState.deleteModal,
    }));
  };

  onClickDelete = (order) => {
    this.setState({ order: order });
    this.setState({ deleteModal: true });
  };

  handleDeleteOrder = () => {
    const { onDeleteOrder } = this.props;
    const { order } = this.state;
    if (order.id !== undefined) {
      onDeleteOrder(order);
      this.onPaginationPageChange(1);
      this.setState({ deleteModal: false });
    }
  };

  handleOrderClick = arg => {
    const order = arg;

    this.setState({
      order: {
        id: order.id,
        orderId: order.orderId,
        billingName: order.billingName,
        orderdate: order.orderdate,
        total: order.total,
        paymentStatus: order.paymentStatus,
        paymentMethod: order.paymentMethod,
        badgeclass: order.badgeclass,
      },
      isEdit: true,
    });

    this.toggle();
  };

  handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  render() {
    const { orders } = this.props;

    const order = this.state.order;

    const { SearchBar } = Search;

    const { isEdit, deleteModal } = this.state;

    const { onAddNewOrder, onUpdateOrder } = this.props;

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: orders.length, // replace later with size(Order),
      custom: true,
    };

    const defaultSorted = [
      {
        dataField: "orderId",
        order: "desc",
      },
    ];

    const selectRow = {
      mode: "checkbox",
    };

    return (
      <React.Fragment>
        <DeleteModal
          show={deleteModal}
          onDeleteClick={this.handleDeleteOrder}
          onCloseClick={() => this.setState({ deleteModal: false })}
        />
        <EcommerceOrdersModal
          isOpen={this.state.viewmodal}
          toggle={this.toggleViewModal}
        />
        <div className="page-content">
          <MetaTags>
            <title>Orders | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Orders" />
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions || [])}
                      keyField="id"
                      columns={this.state.EcommerceOrderColumns || []}
                      data={orders || []}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          data={orders}
                          columns={this.state.EcommerceOrderColumns || []}
                          bootstrap4
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row className="mb-2">
                                <Col sm="4">
                                  <div className="search-box me-2 mb-2 d-inline-block">
                                    <div className="position-relative">
                                      <SearchBar
                                        {...toolkitProps.searchProps}
                                      />
                                      <i className="bx bx-search-alt search-icon" />
                                    </div>
                                  </div>
                                </Col>
                                <Col sm="8">
                                  <div className="text-sm-end">
                                    <Button
                                      type="button"
                                      color="success"
                                      className="btn-rounded mb-2 me-2"
                                      onClick={this.handleOrderClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" /> Add
                                      New Order
                                    </Button>
                                  </div>
                                </Col>
                              </Row>
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
                                  ref={this.node}
                                />
                                <Modal
                                  isOpen={this.state.modal}
                                  className={this.props.className}
                                >
                                  <ModalHeader toggle={this.toggle} tag="h4">
                                    {!!isEdit ? "Edit Order" : "Add Order"}
                                  </ModalHeader>
                                  <ModalBody>
                                    <Formik
                                      enableReinitialize={true}
                                      initialValues={{
                                        orderId: (order && order.orderId) || "",
                                        billingName:
                                          (order && order.billingName) || "",
                                        orderdate:
                                          (order && order.orderdate) || "",
                                        total: (order && order.total) || "",
                                        paymentStatus:
                                          (order && order.paymentStatus) || "Paid",
                                        badgeclass:
                                          (order && order.badgeclass) || "success",
                                        paymentMethod:
                                          (order && order.paymentMethod) || "Mastercard",
                                      }}
                                      validationSchema={Yup.object().shape({
                                        orderId: Yup.string().required(
                                          "Please Enter Your Order Id"
                                        ),
                                        billingName: Yup.string().required(
                                          "Please Enter Your Billing Name"
                                        ),
                                        orderdate: Yup.string().required(
                                          "Please Enter Your Order Date"
                                        ),
                                        total:
                                          Yup.string().required("Total Amount"),
                                        paymentStatus: Yup.string().required(
                                          "Please Enter Your Payment Status"
                                        ),
                                        badgeclass: Yup.string().required(
                                          "Please Enter Your Badge Class"
                                        ),
                                        paymentMethod: Yup.string().required(
                                          "Please Enter Your Payment Method"
                                        ),
                                      })}
                                      onSubmit={values => {
                                        if (isEdit) {
                                          const updateOrder = {
                                            id: order ? order.id : 0,
                                            orderId: values.orderId,
                                            billingName: values.billingName,
                                            orderdate: values.orderdate,
                                            total: values.total,
                                            paymentStatus: values.paymentStatus,
                                            paymentMethod: values.paymentMethod,
                                            badgeclass: values.badgeclass,
                                          };

                                          onUpdateOrder(updateOrder);
                                        } else {
                                          const newOrder = {
                                            id:
                                              Math.floor(
                                                Math.random() * (30 - 20)
                                              ) + 20,
                                            orderId: values["orderId"],
                                            billingName: values["billingName"],
                                            orderdate: values["orderdate"],
                                            total: values["total"],
                                            paymentStatus:
                                              values["paymentStatus"],
                                            paymentMethod:
                                              values["paymentMethod"],
                                            badgeclass: values["badgeclass"],
                                          };

                                          onAddNewOrder(newOrder);
                                        }

                                        this.setState({ selectedOrder: null });
                                        this.toggle();
                                      }}
                                    >
                                      {({ errors, status, touched }) => (
                                        <Form>
                                          <Row>
                                            <Col className="col-12">
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Order Id
                                                </Label>
                                                <Field
                                                  name="orderId"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.orderId &&
                                                      touched.orderId
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="orderId"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Billing Name
                                                </Label>
                                                <Field
                                                  name="billingName"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.billingName &&
                                                      touched.billingName
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="billingName"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Order Date
                                                </Label>
                                                <Field
                                                  name="orderdate"
                                                  type="date"
                                                  className={
                                                    "form-control" +
                                                    (errors.orderdate &&
                                                      touched.orderdate
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="orderdate"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Total
                                                </Label>
                                                <Field
                                                  name="total"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.total &&
                                                      touched.total
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="total"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Total
                                                </Label>
                                                <Field
                                                  name="paymentStatus"
                                                  as="select"
                                                  className={
                                                    "form-control" +
                                                    (errors.paymentStatus &&
                                                      touched.paymentStatus
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                >
                                                  <option>Paid</option>
                                                  <option>Chargeback</option>
                                                  <option>Refund</option>
                                                </Field>
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Badge Class
                                                </Label>
                                                <Field
                                                  name="badgeclass"
                                                  as="select"
                                                  className={
                                                    "form-control" +
                                                    (errors.badgeclass &&
                                                      touched.badgeclass
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                >
                                                  <option>success</option>
                                                  <option>danger</option>
                                                  <option>warning</option>
                                                </Field>
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Payment Method
                                                </Label>
                                                <Field
                                                  name="paymentMethod"
                                                  as="select"
                                                  className={
                                                    "form-control" +
                                                    (errors.paymentMethod &&
                                                      touched.paymentMethod
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                >
                                                  <option>Mastercard</option>
                                                  <option>Visa</option>
                                                  <option>Paypal</option>
                                                  <option>COD</option>
                                                </Field>
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col>
                                              <div className="text-end">
                                                <button
                                                  type="submit"
                                                  className="btn btn-success save-user"
                                                >
                                                  Save
                                                </button>
                                              </div>
                                            </Col>
                                          </Row>
                                        </Form>
                                      )}
                                    </Formik>
                                  </ModalBody>
                                </Modal>
                              </div>
                              <div className="pagination pagination-rounded justify-content-end mb-2">
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
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

EcommerceOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func,
  className: PropTypes.any,
};

const mapStateToProps = state => ({
  orders: state.ecommerce.orders,
});

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getOrders()),
  onAddNewOrder: order => dispatch(addNewOrder(order)),
  onUpdateOrder: order => dispatch(updateOrder(order)),
  onDeleteOrder: order => dispatch(deleteOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EcommerceOrders));
