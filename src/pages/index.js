import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import roshi from "../images/roshi_medium.jpg"

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
        I'm a Software Engineer. I love to work on simulation visualization
        tools and web applications. I enjoy music, science fiction, photography,
        comedy, cars, and listening to Blinkist. This website is a digital diary
        of my professional work and hobby projects.
      </p>
    </section>
  </Layout>
)

export default IndexPage
