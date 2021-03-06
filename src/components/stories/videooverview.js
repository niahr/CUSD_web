import React from 'react'
import "../about/about.scss"


const overview = () => {

  return (
    <div className="flex-container">

      <div className="flex-child-video storyquote">

        <div className="storiesDiv">
          <meta charSet='utf-8' />
          <h3 className="storiesText"> CUSD is a platform for students to get experiences they cannot get from classrooms
            <div className="founder">
              – Jeremy Blum '13
            </div>
          </h3>
        </div>
      </div>

      <div className="flex-child-video storypurpose" >
        <div className="purposeDiv">
          <article className="purposeText">
            <div>
              <iframe width="100%" height="500px" frameborder="" title="vimeo-player" src="https://player.vimeo.com/video/126048968?h=e6aab752ec" allowfullscreen></iframe>
            </div>

            <h2 className="purposeTitle">Latest Member's Story</h2>
            <p className="purposeDescription">Stay tuned for Founding History, a story about one of CUSD's original founders, Jeremy Blum, and his amazing insights on the journey that made the organization what it is today.</p>

          </article>
        </div>
      </div>
    </div >
  )
}

export default overview
