import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const vidlyAppLink = "https://sheltered-dawn-62729.herokuapp.com/movies"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <section className="content">
      <h3>My Hobby Projects</h3>
      <p>
        I have done some projects for fun and learning. Check them out using the
        links below.
      </p>
      <ul>
        <li className="projectLink">
          <a href={vidlyAppLink} target="_blank" rel="noreferrer">
            Vidly
          </a>{" "}
          is my version of a video rental app from the Code with Mosh React
          course.
        </li>
      </ul>
    </section>
  </Layout>
)
export default Projects
