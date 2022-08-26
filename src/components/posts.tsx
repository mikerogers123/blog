import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

type Post = {
  thumbnail: string,
  slug: string,
  title: string,
  id: string,
  date: string
}

export const posts = () => {
  
  const data = useStaticQuery(graphql`
    query AllMediumFeed {
      allMediumFeed {
        nodes {
          thumbnail
          slug
          title
          id
          date
        }
      }
    }
  `);
  
  const posts = data.allMediumFeed.nodes as Array<Post>;
  
  return (
    <ul>
      {posts.map(post => (
          <li key={post.id}>
            <Link to={`/${post.id}`} key={post.id}>
              <header>{post.title}</header>
            </Link>
            <div>Posted on {post.date}</div>
          </li>
        ))}
    </ul>
  );
}
