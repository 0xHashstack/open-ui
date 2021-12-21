import React, { Component } from "react"
import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Col,
  Container,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap"
import { withRouter } from "react-router-dom"
import { map } from "lodash"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//Import Cards
import CardProject from "./card-project"

import { getProjects } from "store/actions"

class ProjectsGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      totalPage: 5, //replace this with total pages of data
    }
  }

  componentDidMount() {
    const { onGetProjects } = this.props
    onGetProjects()
  }

  handlePageClick = page => {
    this.setState({ page })
  }

  render() {
    const { projects } = this.props
    const { page, totalPage } = this.state

    return (
      <React.Fragment>
        <div className="page-content">
          <MetaTags>
            <title>Projects Grid | Skote - React Admin & Dashboard Template</title>
          </MetaTags>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="Projects" breadcrumbItem="Projects Grid" />

            <Row>
              {/* Import Cards */}
              <CardProject projects={projects} key={"cardproject"} />
            </Row>

            <Row>
              <Col lg="12">
                <Pagination className="pagination pagination-rounded justify-content-center mt-2 mb-5">
                  <PaginationItem disabled={page === 1}>
                    <PaginationLink
                      previous
                      href="#"
                      onClick={() => this.handlePageClick(page - 1)}
                    />
                  </PaginationItem>
                  {map(Array(totalPage), (item, i) => (
                    <PaginationItem active={i + 1 === page} key={'_k'+i}>
                      <PaginationLink
                        onClick={() => this.handlePageClick(i + 1)}
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
                      onClick={() => this.handlePageClick(page + 1)}
                    />
                  </PaginationItem>
                </Pagination>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

ProjectsGrid.propTypes = {
  projects: PropTypes.array,
  onGetProjects: PropTypes.func,
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.projects,
})

const mapDispatchToProps = dispatch => ({
  onGetProjects: () => dispatch(getProjects()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProjectsGrid))
