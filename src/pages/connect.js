
import * as React from "react"
import "../assets/about.scss"
import Footer from '../components/Footer'
import { Link } from "gatsby"
// import Clarkson from '../images/goat.jpg'
import Connectwithus from '../components/connectwithus'
import "../components/connect.css"
import Nav from '../components/nav'
import Parallax from "../aboutcomponents/parallax.js"
import abouthead from '../images/aboutimg/ps9.jpg'
import Grace from '../images/contact/GraceT.jpg'

const Subteam = () => {
    return (
        <main>
            <Nav />
            <Link to="/"> Back to Main </Link>
            <Parallax image={abouthead} caption={"Get In Touch"} height={250}> </Parallax>
            
            <div class="contacts">
                <article class="contact">
                    <img src={Grace} width="75px" height="75px"></img>
                    <div class="contact_info">
                        <div class="name">Grace Tamisiea</div>
                        <div class="major">Food Science</div>
                        <div class="position">Operations</div>
                        <div class="team">Operations</div>
                        <div class="links">

                        </div>
                    </div>
                </article>
                <article class="contact">
                <img src={Grace} width="75px" height="75px"></img>
                    <div class="contact_info">
                        <div class="name">Grace Tamisiea</div>
                        <div class="major">Food Science</div>
                        <div class="position">Operations</div>
                        <div class="team">Operations</div>
                        <div class="links">

                        </div>
                    </div>
                </article>
                <article class="contact">
                <img src={Grace} width="75px" height="75px"></img>
                    <div class="contact_info">
                        <div class="name">Grace Tamisiea</div>
                        <div class="major">Food Science</div>
                        <div class="position">Operations</div>
                        <div class="team">Operations</div>
                        <div class="links">

                        </div>
                    </div>
                </article>
                <article class="contact">
                <img src={Grace} width="75px" height="75px"></img>
                    <div class="contact_info">
                        <div class="name">Grace Tamisiea</div>
                        <div class="major">Food Science</div>
                        <div class="position">Operations</div>
                        <div class="team">Operations</div>
                        <div class="links">

                        </div>
                    </div>
                </article>
                <article class="contact">
                <img src={Grace} width="75px" height="75px"></img>
                    <div class="contact_info">
                        <div class="name">Grace Tamisiea</div>
                        <div class="major">Food Science</div>
                        <div class="position">Operations</div>
                        <div class="team">Operations</div>
                        <div class="links">

                        </div>
                    </div>
                </article>
                <article class="contact">
                <img src={Grace} width="75px" height="75px"></img>
                    <div class="contact_info">
                        <div class="name">Grace Tamisiea</div>
                        <div class="major">Food Science</div>
                        <div class="position">Operations</div>
                        <div class="team">Operations</div>
                        <div class="links">

                        </div>
                    </div>
                </article>

            </div>
            <Footer/>
            <Connectwithus/>
        </main>
    )
}
export default Subteam