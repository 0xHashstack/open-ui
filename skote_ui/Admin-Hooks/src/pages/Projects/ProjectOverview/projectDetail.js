import React from "react";
import PropTypes from "prop-types";
import { map, get } from "lodash";
import { Card, CardBody, Col, Row } from "reactstrap";
import img1 from "../../../assets/images/companies/img-1.png";

const ProjectDetail = ({ project }) => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex">
          <img src={img1} alt="" className="avatar-sm me-4" />

          <div className="flex-grow-1 overflow-hidden">
            <h5 className="text-truncate font-size-15">{project.name}</h5>
            <p className="text-muted">{project.description}</p>
          </div>
        </div>

        <h5 className="font-size-15 mt-4">Project Details :</h5>

        <p className="text-muted">
          {get(project, "projectDetails.description")}
        </p>

        <div className="text-muted mt-4">
          {project.projectDetails &&
            map(project.projectDetails.points, (point, index) => (
              <p key={index}>
                <i className="mdi mdi-chevron-right text-primary me-1" />{" "}
                {point}
              </p>
            ))}
        </div>

        <Row className="task-dates">
          <Col sm="4" xs="6">
            <div className="mt-4">
              <h5 className="font-size-14">
                <i className="bx bx-calendar me-1 text-primary" /> Start Date
              </h5>
              <p className="text-muted mb-0">{project.startDate}</p>
            </div>
          </Col>

          <Col sm="4" xs="6">
            <div className="mt-4">
              <h5 className="font-size-14">
                <i className="bx bx-calendar-check me-1 text-primary" /> Due
                Date
              </h5>
              <p className="text-muted mb-0">{project.dueDate}</p>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

ProjectDetail.propTypes = {
  project: PropTypes.object,
};

export default ProjectDetail;
