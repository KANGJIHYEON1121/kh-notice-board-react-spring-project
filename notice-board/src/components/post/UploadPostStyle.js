import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #ffe4e1;
  border-radius: 10px;
  max-width: 900px;
  margin: 0 auto;
`;

export const UploadLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UploadRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UploadLabel = styled.label`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 5px;
`;

export const UploadImage = styled.input`
  padding: 8px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const UploadTextarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
  font-size: 1rem;
`;

export const UploadButton = styled.button`
  align-self: flex-end;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff6347;
  }
`;
