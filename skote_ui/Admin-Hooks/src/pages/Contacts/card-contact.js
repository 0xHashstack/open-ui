import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardBody,
  CardFooter,
  Col,
  UncontrolledTooltip,
} from "reactstrap"
import images from "assets/images"
import { isEmpty, size, map } from "lodash"

const CardContact = props => {
  const { user } = props

  return (
    <React.Fragment>
      <Col xl="3" sm="6">
        <Card className="text-center">
          <CardBody>
            {!user.img ? (
              <div className="avatar-sm mx-auto mb-4">
                <span
                  className={
                    "avatar-title rounded-circle bg-soft bg-" +
                    user.color +
                    " text-" +
                    user.color +
                    " font-size-16"
                  }
                >
                  {user.name.charAt(0)}
                </span>
              </div>
            ) : (
              <div className="mb-4">
                <img
                  className="rounded-circle avatar-sm"
                  src={images[user.img]}
                  alt=""
                />
              </div>
            )}

            <h5 className="font-size-15 mb-1">
              <Link to="#" className="text-dark">
                {user.name}
              </Link>
            </h5>
            <p className="text-muted">{user.designation}</p>

            <div>
                {map(
                  user.tags,
                  (tag, index) =>
                    index < 2 && (
                      <Link
                        to="#"
                        className="badge bg-primary font-size-11 m-1"
                        key={"_skill_" + user.id + index}
                      >
                        {tag}
                      </Link>
                    )
                )}
                {size(user.tags) > 2 && (
                  <Link
                    to="#"
                    className="badge bg-primary font-size-11 m-1"
                    key={"_skill_" + user.id}
                  >
                    {size(user.tags) - 1} + more
                  </Link>
                )}
              </div>
          </CardBody>
          <CardFooter className="bg-transparent border-top">
            <div className="contact-links d-flex font-size-20">
              <div className="flex-fill">
                <Link to="#" id={"message" + user.id}>
                  <i className="bx bx-message-square-dots" />
                  <UncontrolledTooltip
                    placement="top"
                    target={"message" + user.id}
                  >
                    Message
                  </UncontrolledTooltip>
                </Link>
              </div>
              <div className="flex-fill">
                <Link to="#" id={"project" + user.id}>
                  <i className="bx bx-pie-chart-alt" />
                  <UncontrolledTooltip
                    placement="top"
                    target={"project" + user.id}
                  >
                    Projects
                  </UncontrolledTooltip>
                </Link>
              </div>
              <div className="flex-fill">
                <Link to="#" id={"profile" + user.id}>
                  <i className="bx bx-user-circle" />
                  <UncontrolledTooltip
                    placement="top"
                    target={"profile" + user.id}
                  >
                    Profile
                  </UncontrolledTooltip>
                </Link>
              </div>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </React.Fragment>
  )
}

CardContact.propTypes = {
  user: PropTypes.object
}

export default CardContact
