import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFoundPage = () => {
  return (
    <Layout>
      <Head title="Page not found"/>
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  )
}

export default NotFoundPage
