import React, { useEffect, useState, useRef } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { isEmpty } from "lodash";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as Yup from "yup";
import { useFormik } from "formik";
import DeleteModal from "../../../components/Common/DeleteModal";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import * as moment from "moment";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Badge,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

import {
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "store/actions";

import EcommerceOrdersModal from "./EcommerceOrdersModal";

const EcommerceOrders = props => {
  const dispatch = useDispatch();

  const [orderList, setOrderList] = useState([]);
  const [order, setOrder] = useState(null);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (order && order.orderId) || '',
      billingName: (order && order.billingName) || '',
      orderdate: (order && order.orderdate) || '',
      total: (order && order.total) || '',
      paymentStatus: (order && order.paymentStatus) || 'Paid',
      badgeclass: (order && order.badgeclass) || 'success',
      paymentMethod: (order && order.paymentMethod) || 'Mastercard',
    },
    validationSchema: Yup.object({
      orderId: Yup.string().required("Please Enter Your Order Id"),
      billingName: Yup.string().required("Please Enter Your Billing Name"),
      orderdate: Yup.string().required("Please Enter Your Order Date"),
      total: Yup.string().required("Total Amount"),
      paymentStatus: Yup.string().required("Please Enter Your Payment Status"),
      badgeclass: Yup.string().required("Please Enter Your Badge Class"),
      paymentMethod: Yup.string().required("Please Enter Your Payment Method"),
    }),
    onSubmit: (values) => {
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
        // update order
        dispatch(onUpdateOrder(updateOrder));
        validation.resetForm();
      } else {
        const newOrder = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          orderId: values["orderId"],
          billingName: values["billingName"],
          orderdate: values["orderdate"],
          total: values["total"],
          paymentStatus: values["paymentStatus"],
          paymentMethod: values["paymentMethod"],
          badgeclass: values["badgeclass"],
        };
        // save new order
        dispatch(onAddNewOrder(newOrder));
        validation.resetForm();
      }
      toggle();
    },
  });

  const { orders } = useSelector(state => ({
    orders: state.ecommerce.orders,
  }));

  const selectRow = {
    mode: "checkbox",
  };

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  //pagination customization
  const pageOptions = {
    sizePerPage: 10,
    totalSize: orders.length, // replace later with size(orders),
    custom: true,
  };
  const { SearchBar } = Search;

  // const toggleModal = () => {
  //   setModal1(!modal1)
  // }
  const toggleViewModal = () => setModal1(!modal1);

  const toLowerCase1 = str => {
    return (
      str === "" || str === undefined ? "" : str.toLowerCase()
    );
  };

  const EcommerceOrderColumns = toggleModal => [
    {
      dataField: "orderId",
      text: "Order ID",
      sort: true,
      // eslint-disable-next-line react/display-name
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
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => handleValidDate(row.orderdate),
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
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => (
        <Badge
          className={"font-size-12 badge-soft-" + row.badgeclass}
          color={row.badgeClass}
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
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => (
        <>
          <i
            className={
              row.paymentMethod !== "COD"
                ? "fab fa-cc-" + toLowerCase1(row.paymentMethod) + " me-1"
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
      // eslint-disable-next-line react/display-name
      formatter: () => (
        <Button
          type="button"
          color="primary"
          className="btn-sm btn-rounded"
          onClick={toggleViewModal}
        >
          View Details
        </Button>
      ),
    },
    {
      dataField: "action",
      isDummyField: true,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, order) => (
        <>
          <div className="d-flex gap-3">
            <Link
              to="#"
              className="text-success"
              onClick={() => handleOrderClick(order)}
            >
              <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
              <UncontrolledTooltip placement="top" target="edittooltip">
                Edit
              </UncontrolledTooltip>
            </Link>
            <Link
              to="#"
              className="text-danger"
              onClick={() => onClickDelete(order)}
            >
              <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
              <UncontrolledTooltip placement="top" target="deletetooltip">
                Delete
              </UncontrolledTooltip>
            </Link>
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders());
    }
  }, [dispatch, orders]);

  useEffect(() => {
    setOrderList(orders);
  }, [orders]);

  useEffect(() => {
    if (!isEmpty(orders) && !!isEdit) {
      setOrderList(orders);
      setIsEdit(false);
    }
  }, [orders]);

  const toggle = () => {
    if (modal) {
      setModal(false);
      setOrder(null);
    } else {
      setModal(true);
    }
  };

  const handleOrderClick = arg => {
    const order = arg;

    setOrder({
      id: order.id,
      orderId: order.orderId,
      billingName: order.billingName,
      orderdate: order.orderdate,
      total: order.total,
      paymentStatus: order.paymentStatus,
      paymentMethod: order.paymentMethod,
      badgeclass: order.badgeclass,
    });

    setIsEdit(true);

    toggle();
  };

  var node = useRef();
  const onPaginationPageChange = page => {
    if (
      node &&
      node.current &&
      node.current.props &&
      node.current.props.pagination &&
      node.current.props.pagination.options
    ) {
      node.current.props.pagination.options.onPageChange(page);
    }
  };

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (order) => {
    setOrder(order);
    setDeleteModal(true);
  };

  const handleDeleteOrder = () => {
    if (order.id) {
      dispatch(onDeleteOrder(order));
      onPaginationPageChange(1);
      setDeleteModal(false);
    }
  };
  const handleOrderClicks = () => {
    setOrderList("");
    setIsEdit(false);
    toggle();
  };

  const handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  const defaultSorted = [
    {
      dataField: "orderId",
      order: "desc",
    },
  ];

  return (
    <React.Fragment>
      <EcommerceOrdersModal isOpen={modal1} toggle={toggleViewModal} />
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
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
                    pagination={paginationFactory(pageOptions)}
                    keyField="id"
                    columns={EcommerceOrderColumns(toggle)}
                    data={orders}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={orders}
                        columns={EcommerceOrderColumns(toggle)}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col sm="4">
                                <div className="search-box me-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                    <SearchBar {...toolkitProps.searchProps} />
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                              <Col sm="8">
                                <div className="text-sm-end">
                                  <Button
                                    type="button"
                                    color="success"
                                    className="btn-rounded  mb-2 me-2"
                                    onClick={handleOrderClicks}
                                  >
                                    <i className="mdi mdi-plus me-1" />
                                    Add New Order
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    keyField="id"
                                    responsive
                                    bordered={false}
                                    striped={false}
                                    defaultSorted={defaultSorted}
                                    selectRow={selectRow}
                                    classes={
                                      "table align-middle table-nowrap table-check"
                                    }
                                    headerWrapperClasses={"table-light"}
                                    {...toolkitProps.baseProps}
                                    {...paginationTableProps}
                                    ref={node}
                                  />
                                </div>
                                <Modal isOpen={modal} toggle={toggle}>
                                  <ModalHeader toggle={toggle} tag="h4">
                                    {!!isEdit ? "Edit Order" : "Add Order"}
                                  </ModalHeader>
                                  <ModalBody>
                                    <Form
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                        validation.handleSubmit();
                                        return false;
                                      }}
                                    >
                                      <Row form>
                                        <Col className="col-12">
                                          <div className="mb-3">
                                            <Label className="form-label">Order Id</Label>
                                            <Input
                                              name="orderId"
                                              type="text"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.orderId || ""}
                                              invalid={
                                                validation.touched.orderId && validation.errors.orderId ? true : false
                                              }
                                            />
                                            {validation.touched.orderId && validation.errors.orderId ? (
                                              <FormFeedback type="invalid">{validation.errors.orderId}</FormFeedback>
                                            ) : null}
                                          </div>
                                          <div className="mb-3">
                                            <Label className="form-label">Billing Name</Label>
                                            <Input
                                              name="billingName"
                                              type="text"
                                              validate={{
                                                required: { value: true },
                                              }}
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.billingName || ""}
                                              invalid={
                                                validation.touched.billingName && validation.errors.billingName ? true : false
                                              }
                                            />
                                            {validation.touched.billingName && validation.errors.billingName ? (
                                              <FormFeedback type="invalid">{validation.errors.billingName}</FormFeedback>
                                            ) : null}
                                          </div>
                                          <div className="mb-3">
                                            <Label className="form-label">Order Date</Label>
                                            <Input
                                              name="orderdate"
                                              type="date"
                                              // value={orderList.orderdate || ""}
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.orderdate || ""}
                                              invalid={
                                                validation.touched.orderdate && validation.errors.orderdate ? true : false
                                              }
                                            />
                                            {validation.touched.orderdate && validation.errors.orderdate ? (
                                              <FormFeedback type="invalid">{validation.errors.orderdate}</FormFeedback>
                                            ) : null}
                                          </div>
                                          <div className="mb-3">
                                            <Label className="form-label">Total</Label>
                                            <Input
                                              name="total"
                                              type="text"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.total || ""}
                                              invalid={
                                                validation.touched.total && validation.errors.total ? true : false
                                              }
                                            />
                                            {validation.touched.total && validation.errors.total ? (
                                              <FormFeedback type="invalid">{validation.errors.total}</FormFeedback>
                                            ) : null}
                                          </div>
                                          <div className="mb-3">
                                            <Label className="form-label">Total</Label>
                                            <Input
                                              name="paymentStatus"
                                              type="select"
                                              className="form-select"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={
                                                validation.values.paymentStatus || ""
                                              }
                                            >
                                              <option>Paid</option>
                                              <option>Chargeback</option>
                                              <option>Refund</option>
                                            </Input>
                                            {validation.touched.paymentStatus && validation.errors.paymentStatus ? (
                                              <FormFeedback type="invalid">{validation.errors.paymentStatus}</FormFeedback>
                                            ) : null}
                                          </div>
                                          <div className="mb-3">
                                            <Label className="form-label">Badge Class</Label>
                                            <Input
                                              name="badgeclass"
                                              type="select"
                                              className="form-select"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.badgeclass || ""}
                                            >
                                              <option>success</option>
                                              <option>danger</option>
                                              <option>warning</option>
                                            </Input>
                                          </div>
                                          <div className="mb-3">
                                            <Label className="form-label">Payment Method</Label>
                                            <Input
                                              name="paymentMethod"
                                              type="select"
                                              className="form-select"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={
                                                validation.values.paymentMethod || ""
                                              }
                                            >
                                              <option>Mastercard</option>
                                              <option>Visa</option>
                                              <option>Paypal</option>
                                              <option>COD</option>
                                            </Input>
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
                                  </ModalBody>
                                </Modal>
                              </Col>
                            </Row>
                            <Row className="align-items-md-center mt-30">
                              <Col className="pagination pagination-rounded justify-content-end mb-2 inner-custom-pagination">
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </Col>
                            </Row>
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
};

EcommerceOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
  onAddNewOrder: PropTypes.func,
  onDeleteOrder: PropTypes.func,
  onUpdateOrder: PropTypes.func,
};

export default withRouter(EcommerceOrders);

