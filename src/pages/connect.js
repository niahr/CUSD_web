
import * as React from "react"
// import "../assets/about.scss"
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
            
                <div className="flex-container">

                <div className="flex-child quote">

        <div className="title-div">
          <h3 className="title-text"> Points of Contact </h3>
        </div>
      </div>
                
                <div class="contacts">
                    <div class = "row">
                    <article class="contact">
                        <img src={Grace}></img>
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
                    <img src={Grace}></img>
                        <div class="contact_info">
                            <div class="name">Grace Tamisiea</div>
                            <div class="major">Food Science</div>
                            <div class="position">Director of External Operations</div>
                            <div class="team">Operations</div>
                            <div class="links">

                            </div>
                        </div>
                    </article>
                    </div>

                    <div class = "row">
                    <article class="contact">
                    <img src={Grace}></img>
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
                    <img src={Grace}></img>
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

                    <div class = "row">
                    <article class="contact">
                    <img src={Grace}></img>
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
                    <img src={Grace}></img>
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

                </div>
                </div>
            <Footer/>
            <Connectwithus/>
        </main>
    )
}
export default Subteam