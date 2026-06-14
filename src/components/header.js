import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div class="headerInner">
      <Link to="/" class="headerBrand">Roshin Kadanna Pally</Link>
      <nav>
        <ul class="mainNav">
          <li>
            <Link to="/resume" activeClassName="navActive">resume</Link>
          </li>
          <li>
            <Link to="/now" activeClassName="navActive">now</Link>
          </li>
          <li>
            <Link to="/before" activeClassName="navActive">before</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
