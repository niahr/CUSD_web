import React from 'react'
import "./about.scss"
import efficiency from '../../images/aboutimg/values/efficiency.svg'
import impact from '../../images/aboutimg/values/impact.svg'
import diversity from '../../images/aboutimg/values/diversity.svg'
import sustainability from '../../images/aboutimg/values/sustainability.svg'
import collaboration from '../../images/aboutimg/values/collaboration.svg'
import engagement from '../../images/aboutimg/values/engagement.svg'
import innovation from '../../images/aboutimg/values/innovation.svg'
import responsibility from '../../images/aboutimg/values/responsibility.svg'

const values = () => {
  return (
    <div className="flex-values">

      <div className="flex-child values">
        <h1 className="text">OUR VALUES</h1>
      </div>

      <div className="flex-child wholeValuesImg">

        <div className="column">
          <div className="frame bk1" >
            <img src={impact} className="indValuesImg" alt="Impact"></img>
            <div class="caption"> Impact </div>
          </div>

          <div className="frame bk2">
            <img src={collaboration} className="indValuesImg" alt="Collaboration"></img>
            <div class="caption"> Collaboration </div>
          </div>
        </div>

        <div className="column">
          <div className="frame bk2">
            <img src={diversity} className="indValuesImg" alt="Diversity"></img>
            <div class="caption"> Diversity </div>
          </div>

          <div className="frame bk3">
            <img src={responsibility} className="indValuesImg" alt="Responsibility"></img>
            <div class="caption"> Responsibility  </div>
          </div>
        </div>

        <div className="column bk3">
          <div className="frame efficiency">
            <img src={efficiency} className="indValuesImg" alt="Efficiency"></img>
            <div class="caption"> Efficiency</div>
          </div>

          <div className="frame bk2">
            <img src={innovation} className="indValuesImg" alt="Innovation"></img>
            <div class="caption"> Innovation</div>
          </div>
        </div>

        <div className="column">
          <div className="frame bk2">
            <img src={sustainability} className="indValuesImg" alt="Sustainability"></img>
            <div class="caption"> Sustainability</div>
          </div>

          <div className="frame bk1">
            <img src={engagement} className="indValuesImg" alt="Engagement"></img>
            <div class="caption"> Engagement </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default values
