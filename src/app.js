import React from 'react';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {Container} from "react-bootstrap";

import List from "./pages/board/list";
import ErrorPage from "./pages/error";
import Read from "./pages/board/read";
import Create from "./pages/board/create";
import Update from "./pages/board/update";

const router = createBrowserRouter([
  {
    // 전체 조회
    path: "/board",
    element: <List/>,
    errorElement: <ErrorPage/>
  },
  {
    // 게시글 조회
    path: "/board/:id",
    element: <Read/>,
  },
  {
    // 게시글 생성
    path: "/board/create",
    element: <Create/>,
  },
  {
    // 게시글 수정
    path: "/board/update/:id",
    element: <Update/>,
  },
]);

class App extends React.Component {
  render() {
    return (
      <>
        <React.StrictMode>
          <Container>
            <RouterProvider router={router}/>
          </Container>
        </React.StrictMode>
      </>
    )
  }
}

export default App;