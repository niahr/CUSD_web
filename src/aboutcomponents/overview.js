import React from 'react'
import "../assets/about.scss"


const overview = () => {

  return (
    <div className="flex-container">

      <div className="flex-child quote">

        <div className="quoteDiv">
          <h3 className="quoteText">We said ‘we think we can do more, more than just solar.’ We knew we could make a greater impact with a broader understanding of sustainability. That’s when we made the decision to create Cornell University Sustainable Design.
            <div className="founder">
              – Jeremy Blum '13 </div> </h3>
        </div>
      </div>

      <div className="flex-child purpose" >
        <div className="purposeDiv">
          <article className="purposeText">
            <h2 className="purposeTitle">Purpose</h2>
            <p className="purposeDescription">Empowering many people to make a sustainable impact within their own community.</p>

            <h2 className="purposeTitle">Mission</h2>
            <p className="purposeDescription">Challenge students to create dynamic and innovative solutions for economic, social, and ecological difficulties faced by the global community.</p>

            <h2 className="purposeTitle">Vision</h2>
            <p className="purposeDescription">
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
