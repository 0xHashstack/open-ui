import React, { Component } from "react"
import PropTypes from 'prop-types';
import Board from "@lourenci/react-kanban"
import { Col, Row } from "reactstrap"
import CardTaskBox from "./card-task-box"
import RenderCardTitle from "./render-card-title"

class UncontrolledBoard extends Component {
  render() {
    const content = this.props.board
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
}

UncontrolledBoard.propTypes = {
  board: PropTypes.any
}

export default UncontrolledBoard
