import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { Col, Container, Row } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

import { getProjectDetail as onGetProjectDetail } from "store/projects/actions";
import ProjectDetail from "./projectDetail";
import TeamMembers from "./teamMembers";
import OverviewChart from "./overviewChart";
import { options, series } from "common/data/projects";
import AttachedFiles from "./attachedFiles";
import Comments from "./comments";

//redux
import { useSelector, useDispatch } from "react-redux";

const ProjectsOverview = props => {
  const dispatch = useDispatch();

  const { projectDetail } = useSelector(state => ({
    projectDetail: state.projects.projectDetail,
  }));

  const {
    match: { params },
  } = props;

  useEffect(() => {
    if (params && params.id) {
      dispatch(onGetProjectDetail(params.id));
    } else {
      dispatch(onGetProjectDetail(0)); //remove this after full integration
    }
  }, [params, onGetProjectDetail]);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Project Overview | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Project Overview" />

          {!isEmpty(projectDetail) && (
            <>
              <Row>
                <Col lg="8">
                  <ProjectDetail project={projectDetail} />
                </Col>

                <Col lg="4">
                  <TeamMembers team={projectDetail.team} />
                </Col>
              </Row>

              <Row>
                <Col lg="4">
                  <OverviewChart options={options} series={series} />
                </Col>

                <Col lg="4">
                  <AttachedFiles files={projectDetail.files} />
                </Col>

                <Col lg="4">
                  <Comments comments={projectDetail.comments} />
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

ProjectsOverview.propTypes = {
  match: PropTypes.object,
};

export default withRouter(ProjectsOverview);
