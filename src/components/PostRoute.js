import React, { Fragment, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClosableHeader from "./ClosableHeader";
import { usePosts } from "../contexts/PostsContext";
import PostCreateOrUpdate from "./PostCreateOrUpdate";
import PostView from "./PosrView";

export default function PostRoute() {
  const [edit, setEdit] = useState(false);
  const { posts, deletePost } = usePosts();
  const navigate = useNavigate();
  const { pId } = useParams();
  const post = posts.find((item) => Number(item.id) === Number(pId));
  const doCreateNew = pId === "new";

  function handelDelete(id) {
    deletePost(id);
    navigate("/");
  }

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };

  function NotFound() {
    return <ClosableHeader>Публикация не найдена</ClosableHeader>;
  }

  return (
    <>
      {doCreateNew ? (
        <PostCreateOrUpdate />
      ) : post && edit ? (
        <PostCreateOrUpdate
          post={post}
          onClose={handleCloseEdit}
          header="Редактировать публикацию"
        />
      ) : post ? (
        <PostView post={post} onEdit={handleEdit} onDelete={handelDelete} />
      ) : (
        <NotFound />
      )}
    </>
  );
}
