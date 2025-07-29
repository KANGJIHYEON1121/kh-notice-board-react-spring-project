import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const PageButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, font-weight 0.2s;

  &:hover {
    background-color: #f8c291;
    border-color: #e58e26;
  }

  &.active {
    font-weight: bold;
    background-color: #ffeaa7;
  }
`;