import * as React from "react"
import '../projects/project.module.css'
import Footer from '../footer/footer'
import Connectwithus from '../footer/connectwithus'
import Team from '../landing/weareateam'
import Buildanimpact from '../landing/buildanimpact'
import Nav from '../navbar/nav'
import Parallax from "../parallax/parallax.js"
import tech from "../../images/background_images/cornelltech.jpg"
import fpc from "../../images/background_images/FPCNew.png"

import "../landing/index.css";

export default function home() {
   return(
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