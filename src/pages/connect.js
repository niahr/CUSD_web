
import * as React from "react"
import Footer from '../components/footer/Footer'
import Connectwithus from '../components/footer/connectwithus'
import "../components/connect/connect.css"
import Nav from '../components/navbar/nav'
import Parallax from "../components/parallax/parallax.js"
import LinkedIn from '../images/icons/linkedin.png'
import Email from '../images/icons/email.png'
import connectData from "../components/connect/connectData.js"
import connecthead from '../images/background_images/grouppic.png'
import connectmid from '../images/background_images/lilypads.jpg'


const Subteam = () => {
    const data = connectData.map((person, i) => {
        return i % 2 === 0 ? connectData.slice(i, i + 2) : null;
    }).filter(person => person != null);

    return (
        <main>
            <Nav />
            <Parallax image={connecthead} caption={"Get In Touch"} height={550}> </Parallax>

            <div className="flex-container">
                <div className="flex-child quote">
                    <div className="title-div">
                        <h3 className="title-text"> Points of Contact </h3>
                    </div>
                </div>

                <div class="contacts">
                    {data.map((people, i) => {
                        return (
                            <div key={i} class="row">
                                {people.map(person =>
                                    <>
                                        <article class="contact">

                                            <img className="headshot" alt={person.name} src={person.image} width="100px" height="auto"></img>
                                            <div class="contact_info">
                                                <div class="position">{person.position}</div>
                                                <div class="name">{person.name}</div>
                                                <div class="major">{person.major}</div>
                                                <div class="team">{person.team}</div>
                                                <div class="links">
                                                    <img alt="email" src={Email}></img>
                                                    <a href={person.email} className="email"> Email </a>
                                                    <img alt="linkedin" src={LinkedIn} width="21px" height="21px"></img>
                                                    <a href={person.linkedin} className="link">LinkedIn</a>
                                                </div>
                                            </div>
                                        </article>
                                    </>
                                )}
                            </div>
                        );
                    })}

                </div>
            </div>

            <Parallax image={connectmid} height={350}> </Parallax>
            <Footer />
            <Connectwithus />
        </main>
    )
}
export default Subteam