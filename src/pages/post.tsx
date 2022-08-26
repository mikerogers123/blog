import React from "react";
import { backToHomeLink } from "../components/back-to-home";

type PostData = {
  title: string;
  id: string;
  date: string;
  content: string;
};

const Post = (data: {pageContext: PostData}) => {
    return (
        <section>
            {backToHomeLink()}
            <h1>{data.pageContext.title}</h1>
            <h3>Posted on {data.pageContext.date}</h3>
            <hr></hr>
            <div dangerouslySetInnerHTML={{ __html: data.pageContext.content }} />
        </section>
    );
};

export default Post;
