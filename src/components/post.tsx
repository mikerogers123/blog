import React from "react";
import BackToHomeLink from "./back-to-home";
import Head from "./head";
import Layout from "./layout";
import { Post as PostData } from "../models/post";
import moment from "moment";
import Markdown from 'markdown-to-jsx';

type PostPageInput = {
  pageContext: PostData;
};

const Post = (data: PostPageInput) => {
  return (
    <Layout>
      <Head title={data.pageContext.title}/>
      <BackToHomeLink></BackToHomeLink>
      <h1>{data.pageContext.title}</h1>
      <p>
        {moment(data.pageContext.dateAdded).format("MMM Do, YYYY")} | {data.pageContext.readingTime.words} words | {data.pageContext.readingTime.text}
      </p>
      <hr></hr>
      <Markdown>{data.pageContext.contentMarkdown}</Markdown>
    </Layout>
  );
};

export default Post;
