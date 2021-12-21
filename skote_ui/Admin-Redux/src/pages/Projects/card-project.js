import React,{Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Badge, Card, CardBody, Col } from "reactstrap";
import images from "assets/images";
import companies from "assets/images/companies";

class CardProject extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {map(this.props.projects, (project, dkey) => (
          <Col xl="4" sm="6" key={"__projectcd_" + dkey}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  <div className="avatar-md me-4">
                    <span className="avatar-title rounded-circle bg-light text-danger font-size-16">
                      <img src={companies[project.img]} alt="" height="30" />
                    </span>
                  </div>

                  <div className="flex-grow-1 overflow-hidden">
                    <h5 className="text-truncate font-size-15">
                      <Link
                        to={`/projects-overview/${project.id}`}
                        className="text-dark"
                      >
                        {project.name}
                      </Link>
                    </h5>
                    <p className="text-muted mb-4">{project.description}</p>

                    <div className="avatar-group">
                      {project.team.map((team, secondkey) =>
                        !team.img || team.img !== "Null" ? (
                          <React.Fragment key={"_teamaa__" + secondkey}>
                            <div className="avatar-group-item">
                              <Link
                                to="#"
                                className="d-inline-block"
                                id={"member" + team.id}
                                key={"_team_" + secondkey}
                              >
                                <img
                                  src={images[team.img]}
                                  className="rounded-circle avatar-xs"
                                  alt=""
                                />
                              </Link>
                            </div>
                          </React.Fragment>
                        ) : (
                          <React.Fragment key={"__teama_" + secondkey}>
                            <div className="avatar-group-item">
                              <Link
                                to="#"
                                className="d-inline-block"
                                id={"member" + team.id}
                              >
                                <div className="avatar-xs">
                                  <span
                                    className={
                                      "avatar-title rounded-circle bg-" +
                                      team.color +
                                      " text-white font-size-16"
                                    }
                                  >
                                    {team.name}
                                  </span>
                                </div>
                              </Link>
                            </div>
                          </React.Fragment>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardBody>
              <div className="px-4 py-3 border-top">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-3">
                    <Badge
                      color={project.color}
                      className={"bg-" + project.color}
                    >
                      {project.status}
                    </Badge>
                  </li>{" "}
                  <li className="list-inline-item me-3" id="dueDate">
                    <i className="bx bx-calendar me-1" /> {project.dueDate}
                  </li>{" "}
                  <li className="list-inline-item me-3" id="comments">
                    <i className="bx bx-comment-dots me-1" />{" "}
                    {project.commentsCount}
                  </li>
                </ul>
              </div>
            </Card>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

CardProject.propTypes = {
  projects: PropTypes.array,
};

export default CardProject;
