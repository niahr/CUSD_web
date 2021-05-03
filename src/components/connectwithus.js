import React from 'react'
import tweet from '../images/icons/twitterconnect.png'
import face from '../images/icons/facebookconnect.png'
import linked from '../images/icons/linkedconnect.png'
import insta from '../images/icons/instaconnect.png'



const img = {
  marginLeft: 10
}
const icons = {
  marginLeft: 10

}
const Footer = () => {
  return (
    <div>
      <div className="connecticons">
        <h1> Connect with us</h1>
        <div style={icons}>
          <img src={tweet} alt="https://twitter.com/CUSD" width="100px" height="100px" />
          <img src={face} alt="https://www.facebook.com/CUSustainableDesign/?fref=ts" width="100px" height="100px"/>
          <img src={linked} alt="https://www.linkedin.com/company/cornellusd" width="100px" height="100px"/>
          <img src={insta} alt="https://www.instagram.com/cusustainabledesign/?hl=en" width="100px" height="100px"/>
        </div>
      </div>
      <p>&copy; 2011-2021 Cornell University Sustainable Design</p>
    </div>
  )
}
export default Footer