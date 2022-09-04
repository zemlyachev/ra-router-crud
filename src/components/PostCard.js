import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/ru";

function PostCard(props) {
  const { post } = props;

  return (
    <div className="card m-2">
      <div className="row pb-3">
        <div className="col-2">
          <img
            className="rounded-circle float-left m-1"
            src="/avatar.png"
            alt="avatar"
            width="50px"
          />
        </div>
        <div className="col-10">
          <div className="row">
            <h5 className="card-title text-dark">Бетмен</h5>
          </div>
          <div className="row">
            <p className="card-text">
              <small className="text-muted">
                {post &&
                  post.created &&
                  moment(post.created).locale("ru").fromNow()}
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="card-body mt-0 pt-0 pb-1">{props.children}</div>
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.number,
  }).isRequired,
};

export default PostCard;
