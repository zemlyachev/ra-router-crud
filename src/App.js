import React from "react";
import { Routes, Route } from "react-router-dom";
import PostsWall from "./components/PostsWall";
import PostRoute from "./components/PostRoute";
import Container from "./components/Container";
import "./App.css";
import ClosableHeader from "./components/ClosableHeader";
import { usePosts } from "./contexts/PostsContext";

export default function App() {
  const { posts } = usePosts();

  return (
    <Container>
      <Routes>
        <Route path="/" element={<PostsWall posts={posts} />} />
        <Route path="/posts/:pId" element={<PostRoute />} />
        <Route
          path="*"
          element={<ClosableHeader>Страница не найдена</ClosableHeader>}
        />
      </Routes>
    </Container>
  );
}
