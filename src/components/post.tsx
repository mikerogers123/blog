import React from "react";
import BackToHomeLink from "./back-to-home";
import Head from "./head";
import Layout from "./layout";
import { Post as PostData } from "../models/post";
import PostContent from "./post-content";
import PostMetadata from "./post-metadata";

type PostPageInput = {
  pageContext: PostData;
};

export default function Post (data: PostPageInput) {
  return (
    <Layout>
      <Head title={data.pageContext.title} />
      <BackToHomeLink></BackToHomeLink>
      <h1>{data.pageContext.title}</h1>
      <PostMetadata post={data.pageContext}></PostMetadata>
      <hr></hr>
      <PostContent post={data.pageContext}></PostContent>
    </Layout>
  );
};
