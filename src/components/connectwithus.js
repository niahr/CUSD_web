import React from 'react'
import tweet from '../images/icons/twitterconnect.png'
import face from '../images/icons/facebook.png'
import linked from '../images/icons/linkedconnect.png'
import insta from '../images/icons/instaconnect.png'

function ConnectFooter(props) {
  return (
    
    <div className="connecticons">

      <img src={tweet} alt="https://twitter.com/CUSD"/>
      <img src={face} alt="https://www.facebook.com/CUSustainableDesign/?fref=ts"/>
      <img src={linked} alt="https://www.linkedin.com/company/cornellusd"/>
      <img src={insta} alt="https://www.instagram.com/cusustainabledesign/?hl=en"/>

    </div>
  )
}
export default ConnectFooter