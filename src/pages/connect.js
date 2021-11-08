
import * as React from "react"
import "../assets/about.scss"
import Footer from '../components/Footer'
import { Link } from "gatsby"
// import Clarkson from '../images/goat.jpg'
import Connectwithus from '../components/connectwithus'

const Subteam = () => {
    return (
        <main>
            <Link to="/"> Back to Main </Link>
            <Footer/>
            <Connectwithus/>
        </main>
    )
}
export default Subteam