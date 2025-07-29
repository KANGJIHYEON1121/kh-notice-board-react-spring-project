import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteOne, getOne, putOne } from "../../api/postAPI";
import {
  ModifyWrapper,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  Button,
  PrevContainer,
  PrevImgBox,
} from "./ModifyComponentStyle";
import { API_SERVER_HOST } from "../../api/API_SERVER_HOST";

const ModifyComponent = ({ pno }) => {
  //post 방식 입력완료후 결과값을 저장 상태객체
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  const [post, setPost] = useState({
    content: "",
    postImage: [],
  });

  useEffect(() => {
    getOne(pno).then((data) => {
      setPost(data);
    });
  }, [pno]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setPost((prev) => ({
        ...prev,
        postImage: [...files],
      }));
    } else {
      setPost((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleEdit = async () => {
    const formData = new FormData();
    formData.append("content", post.content);

    // ✅ 유지할 기존 이미지 목록만 전달
    if (post.uploadPostImage && Array.isArray(post.uploadPostImage)) {
      post.uploadPostImage.forEach((fileName) =>
        formData.append("uploadPostImage", fileName)
      );
    }

    // ✅ 새 이미지
    if (post.postImage && Array.isArray(post.postImage)) {
      post.postImage.forEach((file) => {
        formData.append("postImage", file);
      });
    }

    const result = await putOne(pno, formData);
    setResult(result.RESULT);
  };

  const handleDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteOne(pno).then((data) => {
        console.log(data);
        setResult(data.RESULT);
      });
    }
  };

  return (
    <ModifyWrapper>
      <PrevContainer>
        <Label>기존 이미지</Label>
        <div>
          {post.uploadPostImage &&
            post.uploadPostImage.map((fileName, idx) => (
              <PrevImgBox key={idx}>
                <img
                  src={`${API_SERVER_HOST}/api/post/view/s_${fileName}`}
                  alt="기존 이미지"
                  width="80"
                />
                <button
                  type="button"
                  onClick={() => {
                    setPost((prev) => ({
                      ...prev,
                      uploadPostImage: prev.uploadPostImage.filter(
                        (name) => name !== fileName
                      ),
                    }));
                  }}
                >
                  제거
                </button>
              </PrevImgBox>
            ))}
        </div>
      </PrevContainer>

      <Title>게시글 수정</Title>
      <Form>
        <div>
          <Label>사진</Label>
          <Input type="file" name="file" onChange={handleChange} multiple />
          {post.postImage &&
            Array.isArray(post.postImage) &&
            post.postImage.map((file, idx) => (
              <p key={idx}>선택된 파일: {file.name}</p>
            ))}
        </div>
        <div>
          <Label>내용</Label>
          <TextArea
            name="content"
            value={post.content}
            onChange={handleChange}
          />
        </div>
      </Form>
      <div>
        <Button onClick={handleEdit}>수정하기</Button>
        <Button type="button" danger onClick={handleDelete}>
          삭제하기
        </Button>
      </div>
    </ModifyWrapper>
  );
};

export default ModifyComponent;
