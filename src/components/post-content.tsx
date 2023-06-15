import React from "react";
import { Post } from "../models/post";
import Markdown from "markdown-to-jsx";
import { isHTMLString } from "../functions/is-html";

export default function PostContent ({ post }: {post:Post}) {
  return isHTMLString(post.content) 
    ? element.HTML(post.content)
    : element.markdown(post.content);
};

const element = {
  HTML: (content: string) => <div dangerouslySetInnerHTML={{ __html: content }} />,
  markdown: (content: string) => <Markdown>{content}</Markdown>
}
