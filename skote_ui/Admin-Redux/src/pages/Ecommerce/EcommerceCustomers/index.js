import React, { Component } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { isEmpty, size } from "lodash";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import * as moment from "moment";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  getCustomers,
  addNewCustomer,
  updateCustomer,
  deleteCustomer,
} from "store/e-commerce/actions";

class EcommerceCustomers extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
    this.state = {
      customers: [],
      customer: "",
      deleteModal: false,
      EcommerceCustomerColumns: [
        {
          text: "id",
          dataField: "id",
          sort: true,
          hidden: true,
          formatter: (cellContent, user) => <>{row.id}</>,
        },
        {
          dataField: "username",
          text: "Username",
          sort: true,
        },
        {
          text: "Phone / Email",
          dataField: "phone",
          sort: true,
          formatter: (cellContent, row) => (
            <>
              <p className="mb-1">{row.phone}</p>
              <p className="mb-0">{row.email}</p>
            </>
          ),
        },
        {
          dataField: "address",
          text: "Address",
          sort: true,
        },
        {
          dataField: "rating",
          text: "Rating",
          sort: true,
          formatter: (cellContent, row) => (
            <Badge color="success" className="bg-success font-size-12">
              <i className="mdi mdi-star me-1" />
              {row.rating}
            </Badge>
          ),
        },
        {
          dataField: "walletBalance",
          text: "Wallet Balance",
          sort: true,
        },
        {
          dataField: "joiningDate",
          text: "Joining Date",
          sort: true,
          formatter: (cellContent, row) =>
            this.handleValidDate(row.joiningDate),
        },
        {
          dataField: "menu",
          isDummyField: true,
          text: "Action",
          formatter: (cellContent, customer) => (
            <UncontrolledDropdown>
              <DropdownToggle href="#" className="card-drop" tag="a">
                <i className="mdi mdi-dots-horizontal font-size-18" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem
                  href="#"
                  onClick={() => this.handleCustomerClick(customer)}
                >
                  <i className="mdi mdi-pencil font-size-16 text-success me-1" />{" "}
                  Edit
                </DropdownItem>
                <DropdownItem
                  href="#"
                  onClick={() => this.onClickDelete(customer)}
                >
                  <i className="mdi mdi-trash-can font-size-16 text-danger me-1" />{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          ),
        },
      ],
    };
    this.handleCustomerClick = this.handleCustomerClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleCustomerClicks = this.handleCustomerClicks.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
  }

  componentDidMount() {
    const { customers, onGetCustomers } = this.props;
    if (customers && !customers.length) {
      onGetCustomers();
    }
    this.setState({ customers });
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { customers } = this.props;
    if (!isEmpty(customers) && size(prevProps.customers) !== size(customers)) {
      this.setState({ customers: {}, isEdit: false });
    }
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  handleCustomerClicks = arg => {
    this.setState({ customer: arg });
    this.toggle();
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

  onClickDelete = (customer) => {
    this.setState({ customer: customer });
    this.setState({ deleteModal: true });
  };

  handleDeleteCustomer = () => {
    const { onDeleteCustomer } = this.props;
    const { customer } = this.state;
    if (customer.id !== undefined) {
      onDeleteCustomer(customer);
      this.onPaginationPageChange(1);
      this.setState({ deleteModal: false });
    }
  };

  handleCustomerClick = arg => {
    const customer = arg;

    this.setState({
      customer: {
        id: customer.id,
        username: customer.username,
        phone: customer.phone,
        email: customer.email,
        address: customer.address,
        rating: customer.rating,
        walletBalance: customer.walletBalance,
        joiningDate: customer.joiningDate,
      },
      isEdit: true,
    });

    this.toggle();
  };

  handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  /* Insert,Update Delete data */

  render() {
    const { customers } = this.props;

    const customer = this.state.customer;

    const { isEdit,deleteModal } = this.state;

    const { onAddNewCustomer, onUpdateCustomer } = this.props;

    //pagination customization
    const pageOptions = {
      sizePerPage: 10,
      totalSize: customers.length, // replace later with size(customers),
      custom: true,
    };

    const defaultSorted = [
      {
        dataField: "id",
        order: "desc",
      },
    ];

    const { SearchBar } = Search;

    const selectRow = {
      mode: "checkbox",
    };

    return (
      <React.Fragment>
        <DeleteModal
          show={deleteModal}
          onDeleteClick={this.handleDeleteCustomer}
          onCloseClick={() => this.setState({ deleteModal: false })}
        />
        <div className="page-content">
          <MetaTags>
            <title>Customers | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            <Breadcrumbs title="Ecommerce" breadcrumbItem="Customers" />
            <Row>
              <Col xs="12">
                <Card>
                  <CardBody>
                    <PaginationProvider
                      pagination={paginationFactory(pageOptions)}
                      keyField="id"
                      columns={this.state.EcommerceCustomerColumns}
                      data={customers}
                    >
                      {({ paginationProps, paginationTableProps }) => (
                        <ToolkitProvider
                          keyField="id"
                          columns={this.state.EcommerceCustomerColumns}
                          data={customers}
                          search
                        >
                          {toolkitProps => (
                            <React.Fragment>
                              <Row>
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
                                      onClick={this.handleCustomerClicks}
                                    >
                                      <i className="mdi mdi-plus me-1" /> New
                                      Customers
                                    </Button>
                                  </div>
                                </Col>
                              </Row>

                              <div className="table-responsive">
                                <BootstrapTable
                                  keyField={"id"}
                                  responsive
                                  bordered={false}
                                  striped={false}
                                  defaultSorted={defaultSorted}
                                  selectRow={selectRow}
                                  classes={"table align-middle table-nowrap"}
                                  headerWrapperClasses={"thead-light"}
                                  {...toolkitProps.baseProps}
                                  {...paginationTableProps}
                                  ref={this.node}
                                />

                                <Modal
                                  isOpen={this.state.modal}
                                  className={this.props.className}
                                >
                                  <ModalHeader toggle={this.toggle} tag="h4">
                                    {!!isEdit
                                      ? "Edit Customer"
                                      : "Add Customer"}
                                  </ModalHeader>
                                  <ModalBody>
                                    <Formik
                                      enableReinitialize={true}
                                      initialValues={{
                                        username:
                                          (customer && customer.username) || "",
                                        phone:
                                          (customer && customer.phone) || "",
                                        email:
                                          (customer && customer.email) || "",
                                        address:
                                          (customer && customer.address) || "",
                                        rating:
                                          (customer && customer.rating) || "",
                                        walletBalance:
                                          (customer &&
                                            customer.walletBalance) ||
                                          "",
                                        joiningDate:
                                          (customer && customer.joiningDate) ||
                                          "",
                                      }}
                                      validationSchema={Yup.object().shape({
                                        username: Yup.string().required(
                                          "Please Enter Your Name"
                                        ),
                                        phone: Yup.string().required(
                                          "Please Enter Your Phone"
                                        ),
                                        email: Yup.string().required(
                                          "Please Enter Your Email"
                                        ),
                                        address: Yup.string().required(
                                          "Please Enter Your Address"
                                        ),
                                        rating: Yup.string().required(
                                          "Please Enter Your Rating"
                                        ),
                                        walletBalance: Yup.string().required(
                                          "Please Enter Your Wallet Balance"
                                        ),
                                        joiningDate: Yup.string().required(
                                          "Please Enter Your Joining Date"
                                        ),
                                      })}
                                      onSubmit={values => {
                                        if (isEdit) {
                                          const updateCustomer = {
                                            id: customer.id,
                                            username: values.username,
                                            phone: values.phone,
                                            email: values.email,
                                            address: values.address,
                                            rating: values.rating,
                                            walletBalance: values.walletBalance,
                                            joiningDate: values.joiningDate,
                                          };

                                          onUpdateCustomer(updateCustomer);
                                        } else {
                                          const newCustomer = {
                                            id:
                                              Math.floor(
                                                Math.random() * (30 - 20)
                                              ) + 20,
                                            username: values["username"],
                                            phone: values["phone"],
                                            email: values["email"],
                                            address: values["address"],
                                            rating: values["rating"],
                                            walletBalance:
                                              values["walletBalance"],
                                            joiningDate: values["joiningDate"],
                                          };

                                          onAddNewCustomer(newCustomer);
                                        }

                                        this.setState({
                                          selectedCustomer: null,
                                        });
                                        this.toggle();
                                      }}
                                    >
                                      {({ errors, status, touched }) => (
                                        <Form>
                                          <Row>
                                            <Col className="col-12">
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  UserName
                                                </Label>
                                                <Field
                                                  name="username"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.username &&
                                                      touched.username
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="username"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Phone No
                                                </Label>
                                                <Field
                                                  name="phone"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.phone &&
                                                      touched.phone
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="phone"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>

                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Email Id
                                                </Label>
                                                <Field
                                                  name="email"
                                                  type="email"
                                                  className={
                                                    "form-control" +
                                                    (errors.email &&
                                                      touched.email
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="email"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>

                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Address
                                                </Label>
                                                <Field
                                                  name="address"
                                                  type="textarea"
                                                  rows="3"
                                                  className={
                                                    "form-control" +
                                                    (errors.address &&
                                                      touched.address
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="address"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>

                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Rating
                                                </Label>
                                                <Field
                                                  name="rating"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.rating &&
                                                      touched.rating
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="rating"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>

                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Wallet Balance
                                                </Label>
                                                <Field
                                                  name="walletBalance"
                                                  type="text"
                                                  className={
                                                    "form-control" +
                                                    (errors.walletBalance &&
                                                      touched.walletBalance
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="walletBalance"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>

                                              <div className="mb-3">
                                                <Label className="form-label">
                                                  Joining Date
                                                </Label>
                                                <Field
                                                  name="joiningDate"
                                                  type="date"
                                                  className={
                                                    "form-control" +
                                                    (errors.joiningDate &&
                                                      touched.joiningDate
                                                      ? " is-invalid"
                                                      : "")
                                                  }
                                                />
                                                <ErrorMessage
                                                  name="joiningDate"
                                                  component="div"
                                                  className="invalid-feedback"
                                                />
                                              </div>
                                            </Col>
                                          </Row>
                                          <Row>
                                            <Col>
                                              <div className="text-end">
                                                <button
                                                  type="submit"
                                                  className="btn btn-success save-customer"
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

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
  onAddNewCustomer: PropTypes.func,
  onDeleteCustomer: PropTypes.func,
  onUpdateCustomer: PropTypes.func,
  className: PropTypes.any,
};

const mapStateToProps = ({ ecommerce }) => ({
  customers: ecommerce.customers,
});

const mapDispatchToProps = dispatch => ({
  onGetCustomers: () => dispatch(getCustomers()),
  onAddNewCustomer: customer => dispatch(addNewCustomer(customer)),
  onUpdateCustomer: customer => dispatch(updateCustomer(customer)),
  onDeleteCustomer: customer => dispatch(deleteCustomer(customer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EcommerceCustomers);