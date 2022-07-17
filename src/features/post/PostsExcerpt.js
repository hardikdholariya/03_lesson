import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExcerpt = ({ post }) => {
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p> {post.body.substring(0, 100)} </p>
      <p className="postCredit">
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostsExcerpt;
