import React, { useContext, useState, useEffect, createContext } from "react";

const PostsContext = createContext();

export function PostsContextProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [toggleReload, setToggleReload] = useState(false);

  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then((response) => response.json())
      .then((result) => {
        setPosts([...result]);
      });
  }, [toggleReload]);

  function reload() {
    setToggleReload((oldToggle) => !oldToggle);
  }

  const deletePost = (id) => {
    console.log("del from context", id);
    fetch(`${process.env.REACT_APP_POSTS_URL}/${id}`, {
      method: "DELETE",
    }).then(reload());
  };

  function createOrUpdatePost(data) {
    fetch(process.env.REACT_APP_POSTS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(reload());
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        deletePost,
        createOrUpdatePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
