import React, { useState } from "react";
import useCustomMove from "../../hooks/useCustomMove";
import {
  UploadContainer,
  UploadLeft,
  UploadRight,
  UploadImage,
  UploadLabel,
  UploadTextarea,
  UploadButton,
} from "./UploadPostStyle";
import { postAdd } from "../../api/postAPI";
import { userID } from "../../api/API_SERVER_HOST";

const initState = {
  content: "",
  writer: userID,
  likeCount: 0,
  files: [],
  postImage: null,
  dueDate: new Date().toISOString().split("T")[0],
};

const UploadPost = () => {
  const [post, setPost] = useState({ ...initState });
  const [result, setResult] = useState(null);
  const { moveToList } = useCustomMove();

  const handleChangePost = (e) => {
    const { name, value, files } = e.target;

    if (name === "postImage") {
      setPost({ ...post, postImage: files }); // FileList 객체를 저장
    } else {
      setPost({ ...post, [name]: value });
    }
  };

  const handleClickAdd = () => {
    const formData = new FormData();
    formData.append("content", post.content);
    formData.append("writer", post.writer);
    formData.append("likeCount", post.likeCount);
    formData.append("dueDate", post.dueDate);

    if (post.postImage && post.postImage.length > 0) {
      for (let i = 0; i < post.postImage.length; i++) {
        formData.append("postImage", post.postImage[i]);
      }
    }

    postAdd(formData)
      .then((result) => {
        console.log(result);
        setResult(result.TNO);
        setPost({ ...initState });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <UploadContainer>
      <UploadLeft>
        <UploadLabel htmlFor="imageUpload">게시글 사진</UploadLabel>
        <UploadImage
          id="imageUpload"
          type="file"
          accept="image/*"
          name="postImage"
          onChange={handleChangePost}
          multiple
        />
        <UploadTextarea
          placeholder="게시글 내용을 입력하세요"
          name="content"
          value={post.content}
          onChange={handleChangePost}
        />
        <UploadButton onClick={handleClickAdd}>등록</UploadButton>
      </UploadLeft>
    </UploadContainer>
  );
};

export default UploadPost;
