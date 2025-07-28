import styled from "styled-components";

export const CardStyle = styled.div`
  width: ${(props) => props.width || '500px'}; // 전달된 props가 없으면 기본값 500px
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 8px;
  margin-bottom : 20px;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const SettingBtn = styled.p`
  font-size: 20px;
  cursor: pointer;
`

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
`;

export const NickName = styled.p`
  font-weight: 700;
`

export const PostImg = styled.img`
    width: 100%;
    border-top: 1px solid rgb(210,210,210);
    border-bottom: 1px solid rgb(210,210,210);
    cursor: pointer;
`

