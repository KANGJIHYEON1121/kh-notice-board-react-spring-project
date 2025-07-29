import styled from "styled-components";

export const PrevContainer = styled.div`
  display: flex;
  flex-direction: column;

  div {
    gap: 10px
  }
`

export const PrevImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;

  button {
    cursor: pointer;
  }
`

export const ModifyWrapper = styled.div`
  max-width: 720px;
  margin: 4rem auto;
  padding: 2.5rem 3rem;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #444;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  height: 140px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 0.95rem;
  resize: vertical;
`;

export const Button = styled.button`
  padding: 0.9rem;
  background-color: ${(props) => (props.danger ? "#f44336" : "#1976d2")};
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-right: 10px;

  &:hover {
    background-color: ${(props) =>
    props.danger ? "#d32f2f" : "#1565c0"};
  }
`;
