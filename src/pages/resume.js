import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import resume from "../docs/Resume-Roshin-Kadanna-Pally.pdf"

const SecondPage = () => (
  <Layout>
    <SEO title="Resume" />
    <section class="resumePDF">
      <object data={resume} type="application/pdf" width="100%" height="100%">
        <p>Roshin's Resume <a href={resume}>PDF</a></p>
      </object>
    </section>
  </Layout>
)

export default SecondPage
