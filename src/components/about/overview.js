import React from 'react'
import "./about.scss"
import Animate from './abtanimate'

const overview = () => {

  return (
    <><div className="title">
      <div className="text"><h1 className="text">ABOUT</h1></div>
    </div><div className="flex-container">

        <div className="flex-child quote">

        </div>

        <div className="flex-child purpose">
          <div className="purposeDiv">
            <article className="purposeText">
              <h2 className="purposeTitle">Purpose</h2>
              <p className="purposeDescription">To empower many people to make a sustainable impact within their own community.</p>

              <h2 className="purposeTitle">Mission</h2>
              <p className="purposeDescription">To challenge students to create dynamic and innovative solutions for economic, social, and ecological difficulties faced by the global community.</p>

              <h2 className="purposeTitle">Vision</h2>
              <p className="purposeDescription">
                At CUSD we aim to provide a community in which Cornell students can develop their skills, professionally engage with the real world, and contribute to the development of communities internationally.

              </p>
            </article>
          </div>
        </div>
      </div></>
  )
}

export default overview