import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

type Post = {
  thumbnail: string;
  slug: string;
  title: string;
  id: string;
  date: string;
};

export default function Posts(): JSX.Element {
  const data = useStaticQuery(graphql`
    query AllMediumFeed {
      allMediumFeed {
        nodes {
          thumbnail
          slug
          title
          id
          date(formatString: "MMM Do, YYYY")
        }
      }
    }
  `);

  const posts = data.allMediumFeed.nodes as Array<Post>;

  return <div>{posts.map(postElement)}</div>;
}

const postElement = (p: Post) => {
  return (
    <div>
      <hr></hr>
      <h2>
        <Link to={`/${p.id}`} key={p.id}>
          {p.title}
        </Link>
      </h2>
      <h5>Posted on {p.date} </h5>
    </div>
  );
};
