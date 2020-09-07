import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import roshi from "../images/roshi.jpeg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="homeBackground">
      <figure class="profile">
        <img src={roshi} alt="Roshin Kadanna Pally" />
        <figcaption>Roshin Kadanna Pally</figcaption>
      </figure>
    </section>
    <section class="aboutMe">
      <h1>Hello, I'm Roshin</h1>
      <p>
        I'm a Senior Software Engineer in Natick, Massachusetts.
        I love to work on simulation visualization tools and web applications.
        Music, science fiction, photography, comedy, cars, and listening to Blinkist is how I roll.
    </p>
    </section>
  </Layout>
)

export default IndexPage
