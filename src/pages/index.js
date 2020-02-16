import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo/seo"
import Banner from "../components/Banner/Banner";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
