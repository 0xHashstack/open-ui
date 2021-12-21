import React from "react";
import PropTypes from "prop-types";

import Board from "@lourenci/react-kanban";
import { Row, Col } from "reactstrap";
import CardTaskBox from "./card-task-box";
import RenderCardTitle from "./render-card-title";

const UncontrolledBoard = props => {
  const content = props.board
  return (
    <React.Fragment>
      <Row className="mb-4">
        <Col>
          <Board
            initialBoard={content}
            renderColumnHeader={({ title }) => (
              <RenderCardTitle title={title} />
            )}
            renderCard={(data, { dragging }) => (
              <CardTaskBox data={data} dragging={dragging}>
                {data}
              </CardTaskBox>
            )}
            onNewCardConfirm={draftCard => ({
              id: new Date().getTime(),
              ...draftCard,
            })}
          />
        </Col>
      </Row>
    </React.Fragment>
  )
}

UncontrolledBoard.propTypes = {
  board: PropTypes.any,
}

export default UncontrolledBoard
