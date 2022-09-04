import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LikeAndComment from "./LikeAndComment";
import PostCardExtended from "./PostCardExtended";

export default function PostsWall({ posts }) {
  return (
    <>
      <nav className="navbar navbar-light justify-content-end px-2">
        <Link to={`/posts/new`} className="btn btn-primary">
          Создать пост
        </Link>
      </nav>
      {posts &&
        posts.map((item) => (
          <Link to={`/posts/${item.id}`} key={item.id} className="tdnone">
            <PostCardExtended post={item}>
              <p className="card-text text-dark">{item.content}</p>
              <LikeAndComment />
            </PostCardExtended>
          </Link>
        ))}
    </>
  );
}

PostsWall.defaultProps = {
  posts: [],
};

PostsWall.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.number.isRequired,
    }).isRequired
  ),
};
