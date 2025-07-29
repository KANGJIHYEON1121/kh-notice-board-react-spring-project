import React, { useEffect, useState } from "react";
import {
  DetailPostContainer,
  PostBox,
  LeftSection,
  RightSection,
  ProfileBox,
  Profile,
  ActionBox,
  CommentList,
  CommentInput,
  Comment,
} from "./DetailPostStyle";
import { getOne } from "../../api/postAPI";
import { API_SERVER_HOST } from "../../api/API_SERVER_HOST";
import { useNavigate } from "react-router-dom";

const initState = {
  pno: 0,
  content: "",
  writer: "",
  likeCount: 0,
  postImage: "",
  dueDate: null,
};

const host = API_SERVER_HOST;

const DetailPost = ({ pno }) => {
  const [post, setPost] = useState(initState);
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const clickLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    getOne(pno).then((data) => {
      console.log(data);
      setPost(data);
    });
  }, [pno]);

  return (
    <DetailPostContainer>
      <PostBox>
        <LeftSection>
          {post.uploadPostImage && post.uploadPostImage.length > 0 && (
            <div>
              <img
                src={
                  post.uploadPostImage && post.uploadPostImage.length > 0
                    ? `${host}/api/post/view/s_${post.uploadPostImage[0]}`
                    : `${host}/api/post/view/default.jpg`
                }
                alt="게시물 사진"
              />
            </div>
          )}
          <div>
            <ProfileBox>
              <Profile>
                <img src="" alt="나의 프로필 사진" />
                <p>
                  {post.writer} <span>{post.dueDate}</span>
                </p>
              </Profile>
              <ActionBox>
                <h4 onClick={() => navigate(`/modify/${post.pno}`)}>수정</h4>
                <p onClick={clickLike}>
                  {like ? "♥︎" : "♡"}
                  <span>14</span>
                </p>
              </ActionBox>
            </ProfileBox>

            <Comment>
              <CommentList>
                <div>
                  <img
                    // src={}
                    alt="댓글 유저 사진"
                  />
                  <div>
                    <p>
                      댓글 유저 아이디 <span>날짜</span>
                    </p>
                    <div>
                      댓글 내용댓글 내용댓글 내용댓글 내용댓글내용댓글내용댓글
                    </div>
                  </div>
                </div>
              </CommentList>
            </Comment>
          </div>
        </LeftSection>

        <RightSection>
          <p>{post.content}</p>

          <CommentInput>
            <textarea type="text" placeholder="댓글 입력" />
            <button>등록</button>
          </CommentInput>
        </RightSection>
      </PostBox>
    </DetailPostContainer>
  );
};

export default DetailPost;
