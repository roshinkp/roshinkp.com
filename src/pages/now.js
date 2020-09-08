import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Now = () => (
    <Layout>
        <SEO title="Now" />
        <section class="content">
            <h3>My Current Projects</h3>
            <p>
                I currently work on designing and implementing simulation and visualization features for automated driving and signal processing fields. Shown below are some of the highlights.
            </p>
            <h4>Driving Scenario Simulation</h4>
            <p>
                Driving Scenario Simulation tools enable engineers to design and test their algorithms in MATLAB and Simulink. Key features include: Lidar point cloud generation; low-poly actor meshes; reverse motion in driving scenarios; road network data model for geographic maps such as HERE/OSM and OpenDRIVE; Driving Scenario Designer app; lanes ground truth specification, visualization, and detection; development of a Driving Scenario Reader block and Bird's-Eye Scope in Simulink.
            </p>
        </section>
    </Layout>
)

export default Now