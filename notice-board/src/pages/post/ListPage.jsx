import React from "react";
import PostListCard from "../../components/post/PostListCard";

const ListPage = () => {
  return (
    <div style={wrap}>
      <div style={container}>
        <PostListCard width={"300px"} />
        <PostListCard width={"300px"} />
        <PostListCard width={"300px"} />
        <PostListCard width={"300px"} />
        <PostListCard width={"300px"} />
        <PostListCard width={"300px"} />
      </div>
    </div>
  );
};

const wrap = {
  width: "60%",
  margin: "0 auto",
};

const container = {
  width: "100%",
  margin: "0 auto",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "start",
  alignItems: "start",
  gap: "10px",
};

export default ListPage;
