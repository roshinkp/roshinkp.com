/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <div class="separator"></div>
        <ul class="footerIcons">
          <li><a href="https://github.com/roshinkp" target="_blank" rel="noreferrer" aria-label="github"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/roshinkadannapally/" target="_blank" rel="noreferrer" aria-label="github"><FaLinkedin/></a></li>
          <li><a href="https://www.facebook.com/roshinkadannapally/" target="_blank" rel="noreferrer" aria-label="github"><FaFacebook/></a></li>
        </ul>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
