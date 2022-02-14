import React from 'react'
import "./content.css"
import joinimg from '../../images/background_images/cusdcornell.png'

const Information = () => {

  return (
    <div>

      <h1 id="quicktitle"> What Do You Do Once You're In? </h1>

      <div>
        <div className="information">

          <div class="asdasd">
            <div className="info-text">
              <h1 className="change"> Workshops </h1>

              <img className="help" src={joinimg}></img>

              <h5> CUSD’s 200+ members work in close collaboration with their internal project team, each
                tasked with a specific sustainable goal or project. But beyond their own subteam, members
                ave access to a multitude of events and community building opportunities throughout the
                organization. Each semester, CUSD members host workshops for other students to gain knowledge
                about a wide variety of sustainable topics. Along with these, the Mid-semester and Final
                Reviews allow each subteam to present their project plans, execution, and accomplishments to
                all of CUSD. </h5>

            </div>

          </div>


          <div className="info-text">

            <h1 className="change"> Mid Semester Review </h1>

            <img className="help" src={joinimg}></img>

            <h5> CUSD’s 200+ members work in close collaboration with their internal project team, each
              tasked with a specific sustainable goal or project. But beyond their own subteam, members
              ave access to a multitude of events and community building opportunities throughout the
              organization. Each semester, CUSD members host workshops for other students to gain knowledge
              about a wide variety of sustainable topics. Along with these, the Mid-semester and Final
              Reviews allow each subteam to present their project plans, execution, and accomplishments to
              all of CUSD. </h5></div>

          <div className="info-text">

            <h1 className="change"> Final Review </h1>

            <img className="help" src={joinimg}></img>

            <h5> CUSD’s 200+ members work in close collaboration with their internal project team, each
              tasked with a specific sustainable goal or project. But beyond their own subteam, members
              ave access to a multitude of events and community building opportunities throughout the
              organization. Each semester, CUSD members host workshops for other students to gain knowledge
              about a wide variety of sustainable topics. Along with these, the Mid-semester and Final
              Reviews allow each subteam to present their project plans, execution, and accomplishments to
              all of CUSD. </h5></div>

        </div>
      </div>

    </div>
  )
}
export default Information