import * as React from "react"
import "../assets/about.scss"
import Nav from '../components/nav'
import Parallax from "../aboutcomponents/parallax.js"
import Overview from '../aboutcomponents/overview.js'
import { Link } from "gatsby"
import abouthead from '../images/aboutimg/ps9.jpg'
import aboutmid1 from '../images/aboutimg/ps3.jpg'
import aboutmid2 from '../images/aboutimg/ps2.jpg'
import Connectwithus from '../components/connectwithus'
import Footer from '../components/footer.js'
import Values from '../aboutcomponents/values.js'
import ValuePicture from "../images/aboutimg/values.png"


const AboutPage = () => {
    return (

        <main>
            <Nav />
            <Link to="/"> Back to Main </Link>
            <Link to="/stories/"> Go to Stories </Link>
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