import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import ClosableHeader from "./ClosableHeader";
import { usePosts } from "../contexts/PostsContext";
import PropTypes from "prop-types";

export default function PostCreateOrUpdate(props) {
  const [text, setText] = useState(props.post.content);
  const { createOrUpdatePost } = usePosts();
  const navigate = useNavigate();
  const navTo = props.post.id > 0 ? `/posts/${props.post.id}` : "/";

  function handleSubmit(e) {
    e.preventDefault();
    createOrUpdatePost({ id: props.post.id, content: text });
    props.onClose ? props.onClose() : navigate(navTo);
  }

  function handleChange(event) {
    const { value } = event.target;
    setText(value);
  }

  return (
    <>
      <ClosableHeader to={navTo} onClick={props.onClose}>
        {props.header}
      </ClosableHeader>
      <PostCard post={props.post}>
        <form>
          <div className="row">
            <textarea
              onChange={handleChange}
              value={text}
              name="text"
              required
            />
          </div>
          <div className="row">
            <button
              className={`btn btn-primary ${text ? "" : "disabled"}`}
              onClick={handleSubmit}
            >
              Опубликовать
            </button>
          </div>
        </form>
      </PostCard>
    </>
  );
}

PostCreateOrUpdate.defaultProps = {
  post: {
    id: 0,
    content: "",
  },
  header: "Публикация",
};

PostCreateOrUpdate.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
  }),
  onClose: PropTypes.func,
  header: PropTypes.string,
};
