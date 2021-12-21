import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { isEmpty, map, size } from "lodash"
import { Link, withRouter } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody, CardTitle, Col, Container, Row } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactApexChart from "react-apexcharts"
//Import Images
import images from "../../assets/images"

import { getTasks as onGetTasks } from "../../store/tasks/actions"
import { options, series, statusClasses } from "common/data/tasks"

//redux
import { useSelector, useDispatch } from "react-redux"

const TasksList = props => {
  const dispatch = useDispatch()

  const { tasks } = useSelector(state => ({
    tasks: state.tasks.tasks,
  }))

  useEffect(() => {
    dispatch(onGetTasks())
  }, [dispatch])

  const recentTasks = tasks.find(task => task.title === "Recent Tasks")

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Task List | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          <Breadcrumbs title="Tasks" breadcrumbItem="Task List" />
          {/* Render Breadcrumbs */}
          <Row>
            <Col lg={8}>
              {map(tasks, (task, i) => (
                <Card key={i}>
                  <CardBody>
                    <CardTitle className="mb-4">{task.title}</CardTitle>
                    <div className="table-responsive">
                      <table className="table table-nowrap align-middle mb-0">
                        <tbody>
                          {map(task.tasks, (item, i) => (
                            <tr key={i}>
                              <td style={{ width: "40px" }}>
                                <div className="form-check font-size-16">
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={item.id}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={item.id}
                                  />
                                </div>
                              </td>
                              <td>
                                <h5 className="text-truncate font-size-14 m-0">
                                  <Link to="#" className="text-dark">
                                    {item.description}
                                  </Link>
                                </h5>
                              </td>
                              <td>
                                <div className="team">
                                  {map(
                                    item.members,
                                    (member, index) =>
                                      index < 2 && (
                                        <Link
                                          to="#"
                                          className="team-member d-inline-block me-1"
                                          key={index}
                                        >
                                          {member.userImg ? (
                                            <img
                                              src={images[member.userImg]}
                                              className="rounded-circle avatar-xs"
                                              alt=""
                                            />
                                          ) : (
                                            <div className="avatar-xs">
                                              <span className="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16">
                                                {member.username.charAt(0)}
                                              </span>
                                            </div>
                                          )}
                                        </Link>
                                      )
                                  )}
                                  {size(item.members) > 2 && (
                                    <Link
                                      to="#"
                                      className="d-inline-block me-1"
                                    >
                                      <div className="avatar-xs">
                                        <span className="avatar-title rounded-circle bg-warning text-white font-size-16">
                                          {size(item.members) - 2} +
                                        </span>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              </td>
                              <td>
                                <div className="text-center">
                                  <span
                                    className={classNames(
                                      "badge badge-pill font-size-11",
                                      statusClasses[item.status.toLowerCase()]
                                    )}
                                  >
                                    {item.status}
                                  </span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </Col>

            <Col lg={4}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-3">Tasks </CardTitle>
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="line"
                    height={280}
                    className="apex-charts"
                  />
                </CardBody>
              </Card>

              {!isEmpty(recentTasks) && (
                <Card>
                  <CardBody>
                    <CardTitle className="mb-4">{recentTasks.title}</CardTitle>
                    <div className="table-responsive">
                      <table className="table table-nowrap align-middle mb-0">
                        <tbody>
                          {map(recentTasks.tasks, (item, i) => (
                            <tr key={i}>
                              <td>
                                <h5 className="text-truncate font-size-14 m-0">
                                  <Link to="#" className="text-dark">
                                    {item.description}
                                  </Link>
                                </h5>
                              </td>
                              <td>
                                <div className="team">
                                  {map(
                                    item.members,
                                    (member, index) =>
                                      index < 2 && (
                                        <Link
                                          to="#"
                                          className="d-inline-block"
                                          key={index}
                                        >
                                          {member.userImg ? (
                                            <img
                                              src={images[member.userImg]}
                                              className="rounded-circle avatar-xs"
                                              alt=""
                                            />
                                          ) : (
                                            <div className="avatar-xs">
                                              <span className="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-16">
                                                {member.username.charAt(0)}
                                              </span>
                                            </div>
                                          )}
                                        </Link>
                                      )
                                  )}
                                  {size(item.members) > 2 && (
                                    <Link
                                      to="#"
                                      className="team-member d-inline-block ms-1"
                                    >
                                      <div className="avatar-xs">
                                        <span className="avatar-title rounded-circle bg-soft bg-primary text-primary">
                                          {size(item.members) - 2} +
                                        </span>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(TasksList)
