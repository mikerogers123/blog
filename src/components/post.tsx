import React from "react";
import BackToHomeLink from "./back-to-home";
import Head from "./head";
import Layout from "./layout";
import { Post as PostData } from "../models/post";

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
        {data.pageContext.dateAdded} | {data.pageContext.readingTime.words} words | {data.pageContext.readingTime.text}
      </p>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: data.pageContext.contentMarkdown }} />
    </Layout>
  );
};

export default Post;
