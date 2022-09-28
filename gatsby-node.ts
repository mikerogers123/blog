// Because we used ts-node in gatsby-config.js, this file will automatically be
// imported by Gatsby instead of gatsby-node.js.

// Use the type definitions that are included with Gatsby.
import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import { Post } from "./src/models/post";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const hashnodeQuery: {
    errors?: any;
    data?: { allHashNodePost: { nodes: Post[] } };
  } = await graphql(`
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

  hashnodeQuery.data?.allHashNodePost.nodes.forEach(node => {
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
