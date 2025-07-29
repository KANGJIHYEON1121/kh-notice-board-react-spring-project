import { useNavigate } from "react-router-dom";
import {
  CardStyle,
  PostImg,
  Profile,
  ProfileContainer,
  ProfileImg,
  SettingBtn,
  NickName,
} from "./PostCardStyle";
import { API_SERVER_HOST } from "../../api/API_SERVER_HOST";

const host = API_SERVER_HOST;

const PostListCard = ({ width, serverData }) => {
  const navigate = useNavigate();

  return (
    <>
      {serverData.ptoList.map((posts) => {
        return (
          <CardStyle
            key={posts.pno}
            width={width}
            onClick={() => navigate(`/detail/${posts.pno}`)}
          >
            {console.log(posts)}
            <ProfileContainer>
              <Profile>
                <ProfileImg alt="프로필 사진" />
                <NickName>
                  {posts.writer} + {posts.pno} <span>{posts.dueDate}</span>
                </NickName>
              </Profile>
              <SettingBtn>...</SettingBtn>
            </ProfileContainer>

            <div>
              {posts.uploadPostImage && posts.uploadPostImage.length > 0 ? (
                <PostImg
                  src={`${host}/api/post/view/s_${posts.uploadPostImage[0]}`}
                />
              ) : (
                <PostImg src={`${host}/api/post/view/default.jpg`} />
              )}
            </div>
          </CardStyle>
        );
      })}
    </>
  );
};

export default PostListCard;
