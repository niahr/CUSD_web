import React from 'react'
import "../assets/about.scss"
import video from '../images/givemeup.mp4'


const overview = () => {

  return (
    <div className="flex-container">

      <div className="flex-child storyquote">

        <div className="storiesDiv">
          <h3 className="storiesText"> CUSD is a platform for students to get experiences they cannot get from classrooms
            <br></br><br></br> – Jeremy Blum '13 </h3>
        </div>
      </div>

      <div className="flex-child storypurpose" >
        <div className="purposeDiv">
          <article>

            <div>
              <video width="800" height="700">
                <source src={video} type="video/mp4"></source>
              </video>
            </div>

            <h2>Latest Member's Story</h2>
            <p>Stay tuned for Founding History, a story about one of CUSD's original founders, Jeremy Blum, and his amazing insights on the journey that made the organization what it is today.</p>

          </article>
        </div>
      </div>
    </div >
  )
}

export default overview
