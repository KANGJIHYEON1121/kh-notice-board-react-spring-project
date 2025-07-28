import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  background-color: #ddd;
`;

export const ProfileLabel = styled.label`
  font-weight: bold;
  margin-top: 10px;
  align-self: flex-start;
`;

export const ProfileInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
`;