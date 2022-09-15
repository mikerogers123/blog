import React from "react";
import BackToHomeLink from "./back-to-home";
import Head from "./head";
import Layout from "./layout";
import ReadTime from "./read-time";
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
        {data.pageContext.date} | <ReadTime post={data.pageContext}></ReadTime>
      </p>
      <hr></hr>
      <div dangerouslySetInnerHTML={{ __html: data.pageContext.content }} />
    </Layout>
  );
};

export default Post;
