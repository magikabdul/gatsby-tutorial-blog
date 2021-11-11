import React from "react"
import Layout from "../components/Layout/Layout"
import { StaticImage } from "gatsby-plugin-image"

const About = () => (
  <Layout>
    <main className="page">
      <section className="about-page">
        <article>
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores at consequuntur dolor dolores
            ducimus eius eligendi eos esse, expedita fugit id incidunt laborum nulla quo ratione reiciendis rerum saepe
            sapiente sed sint, sit tempora veniam vero </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eum harum molestias quia tempora.
            Delectus, distinctio est eveniet</p>
        </article>
        <StaticImage src="../assets/images/about.jpg" alt="img" placeholder="blurred" />
      </section>
    </main>
    <div>about</div>
  </Layout>
)

export default About
