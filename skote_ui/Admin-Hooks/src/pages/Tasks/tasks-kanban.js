import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MetaTags from "react-meta-tags";
import { Container } from "reactstrap";
import { withRouter } from "react-router-dom";
import { isEmpty, map } from "lodash";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

//Import Task Cards
import UncontrolledBoard from "./UncontrolledBoard";

import "assets/scss/tasks.scss";
import { getTasks as onGetTasks } from "store/tasks/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

const TasksKanban = props => {
  const dispatch = useDispatch();

  const { tasks } = useSelector(state => ({
    tasks: state.tasks.tasks,
  }));

  useEffect(() => {
    dispatch(onGetTasks());
  }, [dispatch]);

  const data = map(tasks, task => ({ ...task, cards: task.tasks }));
  data.length = Math.min(data.length, 3);

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Kanban Board | Skote - React Admin & Dashboard Template</title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Tasks" breadcrumbItem="Kanban Board" />
          {!isEmpty(data) && (
            <UncontrolledBoard board={{ columns: data }} content={tasks} />
          )}
        </Container>
      </div>
    </React.Fragment>
  );
};

export default withRouter(TasksKanban);
