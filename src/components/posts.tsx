import { graphql, Link, useStaticQuery } from "gatsby";
import moment from "moment";
import React, { ChangeEvent, useState } from "react";
import { searchMatches } from "../functions/search";
import { Post } from "../models/post";

export default function Posts(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const data = useStaticQuery(graphql`
    query {
      allHashNodePost {
        nodes {
          id
          brief
          slug
          title
          readingTime {
            words
            text
          }
          dateAdded
          contentMarkdown
        }
      }
    }
  `);

  const posts = data.allHashNodePost.nodes as Array<Post>;
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
        <small>
          {moment(p.dateAdded).format("MMM Do, YYYY")} | {p.readingTime.words} words | {p.readingTime.text}
        </small>
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
