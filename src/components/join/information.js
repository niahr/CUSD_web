import React from 'react'
import "./content.css"
import joinimg from '../../images/background_images/cusdcornell.png'

const Information = () => {

  return (
    <div>

      <h1 id="info-title"> A Typical CUSD Semester </h1>

      <div>
        <div className="information">

          <div class="info-text top">

            <h2 className="card-title"> Overview </h2>

            <h6 className="info-subtext"> CUSD’s 200+ members work in close collaboration with their internal project team, each
              tasked with a specific sustainable goal or project. But beyond their own subteam, members
              have access to a multitude of events and community building opportunities throughout the
              organization. </h6>

          </div>

          <div className="info-text">
            <h2 className="card-title"> Workshops </h2>


            <h6 className="info-subtext"> Each semester, members of CUSD host workshops for other students to gain knowledge in a wide
              variety of sustainable topics. Past semester’s topics have ranged from “Sustainable Fashion and
              Thrifting” to “Banks and Sustainable Finance” to Technical Interview prep. CUSD members have the
              opportunity to attend any of these workshops throughout the semester, ask questions, and gain insight
              into a specific and no longer unfamiliar sector of sustainability. </h6>

          </div>


          <div className="info-text">

            <h2 className="card-title"> Mid Semester Review </h2>


            <h6 className="info-subtext"> The Mid-Semester Review allows each subteam of CUSD to present their project plan and current progress toward its execution to the rest of the project team. Not only do you get to showcase your hard work but you get insight into what other teams have been building. It’s an especially valuable experience to gain inspiration from other teams to improve your own project’s procedure or expand its sustainable goals and celebrate CUSD’s progress towards its mission.
            </h6></div>

          <div className="info-text bottom">

            <h2 className="card-title"> Final Review </h2>


            <h6 className="info-subtext">The Final Review, which occurs at the end of every semester, is a continuation of the information shared during the Mid-Semester Review by each of CUSD’s internal project teams. The entire CUSD community comes together at this event to recognize each subteam’s achievements throughout the past four months and commemorate the exceptional teamwork and dedication of each member on CUSD.
            </h6>

          </div>

        </div>

      </div>

    </div>


  )
}
export default Information