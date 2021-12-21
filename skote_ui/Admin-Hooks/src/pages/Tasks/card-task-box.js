import PropTypes from 'prop-types'
import React from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import { Card, CardBody } from "reactstrap"
import { map, size } from "lodash"

//Import Images
import images from "assets/images"

import { statusClasses } from "common/data/tasks"

const CardTaskBox = props => {
  const { data } = props
  return (
    <React.Fragment>
      <Card className="task-box">
        <CardBody className="borad-width">
          <div className="float-end ms-2">
          <span
                className={classNames(
                  "badge rounded-pill badge-soft-secondary font-size-12",
                  statusClasses[data.status.toLowerCase()]
                )}
              >
                {data.status}
              </span>
          </div>
          <div>
            <h5 className="font-size-15">
              <Link to="#" className="text-dark">
              {data.description}
              </Link>
            </h5>
            <p className="text-muted mb-4">{data.dueDate}</p>
          </div>

          <div className="avatar-group float-start">
              {map(
                data.members,
                (member, index) =>
                  index < 2 && (
                    <div className="avatar-group-item"  key={index}>
                    <Link
                      to="#"
                      className="d-inline-block"
                
                    >
                      {member.userImg ? (
                        <img
                          src={images[member.userImg]}
                          className="rounded-circle avatar-xs"
                          alt=""
                        />
                      ) : (
                        <div className="avatar-xs">
                          <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                            {member.username.charAt(0)}
                          </span>
                        </div>
                      )}
                    </Link>
                    </div>
                  )
              )}
              {size(data.members) > 2 && (
                <div className="avatar-group-item">
                <Link to="#" className="d-inline-block">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-info text-white font-size-16">
                      {size(data.members) - 2} +
                    </span>
                  </div>
                </Link>
                </div>
              )}
            </div>

          <div className="text-end">
            <h5 className="font-size-15 mb-1">{data.budget}</h5>
            <p className="mb-0 text-muted">Budget</p>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

CardTaskBox.propTypes = {
  data: PropTypes.object
}

export default CardTaskBox
