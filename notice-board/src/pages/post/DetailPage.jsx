import React, { useCallback } from "react";
import DetailPost from "../../components/detail_post/DetailPost";
import { useParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const DetailPage = () => {
  const { pno } = useParams();
  const { moveToList, moveToModify } = useCustomMove();

  return (
    <>
      <DetailPost
        pno={pno}
        moveToList={moveToList}
        moveToModify={moveToModify}
      />
    </>
  );
};

export default DetailPage;
