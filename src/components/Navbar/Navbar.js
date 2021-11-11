import React from "react"
import { Link } from "gatsby"
import { FiMenu } from "react-icons/all"

const NavBar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to={"/"}>
          SimplyRecipes
        </Link>
        <button className="nav-btn">
          <FiMenu />
        </button>
      </div>
      <div className="nav-links show-links">
        <Link to="/" className='nav-link' activeClassName='active-link'>Home</Link>
        <Link to="/about" className='nav-link' activeClassName='active-link'>About</Link>
        <Link to="/recipes" className='nav-link' activeClassName='active-link'>Recipes</Link>
        <Link to="/tags" className='nav-link' activeClassName='active-link'>Tags</Link>
      </div>
    </div>
  </nav>
)

export default NavBar
