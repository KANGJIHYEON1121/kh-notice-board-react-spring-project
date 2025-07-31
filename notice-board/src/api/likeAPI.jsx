import axios from "axios";
import { API_SERVER_HOST } from "./API_SERVER_HOST";

const prefix = `${API_SERVER_HOST}/api/likes`;

// 좋아요 토글
export const toggleLike = async (pno, userId) => {
  const res = await axios.post(`${prefix}/${pno}?userId=${userId}`);
  return res.data;
};

// 좋아요 여부확인
export const getLikeStatus = async (pno, userId) => {
  const res = await axios.get(`${prefix}/${pno}?userId=${userId}`);
  return res.data;
};

// 좋아요 숫자 조회
export const getLikeCount = async (pno) => {
  const res = await axios.get(`${prefix}/count/${pno}`);
  return res.data;
};
