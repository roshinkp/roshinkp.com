import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <ul class="mainNav">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/resume">resume</Link>
        </li>
        <li>
          <Link to="/now">now</Link>
        </li>
        <li>
          <Link to="/before">before</Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
