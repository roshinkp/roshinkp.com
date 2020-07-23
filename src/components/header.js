import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import roshi from "../images/roshi.jpeg"


const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul class="mainNav">
        <li><Link to="/">home</Link></li>
        <li><Link to="/resume">resume</Link></li>
        <li><a href="https://www.linkedin.com/in/roshinkadannapally/" target="_blank" rel="noreferrer">linkedin</a></li>
      </ul>
    </nav>
    <figure class="profile">
      <img src={roshi} alt="Roshin Kadanna Pally"/>
        <figcaption>Roshin Kadanna Pally</figcaption>
    </figure>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
