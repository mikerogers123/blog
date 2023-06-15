import { graphql, Link, useStaticQuery } from "gatsby";
import React, { ChangeEvent, useState } from "react";
import { searchMatches } from "../functions/search";
import { Post, PostQuery } from "../models/post";
import { getAllPosts } from "../functions/post";
import PostMetadata from "./post-metadata";

export default function Posts(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const query: PostQuery = useStaticQuery(graphql`
    query {
      allHashNodePost {
        nodes {
          id
          slug
          title
          dateAdded
          content: contentMarkdown
        }
      }
      allMediumFeed {
        nodes {
          id
          slug
          title
          dateAdded: date
          content
        }
      }
    }
  `);

  const posts = getAllPosts(query);
  const filteredPosts = posts.filter(searchMatches(searchTerm));

  return (
    <form onSubmit={e => { e.preventDefault(); }}>
      <fieldset>
        <legend>({filteredPosts.length}) posts</legend>
        <div className="form-group">
          <label>
            Search
            <input
              id="search"
              type="text"
              placeholder="e.g. azure"
              onChange={handleChange}
            />
          </label>
        </div>
        <ul>
          {filteredPosts.length > 0
            ? filteredPosts.map(postElement)
            : noPostsElement()}
        </ul>
      </fieldset>
    </form>
  );
}

const postElement = (p: Post) => {
  return (
    <>
      <br></br>
      <li>
        <div>
          <Link to={`/${p.id}`} key={p.id}>
            {p.title}
          </Link>
        </div>
        <PostMetadata post={p}></PostMetadata>
      </li>
    </>
  );
};

const noPostsElement = () => {
  return (
    <div>
      <p>No posts found.</p>
    </div>
  );
};
