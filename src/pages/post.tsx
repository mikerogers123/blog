import React from "react";
import BackToHomeLink from "../components/back-to-home";
import Head from "../components/head";
import Layout from "../components/layout";
import { Post as PostData } from "../models/post";
import { PostMetadata } from "../models/post-metadata";

type PostPageInput = {
  pageContext: PostData & PostMetadata;
};

const Post = (data: PostPageInput) => {
  return (
    <Layout>
      <Head title={data.pageContext.title}/>
      <BackToHomeLink></BackToHomeLink>
      <h1>{data.pageContext.title}</h1>
      <p>
        {data.pageContext.date} | {data.pageContext.estimatedReadTime}{" "}
        min read
      </p>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: data.pageContext.content }} />
    </Layout>
  );
};

export default Post;
