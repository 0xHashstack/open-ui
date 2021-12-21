import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  Col,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap"

// import images
import img1 from "../../assets/images/small/img-2.jpg"
import img2 from "../../assets/images/small/img-6.jpg"
import img3 from "../../assets/images/small/img-1.jpg"

const PopularPost = () => {
  const popularpost = [
    {
      id: 1,
      img: img1,
      title: "Beautiful Day with Friends",
      date: "10 Nov, 2020",
      like: "125",
      comment: "68",
    },
    {
      id: 2,
      img: img2,
      title: "Drawing a sketch",
      date: "02 Nov, 2020",
      like: "102",
      comment: "48",
    },
    {
      id: 3,
      img: img3,
      title: "Riding bike on road",
      date: "24 Oct, 2020",
      like: "98",
      comment: "35",
    },
    {
      id: 4,
      img: img1,
      title: "Project discussion with team",
      date: "15 Oct, 2020",
      like: "92",
      comment: "22",
    },
  ]
  return (
    <React.Fragment>
      <Col xl={8}>
        <Card>
          <CardBody>
            <div className="d-flex">
              <div className="me-2">
                <h5 className="card-title mb-4">Popular post</h5>
              </div>
              <UncontrolledDropdown className="ms-auto">
                <DropdownToggle
                  className="text-muted font-size-14"
                  color="white"
                >
                  <i className="mdi mdi-dots-horizontal"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                  <Link className="dropdown-item" to="#">
                    Something else
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <div className="table-responsive">
              <table className="table align-middle table-nowrap mb-0">
                <thead>
                  <tr>
                    <th scope="col" colSpan="2">
                      Post
                    </th>
                    <th scope="col">Likes</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {popularpost.map((popularpost, key) => (
                    <tr key={key}>
                      <td style={{ width: "100px" }}>
                        <img
                          src={popularpost.img}
                          alt=""
                          className="avatar-md h-auto d-block rounded"
                        />
                      </td>
                      <td>
                        <h5 className="font-size-13 text-truncate mb-1">
                          <Link to="#" className="text-dark">
                            {popularpost.title}
                          </Link>
                        </h5>
                        <p className="text-muted mb-0">{popularpost.date}</p>
                      </td>
                      <td>
                        <i className="bx bx-like align-middle me-1"></i>{" "}
                        {popularpost.like}
                      </td>
                      <td>
                        <i className="bx bx-comment-dots align-middle me-1"></i>{" "}
                        {popularpost.comment}
                      </td>
                      <td>
                        <UncontrolledDropdown className="dropdown">
                          <DropdownToggle
                            className="text-muted font-size-16"
                            color="white"
                          >
                            <i className="mdi mdi-dots-horizontal"></i>
                          </DropdownToggle>
                          <DropdownMenu
                            className="dropdown-menu-end"
                          >
                            <Link className="dropdown-item" to="#">
                              Action
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Another action
                            </Link>
                            <Link className="dropdown-item" to="#">
                              Something else
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">
                              Separated link
                            </Link>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default PopularPost
