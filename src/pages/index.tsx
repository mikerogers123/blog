import * as React from "react"
import type { HeadFC } from "gatsby"
import Posts from "../components/posts"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Posts></Posts>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
