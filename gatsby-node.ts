// Because we used ts-node in gatsby-config.js, this file will automatically be
// imported by Gatsby instead of gatsby-node.js.

// Use the type definitions that are included with Gatsby.
import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import { Post, PostQuery } from "./src/models/post";
import { getAllPosts } from "./src/functions/post";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const query:  {
    errors?: any;
    data?: PostQuery;
  } = await graphql(`
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
        link
      }
    }
  }
  `);

  const posts = query.data == null ? [] : getAllPosts(query.data!);

  posts.forEach(node => {
    const id = node.id;
    if (!id) return;

    createPage({
      path: id,
      component: resolve(__dirname, "./src/components/post.tsx"),
      context: {
        ...node
      },
      
    });
  });
};
