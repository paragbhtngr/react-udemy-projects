import { faker } from "@faker-js/faker";
import React from "react";

import { CommentDetail } from "./CommentDetail";
import { ApprovalCard } from "./ApprovalCard";

import "./App.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author={"Sam"}
          timeAgo="Today at 4:45PM"
          content="Nice blog post"
        />
      </ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author={"Sam"}
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author={"Sam"}
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
      />
    </div>
  );
};

export default App;
