import axios from "axios";
import { API_SERVER_HOST } from "./API_SERVER_HOST";

const host = `${API_SERVER_HOST}/api/comments`;

export const getComents = async (pno) => {
  const res = await fetch(`${host}/${pno}`);
  return await res.json();
};

export const postComent = async (comentObj) => {
  const res = await fetch(`${host}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comentObj),
  });
  return await res.json(); // cno 반환됨
};

export const putComent = async (cno, content) => {
  const res = await fetch(`${host}/${cno}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content }),
  });
  return await res.text(); // "수정 완료"
};

export const deleteComent = async (cno) => {
  const res = await fetch(`${host}/${cno}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};
