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
            <h3>My Current Projects</h3>
            <p>
                I currently work on designing and implementing simulation and visualization features for automated driving and signal processing groups at MathWorks. I am using C++, JavaScript (Dojo, Chromium Embedded Framework), MATLAB, and MATLAB graphics system for development. Shown below are some of the highlights.
            </p>
            <h4>Driving Scenario Simulation</h4>
            <p>
                Driving Scenario Simulation tools enable engineers to design and test their algorithms in MATLAB and Simulink. Features I contributed to include: INS sensor integration; smooth, jerk-limited vehicle trajectories for simulation; Lidar point cloud generation; low-poly actor meshes; reverse motion in driving scenarios; road network data model for geographic maps such as HERE/OSM and OpenDRIVE; Driving Scenario Designer app; lanes ground truth specification, visualization, and detection; development of a Driving Scenario Reader block and Bird's-Eye Scope in Simulink.
            </p>
            <h4 class="subHeading">Driving Scenario Designer</h4>
            <p>
                Create virtual driving scenarios using the Driving Scenario Designer App.
            </p>
            <div class="highlights">
                <div><img src={drivingScenarioDesigner} alt="Driving Scenario Designer" /></div>
                <div><img src={cuboidWorldWithMeshes} alt="Cuboid world with low-poly meshes" /></div>
                <div><iframe src="https://www.youtube.com/embed/flI5P5wV2Yw" title="Developer Tips and Tricks DSD">
                </iframe></div>
                <div><iframe src="https://www.youtube.com/embed/cBz9Q7-vNIE" title="Driving Scenario Designer">
                </iframe></div>
            </div>
            <h4 class="subHeading">Bird's-Eye Scope</h4>
            <p>
                Visualize roads, actors, sensor detections, and tracks using the Bird's-Eye Scope in Simulink.
            </p>
            <div class="highlights">
                <div><img src={birdsEyeScope} alt="Bird's-Eye Scope" /></div>
                <div><iframe src="https://www.youtube.com/embed/DcXZrbsBAJM" title="Bird's-Eye Scope">
                </iframe></div>
            </div>
        </section>
    </Layout>
)

export default Now