import React from 'react'
import "./content.css"

const Content = () => {

  return (
    <div className="join-container">

      <div className="jointextcontainer">
        <div>
          <h2 id="joinTitle"> Why Should You Join CUSD?</h2>
          <h5 className="joinSubtext">Interested in joining a team of like-minded individuals, driven to build more sustainable
            communities worldwide? Looking to be challenged and collaborate with students from every college
            to construct interdisciplinary solutions to the modern day’s most consequential sustainable issues?
            CUSD is looking for people like you!</h5>
        </div>

        <div className="applycontainer">
          <h2 id="joinTitle">How to Apply:</h2>

          <ol>
            <h5 className="joinSubtext"><li>Take a look at our current project teams here and determine which project areas interest you.</li>
              <li>Make a wishlist of your top 5 favorite teams.</li>
              <li>Click the button below and apply to those teams!</li></h5>
          </ol>

        </div>

      </div>


      <div class="join-button-container">

        <div className="joinButton">
          <a rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSde1gix0npGShmcuuTwRyhxN20NTyP__oKlIGvDJJBl4rBSLw/viewform?usp=sf_link" target="_blank" className="joinButtonInner"> Apply Here!</a>
        </div>
      </div>
    </div >
  )
}
export default Content 