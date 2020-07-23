import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="aboutMe">
      <h1>Hello, I'm Roshin</h1>
      <p>
        I'm a Senior Software Engineer in Natick, Massachusetts.
        I love to work on simulation visualization tools and web applications.
        Music, science fiction, comedy, stock investing, cars, and listening to Blinkist is how I roll.
    </p>
    </section>
  </Layout>
)

export default IndexPage
