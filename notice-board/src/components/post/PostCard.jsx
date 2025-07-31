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
import { getLikeStatus, toggleLike, getLikeCount } from "../../api/likeAPI";
import { userID } from "../../api/API_SERVER_HOST";

const host = API_SERVER_HOST;

const PostCard = ({ width }) => {
  const [posts, setPosts] = useState([]); // 배열로 초기화
  const [likeStates, setLikeStates] = useState({});
  const [likeCounts, setLikeCounts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAllList().then(async (data) => {
      setPosts(data);

      // 좋아요 상태와 카운트 동기화
      const likeStatusPromises = data.map((post) =>
        getLikeStatus(post.pno, userID)
      );
      const likeCountPromises = data.map((post) => getLikeCount(post.pno));

      const likeStatuses = await Promise.all(likeStatusPromises);
      const likeCounts = await Promise.all(likeCountPromises);

      const likeStateMap = {};
      const likeCountMap = {};

      data.forEach((post, idx) => {
        likeStateMap[post.pno] = likeStatuses[idx];
        likeCountMap[post.pno] = likeCounts[idx];
      });

      setLikeStates(likeStateMap);
      setLikeCounts(likeCountMap);
    });
  }, []);

  const handleClickLike = async (pno) => {
    const liked = await toggleLike(pno, userID);
    const newCount = await getLikeCount(pno);

    setLikeStates((prev) => ({ ...prev, [pno]: liked }));
    setLikeCounts((prev) => ({ ...prev, [pno]: newCount }));
  };

  return (
    <>
      {posts.map((post, index) => (
        <CardStyle key={index} width={width}>
          <ProfileContainer>
            <Profile onClick={() => navigate(`/post/list/${post.writer}`)}>
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
            <LikeBox onClick={() => handleClickLike(post.pno)}>
              {likeStates[post.pno] ? "♥︎" : "♡"}{" "}
              <span>{likeCounts[post.pno]}</span>
            </LikeBox>
          </ContentBox>
        </CardStyle>
      ))}
    </>
  );
};

export default PostCard;
