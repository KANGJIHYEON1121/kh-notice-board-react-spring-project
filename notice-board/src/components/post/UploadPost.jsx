import React from "react";
import {
  UploadContainer,
  UploadLeft,
  UploadRight,
  UploadImage,
  UploadLabel,
  UploadTextarea,
  UploadButton,
} from "./UploadPostStyle";

const UploadPost = () => {
  return (
    <UploadContainer>
      <UploadLeft>
        <UploadLabel htmlFor="imageUpload">게시글 사진</UploadLabel>
        <UploadImage id="imageUpload" type="file" accept="image/*" />
        <UploadTextarea placeholder="게시글 내용을 입력하세요" readOnly />
        <UploadButton>등록</UploadButton>
      </UploadLeft>
    </UploadContainer>
  );
};

export default UploadPost;
