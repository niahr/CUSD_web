
import * as React from "react"
import Footer from '../components/footer/Footer'
import { Link } from "gatsby"
import Connectwithus from '../components/footer/connectwithus'
import "../components/connect.css"
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import abouthead from '../images/aboutimg/ps9.jpg'
import GraceT from '../images/contact/GraceT.jpg'
import ErinH from '../images/contact/ErinH.png'
import FrannieL from '../images/contact/FrannieL.png'
import BonnyW from '../images/contact/BonnyW.jpg'
import RyanT from '../images/contact/RyanT.png'
import DakotaC from '../images/contact/DakotaC.png'
import LinkedIn from '../images/icons/linkedin.png'
import Email from '../images/icons/email.png'

const Subteam = () => {
    return (
        <main>
            <Nav />
            <Parallax image={abouthead} caption={"Get In Touch"} height={250}> </Parallax>

            <div className="flex-container">

                <div className="flex-child quote">

                    <div className="title-div">
                        <h3 className="title-text"> Points of Contact </h3>
                    </div>
                </div>

                <div class="contacts">
                    <div class="row">
                        <article class="contact">
                            <img src={GraceT} width="100px" height="100px"></img>
                            <div class="contact_info">
                                <div class="name">Grace Tamisiea</div>
                                <div class="major">Food Science</div>
                                <div class="position">Operations</div>
                                <div class="team">Operations</div>
                                <div class="links">
                                    <img src={Email}></img>
                                    <a href="mailto:gmt59@cornell.edu" className="email"> Email </a>
                                    <img src={LinkedIn} width="21px" height="21px"></img>
                                    <a href="https://www.linkedin.com/in/gracetamisiea/" className="link">LinkedIn</a>
                                </div>
                            </div>
                        </article>
                        <article class="contact">
                            <img className={"headshot"} src={GraceT} width="100px" height="100px"></img>
                            <div class="contact_info">
                                <div class="name">Grace Tamisiea</div>
                                <div class="major">Food Science</div>
                                <div class="position">Director of External Operations</div>
                                <div class="team">Operations</div>
                                <div className="links">
                                    <img src={Email}></img>
                                    <a href="mailto:gmt59@cornell.edu" className="email"> Email </a>
                                    <img src={LinkedIn} width="21px" height="21px"></img>
                                    <a href="https://www.linkedin.com/in/gracetamisiea/" className="link">LinkedIn</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="row">
                        <article class="contact">
                            <img src={ErinH} width="125px" ></img>
                            <div class="contact_info">
                                <div class="name">Erin Huang</div>
                                <div class="major">Chemical Engineering</div>
                                <div class="position">Directior of Internal Operations</div>
                                <div class="team">Operations</div>
                                <div class="links">
                                    <img src={Email}></img>
                                    <a href="mailto:eeh73@cornell.edu" className="email"> Email </a>
                                    <img src={LinkedIn} width="21px" height="21px"></img>
                                    <a href="https://www.linkedin.com/in/gracetamisiea/" className="link">LinkedIn</a>
                                </div>
                            </div>
                        </article>
                        <article class="contact">
                            <img src={FrannieL} width="100px" ></img>
                            <div class="contact_info">
                                <div class="name">Frances Lach</div>
                                <div class="major">Information Science</div>
                                <div class="position">Team Lead</div>
                                <div class="team">Aquaculture</div>
                                <div class="links">
                                    <img src={Email}></img>
                                    <a href="mailto:gmt59@cornell.edu" className="email"> Email </a>
                                    <img src={LinkedIn} width="21px" height="21px"></img>
                                    <a href="https://www.linkedin.com/in/gracetamisiea/" className="link">LinkedIn</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div class="row">
                        <article class="contact">
                            <img src={RyanT} width="100px" ></img>
                            <div class="contact_info">
                                <div class="name">Ryan Thompson</div>
                                <div class="major">Economics</div>
                                <div class="position">Team Lead</div>
                                <div class="team">ICN Policy</div>
                                <div class="links">
                                    <img src={Email}></img>
                                    <a href="mailto:gmt59@cornell.edu" className="email"> Email </a>
                                    <img src={LinkedIn} width="21px" height="21px"></img>
                                    <a href="https://www.linkedin.com/in/gracetamisiea/" className="link">LinkedIn</a>
                                </div>
                            </div>
                        </article>
                        <article class="contact">
                            <img src={DakotaC} width="100px"></img>
                            <div class="contact_info">
                                <div class="name">Dakota Caruso</div>
                                <div class="major">Int. Agriculture and Rural Dev.</div>
                                <div class="position">Team Lead</div>
                                <div class="team">Soil Factory</div>
                                <div class="links">
                                    <   img src={Email}></img>
                                    <a href="mailto:gmt59@cornell.edu" className="email"> Email </a>
                                    <img src={LinkedIn} width="21px" height="21px"></img>
                                    <a href="https://www.linkedin.com/in/gracetamisiea/" className="link">LinkedIn</a>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>

            <Parallax image={abouthead} height={150}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
export default Subteam