import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import timeScope from "../images/timeScope.png"
import lteDownlink from "../images/lteDownlink.png"
import logicAnalyzer from "../images/logicAnalyzer.png"
import drivingScenarioDesigner from "../images/drivingScenarioDesigner.png"
import cuboidWorldWithMeshes from "../images/cuboidWorldWithMeshes.gif"
import birdsEyeScope from "../images/birdsEyeScope.png"
import roadrunnerGUI from "../images/roadrunnerGUI.png"

const Before = () => (
  <Layout>
    <SEO title="Before" />
    <section class="content">
      <h1>My Past Projects</h1>
      <p>
        Before working exclusively on 3D Scenarios, I worked on RoadRunner and
        Automated Driving Toolbox at MathWorks, and before that, I developed a
        new generation of Scopes for the MATLAB and Simulink product families.
        Shown below are some of the highlights.
      </p>
      <h2>RoadRunner Scene & Scenario API Foundations</h2>
      <p>
        Scene and scenario authoring APIs in MATLAB and RoadRunner are tools
        that allow users to create, edit, and automate 3D environments and
        simulation scenarios for testing autonomous systems.
      </p>
      <div class="highlights">
        <div>
          <img src={roadrunnerGUI} alt="RoadRunner and MATLAB" />
        </div>
      </div>
      <h2>Driving Scenario Simulation</h2>
      <p>
        Driving Scenario Simulation tools enable engineers to design and test
        their algorithms in MATLAB and Simulink. Features I contributed to
        include: INS sensor integration; smooth, jerk-limited vehicle
        trajectories for simulation; Lidar point cloud integration; low-poly
        actor meshes; reverse motion in driving scenarios; road network data
        model for geographic maps such as HERE/OSM and OpenDRIVE; Driving
        Scenario Designer app; lanes ground truth specification, visualization,
        and detection; development of a Driving Scenario Reader block and
        Bird's-Eye Scope in Simulink.
      </p>
      <h3>Driving Scenario Designer</h3>
      <p>
        Create virtual driving scenarios using the Driving Scenario Designer
        App. My contributions include building the canvas interactions,
        integrating Lidar and INS sensors, low-poly actor meshes, performance
        improvements, etc.
      </p>
      <div class="highlights">
        <div>
          <img src={drivingScenarioDesigner} alt="Driving Scenario Designer" />
        </div>
        <div>
          <p>
            Shown below is an animation of an application developed using the
            drving scenario APIs and visualization capabilities.
          </p>
          <img
            src={cuboidWorldWithMeshes}
            alt="Cuboid world with low-poly meshes"
          />
        </div>
        <div>
          <p>
            Below is a video demonstrating some recent features in the driving
            scenarios area.
          </p>
          <a
            href="https://www.youtube.com/watch?v=flI5P5wV2Yw"
            target="_blank"
            rel="noreferrer"
            class="youtubeThumbnail"
          >
            <img
              src="https://img.youtube.com/vi/flI5P5wV2Yw/hqdefault.jpg"
              alt="Watch Driving Scenario Designer on YouTube"
            />
            <span class="playButton">&#9654;</span>
          </a>
        </div>
      </div>
      <h3>Bird's-Eye Scope</h3>
      <p>
        Visualize roads, actors, sensor detections, and tracks using the
        Bird's-Eye Scope in Simulink. My contributions include developing the
        data pipeline, grouping ground truth, detections, and coverages;
        Scenario Reader module, and integrating Lidar and INS sensor blocks in
        Simulink.
      </p>
      <div class="highlights">
        <div>
          <img src={birdsEyeScope} alt="Bird's-Eye Scope" />
        </div>
      </div>
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
          <a
            href="https://www.youtube.com/watch?v=QvNkOvvuPp0"
            target="_blank"
            rel="noreferrer"
            class="youtubeThumbnail"
          >
            <img
              src="https://img.youtube.com/vi/QvNkOvvuPp0/hqdefault.jpg"
              alt="Watch Logic Analyzer on YouTube"
            />
            <span class="playButton">&#9654;</span>
          </a>
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
          <a
            href="https://www.youtube.com/watch?v=IGLmT4A5WS4"
            target="_blank"
            rel="noreferrer"
            class="youtubeThumbnail"
          >
            <img
              src="https://img.youtube.com/vi/IGLmT4A5WS4/hqdefault.jpg"
              alt="Watch New Scopes Interface on YouTube"
            />
            <span class="playButton">&#9654;</span>
          </a>
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
