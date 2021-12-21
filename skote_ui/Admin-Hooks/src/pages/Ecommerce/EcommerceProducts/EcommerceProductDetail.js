import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { isEmpty } from "lodash";

//Import Star Ratings
import StarRatings from "react-star-ratings";

//Import Product Images
import { productImages } from "assets/images/product";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import actions
import {
  getProductDetail as onGetProductDetail,
  getProductComments,
  onAddReply as onAddReplyAction,
  onAddComment as onAddCommentAction,
} from "store/actions"
import RecentProducts from "./RecentProducts"
import Reviews from "./Reviews"

//redux
import { useSelector, useDispatch } from "react-redux"

const EcommerceProductDetail = props => {
  const dispatch = useDispatch()

  const { product, productComments } = useSelector(state => ({
    product: state.ecommerce.product,
    productComments: state.ecommerce.productComments,
  }))

  const {
    match: { params },
  } = props
  const [activeTab, setActiveTab] = useState("1")

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProductDetail(params.id))
    } else {
      dispatch(onGetProductDetail(1))
    }
  }, [dispatch, params])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const imageShow = (img, id) => {
    const expandImg = document.getElementById("expandedImg" + id)
    expandImg.src = img
  }

  useEffect(() => {
    dispatch(getProductComments())
  }, [dispatch])

  const [comments, setComments] = useState([])
  useEffect(() => {
    if (productComments) {
      setComments(productComments)
    }
  }, [productComments])

  const onClickReply = commentId => {
    const modifiedComments = [...comments]

    const commentIdx = (modifiedComments || []).findIndex(
      comment => comment.commentId.toString() === commentId.toString()
    )
    if (commentIdx > -1) {
      if (modifiedComments[commentIdx]) {
        modifiedComments[commentIdx]["showAddComment"] = true

        for (let i = 0; i < (modifiedComments || []).length; i++) {
          if (i !== commentIdx) {
            modifiedComments[i]["showAddComment"] = false
          }
        }
      } else {
        modifiedComments[commentIdx]["showAddComment"] = false
      }
      setComments(modifiedComments)
    }
  }

  const onCancelReply = commentId => {
    if (commentId) {
      const modifiedComments = [...comments]
      for (let i = 0; i < (modifiedComments || []).length; i++) {
        modifiedComments[i]["showAddComment"] = false
      }
      setComments(modifiedComments)
    }
  }

  const onAddReply = (commentId, replyText) => {
    if (commentId) {
      const productId = params.id || 1
      dispatch(onAddReplyAction(commentId, productId, replyText))
    }
  }

  const onAddComment = commentText => {
    const productId = params.id || 1
    dispatch(onAddCommentAction(productId, commentText))
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Product Detail | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Product Detail" />
          {!isEmpty(product) && (
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col xl="6">
                        <div className="product-detai-imgs">
                          <Row>
                            <Col md="2" xs="3">
                              <Nav className="flex-column" pills>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1")
                                    }}
                                  >
                                    <img
                                      src={product["subImage"][0]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product["subImage"][0],
                                          1
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "2",
                                    })}
                                    onClick={() => {
                                      toggleTab("2")
                                    }}
                                  >
                                    <img
                                      src={product["subImage"][1]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product["subImage"][1],
                                          2
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleTab("3")
                                    }}
                                  >
                                    <img
                                      src={product["subImage"][2]}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product["subImage"][2],
                                          3
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </Col>
                            <Col md={{ size: 7, offset: 1 }} xs="9">
                              <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                  <div>
                                    <img
                                      src={productImages[product.image]}
                                      alt=""
                                      id="expandedImg1"
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div>
                                    <img
                                      src={productImages[product.image]}
                                      id="expandedImg2"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div>
                                    <img
                                      src={productImages[product.image]}
                                      id="expandedImg3"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="4">
                                  <div>
                                    <img
                                      src={productImages[product.image]}
                                      id="expandedImg4"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                    />
                                  </div>
                                </TabPane>
                              </TabContent>
                              <div className="text-center">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn  mt-2 me-1"
                                >
                                  <i className="bx bx-cart me-2" /> Add to cart
                                </Button>
                                <Button
                                  type="button"
                                  color="success"
                                  className="ms-1 btn mt-2"
                                >
                                  <i className="bx bx-shopping-bag me-2" />
                                  Buy now
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                      <Col xl="6">
                        <div className="mt-4 mt-xl-3">
                          <Link to="#" className="text-primary">
                            {product.category}
                          </Link>
                          <h4 className="mt-1 mb-3">{product.name}</h4>

                          <div className="text-muted float-start me-3">
                            <StarRatings
                              rating={4}
                              starRatedColor="#F1B44C"
                              starEmptyColor="#2D363F"
                              numberOfStars={5}
                              name="rating"
                              starDimension="14px"
                              starSpacing="3px"
                            />
                          </div>
                          <p className="text-muted mb-4">
                            ( {product.reviews} Customers Review )
                          </p>

                          {!!product.isOffer && (
                            <h6 className="text-success text-uppercase">
                              {product.offer} % Off
                            </h6>
                          )}
                          <h5 className="mb-4">
                            Price :{" "}
                            <span className="text-muted me-2">
                              <del>${product.oldPrice} USD</del>
                            </span>{" "}
                            <b>${product.newPrice} USD</b>
                          </h5>
                          <p className="text-muted mb-4">
                            To achieve this, it would be necessary to have
                            uniform grammar pronunciation and more common words
                            If several languages coalesce
                          </p>
                          <Row className="mb-3">
                            <Col md="6">
                              {product.features &&
                                product.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                        className={classnames(
                                          item.icon,
                                          "font-size-16 align-middle text-primary me-2"
                                        )}
                                      />
                                      {item.type && `${item.type}: `}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                            <Col md="6">
                              {product.features &&
                                product.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                        className={classnames(
                                          item.icon,
                                          "font-size-16 align-middle text-primary me-2"
                                        )}
                                      />
                                      {item.type && `${item.type}:`}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                          </Row>

                          <div className="product-color">
                            <h5 className="font-size-15">Color :</h5>
                            {product.colorOptions &&
                              product.colorOptions.map((option, i) => (
                                <Link to="#" className="active" key={i}>
                                  <div className="product-color-item border rounded">
                                    <img
                                      src={productImages[option.image]}
                                      alt=""
                                      className="avatar-md"
                                    />
                                  </div>
                                  <p>{option.color}</p>
                                </Link>
                              ))}
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-5">
                      <h5 className="mb-3">Specifications :</h5>

                      <div className="table-responsive">
                        <Table className="table mb-0 table-bordered">
                          <tbody>
                            {product.specification &&
                              product.specification.map((specification, i) => (
                                <tr key={i}>
                                  <th
                                    scope="row"
                                    style={{ width: "400px" }}
                                    className={"text-capitalize"}
                                  >
                                    {specification.type}
                                  </th>
                                  <td>{specification.value}</td>
                                </tr>
                              ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>

                    <Reviews
                      comments={[...comments]}
                      productId={params.id || 1}
                      onClickReply={onClickReply}
                      onCancelReply={onCancelReply}
                      onAddReply={onAddReply}
                      onAddComment={onAddComment}
                    />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
          <RecentProducts recentProducts={product.recentProducts} />
        </Container>
      </div>
    </React.Fragment>
  )
}

EcommerceProductDetail.propTypes = {
  product: PropTypes.object,
  match: PropTypes.any,
  onGetProductDetail: PropTypes.func,
}

export default EcommerceProductDetail
