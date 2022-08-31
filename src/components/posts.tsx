import { graphql, Link, useStaticQuery } from "gatsby";
import React, { ChangeEvent, useState } from "react";
import { searchMatches } from "../functions/search";
import { Post } from "../models/post";

export default function Posts(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const data = useStaticQuery(graphql`
    query AllMediumFeed {
      allMediumFeed {
        nodes {
          thumbnail
          slug
          title
          id
          date(formatString: "MMM Do, YYYY")
          content
        }
      }
    }
  `);

  const posts = data.allMediumFeed.nodes as Array<Post>;
  const filteredPosts = posts.filter(searchMatches(searchTerm));

  return (
    <form action="#">
      <fieldset>
        <legend>({filteredPosts.length}) posts</legend>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            id="search"
            type="text"
            placeholder="e.g. azure"
            onChange={handleChange}
          />
        </div>
        {filteredPosts.length > 0
          ? filteredPosts.map(postElement)
          : noPostsElement()}
      </fieldset>
    </form>
  );
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

const noPostsElement = () => {
  return (
    <div>
      <p>No posts found.</p>
    </div>
  );
};
