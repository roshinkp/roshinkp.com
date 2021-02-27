import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const vidlyAppLink = "https://sheltered-dawn-62729.herokuapp.com/movies"
const devTipsLink =
  "https://www.youtube.com/watch?v=flI5P5wV2Yw&feature=emb_logo"
const blogScope =
  "https://blogs.mathworks.com/simulink/2011/09/14/how-to-customize-the-simulink-scope-take-2/"
const blogLegends =
  "https://blogs.mathworks.com/simulink/2012/03/12/legends-for-simulink-scopes/"

const Else = () => (
  <Layout>
    <SEO title="Else" />
    <section className="content">
      <h1>My Other Works</h1>
      <p>
        I have done some projects for fun and learning, written some blog posts,
        etc. You may check them out using the links below.
      </p>
      <ul className="projectLink">
        <li>
          <a href={vidlyAppLink} target="_blank" rel="noreferrer">
            Vidly
          </a>{" "}
          is my version of a video rental app from the Code with Mosh React
          course.
        </li>
        <li>
          <a href={devTipsLink} target="_blank" rel="noreferrer">
            Developer tips and tricks
          </a>{" "}
          on MATLAB youtube channel.
        </li>
        <li>
          <a href={blogScope} target="_blank" rel="noreferrer">
            How to customize the Simulink Scope?
          </a>
        </li>
        <li>
          <a href={blogLegends} target="_blank" rel="noreferrer">
            Legends in Simulink Scope
          </a>
        </li>
      </ul>
    </section>
  </Layout>
)
export default Else
