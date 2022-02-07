import React from 'react'
import * as test from "./content.css"
import "./content.css"
import joinimg from '../../images/background_images/cusdcornell.png'

const Content = () => {

  return (
    <div className="flex-container">


      <div className="text-container">
        <h2> Why Should You Join CUSD?</h2>
        <h5> You shouldn't xD XD XD XDDDDD XDDDX DX D jk plz do because of these
          well written reasons that are succinct and compelling: text text text
          text text text texttext texttext texttext texttext texttext text text texttext texttext texttext texttext texttext text
          text texttext texttext texttext texttext texttext textwell written reasons that are succinct and compelling: text text text
          text text text texttext texttext texttext texttext texttext text text texttext texttext texttext texttext texttext text
          text texttext texttext texttext texttext texttext textwell written reasons that are succinct and compelling: text text text
          text text text texttext texttext texttext texttext texttext text text texttext texttext texttext texttext texttext text
          text texttext texttext texttext tex
        </h5>
      </div>

      <div class="button-container">

        <div>
          <img src={joinimg} alt="joinimg" className="joinimg"></img>
        </div>

        <div className="joinButton">
          <a rel="noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSde1gix0npGShmcuuTwRyhxN20NTyP__oKlIGvDJJBl4rBSLw/viewform?usp=sf_link" target="_blank" className="joinButtonInner"> Apply Now!</a>
        </div>
      </div>

    </div>
  )
}
export default Content 