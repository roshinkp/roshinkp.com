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
        <figcaption>Roshin Kadanna Pally</figcaption>
      </figure>
    </section>
    <section class="aboutMe">
      <h1>Empowering Solutions with Innovation</h1>
      <p>
        I am a Principal Software Engineer and Technical Lead at MathWorks. I
        have extensive experience delivering impactful software solutions. My
        expertise lies in designing and implementing advanced simulation and
        visualization tools, with a focus on the MATLAB, Simulink, and
        RoadRunner ecosystems. I’m passionate about solving complex challenges
        and building tools that empower engineers and scientists worldwide. Feel
        free to connect if you’d like to network, discuss innovative projects,
        or share insights into software architecture and AI-driven solutions.
      </p>
    </section>
  </Layout>
)

export default IndexPage
