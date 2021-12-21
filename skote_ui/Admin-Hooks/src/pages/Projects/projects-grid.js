import React, { useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Cards
import CardProject from "./card-project";

import { getProjects as onGetProjects } from "store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

const ProjectsGrid = props => {
  const dispatch = useDispatch();

  const { projects } = useSelector(state => ({
    projects: state.projects.projects,
  }));

  const [page, setPage] = useState(1);
  const [totalPage] = useState(5);

  useEffect(() => {
    dispatch(onGetProjects());
  }, [dispatch]);

  const handlePageClick = page => {
    setPage(page);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Projects Grid | Skote - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Projects" breadcrumbItem="Projects Grid" />

          <Row>
            {/* Import Cards */}
            <CardProject projects={projects} />
          </Row>

          <Row>
            <Col lg="12">
              <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                <PaginationItem disabled={page === 1}>
                  <PaginationLink
                    previous
                    href="#"
                    onClick={() => handlePageClick(page - 1)}
                  />
                </PaginationItem>
                {map(Array(totalPage), (item, i) => (
                  <PaginationItem active={i + 1 === page} key={i}>
                    <PaginationLink
                      onClick={() => handlePageClick(i + 1)}
                      href="#"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem disabled={page === totalPage}>
                  <PaginationLink
                    next
                    href="#"
                    onClick={() => handlePageClick(page + 1)}
                  />
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ProjectsGrid);
