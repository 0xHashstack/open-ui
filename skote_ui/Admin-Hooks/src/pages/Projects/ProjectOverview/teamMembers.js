import React from "react"
import PropTypes from "prop-types"
import { Card, CardBody, CardTitle, Table } from "reactstrap"
import { Link } from "react-router-dom"
import { map } from "lodash"
import images from "assets/images"

const TeamMembers = ({ team }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle className="mb-4">Team Members</CardTitle>

        <div className="table-responsive">
          <Table className="table align-middle table-nowrap">
            <tbody>
              {map(team, (member, k) => (
                <tr key={"_member_" + k}>
                  <td style={{ width: "50px" }}>
                    {member.img !== "Null" ? (
                      <img
                        src={images[member.img]}
                        className="rounded-circle avatar-xs"
                        alt=""
                      />
                    ) : (
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </td>
                  <td>
                    <h5 className="font-size-14 m-0">
                      <Link to="" className="text-dark">
                        {member.fullname}
                      </Link>
                    </h5>
                  </td>
                  <td>
                    <div>
                      {map(member.skills, (skill, key) => (
                        <Link
                          to="#"
                          className="badge bg-primary bg-soft text-primary font-size-11 me-1"
                          key={"_skill_" + key}
                        >
                          {skill.name}
                        </Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

TeamMembers.propTypes = {
  team: PropTypes.array,
}

export default TeamMembers
