import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ClosableHeader from "./ClosableHeader";
import PostCardExtended from "./PostCardExtended";

function PostView(props) {
  const { post, onEdit, onDelete } = props;
  return (
    <>
      <ClosableHeader />
      <PostCardExtended post={post} />
      <div className="d-flex justify-content-end">
        <button className="btn btn-warning m-2" onClick={onEdit}>
          Изменить
        </button>
        <button
          className="btn btn-danger m-2 ms-0"
          onClick={() => {
            onDelete(post.id);
          }}
        >
          Удалить
        </button>
      </div>
    </>
  );
}

PostView.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostView;
