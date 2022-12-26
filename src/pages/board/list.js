import BoardTable from "../../components/boardTable";
import PageButton from "../../components/pagination";
import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

class List extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  async componentDidMount() {
    const result = await axios.get("http://localhost:8080/freeboard")
    this.setState({data: result.data})
    console.log(this.state.data)
  }

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
