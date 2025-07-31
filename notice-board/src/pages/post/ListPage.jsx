import React, { useEffect, useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import PostListCard from "../../components/post/PostListCard";
import { getList } from "../../api/postAPI";
import PostListPageButton from "../../components/post/PostListPageButton";
import { userID } from "../../api/API_SERVER_HOST";
import { useParams } from "react-router-dom";

const initState = {
  ptoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const ListPage = () => {
  const { page, size } = useCustomMove();
  const { writer } = useParams();
  const [serverData, setServerData] = useState(initState);
  const [lastPageInfo, setLastPageInfo] = useState({
    page: null,
    size: null,
    id: null,
  });
  const { moveToList } = useCustomMove();

  useEffect(() => {
    if (
      lastPageInfo.page !== page ||
      lastPageInfo.size !== size ||
      lastPageInfo.id !== writer
    ) {
      getList({ page, size, writer }).then((data) => {
        console.log(data);
        setServerData(data);
        setLastPageInfo({ page, size, writer }); // id도 기억하도록 변경
      });
    }
  }, [page, size, writer]);

  return (
    <div style={wrap}>
      <div style={container}>
        <PostListCard
          width={"300px"}
          serverData={serverData}
          moveToList={moveToList}
        />
      </div>
      <PostListPageButton serverData={serverData} moveToList={moveToList} />
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
