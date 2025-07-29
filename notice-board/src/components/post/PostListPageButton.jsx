import { PaginationWrapper, PageButton } from "./PostListPageButtonStyle";

const PostListPageButton = ({ serverData, moveToList }) => {
  return (
    <>
      {/* 페이징 영역 */}
      <PaginationWrapper>
        {serverData.prev && (
          <PageButton onClick={() => moveToList({ page: serverData.prevPage })}>
            {"<"}
          </PageButton>
        )}

        {serverData.pageNumList.map((num) => (
          <PageButton
            key={num}
            onClick={() => moveToList({ page: num })}
            className={num === serverData.current ? "active" : ""}
          >
            {num}
          </PageButton>
        ))}

        {serverData.next && (
          <PageButton onClick={() => moveToList({ page: serverData.nextPage })}>
            {">"}
          </PageButton>
        )}
      </PaginationWrapper>
    </>
  );
};

export default PostListPageButton;
