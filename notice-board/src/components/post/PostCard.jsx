import React from "react";
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

const PostCard = ({ width }) => {
  return (
    <>
      <CardStyle width={width}>
        <ProfileContainer>
          <Profile>
            <ProfileImg
              src="https://i.pinimg.com/236x/cb/77/49/cb7749287ee7e549597348e50f81afbe.jpg"
              alt="프로필 사진"
            />
            <NickName>
              닉네임 <span>날짜</span>
            </NickName>
          </Profile>
          <SettingBtn>...</SettingBtn>
        </ProfileContainer>

        <div>
          <PostImg
            src="https://i.namu.wiki/i/YVm0x8WHfLBtSyejD01_GTV1ITfWOJ-XODZzVTQPr386JsiBaz6Ucl1tKKxZmHiYStf_sXZBmK7AEXkEA18Tsg.webp"
            alt="게시물 사진"
          />
        </div>

        <ContentBox>
          <Content>
            게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시
            글게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시
            글게시 글 게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시
            글게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시 글게시
            글게시 글게시 글게시 글
          </Content>
          <LikeBox>
            ♡ ♥︎ <span>14</span>
          </LikeBox>
        </ContentBox>
      </CardStyle>
    </>
  );
};

export default PostCard;
