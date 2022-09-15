import React from "react";
import { estimateReadTime } from "../functions/reading-time";
import { Post } from "../models/post";

const ReadTime = ({ post }: { post: Post }) => {
  const mustBeReadOnMedium = post?.content?.includes("Continue reading on") || false;

  return mustBeReadOnMedium 
    ? <>read on Medium</> 
    : <>{estimateReadTime(post)} min read</>;
};

export default ReadTime;
