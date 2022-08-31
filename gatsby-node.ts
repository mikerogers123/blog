// Because we used ts-node in gatsby-config.js, this file will automatically be
// imported by Gatsby instead of gatsby-node.js.

// Use the type definitions that are included with Gatsby.
import { GatsbyNode } from "gatsby";
import { resolve } from "path";

type Post = {title: string, date: string, content: string, id: string};

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const medium: {
    errors?: any;
    data?: { allMediumFeed: { nodes: Post[] } };
  } = await graphql(`
    query AllMediumFeedContent {
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

  medium.data?.allMediumFeed.nodes.forEach(node => {
    const id = node.id;
    if (!id) return;

    createPage({
      path: id,
      component: resolve(__dirname, "./src/pages/post.tsx"),
      context: {
        content: node.content,
        title: node.title,
        date: node.date
      },
    });
  });
};
