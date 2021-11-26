import * as React from "react"
import Footer from '../components/footer/footer'
import { Link } from "gatsby"
import Connectwithus from '../components/footer/connectwithus'
import Team from '../components/landing/weareateam'
import Buildanimpact from '../components/landing/buildanimpact'
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import tech from "../images/background_images/cornelltech.jpg"
import fpc from "../images/background_images/FPCNew.png"

import "../components/landing/index.css";

// markup
const IndexPage = () => {
  return (
    <main>
      <Nav />
      <Parallax
        image={tech}
        caption={"Cornell University Sustainable Design"}
        caption2={"Positively Impacting Communities Through Sustainability"}
        height={550} />
      <Team />
      <Buildanimpact />
      <Parallax
        image={fpc}
        height={350} />
      <Footer />
      <Connectwithus />
    </main>
  )
}

export default IndexPage
