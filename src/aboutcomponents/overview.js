import React from 'react'
import "../assets/about.scss"

const overview = () => {



  return (
    <div className="flex-container">

      <div className="flex-child quote">

        <div className="quoteDiv">
          <h3 className="quoteText">We said ‘we think we can do more, more than just solar.’ We knew we could make a greater impact with a broader understanding of sustainability. That’s when we made the decision to create Cornell University Sustainable Design.
            <br></br><br></br> – Jeremy Blum '13 </h3>
        </div>

      </div>

      <div className="flex-child purpose" >
        <div className="purposeDiv">
          <article>
            <h2>Purpose</h2>
            <p>Empowering many people to make a sustainable impact within their own community.</p>

            <h2>Mission</h2>
            <p>Challenge students to create dynamic and innovative solutions for economic, social, and ecological difficulties faced by the global community.</p>

            <h2>Vision</h2>
            <p>
              At CUSD we aim to provide a community in which Cornell students can develop their skills, professionally engage with the real world, and contribute to the development of communities internationally.
              Our organization is a diverse family of students with one common goal- to impact the global community through holistic sustainability. Through collaboration we create innovative ways to integrate technology and sustainability into community teams in a way that engages the surrounding community.
            </p>
          </article>
        </div>
      </div>
    </div >
  )
}

export default overview
