/** @jsxImportSource @emotion/react */

import React from "react";
import styled from "@emotion/styled";

// 게시물 데이터
const posts = [
  { id: 1, title: "첫 번째 게시물", content: "이것은 첫 번째 게시물입니다." },
  { id: 2, title: "두 번째 게시물", content: "이것은 두 번째 게시물입니다." },
  // 추가 게시물들...
];

// 스타일드 컴포넌트 정의
const BoardContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const PostContainer = styled.div`
  margin-bottom: 10px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const PostTitle = styled.h2`
  color: #333;
`;

const PostContent = styled.p`
  color: #555;
`;

// 게시판 컴포넌트 정의
const Board = () => {
  return (
    <BoardContainer>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          <PostTitle>{post.title}</PostTitle>
          <PostContent>{post.content}</PostContent>
        </PostContainer>
      ))}
    </BoardContainer>
  );
};

export default Board;
