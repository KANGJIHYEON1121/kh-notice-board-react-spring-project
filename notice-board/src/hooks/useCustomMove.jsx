import { useMemo, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [queryParams] = useSearchParams();
  const page = useMemo(() => getNum(queryParams.get("page"), 1), [queryParams]);
  const size = useMemo(() => getNum(queryParams.get("size"), 6), [queryParams]);
  const queryDefault = createSearchParams({ page, size }).toString();
  const { writer } = useParams(); // 추가: 현재 경로의 writer 파라미터

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    // writer 값이 있다면 해당 경로로, 없다면 기본 목록
    const targetPath = writer ? `../post/list/${writer}` : `../post/list`;

    navigate({
      pathname: targetPath,
      search: queryStr,
    });
    setRefresh(!refresh); //추가
  };

  const moveToModify = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../post/modify/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  const moveToRead = (num) => {
    navigate({
      pathname: `../post/detail/${num}`,
      search: queryDefault, //수정시에 기존의 쿼리 스트링 유지를 위해
    });
  };

  return { moveToList, moveToModify, moveToRead, page, size }; //moveToModify 추가
};

export default useCustomMove;
