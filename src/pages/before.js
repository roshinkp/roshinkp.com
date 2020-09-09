import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import timeScope from "../images/timeScope.png"
import lteDownlink from "../images/lteDownlink.png"
import logicAnalyzer from "../images/logicAnalyzer.png"

const Before = () => (
    <Layout>
        <SEO title="Before" />
        <section class="content">
            <h3>My Past Projects</h3>
            <p>I worked on developing a new generation of Scopes for the MATLAB and Simulink product families. The new Scopes are performant, extensible, and share a common infrastructure. I used C++, JavaScript, Java, MATLAB, and MATLAB Graphics for development. Shown below are some of the highlights.
            </p>
            <h4>Logic Analyzer</h4>
            <p>
                Visualize transitions, timing information, and states in a signal using a Logic Analyzer. 
            </p>
            <div class="highlights">
                <div><img src={logicAnalyzer} alt="Logic Analyzer"/></div>
                <div><iframe src="https://www.youtube.com/embed/QvNkOvvuPp0" title="Logic Analyzer">
                </iframe></div>
            </div>
            <h4>Time Scope</h4>
            <p>Use this Scope for visualizing time-domain signals produced by MATLAB or Simulink simulation.</p>
            <div class="highlights">
                <div><img src={timeScope} alt="Time Scope"/></div>
                <div><iframe src="https://www.youtube.com/embed/oOPTzvtXDH4" title="New Scopes Interface">
                </iframe></div>
            </div>
            <h4>Unified Scopes</h4>
            <p>Scopes built using a shared infrastructure makes development efficient and result in a uniform user interface. Shown below are various Scopes built from a unified infrastructure visualizing a LTE downlink signal.</p>
            <div>
                <img src={lteDownlink} alt="LTE Downlink Signal"/>
            </div>
        </section>
    </Layout>
)

export default Before