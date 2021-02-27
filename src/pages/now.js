import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import drivingScenarioDesigner from "../images/drivingScenarioDesigner.png"
import cuboidWorldWithMeshes from "../images/cuboidWorldWithMeshes.gif"
import birdsEyeScope from "../images/birdsEyeScope.png"

const Now = () => (
  <Layout>
    <SEO title="Now" />
    <section class="content">
      <h1>My Current Projects</h1>
      <p>
        I currently work on designing and implementing simulation and
        visualization features for automated driving and signal processing
        groups at MathWorks. I am using C++, JavaScript (Dojo, Chromium Embedded
        Framework), HTML, CSS, MATLAB, and MATLAB graphics system for
        development. Shown below are some of the highlights.
      </p>
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
          <iframe
            src="https://www.youtube.com/embed/flI5P5wV2Yw"
            title="Developer Tips and Tricks DSD"
          ></iframe>
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
    </section>
  </Layout>
)

export default Now
