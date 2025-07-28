import React from "react";
import {
  ProfileContainer,
  ProfileImage,
  ProfileLabel,
  ProfileInput,
} from "./ProfileStyle.js";

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage src="" alt="나의 프로필 사진" />
      <ProfileLabel htmlFor="name">이름</ProfileLabel>
      <ProfileInput type="text" id="name" readOnly />
      <ProfileLabel htmlFor="email">이메일</ProfileLabel>
      <ProfileInput type="text" id="email" readOnly />
    </ProfileContainer>
  );
};

export default Profile;
