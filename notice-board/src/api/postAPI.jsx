import axios from "axios";
import { API_SERVER_HOST } from "./API_SERVER_HOST";

const prefix = `${API_SERVER_HOST}/api/post`;

export const getOne = async (pno) => {
  const res = await axios.get(`${prefix}/${pno}`);
  return res.data;
};

export const getList = async ({ page, size, writer }) => {
  const params = new URLSearchParams({ page, size });

  const res = writer
    ? await axios.get(`${prefix}/mylist/${writer}?${params}`)
    : await axios.get(`${prefix}/list?${params}`);

  return res.data;
};

export const postAdd = async (postObj) => {
  const res = await axios.post(`${prefix}/`, postObj);
  return res.data;
};

export const getAllList = async () => {
  const res = await axios.get(`${prefix}/all`);
  return res.data;
};

export const deleteOne = async (pno) => {
  const res = await axios.delete(`${prefix}/${pno}`);
  return res.data;
};

export const putOne = async (pno, postObj) => {
  const res = await axios.put(`${prefix}/${pno}`, postObj, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};
