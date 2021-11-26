import * as React from "react"
import "../components/about/about.scss"
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import Overview from '../components/about/overview.js'
import { Link } from "gatsby"
import abouthead from '../images/aboutimg/ps9.jpg'
import aboutmid1 from '../images/aboutimg/ps3.jpg'
import aboutmid2 from '../images/aboutimg/ps2.jpg'
import Connectwithus from '../components/footer/connectwithus'
import Footer from '../components/footer/footer.js'
import Values from '../components/about/values.js'
import ValuePicture from "../images/aboutimg/values.png"


const AboutPage = () => {
    return (

        <main>
            <Nav />
            <Parallax image={abouthead} caption={"About"} height={250}> </Parallax>
            <Overview />
            <Parallax image={aboutmid1} height={200}> </Parallax>
            <Values image={ValuePicture}> </Values>
            <Parallax image={aboutmid2} height={200}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
export default AboutPage