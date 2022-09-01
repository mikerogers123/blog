import * as React from "react";
import Posts from "../components/posts";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Blog"/>
      <Posts></Posts>
    </Layout>
  );
};

export default IndexPage;
