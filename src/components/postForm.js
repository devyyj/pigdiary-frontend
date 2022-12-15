import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";

class postForm extends React.Component {
  render(){
    return (<>
      <h1>글쓰기/제목/수정</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="name@example.com"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3}/>
        </Form.Group>
      </Form>
      <Button variant="secondary">목록</Button>
      <Button variant="primary">확인</Button>
      <Button variant="warning">수정</Button>
      <Button variant="danger">삭제</Button>
      <Button variant="secondary">취소</Button>
    </>)
  }
}

export default postForm