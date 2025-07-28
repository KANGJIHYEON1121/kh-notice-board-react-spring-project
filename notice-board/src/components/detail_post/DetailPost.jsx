import React from "react";
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

const DetailPost = () => {
  return (
    <DetailPostContainer>
      <PostBox>
        <LeftSection>
          <img
            src="https://i.namu.wiki/i/YVm0x8WHfLBtSyejD01_GTV1ITfWOJ-XODZzVTQPr386JsiBaz6Ucl1tKKxZmHiYStf_sXZBmK7AEXkEA18Tsg.webp"
            alt="게시물 사진"
          />
          <div>
            <ProfileBox>
              <Profile>
                <img src="" alt="나의 프로필 사진" />
                <p>
                  닉네임 <span>날짜</span>
                </p>
              </Profile>
              <ActionBox>
                <p>수정</p>
                <p>
                  ♡ ♥︎ <span>14</span>
                </p>
              </ActionBox>
            </ProfileBox>

            <Comment>
              <CommentList>
                <div>
                  <img
                    src="https://i.pinimg.com/236x/cb/77/49/cb7749287ee7e549597348e50f81afbe.jpg"
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
          <p>
            게시글게시시글게시글게시글게시글게시글게시글게시글게시글게시글게시글게시글
          </p>

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
