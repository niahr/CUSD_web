import * as React from "react"
import '../components/projects/project.module.css'
import Footer from '../components/footer/footer'
import Connectwithus from '../components/footer/connectwithus'
import Team from '../components/landing/weareateam'
import Buildanimpact from '../components/landing/buildanimpact'
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import tech from "../images/background_images/cornelltech.jpg"
import fpc from "../images/background_images/FPCNew.png"

import "../components/landing/index.css";

import { Lines } from 'react-preloaders';

// markup
const IndexPage = () => {
  return (
    <main>
      <Lines color={'#81C36D'} />
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