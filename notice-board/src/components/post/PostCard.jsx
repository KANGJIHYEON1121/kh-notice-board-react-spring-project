import React, { useEffect, useState } from "react";
import {
  CardStyle,
  ContentBox,
  Content,
  LikeBox,
  PostImg,
  Profile,
  ProfileContainer,
  ProfileImg,
  SettingBtn,
  NickName,
} from "./PostCardStyle";
import { getAllList } from "../../api/postAPI";
import { useNavigate } from "react-router-dom";
import { API_SERVER_HOST } from "../../api/API_SERVER_HOST";

const host = API_SERVER_HOST;

const PostCard = ({ width }) => {
  const [posts, setPosts] = useState([]); // 배열로 초기화
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const clickLike = () => {
    setLike(!like);
  };

  useEffect(() => {
    getAllList().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <CardStyle key={index} width={width}>
          <ProfileContainer>
            <Profile onClick={() => navigate(`/post/mylist/${post.writer}`)}>
              <ProfileImg
                src="https://i.pinimg.com/236x/cb/77/49/cb7749287ee7e549597348e50f81afbe.jpg"
                alt="프로필 사진"
              />
              <NickName>
                {post.writer} <span>{post.dueDate}</span>
              </NickName>
            </Profile>
            <SettingBtn onClick={() => navigate(`/modify/${post.pno}`)}>
              ...
            </SettingBtn>
          </ProfileContainer>

          <div>
            <PostImg
              src={`${host}/api/post/view/s_${post.uploadPostImage[0]}`}
              onClick={() => navigate(`/detail/${post.pno}`)}
              alt="게시물 사진"
            />
          </div>

          <ContentBox>
            <Content onClick={() => navigate(`/detail/${post.pno}`)}>
              {post.content}
            </Content>
            <LikeBox onClick={clickLike}>
              {like ? "♥︎" : "♡"} <span>{post.likeCount}</span>
            </LikeBox>
          </ContentBox>
        </CardStyle>
      ))}
    </>
  );
};

export default PostCard;
