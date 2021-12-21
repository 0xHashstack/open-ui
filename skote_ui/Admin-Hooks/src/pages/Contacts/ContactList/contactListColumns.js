import React from "react"
import { UncontrolledTooltip } from "reactstrap"
import { Link } from "react-router-dom"
import images from "assets/images"

const contactListColumns = () => [
  {
    dataField: "img",
    text: "#",
    formatter: (cellContent, user) => (
      <>
        {!user.img ? (
          <div className="avatar-xs">
            <span className="avatar-title rounded-circle">
              {user.name.charAt(0)}
            </span>
          </div>
        ) : (
          <div>
            <img
              className="rounded-circle avatar-xs"
              src={images[user.img]}
              alt=""
            />
          </div>
        )}
      </>
    ),
  },
  {
    text: "Name",
    dataField:"name",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        <h5 className="font-size-14 mb-1">
          <Link to="#" className="text-dark">
            {user.name}
          </Link>
        </h5>
        <p className="text-muted mb-0">{user.designation}</p>
      </>
    ),
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
  },
  {
    text: "Tags",
    dataField: "tags",
    sort: true,
    formatter: (cellContent, user) => (
      <>
        {user.skills.map((skill, key) => (
          <Link
            to="#"
            className="badge badge-soft-primary font-size-11 m-1"
            key={"_skill_" + key}
          >
            {skill.name}
          </Link>
        ))}
      </>
    ),
  },
  {
    dataField: "projects",
    text: "Projects",
    sort: true,
  },
  {
    dataField: "menu",
    isDummyField: true,
    text: "Action",
    formatter: (cellContent, user) => (
      <ul className="list-inline font-size-20 contact-links mb-0">
        <li className="list-inline-item px-2">
          <Link to="#" id={"message" + user.id}>
            <i className="bx bx-message-square-dots" />
            <UncontrolledTooltip placement="top" target={"message" + user.id}>
              Message
            </UncontrolledTooltip>
          </Link>
        </li>
        <li className="list-inline-item px-2">
          <Link to="#" id={"profile" + user.id}>
            <i className="bx bx-user-circle" />
            <UncontrolledTooltip placement="top" target={"profile" + user.id}>
              Profile
            </UncontrolledTooltip>
          </Link>
        </li>
      </ul>
    ),
  },
]

export default contactListColumns
