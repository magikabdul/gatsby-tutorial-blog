import React from "react"
import NavBar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import 'normalize.css'
import "../../styles/main.css"

const Layout = ({ children }) => (
  <>
    <NavBar />
      {children}
    <Footer />
  </>
)

export default Layout
