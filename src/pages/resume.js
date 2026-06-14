import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../docs/Profile.pdf"
import "../css/resume.css"

const Resume = () => (
  <Layout>
    <SEO title="Resume" />
    <section className="resumePage">
      <div className="resumeDownload">
        <a href={resume} download="Resume-Roshin-Kadanna-Pally.pdf">
          Download PDF
        </a>
      </div>

      <div className="resumeLayout">
        {/* Sidebar */}
        <aside className="resumeSidebar">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:roshinpally@gmail.com">roshinpally@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/roshinkadannapally/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>

          <h2>Top Skills</h2>
          <ul>
            <li>Technical Leadership</li>
            <li>Software Architecture</li>
            <li>Artificial Intelligence</li>
          </ul>

          <h2>Certifications</h2>
          <ul>
            <li>Mastering React</li>
            <li>The Complete Node.js Course</li>
            <li>Elements of AI</li>
            <li>Generative AI for Everyone</li>
            <li>AI For Everyone</li>
          </ul>

          <h2>Honors</h2>
          <ul>
            <li>Outstanding Graduate Award</li>
            <li>National Dean's List 2004–2006</li>
            <li>Eta Kappa Nu Association</li>
          </ul>

          <h2>Languages</h2>
          <ul>
            <li>Malayalam (Native)</li>
            <li>English (Professional)</li>
            <li>Hindi (Elementary)</li>
          </ul>

          <h2>Publications</h2>
          <ul>
            <li>FM interference mitigation in a finitely correlated environment using a decorrelating time-varying autoregressive model</li>
            <li>Modeling of time-varying Instantaneous Frequency in a finitely correlated environment</li>
            <li>Implementation of Instantaneous Frequency Estimation based on Time-Varying AR Modeling</li>
            <li>Non-stationary interference mitigation in continuous phase modulated signals using estimation subtraction</li>
          </ul>
        </aside>

        {/* Main */}
        <main className="resumeMain">
          <div className="resumeHeader">
            <h1>Roshin Kadanna Pally</h1>
            <p className="resumeTitle">
              Principal Software Engineer &amp; Technical Lead · MathWorks
            </p>
          </div>

          <h2>Summary</h2>
          <p>
            Principal Software Engineer and Technical Lead at MathWorks with a
            strong track record of delivering impactful engineering solutions for
            scientists and engineers. I specialize in simulation and
            visualization tools within the MATLAB, Simulink, and RoadRunner
            ecosystems, and bring a product-focused mindset to solving technical
            challenges and driving innovation.
          </p>
          <ul>
            <li>Leading cross-functional teams to translate user needs into amazing product features.</li>
            <li>Designing APIs and interactive visualization tools for 3D Scenarios simulation.</li>
            <li>Driving product vision from concept to delivery, balancing technical &amp; customer/business priorities.</li>
            <li>Full-stack development across JavaScript, C++, Python, and MATLAB.</li>
          </ul>

          <h2>Experience</h2>

          <div className="resumeOrgGroup">
            <p className="resumeOrgName">MathWorks</p>
            <p className="resumeOrgTotal">16+ years</p>

            <div className="resumeEntry">
              <h3>Principal Software Engineer</h3>
              <p className="resumeMeta">May 2022 – Present · 4 years</p>
              <p>
                Technical lead for Scenario &amp; Scene Authoring, Maps, and
                Visualization APIs for the MATLAB/RoadRunner ecosystem, covering
                Automated Driving Toolbox, RoadRunner, and RoadRunner Scenarios.
              </p>
            </div>

            <div className="resumeEntry">
              <h3>Senior Software Engineer</h3>
              <p className="resumeMeta">May 2016 – May 2022 · 6 years · Greater Boston Area</p>
              <p>Developed simulation and visualization tools using JavaScript, C++, and MATLAB.</p>
              <ul>
                <li>Developed a JavaScript System Object Editor for MATLAB Online</li>
                <li>Built canvas interactions for Scenario Designer and integrated Lidar and INS sensors</li>
                <li>Added lanes ground truth specification, visualization, and detection</li>
                <li>Developed Bird's-Eye Scope data pipeline and Scenario Reader module</li>
                <li>Contributed to the full-stack development of Logic Analyzer in Simulink</li>
              </ul>
            </div>

            <div className="resumeEntry">
              <h3>Software Engineer</h3>
              <p className="resumeMeta">December 2010 – May 2016 · 5.5 years · Greater Boston Area</p>
              <p>Contributed to the development of the new Simulink Scope and a Unified Scopes infrastructure.</p>
              <ul>
                <li>Developed simulation playback controls, style dialog, and a new programmatic interface</li>
                <li>Added support for sample times, enumerated data types, event-based signals, and signal units</li>
                <li>Collaborated with UX and visual design to improve the new Simulink Scope GUI</li>
                <li>Developed the System Object Editor front end in Java and MATLAB</li>
              </ul>
            </div>

            <div className="resumeEntry">
              <h3>Signal Processing &amp; Communications UI Intern</h3>
              <p className="resumeMeta">May 2010 – December 2010 · 8 months</p>
              <ul>
                <li>Migrated legacy graphics APIs to the new MATLAB graphics system APIs</li>
                <li>Provided basic graphical property editing capabilities in the Simulink Scope</li>
                <li>Improved launch performance of Simulink Signal and Scope Manager by more than 50%</li>
                <li>Added internationalization (i18n) and localization (l10n) support for various GUIs</li>
              </ul>
            </div>
          </div>

          <div className="resumeOrgGroup">
            <p className="resumeOrgName">Virginia Polytechnic Institute and State University</p>
            <div className="resumeEntry">
              <h3>Research Assistant</h3>
              <p className="resumeMeta">June 2007 – May 2010 · 3 years · Blacksburg, VA</p>
              <p>
                Graduate research scholarship from the DSP Research Lab at
                Virginia Tech under Dr. Louis Beex. Worked on research,
                development, and testing of signal processing algorithms in
                Signal Processing and Communications. Also helped set up the
                design project for the DSP &amp; Filter Design course and taught
                classes in Signals and Systems.
              </p>
            </div>
          </div>

          <div className="resumeOrgGroup">
            <p className="resumeOrgName">eMerj</p>
            <div className="resumeEntry">
              <h3>Engineering Intern</h3>
              <p className="resumeMeta">August 2006 – October 2006 · 3 months</p>
              <ul>
                <li>Implemented communication between a micro-controller and fingerprint reader evaluation board (RS-232), Serial EEPROM (I2C)</li>
                <li>Wrote embedded code to perform capture enrolling and verification of fingerprint templates</li>
              </ul>
            </div>
          </div>

          <div className="resumeOrgGroup">
            <p className="resumeOrgName">SUNY New Paltz</p>
            <div className="resumeEntry">
              <h3>Teaching Assistant</h3>
              <p className="resumeMeta">August 2005 – December 2005 · 5 months · New Paltz, NY</p>
              <p>Course: Computer Simulation Lab</p>
              <ul>
                <li>Administered MATLAB workshops and lab sessions</li>
                <li>Guided students in MATLAB graphical user interface development</li>
              </ul>
            </div>
          </div>

          <h2>Education</h2>

          <div className="resumeEntry">
            <h3>Virginia Tech</h3>
            <p className="resumeMeta">M.S., Electrical Engineering · 2007 – 2009</p>
          </div>

          <div className="resumeEntry">
            <h3>SUNY New Paltz</h3>
            <p className="resumeMeta">B.S., Electrical Engineering · 2004 – 2006</p>
          </div>
        </main>
      </div>
    </section>
  </Layout>
)

export default Resume
