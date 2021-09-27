import * as React from "react"
import "../assets/about.scss"
import ValuePicture from "../images/values.png"
import Parallax from "../aboutcomponents/parallax.js"
import Overview from '../aboutcomponents/overview.js'
import { Link } from "gatsby"
import Clarkson from '../images/goat.jpg'
import Gries from '../images/eh.jpg'
import White from '../images/goat2.jpg'
import Footer from '../components/connectwithus.js'
import Values from '../aboutcomponents/values.js'



const AboutPage = () => {
    return (
        //Add parallax in between Link and About 
        <main>
            <Link to="/"> Back to Main </Link>
            <Parallax image={Clarkson} caption={"About"} height={250}> </Parallax>
            <Overview />
            <Parallax image={White} height={100}> </Parallax>
            <Values image={ValuePicture}> </Values>
            <Parallax image={Gries} height={100}> </Parallax>
            <Footer />
        </main>
    )
}
export default AboutPage