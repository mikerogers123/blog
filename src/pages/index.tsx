import * as React from "react"
import type { HeadFC } from "gatsby"
import { posts } from "../components/posts"

const IndexPage = () => {
  return (
    <main>
      {posts()}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
