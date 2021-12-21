import React, { Component } from "react";
import PropTypes from "prop-types";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";
import { map } from "lodash";
import images from "assets/images";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="mt-5">
          <h5>Reviews :</h5>
          {map(this.props.comments, (comment, k) => (
            <Media
              className={
                comment.id === 1 ? "border-bottom py-3" : "border-bottom py-3"
              }
              key={"__media__" + k}
            >
              {comment.img !== "Null" ? (
                <img
                  src={images[comment.img]}
                  className="avatar-xs me-3 rounded-circle"
                  alt="img"
                />
              ) : (
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary bg-soft text-primary rounded-circle font-size-16">
                    N
                  </span>
                </div>
              )}
              <Media body>
                <h5 className="mt-0 mb-1 font-size-15">{comment.name}</h5>
                <p className="text-muted">{comment.description}</p>
                <ul className="list-inline float-sm-end mb-sm-0">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="far fa-thumbs-up me-1" /> Like
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="far fa-comment-dots me-1" /> Comment
                    </Link>
                  </li>
                </ul>
                <div className="text-muted font-size-12">
                  <i className="far fa-calendar-alt text-primary me-1" />
                  {comment.date}
                </div>
                {comment.childComment
                  ? comment.childComment.map((child, key) => (
                      <Media className="mt-4" key={"_media_" + key}>
                        <img
                          src={images[child.img]}
                          className="avatar-xs me-3 rounded-circle"
                          alt="img"
                        />
                        <Media body>
                          <h5 className="mt-0 mb-1 font-size-15">
                            {child.name}
                          </h5>
                          <p className="text-muted">{child.description}</p>
                          <ul className="list-inline float-sm-end mb-sm-0">
                            <li className="list-inline-item">
                              <Link to="#">
                                <i className="far fa-thumbs-up me-1" /> Like
                              </Link>
                            </li>
                            <li className="list-inline-item">
                              <Link to="#">
                                <i className="far fa-comment-dots me-1" />{" "}
                                Comment
                              </Link>
                            </li>
                          </ul>
                          <div className="text-muted font-size-12">
                            <i className="far fa-calendar-alt text-primary me-1" />{" "}
                            {child.date}
                          </div>
                        </Media>
                      </Media>
                    ))
                  : null}
              </Media>
            </Media>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Reviews.propTypes = {
  comments: PropTypes.array,
};

export default Reviews;
