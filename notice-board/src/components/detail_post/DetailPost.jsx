import React, { useEffect, useRef, useState } from "react";
import {
  deleteComent,
  getComents,
  postComent,
  putComent,
} from "../../api/comentAPI";
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
  CommentUser,
  User,
  ActionBtn,
  Content,
} from "./DetailPostStyle";
import { getOne } from "../../api/postAPI";
import { API_SERVER_HOST } from "../../api/API_SERVER_HOST";
import { useNavigate } from "react-router-dom";
import { getLikeCount, getLikeStatus, toggleLike } from "../../api/likeAPI";
import { userID } from "../../api/API_SERVER_HOST";
import EventCard from "../EventCard";

const initState = {
  pno: 0,
  content: "",
  writer: "",
  likeCount: 0,
  postImage: "",
  dueDate: null,
};

const host = API_SERVER_HOST;
const imgHost = API_SERVER_HOST + "/api/post/view/s_";

const DetailPost = ({ pno }) => {
  const [post, setPost] = useState(initState);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [coments, setComents] = useState([]);
  const [comentText, setComentText] = useState("");
  const [editCno, setEditCno] = useState(null); // 현재 수정 중인 댓글 ID
  const [editText, setEditText] = useState(""); // 수정 중인 텍스트
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    getOne(pno).then((data) => {
      setPost(data);
    });

    getComents(pno).then((commentList) => {
      setComents(commentList);
    });
  }, [pno]);

  // useEffect 추가 (editCno가 변경될 때마다 포커스)
  useEffect(() => {
    if (editCno !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editCno]);
  const handleRegisterComment = () => {
    const newComment = {
      postPno: pno,
      writer: userID, // 나중에 로그인 정보에서 가져올 예정
      content: comentText,
    };

    postComent(newComment)
      .then((cno) => {
        // 등록 후 목록 갱신
        return getComents(pno);
      })
      .then((comentList) => {
        setComents(comentList);
        setComentText(""); // 입력창 비우기
      });
  };

  useEffect(() => {
    getLikeStatus(pno, userID).then(setLike);
    getLikeCount(pno).then(setLikeCount);
  }, [pno]);

  const handleToggleLike = () => {
    toggleLike(pno, userID)
      .then((liked) => {
        setLike(liked);
        return getLikeCount(pno);
      })
      .then(setLikeCount);
  };

  const handleUpdateComent = (cno) => {
    putComent(cno, editText)
      .then(() => {
        return getComents(pno);
      })
      .then((comentList) => {
        setComents(comentList);
        setEditCno(null);
      });
  };

  const handleDeleteComent = (cno) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    deleteComent(cno)
      .then(() => {
        return getComents(pno); // 삭제 후 최신 목록 다시 불러오기
      })
      .then((comentList) => {
        setComents(comentList);
      });
  };

  return (
    <DetailPostContainer>
      <PostBox>
        <LeftSection>
          {post.uploadPostImage && post.uploadPostImage.length > 0 && (
            <div>
              <EventCard
                cardWidth={160}
                page={post.uploadPostImage.length}
                image={post.uploadPostImage.map((img) => ({
                  imgSrc: `${imgHost}${img}`,
                }))}
              />
              {/* <img
                src={
                  post.uploadPostImage && post.uploadPostImage.length > 0
                    ? `${host}/api/post/view/s_${post.uploadPostImage[0]}`
                    : `${host}/api/post/view/default.jpg`
                }
                alt="게시물 사진"
              /> */}
            </div>
          )}
          <div style={{ borderLeft: "2px solid #f0f0f0" }}>
            <ProfileBox>
              <Profile>
                <img src="" alt="나의 프로필 사진" />
                <p>
                  {post.writer} <span>{post.dueDate}</span>
                </p>
              </Profile>
              <ActionBox>
                <h4 onClick={() => navigate(`/modify/${post.pno}`)}>수정</h4>
                <div>
                  <p onClick={handleToggleLike}>{like ? "♥︎" : "♡"}</p>
                  <span>{likeCount}</span>
                </div>
              </ActionBox>
            </ProfileBox>

            <Comment>
              <CommentList>
                {coments.map((coment) => (
                  <div key={coment.cno}>
                    <CommentUser>
                      <User>
                        <img src="/default-profile.jpg" alt="댓글 유저 사진" />
                        <p>
                          {coment.writer} <span>{coment.regDate}</span>{" "}
                        </p>
                      </User>

                      {editCno === coment.cno ? (
                        <>
                          <ActionBtn>
                            <span
                              onClick={() => handleUpdateComent(coment.cno)}
                            >
                              저장
                            </span>
                            <span onClick={() => setEditCno(null)}>취소</span>
                          </ActionBtn>
                        </>
                      ) : (
                        <>
                          <ActionBtn>
                            <span
                              onClick={() => {
                                setEditCno(coment.cno);
                                setEditText(coment.content);
                              }}
                            >
                              수정
                            </span>
                            <span
                              onClick={() => handleDeleteComent(coment.cno)}
                            >
                              삭제
                            </span>
                          </ActionBtn>
                        </>
                      )}
                    </CommentUser>

                    {editCno === coment.cno ? (
                      <>
                        <Content>
                          <input
                            type="text"
                            ref={inputRef}
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            style={{ width: "100%" }}
                          />
                        </Content>
                      </>
                    ) : (
                      <>
                        <Content>
                          <div>{coment.content}</div>
                        </Content>
                      </>
                    )}
                  </div>
                ))}
              </CommentList>
            </Comment>
          </div>
        </LeftSection>

        <RightSection>
          <p>{post.content}</p>

          <CommentInput>
            <textarea
              type="text"
              placeholder="댓글 입력"
              value={comentText}
              onChange={(e) => setComentText(e.target.value)}
            />
            <button onClick={handleRegisterComment}>등록</button>
          </CommentInput>
        </RightSection>
      </PostBox>
    </DetailPostContainer>
  );
};

export default DetailPost;
