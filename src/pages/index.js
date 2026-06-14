import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import roshi from "../images/roshi_medium.jpg"
import Helmet from "react-helmet"

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta
        name="google-site-verification"
        content="lNmGOUh04Gyd1ZjMNo7sqEguydYSuYEcWO7fIf-OUr4"
      />
    </Helmet>
    <SEO title="Home" />
    <section class="homeBackground">
      <figure class="profile">
        <img src={roshi} alt="Roshin Kadanna Pally" />
      </figure>
    </section>
    <section class="aboutMe">
      <h1>Empowering Solutions with Innovation</h1>
      <p>
        I am a Principal Software Engineer and Technical Lead at MathWorks. I
        have extensive experience delivering impactful technology solutions. My
        current focus is building the foundational core of 3D Scenarios — a
        multi-domain geographic simulation platform that enables engineers to
        construct environments with terrain, buildings, and actors spanning
        land, air, and space. The platform supports ray tracing, line-of-sight
        analysis, and event-driven simulation, serving as the common foundation
        on which MathWorks toolboxes for radar, wireless communications, UAV,
        robotics, and more build their simulation capabilities. I led the
        development of the Scenario Designer app, which also enables AI-driven
        agentic workflows. I’m passionate about building tools that empower
        engineers and scientists worldwide.
      </p>
    </section>
  </Layout>
)

export default IndexPage
