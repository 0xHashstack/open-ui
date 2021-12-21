import React, { useEffect, useState, useRef } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { isEmpty } from "lodash";
import * as moment from "moment";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  UncontrolledDropdown,
  Input,
  FormFeedback,
  Label,
  Form,
} from "reactstrap";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

import DeleteModal from "../../../components/Common/DeleteModal";
import {
  getCustomers as onGetCustomers,
  addNewCustomer as onAddNewCustomer,
  updateCustomer as onUpdateCustomer,
  deleteCustomer as onDeleteCustomer,
} from "store/e-commerce/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

const EcommerceCustomers = props => {
  const dispatch = useDispatch();

  const { customers } = useSelector(state => ({
    customers: state.ecommerce.customers,
  }));

  const [modal, setModal] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [customer, setCustomer] = useState(null);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      username: (customer && customer.username) || '',
      phone: (customer && customer.phone) || '',
      email: (customer && customer.email) || '',
      address: (customer && customer.address) || '',
      rating: (customer && customer.rating) || '',
      walletBalance: (customer && customer.walletBalance) || '',
      joiningDate: (customer && customer.joiningDate) || '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please Enter Your Name"),
      phone: Yup.string().required("Please Enter Your Phone"),
      email: Yup.string().required("Please Enter Your Email"),
      address: Yup.string().required("Please Enter Your Address"),
      rating: Yup.string().required("Please Enter Your Rating"),
      walletBalance: Yup.string().required("Please Enter Your Wallet Balance"),
      joiningDate: Yup.string().required("Please Enter Your Joining Date"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateCustomer = {
          id: customer ? customer.id : 0,
          username: values.username,
          phone: values.phone,
          email: values.email,
          address: values.address,
          rating: values.rating,
          walletBalance: values.walletBalance,
          joiningDate: values.joiningDate,
        };
        // update customer
        dispatch(onUpdateCustomer(updateCustomer));
        validation.resetForm();
      } else {
        const newCustomer = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          username: values["username"],
          phone: values["phone"],
          email: values["email"],
          address: values["address"],
          rating: values["rating"],
          walletBalance: values["walletBalance"],
          joiningDate: values["joiningDate"],
        };
        // save new customer
        dispatch(onAddNewCustomer(newCustomer));
        validation.resetForm();
      }
      toggle();
    },
  });

  //pagination customization
  const pageOptions = {
    sizePerPage: 10,
    totalSize: customers.length, // replace later with size(orders),
    custom: true,
  };

  const EcommerceCustomerColumns = [
    {
      text: "id",
      dataField: "id",
      sort: true,
      hidden: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => <>{row.id}</>,
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
      // eslint-disable-next-line react/display-name
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
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => (
        <Badge color="success" className="bg-success font-size-12">
          <i className="mdi mdi-star me-1" />
          {row.rating}
        </Badge>
      ),
    },
    {
      dataField: "walletBalance",
      text: "Wallet Balances",
      sort: true,
    },
    {
      dataField: "joiningDate",
      text: "Joining Date",
      sort: true,
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, row) => handleValidDate(row.joiningDate),
    },
    {
      dataField: "menu",
      isDummyField: true,
      text: "Action",
      // eslint-disable-next-line react/display-name
      formatter: (cellContent, customer) => (
        <UncontrolledDropdown direction="left">
          <DropdownToggle href="#" className="card-drop" tag="i">
            <i className="mdi mdi-dots-horizontal font-size-18" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem
              href="#"
              onClick={() => handleCustomerClick(customer)}
            >
              <i className="fas fa-pencil-alt text-success me-1" />
              Edit
            </DropdownItem>
            <DropdownItem
              href="#"
              onClick={() => onClickDelete(customer)}
            >
              <i className="fas fa-trash-alt text-danger me-1" />
              Delete
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ),
    },
  ];

  const toggle = () => {
    if (modal) {
      setModal(false);
      setCustomer(null);
    } else {
      setModal(true);
    }
  };


  const handleCustomerClick = arg => {
    const customer = arg;

    setCustomer({
      id: customer.id,
      username: customer.username,
      phone: customer.phone,
      email: customer.email,
      address: customer.address,
      rating: customer.rating,
      walletBalance: customer.walletBalance,
      joiningDate: customer.joiningDate,
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

  //delete customer
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (customer) => {
    setCustomer(customer);
    setDeleteModal(true);
  };

  const handleDeleteCustomer = () => {
    if (customer.id) {
      dispatch(onDeleteCustomer(customer));
      onPaginationPageChange(1);
      setDeleteModal(false);
    }
  };

  const { SearchBar } = Search;

  useEffect(() => {
    if (customers && !customers.length) {
      dispatch(onGetCustomers());
    }
  }, [dispatch, customers]);

  useEffect(() => {
    setCustomerList(customers);
  }, [customers]);

  useEffect(() => {
    if (!isEmpty(customers)) {
      setCustomerList(customers);
    }
  }, [customers]);

  // eslint-disable-next-line no-unused-vars
  const handleTableChange = (type, { page, searchText }) => {
    setCustomerList(
      customers.filter(customer =>
        Object.keys(customer).some(key =>
          customer[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    );
  };

  const handleCustomerClicks = () => {
    setCustomerList("");
    setIsEdit(false);
    toggle();
  };

  const defaultSorted = [
    {
      dataField: "id",
      order: "desc",
    },
  ];

  /** set Date formate */
  const handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteCustomer}
        onCloseClick={() => setDeleteModal(false)}
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
                    columns={EcommerceCustomerColumns}
                    data={customers}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={customers || []}
                        columns={EcommerceCustomerColumns}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col sm="4">
                                <div className="search-box ms-2 mb-2 d-inline-block">
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
                                    onClick={handleCustomerClicks}
                                  >
                                    <i className="mdi mdi-plus me-1" />
                                    New customer
                                  </Button>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    responsive
                                    bordered={false}
                                    striped={false}
                                    defaultSorted={defaultSorted}
                                    classes={"table align-middle table-nowrap"}
                                    keyField="id"
                                    {...toolkitProps.baseProps}
                                    onTableChange={handleTableChange}
                                    {...paginationTableProps}
                                    ref={node}
                                  />
                                </div>
                                <Modal isOpen={modal} toggle={toggle}>
                                  <ModalHeader toggle={toggle} tag="h4">
                                    {!!isEdit
                                      ? "Edit Customer"
                                      : "Add Customer"}
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
                                            <Label className="form-label">UserName</Label>
                                            <Input
                                              name="username"
                                              type="text"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.username || ""}
                                              invalid={
                                                validation.touched.username && validation.errors.username ? true : false
                                              }
                                            />
                                            {validation.touched.username && validation.errors.username ? (
                                              <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                                            ) : null}
                                          </div>

                                          <div className="mb-3">
                                            <Label className="form-label">Phone No</Label>
                                            <Input
                                              name="phone"
                                              type="text"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.phone || ""}
                                              invalid={
                                                validation.touched.phone && validation.errors.phone ? true : false
                                              }
                                            />
                                            {validation.touched.phone && validation.errors.phone ? (
                                              <FormFeedback type="invalid">{validation.errors.phone}</FormFeedback>
                                            ) : null}
                                          </div>

                                          <div className="mb-3">
                                            <Label className="form-label">Email Id</Label>
                                            <Input
                                              name="email"
                                              type="email"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.email || ""}
                                              invalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                              }
                                            />
                                            {validation.touched.email && validation.errors.email ? (
                                              <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                            ) : null}
                                          </div>

                                          <div className="mb-3">
                                            <Label className="form-label">Address</Label>
                                            <Input
                                              name="address"
                                              type="textarea"
                                              rows="3"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.address || ""}
                                              invalid={
                                                validation.touched.address && validation.errors.address ? true : false
                                              }
                                            />
                                            {validation.touched.address && validation.errors.address ? (
                                              <FormFeedback type="invalid">{validation.errors.address}</FormFeedback>
                                            ) : null}
                                          </div>

                                          <div className="mb-3">
                                            <Label className="form-label">Rating</Label>
                                            <Input
                                              name="rating"
                                              type="text"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.rating || ""}
                                              invalid={
                                                validation.touched.rating && validation.errors.rating ? true : false
                                              }
                                            />
                                            {validation.touched.rating && validation.errors.rating ? (
                                              <FormFeedback type="invalid">{validation.errors.rating}</FormFeedback>
                                            ) : null}
                                          </div>

                                          <div className="mb-3">
                                            <Label className="form-label">Wallet Balance</Label>
                                            <Input
                                              name="walletBalance"
                                              type="text"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.walletBalance || ""}
                                              invalid={
                                                validation.touched.walletBalance && validation.errors.walletBalance ? true : false
                                              }
                                            />
                                            {validation.touched.walletBalance && validation.errors.walletBalance ? (
                                              <FormFeedback type="invalid">{validation.errors.walletBalance}</FormFeedback>
                                            ) : null}
                                          </div>

                                          <div className="mb-3">
                                            <Label className="form-label">Joining Date</Label>
                                            <Input
                                              name="joiningDate"
                                              type="date"
                                              onChange={validation.handleChange}
                                              onBlur={validation.handleBlur}
                                              value={validation.values.joiningDate || ""}
                                              invalid={
                                                validation.touched.joiningDate && validation.errors.joiningDate ? true : false
                                              }
                                            />
                                            {validation.touched.joiningDate && validation.errors.joiningDate ? (
                                              <FormFeedback type="invalid">{validation.errors.joiningDate}</FormFeedback>
                                            ) : null}
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

EcommerceCustomers.propTypes = {
  customers: PropTypes.array,
  onGetCustomers: PropTypes.func,
  onAddNewCustomer: PropTypes.func,
  onDeleteCustomer: PropTypes.func,
  onUpdateCustomer: PropTypes.func,
};

export default EcommerceCustomers;
