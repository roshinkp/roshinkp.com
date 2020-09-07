import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import timeScope from "../images/timeScope.png"
import lteDownlink from "../images/lteDownlink.png"

const Before = () => (
    <Layout>
        <SEO title="Before" />
        <section>
            <h1>My Past Projects</h1>
            <p>I worked on developing a new generation of Scopes for the MATLAB and Simulink product family. The new Scopes are performant, extensible, and share a common infrastructure. They are developed using C++, Java, MATLAB, and MATLAB Graphics. Shown below are some of the highlights.
            </p>
            <h2>Time Scope</h2>
            <p>A Scope for visualizing time domain signals produced by MATLAB or Simulink simulation.</p>
            <div>
                <img src={timeScope} alt="Time Scope" />
                <iframe width="640" height="360" src="https://www.youtube.com/embed/oOPTzvtXDH4" title="New Scopes Interface">
                </iframe>
            </div>
            <h2>Unified Scopes</h2>
            <p>Scopes built using a common infrastructure makes development efficient and produces a uniform user interface. Shown here are various Scopes built from a unified infrastructure visualizing a LTE downlink signal.</p>
            <div>
                <img src={lteDownlink} alt="LTE Downlink Signal"/>
            </div>
        </section>
    </Layout>
)

export default Before