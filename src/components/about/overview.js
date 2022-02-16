import React from 'react'
import "./about.scss"


const overview = () => {

  return (
    <div className="flex-container">

      <div className="flex-child quote">

        <div className="quoteDiv">
          <h3 className="quoteText">{"We said \u0022we think we can do more, more than just solar.\u0022 We knew we could make a greater impact with a broader understanding of sustainability. That\u0027s when we made the decision to create Cornell University Sustainable Design."}
            <div className="founder">
              {"\u2014 Jeremy Blum '13"}
            </div>
          </h3>
        </div>
      </div>

      <div className="flex-child purpose" >
        <div className="purposeDiv">
          <article className="purposeText">
            <h2 className="purposeTitle">Purpose</h2>
            <p className="purposeDescription">To empower many people to make a sustainable impact within their own community.</p>

            <h2 className="purposeTitle">Mission</h2>
            <p className="purposeDescription">To challenge students to create dynamic and innovative solutions for economic, social, and ecological difficulties faced by the global community.</p>

            <h2 className="purposeTitle">Vision</h2>
            <p className="purposeDescription">
              At CUSD we aim to provide a community in which Cornell students can develop their skills, professionally engage with the real world, and contribute to the development of communities internationally.
              As an umbrella for several project teamsa, our organization is a diverse family of 200+ students with one common goal- to impact the global community through holistic sustainability. 
              Through collaboration with entities like Tompkins Consolidated Area Transit and the Ithaca Sustainability Office, we create innovative ways to integrate technology and sustainability into community teams in a way that engages the surrounding community.
            </p>
          </article>
        </div>
      </div>
    </div >
  )
}

export default overview
