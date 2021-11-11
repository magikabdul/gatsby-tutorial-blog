import React from "react"
import Layout from "../components/Layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Home = () => (
  <Layout>
    <main className="page">
      <header className="hero">
        <StaticImage src="../assets/images/main.jpg" alt="vegetables" placeholder="blurred" className="hero-img"
                     layout="fullWidth" />
        <div className="hero-container">
          <div className="hero-text">
            <h1>simply recipes</h1>
          </div>
        </div>
      </header>
    </main>
  </Layout>
)

export default Home
