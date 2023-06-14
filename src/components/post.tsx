import React from "react";
import BackToHomeLink from "./back-to-home";
import Head from "./head";
import Layout from "./layout";
import { Post as PostData } from "../models/post";
import moment from "moment";
import Markdown from "markdown-to-jsx";
import { calculateReadingTime } from "../functions/reading-time";

type PostPageInput = {
  pageContext: PostData;
};

const Post = (data: PostPageInput) => {
  console.log(data.pageContext);
  return (
    <Layout>
      <Head title={data.pageContext.title} />
      <BackToHomeLink></BackToHomeLink>
      <h1>{data.pageContext.title}</h1>
      <p>
        {moment(data.pageContext.dateAdded).format("MMM Do, YYYY")} |{" "}
        {calculateReadingTime(data.pageContext.content)} min read
      </p>
      <hr></hr>
      {toHTML(data.pageContext.content)}
    </Layout>
  );
};

export default Post;

const toHTML = (postContent: string) => {
  return isHTMLString(postContent) ? (
    <div dangerouslySetInnerHTML={{ __html: postContent }} />
  ) : (
    <Markdown>{postContent}</Markdown>
  );
};

const isHTMLString = (input: string): boolean => {
  const htmlRegex = /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/;
  return htmlRegex.test(input);
};
