import BoardTable from "../../components/boardTable";
import PageButton from "../../components/pagination";
import Button from "react-bootstrap/Button";
import React from "react";

class List extends React.Component {

  render() {
    return (
      <>
        <h1>자유 게시판</h1>
        <BoardTable></BoardTable>
        <PageButton></PageButton>
        <Button variant="primary">글쓰기</Button>
      </>
    )
  }
}

export default List;
