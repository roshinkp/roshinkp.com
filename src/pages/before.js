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
      <h1>My Past Projects</h1>
      <p>
        I worked on developing a new generation of Scopes for the MATLAB and
        Simulink product families. The new Scopes are performant, extensible,
        and share a common infrastructure. I used C++, JavaScript, Java, MATLAB,
        and MATLAB Graphics for development. Shown below are some of the
        highlights.
      </p>
      <h2>Logic Analyzer</h2>
      <p>
        Visualize transitions, timing information, and states in a signal using
        a Logic Analyzer. My contributions include developing the launch points,
        CEF web window integration, simulation playback controls, saving and
        loading (serialization) of graphical settings, and implementing a smooth
        vertical scrolling to visualize the signals.
      </p>
      <div class="highlights">
        <div>
          <img src={logicAnalyzer} alt="Logic Analyzer" />
        </div>
        <p>
          Below is a video demonstrating some of the features of this Scope.
        </p>
        <div>
          <iframe
            src="https://www.youtube.com/embed/QvNkOvvuPp0"
            title="Logic Analyzer"
          ></iframe>
        </div>
      </div>
      <h2>Time Scope</h2>
      <p>
        Use this Scope for visualizing time-domain signals produced by MATLAB or
        Simulink simulation. I developed simulation playback controls, style
        dialog, and a new programmatic interface for the Scope. I added support
        for sample times, enumerated data types, event-based signals, signal
        units, etc. I improved the loading and rendering performance of the
        Scope and collaborated with UX and visual design to improve the new
        Simulink Scope GUI.
      </p>
      <div class="highlights">
        <div>
          <img src={timeScope} alt="Time Scope" />
        </div>
        <p>
          Shown below is a video illustrating the features of the Scope when it
          was released.
        </p>
        <div>
          <iframe
            src="https://www.youtube.com/embed/oOPTzvtXDH4"
            title="New Scopes Interface"
          ></iframe>
        </div>
      </div>
      <h2>Unified Scopes</h2>
      <p>
        Scopes built using a shared infrastructure makes development efficient
        and result in a uniform user interface. Shown below are various Scopes
        built from a unified infrastructure visualizing a LTE downlink signal.
        The Scopes are grouped using an application I developed called the
        Scopes container.
      </p>
      <div>
        <img src={lteDownlink} alt="LTE Downlink Signal" />
      </div>
    </section>
  </Layout>
)

export default Before
