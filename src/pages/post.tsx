import React from "react";
import BackToHomeLink from "../components/back-to-home";
import Layout from "../components/layout";
import { Post as PostData } from "../models/post";

const Post = (data: {pageContext: PostData}) => {
    return (
        <Layout>
            <BackToHomeLink></BackToHomeLink>
            <h1>{data.pageContext.title}</h1>
            <h3>Posted on {data.pageContext.date}</h3>
            <hr></hr>
            <div dangerouslySetInnerHTML={{ __html: data.pageContext.content }} />
        </Layout>
    );
};

export default Post;
