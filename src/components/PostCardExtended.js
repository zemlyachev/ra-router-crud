import React from "react";
import PostCard from "./PostCard";
import LikeAndComment from "./LikeAndComment";
import PropTypes from "prop-types";

export default function PostCardExtended(param) {
  return (
    <PostCard post={param.post}>
      <p className="card-text text-dark">{param.post && param.post.content}</p>
      <LikeAndComment />
    </PostCard>
  );
}

PostCardExtended.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
  }).isRequired,
};
