import styled from "styled-components";

export const DetailPostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PostBox = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  background-color: #ffdede;
  border-radius: 10px;
  overflow: hidden;
`;

export const LeftSection = styled.div`
  display: flex;
  flex: 1;
    
  img {
    width: 460px;
    height: 390px;
    background-position: center;
    background-size: cover;
    margin-bottom:-2px;
  }
  
  div {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  flex-grow: 1;

  p {
    width: 50%;
    height: 80px;
    padding: 5px;
    font-size: 14px;
    overflow-y: auto;
    border-top: 2px solid #f0f0f0;
  }
`;

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 2px solid #f0f0f0;
  
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: #ccc;
  }

  p {
    font-weight: bold;
  }

  span {
    font-size: 14px;
    color: rgb(190, 190, 190);
  }
`;

export const ActionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 5px;
  padding: 10px;

  h4 {
    font-size: 14px;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: flex-end;

    span {
      width: 20px;
      text-align: center;
    }

    p, span {
      color: red;
      margin-left: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;

export const CommentList = styled.div`
  height: auto;

  div {
    
    
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      margin: 0 10px;
      background-color: #ccc;
      cursor: pointer;
    }

    div {

          span {
            font-size: 14px;
            color: rgb(190, 190, 190);
          }
    }

    p {
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

export const Comment = styled.div`
  height: 295px;
  width: 100%;
  overflow-y: auto;
`

export const CommentInput = styled.div`
  width: 50%;
  display: flex;
  align-items: end;
  
  gap: 5px;
  padding: 10px;
  border-top: 2px solid #f0f0f0;
  border-left: 2px solid #f0f0f0;

  textarea {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;
  }

  button {
    padding: 8px 12px;
    height: 100%;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ccc;
  }
`;


export const CommentUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  
`

export const User = styled.div`
  display: flex;
  align-items: center;
`

export const ActionBtn = styled.div`
  text-align: end;
  padding: 0 5px;

  span {
    padding: 0 2px;
    cursor: pointer;
  }

`

export const Content = styled.div`
  padding: 5px 10px;
`